# DATA MODELS – coursmagnetisme.fr

## 1. Conventions générales
- Tous les types sont definis en TypeScript dans `src/data/`.
- Les champs textuels sont en français, Markdown autorisé pour les descriptions longues.
- Les IDs doivent être stables (utilisés pour slug et tracking).
- Les liens affiliés passent par le helper `buildAffiliateLink`.

## 2. Interfaces principales
```ts
export type Pill = 'presentiel' | 'distanciel' | 'certifiant' | 'court' | 'long';

export interface NavigationLink {
  label: string;
  href: string;
  ariaLabel?: string;
}

export interface SocialLink {
  platform: 'youtube' | 'instagram' | 'facebook' | 'tiktok' | 'podcast';
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  domain: string;
  description: string;
  contactEmail: string;
  navigation: NavigationLink[];
  secondaryNavigation: NavigationLink[];
  socialLinks: SocialLink[];
  leadMagnet: {
    title: string;
    description: string;
    ctaLabel: string;
    successMessage: string;
  };
}

export interface Formation {
  id: string;
  title: string;
  slug: string;
  provider: string;
  level: 'debutant' | 'intermediaire' | 'avance';
  format: 'presentiel' | 'distanciel' | 'hybride';
  durationHours: number;
  priceEUR: number;
  tags: Pill[];
  headline: string;
  description: string;
  keyPoints: string[];
  bonuses?: string[];
  affiliation: {
    url: string;
    commissionPct: number;
    couponCode?: string;
  };
  testimonials?: Testimonial[];
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  formationId?: string;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string; // ISO string
  tags: string[];
  coverImage?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'formation' | 'financement' | 'pratique';
}
```

## 3. Helpers suggérés
```ts
export const buildAffiliateLink = (url: string, campaign = 'homepage'): string => {
  const target = new URL(url);
  target.searchParams.set('utm_source', 'coursmagnetisme');
  target.searchParams.set('utm_medium', 'affiliate');
  target.searchParams.set('utm_campaign', campaign);
  return target.toString();
};

export const formatPrice = (price: number) =>
  new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(price);
```

## 4. Exemple `siteConfig`
```ts
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
    { label: 'Politique de confidentialité', href: '/politique-confidentialite' }
  ],
  socialLinks: [
    { platform: 'youtube', label: 'YouTube', href: 'https://youtube.com/@coursmagnetisme' },
    { platform: 'instagram', label: 'Instagram', href: 'https://instagram.com/coursmagnetisme' }
  ],
  leadMagnet: {
    title: 'Checklist pour lancer votre pratique en 30 jours',
    description:
      'Recevez la méthode étape par étape pour structurer vos premiers soins et trouver vos premiers clients.',
    ctaLabel: 'Recevoir la checklist',
    successMessage: 'Merci ! Votre checklist arrive dans quelques minutes.'
  }
};
```

## 5. Exemple `Formation`
```ts
export const formations: Formation[] = [
  {
    id: 'reiki-holon-01',
    title: 'Parcours Reiki & Magnétisme Holon',
    slug: 'parcours-reiki-magnetisme-holon',
    provider: 'Institut Holon',
    level: 'intermediaire',
    format: 'hybride',
    durationHours: 72,
    priceEUR: 1290,
    tags: ['certifiant', 'long', 'distanciel'],
    headline: 'Un cursus solide pour structurer une pratique pro en 3 mois.',
    description:
      'Programme progressif avec mentorat individuel, modules scientifiques et sessions pratiques en petits groupes.',
    keyPoints: [
      'Mentorat avec des praticiens installés',
      'Dossier de certification reconnu par la FFPM',
      'Accès à la communauté privée'
    ],
    bonuses: ['Coaching business 1h', 'Kit de scripts de séance'],
    affiliation: {
      url: 'https://holon.fr/parcours-magnetisme',
      commissionPct: 12
    },
    seo: {
      metaTitle: 'Avis sur la formation magnétisme Holon',
      metaDescription: 'Découvrez le contenu, les points forts et notre avis sur la formation Holon.'
    }
  }
];
```

## 6. Données secondaires
- **Témoignages** : rattachés à une formation (facultatif) pour réutiliser sur plusieurs pages.
- **Articles** : stockés en MDX mais indexés via `ArticleSummary`.
- **FAQ** : regroupées par catégories pour l’accordéon.

## 7. Validation
- Ajouter des tests unitaires simples (ex : `formations.test.ts`) pour garantir que tous les slugs sont uniques et que les tags appartiennent à l’union `Pill`.
- Lint spécifique : script `npm run lint:data` (à créer plus tard) pour vérifier les schémas JSON.

