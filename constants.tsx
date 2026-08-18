import {
  Link2,
  ShoppingBag,
  Globe,
  AppWindow,
} from 'lucide-react';
import WhatsAppIcon from './components/WhatsAppIcon';
import { LinkItem, DemoItem } from './types';

export const MAIN_LINKS: LinkItem[] = [
  {
    id: 'whatsapp',
    label: 'Falar no WhatsApp',
    url: 'https://wa.me/5538998802822?text=Ol%C3%A1%2C%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais',
    icon: WhatsAppIcon,
    featured: true,
    type: 'primary',
    hint: 'Resposta rápida',
    description: 'Conversa direta para solicitar seu projeto',
  },
  {
    id: 'linknabio',
    label: 'Link na Bio Personalizado',
    url: '#/categoria/linknabio',
    icon: Link2,
    type: 'secondary',
    hint: '5 templates',
    description: 'Vitrine profissional para suas redes',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    url: '#/categoria/ecommerce',
    icon: ShoppingBag,
    type: 'secondary',
    hint: '5 templates',
    description: 'Lojas online de alta conversão',
  },
  {
    id: 'sites',
    label: 'Sites',
    url: '#/categoria/sites',
    icon: Globe,
    type: 'secondary',
    hint: '5 templates',
    description: 'Presença digital elegante e impactante',
  },
  {
    id: 'webapp',
    label: 'App Web',
    url: '#/categoria/webapp',
    icon: AppWindow,
    type: 'secondary',
    hint: '2 templates',
    description: 'Sistemas web completos sob medida',
  },
];

// Demos em destaque — projetos de marca reais hospedados em /sites/
export const DEMOS: DemoItem[] = [
  {
    id: 'aura-grand',
    title: 'Aura Grand',
    description: 'Landing page high-end com vídeo de fundo para hotelaria de luxo.',
    demoUrl: '/sites/aura-grand/',
    accentColor: '#c9a96e',
  },
  {
    id: 'dentalprime',
    title: 'Dental Prime',
    description: 'Site institucional para clínicas odontológicas com agendamento.',
    demoUrl: '/sites/dentalprime/',
    accentColor: '#22d3ee',
  },
  {
    id: 'lume-store',
    title: 'Lume Store',
    description: 'E-commerce elegante com catálogo e experiência de compra premium.',
    demoUrl: '/sites/lume-store/',
    accentColor: '#f59e0b',
  },
  {
    id: 'vibe-studio',
    title: 'Vibe Studio',
    description: 'Site institucional moderno para empresas criativas.',
    demoUrl: '/sites/vibe-studio/',
    accentColor: '#a855f7',
  },
];
