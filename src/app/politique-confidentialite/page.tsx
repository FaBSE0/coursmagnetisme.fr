import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Politique de confidentialité',
  description: 'Transparence sur la collecte, le traitement et la conservation des données utilisateurs.',
  path: '/politique-confidentialite'
});

const sections = [
  {
    title: 'Collecte de données',
    body:
      'Nous collectons uniquement les informations fournies volontairement via les formulaires (nom, email, objectifs). Les données analytics sont anonymisées et ne permettent pas une identification directe.'
  },
  {
    title: 'Finalités',
    body:
      'Envoi d’e-mails concernant des contenus pédagogiques, suivi d’inscription à la newsletter et mesure des performances de nos pages d’information.'
  },
  {
    title: 'Durée de conservation',
    body: 'Les données sont conservées 3 ans maximum à compter du dernier contact ou jusqu’à demande de suppression.'
  },
  {
    title: 'Vos droits',
    body:
      'Accès, rectification, suppression, portabilité et opposition. Pour exercer ces droits, contactez hello@coursmagnetisme.fr.'
  }
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Confidentialité"
        title="Politique de confidentialité"
        description="Transparence sur l’usage des données collectées via coursmagnetisme.fr."
      />
      <Section title="Principes clés" description="Notre traitement des données se veut proportionné et respectueux.">
        <div className="grid gap-6 md:grid-cols-2">
          {sections.map((section) => (
            <article key={section.title} className="rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-foreground">{section.title}</h3>
              <p className="mt-3 text-base text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

