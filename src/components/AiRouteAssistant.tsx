import React, { useState } from 'react';
import { Language } from '../types';
import { Sparkles, Send, Bot, Compass, ArrowRight, Loader2 } from 'lucide-react';

interface AiRouteAssistantProps {
  lang: Language;
  onSelectRecommendedTour: (tourId: string) => void;
}

export const AiRouteAssistant: React.FC<AiRouteAssistantProps> = ({
  lang,
  onSelectRecommendedTour,
}) => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<{
    tourId: string;
    reason: string;
    customTip: string;
  } | null>(null);

  const presets = [
    {
      label: lang === 'es' ? '🔥 Noche, Fogata y Lodo' : '🔥 Night, Bonfire & Mud',
      query: 'Quiero una aventura nocturna con lodo, luces LED y terminar en una fogata con carne asada.',
    },
    {
      label: lang === 'es' ? '👨‍👩‍👧‍👦 Familiar con Niños' : '👨‍👩‍👧‍👦 Family with Kids',
      query: 'Busco un recorrido tranquilo y seguro para mi familia con vistas bonitas y fotos.',
    },
    {
      label: lang === 'es' ? '🏎️ Adrenalina Extrema Pro' : '🏎️ Hardcore Extreme Adrenaline',
      query: 'Somos pilotos experimentados buscando la ruta más difícil con lodo profundo y brechas rocosas.',
    },
  ];

  const handleAskAi = async (e?: React.FormEvent, customQuery?: string) => {
    if (e) e.preventDefault();
    const queryToUse = customQuery || prompt;
    if (!queryToUse.trim()) return;

    setLoading(true);
    setRecommendation(null);

    try {
      // Call server backend or client logic for Gemini matching
      const response = await fetch('/api/recommend-route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryToUse, lang }),
      });

      if (response.ok) {
        const data = await response.json();
        setRecommendation(data);
      } else {
        // Fallback intelligent matching if endpoint is building
        generateFallbackRecommendation(queryToUse);
      }
    } catch {
      generateFallbackRecommendation(queryToUse);
    } finally {
      setLoading(false);
    }
  };

  const generateFallbackRecommendation = (q: string) => {
    const text = q.toLowerCase();
    if (text.includes('noche') || text.includes('fogata') || text.includes('night') || text.includes('bonfire')) {
      setRecommendation({
        tourId: 'twilight-run',
        reason:
          lang === 'es'
            ? 'La "Ruta del Crepúsculo" es perfecta para ti: incluye el atardecer en las cumbres, luces LED de alta potencia y culmina en la fogata gigante con asado.'
            : 'The "Twilight Run" is tailored for you: golden hour sunset peaks, powerful LED light bars, and an authentic forest bonfire.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Trae chamarra abrigadora para la fogata de la noche.'
            : 'Guide Tip: Bring a warm jacket for the mountain campsite bonfire.',
      });
    } else if (text.includes('familia') || text.includes('tranquilo') || text.includes('family') || text.includes('scenic')) {
      setRecommendation({
        tourId: 'scenic-ridge',
        reason:
          lang === 'es'
            ? 'Te recomendamos "Cresta Panorámica": un recorrido suave por el pinar La Toscana con paradas fotográficas en los miradores principales.'
            : 'We match you with "Scenic Ridge": a smooth, comfortable tour through La Toscana pine forest with panoramic overlook stops.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Incluye parada en la cafetería artesanal de la montaña.'
            : 'Guide Tip: Includes a stop at the mountain coffee house.',
      });
    } else {
      setRecommendation({
        tourId: 'forest-gauntlet',
        reason:
          lang === 'es'
            ? 'El "Guantelete del Bosque" es tu mejor opción: pura acción entre lodo profundo, grietas de rocas y brechas de aceleración extrema.'
            : '"Forest Gauntlet" fits your drive: intense mud pits, rock crawling, and maximum wheel spinning.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Incluimos paquete de grabación GoPro en HD.'
            : 'Guide Tip: GoPro HD video package is included.',
      });
    }
  };

  return (
    <section className="py-20 bg-[#0e0e0e] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 md:px-12 relative z-10">
        <div className="bg-[#1b1c1c] rounded-[32px] p-8 md:p-12 border border-[#ff7a00]/30 shadow-2xl relative">
          <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#ff7a00] text-[#2b1700] px-4 py-1.5 rounded-full font-body text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
            <Bot className="w-4 h-4" />
            <span>AI Adventure Matcher</span>
          </div>

          <div className="text-center mb-8">
            <h3 className="font-display text-4xl md:text-5xl uppercase text-white tracking-wider">
              {lang === 'es' ? '¿No sabes cuál elegir?' : 'Not Sure Which Route to Pick?'}
            </h3>
            <p className="font-body text-xs sm:text-sm text-[#e0c0af] max-w-lg mx-auto mt-2">
              {lang === 'es'
                ? 'Cuéntale a nuestro Asistente de IA qué tipo de vibra o aventura buscas hoy y te sugerirá la ruta ideal.'
                : 'Tell our AI Matcher what kind of vibe or experience you want today, and we will find your perfect route.'}
            </p>
          </div>

          {/* Preset Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {presets.map((p, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setPrompt(p.query);
                  handleAskAi(undefined, p.query);
                }}
                className="px-4 py-2 rounded-xl bg-[#2a2a2a] hover:bg-[#353535] text-white text-xs font-semibold border border-white/10 transition-colors"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Prompt Form */}
          <form onSubmit={handleAskAi} className="flex gap-3 max-w-2xl mx-auto">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder={
                lang === 'es'
                  ? 'Ej: Viajo con mi pareja, nos gusta la velocidad pero queremos ver el atardecer...'
                  : 'Ex: Traveling with my partner, we like speed but want a sunset view...'
              }
              className="flex-1 bg-[#131313] border border-white/20 rounded-2xl px-5 py-4 text-xs sm:text-sm text-white placeholder:text-[#e0c0af]/50 focus:border-[#ff7a00] focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="px-8 py-4 rounded-2xl bg-[#ff7a00] text-[#2b1700] text-xs font-extrabold uppercase tracking-widest orange-glow flex items-center gap-2 disabled:opacity-50"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-4 h-4" />}
            </button>
          </form>

          {/* AI Result Card */}
          {recommendation && (
            <div className="mt-8 p-6 bg-[#131313] rounded-2xl border border-[#ff7a00]/40 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#ff7a00] mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'es' ? 'Ruta Recomendada por IA:' : 'AI Recommended Match:'}</span>
              </div>
              <p className="font-body text-sm text-white leading-relaxed mb-3">
                {recommendation.reason}
              </p>
              <div className="bg-[#2a2a2a] p-3 rounded-xl text-xs text-[#e0c0af] mb-4 border border-white/5">
                {recommendation.customTip}
              </div>
              <button
                onClick={() => onSelectRecommendedTour(recommendation.tourId)}
                className="w-full py-3 rounded-xl bg-[#ff7a00] text-[#2b1700] font-body text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <span>{lang === 'es' ? 'Ver y Reservar Esta Ruta Recomendada' : 'View & Book Recommended Tour'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
