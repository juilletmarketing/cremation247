# Demandes de révision — Guillaume Marcoux (v1)
**Date** : 2026-05-06
**Projet** : Crémation 24/7 — Landing page

---

## 1. Accent manquant sur « Crémation » dans le titre (haut à gauche)

**Demande** : Corriger « Cremation » → « Crémation » dans le logo ou titre en haut à gauche.

**Avenues** :
- A. Repérer la balise `<header>` ou le composant logo dans `index.html` et corriger le texte directement.
- B. Si le titre est généré via une variable CSS/JS (ex. dans le tweak panel), corriger la valeur source unique qui alimente tous les affichages.

**Choix** : Trouver toutes les mentions sur le site "Cremation", "cremation", "cremations" et remplacer le "e" par un "é" pour corriger l'orthographe.
---

## 2. Dessins des 3 phases d'arbre — redesign + étape manquante

**Demande** : Les illustrations des 3 phases de croissance de l'arbre ne plaisent pas visuellement. De plus, une étape intermédiaire doit être ajoutée entre l'étape 1 et 2 pour représenter la croissance de l'arbre et la captation de carbone (ce qui fait passer à 4 phases au total).

**Avenues** :
- A. Remplacer les dessins existants par des icônes SVG minimalistes (style ligne/outline) qui s'intègrent mieux à la charte graphique Sage/Cream, et ajouter une 4e étape illustrant une jeune pousse avec une icône de CO₂ capturé.
- B. Proposer au client de sourcer de nouvelles illustrations (ex. Figma, Noun Project, ou illustrateur) et modifier la structure HTML/CSS pour accueillir 4 phases au lieu de 3 d'ici la livraison finale.

**Choix** : Pour le moment, uniquement cacher la section avec les arbres.

---

## 3. Description de l'image 1 — mise à jour du texte

**Demande** : Changer la légende/description de la première image pour : *« Enracinement d'un arbre commémoratif (Ginko Biloba) dans une zone forestière nommée le Jardin Perpétuel »*

**Avenues** :
- A. Localiser le texte `alt` ou la légende `<figcaption>` associée à l'image 1 dans `index.html` et remplacer par le libellé exact fourni.
- B. Si la description est utilisée comme texte d'accompagnement visible (et non seulement en `alt`), mettre à jour les deux attributs simultanément pour cohérence SEO et accessibilité.

**Choix** : Opter pour l'avenue A.

---

## 4. Accent manquant sur « Crémation 24/7 » dans le tableau bilan carbone

**Demande** : Corriger l'orthographe « Cremation 24/7 » → « Crémation 24/7 » dans le tableau comparatif bilan carbone.

**Avenues** :
- A. Chercher toutes les occurrences de « Cremation » (sans accent) dans `index.html` via un grep et corriger en lot pour éviter les oublis.
- B. Corriger manuellement l'occurrence spécifique dans le tableau, puis faire une passe globale sur le fichier pour valider qu'aucune autre instance n'est manquée.

**Choix** : Option A, si ce n'est pas déjà couvert par la demande #1.
---

## 5. Clarification du concept « Deux, carbone négatif »

**Demande** : Guillaume ne comprend pas ce que la section ou mention « Deux, carbone négatif » signifie. Le concept doit être reformulé ou mieux expliqué.

**Avenues** :
- A. Reformuler le titre/sous-titre de la section pour le rendre explicite, ex. : *« Pourquoi parler de crémation carbo-négative ? »* et ajouter une phrase d'explication courte (ex. : *« La crémation émet environ 50 kg de CO₂. En plantant un arbre, cet impact est neutralisé en 24 mois — et la forêt continue de capturer du carbone pendant des décennies. »*).
- B. Remplacer la numérotation abstraite (« Deux ») par un intitulé descriptif clair dans la hiérarchie visuelle de la page, et vérifier que le fil narratif de la section est auto-suffisant sans contexte externe.

**Choix** : Avenue A.
---

## 6. Forfait 1 — Mise à jour du prix

**Demande** : Changer le montant du forfait Conventionnelle de 1 500 $ → **1 499 $**.

**Avenues** :
- A. Localiser la valeur `1 500` (ou `1,500`) dans le bloc Forfaits de `index.html` et remplacer par `1 499 $`.
- B. Si les prix sont définis dans un objet de configuration JS ou une variable centralisée, mettre à jour la valeur source.

**Choix** : Avenue A.

---

## 7. Forfait 2 — Nouveau prix + ajout dans les inclus

**Demande** :
- Changer le montant de 2 825 $ → **2 824 $**
- Ajouter dans la liste des inclus : *« Rituel d'enracinement accompagné d'un conseiller aux familles »*

**Avenues** :
- A. Mettre à jour le prix et ajouter un nouvel élément `<li>` dans la liste des inclus du forfait Carbo-négative directement dans `index.html`.
- B. Si les forfaits sont générés dynamiquement (objet JS ou tableau), mettre à jour la structure de données correspondante pour refléter les deux changements.

**Choix** : Avenue A.
---

## 8. Forfait 3 — Retrait de l'urne, révision du contenu et du prix

