import React from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';
import { TemplateItem } from '../types';
import WhatsAppIcon from './WhatsAppIcon';
import MockupPreview from './MockupPreview';

interface TemplateCardProps {
    template: TemplateItem;
    index: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template, index }) => {
    const demoUrl = `/sites/templates/${template.id}/`;
    const whatsappUrl = `https://wa.me/5538998802822?text=${encodeURIComponent('Olá, gostaria de mais informações sobre o template ' + template.title)}`;

    return (
        <div
            className="group relative rounded-2xl overflow-hidden bg-surface backdrop-blur-md border border-white/[0.07] hover:border-white/[0.16] transition-all duration-500 animate-fade-in-up flex flex-col h-full"
            style={{ animationDelay: `${index * 80}ms` }}
        >
            {/* Área do mockup vivo */}
            <div
                className="relative h-52 sm:h-60 overflow-hidden"
                style={{
                    background: `linear-gradient(160deg, ${template.accentColor}22 0%, rgba(10,10,12,0.6) 55%, rgba(10,10,12,0.95) 100%)`,
                }}
            >
                <MockupPreview template={template} className="group-hover:scale-[1.03] transition-transform duration-700" />

                {/* Badge */}
                {template.badge && (
                    <div
                        className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg z-20"
                        style={{ background: template.accentColor, boxShadow: `0 0 18px ${template.accentColor}55` }}
                    >
                        {template.badge}
                    </div>
                )}

                {/* Hover overlay suave */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${template.accentColor}18 0%, transparent 70%)` }}
                />
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-white mb-1">{template.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed mb-3 flex-1">{template.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
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

                {/* Botões de ação — sempre visíveis (desktop) e no hover ganham destaque */}
                <div className="flex items-center gap-2 w-full mt-auto pt-3 border-t border-white/[0.07]">
                    <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2.5 rounded-lg text-white text-xs font-bold transition-all duration-300 active:scale-95 group/btn"
                        style={{ background: `${template.accentColor}22`, border: `1px solid ${template.accentColor}55`, color: template.accentColor }}
                    >
                        <Eye size={14} />
                        <span className="group-hover/btn:hidden">Ver</span>
                        <span className="hidden group-hover/btn:inline">Ver demo</span>
                        <ArrowUpRight size={11} className="opacity-60" />
                    </a>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold transition-all duration-300 active:scale-95 hover:brightness-110"
                    >
                        <WhatsAppIcon size={14} />
                        Quero Esse
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TemplateCard;
