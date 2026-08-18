import React from 'react';
import { TemplateItem } from '../types';

interface MockupPreviewProps {
  template: TemplateItem;
  className?: string;
}

/**
 * Mockup CSS vivo: representa visualmente o template sem imagens externas.
 * Cada mockupKind desenha um mini-layout característico do tipo de projeto.
 */
const MockupPreview: React.FC<MockupPreviewProps> = ({ template, className = '' }) => {
  const accent = template.accentColor;
  const lines = template.mockupLines ?? [];

  const toRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${alpha})`;
  };

  // ── BIO: avatar + pilha de botões de link ──
  if (template.mockupKind === 'bio') {
    return (
      <div className={`relative w-full h-full flex flex-col items-center justify-start gap-3 p-6 ${className}`}>
        {/* Mini avatar */}
        <div
          className="w-12 h-12 rounded-full border-2 flex items-center justify-center text-white/90 text-[10px] font-extrabold tracking-wide shrink-0"
          style={{ borderColor: accent, background: toRgba(accent, 0.18) }}
        >
          {template.title.charAt(0)}
        </div>
        <div className="text-[8px] font-bold text-white/70 tracking-wider uppercase">
          {template.title}
        </div>
        {/* Botões de link */}
        <div className="w-full flex flex-col gap-1.5 mt-1">
          {(lines.length ? lines : ['Link 1', 'Link 2', 'Link 3']).map((line, i) => (
            <div
              key={i}
              className="w-full rounded-lg px-3 py-2 text-[8px] font-semibold text-white/90 text-center flex items-center justify-center gap-1.5"
              style={{
                background: toRgba(accent, i === 0 ? 0.55 : 0.12),
                border: `1px solid ${toRgba(accent, i === 0 ? 0.7 : 0.25)}`,
              }}
            >
              {i === 0 && (
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] flex items-center justify-center text-[6px] font-black text-white">W</span>
              )}
              {line}
            </div>
          ))}
        </div>
        {/* Ícones sociais */}
        <div className="flex gap-2 mt-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-full"
              style={{ background: toRgba(accent, 0.15), border: `1px solid ${toRgba(accent, 0.3)}` }}
            />
          ))}
        </div>
      </div>
    );
  }

  // ── SHOP: header + grade de produtos ──
  if (template.mockupKind === 'shop') {
    return (
      <div className={`relative w-full h-full flex flex-col p-4 gap-2.5 ${className}`}>
        {/* Header da loja */}
        <div className="flex items-center justify-between">
          <div className="text-[8px] font-extrabold text-white/90 tracking-wide">{template.title}</div>
          <div
            className="w-7 h-5 rounded-md flex items-center justify-center text-[6px] font-black text-white"
            style={{ background: accent }}
          >
            SAC
          </div>
        </div>
        {/* Barra de busca */}
        <div className="w-full h-5 rounded-md" style={{ background: toRgba("#ffffff", 0.05), border: `1px solid ${toRgba(accent, 0.2)}` }} />
        {/* Grade de produtos 2x2 */}
        <div className="grid grid-cols-2 gap-2 flex-1">
          {['', '', '', ''].map((_, i) => (
            <div key={i} className="rounded-lg flex flex-col" style={{ background: toRgba("#ffffff", 0.03), border: `1px solid ${toRgba(accent, 0.15)}` }}>
              {/* Imagem do produto */}
              <div
                className="h-14 rounded-t-lg w-full"
                style={{
                  background: `linear-gradient(135deg, ${toRgba(accent, 0.25)} 0%, ${toRgba(accent, 0.08)} 100%)`,
                }}
              />
              <div className="p-1.5 space-y-1">
                <div className="h-1.5 rounded-full bg-white/20 w-3/4" />
                <div className="h-1 rounded-full bg-white/10 w-1/2" />
                <div className="flex items-center justify-between">
                  <div className="h-1.5 rounded-full w-1/3" style={{ background: accent, opacity: 0.8 }} />
                  <div className="w-4 h-4 rounded-md flex items-center justify-center text-[5px] font-black text-white" style={{ background: accent }}>+</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── SITE: hero de site com seções ──
  if (template.mockupKind === 'site') {
    return (
      <div className={`relative w-full h-full flex flex-col ${className}`}>
        {/* Nav */}
        <div className="flex items-center justify-between px-4 py-2" style={{ background: toRgba("#000000", 0.35) }}>
          <div className="text-[8px] font-extrabold text-white/90 tracking-wide">{template.title}</div>
          <div className="flex gap-1.5">
            {(lines.length ? lines : ['Sobre', 'Serviços', 'Contato']).map((line, i) => (
              <div
                key={i}
                className="px-1.5 py-0.5 rounded text-[5.5px] font-semibold text-white/70"
                style={{ background: toRgba(accent, 0.15), border: `1px solid ${toRgba(accent, 0.25)}` }}
              >
                {line}
              </div>
            ))}
          </div>
        </div>
        {/* Hero */}
        <div
          className="flex-1 flex flex-col items-center justify-center gap-2 px-4 text-center"
          style={{
            background: `linear-gradient(160deg, ${toRgba(accent, 0.22)} 0%, transparent 60%), rgba(0,0,0,0.2)`,
          }}
        >
          <div className="h-2 w-24 rounded-full bg-white/25" />
          <div className="h-2 w-16 rounded-full bg-white/15" />
          <div
            className="mt-1 px-3 py-1 rounded-md text-[6px] font-black text-white"
            style={{ background: accent }}
          >
            Começar agora
          </div>
        </div>
        {/* Cards de seção */}
        <div className="grid grid-cols-3 gap-1.5 px-3 pb-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-10 rounded-lg" style={{ background: toRgba("#ffffff", 0.04), border: `1px solid ${toRgba(accent, 0.15)}` }}>
              <div className="m-1.5 h-1.5 rounded-full w-2/3" style={{ background: toRgba(accent, 0.5) }} />
              <div className="mx-1.5 h-1 rounded-full bg-white/10" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // ── APP: painel de aplicação ──
  return (
    <div className={`relative w-full h-full flex ${className}`}>
      {/* Sidebar */}
      <div className="w-8 flex flex-col gap-1.5 px-1.5 py-2" style={{ background: toRgba("#000000", 0.35) }}>
        <div className="h-4 w-4 rounded-md mx-auto" style={{ background: accent, opacity: 0.8 }} />
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="h-1.5 w-4 rounded-full bg-white/10 mx-auto" />
        ))}
      </div>
      {/* Conteúdo do painel */}
      <div className="flex-1 flex flex-col gap-2 p-3">
        {/* Barra superior */}
        <div className="flex items-center justify-between">
          <div className="h-2 w-20 rounded-full bg-white/20" />
          <div className="flex gap-1">
            {[0, 1].map((i) => (
              <div key={i} className="h-4 w-4 rounded-md" style={{ background: toRgba(accent, 0.2), border: `1px solid ${toRgba(accent, 0.3)}` }} />
            ))}
          </div>
        </div>
        {/* Cards Kanban/Tarefas */}
        <div className="grid grid-cols-3 gap-1.5 flex-1">
          {(lines.length ? lines : ['Backlog', 'Progresso', 'Feito']).map((line, i) => (
            <div key={i} className="rounded-lg flex flex-col gap-1 p-1.5" style={{ background: toRgba("#ffffff", 0.03), border: `1px solid ${toRgba(accent, 0.15)}` }}>
              <div className="flex items-center justify-between">
                <div className="text-[5.5px] font-bold text-white/60 uppercase">{line}</div>
                <div className="w-3 h-3 rounded-full flex items-center justify-center text-[5px] font-black text-white" style={{ background: toRgba(accent, 0.6) }}>
                  {3 - i}
                </div>
              </div>
              {[0, 1, 2].map((j) => (
                <div
                  key={j}
                  className="rounded-md p-1"
                  style={{ background: toRgba("#ffffff", 0.05), border: `1px solid ${toRgba(accent, j === 0 ? 0.3 : 0.12)}` }}
                >
                  <div className="h-1 w-3/4 rounded-full bg-white/20" />
                  <div className="h-1 w-1/2 rounded-full bg-white/10 mt-1" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MockupPreview;
