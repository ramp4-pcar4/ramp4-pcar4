import { m8 as Le, kK as Ae, i9 as je, m9 as qe, jH as Ye, K as Ge } from "./main-CmejC-so.js";
import { E as _e, I as ae } from "./enums-qHpGJ28Q.js";
import { h as L, s as be, o as oe, r as se, f as $e, a as Ve, e as ke, i as Ze, c as Y, p as ye, d as Je, g as Qe, _ as Xe } from "./GeometryUtils-mfkSTBWd.js";
import { t as Ce } from "./Rect-DD6XS68q.js";
import { o as Ee } from "./config-nuMERBvb.js";
import { l as ie, m as k, o as Se, n as Pe, p as et, u as we, a as ee } from "./StyleDefinition-CKpkeT8Q.js";
import { a as tt, c as st, C as it, i as rt } from "./TurboLine-DZ9BiFT0.js";
import { s as nt, e as at } from "./SourceLayerData-eTEpi_N_.js";
import { t as v, U as ot, O as lt, l as ht } from "./StyleRepository-CubvGXaF.js";
import { i as ve } from "./earcut-ubBpnWX8.js";
function ct(u) {
  return u === 746 || u === 747 || !(u < 4352) && (u >= 12704 && u <= 12735 || u >= 12544 && u <= 12591 || u >= 65072 && u <= 65103 && !(u >= 65097 && u <= 65103) || u >= 63744 && u <= 64255 || u >= 13056 && u <= 13311 || u >= 11904 && u <= 12031 || u >= 12736 && u <= 12783 || u >= 12288 && u <= 12351 && !(u >= 12296 && u <= 12305 || u >= 12308 && u <= 12319 || u === 12336) || u >= 13312 && u <= 19903 || u >= 19968 && u <= 40959 || u >= 12800 && u <= 13055 || u >= 12592 && u <= 12687 || u >= 43360 && u <= 43391 || u >= 55216 && u <= 55295 || u >= 4352 && u <= 4607 || u >= 44032 && u <= 55215 || u >= 12352 && u <= 12447 || u >= 12272 && u <= 12287 || u >= 12688 && u <= 12703 || u >= 12032 && u <= 12255 || u >= 12784 && u <= 12799 || u >= 12448 && u <= 12543 && u !== 12540 || u >= 65280 && u <= 65519 && !(u === 65288 || u === 65289 || u === 65293 || u >= 65306 && u <= 65310 || u === 65339 || u === 65341 || u === 65343 || u >= 65371 && u <= 65503 || u === 65507 || u >= 65512 && u <= 65519) || u >= 65104 && u <= 65135 && !(u >= 65112 && u <= 65118 || u >= 65123 && u <= 65126) || u >= 5120 && u <= 5759 || u >= 6320 && u <= 6399 || u >= 65040 && u <= 65055 || u >= 19904 && u <= 19967 || u >= 40960 && u <= 42127 || u >= 42128 && u <= 42191);
}
function ut(u) {
  return !(u < 11904) && (u >= 12704 && u <= 12735 || u >= 12544 && u <= 12591 || u >= 65072 && u <= 65103 || u >= 63744 && u <= 64255 || u >= 13056 && u <= 13311 || u >= 11904 && u <= 12031 || u >= 12736 && u <= 12783 || u >= 12288 && u <= 12351 || u >= 13312 && u <= 19903 || u >= 19968 && u <= 40959 || u >= 12800 && u <= 13055 || u >= 65280 && u <= 65519 || u >= 12352 && u <= 12447 || u >= 12272 && u <= 12287 || u >= 12032 && u <= 12255 || u >= 12784 && u <= 12799 || u >= 12448 && u <= 12543 || u >= 65040 && u <= 65055 || u >= 42128 && u <= 42191 || u >= 40960 && u <= 42127);
}
function ft(u) {
  switch (u) {
    case 10:
    case 32:
    case 38:
    case 40:
    case 41:
    case 43:
    case 45:
    case 47:
    case 173:
    case 183:
    case 8203:
    case 8208:
    case 8211:
    case 8231:
      return !0;
  }
  return !1;
}
function Oe(u) {
  switch (u) {
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 32:
      return !0;
  }
  return !1;
}
const H = 24, He = 17;
let Ke = class {
  constructor(t, e, i, s, n, a, r) {
    this._glyphItems = t, this._maxWidth = e, this._lineHeight = i, this._letterSpacing = s, this._hAnchor = n, this._vAnchor = a, this._justify = r;
  }
  getShaping(t, e, i) {
    const s = this._letterSpacing, n = this._lineHeight, a = this._justify, r = this._maxWidth, o = [];
    let l = 0, h = 0;
    for (const g of t) {
      const I = g.codePointAt(0);
      if (I == null) continue;
      const w = i && ct(I);
      let _;
      for (const P of this._glyphItems) if (_ = P[I], _) break;
      o.push({ codePoint: I, x: l, y: h, vertical: w, glyphMosaicItem: _ }), _ && (l += _.metrics.advance + s);
    }
    let f = l;
    r > 0 && (f = l / Math.max(1, Math.ceil(l / r)));
    const d = t.includes("​"), c = [], y = o.length;
    for (let g = 0; g < y - 1; g++) {
      const I = o[g].codePoint, w = ut(I);
      if (ft(I) || w) {
        let _ = 0;
        if (I === 10) _ -= 1e4;
        else if (w && d) _ += 150;
        else {
          I !== 40 && I !== 65288 || (_ += 50);
          const P = o[g + 1].codePoint;
          P !== 41 && P !== 65289 || (_ += 50);
        }
        c.push(this._buildBreak(g + 1, o[g].x, f, c, _, !1));
      }
    }
    const p = this._optimalBreaks(this._buildBreak(y, l, f, c, 0, !0));
    let M = 0;
    const x = e ? -n : n;
    let m = 0;
    for (let g = 0; g < p.length; g++) {
      const I = p[g];
      let w = m;
      for (; w < I && Oe(o[w].codePoint); ) o[w].glyphMosaicItem = null, ++w;
      let _ = I - 1;
      for (; _ > w && Oe(o[_].codePoint); ) o[_].glyphMosaicItem = null, --_;
      if (w <= _) {
        const P = o[w].x;
        for (let T = w; T <= _; T++) o[T].x -= P, o[T].y = h;
        let D = o[_].x;
        o[_].glyphMosaicItem && (D += o[_].glyphMosaicItem.metrics.advance), M = Math.max(D, M), a && this._applyJustification(o, w, _);
      }
      m = I, h += x;
    }
    if (o.length > 0) {
      const g = p.length - 1, I = (a - this._hAnchor) * M;
      let w = (-this._vAnchor * (g + 1) + 0.5) * n;
      e && g && (w += g * n);
      for (const _ of o) _.x += I, _.y += w;
    }
    return o.filter((g) => g.glyphMosaicItem);
  }
  static getTextBox(t, e) {
    if (!t.length) return null;
    let i = 1 / 0, s = 1 / 0, n = 0, a = 0;
    for (const r of t) {
      const o = r.glyphMosaicItem.metrics.advance, l = r.x, h = r.y - He, f = l + o, d = h + e;
      i = Math.min(i, l), n = Math.max(n, f), s = Math.min(s, h), a = Math.max(a, d);
    }
    return { x: i, y: s, width: n - i, height: a - s };
  }
  static getBox(t) {
    if (!t.length) return null;
    let e = 1 / 0, i = 1 / 0, s = 0, n = 0;
    for (const a of t) {
      const { height: r, left: o, top: l, width: h } = a.glyphMosaicItem.metrics, f = a.x, d = a.y - (r - Math.abs(l)), c = f + h + o, y = d + r;
      e = Math.min(e, f), s = Math.max(s, c), i = Math.min(i, d), n = Math.max(n, y);
    }
    return { x: e, y: i, width: s - e, height: n - i };
  }
  static addDecoration(t, e) {
    const i = t.length;
    if (i === 0) return;
    const s = 3;
    let n = t[0].x + t[0].glyphMosaicItem.metrics.left, a = t[0].y;
    for (let o = 1; o < i; o++) {
      const l = t[o];
      if (l.y !== a) {
        const h = t[o - 1].x + t[o - 1].glyphMosaicItem.metrics.left + t[o - 1].glyphMosaicItem.metrics.width;
        t.push({ codePoint: 0, x: n, y: a + e - s, vertical: !1, glyphMosaicItem: { sdf: !0, rect: new Ce(4, 0, 4, 8), metrics: { width: h - n, height: 2 + 2 * s, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } }), a = l.y, n = l.x + l.glyphMosaicItem.metrics.left;
      }
    }
    const r = t[i - 1].x + t[i - 1].glyphMosaicItem.metrics.left + t[i - 1].glyphMosaicItem.metrics.width;
    t.push({ codePoint: 0, x: n, y: a + e - s, vertical: !1, glyphMosaicItem: { sdf: !0, rect: new Ce(4, 0, 4, 8), metrics: { width: r - n, height: 2 + 2 * s, left: 0, top: 0, advance: 0 }, page: 0, code: 0 } });
  }
  _breakScore(t, e, i, s) {
    const n = (t - e) * (t - e);
    return s ? t < e ? n / 2 : 2 * n : n + Math.abs(i) * i;
  }
  _buildBreak(t, e, i, s, n, a) {
    let r = null, o = this._breakScore(e, i, n, a);
    for (const l of s) {
      const h = e - l.x, f = this._breakScore(h, i, n, a) + l.score;
      f <= o && (r = l, o = f);
    }
    return { index: t, x: e, score: o, previousBreak: r };
  }
  _optimalBreaks(t) {
    return t ? this._optimalBreaks(t.previousBreak).concat(t.index) : [];
  }
  _applyJustification(t, e, i) {
    const s = t[i], n = s.vertical ? H : s.glyphMosaicItem ? s.glyphMosaicItem.metrics.advance : 0, a = (s.x + n) * this._justify;
    for (let r = e; r <= i; r++) t[r].x -= a;
  }
};
const Re = 4096, le = 8, X = 0.5, Te = 2;
class ge {
  constructor(t, e, i = 0, s = -1, n = X) {
    this.x = t, this.y = e, this.angle = i, this.segment = s, this.minzoom = n;
  }
}
class pe {
  constructor(t, e, i, s, n, a = X, r = se) {
    this.anchor = t, this.labelAngle = e, this.glyphAngle = i, this.page = s, this.alternateVerticalGlyph = n, this.minzoom = a, this.maxzoom = r;
  }
}
let Fe = class {
  constructor(t, e, i, s, n, a, r, o, l, h, f, d) {
    this.tl = t, this.tr = e, this.bl = i, this.br = s, this.mosaicRect = n, this.labelAngle = a, this.minAngle = r, this.maxAngle = o, this.anchor = l, this.minzoom = h, this.maxzoom = f, this.page = d;
  }
}, ze = class {
  constructor(t) {
    this.shapes = t;
  }
}, dt = class {
  getIconPlacement(t, e, i) {
    const s = new L(t.x, t.y), n = i.rotationAlignment === ie.MAP, a = i.keepUpright;
    let r = i.rotate * be;
    n && (r += t.angle);
    const o = new ze([]);
    return i.allowOverlap && i.ignorePlacement || !Ee || (o.iconColliders = []), this._addIconPlacement(o, s, e, i, r), n && a && this._addIconPlacement(o, s, e, i, r + oe), o;
  }
  _addIconPlacement(t, e, i, s, n) {
    const a = i.rasterizationScale, r = i.width / a, o = i.height / a, l = s.offset;
    let h = l[0], f = l[1];
    switch (s.anchor) {
      case k.CENTER:
        h -= r / 2, f -= o / 2;
        break;
      case k.LEFT:
        f -= o / 2;
        break;
      case k.RIGHT:
        h -= r, f -= o / 2;
        break;
      case k.TOP:
        h -= r / 2;
        break;
      case k.BOTTOM:
        h -= r / 2, f -= o;
        break;
      case k.TOP_LEFT:
        break;
      case k.BOTTOM_LEFT:
        f -= o;
        break;
      case k.TOP_RIGHT:
        h -= r;
        break;
      case k.BOTTOM_RIGHT:
        h -= r, f -= o;
    }
    const d = i.rect, c = 2 / a, y = h - c, p = f - c, M = y + d.width / a, x = p + d.height / a, m = new L(y, p), g = new L(M, x), I = new L(y, x), w = new L(M, p);
    if (n !== 0) {
      const P = Math.cos(n), D = Math.sin(n);
      m.rotate(P, D), g.rotate(P, D), I.rotate(P, D), w.rotate(P, D);
    }
    const _ = new Fe(m, w, I, g, d, n, 0, 256, e, X, se, 0);
    if (t.shapes.push(_), (!s.allowOverlap || !s.ignorePlacement) && Ee) {
      const P = s.size, D = s.padding, T = { xTile: e.x, yTile: e.y, dxPixels: h * P - D, dyPixels: f * P - D, hard: !s.optional, partIndex: 0, width: r * P + 2 * D, height: o * P + 2 * D, angle: n, minLod: X, maxLod: se };
      t.iconColliders.push(T);
    }
  }
  getTextPlacement(t, e, i, s) {
    const n = new L(t.x, t.y), a = s.rotate * be, r = s.rotationAlignment === ie.MAP, o = s.keepUpright, l = s.padding;
    let h = X;
    const f = r ? t.angle : 0, d = t.segment >= 0 && r, c = s.allowOverlap && s.ignorePlacement ? null : [], y = [], p = 4, M = !d;
    let x = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, g = x, I = m;
    const w = (d || r) && o, _ = s.size / H;
    let P = !1;
    for (const b of e) if (b.vertical) {
      P = !0;
      break;
    }
    let D, T = 0, B = 0;
    if (!d && P) {
      const b = Ke.getTextBox(e, s.lineHeight * H);
      switch (s.anchor) {
        case k.LEFT:
          T = b.height / 2, B = -b.width / 2;
          break;
        case k.RIGHT:
          T = -b.height / 2, B = b.width / 2;
          break;
        case k.TOP:
          T = b.height / 2, B = b.width / 2;
          break;
        case k.BOTTOM:
          T = -b.height / 2, B = -b.width / 2;
          break;
        case k.TOP_LEFT:
          T = b.height;
          break;
        case k.BOTTOM_LEFT:
          B = -b.width;
          break;
        case k.TOP_RIGHT:
          B = b.width;
          break;
        case k.BOTTOM_RIGHT:
          T = -b.height;
      }
    }
    T += s.offset[0] * H, B += s.offset[1] * H;
    for (const b of e) {
      const E = b.glyphMosaicItem;
      if (!E || E.rect.isEmpty) continue;
      const V = E.rect, C = E.metrics, O = E.page;
      if (c && M) {
        if (D !== void 0 && D !== b.y) {
          let S, F, G, $;
          P ? (S = -I + T, F = x + B, G = I - g, $ = m - x) : (S = x + T, F = g + B, G = m - x, $ = I - g);
          const j = { xTile: t.x, yTile: t.y, dxPixels: S * _ - l, dyPixels: F * _ - l, hard: !s.optional, partIndex: 1, width: G * _ + 2 * l, height: $ * _ + 2 * l, angle: a, minLod: X, maxLod: se };
          c.push(j), x = Number.POSITIVE_INFINITY, m = Number.NEGATIVE_INFINITY, g = x, I = m;
        }
        D = b.y;
      }
      const Z = [];
      if (d) {
        const S = 0.5 * E.metrics.width, F = (b.x + C.left - p + S) * _ * le;
        if (h = this._placeGlyph(t, h, F, i, t.segment, 1, b.vertical, O, Z), o && (h = this._placeGlyph(t, h, F, i, t.segment, -1, b.vertical, O, Z)), h >= Te) break;
      } else Z.push(new pe(n, f, f, O, !1)), r && o && Z.push(new pe(n, f + oe, f + oe, O, !1));
      const N = b.x + C.left, W = b.y - He - C.top, J = N + C.width, Ie = W + C.height;
      let R, U, he, ce, Q, ue, De, Be;
      if (!d && P) if (b.vertical) {
        const S = (N + J) / 2 - C.height / 2, F = (W + Ie) / 2 + C.width / 2;
        R = new L(-F - p + T, S - p + B), U = new L(R.x + V.width, R.y + V.height), he = new L(R.x, U.y), ce = new L(U.x, R.y);
      } else R = new L(-W + p + T, N - p + B), U = new L(R.x - V.height, R.y + V.width), he = new L(U.x, R.y), ce = new L(R.x, U.y);
      else R = new L(N - p + T, W - p + B), U = new L(R.x + V.width, R.y + V.height), he = new L(R.x, U.y), ce = new L(U.x, R.y);
      for (const S of Z) {
        let F, G, $, j;
        if (S.alternateVerticalGlyph) {
          if (!Q) {
            const q = (W + Ie) / 2 + B;
            Q = new L((N + J) / 2 + T - C.height / 2 - p, q + C.width / 2 + p), ue = new L(Q.x + V.height, Q.y - V.width), De = new L(ue.x, Q.y), Be = new L(Q.x, ue.y);
          }
          F = Q, G = De, $ = Be, j = ue;
        } else F = R, G = he, $ = ce, j = U;
        const fe = W, Me = Ie, de = S.glyphAngle + a;
        if (de !== 0) {
          const q = Math.cos(de), xe = Math.sin(de);
          F = F.clone(), G = G?.clone(), $ = $?.clone(), j = j?.clone(), F.rotate(q, xe), j?.rotate(q, xe), G?.rotate(q, xe), $?.rotate(q, xe);
        }
        let re = 0, ne = 256;
        if (d && P ? b.vertical ? S.alternateVerticalGlyph ? (re = 32, ne = 96) : (re = 224, ne = 32) : (re = 224, ne = 96) : (re = 192, ne = 64), y.push(new Fe(F, $, G, j, V, S.labelAngle, re, ne, S.anchor, S.minzoom, S.maxzoom, S.page)), c && (!w || this._legible(S.labelAngle))) {
          if (M) N < x && (x = N), fe < g && (g = fe), J > m && (m = J), Me > I && (I = Me);
          else if (S.minzoom < Te) {
            const q = { xTile: t.x, yTile: t.y, dxPixels: (N + T) * _ - l, dyPixels: (fe + T) * _ - l, hard: !s.optional, partIndex: 1, width: (J - N) * _ + 2 * l, height: (Me - fe) * _ + 2 * l, angle: de, minLod: S.minzoom, maxLod: S.maxzoom };
            c.push(q);
          }
        }
      }
    }
    if (h >= Te) return null;
    if (c && M) {
      let b, E, V, C;
      P ? (b = -I + T, E = x + B, V = I - g, C = m - x) : (b = x + T, E = g + B, V = m - x, C = I - g);
      const O = { xTile: t.x, yTile: t.y, dxPixels: b * _ - l, dyPixels: E * _ - l, hard: !s.optional, partIndex: 1, width: V * _ + 2 * l, height: C * _ + 2 * l, angle: a, minLod: X, maxLod: se };
      c.push(O);
    }
    const A = new ze(y);
    return c && c.length > 0 && (A.textColliders = c), A;
  }
  _legible(t) {
    const e = $e(t);
    return e < 65 || e >= 193;
  }
  _placeGlyph(t, e, i, s, n, a, r, o, l) {
    let h = a;
    const f = h < 0 ? Ve(t.angle + oe, ke) : t.angle;
    let d = 0;
    i < 0 && (h *= -1, i *= -1, d = oe), h > 0 && ++n;
    let c = new L(t.x, t.y), y = s[n], p = se;
    if (s.length <= n) return p;
    for (; ; ) {
      const M = y.x - c.x, x = y.y - c.y, m = Math.sqrt(M * M + x * x), g = Math.max(i / m, e), I = M / m, w = x / m, _ = Ve(Math.atan2(w, I) + d, ke);
      if (l.push(new pe(c, f, _, o, !1, g, p)), r && l.push(new pe(c, f, _, o, !0, g, p)), g <= e) return g;
      c = y.clone();
      do {
        if (n += h, s.length <= n || n < 0) return g;
        y = s[n];
      } while (c.isEqual(y));
      let P = y.x - c.x, D = y.y - c.y;
      const T = Math.sqrt(P * P + D * D);
      P *= m / T, D *= m / T, c.x -= P, c.y -= D, p = g;
    }
  }
}, te = class extends v {
  constructor() {
    super(12);
  }
  add(t, e, i) {
    const s = this.array;
    s.push(t), s.push(e), s.push(i);
  }
}, xt = class extends v {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, n, a, r, o, l, h, f, d) {
    const c = this.array;
    let y = v.i1616to32(t, e);
    c.push(y);
    const p = 31;
    y = v.i8888to32(Math.round(p * i), Math.round(p * s), Math.round(p * n), Math.round(p * a)), c.push(y), y = v.i8888to32(Math.round(p * r), Math.round(p * o), Math.round(p * l), Math.round(p * h)), c.push(y), y = v.i1616to32(f, 0), c.push(y), d && c.push(...d);
  }
}, yt = class extends v {
  constructor(t) {
    super(t);
  }
  add(t, e, i) {
    const s = this.array;
    s.push(v.i1616to32(t, e)), i && s.push(...i);
  }
};
class gt extends v {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, n, a, r) {
    const o = this.array, l = this.index;
    let h = v.i1616to32(t, e);
    o.push(h);
    const f = 15;
    return h = v.i8888to32(Math.round(f * i), Math.round(f * s), n, a), o.push(h), r && o.push(...r), l;
  }
}
class Ne extends v {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, n, a, r, o, l, h, f, d) {
    const c = this.array;
    let y = v.i1616to32(t, e);
    c.push(y), y = v.i1616to32(Math.round(8 * i), Math.round(8 * s)), c.push(y), y = v.i8888to32(n / 4, a / 4, o, l), c.push(y), y = v.i8888to32(0, $e(r), 10 * h, Math.min(10 * f, 255)), c.push(y), d && c.push(...d);
  }
}
class pt extends v {
  constructor(t) {
    super(t);
  }
  add(t, e, i, s, n) {
    const a = this.array, r = v.i1616to32(2 * t + i, 2 * e + s);
    a.push(r), n && a.push(...n);
  }
}
class me {
  constructor(t, e, i) {
    this.layerExtent = 4096, this._features = [], this.layer = t, this.zoom = e, this._spriteInfo = i, this._filter = t.getFeatureFilter();
  }
  pushFeature(t) {
    this._filter && !this._filter.filter(t, this.zoom) || this._features.push(t);
  }
  hasFeatures() {
    return this._features.length > 0;
  }
  getResources(t, e, i) {
  }
}
let _t = class extends me {
  constructor(t, e, i, s, n) {
    super(t, e, i), this.type = _e.CIRCLE, this._circleVertexBuffer = s, this._circleIndexBuffer = n;
  }
  get circleIndexStart() {
    return this._circleIndexStart;
  }
  get circleIndexCount() {
    return this._circleIndexCount;
  }
  processFeatures(t) {
    const e = this._circleVertexBuffer, i = this._circleIndexBuffer;
    this._circleIndexStart = 3 * i.index, this._circleIndexCount = 0;
    const s = this.layer, n = this.zoom;
    t && t.setExtent(this.layerExtent);
    for (const a of this._features) {
      const r = a.getGeometry(t);
      if (!r) continue;
      const o = s.circleMaterial.encodeAttributes(a, n, s);
      for (const l of r) if (l) for (const h of l) {
        const f = e.index;
        e.add(h.x, h.y, 0, 0, o), e.add(h.x, h.y, 0, 1, o), e.add(h.x, h.y, 1, 0, o), e.add(h.x, h.y, 1, 1, o), i.add(f, f + 1, f + 2), i.add(f + 1, f + 2, f + 3), this._circleIndexCount += 6;
      }
    }
  }
  serialize() {
    let t = 6;
    t += this.layerUIDs.length, t += this._circleVertexBuffer.array.length, t += this._circleIndexBuffer.array.length;
    const e = new Uint32Array(t), i = new Int32Array(e.buffer);
    let s = 0;
    e[s++] = this.type, e[s++] = this.layerUIDs.length;
    for (let n = 0; n < this.layerUIDs.length; n++) e[s++] = this.layerUIDs[n];
    e[s++] = this._circleIndexStart, e[s++] = this._circleIndexCount, e[s++] = this._circleVertexBuffer.array.length;
    for (let n = 0; n < this._circleVertexBuffer.array.length; n++) i[s++] = this._circleVertexBuffer.array[n];
    e[s++] = this._circleIndexBuffer.array.length;
    for (let n = 0; n < this._circleIndexBuffer.array.length; n++) e[s++] = this._circleIndexBuffer.array[n];
    return e.buffer;
  }
}, mt = class We extends me {
  constructor(t, e, i, s, n, a, r) {
    super(t, e, i), this.type = _e.FILL, this._patternMap = /* @__PURE__ */ new Map(), this._fillVertexBuffer = s, this._fillIndexBuffer = n, this._outlineVertexBuffer = a, this._outlineIndexBuffer = r;
  }
  get fillIndexStart() {
    return this._fillIndexStart;
  }
  get fillIndexCount() {
    return this._fillIndexCount;
  }
  get outlineIndexStart() {
    return this._outlineIndexStart;
  }
  get outlineIndexCount() {
    return this._outlineIndexCount;
  }
  getResources(t, e, i) {
    const s = this.layer, n = this.zoom, a = s.getPaintProperty("fill-pattern");
    if (a) if (a.isDataDriven) for (const r of this._features) e(a.getValue(n, r), !0);
    else e(a.getValue(n), !0);
  }
  processFeatures(t) {
    this._fillIndexStart = 3 * this._fillIndexBuffer.index, this._fillIndexCount = 0, this._outlineIndexStart = 3 * this._outlineIndexBuffer.index, this._outlineIndexCount = 0;
    const e = this.layer, i = this.zoom, { fillMaterial: s, outlineMaterial: n, hasDataDrivenFill: a, hasDataDrivenOutline: r } = e;
    t && t.setExtent(this.layerExtent);
    const o = e.getPaintProperty("fill-pattern"), l = o?.isDataDriven;
    let h = !o && e.getPaintValue("fill-antialias", i);
    if (e.outlineUsesFillColor) {
      if (h && !e.hasDataDrivenOpacity) {
        const c = e.getPaintValue("fill-opacity", i), y = e.getPaintValue("fill-opacity", i + 1);
        c < 1 && y < 1 && (h = !1);
      }
      if (h && !e.hasDataDrivenColor) {
        const c = e.getPaintValue("fill-color", i), y = e.getPaintValue("fill-color", i + 1);
        c[3] < 1 && y[3] < 1 && (h = !1);
      }
    }
    const f = this._features, d = t?.validateTessellation;
    if (l) {
      const c = [];
      for (const y of f) {
        const p = o.getValue(i, y), M = this._spriteInfo[p];
        if (!M?.rect) continue;
        const x = s.encodeAttributes(y, i, e, M), m = h && r ? n.encodeAttributes(y, i, e) : [], g = y.getGeometry(t);
        c.push({ ddFillAttributes: x, ddOutlineAttributes: m, page: M.page, geometry: g }), c.sort((I, w) => I.page - w.page);
        for (const { ddFillAttributes: I, ddOutlineAttributes: w, page: _, geometry: P } of c) this._processFeature(P, h, e.outlineUsesFillColor, I, w, d, _);
      }
    } else for (const c of f) {
      const y = a ? s.encodeAttributes(c, i, e) : null, p = h && r ? n.encodeAttributes(c, i, e) : null, M = c.getGeometry(t);
      this._processFeature(M, h, e.outlineUsesFillColor, y, p, d);
    }
  }
  serialize() {
    let t = 10;
    t += this.layerUIDs.length, t += this._fillVertexBuffer.array.length, t += this._fillIndexBuffer.array.length, t += this._outlineVertexBuffer.array.length, t += this._outlineIndexBuffer.array.length, t += 3 * this._patternMap.size + 1;
    const e = new Uint32Array(t), i = new Int32Array(e.buffer);
    let s = 0;
    e[s++] = this.type, e[s++] = this.layerUIDs.length;
    for (let r = 0; r < this.layerUIDs.length; r++) e[s++] = this.layerUIDs[r];
    e[s++] = this._fillIndexStart, e[s++] = this._fillIndexCount, e[s++] = this._outlineIndexStart, e[s++] = this._outlineIndexCount;
    const n = this._patternMap, a = n.size;
    if (e[s++] = a, a > 0) for (const [r, [o, l]] of n) e[s++] = r, e[s++] = o, e[s++] = l;
    e[s++] = this._fillVertexBuffer.array.length;
    for (let r = 0; r < this._fillVertexBuffer.array.length; r++) i[s++] = this._fillVertexBuffer.array[r];
    e[s++] = this._fillIndexBuffer.array.length;
    for (let r = 0; r < this._fillIndexBuffer.array.length; r++) e[s++] = this._fillIndexBuffer.array[r];
    e[s++] = this._outlineVertexBuffer.array.length;
    for (let r = 0; r < this._outlineVertexBuffer.array.length; r++) i[s++] = this._outlineVertexBuffer.array[r];
    e[s++] = this._outlineIndexBuffer.array.length;
    for (let r = 0; r < this._outlineIndexBuffer.array.length; r++) e[s++] = this._outlineIndexBuffer.array[r];
    return e.buffer;
  }
  _processFeature(t, e, i, s, n, a, r) {
    if (!t) return;
    const o = t.length, l = !n || n.length === 0;
    if (e && (!i || l)) for (let d = 0; d < o; d++) this._processOutline(t[d], n);
    const h = 32;
    let f;
    for (let d = 0; d < o; d++) {
      const c = We._area(t[d]);
      c > h ? (f !== void 0 && this._processFill(t, f, s, a, r), f = [d]) : c < -h && f !== void 0 && f.push(d);
    }
    f !== void 0 && this._processFill(t, f, s, a, r);
  }
  _processOutline(t, e) {
    const i = this._outlineVertexBuffer, s = this._outlineIndexBuffer, n = s.index;
    let a, r, o;
    const l = new L(0, 0), h = new L(0, 0), f = new L(0, 0);
    let d = -1, c = -1, y = -1, p = -1, M = -1, x = !1;
    const m = 0;
    let g = t.length;
    if (g < 2) return;
    const I = t[m];
    let w = t[g - 1];
    for (; g && w.isEqual(I); ) --g, w = t[g - 1];
    if (!(g - m < 2)) {
      for (let _ = m; _ < g; ++_) {
        _ === m ? (a = t[g - 1], r = t[m], o = t[m + 1], l.assignSub(r, a), l.normalize(), l.rightPerpendicular()) : (a = r, r = o, o = _ !== g - 1 ? t[_ + 1] : t[m], l.assign(h));
        const P = this._isClipEdge(a, r);
        p === -1 && (x = P), h.assignSub(o, r), h.normalize(), h.rightPerpendicular();
        const D = l.x * h.y - l.y * h.x;
        f.assignAdd(l, h), f.normalize();
        const T = -f.x * -l.x + -f.y * -l.y;
        let B = Math.abs(T !== 0 ? 1 / T : 1);
        B > 8 && (B = 8), D >= 0 ? (y = i.add(r.x, r.y, l.x, l.y, 0, 1, e), p === -1 && (p = y), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), c = i.add(r.x, r.y, B * -f.x, B * -f.y, 0, -1, e), M === -1 && (M = c), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), d = c, c = y, y = i.add(r.x, r.y, f.x, f.y, 0, 1, e), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), c = i.add(r.x, r.y, h.x, h.y, 0, 1, e), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y)) : (y = i.add(r.x, r.y, B * f.x, B * f.y, 0, 1, e), p === -1 && (p = y), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), c = i.add(r.x, r.y, -l.x, -l.y, 0, -1, e), M === -1 && (M = c), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), d = c, c = y, y = i.add(r.x, r.y, -f.x, -f.y, 0, -1, e), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y), d = i.add(r.x, r.y, -h.x, -h.y, 0, -1, e), d >= 0 && c >= 0 && y >= 0 && !P && s.add(d, c, y));
      }
      d >= 0 && c >= 0 && p >= 0 && !x && s.add(d, c, p), d >= 0 && p >= 0 && M >= 0 && !x && s.add(d, M, p), this._outlineIndexCount += 3 * (s.index - n);
    }
  }
  _processFill(t, e, i, s, n) {
    s = !0;
    let a;
    e.length > 1 && (a = []);
    let r = 0;
    for (const f of e) r !== 0 && a.push(r), r += t[f].length;
    const o = 2 * r, l = Le.acquire();
    for (const f of e) {
      const d = t[f], c = d.length;
      for (let y = 0; y < c; ++y) l.push(d[y].x, d[y].y);
    }
    const h = ve(l, a, 2);
    if (s && ve.deviation(l, a, 2, h) > 0) {
      const f = e.map((y) => t[y].length), { buffer: d, vertexCount: c } = tt(l, f);
      if (c > 0) {
        const y = this._fillVertexBuffer.index;
        for (let p = 0; p < c; p++) this._fillVertexBuffer.add(d[2 * p], d[2 * p + 1], i);
        for (let p = 0; p < c; p += 3) {
          const M = y + p;
          this._fillIndexBuffer.add(M, M + 1, M + 2);
        }
        if (n !== void 0) {
          const p = this._patternMap, M = p.get(n);
          M ? M[1] += c : p.set(n, [this._fillIndexStart + this._fillIndexCount, c]);
        }
        this._fillIndexCount += c;
      }
    } else {
      const f = h.length;
      if (f > 0) {
        const d = this._fillVertexBuffer.index;
        let c = 0;
        for (; c < o; ) this._fillVertexBuffer.add(l[c++], l[c++], i);
        let y = 0;
        for (; y < f; ) this._fillIndexBuffer.add(d + h[y++], d + h[y++], d + h[y++]);
        if (n !== void 0) {
          const p = this._patternMap, M = p.get(n);
          M ? M[1] += f : p.set(n, [this._fillIndexStart + this._fillIndexCount, f]);
        }
        this._fillIndexCount += f;
      }
    }
    Le.release(l);
  }
  _isClipEdge(t, e) {
    return t.x === e.x ? t.x <= -64 || t.x >= 4160 : t.y === e.y && (t.y <= -64 || t.y >= 4160);
  }
  static _area(t) {
    let e = 0;
    const i = t.length - 1;
    for (let s = 0; s < i; s++) e += (t[s].x - t[s + 1].x) * (t[s].y + t[s + 1].y);
    return e += (t[i].x - t[0].x) * (t[i].y + t[0].y), 0.5 * e;
  }
};
const It = 65535;
class Mt extends me {
  constructor(t, e, i, s, n) {
    super(t, e, i), this.type = _e.LINE, this._tessellationOptions = { pixelCoordRatio: 8, halfWidth: 0, offset: 0 }, this._patternMap = /* @__PURE__ */ new Map(), this.tessellationProperties = { _lineVertexBuffer: null, _lineIndexBuffer: null, _ddValues: null }, this.tessellationProperties._lineVertexBuffer = s, this.tessellationProperties._lineIndexBuffer = n, this._lineTessellator = new st(Pt(this.tessellationProperties), wt(this.tessellationProperties), t.canUseThinTessellation);
  }
  get lineIndexStart() {
    return this._lineIndexStart;
  }
  get lineIndexCount() {
    return this._lineIndexCount;
  }
  getResources(t, e, i) {
    const s = this.layer, n = this.zoom, a = s.getPaintProperty("line-pattern"), r = s.getPaintProperty("line-dasharray"), o = s.getLayoutProperty("line-cap");
    if (!a && !r) return;
    const l = o?.getValue(n) || 0, h = o?.isDataDriven, f = a?.isDataDriven, d = r?.isDataDriven;
    if (f || d) for (const c of this._features) e(f ? a.getValue(n, c) : this._getDashArrayKey(c, n, s, r, h, o, l));
    else if (a) e(a.getValue(n));
    else if (r) {
      const c = r.getValue(n);
      e(s.getDashKey(c, l));
    }
  }
  processFeatures(t) {
    this._lineIndexStart = 3 * this.tessellationProperties._lineIndexBuffer.index, this._lineIndexCount = 0;
    const e = this.layer, i = this.zoom, s = this._features, n = this._tessellationOptions, { hasDataDrivenLine: a, lineMaterial: r } = e;
    t && t.setExtent(this.layerExtent);
    const o = e.getPaintProperty("line-pattern"), l = e.getPaintProperty("line-dasharray"), h = o?.isDataDriven, f = l?.isDataDriven;
    let d;
    d = e.getLayoutProperty("line-cap");
    const c = d?.isDataDriven ? d : null, y = c ? null : e.getLayoutValue("line-cap", i), p = y || 0, M = !!c;
    d = e.getLayoutProperty("line-join");
    const x = d?.isDataDriven ? d : null, m = x ? null : e.getLayoutValue("line-join", i);
    d = e.getLayoutProperty("line-miter-limit");
    const g = d?.isDataDriven ? d : null, I = g ? null : e.getLayoutValue("line-miter-limit", i);
    d = e.getLayoutProperty("line-round-limit");
    const w = d?.isDataDriven ? d : null, _ = w ? null : e.getLayoutValue("line-round-limit", i);
    d = e.getPaintProperty("line-width");
    const P = d?.isDataDriven ? d : null, D = P ? null : e.getPaintValue("line-width", i);
    d = e.getPaintProperty("line-offset");
    const T = d?.isDataDriven ? d : null, B = T ? null : e.getPaintValue("line-offset", i);
    if (h || f) {
      const A = [];
      for (const b of s) {
        const E = h ? o.getValue(i, b) : this._getDashArrayKey(b, i, e, l, M, c, p), V = this._spriteInfo[E];
        if (!V?.rect) continue;
        const C = r.encodeAttributes(b, i, e, V), O = b.getGeometry(t);
        A.push({ ddAttributes: C, page: V.page, cap: c ? c.getValue(i, b) : y, join: x ? x.getValue(i, b) : m, miterLimit: g ? g.getValue(i, b) : I, roundLimit: w ? w.getValue(i, b) : _, halfWidth: 0.5 * (P ? P.getValue(i, b) : D), offset: T ? T.getValue(i, b) : B, geometry: O });
      }
      A.sort((b, E) => b.page - E.page), n.textured = !0;
      for (const { ddAttributes: b, page: E, cap: V, join: C, miterLimit: O, roundLimit: Z, halfWidth: N, offset: W, geometry: J } of A) n.capType = V, n.joinType = C, n.miterLimit = O, n.roundLimit = Z, n.halfWidth = N, n.offset = W, this._processFeature(J, b, E);
    } else {
      if (o) {
        const A = o.getValue(i);
        if (!this._spriteInfo[A]?.rect) return;
      }
      n.textured = !(!o && !l), n.capType = y, n.joinType = m, n.miterLimit = I, n.roundLimit = _, n.halfWidth = 0.5 * D, n.offset = B;
      for (const A of s) {
        const b = a ? r.encodeAttributes(A, i, e) : null;
        c && (n.capType = c.getValue(i, A)), x && (n.joinType = x.getValue(i, A)), g && (n.miterLimit = g.getValue(i, A)), w && (n.roundLimit = w.getValue(i, A)), P && (n.halfWidth = 0.5 * P.getValue(i, A)), T && (n.offset = T.getValue(i, A));
        const E = A.getGeometry(t);
        this._processFeature(E, b);
      }
    }
  }
  serialize() {
    let t = 6;
    t += this.layerUIDs.length, t += this.tessellationProperties._lineVertexBuffer.array.length, t += this.tessellationProperties._lineIndexBuffer.array.length, t += 3 * this._patternMap.size + 1;
    const e = new Uint32Array(t), i = new Int32Array(e.buffer);
    let s = 0;
    e[s++] = this.type, e[s++] = this.layerUIDs.length;
    for (let r = 0; r < this.layerUIDs.length; r++) e[s++] = this.layerUIDs[r];
    e[s++] = this._lineIndexStart, e[s++] = this._lineIndexCount;
    const n = this._patternMap, a = n.size;
    if (e[s++] = a, a > 0) for (const [r, [o, l]] of n) e[s++] = r, e[s++] = o, e[s++] = l;
    e[s++] = this.tessellationProperties._lineVertexBuffer.array.length;
    for (let r = 0; r < this.tessellationProperties._lineVertexBuffer.array.length; r++) i[s++] = this.tessellationProperties._lineVertexBuffer.array[r];
    e[s++] = this.tessellationProperties._lineIndexBuffer.array.length;
    for (let r = 0; r < this.tessellationProperties._lineIndexBuffer.array.length; r++) e[s++] = this.tessellationProperties._lineIndexBuffer.array[r];
    return e.buffer;
  }
  _processFeature(t, e, i) {
    if (!t) return;
    const s = t.length;
    for (let n = 0; n < s; n++) this._processGeometry(t[n], e, i);
  }
  _processGeometry(t, e, i) {
    if (t.length < 2) return;
    const s = 1e-3;
    let n, a, r = t[0], o = 1;
    for (; o < t.length; ) n = t[o].x - r.x, a = t[o].y - r.y, n * n + a * a < s * s ? t.splice(o, 1) : (r = t[o], ++o);
    if (t.length < 2) return;
    const l = this.tessellationProperties._lineIndexBuffer, h = 3 * l.index;
    this._tessellationOptions.initialDistance = 0, this._tessellationOptions.wrapDistance = It, this.tessellationProperties._ddValues = e, this._lineTessellator.tessellate(t, this._tessellationOptions);
    const f = 3 * l.index - h;
    if (i !== void 0) {
      const d = this._patternMap, c = d.get(i);
      c ? c[1] += f : d.set(i, [h + this._lineIndexCount, f]);
    }
    this._lineIndexCount += f;
  }
  _getDashArrayKey(t, e, i, s, n, a, r) {
    const o = n ? a.getValue(e, t) : r, l = s.getValue(e, t);
    return i.getDashKey(l, o);
  }
}
const Pt = (u) => (t, e, i, s, n, a, r, o, l, h, f) => (u._lineVertexBuffer.add(t, e, r, o, i, s, n, a, l, h, f, u._ddValues), u._lineVertexBuffer.index - 1), wt = (u) => (t, e, i) => {
  u._lineIndexBuffer.add(t, e, i);
}, Ue = 10;
function Tt(u, t) {
  return u.iconMosaicItem && t.iconMosaicItem ? u.iconMosaicItem.page === t.iconMosaicItem.page ? 0 : u.iconMosaicItem.page - t.iconMosaicItem.page : u.iconMosaicItem && !t.iconMosaicItem ? 1 : !u.iconMosaicItem && t.iconMosaicItem ? -1 : 0;
}
class z extends me {
  constructor(t, e, i, s, n, a, r, o, l) {
    super(e, i, l.getSpriteItems()), this.type = _e.SYMBOL, this._markerMap = /* @__PURE__ */ new Map(), this._glyphMap = /* @__PURE__ */ new Map(), this._glyphBufferDataStorage = /* @__PURE__ */ new Map(), this._isIconSDF = !1, this._sourceTileKey = t, this._iconVertexBuffer = s, this._iconIndexBuffer = n, this._textVertexBuffer = a, this._textIndexBuffer = r, this._placementEngine = o, this._workerTileHandler = l;
  }
  get markerPageMap() {
    return this._markerMap;
  }
  get glyphsPageMap() {
    return this._glyphMap;
  }
  get symbolInstances() {
    return this._symbolInstances;
  }
  getResources(t, e, i) {
    const s = this.layer, n = this.zoom;
    t && t.setExtent(this.layerExtent);
    const a = s.getLayoutProperty("icon-image"), r = s.getLayoutProperty("text-field");
    let o = s.getLayoutProperty("text-transform"), l = s.getLayoutProperty("text-font");
    const h = [];
    let f, d, c, y;
    a && !a.isDataDriven && (f = a.getValue(n)), r && !r.isDataDriven && (d = r.getValue(n)), o && o.isDataDriven || (c = s.getLayoutValue("text-transform", n), o = null), l && l.isDataDriven || (y = s.getLayoutValue("text-font", n), l = null);
    for (const p of this._features) {
      const M = p.getGeometry(t);
      if (!M || M.length === 0) continue;
      let x, m;
      a && (x = a.isDataDriven ? a.getValue(n, p) : this._replaceKeys(f, p.values), x && e(x));
      let g = !1;
      if (r && (m = r.isDataDriven ? r.getValue(n, p) : this._replaceKeys(d, p.values), m)) {
        switch (m = m.replaceAll("\\n", `
`), o && (c = o.getValue(n, p)), c) {
          case Se.LOWERCASE:
            m = m.toLowerCase();
            break;
          case Se.UPPERCASE:
            m = m.toUpperCase();
        }
        if (z._bidiEngine.hasBidiChar(m)) {
          let _;
          _ = z._bidiEngine.checkContextual(m) === "rtl" ? "IDNNN" : "ICNNN", m = z._bidiEngine.bidiTransform(m, _, "VLYSN"), g = !0;
        }
        if (m.length > 0) {
          l && (y = l.getValue(n, p));
          for (const _ of y) {
            let P = i[_];
            P || (P = i[_] = /* @__PURE__ */ new Set());
            for (const D of m) {
              const T = D.codePointAt(0);
              T != null && P.add(T);
            }
          }
        }
      }
      if (!x && !m) continue;
      const I = s.getLayoutValue("symbol-sort-key", n, p), w = { feature: p, sprite: x, label: m, rtl: g, geometry: M, hash: (m ? Ae(m) : 0) ^ (x ? Ae(x) : 0), priority: I, textFont: y };
      h.push(w);
    }
    this._symbolFeatures = h;
  }
  processFeatures(t) {
    t && t.setExtent(this.layerExtent);
    const e = this.layer, i = this.zoom, s = e.getLayoutValue("symbol-placement", i), n = s !== Pe.POINT, a = e.getLayoutValue("symbol-spacing", i) * le, r = e.getLayoutProperty("icon-image"), o = e.getLayoutProperty("text-field"), l = r ? new ot(e, i, n) : null, h = o ? new lt(e, i, n) : null, f = this._workerTileHandler;
    let d;
    r && (d = f.getSpriteItems()), this._iconIndexStart = 3 * this._iconIndexBuffer.index, this._textIndexStart = 3 * this._textIndexBuffer.index, this._iconIndexCount = 0, this._textIndexCount = 0, this._markerMap.clear(), this._glyphMap.clear();
    const c = [];
    let y = 1;
    h && h.size && (y = h.size / H);
    const p = h ? h.maxAngle * be : 0, M = h ? h.size * le : 0;
    for (const x of this._symbolFeatures) {
      let m;
      l && d && x.sprite && (m = d[x.sprite], m && m.sdf && (this._isIconSDF = !0));
      let g;
      m && l.update(i, x.feature);
      let I = 0;
      const w = x.label;
      if (w) {
        je(h), h.update(i, x.feature);
        const _ = n && h.rotationAlignment === ie.MAP ? h.keepUpright : h.writingMode && h.writingMode.includes(et.VERTICAL);
        let P = 0.5;
        switch (h.anchor) {
          case k.TOP_LEFT:
          case k.LEFT:
          case k.BOTTOM_LEFT:
            P = 0;
            break;
          case k.TOP_RIGHT:
          case k.RIGHT:
          case k.BOTTOM_RIGHT:
            P = 1;
        }
        let D = 0.5;
        switch (h.anchor) {
          case k.TOP_LEFT:
          case k.TOP:
          case k.TOP_RIGHT:
            D = 0;
            break;
          case k.BOTTOM_LEFT:
          case k.BOTTOM:
          case k.BOTTOM_RIGHT:
            D = 1;
        }
        let T = 0.5;
        switch (h.justify) {
          case we.AUTO:
            T = P;
            break;
          case we.LEFT:
            T = 0;
            break;
          case we.RIGHT:
            T = 1;
        }
        const B = h.letterSpacing * H, A = n ? 0 : h.maxWidth * H, b = h.lineHeight * H, E = x.textFont.map((V) => f.getGlyphItems(V));
        if (g = new Ke(E, A, b, B, P, D, T).getShaping(w, x.rtl, _), g && g.length > 0) {
          let V = 1e30, C = -1e30;
          for (const O of g) V = Math.min(V, O.x), C = Math.max(C, O.x);
          I = (C - V + 2 * H) * y * le;
        }
      }
      for (let _ of x.geometry) {
        const P = [];
        if (s === Pe.LINE) {
          if (g?.length && h?.size) {
            const D = h.size * le * (2 + Math.min(2, 4 * Math.abs(h.offset[1])));
            _ = z._smoothVertices(_, D);
          }
          z._pushAnchors(P, _, a, I);
        } else s === Pe.LINE_CENTER ? z._pushCenterAnchor(P, _) : x.feature.type === Ze.Polygon ? z._pushCentroid(P, _) : P.push(new ge(_[0].x, _[0].y));
        for (const D of P) {
          if (D.x < 0 || D.x > Re || D.y < 0 || D.y > Re || n && I > 0 && h?.rotationAlignment === ie.MAP && !z._honorsTextMaxAngle(_, D, I, p, M)) continue;
          const T = { shaping: g, line: _, iconMosaicItem: m, anchor: D, symbolFeature: x, textColliders: [], iconColliders: [], textVertexRanges: [], iconVertexRanges: [] };
          c.push(T), this._processFeature(T, l, h);
        }
      }
    }
    c.sort(Tt), this._addPlacedGlyphs(), this._symbolInstances = c;
  }
  serialize() {
    let t = 14;
    t += this.layerUIDs.length, t += 3 * this.markerPageMap.size, t += 3 * this.glyphsPageMap.size, t += z._symbolsSerializationLength(this._symbolInstances), t += this._iconVertexBuffer.array.length, t += this._iconIndexBuffer.array.length, t += this._textVertexBuffer.array.length, t += this._textIndexBuffer.array.length;
    const e = new Uint32Array(t), i = new Int32Array(e.buffer), s = new Float32Array(e.buffer), [n, a, r] = this._sourceTileKey.split("/");
    let o = 0;
    e[o++] = this.type, e[o++] = this.layerUIDs.length;
    for (let l = 0; l < this.layerUIDs.length; l++) e[o++] = this.layerUIDs[l];
    e[o++] = this._isIconSDF ? 1 : 0, e[o++] = parseFloat(n), e[o++] = parseFloat(a), e[o++] = parseFloat(r), e[o++] = this.markerPageMap.size;
    for (const [l, [h, f]] of this.markerPageMap) e[o++] = l, e[o++] = h, e[o++] = f;
    e[o++] = this.glyphsPageMap.size;
    for (const [l, [h, f]] of this.glyphsPageMap) e[o++] = l, e[o++] = h, e[o++] = f;
    e[o++] = this._iconVertexBuffer.index / 4, e[o++] = this._textVertexBuffer.index / 4, o = z.serializeSymbols(e, i, s, o, this._symbolInstances), e[o++] = this._iconVertexBuffer.array.length;
    for (let l = 0; l < this._iconVertexBuffer.array.length; l++) i[o++] = this._iconVertexBuffer.array[l];
    e[o++] = this._iconIndexBuffer.array.length;
    for (let l = 0; l < this._iconIndexBuffer.array.length; l++) e[o++] = this._iconIndexBuffer.array[l];
    e[o++] = this._textVertexBuffer.array.length;
    for (let l = 0; l < this._textVertexBuffer.array.length; l++) i[o++] = this._textVertexBuffer.array[l];
    e[o++] = this._textIndexBuffer.array.length;
    for (let l = 0; l < this._textIndexBuffer.array.length; l++) e[o++] = this._textIndexBuffer.array[l];
    return e.buffer;
  }
  static _symbolsSerializationLength(t) {
    let e = 0;
    e += 1;
    for (const i of t || []) {
      e += 5, e += 1;
      for (const s of i.textColliders) e += Ue;
      for (const s of i.iconColliders) e += Ue;
      e += 1, e += 2 * i.textVertexRanges.length, e += 1, e += 2 * i.iconVertexRanges.length;
    }
    return e;
  }
  static serializeSymbols(t, e, i, s, n) {
    n = n || [], e[s++] = n.length;
    for (const a of n) {
      e[s++] = a.anchor.x, e[s++] = a.anchor.y, e[s++] = a.symbolFeature.hash, e[s++] = a.symbolFeature.priority, e[s++] = a.symbolFeature.feature.featureIndex, e[s++] = a.textColliders.length + a.iconColliders.length;
      for (const r of a.textColliders) e[s++] = r.xTile, e[s++] = r.yTile, e[s++] = r.dxPixels, e[s++] = r.dyPixels, e[s++] = r.hard ? 1 : 0, e[s++] = r.partIndex, i[s++] = r.minLod, i[s++] = r.maxLod, e[s++] = r.width, e[s++] = r.height;
      for (const r of a.iconColliders) e[s++] = r.xTile, e[s++] = r.yTile, e[s++] = r.dxPixels, e[s++] = r.dyPixels, e[s++] = r.hard ? 1 : 0, e[s++] = r.partIndex, i[s++] = r.minLod, i[s++] = r.maxLod, e[s++] = r.width, e[s++] = r.height;
      e[s++] = a.textVertexRanges.length;
      for (const [r, o] of a.textVertexRanges) e[s++] = r, e[s++] = o;
      e[s++] = a.iconVertexRanges.length;
      for (const [r, o] of a.iconVertexRanges) e[s++] = r, e[s++] = o;
    }
    return s;
  }
  _replaceKeys(t, e) {
    return t.replaceAll(/{([^{}]+)}/g, (i, s) => s in e ? e[s] : "");
  }
  _processFeature(t, e, i) {
    const { line: s, iconMosaicItem: n, shaping: a, anchor: r } = t, o = this.zoom, l = this.layer, h = !!n;
    let f = !0;
    h && (f = e?.optional || !n);
    const d = a && a.length > 0, c = !d || i?.optional;
    let y, p;
    if (h && (y = this._placementEngine.getIconPlacement(r, n, e)), (y || f) && (d && (p = this._placementEngine.getTextPlacement(r, a, s, i)), p || c)) {
      if (y && p || (c || f ? c || p ? f || y || (p = null) : y = null : (y = null, p = null)), p) {
        const M = l.hasDataDrivenText ? l.textMaterial.encodeAttributes(t.symbolFeature.feature, o, l) : null;
        if (this._storePlacedGlyphs(t, p.shapes, o, i.rotationAlignment, M), p.textColliders) {
          t.textColliders = p.textColliders;
          for (const x of p.textColliders) {
            x.minLod = Math.max(o + Y(x.minLod), 0), x.maxLod = Math.min(o + Y(x.maxLod), 25);
            const m = x.angle;
            if (m) {
              const g = Math.cos(m), I = Math.sin(m), w = x.dxPixels * g - x.dyPixels * I, _ = x.dxPixels * I + x.dyPixels * g, P = (x.dxPixels + x.width) * g - x.dyPixels * I, D = (x.dxPixels + x.width) * I + x.dyPixels * g, T = x.dxPixels * g - (x.dyPixels + x.height) * I, B = x.dxPixels * I + (x.dyPixels + x.height) * g, A = (x.dxPixels + x.width) * g - (x.dyPixels + x.height) * I, b = (x.dxPixels + x.width) * I + (x.dyPixels + x.height) * g, E = Math.min(w, P, T, A), V = Math.max(w, P, T, A), C = Math.min(_, D, B, b), O = Math.max(_, D, B, b);
              x.dxPixels = E, x.dyPixels = C, x.width = V - E, x.height = O - C;
            }
          }
        }
      }
      if (y) {
        const M = l.hasDataDrivenIcon ? l.iconMaterial.encodeAttributes(t.symbolFeature.feature, o, l) : null;
        if (this._addPlacedIcons(t, y.shapes, o, n.page, e.rotationAlignment === ie.VIEWPORT, M), y.iconColliders) {
          t.iconColliders = y.iconColliders;
          for (const x of y.iconColliders) {
            x.minLod = Math.max(o + Y(x.minLod), 0), x.maxLod = Math.min(o + Y(x.maxLod), 25);
            const m = x.angle;
            if (m) {
              const g = Math.cos(m), I = Math.sin(m), w = x.dxPixels * g - x.dyPixels * I, _ = x.dxPixels * I + x.dyPixels * g, P = (x.dxPixels + x.width) * g - x.dyPixels * I, D = (x.dxPixels + x.width) * I + x.dyPixels * g, T = x.dxPixels * g - (x.dyPixels + x.height) * I, B = x.dxPixels * I + (x.dyPixels + x.height) * g, A = (x.dxPixels + x.width) * g - (x.dyPixels + x.height) * I, b = (x.dxPixels + x.width) * I + (x.dyPixels + x.height) * g, E = Math.min(w, P, T, A), V = Math.max(w, P, T, A), C = Math.min(_, D, B, b), O = Math.max(_, D, B, b);
              x.dxPixels = E, x.dyPixels = C, x.width = V - E, x.height = O - C;
            }
          }
        }
      }
    }
  }
  _addPlacedIcons(t, e, i, s, n, a) {
    const r = Math.max(i - 1, 0), o = this._iconVertexBuffer, l = this._iconIndexBuffer, h = this._markerMap;
    for (const f of e) {
      const d = n ? 0 : Math.max(i + Y(f.minzoom), r), c = n ? 25 : Math.min(i + Y(f.maxzoom), 25);
      if (c <= d) continue;
      const y = f.tl, p = f.tr, M = f.bl, x = f.br, m = f.mosaicRect, g = f.labelAngle, I = f.minAngle, w = f.maxAngle, _ = f.anchor, P = o.index, D = m.x, T = m.y, B = D + m.width, A = T + m.height, b = o.index;
      o.add(_.x, _.y, y.x, y.y, D, T, g, I, w, d, c, a), o.add(_.x, _.y, p.x, p.y, B, T, g, I, w, d, c, a), o.add(_.x, _.y, M.x, M.y, D, A, g, I, w, d, c, a), o.add(_.x, _.y, x.x, x.y, B, A, g, I, w, d, c, a), t.iconVertexRanges.length > 0 && t.iconVertexRanges[0][0] + t.iconVertexRanges[0][1] === b ? t.iconVertexRanges[0][1] += 4 : t.iconVertexRanges.push([b, 4]), l.add(P, P + 1, P + 2), l.add(P + 1, P + 2, P + 3), h.has(s) ? h.get(s)[1] += 6 : h.set(s, [this._iconIndexStart + this._iconIndexCount, 6]), this._iconIndexCount += 6;
    }
  }
  _addPlacedGlyphs() {
    const t = this._textVertexBuffer, e = this._textIndexBuffer, i = this._glyphMap;
    for (const [s, n] of this._glyphBufferDataStorage) for (const a of n) {
      const r = t.index, o = a.symbolInstance, l = a.ddAttributes, h = t.index;
      t.add(a.glyphAnchor[0], a.glyphAnchor[1], a.tl[0], a.tl[1], a.xmin, a.ymin, a.labelAngle, a.minAngle, a.maxAngle, a.minLod, a.maxLod, l), t.add(a.glyphAnchor[0], a.glyphAnchor[1], a.tr[0], a.tr[1], a.xmax, a.ymin, a.labelAngle, a.minAngle, a.maxAngle, a.minLod, a.maxLod, l), t.add(a.glyphAnchor[0], a.glyphAnchor[1], a.bl[0], a.bl[1], a.xmin, a.ymax, a.labelAngle, a.minAngle, a.maxAngle, a.minLod, a.maxLod, l), t.add(a.glyphAnchor[0], a.glyphAnchor[1], a.br[0], a.br[1], a.xmax, a.ymax, a.labelAngle, a.minAngle, a.maxAngle, a.minLod, a.maxLod, l), o.textVertexRanges.length > 0 && o.textVertexRanges[0][0] + o.textVertexRanges[0][1] === h ? o.textVertexRanges[0][1] += 4 : o.textVertexRanges.push([h, 4]), e.add(r, r + 1, r + 2), e.add(r + 1, r + 2, r + 3), i.has(s) ? i.get(s)[1] += 6 : i.set(s, [this._textIndexStart + this._textIndexCount, 6]), this._textIndexCount += 6;
    }
    this._glyphBufferDataStorage.clear();
  }
  _storePlacedGlyphs(t, e, i, s, n) {
    const a = Math.max(i - 1, 0), r = s === ie.VIEWPORT;
    let o, l, h, f, d, c, y, p, M, x, m;
    for (const g of e)
      o = r ? 0 : Math.max(i + Y(g.minzoom), a), l = r ? 25 : Math.min(i + Y(g.maxzoom), 25), !(l <= o) && (h = g.tl, f = g.tr, d = g.bl, c = g.br, y = g.labelAngle, p = g.minAngle, M = g.maxAngle, x = g.anchor, m = g.mosaicRect, this._glyphBufferDataStorage.has(g.page) || this._glyphBufferDataStorage.set(g.page, []), this._glyphBufferDataStorage.get(g.page).push({ glyphAnchor: [x.x, x.y], tl: [h.x, h.y], tr: [f.x, f.y], bl: [d.x, d.y], br: [c.x, c.y], xmin: m.x, ymin: m.y, xmax: m.x + m.width, ymax: m.y + m.height, labelAngle: y, minAngle: p, maxAngle: M, minLod: o, maxLod: l, placementLod: a, symbolInstance: t, ddAttributes: n }));
  }
  static _pushAnchors(t, e, i, s) {
    i += s;
    let n = 0;
    const a = e.length - 1;
    for (let d = 0; d < a; d++) n += L.distance(e[d], e[d + 1]);
    let r = s || i;
    if (r *= 0.5, n <= r) return;
    const o = r / n;
    let l = 0, h = -(i = n / Math.max(Math.round(n / i), 1)) / 2;
    const f = e.length - 1;
    for (let d = 0; d < f; d++) {
      const c = e[d], y = e[d + 1], p = y.x - c.x, M = y.y - c.y, x = Math.sqrt(p * p + M * M);
      let m;
      for (; h + i < l + x; ) {
        h += i;
        const g = (h - l) / x, I = ye(c.x, y.x, g), w = ye(c.y, y.y, g);
        m === void 0 && (m = Math.atan2(M, p)), t.push(new ge(I, w, m, d, o));
      }
      l += x;
    }
  }
  static _pushCenterAnchor(t, e) {
    let i = 0;
    const s = e.length - 1;
    for (let o = 0; o < s; o++) i += L.distance(e[o], e[o + 1]);
    const n = i / 2;
    let a = 0;
    const r = e.length - 1;
    for (let o = 0; o < r; o++) {
      const l = e[o], h = e[o + 1], f = h.x - l.x, d = h.y - l.y, c = Math.sqrt(f * f + d * d);
      if (n < a + c) {
        const y = (n - a) / c, p = ye(l.x, h.x, y), M = ye(l.y, h.y, y), x = Math.atan2(d, f);
        return void t.push(new ge(p, M, x, o, 0));
      }
      a += c;
    }
  }
  static _deviation(t, e, i) {
    const s = (e.x - t.x) * (i.x - e.x) + (e.y - t.y) * (i.y - e.y), n = (e.x - t.x) * (i.y - e.y) - (e.y - t.y) * (i.x - e.x);
    return Math.atan2(n, s);
  }
  static _honorsTextMaxAngle(t, e, i, s, n) {
    let a = 0;
    const r = i / 2;
    let o = new L(e.x, e.y), l = e.segment + 1;
    for (; a > -r; ) {
      if (--l, l < 0) return !1;
      a -= L.distance(t[l], o), o = t[l];
    }
    a += L.distance(t[l], t[l + 1]);
    const h = [];
    let f = 0;
    const d = t.length;
    for (; a < r; ) {
      const c = t[l];
      let y, p = l;
      do {
        if (++p, p === d) return !1;
        y = t[p];
      } while (y.isEqual(c));
      let M, x = p;
      do {
        if (++x, x === d) return !1;
        M = t[x];
      } while (M.isEqual(y));
      const m = this._deviation(c, y, M);
      for (h.push({ deviation: m, distToAnchor: a }), f += m; a - h[0].distToAnchor > n; ) f -= h.shift().deviation;
      if (Math.abs(f) > s) return !1;
      a += L.distance(y, M), l = p;
    }
    return !0;
  }
  static _smoothVertices(t, e) {
    if (e <= 0) return t;
    let i = t.length;
    if (i < 3) return t;
    const s = [];
    let n = 0, a = 0;
    s.push(0);
    for (let p = 1; p < i; p++) {
      const M = L.distance(t[p], t[p - 1]);
      M > 0 && (n += M, s.push(n), a++, a !== p && (t[a] = t[p]));
    }
    if (i = a + 1, i < 3) return t;
    e = Math.min(e, 0.2 * n);
    const r = t[0].x, o = t[0].y, l = t[i - 1].x, h = t[i - 1].y, f = L.sub(t[0], t[1]);
    f.normalize(), t[0].x += e * f.x, t[0].y += e * f.y, f.assignSub(t[i - 1], t[i - 2]), f.normalize(), t[i - 1].x += e * f.x, t[i - 1].y += e * f.y, s[0] -= e, s[i - 1] += e;
    const d = [];
    d.push(new L(r, o));
    const c = 1e-6, y = 0.5 * e;
    for (let p = 1; p < i - 1; p++) {
      let M = 0, x = 0, m = 0;
      for (let g = p - 1; g >= 0; g--) {
        const I = y + s[g + 1] - s[p];
        if (I < 0) break;
        const w = s[g + 1] - s[g], _ = s[p] - s[g] < y ? 1 : I / w;
        if (_ < c) break;
        const P = _ * _, D = _ * I - 0.5 * P * w, T = _ * w / e, B = t[g + 1], A = t[g].x - B.x, b = t[g].y - B.y;
        M += T / D * (B.x * _ * I + 0.5 * P * (I * A - w * B.x) - P * _ * w * A / 3), x += T / D * (B.y * _ * I + 0.5 * P * (I * b - w * B.y) - P * _ * w * b / 3), m += T;
      }
      for (let g = p + 1; g < i; g++) {
        const I = y - s[g - 1] + s[p];
        if (I < 0) break;
        const w = s[g] - s[g - 1], _ = s[g] - s[p] < y ? 1 : I / w;
        if (_ < c) break;
        const P = _ * _, D = _ * I - 0.5 * P * w, T = _ * w / e, B = t[g - 1], A = t[g].x - B.x, b = t[g].y - B.y;
        M += T / D * (B.x * _ * I + 0.5 * P * (I * A - w * B.x) - P * _ * w * A / 3), x += T / D * (B.y * _ * I + 0.5 * P * (I * b - w * B.y) - P * _ * w * b / 3), m += T;
      }
      d.push(new L(M / m, x / m));
    }
    return d.push(new L(l, h)), t[0].x = r, t[0].y = o, t[i - 1].x = l, t[i - 1].y = h, d;
  }
  static _pushCentroid(t, e) {
    const r = e.length - 1;
    let o = 0, l = 0, h = 0, f = e[0].x, d = e[0].y;
    f > 4096 && (f = 4096), f < 0 && (f = 0), d > 4096 && (d = 4096), d < 0 && (d = 0);
    for (let c = 1; c < r; c++) {
      let y = e[c].x, p = e[c].y, M = e[c + 1].x, x = e[c + 1].y;
      y > 4096 && (y = 4096), y < 0 && (y = 0), p > 4096 && (p = 4096), p < 0 && (p = 0), M > 4096 && (M = 4096), M < 0 && (M = 0), x > 4096 && (x = 4096), x < 0 && (x = 0);
      const m = (y - f) * (x - d) - (M - f) * (p - d);
      o += m * (f + y + M), l += m * (d + p + x), h += m;
    }
    o /= 3 * h, l /= 3 * h, isNaN(o) || isNaN(l) || t.push(new ge(o, l));
  }
}
z._bidiEngine = new it();
var K;
(function(u) {
  u[u.INITIALIZED = 0] = "INITIALIZED", u[u.NO_DATA = 1] = "NO_DATA", u[u.READY = 2] = "READY", u[u.MODIFIED = 3] = "MODIFIED", u[u.INVALID = 4] = "INVALID";
})(K || (K = {}));
class bt {
  constructor(t, e, i, s, n, a) {
    if (this._pbfTiles = {}, this._tileClippers = {}, this._client = i, this._tile = e, this._sourceDataMaxLOD = s, a) {
      this._styleLayerUIDs = /* @__PURE__ */ new Set();
      for (const f of a) this._styleLayerUIDs.add(f);
    }
    this._styleRepository = n, this._layers = this._styleRepository?.layers ?? [];
    const [r, o, l] = e.tileKey.split("/").map(parseFloat);
    this._level = r;
    const h = Je(this._level);
    for (const f of Object.keys(t)) {
      const d = t[f];
      if (this._pbfTiles[f] = new qe(new Uint8Array(d.protobuff), new DataView(d.protobuff)), d.refKey) {
        const [c] = d.refKey.split("/").map(parseFloat), y = r - c;
        if (y > 0) {
          const p = (1 << y) - 1, M = o & p, x = l & p;
          this._tileClippers[f] = new Qe(y, M, x, 8, h);
        }
      }
      this._tileClippers[f] || (this._tileClippers[f] = new Xe());
    }
  }
  _canParseStyleLayer(t) {
    return !this._styleLayerUIDs || this._styleLayerUIDs.has(t);
  }
  async parse(t) {
    const e = rt(), i = this._initialize(t), { returnedBuckets: s } = i;
    this._processLayers(i), this._linkReferences(i), this._filterFeatures(i);
    const n = [], a = /* @__PURE__ */ new Set(), r = (h, f) => {
      a.has(h) || (n.push({ name: h, repeat: f }), a.add(h));
    }, o = {};
    for (const h of s) h.getResources(h.tileClipper, r, o);
    if (this._tile.status === K.INVALID) return [];
    const l = this._fetchResources(n, o, t);
    return Promise.all([...l, e]).then(() => this._processFeatures(i.returnedBuckets));
  }
  _initialize(t) {
    return { signal: t?.signal, sourceNameToTileData: this._parseTileData(this._pbfTiles), layers: this._layers, zoom: this._level, sourceNameToTileClipper: this._tileClippers, sourceNameToUniqueSourceLayerBuckets: {}, sourceNameToUniqueSourceLayers: {}, returnedBuckets: [], layerIdToBucket: {}, referencerUIDToReferencedId: /* @__PURE__ */ new Map() };
  }
  _processLayers(t) {
    const { sourceNameToTileData: e, zoom: i, layers: s, sourceNameToTileClipper: n, sourceNameToUniqueSourceLayerBuckets: a, sourceNameToUniqueSourceLayers: r, returnedBuckets: o, layerIdToBucket: l, referencerUIDToReferencedId: h } = t, f = this._sourceDataMaxLOD;
    for (let d = s.length - 1; d >= 0; d--) {
      const c = s[d];
      if (i < f) {
        if (c.minzoom && i < Math.floor(c.minzoom) || c.maxzoom && i >= c.maxzoom) continue;
      } else if (c.maxzoom && i >= c.maxzoom) continue;
      if (c.type === ee.BACKGROUND || !this._canParseStyleLayer(c.uid) || !e[c.source] || !n[c.source]) continue;
      const y = e[c.source], p = n[c.source], M = c.sourceLayer, x = y[M];
      if (x) {
        let m = r[c.source];
        if (m || (m = r[c.source] = /* @__PURE__ */ new Set()), m.add(c.sourceLayer), c.refLayerId) h.set(c.uid, c.refLayerId);
        else {
          const g = this._createBucket(c);
          if (g) {
            g.layerUIDs = [c.uid], g.layerExtent = x.extent, g.tileClipper = p;
            let I = a[c.source];
            I || (I = a[c.source] = {});
            let w = I[M];
            w || (w = I[M] = []), w.push(g), o.push(g), l[c.id] = g;
          }
        }
      }
    }
  }
  _linkReferences(t) {
    const { layerIdToBucket: e, referencerUIDToReferencedId: i } = t;
    i.forEach((s, n) => {
      e[s] && e[s].layerUIDs.push(n);
    });
  }
  _filterFeatures(t) {
    const { signal: e, sourceNameToTileData: i, sourceNameToUniqueSourceLayerBuckets: s, sourceNameToUniqueSourceLayers: n } = t, a = 10 * this._level, r = 10 * (this._level + 1), o = [], l = [];
    for (const h of Object.keys(n))
      n[h].forEach((f) => {
        o.push(f), l.push(h);
      });
    for (let h = 0; h < o.length; h++) {
      const f = l[h], d = o[h];
      if (!i[f] || !s[f]) continue;
      const c = i[f][d], y = s[f][d];
      if (!y || y.length === 0) continue;
      if (Ye(e)) return;
      let p = 0;
      const M = c.getData();
      for (; M.nextTag(2); ) {
        const x = M.getMessage(), m = new nt(x, c, p++);
        x.release();
        const g = m.values;
        if (g) {
          const I = g._minzoom;
          if (I && I >= r) continue;
          const w = g._maxzoom;
          if (w && w <= a) continue;
        }
        for (const I of y) I.pushFeature(m);
      }
    }
  }
  _fetchResources(t, e, i) {
    const s = [], n = this._tile.getWorkerTileHandler();
    let a, r;
    t.length > 0 && (a = n.fetchSprites(t, this._client, i), s.push(a));
    for (const o in e) {
      const l = e[o];
      l.size > 0 && (r = n.fetchGlyphs(this._tile.tileKey, o, l, this._client, i), s.push(r));
    }
    return s;
  }
  _processFeatures(t) {
    const e = t.filter((i) => i.hasFeatures() || this._canParseStyleLayer(i.layer.uid));
    for (const i of e) i.processFeatures(i.tileClipper);
    return e;
  }
  _parseTileData(t) {
    const e = {};
    for (const i of Object.keys(t)) {
      const s = t[i], n = {};
      for (; s.next(); ) switch (s.tag()) {
        case 3: {
          const a = s.getMessage(), r = new at(a);
          a.release(), n[r.name] = r;
          break;
        }
        default:
          s.skip();
      }
      e[i] = n;
    }
    return e;
  }
  _createBucket(t) {
    switch (t.type) {
      case ee.BACKGROUND:
        return null;
      case ee.FILL:
        return this._createFillBucket(t);
      case ee.LINE:
        return this._createLineBucket(t);
      case ee.CIRCLE:
        return this._createCircleBucket(t);
      case ee.SYMBOL:
        return this._createSymbolBucket(t);
    }
  }
  _createFillBucket(t) {
    return new mt(t, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new yt(t.fillMaterial.getStride()), new te(), new gt(t.outlineMaterial.getStride()), new te());
  }
  _createLineBucket(t) {
    return new Mt(t, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new xt(t.lineMaterial.getStride()), new te());
  }
  _createCircleBucket(t) {
    return new _t(t, this._level, this._tile.getWorkerTileHandler().getSpriteItems(), new pt(t.circleMaterial.getStride()), new te());
  }
  _createSymbolBucket(t) {
    const e = this._tile;
    return new z(e.tileKey, t, this._level, new Ne(t.iconMaterial.getStride()), new te(), new Ne(t.textMaterial.getStride()), new te(), e.placementEngine, e.getWorkerTileHandler());
  }
}
let Dt = class {
  constructor(t, e, i, s) {
    this.status = K.INITIALIZED, this.placementEngine = new dt(), this.tileKey = t, this.refKeys = e, this._workerTileHandler = i, this._styleRepository = s;
  }
  release() {
    this.tileKey = "", this.refKeys = null, this.status = K.INITIALIZED, this._workerTileHandler = null;
  }
  async parse(t, e) {
    const i = e?.signal;
    if (i != null) {
      const h = () => {
        i.removeEventListener("abort", h), this.status = K.INVALID;
      };
      i.addEventListener("abort", h);
    }
    let s;
    const n = { bucketsWithData: [], emptyBuckets: null };
    try {
      s = await this._parse(t, e);
    } catch (h) {
      if (Ge(h)) throw h;
      return { result: n, transferList: [] };
    }
    this.status = K.READY;
    const a = n.bucketsWithData, r = [];
    for (const h of s) if (h.hasFeatures()) {
      const f = h.serialize();
      a.push(f);
    } else r.push(h.layer.uid);
    const o = [...a];
    let l = null;
    return r.length > 0 && (l = Uint32Array.from(r), o.push(l.buffer)), n.emptyBuckets = l, { result: n, transferList: o };
  }
  setObsolete() {
    this.status = K.INVALID;
  }
  getLayers() {
    return this._workerTileHandler.getLayers();
  }
  getWorkerTileHandler() {
    return this._workerTileHandler;
  }
  async _parse(t, e) {
    const i = t.sourceName2DataAndRefKey;
    return Object.keys(i).length === 0 ? [] : (this.status = K.MODIFIED, new bt(i, this, e.client, t.sourceDataMaxLOD, this._styleRepository, t.styleLayerUIDs).parse(e));
  }
};
const Bt = 25;
class jt {
  constructor() {
    this._spriteInfo = {}, this._glyphInfo = {}, this._sourceDataMaxLOD = Bt;
  }
  reset() {
    return this._spriteInfo = {}, this._glyphInfo = {}, Promise.resolve();
  }
  getLayers() {
    return this._styleRepository?.layers ?? [];
  }
  async createTileAndParse(t, e) {
    const { key: i } = t, s = {};
    for (const a of Object.keys(t.sourceName2DataAndRefKey)) {
      const r = t.sourceName2DataAndRefKey[a];
      s[a] = r.refKey;
    }
    const n = new Dt(i, s, this, this._styleRepository);
    try {
      return await n.parse({ ...t, sourceDataMaxLOD: this._sourceDataMaxLOD }, e);
    } catch (a) {
      if (n.setObsolete(), n.release(), !Ge(a)) throw a;
      return null;
    }
  }
  updateStyle(t) {
    if (!t || t.length === 0 || !this._styleRepository) return;
    const e = this._styleRepository;
    for (const i of t) {
      const s = i.type, n = i.data;
      switch (s) {
        case ae.PAINTER_CHANGED:
          e.setPaintProperties(n.layer, n.paint);
          break;
        case ae.LAYOUT_CHANGED:
          e.setLayoutProperties(n.layer, n.layout);
          break;
        case ae.LAYER_REMOVED:
          e.deleteStyleLayer(n.layer);
          break;
        case ae.LAYER_CHANGED:
          e.setStyleLayer(n.layer, n.index);
          break;
        case ae.SPRITES_CHANGED:
          this._spriteInfo = {};
      }
    }
  }
  setStyle(t) {
    const { style: e, sourceDataMaxLOD: i } = t;
    this._styleRepository = new ht(e), this._sourceDataMaxLOD = i, this._spriteInfo = {}, this._glyphInfo = {};
  }
  fetchSprites(t, e, i) {
    const s = [], n = this._spriteInfo;
    for (const a of t)
      n[a.name] === void 0 && s.push(a);
    return s.length === 0 ? Promise.resolve() : e.invoke("getSprites", s, { signal: i?.signal }).then((a) => {
      for (const r in a) {
        const o = a[r];
        n[r] = o;
      }
    });
  }
  getSpriteItems() {
    return this._spriteInfo;
  }
  fetchGlyphs(t, e, i, s, n) {
    const a = [];
    let r = this._glyphInfo[e];
    return r ? i.forEach((o) => {
      r[o] || a.push(o);
    }) : (r = this._glyphInfo[e] = [], i.forEach((o) => a.push(o))), a.length === 0 ? Promise.resolve() : s.invoke("getGlyphs", { tileID: t, font: e, codePoints: a }, n).then((o) => {
      for (let l = 0; l < o.length; l++) o[l] && (r[l] = o[l]);
    });
  }
  getGlyphItems(t) {
    return this._glyphInfo[t];
  }
}
export {
  jt as default
};
//# sourceMappingURL=WorkerTileHandler-CtrdqWQz.js.map
