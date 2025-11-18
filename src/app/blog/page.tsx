import Link from 'next/link';

import { blogPosts } from '@/data/articles';
import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Blog magnétisme : guides et actualités',
  description:
    'Guides pratiques, témoignages et comparatifs pour avancer sereinement dans votre apprentissage du magnétisme.',
  path: '/blog'
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ressources"
        title="Blog & actualités"
        description="Les articles sont mis à jour chaque mois avec les retours de nos cohortes et de nos partenaires écoles."
        align="center"
      />
      <Section title="Articles récents" description="Explorez les derniers contenus publiés.">
        <div className="grid gap-6 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-2xl">{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardHeader>
              <CardContent className="mt-auto space-y-4 text-sm text-muted-foreground">
                <div className="flex items-center justify-between text-xs uppercase tracking-wide">
                  <span>{post.readingTime}</span>
                  <span>{new Date(post.publishedAt).toLocaleDateString('fr-FR')}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`} className="font-medium text-primary">
                  Lire l’article →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

