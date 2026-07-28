import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language, GalleryItem, VideoItem } from '../types';
import { GALLERY_DATA, VIDEO_GALLERY_DATA } from '../data/toursData';
import { Maximize2, X, ChevronLeft, ChevronRight, MapPin, Camera, Play, Video, Eye, Film } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const activePhoto = selectedPhotoIndex !== null ? GALLERY_DATA[selectedPhotoIndex] : null;

  const handleNextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % GALLERY_DATA.length);
    }
  };

  const handlePrevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex - 1 + GALLERY_DATA.length) % GALLERY_DATA.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        {/* Title & Tab Switcher */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
            <Camera className="w-4 h-4" />
            <span>{lang === 'es' ? 'Galería Multimedia' : 'Media Gallery'}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
            {lang === 'es' ? 'El Mundo de ' : 'The World of '}
            <span className="text-[#ff7a00] text-glow">Chukyza</span>
          </h2>
          <p className="font-body text-sm md:text-base text-[#e0c0af] max-w-xl mx-auto mt-2">
            {lang === 'es'
              ? 'Fotos y videos reales de nuestros pilotos conquistando las cumbres y brechas de Sierra del Tigre.'
              : 'Real photos and action videos of our riders conquering the peaks of Sierra del Tigre.'}
          </p>

          {/* Navigation Filter Tabs */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-display text-sm uppercase tracking-wider transition-all border ${
                activeTab === 'photos'
                  ? 'bg-[#ff7a00] text-[#2b1700] border-[#ff7a00] font-bold shadow-[0_0_20px_rgba(255,122,0,0.4)] scale-105'
                  : 'bg-[#1a1a1a] text-white/70 border-white/10 hover:text-white hover:bg-[#252525]'
              }`}
            >
              <Camera className="w-4 h-4" />
              <span>{lang === 'es' ? 'Fotografías' : 'Photos'}</span>
              <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full ml-1">
                {GALLERY_DATA.length}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-display text-sm uppercase tracking-wider transition-all border ${
                activeTab === 'videos'
                  ? 'bg-[#ff7a00] text-[#2b1700] border-[#ff7a00] font-bold shadow-[0_0_20px_rgba(255,122,0,0.4)] scale-105'
                  : 'bg-[#1a1a1a] text-white/70 border-white/10 hover:text-white hover:bg-[#252525]'
              }`}
            >
              <Video className="w-4 h-4" />
              <span>{lang === 'es' ? 'Videos de Acción' : 'Action Videos'}</span>
              <span className="bg-black/20 text-xs px-2 py-0.5 rounded-full ml-1">
                {VIDEO_GALLERY_DATA.length}
              </span>
            </button>
          </div>
        </motion.div>

        {/* TAB 1: PHOTO BENTO GRID */}
        {activeTab === 'photos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-4 grid-rows-1 md:grid-rows-2 gap-4 md:h-[750px]"
          >
            {GALLERY_DATA.map((item, index) => {
              const colSpan = item.colSpan || '';
              const rowSpan = item.rowSpan || '';

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
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
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: VIDEO GRID */}
        {activeTab === 'videos' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {VIDEO_GALLERY_DATA.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedVideo(video)}
                className="relative bg-[#181818] rounded-[24px] overflow-hidden group cursor-pointer border border-white/10 hover:border-[#ff7a00]/50 transition-all shadow-xl hover:shadow-[0_0_30px_rgba(255,122,0,0.2)]"
              >
                {/* Thumbnail Container */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={video.thumbnail}
                    alt={video.title[lang]}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108 opacity-85 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/30" />

                  {/* Top Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="bg-[#ff7a00] text-[#2b1700] px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider shadow-md flex items-center gap-1">
                      <Film className="w-3 h-3" />
                      {video.category[lang]}
                    </span>
                    <span className="bg-black/75 backdrop-blur-md text-white font-mono px-2.5 py-1 rounded-md text-xs font-bold border border-white/20">
                      {video.duration}
                    </span>
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#ff7a00] text-[#2b1700] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,122,0,0.6)] transform transition-transform duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 fill-current ml-1" />
                    </div>
                  </div>

                  {/* Views count bottom right */}
                  {video.views && (
                    <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-xs text-white/80 px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-[#ff7a00]" />
                      <span>{video.views} {lang === 'es' ? 'vistas' : 'views'}</span>
                    </div>
                  )}
                </div>

                {/* Video Info Footer */}
                <div className="p-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl uppercase text-white tracking-wider leading-snug group-hover:text-[#ff7a00] transition-colors">
                      {video.title[lang]}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-[#e0c0af] mt-2">
                      <MapPin className="w-3.5 h-3.5 text-[#ff7a00]" />
                      <span>{video.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* PHOTO LIGHTBOX MODAL */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setSelectedPhotoIndex(null)}
        >
          <button
            onClick={() => setSelectedPhotoIndex(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-50"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white rounded-full transition-colors z-50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white rounded-full transition-colors z-50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

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

      {/* VIDEO PLAYER LIGHTBOX MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-200"
          onClick={() => setSelectedVideo(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setSelectedVideo(null)}
            className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white rounded-full transition-colors z-50 shadow-xl"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Container Box */}
          <div
            className="relative w-full max-w-5xl bg-[#141414] rounded-[24px] border border-white/15 overflow-hidden shadow-2xl flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video w-full bg-black">
              <video
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnail}
                controls
                autoPlay
                loop
                playsInline
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-[#181818]">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#ff7a00] text-[#2b1700] px-3 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider">
                    {selectedVideo.category[lang]}
                  </span>
                  <span className="text-xs text-white/50 font-mono">
                    {selectedVideo.duration}
                  </span>
                </div>
                <h3 className="font-display text-2xl md:text-3xl uppercase text-white tracking-wider">
                  {selectedVideo.title[lang]}
                </h3>
                <p className="font-body text-xs text-[#e0c0af] flex items-center gap-1.5 mt-1">
                  <MapPin className="w-3.5 h-3.5 text-[#ff7a00]" />
                  <span>{selectedVideo.location}</span>
                </p>
              </div>

              <a
                href="#booking"
                onClick={() => setSelectedVideo(null)}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#ff7a00] text-[#2b1700] font-display text-sm font-bold uppercase tracking-wider hover:bg-white transition-colors shadow-lg"
              >
                <span>{lang === 'es' ? 'Reservar Esta Ruta' : 'Book This Tour'}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

