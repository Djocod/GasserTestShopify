# Correctif — Problèmes de rendu ThreeJS dans la boutique Shopify

Audit réalisé le 25 avril 2026 sur le projet `gasser-test`.  
Fichiers analysés : `storefront/`, `extensions/gasser-template-test/`, `vite.storefront.config.js`, `package.json`.

---

## ✅ État des corrections au 25 avril 2026

| # | Problème | Statut |
|---|----------|--------|
| 1 | `@vitejs/plugin-react` absent des `devDependencies` | ✅ Corrigé |
| 2 | CSS `height: auto !important` sur le canvas | ✅ Corrigé |
| 3 | `image_url` sans paramètre `width:` | ✅ Corrigé |
| 4 | `TextureLoader.load("")` sur chemin vide | ✅ Corrigé |
| 5 | Taille du bundle IIFE > 1 MB | ⬜ Non traité |
| 6 | `script_tag` bloquant sans `defer` | ✅ Corrigé |
| 7 | Pas de fallback si WebGL indisponible | ✅ Corrigé |
| 8 | `import * as THREE` — fix incomplet (crash runtime) | ⚠️ Restauré en état d'origine — voir note ci-dessous |
| 9 | React bundlé dans l'IIFE | ⬜ Non traité |
| 10 | `setPixelRatio` sans correction CSS | ✅ Résolu par le fix #2 |
| 11 | `TaperedTubeGeometry` dupliquée 3 fois | ⬜ Non traité |
| 12 | Ternaire de nommage inutile | ⬜ Non traité |
| 13 | `groupRef` assigné mais jamais utilisé | ⬜ Non traité |
| 14 | Pas d'indicateur de chargement des textures | ⬜ Non traité |
| 15 | `loadTex` et `loadTexBg` identiques | ⬜ Non traité |

> **⚠️ Note issue #8 :** Un fix partiel avait changé les imports en imports nommés mais laissé tout le code utilisant `THREE.XXX` — causant un `ReferenceError: THREE is not defined` à l'exécution. L'import a été **restauré** en `import * as THREE from "three"` pour rétablir le fonctionnement. La migration complète vers les imports nommés nécessite de renommer tous les usages `THREE.XXX` → `XXX` dans les 4 fichiers simultanément, ce qui est un chantier distinct.

---

## 🔴 CRITIQUE — Casse le rendu ou empêche le build

---

### 1. `@vitejs/plugin-react` absent des `devDependencies`

**Fichier :** `package.json` + `vite.storefront.config.js`

`vite.storefront.config.js` importe `@vitejs/plugin-react` mais ce package n'est **pas déclaré** dans les `devDependencies` de `package.json`. Il peut être disponible en tant que dépendance transitive de `@react-router/dev`, mais ce n'est pas garanti selon l'environnement (CI, Docker, déploiement).

```js
// vite.storefront.config.js
import react from "@vitejs/plugin-react"; // ← package non déclaré dans package.json
```

**Fix :** Ajouter explicitement dans `devDependencies` :

```json
"@vitejs/plugin-react": "^4.x"
```

---

### 2. CSS `height: auto !important` détruit les proportions du canvas

**Fichier :** `extensions/gasser-template-test/blocks/luge-configurator.liquid` (ligne ~37)

```css
#luge-configurator-root canvas {
  width: 100% !important;
  height: auto !important; /* ← PROBLÈME CRITIQUE */
  display: block;
}
```

Three.js configure le canvas via `renderer.setSize(width, height)`, qui définit à la fois les attributs `canvas.width`/`canvas.height` (buffer WebGL) **et** les styles inline `canvas.style.width`/`canvas.style.height`. La règle CSS `height: auto !important` écrase le style inline du renderer.

**Conséquence :**

- Le navigateur redimensionne le canvas CSS selon le ratio intrinsèque des pixels WebGL.
- Sur un écran Retina (devicePixelRatio = 2) : le canvas WebGL fait 800×1400px de pixels → CSS le rend très haut.
- La scène 3D apparaît déformée, étirée ou tronquée.

**Fix :** Supprimer le CSS sur le canvas et ne pas laisser le CSS interférer avec les dimensions du renderer. Le canvas doit avoir son style géré uniquement par Three.js.

