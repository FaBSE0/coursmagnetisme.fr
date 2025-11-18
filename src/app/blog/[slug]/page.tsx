import { notFound } from 'next/navigation';

import { blogPosts, getPostBySlug } from '@/data/articles';
import { Badge } from '@/components/ui/badge';
import { buildMetadata } from '@/lib/seo';

type BlogArticlePageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  blogPosts.map((post) => ({
    slug: post.slug
  }));

export const generateMetadata = ({ params }: BlogArticlePageProps) => {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
};

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Cours Magnétisme'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://coursmagnetisme.fr/blog/${post.slug}`
    }
  };
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Blog',
        item: 'https://coursmagnetisme.fr/blog'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: post.title,
        item: `https://coursmagnetisme.fr/blog/${post.slug}`
      }
    ]
  };

  return (
    <article className="py-16">
      <div className="container max-w-3xl space-y-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-primary/70">Blog</p>
          <h1 className="font-display text-4xl font-semibold text-foreground">{post.title}</h1>
          <p className="text-lg text-muted-foreground">{post.excerpt}</p>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
            <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div className="prose prose-lg max-w-none text-foreground prose-headings:font-display prose-a:text-primary">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        suppressHydrationWarning
      />
    </article>
  );
}

