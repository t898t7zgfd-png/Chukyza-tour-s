import React from 'react';
import { Eye } from 'lucide-react';

interface SidebarNavProps {
  isHighContrast: boolean;
  setIsHighContrast: (val: boolean) => void;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ isHighContrast, setIsHighContrast }) => {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-[80px] border-r border-white/10 flex-col justify-between py-8 items-center bg-[#0c0c0c] text-[#e4e2e1] z-40 select-none">
      <span className="font-mono-meta text-[11px] tracking-widest text-[#ff7a00] font-bold">[2024]</span>
      <a 
        href="#"
        className="font-bold text-xs tracking-[0.28em] vertical-text uppercase text-white/80 hover:text-[#ff7a00] transition-colors py-4"
      >
        CHUKYZA TOURS • SIERRA DEL TIGRE
      </a>
      <button
        onClick={() => setIsHighContrast(!isHighContrast)}
        className={`p-2.5 rounded-xl border transition-all ${
          isHighContrast
            ? 'bg-yellow-400 text-black border-white font-bold shadow-[0_0_15px_rgba(255,255,0,0.5)]'
            : 'bg-[#1a1a1a] text-[#ff7a00] border-white/10 hover:bg-[#252525]'
        }`}
        title={isHighContrast ? 'Disable High Contrast' : 'Enable High Contrast Mode'}
      >
        <Eye className="w-4 h-4" />
      </button>
    </aside>
  );
};
