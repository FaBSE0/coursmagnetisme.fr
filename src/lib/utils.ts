import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const buildAffiliateLink = (targetUrl: string, campaign = 'homepage'): string => {
  const url = new URL(targetUrl);
  url.searchParams.set('utm_source', 'coursmagnetisme');
  url.searchParams.set('utm_medium', 'affiliate');
  url.searchParams.set('utm_campaign', campaign);
  url.searchParams.set('utm_content', 'cta');
  return url.toString();
};

export const formatPrice = (value: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(value);

export const formatDuration = (hours: number) => {
  if (hours < 7) {
    return `${hours} h`;
  }
  const days = Math.round(hours / 7);
  return `${days} j`;
};

