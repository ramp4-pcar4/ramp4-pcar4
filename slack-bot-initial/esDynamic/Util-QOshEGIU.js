import "./main-3gzXighg.js";
class l {
  constructor(t) {
    this.message = t;
  }
  toString() {
    return `AssertException: ${this.message}`;
  }
}
function h(e, t) {
  if (!e) {
    t = t || "Assertion";
    const u = new Error(t).stack;
    throw new l(`${t} at ${u}`);
  }
}
function m(e, t, u, f) {
  let i, o = (u[0] - e[0]) / t[0], s = (f[0] - e[0]) / t[0];
  o > s && (i = o, o = s, s = i);
  let n = (u[1] - e[1]) / t[1], c = (f[1] - e[1]) / t[1];
  if (n > c && (i = n, n = c, c = i), o > c || n > s) return !1;
  n > o && (o = n), c < s && (s = c);
  let a = (u[2] - e[2]) / t[2], r = (f[2] - e[2]) / t[2];
  return a > r && (i = a, a = r, r = i), !(o > r || a > s) && (r < s && (s = r), !(s < 0));
}
export {
  m as i,
  h as s
};
//# sourceMappingURL=Util-QOshEGIU.js.map
