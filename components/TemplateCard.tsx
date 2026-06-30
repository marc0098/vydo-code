import React from 'react';
import { Eye } from 'lucide-react';
import { TemplateItem } from '../types';
import WhatsAppIcon from './WhatsAppIcon';

interface TemplateCardProps {
    template: TemplateItem;
    index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
    return (
        <div
            className="group relative rounded-2xl overflow-hidden border border-gray-800/50 hover:border-gray-600/80 transition-all duration-500 animate-fade-in-up flex flex-col h-full"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            {/* Mockup Preview Area */}
            <div
                className="relative h-52 sm:h-60 overflow-hidden cursor-pointer"
                style={{ background: template.gradient }}
            >
                {/* Cover Image */}
                <div className="absolute inset-0">
                    <img
                        src={template.imageUrl}
                        alt={template.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 100%)` }} />
                </div>

                {/* Optional Logo/Profile Photo Element */}
                {template.logoUrl && (
                    <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-center z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                        <img
                            src={template.logoUrl}
                            alt={`${template.title} logo`}
                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 sm:border-4 border-surface shadow-2xl"
                            style={{ borderColor: template.accentColor }}
                        />
                    </div>
                )}

                {/* Hover overlay with CTA (Desktop only) */}
                <div className="absolute inset-0 bg-black/60 hidden lg:flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm z-10">
                    <a href={`/sites/templates/${template.id}/`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-white text-xs font-bold transition-all duration-300 hover:scale-105" style={{ background: template.accentColor }}>
                        <Eye size={14} />
                        Ver Template
                    </a>
                    <a href={`https://wa.me/5538998802822?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o template ' + template.title)}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white text-xs font-bold transition-all duration-300 hover:scale-105">
                        <WhatsAppIcon size={14} />
                        Quero Esse
                    </a>
                </div>

                {/* Badge */}
                {template.badge && (
                    <div
                        className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg z-20"
                        style={{ background: template.accentColor }}
                    >
                        {template.badge}
                    </div>
                )}
            </div>

            {/* Info */}
            <div className="p-4 bg-surface/80 backdrop-blur-md flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white mb-1">{template.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3 flex-1">{template.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4 lg:mb-0">
                    {template.tags.map(tag => (
                        <span
                            key={tag}
                            className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                            style={{ background: `${template.accentColor}15`, color: template.accentColor }}
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Mobile action buttons (Always visible on mobile, hidden on lg screens) */}
                <div className="flex items-center gap-2 lg:hidden w-full mt-auto pt-2 border-t border-gray-800/50">
                    <a href={`/sites/templates/${template.id}/`} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2.5 rounded-lg text-white text-xs font-bold transition-all duration-300 active:scale-95" style={{ background: template.accentColor }}>
                        <Eye size={14} />
                        Ver
                    </a>
                    <a href={`https://wa.me/5538998802822?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o template ' + template.title)}`} target="_blank" rel="noopener noreferrer" className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold transition-all duration-300 active:scale-95">
                        <WhatsAppIcon size={14} />
                        Quero Esse
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;