```css
/* Remplacer par : */
#luge-configurator-root canvas {
  display: block;
  /* NE PAS écraser width/height — Three.js les gère */
}
```

---

### 3. `image_url` utilisé sans paramètre de largeur

**Fichier :** `extensions/gasser-template-test/blocks/luge-configurator.liquid` (lignes 10–19)

```liquid
data-img1="{{ block.settings.texture_1 | image_url }}"
```

Depuis la version **2022-07** de l'API Liquid Shopify, le filtre `image_url` appliqué à un objet `image_picker` **nécessite un paramètre de taille**. Sans paramètre, le comportement est undefined et peut renvoyer une chaîne vide ou lever une erreur selon la version du thème.

**Conséquence :** Les URLs des textures seront vides → Three.js tentera de charger `""` → erreur réseau → tous les objets 3D apparaissent noirs (pas de texture).

**Fix :** Ajouter un paramètre de largeur sur chaque filtre :

```liquid
data-img1="{{ block.settings.texture_1 | image_url: width: 512 }}"
data-img2="{{ block.settings.texture_2 | image_url: width: 512 }}"
data-img3="{{ block.settings.texture_3 | image_url: width: 512 }}"
data-img4="{{ block.settings.texture_4 | image_url: width: 512 }}"
data-img5="{{ block.settings.texture_5 | image_url: width: 512 }}"
data-wood="{{ block.settings.texture_wood | image_url: width: 512 }}"
data-guide="{{ block.settings.texture_guide | image_url: width: 512 }}"
data-skating="{{ block.settings.texture_skating | image_url: width: 512 }}"
data-hoop="{{ block.settings.texture_hoop | image_url: width: 512 }}"
```

---

### 4. `TextureLoader.load("")` quand aucune image n'est configurée

**Fichiers :** `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

Fonctions `loadTex(path)` et `loadTexBg(path)` :

```js
function loadTex(path, rx = 1, ry = 1.5) {
  const tex = new THREE.TextureLoader().load(path); // ← path peut être "" ou undefined
  ...
}
```

Si un marchand n'a pas renseigné les images dans l'éditeur de thème, `data-img1` sera une chaîne vide. `TextureLoader.load("")` essaie de charger l'URL relative vide, ce qui résout vers **l'URL de la page courante** (ex. `https://monstore.myshopify.com/products/luge`) → erreur 404 ou parsing d'HTML comme texture → objet 3D noir.

**Fix :** Ajouter une vérification de chemin valide avant de charger :

```js
function loadTex(path, rx = 1, ry = 1.5) {
  if (!path) return new THREE.Texture(); // texture vide par défaut
  const tex = new THREE.TextureLoader().load(path);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(rx, -ry);
  tex.needsUpdate = true;
  return tex;
}
```

---

### 5. Taille du bundle IIFE probablement excessive

**Fichier :** `vite.storefront.config.js`

Le build bundlise ensemble : React + ReactDOM + Three.js r184 + OrbitControls + tous les composants en un seul fichier IIFE. La taille estimée du bundle minifié est de **1.2 à 2 MB**.

Shopify impose une limite de **1 MB par fichier asset** dans les theme app extensions. Si le bundle dépasse cette limite, Shopify refusera le déploiement (`shopify app deploy` échouera silencieusement ou avec erreur).

**Vérification :** Contrôler la taille actuelle :

```bash
ls -lh extensions/gasser-template-test/assets/luge-configurator.iife.js
```

**Fix si la limite est dépassée :**

- Externaliser Three.js via un CDN (le charger via un `<script>` séparé dans le liquid)
- Externaliser React via un CDN
- Utiliser `import * as THREE` avec des imports nommés pour le tree-shaking

---

## 🟠 IMPORTANT — Comportement incorrect ou dégradé

---

### 6. `script_tag` charge le script de façon bloquante sans `defer`

**Fichier :** `extensions/gasser-template-test/blocks/luge-configurator.liquid`

```liquid
{{
  'luge-configurator.iife.js'
  | asset_url
  | script_tag
}}
```

