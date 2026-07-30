import React, { useState } from 'react';
import { Language } from '../types';
import { LOGO_IMAGE } from '../data/toursData';
import { Flame, Instagram, Facebook, MapPin, Phone, Copy, Check } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = () => {
    const address = "Av. Galeana #45, Col. Centro, Mazamitla, Jalisco, CP 49300";
    navigator.clipboard.writeText(address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2500);
  };

  return (
    <footer className="bg-[#1a1a1a] border-t border-[#1a1a1a]/10 pt-16 pb-12 text-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_IMAGE}
                alt="Chukyza Tours Logo"
                className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(255,122,0,0.5)]"
              />
              <div className="flex flex-col">
                <span className="font-serif-editorial text-3xl text-[#ff7a00] tracking-wide leading-none">
                  Chukyza Tours
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#f8f7f4]/70 font-mono-meta">
                  Mazamitla, Jalisco
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-[#f8f7f4]/70 max-w-sm leading-relaxed">
              {lang === 'es'
                ? 'La experiencia off-road líder en Mazamitla. Unidades UTV 2024 de alto rendimiento, rutas exclusivas por la Sierra del Tigre y seguridad de clase mundial.'
                : 'The premier off-road tour operator in Mazamitla. High performance 2024 UTV fleet, exclusive mountain routes, and uncompromised safety.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/523312345678"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-white/10 hover:bg-[#25D366] hover:text-black text-[#25D366] border border-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Basecamp Location Column */}
          <div className="md:col-span-4 space-y-4">
            <span className="font-serif-editorial text-xl text-white uppercase tracking-wide block">
              {lang === 'es' ? 'Basecamp Principal' : 'Main Basecamp'}
            </span>
            <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs text-[#f8f7f4]/80 leading-relaxed">
                  Av. Galeana #45, Col. Centro, Mazamitla, Jalisco, CP 49300
                </span>
              </div>
              <button
                onClick={handleCopyAddress}
                className="w-full py-2.5 rounded-xl bg-white/10 hover:bg-[#ff7a00] hover:text-[#2b1700] text-white font-bold text-xs uppercase transition-colors flex items-center justify-center gap-2 font-mono-meta"
              >
                {addressCopied ? (
                  <>
                    <Check className="w-4 h-4 text-green-400" />
                    <span className="text-green-400">{lang === 'es' ? '¡Dirección Copiada!' : 'Address Copied!'}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#ff7a00]" />
                    <span>{lang === 'es' ? 'Copiar Ubicación' : 'Copy Location'}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Call to Action Box */}
          <div className="md:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff7a00] uppercase font-mono-meta">
              <Flame className="w-4 h-4" />
              <span>{lang === 'es' ? '¿Listo para acelerar?' : 'Ready to Drive?'}</span>
            </div>
            <p className="font-body text-xs text-[#f8f7f4]/70">
              {lang === 'es'
                ? 'Aparta tu horario con anticipación, los lugares de fin de semana se agotan rápido.'
                : 'Reserve your departure slot early, weekend spots fill up fast.'}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-[#ff7a00] text-[#2b1700] font-mono-meta text-xs font-bold uppercase tracking-widest orange-glow text-center block hover:scale-[1.02] transition-transform"
            >
              {lang === 'es' ? 'Reservar Mi Lugar' : 'Reserve My Slot'}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#f8f7f4]/50 gap-4 font-mono-meta">
          <span>
            © {new Date().getFullYear()} Chukyza Tours Mazamitla. {lang === 'es' ? 'Todos los derechos reservados.' : 'All rights reserved.'}
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#ff7a00]">
              {lang === 'es' ? 'Aviso de Privacidad' : 'Privacy Policy'}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#ff7a00]">
              {lang === 'es' ? 'Términos de Servicio' : 'Terms of Service'}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
