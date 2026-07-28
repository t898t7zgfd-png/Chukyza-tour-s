import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Tour, Language } from '../types';
import { TOURS_DATA } from '../data/toursData';
import { Clock, TrendingUp, ArrowRight, ShieldAlert, Sparkles } from 'lucide-react';

interface ToursSectionProps {
  lang: Language;
  onSelectTour: (tour: Tour) => void;
  onBookTour: (tourId: string) => void;
}

export const ToursSection: React.FC<ToursSectionProps> = ({ lang, onSelectTour, onBookTour }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filters = [
    { id: 'all', label: lang === 'es' ? 'Todas las Rutas' : 'All Tours' },
    { id: '1h', label: lang === 'es' ? '1 Hora' : '1 Hour' },
    { id: '2h', label: lang === 'es' ? '2 Horas' : '2 Hours' },
    { id: '3h', label: lang === 'es' ? '3 Horas' : '3 Hours' },
    { id: 'featured', label: lang === 'es' ? 'Destacadas' : 'Featured' },
  ];

  const filteredTours = TOURS_DATA.filter((tour) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === '1h') return tour.duration.includes('1');
    if (activeFilter === '2h') return tour.duration.includes('2');
    if (activeFilter === '3h') return tour.duration.includes('3');
    if (activeFilter === 'featured') return tour.featured;
    return true;
  });

  return (
    <section id="tours" className="py-24 bg-[#131313] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'es' ? 'Experiencias Premium' : 'Premium Experiences'}</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl uppercase text-[#ff7a00] tracking-tight leading-none">
              {lang === 'es' ? 'Rutas de Alto Nivel' : 'Top Tier Tours'}
            </h2>
            <p className="font-body text-base md:text-lg text-[#e0c0af] max-w-2xl mt-3 leading-relaxed">
              {lang === 'es'
                ? 'Elige tu camino a través de los pinos envueltos en bruma de Mazamitla, Jalisco.'
                : 'Choose your path through the mist-shrouded pines of Jalisco’s most beautiful magic town.'}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                  activeFilter === f.id
                    ? 'bg-[#ff7a00] text-[#2b1700] shadow-[0_0_20px_rgba(255,122,0,0.4)]'
                    : 'bg-[#2a2a2a] text-[#e0c0af] hover:bg-[#353535] hover:text-white border border-white/10'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {filteredTours.map((tour, index) => {
            const isFeatured = tour.featured;

            return (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`bg-[#2a2a2a] rounded-[24px] overflow-hidden card-hover border shadow-2xl flex flex-col justify-between transition-all ${
                  isFeatured
                    ? 'border-[#ff7a00] md:-translate-y-3 shadow-[0_0_35px_rgba(255,122,0,0.25)] relative'
                    : 'border-white/10'
                }`}
              >
                {/* Image Header */}
                <div className="relative h-64 overflow-hidden group cursor-pointer" onClick={() => onSelectTour(tour)}>
                  <img
                    src={tour.image}
                    alt={tour.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2a2a2a] via-transparent to-black/30" />

                  {/* Badge Tag */}
                  <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border ${
                        isFeatured
                          ? 'bg-[#ff7a00] text-[#2b1700] border-[#ff7a00] shadow-md'
                          : 'bg-[#0e0e0e]/80 backdrop-blur-md text-white border-white/20'
                      }`}
                    >
                      {tour.tag[lang]}
                    </span>
                  </div>

                  {/* Quick detail trigger */}
                  <div className="absolute bottom-3 right-4 text-xs font-semibold uppercase text-white/80 group-hover:text-[#ff7a00] flex items-center gap-1 transition-colors">
                    <span>{lang === 'es' ? 'Ver detalles' : 'View details'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3
                        onClick={() => onSelectTour(tour)}
                        className="font-display text-3xl text-[#e4e2e1] hover:text-[#ff7a00] cursor-pointer transition-colors leading-tight"
                      >
                        {tour.title[lang]}
                      </h3>
                      <span className="font-display text-3xl text-[#ff7a00] text-glow font-bold">
                        ${tour.price}
                      </span>
                    </div>

                    <p className="font-body text-xs text-[#e0c0af] line-clamp-2 mb-6 leading-relaxed">
                      {tour.description[lang]}
                    </p>

                    {/* Metadata row */}
                    <div className="flex items-center gap-4 text-xs font-semibold text-[#e0c0af] uppercase mb-6 bg-[#1b1c1c] p-3 rounded-xl border border-white/5">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-[#ff7a00]" />
                        {tour.duration}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="flex items-center gap-1.5">
                        <TrendingUp className="w-4 h-4 text-[#ff7a00]" />
                        {tour.difficulty[lang]}
                      </span>
                    </div>
                  </div>

                  {/* Action Button */}
                  <div className="space-y-2">
                    <button
                      onClick={() => onBookTour(tour.id)}
                      className={`w-full py-3.5 rounded-xl font-body text-xs font-extrabold uppercase tracking-widest transition-all ${
                        isFeatured
                          ? 'bg-[#ff7a00] text-[#2b1700] orange-glow'
                          : 'bg-[#353535] hover:bg-[#ff7a00] hover:text-[#2b1700] text-white'
                      }`}
                    >
                      {lang === 'es' ? 'Reservar Esta Ruta' : 'Book This Tour'}
                    </button>
                    <button
                      onClick={() => onSelectTour(tour)}
                      className="w-full py-2 text-[11px] font-bold uppercase tracking-wider text-[#e0c0af] hover:text-white transition-colors"
                    >
                      {lang === 'es' ? 'Ver mapa e itinerario' : 'View map & itinerary'}
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
