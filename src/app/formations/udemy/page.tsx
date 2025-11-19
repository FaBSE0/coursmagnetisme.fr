import Image from 'next/image';
import Link from 'next/link';

import { getFormationsByPlatform } from '@/data/formations';
import { FormationsCatalogue } from '@/components/blocks/formations-catalogue';
import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Formations Udemy en magnétisme : guide 2025',
  description:
    'Découvrez notre sélection de formations Udemy sur le magnétisme, la radiesthésie et les soins énergétiques. Prix accessibles, certificats inclus, accès illimité.',
  path: '/formations/udemy'
});

export default function UdemyFormationsPage() {
  const udemyFormations = getFormationsByPlatform('udemy');

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-energy-50 via-white to-white">
        <div className="absolute inset-0 -z-10 opacity-10">
          <Image
            src="/images/hero/formations-hero.svg"
            alt=""
            fill
            className="object-cover"
            priority
            aria-hidden="true"
          />
        </div>
        <PageHeader
          eyebrow="Plateforme Udemy"
          title="Formations Udemy en magnétisme"
          description="Une sélection de formations en ligne accessibles sur la plateforme Udemy, couvrant le magnétisme, la radiesthésie, les soins énergétiques et les pratiques spirituelles. Toutes les formations incluent un certificat de fin de formation, un accès illimité et des ressources téléchargeables."
        />
        <div className="container pb-8">
          <nav className="text-sm text-muted-foreground" aria-label="Fil d'Ariane">
            <ol className="flex items-center gap-2">
              <li>
                <Link href="/formations" className="hover:text-foreground">
                  Formations
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-foreground">Udemy</li>
            </ol>
          </nav>
        </div>
      </section>
      <Section title="Affinez votre recherche" description="Filtrez par format, niveau, budget ou organisme.">
        <FormationsCatalogue formations={udemyFormations} />
      </Section>
    </>
  );
}

