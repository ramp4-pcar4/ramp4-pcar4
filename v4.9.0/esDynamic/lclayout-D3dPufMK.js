import { v as Ct } from "./main-DIdq27YS.js";
var Nr, q, Jr, Zr = { exports: {} };
Nr = Zr, q = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, typeof __filename < "u" && (q = q || __filename), Jr = function(fr = {}) {
  var dr, L, i = fr;
  i.ready = new Promise((r, e) => {
    dr = r, L = e;
  });
  var nr, G, X, hr = Object.assign({}, i), ar = "./this.program", pr = typeof window == "object", k = typeof importScripts == "function", mr = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", E = "";
  function Kr(r) {
    return i.locateFile ? i.locateFile(r, E) : E + r;
  }
  if (mr) {
    var vr = require("fs"), ir = require("path");
    E = k ? ir.dirname(E) + "/" : __dirname + "/", nr = (r, e) => (r = Z(r) ? new URL(r) : ir.normalize(r), vr.readFileSync(r, e ? void 0 : "utf8")), X = (r) => {
      var e = nr(r, !0);
      return e.buffer || (e = new Uint8Array(e)), e;
    }, G = (r, e, t, n = !0) => {
      r = Z(r) ? new URL(r) : ir.normalize(r), vr.readFile(r, n ? void 0 : "utf8", (a, o) => {
        a ? t(a) : e(n ? o.buffer : o);
      });
    }, !i.thisProgram && process.argv.length > 1 && (ar = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), i.inspect = () => "[Emscripten Module object]";
  } else (pr || k) && (k ? E = self.location.href : typeof document < "u" && document.currentScript && (E = document.currentScript.src), q && (E = q), E = E.indexOf("blob:") !== 0 ? E.substr(0, E.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", nr = (r) => {
    var e = new XMLHttpRequest();
    return e.open("GET", r, !1), e.send(null), e.responseText;
  }, k && (X = (r) => {
    var e = new XMLHttpRequest();
    return e.open("GET", r, !1), e.responseType = "arraybuffer", e.send(null), new Uint8Array(e.response);
  }), G = (r, e, t) => {
    var n = new XMLHttpRequest();
    n.open("GET", r, !0), n.responseType = "arraybuffer", n.onload = () => {
      n.status == 200 || n.status == 0 && n.response ? e(n.response) : t();
    }, n.onerror = t, n.send(null);
  });
  i.print || console.log.bind(console);
  var U, N, H = i.printErr || console.error.bind(console);
  Object.assign(i, hr), hr = null, i.arguments && i.arguments, i.thisProgram && (ar = i.thisProgram), i.quit && i.quit, i.wasmBinary && (U = i.wasmBinary), i.noExitRuntime, typeof WebAssembly != "object" && or("no native wasm support detected");
  var S, g, I, J, y, p, yr, gr, wr = !1;
  function _r() {
    var r = N.buffer;
    i.HEAP8 = S = new Int8Array(r), i.HEAP16 = I = new Int16Array(r), i.HEAPU8 = g = new Uint8Array(r), i.HEAPU16 = J = new Uint16Array(r), i.HEAP32 = y = new Int32Array(r), i.HEAPU32 = p = new Uint32Array(r), i.HEAPF32 = yr = new Float32Array(r), i.HEAPF64 = gr = new Float64Array(r);
  }
  var br = [], Ar = [], Tr = [];
  function Qr() {
    if (i.preRun) for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; ) te(i.preRun.shift());
    ur(br);
  }
  function re() {
    ur(Ar);
  }
  function ee() {
    if (i.postRun) for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; ) ae(i.postRun.shift());
    ur(Tr);
  }
  function te(r) {
    br.unshift(r);
  }
  function ne(r) {
    Ar.unshift(r);
  }
  function ae(r) {
    Tr.unshift(r);
  }
  var O = 0, Y = null;
  function ie(r) {
    O++, i.monitorRunDependencies && i.monitorRunDependencies(O);
  }
  function oe(r) {
    if (O--, i.monitorRunDependencies && i.monitorRunDependencies(O), O == 0 && Y) {
      var e = Y;
      Y = null, e();
    }
  }
  function or(r) {
    i.onAbort && i.onAbort(r), H(r = "Aborted(" + r + ")"), wr = !0, r += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(r);
    throw L(e), e;
  }
  var z, ue = "data:application/octet-stream;base64,";
  function Cr(r) {
    return r.startsWith(ue);
  }
  function Z(r) {
    return r.startsWith("file://");
  }
  function Er(r) {
    if (r == z && U) return new Uint8Array(U);
    if (X) return X(r);
    throw "both async and sync fetching of the wasm failed";
  }
  function se(r) {
    if (!U && (pr || k)) {
      if (typeof fetch == "function" && !Z(r)) return fetch(r, { credentials: "same-origin" }).then((e) => {
        if (!e.ok) throw "failed to load wasm binary file at '" + r + "'";
        return e.arrayBuffer();
      }).catch(() => Er(r));
      if (G) return new Promise((e, t) => {
        G(r, (n) => e(new Uint8Array(n)), t);
      });
    }
    return Promise.resolve().then(() => Er(r));
  }
  function Fr(r, e, t) {
    return se(r).then((n) => WebAssembly.instantiate(n, e)).then((n) => n).then(t, (n) => {
      H(`failed to asynchronously prepare wasm: ${n}`), or(n);
    });
  }
  function le(r, e, t, n) {
    return r || typeof WebAssembly.instantiateStreaming != "function" || Cr(e) || Z(e) || mr || typeof fetch != "function" ? Fr(e, t, n) : fetch(e, { credentials: "same-origin" }).then((a) => WebAssembly.instantiateStreaming(a, t).then(n, function(o) {
      return H(`wasm streaming compile failed: ${o}`), H("falling back to ArrayBuffer instantiation"), Fr(e, t, n);
    }));
  }
  function ce() {
    var r = { a: At };
    function e(n, a) {
      return w = n.exports, N = w.w, _r(), $r = w.y, ne(w.x), oe(), w;
    }
    function t(n) {
      e(n.instance);
    }
    if (ie(), i.instantiateWasm) try {
      return i.instantiateWasm(r, e);
    } catch (n) {
      H(`Module.instantiateWasm callback failed with error: ${n}`), L(n);
    }
    return le(U, z, r, t).catch(L), {};
  }
  Cr(z = "lclayout.wasm") || (z = Kr(z));
  var ur = (r) => {
    for (; r.length > 0; ) r.shift()(i);
  };
  function fe(r) {
    this.excPtr = r, this.ptr = r - 24, this.set_type = function(e) {
      p[this.ptr + 4 >> 2] = e;
    }, this.get_type = function() {
      return p[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e) {
      p[this.ptr + 8 >> 2] = e;
    }, this.get_destructor = function() {
      return p[this.ptr + 8 >> 2];
    }, this.set_caught = function(e) {
      e = e ? 1 : 0, S[this.ptr + 12 >> 0] = e;
    }, this.get_caught = function() {
      return S[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(e) {
      e = e ? 1 : 0, S[this.ptr + 13 >> 0] = e;
    }, this.get_rethrown = function() {
      return S[this.ptr + 13 >> 0] != 0;
    }, this.init = function(e, t) {
      this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
    }, this.set_adjusted_ptr = function(e) {
      p[this.ptr + 16 >> 2] = e;
    }, this.get_adjusted_ptr = function() {
      return p[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Gr(this.get_type())) return p[this.excPtr >> 2];
      var e = this.get_adjusted_ptr();
      return e !== 0 ? e : this.excPtr;
    };
  }
  var Pr, Sr, Wr, de = (r, e, t) => {
    throw new fe(r).init(e, t), r;
  }, he = (r, e, t, n, a) => {
  }, pe = () => {
    for (var r = new Array(256), e = 0; e < 256; ++e) r[e] = String.fromCharCode(e);
    Pr = r;
  }, T = (r) => {
    for (var e = "", t = r; g[t]; ) e += Pr[g[t++]];
    return e;
  }, $ = {}, x = {}, K = {}, C = (r) => {
    throw new Sr(r);
  }, Mr = (r) => {
    throw new Wr(r);
  }, jr = (r, e, t) => {
    function n(l) {
      var c = t(l);
      c.length !== r.length && Mr("Mismatched type converter count");
      for (var f = 0; f < r.length; ++f) W(r[f], c[f]);
    }
    r.forEach(function(l) {
      K[l] = e;
    });
    var a = new Array(e.length), o = [], s = 0;
    e.forEach((l, c) => {
      x.hasOwnProperty(l) ? a[c] = x[l] : (o.push(l), $.hasOwnProperty(l) || ($[l] = []), $[l].push(() => {
        a[c] = x[l], ++s === o.length && n(a);
      }));
    }), o.length === 0 && n(a);
  };
  function me(r, e, t = {}) {
    var n = e.name;
    if (r || C(`type "${n}" must have a positive integer typeid pointer`), x.hasOwnProperty(r)) {
      if (t.ignoreDuplicateRegistrations) return;
      C(`Cannot register type '${n}' twice`);
    }
    if (x[r] = e, delete K[r], $.hasOwnProperty(r)) {
      var a = $[r];
      delete $[r], a.forEach((o) => o());
    }
  }
  function W(r, e, t = {}) {
    if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return me(r, e, t);
  }
  var D = 8, ve = (r, e, t, n) => {
    W(r, { name: e = T(e), fromWireType: function(a) {
      return !!a;
    }, toWireType: function(a, o) {
      return o ? t : n;
    }, argPackAdvance: D, readValueFromPointer: function(a) {
      return this.fromWireType(g[a]);
    }, destructorFunction: null });
  }, ye = (r, e, t) => {
    r = T(r), jr([], [e], function(n) {
      return n = n[0], i[r] = n.fromWireType(t), [];
    });
  };
  function ge() {
    Object.assign(Rr.prototype, { get(r) {
      return this.allocated[r];
    }, has(r) {
      return this.allocated[r] !== void 0;
    }, allocate(r) {
      var e = this.freelist.pop() || this.allocated.length;
      return this.allocated[e] = r, e;
    }, free(r) {
      this.allocated[r] = void 0, this.freelist.push(r);
    } });
  }
  function Rr() {
    this.allocated = [void 0], this.freelist = [];
  }
  var F = new Rr(), we = (r) => {
    r >= F.reserved && --F.get(r).refcount == 0 && F.free(r);
  }, _e = () => {
    for (var r = 0, e = F.reserved; e < F.allocated.length; ++e) F.allocated[e] !== void 0 && ++r;
    return r;
  }, be = () => {
    F.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), F.reserved = F.allocated.length, i.count_emval_handles = _e;
  }, Or = { toValue: (r) => (r || C("Cannot use deleted val. handle = " + r), F.get(r).value), toHandle: (r) => {
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
        return F.allocate({ refcount: 1, value: r });
    }
  } };
  function Dr(r) {
    return this.fromWireType(y[r >> 2]);
  }
  var Ae = (r, e) => {
    W(r, { name: e = T(e), fromWireType: (t) => {
      var n = Or.toValue(t);
      return we(t), n;
    }, toWireType: (t, n) => Or.toHandle(n), argPackAdvance: D, readValueFromPointer: Dr, destructorFunction: null });
  }, Te = (r, e) => {
    switch (e) {
      case 4:
        return function(t) {
          return this.fromWireType(yr[t >> 2]);
        };
      case 8:
        return function(t) {
          return this.fromWireType(gr[t >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e}): ${r}`);
    }
  }, Ce = (r, e, t) => {
    W(r, { name: e = T(e), fromWireType: (n) => n, toWireType: (n, a) => a, argPackAdvance: D, readValueFromPointer: Te(e, t), destructorFunction: null });
  }, Ee = 48, Fe = 57, Pe = (r) => {
    if (r === void 0) return "_unknown";
    var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return e >= Ee && e <= Fe ? `_${r}` : r;
  }, Se = (r) => {
    for (; r.length; ) {
      var e = r.pop();
      r.pop()(e);
    }
  };
  function We(r, e, t, n, a, o) {
    var s = e.length;
    s < 2 && C("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var l = e[1] !== null && t !== null, c = !1, f = 1; f < e.length; ++f) if (e[f] !== null && e[f].destructorFunction === void 0) {
      c = !0;
      break;
    }
    var h = e[0].name !== "void", v = s - 2, m = new Array(v), A = [], P = [];
    return function() {
      var j;
      arguments.length !== v && C(`function ${r} called with ${arguments.length} arguments, expected ${v}`), P.length = 0, A.length = l ? 2 : 1, A[0] = a, l && (j = e[1].toWireType(P, this), A[1] = j);
      for (var R = 0; R < v; ++R) m[R] = e[R + 2].toWireType(P, arguments[R]), A.push(m[R]);
      function B(u) {
        if (c) Se(P);
        else for (var d = l ? 1 : 2; d < e.length; d++) {
          var _ = d === 1 ? j : m[d - 2];
          e[d].destructorFunction !== null && e[d].destructorFunction(_);
        }
        if (h) return e[0].fromWireType(u);
      }
      return B(n.apply(null, A));
    };
  }
  var $r, Me = (r, e, t) => {
    if (r[e].overloadTable === void 0) {
      var n = r[e];
      r[e] = function() {
        return r[e].overloadTable.hasOwnProperty(arguments.length) || C(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[e].overloadTable})!`), r[e].overloadTable[arguments.length].apply(this, arguments);
      }, r[e].overloadTable = [], r[e].overloadTable[n.argCount] = n;
    }
  }, je = (r, e, t) => {
    i.hasOwnProperty(r) ? ((t === void 0 || i[r].overloadTable !== void 0 && i[r].overloadTable[t] !== void 0) && C(`Cannot register public name '${r}' twice`), Me(i, r, r), i.hasOwnProperty(t) && C(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`), i[r].overloadTable[t] = e) : (i[r] = e, t !== void 0 && (i[r].numArguments = t));
  }, Re = (r, e) => {
    for (var t = [], n = 0; n < r; n++) t.push(p[e + 4 * n >> 2]);
    return t;
  }, Oe = (r, e, t) => {
    i.hasOwnProperty(r) || Mr("Replacing nonexistant public symbol"), i[r].overloadTable !== void 0 && t !== void 0 ? i[r].overloadTable[t] = e : (i[r] = e, i[r].argCount = t);
  }, De = (r, e, t) => {
    var n = i["dynCall_" + r];
    return t && t.length ? n.apply(null, [e].concat(t)) : n.call(null, e);
  }, Q = [], xr = (r) => {
    var e = Q[r];
    return e || (r >= Q.length && (Q.length = r + 1), Q[r] = e = $r.get(r)), e;
  }, $e = (r, e, t) => r.includes("j") ? De(r, e, t) : xr(e).apply(null, t), xe = (r, e) => {
    var t = [];
    return function() {
      return t.length = 0, Object.assign(t, arguments), $e(r, e, t);
    };
  }, ke = (r, e) => {
    function t() {
      return r.includes("j") ? xe(r, e) : xr(e);
    }
    r = T(r);
    var n = t();
    return typeof n != "function" && C(`unknown function pointer with signature ${r}: ${e}`), n;
  };
  function Ue(r, e) {
    return { [r = Pe(r)]: function() {
      return e.apply(this, arguments);
    } }[r];
  }
  var kr, He = (r, e) => {
    var t = Ue(e, function(n) {
      this.name = e, this.message = n;
      var a = new Error(n).stack;
      a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
      return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
    }, t;
  }, Ie = (r) => {
    var e = Lr(r), t = T(e);
    return M(e), t;
  }, Ye = (r, e) => {
    var t = [], n = {};
    function a(o) {
      n[o] || x[o] || (K[o] ? K[o].forEach(a) : (t.push(o), n[o] = !0));
    }
    throw e.forEach(a), new kr(`${r}: ` + t.map(Ie).join([", "]));
  }, ze = (r, e, t, n, a, o, s) => {
    var l = Re(e, t);
    r = T(r), a = ke(n, a), je(r, function() {
      Ye(`Cannot call ${r} due to unbound types`, l);
    }, e - 1), jr([], l, function(c) {
      var f = [c[0], null].concat(c.slice(1));
      return Oe(r, We(r, f, null, a, o), e - 1), [];
    });
  }, Ve = (r, e, t) => {
    switch (e) {
      case 1:
        return t ? (n) => S[n >> 0] : (n) => g[n >> 0];
      case 2:
        return t ? (n) => I[n >> 1] : (n) => J[n >> 1];
      case 4:
        return t ? (n) => y[n >> 2] : (n) => p[n >> 2];
      default:
        throw new TypeError(`invalid integer width (${e}): ${r}`);
    }
  }, Be = (r, e, t, n, a) => {
    e = T(e);
    var o = (f) => f;
    if (n === 0) {
      var s = 32 - 8 * t;
      o = (f) => f << s >>> s;
    }
    var l = e.includes("unsigned"), c = (f, h) => {
    };
    W(r, { name: e, fromWireType: o, toWireType: l ? function(f, h) {
      return c(h, this.name), h >>> 0;
    } : function(f, h) {
      return c(h, this.name), h;
    }, argPackAdvance: D, readValueFromPointer: Ve(e, t, n !== 0), destructorFunction: null });
  }, qe = (r, e, t) => {
    var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
    function a(o) {
      var s = p[o >> 2], l = p[o + 4 >> 2];
      return new n(S.buffer, l, s);
    }
    W(r, { name: t = T(t), fromWireType: a, argPackAdvance: D, readValueFromPointer: a }, { ignoreDuplicateRegistrations: !0 });
  };
  function Le(r) {
    return this.fromWireType(p[r >> 2]);
  }
  var Ur, Hr = (r, e, t, n) => {
    if (!(n > 0)) return 0;
    for (var a = t, o = t + n - 1, s = 0; s < r.length; ++s) {
      var l = r.charCodeAt(s);
      if (l >= 55296 && l <= 57343 && (l = 65536 + ((1023 & l) << 10) | 1023 & r.charCodeAt(++s)), l <= 127) {
        if (t >= o) break;
        e[t++] = l;
      } else if (l <= 2047) {
        if (t + 1 >= o) break;
        e[t++] = 192 | l >> 6, e[t++] = 128 | 63 & l;
      } else if (l <= 65535) {
        if (t + 2 >= o) break;
        e[t++] = 224 | l >> 12, e[t++] = 128 | l >> 6 & 63, e[t++] = 128 | 63 & l;
      } else {
        if (t + 3 >= o) break;
        e[t++] = 240 | l >> 18, e[t++] = 128 | l >> 12 & 63, e[t++] = 128 | l >> 6 & 63, e[t++] = 128 | 63 & l;
      }
    }
    return e[t] = 0, t - a;
  }, Ge = (r, e, t) => Hr(r, g, e, t), Ir = (r) => {
    for (var e = 0, t = 0; t < r.length; ++t) {
      var n = r.charCodeAt(t);
      n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++t) : e += 3;
    }
    return e;
  }, Yr = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, Xe = (r, e, t) => {
    for (var n = e + t, a = e; r[a] && !(a >= n); ) ++a;
    if (a - e > 16 && r.buffer && Yr) return Yr.decode(r.subarray(e, a));
    for (var o = ""; e < a; ) {
      var s = r[e++];
      if (128 & s) {
        var l = 63 & r[e++];
        if ((224 & s) != 192) {
          var c = 63 & r[e++];
          if ((s = (240 & s) == 224 ? (15 & s) << 12 | l << 6 | c : (7 & s) << 18 | l << 12 | c << 6 | 63 & r[e++]) < 65536) o += String.fromCharCode(s);
          else {
            var f = s - 65536;
            o += String.fromCharCode(55296 | f >> 10, 56320 | 1023 & f);
          }
        } else o += String.fromCharCode((31 & s) << 6 | l);
      } else o += String.fromCharCode(s);
    }
    return o;
  }, sr = (r, e) => r ? Xe(g, r, e) : "", Ne = (r, e) => {
    var t = (e = T(e)) === "std::string";
    W(r, { name: e, fromWireType(n) {
      var a, o = p[n >> 2], s = n + 4;
      if (t) for (var l = s, c = 0; c <= o; ++c) {
        var f = s + c;
        if (c == o || g[f] == 0) {
          var h = sr(l, f - l);
          a === void 0 ? a = h : (a += "\0", a += h), l = f + 1;
        }
      }
      else {
        var v = new Array(o);
        for (c = 0; c < o; ++c) v[c] = String.fromCharCode(g[s + c]);
        a = v.join("");
      }
      return M(n), a;
    }, toWireType(n, a) {
      var o;
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      var s = typeof a == "string";
      s || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || C("Cannot pass non-string to std::string"), o = t && s ? Ir(a) : a.length;
      var l = cr(4 + o + 1), c = l + 4;
      if (p[l >> 2] = o, t && s) Ge(a, c, o + 1);
      else if (s) for (var f = 0; f < o; ++f) {
        var h = a.charCodeAt(f);
        h > 255 && (M(c), C("String has UTF-16 code units that do not fit in 8 bits")), g[c + f] = h;
      }
      else for (f = 0; f < o; ++f) g[c + f] = a[f];
      return n !== null && n.push(M, l), l;
    }, argPackAdvance: D, readValueFromPointer: Le, destructorFunction(n) {
      M(n);
    } });
  }, zr = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Je = (r, e) => {
    for (var t = r, n = t >> 1, a = n + e / 2; !(n >= a) && J[n]; ) ++n;
    if ((t = n << 1) - r > 32 && zr) return zr.decode(g.subarray(r, t));
    for (var o = "", s = 0; !(s >= e / 2); ++s) {
      var l = I[r + 2 * s >> 1];
      if (l == 0) break;
      o += String.fromCharCode(l);
    }
    return o;
  }, Ze = (r, e, t) => {
    if (t === void 0 && (t = 2147483647), t < 2) return 0;
    for (var n = e, a = (t -= 2) < 2 * r.length ? t / 2 : r.length, o = 0; o < a; ++o) {
      var s = r.charCodeAt(o);
      I[e >> 1] = s, e += 2;
    }
    return I[e >> 1] = 0, e - n;
  }, Ke = (r) => 2 * r.length, Qe = (r, e) => {
    for (var t = 0, n = ""; !(t >= e / 4); ) {
      var a = y[r + 4 * t >> 2];
      if (a == 0) break;
      if (++t, a >= 65536) {
        var o = a - 65536;
        n += String.fromCharCode(55296 | o >> 10, 56320 | 1023 & o);
      } else n += String.fromCharCode(a);
    }
    return n;
  }, rt = (r, e, t) => {
    if (t === void 0 && (t = 2147483647), t < 4) return 0;
    for (var n = e, a = n + t - 4, o = 0; o < r.length; ++o) {
      var s = r.charCodeAt(o);
      if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & r.charCodeAt(++o)), y[e >> 2] = s, (e += 4) + 4 > a) break;
    }
    return y[e >> 2] = 0, e - n;
  }, et = (r) => {
    for (var e = 0, t = 0; t < r.length; ++t) {
      var n = r.charCodeAt(t);
      n >= 55296 && n <= 57343 && ++t, e += 4;
    }
    return e;
  }, tt = (r, e, t) => {
    var n, a, o, s, l;
    t = T(t), e === 2 ? (n = Je, a = Ze, s = Ke, o = () => J, l = 1) : e === 4 && (n = Qe, a = rt, s = et, o = () => p, l = 2), W(r, { name: t, fromWireType: (c) => {
      for (var f, h = p[c >> 2], v = o(), m = c + 4, A = 0; A <= h; ++A) {
        var P = c + 4 + A * e;
        if (A == h || v[P >> l] == 0) {
          var j = n(m, P - m);
          f === void 0 ? f = j : (f += "\0", f += j), m = P + e;
        }
      }
      return M(c), f;
    }, toWireType: (c, f) => {
      typeof f != "string" && C(`Cannot pass non-string to C++ string type ${t}`);
      var h = s(f), v = cr(4 + h + e);
      return p[v >> 2] = h >> l, a(f, v + 4, h + e), c !== null && c.push(M, v), v;
    }, argPackAdvance: D, readValueFromPointer: Dr, destructorFunction(c) {
      M(c);
    } });
  }, nt = (r, e) => {
    W(r, { isVoid: !0, name: e = T(e), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (t, n) => {
    } });
  }, at = !0, it = () => at, ot = () => {
    or("");
  }, ut = () => Date.now(), Vr = () => 2147483648, st = () => Vr();
  Ur = () => performance.now();
  var lt = (r, e, t) => g.copyWithin(r, e, e + t), ct = (r) => {
    var e = (r - N.buffer.byteLength + 65535) / 65536;
    try {
      return N.grow(e), _r(), 1;
    } catch {
    }
  }, ft = (r) => {
    var e = g.length;
    r >>>= 0;
    var t = Vr();
    if (r > t) return !1;
    for (var n = (l, c) => l + (c - l % c) % c, a = 1; a <= 4; a *= 2) {
      var o = e * (1 + 0.2 / a);
      o = Math.min(o, r + 100663296);
      var s = Math.min(t, n(Math.max(r, o), 65536));
      if (ct(s)) return !0;
    }
    return !1;
  }, lr = {}, dt = () => ar || "./this.program", V = () => {
    if (!V.strings) {
      var r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: dt() };
      for (var e in lr) lr[e] === void 0 ? delete r[e] : r[e] = lr[e];
      var t = [];
      for (var e in r) t.push(`${e}=${r[e]}`);
      V.strings = t;
    }
    return V.strings;
  }, ht = (r, e) => {
    for (var t = 0; t < r.length; ++t) S[e++ >> 0] = r.charCodeAt(t);
    S[e >> 0] = 0;
  }, pt = (r, e) => {
    var t = 0;
    return V().forEach((n, a) => {
      var o = e + t;
      p[r + 4 * a >> 2] = o, ht(n, o), t += n.length + 1;
    }), 0;
  }, mt = (r, e) => {
    var t = V();
    p[r >> 2] = t.length;
    var n = 0;
    return t.forEach((a) => n += a.length + 1), p[e >> 2] = n, 0;
  }, rr = (r) => r % 4 == 0 && (r % 100 != 0 || r % 400 == 0), vt = (r, e) => {
    for (var t = 0, n = 0; n <= e; t += r[n++]) ;
    return t;
  }, Br = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], qr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], yt = (r, e) => {
    for (var t = new Date(r.getTime()); e > 0; ) {
      var n = rr(t.getFullYear()), a = t.getMonth(), o = (n ? Br : qr)[a];
      if (!(e > o - t.getDate())) return t.setDate(t.getDate() + e), t;
      e -= o - t.getDate() + 1, t.setDate(1), a < 11 ? t.setMonth(a + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
    }
    return t;
  };
  function gt(r, e, t) {
    var n = Ir(r) + 1, a = new Array(n);
    return Hr(r, a, 0, a.length), a;
  }
  var wt = (r, e) => {
    S.set(r, e);
  }, _t = (r, e, t, n) => {
    var a = p[n + 40 >> 2], o = { tm_sec: y[n >> 2], tm_min: y[n + 4 >> 2], tm_hour: y[n + 8 >> 2], tm_mday: y[n + 12 >> 2], tm_mon: y[n + 16 >> 2], tm_year: y[n + 20 >> 2], tm_wday: y[n + 24 >> 2], tm_yday: y[n + 28 >> 2], tm_isdst: y[n + 32 >> 2], tm_gmtoff: y[n + 36 >> 2], tm_zone: a ? sr(a) : "" }, s = sr(t), l = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var c in l) s = s.replace(new RegExp(c, "g"), l[c]);
    var f = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], h = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function v(u, d, _) {
      for (var b = typeof u == "number" ? u.toString() : u || ""; b.length < d; ) b = _[0] + b;
      return b;
    }
    function m(u, d) {
      return v(u, d, "0");
    }
    function A(u, d) {
      function _(tr) {
        return tr < 0 ? -1 : tr > 0 ? 1 : 0;
      }
      var b;
      return (b = _(u.getFullYear() - d.getFullYear())) === 0 && (b = _(u.getMonth() - d.getMonth())) === 0 && (b = _(u.getDate() - d.getDate())), b;
    }
    function P(u) {
      switch (u.getDay()) {
        case 0:
          return new Date(u.getFullYear() - 1, 11, 29);
        case 1:
          return u;
        case 2:
          return new Date(u.getFullYear(), 0, 3);
        case 3:
          return new Date(u.getFullYear(), 0, 2);
        case 4:
          return new Date(u.getFullYear(), 0, 1);
        case 5:
          return new Date(u.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(u.getFullYear() - 1, 11, 30);
      }
    }
    function j(u) {
      var d = yt(new Date(u.tm_year + 1900, 0, 1), u.tm_yday), _ = new Date(d.getFullYear(), 0, 4), b = new Date(d.getFullYear() + 1, 0, 4), tr = P(_), Tt = P(b);
      return A(tr, d) <= 0 ? A(Tt, d) <= 0 ? d.getFullYear() + 1 : d.getFullYear() : d.getFullYear() - 1;
    }
    var R = { "%a": (u) => f[u.tm_wday].substring(0, 3), "%A": (u) => f[u.tm_wday], "%b": (u) => h[u.tm_mon].substring(0, 3), "%B": (u) => h[u.tm_mon], "%C": (u) => m((u.tm_year + 1900) / 100 | 0, 2), "%d": (u) => m(u.tm_mday, 2), "%e": (u) => v(u.tm_mday, 2, " "), "%g": (u) => j(u).toString().substring(2), "%G": (u) => j(u), "%H": (u) => m(u.tm_hour, 2), "%I": (u) => {
      var d = u.tm_hour;
      return d == 0 ? d = 12 : d > 12 && (d -= 12), m(d, 2);
    }, "%j": (u) => m(u.tm_mday + vt(rr(u.tm_year + 1900) ? Br : qr, u.tm_mon - 1), 3), "%m": (u) => m(u.tm_mon + 1, 2), "%M": (u) => m(u.tm_min, 2), "%n": () => `
`, "%p": (u) => u.tm_hour >= 0 && u.tm_hour < 12 ? "AM" : "PM", "%S": (u) => m(u.tm_sec, 2), "%t": () => "	", "%u": (u) => u.tm_wday || 7, "%U": (u) => {
      var d = u.tm_yday + 7 - u.tm_wday;
      return m(Math.floor(d / 7), 2);
    }, "%V": (u) => {
      var d = Math.floor((u.tm_yday + 7 - (u.tm_wday + 6) % 7) / 7);
      if ((u.tm_wday + 371 - u.tm_yday - 2) % 7 <= 2 && d++, d) {
        if (d == 53) {
          var _ = (u.tm_wday + 371 - u.tm_yday) % 7;
          _ == 4 || _ == 3 && rr(u.tm_year) || (d = 1);
        }
      } else {
        d = 52;
        var b = (u.tm_wday + 7 - u.tm_yday - 1) % 7;
        (b == 4 || b == 5 && rr(u.tm_year % 400 - 1)) && d++;
      }
      return m(d, 2);
    }, "%w": (u) => u.tm_wday, "%W": (u) => {
      var d = u.tm_yday + 7 - (u.tm_wday + 6) % 7;
      return m(Math.floor(d / 7), 2);
    }, "%y": (u) => (u.tm_year + 1900).toString().substring(2), "%Y": (u) => u.tm_year + 1900, "%z": (u) => {
      var d = u.tm_gmtoff, _ = d >= 0;
      return d = (d = Math.abs(d) / 60) / 60 * 100 + d % 60, (_ ? "+" : "-") + ("0000" + d).slice(-4);
    }, "%Z": (u) => u.tm_zone, "%%": () => "%" };
    for (var c in s = s.replace(/%%/g, "\0\0"), R) s.includes(c) && (s = s.replace(new RegExp(c, "g"), R[c](o)));
    var B = gt(s = s.replace(/\0\0/g, "%"));
    return B.length > e ? 0 : (wt(B, r), B.length - 1);
  }, bt = (r, e, t, n, a) => _t(r, e, t, n);
  pe(), Sr = i.BindingError = class extends Error {
    constructor(r) {
      super(r), this.name = "BindingError";
    }
  }, Wr = i.InternalError = class extends Error {
    constructor(r) {
      super(r), this.name = "InternalError";
    }
  }, ge(), be(), kr = i.UnboundTypeError = He(Error, "UnboundTypeError");
  var At = { a: de, m: he, k: ve, i: ye, j: Ae, h: Ce, b: ze, d: Be, c: qe, g: Ne, e: tt, l: nt, r: it, f: ot, s: ut, n: st, u: Ur, v: lt, t: ft, p: pt, q: mt, o: bt }, w = ce(), Lr = (r) => (Lr = w.z)(r);
  i.__embind_initialize_bindings = () => (i.__embind_initialize_bindings = w.A)();
  var er, cr = i._malloc = (r) => (cr = i._malloc = w.B)(r), M = i._free = (r) => (M = i._free = w.C)(r), Gr = (r) => (Gr = w.D)(r);
  function Xr() {
    function r() {
      er || (er = !0, i.calledRun = !0, wr || (re(), dr(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), ee()));
    }
    O > 0 || (Qr(), O > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        i.setStatus("");
      }, 1), r();
    }, 1)) : r()));
  }
  if (i.dynCall_viijii = (r, e, t, n, a, o, s) => (i.dynCall_viijii = w.E)(r, e, t, n, a, o, s), i.dynCall_iiiiij = (r, e, t, n, a, o, s) => (i.dynCall_iiiiij = w.F)(r, e, t, n, a, o, s), i.dynCall_iiiiijj = (r, e, t, n, a, o, s, l, c) => (i.dynCall_iiiiijj = w.G)(r, e, t, n, a, o, s, l, c), i.dynCall_iiiiiijj = (r, e, t, n, a, o, s, l, c, f) => (i.dynCall_iiiiiijj = w.H)(r, e, t, n, a, o, s, l, c, f), Y = function r() {
    er || Xr(), er || (Y = r);
  }, i.preInit) for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); i.preInit.length > 0; ) i.preInit.pop()();
  return Xr(), fr.ready;
}, Nr.exports = Jr;
const Et = Ct(Zr.exports), Pt = Object.freeze(Object.defineProperty({ __proto__: null, default: Et }, Symbol.toStringTag, { value: "Module" }));
export {
  Pt as l
};
//# sourceMappingURL=lclayout-D3dPufMK.js.map
