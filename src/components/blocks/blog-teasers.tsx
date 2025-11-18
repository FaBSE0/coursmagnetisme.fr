import Link from 'next/link';

import type { ArticleSummary } from '@/data/articles';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

type BlogTeasersProps = {
  articles: ArticleSummary[];
};

export const BlogTeasers = ({ articles }: BlogTeasersProps) => (
  <div className="grid gap-6 md:grid-cols-3">
    {articles.map((article) => (
      <Card key={article.slug} className="flex flex-col">
        <CardHeader>
          <CardTitle className="text-2xl">{article.title}</CardTitle>
          <CardDescription>{article.excerpt}</CardDescription>
        </CardHeader>
        <CardContent className="mt-auto space-y-4 text-sm text-muted-foreground">
          <div className="flex items-center justify-between text-xs uppercase tracking-wide">
            <span>{article.readingTime}</span>
            <span>{new Date(article.publishedAt).toLocaleDateString('fr-FR')}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/blog/${article.slug}`} className="font-medium text-primary">
            Lire l’article →
          </Link>
        </CardContent>
      </Card>
    ))}
  </div>
);

