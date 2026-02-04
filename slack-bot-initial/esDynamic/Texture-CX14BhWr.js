import { af as z, s as p, C as Y } from "./main-3gzXighg.js";
import { C as x, c as m, P as i, B as M, G as u, M as I, U as G, L as R, D as k, V as C } from "./enums-Do5C4ZjN.js";
const K = () => Y.getLogger("esri.views.webgl.checkWebGLError");
function q(t, e) {
  switch (e) {
    case t.INVALID_ENUM:
      return "Invalid Enum. An unacceptable value has been specified for an enumerated argument.";
    case t.INVALID_VALUE:
      return "Invalid Value. A numeric argument is out of range.";
    case t.INVALID_OPERATION:
      return "Invalid Operation. The specified command is not allowed for the current state.";
    case t.INVALID_FRAMEBUFFER_OPERATION:
      return "Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.";
    case t.OUT_OF_MEMORY:
      return "Out of memory. Not enough memory is left to execute the command.";
    case t.CONTEXT_LOST_WEBGL:
      return "WebGL context has been lost";
    default:
      return "Unknown error";
  }
}
const H = !!z("enable-feature:webgl-debug");
function $() {
  return H;
}
function ce() {
  return H;
}
function N(t) {
  if ($()) {
    const e = t.getError();
    if (e) {
      const r = q(t, e), n = new Error().stack;
      K().error(new p("webgl-error", "WebGL error occurred", { message: r, stack: n }));
    }
  }
}
var O;
(function(t) {
  t[t.Texture = 0] = "Texture", t[t.RenderBuffer = 1] = "RenderBuffer";
})(O || (O = {}));
function j(t) {
  switch (t) {
    case x.BYTE:
    case x.UNSIGNED_BYTE:
      return 1;
    case x.SHORT:
    case x.UNSIGNED_SHORT:
      return 2;
    case x.FLOAT:
    case x.INT:
    case x.UNSIGNED_INT:
      return 4;
  }
}
function Z(t) {
  const e = t.gl;
  switch (e.getError()) {
    case e.NO_ERROR:
      return null;
    case e.INVALID_ENUM:
      return "An unacceptable value has been specified for an enumerated argument";
    case e.INVALID_VALUE:
      return "An unacceptable value has been specified for an argument";
    case e.INVALID_OPERATION:
      return "The specified command is not allowed for the current state";
    case e.INVALID_FRAMEBUFFER_OPERATION:
      return "The currently bound framebuffer is not framebuffer complete";
    case e.OUT_OF_MEMORY:
      return "Not enough memory is left to execute the command";
    case e.CONTEXT_LOST_WEBGL:
      return "WebGL context is lost";
  }
  return "Unknown error";
}
function le(t, e, r, n, s = 0) {
  const c = t.gl;
  t.bindBuffer(r);
  for (const a of n) {
    const h = e.get(a.name);
    if (h === void 0) {
      console.warn(`There is no location for vertex attribute '${a.name}' defined.`);
      continue;
    }
    const l = s * a.stride;
    if (a.count <= 4) c.vertexAttribPointer(h, a.count, a.type, a.normalized, a.stride, a.offset + l), c.enableVertexAttribArray(h), a.divisor > 0 && t.gl.vertexAttribDivisor(h, a.divisor);
    else if (a.count === 9) for (let o = 0; o < 3; o++) c.vertexAttribPointer(h + o, 3, a.type, a.normalized, a.stride, a.offset + 12 * o + l), c.enableVertexAttribArray(h + o), a.divisor > 0 && t.gl.vertexAttribDivisor(h + o, a.divisor);
    else if (a.count === 16) for (let o = 0; o < 4; o++) c.vertexAttribPointer(h + o, 4, a.type, a.normalized, a.stride, a.offset + 16 * o + l), c.enableVertexAttribArray(h + o), a.divisor > 0 && t.gl?.vertexAttribDivisor(h + o, a.divisor);
    else console.error("Unsupported vertex attribute element count: " + a.count);
    if ($()) {
      const o = Z(t), d = j(a.type), _ = a.offset, E = Math.round(d / _) !== d / _ ? `. Offset not a multiple of stride. DataType requires ${d} bytes, but descriptor has an offset of ${_}` : "";
      o && console.error(`Unable to bind vertex attribute "${a.name}" with baseInstanceOffset ${l}${E}:`, o, a);
    }
  }
}
function J(t) {
  switch (t) {
    case u.ALPHA:
    case u.LUMINANCE:
    case u.RED:
    case u.RED_INTEGER:
    case i.R8:
    case i.R8I:
    case i.R8UI:
    case i.R8_SNORM:
    case M.STENCIL_INDEX8:
      return 1;
    case u.LUMINANCE_ALPHA:
    case u.RG:
    case u.RG_INTEGER:
    case i.RGBA4:
    case i.R16F:
    case i.R16I:
    case i.R16UI:
    case i.RG8:
    case i.RG8I:
    case i.RG8UI:
    case i.RG8_SNORM:
    case i.RGB565:
    case i.RGB5_A1:
    case M.DEPTH_COMPONENT16:
      return 2;
    case u.DEPTH_COMPONENT:
    case u.RGB:
    case u.RGB_INTEGER:
    case i.RGB8:
    case i.RGB8I:
    case i.RGB8UI:
    case i.RGB8_SNORM:
    case i.SRGB8:
    case M.DEPTH_COMPONENT24:
      return 3;
    case u.DEPTH_STENCIL:
    case u.DEPTH24_STENCIL8:
    case u.RGBA:
    case u.RGBA_INTEGER:
    case i.RGBA8:
    case i.R32F:
    case i.R11F_G11F_B10F:
    case i.RG16F:
    case i.R32I:
    case i.R32UI:
    case i.RG16I:
    case i.RG16UI:
    case i.RGBA8I:
    case i.RGBA8UI:
    case i.RGBA8_SNORM:
    case i.SRGB8_ALPHA8:
    case i.RGB9_E5:
    case i.RGB10_A2UI:
    case i.RGB10_A2:
    case M.DEPTH_STENCIL:
    case M.DEPTH_COMPONENT32F:
    case M.DEPTH24_STENCIL8:
      return 4;
    case M.DEPTH32F_STENCIL8:
      return 5;
    case i.RGB16F:
    case i.RGB16I:
    case i.RGB16UI:
      return 6;
    case i.RG32F:
    case i.RG32I:
    case i.RG32UI:
    case i.RGBA16F:
    case i.RGBA16I:
    case i.RGBA16UI:
      return 8;
    case i.RGB32F:
    case i.RGB32I:
    case i.RGB32UI:
      return 12;
    case i.RGBA32F:
    case i.RGBA32I:
    case i.RGBA32UI:
      return 16;
    case m.COMPRESSED_RGB_S3TC_DXT1_EXT:
    case m.COMPRESSED_RGBA_S3TC_DXT1_EXT:
      return 0.5;
    case m.COMPRESSED_RGBA_S3TC_DXT3_EXT:
    case m.COMPRESSED_RGBA_S3TC_DXT5_EXT:
      return 1;
    case m.COMPRESSED_R11_EAC:
    case m.COMPRESSED_SIGNED_R11_EAC:
    case m.COMPRESSED_RGB8_ETC2:
    case m.COMPRESSED_SRGB8_ETC2:
    case m.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
    case m.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
      return 0.5;
    case m.COMPRESSED_RG11_EAC:
    case m.COMPRESSED_SIGNED_RG11_EAC:
    case m.COMPRESSED_RGBA8_ETC2_EAC:
    case m.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
      return 1;
  }
  return 0;
}
class Q {
  constructor(e = 0, r = e) {
    this.width = e, this.height = r, this.target = I.TEXTURE_2D, this.pixelFormat = u.RGBA, this.dataType = G.UNSIGNED_BYTE, this.samplingMode = R.LINEAR, this.wrapMode = k.REPEAT, this.maxAnisotropy = 1, this.flipped = !1, this.hasMipmap = !1, this.isOpaque = !1, this.unpackAlignment = 4, this.preMultiplyAlpha = !1, this.depth = 1, this.isImmutable = !1;
  }
}
function ee(t) {
  return t.width <= 0 || t.height <= 0 ? 0 : Math.round(t.width * t.height * (t.hasMipmap ? 4 / 3 : 1) * (t.internalFormat == null ? 4 : J(t.internalFormat)));
}
class B extends Q {
  constructor(e, r) {
    switch (super(), this.context = e, Object.assign(this, r), this.internalFormat) {
      case i.R16F:
      case i.R16I:
      case i.R16UI:
      case i.R32F:
      case i.R32I:
      case i.R32UI:
      case i.R8_SNORM:
      case i.R8:
      case i.R8I:
      case i.R8UI:
        this.pixelFormat = u.RED;
    }
  }
  static validate(e, r) {
    return new B(e, r);
  }
}
const F = 4;
let te = class g {
  constructor(e, r = null, n = null) {
    if (this.type = O.Texture, this._glName = null, this._samplingModeDirty = !1, this._wrapModeDirty = !1, this._wasImmutablyAllocated = !1, "context" in e) this._descriptor = e, n = r;
    else {
      const s = B.validate(e, r);
      if (!s) throw new p("Texture descriptor invalid");
      this._descriptor = s;
    }
    this._descriptor.target === I.TEXTURE_CUBE_MAP ? this._setDataCubeMap(n) : this.setData(n);
  }
  get glName() {
    return this._glName;
  }
  get descriptor() {
    return this._descriptor;
  }
  get usedMemory() {
    return ee(this._descriptor);
  }
  get isDirty() {
    return this._samplingModeDirty || this._wrapModeDirty;
  }
  dispose() {
    this._glName && this._descriptor.context.instanceCounter.decrement(C.Texture, this), this._descriptor.context.gl && this._glName && (this._descriptor.context.unbindTexture(this), this._descriptor.context.gl.deleteTexture(this._glName), this._glName = null);
  }
  release() {
    this.dispose();
  }
  resize(e, r) {
    const n = this._descriptor;
    if (n.width !== e || n.height !== r) {
      if (this._wasImmutablyAllocated) throw new p("Immutable textures can't be resized!");
      n.width = e, n.height = r, this._descriptor.target === I.TEXTURE_CUBE_MAP ? this._setDataCubeMap(null) : this.setData(null);
    }
  }
  _setDataCubeMap(e = null) {
    for (let r = I.TEXTURE_CUBE_MAP_POSITIVE_X; r <= I.TEXTURE_CUBE_MAP_NEGATIVE_Z; r++) this._setData(e, r);
  }
  setData(e) {
    this._setData(e);
  }
  _setData(e, r) {
    if (!this._descriptor.context?.gl) return;
    const n = this._descriptor.context.gl;
    N(n), this._glName || (this._glName = n.createTexture(), this._glName && this._descriptor.context.instanceCounter.increment(C.Texture, this)), e === void 0 && (e = null);
    const s = this._descriptor, c = r ?? s.target, a = S(c);
    e === null && (s.width = s.width || F, s.height = s.height || F, a && (s.depth = s.depth ?? 1));
    const h = this._descriptor.context.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), w(s), this._configurePixelStorage(), N(n);
    const l = this._deriveInternalFormat();
    if (v(e)) {
      let o = "width" in e ? e.width : e.codedWidth, d = "height" in e ? e.height : e.codedHeight;
      const _ = 1;
      e instanceof HTMLVideoElement && (o = e.videoWidth, d = e.videoHeight), s.width && s.height, a && s.depth, s.isImmutable && !this._wasImmutablyAllocated && this._texStorage(c, l, s.hasMipmap, o, d, _), this._texImage(c, 0, l, o, d, _, e), N(n), s.hasMipmap && this.generateMipmap(), s.width || (s.width = o), s.height || (s.height = d), a && !s.depth && (s.depth = _);
    } else {
      const { width: o, height: d, depth: _ } = s;
      if (o == null || d == null) throw new p("Width and height must be specified!");
      if (a && _ == null) throw new p("Depth must be specified!");
      if (s.isImmutable && !this._wasImmutablyAllocated && this._texStorage(c, l, s.hasMipmap, o, d, _), U(e)) {
        const E = e.levels, T = X(c, o, d, _), D = Math.min(T - 1, E.length - 1);
        n.texParameteri(s.target, this._descriptor.context.gl.TEXTURE_MAX_LEVEL, D);
        const f = l;
        if (!ie(f)) throw new p("Attempting to use compressed data with an uncompressed format!");
        this._forEachMipmapLevel((A, P, b, V) => {
          const W = E[Math.min(A, E.length - 1)];
          this._compressedTexImage(c, A, f, P, b, V, W);
        }, D);
      } else this._texImage(c, 0, l, o, d, _, e), N(n), s.hasMipmap && this.generateMipmap();
    }
    L(n, this._descriptor), y(n, this._descriptor), re(this._descriptor.context, this._descriptor), N(n), this._descriptor.context.bindTexture(h, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData(e, r, n, s, c, a, h = 0) {
    a || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const l = this._descriptor, o = this._deriveInternalFormat(), { context: d, pixelFormat: _, dataType: E, target: T, isImmutable: D } = l;
    if (D && !this._wasImmutablyAllocated) throw new p("Cannot update immutable texture before allocation!");
    const f = d.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES, !0);
    (r < 0 || n < 0 || s > l.width || c > l.height || r + s > l.width || n + c > l.height) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: A } = d;
    h && A.pixelStorei(A.UNPACK_SKIP_ROWS, h), v(a) ? A.texSubImage2D(T, e, r, n, s, c, _, E, a) : U(a) ? A.compressedTexSubImage2D(T, e, r, n, s, c, o, a.levels[e]) : A.texSubImage2D(T, e, r, n, s, c, _, E, a), h && A.pixelStorei(A.UNPACK_SKIP_ROWS, 0), d.bindTexture(f, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  updateData3D(e, r, n, s, c, a, h, l) {
    l || console.error("An attempt to use uninitialized data!"), this._glName || console.error("An attempt to update uninitialized texture!");
    const o = this._descriptor, d = this._deriveInternalFormat(), { context: _, pixelFormat: E, dataType: T, isImmutable: D, target: f } = o;
    if (D && !this._wasImmutablyAllocated) throw new p("Cannot update immutable texture before allocation!");
    S(f) || console.warn("Attempting to set 3D texture data on a non-3D texture");
    const A = _.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    _.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), (r < 0 || n < 0 || s < 0 || c > o.width || a > o.height || h > o.depth || r + c > o.width || n + a > o.height || s + h > o.depth) && console.error("An attempt to update out of bounds of the texture!"), this._configurePixelStorage();
    const { gl: P } = _;
    if (U(l)) l = l.levels[e], P.compressedTexSubImage3D(f, e, r, n, s, c, a, h, d, l);
    else {
      const b = l;
      P.texSubImage3D(f, e, r, n, s, c, a, h, E, T, b);
    }
    _.bindTexture(A, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  generateMipmap() {
    const e = this._descriptor;
    if (!e.hasMipmap) {
      if (this._wasImmutablyAllocated) throw new p("Cannot add mipmaps to immutable texture after allocation");
      e.hasMipmap = !0, this._samplingModeDirty = !0, w(e);
    }
    e.samplingMode === R.LINEAR ? (this._samplingModeDirty = !0, e.samplingMode = R.LINEAR_MIPMAP_NEAREST) : e.samplingMode === R.NEAREST && (this._samplingModeDirty = !0, e.samplingMode = R.NEAREST_MIPMAP_NEAREST);
    const r = this._descriptor.context.bindTexture(this, g.TEXTURE_UNIT_FOR_UPDATES);
    this._descriptor.context.setActiveTexture(g.TEXTURE_UNIT_FOR_UPDATES), this._descriptor.context.gl.generateMipmap(e.target), this._descriptor.context.bindTexture(r, g.TEXTURE_UNIT_FOR_UPDATES);
  }
  setSamplingMode(e) {
    e !== this._descriptor.samplingMode && (this._descriptor.samplingMode = e, this._samplingModeDirty = !0);
  }
  setWrapMode(e) {
    e !== this._descriptor.wrapMode && (this._descriptor.wrapMode = e, w(this._descriptor), this._wrapModeDirty = !0);
  }
  applyChanges() {
    const e = this._descriptor, r = e.context.gl;
    this._samplingModeDirty && (L(r, e), this._samplingModeDirty = !1), this._wrapModeDirty && (y(r, e), this._wrapModeDirty = !1);
  }
  _deriveInternalFormat() {
    if (this._descriptor.internalFormat != null) return this._descriptor.internalFormat === u.DEPTH_STENCIL && (this._descriptor.internalFormat = u.DEPTH24_STENCIL8), this._descriptor.internalFormat;
    switch (this._descriptor.dataType) {
      case G.FLOAT:
        switch (this._descriptor.pixelFormat) {
          case u.RGBA:
            return this._descriptor.internalFormat = i.RGBA32F;
          case u.RGB:
            return this._descriptor.internalFormat = i.RGB32F;
          default:
            throw new p("Unable to derive format");
        }
      case G.UNSIGNED_BYTE:
        switch (this._descriptor.pixelFormat) {
          case u.RGBA:
            return this._descriptor.internalFormat = i.RGBA8;
          case u.RGB:
            return this._descriptor.internalFormat = i.RGB8;
        }
    }
    return this._descriptor.internalFormat = this._descriptor.pixelFormat === u.DEPTH_STENCIL ? u.DEPTH24_STENCIL8 : this._descriptor.pixelFormat;
  }
  _configurePixelStorage() {
    const e = this._descriptor.context.gl, { unpackAlignment: r, flipped: n, preMultiplyAlpha: s } = this._descriptor;
    e.pixelStorei(e.UNPACK_ALIGNMENT, r), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, n ? 1 : 0), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, s ? 1 : 0);
  }
  _texStorage(e, r, n, s, c, a) {
    const { gl: h } = this._descriptor.context;
    if (!se(r)) throw new p("Immutable textures must have a sized internal format");
    if (!this._descriptor.isImmutable) return;
    const l = n ? X(e, s, c, a) : 1;
    if (S(e)) {
      if (a == null) throw new p("Missing depth dimension for 3D texture upload");
      h.texStorage3D(e, l, r, s, c, a);
    } else h.texStorage2D(e, l, r, s, c);
    this._wasImmutablyAllocated = !0;
  }
  _texImage(e, r, n, s, c, a, h) {
    const l = this._descriptor.context.gl, o = S(e), { isImmutable: d, pixelFormat: _, dataType: E } = this._descriptor;
    if (d) {
      if (h != null) {
        const T = h;
        if (o) {
          if (a == null) throw new p("Missing depth dimension for 3D texture upload");
          l.texSubImage3D(e, r, 0, 0, 0, s, c, a, _, E, T);
        } else l.texSubImage2D(e, r, 0, 0, s, c, _, E, T);
      }
    } else {
      const T = h;
      if (o) {
        if (a == null) throw new p("Missing depth dimension for 3D texture upload");
        l.texImage3D(e, r, n, s, c, a, 0, _, E, T);
      } else l.texImage2D(e, r, n, s, c, 0, _, E, T);
    }
  }
  _compressedTexImage(e, r, n, s, c, a, h) {
    const l = this._descriptor.context.gl, o = S(e);
    if (this._descriptor.isImmutable) {
      if (h != null) if (o) {
        if (a == null) throw new p("Missing depth dimension for 3D texture upload");
        l.compressedTexSubImage3D(e, r, 0, 0, 0, s, c, a, n, h);
      } else l.compressedTexSubImage2D(e, r, 0, 0, s, c, n, h);
    } else if (o) {
      if (a == null) throw new p("Missing depth dimension for 3D texture upload");
      l.compressedTexImage3D(e, r, n, s, c, a, 0, h);
    } else l.compressedTexImage2D(e, r, n, s, c, 0, h);
  }
  _forEachMipmapLevel(e, r = 1 / 0) {
    let { width: n, height: s, depth: c, hasMipmap: a, target: h } = this._descriptor;
    const l = h === I.TEXTURE_3D;
    if (n == null || s == null || l && c == null) throw new p("Missing texture dimensions for mipmap calculation");
    for (let o = 0; e(o, n, s, c), a && (n !== 1 || s !== 1 || l && c !== 1) && !(o >= r); ++o) n = Math.max(1, n >> 1), s = Math.max(1, s >> 1), l && (c = Math.max(1, c >> 1));
  }
};
function w(t) {
  (t.width != null && t.width < 0 || t.height != null && t.height < 0 || t.depth != null && t.depth < 0) && console.error("Negative dimension parameters are not allowed!");
}
function L(t, e) {
  let r = e.samplingMode, n = e.samplingMode;
  r === R.LINEAR_MIPMAP_NEAREST || r === R.LINEAR_MIPMAP_LINEAR ? (r = R.LINEAR, e.hasMipmap || (n = R.LINEAR)) : r !== R.NEAREST_MIPMAP_NEAREST && r !== R.NEAREST_MIPMAP_LINEAR || (r = R.NEAREST, e.hasMipmap || (n = R.NEAREST)), t.texParameteri(e.target, t.TEXTURE_MAG_FILTER, r), t.texParameteri(e.target, t.TEXTURE_MIN_FILTER, n);
}
function y(t, e) {
  typeof e.wrapMode == "number" ? (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode)) : (t.texParameteri(e.target, t.TEXTURE_WRAP_S, e.wrapMode.s), t.texParameteri(e.target, t.TEXTURE_WRAP_T, e.wrapMode.t));
}
function re(t, e) {
  const r = t.capabilities.textureFilterAnisotropic;
  r && t.gl.texParameterf(e.target, r.TEXTURE_MAX_ANISOTROPY, e.maxAnisotropy ?? 1);
}
function se(t) {
  return t in i;
}
function ie(t) {
  return t in m;
}
function U(t) {
  return t != null && "type" in t && t.type === "compressed";
}
function ae(t) {
  return t != null && "byteLength" in t;
}
function v(t) {
  return t != null && !U(t) && !ae(t);
}
function S(t) {
  return t === I.TEXTURE_3D || t === I.TEXTURE_2D_ARRAY;
}
function X(t, e, r, n = 1) {
  let s = Math.max(e, r);
  return t === I.TEXTURE_3D && (s = Math.max(s, n)), Math.round(Math.log(s) / Math.LN2) + 1;
}
te.TEXTURE_UNIT_FOR_UPDATES = 0;
export {
  le as E,
  J as a,
  O as b,
  $ as c,
  ce as d,
  Q as e,
  te as m,
  Z as o,
  j as s,
  N as u
};
//# sourceMappingURL=Texture-CX14BhWr.js.map
