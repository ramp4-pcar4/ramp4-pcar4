import "./main-DIdq27YS.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
const u = {
  container: "container",
  containerHover: "container--hover",
  containerBorder: "container--border",
  containerBorderSelected: "container--border-selected",
  containerBorderUnselected: "container--border-unselected",
  contentContainer: "content-container",
  contentContainerSelectable: "content-container--selectable",
  contentContainerHasCenterContent: "content-container--has-center-content",
  nestedContainer: "nested-container",
  nestedContainerHidden: "nested-container--hidden",
  content: "content",
  customContent: "custom-content",
  actionsStart: "actions-start",
  contentStart: "content-start",
  label: "label",
  description: "description",
  contentEnd: "content-end",
  contentBottom: "content-bottom",
  actionsEnd: "actions-end",
  selectionContainer: "selection-container",
  selectionContainerSingle: "selection-container--single",
  openContainer: "open-container",
  dragContainer: "drag-container"
}, m = {
  actionsStart: "actions-start",
  contentStart: "content-start",
  content: "content",
  contentBottom: "content-bottom",
  contentEnd: "content-end",
  actionsEnd: "actions-end"
}, S = 0, h = {
  selectedMultiple: "check-square-f",
  selectedSingle: "bullet-point-large",
  unselectedMultiple: "square",
  unselectedSingle: "bullet-point-large",
  closedLTR: "chevron-right",
  closedRTL: "chevron-left",
  open: "chevron-down",
  blank: "blank",
  close: "x"
}, C = "data-test-active", i = "calcite-list", a = "calcite-list-item-group", r = "calcite-list-item";
function p(n) {
  return Array.from(n.assignedElements({ flatten: !0 }).filter((e) => e.matches(i)));
}
function g(n) {
  const e = n.assignedElements({ flatten: !0 }), o = e.filter((t) => t?.matches(a)).map((t) => Array.from(t.querySelectorAll(r))).reduce((t, c) => [...t, ...c], []), s = e.filter((t) => t?.matches(r));
  return [...e.filter((t) => t?.matches(i)).map((t) => Array.from(t.querySelectorAll(r))).reduce((t, c) => [...t, ...c], []), ...o, ...s];
}
function f(n) {
  n.forEach((e) => {
    e.setPosition = n.indexOf(e) + 1, e.setSize = n.length;
  });
}
function b(n, e = !1) {
  const o = e ? "ancestor::calcite-list-item | ancestor::calcite-list-item-group" : "ancestor::calcite-list-item";
  return document.evaluate(o, n, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null).snapshotLength;
}
export {
  u as C,
  h as I,
  S as M,
  m as S,
  C as a,
  g as b,
  p as c,
  b as g,
  f as u
};
//# sourceMappingURL=utils3-DxeHmjsr.js.map
