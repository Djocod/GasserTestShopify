<!-- # Fichiers du projet gasser-test

## Racine

| Fichier            | Description                                                   |
| ------------------ | ------------------------------------------------------------- |
| `package.json`     | Dépendances npm et scripts de commandes du projet             |
| `shopify.app.toml` | Configuration principale de l'app Shopify (nom, scopes, URLs) |
| `shopify.web.toml` | Configuration du composant web de l'app Shopify               |
| `vite.config.js`   | Configuration de Vite (bundler/dev server)                    |
| `tsconfig.json`    | Configuration TypeScript du projet                            |
| `Dockerfile`       | Instructions pour containeriser l'app avec Docker             |
| `README.md`        | Documentation générale du projet                              |
| `CHANGELOG.md`     | Historique des changements et versions                        |

---

## app/

| Fichier             | Description                                                         |
| ------------------- | ------------------------------------------------------------------- |
| `db.server.js`      | Initialisation et export du client Prisma (accès base de données)   |
| `shopify.server.js` | Configuration du SDK Shopify (authentification, sessions, webhooks) |
| `root.jsx`          | Composant racine React Router — layout global, balises HTML, meta   |
| `routes.js`         | Définition des routes de l'application                              |
| `entry.server.jsx`  | Point d'entrée SSR (Server-Side Rendering) côté serveur             |

---

## app/routes/

| Fichier                          | Description                                                               |
| -------------------------------- | ------------------------------------------------------------------------- |
| `app.jsx`                        | Layout parent de toutes les pages `/app/*` — initialise AppBridge Shopify |
| `app._index.jsx`                 | Page d'accueil de l'app (tableau de bord principal)                       |
| `app.additional.jsx`             | Page supplémentaire d'exemple                                             |
| `auth.$.jsx`                     | Route catch-all pour le flux d'authentification OAuth Shopify             |
| `webhooks.app.uninstalled.jsx`   | Handler webhook — désinstallation de l'app                                |
| `webhooks.app.scopes_update.jsx` | Handler webhook — mise à jour des scopes OAuth                            |
| `_index/route.jsx`               | Page d'accueil publique (avant connexion)                                 |
| `_index/styles.module.css`       | Styles CSS de la page d'accueil publique                                  |
| `auth.login/route.jsx`           | Page de connexion / sélection de boutique                                 |
| `auth.login/error.server.jsx`    | Gestion des erreurs du formulaire de login                                |

---

## prisma/

| Fichier         | Description                                                        |
| --------------- | ------------------------------------------------------------------ |
| `schema.prisma` | Schéma de la base de données (modèles, relations, provider SQLite) |
| `migrations/`   | Historique des migrations SQL appliquées                           |
| `dev.sqlite`    | Base de données SQLite locale (développement uniquement)           |

--- -->

# Plan d'intégration — Configurateur de Luge dans la boutique en ligne

## Objectif

Afficher le configurateur 3D (React + Three.js) sur la boutique Shopify visible par les clients, via une extension de thème.

---

## Phase 1 — Préparer la structure des fichiers

### Étape 1.1 — Supprimer le dossier invalide

