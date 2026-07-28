import React from 'react';
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
    <section id="packages" className="py-24 bg-[#0e0e0e] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>{lang === 'es' ? 'Planes para Todos' : 'Plans for Everyone'}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
            {lang === 'es' ? 'Selecciona tu ' : 'Select Your '}
            <span className="text-[#ff7a00] text-glow">{lang === 'es' ? 'Paquete' : 'Package'}</span>
          </h2>
          <p className="font-body text-base text-[#e0c0af] max-w-xl mx-auto mt-2">
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
                className={`bg-[#1b1c1c] rounded-[24px] p-6 sm:p-8 border flex flex-col justify-between transition-all card-hover ${
                  isFeatured
                    ? 'border-[#ff7a00] shadow-[0_0_30px_rgba(255,122,0,0.25)] relative scale-105 z-10'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <div>
                  {/* Category Pill */}
                  <div className="flex justify-between items-center mb-4">
                    <span
                      className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-[#ff7a00] text-[#2b1700]'
                          : 'bg-[#2a2a2a] text-[#e0c0af] border border-white/10'
                      }`}
                    >
                      {pkg.category[lang]}
                    </span>
                    <Icon className="w-5 h-5 text-[#ff7a00]" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-4xl text-white uppercase tracking-wider leading-none mb-4">
                    {pkg.name[lang]}
                  </h3>

                  {/* Pricing */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    {typeof pkg.price === 'number' ? (
                      <div className="flex items-baseline gap-1">
                        <span className="font-display text-5xl text-[#ff7a00] font-bold">
                          ${pkg.price}
                        </span>
                        <span className="text-xs font-bold text-[#e0c0af] uppercase">
                          USD {pkg.unit}
                        </span>
                      </div>
                    ) : (
                      <div className="font-display text-4xl text-[#ff7a00] font-bold uppercase">
                        {lang === 'es' ? 'Cotización Custom' : 'Custom Quote'}
                      </div>
                    )}
                    <span className="text-[11px] text-[#e0c0af]/80 block mt-2">
                      {pkg.recommendedFor[lang]}
                    </span>
                  </div>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {pkg.features[lang].map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-[#e4e2e1]">
                        <Check className="w-4 h-4 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button
                  onClick={() => onSelectPackage(pkg.id)}
                  className={`w-full py-3.5 rounded-xl font-body text-xs font-extrabold uppercase tracking-widest transition-all ${
                    isFeatured
                      ? 'bg-[#ff7a00] text-[#2b1700] orange-glow'
                      : 'bg-[#2a2a2a] hover:bg-[#ff7a00] hover:text-[#2b1700] text-white border border-white/10'
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
    </section>
  );
};
