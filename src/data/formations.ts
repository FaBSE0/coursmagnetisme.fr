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
  | 'weekend'
  | 'udemy';

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
  platform?: 'udemy' | 'autre';
  rating?: number;
  reviewCount?: number;
  instructor?: {
    name: string;
    specialty?: string;
    experience?: string;
  };
  categories?: string[];
  keywords?: string[];
  targetAudience?: string[];
  language?: 'fr' | 'en';
  resources?: string[];
  lastUpdated?: string;
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
    tags: ['court', 'distanciel', 'udemy'],
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
    },
    platform: 'udemy',
    language: 'fr'
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
    tags: ['court', 'distanciel', 'udemy'],
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
    },
    platform: 'udemy',
    language: 'fr'
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
    tags: ['certifiant', 'court', 'distanciel', 'udemy'],
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
    },
    platform: 'udemy',
    language: 'fr'
  },
  {
    id: 'udemy-1',
    title: 'Pratique du magnétisme sur l\'animal et humain',
    slug: 'pratique-magnetisme-animal-humain-udemy-1',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Formation complète sur le développement des capacités énergétiques pour pratiquer le magnétisme sur les humains et les animaux.',
    description: 'Cette formation vous permet de développer vos capacités énergétiques à travers 15 sessions d\'introduction (34 min), 11 sessions sur les techniques de canalisation de l\'énergie dans les mains (26 min), et des protocoles de soins détaillés sur l\'humain et l\'animal. Idéale pour ceux qui souhaitent apprendre à pratiquer le magnétisme de manière professionnelle.',
    keyPoints: [
      'Introduction au magnétisme (15 sessions, 34 min)',
      'Techniques de canalisation de l\'énergie dans les mains (11 sessions, 26 min)',
      'Protocoles de soins sur l\'humain',
      'Protocoles de soins sur l\'animal',
      'Pratiques énergétiques avancées'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/developpez-vos-capacites-energetiques/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy magnétisme animal et humain – développement capacités énergétiques',
      metaDescription: 'Formation complète sur le développement des capacités énergétiques pour pratiquer le magnétisme sur les humains et les animaux. 1h de contenu, certificat inclus.'
    },
    platform: 'udemy',
    language: 'fr',
    categories: ['Magnétisme', 'Soins énergétiques', 'Thérapies alternatives', 'Bien-être animal'],
    keywords: ['magnétisme', 'énergie', 'soins', 'animaux', 'humains', 'canalisation', 'protocoles'],
    targetAudience: ['Débutants en magnétisme', 'Professionnels du bien-être', 'Propriétaires d\'animaux', 'Thérapeutes alternatifs'],
    resources: ['Ressources téléchargeables', 'Accès mobile et TV']
  },
  {
    id: 'udemy-2',
    title: 'Guide pour apprendre à utiliser la Pendule - Magnétisme et Pendule',
    slug: 'guide-pendule-magnetisme-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1.5,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Cours complet guidant pas à pas dans l\'apprentissage du magnétisme et de l\'utilisation du pendule pour équilibrer vos énergies.',
    description: 'Ce cours complet vous guidera pas à pas dans l\'apprentissage du magnétisme et de l\'utilisation du pendule. Vous découvrirez comment équilibrer vos énergies, développer votre magnétisme personnel et utiliser le pendule pour différentes pratiques de radiesthésie. Formation dispensée par Stéphanie, 40 ans, experte en bien-être avec plus de 10 ans d\'expérience.',
    keyPoints: [
      'Fondamentaux du magnétisme',
      'Introduction à la radiesthésie',
      'Techniques d\'utilisation du pendule',
      'Équilibrage des énergies',
      'Pratiques de développement personnel',
      'Exercices pratiques guidés'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/magnetisme-et-pendule/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy pendule et magnétisme – guide complet',
      metaDescription: 'Cours complet sur le magnétisme et l\'utilisation du pendule : 1h30, exercices pratiques, équilibrage des énergies. Formatrice experte avec 10 ans d\'expérience.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Stéphanie',
      specialty: 'Massage, Réflexologie, Ayurveda, Énergétique, Physique quantique',
      experience: 'Plus de 10 ans de formation et pratique, formatrice depuis plusieurs années'
    },
    categories: ['Magnétisme', 'Radiesthésie', 'Pendule', 'Développement personnel'],
    keywords: ['pendule', 'magnétisme', 'radiesthésie', 'énergies', 'équilibre', 'bien-être'],
    targetAudience: ['Débutants en radiesthésie', 'Personnes intéressées par le magnétisme', 'Praticiens en développement personnel', 'Curieux des pratiques ésotériques']
  },
  {
    id: 'udemy-3',
    title: 'Cours complet d\'utilisation du pendule - Bonus augmenter son magnétisme',
    slug: 'cours-complet-pendule-bonus-magnetisme-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Formation complète de A à Z sur le pendule incluant choix, utilisation, applications pratiques et bonus pour augmenter son magnétisme.',
    description: 'Formation complète couvrant tous les aspects du pendule : choix (matière, forme), fonctionnement, histoire, applications multiples (géobiologie, chakras, feng-shui, cadrans Bovis). Comprend plus d\'1 heure de vidéo, support écrit téléchargeable, cadrans Bovis variés, planche chakra, et bonus exclusif sur l\'augmentation du magnétisme. Formation avec quiz final et diplôme de compétence.',
    keyPoints: [
      'Comment choisir son pendule (matière, forme)',
      'Explication du fonctionnement du pendule',
      'Histoire de la radiesthésie',
      'Applications pratiques (géobiologie, chakras, feng-shui)',
      'Utilisation des cadrans Bovis',
      'Position et conditions d\'utilisation',
      'Nettoyage du pendule',
      'Création de ses propres cadrans',
      'Exercices pratiques progressifs',
      'Bonus : augmentation du magnétisme'
    ],
    bonuses: ['Support écrit complet', 'Cadrans Bovis variés', 'Planche chakra', 'Carte d\'identité magnétique', 'Quiz final', 'Diplôme de compétence'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/cours-complet-d-utilisation-du-pendule/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy pendule complète – bonus magnétisme',
      metaDescription: 'Cours complet sur le pendule : choix, utilisation, applications pratiques. 1h de vidéo, cadrans Bovis, planche chakra, bonus magnétisme. Note 4,4/5 (22 avis).'
    },
    platform: 'udemy',
    language: 'fr',
    rating: 4.4,
    reviewCount: 22,
    instructor: {
      name: 'Non spécifié',
      specialty: 'Formatrice, Lithothérapeute, Soins énergétiques, Auteur',
      experience: 'Plus de 20 ans d\'accompagnement et formation aux soins énergétiques'
    },
    categories: ['Radiesthésie', 'Pendule', 'Magnétisme', 'Géobiologie', 'Chakras'],
    keywords: ['pendule', 'radiesthésie', 'cadrans bovis', 'magnétisme', 'géobiologie', 'chakras', 'feng-shui'],
    targetAudience: ['Profanes attirés par la radiesthésie', 'Thérapeutes cherchant une compétence complémentaire', 'Personnes ayant lu des livres mais manquant de pratique', 'Propriétaires de pendule inexploité'],
    resources: ['Support écrit complet', 'Cadrans Bovis variés', 'Planche chakra', 'Carte d\'identité magnétique', 'Quiz final', 'Diplôme de compétence']
  },
  {
    id: 'udemy-4',
    title: 'Apprendre à utiliser le pendule – Radiesthésie Niveau 1',
    slug: 'apprendre-pendule-radiesthesie-niveau-1-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 2,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Formation niveau 1 sur la radiesthésie : qu\'est-ce que c\'est, comment utiliser le pendule, convention mentale et exercices pratiques.',
    description: 'Ce cours décrit en détail ce qu\'est la radiesthésie, les différents outils existants (y compris votre corps), et vous apprendra à mettre en place une convention mentale pour utiliser le pendule au quotidien. Découvrez les différents types de pendules, leurs spécificités et matériaux. Exercices pratiques inclus pour devenir expert, notamment pour nettoyer et recharger l\'eau.',
    keyPoints: [
      'Qu\'est-ce que la radiesthésie et pourquoi l\'utiliser',
      'Les différents outils de radiesthésie',
      'Comment choisir son pendule',
      'Utiliser son corps comme pendule',
      'Convention mentale et utilisation du pendule',
      'Diagnostics avec la radiesthésie',
      'Purification et recharge de l\'eau',
      'Modification des croyances limitantes',
      'Exercices pratiques progressifs'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/apprendre-a-utiliser-le-pendule-radiesthesie-niveau-1/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy radiesthésie niveau 1 – apprendre le pendule',
      metaDescription: 'Cours niveau 1 sur la radiesthésie et le pendule : 2h, convention mentale, exercices pratiques. Idéal pour débutants souhaitant apprendre le pendule.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Zeinab',
      specialty: 'Coach, Thérapeute holistique, Énergéticienne, Naturopathe, Sophrologue, Praticienne EFT et Psycho-généalogie',
      experience: 'Plusieurs années d\'accompagnement holistique'
    },
    categories: ['Radiesthésie', 'Pendule', 'Développement personnel', 'Pratiques ésotériques'],
    keywords: ['pendule', 'radiesthésie', 'convention mentale', 'guérison', 'nettoyage énergétique', 'eau'],
    targetAudience: ['Débutants souhaitant apprendre le pendule', 'Curieux des pratiques ésotériques', 'Thérapeutes voulant accompagner les autres', 'Personnes en développement personnel']
  },
  {
    id: 'udemy-5',
    title: 'Magnet Healing Therapy Course - Thérapie par les Aimants',
    slug: 'magnet-healing-therapy-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 6,
    priceEUR: 19.99,
    tags: ['certifiant', 'distanciel', 'udemy'],
    headline: 'Diplôme certifié en thérapie magnétique enseignant comment utiliser les aimants dans les arts de la guérison.',
    description: 'Ce cours certifié en thérapie magnétique vous enseignera comment utiliser les aimants dans les arts de la guérison. Comprend l\'histoire complète du magnétisme à travers les âges et les nouvelles approches holistiques de traitement. Formation dispensée par Dr. Himani Vashishta, experte reconnue en médecines alternatives.',
    keyPoints: [
      'Histoire du magnétisme à travers les âges',
      'Nouveaux traitements holistiques',
      'Principes de la thérapie magnétique',
      'Techniques d\'application des aimants',
      'Protocoles de soins',
      'Médecine alternative et magnétisme',
      'Pratiques thérapeutiques avancées'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/magnet-healing-therapy-alternative-medicine-course/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy thérapie magnétique par aimants – diplôme certifié',
      metaDescription: 'Diplôme certifié en thérapie magnétique : 6h, utilisation des aimants pour guérison. Note 4,9/5 (148 avis). Dr. Himani Vashishta, experte médecines alternatives.'
    },
    platform: 'udemy',
    language: 'en',
    rating: 4.9,
    reviewCount: 148,
    instructor: {
      name: 'Dr. Himani Vashishta',
      specialty: 'Naturopathie, Psychologie, Ayurveda, MD Alternative Medicine, Reiki GrandMaster, Pranic Healer, Kundalini',
      experience: 'Auteur célèbre, praticienne en thérapies alternatives, conférencière'
    },
    categories: ['Thérapie magnétique', 'Médecine alternative', 'Guérison holistique', 'Magnétisme thérapeutique'],
    keywords: ['aimants', 'magnétisme', 'thérapie', 'guérison', 'holistique', 'médecine alternative'],
    targetAudience: ['Praticiens en médecine alternative', 'Thérapeutes holistiques', 'Personnes intéressées par les thérapies magnétiques', 'Professionnels du bien-être'],
    lastUpdated: '11/2024'
  },
  {
    id: 'udemy-6',
    title: 'Plénitude, Respiration & Ancrage',
    slug: 'plenitude-respiration-ancrage-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Formation sur l\'ancrage et l\'augmentation du taux vibratoire, prérequis essentiel pour développer le magnétisme et l\'intuition.',
    description: 'Formation fondamentale découvrant le lien d\'incarnation à notre dimension physique. Essentiel pour développer le magnétisme, l\'intuition, la radiesthésie et toutes pratiques énergétiques. Apprenez à vous sentir en sécurité, gérer vos émotions, résister aux influences énergétiques, améliorer votre vitalité et vos capacités d\'autoguérison. Prérequis pour quasiment toutes les actions de développement personnel et spirituel.',
    keyPoints: [
      'Importance de l\'ancrage',
      'Techniques de respiration',
      'Augmentation du taux vibratoire',
      'Gestion des émotions',
      'Protection énergétique',
      'Développement de l\'intuition',
      'Concentration et présence',
      'Régénération et vitalisation'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/plenitude-respiration-ancrage/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy ancrage et respiration – développement magnétisme',
      metaDescription: 'Formation sur l\'ancrage et l\'augmentation du taux vibratoire : 1h, prérequis pour développer magnétisme et intuition. Fabien Marchand, naturopathe-énergéticien.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Fabien Marchand',
      specialty: 'Naturopathe-Iridologue, Énergéticien, créateur des concepts 4 consciences© et échiquier de vie©',
      experience: 'Formateur depuis plus de 10 ans, conférencier et auteur'
    },
    categories: ['Ancrage', 'Développement personnel', 'Énergétique', 'Méditation', 'Magnétisme'],
    keywords: ['ancrage', 'respiration', 'taux vibratoire', 'énergie', 'intuition', 'magnétisme', 'empathie'],
    targetAudience: ['Personnes en reconversion', 'Personnes en développement personnel', 'Empathes', 'Futurs thérapeutes', 'Futurs magnétiseurs', 'Énergéticiens en formation', 'Futurs voyants/médiums']
  },
  {
    id: 'udemy-7',
    title: 'Éveil à la Médiumnité',
    slug: 'eveil-mediumnite-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1.5,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Éveillez votre médiumnité avec confiance : les 4 sens médiumniques, outils pratiques, connexion spirituelle et éthique.',
    description: 'Formation complète pour éveiller et développer vos capacités médiumniques. Découvrez ce qu\'est réellement un médium, explorez les 4 sens médiumniques (les clairs), pratiquez des exercices d\'ouverture des sens et de la conscience, apprenez à incarner la posture du médium et découvrez les outils facilitant la médiumnité. Formation dispensée par Nora Delapierre, mentor et thérapeute expérimentée.',
    keyPoints: [
      'Qu\'est-ce qu\'un médium et la médiumnité',
      'Les 4 sens médiumniques - les clairs',
      'Exercice d\'ouverture des sens et de la conscience',
      'Incarner la posture du médium',
      'Outils pour faciliter la médiumnité',
      'Éthique de la pratique médiumnique',
      'Connexion spirituelle',
      'Développement de l\'intuition'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/eveil-mediumnite/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy médiumnité – éveil aux capacités médiumniques',
      metaDescription: 'Formation complète pour éveiller votre médiumnité : 1h30, 4 sens médiumniques, outils pratiques. Nora Delapierre, mentor et thérapeute expérimentée.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Nora Delapierre',
      specialty: 'Thérapeute, Mentor, Formatrice en développement spirituel, Auteure',
      experience: 'Accompagnement depuis 2006, fondatrice d\'Empowerment au Féminin et Le Cercle Sacré des Aventurières Spirituelles'
    },
    categories: ['Médiumnité', 'Développement spirituel', 'Intuition', 'Pratiques ésotériques'],
    keywords: ['médiumnité', 'clairs', 'intuition', 'spirituel', 'connexion', 'esprits', 'psychique'],
    targetAudience: ['Personnes appelées à développer leurs capacités médiumniques', 'Entrepreneures intuitives', 'Aventurières spirituelles', 'Personnes en éveil spirituel']
  },
  {
    id: 'udemy-8',
    title: 'Embody your Feminine (Magnetic) Energy',
    slug: 'embody-feminine-magnetic-energy-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1.5,
    priceEUR: 19.99,
    tags: ['court', 'distanciel', 'udemy'],
    headline: 'Cours pour comprendre, activer et intégrer votre énergie féminine (magnétique) de manière simple et efficace.',
    description: 'Ce cours vous aide à comprendre, activer et intégrer l\'énergie féminine (magnétique) de la manière la plus simple. Explorez la dualité fondamentale de l\'univers (Masculin-Féminin), apprenez à équilibrer ces polarités en vous pour vivre une vie heureuse, puissante et connectée. Méditation guidée pour purifier et intégrer votre lignée féminine. Union sacrée intérieure (électromagnétisme).',
    keyPoints: [
      'Qu\'est-ce que l\'énergie féminine',
      'L\'énergie féminine dans l\'univers',
      'L\'énergie féminine dans le monde humain',
      'Phases d\'intégration de l\'énergie féminine',
      'L\'énergie féminine en 5ème dimension',
      'Intégration et harmonisation',
      'L\'union divine',
      'Méditation guidée pour purifier la lignée féminine'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/embody-your-feminine-energy/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy énergie féminine magnétique – développement spirituel',
      metaDescription: 'Cours sur l\'énergie féminine magnétique : 1h30, dualité universelle, méditation guidée. Comprendre et intégrer votre pouvoir féminin.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Alex',
      specialty: 'Mentor d\'ascension et incarnation, Guide intuitif, Enseignant de réalisation de soi',
      experience: 'Éveils profonds et transformations, mentor de nouvelle Terre, coach de mission d\'âme'
    },
    categories: ['Énergie féminine', 'Développement spirituel', 'Magnétisme', 'Dualité', 'Union sacrée'],
    keywords: ['féminin', 'magnétique', 'énergie', 'dualité', 'union sacrée', 'électromagnétisme', 'polarité'],
    targetAudience: ['Personnes souhaitant comprendre leur énergie féminine', 'Chercheurs spirituels', 'Personnes en quête d\'équilibre', 'Tous genres souhaitant explorer le féminin']
  },
  {
    id: 'udemy-9',
    title: 'Chakras de l\'équilibre à la guérison (Module 1) + BONUS',
    slug: 'chakras-equilibre-guerison-module-1-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'intermediaire',
    durationHours: 2,
    priceEUR: 19.99,
    tags: ['distanciel', 'udemy'],
    headline: 'Formation complète sur les chakras : histoire, évolution, équilibre et guérison avec bonus pratiques.',
    description: 'Dans ce cours Module 1, vous apprendrez et comprendrez mieux les chakras, leur histoire de l\'Orient à l\'Occident, leur évolution, les différents courants. Formation dispensée par Françoise Naglieri, formatrice certifiée en multiples techniques (PNL, Réflexologie, Reiki, LaHoChi, aromathérapie, lithothérapie). Approche complète pour l\'équilibre et la guérison par les chakras.',
    keyPoints: [
      'Histoire des chakras Orient-Occident',
      'Évolution de la connaissance des chakras',
      'Les différents courants et approches',
      'Anatomie énergétique',
      'Techniques d\'équilibrage des chakras',
      'Protocoles de guérison',
      'Applications pratiques',
      'Bonus complémentaires'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/chakras-de-lequilibre-a-la-guerison-module-1/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy chakras équilibre et guérison – module 1',
      metaDescription: 'Formation complète sur les chakras : 2h, histoire Orient-Occident, techniques d\'équilibrage. Françoise Naglieri, formatrice certifiée 30 ans d\'expérience.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Françoise Naglieri',
      specialty: 'Auteur, Formatrice, Coach Professionnel, Massothérapeute Spa, PNL, Réflexologie, Reiki, LaHoChi',
      experience: '30 ans d\'expérience en développement humain, directrice de Cap Vert Formations Bien-être'
    },
    categories: ['Chakras', 'Énergétique', 'Guérison', 'Bien-être', 'Développement personnel'],
    keywords: ['chakras', 'équilibre', 'guérison', 'énergie', 'soins', 'anatomie énergétique'],
    targetAudience: ['Débutants en énergétique', 'Thérapeutes en formation', 'Professionnels du bien-être', 'Personnes en développement personnel']
  },
  {
    id: 'udemy-10',
    title: 'Radiesthésie avec l\'antenne de Lecher - Géobiologie niveau 1',
    slug: 'radiesthesie-antenne-lecher-geobiologie-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 2.5,
    priceEUR: 19.99,
    tags: ['distanciel', 'udemy'],
    headline: 'Formation sur l\'utilisation de l\'antenne de Lecher pour mesurer objectivement les énergies en géobiologie et bio-énergie.',
    description: 'Formation complète sur l\'utilisation de l\'antenne de Lecher, instrument scientifique permettant de mesurer et déterminer les énergies de manière objective. Enseignée par Dame Anne-Marie Delmotte, scientifique belge Chevalier de l\'Ordre de Léopold, certifiée Reiki Master. Apprenez la géobiologie, les mesurages énergétiques et l\'équilibrage des bio-énergies. Cas pratiques sur sites énergétiques célèbres.',
    keyPoints: [
      'Introduction à l\'antenne de Lecher',
      'Principes scientifiques de la radiesthésie',
      'Géobiologie fondamentale',
      'Mesurages énergétiques',
      'Bio-énergie et équilibrage',
      'Protocoles de mesure',
      'Études de cas sur sites énergétiques',
      'Applications pratiques'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/radiesthesie-avec-antenne-de-lecher-geobiologie-niv-debutant/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy antenne de Lecher géobiologie – niveau 1',
      metaDescription: 'Formation sur l\'antenne de Lecher : 2h30, mesurages énergétiques objectifs, géobiologie. Dame Anne-Marie Delmotte, scientifique Chevalier de l\'Ordre de Léopold.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Dame Anne-Marie Delmotte',
      specialty: 'Scientifique (Chimie Clinique), Géobiologue, Reiki Master/Teacher, Reiki Chamanique et Cristal',
      experience: 'Chevalier dans l\'Ordre de Léopold (2018), recherche sur sites mégalithiques, pratique depuis 1987'
    },
    categories: ['Radiesthésie', 'Géobiologie', 'Bio-énergie', 'Antenne de Lecher', 'Mesures énergétiques'],
    keywords: ['antenne de lecher', 'radiesthésie', 'géobiologie', 'énergie', 'mesure', 'scientifique', 'bio-énergie'],
    targetAudience: ['Personnes hypersensibles aux énergies', 'Géobiologues en formation', 'Thérapeutes énergétiques', 'Personnes cherchant objectivité dans les mesures énergétiques']
  },
  {
    id: 'udemy-11',
    title: 'Attraction Reiki - Reiki and the Law of Attraction - Level 3',
    slug: 'attraction-reiki-level-3-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'avance',
    durationHours: 3,
    priceEUR: 19.99,
    tags: ['certifiant', 'distanciel', 'udemy'],
    headline: 'Niveau Master d\'Attraction Reiki combinant Reiki et Loi d\'Attraction pour développer une personnalité magnétique et manifester vos désirs.',
    description: 'Formation multimédia certifiante Niveau 3 - Master en Attraction Reiki, système puissant fusionnant Reiki et Loi de l\'Attraction. Apprenez à utiliser l\'énergie Reiki et les symboles pour améliorer vos capacités de manifestation, développer une personnalité magnétique, évaluer et renforcer votre magnétisme personnel. Certification accréditée IAOTH (International Association of Therapists). Système canalisé par Stephanie Brail, Reiki Master renommée.',
    keyPoints: [
      'Fonctionnement de la Loi d\'Attraction',
      'Énergie d\'Attraction (force mystérieuse)',
      'Symboles Reiki pour la manifestation',
      'Développement de la personnalité magnétique',
      'Évaluation du magnétisme personnel',
      'Renforcement de l\'aura magnétique',
      'Outils de manifestation',
      'Création de symboles d\'attraction personnels',
      'Activation d\'étudiants potentiels'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/attraction-reiki-reiki-and-the-law-of-attraction-level-3/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy Attraction Reiki niveau 3 – Master certification',
      metaDescription: 'Niveau Master Attraction Reiki : 3h, Reiki + Loi d\'Attraction, personnalité magnétique. Certification IAOTH. Système canalisé par Stephanie Brail.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Non spécifié',
      specialty: 'Reiki Master, accréditation IAOTH',
      experience: 'Système canalisé par Stephanie Brail'
    },
    categories: ['Reiki', 'Loi d\'Attraction', 'Manifestation', 'Magnétisme', 'Développement spirituel'],
    keywords: ['reiki', 'attraction', 'manifestation', 'magnétisme', 'aura', 'symboles', 'énergie'],
    targetAudience: ['Praticiens Reiki niveaux 1 et 2', 'Personnes souhaitant manifester leurs désirs', 'Thérapeutes énergétiques avancés', 'Futurs enseignants d\'Attraction Reiki']
  },
  {
    id: 'udemy-12',
    title: 'The Path to Mystical Power - Le Chemin vers le Pouvoir Mystique',
    slug: 'path-mystical-power-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 4,
    priceEUR: 19.99,
    tags: ['distanciel', 'udemy'],
    headline: 'Formation transformative pour maîtriser l\'énergie personnelle, développer la perception des auras, débloquer les capacités psychiques et manifester consciemment.',
    description: 'Voyage transformatif conçu pour combler le fossé entre le mystique et le pratique. Curriculum vivant pour ceux qui ressentent un appel profond à explorer les dimensions cachées de l\'existence. Maîtrisez les techniques fondamentales pour sentir, contrôler et améliorer votre énergie personnelle, développez la perception des auras, déverrouillez vos capacités intuitives et psychiques, et appliquez les principes du mysticisme quantique pour créer consciemment votre réalité.',
    keyPoints: [
      'Fondation en maîtrise énergétique',
      'Sensation et contrôle du pouvoir mystique personnel',
      'Lecture et interprétation des auras',
      'Développement des facultés intuitives et psychiques',
      'Distinction intuition authentique / mental',
      'Principes du mysticisme quantique',
      'Rôle de l\'observateur en physique quantique',
      'Pouvoir de la croyance et de la volonté',
      'Manifestation consciente'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/the-path-to-mystical-power/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy pouvoir mystique – développement capacités psychiques',
      metaDescription: 'Formation transformative sur le pouvoir mystique : 4h, maîtrise énergétique, perception auras, capacités psychiques. Mysticisme quantique et manifestation.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Niyazi Harmanbaşı',
      specialty: 'ICF Relationship Coach, Expert en Communication',
      experience: 'Coach de vie transformationnel voyageant le monde, créateur de cours à haute valeur'
    },
    categories: ['Pouvoir mystique', 'Développement spirituel', 'Auras', 'Manifestation', 'Mysticisme quantique'],
    keywords: ['mystique', 'pouvoir', 'énergie', 'auras', 'psychique', 'manifestation', 'quantique'],
    targetAudience: ['Chercheurs spirituels', 'Intuitifs en développement', 'Personnes en découverte de soi', 'Créateurs conscients de leur réalité'],
    lastUpdated: '11/2024'
  },
  {
    id: 'udemy-13',
    title: 'Learn how to use Metaphysics to change your Life - Métaphysique pour transformer sa vie',
    slug: 'metaphysics-change-life-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 2.5,
    priceEUR: 19.99,
    tags: ['distanciel', 'udemy'],
    headline: 'Techniques pratiques pour utiliser la métaphysique et l\'énergie psychotronique pour manifester, guérir et créer avec Reiki, Qigong, Kundalini Yoga.',
    description: 'Cours pratique expliquant la Métaphysique et la Psychotronique et comment les utiliser pour obtenir les résultats désirés. Instructions visuelles étape par étape sur Reiki, Qigong, Kundalini Yoga, respiration Wim Hof, et déplacement d\'objets avec l\'esprit. Apprenez à voir et ressentir l\'énergie autour de vous, améliorer l\'énergie dans vos mains, chakras, yeux, imagination et pensées. Techniques pour plier une cuillère, créer des boules d\'énergie, champs de force, canaliser l\'énergie pour guérir et utiliser un pendule.',
    keyPoints: [
      'Métaphysique et Psychotronique expliqués',
      'Techniques Reiki',
      'Qigong pratique',
      'Kundalini Yoga',
      'Respiration Wim Hof',
      'Amélioration de l\'énergie (mains, chakras, yeux)',
      'Création de boules d\'énergie et champs de force',
      'Channeling d\'énergie pour guérison',
      'Utilisation du pendule',
      'Techniques de manifestation'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/how-to-use-metaphysical-energy/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy métaphysique et psychotronique – transformer sa vie',
      metaDescription: 'Cours pratique sur métaphysique et psychotronique : 2h30, Reiki, Qigong, Kundalini, techniques énergétiques. Instructions visuelles étape par étape.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Marvin Camacho',
      specialty: 'Coach de Vie Transformationnel, Énergie Spirituelle, Reiki, Qigong, Méditation Mindfulness',
      experience: 'Vidéos YouTube, enseignant Qigong et Méditation'
    },
    categories: ['Métaphysique', 'Psychotronique', 'Énergie', 'Reiki', 'Qigong', 'Manifestation'],
    keywords: ['métaphysique', 'psychotronique', 'énergie', 'reiki', 'qigong', 'kundalini', 'manifestation', 'guérison'],
    targetAudience: ['Personnes voulant instructions pratiques sur l\'énergie', 'Personnes à esprit ouvert', 'Curieux de leurs capacités spirituelles', 'Personnes souhaitant améliorer leur vie']
  },
  {
    id: 'udemy-14',
    title: 'Conscious Energy Healing - Guérison Énergétique Consciente',
    slug: 'conscious-energy-healing-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 1.5,
    priceEUR: 19.99,
    tags: ['distanciel', 'udemy'],
    headline: 'Stratégies de guérison énergétique incluant quantum healing et pranic healing. Cultivez un état d\'esprit de guérison et soulagez la dépression naturellement.',
    description: 'La guérison énergétique est un système de guérison traditionnel qui restaure l\'équilibre et le flux d\'énergie dans le corps, l\'esprit et l\'âme. Cette technique travaille directement avec les aspects physiques, émotionnels et spirituels du bien-être. Le Quantum Healing est basé sur les principes de résonance et divertissement. Le Pranic Healing utilise la force vitale du corps pour guérir l\'énergie corporelle. Formation couvrant différentes techniques de guérison énergétique et leurs applications pratiques.',
    keyPoints: [
      'Comprendre les formes de guérison énergétique',
      'Ce que chacun devrait savoir sur la guérison énergétique',
      'Stratégies de guérison énergétique',
      'Cultiver un état d\'esprit de guérison',
      'Outils pour augmenter l\'énergie de guérison (internes)',
      'Guérison de la dépression sans médication',
      'Exercices et thérapies de rajeunissement',
      'Outils et pratiques (externes)'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/conscious-energy-healing/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy guérison énergétique consciente – quantum healing',
      metaDescription: 'Stratégies de guérison énergétique : 1h30, quantum healing, pranic healing, guérison dépression. Techniques pratiques pour restaurer équilibre énergétique.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Non spécifié',
      specialty: 'Business et Marketing (CIM-UK), MBA, expérience en santé holistique',
      experience: '23 ans d\'expérience pratique, enseignant Udemy'
    },
    categories: ['Guérison énergétique', 'Quantum Healing', 'Pranic Healing', 'Bien-être', 'Santé holistique'],
    keywords: ['guérison énergétique', 'quantum healing', 'pranic healing', 'énergie', 'bien-être', 'dépression'],
    targetAudience: ['Tout le monde', 'Praticiens de guérison énergétique', 'Guérisseurs', 'Organisations à but non lucratif', 'Consultants', 'Étudiants']
  },
  {
    id: 'udemy-15',
    title: 'Formation certifiante de Praticien(ne) en Lithothérapie',
    slug: 'formation-lithotherapie-praticien-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 3,
    priceEUR: 19.99,
    tags: ['certifiant', 'distanciel', 'udemy'],
    headline: 'Formation certifiante complète sur la thérapie par les pierres, cristaux et minéraux utilisant leurs propriétés vibratoires pour guérir.',
    description: 'La lithothérapie est une discipline millénaire utilisant les propriétés vibratoires des pierres pour prévenir, apaiser et soigner les maux physiques et psychiques. Cette formation vous emmène dans un voyage autour des pierres et minéraux, leur usage à travers l\'histoire. Apprenez à les connaître, les utiliser, et réaliser des séances complètes. Traitez baisses d\'énergie, troubles du sommeil, émotionnels, digestifs, hormonaux, douleurs articulaires, stress, manque de confiance.',
    keyPoints: [
      'Monde des minéraux et leurs bienfaits',
      'Histoire de la lithothérapie (Inde, Chine)',
      'Propriétés vibratoires des pierres',
      'Champs électromagnétiques et énergie fine',
      'Minéraux organiques dans le corps',
      'Accompagnement et écoute',
      'Processus de soin adapté',
      'Conseil sur choix de pierres',
      'Disposition des pierres dans l\'environnement'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/formation-certifiante-de-praticienne-en-lithotherapie/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy lithothérapie praticien – certification complète',
      metaDescription: 'Formation certifiante lithothérapie : 3h, thérapie par pierres et cristaux, propriétés vibratoires. Traiter troubles énergétiques, émotionnels, physiques.'
    },
    platform: 'udemy',
    language: 'fr',
    instructor: {
      name: 'Non spécifié',
      specialty: 'Lithothérapie, Médecines alternatives',
      experience: 'Formation professionnelle certifiante'
    },
    categories: ['Lithothérapie', 'Cristaux', 'Thérapies alternatives', 'Énergétique', 'Bien-être'],
    keywords: ['lithothérapie', 'cristaux', 'pierres', 'minéraux', 'vibrations', 'guérison', 'énergie'],
    targetAudience: ['Personnes en acquisition de savoir personnel', 'Personnes en reconversion professionnelle', 'Professionnels de médecine alternative', 'Thérapeutes souhaitant nouvelles compétences']
  },
  {
    id: 'udemy-16',
    title: 'Certificate Course in Quantum Healing, Qigong & Womb Healing',
    slug: 'quantum-healing-qigong-womb-healing-udemy',
    provider: 'Udemy',
    format: 'distanciel',
    level: 'debutant',
    durationHours: 4,
    priceEUR: 19.99,
    tags: ['certifiant', 'distanciel', 'udemy'],
    headline: 'Découvrez l\'auto-guérison par les lois de la physique quantique et la connexion corps-esprit. Quantum Healing, Qigong et Womb Healing.',
    description: 'Cours exclusif certifié conçu par Dr. Himani Vashishta, basé sur son Best Seller \'Complete Quantum Healing Practitioner Handbook\'. Découvrez le pouvoir de l\'auto-guérison à travers les lois de la physique quantique et la connexion corps-esprit. Le Quantum Healing ne nécessite pas d\'années d\'étude et peut être pratiqué par tous. Focus sur l\'énergie vitale (chi) à travers respiration et exercices de conscience corporelle. Approche holistique pouvant se combiner avec toutes autres thérapies, y compris médecine occidentale.',
    keyPoints: [
      'Qu\'est-ce que le Quantum Healing',
      'Physique quantique et médecine',
      'ADN et ses transformations',
      'Intelligence supramentale',
      'Utiliser l\'énergie pour l\'équilibre',
      'Méditation et exercices de focalisation corporelle',
      'Womb Healing (guérison de l\'utérus)',
      'Qigong - énergie vitale',
      'Guérison naturelle du corps',
      'Techniques holistiques variées'
    ],
    bonuses: ['Certificat de fin de formation', 'Accès mobile et TV', 'Accès illimité', 'Ressources téléchargeables'],
    affiliation: {
      url: buildAffiliateLink('https://www.udemy.com/course/certificate-course-in-quantum-healing-qigong-womb-healing/', 'udemy'),
      commissionPct: 20
    },
    seo: {
      metaTitle: 'Formation Udemy quantum healing Qigong womb healing – certificat',
      metaDescription: 'Cours certifié quantum healing : 4h, Qigong, womb healing, auto-guérison physique quantique. Dr. Himani Vashishta, basé sur best seller.'
    },
    platform: 'udemy',
    language: 'en',
    instructor: {
      name: 'Dr. Himani Vashishta',
      specialty: 'Naturopathie, Psychologie, Ayurveda, MD Alternative Medicine, Reiki GrandMaster, Pranic Healer, Kundalini',
      experience: 'Auteur célèbre, praticienne thérapies alternatives, Vidya Retreat'
    },
    categories: ['Quantum Healing', 'Qigong', 'Womb Healing', 'Guérison holistique', 'Médecine quantique'],
    keywords: ['quantum healing', 'qigong', 'womb healing', 'chi', 'énergie vitale', 'physique quantique', 'holistique'],
    targetAudience: ['Tous publics', 'Personnes cherchant auto-guérison', 'Praticiens en médecine alternative', 'Personnes intéressées par physique quantique', 'Thérapeutes holistiques']
  }
];

export const getFormationBySlug = (slug: string) =>
  formations.find((formation) => formation.slug === slug);

export const getFeaturedFormations = (limit = 3) => formations.slice(0, limit);

export const getFormationsByPlatform = (platform: 'udemy' | 'autre') =>
  formations.filter((formation) => formation.platform === platform);

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

