import React from 'react';
import { ExternalLink, ShoppingBag } from 'lucide-react';
import { DemoItem } from '../types';

interface DemoCardProps {
  demo: DemoItem;
}

const DemoCard: React.FC<DemoCardProps> = ({ demo }) => {
  return (
    <div className="bg-surface/40 backdrop-blur-xl rounded-2xl border border-gray-800 overflow-hidden flex flex-col hover:border-primary/50 transition-all duration-500 group shadow-xl hover:shadow-primary/5">
      {/* Image Area */}
      <div className="relative h-40 w-full overflow-hidden">
        <img 
          src={demo.imageUrl} 
          alt={demo.title} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-90" />
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-[10px] uppercase tracking-widest text-primary font-bold mb-1 block">Item do Cardápio</span>
          <h3 className="font-bold text-lg text-white leading-tight">{demo.title}</h3>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-grow flex flex-col justify-between">
        <div>
          <span className="text-[10px] uppercase tracking-widest text-gray-600 font-bold mb-1 block">Descrição para o Cliente</span>
          <p className="text-gray-400 text-xs mb-4 line-clamp-2">
            {demo.description}
          </p>
        </div>

        <div className="flex gap-2 mt-auto">
          <a 
            href={demo.demoUrl} 
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-primary/10 text-primary text-xs font-semibold hover:bg-primary hover:text-white transition-all border border-primary/20"
          >
            <ExternalLink size={14} />
            Ver Demo
          </a>
          {demo.purchaseUrl && (
             <a 
             href={demo.purchaseUrl} 
             className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/5 text-white text-xs font-semibold hover:bg-white hover:text-black transition-all border border-white/10"
           >
             <ShoppingBag size={14} />
             Eu quero este
           </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoCard;
