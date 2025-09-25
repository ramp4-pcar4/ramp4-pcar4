import { v as Et, eQ as Me } from "./main-BpIyUAdL.js";
var Pr, oe, Ar, Wr = { exports: {} };
Pr = Wr, oe = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, typeof __filename < "u" && (oe = oe || __filename), Ar = function(ae) {
  var Ve, He, i = (ae = ae || {}) !== void 0 ? ae : {};
  i.ready = new Promise(function(e, r) {
    Ve = e, He = r;
  });
  var O, L = {};
  for (O in i) i.hasOwnProperty(O) && (L[O] = i[O]);
  var ue = !1, x = !1, we = !1, ze = !1;
  ue = typeof window == "object", x = typeof importScripts == "function", we = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", ze = !ue && !we && !x;
  var se, X, Te, _e, w = "";
  function Er(e) {
    return i.locateFile ? i.locateFile(e, w) : w + e;
  }
  we ? (w = x ? require("path").dirname(w) + "/" : __dirname + "/", se = function(e, r) {
    return Te || (Te = require("fs")), _e || (_e = require("path")), e = _e.normalize(e), Te.readFileSync(e, r ? null : "utf8");
  }, X = function(e) {
    var r = se(e, !0);
    return r.buffer || (r = new Uint8Array(r)), Pe(r.buffer), r;
  }, process.argv.length > 1 && process.argv[1].replace(/\\/g, "/"), process.argv.slice(2), process.on("uncaughtException", function(e) {
    if (!(e instanceof At)) throw e;
  }), process.on("unhandledRejection", H), i.inspect = function() {
    return "[Emscripten Module object]";
  }) : ze ? (typeof read < "u" && (se = function(e) {
    return read(e);
  }), X = function(e) {
    var r;
    return typeof readbuffer == "function" ? new Uint8Array(readbuffer(e)) : (Pe(typeof (r = read(e, "binary")) == "object"), r);
  }, typeof scriptArgs < "u" && scriptArgs, typeof print < "u" && (typeof console > "u" && (console = {}), console.log = print, console.warn = console.error = typeof printErr < "u" ? printErr : print)) : (ue || x) && (x ? w = self.location.href : document.currentScript && (w = document.currentScript.src), oe && (w = oe), w = w.indexOf("blob:") !== 0 ? w.substr(0, w.lastIndexOf("/") + 1) : "", se = function(e) {
    var r = new XMLHttpRequest();
    return r.open("GET", e, !1), r.send(null), r.responseText;
  }, x && (X = function(e) {
    var r = new XMLHttpRequest();
    return r.open("GET", e, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
  }));
  var J, Q, Sr = i.print || console.log.bind(console), M = i.printErr || console.warn.bind(console);
  for (O in L) L.hasOwnProperty(O) && (i[O] = L[O]);
  L = null, i.arguments && i.arguments, i.thisProgram && i.thisProgram, i.quit && i.quit, i.wasmBinary && (J = i.wasmBinary), i.noExitRuntime && i.noExitRuntime, typeof WebAssembly != "object" && H("no native wasm support detected");
  var Or = new WebAssembly.Table({ initial: 157, maximum: 157, element: "anyfunc" }), qe = !1;
  function Pe(e, r) {
    e || H("Assertion failed: " + r);
  }
  var Be = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
  function Ne(e, r, n) {
    for (var t = r + n, o = r; e[o] && !(o >= t); ) ++o;
    if (o - r > 16 && e.subarray && Be) return Be.decode(e.subarray(r, o));
    for (var a = ""; r < o; ) {
      var s = e[r++];
      if (128 & s) {
        var u = 63 & e[r++];
        if ((224 & s) != 192) {
          var c = 63 & e[r++];
          if ((s = (240 & s) == 224 ? (15 & s) << 12 | u << 6 | c : (7 & s) << 18 | u << 12 | c << 6 | 63 & e[r++]) < 65536) a += String.fromCharCode(s);
          else {
            var l = s - 65536;
            a += String.fromCharCode(55296 | l >> 10, 56320 | 1023 & l);
          }
        } else a += String.fromCharCode((31 & s) << 6 | u);
      } else a += String.fromCharCode(s);
    }
    return a;
  }
  function Ge(e, r) {
    return e ? Ne($, e, r) : "";
  }
  function jr(e, r, n, t) {
    if (!(t > 0)) return 0;
    for (var o = n, a = n + t - 1, s = 0; s < e.length; ++s) {
      var u = e.charCodeAt(s);
      if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & e.charCodeAt(++s)), u <= 127) {
        if (n >= a) break;
        r[n++] = u;
      } else if (u <= 2047) {
        if (n + 1 >= a) break;
        r[n++] = 192 | u >> 6, r[n++] = 128 | 63 & u;
      } else if (u <= 65535) {
        if (n + 2 >= a) break;
        r[n++] = 224 | u >> 12, r[n++] = 128 | u >> 6 & 63, r[n++] = 128 | 63 & u;
      } else {
        if (n + 3 >= a) break;
        r[n++] = 240 | u >> 18, r[n++] = 128 | u >> 12 & 63, r[n++] = 128 | u >> 6 & 63, r[n++] = 128 | 63 & u;
      }
    }
    return r[n] = 0, n - o;
  }
  function kr(e, r, n) {
    return jr(e, $, r, n);
  }
  function Fr(e) {
    for (var r = 0, n = 0; n < e.length; ++n) {
      var t = e.charCodeAt(n);
      t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & e.charCodeAt(++n)), t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
    }
    return r;
  }
  var Le = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
  function Rr(e, r) {
    for (var n = e, t = n >> 1, o = t + r / 2; !(t >= o) && Y[t]; ) ++t;
    if ((n = t << 1) - e > 32 && Le) return Le.decode($.subarray(e, n));
    for (var a = 0, s = ""; ; ) {
      var u = D[e + 2 * a >> 1];
      if (u == 0 || a == r / 2) return s;
      ++a, s += String.fromCharCode(u);
    }
  }
  function xr(e, r, n) {
    if (n === void 0 && (n = 2147483647), n < 2) return 0;
    for (var t = r, o = (n -= 2) < 2 * e.length ? n / 2 : e.length, a = 0; a < o; ++a) {
      var s = e.charCodeAt(a);
      D[r >> 1] = s, r += 2;
    }
    return D[r >> 1] = 0, r - t;
  }
  function Dr(e) {
    return 2 * e.length;
  }
  function Ir(e, r) {
    for (var n = 0, t = ""; !(n >= r / 4); ) {
      var o = g[e + 4 * n >> 2];
      if (o == 0) break;
      if (++n, o >= 65536) {
        var a = o - 65536;
        t += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a);
      } else t += String.fromCharCode(o);
    }
    return t;
  }
  function Ur(e, r, n) {
    if (n === void 0 && (n = 2147483647), n < 4) return 0;
    for (var t = r, o = t + n - 4, a = 0; a < e.length; ++a) {
      var s = e.charCodeAt(a);
      if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & e.charCodeAt(++a)), g[r >> 2] = s, (r += 4) + 4 > o) break;
    }
    return g[r >> 2] = 0, r - t;
  }
  function Mr(e) {
    for (var r = 0, n = 0; n < e.length; ++n) {
      var t = e.charCodeAt(n);
      t >= 55296 && t <= 57343 && ++n, r += 4;
    }
    return r;
  }
  var V, ce, $, D, Y, g, _, Xe, Je, Qe = 65536;
  function Vr(e, r) {
    return e % r > 0 && (e += r - e % r), e;
  }
  function Ye(e) {
    V = e, i.HEAP8 = ce = new Int8Array(e), i.HEAP16 = D = new Int16Array(e), i.HEAP32 = g = new Int32Array(e), i.HEAPU8 = $ = new Uint8Array(e), i.HEAPU16 = Y = new Uint16Array(e), i.HEAPU32 = _ = new Uint32Array(e), i.HEAPF32 = Xe = new Float32Array(e), i.HEAPF64 = Je = new Float64Array(e);
  }
  var Hr = 5565536, zr = 322496, Ze = i.INITIAL_MEMORY || 16777216;
  function le(e) {
    for (; e.length > 0; ) {
      var r = e.shift();
      if (typeof r != "function") {
        var n = r.func;
        typeof n == "number" ? r.arg === void 0 ? i.dynCall_v(n) : i.dynCall_vi(n, r.arg) : n(r.arg === void 0 ? null : r.arg);
      } else r(i);
    }
  }
  (Q = i.wasmMemory ? i.wasmMemory : new WebAssembly.Memory({ initial: Ze / Qe, maximum: 2147483648 / Qe })) && (V = Q.buffer), Ze = V.byteLength, Ye(V), g[zr >> 2] = Hr;
  var Ke = [], er = [], qr = [], rr = [];
  function Br() {
    if (i.preRun) for (typeof i.preRun == "function" && (i.preRun = [i.preRun]); i.preRun.length; ) Xr(i.preRun.shift());
    le(Ke);
  }
  function Nr() {
    le(er);
  }
  function Gr() {
    le(qr);
  }
  function Lr() {
    if (i.postRun) for (typeof i.postRun == "function" && (i.postRun = [i.postRun]); i.postRun.length; ) Jr(i.postRun.shift());
    le(rr);
  }
  function Xr(e) {
    Ke.unshift(e);
  }
  function Jr(e) {
    rr.unshift(e);
  }
  var Qr = Math.ceil, Yr = Math.floor, I = 0, Z = null;
  function Zr(e) {
    I++, i.monitorRunDependencies && i.monitorRunDependencies(I);
  }
  function Kr(e) {
    if (I--, i.monitorRunDependencies && i.monitorRunDependencies(I), I == 0 && Z) {
      var r = Z;
      Z = null, r();
    }
  }
  function H(e) {
    i.onAbort && i.onAbort(e), M(e += ""), qe = !0, e = "abort(" + e + "). Build with -s ASSERTIONS=1 for more info.";
    var r = new WebAssembly.RuntimeError(e);
    throw He(r), r;
  }
  function nr(e, r) {
    return String.prototype.startsWith ? e.startsWith(r) : e.indexOf(r) === 0;
  }
  i.preloadedImages = {}, i.preloadedAudios = {};
  var en = "data:application/octet-stream;base64,";
  function tr(e) {
    return nr(e, en);
  }
  var rn = "file://";
  function ir(e) {
    return nr(e, rn);
  }
  var P = "basis_transcoder.wasm";
  function or() {
    try {
      if (J) return new Uint8Array(J);
      if (X) return X(P);
      throw "both async and sync fetching of the wasm failed";
    } catch (e) {
      H(e);
    }
  }
  function nn() {
    return J || !ue && !x || typeof fetch != "function" || ir(P) ? new Promise(function(e, r) {
      e(or());
    }) : fetch(P, { credentials: "same-origin" }).then(function(e) {
      if (!e.ok) throw "failed to load wasm binary file at '" + P + "'";
      return e.arrayBuffer();
    }).catch(function() {
      return or();
    });
  }
  function tn() {
    var e = { a: Pt };
    function r(a, s) {
      var u = a.exports;
      i.asm = u, Kr();
    }
    function n(a) {
      r(a.instance);
    }
    function t(a) {
      return nn().then(function(s) {
        return WebAssembly.instantiate(s, e);
      }).then(a, function(s) {
        M("failed to asynchronously prepare wasm: " + s), H(s);
      });
    }
    function o() {
      if (J || typeof WebAssembly.instantiateStreaming != "function" || tr(P) || ir(P) || typeof fetch != "function") return t(n);
      fetch(P, { credentials: "same-origin" }).then(function(a) {
        return WebAssembly.instantiateStreaming(a, e).then(n, function(s) {
          return M("wasm streaming compile failed: " + s), M("falling back to ArrayBuffer instantiation"), t(n);
        });
      });
    }
    if (Zr(), i.instantiateWasm) try {
      return i.instantiateWasm(e, r);
    } catch (a) {
      return M("Module.instantiateWasm callback failed with error: " + a), !1;
    }
    return o(), {};
  }
  tr(P) || (P = Er(P)), er.push({ func: function() {
    br();
  } });
  var fe = {};
  function pe(e) {
    for (; e.length; ) {
      var r = e.pop();
      e.pop()(r);
    }
  }
  function K(e) {
    return this.fromWireType(_[e >> 2]);
  }
  var z = {}, U = {}, de = {}, on = 48, an = 57;
  function ar(e) {
    if (e === void 0) return "_unknown";
    var r = (e = e.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return r >= on && r <= an ? "_" + e : e;
  }
  function Ae(e, r) {
    return e = ar(e), function() {
      return r.apply(this, arguments);
    };
  }
  function We(e, r) {
    var n = Ae(r, function(t) {
      this.name = r, this.message = t;
      var o = new Error(t).stack;
      o !== void 0 && (this.stack = this.toString() + `
` + o.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return n.prototype = Object.create(e.prototype), n.prototype.constructor = n, n.prototype.toString = function() {
      return this.message === void 0 ? this.name : this.name + ": " + this.message;
    }, n;
  }
  var ur = void 0;
  function ye(e) {
    throw new ur(e);
  }
  function j(e, r, n) {
    function t(u) {
      var c = n(u);
      c.length !== e.length && ye("Mismatched type converter count");
      for (var l = 0; l < e.length; ++l) A(e[l], c[l]);
    }
    e.forEach(function(u) {
      de[u] = r;
    });
    var o = new Array(r.length), a = [], s = 0;
    r.forEach(function(u, c) {
      U.hasOwnProperty(u) ? o[c] = U[u] : (a.push(u), z.hasOwnProperty(u) || (z[u] = []), z[u].push(function() {
        o[c] = U[u], ++s === a.length && t(o);
      }));
    }), a.length === 0 && t(o);
  }
  function un(e) {
    var r = fe[e];
    delete fe[e];
    var n = r.rawConstructor, t = r.rawDestructor, o = r.fields;
    j([e], o.map(function(a) {
      return a.getterReturnType;
    }).concat(o.map(function(a) {
      return a.setterArgumentType;
    })), function(a) {
      var s = {};
      return o.forEach(function(u, c) {
        var l = u.fieldName, f = a[c], m = u.getter, d = u.getterContext, h = a[c + o.length], b = u.setter, y = u.setterContext;
        s[l] = { read: function(F) {
          return f.fromWireType(m(d, F));
        }, write: function(F, R) {
          var N = [];
          b(y, F, h.toWireType(N, R)), pe(N);
        } };
      }), [{ name: r.name, fromWireType: function(u) {
        var c = {};
        for (var l in s) c[l] = s[l].read(u);
        return t(u), c;
      }, toWireType: function(u, c) {
        for (var l in s) if (!(l in c)) throw new TypeError('Missing field:  "' + l + '"');
        var f = n();
        for (l in s) s[l].write(f, c[l]);
        return u !== null && u.push(t, f), f;
      }, argPackAdvance: 8, readValueFromPointer: K, destructorFunction: t }];
    });
  }
  function me(e) {
    switch (e) {
      case 1:
        return 0;
      case 2:
        return 1;
      case 4:
        return 2;
      case 8:
        return 3;
      default:
        throw new TypeError("Unknown type size: " + e);
    }
  }
  function sn() {
    for (var e = new Array(256), r = 0; r < 256; ++r) e[r] = String.fromCharCode(r);
    sr = e;
  }
  var sr = void 0;
  function v(e) {
    for (var r = "", n = e; $[n]; ) r += sr[$[n++]];
    return r;
  }
  var q = void 0;
  function p(e) {
    throw new q(e);
  }
  function A(e, r, n) {
    if (n = n || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    var t = r.name;
    if (e || p('type "' + t + '" must have a positive integer typeid pointer'), U.hasOwnProperty(e)) {
      if (n.ignoreDuplicateRegistrations) return;
      p("Cannot register type '" + t + "' twice");
    }
    if (U[e] = r, delete de[e], z.hasOwnProperty(e)) {
      var o = z[e];
      delete z[e], o.forEach(function(a) {
        a();
      });
    }
  }
  function cn(e, r, n, t, o) {
    var a = me(n);
    A(e, { name: r = v(r), fromWireType: function(s) {
      return !!s;
    }, toWireType: function(s, u) {
      return u ? t : o;
    }, argPackAdvance: 8, readValueFromPointer: function(s) {
      var u;
      if (n === 1) u = ce;
      else if (n === 2) u = D;
      else {
        if (n !== 4) throw new TypeError("Unknown boolean type size: " + r);
        u = g;
      }
      return this.fromWireType(u[s >> a]);
    }, destructorFunction: null });
  }
  function ln(e) {
    if (!(this instanceof k) || !(e instanceof k)) return !1;
    for (var r = this.$$.ptrType.registeredClass, n = this.$$.ptr, t = e.$$.ptrType.registeredClass, o = e.$$.ptr; r.baseClass; ) n = r.upcast(n), r = r.baseClass;
    for (; t.baseClass; ) o = t.upcast(o), t = t.baseClass;
    return r === t && n === o;
  }
  function fn(e) {
    return { count: e.count, deleteScheduled: e.deleteScheduled, preservePointerOnDelete: e.preservePointerOnDelete, ptr: e.ptr, ptrType: e.ptrType, smartPtr: e.smartPtr, smartPtrType: e.smartPtrType };
  }
  function Ee(e) {
    function r(n) {
      return n.$$.ptrType.registeredClass.name;
    }
    p(r(e) + " instance already deleted");
  }
  var Se = !1;
  function cr(e) {
  }
  function pn(e) {
    e.smartPtr ? e.smartPtrType.rawDestructor(e.smartPtr) : e.ptrType.registeredClass.rawDestructor(e.ptr);
  }
  function lr(e) {
    e.count.value -= 1, e.count.value === 0 && pn(e);
  }
  function ee(e) {
    return typeof FinalizationGroup > "u" ? (ee = function(r) {
      return r;
    }, e) : (Se = new FinalizationGroup(function(r) {
      for (var n = r.next(); !n.done; n = r.next()) {
        var t = n.value;
        t.ptr ? lr(t) : console.warn("object already deleted: " + t.ptr);
      }
    }), ee = function(r) {
      return Se.register(r, r.$$, r.$$), r;
    }, cr = function(r) {
      Se.unregister(r.$$);
    }, ee(e));
  }
  function dn() {
    if (this.$$.ptr || Ee(this), this.$$.preservePointerOnDelete) return this.$$.count.value += 1, this;
    var e = ee(Object.create(Object.getPrototypeOf(this), { $$: { value: fn(this.$$) } }));
    return e.$$.count.value += 1, e.$$.deleteScheduled = !1, e;
  }
  function yn() {
    this.$$.ptr || Ee(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && p("Object already scheduled for deletion"), cr(this), lr(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
  }
  function mn() {
    return !this.$$.ptr;
  }
  var re = void 0, ne = [];
  function Oe() {
    for (; ne.length; ) {
      var e = ne.pop();
      e.$$.deleteScheduled = !1, e.delete();
    }
  }
  function hn() {
    return this.$$.ptr || Ee(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && p("Object already scheduled for deletion"), ne.push(this), ne.length === 1 && re && re(Oe), this.$$.deleteScheduled = !0, this;
  }
  function vn() {
    k.prototype.isAliasOf = ln, k.prototype.clone = dn, k.prototype.delete = yn, k.prototype.isDeleted = mn, k.prototype.deleteLater = hn;
  }
  function k() {
  }
  var fr = {};
  function pr(e, r, n) {
    if (e[r].overloadTable === void 0) {
      var t = e[r];
      e[r] = function() {
        return e[r].overloadTable.hasOwnProperty(arguments.length) || p("Function '" + n + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + e[r].overloadTable + ")!"), e[r].overloadTable[arguments.length].apply(this, arguments);
      }, e[r].overloadTable = [], e[r].overloadTable[t.argCount] = t;
    }
  }
  function je(e, r, n) {
    i.hasOwnProperty(e) ? ((n === void 0 || i[e].overloadTable !== void 0 && i[e].overloadTable[n] !== void 0) && p("Cannot register public name '" + e + "' twice"), pr(i, e, e), i.hasOwnProperty(n) && p("Cannot register multiple overloads of a function with the same number of arguments (" + n + ")!"), i[e].overloadTable[n] = r) : (i[e] = r, n !== void 0 && (i[e].numArguments = n));
  }
  function gn(e, r, n, t, o, a, s, u) {
    this.name = e, this.constructor = r, this.instancePrototype = n, this.rawDestructor = t, this.baseClass = o, this.getActualType = a, this.upcast = s, this.downcast = u, this.pureVirtualFunctions = [];
  }
  function ke(e, r, n) {
    for (; r !== n; ) r.upcast || p("Expected null or instance of " + n.name + ", got an instance of " + r.name), e = r.upcast(e), r = r.baseClass;
    return e;
  }
  function $n(e, r) {
    if (r === null) return this.isReference && p("null is not a valid " + this.name), 0;
    r.$$ || p('Cannot pass "' + B(r) + '" as a ' + this.name), r.$$.ptr || p("Cannot pass deleted object as a pointer of type " + this.name);
    var n = r.$$.ptrType.registeredClass;
    return ke(r.$$.ptr, n, this.registeredClass);
  }
  function bn(e, r) {
    var n;
    if (r === null) return this.isReference && p("null is not a valid " + this.name), this.isSmartPointer ? (n = this.rawConstructor(), e !== null && e.push(this.rawDestructor, n), n) : 0;
    r.$$ || p('Cannot pass "' + B(r) + '" as a ' + this.name), r.$$.ptr || p("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && r.$$.ptrType.isConst && p("Cannot convert argument of type " + (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) + " to parameter type " + this.name);
    var t = r.$$.ptrType.registeredClass;
    if (n = ke(r.$$.ptr, t, this.registeredClass), this.isSmartPointer) switch (r.$$.smartPtr === void 0 && p("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
      case 0:
        r.$$.smartPtrType === this ? n = r.$$.smartPtr : p("Cannot convert argument of type " + (r.$$.smartPtrType ? r.$$.smartPtrType.name : r.$$.ptrType.name) + " to parameter type " + this.name);
        break;
      case 1:
        n = r.$$.smartPtr;
        break;
      case 2:
        if (r.$$.smartPtrType === this) n = r.$$.smartPtr;
        else {
          var o = r.clone();
          n = this.rawShare(n, E(function() {
            o.delete();
          })), e !== null && e.push(this.rawDestructor, n);
        }
        break;
      default:
        p("Unsupporting sharing policy");
    }
    return n;
  }
  function Cn(e, r) {
    if (r === null) return this.isReference && p("null is not a valid " + this.name), 0;
    r.$$ || p('Cannot pass "' + B(r) + '" as a ' + this.name), r.$$.ptr || p("Cannot pass deleted object as a pointer of type " + this.name), r.$$.ptrType.isConst && p("Cannot convert argument of type " + r.$$.ptrType.name + " to parameter type " + this.name);
    var n = r.$$.ptrType.registeredClass;
    return ke(r.$$.ptr, n, this.registeredClass);
  }
  function wn(e) {
    return this.rawGetPointee && (e = this.rawGetPointee(e)), e;
  }
  function Tn(e) {
    this.rawDestructor && this.rawDestructor(e);
  }
  function _n(e) {
    e !== null && e.delete();
  }
  function dr(e, r, n) {
    if (r === n) return e;
    if (n.baseClass === void 0) return null;
    var t = dr(e, r, n.baseClass);
    return t === null ? null : n.downcast(t);
  }
  function Pn() {
    return Object.keys(te).length;
  }
  function An() {
    var e = [];
    for (var r in te) te.hasOwnProperty(r) && e.push(te[r]);
    return e;
  }
  function Wn(e) {
    re = e, ne.length && re && re(Oe);
  }
  function En() {
    i.getInheritedInstanceCount = Pn, i.getLiveInheritedInstances = An, i.flushPendingDeletes = Oe, i.setDelayFunction = Wn;
  }
  var te = {};
  function Sn(e, r) {
    for (r === void 0 && p("ptr should not be undefined"); e.baseClass; ) r = e.upcast(r), e = e.baseClass;
    return r;
  }
  function On(e, r) {
    return r = Sn(e, r), te[r];
  }
  function he(e, r) {
    return r.ptrType && r.ptr || ye("makeClassHandle requires ptr and ptrType"), !!r.smartPtrType != !!r.smartPtr && ye("Both smartPtrType and smartPtr must be specified"), r.count = { value: 1 }, ee(Object.create(e, { $$: { value: r } }));
  }
  function jn(e) {
    var r = this.getPointee(e);
    if (!r) return this.destructor(e), null;
    var n = On(this.registeredClass, r);
    if (n !== void 0) {
      if (n.$$.count.value === 0) return n.$$.ptr = r, n.$$.smartPtr = e, n.clone();
      var t = n.clone();
      return this.destructor(e), t;
    }
    function o() {
      return this.isSmartPointer ? he(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: r, smartPtrType: this, smartPtr: e }) : he(this.registeredClass.instancePrototype, { ptrType: this, ptr: e });
    }
    var a, s = this.registeredClass.getActualType(r), u = fr[s];
    if (!u) return o.call(this);
    a = this.isConst ? u.constPointerType : u.pointerType;
    var c = dr(r, this.registeredClass, a.registeredClass);
    return c === null ? o.call(this) : this.isSmartPointer ? he(a.registeredClass.instancePrototype, { ptrType: a, ptr: c, smartPtrType: this, smartPtr: e }) : he(a.registeredClass.instancePrototype, { ptrType: a, ptr: c });
  }
  function kn() {
    W.prototype.getPointee = wn, W.prototype.destructor = Tn, W.prototype.argPackAdvance = 8, W.prototype.readValueFromPointer = K, W.prototype.deleteObject = _n, W.prototype.fromWireType = jn;
  }
  function W(e, r, n, t, o, a, s, u, c, l, f) {
    this.name = e, this.registeredClass = r, this.isReference = n, this.isConst = t, this.isSmartPointer = o, this.pointeeType = a, this.sharingPolicy = s, this.rawGetPointee = u, this.rawConstructor = c, this.rawShare = l, this.rawDestructor = f, o || r.baseClass !== void 0 ? this.toWireType = bn : t ? (this.toWireType = $n, this.destructorFunction = null) : (this.toWireType = Cn, this.destructorFunction = null);
  }
  function yr(e, r, n) {
    i.hasOwnProperty(e) || ye("Replacing nonexistant public symbol"), i[e].overloadTable !== void 0 && n !== void 0 ? i[e].overloadTable[n] = r : (i[e] = r, i[e].argCount = n);
  }
  function T(e, r) {
    function n(o) {
      var a = [r];
      return function() {
        a.length = arguments.length + 1;
        for (var s = 0; s < arguments.length; s++) a[s + 1] = arguments[s];
        return o.apply(null, a);
      };
    }
    e = v(e);
    var t = n(i["dynCall_" + e]);
    return typeof t != "function" && p("unknown function pointer with signature " + e + ": " + r), t;
  }
  var mr = void 0;
  function hr(e) {
    var r = Cr(e), n = v(r);
    return S(r), n;
  }
  function ve(e, r) {
    var n = [], t = {};
    function o(a) {
      t[a] || U[a] || (de[a] ? de[a].forEach(o) : (n.push(a), t[a] = !0));
    }
    throw r.forEach(o), new mr(e + ": " + n.map(hr).join([", "]));
  }
  function Fn(e, r, n, t, o, a, s, u, c, l, f, m, d) {
    f = v(f), a = T(o, a), u && (u = T(s, u)), l && (l = T(c, l)), d = T(m, d);
    var h = ar(f);
    je(h, function() {
      ve("Cannot construct " + f + " due to unbound types", [t]);
    }), j([e, r, n], t ? [t] : [], function(b) {
      var y, F;
      b = b[0], F = t ? (y = b.registeredClass).instancePrototype : k.prototype;
      var R = Ae(h, function() {
        if (Object.getPrototypeOf(this) !== N) throw new q("Use 'new' to construct " + f);
        if (G.constructor_body === void 0) throw new q(f + " has no accessible constructor");
        var _r = G.constructor_body[arguments.length];
        if (_r === void 0) throw new q("Tried to invoke ctor of " + f + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(G.constructor_body).toString() + ") parameters instead!");
        return _r.apply(this, arguments);
      }), N = Object.create(F, { constructor: { value: R } });
      R.prototype = N;
      var G = new gn(f, R, N, d, y, a, u, l), Wt = new W(f, G, !0, !1, !1), wr = new W(f + "*", G, !1, !1, !1), Tr = new W(f + " const*", G, !1, !0, !1);
      return fr[e] = { pointerType: wr, constPointerType: Tr }, yr(h, R), [Wt, wr, Tr];
    });
  }
  function Fe(e, r) {
    for (var n = [], t = 0; t < e; t++) n.push(g[(r >> 2) + t]);
    return n;
  }
  function Rn(e, r, n, t, o, a) {
    Pe(r > 0);
    var s = Fe(r, n);
    o = T(t, o);
    var u = [a], c = [];
    j([], [e], function(l) {
      var f = "constructor " + (l = l[0]).name;
      if (l.registeredClass.constructor_body === void 0 && (l.registeredClass.constructor_body = []), l.registeredClass.constructor_body[r - 1] !== void 0) throw new q("Cannot register multiple constructors with identical number of parameters (" + (r - 1) + ") for class '" + l.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
      return l.registeredClass.constructor_body[r - 1] = function() {
        ve("Cannot construct " + l.name + " due to unbound types", s);
      }, j([], s, function(m) {
        return l.registeredClass.constructor_body[r - 1] = function() {
          arguments.length !== r - 1 && p(f + " called with " + arguments.length + " arguments, expected " + (r - 1)), c.length = 0, u.length = r;
          for (var d = 1; d < r; ++d) u[d] = m[d].toWireType(c, arguments[d - 1]);
          var h = o.apply(null, u);
          return pe(c), m[0].fromWireType(h);
        }, [];
      }), [];
    });
  }
  function vr(e, r, n, t, o) {
    var a = r.length;
    a < 2 && p("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var s = r[1] !== null && n !== null, u = !1, c = 1; c < r.length; ++c) if (r[c] !== null && r[c].destructorFunction === void 0) {
      u = !0;
      break;
    }
    var l = r[0].name !== "void", f = a - 2, m = new Array(f), d = [], h = [];
    return function() {
      var b;
      arguments.length !== f && p("function " + e + " called with " + arguments.length + " arguments, expected " + f + " args!"), h.length = 0, d.length = s ? 2 : 1, d[0] = o, s && (b = r[1].toWireType(h, this), d[1] = b);
      for (var y = 0; y < f; ++y) m[y] = r[y + 2].toWireType(h, arguments[y]), d.push(m[y]);
      var F = t.apply(null, d);
      if (u) pe(h);
      else for (y = s ? 1 : 2; y < r.length; y++) {
        var R = y === 1 ? b : m[y - 2];
        r[y].destructorFunction !== null && r[y].destructorFunction(R);
      }
      if (l) return r[0].fromWireType(F);
    };
  }
  function xn(e, r, n, t, o, a, s, u) {
    var c = Fe(n, t);
    r = v(r), a = T(o, a), j([], [e], function(l) {
      var f = (l = l[0]).name + "." + r;
      function m() {
        ve("Cannot call " + f + " due to unbound types", c);
      }
      u && l.registeredClass.pureVirtualFunctions.push(r);
      var d = l.registeredClass.instancePrototype, h = d[r];
      return h === void 0 || h.overloadTable === void 0 && h.className !== l.name && h.argCount === n - 2 ? (m.argCount = n - 2, m.className = l.name, d[r] = m) : (pr(d, r, f), d[r].overloadTable[n - 2] = m), j([], c, function(b) {
        var y = vr(f, b, l, a, s);
        return d[r].overloadTable === void 0 ? (y.argCount = n - 2, d[r] = y) : d[r].overloadTable[n - 2] = y, [];
      }), [];
    });
  }
  function Dn(e, r, n) {
    e = v(e), j([], [r], function(t) {
      return t = t[0], i[e] = t.fromWireType(n), [];
    });
  }
  var Re = [], C = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
  function xe(e) {
    e > 4 && --C[e].refcount == 0 && (C[e] = void 0, Re.push(e));
  }
  function In() {
    for (var e = 0, r = 5; r < C.length; ++r) C[r] !== void 0 && ++e;
    return e;
  }
  function Un() {
    for (var e = 5; e < C.length; ++e) if (C[e] !== void 0) return C[e];
    return null;
  }
  function Mn() {
    i.count_emval_handles = In, i.get_first_emval = Un;
  }
  function E(e) {
    switch (e) {
      case void 0:
        return 1;
      case null:
        return 2;
      case !0:
        return 3;
      case !1:
        return 4;
      default:
        var r = Re.length ? Re.pop() : C.length;
        return C[r] = { refcount: 1, value: e }, r;
    }
  }
  function Vn(e, r) {
    A(e, { name: r = v(r), fromWireType: function(n) {
      var t = C[n].value;
      return xe(n), t;
    }, toWireType: function(n, t) {
      return E(t);
    }, argPackAdvance: 8, readValueFromPointer: K, destructorFunction: null });
  }
  function Hn(e, r, n) {
    switch (r) {
      case 0:
        return function(t) {
          var o = n ? ce : $;
          return this.fromWireType(o[t]);
        };
      case 1:
        return function(t) {
          var o = n ? D : Y;
          return this.fromWireType(o[t >> 1]);
        };
      case 2:
        return function(t) {
          var o = n ? g : _;
          return this.fromWireType(o[t >> 2]);
        };
      default:
        throw new TypeError("Unknown integer type: " + e);
    }
  }
  function zn(e, r, n, t) {
    var o = me(n);
    function a() {
    }
    r = v(r), a.values = {}, A(e, { name: r, constructor: a, fromWireType: function(s) {
      return this.constructor.values[s];
    }, toWireType: function(s, u) {
      return u.value;
    }, argPackAdvance: 8, readValueFromPointer: Hn(r, o, t), destructorFunction: null }), je(r, a);
  }
  function ge(e, r) {
    var n = U[e];
    return n === void 0 && p(r + " has unknown type " + hr(e)), n;
  }
  function qn(e, r, n) {
    var t = ge(e, "enum");
    r = v(r);
    var o = t.constructor, a = Object.create(t.constructor.prototype, { value: { value: n }, constructor: { value: Ae(t.name + "_" + r, function() {
    }) } });
    o.values[n] = a, o[r] = a;
  }
  function B(e) {
    if (e === null) return "null";
    var r = typeof e;
    return r === "object" || r === "array" || r === "function" ? e.toString() : "" + e;
  }
  function Bn(e, r) {
    switch (r) {
      case 2:
        return function(n) {
          return this.fromWireType(Xe[n >> 2]);
        };
      case 3:
        return function(n) {
          return this.fromWireType(Je[n >> 3]);
        };
      default:
        throw new TypeError("Unknown float type: " + e);
    }
  }
  function Nn(e, r, n) {
    var t = me(n);
    A(e, { name: r = v(r), fromWireType: function(o) {
      return o;
    }, toWireType: function(o, a) {
      if (typeof a != "number" && typeof a != "boolean") throw new TypeError('Cannot convert "' + B(a) + '" to ' + this.name);
      return a;
    }, argPackAdvance: 8, readValueFromPointer: Bn(r, t), destructorFunction: null });
  }
  function Gn(e, r, n, t, o, a) {
    var s = Fe(r, n);
    e = v(e), o = T(t, o), je(e, function() {
      ve("Cannot call " + e + " due to unbound types", s);
    }, r - 1), j([], s, function(u) {
      var c = [u[0], null].concat(u.slice(1));
      return yr(e, vr(e, c, null, o, a), r - 1), [];
    });
  }
  function Ln(e, r, n) {
    switch (r) {
      case 0:
        return n ? function(t) {
          return ce[t];
        } : function(t) {
          return $[t];
        };
      case 1:
        return n ? function(t) {
          return D[t >> 1];
        } : function(t) {
          return Y[t >> 1];
        };
      case 2:
        return n ? function(t) {
          return g[t >> 2];
        } : function(t) {
          return _[t >> 2];
        };
      default:
        throw new TypeError("Unknown integer type: " + e);
    }
  }
  function Xn(e, r, n, t, o) {
    r = v(r), o === -1 && (o = 4294967295);
    var a = me(n), s = function(l) {
      return l;
    };
    if (t === 0) {
      var u = 32 - 8 * n;
      s = function(l) {
        return l << u >>> u;
      };
    }
    var c = r.indexOf("unsigned") != -1;
    A(e, { name: r, fromWireType: s, toWireType: function(l, f) {
      if (typeof f != "number" && typeof f != "boolean") throw new TypeError('Cannot convert "' + B(f) + '" to ' + this.name);
      if (f < t || f > o) throw new TypeError('Passing a number "' + B(f) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + t + ", " + o + "]!");
      return c ? f >>> 0 : 0 | f;
    }, argPackAdvance: 8, readValueFromPointer: Ln(r, a, t !== 0), destructorFunction: null });
  }
  function Jn(e, r, n) {
    var t = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][r];
    function o(a) {
      var s = _, u = s[a >>= 2], c = s[a + 1];
      return new t(V, c, u);
    }
    A(e, { name: n = v(n), fromWireType: o, argPackAdvance: 8, readValueFromPointer: o }, { ignoreDuplicateRegistrations: !0 });
  }
  function Qn(e, r) {
    var n = (r = v(r)) === "std::string";
    A(e, { name: r, fromWireType: function(t) {
      var o, a = _[t >> 2];
      if (n) for (var s = t + 4, u = 0; u <= a; ++u) {
        var c = t + 4 + u;
        if (u == a || $[c] == 0) {
          var l = Ge(s, c - s);
          o === void 0 ? o = l : (o += "\0", o += l), s = c + 1;
        }
      }
      else {
        var f = new Array(a);
        for (u = 0; u < a; ++u) f[u] = String.fromCharCode($[t + 4 + u]);
        o = f.join("");
      }
      return S(t), o;
    }, toWireType: function(t, o) {
      o instanceof ArrayBuffer && (o = new Uint8Array(o));
      var a = typeof o == "string";
      a || o instanceof Uint8Array || o instanceof Uint8ClampedArray || o instanceof Int8Array || p("Cannot pass non-string to std::string");
      var s = (n && a ? function() {
        return Fr(o);
      } : function() {
        return o.length;
      })(), u = Ie(4 + s + 1);
      if (_[u >> 2] = s, n && a) kr(o, u + 4, s + 1);
      else if (a) for (var c = 0; c < s; ++c) {
        var l = o.charCodeAt(c);
        l > 255 && (S(u), p("String has UTF-16 code units that do not fit in 8 bits")), $[u + 4 + c] = l;
      }
      else for (c = 0; c < s; ++c) $[u + 4 + c] = o[c];
      return t !== null && t.push(S, u), u;
    }, argPackAdvance: 8, readValueFromPointer: K, destructorFunction: function(t) {
      S(t);
    } });
  }
  function Yn(e, r, n) {
    var t, o, a, s, u;
    n = v(n), r === 2 ? (t = Rr, o = xr, s = Dr, a = function() {
      return Y;
    }, u = 1) : r === 4 && (t = Ir, o = Ur, s = Mr, a = function() {
      return _;
    }, u = 2), A(e, { name: n, fromWireType: function(c) {
      for (var l, f = _[c >> 2], m = a(), d = c + 4, h = 0; h <= f; ++h) {
        var b = c + 4 + h * r;
        if (h == f || m[b >> u] == 0) {
          var y = t(d, b - d);
          l === void 0 ? l = y : (l += "\0", l += y), d = b + r;
        }
      }
      return S(c), l;
    }, toWireType: function(c, l) {
      typeof l != "string" && p("Cannot pass non-string to C++ string type " + n);
      var f = s(l), m = Ie(4 + f + r);
      return _[m >> 2] = f >> u, o(l, m + 4, f + r), c !== null && c.push(S, m), m;
    }, argPackAdvance: 8, readValueFromPointer: K, destructorFunction: function(c) {
      S(c);
    } });
  }
  function Zn(e, r, n, t, o, a) {
    fe[e] = { name: v(r), rawConstructor: T(n, t), rawDestructor: T(o, a), fields: [] };
  }
  function Kn(e, r, n, t, o, a, s, u, c, l) {
    fe[e].fields.push({ fieldName: v(r), getterReturnType: n, getter: T(t, o), getterContext: a, setterArgumentType: s, setter: T(u, c), setterContext: l });
  }
  function et(e, r) {
    A(e, { isVoid: !0, name: r = v(r), argPackAdvance: 0, fromWireType: function() {
    }, toWireType: function(n, t) {
    } });
  }
  function ie(e) {
    return e || p("Cannot use deleted val. handle = " + e), C[e].value;
  }
  function rt(e, r, n) {
    e = ie(e), r = ge(r, "emval::as");
    var t = [], o = E(t);
    return g[n >> 2] = o, r.toWireType(t, e);
  }
  var nt = {};
  function $e(e) {
    var r = nt[e];
    return r === void 0 ? v(e) : r;
  }
  var De = [];
  function tt(e, r, n, t) {
    (e = De[e])(r = ie(r), n = $e(n), null, t);
  }
  function gr() {
    if (typeof globalThis == "object") return globalThis;
    function e(r) {
      r.$$$embind_global$$$ = r;
      var n = typeof $$$embind_global$$$ == "object" && r.$$$embind_global$$$ === r;
      return n || delete r.$$$embind_global$$$, n;
    }
    if (typeof $$$embind_global$$$ == "object" || (typeof Me == "object" && e(Me) ? $$$embind_global$$$ = Me : typeof self == "object" && e(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }
  function it(e) {
    return e === 0 ? E(gr()) : (e = $e(e), E(gr()[e]));
  }
  function ot(e) {
    var r = De.length;
    return De.push(e), r;
  }
  function at(e, r) {
    for (var n = new Array(e), t = 0; t < e; ++t) n[t] = ge(g[(r >> 2) + t], "parameter " + t);
    return n;
  }
  function ut(e, r) {
    var n = at(e, r), t = n[0], o = new Array(e - 1);
    return ot(function(a, s, u, c) {
      for (var l = 0, f = 0; f < e - 1; ++f) o[f] = n[f + 1].readValueFromPointer(c + l), l += n[f + 1].argPackAdvance;
      var m = a[s].apply(a, o);
      for (f = 0; f < e - 1; ++f) n[f + 1].deleteObject && n[f + 1].deleteObject(o[f]);
      if (!t.isVoid) return t.toWireType(u, m);
    });
  }
  function st(e) {
    return e = $e(e), E(i[e]);
  }
  function ct(e, r) {
    return E((e = ie(e))[r = ie(r)]);
  }
  function lt(e) {
    e > 4 && (C[e].refcount += 1);
  }
  function ft(e) {
    var r = new Array(e + 1);
    return function(n, t, o) {
      r[0] = n;
      for (var a = 0; a < e; ++a) {
        var s = ge(g[(t >> 2) + a], "parameter " + a);
        r[a + 1] = s.readValueFromPointer(o), o += s.argPackAdvance;
      }
      return E(new (n.bind.apply(n, r))());
    };
  }
  var $r = {};
  function pt(e, r, n, t) {
    e = ie(e);
    var o = $r[r];
    return o || (o = ft(r), $r[r] = o), o(e, n, t);
  }
  function dt(e) {
    return E($e(e));
  }
  function yt(e) {
    pe(C[e].value), xe(e);
  }
  function mt() {
    H();
  }
  function ht(e, r, n) {
    $.copyWithin(e, r, r + n);
  }
  function vt() {
    return $.length;
  }
  function gt(e) {
    try {
      return Q.grow(e - V.byteLength + 65535 >>> 16), Ye(Q.buffer), 1;
    } catch {
    }
  }
  function $t(e) {
    e >>>= 0;
    var r = vt(), n = 65536, t = 2147483648;
    if (e > t) return !1;
    for (var o = 16777216, a = 1; a <= 4; a *= 2) {
      var s = r * (1 + 0.2 / a);
      if (s = Math.min(s, e + 100663296), gt(Math.min(t, Vr(Math.max(o, e, s), n)))) return !0;
    }
    return !1;
  }
  var be = { mappings: {}, buffers: [null, [], []], printChar: function(e, r) {
    var n = be.buffers[e];
    r === 0 || r === 10 ? ((e === 1 ? Sr : M)(Ne(n, 0)), n.length = 0) : n.push(r);
  }, varargs: void 0, get: function() {
    return be.varargs += 4, g[be.varargs - 4 >> 2];
  }, getStr: function(e) {
    return Ge(e);
  }, get64: function(e, r) {
    return e;
  } };
  function bt(e) {
    return 0;
  }
  function Ct(e, r, n, t, o) {
  }
  function wt(e, r, n, t) {
    for (var o = 0, a = 0; a < n; a++) {
      for (var s = g[r + 8 * a >> 2], u = g[r + (8 * a + 4) >> 2], c = 0; c < u; c++) be.printChar(e, $[s + c]);
      o += u;
    }
    return g[t >> 2] = o, 0;
  }
  function Tt(e) {
    return (e = +e) >= 0 ? +Yr(e + 0.5) : +Qr(e - 0.5);
  }
  function _t(e) {
  }
  ur = i.InternalError = We(Error, "InternalError"), sn(), q = i.BindingError = We(Error, "BindingError"), vn(), kn(), En(), mr = i.UnboundTypeError = We(Error, "UnboundTypeError"), Mn();
  var Pt = { u: un, J: cn, y: Fn, x: Rn, d: xn, k: Dn, I: Vn, n: zn, a: qn, B: Nn, i: Gn, j: Xn, h: Jn, C: Qn, w: Yn, v: Zn, c: Kn, K: et, m: rt, s: tt, b: xe, z: it, t: ut, r: st, e: ct, g: lt, q: pt, f: dt, l: yt, p: mt, F: ht, G: $t, H: bt, D: Ct, A: wt, memory: Q, o: Tt, E: _t, table: Or };
  tn();
  var Ce, br = i.___wasm_call_ctors = function() {
    return (br = i.___wasm_call_ctors = i.asm.L).apply(null, arguments);
  }, Ie = i._malloc = function() {
    return (Ie = i._malloc = i.asm.M).apply(null, arguments);
  }, S = i._free = function() {
    return (S = i._free = i.asm.N).apply(null, arguments);
  }, Cr = i.___getTypeName = function() {
    return (Cr = i.___getTypeName = i.asm.O).apply(null, arguments);
  };
  function At(e) {
    this.name = "ExitStatus", this.message = "Program terminated with exit(" + e + ")", this.status = e;
  }
  function Ue(e) {
    function r() {
      Ce || (Ce = !0, i.calledRun = !0, qe || (Nr(), Gr(), Ve(i), i.onRuntimeInitialized && i.onRuntimeInitialized(), Lr()));
    }
    I > 0 || (Br(), I > 0 || (i.setStatus ? (i.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        i.setStatus("");
      }, 1), r();
    }, 1)) : r()));
  }
  if (i.___embind_register_native_and_builtin_types = function() {
    return (i.___embind_register_native_and_builtin_types = i.asm.P).apply(null, arguments);
  }, i.dynCall_viii = function() {
    return (i.dynCall_viii = i.asm.Q).apply(null, arguments);
  }, i.dynCall_vi = function() {
    return (i.dynCall_vi = i.asm.R).apply(null, arguments);
  }, i.dynCall_v = function() {
    return (i.dynCall_v = i.asm.S).apply(null, arguments);
  }, i.dynCall_i = function() {
    return (i.dynCall_i = i.asm.T).apply(null, arguments);
  }, i.dynCall_iii = function() {
    return (i.dynCall_iii = i.asm.U).apply(null, arguments);
  }, i.dynCall_ii = function() {
    return (i.dynCall_ii = i.asm.V).apply(null, arguments);
  }, i.dynCall_vii = function() {
    return (i.dynCall_vii = i.asm.W).apply(null, arguments);
  }, i.dynCall_iiii = function() {
    return (i.dynCall_iiii = i.asm.X).apply(null, arguments);
  }, i.dynCall_iiiii = function() {
    return (i.dynCall_iiiii = i.asm.Y).apply(null, arguments);
  }, i.dynCall_iiiiii = function() {
    return (i.dynCall_iiiiii = i.asm.Z).apply(null, arguments);
  }, i.dynCall_iiiiiiii = function() {
    return (i.dynCall_iiiiiiii = i.asm._).apply(null, arguments);
  }, i.dynCall_iiiiiiiii = function() {
    return (i.dynCall_iiiiiiiii = i.asm.$).apply(null, arguments);
  }, i.dynCall_viiii = function() {
    return (i.dynCall_viiii = i.asm.aa).apply(null, arguments);
  }, i.dynCall_iiiiiii = function() {
    return (i.dynCall_iiiiiii = i.asm.ba).apply(null, arguments);
  }, i.dynCall_iiiiiiiiiiiiiiiiiiii = function() {
    return (i.dynCall_iiiiiiiiiiiiiiiiiiii = i.asm.ca).apply(null, arguments);
  }, i.dynCall_iiiiiiiiiiiiiiiiiiiii = function() {
    return (i.dynCall_iiiiiiiiiiiiiiiiiiiii = i.asm.da).apply(null, arguments);
  }, i.dynCall_iiiiiiiiiiiiiiiiiii = function() {
    return (i.dynCall_iiiiiiiiiiiiiiiiiii = i.asm.ea).apply(null, arguments);
  }, i.dynCall_viiiii = function() {
    return (i.dynCall_viiiii = i.asm.fa).apply(null, arguments);
  }, i.dynCall_iiiiiiiiii = function() {
    return (i.dynCall_iiiiiiiiii = i.asm.ga).apply(null, arguments);
  }, i.dynCall_iiiiiiiiiii = function() {
    return (i.dynCall_iiiiiiiiiii = i.asm.ha).apply(null, arguments);
  }, i.dynCall_jiji = function() {
    return (i.dynCall_jiji = i.asm.ia).apply(null, arguments);
  }, i.dynCall_viiiiii = function() {
    return (i.dynCall_viiiiii = i.asm.ja).apply(null, arguments);
  }, Z = function e() {
    Ce || Ue(), Ce || (Z = e);
  }, i.run = Ue, i.preInit) for (typeof i.preInit == "function" && (i.preInit = [i.preInit]); i.preInit.length > 0; ) i.preInit.pop()();
  return Ue(), ae.ready;
}, Pr.exports = Ar;
const St = Et(Wr.exports), jt = Object.freeze(Object.defineProperty({ __proto__: null, default: St }, Symbol.toStringTag, { value: "Module" }));
export {
  jt as b
};
//# sourceMappingURL=basis_transcoder-L6-87oxm.js.map
