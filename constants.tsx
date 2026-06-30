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
  },
  {
    id: 'linknabio',
    label: 'Link na Bio Personalizado',
    url: '#/categoria/linknabio',
    icon: Link2,
    type: 'secondary',
  },
  {
    id: 'ecommerce',
    label: 'E-commerce',
    url: '#/categoria/ecommerce',
    icon: ShoppingBag,
    type: 'secondary',
  },
  {
    id: 'sites',
    label: 'Sites',
    url: '#/categoria/sites',
    icon: Globe,
    type: 'secondary',
  },
  {
    id: 'webapp',
    label: 'App Web',
    url: '#/categoria/webapp',
    icon: AppWindow,
    type: 'secondary',
  },
];

export const DEMOS: DemoItem[] = [
  {
    id: '1',
    title: 'Landing Pages High-End',
    description: 'Focadas em converter visitantes em clientes com design exclusivo.',
    imageUrl: 'https://picsum.photos/600/400?random=1',
    demoUrl: '#',
    purchaseUrl: '#contact',
  },
  {
    id: '2',
    title: 'Sistemas Web (Dashboards)',
    description: 'Interfaces complexas, rápidas e fáceis de usar (React/Next.js).',
    imageUrl: 'https://picsum.photos/600/400?random=2',
    demoUrl: '#',
    purchaseUrl: '#contact',
  },
  {
    id: '3',
    title: 'Sites Institucionais',
    description: 'Presença digital elegante para empresas que buscam autoridade.',
    imageUrl: 'https://picsum.photos/600/400?random=3',
    demoUrl: '#',
    purchaseUrl: '#contact',
  },
  {
    id: '4',
    title: 'Consultoria de UI/UX',
    description: 'Refatoração de interfaces antigas para um visual moderno e "tech".',
    imageUrl: 'https://picsum.photos/600/400?random=4',
    demoUrl: '#',
    purchaseUrl: '#contact',
  },
];
