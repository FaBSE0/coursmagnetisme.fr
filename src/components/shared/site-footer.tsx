import Link from 'next/link';

import type { NavigationLink, SiteConfig } from '@/data/siteConfig';
import { Logo } from '@/components/shared/logo';

type SiteFooterProps = {
  navigation: NavigationLink[];
  secondaryNavigation: NavigationLink[];
  socialLinks: SiteConfig['socialLinks'];
};

export const SiteFooter = ({
  navigation,
  secondaryNavigation,
  socialLinks
}: SiteFooterProps) => (
  <footer className="border-t border-border bg-card/50">
    <div className="container grid gap-8 py-12 md:grid-cols-[2fr,1fr,1fr]">
      <div className="space-y-4">
        <Logo />
        <p className="text-sm text-muted-foreground">
          Guides indépendants, avis vérifiés et ressources pour choisir la formation en magnétisme qui
          correspond à votre pratique.
        </p>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Navigation</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Ressources</h3>
        <ul className="mt-4 space-y-2 text-sm">
          {secondaryNavigation.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-muted-foreground hover:text-foreground">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          {socialLinks.map((social) => (
            <Link
              key={social.platform}
              href={social.href}
              aria-label={social.label}
              className="rounded-full border border-border p-2 text-muted-foreground transition hover:text-foreground"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} coursmagnetisme.fr – Tous droits réservés.
    </div>
  </footer>
);

