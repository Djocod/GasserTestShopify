import React from "react";
import { createRoot } from "react-dom/client";
import TemplateLuge from "./TemplateLuge";

function mountLuge() {
  const el = document.getElementById("luge-configurator-root");
  if (!el) return;

  // Évite le double-montage si l'éditeur Shopify re-injecte la section
  if (el.dataset.mounted === "true") return;
  el.dataset.mounted = "true";

  try {
    const props = {
      img1:    el.dataset.img1    || "",
      img2:    el.dataset.img2    || "",
      img3:    el.dataset.img3    || "",
      img4:    el.dataset.img4    || "",
      img5:    el.dataset.img5    || "",
      wood:    el.dataset.wood    || "",
      guide:   el.dataset.guide   || "",
      skating: el.dataset.skating || "",
      hoop:    el.dataset.hoop    || "",
    };

    createRoot(el).render(<TemplateLuge {...props} />);
  } catch (e) {
    el.innerHTML =
      '<div style="padding:20px;color:red;font-family:sans-serif">' +
      "<strong>Erreur configurateur 3D :</strong> " +
      e.message +
      "</div>";
  }
}

// Fonctionne que le script soit defer, async ou chargé en sync
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountLuge);
} else {
  mountLuge();
}
