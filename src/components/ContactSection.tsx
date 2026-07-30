import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Language } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock, Copy, Check } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [addressCopied, setAddressCopied] = useState(false);

  const handleCopyAddress = () => {
    const address = "Av. Galeana #45, Col. Centro, Mazamitla, Jalisco, CP 49300";
    navigator.clipboard.writeText(address);
    setAddressCopied(true);
    setTimeout(() => setAddressCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      id="contact" 
      className="py-24 bg-[#f8f7f4] border-t border-[#1a1a1a]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a00] block mb-2 font-mono-meta">
                {lang === 'es' ? 'Ubicación & Contacto' : 'Location & Contact'}
              </span>
              <h2 className="font-serif-editorial text-5xl md:text-6xl uppercase text-[#1a1a1a] tracking-tight leading-none">
                {lang === 'es' ? 'Llega a Nuestra ' : 'Reach the '}
                <span className="text-[#ff7a00] italic">{lang === 'es' ? 'Basecamp' : 'Basecamp'}</span>
              </h2>
              <p className="font-body text-sm text-[#1a1a1a]/70 mt-4 leading-relaxed">
                {lang === 'es'
                  ? 'Visita nuestras instalaciones principales en el centro de Mazamitla para recepción, pruebas de vestuario y salida directa a las rutas.'
                  : 'Visit our central staging headquarters in downtown Mazamitla for briefing, gear fitting, and direct trail access.'}
              </p>
            </div>

            {/* Address & Hours */}
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white border border-[#1a1a1a]/10 shadow-sm">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-serif-editorial text-lg text-[#1a1a1a] block">{lang === 'es' ? 'Dirección Base' : 'HQ Address'}</span>
                    <span className="font-body text-xs text-[#1a1a1a]/70 block">
                      Av. Galeana #45, Col. Centro, Mazamitla, Jalisco, CP 49300
                    </span>
                  </div>
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="px-3 py-2 rounded-xl bg-[#1a1a1a]/5 hover:bg-[#ff7a00] hover:text-[#2b1700] text-[#1a1a1a] text-[11px] font-bold uppercase transition-colors flex items-center gap-1.5 flex-shrink-0 font-mono-meta"
                  title={lang === 'es' ? 'Copiar dirección para mapas' : 'Copy address for maps'}
                >
                  {addressCopied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span className="text-green-600">{lang === 'es' ? '¡Copiado!' : 'Copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{lang === 'es' ? 'Copiar' : 'Copy'}</span>
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#1a1a1a]/10 shadow-sm">
                <Clock className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-serif-editorial text-lg text-[#1a1a1a] block">{lang === 'es' ? 'Horario de Atención' : 'Operating Hours'}</span>
                  <span className="font-body text-xs text-[#1a1a1a]/70">
                    Lunes a Domingo: 8:00 AM – 9:00 PM (Salidas nocturnas previa reserva)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#1a1a1a]/10 shadow-sm">
                <Phone className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-serif-editorial text-lg text-[#1a1a1a] block">{lang === 'es' ? 'Línea Directa / WhatsApp' : 'Direct Line & WhatsApp'}</span>
                  <span className="font-body text-xs text-[#1a1a1a]/70 block">
                    +52 33 1234 5678
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[32px] border border-[#1a1a1a]/10 shadow-xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-serif-editorial text-3xl text-[#1a1a1a] uppercase tracking-wide mb-1">
                    {lang === 'es' ? 'Envíanos un Mensaje' : 'Send a Message'}
                  </h3>
                  <p className="font-body text-xs text-[#1a1a1a]/70">
                    {lang === 'es'
                      ? '¿Tienes preguntas específicas o quieres cotizar un evento privado?'
                      : 'Have specific questions or want a private event quote?'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-2 font-mono-meta">
                      {lang === 'es' ? 'Tu Nombre' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Roberto Morales"
                      className="w-full bg-[#f8f7f4] border border-[#1a1a1a]/10 rounded-xl px-4 py-3 text-xs text-[#1a1a1a] focus:border-[#ff7a00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-2 font-mono-meta">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="piloto@ejemplo.com"
                      className="w-full bg-[#f8f7f4] border border-[#1a1a1a]/10 rounded-xl px-4 py-3 text-xs text-[#1a1a1a] focus:border-[#ff7a00] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#1a1a1a]/70 mb-2 font-mono-meta">
                    {lang === 'es' ? 'Mensaje o Solicitud Especial' : 'Message or Custom Request'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={
                      lang === 'es'
                        ? 'Platícanos sobre la fecha deseada, tamaño del grupo o cualquier duda...'
                        : 'Tell us about your desired dates, group size, or questions...'
                    }
                    className="w-full bg-[#f8f7f4] border border-[#1a1a1a]/10 rounded-xl px-4 py-3 text-xs text-[#1a1a1a] focus:border-[#ff7a00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ff7a00] text-[#2b1700] font-mono-meta text-xs font-bold uppercase tracking-widest orange-glow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
                >
                  <span>{lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ff7a00]/20 text-[#ff7a00] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif-editorial text-4xl text-[#1a1a1a] uppercase tracking-wide">
                  {lang === 'es' ? '¡Mensaje Recibido!' : 'Message Received!'}
                </h3>
                <p className="font-body text-xs text-[#1a1a1a]/70 max-w-md mx-auto">
                  {lang === 'es'
                    ? 'Gracias por escribir a Chukyza Tours. Un coordinador de ruta se pondrá en contacto contigo en menos de 2 horas.'
                    : 'Thank you for contacting Chukyza Tours. A route coordinator will reply to you within 2 hours.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-[#1a1a1a]/5 text-[#1a1a1a] font-bold text-xs uppercase font-mono-meta"
                >
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
