import React from 'react';
import { Tour, Language } from '../types';
import { X, Clock, TrendingUp, CheckCircle, ShieldCheck, Truck, Sparkles } from 'lucide-react';

interface TourDetailModalProps {
  tour: Tour | null;
  lang: Language;
  onClose: () => void;
  onBookTour: (tourId: string) => void;
}

export const TourDetailModal: React.FC<TourDetailModalProps> = ({
  tour,
  lang,
  onClose,
  onBookTour,
}) => {
  if (!tour) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#1b1c1c] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors backdrop-blur-md"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header */}
        <div className="relative h-72 sm:h-80 overflow-hidden">
          <img src={tour.image} alt={tour.title[lang]} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1c1c] via-[#1b1c1c]/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#ff7a00] text-[#2b1700] shadow-lg">
              {tour.tag[lang]}
            </span>
          </div>

          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="font-display text-4xl sm:text-5xl text-white tracking-tight uppercase leading-none">
                  {tour.title[lang]}
                </h2>
                <p className="font-body text-xs sm:text-sm text-[#e0c0af] mt-1">
                  {tour.subtitle[lang]}
                </p>
              </div>
              <div className="text-right">
                <span className="font-display text-4xl text-[#ff7a00] text-glow font-bold">
                  ${tour.price}
                </span>
                <span className="block text-[10px] uppercase text-[#e0c0af]">USD / {lang === 'es' ? 'vehículo' : 'vehicle'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Quick Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-[#2a2a2a] p-4 rounded-2xl border border-white/5">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#ff7a00]" />
              <div>
                <span className="block text-[10px] uppercase text-[#e0c0af]/70">{lang === 'es' ? 'Duración' : 'Duration'}</span>
                <span className="font-body text-xs font-bold text-white">{tour.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-[#ff7a00]" />
              <div>
                <span className="block text-[10px] uppercase text-[#e0c0af]/70">{lang === 'es' ? 'Dificultad' : 'Difficulty'}</span>
                <span className="font-body text-xs font-bold text-white">{tour.difficulty[lang]}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <Truck className="w-5 h-5 text-[#ff7a00]" />
              <div>
                <span className="block text-[10px] uppercase text-[#e0c0af]/70">{lang === 'es' ? 'Vehículo' : 'Vehicle'}</span>
                <span className="font-body text-xs font-bold text-white truncate max-w-[140px] block">{tour.vehicleType}</span>
              </div>
            </div>
          </div>

          {/* Detailed Description */}
          <div>
            <h3 className="font-display text-2xl uppercase text-[#ff7a00] mb-2">
              {lang === 'es' ? 'Descripción de la Experiencia' : 'Experience Overview'}
            </h3>
            <p className="font-body text-sm text-[#e0c0af] leading-relaxed">
              {tour.description[lang]}
            </p>
          </div>

          {/* Highlights */}
          <div>
            <h3 className="font-display text-2xl uppercase text-[#ff7a00] mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#ff7a00]" />
              <span>{lang === 'es' ? 'Puntos Destacados' : 'Trail Highlights'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {tour.highlights[lang].map((h, i) => (
                <div key={i} className="flex items-start gap-2 text-xs font-medium text-white bg-[#2a2a2a]/60 p-3 rounded-xl border border-white/5">
                  <CheckCircle className="w-4 h-4 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Included Amenities */}
          <div>
            <h3 className="font-display text-2xl uppercase text-[#ff7a00] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#ff7a00]" />
              <span>{lang === 'es' ? 'Qué Incluye' : 'What is Included'}</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e0c0af]">
              {tour.included[lang].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a00]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-6 bg-[#0e0e0e] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <span className="text-xs text-[#e0c0af] uppercase block">
              {lang === 'es' ? 'Precio Final desde:' : 'Final Price Starting at:'}
            </span>
            <span className="font-display text-3xl text-white font-bold">${tour.price} USD</span>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-3.5 rounded-xl border border-white/20 text-xs font-bold uppercase text-white hover:bg-white/10 transition-colors w-1/3 sm:w-auto text-center"
            >
              {lang === 'es' ? 'Cerrar' : 'Close'}
            </button>
            <button
              onClick={() => {
                onClose();
                onBookTour(tour.id);
              }}
              className="flex-1 sm:flex-none px-8 py-3.5 rounded-xl bg-[#ff7a00] text-[#2b1700] text-xs font-extrabold uppercase tracking-widest orange-glow text-center"
            >
              {lang === 'es' ? 'Reservar Esta Ruta' : 'Book This Tour'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
