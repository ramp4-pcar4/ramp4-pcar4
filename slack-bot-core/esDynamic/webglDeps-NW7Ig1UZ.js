import { r as c } from "./Program-DzoSBHvo.js";
import { h as _, x as g, s as j } from "./Program-DzoSBHvo.js";
import { t as m } from "./NestedMap-CJlcHrNH.js";
import { a as E, o as F, e as O } from "./ProgramTemplate-p_8Syt13.js";
import { m as v } from "./Texture-DgcJZ8H_.js";
import { fj as w } from "./main-CmejC-so.js";
let l = class {
  constructor(e) {
    this._rctx = e, this._store = new m();
  }
  dispose() {
    this._store.forEach((e) => e.forEach((t) => t.dispose())), this._store.clear();
  }
  acquire(e, t, r, n) {
    const o = this._store.get(e, t);
    if (o != null) return o.ref(), o;
    const s = new c(this._rctx, e, t, r, n);
    return s.ref(), this._store.set(e, t, s), s;
  }
  get test() {
    let e = 0;
    return this._store.forEach((t) => t.forEach((r) => e += r.hasGLName ? 2 : 1)), { cachedWebGLProgramObjects: e };
  }
};
function p(f) {
  const { options: e, value: t } = f;
  return typeof e[t] == "number";
}
function x(f) {
  let e = "";
  for (const t in f) {
    const r = f[t];
    if (typeof r == "boolean") r && (e += `#define ${t}
`);
    else if (typeof r == "number") e += `#define ${t} ${r.toFixed()}
`;
    else if (typeof r == "object") if (p(r)) {
      const { value: n, options: o, namespace: s } = r, a = s ? `${s}_` : "";
      for (const i in o) e += `#define ${a}${i} ${o[i].toFixed()}
`;
      e += `#define ${t} ${a}${n}
`;
    } else {
      const n = r.options;
      let o = 0;
      for (const s in n) e += `#define ${n[s]} ${(o++).toFixed()}
`;
      e += `#define ${t} ${n[r.value]}
`;
    }
  }
  return e;
}
export {
  _ as BufferObject,
  g as FramebufferObject,
  c as Program,
  l as ProgramCache,
  j as Renderbuffer,
  E as ShaderCompiler,
  v as Texture,
  F as VertexArrayObject,
  w as createContext,
  O as createProgram,
  x as glslifyDefineMap
};
//# sourceMappingURL=webglDeps-NW7Ig1UZ.js.map
