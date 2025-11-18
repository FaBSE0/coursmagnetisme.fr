# STYLING GUIDE – coursmagnetisme.fr

## 1. ADN visuel
- Ressenti : **énergie douce**, sérieux moderne, touche ésotérique légère.
- Couleurs dominantes : bleu électrique (energy) + vert guérison (healing).
- Utiliser beaucoup d’espace blanc, coins arrondis 16 px.
- Illustrations : ondes, lignes vibratoires, gradients subtils.

## 2. Couleurs (CSS variables)
```
:root {
  --background: 220 30% 99%;
  --foreground: 222 35% 10%;
  --card: 0 0% 100%;
  --card-foreground: 222 30% 12%;
  --popover: 0 0% 100%;
  --popover-foreground: 222 35% 10%;
  --primary: 234 100% 67%;     /* energy 500 */
  --primary-foreground: 0 0% 100%;
  --secondary: 152 66% 35%;    /* healing 500 */
  --secondary-foreground: 152 100% 95%;
  --muted: 225 18% 90%;
  --muted-foreground: 225 15% 35%;
  --accent: 272 65% 60%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 100%;
  --border: 222 18% 85%;
  --input: 222 18% 85%;
  --ring: 234 100% 67%;
  --radius: 1rem;
}
```

## 3. Typographie
- `--font-sans` : **Inter** (Google) pour corps.
- `--font-display` : **Space Grotesk** (ou alternative) pour titres.
- Titres : `font-weight: 600`, `letter-spacing: -0.02em`.
- Texte : `line-height: 1.7`.
- Taille recommandée :
  - Display : 48/56 px
  - H1 : 40 px
  - H2 : 32 px
  - H3 : 24 px
  - Body : 18 px
  - Small : 14 px

## 4. Spacing & layout
- Grille `max-w-5xl` ou `container`.
- Section vertical spacing : `padding-block: clamp(4rem, 8vw, 6rem)`.
- Utiliser `gap-6` pour grilles / cards.
- Border radius : 16 px (large), 12 px (medium), 8 px (small).
- Ombres : `shadow-[0_20px_60px_rgba(15,23,42,0.12)]`.

## 5. Patterns
- **Hero** : gradient radial + badge `energy`.
- **Formations** : cartes en grille (2 colonnes desktop), tags `Badge`.
- **Témoignages** : carrousel horizontal, avatars circulaires, rating 5 étoiles.
- **FAQ** : accordéon bordure `border-energy-200`.
- **CTA** : bouton principal gradient `(energy500 → healing500)`.

## 6. États & interactions
- Bouton principal : `transform: translateY(-1px)` au hover, `shadow-lg`.
- Focus visible : `ring-2 ring-offset-2 ring-energy-500`.
- Liens : soulignés au survol uniquement.
- Carte interactive : `hover:translate-y-[-2px] hover:shadow-lg`.

## 7. Assets
- Logo minimal (texte + onde) – à intégrer en SVG.
- Icônes Lucide (line) ; épaisseur 1.5 px.
- Illustrations : utiliser gradient CSS + `blur`.

## 8. Responsive
- Mobile-first, breakpoints tailwind (sm 640, md 768, lg 1024, xl 1280).
- Navigation mobile : sheet plein écran, bouton CTA sticky.
- Carrousel : drag + fleches.

## 9. Documentation
- Toute nouvelle variation doit être consignée ici (palette, component states).
- Ajouter captures d’écran (phase 4) dans `docs/assets/`.

