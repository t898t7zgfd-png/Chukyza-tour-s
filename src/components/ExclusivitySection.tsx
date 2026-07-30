import React from 'react';
import { motion } from 'motion/react';
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
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="py-24 bg-[#f8f7f4] relative overflow-hidden border-t border-[#1a1a1a]/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2 font-mono-meta">
            <Award className="w-4 h-4" />
            <span>{lang === 'es' ? 'Estándar de Excelencia' : 'Standard of Excellence'}</span>
          </div>
          <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase text-[#1a1a1a] tracking-tight">
            {lang === 'es' ? 'Diseñado para la ' : 'Engineered for '}
            <span className="text-[#ff7a00] italic">
              {lang === 'es' ? 'Exclusividad' : 'Exclusivity'}
            </span>
          </h2>
          <p className="font-body text-base text-[#1a1a1a]/70 max-w-2xl mx-auto mt-3">
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
                className="bg-white p-8 rounded-[24px] border border-[#1a1a1a]/10 hover:border-[#ff7a00]/50 transition-all card-hover group shadow-sm"
              >
                <div className="w-14 h-14 rounded-2xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 flex items-center justify-center text-[#ff7a00] mb-6 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="font-serif-editorial text-2xl uppercase text-[#1a1a1a] tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
