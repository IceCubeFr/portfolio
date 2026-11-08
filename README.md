# Portfolio de Florian GAVOILLE

Portfolio personnel construit avec **Vue 3**, **Vite**, **TypeScript**, **Tailwind CSS** et
**DaisyUI**.

## Installation

```sh
npm install
```

## Développement

```sh
npm run dev
```

## Build de production

```sh
npm run build
npm run preview
```

Le build est généré dans `dist/`.

## Déploiement sur CloudPanel

Le site est une SPA avec des URLs sans `#`. Il faut donc que le serveur Nginx de CloudPanel
renvoie `index.html` pour les routes inconnues, sinon un rechargement direct de
`/anciennes-versions` affiche une 404.

1. Générer le build :

   ```sh
   npm install
   npm run build
   ```

2. Dans CloudPanel, configurer le **Root Directory** du site statique vers le dossier `dist/` du
   projet (ou copier le contenu de `dist/` dans le dossier racine du site). Le dossier `dist/`
   contient bien `index.html`, `assets/` et les archives `Oldv*`.

3. Ouvrir **Sites > votre site > Vhost** et ajouter la configuration de
   `deploy/cloudpanel-vhost.conf` :

   ```nginx
   location / {
       try_files $uri $uri/ /index.html;
   }
   ```

   Cette règle sert le fichier demandé s'il existe (archives, images, assets), et renvoie
   `index.html` sinon, ce qui laisse Vue Router afficher la bonne page.

4. Sauvegarder : CloudPanel vérifie la syntaxe Nginx et recharge automatiquement le serveur.

Les liens vers les archives (`/Oldv0_2/index.html`, etc.) continuent de fonctionner puisque les
dossiers sont copiés tels quels depuis `public/` vers `dist/`.

## Personnalisation

### Pages

Le site est une SPA propulsée par Vue Router. Les routes sont définies dans
`src/router/index.ts` :

- `/` : page d'accueil et ses sections (`src/views/HomeView.vue`) ;
- `/anciennes-versions` : page « Anciennes versions » avec sa section « Historique »
  (`src/views/AnciennesVersionsView.vue`).

### Texte de présentation

Le paragraphe de la section « À propos » se trouve directement dans
`src/components/AboutSection.vue`.

### Données externalisées

| Fichier                     | Contenu                                                                                   |
| --------------------------- | ----------------------------------------------------------------------------------------- |
| `src/data/etudes.json`      | `temporalite`, `label`, `image`, `competences`                                            |
| `src/data/experiences.json` | `temporalite`, `label`, `image`, `competences`                                   |
| `src/data/versions.json`    | `label`, `periode`, `url` (sites archivés dans `public/Oldv*`)                            |
| `src/data/changements.json` | `version`, `date`, `changements` (liste brute de textes)                                    |
| `src/data/projets.json`     | `title`, `imgUrl`, `shortDesc`, `tags` (`title` + `type`), `desc`, `descHTML`, `link`      |

Les images sont à déposer dans `public/images/` ou `public/media/` puis à référencer avec un
chemin comme `/images/mon-image.svg`. Le format 16/9 est conseillé pour les images d'études et de
projets. Une URL distante (`https://...`) fonctionne aussi pour les projets.

Pour les `tags` des projets, le champ `type` accepte : `dev`, `gestion`, `comm`, `ang` et
`autre` (chaque type a une couleur de chip différente). Le champ `descHTML` accepte du HTML.

### Journal des modifications

La section « Récentes modifications » est alimentée par `src/data/changements.json` et rendue par
le composant réutilisable `src/components/ChangelogList.vue`.

Pour ajouter une version, il suffit d'ajouter un objet au tableau :

```json
{
  "version": "2.1.0",
  "date": "1 janvier 2027",
  "changements": [
    "Description brute du premier changement.",
    "Description brute du second changement."
  ]
}
```

### Nom, photo et liens de contact

- Florian GAVOILLE : `src/components/TheHeader.vue`, `src/components/ContactSection.vue` et
  `src/components/TheFooter.vue`.
- Photo de profil : `public/images/profile.jpg` (remplacez le fichier ou modifiez son chemin dans
  `src/components/ContactSection.vue`).
- Liens LinkedIn, GitHub, mail et CV : tableau `liens` dans `src/components/ContactSection.vue`.
- CV téléchargeable : `public/CV.pdf`.