Supprimer `extensions/gasser-template-test/routes/` (cause l'erreur `npm run dev`).
Seuls `assets/`, `blocks/`, `snippets/`, `locales/` sont autorisés dans une extension de thème.

### Étape 1.2 — Créer le dossier `storefront/` à la racine

Crée manuellement le dossier `storefront/` à la racine de `gasser-test/`.

### Étape 1.3 — Déplacer les fichiers depuis `forlder.Luge/`

Déplacer vers `storefront/` :

- `Luge.js`
- `LugeKind.js`
- `LugeSport.js`
- `TemplateLuge.js`
- Dossier `img/` (toutes les images)

### Étape 1.4 — Créer `storefront/entry.jsx`

Ce fichier est le point d'entrée du bundle. Il monte React dans le `<div>` du bloc Liquid :

```jsx
import React from "react";
import { createRoot } from "react-dom/client";
import TemplateLuge from "./TemplateLuge.js";

const el = document.getElementById("luge-configurator-root");
if (el) {
  const props = {
    img1: el.dataset.img1,
    img2: el.dataset.img2,
    img3: el.dataset.img3,
    img4: el.dataset.img4,
    img5: el.dataset.img5,
    wood: el.dataset.wood,
    guide: el.dataset.guide,
    skating: el.dataset.skating,
    hoop: el.dataset.hoop,
  };
  createRoot(el).render(<TemplateLuge {...props} />);
}
```

---

## Phase 2 — Corriger les imports dans `storefront/TemplateLuge.js`

### Étape 2.1 — Remplacer les `require()` par des `import`

Vite ne supporte pas `require()`. Exemple :

```js
// AVANT
const img1 = require("../asset/img/gurteblaurotgraugelbb(1).jpeg");
// APRÈS — les images viennent des props passées par Liquid
```

Supprimer tous les `require()` d'images et recevoir les URLs via les props.

### Étape 2.2 — Corriger les imports des composants

```js
// AVANT
import Luge from "../components/Luge.js";
// APRÈS
import Luge from "./Luge.js";
import LugeKind from "./LugeKind.js";
import LugeSport from "./LugeSport.js";
```

### Étape 2.3 — Adapter le composant pour recevoir les URLs en props

```js
const TemplateLuge = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  wood,
  guide,
  skating,
  hoop,
}) => {
  const COLORS = [
    { id: "color-1", value: img1, src: img1, bg: wood, guide, hoop, skating },
    { id: "color-2", value: img2, src: img2, bg: wood, guide, hoop, skating },
    // ...etc
  ];
  // reste du code inchangé
};
```

---

## Phase 3 — Configurer Vite pour builder le bundle

### Étape 3.1 — Installer le plugin React pour Vite

```bash
npm install --save-dev @vitejs/plugin-react
```

### Étape 3.2 — Créer `vite.storefront.config.js` à la racine

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "storefront/entry.jsx",
      name: "LugeConfigurator",
      fileName: "luge-configurator",
      formats: ["iife"],
    },
    outDir: "extensions/gasser-template-test/assets",
    emptyOutDir: false,
  },
});
```

### Étape 3.3 — Ajouter le script dans `package.json`

```json
"build:storefront": "vite build --config vite.storefront.config.js"
```

---

## Phase 4 — Copier les images dans l'extension

Copier tous les fichiers de `storefront/img/` vers `extensions/gasser-template-test/assets/`.
Ces images seront hébergées sur le CDN Shopify après déploiement et accessibles via `asset_url`.

---

## Phase 5 — Créer le bloc Liquid

Créer `extensions/gasser-template-test/blocks/luge-configurator.liquid` :

```liquid
<div id="luge-configurator-root"
  data-img1="{{ 'gurteblaurotgraugelbb(1).jpeg' | asset_url }}"
  data-img2="{{ 'gurterotschwarzb(2).jpeg' | asset_url }}"
  data-img3="{{ 'gurterotblaub(2).jpeg' | asset_url }}"
  data-img4="{{ 'gurten-vilolett-blau-trkis-b(1).jpeg' | asset_url }}"
  data-img5="{{ 'beige.jpeg' | asset_url }}"
  data-wood="{{ 'bois-1.jpg' | asset_url }}"
  data-guide="{{ 'cuir2.jpeg' | asset_url }}"
  data-skating="{{ 'padoukdafrique.jpg' | asset_url }}"
  data-hoop="{{ 'tirolBlue1.jpg' | asset_url }}"
  style="width: 100%; height: 700px;">
</div>

{{ 'luge-configurator.iife.js' | asset_url | script_tag }}

{% schema %}
{
  "name": "Configurateur de Luge",
  "target": "section",
  "settings": []
}
{% endschema %}
```

---

## Phase 6 — Builder et tester en local

```bash
# Builder le bundle configurateur
npm run build:storefront

# Vérifier que le fichier existe :
# extensions/gasser-template-test/assets/luge-configurator.iife.js

