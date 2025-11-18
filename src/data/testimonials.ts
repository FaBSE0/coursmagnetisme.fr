export interface Testimonial {
  id: string;
  author: string;
  role: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
  formationId?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 'lea-holon',
    author: 'Léa B.',
    role: 'Praticienne Reiki en reconversion',
    quote:
      'Le parcours Holon m’a donné un cadre clair pour passer de passionnée à praticienne installée. Le mentorat personnalisé m’a énormément aidée.',
    rating: 5,
    formationId: 'holon-reiki-pro'
  },
  {
    id: 'marc-atlantis',
    author: 'Marc T.',
    role: 'Infirmier libéral',
    quote:
      'Le bootcamp Espace Atlantis est ultra concret. J’ai enfin trouvé comment intégrer le magnétisme dans ma pratique quotidienne.',
    rating: 4,
    formationId: 'espace-atlantis-bootcamp'
  },
  {
    id: 'julie-udemy',
    author: 'Julie M.',
    role: 'Débutante curieuse',
    quote:
      'L’initiation Udemy m’a permis de tester la discipline sans pression. Les exercices guidés sont parfaits pour développer sa sensibilité.',
    rating: 4,
    formationId: 'udemy-initiation'
  },
  {
    id: 'adel-acm',
    author: 'Adel S.',
    role: 'Magnétiseur installé',
    quote:
      'La certification ACM va beaucoup plus loin que les autres écoles : supervision clinique, retours business, réseaux professionnels.',
    rating: 5,
    formationId: 'acm-pro'
  }
];

export const getTestimonialByFormation = (formationId: string) =>
  testimonials.filter((testimonial) => testimonial.formationId === formationId);

