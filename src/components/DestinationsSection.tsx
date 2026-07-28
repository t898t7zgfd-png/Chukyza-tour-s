import React, { useState } from 'react';
import { Language, Destination } from '../types';
import { DESTINATIONS_DATA } from '../data/toursData';
import { MapPin, Navigation, Mountain, Compass } from 'lucide-react';

interface DestinationsSectionProps {
  lang: Language;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({ lang }) => {
  const [activeDest, setActiveDest] = useState<Destination>(DESTINATIONS_DATA[1]);

  return (
    <section id="destinations" className="py-24 bg-[#131313] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
              <Compass className="w-4 h-4" />
              <span>{lang === 'es' ? 'Exploración Geográfica' : 'Trailhead Map'}</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
              {lang === 'es' ? 'Destinos Emblemáticos' : 'Key Destinations'}
            </h2>
            <p className="font-body text-base text-[#e0c0af] max-w-xl mt-2">
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
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                  activeDest.id === d.id
                    ? 'bg-[#ff7a00] text-[#2b1700] shadow-[0_0_15px_rgba(255,122,0,0.3)]'
                    : 'bg-[#2a2a2a] text-[#e0c0af] hover:bg-[#353535] hover:text-white border border-white/10'
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
          <div className="lg:col-span-7 bg-[#1b1c1c] rounded-[28px] border border-white/10 overflow-hidden relative min-h-[380px] lg:min-h-[480px] group">
            <img
              src={activeDest.image}
              alt={activeDest.name}
              className="w-full h-full object-cover filter brightness-75 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c] via-black/40 to-transparent" />

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
                      : 'bg-black/70 text-white hover:bg-[#ff7a00] hover:text-[#2b1700] z-10'
                  }`}
                  title={dest.name}
                >
                  <MapPin className="w-5 h-5" />
                </button>
              );
            })}

            {/* Map Overlay Badge */}
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div className="bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 max-w-sm">
                <span className="text-[10px] font-extrabold uppercase text-[#ff7a00] tracking-widest block">
                  {lang === 'es' ? 'Punto Seleccionado' : 'Selected Point'}
                </span>
                <span className="font-display text-2xl text-white uppercase block leading-none mt-0.5">
                  {activeDest.name}
                </span>
              </div>
            </div>
          </div>

          {/* Destination Detail Panel */}
          <div className="lg:col-span-5 bg-[#1b1c1c] rounded-[28px] border border-white/10 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-3">
                <Navigation className="w-4 h-4" />
                <span>{lang === 'es' ? 'Especificaciones del Sendero' : 'Trail Metrics'}</span>
              </div>

              <h3 className="font-display text-4xl text-white uppercase tracking-wider mb-4 leading-tight">
                {activeDest.name}
              </h3>

              <p className="font-body text-xs sm:text-sm text-[#e0c0af] leading-relaxed mb-6">
                {activeDest.description[lang]}
              </p>

              {/* Stats Box */}
              <div className="grid grid-cols-2 gap-4 bg-[#2a2a2a] p-4 rounded-2xl border border-white/5 mb-6">
                <div>
                  <span className="text-[10px] uppercase text-[#e0c0af]/70 block">{lang === 'es' ? 'Altitud' : 'Elevation'}</span>
                  <span className="font-display text-2xl text-white flex items-center gap-1">
                    <Mountain className="w-4 h-4 text-[#ff7a00]" />
                    {activeDest.elevation}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] uppercase text-[#e0c0af]/70 block">{lang === 'es' ? 'Distancia HQ' : 'HQ Distance'}</span>
                  <span className="font-display text-2xl text-white">
                    {activeDest.distanceFromHQ}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="#tours"
              className="w-full py-4 rounded-xl bg-[#ff7a00] text-[#2b1700] font-body text-xs font-extrabold uppercase tracking-widest text-center orange-glow block"
            >
              {lang === 'es' ? 'Ver Rutas que pasan por aquí' : 'View Tours Passing Here'}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
