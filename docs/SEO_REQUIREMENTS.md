# SEO REQUIREMENTS – coursmagnetisme.fr

## 1. Principes généraux
- Génération statique (`next export`) + hébergement Vercel.
- Chaque page possède :
  - `title` ≤ 60 caractères.
  - `description` 150–160 caractères.
  - `openGraph` + `twitter` (summary_large_image).
  - `canonical` absolue (`https://coursmagnetisme.fr/...`).
- Balises `h1` uniques, hiérarchie <h2>/<h3> cohérente.
- Breadcrumb JSON-LD sur les pages profondes (`formations/[slug]`, blog).
- Anciennes URLs doivent rediriger :
  - `/formation-magnetisme` → `/formations`
  - `/formation-reiki` → `/formations/reiki`
  - `/temoignages-eleves` → `/temoignages`

## 2. Pages prioritaires
| Route | Title | Description | Notes |
| ----- | ----- | ----------- | ----- |
| `/` | "Cours Magnétisme – Comparatif des meilleures formations" | "Choisissez la formation en magnétisme adaptée à votre projet : comparatifs, avis et conseils pratiques." | Inclure CTA lead magnet + FAQ. |
| `/formations` | "Formations en magnétisme : guide 2025" | "Durée, prix, avis et certifications : comparez les principales écoles et parcours." | Ajouter filtre + schéma `ItemList`. |
| `/formations/[slug]` | `Formation {title} – avis et programme` | `Tout savoir sur {title} : déroulé, prix, avis, certification.` | JSON-LD `Course`. |
| `/temoignages` | "Avis d'élèves sur les formations Magnétisme" | "Retours d'expérience certifiés pour vous aider à choisir." | Utiliser `Review` aggregateRating. |
| `/faq` | "FAQ Magnétisme : réponses aux questions fréquentes" | "Financement, déroulé, prérequis : toutes les réponses pour se lancer." | Schema `FAQPage`. |
| `/blog/[slug]` | `Titre article` | `Accroche` | Article `BlogPosting`. |
| `/mentions-legales` | "Mentions légales coursmagnetisme.fr" | "Informations légales et contact." | Exigences CNIL. |

## 3. Structured data
- `Organization` (global, dans `layout.tsx`) :
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Cours Magnétisme",
  "url": "https://coursmagnetisme.fr",
  "logo": "https://coursmagnetisme.fr/logo.svg",
  "sameAs": ["https://youtube.com/@coursmagnetisme","https://instagram.com/coursmagnetisme"]
}
```
- `Course` : pour chaque formation (utiliser `description`, `provider`, `offers`).
- `FAQPage` : 2–5 questions sélectionnées par page.
- `BreadcrumbList` : sur toutes les pages de niveau ≥2.
- `Article` / `BlogPosting` : author "Équipe Cours Magnétisme".

## 4. Sitemap & robots
- `src/app/sitemap.ts` génère sitemap dynamique (pages, articles, formations).
- `src/app/robots.ts` autorise tout, mentionne sitemap.
- Ajouter `vercel.json` (phase 5) si besoin de redirects côté edge.

## 5. Performance & Core Web Vitals
- Hero : lazy-load illustration, mais CTA visible.
- 3rd party scripts : uniquement GA4 (lazy) + script newsletter (defer).
- Polices locales via `next/font`.
- Images converties en WebP.
- `prefetch={false}` sur les liens externes.

## 6. Tracking & consentement
- Bannière consentement minimaliste (phase 4) ; par défaut, GA off jusqu’au consentement.
- Évènements :
  - `logEvent('cta_affiliate_click', { formationId })`
  - `logEvent('leadmagnet_submit')`
  - `logEvent('faq_open', { questionId })`

## 7. Monitoring
- Lighthouse > 95 sur Desktop + Mobile.
- Vérifier Search Console (sitemap OK, no index coverage issues).

