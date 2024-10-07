const HILIGHT_LAYER_NAME = "Ramp-Hilight";
const FOG_HILIGHT_LAYER_NAME = "Ramp-Hilight-Fog-Basemap";
const DEFAULT_CONFIG = {
  mode: "glow",
  options: {
    haloColor: [0, 255, 0],
    // lime green
    haloOpacity: 0.8
  }
};
var HilightMode = /* @__PURE__ */ ((HilightMode2) => {
  HilightMode2["NONE"] = "none";
  HilightMode2["GLOW"] = "glow";
  HilightMode2["LIFT"] = "lift";
  HilightMode2["FOG"] = "fog";
  return HilightMode2;
})(HilightMode || {});

export { DEFAULT_CONFIG as D, FOG_HILIGHT_LAYER_NAME as F, HilightMode as H, HILIGHT_LAYER_NAME as a };
