# PAGES CONTENT – coursmagnetisme.fr

## 1. Accueil (`/`)
### Structure
1. **Hero Primary**
   - Eyebrow : "GUIDE 2025"
   - H1 : "Choisissez la formation en magnétisme qui vous ressemble"
   - Sub copy : "Comparatifs indépendants, avis vérifiés et ressources pour lancer votre pratique."
   - CTA primaire : "Voir le comparatif" → `/formations`
   - CTA secondaire : "Télécharger la checklist" → formulaire lead magnet
   - Stats : `+2 300 élèves accompagnés`, `12 écoles analysées`, `95 % satisfaction`.
2. **ValueGrid** (3 cartes)
   - Transparence (méthodologie)
   - Sélection indépendante
   - Ressources pour se lancer
3. **ComparisonTable** (3 formations phares)
4. **TestimonialsCarousel** (4 citations)
5. **LeadMagnetBanner**
   - Title : "Checklist : lancer vos soins en 30 jours"
   - Bullets : `Structurer vos séances`, `Trouver vos premiers clients`, `Scripts prêts à l'emploi`
6. **FAQAccordion** (5 questions top)
7. **BlogTeasers** (3 articles)

## 2. Formations (`/formations`)
- `PageHeader` : titre + description.
- **Filters** : format (présentiel, distanciel), niveau, prix.
- **Grid** : cartes `FormationCard`.
  - Title + provider
  - Badges tags
  - Points clés (3)
  - Prix + durée
  - CTA `Découvrir la formation`
- **CTA finale** : "Besoin d’aide pour choisir ? Contactez-nous".

## 3. Fiche formation (`/formations/[slug]`)
Sections :
1. Hero (titre, provider, badges, CTA affilié).
2. `Key numbers` : durée, prix, format, niveau.
3. Programme détaillé (liste étapes).
4. Bonus + accompagnement.
5. Témoignages liés.
6. FAQ formation spécifique.
7. CTA : "Je m’inscris via {provider}".

## 4. Témoignages (`/temoignages`)
- Hero + sous-titre.
- Carrousel citations.
- `Stats` : `Note moyenne 4.8/5`, `94 % recommandent`.
- Gallery photo (placeholder).
- CTA vers newsletter.

## 5. FAQ (`/faq`)
- Page header.
- Tabs par catégorie (général / formation / financement / pratique).
- Accordéon par catégorie.
- CTA "Poser une question".

## 6. Blog
- `/blog` : listing (cartes) + filtre par tag.
- `/blog/[slug]` : 
  - Hero (titre, date, reading time, tags).
  - Article MDX (table des matières sticky).
  - Bloc CTA lead magnet inline.
  - Navigation next/previous article.

## 7. Pages légales
- `Mentions légales` : éditeur, hébergeur, responsable publication.
- `Politique de confidentialité` : finalité, cookies, droits utilisateurs.

## 8. Anciennes URLs
- Redirections à mettre dans `next.config.mjs` ou `vercel.json`.
- Créer sections spécifiques si besoin (ex : `/soin-a-distance` article long).

## 9. Ton & micro-copy
- Ton expert mais chaleureux.
- Utiliser "vous" (pas tutoiement).
- CTA orientés bénéfice : "Découvrir la méthode", "Recevoir la checklist".