# Lancer l'app
npm run dev
```

---

## Phase 7 — Déployer et activer sur Shopify

```bash
npm run deploy
```

Ensuite dans l'admin Shopify :

1. **Boutique en ligne > Thèmes > Personnaliser**
2. Naviguer sur la page souhaitée (ex: page produit)
3. Ajouter le bloc **"Configurateur de Luge"** depuis le panneau gauche
4. Sauvegarder
5. Ouvrir la boutique → le configurateur 3D s'affiche

---

## Récapitulatif des fichiers à créer / modifier / supprimer

| Action    | Fichier                                                                   |
| --------- | ------------------------------------------------------------------------- |
| Supprimer | `extensions/gasser-template-test/routes/`                                 |
| Créer     | `storefront/entry.jsx`                                                    |
| Créer     | `vite.storefront.config.js`                                               |
| Créer     | `extensions/gasser-template-test/blocks/luge-configurator.liquid`         |
| Modifier  | `storefront/TemplateLuge.js` — supprimer require(), recevoir props images |
| Modifier  | `package.json` — ajouter script `build:storefront`                        |
| Déplacer  | `forlder.Luge/*` → `storefront/`                                          |
| Copier    | `forlder.Luge/img/*` → `extensions/gasser-template-test/assets/`          |

---

<!-- VERSION
@shopify/cli/3.93.2 win32-x64 node-v24.14.1

USAGE
$ shopify [COMMAND]

TOPICS
app Build Shopify apps.
auth Auth operations.
config CLI configuration options.
hydrogen Build Hydrogen storefronts.
organization List Shopify organizations you have access to.
store Work directly with Shopify stores.
theme Build Liquid themes.

COMMANDS
commands List all shopify commands.
help Display help for Shopify CLI
search Starts a search on shopify.dev.
upgrade Upgrades Shopify CLI.
version Shopify CLI version currently installed.

jorda@Desktop-Truc MINGW64 ~/OneDrive/Bureau/gasserfile
$ shopify app
Build Shopify apps.

USAGE
$ shopify app COMMAND

TOPICS
app bulk Cancel a bulk operation.
app config Manage app configuration.
app dev Run the app.
app env Manage environment variables.
app function Manage Shopify Functions.
app generate Generate a new app Extension.
app logs Stream detailed logs for your Shopify app.
app versions List deployed versions of your app.
app webhook Trigger delivery of a sample webhook topic payload to a
designated address.

COMMANDS
app build Build the app, including extensions.
app deploy Deploy your Shopify app.
app dev Run the app.
app execute Execute GraphQL queries and mutations.
app import-custom-data-definitions Import metafield and metaobject
definitions.
app import-extensions Import dashboard-managed extensions into
your app.
app info Print basic information about your app and
extensions.
app init Create a new app project
app logs Stream detailed logs for your Shopify app.
app release

│ gasser-test is ready for you to build! │
│ │
│ Next steps │
│ • Run `cd gasser-test` │
│ • For extensions, run `shopify app generate extension` │
│ • To see your app, run `shopify app dev` │
│ │
│ Reference │
│ • Shopify docs [1] │
│ • Shopify Dev MCP, [2] connect your AI assistant to development resources │
│ • For an overview of commands, run `shopify app --help`

C:\Users\jorda\OneDrive\Bureau\gasserfile\gasser-test> shopify app dev

Voici les commandes disponibles dans package.json :

Commande Description
npm run dev Lance l'app en mode développement via Shopify CLI
npm run build Compile l'application (React Router build)
npm run start Démarre le serveur en production
npm run docker-start Setup + démarrage pour Docker
npm run setup Génère le client Prisma et déploie les migrations
npm run deploy Déploie l'app sur Shopify
npm run config:link Lie la config Shopify à l'app
npm run config:use Sélectionne une config Shopify
npm run generate Génère des ressources Shopify
npm run env Gère les variables d'environnement Shopify
npm run lint Vérifie le code avec ESLint
npm run typecheck Vérifie les types TypeScript
npm run graphql-codegen Génère les types GraphQL
npm run prisma Accès direct à la CLI Prisma
npm run vite Accès direct à Vite
npm run shopify Accès direct à la CLI Shopify
Les commandes les plus utilisées au quotidien sont npm run dev, npm run -->
