import type { ImageMetadata } from 'astro';

export type Tone = 'sky' | 'indigo' | 'emerald';
export type IconName =
  | 'arrow-right'
  | 'arrow-up-right'
  | 'arrow-down'
  | 'layers'
  | 'lock'
  | 'box'
  | 'code'
  | 'mail'
  | 'phone'
  | 'map-pin'
  | 'github'
  | 'linkedin'
  | 'download'
  | 'message'
  | 'sun'
  | 'moon'
  | 'menu'
  | 'close'
  | 'award'
  | 'network'
  | 'languages'
  | 'terminal'
  | 'graduation'
  | 'check'
  | 'copy'
  | 'send'
  | 'image'
  | 'music'
  | 'quote';
export interface MediaAsset {
  src: ImageMetadata | string;
  alt: string;
  width: number;
  height: number;
}
export interface SectionHeading {
  eyebrow: string;
  title: string;
  description?: string;
}
export interface Feature {
  title: string;
  description: string;
  icon: IconName;
  tone: Tone;
}
export interface Experience {
  category: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
  tone: Tone;
}
export interface Project {
  id: string;
  title: string;
  category: string;
  context: string;
  description: string;
  tone: Tone;
  tags: string[];
  featured?: boolean;
  image?: MediaAsset;
  repository?: string;
  facts?: { label: string; value: string }[];
  layers?: { label: string; detail: string }[];
  process?: { label: string; value: string; stack: string; detail: string };
}
export interface TechCategory {
  title: string;
  eyebrow: string;
  skills: { name: string; level: string }[];
  note: string;
}
export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  year?: string;
  description: string;
  icon: IconName;
  tone: Tone;
  image?: MediaAsset;
  verificationUrl?: string;
  featured?: boolean;
}
export interface Language {
  name: string;
  label: string;
  level: string;
  description: string;
  tone: Tone;
}
export interface Track {
  title: string;
  artist: string;
  url: string;
  cover?: MediaAsset;
}
export interface Reference {
  name: string;
  role: string;
  quote: string;
  avatar?: MediaAsset;
}
