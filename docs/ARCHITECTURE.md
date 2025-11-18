# ARCHITECTURE – coursmagnetisme.fr

## 1. Stack technique
- **Framework** : Next.js 14 (App Router) en mode SSG (`output: export`).
- **Langage** : TypeScript strict + ES Modules.
- **UI** : Tailwind CSS + shadcn/ui + icônes Lucide.
- **Données** : fichiers statiques TypeScript/JSON sous `src/data/`.
- **Contenu riche** : MDX via `contentlayer` (phase 3, non prioritaire pour MVP).
- **Formulaires** : client-side + fallback mailto lors du MVP (intégration API optionnelle).

## 2. Arborescence racine
```
.
├─ .cursorrules
├─ package.json
├─ next.config.mjs
├─ public/
├─ docs/
├─ src/
│  ├─ app/
│  │  ├─ (marketing)/            # pages publiques
│  │  ├─ (content)/blog/[…slug]  # blog MDX
│  │  ├─ layout.tsx
│  │  └─ globals.css
│  ├─ components/
│  │  ├─ ui/                     # composants shadcn générés
│  │  ├─ blocks/                 # sections marketing composables
│  │  └─ shared/                 # éléments transverses (header, footer…)
│  ├─ data/
│  │  ├─ siteConfig.ts
│  │  └─ formations.ts
│  └─ lib/
│     ├─ utils.ts
│     ├─ seo.ts                  # helpers metadata/structured data
│     └─ analytics.ts            # wrapper events (gtag)
└─ tests/                        # futur (Playwright/Lighthouse)
```

## 3. Routing & pages
- `src/app/layout.tsx` : layout global, polices, metadata par défaut.
- `src/app/(marketing)/page.tsx` : page d’accueil.
- `src/app/(marketing)/formations/page.tsx` : listing formations + filtres.
- `src/app/(marketing)/formations/[slug]/page.tsx` : fiche formation.
- `src/app/(marketing)/temoignages/page.tsx` : preuves sociales.
- `src/app/(marketing)/faq/page.tsx` : FAQ.
- `src/app/(content)/blog/[slug]/page.tsx` : article MDX.
- `src/app/sitemap.ts` + `robots.txt` : SEO.

## 4. Données & typage
- Interfaces dans `docs/DATA_MODELS.md`.
- Imports centralisés depuis `src/data/index.ts` (optionnel).
- Les liens affiliés sont générés via un helper (`buildAffiliateLink`).
- Les datasets (formations, témoignages, articles) restent en TypeScript pour bénéficier de l’autocomplétion.

## 5. Styling system
- `src/app/globals.css` : variables CSS (couleurs, radius, polices).
- `tailwind.config.ts` : tokens `energy` & `healing`, animations `accordion`.
- `src/components/ui/` : composants base shadcn (button, card, accordion, separator, badge, tabs, input).
- `src/components/blocks/` : Hero, ValueProps, ComparisonTable, Testimonials, LeadMagnet, FAQ, BlogTeasers.

## 6. SEO & analytics
- Métadonnées par page définies via `generateMetadata`.
- `seo.ts` expose `buildMetadata(page)` + `jsonLdFromFormation`.
- Lighthouse cible 95+, images optimisées (lazy loading + `next/image` ou `<Image unoptimized>`).
- Event tracking minimal : `analytics.ts` wrap `window.gtag`.

## 7. Déploiement & environnements
- Single environnement **production** sur Vercel (branche `main`).
- Prévisualisation possible via `vercel --prod` (optionnel).
- DNS géré par Cloudflare (voir `DEPLOYMENT_GUIDE.md`).
- Variables d’environnement (optionnelles) :
  - `NEXT_PUBLIC_GA_ID`
  - `NEXT_PUBLIC_LEAD_FORM_ENDPOINT`

## 8. Qualité & tests
- ESLint + TypeScript strict + formatage Prettier.
- Tests automatisés : non inclus MVP mais prévoir Playwright (smoke) + Lighthouse CI.
- Checklist manuelle (voir `IMPLEMENTATION_CHECKLIST.md` phase 5).

