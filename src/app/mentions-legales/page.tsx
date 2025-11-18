import { PageHeader } from '@/components/shared/page-header';
import { Section } from '@/components/shared/section';
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Mentions légales coursmagnetisme.fr',
  description: 'Informations légales, responsables de publication et hébergement du site coursmagnetisme.fr.',
  path: '/mentions-legales'
});

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Légal"
        title="Mentions légales"
        description="Informations relatives à l’éditeur du site coursmagnetisme.fr."
      />
      <Section title="Éditeur" description="Cours Magnétisme – micro-entreprise en cours d’immatriculation.">
        <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
          <p>Responsable de publication : Fabrice (hello@coursmagnetisme.fr).</p>
          <p>Hébergement : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</p>
          <p>
            Pour toute demande relative au site ou aux contenus, écrivez-nous à
            hello@coursmagnetisme.fr.
          </p>
        </div>
      </Section>
    </>
  );
}

