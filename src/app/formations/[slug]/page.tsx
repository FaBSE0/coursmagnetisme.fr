import { notFound } from 'next/navigation';

import { faqItems } from '@/data/faq';
import { formations, getFormationBySlug } from '@/data/formations';
import { getTestimonialByFormation } from '@/data/testimonials';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Section } from '@/components/shared/section';
import { FaqAccordion } from '@/components/blocks/faq-accordion';
import { buildMetadata, courseJsonLd } from '@/lib/seo';
import { formatPrice } from '@/lib/utils';

type FormationPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  formations.map((formation) => ({
    slug: formation.slug
  }));

export const generateMetadata = ({ params }: FormationPageProps) => {
  const formation = getFormationBySlug(params.slug);
  if (!formation) return {};

  return buildMetadata({
    title: formation.seo.metaTitle,
    description: formation.seo.metaDescription,
    path: `/formations/${formation.slug}`
  });
};

export default function FormationDetailPage({ params }: FormationPageProps) {
  const formation = getFormationBySlug(params.slug);

  if (!formation) {
    notFound();
  }

  const testimonials = getTestimonialByFormation(formation.id);
  const jsonLd = JSON.stringify(courseJsonLd(formation));
  const breadcrumbJsonLd = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Formations',
        item: `https://coursmagnetisme.fr/formations`
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: formation.title,
        item: `https://coursmagnetisme.fr/formations/${formation.slug}`
      }
    ]
  });
  const faqForFormation = faqItems.filter((item) => item.category === 'formation' || item.category === 'pratique');

  return (
    <>
      <section className="bg-gradient-to-b from-energy-50 via-white to-white">
        <div className="container grid gap-10 py-16 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.3em] text-primary/80">{formation.provider}</p>
            <h1 className="font-display text-4xl font-semibold text-foreground">{formation.title}</h1>
            <p className="text-lg text-muted-foreground">{formation.description}</p>
            <div className="flex flex-wrap gap-2">
              {formation.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a
                  href={formation.affiliation.url}
                  target="_blank"
                  rel="noopener sponsored"
                  data-event="cta_affiliate_click"
                >
                  S’inscrire via {formation.provider}
                </a>
              </Button>
              {formation.affiliation.couponCode && (
                <Badge variant="energy" className="h-11 items-center text-base">
                  Code promo : {formation.affiliation.couponCode}
                </Badge>
              )}
            </div>
          </div>
          <Card className="rounded-3xl border border-border/60 bg-white/80 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">En résumé</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <dl className="grid grid-cols-2 gap-4 text-xs uppercase tracking-wide text-muted-foreground">
                <div>
                  <dt>Durée</dt>
                  <dd className="text-lg font-semibold text-foreground">{formation.durationHours} h</dd>
                </div>
                <div>
                  <dt>Tarif</dt>
                  <dd className="text-lg font-semibold text-foreground">{formatPrice(formation.priceEUR)}</dd>
                </div>
                <div>
                  <dt>Format</dt>
                  <dd className="text-lg font-semibold text-foreground">{formation.format}</dd>
                </div>
                <div>
                  <dt>Niveau</dt>
                  <dd className="text-lg font-semibold text-foreground">{formation.level}</dd>
                </div>
              </dl>
              <p className="text-sm text-muted-foreground">
                Commission affiliée : {formation.affiliation.commissionPct} %
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <Section
        kicker="Programme"
        title="Ce que vous allez apprendre"
        description="Modules progressifs, ateliers pratiques et accompagnement pour structurer votre posture de praticien."
      >
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-3xl border border-border bg-white/80 p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground">Moments forts du cursus</h3>
            <ul className="space-y-3 text-base text-muted-foreground">
              {formation.keyPoints.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          {formation.bonuses && (
            <div className="space-y-4 rounded-3xl border border-border bg-white/80 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">Bonus & accompagnements</h3>
              <ul className="space-y-3 text-base text-muted-foreground">
                {formation.bonuses.map((bonus) => (
                  <li key={bonus} className="flex gap-3">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-healing-500" aria-hidden="true" />
                    <span>{bonus}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Section>
      {testimonials.length > 0 && (
        <Section
          kicker="Avis d’élèves"
          title="Ce qu’ils en pensent"
          description="Retours recueillis après 3 mois minimum de pratique."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border border-border/70 bg-card/80 p-6">
                <p className="text-lg text-foreground">“{testimonial.quote}”</p>
                <p className="mt-4 text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </Card>
            ))}
          </div>
        </Section>
      )}
      <Section
        kicker="FAQ"
        title="Questions sur ce parcours"
        description="Tout ce qu’il faut savoir avant de valider votre inscription."
      >
        <FaqAccordion items={faqForFormation} />
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
        suppressHydrationWarning
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: breadcrumbJsonLd }}
        suppressHydrationWarning
      />
    </>
  );
}

