import { af as L } from "./main-BEi6lHs4.js";
import { u as d } from "./basicInterfaces-DTnusSyV.js";
class f {
  constructor(r) {
    this.data = r, this.type = "encoded-mesh-texture", this.encoding = d.KTX2_ENCODING;
  }
}
function v(t) {
  return t?.type === "encoded-mesh-texture";
}
async function w(t) {
  const r = new Blob([t]), o = await r.text();
  return JSON.parse(o);
}
async function p(t, r) {
  if (r === d.KTX2_ENCODING) return new f(t);
  const o = new Blob([t], { type: r }), n = URL.createObjectURL(o), e = new Image();
  if (L("esri-iPhone")) return new Promise((c, m) => {
    const s = () => {
      i(), c(e);
    }, a = (u) => {
      i(), m(u);
    }, i = () => {
      URL.revokeObjectURL(n), e.removeEventListener("load", s), e.removeEventListener("error", a);
    };
    e.addEventListener("load", s), e.addEventListener("error", a), e.src = n;
  });
  try {
    e.src = n, await e.decode();
  } catch {
    console.warn("Failed decoding HTMLImageElement");
  }
  return URL.revokeObjectURL(n), e;
}
export {
  w as n,
  p as o,
  v as r,
  f as t
};
//# sourceMappingURL=resourceUtils-BmeKYh4b.js.map
