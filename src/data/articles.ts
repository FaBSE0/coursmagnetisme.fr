export interface ArticleSummary {
  slug: string;
  title: string;
  excerpt: string;
  readingTime: string;
  publishedAt: string;
  tags: string[];
  coverImage?: string;
}

export interface BlogPost extends ArticleSummary {
  content: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'debuter-magnetisme-en-30-jours',
    title: 'Débuter le magnétisme en 30 jours : la méthode guidée',
    excerpt:
      'Routine quotidienne, exercices de ressentis et premiers protocoles pour pratiquer en toute sécurité.',
    readingTime: '8 min',
    publishedAt: '2025-05-12',
    tags: ['guide', 'débutants'],
    content: [
      'Avant de proposer des soins, commencez par installer un rituel quotidien simple : ancrage, respiration, centrage. Dix minutes matin et soir suffisent pour affiner votre sensibilité.',
      'Alternez entre auto-soins et pratiques sur un proche volontaire. Utilisez un carnet pour noter vos ressentis, la durée, les feedbacks. Cela vous permettra d’observer vos progrès sur plusieurs semaines.',
      'Au bout de 30 jours, vous devez connaître vos protocoles d’ouverture/fermeture, votre manière de scanner et de réharmoniser. Ce socle suffit pour rejoindre une formation plus avancée en toute confiance.'
    ]
  },
  {
    slug: 'comparer-ecoles-magnetisme',
    title: 'Comment comparer les écoles de magnétisme en 2025 ?',
    excerpt:
      'Nos 7 critères pour évaluer une formation : sérieux pédagogique, supervision, intégration business…',
    readingTime: '6 min',
    publishedAt: '2025-04-28',
    tags: ['comparatif', 'formation'],
    content: [
      'Premier réflexe : identifiez le profil des formateurs. Ont-ils une activité clinique ? Supervisent-ils des praticiens ? La crédibilité d’un cursus dépend beaucoup de son équipe pédagogique.',
      'Analysez ensuite la place de la pratique. Nous recommandons au moins 40 % d’ateliers supervisés (en présentiel ou en ligne) et un suivi post-formation de trois mois minimum.',
      'Enfin, vérifiez la transparence sur les débouchés : témoignages d’anciens, statistiques de reconversion, modules business compris ou non. Une bonne école vous aide à transformer vos compétences en activité pérenne.'
    ]
  },
  {
    slug: 'temoignages-eleves-reconversion',
    title: 'Ils se sont reconvertis grâce au magnétisme : 4 témoignages',
    excerpt:
      'Parcours réels, difficultés rencontrées et conseils pour réussir sa transition professionnelle.',
    readingTime: '7 min',
    publishedAt: '2025-03-18',
    tags: ['témoignages'],
    content: [
      'Claire a gardé son poste d’infirmière la nuit tout en se formant les week-ends. Elle a mis 9 mois à basculer à 100 % vers le magnétisme, en s’appuyant sur des partenariats avec des kinés.',
      'Thomas, lui, a privilégié un cursus distanciel afin de voyager. Ses premiers clients sont arrivés via des collaborations avec des ostéopathes qui le recommandaient pour les soins post-opératoires.',
      'Le point commun de ces réussites : un accompagnement collectif, des comptes-rendus réguliers et la capacité à communiquer sur ses valeurs. La technique seule ne suffit pas.'
    ]
  }
];

export const featuredArticles: ArticleSummary[] = blogPosts.map(({ content, ...summary }) => summary);

export const getPostBySlug = (slug: string) => blogPosts.find((post) => post.slug === slug);

