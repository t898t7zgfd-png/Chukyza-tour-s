import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";

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

    const systemPrompt = `You are the lead trail master at Chukyza Tours in Mazamitla, Jalisco.
We have 3 tours:
1) "forest-gauntlet" (Hardcore, pro mud, steep rock crawling, 4hrs)
2) "twilight-run" (Most popular, sunset ridge, night LED ride, forest bonfire, 6hrs)
3) "scenic-ridge" (Relaxed, scenic views, pine forest, beginner/family friendly, 3hrs)

Analyze the user's request and pick the single best tourId out of ['forest-gauntlet', 'twilight-run', 'scenic-ridge'].
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
  if (text.includes("noche") || text.includes("fogata") || text.includes("night") || text.includes("bonfire")) {
    return {
      tourId: "twilight-run",
      reason:
        lang === "es"
          ? 'La "Ruta del Crepúsculo" es perfecta para ti: incluye el atardecer en las cumbres, luces LED de alta potencia y culmina en la fogata gigante con asado.'
          : 'The "Twilight Run" is tailored for you: golden hour sunset peaks, powerful LED light bars, and an authentic forest bonfire.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Trae chamarra abrigadora para la fogata de la noche."
          : "Guide Tip: Bring a warm jacket for the mountain campsite bonfire.",
    };
  } else if (text.includes("familia") || text.includes("tranquilo") || text.includes("family") || text.includes("scenic")) {
    return {
      tourId: "scenic-ridge",
      reason:
        lang === "es"
          ? 'Te recomendamos "Cresta Panorámica": un recorrido suave por el pinar La Toscana con paradas fotográficas en los miradores principales.'
          : 'We match you with "Scenic Ridge": a smooth, comfortable tour through La Toscana pine forest with panoramic overlook stops.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Incluye parada en la cafetería artesanal de la montaña."
          : "Guide Tip: Includes a stop at the mountain coffee house.",
    };
  } else {
    return {
      tourId: "forest-gauntlet",
      reason:
        lang === "es"
          ? 'El "Guantelete del Bosque" es tu mejor opción: pura acción entre lodo profundo, grietas de rocas y brechas de aceleración extrema.'
          : '"Forest Gauntlet" fits your drive: intense mud pits, rock crawling, and maximum wheel spinning.',
      customTip:
        lang === "es"
          ? "Tip del Guía: Incluimos paquete de grabación GoPro en HD."
          : "Guide Tip: GoPro HD video package is included.",
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
