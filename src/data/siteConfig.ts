export type NavigationLink = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export type SocialLink = {
  platform: 'youtube' | 'instagram' | 'facebook' | 'tiktok' | 'podcast';
  label: string;
  href: string;
};

export type LeadMagnetConfig = {
  title: string;
  description: string;
  ctaLabel: string;
  successMessage: string;
};

export interface SiteConfig {
  name: string;
  domain: string;
  description: string;
  contactEmail: string;
  navigation: NavigationLink[];
  secondaryNavigation: NavigationLink[];
  socialLinks: SocialLink[];
  leadMagnet: LeadMagnetConfig;
  defaultSeo: {
    title: string;
    description: string;
  };
}

export const siteConfig: SiteConfig = {
  name: 'Cours Magnétisme',
  domain: 'coursmagnetisme.fr',
  description:
    'Guides, comparatifs et retours d’expérience pour choisir la formation en magnétisme adaptée à votre pratique.',
  contactEmail: 'hello@coursmagnetisme.fr',
  navigation: [
    { label: 'Accueil', href: '/' },
    { label: 'Formations', href: '/formations' },
    { label: 'Témoignages', href: '/temoignages' },
    { label: 'Blog', href: '/blog' },
    { label: 'FAQ', href: '/faq' }
  ],
  secondaryNavigation: [
    { label: 'Mentions légales', href: '/mentions-legales' },
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' },
    { label: 'Contact', href: 'mailto:hello@coursmagnetisme.fr', ariaLabel: 'Envoyer un email' }
  ],
  socialLinks: [
    { platform: 'youtube', label: 'YouTube', href: 'https://youtube.com/@coursmagnetisme' },
    { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/coursmagnetisme' },
    { platform: 'podcast', label: 'Podcast', href: 'https://spotify.com/show/coursmagnetisme' }
  ],
  leadMagnet: {
    title: 'Checklist : lancer vos soins en 30 jours',
    description:
      'Une feuille de route concrète pour structurer vos séances, trouver vos premiers clients et fixer vos tarifs.',
    ctaLabel: 'Recevoir la checklist',
    successMessage:
      'Merci ! Vérifiez votre boîte e-mail, la checklist arrive dans les 5 prochaines minutes.'
  },
  defaultSeo: {
    title: 'Cours Magnétisme – Comparatif des formations et ressources',
    description:
      'Sélection indépendante de formations en magnétisme, avis d’élèves et guides pratiques pour développer votre pratique énergétique.'
  }
};

