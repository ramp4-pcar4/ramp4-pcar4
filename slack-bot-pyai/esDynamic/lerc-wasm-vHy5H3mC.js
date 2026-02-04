import { v as jn } from "./main-DhLeoxL5.js";
var en, w, tn, rn = { exports: {} };
en = rn, w = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, typeof __filename < "u" && (w = w || __filename), tn = function(t) {
  var U, I;
  (t = (t = t || {}) !== void 0 ? t : {}).ready = new Promise(function(n, e) {
    U = n, I = e;
  });
  var P, b, A, j, R, T, q = Object.assign({}, t), C = typeof window == "object", d = typeof importScripts == "function", F = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", c = "";
  function on(n) {
    return t.locateFile ? t.locateFile(n, c) : c + n;
  }
  F ? (c = d ? require("path").dirname(c) + "/" : __dirname + "/", T = () => {
    R || (j = require("fs"), R = require("path"));
  }, P = function(n, e) {
    return T(), n = R.normalize(n), j.readFileSync(n, e ? void 0 : "utf8");
  }, A = (n) => {
    var e = P(n, !0);
    return e.buffer || (e = new Uint8Array(e)), e;
  }, b = (n, e, r) => {
    T(), n = R.normalize(n), j.readFile(n, function(o, s) {
      o ? r(o) : e(s.buffer);
    });
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(n) {
    if (!(n instanceof Pn)) throw n;
  }), process.on("unhandledRejection", function(n) {
    throw n;
  }), t.inspect = function() {
    return "[Emscripten Module object]";
  }) : (C || d) && (d ? c = self.location.href : typeof document < "u" && document.currentScript && (c = document.currentScript.src), w && (c = w), c = c.indexOf("blob:") !== 0 ? c.substr(0, c.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", P = (n) => {
    var e = new XMLHttpRequest();
    return e.open("GET", n, !1), e.send(null), e.responseText;
  }, d && (A = (n) => {
    var e = new XMLHttpRequest();
    return e.open("GET", n, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
  }), b = (n, e, r) => {
    var o = new XMLHttpRequest();
    o.open("GET", n, !0), o.responseType = "arraybuffer", o.onload = () => {
      o.status == 200 || o.status == 0 && o.response ? e(o.response) : r();
    }, o.onerror = r, o.send(null);
  }), t.print || console.log.bind(console);
  var m, H, _ = t.printErr || console.warn.bind(console);
  Object.assign(t, q), q = null, t.arguments && t.arguments, t.thisProgram && t.thisProgram, t.quit && t.quit, t.wasmBinary && (m = t.wasmBinary), t.noExitRuntime, typeof WebAssembly != "object" && v("no native wasm support detected");
  var O, y, x, h, p, B, k = !1, z = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function un(n, e, r) {
    for (var o = e + r, s = e; n[s] && !(s >= o); ) ++s;
    if (s - e > 16 && n.buffer && z) return z.decode(n.subarray(e, s));
    for (var u = ""; e < s; ) {
      var i = n[e++];
      if (128 & i) {
        var f = 63 & n[e++];
        if ((224 & i) != 192) {
          var Z = 63 & n[e++];
          if ((i = (240 & i) == 224 ? (15 & i) << 12 | f << 6 | Z : (7 & i) << 18 | f << 12 | Z << 6 | 63 & n[e++]) < 65536) u += String.fromCharCode(i);
          else {
            var nn = i - 65536;
            u += String.fromCharCode(55296 | nn >> 10, 56320 | 1023 & nn);
          }
        } else u += String.fromCharCode((31 & i) << 6 | f);
      } else u += String.fromCharCode(i);
    }
    return u;
  }
  function M(n, e) {
    return n ? un(x, n, e) : "";
  }
  function L(n) {
    O = n, t.HEAP8 = y = new Int8Array(n), t.HEAP16 = new Int16Array(n), t.HEAP32 = h = new Int32Array(n), t.HEAPU8 = x = new Uint8Array(n), t.HEAPU16 = new Uint16Array(n), t.HEAPU32 = p = new Uint32Array(n), t.HEAPF32 = new Float32Array(n), t.HEAPF64 = new Float64Array(n);
  }
  t.INITIAL_MEMORY;
  var G = [], X = [], N = [];
  function sn() {
    if (t.preRun) for (typeof t.preRun == "function" && (t.preRun = [t.preRun]); t.preRun.length; ) fn(t.preRun.shift());
    W(G);
  }
  function an() {
    W(X);
  }
  function cn() {
    if (t.postRun) for (typeof t.postRun == "function" && (t.postRun = [t.postRun]); t.postRun.length; ) ln(t.postRun.shift());
    W(N);
  }
  function fn(n) {
    G.unshift(n);
  }
  function pn(n) {
    X.unshift(n);
  }
  function ln(n) {
    N.unshift(n);
  }
  var l = 0, g = null;
  function hn(n) {
    l++, t.monitorRunDependencies && t.monitorRunDependencies(l);
  }
  function dn(n) {
    if (l--, t.monitorRunDependencies && t.monitorRunDependencies(l), l == 0 && g) {
      var e = g;
      g = null, e();
    }
  }
  function v(n) {
    t.onAbort && t.onAbort(n), _(n = "Aborted(" + n + ")"), k = !0, n += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(n);
    throw I(e), e;
  }
  var a, mn = "data:application/octet-stream;base64,";
  function Y(n) {
    return n.startsWith(mn);
  }
  function $(n) {
    return n.startsWith("file://");
  }
  function J(n) {
    try {
      if (n == a && m) return new Uint8Array(m);
      if (A) return A(n);
      throw "both async and sync fetching of the wasm failed";
    } catch (e) {
      v(e);
    }
  }
  function _n() {
    if (!m && (C || d)) {
      if (typeof fetch == "function" && !$(a)) return fetch(a, { credentials: "same-origin" }).then(function(n) {
        if (!n.ok) throw "failed to load wasm binary file at '" + a + "'";
        return n.arrayBuffer();
      }).catch(function() {
        return J(a);
      });
      if (b) return new Promise(function(n, e) {
        b(a, function(r) {
          n(new Uint8Array(r));
        }, e);
      });
    }
    return Promise.resolve().then(function() {
      return J(a);
    });
  }
  function yn() {
    var n = { a: In };
    function e(u, i) {
      var f = u.exports;
      t.asm = f, L((H = t.asm.g).buffer), B = t.asm.m, pn(t.asm.h), dn();
    }
    function r(u) {
      e(u.instance);
    }
    function o(u) {
      return _n().then(function(i) {
        return WebAssembly.instantiate(i, n);
      }).then(function(i) {
        return i;
      }).then(u, function(i) {
        _("failed to asynchronously prepare wasm: " + i), v(i);
      });
    }
    function s() {
      return m || typeof WebAssembly.instantiateStreaming != "function" || Y(a) || $(a) || F || typeof fetch != "function" ? o(r) : fetch(a, { credentials: "same-origin" }).then(function(u) {
        return WebAssembly.instantiateStreaming(u, n).then(r, function(i) {
          return _("wasm streaming compile failed: " + i), _("falling back to ArrayBuffer instantiation"), o(r);
        });
      });
    }
    if (hn(), t.instantiateWasm) try {
      return t.instantiateWasm(n, e);
    } catch (u) {
      return _("Module.instantiateWasm callback failed with error: " + u), !1;
    }
    return s().catch(I), {};
  }
  function W(n) {
    for (; n.length > 0; ) {
      var e = n.shift();
      if (typeof e != "function") {
        var r = e.func;
        typeof r == "number" ? e.arg === void 0 ? K(r)() : K(r)(e.arg) : r(e.arg === void 0 ? null : e.arg);
      } else e(t);
    }
  }
  Y(a = "lerc-wasm.wasm") || (a = on(a));
  var S = [];
  function K(n) {
    var e = S[n];
    return e || (n >= S.length && (S.length = n + 1), S[n] = e = B.get(n)), e;
  }
  function gn(n, e, r, o) {
    v("Assertion failed: " + M(n) + ", at: " + [e ? M(e) : "unknown filename", r, o ? M(o) : "unknown function"]);
  }
  function vn(n) {
    return Q(n + 24) + 24;
  }
  function wn(n) {
    this.excPtr = n, this.ptr = n - 24, this.set_type = function(e) {
      p[this.ptr + 4 >> 2] = e;
    }, this.get_type = function() {
      return p[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e) {
      p[this.ptr + 8 >> 2] = e;
    }, this.get_destructor = function() {
      return p[this.ptr + 8 >> 2];
    }, this.set_refcount = function(e) {
      h[this.ptr >> 2] = e;
    }, this.set_caught = function(e) {
      e = e ? 1 : 0, y[this.ptr + 12 >> 0] = e;
    }, this.get_caught = function() {
      return y[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(e) {
      e = e ? 1 : 0, y[this.ptr + 13 >> 0] = e;
    }, this.get_rethrown = function() {
      return y[this.ptr + 13 >> 0] != 0;
    }, this.init = function(e, r) {
      this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(r), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
    }, this.add_ref = function() {
      var e = h[this.ptr >> 2];
      h[this.ptr >> 2] = e + 1;
    }, this.release_ref = function() {
      var e = h[this.ptr >> 2];
      return h[this.ptr >> 2] = e - 1, e === 1;
    }, this.set_adjusted_ptr = function(e) {
      p[this.ptr + 16 >> 2] = e;
    }, this.get_adjusted_ptr = function() {
      return p[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (V(this.get_type())) return p[this.excPtr >> 2];
      var e = this.get_adjusted_ptr();
      return e !== 0 ? e : this.excPtr;
    };
  }
  function bn(n, e, r) {
    throw new wn(n).init(e, r), n;
  }
  function An() {
    v("");
  }
  function Rn(n, e, r) {
    x.copyWithin(n, e, e + r);
  }
  function xn() {
    return 2147483648;
  }
  function Sn(n) {
    try {
      return H.grow(n - O.byteLength + 65535 >>> 16), L(H.buffer), 1;
    } catch {
    }
  }
  function En(n) {
    var e = x.length;
    n >>>= 0;
    var r = xn();
    if (n > r) return !1;
    let o = (i, f) => i + (f - i % f) % f;
    for (var s = 1; s <= 4; s *= 2) {
      var u = e * (1 + 0.2 / s);
      if (u = Math.min(u, n + 100663296), Sn(Math.min(r, o(Math.max(n, u), 65536)))) return !0;
    }
    return !1;
  }
  var In = { a: gn, c: vn, b: bn, d: An, f: Rn, e: En };
  yn(), t.___wasm_call_ctors = function() {
    return (t.___wasm_call_ctors = t.asm.h).apply(null, arguments);
  }, t._lerc_getBlobInfo = function() {
    return (t._lerc_getBlobInfo = t.asm.i).apply(null, arguments);
  }, t._lerc_getDataRanges = function() {
    return (t._lerc_getDataRanges = t.asm.j).apply(null, arguments);
  }, t._lerc_decode = function() {
    return (t._lerc_decode = t.asm.k).apply(null, arguments);
  }, t._lerc_decode_4D = function() {
    return (t._lerc_decode_4D = t.asm.l).apply(null, arguments);
  };
  var Q = t._malloc = function() {
    return (Q = t._malloc = t.asm.n).apply(null, arguments);
  };
  t._free = function() {
    return (t._free = t.asm.o).apply(null, arguments);
  };
  var E, V = t.___cxa_is_pointer_type = function() {
    return (V = t.___cxa_is_pointer_type = t.asm.p).apply(null, arguments);
  };
  function Pn(n) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + n + ")", this.status = n;
  }
  function D(n) {
    function e() {
      E || (E = !0, t.calledRun = !0, k || (an(), U(t), t.onRuntimeInitialized && t.onRuntimeInitialized(), cn()));
    }
    l > 0 || (sn(), l > 0 || (t.setStatus ? (t.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        t.setStatus("");
      }, 1), e();
    }, 1)) : e()));
  }
  if (g = function n() {
    E || D(), E || (g = n);
  }, t.run = D, t.preInit) for (typeof t.preInit == "function" && (t.preInit = [t.preInit]); t.preInit.length > 0; ) t.preInit.pop()();
  return D(), t.ready;
}, en.exports = tn;
const Tn = jn(rn.exports), Mn = Object.freeze(Object.defineProperty({ __proto__: null, default: Tn }, Symbol.toStringTag, { value: "Module" }));
export {
  Mn as l
};
//# sourceMappingURL=lerc-wasm-vHy5H3mC.js.map
