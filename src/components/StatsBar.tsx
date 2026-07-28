import React from 'react';
import { Language } from '../types';
import { Users, Mountain, Star, ShieldCheck } from 'lucide-react';

interface StatsBarProps {
  lang: Language;
}

export const StatsBar: React.FC<StatsBarProps> = ({ lang }) => {
  const stats = [
    {
      num: '+5,000',
      label: lang === 'es' ? 'Aventureros' : 'Adventurers',
      sub: lang === 'es' ? 'Satisfechos en 2023-2024' : 'Satisfied in 2023-2024',
      icon: Users,
    },
    {
      num: '15+',
      label: lang === 'es' ? 'Rutas Épicas' : 'Epic Routes',
      sub: lang === 'es' ? 'Desde nivel básico a extremo' : 'Beginner to hardcore',
      icon: Mountain,
    },
    {
      num: '4.9',
      label: lang === 'es' ? 'Calificación' : 'Star Rating',
      sub: lang === 'es' ? '+850 Reseñas verificadas' : '+850 Verified reviews',
      icon: Star,
    },
  ];

  return (
    <section id="stats" className="bg-[#0e0e0e] py-12 border-y border-white/5 relative z-20">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 text-center">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="py-6 md:py-4 px-6 flex flex-col items-center justify-center group hover:bg-white/[0.02] transition-colors rounded-2xl"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="w-6 h-6 text-[#ff7a00] group-hover:scale-110 transition-transform" />
                  <span className="font-display text-5xl md:text-6xl text-[#ff7a00] text-glow tracking-tight">
                    {stat.num}
                  </span>
                </div>
                <span className="font-body text-sm font-bold uppercase text-[#e4e2e1] tracking-widest mt-1">
                  {stat.label}
                </span>
                <span className="font-body text-xs text-[#e0c0af]/70 mt-1">
                  {stat.sub}
                </span>
              </div>
            );
          })}
        </div>

        {/* Certified Badge Strip */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center items-center gap-6 sm:gap-12 text-xs font-semibold uppercase tracking-wider text-[#e0c0af]/80">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#ff7a00]" />
            <span>{lang === 'es' ? 'Guías Certificados SECTUR' : 'SECTUR Certified Guides'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#ff7a00]">verified</span>
            <span>{lang === 'es' ? 'Seguro de Viajero Incluido' : 'Travel Insurance Included'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-sm text-[#ff7a00]">directions_car</span>
            <span>{lang === 'es' ? 'Flotilla 2024 Inspeccionada Diariamente' : '2024 Daily Inspected Fleet'}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
