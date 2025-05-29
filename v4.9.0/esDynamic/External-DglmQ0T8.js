import { a as b, a8 as p, a2 as g, a9 as N, aa as A, ab as v } from "./main-DIdq27YS.js";
class m {
  constructor(r, s, t) {
    this.assetName = r, this.assetMimeType = s, this.parts = t;
  }
  equals(r) {
    return this === r || this.assetName === r.assetName && this.assetMimeType === r.assetMimeType && b(this.parts, r.parts, (s, t) => s.equals(t));
  }
  isOnService(r) {
    return this.parts.every((s) => s.isOnService(r));
  }
  makeHash() {
    let r = "";
    for (const s of this.parts) r += s.partHash;
    return r;
  }
  async toBlob(r) {
    const { parts: s } = this;
    if (s.length === 1) return s[0].toBlob(r);
    const t = await Promise.all(s.map((n) => n.toBlob(r)));
    return p(r), new Blob(t);
  }
}
class B {
  constructor(r, s) {
    this.partUrl = r, this.partHash = s;
  }
  equals(r) {
    return this === r || this.partUrl === r.partUrl && this.partHash === r.partHash;
  }
  isOnService(r) {
    return this.partUrl.startsWith(`${r.path}/assets/`);
  }
  async toBlob(r) {
    const { data: s } = await g(this.partUrl, { responseType: "blob" });
    return p(r), s;
  }
}
function H(e) {
  return $(e?.source);
}
function u(e) {
  return Array.isArray(e) ? e.every((r) => r instanceof m) : !1;
}
const c = /^(model\/gltf\+json)|(model\/gltf-binary)$/, l = /\.(gltf|glb)/i;
function $(e) {
  return e ? Array.isArray(e) ? e.some(f) : f(e) : !1;
}
function f(e) {
  if (e instanceof File) {
    const { type: r, name: s } = e;
    return c.test(r) || l.test(s);
  }
  return c.test(e.assetMimeType) || l.test(e.assetName);
}
function M(e, r) {
  if (!e) return !1;
  const { source: s } = e;
  return T(s, r);
}
function q(e, r) {
  if (e === r) return !0;
  const { source: s } = e, { source: t } = r;
  if (s === t) return !0;
  if (u(s) && u(t)) {
    if (s.length !== t.length) return !1;
    const n = (a, o) => a.assetName < o.assetName ? -1 : a.assetName > o.assetName ? 1 : 0, i = [...s].sort(n), y = [...t].sort(n);
    for (let a = 0; a < i.length; ++a) if (!i[a].equals(y[a])) return !1;
    return !0;
  }
  return !1;
}
function T(e, r) {
  if (Array.isArray(e)) {
    const s = e;
    return s.length > 0 && s.every((t) => h(t, r));
  }
  return h(e, r);
}
function h(e, r) {
  return e instanceof m && e.isOnService(r);
}
function O(e, r) {
  return e instanceof File ? N(e, r) : A(e.assetMimeType, r) ?? v(e.assetName, r);
}
function S(e) {
  return Array.isArray(e) ? e : [e];
}
function d(e) {
  return !!e.original;
}
export {
  S as A,
  O as N,
  M as h,
  m as i,
  B as o,
  H as u,
  d as v,
  q as y
};
//# sourceMappingURL=External-DglmQ0T8.js.map
