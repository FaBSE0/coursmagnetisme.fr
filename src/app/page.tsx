import Link from 'next/link';

import { featuredArticles } from '@/data/articles';
import { faqItems } from '@/data/faq';
import { formations } from '@/data/formations';
import { siteConfig } from '@/data/siteConfig';
import { testimonials } from '@/data/testimonials';
import { ValueGrid } from '@/components/blocks/value-grid';
import { ComparisonTable } from '@/components/blocks/comparison-table';
import { TestimonialsCarousel } from '@/components/blocks/testimonials-carousel';
import { LeadMagnetBanner } from '@/components/blocks/lead-magnet-banner';
import { FaqAccordion } from '@/components/blocks/faq-accordion';
import { BlogTeasers } from '@/components/blocks/blog-teasers';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Section } from '@/components/shared/section';

export default function HomePage() {
  const featured = formations.slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-energy-50 via-white to-white">
        <div className="container grid gap-10 py-20 md:grid-cols-[3fr,2fr] md:items-center">
          <div className="space-y-6">
            <Badge variant="energy" className="w-fit">
              Guide 2025
            </Badge>
            <h1 className="font-display text-4xl font-semibold text-foreground md:text-5xl">
              Choisissez la formation en magnétisme qui vous ressemble
            </h1>
            <p className="text-lg text-muted-foreground">
              Comparatifs indépendants, témoignages vérifiés et ressources concrètes pour lancer votre pratique
              énergétique en toute confiance.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/formations">Voir le comparatif</Link>
              </Button>
              <Button asChild variant="ghost" size="lg">
                <Link href="/faq">{siteConfig.leadMagnet.ctaLabel}</Link>
              </Button>
            </div>
            <dl className="mt-6 grid gap-4 text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { label: '+2 300', description: 'élèves accompagnés' },
                { label: '12', description: 'écoles analysées' },
                { label: '95 %', description: 'note de satisfaction' }
              ].map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold text-foreground">{stat.label}</dt>
                  <dd>{stat.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl ring-1 ring-black/5">
            <p className="text-sm font-semibold text-primary">Formations à la une</p>
            <ul className="mt-6 space-y-4">
              {featured.map((formation) => (
                <li key={formation.id} className="rounded-2xl border border-border p-4 shadow-sm">
                  <p className="text-xs uppercase tracking-wide text-muted-foreground">
                    {formation.provider}
                  </p>
                  <p className="text-lg font-semibold text-foreground">{formation.title}</p>
                  <p className="text-sm text-muted-foreground">{formation.headline}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section
        kicker="Transparence"
        title="Une méthodologie claire pour recommander les bonnes formations"
        description="Nous analysons chaque parcours selon 40 critères : pédagogie, accompagnement, preuves sociales et potentiel business."
      >
        <ValueGrid
          items={[
            {
              title: 'Sélection indépendante',
              description: 'Nous refusons 65 % des programmes qui ne répondent pas aux standards qualité.',
              icon: 'shield'
            },
            {
              title: 'Avis vérifiés',
              description: 'Chaque témoignage est recontacté avant publication pour assurer son authenticité.',
              icon: 'check'
            },
            {
              title: 'Suivi post-formation',
              description: 'Nous notons la qualité du support après le cursus (communauté, supervision, coaching).',
              icon: 'sparkles'
            }
          ]}
        />
      </Section>
      <Section
        title="Comparer rapidement trois parcours clés"
        description="Durée, format, niveau requis et commission d’affiliation sont affichés en toute transparence."
      >
        <ComparisonTable formations={featured} />
      </Section>
      <Section
        kicker="Preuves sociales"
        title="Des avis vérifiés pour choisir sereinement"
        description="Nous republions uniquement des retours sourcés auprès d’élèves certifiés ou en fin de cursus."
      >
        <TestimonialsCarousel testimonials={testimonials} />
      </Section>
      <Section
        kicker="Checklist"
        title="Structurez vos soins en 30 jours"
        description="Un plan pas-à-pas pour pratiquer sans bricoler : rituels, scripts, checklists de séance et premiers clients."
      >
        <LeadMagnetBanner
          title={siteConfig.leadMagnet.title}
          description={siteConfig.leadMagnet.description}
          benefits={['Structurer vos séances', 'Trouver vos premiers clients', 'Scripts prêts à l’emploi']}
          ctaLabel={siteConfig.leadMagnet.ctaLabel}
          successMessage={siteConfig.leadMagnet.successMessage}
        />
      </Section>
      <Section
        kicker="FAQ"
        title="Questions fréquentes sur les formations en magnétisme"
        description="Financement, déroulé, prérequis : nous répondons aux principales interrogations avant de se lancer."
      >
        <FaqAccordion items={faqItems.slice(0, 5)} />
      </Section>
      <Section
        kicker="Blog"
        title="Ressources pour avancer pas à pas"
        description="Guides pratiques, comparatifs et témoignages pour nourrir votre prise de décision."
      >
        <BlogTeasers articles={featuredArticles} />
      </Section>
    </>
  );
}

