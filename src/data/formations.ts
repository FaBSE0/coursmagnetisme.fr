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
    id: 'emep-ivan-pellegry',
    title: 'Formation magnétisme en ligne d’Ivan Pellegry – La formation la plus complète pour devenir magnétiseur professionnel en 1 an',
    slug: 'formation-magnetisme-ivan-pellegry-emep',
    provider: 'Ivan Pellegry (École de Magnétiseur-Énergéticien Professionnel – E.M.E.P)',
    format: 'hybride',
    level: 'debutant',
    durationHours: 720,
    priceEUR: 0,
    tags: ['certifiant', 'long', 'hybride', 'accompagnement'],
    headline: 'Cursus professionnel en magnétisme structuré sur 1 an, avec e-learning, stages pratiques et accompagnement.',
    description:
      'Pensé pour faire de vous un praticien autonome et compétent, avec diplôme interne à la clé. Formation diplômante très complète sur 12 mois avec approche pédagogique ancrée + pratique terrain en présentiel.',
    keyPoints: [
      'Formation diplômante très complète sur 12 mois',
      'Approche pédagogique ancrée + pratique terrain en présentiel',
      'Suivi personnalisé et communauté active d’élèves'
    ],
    bonuses: ['Club privé des élèves', 'Certification finale de l’école (attestant des compétences)'],
    affiliation: {
      url: buildAffiliateLink('https://www.ecole-emep.fr/formation-magnetisme-en-ligne/', 'emep'),
      commissionPct: 0
    },
    seo: {
      metaTitle: 'Formation magnétisme E.M.E.P Ivan Pellegry – avis & programme complet',
      metaDescription:
        'Découvrez la formation magnétisme professionnel d’Ivan Pellegry (E.M.E.P) : cursus 1 an, e-learning + stages, certification. Excellente réputation et pédagogie saluée.'
    }
  },
  {
    id: 'vidal-herve-technicien',
    title: 'Formation Magnétisme pour Tous (Technicien) – E-learning',
    slug: 'formation-magnetisme-vidal-herve-technicien',
    provider: 'Hervé Vidal (Uman Training, certifié Qualiopi)',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 24,
    priceEUR: 240,
    tags: ['certifiant', 'distanciel', 'accompagnement'],
    headline: 'Formation en ligne très pédagogique pour apprendre les bases du magnétisme.',
    description:
      'Elle combine vidéos pratiques, quiz et accompagnement live pour un apprentissage actif et structuré. Plateforme interactive avec coaching de groupe, supports complets : vidéos, QCM, forum, PDF.',
    keyPoints: [
      'Plateforme interactive avec coaching de groupe',
      'Supports complets : vidéos, QCM, forum, PDF',
      'Organisme Qualiopi, structure sérieuse'
    ],
    bonuses: ['Coaching live de groupe', 'Forum d’entraide et accompagnement par le formateur'],
    affiliation: {
      url: buildAffiliateLink('https://www.vidal-herve.fr/formations/formation-magnetisme-pour-tous-e-learning/', 'vidal-herve'),
      commissionPct: 0
    },
    seo: {
      metaTitle: 'Formation magnétisme Hervé Vidal – avis & programme Qualiopi',
      metaDescription:
        'Formation e-learning magnétisme Hervé Vidal : 24h, 80+ vidéos, coaching groupe, organisme Qualiopi. Très bons retours élèves (note >9/10).'
    }
  },
  {
    id: 'florian-lucas-elearning',
    title: 'E-learning – Formation magnétiseur certifiante avec Florian Lucas',
    slug: 'formation-magnetiseur-florian-lucas-elearning',
    provider: 'Florian Lucas',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 10,
    priceEUR: 497,
    tags: ['certifiant', 'court', 'distanciel'],
    headline: 'Formation en ligne sérieuse et certifiante par l’un des magnétiseurs les plus réputés de France.',
    description:
      'Vidéos claires, quiz intégrés, accompagnement solide. Cours très structuré avec quiz + fiches pratiques, possibilité de stage pratique + certification.',
    keyPoints: [
      'Formateur très reconnu (auteur, conférencier)',
      'Cours très structuré avec quiz + fiches pratiques',
      'Possibilité de stage pratique + certification'
    ],
    bonuses: ['Livre dédicacé offert', 'Suivi email, groupe privé (si stage)'],
    affiliation: {
      url: buildAffiliateLink('https://www.florianlucas.com/pages/e-learning-formation-magnetiseur-en-ligne-avec-florian-lucas', 'florian-lucas'),
      commissionPct: 0
    },
    seo: {
      metaTitle: 'Formation magnétisme Florian Lucas – avis & programme certifiant',
      metaDescription:
        'Formation magnétiseur en ligne certifiante par Florian Lucas : 10h vidéo, quiz, stage optionnel. Très bon choix pour un positionnement premium avec formateur reconnu.'
    }
  },
  {
    id: 'metiers-bienetre-curatif',
    title: 'Formation praticien en magnétisme curatif',
    slug: 'formation-magnetisme-curatif-metiers-bienetre',
    provider: 'Métiers Bien-Être',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 40,
    priceEUR: 89,
    tags: ['certifiant', 'distanciel'],
    headline: 'Formation complète à distance, axée sur la pratique du magnétisme curatif.',
    description:
      'Couvre les pathologies physiques/émotionnelles et délivre une certification. Très bon rapport contenu/prix, certificat final reconnu par 3 organismes (CPD, IAOTH…), garantie 30 jours.',
    keyPoints: [
      'Très bon rapport contenu/prix',
      'Certificat final reconnu par 3 organismes (CPD, IAOTH…)',
      'Garantie 30 jours'
    ],
    bonuses: ['Forum d’entraide', 'Support client 7j/7'],
    affiliation: {
      url: buildAffiliateLink('https://metiersbienetre.fr/produit/formation-magnetisme-curatif/', 'metiers-bienetre'),
      commissionPct: 40
    },
    seo: {
      metaTitle: 'Formation magnétisme curatif pas chère – Métiers Bien-Être',
      metaDescription:
        'Formation magnétisme curatif à 89€ : 11 modules, certification reconnue, accès à vie. Idéal pour une option très accessible. Commission affilié jusqu’à 40%.'
    }
  },
  {
    id: 'veronique-calls-distance',
    title: 'Formation magnétisme à distance – Véronique Calls',
    slug: 'formation-magnetisme-veronique-calls-distance',
    provider: 'Véronique Calls',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 14,
    priceEUR: 250,
    tags: ['court', 'distanciel', 'accompagnement'],
    headline: 'Formation très humaine et vivante, avec l’énergie d’un stage.',
    description:
      'Les élèves profitent d’un vrai lien avec la formatrice, en plus des vidéos. Suivi personnalisé (réponse directe par la formatrice), réunions Zoom mensuelles avec les autres élèves.',
    keyPoints: [
      'Suivi personnalisé (réponse directe par la formatrice)',
      'Réunions Zoom mensuelles avec les autres élèves',
      'Positionnement "stage en ligne humain"'
    ],
    bonuses: ['Certificat de suivi sur demande', 'Exercices pratiques guidés'],
    affiliation: {
      url: buildAffiliateLink('https://veronique-calls.fr/formation-magnetiseur-energeticien-a-distance/', 'veronique-calls'),
      commissionPct: 0
    },
    seo: {
      metaTitle: 'Formation magnétisme Véronique Calls – avis & accompagnement humain',
      metaDescription:
        'Formation magnétisme à distance Véronique Calls : équivalent 2 jours stage, vidéos + Zoom mensuels, suivi personnalisé. Très bons avis, approche chaleureuse.'
    }
  },
  {
    id: 'udemy-magnetisme-animal-humain',
    title: 'Pratique du magnétisme sur l’animal et l’humain',
    slug: 'pratique-magnetisme-animal-humain-udemy',
    provider: 'Vanessa Boisseau, Delphine Blanc, Carolle Sayagh',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 2,
    priceEUR: 20,
    tags: ['court', 'distanciel'],
    headline: 'Ce cours vidéo propose une initiation pratique au magnétisme énergétique sur l’humain et l’animal.',
    description:
      'Les modules abordent l’ancrage, la protection, le ressenti et les protocoles de soin concrets. 34 leçons avec support PDF inclus, certificat de fin de formation Udemy.',
    keyPoints: [
      'Couvre le magnétisme sur humains et animaux',
      '34 leçons avec support PDF inclus',
      'Certificat de fin de formation Udemy'
    ],
    bonuses: ['PDF téléchargeable', 'Accès mobile et TV'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/pratique-du-magnetisme-sur-lanimal-et-lhumain', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy magnétisme animal et humain – avis',
      metaDescription:
        'Cours Udemy magnétisme sur animaux et humains : 2h, 34 leçons, PDF inclus. Note 4,3/5 pour 17 avis – bon taux de satisfaction pour un format grand public.'
    }
  },
  {
    id: 'udemy-guide-pendule',
    title: 'Guide pour apprendre à utiliser la Pendule',
    slug: 'guide-apprendre-utiliser-pendule-udemy',
    provider: 'Stéphanie Haemers',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 3,
    priceEUR: 25,
    tags: ['court', 'distanciel'],
    headline: 'Cette formation aborde l’usage du pendule pour les diagnostics énergétiques et la pratique du magnétisme.',
    description:
      'Elle intègre des exercices pratiques de ressenti, d’équilibrage des chakras et de protection énergétique. Introduction claire à la radiesthésie, utilisation concrète du pendule en lien avec le magnétisme.',
    keyPoints: [
      'Introduction claire à la radiesthésie',
      'Utilisation concrète du pendule en lien avec le magnétisme',
      'Téléchargement de ressources PDF'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/guide-pour-apprendre-a-utiliser-la-pendule', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy pendule et radiesthésie – avis',
      metaDescription:
        'Cours Udemy pendule pour magnétisme : 3h, 18 leçons, PDF téléchargeable. Note 4,0/5 (1 avis) – formation récente mise à jour en 2025.'
    }
  },
  {
    id: 'udemy-coupeur-feu',
    title: 'Devenir un coupeur de feu efficace (avec certification)',
    slug: 'devenir-coupeur-feu-efficace-udemy',
    provider: 'Antonin Désiré',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 2,
    priceEUR: 30,
    tags: ['certifiant', 'court', 'distanciel'],
    headline: 'Formation ciblée pour apprendre à couper le feu par magnétisme, soulager les brûlures et accélérer la guérison.',
    description:
      'Les modules couvrent l’ancrage, l’éthique, et les pratiques énergétiques. Cours spécialisé dans le magnétisme pour brûlures, formation bien structurée avec techniques concrètes.',
    keyPoints: [
      'Cours spécialisé dans le magnétisme pour brûlures',
      'Formation bien structurée avec techniques concrètes',
      'L’un des cours les mieux notés de la catégorie'
    ],
    bonuses: ['Modules bonus (techniques à distance, coupe-feu avancé)', 'Certificat de fin de formation Udemy'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/coupeur-de-feu-certification', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy coupeur de feu – avis & certification',
      metaDescription:
        'Cours Udemy coupeur de feu : 2h, 14 modules + 3 bonus, techniques magnétisme brûlures. Note 4,8/5 (245 évaluations) – très bon retour utilisateur.'
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

