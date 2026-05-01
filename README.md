# Crémation 24/7 — Page de destination (Landing Page)

Ce dépôt contient le code source de la page de destination de **Crémation 24/7**, le premier service de crémation carbo-négatif au Québec. Le projet est une page à haute conversion, écoresponsable, intégrée à Zoho CRM et dotée d'un "Tweaks Panel" en temps réel pour la personnalisation du design.

## Présentation du projet

Crémation 24/7 est une filiale de la **Forêt de la seconde vie**. Le service se concentre sur une crémation écoresponsable où l'empreinte carbone est neutralisée en moins de 24 mois grâce à des initiatives de reforestation.

- **Objectif principal :** Génération de prospects (leads) pour les services de crémation planifiées et immédiates.
- **Public cible :** Personnes soucieuses de l'environnement dans le Grand Montréal, à la recherche d'options funéraires modernes, respectueuses et durables.
- **Proposition de valeur :** Impact carbo-négatif (-250 kg de CO₂ par arbre sur 10 ans), soutien humain 24/7 et protection des forêts mémorielles à perpétuité.

## Pile technologique (Tech Stack)

- **Frontend :** HTML5, CSS3 (Vanilla), React 18 (via CDN).
- **Interactivity :** Babel (standalone) pour le traitement du JSX directement dans le navigateur.
- **Intégrations :**
  - **Zoho Forms :** Formulaire de contact et de planification intégré via une fenêtre modale.
  - **Zoho UTM :** Script personnalisé (`zoho-utm.js`) pour le suivi de l'attribution marketing entre les sessions.
  - **Google Tag Manager :** Analyse et suivi des événements.
- **Système de design :**
  - **Typographie :** *Instrument Serif* (Titres), *Inter Tight* (Corps), *JetBrains Mono* (Stats/Méta).
  - **Palettes :** Plusieurs thèmes (Sauge/Crème, Brume, Terre, Nuit) gérés via des variables CSS.

## Structure du projet

- `index.html` : Point d'entrée principal contenant la structure et la logique d'intégration Zoho.
- `app.jsx` : Logique de l'application React pour le panneau de personnalisation (Tweaks Panel) et les animations au défilement.
- `styles.css` : Système de design complet et règles de mise en page.
- `tweaks-panel.jsx` : Composants utilitaires pour l'interface de personnalisation en direct.
- `zoho-utm.js` : Utilitaire pour persister les paramètres UTM dans les cookies et les injecter dans les iFrames Zoho.
- `uploads/` : Répertoire des ressources contenant les photographies optimisées et l'iconographie SVG.
- `claude.md` : Documentation interne et directives de marque.

## Fonctionnalités clés

### 1. Panneau de personnalisation (Tweaks Panel)
Une interface React personnalisée (visible en développement) qui permet aux éditeurs de :
- Basculer entre 4 palettes de couleurs distinctes.
- Tester différentes paires de typographies.
- Modifier en direct le titre principal (Hero) et basculer des éléments d'interface comme la "Barre d'urgence".

### 2. Visualisations écologiques
- **SVG de croissance :** Une représentation animée de la croissance des arbres et de la capture du carbone au fil du temps.
- **Courbe de carbone :** Un graphique comparant l'empreinte d'une crémation conventionnelle par rapport à la trajectoire de Crémation 24/7.

### 3. Capture de leads intégrée
- Intégration fluide de Zoho Forms via une modale avec arrière-plan flouté.
- Suivi automatique des paramètres UTM pour garantir la mesure du ROI marketing.

### 4. Expérience optimisée
- **Scroll Reveal :** Animations d'entrée fluides pour les sections et les statistiques.
- **Design adaptatif (Responsive) :** Entièrement optimisé pour tous les écrans, du bureau au mobile.
- **Performance :** Dépendances minimales, utilisant des CDNs pour un chargement rapide.

## Développement local

Comme ce projet utilise Babel Standalone et React via CDN, vous pouvez le lancer avec n'importe quel serveur de fichiers statiques local.

1. **Cloner le dépôt :**
   ```bash
   git clone <url-du-depot>
   ```

2. **Lancer un serveur local :**
   Utilisez "Live Server" de VS Code, ou via la console :
   ```bash
   # Avec Python
   python -m http.server 8000
   
   # Avec Node (npx)
   npx serve .
   ```

3. **Ouvrir dans le navigateur :**
   Accédez à `http://localhost:8000/index.html`.

## Directives de marque

- **Ton :** Minimaliste, élégant, respectueux et tourné vers l'avenir.
- **Terminologie :** Toujours privilégier "Crémation 24/7" et utiliser des minuscules pour "Forêt de la seconde vie".
- **Contact :** (438) 500-6288 | 835 Chemin de l'Achigan E, Sainte-Sophie, QC J5J 2P9.

---
*Conception par Juillet Marketing.*
