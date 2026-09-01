# Guide du projet pour Codex

## Portée

Ces instructions s'appliquent à tout le dépôt. Le projet est la page de destination
francophone de Crémation 24/7, exploitée par Forêt de la seconde vie. Il s'agit d'un
site statique sans étape de compilation ni gestionnaire de paquets.

## Commencer ici

- `index.html` est le point d'entrée et la source de vérité du contenu publié, des
  métadonnées SEO, des données structurées, de la navigation et du formulaire Zoho.
- `styles.css` contient les polices locales, les variables de design, la mise en page,
  les états interactifs et les adaptations responsive.
- `app.jsx` monte le panneau de personnalisation React, applique ses choix au DOM et
  gère l'accordéon, les compteurs et les révélations au défilement.
- `tweaks-panel.jsx` fournit les composants et le stockage du panneau de
  personnalisation. React, ReactDOM et Babel sont chargés par CDN dans `index.html`.
- `zoho-utm.js` conserve les paramètres UTM et les transmet aux formulaires Zoho.
- `uploads/` et `fonts/` contiennent les ressources servies directement.
- `README.md` explique le produit et le lancement local. `claude.md` est l'ancienne
  documentation Claude; l'utiliser comme contexte historique, pas comme source de
  vérité lorsque le code actuel la contredit.
- `demandes-guillaume-v1.md`, `zoho-from.md` et
  `sujets-de-blogue-cremation247.md` sont des documents de référence, pas du code
  exécuté par la page.

## Architecture et dépendances externes

- Le HTML constitue l'essentiel de l'interface; React ne contrôle que le panneau
  Tweaks et modifie certains éléments existants du DOM.
- L'ordre des scripts en fin de `index.html` est significatif:
  `tweaks-panel.jsx` doit être chargé avant `app.jsx`, puis `zoho-utm.js`.
- GSAP/ScrollTrigger, React, ReactDOM et Babel proviennent de CDN. Le site a donc
  besoin du réseau pour reproduire toutes ses interactions en développement.
- Le formulaire de conversion est une iframe Zoho ouverte dans une modale. Les CTA
  « Planifier », l'identifiant de l'iframe, le suivi du référent et la propagation UTM
  fonctionnent ensemble.
- `Dockerfile` sert directement le dépôt avec Nginx sur le port 80; `.dockerignore`
  exclut la documentation et les fichiers locaux du contexte de production.

## Règles d'édition

- Rédiger l'interface en français canadien et conserver un ton minimaliste,
  élégant, humain et respectueux.
- Employer « Crémation 24/7 » avec l'accent dans les textes visibles et
  « Forêt de la seconde vie » selon la casse de marque. Dans la prose, privilégier
  les virgules aux tirets cadratins.
- Ne pas recopier aveuglement les prix, statistiques, polices ou formulations de
  `claude.md`: vérifier les valeurs en vigueur dans `index.html`, `styles.css` et les
  demandes explicites de l'utilisateur.
- Centraliser les changements visuels réutilisables dans les variables ou classes de
  `styles.css`; éviter d'ajouter des styles inline sauf lorsque la structure existante
  l'exige clairement.
- Préserver l'accessibilité existante: sémantique HTML, libellés, navigation clavier,
  `aria-expanded`, fermeture de la modale avec Échap et préférence de mouvement
  réduit.
- Ne pas modifier les identifiants GTM/Zoho, les URL de formulaire, le numéro de
  téléphone, l'adresse, les prix ou les affirmations environnementales sans demande
  explicite. Ce sont des données commerciales ou de suivi sensibles aux erreurs.
- Ne jamais ajouter de clé privée ni de secret au dépôt. Les fichiers
  `uploads/*.pem` sont exclus intentionnellement.

## Développement et vérification

Lancer le site depuis la racine avec l'une de ces commandes:

```powershell
python -m http.server 8000
```

ou, si Node est disponible:

```powershell
npx --yes serve -l 3000 .
```

Il n'existe actuellement ni suite de tests automatisée ni étape de build. Après une
modification, vérifier au minimum dans un navigateur:

1. l'absence d'erreurs dans la console et de ressources manquantes;
2. la mise en page aux formats ordinateur et mobile;
3. les liens de navigation, l'accordéon FAQ et la façade vidéo au clavier et à la souris;
4. l'ouverture et les trois modes de fermeture de la modale Zoho;
5. le panneau Tweaks, les animations, les compteurs et le mode mouvement réduit;
6. pour toute modification d'acquisition, la conservation des UTM et du référent dans
   l'URL de l'iframe Zoho.

Pour une vérification proche du déploiement, construire l'image `Dockerfile` et
confirmer que Nginx sert `index.html` et toutes les ressources locales.

## Discipline Git

- Préserver les changements existants qui ne font pas partie de la demande.
- Examiner `git diff` avant de terminer et ne committer que les fichiers pertinents.
- Maintenir `main` synchronisée avec `origin/main` lorsque l'utilisateur demande une
  synchronisation ou une livraison sur GitHub.
