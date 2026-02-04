import { defineStore as g } from "pinia";
import { ref as o, reactive as S } from "vue";
const w = g("draw", () => {
  const r = o([]), u = o(null), i = S([]), n = o(null), l = o(null);
  function a(e) {
    r.value.splice(0, r.value.length, ...e);
  }
  function p(e) {
    u.value = e;
  }
  function s(e) {
    const t = `graphic-${Date.now()}`;
    return i.push({
      id: t,
      ...e
    }), t;
  }
  function f(e) {
    const t = i.findIndex((c) => c.id === e);
    t !== -1 && (i.splice(t, 1), n.value === e && (n.value = null));
  }
  function d(e) {
    n.value = e;
  }
  function v() {
    n.value = null;
  }
  function h() {
    return n.value ? i.find((e) => e.id === n.value) : null;
  }
  function m(e, t) {
    const c = i.find((G) => G.id === e);
    c && (c.geometry = t);
  }
  return {
    supportedTypes: r,
    activeTool: u,
    graphics: i,
    selectedGraphicId: n,
    setSupportedTypes: a,
    setActiveTool: p,
    addGraphic: s,
    removeGraphic: f,
    selectGraphic: d,
    clearSelection: v,
    getSelectedGraphic: h,
    updateGraphicGeometry: m,
    mapNavEl: l
  };
});
export {
  w as u
};
