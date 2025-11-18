import type { Formation } from '@/data/formations';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

type ComparisonTableProps = {
  formations: Formation[];
};

export const ComparisonTable = ({ formations }: ComparisonTableProps) => (
  <div className="grid gap-6 md:grid-cols-3">
    {formations.map((formation) => (
      <Card key={formation.id} className="flex flex-col">
        <CardHeader>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{formation.provider}</p>
          <CardTitle className="text-2xl">{formation.title}</CardTitle>
          <p className="text-base text-muted-foreground">{formation.headline}</p>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col gap-4 text-sm">
          <div className="rounded-xl bg-muted/60 p-4">
            <dl className="grid grid-cols-2 gap-3 text-xs uppercase tracking-wide text-muted-foreground">
              <div>
                <dt className="text-[10px]">Format</dt>
                <dd className="text-base font-semibold text-foreground">{formation.format}</dd>
              </div>
              <div>
                <dt className="text-[10px]">Durée</dt>
                <dd className="text-base font-semibold text-foreground">{formation.durationHours} h</dd>
              </div>
              <div>
                <dt className="text-[10px]">Niveau</dt>
                <dd className="text-base font-semibold text-foreground">{formation.level}</dd>
              </div>
              <div>
                <dt className="text-[10px]">Tarif</dt>
                <dd className="text-base font-semibold text-foreground">
                  {formatPrice(formation.priceEUR)}
                </dd>
              </div>
            </dl>
          </div>
          <ul className="space-y-2 text-base text-muted-foreground">
            {formation.keyPoints.slice(0, 3).map((point) => (
              <li key={point} className="flex gap-2 text-sm">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {formation.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
);

