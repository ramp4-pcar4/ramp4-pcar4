import { defineStore as G } from "pinia";
import { ref as r, reactive as g } from "vue";
const T = G("draw", () => {
  const o = r([]), u = r(null), i = g([]), n = r(null);
  function l(e) {
    o.value.splice(0, o.value.length, ...e);
  }
  function a(e) {
    u.value = e;
  }
  function p(e) {
    const t = `graphic-${Date.now()}`;
    return i.push({
      id: t,
      ...e
    }), t;
  }
  function s(e) {
    const t = i.findIndex((c) => c.id === e);
    t !== -1 && (i.splice(t, 1), n.value === e && (n.value = null));
  }
  function f(e) {
    n.value = e;
  }
  function d() {
    n.value = null;
  }
  function v() {
    return n.value ? i.find((e) => e.id === n.value) : null;
  }
  function h(e, t) {
    const c = i.find((m) => m.id === e);
    c && (c.geometry = t);
  }
  return {
    supportedTypes: o,
    activeTool: u,
    graphics: i,
    selectedGraphicId: n,
    setSupportedTypes: l,
    setActiveTool: a,
    addGraphic: p,
    removeGraphic: s,
    selectGraphic: f,
    clearSelection: d,
    getSelectedGraphic: v,
    updateGraphicGeometry: h
  };
});
export {
  T as u
};
