import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
} from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Luge from "./Luge";
import LugeKind from "./LugeKind";
import LugeSport from "./LugeSport";

// ════════════════════════════════════════════════════════════
//  STYLES GLOBAUX — injectés une seule fois dans <head>
// ════════════════════════════════════════════════════════════
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Syne:wght@700;800&display=swap');

  .lv-root *,
  .lv-root *::before,
  .lv-root *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  .lv-root {
    --bg:            #0c0e10;
    --surface:       rgba(255, 255, 255, 0.04);
    --surface-solid: #141618;
    --border:        rgba(255, 255, 255, 0.08);
    --border-hover:  rgba(255, 255, 255, 0.18);
    --accent:        #eaff00;
    --accent-glow:   rgba(232, 248, 64, 0.12);
    --text:          #f0ede8;
    --muted:         rgba(240, 237, 232, 0.4);
    --mono:          'DM Mono', monospace;
    --display:       'Syne', sans-serif;

    position: relative;
    width: 100%;
    height: 700px;
    background: var(--bg);
    overflow: hidden;
    font-family: var(--mono);
  }

  /* ── Canvas mount ── */
  .lv-mount {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }
  .lv-mount canvas {
    display: block;
    width: 100% !important;
    height: 100% !important;
  }

  /* ── Fond atmosphère ── */
  .lv-atmo {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background:
      radial-gradient(ellipse 60% 50% at 50% 30%, rgba(232, 248, 64, 0.04) 0%, transparent 70%),
      radial-gradient(ellipse 40% 60% at 80% 80%, rgba(80, 120, 255, 0.05) 0%, transparent 60%);
  }

  /* ── Réticule centre ── */
  .lv-cross {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    pointer-events: none;
    z-index: 5;
    opacity: 0.15;
  }
  .lv-cross::before,
  .lv-cross::after {
    content: '';
    position: absolute;
    background: var(--accent);
  }
  .lv-cross::before { width: 1px; height: 100%; left: 50%; top: 0; }
  .lv-cross::after  { height: 1px; width: 100%; top: 50%; left: 0; }

  /* ── Loader ── */
  .lv-loader {
    position: absolute;
    inset: 0;
    z-index: 30;
    background: var(--bg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    transition: opacity 0.6s ease;
    pointer-events: all;
  }
  .lv-loader.done {
    opacity: 0;
    pointer-events: none;
  }
  .lv-ring {
    width: 36px;
    height: 36px;
    border: 1.5px solid var(--border);
    border-top-color: var(--accent);
    border-radius: 50%;
    animation: lv-spin 0.7s linear infinite;
  }
  @keyframes lv-spin { to { transform: rotate(360deg); } }
  .lv-loader-txt {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }

  /* ── Header ── */
  .lv-header {
    position: absolute;
    top: 16px;
    left: 16px;
    right: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 10;
    pointer-events: none;
  }
  .lv-header-left { display: flex; gap: 8px; align-items: center; }
  .lv-tag {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 4px 10px;
    border-radius: 4px;
    backdrop-filter: blur(8px);
  }
  .lv-tag-accent {
    color: var(--accent);
    border-color: rgba(232, 248, 64, 0.25);
    background: rgba(232, 248, 64, 0.06);
  }
  .lv-product-name {
    font-family: var(--display);
    font-size: 22px;
    font-weight: 800;
    color: var(--text);
    letter-spacing: -0.01em;
    text-shadow: 0 0 40px rgba(232, 248, 64, 0.2);
  }

  /* ── Sélecteur de modèle (top-center) ── */
  .lv-sled-bar {
    position: absolute;
    top: 58px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--surface-solid);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 6px 10px;
    z-index: 10;
    backdrop-filter: blur(12px);
  }

  /* ── Hint ── */
  .lv-hint {
    position: absolute;
    bottom: 80px;
    left: 50%;
    transform: translateX(-50%);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.1em;
    color: var(--muted);
    text-transform: uppercase;
    white-space: nowrap;
    pointer-events: none;
    z-index: 10;
    transition: opacity 0.8s ease;
  }

  /* ── Barre contrôles (bottom-center) ── */
  .lv-ctrl-bar {
    position: absolute;
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    gap: 6px;
    background: var(--surface-solid);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 8px 10px;
    z-index: 10;
    backdrop-filter: blur(12px);
  }

  /* ── Boutons communs ── */
  .lv-btn {
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
    background: none;
    border: 1px solid var(--border);
    border-radius: 6px;
    padding: 7px 14px;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
    line-height: 1;
  }
  .lv-btn:hover {
    color: var(--text);
    border-color: var(--border-hover);
    background: rgba(255, 255, 255, 0.04);
  }
  .lv-btn.on {
    color: var(--accent);
    border-color: rgba(232, 248, 64, 0.35);
    background: rgba(232, 248, 64, 0.07);
  }
  .lv-sep {
    width: 1px;
    height: 18px;
    background: var(--border);
    flex-shrink: 0;
  }

  /* ── Panneau swatches (bottom-right) ── */
  .lv-color-bar {
    position: absolute;
    bottom: 16px;
    right: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
    z-index: 10;
  }
  .lv-color-label {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .lv-swatches { display: flex; gap: 6px; align-items: center; }

  /* Swatch bouton image */
  .lv-sw {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: all 0.2s ease;
    background-size: cover;
    background-position: center;
    background-color: transparent;
    flex-shrink: 0;
    padding: 0;
    outline: none;
  }
  .lv-sw:hover { transform: scale(1.18); }
  .lv-sw.active {
    border-color: var(--accent);
    box-shadow: 0 0 8px rgba(232, 248, 64, 0.45);
  }

  /* ── Panneau info (slide-in droite) ── */
  .lv-info-panel {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 220px;
    background: var(--surface-solid);
    border-left: 1px solid var(--border);
    padding: 24px 18px;
    z-index: 15;
    overflow-y: auto;
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .lv-info-panel.open { transform: translateX(0); }
  .lv-info-h {
    font-family: var(--display);
    font-size: 14px;
    font-weight: 700;
    color: var(--accent);
    letter-spacing: 0.02em;
  }
  .lv-info-row { display: flex; flex-direction: column; gap: 3px; }
  .lv-info-k {
    font-family: var(--mono);
    font-size: 9px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .lv-info-v {
    font-family: var(--mono);
    font-size: 12px;
    color: var(--text);
  }
  .lv-info-sep { height: 1px; background: var(--border); }
`;

// Injecte les styles dans <head> une seule fois
let stylesInjected = false;
function injectStyles() {
  if (stylesInjected || typeof document === "undefined") return;
  const el = document.createElement("style");
  el.dataset.id = "luge-viewer-styles";
  el.textContent = STYLES;
  document.head.appendChild(el);
  stylesInjected = true;
}

// ════════════════════════════════════════════════════════════
//  FICHE PRODUIT — données par modèle de luge
// ════════════════════════════════════════════════════════════
const SLED_INFO = {
  Luge: {
    label: "Luge",
    ref: "TR-1",
    chassis: "Acier galvanisé",
    siege: "Polyéthylène HD",
    patins: "Acier inox",
    dimensions: "110 × 45 × 22 cm",
    poids: "3,2 kg",
    charge: "80 kg",
    age: "6 ans et plus",
  },
  LugeKind: {
    label: "Luge Kind",
    ref: "TR-1.5",
    chassis: "Acier galvanisé",
    siege: "Polyéthylène HD",
    patins: "Acier inox",
    dimensions: "95 × 40 × 20 cm",
    poids: "2,8 kg",
    charge: "60 kg",
    age: "4 ans et plus",
  },
  LugeSport: {
    label: "Luge Sport",
    ref: "TR-2",
    chassis: "Aluminium anodisé",
    siege: "Polyéthylène HD renforcé",
    patins: "Acier inox trempé",
    dimensions: "120 × 48 × 24 cm",
    poids: "4,1 kg",
    charge: "100 kg",
    age: "12 ans et plus",
  },
};

// ════════════════════════════════════════════════════════════
//  COMPOSANT PRINCIPAL
// ════════════════════════════════════════════════════════════
const TemplateLuge = ({
  img1,
  img2,
  img3,
  img4,
  img5,
  wood,
  guide: guideProp,
  skating: skatingProp,
  hoop: hoopProp,
}) => {
  // ── Tableau de couleurs (images Shopify passées en props) ──
  const COLORS = useMemo(
    () => [
      {
        id: "color-1",
        value: img1,
        src: img1,
        bg: wood,
        guide: guideProp,
        hoop: hoopProp,
        skating: skatingProp,
      },
      {
        id: "color-2",
        value: img2,
        src: img2,
        bg: wood,
        guide: guideProp,
        hoop: hoopProp,
        skating: skatingProp,
      },
      {
        id: "color-3",
        value: img3,
        src: img3,
        bg: wood,
        guide: guideProp,
        hoop: hoopProp,
        skating: skatingProp,
      },
      {
        id: "color-4",
        value: img4,
        src: img4,
        bg: wood,
        guide: guideProp,
        hoop: hoopProp,
        skating: skatingProp,
      },
      {
        id: "color-5",
        value: img5,
        src: img5,
        bg: wood,
        guide: guideProp,
        hoop: hoopProp,
        skating: skatingProp,
      },
    ],
    [img1, img2, img3, img4, img5, wood, guideProp, hoopProp, skatingProp],
  );

  // ── États ─────────────────────────────────────────────────
  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0].bg);
  const [guideColor, setGuideColor] = useState(COLORS[0].guide);
  const [hoopColor, setHoopColor] = useState(COLORS[0].hoop);
  const [skatingColor, setSkatingColor] = useState(COLORS[0].skating);
  const [choiceSled, setChoiceSled] = useState("Luge");
  const [scene, setScene] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [autoRot, setAutoRot] = useState(false);
  const [wireMode, setWireMode] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const [hintVisible, setHintVisible] = useState(true);

  // ── Refs ──────────────────────────────────────────────────
  const mountRef = useRef(null);
  const cameraRef = useRef(null);
  const controlsRef = useRef(null);
  const sceneRef = useRef(null);
  const autoRotRef = useRef(false);

  // Sync refs avec états (utilisés dans la boucle RAF)
  useEffect(() => {
    autoRotRef.current = autoRot;
  }, [autoRot]);

  // ── Injection CSS au premier render ───────────────────────
  useEffect(() => {
    injectStyles();
  }, []);

  // ── Hint : disparaît après 4 s ────────────────────────────
  useEffect(() => {
    const t = setTimeout(() => setHintVisible(false), 4000);
    return () => clearTimeout(t);
  }, []);

  // ════════════════════════════════════════════════════════
  //  INIT THREE.JS (une seule fois)
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.offsetWidth || 800;
    const height = mount.offsetHeight || 700;

    // ── Renderer ─────────────────────────────────────────
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      mount.innerHTML =
        '<p style="color:rgba(240,237,232,0.4);padding:20px;font-family:monospace">' +
        "Votre navigateur ne supporte pas la 3D interactive.</p>";
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x0c0e10, 1);
    mount.appendChild(renderer.domElement);

    // ── Scène ────────────────────────────────────────────
    const threScene = new THREE.Scene();
    sceneRef.current = threScene;

    // ── Caméra ───────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 1000);
    camera.position.set(3, 4, -5);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // ── Lumières ─────────────────────────────────────────
    // Ambiante (intensité élevée pour bien éclairer les textures)
    threScene.add(new THREE.AmbientLight(0xffffff, 13));

    // Key light — lumière principale blanche haut-droite
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 6, 4);
    threScene.add(key);

    // Rim light — reflet jaune-vert accent, contre-jour gauche
    const rim = new THREE.DirectionalLight(0xe8f840, 0.5);
    rim.position.set(-3, 1, -2);
    threScene.add(rim);

    // Fill light — teinte bleue pour adoucir les ombres
    const fill = new THREE.DirectionalLight(0x4466ff, 0.3);
    fill.position.set(0, -3, 3);
    threScene.add(fill);

    // ── Grille sol ───────────────────────────────────────
    const grid = new THREE.GridHelper(6, 24, 0x1e2225, 0x181c1f);
    grid.position.y = -0.45;
    threScene.add(grid);

    // ── OrbitControls ────────────────────────────────────
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.09;
    controls.target.set(0, 0, 0);
    controls.update();
    controlsRef.current = controls;

    // ── Boucle d'animation ───────────────────────────────
    let rafId;
    const animate = () => {
      rafId = requestAnimationFrame(animate);
      // Rotation auto appliquée sur la scène entière
      if (autoRotRef.current) {
        threScene.rotation.y += 0.003;
      }
      controls.update();
      renderer.render(threScene, camera);
    };
    animate();

    // ── Responsive ───────────────────────────────────────
    const handleResize = () => {
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Expose la scène aux composants Luge / LugeKind / LugeSport
    setScene(threScene);
    setTimeout(() => setLoaded(true), 900);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // ════════════════════════════════════════════════════════
  //  WIREFRAME — traverse tous les meshes de la scène
  // ════════════════════════════════════════════════════════
  useEffect(() => {
    if (!sceneRef.current) return;
    sceneRef.current.traverse((o) => {
      if (o.isMesh && o.material) {
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => {
          m.wireframe = wireMode;
        });
      }
    });
  }, [wireMode]);

  // ════════════════════════════════════════════════════════
  //  RESET VUE
  // ════════════════════════════════════════════════════════
  const resetView = useCallback(() => {
    if (!cameraRef.current || !controlsRef.current) return;
    cameraRef.current.position.set(3, 4, -5);
    cameraRef.current.lookAt(0, 0, 0);
    controlsRef.current.target.set(0, 0, 0);
    controlsRef.current.update();
    if (sceneRef.current) sceneRef.current.rotation.y = 0;
  }, []);

  // ════════════════════════════════════════════════════════
  //  SÉLECTION COULEUR — met à jour tous les états liés
  // ════════════════════════════════════════════════════════
  const pickColor = useCallback((color) => {
    setSelectedColor(color.value);
    setBackgroundColor(color.bg);
    setGuideColor(color.guide);
    setHoopColor(color.hoop);
    setSkatingColor(color.skating);
  }, []);

  // ── Info du modèle courant ─────────────────────────────
  const info = SLED_INFO[choiceSled] || SLED_INFO.Luge;

  // ════════════════════════════════════════════════════════
  //  RENDU JSX
  // ════════════════════════════════════════════════════════
  return (
    <div className="lv-root">
      {/* ── Canvas Three.js ── */}
      <div ref={mountRef} className="lv-mount" />

      {/* ── Overlays visuels ── */}
      <div className="lv-atmo" />
      <div className="lv-cross" />

      {/* ── Loader ── */}
      <div className={`lv-loader${loaded ? " done" : ""}`}>
        <div className="lv-ring" />
        <div className="lv-loader-txt">Initialisation…</div>
      </div>

      {/* ── Header (top) ── */}
      <div className="lv-header">
        <div className="lv-header-left">
          <div className="lv-tag">Vue 3D</div>
          <div className="lv-tag lv-tag-accent">{info.ref}</div>
        </div>
        <div className="lv-product-name">{info.label}</div>
      </div>

      {/* ── Sélecteur de modèle (top-center) ── */}
      <div className="lv-sled-bar">
        <button
          className={`lv-btn${choiceSled === "Luge" ? " on" : ""}`}
          onClick={() => setChoiceSled("Luge")}
        >
          Luge
        </button>
        <div className="lv-sep" />
        <button
          className={`lv-btn${choiceSled === "LugeKind" ? " on" : ""}`}
          onClick={() => setChoiceSled("LugeKind")}
        >
          Luge Kind
        </button>
        <div className="lv-sep" />
        <button
          className={`lv-btn${choiceSled === "LugeSport" ? " on" : ""}`}
          onClick={() => setChoiceSled("LugeSport")}
        >
          Luge Sport
        </button>
      </div>

      {/* ── Hint ── */}
      <div className="lv-hint" style={{ opacity: hintVisible ? 1 : 0 }}>
        Tourner · Zoomer · Double-clic pour reset
      </div>

      {/* ── Swatches couleur siège (bottom-right) ── */}
      <div className="lv-color-bar">
        <div className="lv-color-label">Couleur siège</div>
        <div className="lv-swatches">
          {COLORS.map((color) => (
            <button
              key={color.id}
              className={`lv-sw${selectedColor === color.value ? " active" : ""}`}
              style={
                color.src
                  ? { backgroundImage: `url('${color.src}')` }
                  : { backgroundColor: color.value || "#888" }
              }
              onClick={() => pickColor(color)}
              title={color.id}
              aria-label={`Appliquer ${color.id}`}
            />
          ))}
        </div>
      </div>

      {/* ── Barre de contrôles (bottom-center) ── */}
      <div className="lv-ctrl-bar">
        <button className="lv-btn" onClick={resetView}>
          ↺ Reset
        </button>

        <button
          className={`lv-btn${autoRot ? " on" : ""}`}
          onClick={() => setAutoRot((v) => !v)}
        >
          {autoRot ? "⏸ Auto" : "▷ Auto"}
        </button>

        <div className="lv-sep" />

        <button
          className={`lv-btn${wireMode ? " on" : ""}`}
          onClick={() => setWireMode((v) => !v)}
        >
          ⬡ Wire
        </button>

        <div className="lv-sep" />

        <button
          className={`lv-btn${infoOpen ? " on" : ""}`}
          onClick={() => setInfoOpen((v) => !v)}
        >
          ℹ Info
        </button>
      </div>

      {/* ── Panneau info slide-in (droite) ── */}
      <div className={`lv-info-panel${infoOpen ? " open" : ""}`}>
        <div className="lv-info-h">Fiche Produit</div>

        <div className="lv-info-row">
          <div className="lv-info-k">Modèle</div>
          <div className="lv-info-v">{info.label}</div>
        </div>
        <div className="lv-info-row">
          <div className="lv-info-k">Référence</div>
          <div className="lv-info-v">{info.ref}</div>
        </div>

        <div className="lv-info-sep" />

        <div className="lv-info-row">
          <div className="lv-info-k">Châssis</div>
          <div className="lv-info-v">{info.chassis}</div>
        </div>
        <div className="lv-info-row">
          <div className="lv-info-k">Siège</div>
          <div className="lv-info-v">{info.siege}</div>
        </div>
        <div className="lv-info-row">
          <div className="lv-info-k">Patins</div>
          <div className="lv-info-v">{info.patins}</div>
        </div>

        <div className="lv-info-sep" />

        <div className="lv-info-row">
          <div className="lv-info-k">Dimensions</div>
          <div className="lv-info-v">{info.dimensions}</div>
        </div>
        <div className="lv-info-row">
          <div className="lv-info-k">Poids</div>
          <div className="lv-info-v">{info.poids}</div>
        </div>
        <div className="lv-info-row">
          <div className="lv-info-k">Charge max.</div>
          <div className="lv-info-v">{info.charge}</div>
        </div>

        <div className="lv-info-sep" />

        <div className="lv-info-row">
          <div className="lv-info-k">Âge</div>
          <div className="lv-info-v">{info.age}</div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          Composants 3D — hors du div mountRef pour éviter
          que React ne touche au DOM géré par Three.js
      ══════════════════════════════════════════════════ */}
      {scene && choiceSled === "Luge" && (
        <Luge
          scene={scene}
          selectedColor={selectedColor}
          backgroundColor={backgroundColor}
          guide={guideColor}
        />
      )}
      {scene && choiceSled === "LugeKind" && (
        <LugeKind
          scene={scene}
          selectedColor={selectedColor}
          backgroundColor={backgroundColor}
          guide={guideColor}
        />
      )}
      {scene && choiceSled === "LugeSport" && (
        <LugeSport
          scene={scene}
          selectedColor={selectedColor}
          backgroundColor={backgroundColor}
          guide={guideColor}
          hoop={hoopColor}
          skating={skatingColor}
        />
      )}
    </div>
  );
};

export default TemplateLuge;
