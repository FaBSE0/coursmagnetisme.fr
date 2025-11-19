import Image from 'next/image';
import Link from 'next/link';

import type { Formation } from '@/data/formations';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { formatPrice, formatRating } from '@/lib/utils';

type FormationCardProps = {
  formation: Formation;
};

export const FormationCard = ({ formation }: FormationCardProps) => (
  <Card className="flex flex-col overflow-hidden">
    <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-energy-500/10 to-healing-500/10">
      <Image
        src="/images/formations/formation-placeholder.svg"
        alt={formation.title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        {formation.platform === 'udemy' && (
          <Badge variant="energy" className="bg-white/90 text-primary">
            Udemy
          </Badge>
        )}
        {!formation.platform && (
          <Badge variant="energy" className="bg-white/90 text-primary">
            {formation.provider.split(' ')[0]}
          </Badge>
        )}
      </div>
    </div>
    <CardHeader>
      <div className="mb-3 flex items-center gap-3">
        <div className="relative h-8 w-24 overflow-hidden rounded border border-border/50 bg-white/80">
          <Image
            src="/images/logos/logo-placeholder.svg"
            alt={`Logo ${formation.provider}`}
            fill
            className="object-contain p-1"
            sizes="96px"
          />
        </div>
        <div className="flex-1">
          <p className="text-xs uppercase tracking-wide text-muted-foreground">{formation.provider}</p>
          {formation.language && formation.language !== 'fr' && (
            <Badge variant="outline" className="mt-1 text-xs">
              {formation.language === 'en' ? 'Anglais' : formation.language}
            </Badge>
          )}
        </div>
      </div>
      <CardTitle className="text-2xl">{formation.title}</CardTitle>
      <p className="text-base text-muted-foreground">{formation.headline}</p>
      {formation.rating && formation.reviewCount && (
        <div className="mt-2 text-sm font-semibold text-foreground">
          {formatRating(formation.rating, formation.reviewCount)}
        </div>
      )}
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

