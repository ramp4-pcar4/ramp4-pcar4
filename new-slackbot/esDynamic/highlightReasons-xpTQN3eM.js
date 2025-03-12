import { aw as l, ax as t } from "./main-BpIyUAdL.js";
const e = { selection: (o) => new l({ color: new t([o.color.r / 2, o.color.g / 2, o.color.b / 2, o.color.a]) }), highlight: (o) => o, popup: (o) => new l({ color: new t([o.color.g, o.color.b, o.color.r, o.color.a]) }) };
function i(o) {
  if (!o) return 0;
  let r = 1;
  for (const n in e) {
    if (n === o) break;
    r <<= 1;
  }
  return r;
}
const a = Object.keys(e);
export {
  e as c,
  a as l,
  i as t
};
//# sourceMappingURL=highlightReasons-xpTQN3eM.js.map
