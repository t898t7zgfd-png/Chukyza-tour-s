import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { LOGO_IMAGE } from '../data/toursData';
import { Menu, X, Globe, PhoneCall } from 'lucide-react';
import { WeatherWidget } from './WeatherWidget';

interface HeaderProps {
  lang: Language;
  setLang: (l: Language) => void;
  onOpenBooking: (tourId?: string, packageId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, setLang, onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: lang === 'es' ? 'Rutas & Tours' : 'Tours', href: '#tours' },
    { label: lang === 'es' ? 'Destinos' : 'Destinations', href: '#destinations' },
    { label: lang === 'es' ? 'Galería' : 'Gallery', href: '#gallery' },
    { label: lang === 'es' ? 'Paquetes' : 'Packages', href: '#packages' },
    { label: lang === 'es' ? 'Preguntas' : 'FAQ', href: '#faq' },
    { label: lang === 'es' ? 'Contacto' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0e0e0e]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3'
          : 'glass-nav border-b border-white/10 py-4'
      } px-4 md:px-16 flex justify-between items-center`}
    >
      {/* Brand Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform group-hover:scale-105">
          <img
            src={LOGO_IMAGE}
            alt="Chukyza Tours Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(255,122,0,0.5)]"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-display text-2xl md:text-3xl text-[#ff7a00] tracking-wider leading-none">
            Chukyza Tours
          </span>
          <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#e0c0af] opacity-90">
            Mazamitla, Jalisco
          </span>
        </div>
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-body text-xs font-bold uppercase tracking-widest text-[#e4e2e1] hover:text-[#ff7a00] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#ff7a00] hover:after:w-full after:transition-all"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/* Weather Widget + Language Switcher + Book Now CTA */}
      <div className="hidden sm:flex items-center gap-3">
        {/* Weather Widget for Mazamitla */}
        <WeatherWidget lang={lang} />

        {/* Language Toggle */}
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#e0c0af] hover:text-white bg-[#2a2a2a]/60 hover:bg-[#353535] px-3 py-2 rounded-xl border border-white/10 transition-all"
          title="Switch Language"
        >
          <Globe className="w-3.5 h-3.5 text-[#ff7a00]" />
          <span>{lang.toUpperCase()}</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/523312345678?text=Hola%20Chukyza%20Tours!%20Quiero%20informaci%C3%B3n%20para%20reservar%20un%20tour%20en%20Mazamitla."
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-xl bg-[#2a2a2a]/60 hover:bg-[#25D366]/20 text-[#25D366] border border-white/10 transition-all"
          title="WhatsApp direct"
        >
          <PhoneCall className="w-4 h-4" />
        </a>

        {/* Primary CTA */}
        <button
          onClick={() => onOpenBooking()}
          className="bg-[#ff7a00] text-[#2b1700] font-body text-xs font-extrabold uppercase tracking-widest px-6 py-3 rounded-xl orange-glow-btn"
        >
          {lang === 'es' ? 'Reserva Ahora' : 'Book Now'}
        </button>
      </div>

      {/* Mobile Toggle Button */}
      <div className="flex sm:hidden items-center gap-2">
        <WeatherWidget lang={lang} />
        <button
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="text-xs font-bold text-[#ff7a00] bg-[#2a2a2a] px-2.5 py-1.5 rounded-lg border border-white/10"
        >
          {lang.toUpperCase()}
        </button>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl bg-[#2a2a2a] text-white border border-white/10"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 w-full bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/10 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-4 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display text-xl uppercase tracking-wider text-white hover:text-[#ff7a00] border-b border-white/5 pb-2"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBooking();
            }}
            className="w-full bg-[#ff7a00] text-[#2b1700] font-body text-sm font-bold uppercase tracking-widest py-3.5 rounded-xl text-center orange-glow mt-2"
          >
            {lang === 'es' ? 'Reserva Ahora' : 'Book Now'}
          </button>
        </div>
      )}
    </header>
  );
};
