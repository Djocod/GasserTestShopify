# Guide de déploiement — Configurateur de Luge Gasser Rodel

## Fichiers à remplacer dans votre projet

### 1. `vite.storefront.config.js` (racine du projet)
→ Remplacer par le fichier fourni

**Changements :**
- Three.js externalisé (`external: ["three"]`) → chargé via CDN
- React + ReactDOM externalisés → chargés via CDN
- Gain taille bundle estimé : de ~1.5-2MB à ~200-350KB

---

### 2. `storefront/TaperedTubeGeometry.js` (nouveau fichier)
→ Créer ce fichier

**Puis dans `storefront/Luge.js`, `storefront/LugeKind.js`, `storefront/LugeSport.js` :**
Remplacer la classe `TaperedTubeGeometry` locale par l'import :

```js
// Supprimer la classe TaperedTubeGeometry définie localement
// Ajouter en haut du fichier :
import { TaperedTubeGeometry } from "./TaperedTubeGeometry.js";
```

---

### 3. `storefront/utils.js` (nouveau fichier)
→ Créer ce fichier

**Puis dans chaque fichier Luge.js / LugeKind.js / LugeSport.js :**
Remplacer les fonctions `loadTex()` et `loadTexBg()` locales par :

```js
// Supprimer loadTex() et loadTexBg() définies localement
// Ajouter en haut du fichier :
import { loadTex } from "./utils.js";
// Remplacer tous les appels loadTexBg(...) par loadTex(...)
```

---

### 4. `storefront/entry.jsx`
→ Remplacer par le fichier fourni (identique à l'existant, déjà correct)

---

### 5. `extensions/gasser-template-test/blocks/luge-configurator.liquid`
→ Remplacer par le fichier fourni

**Changements critiques :**
- Ajout des balises `<script>` CDN (Three.js 0.184 + React 18) **avant** l'IIFE
- `image_url` corrigé avec `width: 512` sur tous les data-attributes
- `script_tag` remplacé par `<script defer>` (non bloquant)
- CSS canvas corrigé (suppression `height: auto !important`)
- Block settings avec `image_picker` pour chaque texture

---

## Commandes à exécuter dans l'ordre

```bash
# Étape 1 — Vérifier la taille actuelle (avant optimisation)
npm run build:storefront
ls -lh extensions/gasser-template-test/assets/luge-configurator.iife.js

# Étape 2 — Appliquer les modifications de fichiers (voir ci-dessus)

# Étape 3 — Rebuilder avec le nouveau config
npm run build:storefront

# Étape 4 — Vérifier la nouvelle taille (doit être < 1MB)
ls -lh extensions/gasser-template-test/assets/luge-configurator.iife.js

# Étape 5 — Tester en local avant déploiement
npm run dev
# → Ouvrir la boutique de dev, ajouter le bloc "Configurateur de Luge"
# → Vérifier que le 3D s'affiche correctement

# Étape 6 — Déployer sur Shopify
npm run deploy
# ou
shopify app deploy
```

---

## Activation dans l'admin Shopify (après déploiement)

1. **Admin > Boutique en ligne > Thèmes > Personnaliser**
2. Naviguer sur la page souhaitée (page produit, page dédiée)
3. Cliquer **"Ajouter un bloc"** dans le panneau gauche
4. Chercher **"Configurateur de Luge"**
5. Dans les paramètres du bloc, uploader les 9 images de texture
6. **Sauvegarder**

---

## Vérification des tailles cibles

| Fichier | Taille cible |
|---|---|
| `luge-configurator.iife.js` | < 900KB |
| Three.js CDN (0.184) | ~680KB (externe, non compté) |
| React 18 CDN | ~130KB (externe, non compté) |
| ReactDOM 18 CDN | ~1.1MB (externe, non compté) |

---

## Issues du correctif.md — État final après ces modifications

| # | Problème | Statut |
|---|---|---|
| 1 | `@vitejs/plugin-react` absent | ✅ Déjà corrigé |
| 2 | CSS `height: auto` déforme le canvas | ✅ Corrigé dans le .liquid |
| 3 | `image_url` sans `width:` | ✅ Corrigé dans le .liquid |
| 4 | `TextureLoader.load("")` sur chemin vide | ✅ Corrigé dans utils.js |
| 5 | Bundle IIFE > 1MB | ✅ Corrigé par externalisation CDN |
| 6 | `script_tag` bloquant sans `defer` | ✅ Corrigé dans le .liquid |
| 7 | Pas de fallback WebGL | ✅ Déjà corrigé dans TemplateLuge.jsx |
| 8 | `import * as THREE` — tree-shaking | ⏸ Reporté (risque élevé) |
| 9 | React bundlé dans l'IIFE | ✅ Corrigé par externalisation CDN |
| 10 | `setPixelRatio` sans correction CSS | ✅ Corrigé (lié au fix #2) |
| 11 | `TaperedTubeGeometry` dupliquée 3x | ✅ Extrait dans TaperedTubeGeometry.js |
| 12 | Ternaire de nommage inutile | ⏸ Mineur, reporté |
| 13 | `groupRef` inutilisé | ✅ À supprimer (3 lignes dans chaque fichier) |
| 14 | Pas d'indicateur de chargement | ⏸ Mineur, reporté |
| 15 | `loadTex` et `loadTexBg` identiques | ✅ Fusionné dans utils.js |
