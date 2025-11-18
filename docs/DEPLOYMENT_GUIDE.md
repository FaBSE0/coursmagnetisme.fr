# DEPLOYMENT GUIDE – coursmagnetisme.fr

## 1. Préparation
1. Vérifier `npm run lint`, `npm run typecheck`, `npm run build`.
2. S’assurer que `next.config.mjs` utilise `output: 'export'`.
3. Mettre à jour `public/` (logo, favicons).
4. Renseigner variables d’environnement (si GA / formulaire).

## 2. Vercel
1. Créer un projet Vercel (import GitHub).
2. Build command `npm run build` ; output `out`.
3. Activer `Node.js 18`.
4. Ajouter variables `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_LEAD_FORM_ENDPOINT` au besoin.
5. Déployer (`vercel --prod`).

## 3. Cloudflare / DNS
1. Ajouter un site `coursmagnetisme.fr` dans Cloudflare.
2. Créer CNAME `@` → `cname.vercel-dns.com`.
3. Créer CNAME `www` → `cname.vercel-dns.com`.
4. Activer proxy orange + SSL full.
5. Purger le cache après chaque déploiement majeur.

## 4. Redirections historiques
- Dans `vercel.json` (phase 5) ou Cloudflare page rules :
  - `/formation-magnetisme` → `/formations`
  - `/formation-reiki` → `/formations/reiki`
  - `/temoignages-eleves` → `/temoignages`
  - `/blog/soin-a-distance` → `/blog/soin-a-distance`

## 5. Post-déploiement
- Vérifier Google Search Console (sitemap ok, indexation).
- Vérifier GA4 events (cta_affiliate_click, leadmagnet_submit).
- Lancer tests Lighthouse depuis Chrome (Desktop + Mobile).
- Vérifier responsive sur iOS/Android (Device toolbar).
- Ajouter monitoring UptimeRobot (ping toutes les 5 min).

## 6. Rollback
- Utiliser l’historique Vercel (bouton “Redeploy”).
- Cloudflare : possibilité de désactiver proxy (bypass cache) temporairement.

## 7. Checklist rapide
- [ ] Domain relié sur Vercel.
- [ ] Certificat SSL actif.
- [ ] Sitemap ping Google/Bing.
- [ ] Redirections testées.
- [ ] Pages légales accessibles.

