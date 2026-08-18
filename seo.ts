/**
 * SEO helpers — atualização dinâmica de título, meta description,
 * Open Graph e dados estruturados (JSON-LD) por página/categoria.
 */

const SITE_URL = 'https://vydo-code.vercel.app';

export interface SeoMeta {
  title: string;
  description: string;
  ogImage?: string;
}

export const HOME_SEO: SeoMeta = {
  title: 'VYDO CODE | Premium Frontend Solutions',
  description:
    'Desenvolvimento de Landing Pages, E-commerces, Sites Institucionais e Links na Bio sob medida. Design inovador e de alta conversão. Conheça nossos templates!',
  ogImage: 'https://vydo-code.vercel.app/vydo-ads-banner-share.jpg',
};

export const CATEGORY_SEO: Record<string, SeoMeta> = {
  linknabio: {
    title: 'VYDO CODE | Link na Bio Personalizado',
    description:
      'Links na bio personalizados que transformam seu perfil em uma vitrine profissional. 5 templates prontos: Social Media Pro, Barba & Navalha, Personal Link, Doce Confeitaria e Consultor Expert.',
    ogImage: 'https://vydo-code.vercel.app/logo-share.jpg',
  },
  ecommerce: {
    title: 'VYDO CODE | E-commerces que Vendem',
    description:
      'Lojas online de alta conversão: moda, tecnologia, delivery e produtos digitais. Veja os templates prontos da VYDO CODE.',
    ogImage: 'https://vydo-code.vercel.app/logo-share.jpg',
  },
  sites: {
    title: 'VYDO CODE | Sites Impactantes',
    description:
      'Sites institucionais premium para restaurantes, clínicas, imobiliárias e empresas de tecnologia. Design que impressiona na primeira visita.',
    ogImage: 'https://vydo-code.vercel.app/logo-share.jpg',
  },
  webapp: {
    title: 'VYDO CODE | App Web Sob Medida',
    description:
      'Aplicações web robustas, rápidas e bonitas: gerenciadores de tarefas, quadros Kanban e sistemas completos. Do conceito à produção.',
    ogImage: 'https://vydo-code.vercel.app/logo-share.jpg',
  },
};

function setMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  const selector = `meta[${attrName}="${attrValue}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

export function applySeo(meta: SeoMeta) {
  document.title = meta.title;
  setMeta('name', 'title', meta.title);
  setMeta('name', 'description', meta.description);
  setMeta('property', 'og:title', meta.title);
  setMeta('property', 'og:description', meta.description);
  if (meta.ogImage) setMeta('property', 'og:image', meta.ogImage);

  applyOrganizationJsonLd();
}

function applyOrganizationJsonLd() {
  const existing = document.getElementById('jsonld-organization');
  if (existing) existing.remove();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'VYDO CODE',
    url: SITE_URL,
    description: HOME_SEO.description,
    logo: 'https://vydo-code.vercel.app/logo.png',
    image: HOME_SEO.ogImage,
    sameAs: ['https://wa.me/5538998802822'],
    areaServed: 'BR',
    knowsAbout: [
      'Landing Pages',
      'E-commerce',
      'Sites Institucionais',
      'Link na Bio',
      'Desenvolvimento Frontend',
    ],
  };

  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = 'jsonld-organization';
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
