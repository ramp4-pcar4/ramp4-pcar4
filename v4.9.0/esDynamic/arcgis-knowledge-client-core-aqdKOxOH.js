import { v as Qn, eQ as Mr } from "./main-DIdq27YS.js";
var $n, Ur, kn, Wn = { exports: {} };
$n = Wn, Ur = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, kn = function(z) {
  var c, Ir, tr;
  z = z || {}, c || (c = z !== void 0 ? z : {}), c.ready = new Promise(function(r, n) {
    Ir = r, tr = n;
  });
  var Rr = Object.assign({}, c), xr = "./this.program", D = "";
  typeof document < "u" && document.currentScript && (D = document.currentScript.src), Ur && (D = Ur), D = D.indexOf("blob:") !== 0 ? D.substr(0, D.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "";
  var q, En = c.print || console.log.bind(console), H = c.printErr || console.warn.bind(console);
  Object.assign(c, Rr), Rr = null, c.thisProgram && (xr = c.thisProgram), c.wasmBinary && (q = c.wasmBinary), c.noExitRuntime, typeof WebAssembly != "object" && G("no native wasm support detected");
  var Ar, Tr, j, _, I, N, w, y, Yr, Hr, Vr, Br, zr = !1, qr = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function ar(r, n, e) {
    var t = n + e;
    for (e = n; r[e] && !(e >= t); ) ++e;
    if (16 < e - n && r.buffer && qr) return qr.decode(r.subarray(n, e));
    for (t = ""; n < e; ) {
      var a = r[n++];
      if (128 & a) {
        var i = 63 & r[n++];
        if ((224 & a) == 192) t += String.fromCharCode((31 & a) << 6 | i);
        else {
          var f = 63 & r[n++];
          65536 > (a = (240 & a) == 224 ? (15 & a) << 12 | i << 6 | f : (7 & a) << 18 | i << 12 | f << 6 | 63 & r[n++]) ? t += String.fromCharCode(a) : (a -= 65536, t += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a));
        }
      } else t += String.fromCharCode(a);
    }
    return t;
  }
  function Nr(r, n, e, t) {
    if (0 < t) {
      t = e + t - 1;
      for (var a = 0; a < r.length; ++a) {
        var i = r.charCodeAt(a);
        if (55296 <= i && 57343 >= i && (i = 65536 + ((1023 & i) << 10) | 1023 & r.charCodeAt(++a)), 127 >= i) {
          if (e >= t) break;
          n[e++] = i;
        } else {
          if (2047 >= i) {
            if (e + 1 >= t) break;
            n[e++] = 192 | i >> 6;
          } else {
            if (65535 >= i) {
              if (e + 2 >= t) break;
              n[e++] = 224 | i >> 12;
            } else {
              if (e + 3 >= t) break;
              n[e++] = 240 | i >> 18, n[e++] = 128 | i >> 12 & 63;
            }
            n[e++] = 128 | i >> 6 & 63;
          }
          n[e++] = 128 | 63 & i;
        }
      }
      n[e] = 0;
    }
  }
  function Lr(r) {
    for (var n = 0, e = 0; e < r.length; ++e) {
      var t = r.charCodeAt(e);
      127 >= t ? n++ : 2047 >= t ? n += 2 : 55296 <= t && 57343 >= t ? (n += 4, ++e) : n += 3;
    }
    return n;
  }
  function Gr() {
    var r = Ar.buffer;
    Tr = r, c.HEAP8 = j = new Int8Array(r), c.HEAP16 = I = new Int16Array(r), c.HEAP32 = w = new Int32Array(r), c.HEAPU8 = _ = new Uint8Array(r), c.HEAPU16 = N = new Uint16Array(r), c.HEAPU32 = y = new Uint32Array(r), c.HEAPF32 = Yr = new Float32Array(r), c.HEAPF64 = Br = new Float64Array(r), c.HEAP64 = Hr = new BigInt64Array(r), c.HEAPU64 = Vr = new BigUint64Array(r);
  }
  var Jr, Xr = [], Zr = [], Qr = [];
  function On() {
    var r = c.preRun.shift();
    Xr.unshift(r);
  }
  var S, R = 0, L = null;
  function G(r) {
    throw c.onAbort && c.onAbort(r), H(r = "Aborted(" + r + ")"), zr = !0, r = new WebAssembly.RuntimeError(r + ". Build with -sASSERTIONS for more info."), tr(r), r;
  }
  function Kr() {
    return S.startsWith("data:application/octet-stream;base64,");
  }
  if (S = "arcgis-knowledge-client-core.wasm", !Kr()) {
    var rn = S;
    S = c.locateFile ? c.locateFile(rn, D) : D + rn;
  }
  function nn() {
    var r = S;
    try {
      if (r == S && q) return new Uint8Array(q);
      throw "both async and sync fetching of the wasm failed";
    } catch (n) {
      G(n);
    }
  }
  function jn() {
    return q || typeof fetch != "function" ? Promise.resolve().then(function() {
      return nn();
    }) : fetch(S, { credentials: "same-origin" }).then(function(r) {
      if (!r.ok) throw "failed to load wasm binary file at '" + S + "'";
      return r.arrayBuffer();
    }).catch(function() {
      return nn();
    });
  }
  function _r(r) {
    for (; 0 < r.length; ) r.shift()(c);
  }
  function Sn(r) {
    this.fa = r - 24, this.Ya = function(n) {
      y[this.fa + 4 >> 2] = n;
    }, this.Oa = function(n) {
      y[this.fa + 8 >> 2] = n;
    }, this.Ua = function() {
      w[this.fa >> 2] = 0;
    }, this.Ma = function() {
      j[this.fa + 12 >> 0] = 0;
    }, this.Va = function() {
      j[this.fa + 13 >> 0] = 0;
    }, this.Ia = function(n, e) {
      this.La(), this.Ya(n), this.Oa(e), this.Ua(), this.Ma(), this.Va();
    }, this.La = function() {
      y[this.fa + 16 >> 2] = 0;
    };
  }
  var ir = {};
  function or(r) {
    for (; r.length; ) {
      var n = r.pop();
      r.pop()(n);
    }
  }
  function J(r) {
    return this.fromWireType(w[r >> 2]);
  }
  var V = {}, x = {}, ur = {};
  function en(r) {
    if (r === void 0) return "_unknown";
    var n = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return 48 <= n && 57 >= n ? "_" + r : r;
  }
  function Cr(r, n) {
    return r = en(r), function() {
      return n.apply(this, arguments);
    };
  }
  function Pr(r) {
    var n = Error, e = Cr(r, function(t) {
      this.name = r, this.message = t, (t = Error(t).stack) !== void 0 && (this.stack = this.toString() + `
` + t.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.toString = function() {
      return this.message === void 0 ? this.name : this.name + ": " + this.message;
    }, e;
  }
  var tn = void 0;
  function cr(r) {
    throw new tn(r);
  }
  function $(r, n, e) {
    function t(u) {
      (u = e(u)).length !== r.length && cr("Mismatched type converter count");
      for (var l = 0; l < r.length; ++l) k(r[l], u[l]);
    }
    r.forEach(function(u) {
      ur[u] = n;
    });
    var a = Array(n.length), i = [], f = 0;
    n.forEach((u, l) => {
      x.hasOwnProperty(u) ? a[l] = x[u] : (i.push(u), V.hasOwnProperty(u) || (V[u] = []), V[u].push(() => {
        a[l] = x[u], ++f === i.length && t(a);
      }));
    }), i.length === 0 && t(a);
  }
  function X(r) {
    if (r === null) return "null";
    var n = typeof r;
    return n === "object" || n === "array" || n === "function" ? r.toString() : "" + r;
  }
  var an = void 0;
  function b(r) {
    for (var n = ""; _[r]; ) n += an[_[r++]];
    return n;
  }
  var B = void 0;
  function g(r) {
    throw new B(r);
  }
  function k(r, n, e = {}) {
    if (!("argPackAdvance" in n)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var t = n.name;
    if (r || g('type "' + t + '" must have a positive integer typeid pointer'), x.hasOwnProperty(r)) {
      if (e.Wa) return;
      g("Cannot register type '" + t + "' twice");
    }
    x[r] = n, delete ur[r], V.hasOwnProperty(r) && (n = V[r], delete V[r], n.forEach((a) => a()));
  }
  function on(r, n, e) {
    switch (n) {
      case 0:
        return e ? function(t) {
          return j[t];
        } : function(t) {
          return _[t];
        };
      case 1:
        return e ? function(t) {
          return I[t >> 1];
        } : function(t) {
          return N[t >> 1];
        };
      case 2:
        return e ? function(t) {
          return w[t >> 2];
        } : function(t) {
          return y[t >> 2];
        };
      case 3:
        return e ? function(t) {
          return Hr[t >> 3];
        } : function(t) {
          return Vr[t >> 3];
        };
      default:
        throw new TypeError("Unknown integer type: " + r);
    }
  }
  function Z(r) {
    switch (r) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + r);
    }
  }
  function $r(r) {
    g(r.da.ga.ea.name + " instance already deleted");
  }
  var kr = !1;
  function un() {
  }
  function cn(r) {
    --r.count.value, r.count.value === 0 && (r.ia ? r.ka.na(r.ia) : r.ga.ea.na(r.fa));
  }
  function fn(r, n, e) {
    return n === e ? r : e.la === void 0 || (r = fn(r, n, e.la)) === null ? null : e.Ka(r);
  }
  var sn = {}, Q = [];
  function Wr() {
    for (; Q.length; ) {
      var r = Q.pop();
      r.da.ta = !1, r.delete();
    }
  }
  var K = void 0, rr = {};
  function Fn(r, n) {
    for (n === void 0 && g("ptr should not be undefined"); r.la; ) n = r.va(n), r = r.la;
    return rr[n];
  }
  function fr(r, n) {
    return n.ga && n.fa || cr("makeClassHandle requires ptr and ptrType"), !!n.ka != !!n.ia && cr("Both smartPtrType and smartPtr must be specified"), n.count = { value: 1 }, sr(Object.create(r, { da: { value: n } }));
  }
  function sr(r) {
    return typeof FinalizationRegistry > "u" ? (sr = (n) => n, r) : (kr = new FinalizationRegistry((n) => {
      cn(n.da);
    }), un = (n) => {
      kr.unregister(n);
    }, (sr = (n) => {
      var e = n.da;
      return e.ia && kr.register(n, { da: e }, n), n;
    })(r));
  }
  function M() {
  }
  function Er(r, n, e) {
    if (r[n].ha === void 0) {
      var t = r[n];
      r[n] = function() {
        return r[n].ha.hasOwnProperty(arguments.length) || g("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + r[n].ha + ")!"), r[n].ha[arguments.length].apply(this, arguments);
      }, r[n].ha = [], r[n].ha[t.sa] = t;
    }
  }
  function Or(r, n, e) {
    c.hasOwnProperty(r) ? ((e === void 0 || c[r].ha !== void 0 && c[r].ha[e] !== void 0) && g("Cannot register public name '" + r + "' twice"), Er(c, r, r), c.hasOwnProperty(e) && g("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), c[r].ha[e] = n) : (c[r] = n, e !== void 0 && (c[r].kb = e));
  }
  function Dn(r, n, e, t, a, i, f, u) {
    this.name = r, this.constructor = n, this.oa = e, this.na = t, this.la = a, this.Pa = i, this.va = f, this.Ka = u, this.$a = [];
  }
  function lr(r, n, e) {
    for (; n !== e; ) n.va || g("Expected null or instance of " + e.name + ", got an instance of " + n.name), r = n.va(r), n = n.la;
    return r;
  }
  function Mn(r, n) {
    return n === null ? (this.Aa && g("null is not a valid " + this.name), 0) : (n.da || g('Cannot pass "' + X(n) + '" as a ' + this.name), n.da.fa || g("Cannot pass deleted object as a pointer of type " + this.name), lr(n.da.fa, n.da.ga.ea, this.ea));
  }
  function Un(r, n) {
    if (n === null) {
      if (this.Aa && g("null is not a valid " + this.name), this.xa) {
        var e = this.Ba();
        return r !== null && r.push(this.na, e), e;
      }
      return 0;
    }
    if (n.da || g('Cannot pass "' + X(n) + '" as a ' + this.name), n.da.fa || g("Cannot pass deleted object as a pointer of type " + this.name), !this.wa && n.da.ga.wa && g("Cannot convert argument of type " + (n.da.ka ? n.da.ka.name : n.da.ga.name) + " to parameter type " + this.name), e = lr(n.da.fa, n.da.ga.ea, this.ea), this.xa) switch (n.da.ia === void 0 && g("Passing raw pointer to smart pointer is illegal"), this.fb) {
      case 0:
        n.da.ka === this ? e = n.da.ia : g("Cannot convert argument of type " + (n.da.ka ? n.da.ka.name : n.da.ga.name) + " to parameter type " + this.name);
        break;
      case 1:
        e = n.da.ia;
        break;
      case 2:
        if (n.da.ka === this) e = n.da.ia;
        else {
          var t = n.clone();
          e = this.ab(e, E(function() {
            t.delete();
          })), r !== null && r.push(this.na, e);
        }
        break;
      default:
        g("Unsupporting sharing policy");
    }
    return e;
  }
  function In(r, n) {
    return n === null ? (this.Aa && g("null is not a valid " + this.name), 0) : (n.da || g('Cannot pass "' + X(n) + '" as a ' + this.name), n.da.fa || g("Cannot pass deleted object as a pointer of type " + this.name), n.da.ga.wa && g("Cannot convert argument of type " + n.da.ga.name + " to parameter type " + this.name), lr(n.da.fa, n.da.ga.ea, this.ea));
  }
  function O(r, n, e, t, a, i, f, u, l, s, h) {
    this.name = r, this.ea = n, this.Aa = e, this.wa = t, this.xa = a, this.Za = i, this.fb = f, this.Ga = u, this.Ba = l, this.ab = s, this.na = h, a || n.la !== void 0 ? this.toWireType = Un : (this.toWireType = t ? Mn : In, this.ja = null);
  }
  function ln(r, n, e) {
    c.hasOwnProperty(r) || cr("Replacing nonexistant public symbol"), c[r].ha !== void 0 && e !== void 0 ? c[r].ha[e] = n : (c[r] = n, c[r].sa = e);
  }
  var hr = [];
  function T(r, n) {
    r = b(r);
    var e = hr[n];
    return e || (n >= hr.length && (hr.length = n + 1), hr[n] = e = Jr.get(n)), typeof e != "function" && g("unknown function pointer with signature " + r + ": " + n), e;
  }
  var hn = void 0;
  function dn(r) {
    var n = b(r = _n(r));
    return F(r), n;
  }
  function Y(r, n) {
    function e(i) {
      a[i] || x[i] || (ur[i] ? ur[i].forEach(e) : (t.push(i), a[i] = !0));
    }
    var t = [], a = {};
    throw n.forEach(e), new hn(r + ": " + t.map(dn).join([", "]));
  }
  function dr(r, n, e, t, a) {
    var i = n.length;
    2 > i && g("argTypes array size mismatch! Must at least get return value and 'this' types!");
    var f = n[1] !== null && e !== null, u = !1;
    for (e = 1; e < n.length; ++e) if (n[e] !== null && n[e].ja === void 0) {
      u = !0;
      break;
    }
    var l = n[0].name !== "void", s = i - 2, h = Array(s), p = [], v = [];
    return function() {
      if (arguments.length !== s && g("function " + r + " called with " + arguments.length + " arguments, expected " + s + " args!"), v.length = 0, p.length = f ? 2 : 1, p[0] = a, f) {
        var o = n[1].toWireType(v, this);
        p[1] = o;
      }
      for (var d = 0; d < s; ++d) h[d] = n[d + 2].toWireType(v, arguments[d]), p.push(h[d]);
      if (d = t.apply(null, p), u) or(v);
      else for (var m = f ? 1 : 2; m < n.length; m++) {
        var A = m === 1 ? o : h[m - 2];
        n[m].ja !== null && n[m].ja(A);
      }
      return o = l ? n[0].fromWireType(d) : void 0;
    };
  }
  function pr(r, n) {
    for (var e = [], t = 0; t < r; t++) e.push(y[n + 4 * t >> 2]);
    return e;
  }
  function pn(r, n, e) {
    return r instanceof Object || g(e + ' with invalid "this": ' + r), r instanceof n.ea.constructor || g(e + ' incompatible with "this" of type ' + r.constructor.name), r.da.fa || g("cannot call emscripten binding method " + e + " on deleted object"), lr(r.da.fa, r.da.ga.ea, n.ea);
  }
  var jr = [], W = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
  function Sr(r) {
    4 < r && --W[r].Ca == 0 && (W[r] = void 0, jr.push(r));
  }
  var C = (r) => (r || g("Cannot use deleted val. handle = " + r), W[r].value), E = (r) => {
    switch (r) {
      case void 0:
        return 1;
      case null:
        return 2;
      case !0:
        return 3;
      case !1:
        return 4;
      default:
        var n = jr.length ? jr.pop() : W.length;
        return W[n] = { Ca: 1, value: r }, n;
    }
  };
  function Rn(r, n, e) {
    switch (n) {
      case 0:
        return function(t) {
          return this.fromWireType((e ? j : _)[t]);
        };
      case 1:
        return function(t) {
          return this.fromWireType((e ? I : N)[t >> 1]);
        };
      case 2:
        return function(t) {
          return this.fromWireType((e ? w : y)[t >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + r);
    }
  }
  function nr(r, n) {
    var e = x[r];
    return e === void 0 && g(n + " has unknown type " + dn(r)), e;
  }
  function xn(r, n) {
    switch (n) {
      case 2:
        return function(e) {
          return this.fromWireType(Yr[e >> 2]);
        };
      case 3:
        return function(e) {
          return this.fromWireType(Br[e >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + r);
    }
  }
  var vn = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
  function Yn(r, n) {
    for (var e = r >> 1, t = e + n / 2; !(e >= t) && N[e]; ) ++e;
    if (32 < (e <<= 1) - r && vn) return vn.decode(_.subarray(r, e));
    for (e = "", t = 0; !(t >= n / 2); ++t) {
      var a = I[r + 2 * t >> 1];
      if (a == 0) break;
      e += String.fromCharCode(a);
    }
    return e;
  }
  function Hn(r, n, e) {
    if (e === void 0 && (e = 2147483647), 2 > e) return 0;
    var t = n;
    e = (e -= 2) < 2 * r.length ? e / 2 : r.length;
    for (var a = 0; a < e; ++a) I[n >> 1] = r.charCodeAt(a), n += 2;
    return I[n >> 1] = 0, n - t;
  }
  function Vn(r) {
    return 2 * r.length;
  }
  function Bn(r, n) {
    for (var e = 0, t = ""; !(e >= n / 4); ) {
      var a = w[r + 4 * e >> 2];
      if (a == 0) break;
      ++e, 65536 <= a ? (a -= 65536, t += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a)) : t += String.fromCharCode(a);
    }
    return t;
  }
  function zn(r, n, e) {
    if (e === void 0 && (e = 2147483647), 4 > e) return 0;
    var t = n;
    e = t + e - 4;
    for (var a = 0; a < r.length; ++a) {
      var i = r.charCodeAt(a);
      if (55296 <= i && 57343 >= i && (i = 65536 + ((1023 & i) << 10) | 1023 & r.charCodeAt(++a)), w[n >> 2] = i, (n += 4) + 4 > e) break;
    }
    return w[n >> 2] = 0, n - t;
  }
  function qn(r) {
    for (var n = 0, e = 0; e < r.length; ++e) {
      var t = r.charCodeAt(e);
      55296 <= t && 57343 >= t && ++e, n += 4;
    }
    return n;
  }
  function mn(r, n) {
    for (var e = Array(r), t = 0; t < r; ++t) e[t] = nr(y[n + 4 * t >> 2], "parameter " + t);
    return e;
  }
  var Nn = {};
  function vr(r) {
    var n = Nn[r];
    return n === void 0 ? b(r) : n;
  }
  var mr = [];
  function gn() {
    function r(n) {
      n.$$$embind_global$$$ = n;
      var e = typeof $$$embind_global$$$ == "object" && n.$$$embind_global$$$ == n;
      return e || delete n.$$$embind_global$$$, e;
    }
    if (typeof globalThis == "object") return globalThis;
    if (typeof $$$embind_global$$$ == "object" || (typeof Mr == "object" && r(Mr) ? $$$embind_global$$$ = Mr : typeof self == "object" && r(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function Ln(r) {
    var n = mr.length;
    return mr.push(r), n;
  }
  var yn = [], Fr = {};
  function bn() {
    if (!Dr) {
      var r, n = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: xr || "./this.program" };
      for (r in Fr) Fr[r] === void 0 ? delete n[r] : n[r] = Fr[r];
      var e = [];
      for (r in n) e.push(r + "=" + n[r]);
      Dr = e;
    }
    return Dr;
  }
  var Dr, Gn = [null, [], []];
  function gr(r) {
    return r % 4 == 0 && (r % 100 != 0 || r % 400 == 0);
  }
  var wn = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], An = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function Jn(r) {
    var n = Array(Lr(r) + 1);
    return Nr(r, n, 0, n.length), n;
  }
  function Xn(r, n, e, t) {
    function a(o, d, m) {
      for (o = typeof o == "number" ? o.toString() : o || ""; o.length < d; ) o = m[0] + o;
      return o;
    }
    function i(o, d) {
      return a(o, d, "0");
    }
    function f(o, d) {
      function m(P) {
        return 0 > P ? -1 : 0 < P ? 1 : 0;
      }
      var A;
      return (A = m(o.getFullYear() - d.getFullYear())) === 0 && (A = m(o.getMonth() - d.getMonth())) === 0 && (A = m(o.getDate() - d.getDate())), A;
    }
    function u(o) {
      switch (o.getDay()) {
        case 0:
          return new Date(o.getFullYear() - 1, 11, 29);
        case 1:
          return o;
        case 2:
          return new Date(o.getFullYear(), 0, 3);
        case 3:
          return new Date(o.getFullYear(), 0, 2);
        case 4:
          return new Date(o.getFullYear(), 0, 1);
        case 5:
          return new Date(o.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(o.getFullYear() - 1, 11, 30);
      }
    }
    function l(o) {
      var d = o.qa;
      for (o = new Date(new Date(o.ra + 1900, 0, 1).getTime()); 0 < d; ) {
        var m = o.getMonth(), A = (gr(o.getFullYear()) ? wn : An)[m];
        if (!(d > A - o.getDate())) {
          o.setDate(o.getDate() + d);
          break;
        }
        d -= A - o.getDate() + 1, o.setDate(1), 11 > m ? o.setMonth(m + 1) : (o.setMonth(0), o.setFullYear(o.getFullYear() + 1));
      }
      return m = new Date(o.getFullYear() + 1, 0, 4), d = u(new Date(o.getFullYear(), 0, 4)), m = u(m), 0 >= f(d, o) ? 0 >= f(m, o) ? o.getFullYear() + 1 : o.getFullYear() : o.getFullYear() - 1;
    }
    var s = w[t + 40 >> 2];
    for (var h in t = { ib: w[t >> 2], hb: w[t + 4 >> 2], ya: w[t + 8 >> 2], Da: w[t + 12 >> 2], za: w[t + 16 >> 2], ra: w[t + 20 >> 2], ma: w[t + 24 >> 2], qa: w[t + 28 >> 2], lb: w[t + 32 >> 2], gb: w[t + 36 >> 2], jb: s && s ? ar(_, s) : "" }, e = e ? ar(_, e) : "", s = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" }) e = e.replace(new RegExp(h, "g"), s[h]);
    var p = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), v = "January February March April May June July August September October November December".split(" ");
    for (h in s = { "%a": function(o) {
      return p[o.ma].substring(0, 3);
    }, "%A": function(o) {
      return p[o.ma];
    }, "%b": function(o) {
      return v[o.za].substring(0, 3);
    }, "%B": function(o) {
      return v[o.za];
    }, "%C": function(o) {
      return i((o.ra + 1900) / 100 | 0, 2);
    }, "%d": function(o) {
      return i(o.Da, 2);
    }, "%e": function(o) {
      return a(o.Da, 2, " ");
    }, "%g": function(o) {
      return l(o).toString().substring(2);
    }, "%G": function(o) {
      return l(o);
    }, "%H": function(o) {
      return i(o.ya, 2);
    }, "%I": function(o) {
      return (o = o.ya) == 0 ? o = 12 : 12 < o && (o -= 12), i(o, 2);
    }, "%j": function(o) {
      for (var d = 0, m = 0; m <= o.za - 1; d += (gr(o.ra + 1900) ? wn : An)[m++]) ;
      return i(o.Da + d, 3);
    }, "%m": function(o) {
      return i(o.za + 1, 2);
    }, "%M": function(o) {
      return i(o.hb, 2);
    }, "%n": function() {
      return `
`;
    }, "%p": function(o) {
      return 0 <= o.ya && 12 > o.ya ? "AM" : "PM";
    }, "%S": function(o) {
      return i(o.ib, 2);
    }, "%t": function() {
      return "	";
    }, "%u": function(o) {
      return o.ma || 7;
    }, "%U": function(o) {
      return i(Math.floor((o.qa + 7 - o.ma) / 7), 2);
    }, "%V": function(o) {
      var d = Math.floor((o.qa + 7 - (o.ma + 6) % 7) / 7);
      if (2 >= (o.ma + 371 - o.qa - 2) % 7 && d++, d) d == 53 && ((m = (o.ma + 371 - o.qa) % 7) == 4 || m == 3 && gr(o.ra) || (d = 1));
      else {
        d = 52;
        var m = (o.ma + 7 - o.qa - 1) % 7;
        (m == 4 || m == 5 && gr(o.ra % 400 - 1)) && d++;
      }
      return i(d, 2);
    }, "%w": function(o) {
      return o.ma;
    }, "%W": function(o) {
      return i(Math.floor((o.qa + 7 - (o.ma + 6) % 7) / 7), 2);
    }, "%y": function(o) {
      return (o.ra + 1900).toString().substring(2);
    }, "%Y": function(o) {
      return o.ra + 1900;
    }, "%z": function(o) {
      var d = 0 <= (o = o.gb);
      return o = Math.abs(o) / 60, (d ? "+" : "-") + ("0000" + (o / 60 * 100 + o % 60)).slice(-4);
    }, "%Z": function(o) {
      return o.jb;
    }, "%%": function() {
      return "%";
    } }, e = e.replace(/%%/g, "\0\0"), s) e.includes(h) && (e = e.replace(new RegExp(h, "g"), s[h](t)));
    return (h = Jn(e = e.replace(/\0\0/g, "%"))).length > n ? 0 : (j.set(h, r), h.length - 1);
  }
  tn = c.InternalError = Pr("InternalError");
  for (var Tn = Array(256), yr = 0; 256 > yr; ++yr) Tn[yr] = String.fromCharCode(yr);
  an = Tn, B = c.BindingError = Pr("BindingError"), M.prototype.isAliasOf = function(r) {
    if (!(this instanceof M && r instanceof M)) return !1;
    var n = this.da.ga.ea, e = this.da.fa, t = r.da.ga.ea;
    for (r = r.da.fa; n.la; ) e = n.va(e), n = n.la;
    for (; t.la; ) r = t.va(r), t = t.la;
    return n === t && e === r;
  }, M.prototype.clone = function() {
    if (this.da.fa || $r(this), this.da.ua) return this.da.count.value += 1, this;
    var r = sr, n = Object, e = n.create, t = Object.getPrototypeOf(this), a = this.da;
    return (r = r(e.call(n, t, { da: { value: { count: a.count, ta: a.ta, ua: a.ua, fa: a.fa, ga: a.ga, ia: a.ia, ka: a.ka } } }))).da.count.value += 1, r.da.ta = !1, r;
  }, M.prototype.delete = function() {
    this.da.fa || $r(this), this.da.ta && !this.da.ua && g("Object already scheduled for deletion"), un(this), cn(this.da), this.da.ua || (this.da.ia = void 0, this.da.fa = void 0);
  }, M.prototype.isDeleted = function() {
    return !this.da.fa;
  }, M.prototype.deleteLater = function() {
    return this.da.fa || $r(this), this.da.ta && !this.da.ua && g("Object already scheduled for deletion"), Q.push(this), Q.length === 1 && K && K(Wr), this.da.ta = !0, this;
  }, c.getInheritedInstanceCount = function() {
    return Object.keys(rr).length;
  }, c.getLiveInheritedInstances = function() {
    var r, n = [];
    for (r in rr) rr.hasOwnProperty(r) && n.push(rr[r]);
    return n;
  }, c.flushPendingDeletes = Wr, c.setDelayFunction = function(r) {
    K = r, Q.length && K && K(Wr);
  }, O.prototype.Qa = function(r) {
    return this.Ga && (r = this.Ga(r)), r;
  }, O.prototype.Ea = function(r) {
    this.na && this.na(r);
  }, O.prototype.argPackAdvance = 8, O.prototype.readValueFromPointer = J, O.prototype.deleteObject = function(r) {
    r !== null && r.delete();
  }, O.prototype.fromWireType = function(r) {
    function n() {
      return this.xa ? fr(this.ea.oa, { ga: this.Za, fa: e, ka: this, ia: r }) : fr(this.ea.oa, { ga: this, fa: r });
    }
    var e = this.Qa(r);
    if (!e) return this.Ea(r), null;
    var t = Fn(this.ea, e);
    if (t !== void 0) return t.da.count.value === 0 ? (t.da.fa = e, t.da.ia = r, t.clone()) : (t = t.clone(), this.Ea(r), t);
    if (t = this.ea.Pa(e), !(t = sn[t])) return n.call(this);
    t = this.wa ? t.Ha : t.pointerType;
    var a = fn(e, this.ea, t.ea);
    return a === null ? n.call(this) : this.xa ? fr(t.ea.oa, { ga: t, fa: a, ka: this, ia: r }) : fr(t.ea.oa, { ga: t, fa: a });
  }, hn = c.UnboundTypeError = Pr("UnboundTypeError"), c.count_emval_handles = function() {
    for (var r = 0, n = 5; n < W.length; ++n) W[n] !== void 0 && ++r;
    return r;
  }, c.get_first_emval = function() {
    for (var r = 5; r < W.length; ++r) if (W[r] !== void 0) return W[r];
    return null;
  };
  var Zn = { n: function(r) {
    return wr(r + 24) + 24;
  }, m: function(r, n, e) {
    throw new Sn(r).Ia(n, e), r;
  }, u: function(r) {
    var n = ir[r];
    delete ir[r];
    var e = n.Ba, t = n.na, a = n.Fa;
    $([r], a.map((i) => i.Ta).concat(a.map((i) => i.cb)), (i) => {
      var f = {};
      return a.forEach((u, l) => {
        var s = i[l], h = u.Ra, p = u.Sa, v = i[l + a.length], o = u.bb, d = u.eb;
        f[u.Na] = { read: (m) => s.fromWireType(h(p, m)), write: (m, A) => {
          var P = [];
          o(d, m, v.toWireType(P, A)), or(P);
        } };
      }), [{ name: n.name, fromWireType: function(u) {
        var l, s = {};
        for (l in f) s[l] = f[l].read(u);
        return t(u), s;
      }, toWireType: function(u, l) {
        for (var s in f) if (!(s in l)) throw new TypeError('Missing field:  "' + s + '"');
        var h = e();
        for (s in f) f[s].write(h, l[s]);
        return u !== null && u.push(t, h), h;
      }, argPackAdvance: 8, readValueFromPointer: J, ja: t }];
    });
  }, E: function(r, n, e, t, a) {
    n = b(n), e = Z(e);
    var i = n.indexOf("u") != -1;
    i && (a = (1n << 64n) - 1n), k(r, { name: n, fromWireType: function(f) {
      return f;
    }, toWireType: function(f, u) {
      if (typeof u != "bigint" && typeof u != "number") throw new TypeError('Cannot convert "' + X(u) + '" to ' + this.name);
      if (u < t || u > a) throw new TypeError('Passing a number "' + X(u) + '" from JS side to C/C++ side to an argument of type "' + n + '", which is outside the valid range [' + t + ", " + a + "]!");
      return u;
    }, argPackAdvance: 8, readValueFromPointer: on(n, e, !i), ja: null });
  }, S: function(r, n, e, t, a) {
    var i = Z(e);
    k(r, { name: n = b(n), fromWireType: function(f) {
      return !!f;
    }, toWireType: function(f, u) {
      return u ? t : a;
    }, argPackAdvance: 8, readValueFromPointer: function(f) {
      if (e === 1) var u = j;
      else if (e === 2) u = I;
      else {
        if (e !== 4) throw new TypeError("Unknown boolean type size: " + n);
        u = w;
      }
      return this.fromWireType(u[f >> i]);
    }, ja: null });
  }, f: function(r, n, e, t, a, i, f, u, l, s, h, p, v) {
    h = b(h), i = T(a, i), u && (u = T(f, u)), s && (s = T(l, s)), v = T(p, v);
    var o = en(h);
    Or(o, function() {
      Y("Cannot construct " + h + " due to unbound types", [t]);
    }), $([r, n, e], t ? [t] : [], function(d) {
      if (d = d[0], t) var m = d.ea, A = m.oa;
      else A = M.prototype;
      d = Cr(o, function() {
        if (Object.getPrototypeOf(this) !== P) throw new B("Use 'new' to construct " + h);
        if (U.pa === void 0) throw new B(h + " has no accessible constructor");
        var Pn = U.pa[arguments.length];
        if (Pn === void 0) throw new B("Tried to invoke ctor of " + h + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(U.pa).toString() + ") parameters instead!");
        return Pn.apply(this, arguments);
      });
      var P = Object.create(A, { constructor: { value: d } });
      d.prototype = P;
      var U = new Dn(h, d, P, v, m, i, u, s);
      m = new O(h, U, !0, !1, !1), A = new O(h + "*", U, !1, !1, !1);
      var er = new O(h + " const*", U, !1, !0, !1);
      return sn[r] = { pointerType: A, Ha: er }, ln(o, d), [m, A, er];
    });
  }, o: function(r, n, e, t, a, i, f) {
    var u = pr(e, t);
    n = b(n), i = T(a, i), $([], [r], function(l) {
      function s() {
        Y("Cannot call " + h + " due to unbound types", u);
      }
      var h = (l = l[0]).name + "." + n;
      n.startsWith("@@") && (n = Symbol[n.substring(2)]);
      var p = l.ea.constructor;
      return p[n] === void 0 ? (s.sa = e - 1, p[n] = s) : (Er(p, n, h), p[n].ha[e - 1] = s), $([], u, function(v) {
        return v = dr(h, [v[0], null].concat(v.slice(1)), null, i, f), p[n].ha === void 0 ? (v.sa = e - 1, p[n] = v) : p[n].ha[e - 1] = v, [];
      }), [];
    });
  }, i: function(r, n, e, t, a, i) {
    0 < n || G();
    var f = pr(n, e);
    a = T(t, a), $([], [r], function(u) {
      var l = "constructor " + (u = u[0]).name;
      if (u.ea.pa === void 0 && (u.ea.pa = []), u.ea.pa[n - 1] !== void 0) throw new B("Cannot register multiple constructors with identical number of parameters (" + (n - 1) + ") for class '" + u.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      return u.ea.pa[n - 1] = () => {
        Y("Cannot construct " + u.name + " due to unbound types", f);
      }, $([], f, function(s) {
        return s.splice(1, 0, null), u.ea.pa[n - 1] = dr(l, s, null, a, i), [];
      }), [];
    });
  }, b: function(r, n, e, t, a, i, f, u) {
    var l = pr(e, t);
    n = b(n), i = T(a, i), $([], [r], function(s) {
      function h() {
        Y("Cannot call " + p + " due to unbound types", l);
      }
      var p = (s = s[0]).name + "." + n;
      n.startsWith("@@") && (n = Symbol[n.substring(2)]), u && s.ea.$a.push(n);
      var v = s.ea.oa, o = v[n];
      return o === void 0 || o.ha === void 0 && o.className !== s.name && o.sa === e - 2 ? (h.sa = e - 2, h.className = s.name, v[n] = h) : (Er(v, n, p), v[n].ha[e - 2] = h), $([], l, function(d) {
        return d = dr(p, d, s, i, f), v[n].ha === void 0 ? (d.sa = e - 2, v[n] = d) : v[n].ha[e - 2] = d, [];
      }), [];
    });
  }, c: function(r, n, e, t, a, i, f, u, l, s) {
    n = b(n), a = T(t, a), $([], [r], function(h) {
      var p = (h = h[0]).name + "." + n, v = { get: function() {
        Y("Cannot access " + p + " due to unbound types", [e, f]);
      }, enumerable: !0, configurable: !0 };
      return v.set = l ? () => {
        Y("Cannot access " + p + " due to unbound types", [e, f]);
      } : () => {
        g(p + " is a read-only property");
      }, Object.defineProperty(h.ea.oa, n, v), $([], l ? [e, f] : [e], function(o) {
        var d = o[0], m = { get: function() {
          var P = pn(this, h, p + " getter");
          return d.fromWireType(a(i, P));
        }, enumerable: !0 };
        if (l) {
          l = T(u, l);
          var A = o[1];
          m.set = function(P) {
            var U = pn(this, h, p + " setter"), er = [];
            l(s, U, A.toWireType(er, P)), or(er);
          };
        }
        return Object.defineProperty(h.ea.oa, n, m), [];
      }), [];
    });
  }, R: function(r, n) {
    k(r, { name: n = b(n), fromWireType: function(e) {
      var t = C(e);
      return Sr(e), t;
    }, toWireType: function(e, t) {
      return E(t);
    }, argPackAdvance: 8, readValueFromPointer: J, ja: null });
  }, s: function(r, n, e, t) {
    function a() {
    }
    e = Z(e), n = b(n), a.values = {}, k(r, { name: n, constructor: a, fromWireType: function(i) {
      return this.constructor.values[i];
    }, toWireType: function(i, f) {
      return f.value;
    }, argPackAdvance: 8, readValueFromPointer: Rn(n, e, t), ja: null }), Or(n, a);
  }, e: function(r, n, e) {
    var t = nr(r, "enum");
    n = b(n), r = t.constructor, t = Object.create(t.constructor.prototype, { value: { value: e }, constructor: { value: Cr(t.name + "_" + n, function() {
    }) } }), r.values[e] = t, r[n] = t;
  }, D: function(r, n, e) {
    e = Z(e), k(r, { name: n = b(n), fromWireType: function(t) {
      return t;
    }, toWireType: function(t, a) {
      return a;
    }, argPackAdvance: 8, readValueFromPointer: xn(n, e), ja: null });
  }, V: function(r, n, e, t, a, i) {
    var f = pr(n, e);
    r = b(r), a = T(t, a), Or(r, function() {
      Y("Cannot call " + r + " due to unbound types", f);
    }, n - 1), $([], f, function(u) {
      return ln(r, dr(r, [u[0], null].concat(u.slice(1)), null, a, i), n - 1), [];
    });
  }, w: function(r, n, e, t, a) {
    n = b(n), a === -1 && (a = 4294967295), a = Z(e);
    var i = (u) => u;
    if (t === 0) {
      var f = 32 - 8 * e;
      i = (u) => u << f >>> f;
    }
    e = n.includes("unsigned") ? function(u, l) {
      return l >>> 0;
    } : function(u, l) {
      return l;
    }, k(r, { name: n, fromWireType: i, toWireType: e, argPackAdvance: 8, readValueFromPointer: on(n, a, t !== 0), ja: null });
  }, q: function(r, n, e) {
    function t(i) {
      var f = y;
      return new a(Tr, f[1 + (i >>= 2)], f[i]);
    }
    var a = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, BigInt64Array, BigUint64Array][n];
    k(r, { name: e = b(e), fromWireType: t, argPackAdvance: 8, readValueFromPointer: t }, { Wa: !0 });
  }, h: function(r, n, e, t, a, i, f, u, l, s, h, p) {
    e = b(e), i = T(a, i), u = T(f, u), s = T(l, s), p = T(h, p), $([r], [n], function(v) {
      return v = v[0], [new O(e, v.ea, !1, !1, !0, v, t, i, u, s, p)];
    });
  }, F: function(r, n) {
    var e = (n = b(n)) === "std::string";
    k(r, { name: n, fromWireType: function(t) {
      var a = y[t >> 2], i = t + 4;
      if (e) for (var f = i, u = 0; u <= a; ++u) {
        var l = i + u;
        if (u == a || _[l] == 0) {
          if (f = f ? ar(_, f, l - f) : "", s === void 0) var s = f;
          else s += "\0", s += f;
          f = l + 1;
        }
      }
      else {
        for (s = Array(a), u = 0; u < a; ++u) s[u] = String.fromCharCode(_[i + u]);
        s = s.join("");
      }
      return F(t), s;
    }, toWireType: function(t, a) {
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      var i = typeof a == "string";
      i || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || g("Cannot pass non-string to std::string");
      var f = e && i ? Lr(a) : a.length, u = wr(4 + f + 1), l = u + 4;
      if (y[u >> 2] = f, e && i) Nr(a, _, l, f + 1);
      else if (i) for (i = 0; i < f; ++i) {
        var s = a.charCodeAt(i);
        255 < s && (F(l), g("String has UTF-16 code units that do not fit in 8 bits")), _[l + i] = s;
      }
      else for (i = 0; i < f; ++i) _[l + i] = a[i];
      return t !== null && t.push(F, u), u;
    }, argPackAdvance: 8, readValueFromPointer: J, ja: function(t) {
      F(t);
    } });
  }, A: function(r, n, e) {
    if (e = b(e), n === 2) var t = Yn, a = Hn, i = Vn, f = () => N, u = 1;
    else n === 4 && (t = Bn, a = zn, i = qn, f = () => y, u = 2);
    k(r, { name: e, fromWireType: function(l) {
      for (var s, h = y[l >> 2], p = f(), v = l + 4, o = 0; o <= h; ++o) {
        var d = l + 4 + o * n;
        o != h && p[d >> u] != 0 || (v = t(v, d - v), s === void 0 ? s = v : (s += "\0", s += v), v = d + n);
      }
      return F(l), s;
    }, toWireType: function(l, s) {
      typeof s != "string" && g("Cannot pass non-string to C++ string type " + e);
      var h = i(s), p = wr(4 + h + n);
      return y[p >> 2] = h >> u, a(s, p + 4, h + n), l !== null && l.push(F, p), p;
    }, argPackAdvance: 8, readValueFromPointer: J, ja: function(l) {
      F(l);
    } });
  }, v: function(r, n, e, t, a, i) {
    ir[r] = { name: b(n), Ba: T(e, t), na: T(a, i), Fa: [] };
  }, l: function(r, n, e, t, a, i, f, u, l, s) {
    ir[r].Fa.push({ Na: b(n), Ta: e, Ra: T(t, a), Sa: i, cb: f, bb: T(u, l), eb: s });
  }, T: function(r, n) {
    k(r, { Xa: !0, name: n = b(n), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function() {
    } });
  }, k: function(r, n, e) {
    r = C(r), n = nr(n, "emval::as");
    var t = [], a = E(t);
    return y[e >> 2] = a, n.toWireType(t, r);
  }, z: function(r, n) {
    return r = C(r), (n = nr(n, "emval::as")).toWireType(null, r);
  }, W: function(r, n, e, t) {
    r = C(r), e = mn(n, e);
    for (var a = Array(n), i = 0; i < n; ++i) {
      var f = e[i];
      a[i] = f.readValueFromPointer(t), t += f.argPackAdvance;
    }
    return r = r.apply(void 0, a), E(r);
  }, U: function(r, n, e, t, a) {
    r = mr[r], n = C(n), e = vr(e);
    var i = [];
    return y[t >> 2] = E(i), r(n, e, i, a);
  }, G: function(r, n, e, t) {
    (r = mr[r])(n = C(n), e = vr(e), null, t);
  }, a: Sr, H: function(r) {
    return r === 0 ? E(gn()) : (r = vr(r), E(gn()[r]));
  }, B: function(r, n) {
    var e = mn(r, n), t = e[0];
    n = t.name + "_$" + e.slice(1).map(function(f) {
      return f.name;
    }).join("_") + "$";
    var a = yn[n];
    if (a !== void 0) return a;
    var i = Array(r - 1);
    return a = Ln((f, u, l, s) => {
      for (var h = 0, p = 0; p < r - 1; ++p) i[p] = e[p + 1].readValueFromPointer(s + h), h += e[p + 1].argPackAdvance;
      for (f = f[u].apply(f, i), p = 0; p < r - 1; ++p) e[p + 1].Ja && e[p + 1].Ja(i[p]);
      if (!t.Xa) return t.toWireType(l, f);
    }), yn[n] = a;
  }, r: function(r, n) {
    return r = C(r), n = C(n), E(r[n]);
  }, g: function(r) {
    4 < r && (W[r].Ca += 1);
  }, I: function(r, n) {
    return (r = C(r)) instanceof (n = C(n));
  }, t: function(r) {
    return typeof (r = C(r)) == "number";
  }, x: function(r) {
    return typeof (r = C(r)) == "string";
  }, p: function(r) {
    return E(vr(r));
  }, j: function(r) {
    or(C(r)), Sr(r);
  }, d: function(r, n) {
    return r = (r = nr(r, "_emval_take_value")).readValueFromPointer(n), E(r);
  }, y: function(r) {
    return r = C(r), E(typeof r);
  }, C: function() {
    G("");
  }, N: function(r, n, e) {
    _.copyWithin(r, n, n + e);
  }, M: function(r) {
    var n = _.length;
    if (2147483648 < (r >>>= 0)) return !1;
    for (var e = 1; 4 >= e; e *= 2) {
      var t = n * (1 + 0.2 / e);
      t = Math.min(t, r + 100663296);
      var a = Math;
      t = Math.max(r, t), a = a.min.call(a, 2147483648, t + (65536 - t % 65536) % 65536);
      r: {
        try {
          Ar.grow(a - Tr.byteLength + 65535 >>> 16), Gr();
          var i = 1;
          break r;
        } catch {
        }
        i = void 0;
      }
      if (i) return !0;
    }
    return !1;
  }, K: function(r, n) {
    var e = 0;
    return bn().forEach(function(t, a) {
      var i = n + e;
      for (a = y[r + 4 * a >> 2] = i, i = 0; i < t.length; ++i) j[a++ >> 0] = t.charCodeAt(i);
      j[a >> 0] = 0, e += t.length + 1;
    }), 0;
  }, L: function(r, n) {
    var e = bn();
    y[r >> 2] = e.length;
    var t = 0;
    return e.forEach(function(a) {
      t += a.length + 1;
    }), y[n >> 2] = t, 0;
  }, Q: function() {
    return 52;
  }, P: function() {
    return 70;
  }, O: function(r, n, e, t) {
    for (var a = 0, i = 0; i < e; i++) {
      var f = y[n >> 2], u = y[n + 4 >> 2];
      n += 8;
      for (var l = 0; l < u; l++) {
        var s = _[f + l], h = Gn[r];
        s === 0 || s === 10 ? ((r === 1 ? En : H)(ar(h, 0)), h.length = 0) : h.push(s);
      }
      a += u;
    }
    return y[t >> 2] = a, 0;
  }, J: function(r, n, e, t) {
    return Xn(r, n, e, t);
  } };
  (function() {
    function r(a) {
      c.asm = a.exports, Ar = c.asm.X, Gr(), Jr = c.asm.ba, Zr.unshift(c.asm.Y), R--, c.monitorRunDependencies && c.monitorRunDependencies(R), R == 0 && L && (a = L, L = null, a());
    }
    function n(a) {
      r(a.instance);
    }
    function e(a) {
      return jn().then(function(i) {
        return WebAssembly.instantiate(i, t);
      }).then(function(i) {
        return i;
      }).then(a, function(i) {
        H("failed to asynchronously prepare wasm: " + i), G(i);
      });
    }
    var t = { a: Zn };
    if (R++, c.monitorRunDependencies && c.monitorRunDependencies(R), c.instantiateWasm) try {
      return c.instantiateWasm(t, r);
    } catch (a) {
      H("Module.instantiateWasm callback failed with error: " + a), tr(a);
    }
    (q || typeof WebAssembly.instantiateStreaming != "function" || Kr() || typeof fetch != "function" ? e(n) : fetch(S, { credentials: "same-origin" }).then(function(a) {
      return WebAssembly.instantiateStreaming(a, t).then(n, function(i) {
        return H("wasm streaming compile failed: " + i), H("falling back to ArrayBuffer instantiation"), e(n);
      });
    })).catch(tr);
  })(), c.___wasm_call_ctors = function() {
    return (c.___wasm_call_ctors = c.asm.Y).apply(null, arguments);
  };
  var br, wr = c._malloc = function() {
    return (wr = c._malloc = c.asm.Z).apply(null, arguments);
  }, F = c._free = function() {
    return (F = c._free = c.asm._).apply(null, arguments);
  }, _n = c.___getTypeName = function() {
    return (_n = c.___getTypeName = c.asm.$).apply(null, arguments);
  };
  function Cn() {
    function r() {
      if (!br && (br = !0, c.calledRun = !0, !zr)) {
        if (_r(Zr), Ir(c), c.onRuntimeInitialized && c.onRuntimeInitialized(), c.postRun) for (typeof c.postRun == "function" && (c.postRun = [c.postRun]); c.postRun.length; ) {
          var n = c.postRun.shift();
          Qr.unshift(n);
        }
        _r(Qr);
      }
    }
    if (!(0 < R)) {
      if (c.preRun) for (typeof c.preRun == "function" && (c.preRun = [c.preRun]); c.preRun.length; ) On();
      _r(Xr), 0 < R || (c.setStatus ? (c.setStatus("Running..."), setTimeout(function() {
        setTimeout(function() {
          c.setStatus("");
        }, 1), r();
      }, 1)) : r());
    }
  }
  if (c.__embind_initialize_bindings = function() {
    return (c.__embind_initialize_bindings = c.asm.aa).apply(null, arguments);
  }, c.___cxa_is_pointer_type = function() {
    return (c.___cxa_is_pointer_type = c.asm.ca).apply(null, arguments);
  }, L = function r() {
    br || Cn(), br || (L = r);
  }, c.preInit) for (typeof c.preInit == "function" && (c.preInit = [c.preInit]); 0 < c.preInit.length; ) c.preInit.pop()();
  return Cn(), z.ready;
}, $n.exports = kn;
const Kn = Qn(Wn.exports), ne = Object.freeze(Object.defineProperty({ __proto__: null, default: Kn }, Symbol.toStringTag, { value: "Module" }));
export {
  ne as a
};
//# sourceMappingURL=arcgis-knowledge-client-core-aqdKOxOH.js.map
