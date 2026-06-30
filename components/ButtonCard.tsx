import React from 'react';
import { ArrowRight } from 'lucide-react';
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
        hover:-translate-y-1 hover:shadow-2xl overflow-hidden cursor-pointer
        ${isPrimary 
          ? 'bg-gradient-to-br from-primary/90 to-primary-glow/90 text-white border border-white/20 shadow-lg shadow-primary/20' 
          : 'glass-card text-white/90'}
      `}
    >
      {/* Animated Background Overlay for Primary */}
      {isPrimary && (
        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      {/* Internal Shimmer Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

      {/* Icon container */}
      <div className={`
        relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center 
        transition-all duration-500 group-hover:scale-110 group-hover:rotate-3
        ${isPrimary 
          ? 'bg-white/20 text-white shadow-inner' 
          : 'bg-primary/10 text-primary-glow border border-primary/20'}
      `}>
        <item.icon size={22} strokeWidth={1.5} />
      </div>

      {/* Label and Info */}
      <div className="relative z-10 flex-grow text-left">
        <span className={`
          block font-bold text-base md:text-lg tracking-tight transition-colors duration-300
          ${isPrimary ? 'text-white' : 'text-white/90 group-hover:text-white'}
        `}>
          {item.label}
        </span>
        {!isSocial && (
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-40 group-hover:opacity-60 transition-opacity">
            {isPrimary ? 'Clique para iniciar' : 'Ver demonstração'}
          </span>
        )}
      </div>

      {/* Premium Arrow */}
      {!isSocial && (
        <div className={`
          relative z-10 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center
          transition-all duration-500 group-hover:bg-white/10
          ${isPrimary ? 'text-white/80 group-hover:text-white' : 'text-white/20 group-hover:text-primary-glow'}
        `}>
          <ArrowRight size={18} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
        </div>
      )}
    </a>
  );
};


export default ButtonCard;
