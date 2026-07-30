import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Language } from '../types';
import { LOGO_IMAGE, HERO_BG_IMAGE } from '../data/toursData';
import { ChevronDown, Flame, Compass } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExploreRoutes: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onExploreRoutes }) => {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const textY = useTransform(scrollY, [0, 600], [0, -60]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0.2]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay with Parallax */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 h-[120%] -top-[10%]">
        <img
          src={HERO_BG_IMAGE}
          alt="Mazamitla Off-road UTV Forest Trail"
          className="w-full h-full object-cover object-center filter brightness-90 animate-subtle-zoom"
        />
        <div className="absolute inset-0 gradient-overlay" />
        {/* Subtle orange ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff7a00]/15 blur-[120px] rounded-full pointer-events-none" />
      </motion.div>

      {/* Hero Central Content */}
      <motion.div 
        style={{ y: textY, opacity: opacityFade }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-16"
      >
        {/* Logo Badge with Floating Animation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative mb-6"
        >
          <div className="absolute -inset-3 bg-[#ff7a00]/20 rounded-full blur-xl animate-pulse" />
          <motion.img
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            src={LOGO_IMAGE}
            alt="Chukyza Tours Logo Large"
            className="w-28 sm:w-36 md:w-44 h-auto mx-auto relative drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          />
        </motion.div>

        {/* Sub-eyebrow pill */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 bg-[#1f2020]/80 border border-[#ff7a00]/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-6"
        >
          <Flame className="w-4 h-4 text-[#ff7a00] animate-bounce" />
          <span className="font-mono-meta text-xs font-bold uppercase tracking-[0.2em] text-[#e0c0af]">
            {lang === 'es' ? '[2024] SIERRA DEL TIGRE • MAZAMITLA' : '[2024] SIERRA DEL TIGRE • MAZAMITLA'}
          </span>
        </motion.div>

        {/* Main Display Headline with Editorial Cormorant Garamond Accent */}
        <motion.h1 
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] mb-6 tracking-tight uppercase leading-[0.92] text-white drop-shadow-2xl"
        >
          {lang === 'es' ? (
            <>
              El Arte de la <br className="hidden sm:inline" />
              <span className="font-serif-editorial italic text-[#ff7a00] capitalize font-normal tracking-normal text-glow">Elevación</span>
            </>
          ) : (
            <>
              The Art of <br className="hidden sm:inline" />
              <span className="font-serif-editorial italic text-[#ff7a00] capitalize font-normal tracking-normal text-glow">Elevation</span>
            </>
          )}
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="font-body text-sm sm:text-lg text-[#e0c0af] max-w-2xl mb-8 leading-relaxed font-normal"
        >
          {lang === 'es'
            ? 'Siente el poder de nuestros UTVs y ATVs 2024 navegando los senderos de lodo y pinos de la Sierra del Tigre. Seguridad garantizada, emoción pura.'
            : 'Feel the raw power of 2024 UTVs & ATVs navigating deep pine mud paths through Sierra del Tigre. Certified safety, maximum excitement.'}
        </motion.p>

        {/* Hero CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="bg-[#ff7a00] text-[#2b1700] font-body font-black text-sm sm:text-base uppercase tracking-widest px-10 py-4 rounded-xl orange-glow-btn flex items-center justify-center gap-3 transform hover:scale-105 transition-all"
          >
            <Flame className="w-5 h-5 fill-current" />
            {lang === 'es' ? 'Reserva Ahora' : 'Book Now'}
          </button>
          <button
            onClick={onExploreRoutes}
            className="bg-[#1f2020]/70 border-2 border-white/20 backdrop-blur-md text-white font-body font-bold text-sm sm:text-base uppercase tracking-widest px-10 py-4 rounded-xl hover:bg-white/10 hover:border-[#ff7a00]/60 transition-all flex items-center justify-center gap-3 transform hover:scale-105"
          >
            <Compass className="w-5 h-5 text-[#ff7a00]" />
            {lang === 'es' ? 'Explorar Rutas' : 'Explore Routes'}
          </button>
        </motion.div>
      </motion.div>

      {/* Down Scroll Arrow */}
      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.85, y: [0, 8, 0] }}
        transition={{ 
          opacity: { delay: 1, duration: 0.5 },
          y: { repeat: Infinity, duration: 1.8, ease: 'easeInOut' } 
        }}
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hover:opacity-100 transition-opacity p-2 text-[#ff7a00] z-20"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.a>
    </section>
  );
};
