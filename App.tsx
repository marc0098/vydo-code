import React, { useState, useEffect } from 'react';
import { ArrowRight, ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';
import { applySeo, HOME_SEO, CATEGORY_SEO } from './seo';

// Components
import ButtonCard from './components/ButtonCard';
import VydoLogo from './components/VydoLogo';
import ShowcasePage from './components/ShowcasePage';
import { TemplateCategory } from './types';

// Data
import { MAIN_LINKS, DEMOS } from './constants';

const SHOWCASE_IDS: string[] = ['linknabio', 'ecommerce', 'sites', 'webapp'];

const WHATSAPP = 'https://wa.me/5538998802822';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<TemplateCategory | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/categoria/')) {
        const cat = hash.replace('#/categoria/', '') as TemplateCategory;
        if (SHOWCASE_IDS.includes(cat)) {
          setCurrentPage(cat);
          applySeo(CATEGORY_SEO[cat] ?? HOME_SEO);
          window.scrollTo({ top: 0 });
          return;
        }
      }
      setCurrentPage(null);
      applySeo(HOME_SEO);
    };

    // Initialize on load
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleLinkClick = (id: string, e: React.MouseEvent) => {
    // Let standard anchor tag handling update the hash, except if it's not a showcase ID
    if (!SHOWCASE_IDS.includes(id) && id !== 'whatsapp') {
      e.preventDefault();
    }
  };

  if (currentPage) {
    return <ShowcasePage category={currentPage} onBack={() => { window.location.hash = '#/'; }} />;
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden selection:bg-primary selection:text-white font-sans">

      {/* Premium Ambient Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-primary-glow/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />

        {/* Subtle Grid Texture */}
        <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* Noise texture */}
        <div className="noise-overlay" />
      </div>

      {/* Main Content Container */}
      <main className="relative z-10 max-w-lg mx-auto min-h-screen px-6 py-12 flex flex-col items-center">

        {/* HERO SECTION */}
        <header className="w-full flex flex-col items-center text-center mb-12 animate-fade-in-up">

          {/* Logo & Identity */}
          <div className="mb-10 transform-gpu hover:scale-105 transition-transform duration-500">
            <VydoLogo />
          </div>

          {/* Profile Circle */}
          <div className="relative mb-8 group">
            {/* Spinning Colored Gradient Ring */}
            <div className="absolute inset-[-4px] rounded-full overflow-hidden z-0">
              <div className="absolute inset-[-50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,#25D366,#0066ff,#a855f7,#22d3ee,#25D366)] animate-[spin-gradient_3s_linear_infinite]"></div>
            </div>

            <div className="relative z-10 w-28 h-28 rounded-full p-[3px] bg-background">
              <img
                src="/profile.png"
                alt="VYDO CODE"
                className="w-full h-full rounded-full object-cover border-2 border-background/50 grayscale-[0.2] group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-2xl -z-10 group-hover:bg-primary/30 transition-all duration-700" />
          </div>

          {/* Slogan / Headline */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-primary-glow bg-primary/10 border border-primary/25 mb-5">
              <Sparkles size={10} />
              Desenvolvedor Frontend Premium
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.05]">
              Que tal criar um <br />
              <span className="gradient-text">projeto</span> comigo?
            </h1>
            <p className="text-sm text-white/45 mt-4 max-w-xs mx-auto leading-relaxed">
              Landing pages, e-commerces, sites institucionais e apps web sob medida — com design de alta conversão.
            </p>
          </div>


          {/* Primary CTA - Glass Button Style */}
          <a
            href={`${WHATSAPP}?text=Ol%C3%A1%2C%20gostaria%20de%20criar%20um%20projeto%20com%20voc%C3%AA!`}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button relative group inline-flex items-center gap-4 px-8 py-4 rounded-2xl text-white font-bold text-base overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            <span className="relative z-10">Solicitar Projeto</span>
            <div className="relative z-10 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </div>
          </a>
        </header>

        {/* LINKS SECTION */}
        <section className="w-full space-y-2 mb-14 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
          <h2 className="text-center text-[11px] font-black tracking-[0.35em] text-white/40 uppercase mb-6">
            O que eu construo
          </h2>
          {MAIN_LINKS.filter(l => l.id !== 'whatsapp').map((link) => (
            <ButtonCard
              key={link.id}
              item={link}
              onClick={(e) => handleLinkClick(link.id, e)}
            />
          ))}
        </section>

        {/* FEATURED DEMOS */}
        <section className="w-full mb-14 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-center text-[11px] font-black tracking-[0.35em] text-white/40 uppercase mb-6">
            Projetos em Destaque
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {DEMOS.map((demo) => (
              <a
                key={demo.id}
                href={demo.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden glass-card"
              >
                <div
                  className="h-1 w-full"
                  style={{ background: `linear-gradient(90deg, ${demo.accentColor}, transparent)` }}
                />
                <div className="p-4 flex flex-col items-start gap-2">
                  <span className="text-sm font-extrabold text-white group-hover:text-white transition-colors">
                    {demo.title}
                  </span>
                  <span className="text-[10px] leading-relaxed text-white/40 group-hover:text-white/60 transition-colors line-clamp-2">
                    {demo.description}
                  </span>
                  <span className="mt-1 inline-flex items-center gap-1 text-[9px] uppercase tracking-[0.15em] font-bold" style={{ color: demo.accentColor }}>
                    Ver demo <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="w-full mb-14 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <h2 className="text-center text-[11px] font-black tracking-[0.35em] text-white/40 uppercase mb-6">
            Como funciona
          </h2>
          <div className="flex flex-col gap-3">
            {[
              { step: '01', title: 'Escolha', text: 'Selecione uma categoria ou me conte sua ideia pelo WhatsApp.' },
              { step: '02', title: 'Conversamos', text: 'Alinhamos objetivos, referências visuais e prazo do projeto.' },
              { step: '03', title: 'Entrego', text: 'Seu projeto no ar, rápido, responsivo e pronto para converter.' },
            ].map((item) => (
              <div key={item.step} className="glass-card rounded-2xl p-4 flex items-center gap-4">
                <span className="text-lg font-extrabold gradient-text shrink-0">{item.step}</span>
                <div>
                  <div className="text-sm font-bold text-white">{item.title}</div>
                  <div className="text-[11px] text-white/40 leading-relaxed">{item.text}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="w-full text-center mt-auto pb-12 safe-area-bottom animate-fade-in-up" style={{ animationDelay: '400ms' }}>
          <div className="h-[1px] w-12 bg-white/10 mx-auto mb-8"></div>

          <div className="flex justify-center items-center gap-3 mb-6">
            <span className="text-[10px] font-black tracking-[0.3em] text-white/40 uppercase">
              Powered by <span className="text-white/80">VYDO CODE</span>
            </span>
          </div>

          <p className="text-[10px] text-white/30 mb-4 font-medium">
            &copy; {new Date().getFullYear()} Todos os direitos reservados.
          </p>

          <div className="flex justify-center gap-6 text-[9px] text-white/20 uppercase tracking-[0.2em] font-bold">
            <button type="button" onClick={() => alert('Página de Termos de Uso em breve!')} className="hover:text-white/60 transition-colors cursor-pointer">Termos</button>
            <button type="button" onClick={() => alert('Política de Privacidade em breve!')} className="hover:text-white/60 transition-colors cursor-pointer">Privacidade</button>
          </div>
        </footer>

      </main>

      {/* FLOATING WHATSAPP */}
      <a
        href={WHATSAPP}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full glass-button shadow-2xl group transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        aria-label="Falar no WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 group-hover:scale-110 transition-transform">
          <path fill="#25D366" d="M11.996 0c6.602 0 11.956 5.354 11.956 11.956 0 6.602-5.354 11.956-11.956 11.956-2.126 0-4.122-.556-5.856-1.541l-6.138 2.051 2.083-5.996c-1.129-1.876-1.782-4.108-1.782-6.47C0 5.354 5.354 0 11.996 0" />
          <path fill="#ffffff" d="M18.805 15.354c-.303-.151-1.791-.885-2.067-.985-.275-.1-.476-.151-.676.151-.201.303-.781.985-.956 1.186-.176.201-.351.226-.654.075-.301-.151-1.278-.471-2.435-1.502-.901-.803-1.508-1.796-1.684-2.098-.176-.301-.019-.465.132-.617.135-.136.301-.354.451-.53.151-.176.201-.303.303-.506.1-.205.051-.383-.025-.533-.075-.151-.676-1.643-.926-2.251-.246-.59-.496-.511-.676-.52-.176-.008-.376-.008-.576-.008a1.109 1.109 0 0 0-.803.376c-.276.303-1.054 1.036-1.054 2.527s1.079 2.932 1.231 3.136c.151.201 2.135 3.259 5.172 4.568.721.311 1.284.498 1.724.637.724.231 1.385.198 1.905.12.583-.086 1.791-.733 2.043-1.442.251-.708.251-1.314.176-1.442-.075-.125-.276-.201-.578-.351" />
        </svg>
      </a>

    </div>
  );
};


export default App;
