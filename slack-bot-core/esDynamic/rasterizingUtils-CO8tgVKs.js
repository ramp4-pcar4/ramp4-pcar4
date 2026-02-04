import { o as x } from "./floatRGBA-6b4v8hd5.js";
import { aL as u } from "./main-CmejC-so.js";
import { o as C } from "./constants-DVpDF9P6.js";
const y = (e) => e === "vertical" || e === "horizontal" || e === "cross" || e === "esriSFSCross" || e === "esriSFSVertical" || e === "esriSFSHorizontal";
function z(e, T, d) {
  const r = T.style, l = u(Math.ceil(d)), t = y(r) ? 8 * l : 16 * l, o = 2 * l;
  e.width = t, e.height = t;
  const a = e.getContext("2d");
  a.strokeStyle = "#FFFFFF", a.lineWidth = l, a.beginPath(), r !== "vertical" && r !== "cross" && r !== "esriSFSCross" && r !== "esriSFSVertical" || (a.moveTo(t / 2, -o), a.lineTo(t / 2, t + o)), r !== "horizontal" && r !== "cross" && r !== "esriSFSCross" && r !== "esriSFSHorizontal" || (a.moveTo(-o, t / 2), a.lineTo(t + o, t / 2)), r !== "backward-diagonal" && r !== "diagonal-cross" && r !== "esriSFSDiagonalCross" && r !== "esriSFSBackwardDiagonal" || (a.moveTo(-o, -o), a.lineTo(t + o, t + o), a.moveTo(t - o, -o), a.lineTo(t + o, o), a.moveTo(-o, t - o), a.lineTo(o, t + o)), r !== "forward-diagonal" && r !== "diagonal-cross" && r !== "esriSFSForwardDiagonal" && r !== "esriSFSDiagonalCross" || (a.moveTo(t + o, -o), a.lineTo(-o, t + o), a.moveTo(o, -o), a.lineTo(-o, o), a.moveTo(t + o, t - o), a.lineTo(t - o, t + o)), a.stroke();
  const g = a.getImageData(0, 0, e.width, e.height), n = new Uint8Array(g.data);
  let h;
  for (let i = 0; i < n.length; i += 4) h = n[i + 3] / 255, n[i] = n[i] * h, n[i + 1] = n[i + 1] * h, n[i + 2] = n[i + 2] * h;
  return [n, e.width, e.height, l];
}
function b(e, T) {
  const d = T === "Butt", r = T === "Square", l = !d && !r;
  e.length % 2 == 1 && (e = [...e, ...e]);
  const t = C, o = 2 * t;
  let a = 0;
  for (const c of e) a += c;
  const g = Math.round(a * t), n = new Float32Array(g * o), h = 0.5 * t;
  let i = 0, S = 0, s = 0.5, f = !0;
  for (const c of e) {
    for (i = S, S += c * t; s <= S; ) {
      let F = 0.5;
      for (; F < o; ) {
        const w = (F - 0.5) * g + s - 0.5, m = l ? (F - t) * (F - t) : Math.abs(F - t);
        n[w] = f ? d ? Math.max(Math.max(i + h - s, m), Math.max(s - S + h, m)) : m : l ? Math.min((s - i) * (s - i) + m, (s - S) * (s - S) + m) : r ? Math.min(Math.max(s - i, m), Math.max(S - s, m)) : Math.min(Math.max(s - i + h, m), Math.max(S + h - s, m)), F++;
      }
      s++;
    }
    f = !f;
  }
  const M = n.length, v = new Uint8Array(4 * M);
  for (let c = 0; c < M; ++c) {
    const F = (l ? Math.sqrt(n[c]) : n[c]) / t;
    x(F, v, 4 * c);
  }
  return [v, g, o];
}
export {
  z as e,
  b as i
};
//# sourceMappingURL=rasterizingUtils-CO8tgVKs.js.map
