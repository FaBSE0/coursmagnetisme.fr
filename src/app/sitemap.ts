import type { MetadataRoute } from 'next';

import { formations } from '@/data/formations';
import { siteConfig } from '@/data/siteConfig';
import { blogPosts } from '@/data/articles';

const baseUrl = `https://${siteConfig.domain}`;

const staticRoutes = ['/', '/formations', '/formations/udemy', '/temoignages', '/faq', '/blog', '/mentions-legales', '/politique-confidentialite'];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${baseUrl}${path === '/' ? '' : path}`,
    lastModified: new Date()
  }));

  const formationPages = formations.map((formation) => ({
    url: `${baseUrl}/formations/${formation.slug}`,
    lastModified: new Date()
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt)
  }));

  return [...pages, ...formationPages, ...blogPages];
}

