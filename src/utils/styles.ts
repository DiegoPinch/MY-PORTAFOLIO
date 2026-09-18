import type { Tone } from '../types/content';
export const toneClasses: Record<Tone, string> = {
  sky: 'text-accent',
  indigo: 'text-indigo',
  emerald: 'text-emerald',
};
export const badgeClasses: Record<Tone, string> = {
  sky: 'text-accent bg-accent/10 border-accent/20',
  indigo: 'text-indigo bg-indigo/10 border-indigo/20',
  emerald: 'text-emerald bg-emerald/10 border-emerald/20',
};