**Demande** :
- Retirer toute mention d'urne artisanale
- Conserver l'accompagnement RRQ
- Ajouter une note indiquant que ce forfait inclut tout ce que comprennent les forfaits 1 et 2
- Réviser le montant → **3 174 $**

**Avenues** :
- A. Modifier le bloc Forfait Héritage dans `index.html` : supprimer les lignes liées à l'urne, ajouter la note d'inclusion (ex. : *« Inclut tout ce qui est compris dans les forfaits Conventionnelle et Carbo-négative »*), et mettre à jour le prix.
- B. Retravailler la présentation du forfait 3 pour le distinguer clairement comme un forfait « tout inclus » — reformuler les inclus restants comme des ajouts exclusifs au-delà des forfaits 1 et 2 pour en maximiser la valeur perçue.

**Choix** : Avenue A.

---

## 9. Section « Notre philosophie » — retrait de la signature

**Demande** : La citation peut rester, mais la signature avec le nom et le titre « Guillaume Marcoux, Président, Crémation 24/7 » doit être retirée. Raison : Guillaume n'est pas président de Crémation 24/7 (l'entité n'existe pas au registre).

**Note** : À des fins de contexte interne, Crémation 24/7 est un projet/marque lié à Guillaume Marcoux et Forêt de la Seconde Vie, mais n'est pas immatriculé comme entité légale distincte au registre des entreprises du Québec.

**Avenues** :
- A. Retirer complètement la ligne de signature (nom + titre) pour laisser la citation flotter seule, ce qui lui confère une portée universelle plutôt qu'une attribution personnelle.
- B. Remplacer la signature par un attribut générique, ex. : *« — Forêt de la Seconde Vie »*, si une attribution est souhaitée pour crédibiliser la citation sans engager le nom personnel de Guillaume.

**Choix** : Avenue A.

---

## 10. Adresse — « E » → « EST »

**Demande** : Dans l'adresse complète, changer *835, chemin de l'Achigan E* → *835, chemin de l'Achigan EST* (en majuscules).

**Avenues** :
- A. Chercher toutes les occurrences de « Achigan E » dans `index.html` et remplacer par « Achigan EST » pour uniformiser partout sur la page.
- B. Si l'adresse est dans une constante ou variable réutilisée, corriger la valeur source pour propager le changement.

**Choix** : Avenue A.
---

## 11. Carte Google Maps — territoire couvert

**Demande** : Ajouter une carte Google Maps illustrant le territoire de service couvert, avec une mention que les services sont disponibles partout au Québec sur demande (frais applicables).

**Avenues** :
- A. Intégrer un `<iframe>` Google Maps centré sur le Grand-Montréal avec un rayon ou une zone dessinée représentant le territoire, accompagné d'un texte sous la carte : *« Nous desservons principalement le Grand-Montréal. Nos services sont disponibles partout au Québec sur demande — des frais additionnels peuvent s'appliquer. »*
- B. Utiliser une image statique de carte stylisée (ex. Google Static Maps API) avec une zone colorée pour limiter les dépendances `<iframe>` et accélérer le chargement, avec le même texte explicatif.

**Choix** : Attendre avant d'appliquer. Je vais modifier ma réponse ici quand j'aurai choisi quoi faire.
---

## 12. Bouton vers le site web de Forêt de la Seconde Vie

**Demande** : Guillaume propose d'ajouter un bouton vers le site web principal, possiblement après ou pendant le remplissage du formulaire. Il se demande si c'est pertinent.

**Recommandation** : L'intuition de Guillaume est juste — un bouton qui redirige vers l'extérieur avant la conversion est à éviter. La meilleure option est de l'afficher dans le message de confirmation post-soumission.

**Avenues** :
- A. Ajouter le bouton uniquement dans le message de succès après soumission du formulaire (ex. : *« Vous souhaitez en apprendre davantage sur notre forêt ? Visitez foretdelasecondevie.com »*), sans perturber le parcours de conversion.
- B. L'inclure dans le footer de la page comme lien discret (texte seulement, sans CTA proéminent) pour les visiteurs qui veulent du contexte sans quitter la démarche principale.

**Choix** : Ne rien faire.
---

## 13. Vidéo YouTube à intégrer

**Demande** : Intégrer (si pertinent) la vidéo suivante : [https://www.youtube.com/watch?v=eEdr_lkgLI8](https://www.youtube.com/watch?v=eEdr_lkgLI8)

**Avenues** :
- A. Intégrer la vidéo via un `<iframe>` YouTube avec `loading="lazy"` et chargement différé (façade cliquable) dans une section dédiée, idéalement après la section d'engagement ou avant les forfaits pour renforcer la crédibilité émotionnelle.
- B. Utiliser une miniature statique cliquable (YouTube thumbnail) qui charge l'`<iframe>` uniquement au clic pour éviter l'impact sur la performance de la page et le RGPD/vie privée (pas de cookie YouTube tant que l'utilisateur n'a pas cliqué).

**Choix** : Remplacer C:\Users\Jacob\Projects\work\Cremation247\uploads\bottom-up-tree.jpg dans le layout par la video comme indiqué dans l'avenue A. 
---

*Document préparé par Juillet Marketing — pour usage interne et suivi de révisions client.*
