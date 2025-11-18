# IMPLEMENTATION CHECKLIST – coursmagnetisme.fr

## Phase 1 – Setup (0.5 j)
- [ ] Vérifier Node 18+ / npm 10+.
- [ ] Initialiser Next.js 14 + TS + Tailwind + shadcn (fait via ce repo).
- [ ] Installer polices (`next/font` Inter + Space Grotesk).
- [ ] Créer `src/app/globals.css` avec variables (cf. Styling Guide).
- [ ] Configurer `components.json` + générer les composants shadcn de base (Button, Card, Input, Badge, Tabs, Accordion, Separator).
- [ ] Mettre en place `src/lib/utils.ts` (`cn` helper).

## Phase 2 – Fondations (1 j)
- [ ] Créer layout global (`src/app/layout.tsx`) : metadata par défaut, polices, header/footer placeholders.
- [ ] Ajouter `SiteHeader`, `SiteFooter`, `Section`, `PageHeader`.
- [ ] Configurer analytics wrapper (`src/lib/analytics.ts`) + consentement mock.
- [ ] Implémenter `src/lib/seo.ts` pour générer metadata + JSON-LD.
- [ ] Ajouter pages système : `/mentions-legales`, `/politique-confidentialite`, `/robots.txt`, `/sitemap.ts`.

## Phase 3 – Pages cœur (2 j)
- [ ] Page d’accueil : Hero, ValueGrid, ComparisonTable, Testimonials, FAQ, LeadMagnet.
- [ ] Page `/formations` : header + filtres + listing (cards).
- [ ] Page `/formations/[slug]` : dynamic route + `generateStaticParams`.
- [ ] Page `/temoignages` : carrousel + stats.
- [ ] Page `/faq` : accordéons triés par catégorie.
- [ ] Shell blog (`/blog`, `/blog/[slug]`) + exemple MDX.

## Phase 4 – Contenu & intégrations (1 j)
- [ ] Renseigner textes finals depuis `docs/PAGES_CONTENT.md`.
- [ ] Ajouter au moins 7 formations réelles dans `src/data/formations.ts`.
- [ ] Intégrer lead magnet : formulaire + appel API (mock).
- [ ] Ajouter bannière consentement + GA4 (si ID fourni).
- [ ] Vérifier tous les liens affiliés (UTM + rel).

## Phase 5 – Qualité & déploiement (0.5 j)
- [ ] `npm run lint`, `npm run typecheck`, `npm run build`.
- [ ] Audit Lighthouse Desktop + Mobile (95+).
- [ ] QA responsive (mobile, tablette, desktop).
- [ ] Vérifier migrations d’URL + sitemap.
- [ ] Déployer sur Vercel + connecter Cloudflare + DNS (voir Deployment Guide).
- [ ] Activer monitoring (Search Console + Analytics).

> Cochez chaque étape dans Cursor et laissez une note en cas d’écart.

