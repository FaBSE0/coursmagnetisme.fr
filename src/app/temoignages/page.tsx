import { testimonials } from '@/data/testimonials';
import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { Card } from '@/components/ui/card';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Avis d’élèves sur les formations de magnétisme',
  description:
    'Retours d’expérience certifiés pour vous aider à choisir la formation de magnétisme adaptée à votre pratique.',
  path: '/temoignages'
});

export default function TestimonialsPage() {
  const average = (testimonials.reduce((sum, testimonial) => sum + testimonial.rating, 0) / testimonials.length).toFixed(
    1
  );
  const aggregateJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Sélection formations magnétisme',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: average,
      reviewCount: testimonials.length
    }
  };

  return (
    <>
      <PageHeader
        eyebrow="Preuves sociales"
        title="Ils se sont formés avec succès"
        description="Avis vérifiés auprès d’élèves en fin de cursus ou installés. Chaque récit est recontacté pour garantir son authenticité."
        align="center"
      />
      <Section
        title="Des résultats concrets"
        description="Nous suivons les cohortes sur la durée pour mesurer l’impact des formations dans la vraie vie."
        align="center"
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { value: `${average}/5`, label: 'Note moyenne' },
            { value: '94 %', label: 'Recommandent leur formation' },
            { value: '3 mois', label: 'Temps médian pour lancer ses soins' }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-border bg-white/80 p-6 text-center shadow-sm"
            >
              <p className="text-3xl font-semibold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        kicker="Témoignages"
        title="Ils racontent leur parcours"
        description="Filtrez par niveau ou par organisme depuis le comparatif pour trouver les avis qui vous ressemblent."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="space-y-4 rounded-3xl border border-border/80 bg-card/80 p-6">
              <p className="text-lg text-foreground">“{testimonial.quote}”</p>
              <div>
                <p className="text-base font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">
                {testimonial.rating} / 5
              </p>
            </Card>
          ))}
        </div>
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateJsonLd) }}
        suppressHydrationWarning
      />
    </>
  );
}

