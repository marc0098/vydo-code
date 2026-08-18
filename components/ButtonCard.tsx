import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LinkItem } from '../types';

interface ButtonCardProps {
  item: LinkItem;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ item, onClick }) => {
  const isPrimary = item.type === 'primary';
  const isSocial = item.type === 'social';

  return (
    <a
      href={item.url}
      onClick={onClick}
      className={`
        group relative w-full flex items-center gap-4 p-4 mb-3 rounded-2xl 
        transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1)
        hover:-translate-y-1 overflow-hidden cursor-pointer
        ${isPrimary
          ? 'text-white border border-white/15 shadow-lg shadow-primary/25'
          : 'glass-card text-white/90'}
      `}
      style={isPrimary ? {
        background: 'linear-gradient(120deg, rgba(139,92,246,0.9) 0%, rgba(56,189,248,0.8) 100%)',
      } : undefined}
    >
      {/* Internal Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      {/* Icon container */}
      <div className={`
        relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center 
        transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
        ${isPrimary
          ? 'bg-white/20 text-white shadow-inner backdrop-blur-sm'
          : 'bg-primary/10 text-primary-glow border border-primary/25'}
      `}>
        <item.icon size={22} strokeWidth={1.5} />
      </div>

      {/* Label and Info */}
      <div className="relative z-10 flex-grow text-left min-w-0">
        <span className={`
          block font-bold text-base md:text-lg tracking-tight transition-colors duration-300
          ${isPrimary ? 'text-white' : 'text-white/90 group-hover:text-white'}
        `}>
          {item.label}
        </span>
        {!isSocial && item.description && (
          <span className="block text-[11px] text-white/40 group-hover:text-white/60 transition-colors mt-0.5 truncate">
            {item.description}
          </span>
        )}
      </div>

      {/* Hint pill + arrow */}
      {!isSocial && (
        <div className="relative z-10 flex-shrink-0 flex items-center gap-2">
          {item.hint && (
            <span
              className={`
                text-[9px] font-bold uppercase tracking-[0.15em] px-2 py-1 rounded-full
                ${isPrimary ? 'bg-white/15 text-white' : 'text-white/35 bg-white/[0.04] group-hover:text-primary-glow'}
              `}
            >
              {item.hint}
            </span>
          )}
          <div className={`
            w-8 h-8 rounded-full flex items-center justify-center
            transition-all duration-500
            ${isPrimary ? 'text-white/80 group-hover:text-white group-hover:bg-white/10' : 'text-white/20 group-hover:text-primary-glow group-hover:bg-white/[0.06]'}
          `}>
            <ArrowUpRight size={17} strokeWidth={2} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        </div>
      )}
    </a>
  );
};


export default ButtonCard;
