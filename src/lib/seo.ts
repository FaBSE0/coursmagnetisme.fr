import type { Metadata } from 'next';

import type { Formation } from '@/data/formations';
import { siteConfig } from '@/data/siteConfig';

const BASE_URL = `https://${siteConfig.domain}`;

type MetadataParams = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
};

export const buildMetadata = ({
  title,
  description,
  path = '/',
  image = `${BASE_URL}/og-default.svg`
}: MetadataParams = {}): Metadata => {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.defaultSeo.title;
  const metaDescription = description ?? siteConfig.defaultSeo.description;
  const url = new URL(path, BASE_URL).toString();

  return {
    metadataBase: new URL(BASE_URL),
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: url
    },
    openGraph: {
      type: 'website',
      url,
      title: metaTitle,
      description: metaDescription,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: 'fr_FR',
      siteName: siteConfig.name
    },
    twitter: {
      card: 'summary_large_image',
      title: metaTitle,
      description: metaDescription,
      images: [image]
    }
  };
};

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: BASE_URL,
  logo: `${BASE_URL}/logo.svg`,
  sameAs: siteConfig.socialLinks.map((social) => social.href)
};

export const courseJsonLd = (formation: Formation) => ({
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: formation.title,
  description: formation.description,
  provider: {
    '@type': 'Organization',
    name: formation.provider,
    sameAs: formation.affiliation.url
  },
  offers: {
    '@type': 'Offer',
    price: formation.priceEUR,
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: formation.affiliation.url
  }
});

