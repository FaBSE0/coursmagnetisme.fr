export type FaqCategory = 'general' | 'formation' | 'financement' | 'pratique';

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: FaqCategory;
}

export const faqItems: FaqItem[] = [
  {
    id: 'general-prequis',
    question: 'Faut-il un don particulier pour pratiquer le magnétisme ?',
    answer:
      'Non. La majorité des écoles partent du principe que la sensibilité énergétique se développe grâce à des exercices réguliers, un accompagnement et un cadre éthique solide.',
    category: 'general'
  },
  {
    id: 'formation-choix',
    question: 'Comment savoir si une formation est sérieuse ?',
    answer:
      'Vérifiez les preuves sociales (avis vérifiés, intervenants identifiés), la place du mentorat/supervision, la transparence sur les modules et la possibilité de pratiquer sur de vrais cas.',
    category: 'formation'
  },
  {
    id: 'financement-cpf',
    question: 'Peut-on utiliser le CPF ou un financement externe ?',
    answer:
      'Très peu de formations en magnétisme sont éligibles au CPF. En revanche, certaines écoles proposent des échéanciers ou des dispositifs régionaux (AGEFIPH, FAF). Nous le précisons dans chaque fiche.',
    category: 'financement'
  },
  {
    id: 'pratique-installation',
    question: 'Combien de temps pour s’installer en tant que praticien ?',
    answer:
      'Comptez entre 3 et 6 mois pour consolider la technique et poser les bases de votre activité (statut, communication, tests clients). Les formations longues intègrent souvent un module business.',
    category: 'pratique'
  },
  {
    id: 'general-distance',
    question: 'Un cursus 100 % en ligne est-il suffisant ?',
    answer:
      'Oui si vous pratiquez en parallèle sur des proches et que le programme propose des retours personnalisés. Les formats hybrides restent idéaux pour recevoir du feedback in situ.',
    category: 'general'
  }
];

export const getFaqByCategory = (category: FaqCategory) =>
  faqItems.filter((item) => item.category === category);

