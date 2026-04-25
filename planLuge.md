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
