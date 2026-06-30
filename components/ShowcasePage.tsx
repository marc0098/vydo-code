import React from 'react';
import { ArrowLeft, Sparkles } from 'lucide-react';
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
                    className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-full blur-[120px] opacity-30"
                    style={{ background: page.accentColor }}
                />
                <div
                    className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
                    style={{ background: page.accentColor }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 py-6 sm:py-10">

                {/* Back button */}
                <button
                    onClick={onBack}
                    className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium mb-8 sm:mb-12 transition-colors duration-300 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    Voltar
                </button>

                {/* Hero */}
                <header className="mb-10 sm:mb-14 animate-fade-in-up">
                    {/* Category pill */}
                    <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4"
                        style={{ background: `${page.accentColor}15`, color: page.accentColor }}
                    >
                        <Sparkles size={10} />
                        {templates.length} Templates
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-2">
                        {page.title}
                        <br />
                        <span style={{ color: page.accentColor }}>{page.subtitle}</span>
                    </h1>

                    {/* Description */}
                    <p className="text-sm sm:text-base text-gray-400 max-w-md leading-relaxed mt-3">
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
                <section className="text-center py-10 sm:py-14 border-t border-gray-800/50 animate-fade-in-up" style={{ animationDelay: '600ms' }}>
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
                        Não encontrou o que procura?
                    </h2>
                    <p className="text-sm text-gray-400 mb-6 max-w-sm mx-auto">
                        Criamos templates 100% personalizados. Conte o que você precisa e fazemos para você.
                    </p>
                    <a
                        href="https://wa.me/5538998802822?text=Ol%C3%A1%2C%20gostaria%20de%20um%20template%20personalizado"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white text-sm font-bold shadow-lg shadow-green-900/30 hover:scale-105 hover:brightness-110 transition-all duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <WhatsAppIcon size={18} />
                        Falar no WhatsApp
                    </a>
                </section>

                {/* Footer */}
                <footer className="text-center pb-20 sm:pb-10 safe-area-bottom">
                    <p className="text-xs text-gray-600">
                        &copy; {new Date().getFullYear()} VYDO CODE. Todos os direitos reservados.
                    </p>
                </footer>

            </div>
        </div>
    );
};

export default ShowcasePage;