Le filtre `script_tag` de Shopify génère : `<script src="..." type="text/javascript"></script>` **sans `async` ni `defer`**. Pour un bundle de 1-2 MB, cela **bloque le parsing HTML** de la page entière jusqu'au téléchargement et à l'exécution complète du script.

**Fix :** Remplacer le filtre par un tag manuel avec `defer` :

```liquid
<script src="{{ 'luge-configurator.iife.js' | asset_url }}" defer></script>
```

> ⚠️ Avec `defer`, le script s'exécute après le parsing du DOM, donc `document.getElementById("luge-configurator-root")` sera toujours trouvé — pas de changement nécessaire dans `entry.jsx`.

---

### 7. Pas de gestion du contexte WebGL non disponible

**Fichier :** `storefront/TemplateLuge.jsx` (dans le `useEffect`)

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
```

Si WebGL n'est pas disponible (navigateur ancien, GPU désactivé, mode privé sur certains iOS) ou si le contexte est bloqué par la CSP du thème, cette ligne lève une exception non interceptée. React affichera une erreur non gérée, et le configurateur sera complètement invisible sans message d'erreur pour l'utilisateur.

**Fix :** Entourer d'un try/catch et afficher un message de fallback :

```js
let renderer;
try {
  renderer = new THREE.WebGLRenderer({ antialias: true });
} catch (e) {
  // Afficher un message ou une image statique de fallback
  mount.innerHTML =
    "<p>Votre navigateur ne supporte pas la 3D interactive.</p>";
  return;
}
```

---

### 8. `import * as THREE` empêche le tree-shaking de Three.js

**Fichiers :** `storefront/TemplateLuge.jsx`, `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

```js
import * as THREE from "three";
```

L'import namespace `* as THREE` empêche Vite/Rollup d'effectuer le tree-shaking. **La totalité de Three.js** est incluse dans le bundle, y compris des centaines de classes non utilisées (loaders, post-processing, geometries non utilisées, etc.).

**Fix :** Importer uniquement ce qui est nécessaire :

```js
import {
  Scene,
  WebGLRenderer,
  PerspectiveCamera,
  MeshBasicMaterial,
  BufferGeometry,
  Group,
  AmbientLight,
  DirectionalLight,
  GridHelper,
  CatmullRomCurve3,
  CapsuleGeometry,
  SphereGeometry,
  TubeGeometry,
  Float32BufferAttribute,
  TextureLoader,
  RepeatWrapping,
  DoubleSide,
  MathUtils,
} from "three";
```

---

### 9. React bundlé dans l'IIFE — conflit potentiel avec le thème

**Fichier :** `vite.storefront.config.js`

React (et ReactDOM) sont intégrés dans le bundle IIFE. Si le thème Shopify utilise déjà React (certains thèmes headless ou apps tierces), **deux instances React coexistent** dans la page. Cela provoque :

- Des erreurs `Invalid hook call` car les hooks React détectent deux copies de la bibliothèque
- Des comportements imprévisibles du virtual DOM

**Fix :** Vérifier si `window.React` est déjà défini et réutiliser l'instance existante, ou utiliser `externals` dans Rollup pour ne pas bundliser React si déjà présent.

---

### 10. `renderer.setPixelRatio(window.devicePixelRatio)` sans correction CSS

**Fichier :** `storefront/TemplateLuge.jsx`

```js
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);
```

`setPixelRatio` double (ou triple) la résolution interne du canvas sur les écrans Retina. Three.js corrige cela en définissant `canvas.style.width` et `canvas.style.height` aux valeurs CSS (sans multiplier). Mais combiné avec le CSS `width: 100% !important` du point n°2, la résolution effective peut être incorrecte.

**Fix lié au point n°2** : Supprimer les règles CSS qui écrasent les styles inline du canvas.

---

## 🟡 MINEUR — Code smell ou problème de qualité

---

### 11. Classe `TaperedTubeGeometry` dupliquée trois fois

**Fichiers :** `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

La même classe `TaperedTubeGeometry` est copiée-collée mot pour mot dans les trois fichiers. Cela triple sa présence dans le bundle final.

**Fix :** Extraire dans un fichier partagé `storefront/TaperedTubeGeometry.js` et l'importer dans chacun des trois composants.

---

### 12. Logique ternaire de nommage des meshes toujours identique

**Fichiers :** `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

