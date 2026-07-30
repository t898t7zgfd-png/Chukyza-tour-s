import React, { useState } from 'react';
import { motion } from 'motion/react';
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
      label: lang === 'es' ? '🍻 Cantina La Chuta & Puerta del Cielo' : '🍻 La Chuta Cantina & Puerta del Cielo',
      query: 'Quiero una ruta panorámica de 2 horas con vistas de altura y parada en la cantina tradicional.',
    },
    {
      label: lang === 'es' ? '⛰️ Camino Real 3 Horas' : '⛰️ Camino Real 3 Hours',
      query: 'Busco la travesía más larga y técnica por la serranía del Camino Real del Tigre.',
    },
    {
      label: lang === 'es' ? '🌊 Cascada El Salto' : '🌊 El Salto Waterfall',
      query: 'Queremos conocer la Cascada El Salto en un recorrido de 2 horas.',
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
    if (text.includes('cantina') || text.includes('chuta') || text.includes('puerta') || text.includes('cielo')) {
      setRecommendation({
        tourId: 'puerta-del-cielo-la-chuta',
        reason:
          lang === 'es'
            ? 'La ruta "Puerta del Cielo & Cantina La Chuta" es perfecta: vistas celestiales sobre las nubes y parada obligatoria tradicional.'
            : 'The "Puerta del Cielo & Cantina La Chuta" route is ideal: heavenly cloud vistas and a mandatory traditional cantina stop.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Disfruta de las bebidas artesanales regionales en la cantina.'
            : 'Guide Tip: Enjoy traditional regional craft beverages at the cantina.',
      });
    } else if (text.includes('cascada') || text.includes('salto') || text.includes('waterfall')) {
      setRecommendation({
        tourId: 'cascada-el-salto-2h',
        reason:
          lang === 'es'
            ? 'Te recomendamos "Cascada El Salto" (2 Horas): un recorrido aventurero que cruza cañadas y ríos hasta la caída de agua.'
            : 'We recommend "Cascada El Salto" (2 Hours): an adventurous ride crossing rivers and mountain gorges to the waterfall.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Trae calzado cómodo para acercarte a la caída de agua.'
            : 'Guide Tip: Wear comfortable shoes for walking near the waterfall.',
      });
    } else if (text.includes('camino real') || text.includes('3 hora') || text.includes('3 hour') || text.includes('larga')) {
      setRecommendation({
        tourId: 'camino-real-del-tigre-3h',
        reason:
          lang === 'es'
            ? 'El "CAMINO REAL DEL TIGRE" (3 Horas) es tu mejor opción para una travesía profunda y desafiante por la serranía.'
            : '"CAMINO REAL DEL TIGRE" (3 Hours) is your top choice for a long, deep off-road mountain journey.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Incluye refrigerio en la montaña y fotos HD.'
            : 'Guide Tip: Includes mountain refreshments and HD photography.',
      });
    } else {
      setRecommendation({
        tourId: 'sierra-tigre-valle-juarez-2h',
        reason:
          lang === 'es'
            ? 'Te recomendamos el circuito "Mirador Sierra del Tigre & Presa Valle de Juárez" (2 Horas): la combinación perfecta de cumbres y lago.'
            : 'We recommend "Sierra del Tigre & Valle de Juárez Dam" (2 Hours): the perfect blend of summit peaks and lakefront views.',
        customTip:
          lang === 'es'
            ? 'Tip del Guía: Es nuestra ruta más popular de 2 horas.'
            : 'Guide Tip: Our most popular 2-hour signature circuit.',
      });
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-20 bg-[#0e0e0e] border-t border-white/5 relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto px-4 md:px-12 relative z-10">
        <div className="bg-[#1b1c1c] rounded-[32px] p-8 md:p-12 border border-[#ff7a00]/30 shadow-2xl relative">
          <div className="absolute top-0 right-12 -translate-y-1/2 bg-[#ff7a00] text-[#2b1700] px-4 py-1.5 rounded-full font-body text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 shadow-lg">
            <Bot className="w-4 h-4" />
            <span>AI Adventure Matcher</span>
          </div>

          <div className="text-center mb-8">
            <h3 className="font-serif-editorial text-4xl md:text-5xl text-white tracking-wider">
              {lang === 'es' ? (
                <>AI Adventure <span className="italic text-[#ff7a00]">Matchmaker</span></>
              ) : (
                <>AI Adventure <span className="italic text-[#ff7a00]">Matchmaker</span></>
              )}
            </h3>
            <p className="font-mono-meta text-xs text-[#e0c0af] max-w-lg mx-auto mt-2">
              {lang === 'es'
                ? 'Describe tus preferencias y nuestro motor de IA sugerirá la máquina y ruta perfecta.'
                : 'Describe your ideal morning and we will suggest the perfect machine and trail for your personality.'}
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
    </motion.section>
  );
};
