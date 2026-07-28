import React from 'react';
import { Language } from '../types';
import { LOGO_IMAGE, HERO_BG_IMAGE } from '../data/toursData';
import { ChevronDown, Flame, Compass } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenBooking: () => void;
  onExploreRoutes: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenBooking, onExploreRoutes }) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_BG_IMAGE}
          alt="Mazamitla Off-road UTV Forest Trail"
          className="w-full h-full object-cover object-center scale-105 filter brightness-90 animate-subtle-zoom"
        />
        <div className="absolute inset-0 gradient-overlay" />
        {/* Subtle orange ambient lights */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#ff7a00]/15 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Hero Central Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto flex flex-col items-center pt-16">
        {/* Logo Badge */}
        <div className="relative mb-6">
          <div className="absolute -inset-3 bg-[#ff7a00]/20 rounded-full blur-xl animate-pulse" />
          <img
            src={LOGO_IMAGE}
            alt="Chukyza Tours Logo Large"
            className="w-28 sm:w-36 md:w-44 h-auto mx-auto relative drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Sub-eyebrow pill */}
        <div className="inline-flex items-center gap-2 bg-[#1f2020]/80 border border-[#ff7a00]/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-6">
          <Flame className="w-4 h-4 text-[#ff7a00] animate-bounce" />
          <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-[#e0c0af]">
            {lang === 'es' ? 'Sierra del Tigre • Off-Road Tours 2024' : 'Sierra del Tigre • Off-Road Tours 2024'}
          </span>
        </div>

        {/* Main Display Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight uppercase leading-[0.95] text-white drop-shadow-2xl">
          {lang === 'es' ? (
            <>
              Adrenalina en el <span className="text-[#ff7a00] text-glow">Corazón</span> de Mazamitla
            </>
          ) : (
            <>
              Adrenaline in the <span className="text-[#ff7a00] text-glow">Heart</span> of Mazamitla
            </>
          )}
        </h1>

        <p className="font-body text-sm sm:text-lg text-[#e0c0af] max-w-2xl mb-8 leading-relaxed font-normal">
          {lang === 'es'
            ? 'Siente el poder de nuestros UTVs y ATVs 2024 navegando los senderos de lodo y pinos milenarios de la Sierra del Tigre. Seguridad garantizada, emoción pura.'
            : 'Feel the raw power of 2024 UTVs & ATVs navigating deep pine mud paths through Sierra del Tigre. Certified safety, maximum excitement.'}
        </p>

        {/* Hero CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="bg-[#ff7a00] text-[#2b1700] font-body font-black text-sm sm:text-base uppercase tracking-widest px-10 py-4 rounded-xl orange-glow-btn flex items-center justify-center gap-3"
          >
            <Flame className="w-5 h-5 fill-current" />
            {lang === 'es' ? 'Reserva Ahora' : 'Book Now'}
          </button>
          <button
            onClick={onExploreRoutes}
            className="bg-[#1f2020]/70 border-2 border-white/20 backdrop-blur-md text-white font-body font-bold text-sm sm:text-base uppercase tracking-widest px-10 py-4 rounded-xl hover:bg-white/10 hover:border-[#ff7a00]/60 transition-all flex items-center justify-center gap-3"
          >
            <Compass className="w-5 h-5 text-[#ff7a00]" />
            {lang === 'es' ? 'Explorar Rutas' : 'Explore Routes'}
          </button>
        </div>
      </div>

      {/* Down Scroll Arrow */}
      <a
        href="#stats"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-75 hover:opacity-100 transition-opacity p-2 text-[#ff7a00]"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};
