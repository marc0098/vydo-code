import React from 'react';
import { ArrowLeft, Sparkles, MessageCircle } from 'lucide-react';
import { TemplateCategory } from '../types';
import { SHOWCASE_PAGES, TEMPLATES } from '../templateData';
import TemplateCard from './TemplateCard';
import WhatsAppIcon from './WhatsAppIcon';

interface ShowcasePageProps {
    category: TemplateCategory;
    onBack: () => void;
}

const ShowcasePage: React.FC<ShowcasePageProps> = ({ category, onBack }) => {
    const page = SHOWCASE_PAGES[category];
    const templates = TEMPLATES.filter(t => t.category === category);

    return (
        <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary selection:text-white">

            {/* Background glow */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-[-15%] left-[-20%] w-[520px] h-[520px] rounded-full blur-[130px] opacity-20"
                    style={{ background: page.accentColor }}
                />
                <div
                    className="absolute bottom-[-25%] right-[-15%] w-[450px] h-[450px] rounded-full blur-[110px] opacity-10"
                    style={{ background: page.accentColor }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

                {/* Back button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-white/50 hover:text-white text-sm font-medium mb-8 sm:mb-12 transition-colors duration-300 group focus-visible:outline focus-visible:outline-2 focus-visible:outline-white rounded-lg px-2 py-1 -ml-2"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Voltar
                </button>

                {/* Hero */}
                <header className="mb-10 sm:mb-14 animate-fade-in-up">
                    {/* Category pill */}
                    <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-5"
                        style={{ background: `${page.accentColor}18`, color: page.accentColor, border: `1px solid ${page.accentColor}40` }}
                    >
                        <Sparkles size={10} />
                        {templates.length} Templates disponíveis
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] font-extrabold text-white leading-[1.05] mb-3">
                        {page.title}
                        <br />
                        <span
                            style={{
                                background: `linear-gradient(120deg, ${page.accentColor} 0%, #ffffff 55%)`,
                                WebkitBackgroundClip: 'text',
                                backgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                filter: 'drop-shadow(0 0 18px rgba(0,0,0,0.85))',
                            }}
                        >
                            {page.subtitle}
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-white/50 max-w-md leading-relaxed mt-4">
                        {page.description}
                    </p>
                </header>

                {/* Templates Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-12 sm:mb-16">
                    {templates.map((template, i) => (
                        <TemplateCard key={template.id} template={template} index={i} />
                    ))}
                </section>

                {/* CTA Section */}
                <section className="relative text-center py-10 sm:py-14 rounded-3xl overflow-hidden animate-fade-in-up" style={{ animationDelay: '500ms', background: `${page.accentColor}0a`, border: `1px solid ${page.accentColor}30` }}>
                    <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(circle at 50% 0%, ${page.accentColor}18 0%, transparent 60%)` }} />
                    <div className="relative">
                        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                            Não encontrou o que procura?
                        </h2>
                        <p className="text-sm text-white/50 mb-6 max-w-sm mx-auto">
                            Criamos templates 100% personalizados. Conte o que você precisa e fazemos para você.
                        </p>
                        <a
                            href="https://wa.me/5538998802822?text=Ol%C3%A1%2C%20gostaria%20de%20um%20template%20personalizado"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-lg shadow-green-900/30 hover:scale-105 hover:brightness-110 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MessageCircle size={16} />
                            Falar no WhatsApp
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="text-center pb-20 sm:pb-10 safe-area-bottom">
                    <p className="text-xs text-white/30">
                        &copy; {new Date().getFullYear()} VYDO CODE. Todos os direitos reservados.
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default ShowcasePage;
