import { r as c } from "./Program-BMoorjME.js";
import { c as b, E as _, s as g } from "./Program-BMoorjME.js";
import { fx as j } from "./main-DMoCLB29.js";
import { t as p } from "./NestedMap-CJlcHrNH.js";
import { a as v, o as C, e as E } from "./ProgramTemplate-Drg1DY5K.js";
import { c as P } from "./Texture-BWGncXEu.js";
class x {
  constructor(e) {
    this._rctx = e, this._store = new p();
  }
  dispose() {
    this._store.forEach((e) => e.forEach((t) => t.dispose())), this._store.clear();
  }
  acquire(e, t, o, n) {
    const r = this._store.get(e, t);
    if (r != null) return r.ref(), r;
    const s = new c(this._rctx, e, t, o, n);
    return s.ref(), this._store.set(e, t, s), s;
  }
  get test() {
  }
}
function u(f) {
  const { options: e, value: t } = f;
  return typeof e[t] == "number";
}
function $(f) {
  let e = "";
  for (const t in f) {
    const o = f[t];
    if (typeof o == "boolean") o && (e += `#define ${t}
`);
    else if (typeof o == "number") e += `#define ${t} ${o.toFixed()}
`;
    else if (typeof o == "object") if (u(o)) {
      const { value: n, options: r, namespace: s } = o, i = s ? `${s}_` : "";
      for (const a in r) e += `#define ${i}${a} ${r[a].toFixed()}
`;
      e += `#define ${t} ${i}${n}
`;
    } else {
      const n = o.options;
      let r = 0;
      for (const s in n) e += `#define ${n[s]} ${(r++).toFixed()}
`;
      e += `#define ${t} ${n[o.value]}
`;
    }
  }
  return e;
}
export {
  b as BufferObject,
  _ as FramebufferObject,
  c as Program,
  x as ProgramCache,
  g as Renderbuffer,
  v as ShaderCompiler,
  P as Texture,
  C as VertexArrayObject,
  j as createContext,
  E as createProgram,
  $ as glslifyDefineMap
};
//# sourceMappingURL=webglDeps-Ca7zBtsR.js.map