```js
mesh.name =
  offsetX > 0 &&
  offsetY > 0 &&
  offsetZ > 0 &&
  offRotX > 0 &&
  offRotY > 0 &&
  offRotZ > 0
    ? "tube-right-hoop"
    : "tube-right-hoop"; // ← Les deux branches sont identiques !
```

Les deux valeurs du ternaire sont identiques — le nommage conditionnel ne sert à rien. De plus, `"tube-right-Bottom"` a une majuscule incohérente (`B` majuscule) dans `createTubeChassisRight`.

---

### 13. `groupRef` inutilisé dans les trois composants sled

**Fichiers :** `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

```js
const groupRef = useRef(null);
// ...
groupRef.current = lugeGroup; // ← assigné mais jamais relu
```

`groupRef` est assigné mais n'est jamais utilisé nulle part (pas de ref forwarding, pas de manipulation impérative depuis le parent). Ce `useRef` est inutile.

---

### 14. Pas d'indicateur de chargement des textures

**Fichier :** `storefront/TemplateLuge.jsx`

Pendant le chargement des textures (surtout si les images sont lourdes), la scène s'affiche avec des objets noirs (pas de texture chargée). Il n'y a aucun spinner ou état de chargement pour l'utilisateur.

**Fix :** Utiliser `TextureLoader` avec les callbacks `onLoad`/`onError` et afficher un état de chargement :

```js
new THREE.TextureLoader().load(path, onLoad, undefined, onError);
```

---

### 15. `loadTex` et `loadTexBg` sont identiques

**Fichiers :** `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js`

Les deux fonctions `loadTex` et `loadTexBg` ont exactement le même code. La séparation sémantique "seat texture" vs "chassis texture" n'implique aucune différence de traitement.

**Fix :** Fusionner en une seule fonction `loadTex`.

---

## Résumé des priorités

| #   | Sévérité     | Problème                                                          | Fichier(s)                               |
| --- | ------------ | ----------------------------------------------------------------- | ---------------------------------------- |
| 2   | 🔴 Critique  | CSS `height: auto` déforme le canvas ThreeJS                      | `luge-configurator.liquid`               |
| 3   | 🔴 Critique  | `image_url` sans `width:` = URLs vides = textures noires          | `luge-configurator.liquid`               |
| 4   | 🔴 Critique  | `TextureLoader.load("")` crash silencieux si image vide           | `Luge.js`, `LugeKind.js`, `LugeSport.js` |
| 1   | 🔴 Critique  | `@vitejs/plugin-react` non déclaré → build instable               | `package.json`                           |
| 5   | 🔴 Critique  | Bundle IIFE probablement > 1MB (limite Shopify)                   | `vite.storefront.config.js`              |
| 6   | 🟠 Important | `script_tag` bloquant sans `defer`                                | `luge-configurator.liquid`               |
| 7   | 🟠 Important | Pas de fallback si WebGL non disponible                           | `TemplateLuge.jsx`                       |
| 8   | 🟠 Important | `import * as THREE` = pas de tree-shaking                         | Tous les fichiers storefront             |
| 9   | 🟠 Important | React bundlé = conflit potentiel avec le thème                    | `vite.storefront.config.js`              |
| 11  | 🟡 Mineur    | `TaperedTubeGeometry` dupliquée 3 fois                            | `Luge.js`, `LugeKind.js`, `LugeSport.js` |
| 12  | 🟡 Mineur    | Ternaire de nommage des meshes inutile (deux branches identiques) | `Luge.js`, `LugeKind.js`, `LugeSport.js` |
| 13  | 🟡 Mineur    | `groupRef` assigné mais jamais utilisé                            | `Luge.js`, `LugeKind.js`, `LugeSport.js` |
| 14  | 🟡 Mineur    | Aucun indicateur de chargement des textures                       | `TemplateLuge.jsx`                       |
| 15  | 🟡 Mineur    | `loadTex` et `loadTexBg` identiques                               | `Luge.js`, `LugeKind.js`, `LugeSport.js` |
