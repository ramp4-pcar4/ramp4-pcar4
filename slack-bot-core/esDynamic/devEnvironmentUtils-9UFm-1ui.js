function m(c) {
  return c = c || globalThis.location.hostname, l.some((a) => c?.match(a) != null);
}
function e(c, a) {
  return c && (a = a || globalThis.location.hostname) ? a.match(t) != null || a.match(s) != null ? c.replace("static.arcgis.com", "staticdev.arcgis.com") : a.match(o) != null || a.match(i) != null ? c.replace("static.arcgis.com", "staticqa.arcgis.com") : c : c;
}
const t = /^devext.arcgis.com$/, o = /^qaext.arcgis.com$/, s = /^[\w-]*\.mapsdevext.arcgis.com$/, i = /^[\w-]*\.mapsqa.arcgis.com$/, l = [/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/, t, o, /^jsapps.esri.com$/, s, i];
export {
  e as a,
  m as c
};
//# sourceMappingURL=devEnvironmentUtils-9UFm-1ui.js.map
