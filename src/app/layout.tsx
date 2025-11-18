import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import { siteConfig } from '@/data/siteConfig';
import { SiteFooter } from '@/components/shared/site-footer';
import { SiteHeader } from '@/components/shared/site-header';
import { ConsentBanner } from '@/components/shared/consent-banner';
import { AnalyticsConsentScript } from '@/components/shared/analytics-consent-script';
import { fontDisplay, fontSans } from '@/lib/fonts';
import { buildMetadata, organizationJsonLd } from '@/lib/seo';

import './globals.css';

export const metadata: Metadata = buildMetadata();

type RootLayoutProps = {
  children: ReactNode;
};

const jsonLd = JSON.stringify(organizationJsonLd);
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="fr" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="flex min-h-screen flex-col bg-gradient-to-b from-white via-white to-energy-50">
        <SiteHeader navigation={siteConfig.navigation} ctaLabel="Comparer les formations" />
        <main className="flex-1">{children}</main>
        <SiteFooter
          navigation={siteConfig.navigation}
          secondaryNavigation={siteConfig.secondaryNavigation}
          socialLinks={siteConfig.socialLinks}
        />
        <ConsentBanner />
        <AnalyticsConsentScript trackingId={GA_ID} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd }}
          suppressHydrationWarning
        />
      </body>
    </html>
  );
}

