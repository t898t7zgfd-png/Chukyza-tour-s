import React, { useState } from 'react';
import { Language, GalleryItem } from '../types';
import { GALLERY_DATA } from '../data/toursData';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Camera } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const activePhoto = selectedPhotoIndex !== null ? GALLERY_DATA[selectedPhotoIndex] : null;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
            <Camera className="w-4 h-4" />
            <span>{lang === 'es' ? 'Galería de Aventura' : 'Action Gallery'}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
            {lang === 'es' ? 'El Mundo de ' : 'The World of '}
            <span className="text-[#ff7a00] text-glow">Chukyza</span>
          </h2>
          <p className="font-body text-sm md:text-base text-[#e0c0af] max-w-xl mx-auto mt-2">
            {lang === 'es'
              ? 'Capturas reales de nuestros pilotos conquistando las cumbres de Sierra del Tigre.'
              : 'Real captures of our riders conquering the peaks of Sierra del Tigre.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-4 md:h-[750px]">
          {GALLERY_DATA.map((item, index) => {
            const colSpan = item.colSpan || '';
            const rowSpan = item.rowSpan || '';

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhotoIndex(index)}
                className={`relative rounded-[24px] overflow-hidden group cursor-pointer border border-white/10 min-h-[260px] md:min-h-0 ${colSpan} ${rowSpan}`}
              >
                <img
                  src={item.image}
                  alt={item.title[lang]}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#0e0e0e]/80 backdrop-blur-md text-[#e0c0af] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-white/20">
                    {item.category}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between transition-transform transform translate-y-2 group-hover:translate-y-0">
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl text-white uppercase tracking-wider leading-none mb-1">
                      {item.title[lang]}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#ff7a00]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  <div className="p-2.5 bg-[#ff7a00] text-[#2b1700] rounded-full opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation controls */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Main Photo Box */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activePhoto.image}
              alt={activePhoto.title[lang]}
              className="max-w-full max-h-[70vh] object-contain rounded-2xl border border-white/10 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-display text-3xl uppercase text-white tracking-wider">
                {activePhoto.title[lang]}
              </h3>
              <p className="font-body text-xs text-[#ff7a00] uppercase tracking-widest mt-1 flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5" />
                {activePhoto.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
