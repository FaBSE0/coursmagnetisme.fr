# coursmagnetisme.fr

Site vitrine/affiliation dédié aux formations en magnétisme. Le projet repose sur Next.js 14 (App Router) avec génération statique, TypeScript strict, Tailwind CSS et la librairie shadcn/ui pour les composants.

## Sommaire rapide
- [Stack & objectifs](#stack--objectifs)
- [Prérequis](#prérequis)
- [Commandes](#commandes)
- [Structure](#structure)
- [Documentation](#documentation)

## Stack & objectifs
- **Framework** : Next.js 14 SSG
- **Langage** : TypeScript strict
- **UI** : Tailwind CSS + shadcn/ui + icônes Lucide
- **Contenu** : données centralisées dans `src/data/`
- **SEO** : exigences détaillées dans `docs/SEO_REQUIREMENTS.md`

## Prérequis
- Node.js ≥ 18.18
- npm ≥ 10

## Commandes
```bash
npm install        # installe les dépendances
npm run dev        # serveur de dev sur http://localhost:3000
npm run lint       # vérifie ESLint / Next
npm run typecheck  # vérifie TypeScript sans émettre de build
npm run build      # build production SSG
npm run start      # lance le serveur Next en mode production
npm run format     # formate avec Prettier
```

## Structure
```
.
├─ .cursorrules
├─ docs/                 # toute la documentation produit/technique
├─ src/
│  ├─ app/               # routing App Router
│  ├─ components/        # composants UI shadcn
│  ├─ data/              # configuration et datasets
│  └─ lib/               # helpers communs
└─ public/               # assets statiques
```

## Documentation
Le dossier `docs/` contient :
1. `PROJECT_BRIEF.md` – vision produit et business
2. `ARCHITECTURE.md` – structure technique détaillée
3. `DATA_MODELS.md` – interfaces et schémas JSON
4. `COMPONENTS_SPECS.md` – specs des composants UI
5. `SEO_REQUIREMENTS.md` – exigences SEO & métadonnées
6. `STYLING_GUIDE.md` – design system (couleurs, typos, spacing)
7. `IMPLEMENTATION_CHECKLIST.md` – feuille de route par phases
8. `PAGES_CONTENT.md` – contenu pour chaque page
9. `DEPLOYMENT_GUIDE.md` – procédures Vercel + DNS

> Toujours lire `.cursorrules` puis suivre `docs/IMPLEMENTATION_CHECKLIST.md` avant toute évolution.

