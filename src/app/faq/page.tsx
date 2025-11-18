import { faqItems } from '@/data/faq';
import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { FaqTabs } from '@/components/blocks/faq-tabs';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'FAQ Magnétisme : tout savoir avant de se lancer',
  description:
    'Financement, déroulé, prérequis : retrouvez les réponses aux questions les plus fréquentes sur les formations en magnétisme.',
  path: '/faq'
});

export default function FaqPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.slice(0, 6).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions fréquentes"
        description="Nous mettons à jour cette page à chaque nouvelle cohorte en fonction des retours que nous recevons."
        align="center"
      />
      <Section
        title="Parcourez les catégories"
        description="Sélectionnez une thématique pour afficher les réponses correspondantes."
      >
        <FaqTabs items={faqItems} />
      </Section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        suppressHydrationWarning
      />
    </>
  );
}

