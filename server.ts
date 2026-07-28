import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import { requireAuth, AuthRequest } from "./src/middleware/auth.ts";
import { getOrCreateUser } from "./src/db/users.ts";
import { db } from "./src/db/index.ts";
import { bookings, savedRoutes, users } from "./src/db/schema.ts";
import { eq, and, desc } from "drizzle-orm";

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK on server-side
const apiKey = process.env.GEMINI_API_KEY;
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// User Profile & Database Sync Endpoint
app.get("/api/me", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    const email = req.user?.email || "guest@chukyza.com";
    const name = req.user?.name || req.user?.email?.split("@")[0] || "Rider";

    if (!uid) {
      return res.status(400).json({ error: "Missing UID" });
    }

    const dbUser = await getOrCreateUser(uid, email, name);

    // Fetch user bookings & saved routes
    const userBookings = await db
      .select()
      .from(bookings)
      .where(eq(bookings.userId, dbUser.id))
      .orderBy(desc(bookings.createdAt));

    const userSavedRoutes = await db
      .select()
      .from(savedRoutes)
      .where(eq(savedRoutes.userId, dbUser.id));

    return res.json({
      user: dbUser,
      bookings: userBookings,
      savedRoutes: userSavedRoutes,
    });
  } catch (error: any) {
    console.error("Error in /api/me:", error);
    return res.status(500).json({ error: "Failed to fetch user profile" });
  }
});

// Bookings Endpoints
app.get("/api/bookings", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    if (!uid) return res.status(400).json({ error: "Missing UID" });

    const dbUser = await getOrCreateUser(uid, req.user?.email || "");
    const list = await db
      .select()
      .from(bookings)
      .where(eq(bookings.userId, dbUser.id))
      .orderBy(desc(bookings.createdAt));

    return res.json(list);
  } catch (error: any) {
    console.error("Error GET /api/bookings:", error);
    return res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

app.post("/api/bookings", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    if (!uid) return res.status(400).json({ error: "Missing UID" });

    const { tourId, packageId, date, guests, vehicleType, notes } = req.body;
    if (!tourId || !date) {
      return res.status(400).json({ error: "tourId and date are required" });
    }

    const dbUser = await getOrCreateUser(uid, req.user?.email || "");

    const newBooking = await db
      .insert(bookings)
      .values({
        userId: dbUser.id,
        tourId,
        packageId: packageId || null,
        date,
        guests: Number(guests) || 1,
        vehicleType: vehicleType || "Can-Am Maverick X3",
        notes: notes || "",
        status: "confirmed",
      })
      .returning();

    return res.status(201).json(newBooking[0]);
  } catch (error: any) {
    console.error("Error POST /api/bookings:", error);
    return res.status(500).json({ error: "Failed to create booking" });
  }
});

// Saved Routes Endpoints
app.get("/api/saved-routes", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    if (!uid) return res.status(400).json({ error: "Missing UID" });

    const dbUser = await getOrCreateUser(uid, req.user?.email || "");
    const list = await db
      .select()
      .from(savedRoutes)
      .where(eq(savedRoutes.userId, dbUser.id));

    return res.json(list);
  } catch (error: any) {
    console.error("Error GET /api/saved-routes:", error);
    return res.status(500).json({ error: "Failed to fetch saved routes" });
  }
});

app.post("/api/saved-routes", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    if (!uid) return res.status(400).json({ error: "Missing UID" });

    const { tourId } = req.body;
    if (!tourId) return res.status(400).json({ error: "tourId is required" });

    const dbUser = await getOrCreateUser(uid, req.user?.email || "");

    // Check if already saved
    const existing = await db
      .select()
      .from(savedRoutes)
      .where(and(eq(savedRoutes.userId, dbUser.id), eq(savedRoutes.tourId, tourId)));

    if (existing.length > 0) {
      return res.json(existing[0]);
    }

    const created = await db
      .insert(savedRoutes)
      .values({
        userId: dbUser.id,
        tourId,
      })
      .returning();

    return res.status(201).json(created[0]);
  } catch (error: any) {
    console.error("Error POST /api/saved-routes:", error);
    return res.status(500).json({ error: "Failed to save route" });
  }
});

app.delete("/api/saved-routes/:tourId", requireAuth, async (req: AuthRequest, res) => {
  try {
    const uid = req.user?.uid;
    if (!uid) return res.status(400).json({ error: "Missing UID" });

    const tourId = req.params.tourId;
    const dbUser = await getOrCreateUser(uid, req.user?.email || "");

    await db
      .delete(savedRoutes)
      .where(and(eq(savedRoutes.userId, dbUser.id), eq(savedRoutes.tourId, tourId)));

    return res.json({ success: true });
  } catch (error: any) {
    console.error("Error DELETE /api/saved-routes:", error);
    return res.status(500).json({ error: "Failed to delete saved route" });
  }
});

