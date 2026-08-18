import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon | React.ElementType;
  featured?: boolean;
  type: 'primary' | 'secondary' | 'social';
  hint?: string;
  description?: string;
}

export interface DemoItem {
  id: string;
  title: string;
  description: string;
  demoUrl: string;
  purchaseUrl?: string;
  accentColor: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  icon: LucideIcon | React.ElementType;
}

export type TemplateCategory = 'linknabio' | 'ecommerce' | 'sites' | 'webapp';

export type MockupKind =
  | 'bio'        // avatar + linhas de links
  | 'shop'       // grade de produtos
  | 'site'       // hero de site com seções
  | 'app';       // painel de app

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  accentColor: string;
  tags: string[];
  badge?: string;
  mockupKind: MockupKind; // tipo de mockup CSS vivo
  mockupLines?: string[]; // linhas de texto do mockup (títulos/botões)
  mockupExtra?: string;   // rótulo extra do mockup
}

export interface ShowcasePageData {
  id: TemplateCategory;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  gradient: string;
}
