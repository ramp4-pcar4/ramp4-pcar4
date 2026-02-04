import { am as m, au as d, a2 as u, K as w, s as p } from "./main-BpIyUAdL.js";
let r = null, s = !0;
function T(e, a, t) {
  if (!e || !a) throw new Error("Cannot construct image data without dimensions");
  if (s) try {
    return new ImageData(e, a);
  } catch {
    s = !1;
  }
  return f(e, a, t);
}
function b(e, a, t, n) {
  if (!a || !t) throw new Error("Cannot construct image data without dimensions");
  if (s) try {
    return new ImageData(e, a, t);
  } catch {
    s = !1;
  }
  const i = f(a, t, n);
  return i.data.set(e, 0), i;
}
function y() {
  return r || (r = document.createElement("canvas"), r.width = 1, r.height = 1), r;
}
function f(e, a, t) {
  return t || (t = y()), t.getContext("2d").createImageData(e, a);
}
async function g(e, a) {
  const t = window.URL.createObjectURL(e);
  try {
    const { data: n } = await u(t, { ...a, responseType: "image" });
    return n;
  } catch (n) {
    throw w(n) ? n : new p("invalid-image", `Could not fetch requested image at ${t}`);
  } finally {
    window.URL.revokeObjectURL(t);
  }
}
async function B(e, a) {
  const { arrayBuffer: t, mediaType: n } = await h(e, a), i = n === "image/png";
  if (n === "image/gif") {
    const { isAnimatedGIF: o, parseGif: c } = await import("./gif-CGWon2hh.js");
    if (o(t)) return c(t, a);
  }
  if (i) {
    const { isAnimatedPNG: o, parseApng: c } = await import("./apng-Doi7eXhD.js");
    if (o(t)) return c(t, a);
  }
  return g(new Blob([t], { type: n }), a);
}
async function h(e, a) {
  const t = m(e);
  if (t?.isBase64) return { arrayBuffer: d(t.data), mediaType: t.mediaType };
  const n = await u(e, { responseType: "array-buffer", ...a });
  return { arrayBuffer: n.data, mediaType: n.getHeader?.("Content-Type") ?? "" };
}
export {
  b as c,
  B as p,
  T as s
};
//# sourceMappingURL=imageUtils-BzRxvLiF.js.map
