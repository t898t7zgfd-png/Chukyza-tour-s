import React from 'react';
import { motion } from 'motion/react';
import { Language, PackagePlan } from '../types';
import { PACKAGES_DATA } from '../data/toursData';
import { Check, Sparkles, User, Users, UsersRound, Building2 } from 'lucide-react';

interface PackagesSectionProps {
  lang: Language;
  onSelectPackage: (packageId: string) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ lang, onSelectPackage }) => {
  const getPackageIcon = (id: string) => {
    switch (id) {
      case 'individual':
        return User;
      case 'couple':
        return Users;
      case 'family':
        return UsersRound;
      case 'corporate':
        return Building2;
      default:
        return User;
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="packages" 
      className="py-24 bg-[#f8f7f4] relative border-t border-[#1a1a1a]/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2 font-mono-meta">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'es' ? 'Planes para Todos' : 'Plans for Everyone'}</span>
          </div>
          <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase text-[#1a1a1a] tracking-tight">
            {lang === 'es' ? 'Selecciona tu ' : 'Select Your '}
            <span className="text-[#ff7a00] italic">{lang === 'es' ? 'Paquete' : 'Package'}</span>
          </h2>
          <p className="font-body text-base text-[#1a1a1a]/70 max-w-xl mx-auto mt-2">
            {lang === 'es'
              ? 'Paquetes diseñados a la medida para pilotos solos, parejas aventureras y grupos familiares.'
              : 'Tailored pricing packages designed for solo drivers, couples, and family groups.'}
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES_DATA.map((pkg) => {
            const isFeatured = pkg.featured;
            const Icon = getPackageIcon(pkg.id);

            return (
              <div
                key={pkg.id}
                className={`bg-white rounded-[24px] p-6 sm:p-8 border flex flex-col justify-between transition-all card-hover shadow-sm ${
                  isFeatured
                    ? 'border-[#ff7a00] shadow-[0_0_30px_rgba(255,122,0,0.2)] relative scale-105 z-10'
                    : 'border-[#1a1a1a]/10 hover:border-[#1a1a1a]/30'
                }`}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-[#ff7a00] text-[#2b1700]'
                          : 'bg-[#1a1a1a]/5 text-[#1a1a1a] border border-[#1a1a1a]/10'
                      }`}
                    >
                      {pkg.category[lang]}
                    </span>
                    <Icon className="w-5 h-5 text-[#ff7a00]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-serif-editorial text-3xl text-[#1a1a1a] uppercase tracking-wide leading-none mb-4">
                    {pkg.name[lang]}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-[#1a1a1a]/10">
                    {typeof pkg.price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif-editorial text-5xl text-[#1a1a1a] font-bold">
                          ${pkg.price}
                        </span>
                        <span className="text-xs font-bold text-[#1a1a1a]/60 uppercase">
                          USD {pkg.unit}
                        </span>
                      </div>
                    ) : (
                      <div className="font-serif-editorial text-3xl text-[#1a1a1a] font-bold uppercase">
                        {lang === 'es' ? 'Cotización Custom' : 'Custom Quote'}
                      </div>
                    )}
                    <span className="text-[11px] text-[#1a1a1a]/60 block mt-2">
                      {pkg.recommendedFor[lang]}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features[lang].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#1a1a1a]/80">
                        <Check className="w-4 h-4 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 rounded-xl font-mono-meta text-xs font-bold uppercase tracking-widest transition-all ${
                    isFeatured
                      ? 'bg-[#ff7a00] text-[#2b1700] orange-glow hover:scale-[1.02]'
                      : 'bg-[#1a1a1a]/5 hover:bg-[#ff7a00] hover:text-[#2b1700] text-[#1a1a1a] border border-[#1a1a1a]/10'
                  }`}
                >
                  {pkg.id === 'corporate'
                    ? lang === 'es'
                      ? 'Solicitar Cotización'
                      : 'Request Quote'
                    : lang === 'es'
                    ? 'Elegir Paquete'
                    : 'Select Package'}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
