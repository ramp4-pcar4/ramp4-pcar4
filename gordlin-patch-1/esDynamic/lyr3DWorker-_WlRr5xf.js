import { v as Qn, eQ as zr } from "./main-BEi6lHs4.js";
var De, Nr, Pe, Se = { exports: {} };
De = Se, Nr = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0, Pe = function(Br = {}) {
  var Lr, cr, l = Br;
  l.ready = new Promise((r, e) => {
    Lr = r, cr = e;
  });
  var br, Ur, Hr = Object.assign({}, l), Ir = "./this.program", Vr = (r, e) => {
    throw e;
  }, $e = !0, V = "";
  function Te(r) {
    return l.locateFile ? l.locateFile(r, V) : V + r;
  }
  typeof document < "u" && document.currentScript && (V = document.currentScript.src), Nr && (V = Nr), V = V.indexOf("blob:") !== 0 ? V.substr(0, V.replace(/[?#].*/, "").lastIndexOf("/") + 1) : "", br = (r) => {
    var e = new XMLHttpRequest();
    return e.open("GET", r, !1), e.send(null), e.responseText;
  }, Ur = (r, e, t) => {
    var n = new XMLHttpRequest();
    n.open("GET", r, !0), n.responseType = "arraybuffer", n.onload = () => {
      n.status == 200 || n.status == 0 && n.response ? e(n.response) : t();
    }, n.onerror = t, n.send(null);
  };
  var or, fr, Yr = l.print || console.log.bind(console), Y = l.printErr || console.error.bind(console);
  Object.assign(l, Hr), Hr = null, l.arguments && l.arguments, l.thisProgram && (Ir = l.thisProgram), l.quit && (Vr = l.quit), l.wasmBinary && (or = l.wasmBinary), typeof WebAssembly != "object" && Q("no native wasm support detected");
  var P, C, q, mr, y, w, qr, Xr, kr = !1;
  function Gr(r, e) {
    r || Q(e);
  }
  function Jr() {
    var r = fr.buffer;
    l.HEAP8 = P = new Int8Array(r), l.HEAP16 = q = new Int16Array(r), l.HEAPU8 = C = new Uint8Array(r), l.HEAPU16 = mr = new Uint16Array(r), l.HEAP32 = y = new Int32Array(r), l.HEAPU32 = w = new Uint32Array(r), l.HEAPF32 = qr = new Float32Array(r), l.HEAPF64 = Xr = new Float64Array(r);
  }
  var Zr = [], Kr = [], Qr = [];
  function Ce() {
    if (l.preRun) for (typeof l.preRun == "function" && (l.preRun = [l.preRun]); l.preRun.length; ) xe(l.preRun.shift());
    Fr(Zr);
  }
  function Me() {
    l.noFSInit || o.init.initialized || o.init(), o.ignorePermissions = !1, Fr(Kr);
  }
  function je() {
    if (l.postRun) for (typeof l.postRun == "function" && (l.postRun = [l.postRun]); l.postRun.length; ) Re(l.postRun.shift());
    Fr(Qr);
  }
  function xe(r) {
    Zr.unshift(r);
  }
  function Oe(r) {
    Kr.unshift(r);
  }
  function Re(r) {
    Qr.unshift(r);
  }
  var G = 0, ar = null;
  function eo(r) {
    return r;
  }
  function hr(r) {
    G++, l.monitorRunDependencies && l.monitorRunDependencies(G);
  }
  function ir(r) {
    if (G--, l.monitorRunDependencies && l.monitorRunDependencies(G), G == 0 && ar) {
      var e = ar;
      ar = null, e();
    }
  }
  function Q(r) {
    l.onAbort && l.onAbort(r), Y(r = "Aborted(" + r + ")"), kr = !0, r += ". Build with -sASSERTIONS for more info.";
    var e = new WebAssembly.RuntimeError(r);
    throw cr(e), e;
  }
  var sr, E, S, We = "data:application/octet-stream;base64,", re = (r) => r.startsWith(We);
  function ee(r) {
    if (r == sr && or) return new Uint8Array(or);
    throw "both async and sync fetching of the wasm failed";
  }
  function ze(r) {
    return !or && $e && typeof fetch == "function" ? fetch(r, { credentials: "same-origin" }).then((e) => {
      if (!e.ok) throw "failed to load wasm binary file at '" + r + "'";
      return e.arrayBuffer();
    }).catch(() => ee(r)) : Promise.resolve().then(() => ee(r));
  }
  function te(r, e, t) {
    return ze(r).then((n) => WebAssembly.instantiate(n, e)).then((n) => n).then(t, (n) => {
      Y(`failed to asynchronously prepare wasm: ${n}`), Q(n);
    });
  }
  function Ne(r, e, t, n) {
    return r || typeof WebAssembly.instantiateStreaming != "function" || re(e) || typeof fetch != "function" ? te(e, t, n) : fetch(e, { credentials: "same-origin" }).then((a) => WebAssembly.instantiateStreaming(a, t).then(n, function(i) {
      return Y(`wasm streaming compile failed: ${i}`), Y("falling back to ArrayBuffer instantiation"), te(e, t, n);
    }));
  }
  function Be() {
    var r = { a: Ln };
    function e(n, a) {
      return A = n.exports, fr = A._, Jr(), K = A.aa, Oe(A.$), ir(), A;
    }
    function t(n) {
      e(n.instance);
    }
    if (hr(), l.instantiateWasm) try {
      return l.instantiateWasm(r, e);
    } catch (n) {
      Y(`Module.instantiateWasm callback failed with error: ${n}`), cr(n);
    }
    return Ne(or, sr, r, t).catch(cr), {};
  }
  function Le(r) {
    this.name = "ExitStatus", this.message = `Program terminated with exit(${r})`, this.status = r;
  }
  re(sr = "lyr3DWorker.wasm") || (sr = Te(sr));
  var Fr = (r) => {
    for (; r.length > 0; ) r.shift()(l);
  }, Ue = l.noExitRuntime || !0;
  function He(r) {
    this.excPtr = r, this.ptr = r - 24, this.set_type = function(e) {
      w[this.ptr + 4 >> 2] = e;
    }, this.get_type = function() {
      return w[this.ptr + 4 >> 2];
    }, this.set_destructor = function(e) {
      w[this.ptr + 8 >> 2] = e;
    }, this.get_destructor = function() {
      return w[this.ptr + 8 >> 2];
    }, this.set_caught = function(e) {
      e = e ? 1 : 0, P[this.ptr + 12 >> 0] = e;
    }, this.get_caught = function() {
      return P[this.ptr + 12 >> 0] != 0;
    }, this.set_rethrown = function(e) {
      e = e ? 1 : 0, P[this.ptr + 13 >> 0] = e;
    }, this.get_rethrown = function() {
      return P[this.ptr + 13 >> 0] != 0;
    }, this.init = function(e, t) {
      this.set_adjusted_ptr(0), this.set_type(e), this.set_destructor(t);
    }, this.set_adjusted_ptr = function(e) {
      w[this.ptr + 16 >> 2] = e;
    }, this.get_adjusted_ptr = function() {
      return w[this.ptr + 16 >> 2];
    }, this.get_exception_ptr = function() {
      if (Fe(this.get_type())) return w[this.excPtr >> 2];
      var e = this.get_adjusted_ptr();
      return e !== 0 ? e : this.excPtr;
    };
  }
  var Ie = (r, e, t) => {
    throw new He(r).init(e, t), r;
  }, Ve = (r) => (y[be() >> 2] = r, r), b = { isAbs: (r) => r.charAt(0) === "/", splitPath: (r) => /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/.exec(r).slice(1), normalizeArray: (r, e) => {
    for (var t = 0, n = r.length - 1; n >= 0; n--) {
      var a = r[n];
      a === "." ? r.splice(n, 1) : a === ".." ? (r.splice(n, 1), t++) : t && (r.splice(n, 1), t--);
    }
    if (e) for (; t; t--) r.unshift("..");
    return r;
  }, normalize: (r) => {
    var e = b.isAbs(r), t = r.substr(-1) === "/";
    return (r = b.normalizeArray(r.split("/").filter((n) => !!n), !e).join("/")) || e || (r = "."), r && t && (r += "/"), (e ? "/" : "") + r;
  }, dirname: (r) => {
    var e = b.splitPath(r), t = e[0], n = e[1];
    return t || n ? (n && (n = n.substr(0, n.length - 1)), t + n) : ".";
  }, basename: (r) => {
    if (r === "/") return "/";
    var e = (r = (r = b.normalize(r)).replace(/\/$/, "")).lastIndexOf("/");
    return e === -1 ? r : r.substr(e + 1);
  }, join: function() {
    var r = Array.prototype.slice.call(arguments);
    return b.normalize(r.join("/"));
  }, join2: (r, e) => b.normalize(r + "/" + e) }, Ye = () => {
    if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") return (r) => crypto.getRandomValues(r);
    Q("initRandomDevice");
  }, ne = (r) => (ne = Ye())(r), L = { resolve: function() {
    for (var r = "", e = !1, t = arguments.length - 1; t >= -1 && !e; t--) {
      var n = t >= 0 ? arguments[t] : o.cwd();
      if (typeof n != "string") throw new TypeError("Arguments to path.resolve must be strings");
      if (!n) return "";
      r = n + "/" + r, e = b.isAbs(n);
    }
    return (e ? "/" : "") + (r = b.normalizeArray(r.split("/").filter((a) => !!a), !e).join("/")) || ".";
  }, relative: (r, e) => {
    function t(c) {
      for (var m = 0; m < c.length && c[m] === ""; m++) ;
      for (var h = c.length - 1; h >= 0 && c[h] === ""; h--) ;
      return m > h ? [] : c.slice(m, h - m + 1);
    }
    r = L.resolve(r).substr(1), e = L.resolve(e).substr(1);
    for (var n = t(r.split("/")), a = t(e.split("/")), i = Math.min(n.length, a.length), s = i, u = 0; u < i; u++) if (n[u] !== a[u]) {
      s = u;
      break;
    }
    var d = [];
    for (u = s; u < n.length; u++) d.push("..");
    return (d = d.concat(a.slice(s))).join("/");
  } }, oe = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0, rr = (r, e, t) => {
    for (var n = e + t, a = e; r[a] && !(a >= n); ) ++a;
    if (a - e > 16 && r.buffer && oe) return oe.decode(r.subarray(e, a));
    for (var i = ""; e < a; ) {
      var s = r[e++];
      if (128 & s) {
        var u = 63 & r[e++];
        if ((224 & s) != 192) {
          var d = 63 & r[e++];
          if ((s = (240 & s) == 224 ? (15 & s) << 12 | u << 6 | d : (7 & s) << 18 | u << 12 | d << 6 | 63 & r[e++]) < 65536) i += String.fromCharCode(s);
          else {
            var c = s - 65536;
            i += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c);
          }
        } else i += String.fromCharCode((31 & s) << 6 | u);
      } else i += String.fromCharCode(s);
    }
    return i;
  }, Ar = [], Dr = (r) => {
    for (var e = 0, t = 0; t < r.length; ++t) {
      var n = r.charCodeAt(t);
      n <= 127 ? e++ : n <= 2047 ? e += 2 : n >= 55296 && n <= 57343 ? (e += 4, ++t) : e += 3;
    }
    return e;
  }, Pr = (r, e, t, n) => {
    if (!(n > 0)) return 0;
    for (var a = t, i = t + n - 1, s = 0; s < r.length; ++s) {
      var u = r.charCodeAt(s);
      if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & r.charCodeAt(++s)), u <= 127) {
        if (t >= i) break;
        e[t++] = u;
      } else if (u <= 2047) {
        if (t + 1 >= i) break;
        e[t++] = 192 | u >> 6, e[t++] = 128 | 63 & u;
      } else if (u <= 65535) {
        if (t + 2 >= i) break;
        e[t++] = 224 | u >> 12, e[t++] = 128 | u >> 6 & 63, e[t++] = 128 | 63 & u;
      } else {
        if (t + 3 >= i) break;
        e[t++] = 240 | u >> 18, e[t++] = 128 | u >> 12 & 63, e[t++] = 128 | u >> 6 & 63, e[t++] = 128 | 63 & u;
      }
    }
    return e[t] = 0, t - a;
  };
  function Sr(r, e, t) {
    var n = Dr(r) + 1, a = new Array(n), i = Pr(r, a, 0, a.length);
    return e && (a.length = i), a;
  }
  var qe = () => {
    if (!Ar.length) {
      var r = null;
      if (typeof window < "u" && typeof window.prompt == "function" ? (r = window.prompt("Input: ")) !== null && (r += `
`) : typeof readline == "function" && (r = readline()) !== null && (r += `
`), !r) return null;
      Ar = Sr(r, !0);
    }
    return Ar.shift();
  }, J = { ttys: [], init() {
  }, shutdown() {
  }, register(r, e) {
    J.ttys[r] = { input: [], output: [], ops: e }, o.registerDevice(r, J.stream_ops);
  }, stream_ops: { open(r) {
    var e = J.ttys[r.node.rdev];
    if (!e) throw new o.ErrnoError(43);
    r.tty = e, r.seekable = !1;
  }, close(r) {
    r.tty.ops.fsync(r.tty);
  }, fsync(r) {
    r.tty.ops.fsync(r.tty);
  }, read(r, e, t, n, a) {
    if (!r.tty || !r.tty.ops.get_char) throw new o.ErrnoError(60);
    for (var i = 0, s = 0; s < n; s++) {
      var u;
      try {
        u = r.tty.ops.get_char(r.tty);
      } catch {
        throw new o.ErrnoError(29);
      }
      if (u === void 0 && i === 0) throw new o.ErrnoError(6);
      if (u == null) break;
      i++, e[t + s] = u;
    }
    return i && (r.node.timestamp = Date.now()), i;
  }, write(r, e, t, n, a) {
    if (!r.tty || !r.tty.ops.put_char) throw new o.ErrnoError(60);
    try {
      for (var i = 0; i < n; i++) r.tty.ops.put_char(r.tty, e[t + i]);
    } catch {
      throw new o.ErrnoError(29);
    }
    return n && (r.node.timestamp = Date.now()), i;
  } }, default_tty_ops: { get_char: (r) => qe(), put_char(r, e) {
    e === null || e === 10 ? (Yr(rr(r.output, 0)), r.output = []) : e != 0 && r.output.push(e);
  }, fsync(r) {
    r.output && r.output.length > 0 && (Yr(rr(r.output, 0)), r.output = []);
  }, ioctl_tcgets: (r) => ({ c_iflag: 25856, c_oflag: 5, c_cflag: 191, c_lflag: 35387, c_cc: [3, 28, 127, 21, 4, 0, 1, 0, 17, 19, 26, 0, 18, 15, 23, 22, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0] }), ioctl_tcsets: (r, e, t) => 0, ioctl_tiocgwinsz: (r) => [24, 80] }, default_tty1_ops: { put_char(r, e) {
    e === null || e === 10 ? (Y(rr(r.output, 0)), r.output = []) : e != 0 && r.output.push(e);
  }, fsync(r) {
    r.output && r.output.length > 0 && (Y(rr(r.output, 0)), r.output = []);
  } } }, ae = (r) => {
    Q();
  }, g = { ops_table: null, mount: (r) => g.createNode(null, "/", 16895, 0), createNode(r, e, t, n) {
    if (o.isBlkdev(t) || o.isFIFO(t)) throw new o.ErrnoError(63);
    g.ops_table || (g.ops_table = { dir: { node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr, lookup: g.node_ops.lookup, mknod: g.node_ops.mknod, rename: g.node_ops.rename, unlink: g.node_ops.unlink, rmdir: g.node_ops.rmdir, readdir: g.node_ops.readdir, symlink: g.node_ops.symlink }, stream: { llseek: g.stream_ops.llseek } }, file: { node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr }, stream: { llseek: g.stream_ops.llseek, read: g.stream_ops.read, write: g.stream_ops.write, allocate: g.stream_ops.allocate, mmap: g.stream_ops.mmap, msync: g.stream_ops.msync } }, link: { node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr, readlink: g.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: g.node_ops.getattr, setattr: g.node_ops.setattr }, stream: o.chrdev_stream_ops } });
    var a = o.createNode(r, e, t, n);
    return o.isDir(a.mode) ? (a.node_ops = g.ops_table.dir.node, a.stream_ops = g.ops_table.dir.stream, a.contents = {}) : o.isFile(a.mode) ? (a.node_ops = g.ops_table.file.node, a.stream_ops = g.ops_table.file.stream, a.usedBytes = 0, a.contents = null) : o.isLink(a.mode) ? (a.node_ops = g.ops_table.link.node, a.stream_ops = g.ops_table.link.stream) : o.isChrdev(a.mode) && (a.node_ops = g.ops_table.chrdev.node, a.stream_ops = g.ops_table.chrdev.stream), a.timestamp = Date.now(), r && (r.contents[e] = a, r.timestamp = a.timestamp), a;
  }, getFileDataAsTypedArray: (r) => r.contents ? r.contents.subarray ? r.contents.subarray(0, r.usedBytes) : new Uint8Array(r.contents) : new Uint8Array(0), expandFileStorage(r, e) {
    var t = r.contents ? r.contents.length : 0;
    if (!(t >= e)) {
      var n = 1048576;
      e = Math.max(e, t * (t < n ? 2 : 1.125) >>> 0), t != 0 && (e = Math.max(e, 256));
      var a = r.contents;
      r.contents = new Uint8Array(e), r.usedBytes > 0 && r.contents.set(a.subarray(0, r.usedBytes), 0);
    }
  }, resizeFileStorage(r, e) {
    if (r.usedBytes != e) if (e == 0) r.contents = null, r.usedBytes = 0;
    else {
      var t = r.contents;
      r.contents = new Uint8Array(e), t && r.contents.set(t.subarray(0, Math.min(e, r.usedBytes))), r.usedBytes = e;
    }
  }, node_ops: { getattr(r) {
    var e = {};
    return e.dev = o.isChrdev(r.mode) ? r.id : 1, e.ino = r.id, e.mode = r.mode, e.nlink = 1, e.uid = 0, e.gid = 0, e.rdev = r.rdev, o.isDir(r.mode) ? e.size = 4096 : o.isFile(r.mode) ? e.size = r.usedBytes : o.isLink(r.mode) ? e.size = r.link.length : e.size = 0, e.atime = new Date(r.timestamp), e.mtime = new Date(r.timestamp), e.ctime = new Date(r.timestamp), e.blksize = 4096, e.blocks = Math.ceil(e.size / e.blksize), e;
  }, setattr(r, e) {
    e.mode !== void 0 && (r.mode = e.mode), e.timestamp !== void 0 && (r.timestamp = e.timestamp), e.size !== void 0 && g.resizeFileStorage(r, e.size);
  }, lookup(r, e) {
    throw o.genericErrors[44];
  }, mknod: (r, e, t, n) => g.createNode(r, e, t, n), rename(r, e, t) {
    if (o.isDir(r.mode)) {
      var n;
      try {
        n = o.lookupNode(e, t);
      } catch {
      }
      if (n) for (var a in n.contents) throw new o.ErrnoError(55);
    }
    delete r.parent.contents[r.name], r.parent.timestamp = Date.now(), r.name = t, e.contents[t] = r, e.timestamp = r.parent.timestamp, r.parent = e;
  }, unlink(r, e) {
    delete r.contents[e], r.timestamp = Date.now();
  }, rmdir(r, e) {
    var t = o.lookupNode(r, e);
    for (var n in t.contents) throw new o.ErrnoError(55);
    delete r.contents[e], r.timestamp = Date.now();
  }, readdir(r) {
    var e = [".", ".."];
    for (var t in r.contents) r.contents.hasOwnProperty(t) && e.push(t);
    return e;
  }, symlink(r, e, t) {
    var n = g.createNode(r, e, 41471, 0);
    return n.link = t, n;
  }, readlink(r) {
    if (!o.isLink(r.mode)) throw new o.ErrnoError(28);
    return r.link;
  } }, stream_ops: { read(r, e, t, n, a) {
    var i = r.node.contents;
    if (a >= r.node.usedBytes) return 0;
    var s = Math.min(r.node.usedBytes - a, n);
    if (s > 8 && i.subarray) e.set(i.subarray(a, a + s), t);
    else for (var u = 0; u < s; u++) e[t + u] = i[a + u];
    return s;
  }, write(r, e, t, n, a, i) {
    if (e.buffer === P.buffer && (i = !1), !n) return 0;
    var s = r.node;
    if (s.timestamp = Date.now(), e.subarray && (!s.contents || s.contents.subarray)) {
      if (i) return s.contents = e.subarray(t, t + n), s.usedBytes = n, n;
      if (s.usedBytes === 0 && a === 0) return s.contents = e.slice(t, t + n), s.usedBytes = n, n;
      if (a + n <= s.usedBytes) return s.contents.set(e.subarray(t, t + n), a), n;
    }
    if (g.expandFileStorage(s, a + n), s.contents.subarray && e.subarray) s.contents.set(e.subarray(t, t + n), a);
    else for (var u = 0; u < n; u++) s.contents[a + u] = e[t + u];
    return s.usedBytes = Math.max(s.usedBytes, a + n), n;
  }, llseek(r, e, t) {
    var n = e;
    if (t === 1 ? n += r.position : t === 2 && o.isFile(r.node.mode) && (n += r.node.usedBytes), n < 0) throw new o.ErrnoError(28);
    return n;
  }, allocate(r, e, t) {
    g.expandFileStorage(r.node, e + t), r.node.usedBytes = Math.max(r.node.usedBytes, e + t);
  }, mmap(r, e, t, n, a) {
    if (!o.isFile(r.node.mode)) throw new o.ErrnoError(43);
    var i, s, u = r.node.contents;
    if (2 & a || u.buffer !== P.buffer) {
      if ((t > 0 || t + e < u.length) && (u = u.subarray ? u.subarray(t, t + e) : Array.prototype.slice.call(u, t, t + e)), s = !0, !(i = ae())) throw new o.ErrnoError(48);
      P.set(u, i);
    } else s = !1, i = u.byteOffset;
    return { ptr: i, allocated: s };
  }, msync: (r, e, t, n, a) => (g.stream_ops.write(r, e, 0, n, t, !1), 0) } }, Xe = (r, e, t, n) => {
    var a = `al ${r}`;
    Ur(r, (i) => {
      Gr(i, `Loading data file "${r}" failed (no arrayBuffer).`), e(new Uint8Array(i)), a && ir();
    }, (i) => {
      if (!t) throw `Loading data file "${r}" failed.`;
      t();
    }), a && hr();
  }, Ge = (r, e, t, n, a, i) => o.createDataFile(r, e, t, n, a, i), Je = l.preloadPlugins || [], Ze = (r, e, t, n) => {
    typeof Browser < "u" && Browser.init();
    var a = !1;
    return Je.forEach((i) => {
      a || i.canHandle(e) && (i.handle(r, e, t, n), a = !0);
    }), a;
  }, Ke = (r, e, t, n, a, i, s, u, d, c) => {
    var m = e ? L.resolve(b.join2(r, e)) : r;
    function h(p) {
      function _(k) {
        c && c(), u || Ge(r, e, k, n, a, d), i && i(), ir();
      }
      Ze(p, m, _, () => {
        s && s(), ir();
      }) || _(p);
    }
    hr(), typeof t == "string" ? Xe(t, (p) => h(p), s) : h(t);
  }, Qe = (r) => {
    var e = { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }[r];
    if (e === void 0) throw new Error(`Unknown file open mode: ${r}`);
    return e;
  }, $r = (r, e) => {
    var t = 0;
    return r && (t |= 365), e && (t |= 146), t;
  }, o = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath(r, e = {}) {
    if (!(r = L.resolve(r))) return { path: "", node: null };
    var t = { follow_mount: !0, recurse_count: 0 };
    if ((e = Object.assign(t, e)).recurse_count > 8) throw new o.ErrnoError(32);
    for (var n = r.split("/").filter((m) => !!m), a = o.root, i = "/", s = 0; s < n.length; s++) {
      var u = s === n.length - 1;
      if (u && e.parent) break;
      if (a = o.lookupNode(a, n[s]), i = b.join2(i, n[s]), o.isMountpoint(a) && (!u || u && e.follow_mount) && (a = a.mounted.root), !u || e.follow) for (var d = 0; o.isLink(a.mode); ) {
        var c = o.readlink(i);
        if (i = L.resolve(b.dirname(i), c), a = o.lookupPath(i, { recurse_count: e.recurse_count + 1 }).node, d++ > 40) throw new o.ErrnoError(32);
      }
    }
    return { path: i, node: a };
  }, getPath(r) {
    for (var e; ; ) {
      if (o.isRoot(r)) {
        var t = r.mount.mountpoint;
        return e ? t[t.length - 1] !== "/" ? `${t}/${e}` : t + e : t;
      }
      e = e ? `${r.name}/${e}` : r.name, r = r.parent;
    }
  }, hashName(r, e) {
    for (var t = 0, n = 0; n < e.length; n++) t = (t << 5) - t + e.charCodeAt(n) | 0;
    return (r + t >>> 0) % o.nameTable.length;
  }, hashAddNode(r) {
    var e = o.hashName(r.parent.id, r.name);
    r.name_next = o.nameTable[e], o.nameTable[e] = r;
  }, hashRemoveNode(r) {
    var e = o.hashName(r.parent.id, r.name);
    if (o.nameTable[e] === r) o.nameTable[e] = r.name_next;
    else for (var t = o.nameTable[e]; t; ) {
      if (t.name_next === r) {
        t.name_next = r.name_next;
        break;
      }
      t = t.name_next;
    }
  }, lookupNode(r, e) {
    var t = o.mayLookup(r);
    if (t) throw new o.ErrnoError(t, r);
    for (var n = o.hashName(r.id, e), a = o.nameTable[n]; a; a = a.name_next) {
      var i = a.name;
      if (a.parent.id === r.id && i === e) return a;
    }
    return o.lookup(r, e);
  }, createNode(r, e, t, n) {
    var a = new o.FSNode(r, e, t, n);
    return o.hashAddNode(a), a;
  }, destroyNode(r) {
    o.hashRemoveNode(r);
  }, isRoot: (r) => r === r.parent, isMountpoint: (r) => !!r.mounted, isFile: (r) => (61440 & r) == 32768, isDir: (r) => (61440 & r) == 16384, isLink: (r) => (61440 & r) == 40960, isChrdev: (r) => (61440 & r) == 8192, isBlkdev: (r) => (61440 & r) == 24576, isFIFO: (r) => (61440 & r) == 4096, isSocket: (r) => (49152 & r) == 49152, flagsToPermissionString(r) {
    var e = ["r", "w", "rw"][3 & r];
    return 512 & r && (e += "w"), e;
  }, nodePermissions: (r, e) => o.ignorePermissions || (!e.includes("r") || 292 & r.mode) && (!e.includes("w") || 146 & r.mode) && (!e.includes("x") || 73 & r.mode) ? 0 : 2, mayLookup(r) {
    var e = o.nodePermissions(r, "x");
    return e || (r.node_ops.lookup ? 0 : 2);
  }, mayCreate(r, e) {
    try {
      return o.lookupNode(r, e), 20;
    } catch {
    }
    return o.nodePermissions(r, "wx");
  }, mayDelete(r, e, t) {
    var n;
    try {
      n = o.lookupNode(r, e);
    } catch (i) {
      return i.errno;
    }
    var a = o.nodePermissions(r, "wx");
    if (a) return a;
    if (t) {
      if (!o.isDir(n.mode)) return 54;
      if (o.isRoot(n) || o.getPath(n) === o.cwd()) return 10;
    } else if (o.isDir(n.mode)) return 31;
    return 0;
  }, mayOpen: (r, e) => r ? o.isLink(r.mode) ? 32 : o.isDir(r.mode) && (o.flagsToPermissionString(e) !== "r" || 512 & e) ? 31 : o.nodePermissions(r, o.flagsToPermissionString(e)) : 44, MAX_OPEN_FDS: 4096, nextfd() {
    for (var r = 0; r <= o.MAX_OPEN_FDS; r++) if (!o.streams[r]) return r;
    throw new o.ErrnoError(33);
  }, getStreamChecked(r) {
    var e = o.getStream(r);
    if (!e) throw new o.ErrnoError(8);
    return e;
  }, getStream: (r) => o.streams[r], createStream: (r, e = -1) => (o.FSStream || (o.FSStream = function() {
    this.shared = {};
  }, o.FSStream.prototype = {}, Object.defineProperties(o.FSStream.prototype, { object: { get() {
    return this.node;
  }, set(t) {
    this.node = t;
  } }, isRead: { get() {
    return (2097155 & this.flags) != 1;
  } }, isWrite: { get() {
    return (2097155 & this.flags) != 0;
  } }, isAppend: { get() {
    return 1024 & this.flags;
  } }, flags: { get() {
    return this.shared.flags;
  }, set(t) {
    this.shared.flags = t;
  } }, position: { get() {
    return this.shared.position;
  }, set(t) {
    this.shared.position = t;
  } } })), r = Object.assign(new o.FSStream(), r), e == -1 && (e = o.nextfd()), r.fd = e, o.streams[e] = r, r), closeStream(r) {
    o.streams[r] = null;
  }, chrdev_stream_ops: { open(r) {
    var e = o.getDevice(r.node.rdev);
    r.stream_ops = e.stream_ops, r.stream_ops.open && r.stream_ops.open(r);
  }, llseek() {
    throw new o.ErrnoError(70);
  } }, major: (r) => r >> 8, minor: (r) => 255 & r, makedev: (r, e) => r << 8 | e, registerDevice(r, e) {
    o.devices[r] = { stream_ops: e };
  }, getDevice: (r) => o.devices[r], getMounts(r) {
    for (var e = [], t = [r]; t.length; ) {
      var n = t.pop();
      e.push(n), t.push.apply(t, n.mounts);
    }
    return e;
  }, syncfs(r, e) {
    typeof r == "function" && (e = r, r = !1), o.syncFSRequests++, o.syncFSRequests > 1 && Y(`warning: ${o.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
    var t = o.getMounts(o.root.mount), n = 0;
    function a(s) {
      return o.syncFSRequests--, e(s);
    }
    function i(s) {
      if (s) return i.errored ? void 0 : (i.errored = !0, a(s));
      ++n >= t.length && a(null);
    }
    t.forEach((s) => {
      if (!s.type.syncfs) return i(null);
      s.type.syncfs(s, r, i);
    });
  }, mount(r, e, t) {
    var n, a = t === "/", i = !t;
    if (a && o.root) throw new o.ErrnoError(10);
    if (!a && !i) {
      var s = o.lookupPath(t, { follow_mount: !1 });
      if (t = s.path, n = s.node, o.isMountpoint(n)) throw new o.ErrnoError(10);
      if (!o.isDir(n.mode)) throw new o.ErrnoError(54);
    }
    var u = { type: r, opts: e, mountpoint: t, mounts: [] }, d = r.mount(u);
    return d.mount = u, u.root = d, a ? o.root = d : n && (n.mounted = u, n.mount && n.mount.mounts.push(u)), d;
  }, unmount(r) {
    var e = o.lookupPath(r, { follow_mount: !1 });
    if (!o.isMountpoint(e.node)) throw new o.ErrnoError(28);
    var t = e.node, n = t.mounted, a = o.getMounts(n);
    Object.keys(o.nameTable).forEach((s) => {
      for (var u = o.nameTable[s]; u; ) {
        var d = u.name_next;
        a.includes(u.mount) && o.destroyNode(u), u = d;
      }
    }), t.mounted = null;
    var i = t.mount.mounts.indexOf(n);
    t.mount.mounts.splice(i, 1);
  }, lookup: (r, e) => r.node_ops.lookup(r, e), mknod(r, e, t) {
    var n = o.lookupPath(r, { parent: !0 }).node, a = b.basename(r);
    if (!a || a === "." || a === "..") throw new o.ErrnoError(28);
    var i = o.mayCreate(n, a);
    if (i) throw new o.ErrnoError(i);
    if (!n.node_ops.mknod) throw new o.ErrnoError(63);
    return n.node_ops.mknod(n, a, e, t);
  }, create: (r, e) => (e = e !== void 0 ? e : 438, e &= 4095, e |= 32768, o.mknod(r, e, 0)), mkdir: (r, e) => (e = e !== void 0 ? e : 511, e &= 1023, e |= 16384, o.mknod(r, e, 0)), mkdirTree(r, e) {
    for (var t = r.split("/"), n = "", a = 0; a < t.length; ++a) if (t[a]) {
      n += "/" + t[a];
      try {
        o.mkdir(n, e);
      } catch (i) {
        if (i.errno != 20) throw i;
      }
    }
  }, mkdev: (r, e, t) => (t === void 0 && (t = e, e = 438), e |= 8192, o.mknod(r, e, t)), symlink(r, e) {
    if (!L.resolve(r)) throw new o.ErrnoError(44);
    var t = o.lookupPath(e, { parent: !0 }).node;
    if (!t) throw new o.ErrnoError(44);
    var n = b.basename(e), a = o.mayCreate(t, n);
    if (a) throw new o.ErrnoError(a);
    if (!t.node_ops.symlink) throw new o.ErrnoError(63);
    return t.node_ops.symlink(t, n, r);
  }, rename(r, e) {
    var t, n, a = b.dirname(r), i = b.dirname(e), s = b.basename(r), u = b.basename(e);
    if (t = o.lookupPath(r, { parent: !0 }).node, n = o.lookupPath(e, { parent: !0 }).node, !t || !n) throw new o.ErrnoError(44);
    if (t.mount !== n.mount) throw new o.ErrnoError(75);
    var d, c = o.lookupNode(t, s), m = L.relative(r, i);
    if (m.charAt(0) !== ".") throw new o.ErrnoError(28);
    if ((m = L.relative(e, a)).charAt(0) !== ".") throw new o.ErrnoError(55);
    try {
      d = o.lookupNode(n, u);
    } catch {
    }
    if (c !== d) {
      var h = o.isDir(c.mode), p = o.mayDelete(t, s, h);
      if (p) throw new o.ErrnoError(p);
      if (p = d ? o.mayDelete(n, u, h) : o.mayCreate(n, u)) throw new o.ErrnoError(p);
      if (!t.node_ops.rename) throw new o.ErrnoError(63);
      if (o.isMountpoint(c) || d && o.isMountpoint(d)) throw new o.ErrnoError(10);
      if (n !== t && (p = o.nodePermissions(t, "w"))) throw new o.ErrnoError(p);
      o.hashRemoveNode(c);
      try {
        t.node_ops.rename(c, n, u);
      } catch (_) {
        throw _;
      } finally {
        o.hashAddNode(c);
      }
    }
  }, rmdir(r) {
    var e = o.lookupPath(r, { parent: !0 }).node, t = b.basename(r), n = o.lookupNode(e, t), a = o.mayDelete(e, t, !0);
    if (a) throw new o.ErrnoError(a);
    if (!e.node_ops.rmdir) throw new o.ErrnoError(63);
    if (o.isMountpoint(n)) throw new o.ErrnoError(10);
    e.node_ops.rmdir(e, t), o.destroyNode(n);
  }, readdir(r) {
    var e = o.lookupPath(r, { follow: !0 }).node;
    if (!e.node_ops.readdir) throw new o.ErrnoError(54);
    return e.node_ops.readdir(e);
  }, unlink(r) {
    var e = o.lookupPath(r, { parent: !0 }).node;
    if (!e) throw new o.ErrnoError(44);
    var t = b.basename(r), n = o.lookupNode(e, t), a = o.mayDelete(e, t, !1);
    if (a) throw new o.ErrnoError(a);
    if (!e.node_ops.unlink) throw new o.ErrnoError(63);
    if (o.isMountpoint(n)) throw new o.ErrnoError(10);
    e.node_ops.unlink(e, t), o.destroyNode(n);
  }, readlink(r) {
    var e = o.lookupPath(r).node;
    if (!e) throw new o.ErrnoError(44);
    if (!e.node_ops.readlink) throw new o.ErrnoError(28);
    return L.resolve(o.getPath(e.parent), e.node_ops.readlink(e));
  }, stat(r, e) {
    var t = o.lookupPath(r, { follow: !e }).node;
    if (!t) throw new o.ErrnoError(44);
    if (!t.node_ops.getattr) throw new o.ErrnoError(63);
    return t.node_ops.getattr(t);
  }, lstat: (r) => o.stat(r, !0), chmod(r, e, t) {
    var n;
    if (!(n = typeof r == "string" ? o.lookupPath(r, { follow: !t }).node : r).node_ops.setattr) throw new o.ErrnoError(63);
    n.node_ops.setattr(n, { mode: 4095 & e | -4096 & n.mode, timestamp: Date.now() });
  }, lchmod(r, e) {
    o.chmod(r, e, !0);
  }, fchmod(r, e) {
    var t = o.getStreamChecked(r);
    o.chmod(t.node, e);
  }, chown(r, e, t, n) {
    var a;
    if (!(a = typeof r == "string" ? o.lookupPath(r, { follow: !n }).node : r).node_ops.setattr) throw new o.ErrnoError(63);
    a.node_ops.setattr(a, { timestamp: Date.now() });
  }, lchown(r, e, t) {
    o.chown(r, e, t, !0);
  }, fchown(r, e, t) {
    var n = o.getStreamChecked(r);
    o.chown(n.node, e, t);
  }, truncate(r, e) {
    if (e < 0) throw new o.ErrnoError(28);
    var t;
    if (!(t = typeof r == "string" ? o.lookupPath(r, { follow: !0 }).node : r).node_ops.setattr) throw new o.ErrnoError(63);
    if (o.isDir(t.mode)) throw new o.ErrnoError(31);
    if (!o.isFile(t.mode)) throw new o.ErrnoError(28);
    var n = o.nodePermissions(t, "w");
    if (n) throw new o.ErrnoError(n);
    t.node_ops.setattr(t, { size: e, timestamp: Date.now() });
  }, ftruncate(r, e) {
    var t = o.getStreamChecked(r);
    if (!(2097155 & t.flags)) throw new o.ErrnoError(28);
    o.truncate(t.node, e);
  }, utime(r, e, t) {
    var n = o.lookupPath(r, { follow: !0 }).node;
    n.node_ops.setattr(n, { timestamp: Math.max(e, t) });
  }, open(r, e, t) {
    if (r === "") throw new o.ErrnoError(44);
    var n;
    if (t = t === void 0 ? 438 : t, t = 64 & (e = typeof e == "string" ? Qe(e) : e) ? 4095 & t | 32768 : 0, typeof r == "object") n = r;
    else {
      r = b.normalize(r);
      try {
        n = o.lookupPath(r, { follow: !(131072 & e) }).node;
      } catch {
      }
    }
    var a = !1;
    if (64 & e) if (n) {
      if (128 & e) throw new o.ErrnoError(20);
    } else n = o.mknod(r, t, 0), a = !0;
    if (!n) throw new o.ErrnoError(44);
    if (o.isChrdev(n.mode) && (e &= -513), 65536 & e && !o.isDir(n.mode)) throw new o.ErrnoError(54);
    if (!a) {
      var i = o.mayOpen(n, e);
      if (i) throw new o.ErrnoError(i);
    }
    512 & e && !a && o.truncate(n, 0), e &= -131713;
    var s = o.createStream({ node: n, path: o.getPath(n), flags: e, seekable: !0, position: 0, stream_ops: n.stream_ops, ungotten: [], error: !1 });
    return s.stream_ops.open && s.stream_ops.open(s), !l.logReadFiles || 1 & e || (o.readFiles || (o.readFiles = {}), r in o.readFiles || (o.readFiles[r] = 1)), s;
  }, close(r) {
    if (o.isClosed(r)) throw new o.ErrnoError(8);
    r.getdents && (r.getdents = null);
    try {
      r.stream_ops.close && r.stream_ops.close(r);
    } catch (e) {
      throw e;
    } finally {
      o.closeStream(r.fd);
    }
    r.fd = null;
  }, isClosed: (r) => r.fd === null, llseek(r, e, t) {
    if (o.isClosed(r)) throw new o.ErrnoError(8);
    if (!r.seekable || !r.stream_ops.llseek) throw new o.ErrnoError(70);
    if (t != 0 && t != 1 && t != 2) throw new o.ErrnoError(28);
    return r.position = r.stream_ops.llseek(r, e, t), r.ungotten = [], r.position;
  }, read(r, e, t, n, a) {
    if (n < 0 || a < 0) throw new o.ErrnoError(28);
    if (o.isClosed(r)) throw new o.ErrnoError(8);
    if ((2097155 & r.flags) == 1) throw new o.ErrnoError(8);
    if (o.isDir(r.node.mode)) throw new o.ErrnoError(31);
    if (!r.stream_ops.read) throw new o.ErrnoError(28);
    var i = a !== void 0;
    if (i) {
      if (!r.seekable) throw new o.ErrnoError(70);
    } else a = r.position;
    var s = r.stream_ops.read(r, e, t, n, a);
    return i || (r.position += s), s;
  }, write(r, e, t, n, a, i) {
    if (n < 0 || a < 0) throw new o.ErrnoError(28);
    if (o.isClosed(r)) throw new o.ErrnoError(8);
    if (!(2097155 & r.flags)) throw new o.ErrnoError(8);
    if (o.isDir(r.node.mode)) throw new o.ErrnoError(31);
    if (!r.stream_ops.write) throw new o.ErrnoError(28);
    r.seekable && 1024 & r.flags && o.llseek(r, 0, 2);
    var s = a !== void 0;
    if (s) {
      if (!r.seekable) throw new o.ErrnoError(70);
    } else a = r.position;
    var u = r.stream_ops.write(r, e, t, n, a, i);
    return s || (r.position += u), u;
  }, allocate(r, e, t) {
    if (o.isClosed(r)) throw new o.ErrnoError(8);
    if (e < 0 || t <= 0) throw new o.ErrnoError(28);
    if (!(2097155 & r.flags)) throw new o.ErrnoError(8);
    if (!o.isFile(r.node.mode) && !o.isDir(r.node.mode)) throw new o.ErrnoError(43);
    if (!r.stream_ops.allocate) throw new o.ErrnoError(138);
    r.stream_ops.allocate(r, e, t);
  }, mmap(r, e, t, n, a) {
    if (2 & n && !(2 & a) && (2097155 & r.flags) != 2) throw new o.ErrnoError(2);
    if ((2097155 & r.flags) == 1) throw new o.ErrnoError(2);
    if (!r.stream_ops.mmap) throw new o.ErrnoError(43);
    return r.stream_ops.mmap(r, e, t, n, a);
  }, msync: (r, e, t, n, a) => r.stream_ops.msync ? r.stream_ops.msync(r, e, t, n, a) : 0, munmap: (r) => 0, ioctl(r, e, t) {
    if (!r.stream_ops.ioctl) throw new o.ErrnoError(59);
    return r.stream_ops.ioctl(r, e, t);
  }, readFile(r, e = {}) {
    if (e.flags = e.flags || 0, e.encoding = e.encoding || "binary", e.encoding !== "utf8" && e.encoding !== "binary") throw new Error(`Invalid encoding type "${e.encoding}"`);
    var t, n = o.open(r, e.flags), a = o.stat(r).size, i = new Uint8Array(a);
    return o.read(n, i, 0, a, 0), e.encoding === "utf8" ? t = rr(i, 0) : e.encoding === "binary" && (t = i), o.close(n), t;
  }, writeFile(r, e, t = {}) {
    t.flags = t.flags || 577;
    var n = o.open(r, t.flags, t.mode);
    if (typeof e == "string") {
      var a = new Uint8Array(Dr(e) + 1), i = Pr(e, a, 0, a.length);
      o.write(n, a, 0, i, void 0, t.canOwn);
    } else {
      if (!ArrayBuffer.isView(e)) throw new Error("Unsupported data type");
      o.write(n, e, 0, e.byteLength, void 0, t.canOwn);
    }
    o.close(n);
  }, cwd: () => o.currentPath, chdir(r) {
    var e = o.lookupPath(r, { follow: !0 });
    if (e.node === null) throw new o.ErrnoError(44);
    if (!o.isDir(e.node.mode)) throw new o.ErrnoError(54);
    var t = o.nodePermissions(e.node, "x");
    if (t) throw new o.ErrnoError(t);
    o.currentPath = e.path;
  }, createDefaultDirectories() {
    o.mkdir("/tmp"), o.mkdir("/home"), o.mkdir("/home/web_user");
  }, createDefaultDevices() {
    o.mkdir("/dev"), o.registerDevice(o.makedev(1, 3), { read: () => 0, write: (n, a, i, s, u) => s }), o.mkdev("/dev/null", o.makedev(1, 3)), J.register(o.makedev(5, 0), J.default_tty_ops), J.register(o.makedev(6, 0), J.default_tty1_ops), o.mkdev("/dev/tty", o.makedev(5, 0)), o.mkdev("/dev/tty1", o.makedev(6, 0));
    var r = new Uint8Array(1024), e = 0, t = () => (e === 0 && (e = ne(r).byteLength), r[--e]);
    o.createDevice("/dev", "random", t), o.createDevice("/dev", "urandom", t), o.mkdir("/dev/shm"), o.mkdir("/dev/shm/tmp");
  }, createSpecialDirectories() {
    o.mkdir("/proc");
    var r = o.mkdir("/proc/self");
    o.mkdir("/proc/self/fd"), o.mount({ mount() {
      var e = o.createNode(r, "fd", 16895, 73);
      return e.node_ops = { lookup(t, n) {
        var a = +n, i = o.getStreamChecked(a), s = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: () => i.path } };
        return s.parent = s, s;
      } }, e;
    } }, {}, "/proc/self/fd");
  }, createStandardStreams() {
    l.stdin ? o.createDevice("/dev", "stdin", l.stdin) : o.symlink("/dev/tty", "/dev/stdin"), l.stdout ? o.createDevice("/dev", "stdout", null, l.stdout) : o.symlink("/dev/tty", "/dev/stdout"), l.stderr ? o.createDevice("/dev", "stderr", null, l.stderr) : o.symlink("/dev/tty1", "/dev/stderr"), o.open("/dev/stdin", 0), o.open("/dev/stdout", 1), o.open("/dev/stderr", 1);
  }, ensureErrnoError() {
    o.ErrnoError || (o.ErrnoError = function(r, e) {
      this.name = "ErrnoError", this.node = e, this.setErrno = function(t) {
        this.errno = t;
      }, this.setErrno(r), this.message = "FS error";
    }, o.ErrnoError.prototype = new Error(), o.ErrnoError.prototype.constructor = o.ErrnoError, [44].forEach((r) => {
      o.genericErrors[r] = new o.ErrnoError(r), o.genericErrors[r].stack = "<generic error, no stack>";
    }));
  }, staticInit() {
    o.ensureErrnoError(), o.nameTable = new Array(4096), o.mount(g, {}, "/"), o.createDefaultDirectories(), o.createDefaultDevices(), o.createSpecialDirectories(), o.filesystems = { MEMFS: g };
  }, init(r, e, t) {
    o.init.initialized = !0, o.ensureErrnoError(), l.stdin = r || l.stdin, l.stdout = e || l.stdout, l.stderr = t || l.stderr, o.createStandardStreams();
  }, quit() {
    o.init.initialized = !1;
    for (var r = 0; r < o.streams.length; r++) {
      var e = o.streams[r];
      e && o.close(e);
    }
  }, findObject(r, e) {
    var t = o.analyzePath(r, e);
    return t.exists ? t.object : null;
  }, analyzePath(r, e) {
    try {
      r = (n = o.lookupPath(r, { follow: !e })).path;
    } catch {
    }
    var t = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
    try {
      var n = o.lookupPath(r, { parent: !0 });
      t.parentExists = !0, t.parentPath = n.path, t.parentObject = n.node, t.name = b.basename(r), n = o.lookupPath(r, { follow: !e }), t.exists = !0, t.path = n.path, t.object = n.node, t.name = n.node.name, t.isRoot = n.path === "/";
    } catch (a) {
      t.error = a.errno;
    }
    return t;
  }, createPath(r, e, t, n) {
    r = typeof r == "string" ? r : o.getPath(r);
    for (var a = e.split("/").reverse(); a.length; ) {
      var i = a.pop();
      if (i) {
        var s = b.join2(r, i);
        try {
          o.mkdir(s);
        } catch {
        }
        r = s;
      }
    }
    return s;
  }, createFile(r, e, t, n, a) {
    var i = b.join2(typeof r == "string" ? r : o.getPath(r), e), s = $r(n, a);
    return o.create(i, s);
  }, createDataFile(r, e, t, n, a, i) {
    var s = e;
    r && (r = typeof r == "string" ? r : o.getPath(r), s = e ? b.join2(r, e) : r);
    var u = $r(n, a), d = o.create(s, u);
    if (t) {
      if (typeof t == "string") {
        for (var c = new Array(t.length), m = 0, h = t.length; m < h; ++m) c[m] = t.charCodeAt(m);
        t = c;
      }
      o.chmod(d, 146 | u);
      var p = o.open(d, 577);
      o.write(p, t, 0, t.length, 0, i), o.close(p), o.chmod(d, u);
    }
    return d;
  }, createDevice(r, e, t, n) {
    var a = b.join2(typeof r == "string" ? r : o.getPath(r), e), i = $r(!!t, !!n);
    o.createDevice.major || (o.createDevice.major = 64);
    var s = o.makedev(o.createDevice.major++, 0);
    return o.registerDevice(s, { open(u) {
      u.seekable = !1;
    }, close(u) {
      n && n.buffer && n.buffer.length && n(10);
    }, read(u, d, c, m, h) {
      for (var p = 0, _ = 0; _ < m; _++) {
        var k;
        try {
          k = t();
        } catch {
          throw new o.ErrnoError(29);
        }
        if (k === void 0 && p === 0) throw new o.ErrnoError(6);
        if (k == null) break;
        p++, d[c + _] = k;
      }
      return p && (u.node.timestamp = Date.now()), p;
    }, write(u, d, c, m, h) {
      for (var p = 0; p < m; p++) try {
        n(d[c + p]);
      } catch {
        throw new o.ErrnoError(29);
      }
      return m && (u.node.timestamp = Date.now()), p;
    } }), o.mkdev(a, i, s);
  }, forceLoadFile(r) {
    if (r.isDevice || r.isFolder || r.link || r.contents) return !0;
    if (typeof XMLHttpRequest < "u") throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
    if (!br) throw new Error("Cannot load without read() or XMLHttpRequest.");
    try {
      r.contents = Sr(br(r.url), !0), r.usedBytes = r.contents.length;
    } catch {
      throw new o.ErrnoError(29);
    }
  }, createLazyFile(r, e, t, n, a) {
    if (typeof XMLHttpRequest < "u") throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
    var i = { isDevice: !1, url: t }, s = o.createFile(r, e, i, n, a);
    i.contents ? s.contents = i.contents : i.url && (s.contents = null, s.url = i.url), Object.defineProperties(s, { usedBytes: { get: function() {
      return this.contents.length;
    } } });
    var u = {};
    function d(c, m, h, p, _) {
      var k = c.node.contents;
      if (_ >= k.length) return 0;
      var T = Math.min(k.length - _, p);
      if (k.slice) for (var D = 0; D < T; D++) m[h + D] = k[_ + D];
      else for (D = 0; D < T; D++) m[h + D] = k.get(_ + D);
      return T;
    }
    return Object.keys(s.stream_ops).forEach((c) => {
      var m = s.stream_ops[c];
      u[c] = function() {
        return o.forceLoadFile(s), m.apply(null, arguments);
      };
    }), u.read = (c, m, h, p, _) => (o.forceLoadFile(s), d(c, m, h, p, _)), u.mmap = (c, m, h, p, _) => {
      o.forceLoadFile(s);
      var k = ae();
      if (!k) throw new o.ErrnoError(48);
      return d(c, P, k, m, h), { ptr: k, allocated: !0 };
    }, s.stream_ops = u, s;
  } }, er = (r, e) => r ? rr(C, r, e) : "", F = { DEFAULT_POLLMASK: 5, calculateAt(r, e, t) {
    if (b.isAbs(e)) return e;
    var n;
    if (n = r === -100 ? o.cwd() : F.getStreamFromFD(r).path, e.length == 0) {
      if (!t) throw new o.ErrnoError(44);
      return n;
    }
    return b.join2(n, e);
  }, doStat(r, e, t) {
    try {
      var n = r(e);
    } catch (u) {
      if (u && u.node && b.normalize(e) !== b.normalize(o.getPath(u.node))) return -54;
      throw u;
    }
    y[t >> 2] = n.dev, y[t + 4 >> 2] = n.mode, w[t + 8 >> 2] = n.nlink, y[t + 12 >> 2] = n.uid, y[t + 16 >> 2] = n.gid, y[t + 20 >> 2] = n.rdev, S = [n.size >>> 0, (E = n.size, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[t + 24 >> 2] = S[0], y[t + 28 >> 2] = S[1], y[t + 32 >> 2] = 4096, y[t + 36 >> 2] = n.blocks;
    var a = n.atime.getTime(), i = n.mtime.getTime(), s = n.ctime.getTime();
    return S = [Math.floor(a / 1e3) >>> 0, (E = Math.floor(a / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[t + 40 >> 2] = S[0], y[t + 44 >> 2] = S[1], w[t + 48 >> 2] = a % 1e3 * 1e3, S = [Math.floor(i / 1e3) >>> 0, (E = Math.floor(i / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[t + 56 >> 2] = S[0], y[t + 60 >> 2] = S[1], w[t + 64 >> 2] = i % 1e3 * 1e3, S = [Math.floor(s / 1e3) >>> 0, (E = Math.floor(s / 1e3), +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[t + 72 >> 2] = S[0], y[t + 76 >> 2] = S[1], w[t + 80 >> 2] = s % 1e3 * 1e3, S = [n.ino >>> 0, (E = n.ino, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[t + 88 >> 2] = S[0], y[t + 92 >> 2] = S[1], 0;
  }, doMsync(r, e, t, n, a) {
    if (!o.isFile(e.node.mode)) throw new o.ErrnoError(43);
    if (2 & n) return 0;
    var i = C.slice(r, r + t);
    o.msync(e, i, a, t, n);
  }, varargs: void 0, get() {
    var r = y[+F.varargs >> 2];
    return F.varargs += 4, r;
  }, getp: () => F.get(), getStr: (r) => er(r), getStreamFromFD: (r) => o.getStreamChecked(r) };
  function rt(r, e, t) {
    F.varargs = t;
    try {
      var n = F.getStreamFromFD(r);
      switch (e) {
        case 0:
          if ((a = F.get()) < 0) return -28;
          for (; o.streams[a]; ) a++;
          return o.createStream(n, a).fd;
        case 1:
        case 2:
        case 6:
        case 7:
          return 0;
        case 3:
          return n.flags;
        case 4:
          var a = F.get();
          return n.flags |= a, 0;
        case 5:
          return a = F.getp(), q[a + 0 >> 1] = 2, 0;
        case 16:
        case 8:
        default:
          return -28;
        case 9:
          return Ve(28), -1;
      }
    } catch (i) {
      if (o === void 0 || i.name !== "ErrnoError") throw i;
      return -i.errno;
    }
  }
  function et(r, e, t) {
    F.varargs = t;
    try {
      var n = F.getStreamFromFD(r);
      switch (e) {
        case 21509:
        case 21510:
        case 21511:
        case 21512:
        case 21524:
        case 21515:
          return n.tty ? 0 : -59;
        case 21505:
          if (!n.tty) return -59;
          if (n.tty.ops.ioctl_tcgets) {
            var a = n.tty.ops.ioctl_tcgets(n), i = F.getp();
            y[i >> 2] = a.c_iflag || 0, y[i + 4 >> 2] = a.c_oflag || 0, y[i + 8 >> 2] = a.c_cflag || 0, y[i + 12 >> 2] = a.c_lflag || 0;
            for (var s = 0; s < 32; s++) P[i + s + 17 >> 0] = a.c_cc[s] || 0;
            return 0;
          }
          return 0;
        case 21506:
        case 21507:
        case 21508:
          if (!n.tty) return -59;
          if (n.tty.ops.ioctl_tcsets) {
            i = F.getp();
            var u = y[i >> 2], d = y[i + 4 >> 2], c = y[i + 8 >> 2], m = y[i + 12 >> 2], h = [];
            for (s = 0; s < 32; s++) h.push(P[i + s + 17 >> 0]);
            return n.tty.ops.ioctl_tcsets(n.tty, e, { c_iflag: u, c_oflag: d, c_cflag: c, c_lflag: m, c_cc: h });
          }
          return 0;
        case 21519:
          return n.tty ? (i = F.getp(), y[i >> 2] = 0, 0) : -59;
        case 21520:
          return n.tty ? -28 : -59;
        case 21531:
          return i = F.getp(), o.ioctl(n, e, i);
        case 21523:
          if (!n.tty) return -59;
          if (n.tty.ops.ioctl_tiocgwinsz) {
            var p = n.tty.ops.ioctl_tiocgwinsz(n.tty);
            i = F.getp(), q[i >> 1] = p[0], q[i + 2 >> 1] = p[1];
          }
          return 0;
        default:
          return -28;
      }
    } catch (_) {
      if (o === void 0 || _.name !== "ErrnoError") throw _;
      return -_.errno;
    }
  }
  function tt(r, e, t, n) {
    F.varargs = n;
    try {
      e = F.getStr(e), e = F.calculateAt(r, e);
      var a = n ? F.get() : 0;
      return o.open(e, t, a).fd;
    } catch (i) {
      if (o === void 0 || i.name !== "ErrnoError") throw i;
      return -i.errno;
    }
  }
  var pr = {}, Tr = (r) => {
    for (; r.length; ) {
      var e = r.pop();
      r.pop()(e);
    }
  };
  function Cr(r) {
    return this.fromWireType(y[r >> 2]);
  }
  var ie, se, ue, tr = {}, Z = {}, vr = {}, le = (r) => {
    throw new ie(r);
  }, de = (r, e, t) => {
    function n(u) {
      var d = t(u);
      d.length !== r.length && le("Mismatched type converter count");
      for (var c = 0; c < r.length; ++c) U(r[c], d[c]);
    }
    r.forEach(function(u) {
      vr[u] = e;
    });
    var a = new Array(e.length), i = [], s = 0;
    e.forEach((u, d) => {
      Z.hasOwnProperty(u) ? a[d] = Z[u] : (i.push(u), tr.hasOwnProperty(u) || (tr[u] = []), tr[u].push(() => {
        a[d] = Z[u], ++s === i.length && n(a);
      }));
    }), i.length === 0 && n(a);
  }, nt = (r) => {
    var e = pr[r];
    delete pr[r];
    var t = e.rawConstructor, n = e.rawDestructor, a = e.fields, i = a.map((s) => s.getterReturnType).concat(a.map((s) => s.setterArgumentType));
    de([r], i, (s) => {
      var u = {};
      return a.forEach((d, c) => {
        var m = d.fieldName, h = s[c], p = d.getter, _ = d.getterContext, k = s[c + a.length], T = d.setter, D = d.setterContext;
        u[m] = { read: (I) => h.fromWireType(p(_, I)), write: (I, f) => {
          var v = [];
          T(D, I, k.toWireType(v, f)), Tr(v);
        } };
      }), [{ name: e.name, fromWireType: (d) => {
        var c = {};
        for (var m in u) c[m] = u[m].read(d);
        return n(d), c;
      }, toWireType: (d, c) => {
        for (var m in u) if (!(m in c)) throw new TypeError(`Missing field: "${m}"`);
        var h = t();
        for (m in u) u[m].write(h, c[m]);
        return d !== null && d.push(n, h), h;
      }, argPackAdvance: X, readValueFromPointer: Cr, destructorFunction: n }];
    });
  }, ot = (r, e, t, n, a) => {
  }, at = () => {
    for (var r = new Array(256), e = 0; e < 256; ++e) r[e] = String.fromCharCode(e);
    se = r;
  }, M = (r) => {
    for (var e = "", t = r; C[t]; ) e += se[C[t++]];
    return e;
  }, O = (r) => {
    throw new ue(r);
  };
  function it(r, e, t = {}) {
    var n = e.name;
    if (r || O(`type "${n}" must have a positive integer typeid pointer`), Z.hasOwnProperty(r)) {
      if (t.ignoreDuplicateRegistrations) return;
      O(`Cannot register type '${n}' twice`);
    }
    if (Z[r] = e, delete vr[r], tr.hasOwnProperty(r)) {
      var a = tr[r];
      delete tr[r], a.forEach((i) => i());
    }
  }
  function U(r, e, t = {}) {
    if (!("argPackAdvance" in e)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
    return it(r, e, t);
  }
  var X = 8, st = (r, e, t, n) => {
    U(r, { name: e = M(e), fromWireType: function(a) {
      return !!a;
    }, toWireType: function(a, i) {
      return i ? t : n;
    }, argPackAdvance: X, readValueFromPointer: function(a) {
      return this.fromWireType(C[a]);
    }, destructorFunction: null });
  };
  function ut() {
    Object.assign(ce.prototype, { get(r) {
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
  function ce() {
    this.allocated = [void 0], this.freelist = [];
  }
  var W = new ce(), Mr = (r) => {
    r >= W.reserved && --W.get(r).refcount == 0 && W.free(r);
  }, lt = () => {
    for (var r = 0, e = W.reserved; e < W.allocated.length; ++e) W.allocated[e] !== void 0 && ++r;
    return r;
  }, dt = () => {
    W.allocated.push({ value: void 0 }, { value: null }, { value: !0 }, { value: !1 }), W.reserved = W.allocated.length, l.count_emval_handles = lt;
  }, $ = { toValue: (r) => (r || O("Cannot use deleted val. handle = " + r), W.get(r).value), toHandle: (r) => {
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
        return W.allocate({ refcount: 1, value: r });
    }
  } }, ct = (r, e) => {
    U(r, { name: e = M(e), fromWireType: (t) => {
      var n = $.toValue(t);
      return Mr(t), n;
    }, toWireType: (t, n) => $.toHandle(n), argPackAdvance: X, readValueFromPointer: Cr, destructorFunction: null });
  }, ft = (r, e) => {
    switch (e) {
      case 4:
        return function(t) {
          return this.fromWireType(qr[t >> 2]);
        };
      case 8:
        return function(t) {
          return this.fromWireType(Xr[t >> 3]);
        };
      default:
        throw new TypeError(`invalid float width (${e}): ${r}`);
    }
  }, mt = (r, e, t) => {
    U(r, { name: e = M(e), fromWireType: (n) => n, toWireType: (n, a) => a, argPackAdvance: X, readValueFromPointer: ft(e, t), destructorFunction: null });
  }, ht = 48, pt = 57, vt = (r) => {
    if (r === void 0) return "_unknown";
    var e = (r = r.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
    return e >= ht && e <= pt ? `_${r}` : r;
  };
  function yt(r, e, t, n, a, i) {
    var s = e.length;
    s < 2 && O("argTypes array size mismatch! Must at least get return value and 'this' types!");
    for (var u = e[1] !== null && t !== null, d = !1, c = 1; c < e.length; ++c) if (e[c] !== null && e[c].destructorFunction === void 0) {
      d = !0;
      break;
    }
    var m = e[0].name !== "void", h = s - 2, p = new Array(h), _ = [], k = [];
    return function() {
      var T;
      arguments.length !== h && O(`function ${r} called with ${arguments.length} arguments, expected ${h}`), k.length = 0, _.length = u ? 2 : 1, _[0] = a, u && (T = e[1].toWireType(k, this), _[1] = T);
      for (var D = 0; D < h; ++D) p[D] = e[D + 2].toWireType(k, arguments[D]), _.push(p[D]);
      function I(f) {
        if (d) Tr(k);
        else for (var v = u ? 1 : 2; v < e.length; v++) {
          var j = v === 1 ? T : p[v - 2];
          e[v].destructorFunction !== null && e[v].destructorFunction(j);
        }
        if (m) return e[0].fromWireType(f);
      }
      return I(n.apply(null, _));
    };
  }
  var K, gt = (r, e, t) => {
    if (r[e].overloadTable === void 0) {
      var n = r[e];
      r[e] = function() {
        return r[e].overloadTable.hasOwnProperty(arguments.length) || O(`Function '${t}' called with an invalid number of arguments (${arguments.length}) - expects one of (${r[e].overloadTable})!`), r[e].overloadTable[arguments.length].apply(this, arguments);
      }, r[e].overloadTable = [], r[e].overloadTable[n.argCount] = n;
    }
  }, wt = (r, e, t) => {
    l.hasOwnProperty(r) ? ((t === void 0 || l[r].overloadTable !== void 0 && l[r].overloadTable[t] !== void 0) && O(`Cannot register public name '${r}' twice`), gt(l, r, r), l.hasOwnProperty(t) && O(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`), l[r].overloadTable[t] = e) : (l[r] = e, t !== void 0 && (l[r].numArguments = t));
  }, _t = (r, e) => {
    for (var t = [], n = 0; n < r; n++) t.push(w[e + 4 * n >> 2]);
    return t;
  }, Et = (r, e, t) => {
    l.hasOwnProperty(r) || le("Replacing nonexistant public symbol"), l[r].overloadTable !== void 0 && t !== void 0 ? l[r].overloadTable[t] = e : (l[r] = e, l[r].argCount = t);
  }, bt = (r, e, t) => {
    var n = l["dynCall_" + r];
    return t && t.length ? n.apply(null, [e].concat(t)) : n.call(null, e);
  }, ur = [], R = (r) => {
    var e = ur[r];
    return e || (r >= ur.length && (ur.length = r + 1), ur[r] = e = K.get(r)), e;
  }, kt = (r, e, t) => r.includes("j") ? bt(r, e, t) : R(e).apply(null, t), Ft = (r, e) => {
    var t = [];
    return function() {
      return t.length = 0, Object.assign(t, arguments), kt(r, e, t);
    };
  }, lr = (r, e) => {
    function t() {
      return r.includes("j") ? Ft(r, e) : R(e);
    }
    r = M(r);
    var n = t();
    return typeof n != "function" && O(`unknown function pointer with signature ${r}: ${e}`), n;
  };
  function At(r, e) {
    return { [r = vt(r)]: function() {
      return e.apply(this, arguments);
    } }[r];
  }
  var fe, Dt = (r, e) => {
    var t = At(e, function(n) {
      this.name = e, this.message = n;
      var a = new Error(n).stack;
      a !== void 0 && (this.stack = this.toString() + `
` + a.replace(/^Error(:[^\n]*)?\n/, ""));
    });
    return t.prototype = Object.create(r.prototype), t.prototype.constructor = t, t.prototype.toString = function() {
      return this.message === void 0 ? this.name : `${this.name}: ${this.message}`;
    }, t;
  }, me = (r) => {
    var e = ke(r), t = M(e);
    return H(e), t;
  }, Pt = (r, e) => {
    var t = [], n = {};
    function a(i) {
      n[i] || Z[i] || (vr[i] ? vr[i].forEach(a) : (t.push(i), n[i] = !0));
    }
    throw e.forEach(a), new fe(`${r}: ` + t.map(me).join([", "]));
  }, St = (r) => {
    const e = (r = r.trim()).indexOf("(");
    return e !== -1 ? (Gr(r[r.length - 1] == ")", "Parentheses for argument names should match."), r.substr(0, e)) : r;
  }, $t = (r, e, t, n, a, i, s) => {
    var u = _t(e, t);
    r = M(r), r = St(r), a = lr(n, a), wt(r, function() {
      Pt(`Cannot call ${r} due to unbound types`, u);
    }, e - 1), de([], u, function(d) {
      var c = [d[0], null].concat(d.slice(1));
      return Et(r, yt(r, c, null, a, i), e - 1), [];
    });
  }, Tt = (r, e, t) => {
    switch (e) {
      case 1:
        return t ? (n) => P[n >> 0] : (n) => C[n >> 0];
      case 2:
        return t ? (n) => q[n >> 1] : (n) => mr[n >> 1];
      case 4:
        return t ? (n) => y[n >> 2] : (n) => w[n >> 2];
      default:
        throw new TypeError(`invalid integer width (${e}): ${r}`);
    }
  }, Ct = (r, e, t, n, a) => {
    e = M(e);
    var i = (c) => c;
    if (n === 0) {
      var s = 32 - 8 * t;
      i = (c) => c << s >>> s;
    }
    var u = e.includes("unsigned"), d = (c, m) => {
    };
    U(r, { name: e, fromWireType: i, toWireType: u ? function(c, m) {
      return d(m, this.name), m >>> 0;
    } : function(c, m) {
      return d(m, this.name), m;
    }, argPackAdvance: X, readValueFromPointer: Tt(e, t, n !== 0), destructorFunction: null });
  }, Mt = (r, e, t) => {
    var n = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array][e];
    function a(i) {
      var s = w[i >> 2], u = w[i + 4 >> 2];
      return new n(P.buffer, u, s);
    }
    U(r, { name: t = M(t), fromWireType: a, argPackAdvance: X, readValueFromPointer: a }, { ignoreDuplicateRegistrations: !0 });
  };
  function jt(r) {
    return this.fromWireType(w[r >> 2]);
  }
  var xt = (r, e, t) => Pr(r, C, e, t), Ot = (r, e) => {
    var t = (e = M(e)) === "std::string";
    U(r, { name: e, fromWireType(n) {
      var a, i = w[n >> 2], s = n + 4;
      if (t) for (var u = s, d = 0; d <= i; ++d) {
        var c = s + d;
        if (d == i || C[c] == 0) {
          var m = er(u, c - u);
          a === void 0 ? a = m : (a += "\0", a += m), u = c + 1;
        }
      }
      else {
        var h = new Array(i);
        for (d = 0; d < i; ++d) h[d] = String.fromCharCode(C[s + d]);
        a = h.join("");
      }
      return H(n), a;
    }, toWireType(n, a) {
      var i;
      a instanceof ArrayBuffer && (a = new Uint8Array(a));
      var s = typeof a == "string";
      s || a instanceof Uint8Array || a instanceof Uint8ClampedArray || a instanceof Int8Array || O("Cannot pass non-string to std::string"), i = t && s ? Dr(a) : a.length;
      var u = Wr(4 + i + 1), d = u + 4;
      if (w[u >> 2] = i, t && s) xt(a, d, i + 1);
      else if (s) for (var c = 0; c < i; ++c) {
        var m = a.charCodeAt(c);
        m > 255 && (H(d), O("String has UTF-16 code units that do not fit in 8 bits")), C[d + c] = m;
      }
      else for (c = 0; c < i; ++c) C[d + c] = a[c];
      return n !== null && n.push(H, u), u;
    }, argPackAdvance: X, readValueFromPointer: jt, destructorFunction(n) {
      H(n);
    } });
  }, he = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0, Rt = (r, e) => {
    for (var t = r, n = t >> 1, a = n + e / 2; !(n >= a) && mr[n]; ) ++n;
    if ((t = n << 1) - r > 32 && he) return he.decode(C.subarray(r, t));
    for (var i = "", s = 0; !(s >= e / 2); ++s) {
      var u = q[r + 2 * s >> 1];
      if (u == 0) break;
      i += String.fromCharCode(u);
    }
    return i;
  }, Wt = (r, e, t) => {
    if (t === void 0 && (t = 2147483647), t < 2) return 0;
    for (var n = e, a = (t -= 2) < 2 * r.length ? t / 2 : r.length, i = 0; i < a; ++i) {
      var s = r.charCodeAt(i);
      q[e >> 1] = s, e += 2;
    }
    return q[e >> 1] = 0, e - n;
  }, zt = (r) => 2 * r.length, Nt = (r, e) => {
    for (var t = 0, n = ""; !(t >= e / 4); ) {
      var a = y[r + 4 * t >> 2];
      if (a == 0) break;
      if (++t, a >= 65536) {
        var i = a - 65536;
        n += String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i);
      } else n += String.fromCharCode(a);
    }
    return n;
  }, Bt = (r, e, t) => {
    if (t === void 0 && (t = 2147483647), t < 4) return 0;
    for (var n = e, a = n + t - 4, i = 0; i < r.length; ++i) {
      var s = r.charCodeAt(i);
      if (s >= 55296 && s <= 57343 && (s = 65536 + ((1023 & s) << 10) | 1023 & r.charCodeAt(++i)), y[e >> 2] = s, (e += 4) + 4 > a) break;
    }
    return y[e >> 2] = 0, e - n;
  }, Lt = (r) => {
    for (var e = 0, t = 0; t < r.length; ++t) {
      var n = r.charCodeAt(t);
      n >= 55296 && n <= 57343 && ++t, e += 4;
    }
    return e;
  }, Ut = (r, e, t) => {
    var n, a, i, s, u;
    t = M(t), e === 2 ? (n = Rt, a = Wt, s = zt, i = () => mr, u = 1) : e === 4 && (n = Nt, a = Bt, s = Lt, i = () => w, u = 2), U(r, { name: t, fromWireType: (d) => {
      for (var c, m = w[d >> 2], h = i(), p = d + 4, _ = 0; _ <= m; ++_) {
        var k = d + 4 + _ * e;
        if (_ == m || h[k >> u] == 0) {
          var T = n(p, k - p);
          c === void 0 ? c = T : (c += "\0", c += T), p = k + e;
        }
      }
      return H(d), c;
    }, toWireType: (d, c) => {
      typeof c != "string" && O(`Cannot pass non-string to C++ string type ${t}`);
      var m = s(c), h = Wr(4 + m + e);
      return w[h >> 2] = m >> u, a(c, h + 4, m + e), d !== null && d.push(H, h), h;
    }, argPackAdvance: X, readValueFromPointer: Cr, destructorFunction(d) {
      H(d);
    } });
  }, Ht = (r, e, t, n, a, i) => {
    pr[r] = { name: M(e), rawConstructor: lr(t, n), rawDestructor: lr(a, i), fields: [] };
  }, It = (r, e, t, n, a, i, s, u, d, c) => {
    pr[r].fields.push({ fieldName: M(e), getterReturnType: t, getter: lr(n, a), getterContext: i, setterArgumentType: s, setter: lr(u, d), setterContext: c });
  }, Vt = (r, e) => {
    U(r, { isVoid: !0, name: e = M(e), argPackAdvance: 0, fromWireType: () => {
    }, toWireType: (t, n) => {
    } });
  }, Yt = (r) => {
    do {
      var e = w[r >> 2], t = w[(r += 4) >> 2], n = w[(r += 4) >> 2];
      r += 4;
      var a = er(e);
      o.createPath("/", b.dirname(a), !0, !0), o.createDataFile(a, null, P.subarray(n, n + t), !0, !0, !0);
    } while (w[r >> 2]);
  }, qt = () => {
    throw 1 / 0;
  }, jr = (r, e) => {
    var t = Z[r];
    return t === void 0 && O(e + " has unknown type " + me(r)), t;
  }, Xt = (r, e, t) => {
    r = $.toValue(r), e = jr(e, "emval::as");
    var n = [], a = $.toHandle(n);
    return w[t >> 2] = a, e.toWireType(n, r);
  }, Gt = {}, xr = (r) => {
    var e = Gt[r];
    return e === void 0 ? M(r) : e;
  }, Or = [], Jt = (r, e, t, n, a) => {
    var i = [], s = (r = Or[r])(e = $.toValue(e), t = xr(t), i, a);
    return i.length && (w[n >> 2] = $.toHandle(i)), s;
  }, pe = () => {
    if (typeof globalThis == "object") return globalThis;
    function r(e) {
      e.$$$embind_global$$$ = e;
      var t = typeof $$$embind_global$$$ == "object" && e.$$$embind_global$$$ == e;
      return t || delete e.$$$embind_global$$$, t;
    }
    if (typeof $$$embind_global$$$ == "object" || (typeof zr == "object" && r(zr) ? $$$embind_global$$$ = zr : typeof self == "object" && r(self) && ($$$embind_global$$$ = self), typeof $$$embind_global$$$ == "object")) return $$$embind_global$$$;
    throw Error("unable to get global object.");
  }, Zt = (r) => r === 0 ? $.toHandle(pe()) : (r = xr(r), $.toHandle(pe()[r])), Kt = (r) => {
    var e = Or.length;
    return Or.push(r), e;
  }, Qt = (r, e) => {
    for (var t = new Array(r), n = 0; n < r; ++n) t[n] = jr(w[e + 4 * n >> 2], "parameter " + n);
    return t;
  }, rn = (r, e) => {
    var t = Qt(r, e), n = t.shift();
    r--;
    var a = new Array(r);
    return Kt((i, s, u, d) => {
      for (var c = 0, m = 0; m < r; ++m) a[m] = t[m].readValueFromPointer(d + c), c += t[m].argPackAdvance;
      var h = i[s].apply(i, a);
      for (m = 0; m < r; ++m) t[m].deleteObject && t[m].deleteObject(a[m]);
      return n.toWireType(u, h);
    });
  }, en = (r, e) => (r = $.toValue(r), e = $.toValue(e), $.toHandle(r[e])), tn = (r) => {
    r > 4 && (W.get(r).refcount += 1);
  }, nn = () => $.toHandle([]), on = (r) => $.toHandle(xr(r)), an = (r) => {
    var e = $.toValue(r);
    Tr(e), Mr(r);
  }, sn = (r, e, t) => {
    r = $.toValue(r), e = $.toValue(e), t = $.toValue(t), r[e] = t;
  }, un = (r, e) => {
    var t = (r = jr(r, "_emval_take_value")).readValueFromPointer(e);
    return $.toHandle(t);
  }, ln = () => {
    Q("");
  }, dn = (r, e, t) => C.copyWithin(r, e, e + t), cn = () => 2147483648, fn = (r) => {
    var e = (r - fr.buffer.byteLength + 65535) / 65536;
    try {
      return fr.grow(e), Jr(), 1;
    } catch {
    }
  }, mn = (r) => {
    var e = C.length;
    r >>>= 0;
    var t = cn();
    if (r > t) return !1;
    for (var n = (u, d) => u + (d - u % d) % d, a = 1; a <= 4; a *= 2) {
      var i = e * (1 + 0.2 / a);
      i = Math.min(i, r + 100663296);
      var s = Math.min(t, n(Math.max(r, i), 65536));
      if (fn(s)) return !0;
    }
    return !1;
  }, Rr = {}, hn = () => Ir || "./this.program", dr = () => {
    if (!dr.strings) {
      var r = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", _: hn() };
      for (var e in Rr) Rr[e] === void 0 ? delete r[e] : r[e] = Rr[e];
      var t = [];
      for (var e in r) t.push(`${e}=${r[e]}`);
      dr.strings = t;
    }
    return dr.strings;
  }, pn = (r, e) => {
    for (var t = 0; t < r.length; ++t) P[e++ >> 0] = r.charCodeAt(t);
    P[e >> 0] = 0;
  }, vn = (r, e) => {
    var t = 0;
    return dr().forEach((n, a) => {
      var i = e + t;
      w[r + 4 * a >> 2] = i, pn(n, i), t += n.length + 1;
    }), 0;
  }, yn = (r, e) => {
    var t = dr();
    w[r >> 2] = t.length;
    var n = 0;
    return t.forEach((a) => n += a.length + 1), w[e >> 2] = n, 0;
  }, gn = 0, wn = () => Ue || gn > 0, _n = (r) => {
    wn() || (l.onExit && l.onExit(r), kr = !0), Vr(r, new Le(r));
  }, En = (r, e) => {
    _n(r);
  };
  function bn(r) {
    try {
      var e = F.getStreamFromFD(r);
      return o.close(e), 0;
    } catch (t) {
      if (o === void 0 || t.name !== "ErrnoError") throw t;
      return t.errno;
    }
  }
  var kn = (r, e, t, n) => {
    for (var a = 0, i = 0; i < t; i++) {
      var s = w[e >> 2], u = w[e + 4 >> 2];
      e += 8;
      var d = o.read(r, P, s, u, n);
      if (d < 0) return -1;
      if (a += d, d < u) break;
    }
    return a;
  };
  function Fn(r, e, t, n) {
    try {
      var a = F.getStreamFromFD(r), i = kn(a, e, t);
      return w[n >> 2] = i, 0;
    } catch (s) {
      if (o === void 0 || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var An = (r, e) => e + 2097152 >>> 0 < 4194305 - !!r ? (r >>> 0) + 4294967296 * e : NaN;
  function Dn(r, e, t, n, a) {
    var i = An(e, t);
    try {
      if (isNaN(i)) return 61;
      var s = F.getStreamFromFD(r);
      return o.llseek(s, i, n), S = [s.position >>> 0, (E = s.position, +Math.abs(E) >= 1 ? E > 0 ? +Math.floor(E / 4294967296) >>> 0 : ~~+Math.ceil((E - +(~~E >>> 0)) / 4294967296) >>> 0 : 0)], y[a >> 2] = S[0], y[a + 4 >> 2] = S[1], s.getdents && i === 0 && n === 0 && (s.getdents = null), 0;
    } catch (u) {
      if (o === void 0 || u.name !== "ErrnoError") throw u;
      return u.errno;
    }
  }
  var Pn = (r, e, t, n) => {
    for (var a = 0, i = 0; i < t; i++) {
      var s = w[e >> 2], u = w[e + 4 >> 2];
      e += 8;
      var d = o.write(r, P, s, u, n);
      if (d < 0) return -1;
      a += d;
    }
    return a;
  };
  function Sn(r, e, t, n) {
    try {
      var a = F.getStreamFromFD(r), i = Pn(a, e, t);
      return w[n >> 2] = i, 0;
    } catch (s) {
      if (o === void 0 || s.name !== "ErrnoError") throw s;
      return s.errno;
    }
  }
  var nr, yr = (r) => r % 4 == 0 && (r % 100 != 0 || r % 400 == 0), $n = (r, e) => {
    for (var t = 0, n = 0; n <= e; t += r[n++]) ;
    return t;
  }, ve = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], ye = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31], Tn = (r, e) => {
    for (var t = new Date(r.getTime()); e > 0; ) {
      var n = yr(t.getFullYear()), a = t.getMonth(), i = (n ? ve : ye)[a];
      if (!(e > i - t.getDate())) return t.setDate(t.getDate() + e), t;
      e -= i - t.getDate() + 1, t.setDate(1), a < 11 ? t.setMonth(a + 1) : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
    }
    return t;
  }, Cn = (r, e) => {
    P.set(r, e);
  }, Mn = (r, e, t, n) => {
    var a = w[n + 40 >> 2], i = { tm_sec: y[n >> 2], tm_min: y[n + 4 >> 2], tm_hour: y[n + 8 >> 2], tm_mday: y[n + 12 >> 2], tm_mon: y[n + 16 >> 2], tm_year: y[n + 20 >> 2], tm_wday: y[n + 24 >> 2], tm_yday: y[n + 28 >> 2], tm_isdst: y[n + 32 >> 2], tm_gmtoff: y[n + 36 >> 2], tm_zone: a ? er(a) : "" }, s = er(t), u = { "%c": "%a %b %d %H:%M:%S %Y", "%D": "%m/%d/%y", "%F": "%Y-%m-%d", "%h": "%b", "%r": "%I:%M:%S %p", "%R": "%H:%M", "%T": "%H:%M:%S", "%x": "%m/%d/%y", "%X": "%H:%M:%S", "%Ec": "%c", "%EC": "%C", "%Ex": "%m/%d/%y", "%EX": "%H:%M:%S", "%Ey": "%y", "%EY": "%Y", "%Od": "%d", "%Oe": "%e", "%OH": "%H", "%OI": "%I", "%Om": "%m", "%OM": "%M", "%OS": "%S", "%Ou": "%u", "%OU": "%U", "%OV": "%V", "%Ow": "%w", "%OW": "%W", "%Oy": "%y" };
    for (var d in u) s = s.replace(new RegExp(d, "g"), u[d]);
    var c = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    function h(f, v, j) {
      for (var x = typeof f == "number" ? f.toString() : f || ""; x.length < v; ) x = j[0] + x;
      return x;
    }
    function p(f, v) {
      return h(f, v, "0");
    }
    function _(f, v) {
      function j(Er) {
        return Er < 0 ? -1 : Er > 0 ? 1 : 0;
      }
      var x;
      return (x = j(f.getFullYear() - v.getFullYear())) === 0 && (x = j(f.getMonth() - v.getMonth())) === 0 && (x = j(f.getDate() - v.getDate())), x;
    }
    function k(f) {
      switch (f.getDay()) {
        case 0:
          return new Date(f.getFullYear() - 1, 11, 29);
        case 1:
          return f;
        case 2:
          return new Date(f.getFullYear(), 0, 3);
        case 3:
          return new Date(f.getFullYear(), 0, 2);
        case 4:
          return new Date(f.getFullYear(), 0, 1);
        case 5:
          return new Date(f.getFullYear() - 1, 11, 31);
        case 6:
          return new Date(f.getFullYear() - 1, 11, 30);
      }
    }
    function T(f) {
      var v = Tn(new Date(f.tm_year + 1900, 0, 1), f.tm_yday), j = new Date(v.getFullYear(), 0, 4), x = new Date(v.getFullYear() + 1, 0, 4), Er = k(j), Kn = k(x);
      return _(Er, v) <= 0 ? _(Kn, v) <= 0 ? v.getFullYear() + 1 : v.getFullYear() : v.getFullYear() - 1;
    }
    var D = { "%a": (f) => c[f.tm_wday].substring(0, 3), "%A": (f) => c[f.tm_wday], "%b": (f) => m[f.tm_mon].substring(0, 3), "%B": (f) => m[f.tm_mon], "%C": (f) => p((f.tm_year + 1900) / 100 | 0, 2), "%d": (f) => p(f.tm_mday, 2), "%e": (f) => h(f.tm_mday, 2, " "), "%g": (f) => T(f).toString().substring(2), "%G": (f) => T(f), "%H": (f) => p(f.tm_hour, 2), "%I": (f) => {
      var v = f.tm_hour;
      return v == 0 ? v = 12 : v > 12 && (v -= 12), p(v, 2);
    }, "%j": (f) => p(f.tm_mday + $n(yr(f.tm_year + 1900) ? ve : ye, f.tm_mon - 1), 3), "%m": (f) => p(f.tm_mon + 1, 2), "%M": (f) => p(f.tm_min, 2), "%n": () => `
`, "%p": (f) => f.tm_hour >= 0 && f.tm_hour < 12 ? "AM" : "PM", "%S": (f) => p(f.tm_sec, 2), "%t": () => "	", "%u": (f) => f.tm_wday || 7, "%U": (f) => {
      var v = f.tm_yday + 7 - f.tm_wday;
      return p(Math.floor(v / 7), 2);
    }, "%V": (f) => {
      var v = Math.floor((f.tm_yday + 7 - (f.tm_wday + 6) % 7) / 7);
      if ((f.tm_wday + 371 - f.tm_yday - 2) % 7 <= 2 && v++, v) {
        if (v == 53) {
          var j = (f.tm_wday + 371 - f.tm_yday) % 7;
          j == 4 || j == 3 && yr(f.tm_year) || (v = 1);
        }
      } else {
        v = 52;
        var x = (f.tm_wday + 7 - f.tm_yday - 1) % 7;
        (x == 4 || x == 5 && yr(f.tm_year % 400 - 1)) && v++;
      }
      return p(v, 2);
    }, "%w": (f) => f.tm_wday, "%W": (f) => {
      var v = f.tm_yday + 7 - (f.tm_wday + 6) % 7;
      return p(Math.floor(v / 7), 2);
    }, "%y": (f) => (f.tm_year + 1900).toString().substring(2), "%Y": (f) => f.tm_year + 1900, "%z": (f) => {
      var v = f.tm_gmtoff, j = v >= 0;
      return v = (v = Math.abs(v) / 60) / 60 * 100 + v % 60, (j ? "+" : "-") + ("0000" + v).slice(-4);
    }, "%Z": (f) => f.tm_zone, "%%": () => "%" };
    for (var d in s = s.replace(/%%/g, "\0\0"), D) s.includes(d) && (s = s.replace(new RegExp(d, "g"), D[d](i)));
    var I = Sr(s = s.replace(/\0\0/g, "%"), !1);
    return I.length > e ? 0 : (Cn(I, r), I.length - 1);
  }, jn = (r, e, t, n, a) => Mn(r, e, t, n), ge = (r, e) => {
    r < 128 ? e.push(r) : e.push(r % 128 | 128, r >> 7);
  }, xn = (r) => {
    for (var e = { i: "i32", j: "i64", f: "f32", d: "f64", e: "externref", p: "i32" }, t = { parameters: [], results: r[0] == "v" ? [] : [e[r[0]]] }, n = 1; n < r.length; ++n) t.parameters.push(e[r[n]]);
    return t;
  }, On = (r, e) => {
    var t = r.slice(0, 1), n = r.slice(1), a = { i: 127, p: 127, j: 126, f: 125, d: 124, e: 111 };
    e.push(96), ge(n.length, e);
    for (var i = 0; i < n.length; ++i) e.push(a[n[i]]);
    t == "v" ? e.push(0) : e.push(1, a[t]);
  }, Rn = (r, e) => {
    if (typeof WebAssembly.Function == "function") return new WebAssembly.Function(xn(e), r);
    var t = [1];
    On(e, t);
    var n = [0, 97, 115, 109, 1, 0, 0, 0, 1];
    ge(t.length, n), n.push.apply(n, t), n.push(2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0, 0);
    var a = new WebAssembly.Module(new Uint8Array(n));
    return new WebAssembly.Instance(a, { e: { f: r } }).exports.f;
  }, Wn = (r, e) => {
    if (nr) for (var t = r; t < r + e; t++) {
      var n = R(t);
      n && nr.set(n, t);
    }
  }, zn = (r) => (nr || (nr = /* @__PURE__ */ new WeakMap(), Wn(0, K.length)), nr.get(r) || 0), we = [], Nn = () => {
    if (we.length) return we.pop();
    try {
      K.grow(1);
    } catch (r) {
      throw r instanceof RangeError ? "Unable to grow wasm table. Set ALLOW_TABLE_GROWTH." : r;
    }
    return K.length - 1;
  }, _e = (r, e) => {
    K.set(r, e), ur[r] = K.get(r);
  }, Bn = (r, e) => {
    var t = zn(r);
    if (t) return t;
    var n = Nn();
    try {
      _e(n, r);
    } catch (i) {
      if (!(i instanceof TypeError)) throw i;
      var a = Rn(r, e);
      _e(n, a);
    }
    return nr.set(r, n), n;
  }, Ee = function(r, e, t, n) {
    r || (r = this), this.parent = r, this.mount = r.mount, this.mounted = null, this.id = o.nextInode++, this.name = e, this.mode = t, this.node_ops = {}, this.stream_ops = {}, this.rdev = n;
  }, gr = 365, wr = 146;
  Object.defineProperties(Ee.prototype, { read: { get: function() {
    return (this.mode & gr) === gr;
  }, set: function(r) {
    r ? this.mode |= gr : this.mode &= ~gr;
  } }, write: { get: function() {
    return (this.mode & wr) === wr;
  }, set: function(r) {
    r ? this.mode |= wr : this.mode &= ~wr;
  } }, isFolder: { get: function() {
    return o.isDir(this.mode);
  } }, isDevice: { get: function() {
    return o.isChrdev(this.mode);
  } } }), o.FSNode = Ee, o.createPreloadedFile = Ke, o.staticInit(), l.FS_createPath = o.createPath, l.FS_createDataFile = o.createDataFile, l.FS_createPreloadedFile = o.createPreloadedFile, l.FS_unlink = o.unlink, l.FS_createLazyFile = o.createLazyFile, l.FS_createDevice = o.createDevice, ie = l.InternalError = class extends Error {
    constructor(r) {
      super(r), this.name = "InternalError";
    }
  }, at(), ue = l.BindingError = class extends Error {
    constructor(r) {
      super(r), this.name = "BindingError";
    }
  }, ut(), dt(), fe = l.UnboundTypeError = Dt(Error, "UnboundTypeError");
  var Ln = { m: Ie, x: rt, N: et, O: tt, V: nt, G: ot, R: st, Q: ct, z: mt, r: $t, d: Ct, b: Mt, y: Ot, p: Ut, W: Ht, j: It, S: Vt, U: Yt, I: qt, Y: Xt, A: Jt, a: Mr, Z: Zt, B: rn, l: en, g: tn, C: nn, h: on, s: an, X: sn, k: un, q: ln, P: dn, J: mn, K: vn, L: yn, T: En, v: bn, M: Fn, F: Dn, w: Sn, n: Un, i: Vn, o: qn, t: Xn, E: Jn, u: Yn, c: Hn, D: Zn, e: Gn, f: In, H: jn }, A = Be(), H = l._free = (r) => (H = l._free = A.ba)(r), Wr = l._malloc = (r) => (Wr = l._malloc = A.ca)(r), be = () => (be = A.da)(), ke = (r) => (ke = A.ea)(r);
  l.__embind_initialize_bindings = () => (l.__embind_initialize_bindings = A.fa)();
  var _r, z = (r, e) => (z = A.ga)(r, e), N = () => (N = A.ha)(), B = (r) => (B = A.ia)(r), Fe = (r) => (Fe = A.ja)(r);
  function Un(r, e) {
    var t = N();
    try {
      return R(r)(e);
    } catch (n) {
      if (B(t), n !== n + 0) throw n;
      z(1, 0);
    }
  }
  function Hn(r, e) {
    var t = N();
    try {
      R(r)(e);
    } catch (n) {
      if (B(t), n !== n + 0) throw n;
      z(1, 0);
    }
  }
  function In(r, e, t, n) {
    var a = N();
    try {
      R(r)(e, t, n);
    } catch (i) {
      if (B(a), i !== i + 0) throw i;
      z(1, 0);
    }
  }
  function Vn(r, e, t) {
    var n = N();
    try {
      return R(r)(e, t);
    } catch (a) {
      if (B(n), a !== a + 0) throw a;
      z(1, 0);
    }
  }
  function Yn(r) {
    var e = N();
    try {
      R(r)();
    } catch (t) {
      if (B(e), t !== t + 0) throw t;
      z(1, 0);
    }
  }
  function qn(r, e, t, n) {
    var a = N();
    try {
      return R(r)(e, t, n);
    } catch (i) {
      if (B(a), i !== i + 0) throw i;
      z(1, 0);
    }
  }
  function Xn(r, e, t, n, a) {
    var i = N();
    try {
      return R(r)(e, t, n, a);
    } catch (s) {
      if (B(i), s !== s + 0) throw s;
      z(1, 0);
    }
  }
  function Gn(r, e, t) {
    var n = N();
    try {
      R(r)(e, t);
    } catch (a) {
      if (B(n), a !== a + 0) throw a;
      z(1, 0);
    }
  }
  function Jn(r, e, t, n, a, i, s, u, d, c) {
    var m = N();
    try {
      return R(r)(e, t, n, a, i, s, u, d, c);
    } catch (h) {
      if (B(m), h !== h + 0) throw h;
      z(1, 0);
    }
  }
  function Zn(r, e, t, n) {
    var a = N();
    try {
      R(r)(e, t, n);
    } catch (i) {
      if (B(a), i !== i + 0) throw i;
      z(1, 0);
    }
  }
  function Ae() {
    function r() {
      _r || (_r = !0, l.calledRun = !0, kr || (Me(), Lr(l), l.onRuntimeInitialized && l.onRuntimeInitialized(), je()));
    }
    G > 0 || (Ce(), G > 0 || (l.setStatus ? (l.setStatus("Running..."), setTimeout(function() {
      setTimeout(function() {
        l.setStatus("");
      }, 1), r();
    }, 1)) : r()));
  }
  if (l.dynCall_viji = (r, e, t, n, a) => (l.dynCall_viji = A.ka)(r, e, t, n, a), l.dynCall_ji = (r, e) => (l.dynCall_ji = A.la)(r, e), l.dynCall_jiji = (r, e, t, n, a) => (l.dynCall_jiji = A.ma)(r, e, t, n, a), l.dynCall_viijii = (r, e, t, n, a, i, s) => (l.dynCall_viijii = A.na)(r, e, t, n, a, i, s), l.dynCall_iiiiij = (r, e, t, n, a, i, s) => (l.dynCall_iiiiij = A.oa)(r, e, t, n, a, i, s), l.dynCall_iiiiijj = (r, e, t, n, a, i, s, u, d) => (l.dynCall_iiiiijj = A.pa)(r, e, t, n, a, i, s, u, d), l.dynCall_iiiiiijj = (r, e, t, n, a, i, s, u, d, c) => (l.dynCall_iiiiiijj = A.qa)(r, e, t, n, a, i, s, u, d, c), l.___emscripten_embedded_file_data = 1273112, l.addRunDependency = hr, l.removeRunDependency = ir, l.FS_createPath = o.createPath, l.FS_createLazyFile = o.createLazyFile, l.FS_createDevice = o.createDevice, l.addFunction = Bn, l.UTF8ToString = er, l.FS_createPreloadedFile = o.createPreloadedFile, l.FS_createDataFile = o.createDataFile, l.FS_unlink = o.unlink, ar = function r() {
    _r || Ae(), _r || (ar = r);
  }, l.preInit) for (typeof l.preInit == "function" && (l.preInit = [l.preInit]); l.preInit.length > 0; ) l.preInit.pop()();
  return Ae(), Br.ready;
}, De.exports = Pe;
const ro = Qn(Se.exports), no = Object.freeze(Object.defineProperty({ __proto__: null, default: ro }, Symbol.toStringTag, { value: "Module" }));
export {
  no as l
};
//# sourceMappingURL=lyr3DWorker-_WlRr5xf.js.map
