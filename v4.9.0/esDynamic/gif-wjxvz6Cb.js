import { aM as E } from "./main-DIdq27YS.js";
var x = {}, O = {}, w = {};
Object.defineProperty(w, "__esModule", { value: !0 }), w.loop = w.conditional = w.parse = void 0;
var q = function t(a, e) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : n;
  if (Array.isArray(e)) e.forEach(function(o) {
    return t(a, o, n, i);
  });
  else if (typeof e == "function") e(a, n, i, t);
  else {
    var d = Object.keys(e)[0];
    Array.isArray(e[d]) ? (i[d] = {}, t(a, e[d], n, i[d])) : i[d] = e[d](a, n, i, t);
  }
  return n;
};
w.parse = q;
var V = function(t, a) {
  return function(e, n, i, d) {
    a(e, n, i) && d(e, t, n, i);
  };
};
w.conditional = V;
var $ = function(t, a) {
  return function(e, n, i, d) {
    for (var o = [], c = e.pos; a(e, n, i); ) {
      var l = {};
      if (d(e, t, n, l), e.pos === c) break;
      c = e.pos, o.push(l);
    }
    return o;
  };
};
w.loop = $;
var f = {};
Object.defineProperty(f, "__esModule", { value: !0 }), f.readBits = f.readArray = f.readUnsigned = f.readString = f.peekBytes = f.readBytes = f.peekByte = f.readByte = f.buildStream = void 0;
var H = function(t) {
  return { data: t, pos: 0 };
};
f.buildStream = H;
var T = function() {
  return function(t) {
    return t.data[t.pos++];
  };
};
f.readByte = T;
var J = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  return function(a) {
    return a.data[a.pos + t];
  };
};
f.peekByte = J;
var _ = function(t) {
  return function(a) {
    return a.data.subarray(a.pos, a.pos += t);
  };
};
f.readBytes = _;
var K = function(t) {
  return function(a) {
    return a.data.subarray(a.pos, a.pos + t);
  };
};
f.peekBytes = K;
var L = function(t) {
  return function(a) {
    return Array.from(_(t)(a)).map(function(e) {
      return String.fromCharCode(e);
    }).join("");
  };
};
f.readString = L;
var N = function(t) {
  return function(a) {
    var e = _(2)(a);
    return t ? (e[1] << 8) + e[0] : (e[0] << 8) + e[1];
  };
};
f.readUnsigned = N;
var Q = function(t, a) {
  return function(e, n, i) {
    for (var d = typeof a == "function" ? a(e, n, i) : a, o = _(t), c = new Array(d), l = 0; l < d; l++) c[l] = o(e);
    return c;
  };
};
f.readArray = Q;
var W = function(t, a, e) {
  for (var n = 0, i = 0; i < e; i++) n += t[a + i] && Math.pow(2, e - i - 1);
  return n;
}, X = function(t) {
  return function(a) {
    for (var e = T()(a), n = new Array(8), i = 0; i < 8; i++) n[7 - i] = !!(e & 1 << i);
    return Object.keys(t).reduce(function(d, o) {
      var c = t[o];
      return c.length ? d[o] = W(n, c.index, c.length) : d[o] = n[c.index], d;
    }, {});
  };
};
f.readBits = X, function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
  var a = w, e = f, n = { blocks: function(r) {
    for (var s = 0, u = [], g = r.data.length, h = 0, y = (0, e.readByte)()(r); y !== s && y; y = (0, e.readByte)()(r)) {
      if (r.pos + y >= g) {
        var m = g - r.pos;
        u.push((0, e.readBytes)(m)(r)), h += m;
        break;
      }
      u.push((0, e.readBytes)(y)(r)), h += y;
    }
    for (var B = new Uint8Array(h), b = 0, v = 0; v < u.length; v++) B.set(u[v], b), b += u[v].length;
    return B;
  } }, i = (0, a.conditional)({ gce: [{ codes: (0, e.readBytes)(2) }, { byteSize: (0, e.readByte)() }, { extras: (0, e.readBits)({ future: { index: 0, length: 3 }, disposal: { index: 3, length: 3 }, userInput: { index: 6 }, transparentColorGiven: { index: 7 } }) }, { delay: (0, e.readUnsigned)(!0) }, { transparentColorIndex: (0, e.readByte)() }, { terminator: (0, e.readByte)() }] }, function(r) {
    var s = (0, e.peekBytes)(2)(r);
    return s[0] === 33 && s[1] === 249;
  }), d = (0, a.conditional)({ image: [{ code: (0, e.readByte)() }, { descriptor: [{ left: (0, e.readUnsigned)(!0) }, { top: (0, e.readUnsigned)(!0) }, { width: (0, e.readUnsigned)(!0) }, { height: (0, e.readUnsigned)(!0) }, { lct: (0, e.readBits)({ exists: { index: 0 }, interlaced: { index: 1 }, sort: { index: 2 }, future: { index: 3, length: 2 }, size: { index: 5, length: 3 } }) }] }, (0, a.conditional)({ lct: (0, e.readArray)(3, function(r, s, u) {
    return Math.pow(2, u.descriptor.lct.size + 1);
  }) }, function(r, s, u) {
    return u.descriptor.lct.exists;
  }), { data: [{ minCodeSize: (0, e.readByte)() }, n] }] }, function(r) {
    return (0, e.peekByte)()(r) === 44;
  }), o = (0, a.conditional)({ text: [{ codes: (0, e.readBytes)(2) }, { blockSize: (0, e.readByte)() }, { preData: function(r, s, u) {
    return (0, e.readBytes)(u.text.blockSize)(r);
  } }, n] }, function(r) {
    var s = (0, e.peekBytes)(2)(r);
    return s[0] === 33 && s[1] === 1;
  }), c = (0, a.conditional)({ application: [{ codes: (0, e.readBytes)(2) }, { blockSize: (0, e.readByte)() }, { id: function(r, s, u) {
    return (0, e.readString)(u.blockSize)(r);
  } }, n] }, function(r) {
    var s = (0, e.peekBytes)(2)(r);
    return s[0] === 33 && s[1] === 255;
  }), l = (0, a.conditional)({ comment: [{ codes: (0, e.readBytes)(2) }, n] }, function(r) {
    var s = (0, e.peekBytes)(2)(r);
    return s[0] === 33 && s[1] === 254;
  }), p = [{ header: [{ signature: (0, e.readString)(3) }, { version: (0, e.readString)(3) }] }, { lsd: [{ width: (0, e.readUnsigned)(!0) }, { height: (0, e.readUnsigned)(!0) }, { gct: (0, e.readBits)({ exists: { index: 0 }, resolution: { index: 1, length: 3 }, sort: { index: 4 }, size: { index: 5, length: 3 } }) }, { backgroundColorIndex: (0, e.readByte)() }, { pixelAspectRatio: (0, e.readByte)() }] }, (0, a.conditional)({ gct: (0, e.readArray)(3, function(r, s) {
    return Math.pow(2, s.lsd.gct.size + 1);
  }) }, function(r, s) {
    return s.lsd.gct.exists;
  }), { frames: (0, a.loop)([i, c, l, d, o], function(r) {
    var s = (0, e.peekByte)()(r);
    return s === 33 || s === 44;
  }) }];
  t.default = p;
}(O);
var S = {};
Object.defineProperty(S, "__esModule", { value: !0 }), S.deinterlace = void 0;
var Y = function(t, a) {
  for (var e = new Array(t.length), n = t.length / a, i = function(r, s) {
    var u = t.slice(s * a, (s + 1) * a);
    e.splice.apply(e, [r * a, a].concat(u));
  }, d = [0, 4, 2, 1], o = [8, 8, 4, 2], c = 0, l = 0; l < 4; l++) for (var p = d[l]; p < n; p += o[l]) i(p, c), c++;
  return e;
};
S.deinterlace = Y;
var z = {};
Object.defineProperty(z, "__esModule", { value: !0 }), z.lzw = void 0;
var Z = function(t, a, e) {
  var n, i, d, o, c, l, p, r, s, u, g, h, y, m, B, b, v = 4096, C = -1, j = e, F = new Array(e), M = new Array(v), k = new Array(v), A = new Array(v + 1);
  for (c = (i = 1 << (u = t)) + 1, n = i + 2, p = C, d = (1 << (o = u + 1)) - 1, r = 0; r < i; r++) M[r] = 0, k[r] = r;
  for (g = h = y = m = B = b = 0, s = 0; s < j; ) {
    if (m === 0) {
      if (h < o) {
        g += a[b] << h, h += 8, b++;
        continue;
      }
      if (r = g & d, g >>= o, h -= o, r > n || r == c) break;
      if (r == i) {
        d = (1 << (o = u + 1)) - 1, n = i + 2, p = C;
        continue;
      }
      if (p == C) {
        A[m++] = k[r], p = r, y = r;
        continue;
      }
      for (l = r, r == n && (A[m++] = y, r = p); r > i; ) A[m++] = k[r], r = M[r];
      y = 255 & k[r], A[m++] = y, n < v && (M[n] = p, k[n] = y, !(++n & d) && n < v && (o++, d += n)), p = l;
    }
    m--, F[B++] = A[m], s++;
  }
  for (s = B; s < j; s++) F[s] = 0;
  return F;
};
z.lzw = Z, Object.defineProperty(x, "__esModule", { value: !0 });
var G = x.decompressFrames = x.decompressFrame = P = x.parseGIF = void 0, ee = ie(O), te = w, re = f, ne = S, ae = z;
function ie(t) {
  return t && t.__esModule ? t : { default: t };
}
var oe = function(t) {
  var a = new Uint8Array(t);
  return (0, te.parse)((0, re.buildStream)(a), ee.default);
}, P = x.parseGIF = oe, de = function(t) {
  for (var a = t.pixels.length, e = new Uint8ClampedArray(4 * a), n = 0; n < a; n++) {
    var i = 4 * n, d = t.pixels[n], o = t.colorTable[d] || [0, 0, 0];
    e[i] = o[0], e[i + 1] = o[1], e[i + 2] = o[2], e[i + 3] = d !== t.transparentIndex ? 255 : 0;
  }
  return e;
}, R = function(t, a, e) {
  if (t.image) {
    var n = t.image, i = n.descriptor.width * n.descriptor.height, d = (0, ae.lzw)(n.data.minCodeSize, n.data.blocks, i);
    n.descriptor.lct.interlaced && (d = (0, ne.deinterlace)(d, n.descriptor.width));
    var o = { pixels: d, dims: { top: t.image.descriptor.top, left: t.image.descriptor.left, width: t.image.descriptor.width, height: t.image.descriptor.height } };
    return n.descriptor.lct && n.descriptor.lct.exists ? o.colorTable = n.lct : o.colorTable = a, t.gce && (o.delay = 10 * (t.gce.delay || 10), o.disposalType = t.gce.extras.disposal, t.gce.extras.transparentColorGiven && (o.transparentIndex = t.gce.transparentColorIndex)), e && (o.patch = de(o)), o;
  }
  console.warn("gif frame does not have associated image.");
};
x.decompressFrame = R;
var se = function(t, a) {
  return t.frames.filter(function(e) {
    return e.image;
  }).map(function(e) {
    return R(e, t.gct, a);
  });
};
let I, U, D;
function ue(t, a) {
  return I ??= document.createElement("canvas"), I.width = t, I.height = a, I.getContext("2d", { willReadFrequently: !0 });
}
async function ge(t, a) {
  const e = P(t), n = G(e, !0), { width: i, height: d } = e.lsd, o = ue(i, d), c = [], l = [];
  let p = 0;
  for (const r of n) {
    const s = E(r.delay || 100);
    l.push(s), p += s;
    const u = ce(new ImageData(r.patch, r.dims.width, r.dims.height)), g = r.disposalType === 3 ? o.getImageData(r.dims.left, r.dims.top, r.dims.width, r.dims.height) : void 0;
    o.drawImage(u, r.dims.left, r.dims.top);
    const h = o.getImageData(0, 0, i, d);
    c.push(h), r.disposalType === 1 || (r.disposalType === 2 ? o.clearRect(r.dims.left, r.dims.top, r.dims.width, r.dims.height) : r.disposalType === 3 && o.putImageData(g, r.dims.left, r.dims.top));
  }
  return { frameCount: n.length, duration: p, frameDurations: l, getFrame: (r) => c[r], width: i, height: d };
}
function ce(t) {
  return U ??= document.createElement("canvas"), D ??= U.getContext("2d", { willReadFrequently: !0 }), U.width = t.width, U.height = t.height, D.putImageData(t, 0, 0), U;
}
G = x.decompressFrames = se;
const le = [71, 73, 70];
function fe(t) {
  const a = new Uint8Array(t);
  return !le.some((e, n) => e !== a[n]);
}
function ye(t) {
  if (!fe(t)) return !1;
  const a = new DataView(t), e = a.getUint8(10);
  let n = 13 + (128 & e ? 3 * 2 ** (1 + (7 & e)) : 0), i = 0, d = !1;
  for (; !d; ) {
    switch (a.getUint8(n++)) {
      case 33:
        if (!o()) return !1;
        break;
      case 44:
        c();
        break;
      case 59:
        d = !0;
        break;
      default:
        return !1;
    }
    if (i > 1) return !0;
  }
  function o() {
    switch (a.getUint8(n++)) {
      case 249:
        l();
        break;
      case 1:
        p();
        break;
      case 254:
        r();
        break;
      case 255:
        s();
        break;
      default:
        return !1;
    }
    return !0;
  }
  function c() {
    i++, n += 8;
    const g = a.getUint8(n++);
    n += 128 & g ? 3 * 2 ** (1 + (7 & g)) : 0, n++, u();
  }
  function l() {
    n++, n += 4, u();
  }
  function p() {
    i++, n++, n += 12, u();
  }
  function r() {
    u();
  }
  function s() {
    n++, n += 8, n += 3, u();
  }
  function u() {
    let g;
    for (; g = a.getUint8(n++); ) n += g;
  }
  return !1;
}
export {
  ye as isAnimatedGIF,
  fe as isGIF,
  ge as parseGif
};
//# sourceMappingURL=gif-wjxvz6Cb.js.map
