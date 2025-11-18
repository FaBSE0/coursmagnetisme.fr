import { buildAffiliateLink } from '@/lib/utils';

export type FormationFormat = 'presentiel' | 'distanciel' | 'hybride';
export type FormationLevel = 'debutant' | 'intermediaire' | 'avance';
export type FormationTag =
  | 'certifiant'
  | 'court'
  | 'long'
  | 'distanciel'
  | 'presentiel'
  | 'hybride'
  | 'accompagnement'
  | 'weekend';

export interface Formation {
  id: string;
  title: string;
  slug: string;
  provider: string;
  format: FormationFormat;
  level: FormationLevel;
  durationHours: number;
  priceEUR: number;
  tags: FormationTag[];
  headline: string;
  description: string;
  keyPoints: string[];
  bonuses?: string[];
  affiliation: {
    url: string;
    commissionPct: number;
    couponCode?: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
  };
}

export const formations: Formation[] = [
  {
    id: 'holon-reiki-pro',
    title: 'Parcours Reiki & Magnétisme Holon',
    slug: 'parcours-reiki-magnetisme-holon',
    provider: 'Institut Holon',
    format: 'hybride',
    level: 'intermediaire',
    durationHours: 72,
    priceEUR: 1290,
    tags: ['certifiant', 'long', 'distanciel', 'accompagnement'],
    headline: 'Un cursus structurant avec mentorat individuel et certification FFPM.',
    description:
      'Programme progressif mêlant apports scientifiques, supervision et ateliers pratiques en petits groupes.',
    keyPoints: [
      'Mentorat individuel toutes les deux semaines',
      'Sessions pratiques en direct + replays',
      'Dossier professionnel prêt pour la certification'
    ],
    bonuses: ['Coaching business 1h', 'Accès communauté Holon'],
    affiliation: {
      url: buildAffiliateLink('https://holon.fr/parcours-magnetisme'),
      commissionPct: 12,
      couponCode: 'COURSMAG10'
    },
    seo: {
      metaTitle: 'Formation Holon magnétisme – avis & programme',
      metaDescription:
        'Avis détaillé sur la formation magnétisme Holon : contenu, prix, durée et accompagnement.'
    }
  },
  {
    id: 'espace-atlantis-bootcamp',
    title: 'Bootcamp Magnétisme Espace Atlantis',
    slug: 'bootcamp-magnetisme-espace-atlantis',
    provider: 'Espace Atlantis',
    format: 'presentiel',
    level: 'debutant',
    durationHours: 28,
    priceEUR: 690,
    tags: ['court', 'presentiel'],
    headline: 'Stage intensif de 4 jours pour poser les bases solides.',
    description:
      'Travail en petit comité dans un lieu immersif, alternant protocoles guidés et mises en situation.',
    keyPoints: [
      'Groupes limités à 12 participants',
      'Supports imprimés + vidéos de révision',
      'Certification interne reconnue par les réseaux de praticiens'
    ],
    bonuses: ['Accès à une séance de supervision post-stage'],
    affiliation: {
      url: buildAffiliateLink('https://espace-atlantis.fr/bootcamp-magnetisme', 'formations'),
      commissionPct: 15
    },
    seo: {
      metaTitle: 'Stage magnétisme intensif Espace Atlantis',
      metaDescription:
        'Découvrez le bootcamp magnétisme d’Espace Atlantis : déroulé, prix, avis des participants.'
    }
  },
  {
    id: 'udemy-initiation',
    title: 'Initiation Magnétisme & Auto-soin',
    slug: 'initiation-magnetisme-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 12,
    priceEUR: 59,
    tags: ['court', 'distanciel'],
    headline: 'Parfait pour tester la discipline à son rythme.',
    description:
      'Modules vidéo HD, méditations guidées et exercices concrets pour développer la sensibilité énergétique.',
    keyPoints: [
      'Accès à vie et mises à jour gratuites',
      'Exercices pratiques filmés',
      'Communauté Discord de soutien'
    ],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/initiation-magnetisme', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Avis formation Udemy magnétisme',
      metaDescription:
        'Notre retour sur le cours Udemy de magnétisme : contenu, avantages et limites pour les débutants.'
    }
  },
  {
    id: 'acm-pro',
    title: 'Certification Magnétiseur ACM',
    slug: 'certification-magnetiseur-acm',
    provider: 'Académie des Courants Magnétiques',
    format: 'presentiel',
    level: 'avance',
    durationHours: 120,
    priceEUR: 2190,
    tags: ['certifiant', 'long', 'presentiel', 'accompagnement'],
    headline: 'Certification complète orientée pratique professionnelle.',
    description:
      '12 weekends étalés sur 6 mois avec supervision clinique, cas pratiques et tronc commun scientifique.',
    keyPoints: [
      'Protocoles avancés (magnétisme, reiki, fascias)',
      'Module de création de cabinet',
      'Partenariats avec des centres de bien-être'
    ],
    bonuses: ['Accès plateforme d’e-learning', 'Référencement annuaire ACM'],
    affiliation: {
      url: buildAffiliateLink('https://academie-courants.fr/certification-magnetiseur', 'acm'),
      commissionPct: 8
    },
    seo: {
      metaTitle: 'Certification Magnétiseur ACM',
      metaDescription: 'Durée, prix, avis et prérequis pour la certification magnétiseur ACM.'
    }
  },
  {
    id: 'ens-spiritum-holo',
    title: 'Magnétisme & Soins énergétiques ENS Spiritum',
    slug: 'magnetisme-soins-energetiques-ens',
    provider: 'ENS Spiritum',
    format: 'hybride',
    level: 'intermediaire',
    durationHours: 54,
    priceEUR: 990,
    tags: ['distanciel', 'presentiel', 'accompagnement'],
    headline: 'Mix e-learning + weekend immersif pour libérer le geste magnétique.',
    description:
      '12 modules vidéo + workbook + weekend en présentiel pour ancrer les protocoles et recevoir un feedback direct.',
    keyPoints: [
      'Suivi personnalisé par e-mail',
      'Travail sur les mémoires émotionnelles',
      'Accès à des scripts prêts à l’emploi'
    ],
    affiliation: {
      url: buildAffiliateLink('https://ens-spiritum.fr/formation-magnetisme', 'ens'),
      commissionPct: 10
    },
    seo: {
      metaTitle: 'Formation ENS Spiritum magnétisme',
      metaDescription:
        'Programme hybride ENS Spiritum : contenu des modules, weekend intensif et accompagnement.'
    }
  },
  {
    id: 'magnetisme-essentiel',
    title: 'Magnétisme Essentiel en 6 semaines',
    slug: 'magnetisme-essentiel-6-semaines',
    provider: 'Collectif Pulsar',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 24,
    priceEUR: 390,
    tags: ['court', 'distanciel', 'accompagnement'],
    headline: 'Programme live hebdo + pratique guidée, idéal pour se lancer.',
    description:
      'Chaque semaine : live Zoom, devoir pratique, feedback personnalisé et ressources téléchargeables.',
    keyPoints: [
      'Groupes de pratique en duo',
      'Bibliothèque d’audios énergétiques',
      'Checklist d’installation de cabinet'
    ],
    affiliation: {
      url: buildAffiliateLink('https://collectifpulsar.fr/magnetisme-essentiel', 'pulsar'),
      commissionPct: 14
    },
    seo: {
      metaTitle: 'Programme Magnétisme Essentiel',
      metaDescription:
        'Programme distanciel Pulsar : déroulé des 6 semaines, tarifs, accompagnement personnalisé.'
    }
  },
  {
    id: 'soins-et-sciences',
    title: 'Soins énergétiques & sciences du vivant',
    slug: 'soins-energetiques-sciences-du-vivant',
    provider: 'Institut Nova Vitae',
    format: 'hybride',
    level: 'avance',
    durationHours: 96,
    priceEUR: 1590,
    tags: ['certifiant', 'long', 'hybride'],
    headline: 'Approche scientifique pour praticiens souhaitant crédibiliser leurs soins.',
    description:
      'Cours filmés avec des intervenants chercheurs + études de cas cliniques + stage en centre partenaire.',
    keyPoints: [
      'Validation scientifique et protocoles écrits',
      'Stage de 3 jours en structure médicale',
      'Accès aux recherches internes Nova Vitae'
    ],
    affiliation: {
      url: buildAffiliateLink('https://novavitae.fr/soins-energetiques', 'nova'),
      commissionPct: 11
    },
    seo: {
      metaTitle: 'Formation Institut Nova Vitae',
      metaDescription:
        'Tout savoir sur le cursus Nova Vitae : orientation scientifique, stage, certification.'
    }
  }
];

export const getFormationBySlug = (slug: string) =>
  formations.find((formation) => formation.slug === slug);

export const getFeaturedFormations = (limit = 3) => formations.slice(0, limit);

export const searchFormations = (term: string) => {
  if (!term) return formations;
  const normalized = term.toLowerCase();
  return formations.filter(
    (formation) =>
      formation.title.toLowerCase().includes(normalized) ||
      formation.provider.toLowerCase().includes(normalized) ||
      formation.tags.some((tag) => tag.includes(normalized))
  );
};

