import { formations } from '@/data/formations';
import { FormationsCatalogue } from '@/components/blocks/formations-catalogue';
import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Formations en magnétisme : guide 2025',
  description:
    'Durée, prix, avis et certifications : comparez les principales écoles et parcours de magnétisme pour trouver votre formation idéale.',
  path: '/formations'
});

export default function FormationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Comparatif 2025"
        title="Formations en magnétisme"
        description="Trouvez le programme adapté à votre niveau et à vos objectifs professionnels grâce à notre grille de lecture indépendante."
      />
      <Section title="Affinez votre recherche" description="Filtrez par format, niveau, budget ou organisme.">
        <FormationsCatalogue formations={formations} />
      </Section>
    </>
  );
}

