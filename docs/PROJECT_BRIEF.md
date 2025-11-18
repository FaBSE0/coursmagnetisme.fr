# PROJECT BRIEF – coursmagnetisme.fr

## 1. Vision & positionnement
- **But** : redevenir la référence francophone sur la formation en magnétisme en capitalisant sur l’ancien domaine expiré.
- **Proposition de valeur** : comparer les meilleures formations (présentielles et en ligne), authentifier les avis d’élèves, accompagner les visiteurs vers l’offre qui leur correspond.
- **Modèle économique** : affiliation multi-plateformes (Udemy, ESM, académie privées) + captures d’e-mails pour séquences automatisées.

## 2. Publics cibles
| Persona | Objectif | Objections principales | Signal d’intention |
| ------- | -------- | --------------------- | ------------------ |
| **Débutant curieux** | Découvrir le magnétisme, trouver une formation accessible | Peur de l’ésotérisme, budget limité | Lectures d’articles “c’est quoi le magnétisme ?” |
| **Praticien en reconversion** | Obtenir une certification, développer un cabinet | Besoin de preuves, avis d’anciens élèves | Compare plusieurs écoles, cherche légitimité |
| **Professionnel santé** | Ajouter une corde complémentaire | Besoin d’un cursus sérieux et encadré | Cherche les gages scientifiques, durée des cursus |

## 3. Objectifs mesurables
1. **Trafic** : 10K visiteurs SEO/mois en 4 mois (contenu long tail + reprise des anciennes URLs).
2. **Affiliation** : 4 % de conversion clic → vente, panier moyen 120 €.
3. **Newsletter** : 1 000 inscrits sur 6 mois via lead magnets (checklist découverte).
4. **Qualité** : >95 Lighthouse, TTFB < 500 ms sur Vercel, Core Web Vitals “Good”.

## 4. Contraintes techniques & produit
- 100 % statique (Next.js SSG), aucune dépendance serveur custom.
- TypeScript strict, App Router, chemin `src/`.
- Templates modulaires pour rapidement dupliquer des pages thématiques.
- URL historiques à recréer : `/formation-magnetisme-reiki`, `/faq-magnetiseur`, `/temoignages-eleves`, `/blog/soin-a-distance`.
- Respecter la charte vibratoire “energy/healing” (bleu électrique + vert).
- Tous les liens affiliés : `rel="sponsored noopener"` + UTM `utm_source=coursmagnetisme&utm_medium=affiliate`.

## 5. Principales fonctionnalités attendues
1. **Page d’accueil riche** : hero, comparatif rapide, CTA vers guide PDF, FAQ.
2. **Catalogue Formations** : filtres, fiches détaillées, avis, CTA affiliés.
3. **Pages éditoriales longues** : SEO evergreen (définition magnétisme, pratiquer, témoignages).
4. **Blog / actualités** : MDX, mise en avant d’articles connexes.
5. **Lead magnet** : formulaire capture, intégration à un outil d’e-mailing (placeholder).
6. **Pages “Preuve sociale”** : timeline, stats, logos, success stories.

## 6. KPI & tracking
- Google Analytics 4 + consentement (bannière simple).
- Évènements personnalisés: `cta_affiliate_click`, `leadmagnet_submit`, `hero_primary_click`.
- Post-view : recouper les clics affiliés avec les plateformes (via rapports UTM).

## 7. Roadmap haute-niveau
| Phase | Durée | Contenu |
| ----- | ----- | ------- |
| **Phase 1** | 0.5 j | Setup Next/Tailwind/shadcn, charte globale |
| **Phase 2** | 1 j | Layout, navigation, SEO global, pages système |
| **Phase 3** | 2 j | Pages d’accueil + formations + blog shell |
| **Phase 4** | 1 j | Contenu SEO, intégration data, formulaires |
| **Phase 5** | 0.5 j | Optimisation perf + QA + préparation déploiement |

## 8. Livrables finaux
- Site statique prêt à déployer sur Vercel.
- Contenu anglais/français prêt (phase 2: FR complet).
- Documentation mise à jour (présent fichier + architecture + data models).
- Checklist SEO et QA cochée.