// Route Recommendation API
app.post("/api/recommend-route", async (req, res) => {
  try {
    const { query, lang } = req.body;
    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    if (!ai) {
      return res.json(getFallbackMatch(query, lang));
    }

    const systemPrompt = `You are the lead trail master at Chukyza Tours (-MAZAVENTURA-) in Mazamitla, Jalisco.
We have 8 official tours:
1) "sierra-del-tigre-1h": -MAZAVENTURA- / "Mirador de la Sierra del Tigre" (1 Hora)
2) "sierra-tigre-valle-juarez-2h": -MAZAVENTURA- / "Mirador de la Sierra del Tigre" / "Mirador Sierra del Tigre"-Valle de Juárez / Malecón "Presa" Valle de Juárez (2 Horas)
3) "corazon-aguacatera-hacienda-1h": -MAZAVENTURA- / "Mirador Corazón de la Aguacatera" / "Hacienda Abandonada" (1 Hora)
4) "cascada-el-salto-2h": -MAZAVENTURA- / "Cascada el Salto" (2 Horas)
5) "mirador-dos-aguas-1h": -MAZAVENTURA- / (Mirador "Dos Aguas") (1 Hora)
6) "dos-aguas-barranca-hacienda-2h": -MAZAVENTURA- / (Mirador "Dos Aguas") / "Barranca Verde" / "Hacienda Abandonada" (2 Horas)
7) "camino-real-del-tigre-3h": -MAZAVENTURA- / "CAMINO REAL DEL TIGRE" (3 Horas)
8) "puerta-del-cielo-la-chuta": -MAZAVENTURA- / (Mirador "Puerta del Cielo") / (Cantina "La Chuta Parada Obligatoria") (2 Horas)

Analyze the user's request and pick the single best tourId out of ['sierra-del-tigre-1h', 'sierra-tigre-valle-juarez-2h', 'corazon-aguacatera-hacienda-1h', 'cascada-el-salto-2h', 'mirador-dos-aguas-1h', 'dos-aguas-barranca-hacienda-2h', 'camino-real-del-tigre-3h', 'puerta-del-cielo-la-chuta'].
Respond in JSON format with fields:
- tourId: string
- reason: concise 2-sentence explanation in language '${lang || 'es'}'
- customTip: a 1-sentence pro tip from the lead guide in '${lang || 'es'}'`;

    const response = await ai.models.generateContent({
      model: "gemini-3.6-flash",
      contents: query,
      config: {
        systemInstruction: systemPrompt,
        responseMimeType: "application/json",
      },
    });

    const jsonText = response.text?.trim();
    if (jsonText) {
      const parsed = JSON.parse(jsonText);
      return res.json(parsed);
    }

    return res.json(getFallbackMatch(query, lang));
  } catch (error) {
    console.error("Gemini route recommendation error:", error);
    return res.json(getFallbackMatch(req.body.query || "", req.body.lang || "es"));
  }
});

function getFallbackMatch(query: string, lang: string) {
  const text = query.toLowerCase();
  if (text.includes("cantina") || text.includes("chuta") || text.includes("puerta") || text.includes("cielo")) {
    return {
      tourId: "puerta-del-cielo-la-chuta",
      reason:
        lang === "es"
          ? 'La ruta "Puerta del Cielo & Cantina La Chuta" es perfecta: vistas celestiales sobre las nubes y parada obligatoria en la cantina tradicional.'
          : 'The "Puerta del Cielo & Cantina La Chuta" route is ideal: heavenly cloud vistas and a mandatory traditional cantina stop.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Disfruta de las bebidas artesanales regionales en la cantina."
          : "Guide Tip: Enjoy traditional regional craft beverages at the cantina.",
    };
  } else if (text.includes("cascada") || text.includes("salto") || text.includes("waterfall")) {
    return {
      tourId: "cascada-el-salto-2h",
      reason:
        lang === "es"
          ? 'Te recomendamos "Cascada El Salto" (2 Horas): un recorrido aventurero que cruza cañadas y ríos hasta la caída de agua.'
          : 'We recommend "Cascada El Salto" (2 Hours): an adventurous ride crossing rivers and mountain gorges to the waterfall.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Trae calzado cómodo para acercarte a la caída de agua."
          : "Guide Tip: Wear comfortable shoes for walking near the waterfall.",
    };
  } else if (text.includes("camino real") || text.includes("3 hora") || text.includes("3 hour") || text.includes("larga")) {
    return {
      tourId: "camino-real-del-tigre-3h",
      reason:
        lang === "es"
          ? 'El "CAMINO REAL DEL TIGRE" (3 Horas) es tu mejor opción para una travesía profunda y desafiante por la serranía.'
          : '"CAMINO REAL DEL TIGRE" (3 Hours) is your top choice for a long, deep off-road mountain journey.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Incluye refrigerio en la montaña y fotos HD."
          : "Guide Tip: Includes mountain refreshments and HD photography.",
    };
  } else {
    return {
      tourId: "sierra-tigre-valle-juarez-2h",
      reason:
        lang === "es"
          ? 'Te recomendamos el circuito "Mirador Sierra del Tigre & Presa Valle de Juárez" (2 Horas): la combinación perfecta de cumbres y lago.'
          : 'We recommend "Sierra del Tigre & Valle de Juárez Dam" (2 Hours): the perfect blend of summit peaks and lakefront views.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Es nuestra ruta más popular de 2 horas."
          : "Guide Tip: Our most popular 2-hour signature circuit.",
    };
  }
}

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
