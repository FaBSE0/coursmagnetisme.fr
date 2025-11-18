# COMPONENTS SPECS – coursmagnetisme.fr

## Table des matières
1. Principes généraux
2. Composants de base (shadcn/ui)
3. Composants partagés (layout/navigation)
4. Blocs marketing
5. Formulaires & CTA
6. Guidelines d’accessibilité

---

## 1. Principes généraux
- Tous les composants sont écrits en TypeScript et exportés via `index.ts`.
- Utiliser `forwardRef` pour les composants interactifs.
- Préfixer les props booléennes par `is` / `has`.
- Ajout systématique de `aria-*` pertinent (accordéon, tabs, carrousel).
- Les composants doivent être agnostiques des données : ils reçoivent des props typées.

## 2. Composants de base (ui/)
| Composant | Props clés | Notes |
| --------- | ---------- | ----- |
| `Button` | `variant: 'primary' | 'secondary' | 'ghost' | 'link'`, `size: 'sm' | 'md' | 'lg'`, `icon?: ReactNode` | Basé sur shadcn. |
| `Card` | `asChild?`, `className?` | Utilisé pour comparatifs & témoignages. |
| `Badge` | `variant: 'energy' | 'healing' | 'outline'` | Couleurs du design system. |
| `Tabs` | `value`, `onValueChange`, `items` | Pour le comparatif formations. |
| `Accordion` | `type`, `items` | FAQ. |
| `Input`, `Textarea` | `name`, `label`, `error` | Formulaire lead magnet. |
| `Toggle` | `icon`, `ariaLabel` | Filtre format. |

## 3. Composants partagés
### `SiteHeader`
```ts
interface SiteHeaderProps {
  nav: NavigationLink[];
  ctaLabel: string;
  onCtaClick?: () => void;
}
```
- Sticky, fond translucide, état mobile (sheet).
- CTA pointe vers lead magnet.

### `SiteFooter`
Props : `navigation`, `secondaryNavigation`, `socialLinks`, `copyright`.

### `Section`
Props :
```ts
interface SectionProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  children: React.ReactNode;
  id?: string;
}
```
- Ajoute une marge verticale standard + container.

### `PageHeader`
- Utilisé sur `/formations`, `/blog`, `/faq`.
- Props: `title`, `eyebrow`, `description`, `actions?`.

## 4. Blocs marketing (directory `components/blocks/`)
| Nom | Description | Props |
| --- | ----------- | ----- |
| `HeroPrimary` | Bloc hero avec preuve sociale et CTA. | `title`, `subtitle`, `primaryCta`, `secondaryCta`, `videoId?`, `stats: { label, value }[]` |
| `ValueGrid` | 3 à 6 features. | `items: { title, description, icon }[]` |
| `ComparisonTable` | Compare 3 formations. | `rows: { label, description?, values: string[] }[]`, `columns: { title, subtitle, badge? }[]` |
| `TestimonialsCarousel` | Carrousel auto + pagination. | `testimonials: Testimonial[]`, `enableAutoplay?` |
| `LeadMagnetBanner` | Formulaire + visuel. | `title`, `description`, `onSubmit`, `benefits: string[]` |
| `FAQAccordion` | Accordéon multi-colonnes. | `items: FaqItem[]`, `categoryFilter?` |
| `BlogTeasers` | Cartes d’articles. | `articles: ArticleSummary[]`, `categoryLabel?` |

Chaque bloc doit être 100% statique, alimenté par les données.

## 5. Formulaires & CTA
- Formulaire lead magnet : `name`, `email`, `objectif`. Validation via `zod`.
- Envoyer vers un endpoint (Phase 4) ou fallback `mailto:`.
- Les CTA affiliés utilisent `AffiliateButton` :
```ts
interface AffiliateButtonProps {
  href: string;
  label: string;
  provider: string;
  badge?: string;
}
```
- Ajouter `data-event="cta_affiliate_click"` pour instrumentation.

## 6. Accessibilité
- Couleurs : contraste minimum 4.5:1 (vérifier sur energy/healing).
- Accordéons/tabs : `aria-controls`, `aria-expanded`.
- Carrousel : boutons précédent/suivant, pagination accessible.
- Formulaires : `label for` + `aria-live` pour message de succès.
- Images décoratives : `aria-hidden="true"`.

