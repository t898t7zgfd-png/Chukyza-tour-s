import React, { useState } from 'react';
import { Language } from '../types';
import { FAQS_DATA } from '../data/toursData';
import { ChevronDown, HelpCircle, Search } from 'lucide-react';

interface FaqSectionProps {
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ lang }) => {
  const [openId, setOpenId] = useState<string | null>(FAQS_DATA[0].id);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFaqs = FAQS_DATA.filter((faq) => {
    const q = faq.question[lang].toLowerCase();
    const a = faq.answer[lang].toLowerCase();
    const query = searchQuery.toLowerCase();
    return q.includes(query) || a.includes(query);
  });

  return (
    <section id="faq" className="py-24 bg-[#131313] border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 md:px-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ff7a00] mb-2">
            <HelpCircle className="w-4 h-4" />
            <span>{lang === 'es' ? 'Resolvemos tus Dudas' : 'Clear Answers'}</span>
          </div>
          <h2 className="font-display text-5xl md:text-7xl uppercase text-white tracking-tight">
            {lang === 'es' ? 'Preguntas ' : 'Frequently Asked '}
            <span className="text-[#ff7a00] text-glow">{lang === 'es' ? 'Frecuentes' : 'Questions'}</span>
          </h2>
          <p className="font-body text-sm md:text-base text-[#e0c0af] max-w-lg mx-auto mt-2">
            {lang === 'es'
              ? 'Todo lo que necesitas saber antes de tu primera aventura off-road en Mazamitla.'
              : 'Everything you need to know before your first off-road expedition.'}
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8 max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#ff7a00]" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              lang === 'es' ? 'Buscar pregunta o tema (licencia, ropa, niños)...' : 'Search questions (license, clothes, kids)...'
            }
            className="w-full bg-[#1b1c1c] border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-[#e0c0af]/50 focus:border-[#ff7a00] focus:outline-none"
          />
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;

            return (
              <div
                key={faq.id}
                className="bg-[#1b1c1c] rounded-2xl border border-white/10 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-display text-2xl uppercase text-white tracking-wide">
                    {faq.question[lang]}
                  </span>
                  <div
                    className={`p-2 rounded-full bg-[#2a2a2a] text-[#ff7a00] transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#ff7a00] text-[#2b1700]' : ''
                    }`}
                  >
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 font-body text-xs sm:text-sm text-[#e0c0af] leading-relaxed border-t border-white/5 mt-2 pt-4">
                    {faq.answer[lang]}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
