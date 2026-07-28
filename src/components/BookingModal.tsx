import React, { useState } from 'react';
import { Tour, Language, BookingFormData } from '../types';
import { TOURS_DATA, PACKAGES_DATA } from '../data/toursData';
import { X, Calendar, Clock, Users, Shield, Check, Send, Sparkles, Video, Utensils, Award } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  initialTourId?: string;
  initialPackageId?: string;
  lang: Language;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  initialTourId,
  initialPackageId,
  lang,
  onClose,
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BookingFormData>({
    tourId: initialTourId || TOURS_DATA[0].id,
    packageId: initialPackageId || PACKAGES_DATA[1].id,
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
    timeSlot: '10:00 AM',
    ridersCount: 2,
    vehiclesCount: 1,
    fullName: '',
    email: '',
    phone: '',
    notes: '',
    addOnsGopro: true,
    addOnsVipGuide: false,
    addOnsSnackPack: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resCode, setResCode] = useState('');

  const selectedTour = TOURS_DATA.find((t) => t.id === formData.tourId) || TOURS_DATA[0];

  // Price Calculation
  const baseTourPrice = selectedTour.price * formData.vehiclesCount;
  const goproPrice = formData.addOnsGopro ? 35 : 0;
  const vipPrice = formData.addOnsVipGuide ? 50 : 0;
  const snackPrice = formData.addOnsSnackPack ? 25 : 0;
  const totalPrice = baseTourPrice + goproPrice + vipPrice + snackPrice;

  const timeSlots = ['09:00 AM', '11:30 AM', '02:00 PM', '04:30 PM (Twilight)', '06:30 PM (Night)'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedCode = 'CHK-' + Math.floor(100000 + Math.random() * 900000);
    setResCode(generatedCode);
    setIsSubmitted(true);
  };

  const getWhatsAppMessage = () => {
    const text = `*NUEVA RESERVA CHUKYZA TOURS*%0A` +
      `--------------------------------%0A` +
      `*Código:* ${resCode}%0A` +
      `*Nombre:* ${formData.fullName}%0A` +
      `*Tour:* ${selectedTour.title[lang]}%0A` +
      `*Fecha:* ${formData.date} - ${formData.timeSlot}%0A` +
      `*Pasajeros:* ${formData.ridersCount} personas (${formData.vehiclesCount} UTV)%0A` +
      `*Adicionales:* ${formData.addOnsGopro ? 'GoPro HD, ' : ''}${formData.addOnsVipGuide ? 'Guía VIP, ' : ''}${formData.addOnsSnackPack ? 'Snack Pack' : ''}%0A` +
      `*Total Estimado:* $${totalPrice} USD%0A` +
      `--------------------------------%0A` +
      `¡Hola! Confirmo disponibilidad para mi reserva.`;
    return `https://wa.me/523312345678?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#1b1c1c] border border-white/10 rounded-[28px] overflow-hidden shadow-2xl my-6">
        {/* Modal Header */}
        <div className="p-6 bg-[#0e0e0e] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#ff7a00]/10 border border-[#ff7a00]/30 text-[#ff7a00]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display text-3xl uppercase text-white tracking-wider leading-none">
                {lang === 'es' ? 'Reserva tu Expedición' : 'Book Your Expedition'}
              </h2>
              <span className="text-xs text-[#e0c0af] font-body">
                {lang === 'es' ? 'Mazamitla, Jalisco • Confirmación Inmediata' : 'Mazamitla, Jalisco • Instant Confirmation'}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 bg-[#2a2a2a] hover:bg-[#353535] text-white rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Step 1: Select Tour */}
            <div>
              <label className="block font-display text-xl uppercase text-[#ff7a00] mb-3">
                1. {lang === 'es' ? 'Selecciona tu Ruta' : 'Select Tour'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TOURS_DATA.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, tourId: t.id })}
                    className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                      formData.tourId === t.id
                        ? 'bg-[#2a2a2a] border-[#ff7a00] shadow-[0_0_20px_rgba(255,122,0,0.2)]'
                        : 'bg-[#131313] border-white/10 hover:border-white/30'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase text-[#ff7a00] block mb-1">
                        {t.tag[lang]}
                      </span>
                      <h4 className="font-display text-xl text-white leading-tight">
                        {t.title[lang]}
                      </h4>
                    </div>
                    <span className="font-display text-2xl text-[#ff7a00] mt-3 font-bold">
                      ${t.price} USD
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Date, Time, Riders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-[#ff7a00]" />
                  <span>{lang === 'es' ? 'Fecha de Salida' : 'Departure Date'}</span>
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#ff7a00]" />
                  <span>{lang === 'es' ? 'Horario' : 'Time Slot'}</span>
                </label>
                <select
                  value={formData.timeSlot}
                  onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-[#e0c0af] mb-2 flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#ff7a00]" />
                  <span>{lang === 'es' ? 'Número de Pasajeros' : 'Number of Riders'}</span>
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={formData.ridersCount}
                    onChange={(e) =>
                      setFormData({ ...formData, ridersCount: parseInt(e.target.value) })
                    }
                    className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                  >
                    {[1, 2, 3, 4, 6, 8, 10, 12].map((num) => (
                      <option key={num} value={num}>
                        {num} {lang === 'es' ? 'personas' : 'riders'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Step 3: Add-Ons */}
            <div>
              <label className="block font-display text-xl uppercase text-[#ff7a00] mb-3">
                3. {lang === 'es' ? 'Adicionales Recomendados' : 'Recommended Add-Ons'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div
                  onClick={() =>
                    setFormData({ ...formData, addOnsGopro: !formData.addOnsGopro })
                  }
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    formData.addOnsGopro
                      ? 'bg-[#2a2a2a] border-[#ff7a00]'
                      : 'bg-[#131313] border-white/10'
                  }`}
                >
                  <Video className="w-5 h-5 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white block">GoPro HD Package (+$35)</span>
                    <span className="text-[10px] text-[#e0c0af]">
                      {lang === 'es' ? 'Renta de cámara GoPro 12 + Memoria SD de regalo' : 'GoPro 12 rental + SD memory included'}
                    </span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setFormData({ ...formData, addOnsVipGuide: !formData.addOnsVipGuide })
                  }
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    formData.addOnsVipGuide
                      ? 'bg-[#2a2a2a] border-[#ff7a00]'
                      : 'bg-[#131313] border-white/10'
                  }`}
                >
                  <Award className="w-5 h-5 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white block">VIP Dedicated Guide (+$50)</span>
                    <span className="text-[10px] text-[#e0c0af]">
                      {lang === 'es' ? 'Guía exclusivo asignado solo a tu grupo' : 'Exclusive lead guide dedicated to your group'}
                    </span>
                  </div>
                </div>

                <div
                  onClick={() =>
                    setFormData({ ...formData, addOnsSnackPack: !formData.addOnsSnackPack })
                  }
                  className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 ${
                    formData.addOnsSnackPack
                      ? 'bg-[#2a2a2a] border-[#ff7a00]'
                      : 'bg-[#131313] border-white/10'
                  }`}
                >
                  <Utensils className="w-5 h-5 text-[#ff7a00] flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-xs text-white block">Gourmet Snack Pack (+$25)</span>
                    <span className="text-[10px] text-[#e0c0af]">
                      {lang === 'es' ? 'Bebidas energéticas, carnes frías y chocolates' : 'Energy drinks, charcuterie & chocolates'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Contact Details */}
            <div>
              <label className="block font-display text-xl uppercase text-[#ff7a00] mb-3">
                4. {lang === 'es' ? 'Tus Datos de Contacto' : 'Your Contact Details'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  placeholder={lang === 'es' ? 'Nombre Completo' : 'Full Name'}
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                />
                <input
                  type="tel"
                  required
                  placeholder={lang === 'es' ? 'WhatsApp / Teléfono' : 'WhatsApp / Phone'}
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#131313] border border-white/10 rounded-xl px-4 py-3 text-xs text-white focus:border-[#ff7a00] focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs uppercase text-[#e0c0af] block">
                  {lang === 'es' ? 'Total Estimado de Reserva:' : 'Total Reservation Estimated:'}
                </span>
                <span className="font-display text-4xl text-[#ff7a00] font-bold text-glow">
                  ${totalPrice} USD
                </span>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-[#ff7a00] text-[#2b1700] text-sm font-extrabold uppercase tracking-widest orange-glow flex items-center justify-center gap-2"
              >
                <span>{lang === 'es' ? 'Generar Pauta de Reserva' : 'Generate Reservation Pass'}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Pass Screen */
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#25D366]/20 border border-[#25D366] text-[#25D366] flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h3 className="font-display text-4xl text-white uppercase tracking-wider">
              {lang === 'es' ? '¡Pre-Reserva Generada con Éxito!' : 'Pre-Booking Successfully Created!'}
            </h3>

            <div className="max-w-md mx-auto bg-[#131313] p-6 rounded-2xl border border-white/10 text-left space-y-3 font-body text-xs">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#e0c0af]">{lang === 'es' ? 'Código de Pase:' : 'Pass Code:'}</span>
                <span className="font-bold text-[#ff7a00] font-mono">{resCode}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#e0c0af]">{lang === 'es' ? 'Titular:' : 'Name:'}</span>
                <span className="font-bold text-white">{formData.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#e0c0af]">{lang === 'es' ? 'Ruta Seleccionada:' : 'Selected Tour:'}</span>
                <span className="font-bold text-white">{selectedTour.title[lang]}</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-[#e0c0af]">{lang === 'es' ? 'Fecha & Hora:' : 'Date & Time:'}</span>
                <span className="font-bold text-white">{formData.date} @ {formData.timeSlot}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#e0c0af]">{lang === 'es' ? 'Total Estimado:' : 'Total Estimated:'}</span>
                <span className="font-bold text-[#ff7a00] text-sm">${totalPrice} USD</span>
              </div>
            </div>

            <p className="font-body text-xs text-[#e0c0af] max-w-lg mx-auto">
              {lang === 'es'
                ? 'Haz clic abajo para enviar tu código directamente al equipo de Chukyza Tours vía WhatsApp para apartar tu horario de salida.'
                : 'Click below to send your reservation pass directly to Chukyza Tours via WhatsApp to hold your slot.'}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] text-black font-extrabold text-xs uppercase tracking-widest flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(37,211,102,0.4)]"
              >
                <span>{lang === 'es' ? 'Enviar a WhatsApp Oficial' : 'Send to Official WhatsApp'}</span>
                <Send className="w-4 h-4" />
              </a>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-6 py-4 rounded-xl border border-white/20 text-xs font-bold uppercase text-white hover:bg-white/10"
              >
                {lang === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
