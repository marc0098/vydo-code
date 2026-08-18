<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# VYDO CODE — Premium Frontend Solutions

Site vitrine da **VYDO CODE**, no formato link-in-bio, que apresenta os serviços de desenvolvimento web (Links na Bio, E-commerces, Sites Institucionais e Apps Web) com 17 templates demonstráveis e projetos de marca reais em destaque.

- **URL publicada:** https://vydo-code.vercel.app/
- **Stack:** React 19 + Vite 6 + TailwindCSS 4 + TypeScript + lucide-react

## Estrutura do projeto

| Arquivo / Pasta | Função |
|---|---|
| `App.tsx` | Página principal (hero, cards de categoria, demos em destaque, footer) |
| `components/ShowcasePage.tsx` | Página de vitrine por categoria (`#/categoria/{id}`) |
| `components/TemplateCard.tsx` | Card de template com preview, tags e CTAs |
| `components/ButtonCard.tsx` | Card de link da página principal |
| `seo.ts` | Atualização dinâmica de título, meta description, OG e JSON-LD |
| `templateData.ts` | Dados das 4 categorias e 17 templates |
| `constants.tsx` | Links principais e 4 demos em destaque |
| `public/sites/templates/` | 17 demos estáticas de templates (link na bio, loja, site, app) |
| `public/sites/` | 8 demos de marca completos (Aura Grand, Dental Prime, etc.) |

## Comandos

```bash
npm install     # instalar dependências
npm run dev     # iniciar servidor de desenvolvimento (porta 3000)
npm run build   # build de produção para a pasta dist/
npm run preview # servir o build localmente
npm run lint    # verificação de tipos (tsc --noEmit)
```

## Observações importantes

- **Demos:** as rotas `/sites/...` servem arquivos HTML estáticos da pasta `public/sites/`. O middleware `serve-static-sites` do `vite.config.ts` faz isso no `npm run dev`; em produção, os mesmos arquivos são servidos estaticamente pelo Vercel.
- **SEO:** o título, a meta description e as tags Open Graph são atualizados dinamicamente a cada navegação de categoria via `seo.ts`.
- **Fontes:** o projeto usa **Outfit** como fonte principal e Inter como fallback (carregadas do Google Fonts).
- **WhatsApp:** todos os CTAs de contato apontam para `wa.me/5538998802822` — altere o número em `App.tsx`, `constants.tsx`, `components/ShowcasePage.tsx` e `components/TemplateCard.tsx` caso precise.
- **Variáveis de ambiente:** a chave `GEMINI_API_KEY` presente no `vite.config.ts` era um resquício do template original e não é mais utilizada pelo app.

## Deploy

O projeto está configurado para deploy na Vercel (`base: './'` no `vite.config.ts`). Basta conectar o repositório na Vercel e ela fará o build automaticamente.
