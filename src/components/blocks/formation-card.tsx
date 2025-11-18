import Link from 'next/link';

import type { Formation } from '@/data/formations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

type FormationCardProps = {
  formation: Formation;
};

export const FormationCard = ({ formation }: FormationCardProps) => (
  <Card className="flex flex-col">
    <CardHeader>
      <p className="text-xs uppercase tracking-wide text-muted-foreground">{formation.provider}</p>
      <CardTitle className="text-2xl">{formation.title}</CardTitle>
      <p className="text-base text-muted-foreground">{formation.headline}</p>
    </CardHeader>
    <CardContent className="space-y-4 text-sm text-muted-foreground">
      <dl className="grid grid-cols-2 gap-4 text-xs uppercase tracking-wide">
        <div>
          <dt>Format</dt>
          <dd className="text-base font-semibold text-foreground">{formation.format}</dd>
        </div>
        <div>
          <dt>Niveau</dt>
          <dd className="text-base font-semibold text-foreground">{formation.level}</dd>
        </div>
        <div>
          <dt>Durée</dt>
          <dd className="text-base font-semibold text-foreground">{formation.durationHours} h</dd>
        </div>
        <div>
          <dt>Tarif</dt>
          <dd className="text-base font-semibold text-foreground">
            {formatPrice(formation.priceEUR)}
          </dd>
        </div>
      </dl>
      <ul className="space-y-2">
        {formation.keyPoints.slice(0, 3).map((point) => (
          <li key={point} className="flex gap-2 text-sm">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {formation.tags.map((tag) => (
          <Badge key={tag} variant="outline">
            {tag}
          </Badge>
        ))}
      </div>
    </CardContent>
    <CardContent className="mt-auto pt-0">
      <Button asChild className="w-full">
        <Link href={`/formations/${formation.slug}`}>Découvrir la formation</Link>
      </Button>
    </CardContent>
  </Card>
);

