import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/toursData';
import { MapPin, Navigation, Mountain, Compass } from 'lucide-react';

interface DestinationsSectionProps {
  lang: Language;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ lang }) => {
  const [activeDest, setActiveDest] = useState<Destination>(DESTINATIONS_DATA[1]);

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="destinations" 
      className="py-24 bg-[#f8f7f4] relative border-t border-[#1a1a1a]/10"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2 font-mono-meta">
              <Compass className="w-4 h-4" />
              <span>{lang === 'es' ? 'Exploración Geográfica' : 'Trailhead Map'}</span>
            </div>
            <h2 className="font-serif-editorial text-5xl md:text-7xl uppercase text-[#1a1a1a] tracking-tight">
              {lang === 'es' ? 'Destinos Emblemáticos' : 'Key Destinations'}
            </h2>
            <p className="font-body text-base text-[#1a1a1a]/70 max-w-xl mt-2">
              {lang === 'es'
                ? 'Siente la altitud y descubre los puntos clave a lo largo de los senderos en Mazamitla.'
                : 'Feel the elevation gains and discover key trail points across Mazamitla.'}
            </p>
          </div>

          {/* Destination Selector Tabs */}
          <div className="flex flex-wrap gap-2">
            {DESTINATIONS_DATA.map((d) => (
              <button
                key={d.id}
                onClick={() => setActiveDest(d)}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 font-mono-meta ${
                  activeDest.id === d.id
                    ? 'bg-[#ff7a00] text-[#2b1700] shadow-[0_0_15px_rgba(255,122,0,0.3)]'
                    : 'bg-[#1a1a1a]/5 text-[#1a1a1a] hover:bg-[#1a1a1a]/10 border border-[#1a1a1a]/10'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{d.name.split(' ')[0]}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Map + Detail Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Map Graphic Container */}
          <div className="lg:col-span-7 bg-white rounded-[28px] border border-[#1a1a1a]/10 overflow-hidden relative min-h-[380px] lg:min-h-[480px] group shadow-sm">
            <img
              src={activeDest.image}
              alt={activeDest.name}
              className="w-full h-full object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Simulated Trail Map Pinpoints */}
            {DESTINATIONS_DATA.map((dest) => {
              const isSelected = dest.id === activeDest.id;
              return (
                <button
                  key={dest.id}
                  onClick={() => setActiveDest(dest)}
                  style={{ top: `${dest.coordinates.y}%`, left: `${dest.coordinates.x}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full transition-all ${
                    isSelected
                      ? 'bg-[#ff7a00] text-[#2b1700] scale-125 z-20 shadow-[0_0_25px_rgba(255,122,0,0.8)] ring-4 ring-[#ff7a00]/40'
                      : 'bg-white/90 text-[#1a1a1a] hover:bg-[#ff7a00] hover:text-[#2b1700] z-10'
                  }`}
                  title={dest.name}
                >
                  <MapPin className="w-5 h-5" />
                </button>
              );
            })}

            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-[#1a1a1a]/10 max-w-sm shadow-md">
                <span className="text-[10px] font-extrabold uppercase text-[#ff7a00] tracking-widest block font-mono-meta">
                  {lang === 'es' ? 'Punto Seleccionado' : 'Selected Point'}
                </span>
                <span className="font-serif-editorial text-2xl text-[#1a1a1a] uppercase block leading-none mt-0.5">
                  {activeDest.name}
                </span>
              </div>
            </div>
          </div>

          {/* Destination Detail Panel */}
          <div className="lg:col-span-5 bg-white rounded-[28px] border border-[#1a1a1a]/10 p-8 flex flex-col justify-between shadow-sm">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-3 font-mono-meta">
                <Navigation className="w-4 h-4" />
                <span>{lang === 'es' ? 'Especificaciones del Sendero' : 'Trail Metrics'}</span>
              </div>

              <h3 className="font-serif-editorial text-4xl text-[#1a1a1a] uppercase tracking-wide mb-4 leading-tight">
                {activeDest.name}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#1a1a1a]/70 leading-relaxed mb-6">
                {activeDest.description[lang]}
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 bg-[#f8f7f4] p-4 rounded-2xl border border-[#1a1a1a]/10 mb-6">
                <div>
                  <span className="text-[10px] uppercase text-[#1a1a1a]/60 block font-mono-meta">{lang === 'es' ? 'Altitud' : 'Elevation'}</span>
                  <span className="font-serif-editorial text-2xl text-[#1a1a1a] flex items-center gap-1">
                    <Mountain className="w-4 h-4 text-[#ff7a00]" />
                    {activeDest.elevation}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#1a1a1a]/60 block font-mono-meta">{lang === 'es' ? 'Distancia HQ' : 'HQ Distance'}</span>
                  <span className="font-serif-editorial text-2xl text-[#1a1a1a]">
                    {activeDest.distanceFromHQ}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#tours"
              className="w-full py-4 rounded-xl bg-[#ff7a00] text-[#2b1700] font-mono-meta text-xs font-bold uppercase tracking-widest text-center orange-glow block hover:scale-[1.02] transition-transform"
            >
              {lang === 'es' ? 'Ver Rutas que pasan por aquí' : 'View Tours Passing Here'}
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
