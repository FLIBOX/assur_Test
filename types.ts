import { LucideIcon } from 'lucide-react';

export interface Product {
  id: string;
  slug: string;
  title: string;
  description: string;
  contentTitle: string;
  longDescription: string; // HTML or text content for the detail page
  icon: LucideIcon;
  imageUrl: string;
  linkText: string;
}

export interface NavItem {
  label: string;
  href?: string;
  subItems?: { label: string; href: string }[];
}