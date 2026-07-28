import React from 'react';
import { Language } from '../types';
import { LOGO_IMAGE } from '../data/toursData';
import { Flame, Instagram, Facebook, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  lang: Language;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ lang, onOpenBooking }) => {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-12 text-[#e0c0af]">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={LOGO_IMAGE}
                alt="Chukyza Tours Logo"
                className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(255,122,0,0.5)]"
              />
              <div className="flex flex-col">
                <span className="font-display text-3xl text-[#ff7a00] tracking-wider leading-none">
                  Chukyza Tours
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#e0c0af]">
                  Mazamitla, Jalisco
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-[#e0c0af]/80 max-w-sm leading-relaxed">
              {lang === 'es'
                ? 'La experiencia off-road líder en Mazamitla. Unidades UTV 2024 de alto rendimiento, rutas exclusivas por la Sierra del Tigre y seguridad de clase mundial.'
                : 'The premier off-road tour operator in Mazamitla. High performance 2024 UTV fleet, exclusive mountain routes, and uncompromised safety.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#1b1c1c] hover:bg-[#ff7a00] hover:text-[#2b1700] text-white border border-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#1b1c1c] hover:bg-[#ff7a00] hover:text-[#2b1700] text-white border border-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/523312345678"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#1b1c1c] hover:bg-[#25D366] hover:text-black text-[#25D366] border border-white/10 transition-colors"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <span className="font-display text-xl text-white uppercase tracking-wider block">
              {lang === 'es' ? 'Nuestras Rutas' : 'Our Tours'}
            </span>
            <ul className="space-y-2 font-body text-xs text-[#e0c0af]">
              <li>
                <a href="#tours" className="hover:text-[#ff7a00] transition-colors">
                  {lang === 'es' ? 'El Guantelete del Bosque (Extremo)' : 'Forest Gauntlet (Hardcore)'}
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#ff7a00] transition-colors">
                  {lang === 'es' ? 'Ruta del Crepúsculo (Atardecer & Fogata)' : 'Twilight Run (Sunset & Bonfire)'}
                </a>
              </li>
              <li>
                <a href="#tours" className="hover:text-[#ff7a00] transition-colors">
                  {lang === 'es' ? 'Cresta Panorámica (Familiar)' : 'Scenic Ridge (Family)'}
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-[#ff7a00] transition-colors">
                  {lang === 'es' ? 'Paquetes de Grupo y Empresas' : 'Corporate & Group Packages'}
                </a>
              </li>
            </ul>
          </div>

          {/* Call to Action Box */}
          <div className="md:col-span-4 bg-[#1b1c1c] p-6 rounded-2xl border border-white/10 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#ff7a00] uppercase">
              <Flame className="w-4 h-4" />
              <span>{lang === 'es' ? '¿Listo para acelerar?' : 'Ready to Drive?'}</span>
            </div>
            <p className="font-body text-xs text-[#e0c0af]">
              {lang === 'es'
                ? 'Aparta tu horario con anticipación, los lugares de fin de semana se agotan rápido.'
                : 'Reserve your departure slot early, weekend spots fill up fast.'}
            </p>
            <button
              onClick={onOpenBooking}
              className="w-full py-3 rounded-xl bg-[#ff7a00] text-[#2b1700] font-body text-xs font-extrabold uppercase tracking-widest orange-glow text-center block"
            >
              {lang === 'es' ? 'Reservar Mi Lugar' : 'Reserve My Slot'}
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#e0c0af]/60 gap-4">
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
