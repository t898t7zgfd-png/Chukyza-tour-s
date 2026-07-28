import React, { useState } from 'react';
import { Language } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-[#0e0e0e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#ff7a00] block mb-2">
                {lang === 'es' ? 'Ubicación & Contacto' : 'Location & Contact'}
              </span>
              <h2 className="font-display text-5xl md:text-6xl uppercase text-white tracking-tight leading-none">
                {lang === 'es' ? 'Llega a Nuestra ' : 'Reach the '}
                <span className="text-[#ff7a00] text-glow">{lang === 'es' ? 'Basecamp' : 'Basecamp'}</span>
              </h2>
              <p className="font-body text-sm text-[#e0c0af] mt-4 leading-relaxed">
                {lang === 'es'
                  ? 'Visita nuestras instalaciones principales en el centro de Mazamitla para recepción, pruebas de vestuario y salida directa a las rutas.'
                  : 'Visit our central staging headquarters in downtown Mazamitla for briefing, gear fitting, and direct trail access.'}
              </p>
            </div>

            {/* Address & Hours */}
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1b1c1c] border border-white/5">
                <MapPin className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-display text-lg text-white uppercase block">{lang === 'es' ? 'Dirección Base' : 'HQ Address'}</span>
                  <span className="font-body text-xs text-[#e0c0af]">
                    Av. Galeana #45, Col. Centro, Mazamitla, Jalisco, CP 49300
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1b1c1c] border border-white/5">
                <Clock className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-display text-lg text-white uppercase block">{lang === 'es' ? 'Horario de Atención' : 'Operating Hours'}</span>
                  <span className="font-body text-xs text-[#e0c0af]">
                    Lunes a Domingo: 8:00 AM – 9:00 PM (Salidas nocturnas previa reserva)
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#1b1c1c] border border-white/5">
                <Phone className="w-6 h-6 text-[#ff7a00] flex-shrink-0 mt-1" />
                <div>
                  <span className="font-display text-lg text-white uppercase block">{lang === 'es' ? 'Línea Directa / WhatsApp' : 'Direct Line & WhatsApp'}</span>
                  <span className="font-body text-xs text-[#e0c0af] block">
                    +52 33 1234 5678
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-[#1b1c1c] p-8 md:p-12 rounded-[32px] border border-white/10 shadow-2xl">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <h3 className="font-display text-3xl uppercase text-white tracking-wider mb-1">
                    {lang === 'es' ? 'Envíanos un Mensaje' : 'Send a Message'}
                  </h3>
                  <p className="font-body text-xs text-[#e0c0af]">
                    {lang === 'es'
                      ? '¿Tienes preguntas específicas o quieres cotizar un evento privado?'
                      : 'Have specific questions or want a private event quote?'}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2">
                      {lang === 'es' ? 'Tu Nombre' : 'Your Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Roberto Morales"
                      className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="piloto@ejemplo.com"
                      className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2">
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
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#ff7a00] text-[#2b1700] font-body text-xs font-extrabold uppercase tracking-widest orange-glow flex items-center justify-center gap-2"
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
                <h3 className="font-display text-4xl text-white uppercase tracking-wider">
                  {lang === 'es' ? '¡Mensaje Recibido!' : 'Message Received!'}
                </h3>
                <p className="font-body text-xs text-[#e0c0af] max-w-md mx-auto">
                  {lang === 'es'
                    ? 'Gracias por escribir a Chukyza Tours. Un coordinador de ruta se pondrá en contacto contigo en menos de 2 horas.'
                    : 'Thank you for contacting Chukyza Tours. A route coordinator will reply to you within 2 hours.'}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-3 rounded-xl bg-[#2a2a2a] text-white font-bold text-xs uppercase"
                >
                  {lang === 'es' ? 'Enviar otro mensaje' : 'Send another message'}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
