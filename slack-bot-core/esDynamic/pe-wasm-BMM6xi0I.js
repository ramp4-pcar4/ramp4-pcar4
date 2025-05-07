import { v as co } from "./main-CmejC-so.js";
var yr, J, ur, dr = { exports: {} };
yr = dr, J = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, typeof __filename < "u" && (J = J || __filename), ur = function(fe = {}) {
  var Ee, ce, t = fe;
  t.ready = new Promise((e, _) => {
    Ee = e, ce = _;
  });
  var se, Q, ee, be = Object.assign({}, t), me = "./this.program", Te = typeof window == "object", B = typeof importScripts == "function", Oe = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", Y = "";
  function fr(e) {
    return t.locateFile ? t.locateFile(e, Y) : Y + e;
  }
  if (Oe) {
    var Se = require("fs"), Pe = require("path");
    Y = B ? Pe.dirname(Y) + "/" : __dirname + "/", se = (e, _) => (e = pe(e) ? new URL(e) : Pe.normalize(e), Se.readFileSync(e, _ ? void 0 : "utf8")), ee = (e) => {
      var _ = se(e, !0);
      return _.buffer || (_ = new Uint8Array(_)), _;
    }, Q = (e, _, r, p = !0) => {
      e = pe(e) ? new URL(e) : Pe.normalize(e), Se.readFile(e, p ? void 0 : "utf8", (i, s) => {
        i ? r(i) : _(p ? s.buffer : s);
      });
    }, !t.thisProgram && process.argv.length > 1 && (me = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), t.inspect = () => "[Emscripten Module object]";
  } else (Te || B) && (B ? Y = self.location.href : typeof document < "u" && document.currentScript && (Y = document.currentScript.src), J && (Y = J), Y = Y.indexOf("blob:") !== 0 ? Y.substr(0, Y.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", se = (e) => {
    var _ = new XMLHttpRequest();
    return _.open("GET", e, !1), _.send(null), _.responseText;
  }, B && (ee = (e) => {
    var _ = new XMLHttpRequest();
    return _.open("GET", e, !1), _.responseType = "arraybuffer", _.send(null), new Uint8Array(_.response);
  }), Q = (e, _, r) => {
    var p = new XMLHttpRequest();
    p.open("GET", e, !0), p.responseType = "arraybuffer", p.onload = () => {
      p.status == 200 || p.status == 0 && p.response ? _(p.response) : r();
    }, p.onerror = r, p.send(null);
  });
  var ae, te, Er = console.log.bind(console), K = console.error.bind(console);
  Object.assign(t, be), be = null, typeof WebAssembly != "object" && W("no native wasm support detected");
  var X, Z, _e, D, j, re, oe, Ne = !1;
  function ge(e, _) {
    e || W(_);
  }
  function he() {
    var e = te.buffer;
    t.HEAP8 = X = new Int8Array(e), t.HEAP16 = _e = new Int16Array(e), t.HEAPU8 = Z = new Uint8Array(e), t.HEAPU16 = new Uint16Array(e), t.HEAP32 = D = new Int32Array(e), t.HEAPU32 = j = new Uint32Array(e), t.HEAPF32 = re = new Float32Array(e), t.HEAPF64 = oe = new Float64Array(e);
  }
  var br = [], le = [], mr = [];
  function Tr() {
    ye(br);
  }
  function Or() {
    ye(le);
  }
  function Sr() {
    ye(mr);
  }
  function Nr(e) {
    le.unshift(e);
  }
  var ne = 0, V = null;
  function hr(e) {
    ne++;
  }
  function lr(e) {
    if (--ne == 0 && V) {
      var _ = V;
      V = null, _();
    }
  }
  function W(e) {
    K(e = "Aborted(" + e + ")"), Ne = !0, e += ". Build with -sASSERTIONS for more info.";
    var _ = new WebAssembly.RuntimeError(e);
    throw ce(_), _;
  }
  var q, Mr = "data:application/octet-stream;base64,";
  function Me(e) {
    return e.startsWith(Mr);
  }
  function pe(e) {
    return e.startsWith("file://");
  }
  function ve(e) {
    if (e == q && ae) return new Uint8Array(ae);
    if (ee) return ee(e);
    throw "both async and sync fetching of the wasm failed";
  }
  function vr(e) {
    if (Te || B) {
      if (typeof fetch == "function" && !pe(e)) return fetch(e, { credentials: "same-origin" }).then((_) => {
        if (!_.ok) throw "failed to load wasm binary file at '" + e + "'";
        return _.arrayBuffer();
      }).catch(() => ve(e));
      if (Q) return new Promise((_, r) => {
        Q(e, (p) => _(new Uint8Array(p)), r);
      });
    }
    return Promise.resolve().then(() => ve(e));
  }
  function De(e, _, r) {
    return vr(e).then((p) => WebAssembly.instantiate(p, _)).then((p) => p).then(r, (p) => {
      K(`failed to asynchronously prepare wasm: ${p}`), W(p);
    });
  }
  function Dr(e, _, r, p) {
    return e || typeof WebAssembly.instantiateStreaming != "function" || Me(_) || pe(_) || Oe || typeof fetch != "function" ? De(_, r, p) : fetch(_, { credentials: "same-origin" }).then((i) => WebAssembly.instantiateStreaming(i, r).then(p, function(s) {
      return K(`wasm streaming compile failed: ${s}`), K("falling back to ArrayBuffer instantiation"), De(_, r, p);
    }));
  }
  function Rr() {
    var e = { a: qr };
    function _(p, i) {
      return o = p.exports, te = o.t, he(), Nr(o.u), lr(), o;
    }
    function r(p) {
      _(p.instance);
    }
    return hr(), Dr(ae, q, e, r).catch(ce), {};
  }
  Me(q = "pe-wasm.wasm") || (q = fr(q));
  var ye = (e) => {
    for (; e.length > 0; ) e.shift()(t);
  };
  function Ar(e, _ = "i8") {
    switch (_.endsWith("*") && (_ = "*"), _) {
      case "i1":
      case "i8":
        return X[e >> 0];
      case "i16":
        return _e[e >> 1];
      case "i32":
        return D[e >> 2];
      case "i64":
        W("to do getValue(i64) use WASM_BIGINT");
      case "float":
        return re[e >> 2];
      case "double":
        return oe[e >> 3];
      case "*":
        return j[e >> 2];
      default:
        W(`invalid type for getValue: ${_}`);
    }
  }
  var Re = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Ae = (e, _, r) => {
    for (var p = _ + r, i = _; e[i] && !(i >= p); ) ++i;
    if (i - _ > 16 && e.buffer && Re) return Re.decode(e.subarray(_, i));
    for (var s = ""; _ < i; ) {
      var g = e[_++];
      if (128 & g) {
        var a = 63 & e[_++];
        if ((224 & g) != 192) {
          var C = 63 & e[_++];
          if ((g = (240 & g) == 224 ? (15 & g) << 12 | a << 6 | C : (7 & g) << 18 | a << 12 | C << 6 | 63 & e[_++]) < 65536) s += String.fromCharCode(g);
          else {
            var z = g - 65536;
            s += String.fromCharCode(55296 | z >> 10, 56320 | 1023 & z);
          }
        } else s += String.fromCharCode((31 & g) << 6 | a);
      } else s += String.fromCharCode(g);
    }
    return s;
  }, L = (e, _) => e ? Ae(Z, e, _) : "";
  function Gr(e, _, r) {
    return 0;
  }
  var Ge = (e, _, r, p) => {
    if (!(p > 0)) return 0;
    for (var i = r, s = r + p - 1, g = 0; g < e.length; ++g) {
      var a = e.charCodeAt(g);
      if (a >= 55296 && a <= 57343 && (a = 65536 + ((1023 & a) << 10) | 1023 & e.charCodeAt(++g)), a <= 127) {
        if (r >= s) break;
        _[r++] = a;
      } else if (a <= 2047) {
        if (r + 1 >= s) break;
        _[r++] = 192 | a >> 6, _[r++] = 128 | 63 & a;
      } else if (a <= 65535) {
        if (r + 2 >= s) break;
        _[r++] = 224 | a >> 12, _[r++] = 128 | a >> 6 & 63, _[r++] = 128 | 63 & a;
      } else {
        if (r + 3 >= s) break;
        _[r++] = 240 | a >> 18, _[r++] = 128 | a >> 12 & 63, _[r++] = 128 | a >> 6 & 63, _[r++] = 128 | 63 & a;
      }
    }
    return _[r] = 0, r - i;
  }, Cr = (e, _, r) => Ge(e, Z, _, r);
  function Ir(e, _, r) {
    return 0;
  }
  function jr(e, _, r, p) {
  }
  var Ur = (e) => e % 4 == 0 && (e % 100 != 0 || e % 400 == 0), Lr = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335], Fr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], Yr = (e) => (Ur(e.getFullYear()) ? Lr : Fr)[e.getMonth()] + e.getDate() - 1, wr = (e, _) => _ + 2097152 >>> 0 < 4194305 - !!e ? (e >>> 0) + 4294967296 * _ : NaN;
  function xr(e, _, r) {
    var p = wr(e, _), i = new Date(1e3 * p);
    D[r >> 2] = i.getSeconds(), D[r + 4 >> 2] = i.getMinutes(), D[r + 8 >> 2] = i.getHours(), D[r + 12 >> 2] = i.getDate(), D[r + 16 >> 2] = i.getMonth(), D[r + 20 >> 2] = i.getFullYear() - 1900, D[r + 24 >> 2] = i.getDay();
    var s = 0 | Yr(i);
    D[r + 28 >> 2] = s, D[r + 36 >> 2] = -60 * i.getTimezoneOffset();
    var g = new Date(i.getFullYear(), 0, 1), a = new Date(i.getFullYear(), 6, 1).getTimezoneOffset(), C = g.getTimezoneOffset(), z = 0 | (a != C && i.getTimezoneOffset() == Math.min(C, a));
    D[r + 32 >> 2] = z;
  }
  var Ce = (e) => {
    for (var _ = 0, r = 0; r < e.length; ++r) {
      var p = e.charCodeAt(r);
      p <= 127 ? _++ : p <= 2047 ? _ += 2 : p >= 55296 && p <= 57343 ? (_ += 4, ++r) : _ += 3;
    }
    return _;
  }, Ie = (e) => {
    var _ = Ce(e) + 1, r = je(_);
    return r && Cr(e, r, _), r;
  }, Hr = () => 2147483648, Xr = (e) => {
    var _ = (e - te.buffer.byteLength + 65535) / 65536;
    try {
      return te.grow(_), he(), 1;
    } catch {
    }
  }, ue = {}, zr = () => me || "./this.program", k = () => {
    if (!k.strings) {
      var e = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: zr() };
      for (var _ in ue) ue[_] === void 0 ? delete e[_] : e[_] = ue[_];
      var r = [];
      for (var _ in e) r.push(`${_}=${e[_]}`);
      k.strings = r;
    }
    return k.strings;
  }, Zr = (e, _) => {
    for (var r = 0; r < e.length; ++r) X[_++ >> 0] = e.charCodeAt(r);
    X[_ >> 0] = 0;
  };
  function Wr(e, _, r, p, i) {
    return 70;
  }
  var Br = [null, [], []], Kr = (e, _) => {
    var r = Br[e];
    _ === 0 || _ === 10 ? ((e === 1 ? Er : K)(Ae(r, 0)), r.length = 0) : r.push(_);
  };
  function Vr(e, _, r) {
    var p = Ce(e) + 1, i = new Array(p);
    return Ge(e, i, 0, i.length), i;
  }
  var qr = { c: Gr, r: (e, _, r) => {
  }, h: Ir, d: jr, p: (e) => {
  }, o: (e, _) => {
  }, q: (e, _, r) => {
  }, j: xr, n: (e, _, r) => {
    var p = (/* @__PURE__ */ new Date()).getFullYear(), i = new Date(p, 0, 1), s = new Date(p, 6, 1), g = i.getTimezoneOffset(), a = s.getTimezoneOffset(), C = Math.max(g, a);
    function z(io) {
      var gr = io.toTimeString().match(/\(([A-Za-z ]+)\)$/);
      return gr ? gr[1] : "GMT";
    }
    j[e >> 2] = 60 * C, D[_ >> 2] = +(g != a);
    var no = z(i), po = z(s), Pr = Ie(no), ar = Ie(po);
    a < g ? (j[r >> 2] = Pr, j[r + 4 >> 2] = ar) : (j[r >> 2] = ar, j[r + 4 >> 2] = Pr);
  }, l: () => {
    W("");
  }, i: () => Date.now(), s: (e, _, r) => Z.copyWithin(e, _, _ + r), m: (e) => {
    var _ = Z.length;
    e >>>= 0;
    var r = Hr();
    if (e > r) return !1;
    for (var p = (a, C) => a + (C - a % C) % C, i = 1; i <= 4; i *= 2) {
      var s = _ * (1 + 0.2 / i);
      s = Math.min(s, e + 100663296);
      var g = Math.min(r, p(Math.max(e, s), 65536));
      if (Xr(g)) return !0;
    }
    return !1;
  }, e: (e, _) => {
    var r = 0;
    return k().forEach((p, i) => {
      var s = _ + r;
      j[e + 4 * i >> 2] = s, Zr(p, s), r += p.length + 1;
    }), 0;
  }, f: (e, _) => {
    var r = k();
    j[e >> 2] = r.length;
    var p = 0;
    return r.forEach((i) => p += i.length + 1), j[_ >> 2] = p, 0;
  }, a: (e) => 52, g: (e, _, r, p) => 52, k: Wr, b: (e, _, r, p) => {
    for (var i = 0, s = 0; s < r; s++) {
      var g = j[_ >> 2], a = j[_ + 4 >> 2];
      _ += 8;
      for (var C = 0; C < a; C++) Kr(e, Z[g + C]);
      i += a;
    }
    return j[p >> 2] = i, 0;
  } }, o = Rr();
  t._webidl_free = (e) => (t._webidl_free = o.v)(e), t._webidl_malloc = (e) => (t._webidl_malloc = o.w)(e);
  var ie, je = (e) => (je = o.x)(e), Ue = t._emscripten_bind_PeObject_getCode_0 = (e) => (Ue = t._emscripten_bind_PeObject_getCode_0 = o.y)(e), Le = t._emscripten_bind_PeObject_getName_1 = (e, _) => (Le = t._emscripten_bind_PeObject_getName_1 = o.z)(e, _), Fe = t._emscripten_bind_PeObject_getType_0 = (e) => (Fe = t._emscripten_bind_PeObject_getType_0 = o.A)(e), Ye = t._emscripten_bind_PeCoordsys_getCode_0 = (e) => (Ye = t._emscripten_bind_PeCoordsys_getCode_0 = o.B)(e), we = t._emscripten_bind_PeCoordsys_getName_1 = (e, _) => (we = t._emscripten_bind_PeCoordsys_getName_1 = o.C)(e, _), xe = t._emscripten_bind_PeCoordsys_getType_0 = (e) => (xe = t._emscripten_bind_PeCoordsys_getType_0 = o.D)(e), He = t._emscripten_bind_VoidPtr___destroy___0 = (e) => (He = t._emscripten_bind_VoidPtr___destroy___0 = o.E)(e), Xe = t._emscripten_bind_PeDatum_getSpheroid_0 = (e) => (Xe = t._emscripten_bind_PeDatum_getSpheroid_0 = o.F)(e), ze = t._emscripten_bind_PeDatum_getCode_0 = (e) => (ze = t._emscripten_bind_PeDatum_getCode_0 = o.G)(e), Ze = t._emscripten_bind_PeDatum_getName_1 = (e, _) => (Ze = t._emscripten_bind_PeDatum_getName_1 = o.H)(e, _), We = t._emscripten_bind_PeDatum_getType_0 = (e) => (We = t._emscripten_bind_PeDatum_getType_0 = o.I)(e), Be = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = (e) => (Be = t._emscripten_bind_PeDefs_get_PE_BUFFER_MAX_0 = o.J)(e), Ke = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = (e) => (Ke = t._emscripten_bind_PeDefs_get_PE_NAME_MAX_0 = o.K)(e), Ve = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = (e) => (Ve = t._emscripten_bind_PeDefs_get_PE_MGRS_MAX_0 = o.L)(e), qe = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = (e) => (qe = t._emscripten_bind_PeDefs_get_PE_USNG_MAX_0 = o.M)(e), ke = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = (e) => (ke = t._emscripten_bind_PeDefs_get_PE_DD_MAX_0 = o.N)(e), $e = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = (e) => ($e = t._emscripten_bind_PeDefs_get_PE_DMS_MAX_0 = o.O)(e), Je = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = (e) => (Je = t._emscripten_bind_PeDefs_get_PE_DDM_MAX_0 = o.P)(e), Qe = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = (e) => (Qe = t._emscripten_bind_PeDefs_get_PE_UTM_MAX_0 = o.Q)(e), et = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = (e) => (et = t._emscripten_bind_PeDefs_get_PE_PARM_MAX_0 = o.R)(e), tt = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = (e) => (tt = t._emscripten_bind_PeDefs_get_PE_TYPE_NONE_0 = o.S)(e), _t = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = (e) => (_t = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGCS_0 = o.T)(e), rt = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = (e) => (rt = t._emscripten_bind_PeDefs_get_PE_TYPE_PROJCS_0 = o.U)(e), ot = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = (e) => (ot = t._emscripten_bind_PeDefs_get_PE_TYPE_GEOGTRAN_0 = o.V)(e), nt = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = (e) => (nt = t._emscripten_bind_PeDefs_get_PE_TYPE_COORDSYS_0 = o.W)(e), pt = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = (e) => (pt = t._emscripten_bind_PeDefs_get_PE_TYPE_UNIT_0 = o.X)(e), it = t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = (e) => (it = t._emscripten_bind_PeDefs_get_PE_TYPE_LINUNIT_0 = o.Y)(e), ct = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = (e) => (ct = t._emscripten_bind_PeDefs_get_PE_STR_OPTS_NONE_0 = o.Z)(e), st = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = (e) => (st = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_NONE_0 = o._)(e), Pt = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = (e) => (Pt = t._emscripten_bind_PeDefs_get_PE_STR_AUTH_TOP_0 = o.$)(e), at = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = (e) => (at = t._emscripten_bind_PeDefs_get_PE_STR_NAME_CANON_0 = o.aa)(e), gt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = (e) => (gt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT_0 = o.ba)(e), yt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = (e) => (yt = t._emscripten_bind_PeDefs_get_PE_STR_FMT_WKT2_0 = o.ca)(e), ut = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = (e) => (ut = t._emscripten_bind_PeDefs_get_PE_PARM_X0_0 = o.da)(e), dt = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = (e) => (dt = t._emscripten_bind_PeDefs_get_PE_PARM_ND_0 = o.ea)(e), ft = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = (e) => (ft = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_1_TO_2_0 = o.fa)(e), Et = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = (e) => (Et = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_2_TO_1_0 = o.ga)(e), bt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = (e) => (bt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_P_TO_G_0 = o.ha)(e), mt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = (e) => (mt = t._emscripten_bind_PeDefs_get_PE_TRANSFORM_G_TO_P_0 = o.ia)(e), Tt = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = (e) => (Tt = t._emscripten_bind_PeDefs_get_PE_HORIZON_RECT_0 = o.ja)(e), Ot = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = (e) => (Ot = t._emscripten_bind_PeDefs_get_PE_HORIZON_POLY_0 = o.ka)(e), St = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = (e) => (St = t._emscripten_bind_PeDefs_get_PE_HORIZON_LINE_0 = o.la)(e), Nt = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = (e) => (Nt = t._emscripten_bind_PeDefs_get_PE_HORIZON_DELTA_0 = o.ma)(e), ht = t._emscripten_bind_PeFactory_initialize_1 = (e, _) => (ht = t._emscripten_bind_PeFactory_initialize_1 = o.na)(e, _), lt = t._emscripten_bind_PeFactory_factoryByType_2 = (e, _, r) => (lt = t._emscripten_bind_PeFactory_factoryByType_2 = o.oa)(e, _, r), Mt = t._emscripten_bind_PeFactory_fromString_2 = (e, _, r) => (Mt = t._emscripten_bind_PeFactory_fromString_2 = o.pa)(e, _, r), vt = t._emscripten_bind_PeFactory_getCode_1 = (e, _) => (vt = t._emscripten_bind_PeFactory_getCode_1 = o.qa)(e, _), Dt = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = (e, _, r, p, i, s) => (Dt = t._emscripten_bind_PeGCSExtent_PeGCSExtent_6 = o.ra)(e, _, r, p, i, s), Rt = t._emscripten_bind_PeGCSExtent_getLLon_0 = (e) => (Rt = t._emscripten_bind_PeGCSExtent_getLLon_0 = o.sa)(e), At = t._emscripten_bind_PeGCSExtent_getSLat_0 = (e) => (At = t._emscripten_bind_PeGCSExtent_getSLat_0 = o.ta)(e), Gt = t._emscripten_bind_PeGCSExtent_getRLon_0 = (e) => (Gt = t._emscripten_bind_PeGCSExtent_getRLon_0 = o.ua)(e), Ct = t._emscripten_bind_PeGCSExtent_getNLat_0 = (e) => (Ct = t._emscripten_bind_PeGCSExtent_getNLat_0 = o.va)(e), It = t._emscripten_bind_PeGCSExtent___destroy___0 = (e) => (It = t._emscripten_bind_PeGCSExtent___destroy___0 = o.wa)(e), jt = t._emscripten_bind_PeGeogcs_getDatum_0 = (e) => (jt = t._emscripten_bind_PeGeogcs_getDatum_0 = o.xa)(e), Ut = t._emscripten_bind_PeGeogcs_getPrimem_0 = (e) => (Ut = t._emscripten_bind_PeGeogcs_getPrimem_0 = o.ya)(e), Lt = t._emscripten_bind_PeGeogcs_getUnit_0 = (e) => (Lt = t._emscripten_bind_PeGeogcs_getUnit_0 = o.za)(e), Ft = t._emscripten_bind_PeGeogcs_getCode_0 = (e) => (Ft = t._emscripten_bind_PeGeogcs_getCode_0 = o.Aa)(e), Yt = t._emscripten_bind_PeGeogcs_getName_1 = (e, _) => (Yt = t._emscripten_bind_PeGeogcs_getName_1 = o.Ba)(e, _), wt = t._emscripten_bind_PeGeogcs_getType_0 = (e) => (wt = t._emscripten_bind_PeGeogcs_getType_0 = o.Ca)(e), xt = t._emscripten_bind_PeGeogtran_isEqual_1 = (e, _) => (xt = t._emscripten_bind_PeGeogtran_isEqual_1 = o.Da)(e, _), Ht = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = (e) => (Ht = t._emscripten_bind_PeGeogtran_getGeogcs1_0 = o.Ea)(e), Xt = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = (e) => (Xt = t._emscripten_bind_PeGeogtran_getGeogcs2_0 = o.Fa)(e), zt = t._emscripten_bind_PeGeogtran_getParameters_0 = (e) => (zt = t._emscripten_bind_PeGeogtran_getParameters_0 = o.Ga)(e), Zt = t._emscripten_bind_PeGeogtran_loadConstants_0 = (e) => (Zt = t._emscripten_bind_PeGeogtran_loadConstants_0 = o.Ha)(e), Wt = t._emscripten_bind_PeGeogtran_getCode_0 = (e) => (Wt = t._emscripten_bind_PeGeogtran_getCode_0 = o.Ia)(e), Bt = t._emscripten_bind_PeGeogtran_getName_1 = (e, _) => (Bt = t._emscripten_bind_PeGeogtran_getName_1 = o.Ja)(e, _), Kt = t._emscripten_bind_PeGeogtran_getType_0 = (e) => (Kt = t._emscripten_bind_PeGeogtran_getType_0 = o.Ka)(e), Vt = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = (e, _, r, p, i, s, g) => (Vt = t._emscripten_bind_PeGTlistExtended_getGTlist_6 = o.La)(e, _, r, p, i, s, g), qt = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = (e) => (qt = t._emscripten_bind_PeGTlistExtended_get_PE_GTLIST_OPTS_COMMON_0 = o.Ma)(e), kt = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = (e) => (kt = t._emscripten_bind_PeGTlistExtendedEntry_getEntries_0 = o.Na)(e), $t = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = (e) => ($t = t._emscripten_bind_PeGTlistExtendedEntry_getSteps_0 = o.Oa)(e), Jt = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = (e, _) => (Jt = t._emscripten_bind_PeGTlistExtendedEntry_Delete_1 = o.Pa)(e, _), Qt = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = (e) => (Qt = t._emscripten_bind_PeGTlistExtendedGTs_getDirection_0 = o.Qa)(e), e_ = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = (e) => (e_ = t._emscripten_bind_PeGTlistExtendedGTs_getGeogtran_0 = o.Ra)(e), t_ = t._emscripten_bind_PeHorizon_getNump_0 = (e) => (t_ = t._emscripten_bind_PeHorizon_getNump_0 = o.Sa)(e), __ = t._emscripten_bind_PeHorizon_getKind_0 = (e) => (__ = t._emscripten_bind_PeHorizon_getKind_0 = o.Ta)(e), r_ = t._emscripten_bind_PeHorizon_getInclusive_0 = (e) => (r_ = t._emscripten_bind_PeHorizon_getInclusive_0 = o.Ua)(e), o_ = t._emscripten_bind_PeHorizon_getSize_0 = (e) => (o_ = t._emscripten_bind_PeHorizon_getSize_0 = o.Va)(e), n_ = t._emscripten_bind_PeHorizon_getCoord_0 = (e) => (n_ = t._emscripten_bind_PeHorizon_getCoord_0 = o.Wa)(e), p_ = t._emscripten_bind_PeInteger_PeInteger_1 = (e) => (p_ = t._emscripten_bind_PeInteger_PeInteger_1 = o.Xa)(e), i_ = t._emscripten_bind_PeInteger_get_val_0 = (e) => (i_ = t._emscripten_bind_PeInteger_get_val_0 = o.Ya)(e), c_ = t._emscripten_bind_PeInteger_set_val_1 = (e, _) => (c_ = t._emscripten_bind_PeInteger_set_val_1 = o.Za)(e, _), s_ = t._emscripten_bind_PeInteger___destroy___0 = (e) => (s_ = t._emscripten_bind_PeInteger___destroy___0 = o._a)(e), P_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = (e) => (P_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_NEW_0 = o.$a)(e), a_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = (e) => (a_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_OLD_0 = o.ab)(e), g_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = (e) => (g_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_STYLE_AUTO_0 = o.bb)(e), y_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = (e) => (y_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_180_ZONE_1_PLUS_0 = o.cb)(e), u_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = (e) => (u_ = t._emscripten_bind_PeNotationMgrs_get_PE_MGRS_ADD_SPACES_0 = o.db)(e), d_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = (e) => (d_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NONE_0 = o.eb)(e), f_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = (e) => (f_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_0 = o.fb)(e), E_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = (e) => (E_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_NS_STRICT_0 = o.gb)(e), b_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = (e) => (b_ = t._emscripten_bind_PeNotationUtm_get_PE_UTM_OPTS_ADD_SPACES_0 = o.hb)(e), m_ = t._emscripten_bind_PeParameter_getValue_0 = (e) => (m_ = t._emscripten_bind_PeParameter_getValue_0 = o.ib)(e), T_ = t._emscripten_bind_PeParameter_getCode_0 = (e) => (T_ = t._emscripten_bind_PeParameter_getCode_0 = o.jb)(e), O_ = t._emscripten_bind_PeParameter_getName_1 = (e, _) => (O_ = t._emscripten_bind_PeParameter_getName_1 = o.kb)(e, _), S_ = t._emscripten_bind_PeParameter_getType_0 = (e) => (S_ = t._emscripten_bind_PeParameter_getType_0 = o.lb)(e), N_ = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = (e) => (N_ = t._emscripten_bind_PePCSInfo_getCentralMeridian_0 = o.mb)(e), h_ = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = (e) => (h_ = t._emscripten_bind_PePCSInfo_getDomainMinx_0 = o.nb)(e), l_ = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = (e) => (l_ = t._emscripten_bind_PePCSInfo_getDomainMiny_0 = o.ob)(e), M_ = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = (e) => (M_ = t._emscripten_bind_PePCSInfo_getDomainMaxx_0 = o.pb)(e), v_ = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = (e) => (v_ = t._emscripten_bind_PePCSInfo_getDomainMaxy_0 = o.qb)(e), D_ = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = (e) => (D_ = t._emscripten_bind_PePCSInfo_getNorthPoleLocation_0 = o.rb)(e), R_ = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = (e) => (R_ = t._emscripten_bind_PePCSInfo_getNorthPoleGeometry_0 = o.sb)(e), A_ = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = (e) => (A_ = t._emscripten_bind_PePCSInfo_getSouthPoleLocation_0 = o.tb)(e), G_ = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = (e) => (G_ = t._emscripten_bind_PePCSInfo_getSouthPoleGeometry_0 = o.ub)(e), C_ = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = (e) => (C_ = t._emscripten_bind_PePCSInfo_isDensificationNeeded_0 = o.vb)(e), I_ = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = (e) => (I_ = t._emscripten_bind_PePCSInfo_isGcsHorizonMultiOverlap_0 = o.wb)(e), j_ = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = (e) => (j_ = t._emscripten_bind_PePCSInfo_isPannableRectangle_0 = o.xb)(e), U_ = t._emscripten_bind_PePCSInfo_generate_2 = (e, _, r) => (U_ = t._emscripten_bind_PePCSInfo_generate_2 = o.yb)(e, _, r), L_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = (e) => (L_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_NONE_0 = o.zb)(e), F_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = (e) => (F_ = t._emscripten_bind_PePCSInfo_get_PE_PCSINFO_OPTION_DOMAIN_0 = o.Ab)(e), Y_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = (e) => (Y_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_OUTSIDE_BOUNDARY_0 = o.Bb)(e), w_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = (e) => (w_ = t._emscripten_bind_PePCSInfo_get_PE_POLE_POINT_0 = o.Cb)(e), x_ = t._emscripten_bind_PePrimem_getLongitude_0 = (e) => (x_ = t._emscripten_bind_PePrimem_getLongitude_0 = o.Db)(e), H_ = t._emscripten_bind_PePrimem_getCode_0 = (e) => (H_ = t._emscripten_bind_PePrimem_getCode_0 = o.Eb)(e), X_ = t._emscripten_bind_PePrimem_getName_1 = (e, _) => (X_ = t._emscripten_bind_PePrimem_getName_1 = o.Fb)(e, _), z_ = t._emscripten_bind_PePrimem_getType_0 = (e) => (z_ = t._emscripten_bind_PePrimem_getType_0 = o.Gb)(e), Z_ = t._emscripten_bind_PeProjcs_getGeogcs_0 = (e) => (Z_ = t._emscripten_bind_PeProjcs_getGeogcs_0 = o.Hb)(e), W_ = t._emscripten_bind_PeProjcs_getParameters_0 = (e) => (W_ = t._emscripten_bind_PeProjcs_getParameters_0 = o.Ib)(e), B_ = t._emscripten_bind_PeProjcs_getUnit_0 = (e) => (B_ = t._emscripten_bind_PeProjcs_getUnit_0 = o.Jb)(e), K_ = t._emscripten_bind_PeProjcs_loadConstants_0 = (e) => (K_ = t._emscripten_bind_PeProjcs_loadConstants_0 = o.Kb)(e), V_ = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = (e) => (V_ = t._emscripten_bind_PeProjcs_horizonGcsGenerate_0 = o.Lb)(e), q_ = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = (e) => (q_ = t._emscripten_bind_PeProjcs_horizonPcsGenerate_0 = o.Mb)(e), k_ = t._emscripten_bind_PeProjcs_getCode_0 = (e) => (k_ = t._emscripten_bind_PeProjcs_getCode_0 = o.Nb)(e), $_ = t._emscripten_bind_PeProjcs_getName_1 = (e, _) => ($_ = t._emscripten_bind_PeProjcs_getName_1 = o.Ob)(e, _), J_ = t._emscripten_bind_PeProjcs_getType_0 = (e) => (J_ = t._emscripten_bind_PeProjcs_getType_0 = o.Pb)(e), Q_ = t._emscripten_bind_PeSpheroid_getAxis_0 = (e) => (Q_ = t._emscripten_bind_PeSpheroid_getAxis_0 = o.Qb)(e), er = t._emscripten_bind_PeSpheroid_getFlattening_0 = (e) => (er = t._emscripten_bind_PeSpheroid_getFlattening_0 = o.Rb)(e), tr = t._emscripten_bind_PeSpheroid_getCode_0 = (e) => (tr = t._emscripten_bind_PeSpheroid_getCode_0 = o.Sb)(e), _r = t._emscripten_bind_PeSpheroid_getName_1 = (e, _) => (_r = t._emscripten_bind_PeSpheroid_getName_1 = o.Tb)(e, _), rr = t._emscripten_bind_PeSpheroid_getType_0 = (e) => (rr = t._emscripten_bind_PeSpheroid_getType_0 = o.Ub)(e), or = t._emscripten_bind_PeUnit_getUnitFactor_0 = (e) => (or = t._emscripten_bind_PeUnit_getUnitFactor_0 = o.Vb)(e), nr = t._emscripten_bind_PeUnit_getCode_0 = (e) => (nr = t._emscripten_bind_PeUnit_getCode_0 = o.Wb)(e), pr = t._emscripten_bind_PeUnit_getName_1 = (e, _) => (pr = t._emscripten_bind_PeUnit_getName_1 = o.Xb)(e, _), ir = t._emscripten_bind_PeUnit_getType_0 = (e) => (ir = t._emscripten_bind_PeUnit_getType_0 = o.Yb)(e), cr = t._emscripten_bind_PeVersion_version_string_0 = (e) => (cr = t._emscripten_bind_PeVersion_version_string_0 = o.Zb)(e);
  function sr() {
    function e() {
      ie || (ie = !0, t.calledRun = !0, Ne || (Or(), Ee(t), Sr()));
    }
    ne > 0 || (Tr(), ne > 0 || e());
  }
  function d() {
  }
  function $(e) {
    return (e || d).__cache__;
  }
  function T(e, _) {
    var r = $(_), p = r[e];
    return p || ((p = Object.create((_ || d).prototype)).ptr = e, r[e] = p);
  }
  function kr(e, _) {
    return T(e.ptr, _);
  }
  function $r(e) {
    if (!e.__destroy__) throw "Error: Cannot destroy object. (Did you create it yourself?)";
    e.__destroy__(), delete $(e.__class__)[e.ptr];
  }
  function Jr(e, _) {
    return e.ptr === _.ptr;
  }
  function Qr(e) {
    return e.ptr;
  }
  function eo(e) {
    return e.__class__;
  }
  t._pe_getPeGTlistExtendedEntrySize = () => (t._pe_getPeGTlistExtendedEntrySize = o._b)(), t._pe_getPeGTlistExtendedGTsSize = () => (t._pe_getPeGTlistExtendedGTsSize = o.$b)(), t._pe_getPeHorizonSize = () => (t._pe_getPeHorizonSize = o.ac)(), t._pe_geog_to_geog = (e, _, r, p, i) => (t._pe_geog_to_geog = o.cc)(e, _, r, p, i), t._pe_geog_to_proj = (e, _, r) => (t._pe_geog_to_proj = o.dc)(e, _, r), t._pe_geog_to_dd = (e, _, r, p, i) => (t._pe_geog_to_dd = o.ec)(e, _, r, p, i), t._pe_dd_to_geog = (e, _, r, p) => (t._pe_dd_to_geog = o.fc)(e, _, r, p), t._pe_geog_to_ddm = (e, _, r, p, i) => (t._pe_geog_to_ddm = o.gc)(e, _, r, p, i), t._pe_ddm_to_geog = (e, _, r, p) => (t._pe_ddm_to_geog = o.hc)(e, _, r, p), t._pe_geog_to_dms = (e, _, r, p, i) => (t._pe_geog_to_dms = o.ic)(e, _, r, p, i), t._pe_dms_to_geog = (e, _, r, p) => (t._pe_dms_to_geog = o.jc)(e, _, r, p), t._pe_geog_to_mgrs_extended = (e, _, r, p, i, s, g) => (t._pe_geog_to_mgrs_extended = o.kc)(e, _, r, p, i, s, g), t._pe_mgrs_to_geog_extended = (e, _, r, p, i) => (t._pe_mgrs_to_geog_extended = o.lc)(e, _, r, p, i), t._pe_geog_to_usng = (e, _, r, p, i, s, g) => (t._pe_geog_to_usng = o.mc)(e, _, r, p, i, s, g), t._pe_usng_to_geog = (e, _, r, p) => (t._pe_usng_to_geog = o.nc)(e, _, r, p), t._pe_geog_to_utm = (e, _, r, p, i) => (t._pe_geog_to_utm = o.oc)(e, _, r, p, i), t._pe_utm_to_geog = (e, _, r, p, i) => (t._pe_utm_to_geog = o.pc)(e, _, r, p, i), t._pe_object_to_string_ext = (e, _, r) => (t._pe_object_to_string_ext = o.qc)(e, _, r), t._pe_proj_to_geog_center = (e, _, r, p) => (t._pe_proj_to_geog_center = o.rc)(e, _, r, p), t.___start_em_js = 2033306, t.___stop_em_js = 2033404, t.getValue = Ar, t.UTF8ToString = L, V = function e() {
    ie || sr(), ie || (V = e);
  }, sr(), d.prototype = Object.create(d.prototype), d.prototype.constructor = d, d.prototype.__class__ = d, d.__cache__ = {}, t.WrapperObject = d, t.getCache = $, t.wrapPointer = T, t.castObject = kr, t.NULL = T(0), t.destroy = $r, t.compare = Jr, t.getPointer = Qr, t.getClass = eo;
  var P = { buffer: 0, size: 0, pos: 0, temps: [], needed: 0, prepare() {
    if (P.needed) {
      for (var e = 0; e < P.temps.length; e++) t._webidl_free(P.temps[e]);
      P.temps.length = 0, t._webidl_free(P.buffer), P.buffer = 0, P.size += P.needed, P.needed = 0;
    }
    P.buffer || (P.size += 128, P.buffer = t._webidl_malloc(P.size), ge(P.buffer)), P.pos = 0;
  }, alloc(e, _) {
    ge(P.buffer);
    var r, p = _.BYTES_PER_ELEMENT, i = e.length * p;
    return i = i + 7 & -8, P.pos + i >= P.size ? (ge(i > 0), P.needed += i, r = t._webidl_malloc(i), P.temps.push(r)) : (r = P.buffer + P.pos, P.pos += i), r;
  }, copy(e, _, r) {
    switch (r >>>= 0, _.BYTES_PER_ELEMENT) {
      case 2:
        r >>>= 1;
        break;
      case 4:
        r >>>= 2;
        break;
      case 8:
        r >>>= 3;
    }
    for (var p = 0; p < e.length; p++) _[r + p] = e[p];
  } };
  function de(e) {
    if (typeof e == "string") {
      var _ = Vr(e), r = P.alloc(_, X);
      return P.copy(_, X, r), r;
    }
    return e;
  }
  function w(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, X);
      return P.copy(e, X, _), _;
    }
    return e;
  }
  function to(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, _e);
      return P.copy(e, _e, _), _;
    }
    return e;
  }
  function _o(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, D);
      return P.copy(e, D, _), _;
    }
    return e;
  }
  function ro(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, re);
      return P.copy(e, re, _), _;
    }
    return e;
  }
  function oo(e) {
    if (typeof e == "object") {
      var _ = P.alloc(e, oe);
      return P.copy(e, oe, _), _;
    }
    return e;
  }
  function b() {
    throw "cannot construct a PeObject, no constructor in IDL";
  }
  function R() {
    throw "cannot construct a PeCoordsys, no constructor in IDL";
  }
  function x() {
    throw "cannot construct a VoidPtr, no constructor in IDL";
  }
  function M() {
    throw "cannot construct a PeDatum, no constructor in IDL";
  }
  function n() {
    throw "cannot construct a PeDefs, no constructor in IDL";
  }
  function A() {
    throw "cannot construct a PeFactory, no constructor in IDL";
  }
  function S(e, _, r, p, i, s) {
    e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), r && typeof r == "object" && (r = r.ptr), p && typeof p == "object" && (p = p.ptr), i && typeof i == "object" && (i = i.ptr), s && typeof s == "object" && (s = s.ptr), this.ptr = Dt(e, _, r, p, i, s), $(S)[this.ptr] = this;
  }
  function m() {
    throw "cannot construct a PeGeogcs, no constructor in IDL";
  }
  function f() {
    throw "cannot construct a PeGeogtran, no constructor in IDL";
  }
  function U() {
    throw "cannot construct a PeGTlistExtended, no constructor in IDL";
  }
  function I() {
    throw "cannot construct a PeGTlistExtendedEntry, no constructor in IDL";
  }
  function F() {
    throw "cannot construct a PeGTlistExtendedGTs, no constructor in IDL";
  }
  function O() {
    throw "cannot construct a PeHorizon, no constructor in IDL";
  }
  function h(e) {
    e && typeof e == "object" && (e = e.ptr), this.ptr = p_(e), $(h)[this.ptr] = this;
  }
  function y() {
    throw "cannot construct a PeNotationMgrs, no constructor in IDL";
  }
  function E() {
    throw "cannot construct a PeNotationUtm, no constructor in IDL";
  }
  function G() {
    throw "cannot construct a PeParameter, no constructor in IDL";
  }
  function c() {
    throw "cannot construct a PePCSInfo, no constructor in IDL";
  }
  function v() {
    throw "cannot construct a PePrimem, no constructor in IDL";
  }
  function u() {
    throw "cannot construct a PeProjcs, no constructor in IDL";
  }
  function N() {
    throw "cannot construct a PeSpheroid, no constructor in IDL";
  }
  function l() {
    throw "cannot construct a PeUnit, no constructor in IDL";
  }
  function H() {
    throw "cannot construct a PeVersion, no constructor in IDL";
  }
  return b.prototype = Object.create(d.prototype), b.prototype.constructor = b, b.prototype.__class__ = b, b.__cache__ = {}, t.PeObject = b, b.prototype.getCode = b.prototype.getCode = function() {
    var e = this.ptr;
    return Ue(e);
  }, b.prototype.getName = b.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(Le(_, e));
  }, b.prototype.getType = b.prototype.getType = function() {
    var e = this.ptr;
    return Fe(e);
  }, R.prototype = Object.create(b.prototype), R.prototype.constructor = R, R.prototype.__class__ = R, R.__cache__ = {}, t.PeCoordsys = R, R.prototype.getCode = R.prototype.getCode = function() {
    var e = this.ptr;
    return Ye(e);
  }, R.prototype.getName = R.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(we(_, e));
  }, R.prototype.getType = R.prototype.getType = function() {
    var e = this.ptr;
    return xe(e);
  }, x.prototype = Object.create(d.prototype), x.prototype.constructor = x, x.prototype.__class__ = x, x.__cache__ = {}, t.VoidPtr = x, x.prototype.__destroy__ = x.prototype.__destroy__ = function() {
    var e = this.ptr;
    He(e);
  }, M.prototype = Object.create(b.prototype), M.prototype.constructor = M, M.prototype.__class__ = M, M.__cache__ = {}, t.PeDatum = M, M.prototype.getSpheroid = M.prototype.getSpheroid = function() {
    var e = this.ptr;
    return T(Xe(e), N);
  }, M.prototype.getCode = M.prototype.getCode = function() {
    var e = this.ptr;
    return ze(e);
  }, M.prototype.getName = M.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(Ze(_, e));
  }, M.prototype.getType = M.prototype.getType = function() {
    var e = this.ptr;
    return We(e);
  }, n.prototype = Object.create(d.prototype), n.prototype.constructor = n, n.prototype.__class__ = n, n.__cache__ = {}, t.PeDefs = n, n.prototype.get_PE_BUFFER_MAX = n.prototype.get_PE_BUFFER_MAX = function() {
    var e = this.ptr;
    return Be(e);
  }, Object.defineProperty(n.prototype, "PE_BUFFER_MAX", { get: n.prototype.get_PE_BUFFER_MAX }), n.prototype.get_PE_NAME_MAX = n.prototype.get_PE_NAME_MAX = function() {
    var e = this.ptr;
    return Ke(e);
  }, Object.defineProperty(n.prototype, "PE_NAME_MAX", { get: n.prototype.get_PE_NAME_MAX }), n.prototype.get_PE_MGRS_MAX = n.prototype.get_PE_MGRS_MAX = function() {
    var e = this.ptr;
    return Ve(e);
  }, Object.defineProperty(n.prototype, "PE_MGRS_MAX", { get: n.prototype.get_PE_MGRS_MAX }), n.prototype.get_PE_USNG_MAX = n.prototype.get_PE_USNG_MAX = function() {
    var e = this.ptr;
    return qe(e);
  }, Object.defineProperty(n.prototype, "PE_USNG_MAX", { get: n.prototype.get_PE_USNG_MAX }), n.prototype.get_PE_DD_MAX = n.prototype.get_PE_DD_MAX = function() {
    var e = this.ptr;
    return ke(e);
  }, Object.defineProperty(n.prototype, "PE_DD_MAX", { get: n.prototype.get_PE_DD_MAX }), n.prototype.get_PE_DMS_MAX = n.prototype.get_PE_DMS_MAX = function() {
    var e = this.ptr;
    return $e(e);
  }, Object.defineProperty(n.prototype, "PE_DMS_MAX", { get: n.prototype.get_PE_DMS_MAX }), n.prototype.get_PE_DDM_MAX = n.prototype.get_PE_DDM_MAX = function() {
    var e = this.ptr;
    return Je(e);
  }, Object.defineProperty(n.prototype, "PE_DDM_MAX", { get: n.prototype.get_PE_DDM_MAX }), n.prototype.get_PE_UTM_MAX = n.prototype.get_PE_UTM_MAX = function() {
    var e = this.ptr;
    return Qe(e);
  }, Object.defineProperty(n.prototype, "PE_UTM_MAX", { get: n.prototype.get_PE_UTM_MAX }), n.prototype.get_PE_PARM_MAX = n.prototype.get_PE_PARM_MAX = function() {
    var e = this.ptr;
    return et(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_MAX", { get: n.prototype.get_PE_PARM_MAX }), n.prototype.get_PE_TYPE_NONE = n.prototype.get_PE_TYPE_NONE = function() {
    var e = this.ptr;
    return tt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_NONE", { get: n.prototype.get_PE_TYPE_NONE }), n.prototype.get_PE_TYPE_GEOGCS = n.prototype.get_PE_TYPE_GEOGCS = function() {
    var e = this.ptr;
    return _t(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_GEOGCS", { get: n.prototype.get_PE_TYPE_GEOGCS }), n.prototype.get_PE_TYPE_PROJCS = n.prototype.get_PE_TYPE_PROJCS = function() {
    var e = this.ptr;
    return rt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_PROJCS", { get: n.prototype.get_PE_TYPE_PROJCS }), n.prototype.get_PE_TYPE_GEOGTRAN = n.prototype.get_PE_TYPE_GEOGTRAN = function() {
    var e = this.ptr;
    return ot(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_GEOGTRAN", { get: n.prototype.get_PE_TYPE_GEOGTRAN }), n.prototype.get_PE_TYPE_COORDSYS = n.prototype.get_PE_TYPE_COORDSYS = function() {
    var e = this.ptr;
    return nt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_COORDSYS", { get: n.prototype.get_PE_TYPE_COORDSYS }), n.prototype.get_PE_TYPE_UNIT = n.prototype.get_PE_TYPE_UNIT = function() {
    var e = this.ptr;
    return pt(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_UNIT", { get: n.prototype.get_PE_TYPE_UNIT }), n.prototype.get_PE_TYPE_LINUNIT = n.prototype.get_PE_TYPE_LINUNIT = function() {
    var e = this.ptr;
    return it(e);
  }, Object.defineProperty(n.prototype, "PE_TYPE_LINUNIT", { get: n.prototype.get_PE_TYPE_LINUNIT }), n.prototype.get_PE_STR_OPTS_NONE = n.prototype.get_PE_STR_OPTS_NONE = function() {
    var e = this.ptr;
    return ct(e);
  }, Object.defineProperty(n.prototype, "PE_STR_OPTS_NONE", { get: n.prototype.get_PE_STR_OPTS_NONE }), n.prototype.get_PE_STR_AUTH_NONE = n.prototype.get_PE_STR_AUTH_NONE = function() {
    var e = this.ptr;
    return st(e);
  }, Object.defineProperty(n.prototype, "PE_STR_AUTH_NONE", { get: n.prototype.get_PE_STR_AUTH_NONE }), n.prototype.get_PE_STR_AUTH_TOP = n.prototype.get_PE_STR_AUTH_TOP = function() {
    var e = this.ptr;
    return Pt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_AUTH_TOP", { get: n.prototype.get_PE_STR_AUTH_TOP }), n.prototype.get_PE_STR_NAME_CANON = n.prototype.get_PE_STR_NAME_CANON = function() {
    var e = this.ptr;
    return at(e);
  }, Object.defineProperty(n.prototype, "PE_STR_NAME_CANON", { get: n.prototype.get_PE_STR_NAME_CANON }), n.prototype.get_PE_STR_FMT_WKT = n.prototype.get_PE_STR_FMT_WKT = function() {
    var e = this.ptr;
    return gt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_FMT_WKT", { get: n.prototype.get_PE_STR_FMT_WKT }), n.prototype.get_PE_STR_FMT_WKT2 = n.prototype.get_PE_STR_FMT_WKT2 = function() {
    var e = this.ptr;
    return yt(e);
  }, Object.defineProperty(n.prototype, "PE_STR_FMT_WKT2", { get: n.prototype.get_PE_STR_FMT_WKT2 }), n.prototype.get_PE_PARM_X0 = n.prototype.get_PE_PARM_X0 = function() {
    var e = this.ptr;
    return ut(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_X0", { get: n.prototype.get_PE_PARM_X0 }), n.prototype.get_PE_PARM_ND = n.prototype.get_PE_PARM_ND = function() {
    var e = this.ptr;
    return dt(e);
  }, Object.defineProperty(n.prototype, "PE_PARM_ND", { get: n.prototype.get_PE_PARM_ND }), n.prototype.get_PE_TRANSFORM_1_TO_2 = n.prototype.get_PE_TRANSFORM_1_TO_2 = function() {
    var e = this.ptr;
    return ft(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_1_TO_2", { get: n.prototype.get_PE_TRANSFORM_1_TO_2 }), n.prototype.get_PE_TRANSFORM_2_TO_1 = n.prototype.get_PE_TRANSFORM_2_TO_1 = function() {
    var e = this.ptr;
    return Et(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_2_TO_1", { get: n.prototype.get_PE_TRANSFORM_2_TO_1 }), n.prototype.get_PE_TRANSFORM_P_TO_G = n.prototype.get_PE_TRANSFORM_P_TO_G = function() {
    var e = this.ptr;
    return bt(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_P_TO_G", { get: n.prototype.get_PE_TRANSFORM_P_TO_G }), n.prototype.get_PE_TRANSFORM_G_TO_P = n.prototype.get_PE_TRANSFORM_G_TO_P = function() {
    var e = this.ptr;
    return mt(e);
  }, Object.defineProperty(n.prototype, "PE_TRANSFORM_G_TO_P", { get: n.prototype.get_PE_TRANSFORM_G_TO_P }), n.prototype.get_PE_HORIZON_RECT = n.prototype.get_PE_HORIZON_RECT = function() {
    var e = this.ptr;
    return Tt(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_RECT", { get: n.prototype.get_PE_HORIZON_RECT }), n.prototype.get_PE_HORIZON_POLY = n.prototype.get_PE_HORIZON_POLY = function() {
    var e = this.ptr;
    return Ot(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_POLY", { get: n.prototype.get_PE_HORIZON_POLY }), n.prototype.get_PE_HORIZON_LINE = n.prototype.get_PE_HORIZON_LINE = function() {
    var e = this.ptr;
    return St(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_LINE", { get: n.prototype.get_PE_HORIZON_LINE }), n.prototype.get_PE_HORIZON_DELTA = n.prototype.get_PE_HORIZON_DELTA = function() {
    var e = this.ptr;
    return Nt(e);
  }, Object.defineProperty(n.prototype, "PE_HORIZON_DELTA", { get: n.prototype.get_PE_HORIZON_DELTA }), A.prototype = Object.create(d.prototype), A.prototype.constructor = A, A.prototype.__class__ = A, A.__cache__ = {}, t.PeFactory = A, A.prototype.initialize = A.prototype.initialize = function(e) {
    var _ = this.ptr;
    P.prepare(), e = e && typeof e == "object" ? e.ptr : de(e), ht(_, e);
  }, A.prototype.factoryByType = A.prototype.factoryByType = function(e, _) {
    var r = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), T(lt(r, e, _), b);
  }, A.prototype.fromString = A.prototype.fromString = function(e, _) {
    var r = this.ptr;
    return P.prepare(), e && typeof e == "object" && (e = e.ptr), _ = _ && typeof _ == "object" ? _.ptr : de(_), T(Mt(r, e, _), b);
  }, A.prototype.getCode = A.prototype.getCode = function(e) {
    var _ = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), vt(_, e);
  }, S.prototype = Object.create(d.prototype), S.prototype.constructor = S, S.prototype.__class__ = S, S.__cache__ = {}, t.PeGCSExtent = S, S.prototype.getLLon = S.prototype.getLLon = function() {
    var e = this.ptr;
    return Rt(e);
  }, S.prototype.getSLat = S.prototype.getSLat = function() {
    var e = this.ptr;
    return At(e);
  }, S.prototype.getRLon = S.prototype.getRLon = function() {
    var e = this.ptr;
    return Gt(e);
  }, S.prototype.getNLat = S.prototype.getNLat = function() {
    var e = this.ptr;
    return Ct(e);
  }, S.prototype.__destroy__ = S.prototype.__destroy__ = function() {
    var e = this.ptr;
    It(e);
  }, m.prototype = Object.create(R.prototype), m.prototype.constructor = m, m.prototype.__class__ = m, m.__cache__ = {}, t.PeGeogcs = m, m.prototype.getDatum = m.prototype.getDatum = function() {
    var e = this.ptr;
    return T(jt(e), M);
  }, m.prototype.getPrimem = m.prototype.getPrimem = function() {
    var e = this.ptr;
    return T(Ut(e), v);
  }, m.prototype.getUnit = m.prototype.getUnit = function() {
    var e = this.ptr;
    return T(Lt(e), l);
  }, m.prototype.getCode = m.prototype.getCode = function() {
    var e = this.ptr;
    return Ft(e);
  }, m.prototype.getName = m.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(Yt(_, e));
  }, m.prototype.getType = m.prototype.getType = function() {
    var e = this.ptr;
    return wt(e);
  }, f.prototype = Object.create(b.prototype), f.prototype.constructor = f, f.prototype.__class__ = f, f.__cache__ = {}, t.PeGeogtran = f, f.prototype.isEqual = f.prototype.isEqual = function(e) {
    var _ = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), !!xt(_, e);
  }, f.prototype.getGeogcs1 = f.prototype.getGeogcs1 = function() {
    var e = this.ptr;
    return T(Ht(e), m);
  }, f.prototype.getGeogcs2 = f.prototype.getGeogcs2 = function() {
    var e = this.ptr;
    return T(Xt(e), m);
  }, f.prototype.getParameters = f.prototype.getParameters = function() {
    var e = this.ptr;
    return zt(e);
  }, f.prototype.loadConstants = f.prototype.loadConstants = function() {
    var e = this.ptr;
    return !!Zt(e);
  }, f.prototype.getCode = f.prototype.getCode = function() {
    var e = this.ptr;
    return Wt(e);
  }, f.prototype.getName = f.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(Bt(_, e));
  }, f.prototype.getType = f.prototype.getType = function() {
    var e = this.ptr;
    return Kt(e);
  }, U.prototype = Object.create(d.prototype), U.prototype.constructor = U, U.prototype.__class__ = U, U.__cache__ = {}, t.PeGTlistExtended = U, U.prototype.getGTlist = U.prototype.getGTlist = function(e, _, r, p, i, s) {
    var g = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), r && typeof r == "object" && (r = r.ptr), p && typeof p == "object" && (p = p.ptr), i && typeof i == "object" && (i = i.ptr), s && typeof s == "object" && (s = s.ptr), T(Vt(g, e, _, r, p, i, s), I);
  }, U.prototype.get_PE_GTLIST_OPTS_COMMON = U.prototype.get_PE_GTLIST_OPTS_COMMON = function() {
    var e = this.ptr;
    return qt(e);
  }, Object.defineProperty(U.prototype, "PE_GTLIST_OPTS_COMMON", { get: U.prototype.get_PE_GTLIST_OPTS_COMMON }), I.prototype = Object.create(d.prototype), I.prototype.constructor = I, I.prototype.__class__ = I, I.__cache__ = {}, t.PeGTlistExtendedEntry = I, I.prototype.getEntries = I.prototype.getEntries = function() {
    var e = this.ptr;
    return T(kt(e), F);
  }, I.prototype.getSteps = I.prototype.getSteps = function() {
    var e = this.ptr;
    return $t(e);
  }, I.prototype.Delete = I.prototype.Delete = function(e) {
    var _ = this.ptr;
    e && typeof e == "object" && (e = e.ptr), Jt(_, e);
  }, F.prototype = Object.create(d.prototype), F.prototype.constructor = F, F.prototype.__class__ = F, F.__cache__ = {}, t.PeGTlistExtendedGTs = F, F.prototype.getDirection = F.prototype.getDirection = function() {
    var e = this.ptr;
    return Qt(e);
  }, F.prototype.getGeogtran = F.prototype.getGeogtran = function() {
    var e = this.ptr;
    return T(e_(e), f);
  }, O.prototype = Object.create(d.prototype), O.prototype.constructor = O, O.prototype.__class__ = O, O.__cache__ = {}, t.PeHorizon = O, O.prototype.getNump = O.prototype.getNump = function() {
    var e = this.ptr;
    return t_(e);
  }, O.prototype.getKind = O.prototype.getKind = function() {
    var e = this.ptr;
    return __(e);
  }, O.prototype.getInclusive = O.prototype.getInclusive = function() {
    var e = this.ptr;
    return r_(e);
  }, O.prototype.getSize = O.prototype.getSize = function() {
    var e = this.ptr;
    return o_(e);
  }, O.prototype.getCoord = O.prototype.getCoord = function() {
    var e = this.ptr;
    return n_(e);
  }, h.prototype = Object.create(d.prototype), h.prototype.constructor = h, h.prototype.__class__ = h, h.__cache__ = {}, t.PeInteger = h, h.prototype.get_val = h.prototype.get_val = function() {
    var e = this.ptr;
    return i_(e);
  }, h.prototype.set_val = h.prototype.set_val = function(e) {
    var _ = this.ptr;
    e && typeof e == "object" && (e = e.ptr), c_(_, e);
  }, Object.defineProperty(h.prototype, "val", { get: h.prototype.get_val, set: h.prototype.set_val }), h.prototype.__destroy__ = h.prototype.__destroy__ = function() {
    var e = this.ptr;
    s_(e);
  }, y.prototype = Object.create(d.prototype), y.prototype.constructor = y, y.prototype.__class__ = y, y.__cache__ = {}, t.PeNotationMgrs = y, y.prototype.get_PE_MGRS_STYLE_NEW = y.prototype.get_PE_MGRS_STYLE_NEW = function() {
    var e = this.ptr;
    return P_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_NEW", { get: y.prototype.get_PE_MGRS_STYLE_NEW }), y.prototype.get_PE_MGRS_STYLE_OLD = y.prototype.get_PE_MGRS_STYLE_OLD = function() {
    var e = this.ptr;
    return a_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_OLD", { get: y.prototype.get_PE_MGRS_STYLE_OLD }), y.prototype.get_PE_MGRS_STYLE_AUTO = y.prototype.get_PE_MGRS_STYLE_AUTO = function() {
    var e = this.ptr;
    return g_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_STYLE_AUTO", { get: y.prototype.get_PE_MGRS_STYLE_AUTO }), y.prototype.get_PE_MGRS_180_ZONE_1_PLUS = y.prototype.get_PE_MGRS_180_ZONE_1_PLUS = function() {
    var e = this.ptr;
    return y_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_180_ZONE_1_PLUS", { get: y.prototype.get_PE_MGRS_180_ZONE_1_PLUS }), y.prototype.get_PE_MGRS_ADD_SPACES = y.prototype.get_PE_MGRS_ADD_SPACES = function() {
    var e = this.ptr;
    return u_(e);
  }, Object.defineProperty(y.prototype, "PE_MGRS_ADD_SPACES", { get: y.prototype.get_PE_MGRS_ADD_SPACES }), E.prototype = Object.create(d.prototype), E.prototype.constructor = E, E.prototype.__class__ = E, E.__cache__ = {}, t.PeNotationUtm = E, E.prototype.get_PE_UTM_OPTS_NONE = E.prototype.get_PE_UTM_OPTS_NONE = function() {
    var e = this.ptr;
    return d_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NONE", { get: E.prototype.get_PE_UTM_OPTS_NONE }), E.prototype.get_PE_UTM_OPTS_NS = E.prototype.get_PE_UTM_OPTS_NS = function() {
    var e = this.ptr;
    return f_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NS", { get: E.prototype.get_PE_UTM_OPTS_NS }), E.prototype.get_PE_UTM_OPTS_NS_STRICT = E.prototype.get_PE_UTM_OPTS_NS_STRICT = function() {
    var e = this.ptr;
    return E_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_NS_STRICT", { get: E.prototype.get_PE_UTM_OPTS_NS_STRICT }), E.prototype.get_PE_UTM_OPTS_ADD_SPACES = E.prototype.get_PE_UTM_OPTS_ADD_SPACES = function() {
    var e = this.ptr;
    return b_(e);
  }, Object.defineProperty(E.prototype, "PE_UTM_OPTS_ADD_SPACES", { get: E.prototype.get_PE_UTM_OPTS_ADD_SPACES }), G.prototype = Object.create(b.prototype), G.prototype.constructor = G, G.prototype.__class__ = G, G.__cache__ = {}, t.PeParameter = G, G.prototype.getValue = G.prototype.getValue = function() {
    var e = this.ptr;
    return m_(e);
  }, G.prototype.getCode = G.prototype.getCode = function() {
    var e = this.ptr;
    return T_(e);
  }, G.prototype.getName = G.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(O_(_, e));
  }, G.prototype.getType = G.prototype.getType = function() {
    var e = this.ptr;
    return S_(e);
  }, c.prototype = Object.create(d.prototype), c.prototype.constructor = c, c.prototype.__class__ = c, c.__cache__ = {}, t.PePCSInfo = c, c.prototype.getCentralMeridian = c.prototype.getCentralMeridian = function() {
    var e = this.ptr;
    return N_(e);
  }, c.prototype.getDomainMinx = c.prototype.getDomainMinx = function() {
    var e = this.ptr;
    return h_(e);
  }, c.prototype.getDomainMiny = c.prototype.getDomainMiny = function() {
    var e = this.ptr;
    return l_(e);
  }, c.prototype.getDomainMaxx = c.prototype.getDomainMaxx = function() {
    var e = this.ptr;
    return M_(e);
  }, c.prototype.getDomainMaxy = c.prototype.getDomainMaxy = function() {
    var e = this.ptr;
    return v_(e);
  }, c.prototype.getNorthPoleLocation = c.prototype.getNorthPoleLocation = function() {
    var e = this.ptr;
    return D_(e);
  }, c.prototype.getNorthPoleGeometry = c.prototype.getNorthPoleGeometry = function() {
    var e = this.ptr;
    return R_(e);
  }, c.prototype.getSouthPoleLocation = c.prototype.getSouthPoleLocation = function() {
    var e = this.ptr;
    return A_(e);
  }, c.prototype.getSouthPoleGeometry = c.prototype.getSouthPoleGeometry = function() {
    var e = this.ptr;
    return G_(e);
  }, c.prototype.isDensificationNeeded = c.prototype.isDensificationNeeded = function() {
    var e = this.ptr;
    return !!C_(e);
  }, c.prototype.isGcsHorizonMultiOverlap = c.prototype.isGcsHorizonMultiOverlap = function() {
    var e = this.ptr;
    return !!I_(e);
  }, c.prototype.isPannableRectangle = c.prototype.isPannableRectangle = function() {
    var e = this.ptr;
    return !!j_(e);
  }, c.prototype.generate = c.prototype.generate = function(e, _) {
    var r = this.ptr;
    return e && typeof e == "object" && (e = e.ptr), _ && typeof _ == "object" && (_ = _.ptr), T(U_(r, e, _), c);
  }, c.prototype.get_PE_PCSINFO_OPTION_NONE = c.prototype.get_PE_PCSINFO_OPTION_NONE = function() {
    var e = this.ptr;
    return L_(e);
  }, Object.defineProperty(c.prototype, "PE_PCSINFO_OPTION_NONE", { get: c.prototype.get_PE_PCSINFO_OPTION_NONE }), c.prototype.get_PE_PCSINFO_OPTION_DOMAIN = c.prototype.get_PE_PCSINFO_OPTION_DOMAIN = function() {
    var e = this.ptr;
    return F_(e);
  }, Object.defineProperty(c.prototype, "PE_PCSINFO_OPTION_DOMAIN", { get: c.prototype.get_PE_PCSINFO_OPTION_DOMAIN }), c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY = function() {
    var e = this.ptr;
    return Y_(e);
  }, Object.defineProperty(c.prototype, "PE_POLE_OUTSIDE_BOUNDARY", { get: c.prototype.get_PE_POLE_OUTSIDE_BOUNDARY }), c.prototype.get_PE_POLE_POINT = c.prototype.get_PE_POLE_POINT = function() {
    var e = this.ptr;
    return w_(e);
  }, Object.defineProperty(c.prototype, "PE_POLE_POINT", { get: c.prototype.get_PE_POLE_POINT }), v.prototype = Object.create(b.prototype), v.prototype.constructor = v, v.prototype.__class__ = v, v.__cache__ = {}, t.PePrimem = v, v.prototype.getLongitude = v.prototype.getLongitude = function() {
    var e = this.ptr;
    return x_(e);
  }, v.prototype.getCode = v.prototype.getCode = function() {
    var e = this.ptr;
    return H_(e);
  }, v.prototype.getName = v.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(X_(_, e));
  }, v.prototype.getType = v.prototype.getType = function() {
    var e = this.ptr;
    return z_(e);
  }, u.prototype = Object.create(R.prototype), u.prototype.constructor = u, u.prototype.__class__ = u, u.__cache__ = {}, t.PeProjcs = u, u.prototype.getGeogcs = u.prototype.getGeogcs = function() {
    var e = this.ptr;
    return T(Z_(e), m);
  }, u.prototype.getParameters = u.prototype.getParameters = function() {
    var e = this.ptr;
    return W_(e);
  }, u.prototype.getUnit = u.prototype.getUnit = function() {
    var e = this.ptr;
    return T(B_(e), l);
  }, u.prototype.loadConstants = u.prototype.loadConstants = function() {
    var e = this.ptr;
    return !!K_(e);
  }, u.prototype.horizonGcsGenerate = u.prototype.horizonGcsGenerate = function() {
    var e = this.ptr;
    return T(V_(e), O);
  }, u.prototype.horizonPcsGenerate = u.prototype.horizonPcsGenerate = function() {
    var e = this.ptr;
    return T(q_(e), O);
  }, u.prototype.getCode = u.prototype.getCode = function() {
    var e = this.ptr;
    return k_(e);
  }, u.prototype.getName = u.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L($_(_, e));
  }, u.prototype.getType = u.prototype.getType = function() {
    var e = this.ptr;
    return J_(e);
  }, N.prototype = Object.create(b.prototype), N.prototype.constructor = N, N.prototype.__class__ = N, N.__cache__ = {}, t.PeSpheroid = N, N.prototype.getAxis = N.prototype.getAxis = function() {
    var e = this.ptr;
    return Q_(e);
  }, N.prototype.getFlattening = N.prototype.getFlattening = function() {
    var e = this.ptr;
    return er(e);
  }, N.prototype.getCode = N.prototype.getCode = function() {
    var e = this.ptr;
    return tr(e);
  }, N.prototype.getName = N.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(_r(_, e));
  }, N.prototype.getType = N.prototype.getType = function() {
    var e = this.ptr;
    return rr(e);
  }, l.prototype = Object.create(b.prototype), l.prototype.constructor = l, l.prototype.__class__ = l, l.__cache__ = {}, t.PeUnit = l, l.prototype.getUnitFactor = l.prototype.getUnitFactor = function() {
    var e = this.ptr;
    return or(e);
  }, l.prototype.getCode = l.prototype.getCode = function() {
    var e = this.ptr;
    return nr(e);
  }, l.prototype.getName = l.prototype.getName = function(e) {
    var _ = this.ptr;
    return P.prepare(), typeof e == "object" && (e = w(e)), L(pr(_, e));
  }, l.prototype.getType = l.prototype.getType = function() {
    var e = this.ptr;
    return ir(e);
  }, H.prototype = Object.create(d.prototype), H.prototype.constructor = H, H.prototype.__class__ = H, H.__cache__ = {}, t.PeVersion = H, H.prototype.version_string = H.prototype.version_string = function() {
    var e = this.ptr;
    return L(cr(e));
  }, t.ensureCache = P, t.ensureString = de, t.ensureInt8 = w, t.ensureInt16 = to, t.ensureInt32 = _o, t.ensureFloat32 = ro, t.ensureFloat64 = oo, fe.ready;
}, yr.exports = ur;
const so = co(dr.exports), ao = Object.freeze(Object.defineProperty({ __proto__: null, default: so }, Symbol.toStringTag, { value: "Module" }));
export {
  ao as p
};
//# sourceMappingURL=pe-wasm-BMM6xi0I.js.map
