import React, { useEffect, useState, useRef, useMemo } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import Luge from "./Luge";
import LugeKind from "./LugeKind";
import LugeSport from "./LugeSport";
// import infoLuge from "../public/InfoLuge.json";

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
  // ✅ FIX : useMemo pour éviter la recréation du tableau à chaque render
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

  const [selectedColor, setSelectedColor] = useState(COLORS[0].value);
  const [backgroundColor, setBackgroundColor] = useState(COLORS[0].bg);
  const [guideColor, setGuideColor] = useState(COLORS[0].guide);
  const [hoopColor, setHoopColor] = useState(COLORS[0].hoop);
  const [skatingColor, setSkatingColor] = useState(COLORS[0].skating);
  const [choiceSled, setChoiceSled] = useState("Luge");

  // ✅ FIX : div Three.js séparé du contenu React
  const mountRef = useRef(null);
  const [scene, setScene] = useState(null);
  // const SLED_TO_REF = {
  //   Luge: "TR-1",
  //   LugeKind: "TR-1.5",
  //   LugeSport: "TR-2",
  // };
  // const currentLuge = infoLLuge.find((l) => l.ref === SLED_TO_REF[choiceSled]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const threScene = new THREE.Scene();

    // ✅ FIX : utiliser offsetWidth/offsetHeight pour la vraie taille du container
    const width = mount.offsetWidth || 800;
    const height = mount.offsetHeight || 700;

    const camera = new THREE.PerspectiveCamera(15, width / height, 0.1, 1000);
    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
    } catch (e) {
      // Afficher un message ou une image statique de fallback
      mount.innerHTML =
        "<p>Votre navigateur ne supporte pas la 3D interactive.</p>";
      return;
    }
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // threScene.add(new THREE.AmbientLight(0xffffff, 0.7));
    // const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    // dirLight.position.set(25, 20, 15);
    // threScene.add(dirLight);
    // threScene.add(new THREE.GridHelper(30, 30));

    // Lumières
    threScene.add(new THREE.AmbientLight(0xffffff, 13));
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(4, 6, 4);
    threScene.add(key);
    const rim = new THREE.DirectionalLight(0xe8f840, 0.5);
    rim.position.set(-3, 1, -2);
    threScene.add(rim);
    const fill = new THREE.DirectionalLight(0x4466ff, 0.3);
    fill.position.set(0, -3, 3);
    threScene.add(fill);

    camera.position.set(3, 4, -5);
    camera.lookAt(0, 0, 0);
    controls.update();

    // ✅ FIX : gestion du resize pour être responsive
    const handleResize = () => {
      const w = mount.offsetWidth;
      const h = mount.offsetHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(threScene, camera);
    });

    setScene(threScene);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div>
      <form className="setForm">
        <div className="input input-img">
          <p>color</p>
          {COLORS.map((color) => (
            <button
              key={color.id}
              className="color-1"
              id={color.id}
              value={color.value}
              onClick={(e) => {
                e.preventDefault();
                setSelectedColor(color.value);
                setBackgroundColor(color.bg);
                setGuideColor(color.guide);
                setHoopColor(color.hoop);
                setSkatingColor(color.skating);
              }}
            >
              <img src={color.src} alt="" height="20px" width="20px" />
            </button>
          ))}
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setChoiceSled("Luge");
            }}
          >
            Luge
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setChoiceSled("LugeKind");
            }}
          >
            LugeKind
          </button>
        </div>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setChoiceSled("LugeSport");
            }}
          >
            LugeSport
          </button>
        </div>
      </form>
      {/* <div>
        {currentLuge && (
          <div>
            <h3>Fiche Produit</h3>
            <p>Modèle</p>
            <h3>{currentLuge.nameDe}</h3>
            <p>{currentLuge.ref}</p>
            <p>Châssis</p>
            <p>{currentLuge.frame}</p>
            <p>Siège</p>
            <p>{currentLuge.sit}</p>
            <p>Patins</p>
            <p>{currentLuge.sled}</p>
            <p>Dimensions</p>
            <p>{currentLuge.size}</p>
            <p>Poids</p>
            <p>{currentLuge.weight}</p>
            <p>Charge max.</p>
            <p>{currentLuge.weightMax}</p>
            <p>Âge</p>
            <p>{currentLuge.years}</p>
          </div>
        )}
      </div> */}
      {/* ✅ FIX PRINCIPAL : le div Three.js est séparé des composants React */}
      <div ref={mountRef} style={{ width: "100%", height: "700px" }} />
      {/* Les composants 3D sont en dehors du div mountRef */}
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
