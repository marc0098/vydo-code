import { LucideIcon } from 'lucide-react';
import React from 'react';

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon: LucideIcon | React.ElementType;
  featured?: boolean;
  type: 'primary' | 'secondary' | 'social';
}

export interface DemoItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
  purchaseUrl?: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  icon: LucideIcon | React.ElementType;
}

export type TemplateCategory = 'linknabio' | 'ecommerce' | 'sites' | 'webapp';

export interface TemplateItem {
  id: string;
  title: string;
  description: string;
  category: TemplateCategory;
  gradient: string;
  accentColor: string;
  tags: string[];
  badge?: string;
  imageUrl: string; // cover image
  logoUrl?: string; // optional profile or logo image for internal mockups
  mockupElements: string[]; // visual elements to render in the mockup
}

export interface ShowcasePageData {
  id: TemplateCategory;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  gradient: string;
}
