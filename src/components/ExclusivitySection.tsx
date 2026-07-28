import React from 'react';
import { Language } from '../types';
import { GUIDE_IMAGE } from '../data/toursData';
import { Shield, Compass, Zap, Quote, Award } from 'lucide-react';

interface ExclusivitySectionProps {
  lang: Language;
}

export const ExclusivitySection: React.FC<ExclusivitySectionProps> = ({ lang }) => {
  const pillars = [
    {
      icon: Shield,
      title: lang === 'es' ? 'Protocolo Seguridad Primero' : 'Safety First Protocol',
      desc:
        lang === 'es'
          ? 'Cascos integrales con certificación DOT, arneses de 4 puntos y seguimiento Satelital GPS en tiempo real en cada ruta.'
          : 'DOT certified full helmets, 4-point harnesses, and real-time GPS Satellite tracking on every expedition.',
    },
    {
      icon: Compass,
      title: lang === 'es' ? 'Guías Baquianos Expertos' : 'Expert Pathfinders',
      desc:
        lang === 'es'
          ? 'Pilotos nativos de Mazamitla capacitados en primeros auxilios en montaña y rescate off-road.'
          : 'Native Mazamitla drivers certified in wilderness first aid and advanced off-road recovery.',
    },
    {
      icon: Zap,
      title: lang === 'es' ? 'Flotilla 2024 Exclusiva' : '2024 Fleet Only',
      desc:
        lang === 'es'
          ? 'Mantenimiento riguroso tras cada salida. Maneja únicamente Can-Am Maverick X3 y Polaris RZR Turbo de último modelo.'
          : 'Strict maintenance after every ride. Drive only late-model Can-Am Maverick X3 and Polaris RZR Turbo units.',
    },
  ];

  return (
    <section className="py-24 bg-[#131313] relative overflow-hidden border-t border-white/5">
      {/* Subtle background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff7a00]/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
            <Award className="w-4 h-4" />
            <span>{lang === 'es' ? 'Estándar de Excelencia' : 'Standard of Excellence'}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
            {lang === 'es' ? 'Diseñado para la ' : 'Engineered for '}
            <span className="text-[#ff7a00] text-glow">
              {lang === 'es' ? 'Exclusividad' : 'Exclusivity'}
            </span>
          </h2>
          <p className="font-body text-base text-[#e0c0af] max-w-2xl mx-auto mt-3">
            {lang === 'es'
              ? 'No hacemos recorridos turísticos comunes. Creamos expediciones privadas inolvidables con altos estándares de seguridad.'
              : 'We don’t do ordinary tours. We craft private high-adrenaline expeditions with uncompromised safety.'}
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-[#1b1c1c] p-8 rounded-[24px] border border-white/10 hover:border-[#ff7a00]/50 transition-all card-hover group"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-3xl uppercase text-white tracking-wider mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#e0c0af] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* Lead Guide Feature Quote Card */}
        <div className="bg-[#1b1c1c] rounded-[32px] border border-white/10 overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            {/* Guide Photo */}
            <div className="lg:col-span-5 relative h-80 lg:h-full min-h-[320px]">
              <img
                src={GUIDE_IMAGE}
                alt="Chukyza Expedition Lead Guide"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#1b1c1c] via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="bg-[#ff7a00] text-[#2b1700] px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {lang === 'es' ? 'Jefe de Expediciones' : 'Lead Expedition Officer'}
                </span>
              </div>
            </div>

            {/* Guide Quote Text */}
            <div className="lg:col-span-7 p-8 md:p-12 space-y-4">
              <Quote className="w-10 h-10 text-[#ff7a00] opacity-60" />
              <blockquote className="font-display text-3xl md:text-4xl text-white tracking-wide leading-tight uppercase">
                {lang === 'es'
                  ? '“Conocemos cada grieta, cada brecha de lodo y cada mirador secreto en la Sierra del Tigre. Tu única tarea es acelerar y disfrutar la naturaleza.”'
                  : '“We know every mud gap, hidden ridge, and secret overlook in Sierra del Tigre. Your only job is to press the throttle and feel the wilderness.”'}
              </blockquote>
              <div className="pt-4 border-t border-white/10">
                <span className="font-body text-base font-bold text-white block">
                  Capt. Roberto "El Chuky" Morales
                </span>
                <span className="font-body text-xs text-[#ff7a00] uppercase tracking-widest font-semibold">
                  {lang === 'es' ? 'Fundador & Piloto Máster (12+ Años de Experiencia)' : 'Founder & Master Pilot (12+ Years Experience)'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
