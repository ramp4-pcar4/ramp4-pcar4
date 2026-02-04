import { ko as Re, kp as De, kq as Fe, C as X, h0 as K, v as V } from "./main-CmejC-so.js";
import { u as I, a as Me, b as N, m as y, c as ye, d as j } from "./Texture-DgcJZ8H_.js";
import { A as f, F as L, V as m, C as U, X as E, G as W, U as Ue, t as q, n as C, M as S, B as D, H as T } from "./enums-Do5C4ZjN.js";
const A = () => X.getLogger("esri.views.webgl.BufferObject");
let Ce = class F {
  static createIndex(e, r, t) {
    return new F(e, f.ELEMENT_ARRAY_BUFFER, r, t);
  }
  static createVertex(e, r, t) {
    return new F(e, f.ARRAY_BUFFER, r, t);
  }
  static createUniform(e, r, t) {
    return new F(e, f.UNIFORM_BUFFER, r, t);
  }
  static createPixelPack(e, r = L.STREAM_READ, t) {
    const n = new F(e, f.PIXEL_PACK_BUFFER, r);
    return t && n.setSize(t), n;
  }
  static createPixelUnpack(e, r = L.STREAM_DRAW, t) {
    return new F(e, f.PIXEL_UNPACK_BUFFER, r, t);
  }
  static createTransformFeedback(e, r = L.STATIC_DRAW, t) {
    const n = new F(e, f.TRANSFORM_FEEDBACK_BUFFER, r);
    return n.setSize(t), n;
  }
  constructor(e, r, t, n) {
    this._context = e, this.bufferType = r, this.usage = t, this._glName = null, this._size = -1, this._indexType = void 0, e.instanceCounter.increment(m.BufferObject, this), this._glName = this._context.gl.createBuffer(), I(this._context.gl), n && this.setData(n);
  }
  get glName() {
    return this._glName;
  }
  get size() {
    return this._size;
  }
  get indexType() {
    return this._indexType;
  }
  get usedMemory() {
    return this.bufferType === f.ELEMENT_ARRAY_BUFFER ? this._indexType === U.UNSIGNED_INT ? 4 * this._size : 2 * this._size : this._size;
  }
  get _isVAOAware() {
    return this.bufferType === f.ELEMENT_ARRAY_BUFFER || this.bufferType === f.ARRAY_BUFFER;
  }
  dispose() {
    this._context?.gl ? (this._glName && (this._context.gl.deleteBuffer(this._glName), this._glName = null), this._context.instanceCounter.decrement(m.BufferObject, this), this._context = null) : this._glName && A().warn("Leaked WebGL buffer object");
  }
  setSize(e, r = null) {
    if (e <= 0 && A().error("Buffer size needs to be positive!"), this.bufferType === f.ELEMENT_ARRAY_BUFFER && r != null) switch (this._indexType = r, r) {
      case U.UNSIGNED_SHORT:
        e *= 2;
        break;
      case U.UNSIGNED_INT:
        e *= 4;
    }
    this._setBufferData(e);
  }
  setData(e) {
    if (!e) return;
    let r = e.byteLength;
    this.bufferType === f.ELEMENT_ARRAY_BUFFER && (Re(e) && (r /= 2, this._indexType = U.UNSIGNED_SHORT), De(e) && (r /= 4, this._indexType = U.UNSIGNED_INT)), this._setBufferData(r, e);
  }
  _setBufferData(e, r = null) {
    this._size = e;
    const t = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const n = this._context.gl;
    r != null ? n.bufferData(this.bufferType, r, this.usage) : n.bufferData(this.bufferType, e, this.usage), I(n), this._isVAOAware && this._context.bindVAO(t);
  }
  setSubData(e, r, t, n) {
    if (!e) return;
    (r < 0 || r * e.BYTES_PER_ELEMENT >= this.usedMemory) && A().error("offset is out of range!"), t >= n && A().error("end must be bigger than start!"), (r + (n - t)) * e.BYTES_PER_ELEMENT > this.usedMemory && A().error("An attempt to write beyond the end of the buffer!");
    const o = this._context.getBoundVAO();
    this._isVAOAware && this._context.bindVAO(null), this._context.bindBuffer(this);
    const { gl: s } = this._context;
    s.bufferSubData(this.bufferType, r * e.BYTES_PER_ELEMENT, e, t, n - t), I(s), this._isVAOAware && this._context.bindVAO(o);
  }
  getSubData(e, r = 0, t, n) {
    if (t < 0 || n < 0) return void A().error("Problem getting subdata: offset and length were less than zero!");
    const o = ve(e) ? e.BYTES_PER_ELEMENT : 1;
    if (o * ((t ?? 0) + (n ?? 0)) > e.byteLength) return void A().error("Problem getting subdata: offset and length exceeded destination size!");
    r + o * (n ?? 0) > this.usedMemory && A().warn("Potential problem getting subdata: requested data exceeds buffer size!");
    const s = this._context.gl;
    this.bufferType === f.TRANSFORM_FEEDBACK_BUFFER ? (this._context.bindBuffer(this, f.TRANSFORM_FEEDBACK_BUFFER), s.getBufferSubData(f.TRANSFORM_FEEDBACK_BUFFER, r, e, t, n), this._context.unbindBuffer(f.TRANSFORM_FEEDBACK_BUFFER)) : (this._context.bindBuffer(this, f.COPY_READ_BUFFER), s.getBufferSubData(f.COPY_READ_BUFFER, r, e, t, n), this._context.unbindBuffer(f.COPY_READ_BUFFER));
  }
  async getSubDataAsync(e, r = 0, t, n) {
    await this._context.clientWaitAsync(), this.getSubData(e, r, t, n);
  }
};
function ve(i) {
  return Fe(i);
}
let ct = class {
  constructor(e, r, t = r) {
    this.internalFormat = e, this.width = r, this.height = t, this.multisampled = !1, this.samples = 1;
  }
};
function we(i) {
  return i.width <= 0 || i.height <= 0 || i.internalFormat == null ? 0 : i.width * i.height * Me(i.internalFormat);
}
let Ne = class {
  constructor(e, r) {
    this._context = e, this._descriptor = r, this.type = N.RenderBuffer, this._context.instanceCounter.increment(m.Renderbuffer, this);
    const t = this._context.gl;
    this.glName = t.createRenderbuffer(), this._context.bindRenderbuffer(this);
    const { width: n, height: o, internalFormat: s, multisampled: h } = r;
    h ? t.renderbufferStorageMultisample(t.RENDERBUFFER, this.samples, s, n, o) : t.renderbufferStorage(t.RENDERBUFFER, s, n, o);
  }
  get descriptor() {
    return this._descriptor;
  }
  get samples() {
    const e = this._descriptor.samples, r = this._context.parameters.maxSamples;
    return e ? Math.min(e, r) : r;
  }
  get usedMemory() {
    return we(this._descriptor);
  }
  resize(e, r) {
    const t = this._descriptor;
    if (t.width === e && t.height === r) return;
    t.width = e, t.height = r;
    const n = this._context.gl;
    this._context.bindRenderbuffer(this), t.multisampled ? n.renderbufferStorageMultisample(n.RENDERBUFFER, this.samples, t.internalFormat, t.width, t.height) : n.renderbufferStorage(n.RENDERBUFFER, t.internalFormat, t.width, t.height);
  }
  dispose() {
    this._context && (this._context.gl.deleteRenderbuffer(this.glName), this._context.instanceCounter.decrement(m.Renderbuffer, this), this._context = null);
  }
};
const Pe = () => X.getLogger("esri.views.webgl.FramebufferObject");
let Be = class v {
  constructor(e, r, t = null) {
    this._context = e, this._glName = null, this._colorAttachments = /* @__PURE__ */ new Map(), this._depthStencilBuffer = null, this._depthStencilTexture = null, this._initialized = !1, e.instanceCounter.increment(m.FramebufferObject, this);
    const n = O(r) ? r : new y(this._context, r);
    if (this._colorAttachments.set(E.COLOR_ATTACHMENT0, n), this._validateTextureDescriptor(n.descriptor), this._validateColorAttachmentPoint(E.COLOR_ATTACHMENT0), t != null) if (Oe(t)) this._context.capabilities.depthTexture || console.error("Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2"), this._depthStencilTexture = O(t) ? t : new y(this._context, t), this._validateTextureDescriptor(this._depthStencilTexture.descriptor);
    else {
      const o = Le(t) ? t : new Ne(this._context, t);
      this._depthStencilBuffer = o, this._validateRenderBufferDescriptor(o.descriptor);
    }
  }
  dispose() {
    if (this._colorAttachments.size === 0 && !this._glName) return;
    const e = this._context.getBoundFramebufferObject();
    this._colorAttachments.forEach((r, t) => this.detachColorTexture(t)?.dispose()), this.detachDepthStencilBuffer()?.dispose(), this.detachDepthStencilTexture()?.dispose(), this._glName && (this._context.gl.deleteFramebuffer(this._glName), this._glName = null), this._context.bindFramebuffer(e), this._context.instanceCounter.decrement(m.FramebufferObject, this);
  }
  get glName() {
    return this._glName;
  }
  get colorTexture() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0);
  }
  get depthStencil() {
    return this._depthStencilTexture || this._depthStencilBuffer;
  }
  get depthStencilTexture() {
    return this._depthStencilTexture;
  }
  get width() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0)?.descriptor?.width ?? 0;
  }
  get height() {
    return this._colorAttachments.get(E.COLOR_ATTACHMENT0)?.descriptor?.height ?? 0;
  }
  get usedMemory() {
    return [...this._colorAttachments].reduce((e, [r, t]) => e + t.usedMemory, this.depthStencil?.usedMemory ?? 0);
  }
  getColorTexture(e) {
    const r = this._colorAttachments.get(e);
    return r && O(r) ? r : null;
  }
  get colorAttachments() {
    return [...this._colorAttachments.keys()];
  }
  attachColorTexture(e, r = E.COLOR_ATTACHMENT0) {
    if (!e) return;
    this._validateColorAttachmentPoint(r);
    const t = e.descriptor;
    this._validateTextureDescriptor(t), this.detachColorTexture(r)?.dispose(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e.glName, r)), this._colorAttachments.set(r, e);
  }
  detachColorTexture(e = E.COLOR_ATTACHMENT0) {
    const r = this._colorAttachments.get(e);
    if (r) {
      if (this._initialized) {
        const t = this._context.getBoundFramebufferObject();
        this._context.bindFramebuffer(this), this._framebufferTexture2D(null, e), this._context.bindFramebuffer(t);
      }
      return this._colorAttachments.delete(e), r;
    }
  }
  setColorTextureTarget(e, r = E.COLOR_ATTACHMENT0) {
    const t = this._colorAttachments.get(r);
    t && this._framebufferTexture2D(t.glName, r, e);
  }
  attachDepthStencil(e) {
    if (e) switch (e.type) {
      case N.Texture:
        return this._attachDepthStencilTexture(e);
      case N.RenderBuffer:
        return this._attachDepthStencilBuffer(e);
    }
  }
  _attachDepthStencilTexture(e) {
    if (e == null) return;
    const r = e.descriptor;
    r.pixelFormat !== W.DEPTH_STENCIL && r.pixelFormat !== W.DEPTH24_STENCIL8 && console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"), r.dataType !== Ue.UNSIGNED_INT_24_8 && console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!"), this._context.capabilities.depthTexture || console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"), this._validateTextureDescriptor(r), this._disposeDepthStencilAttachments(), this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(e.glName, q)), this._depthStencilTexture?.dispose(), this._depthStencilTexture = e;
  }
  detachDepthStencilTexture() {
    const e = this._depthStencilTexture;
    return e && this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, q)), this._depthStencilTexture = null, e;
  }
  _attachDepthStencilBuffer(e) {
    if (e == null) return;
    const r = e.descriptor;
    if (this._validateRenderBufferDescriptor(r), this._disposeDepthStencilAttachments(), this._initialized) {
      this._context.bindFramebuffer(this);
      const t = this._context.gl, n = this._getGLAttachmentPoint(r);
      t.framebufferRenderbuffer(C.FRAMEBUFFER, n, t.RENDERBUFFER, e.glName);
    }
    this._depthStencilBuffer = e;
  }
  detachDepthStencilBuffer() {
    const e = this._depthStencilBuffer;
    if (e && this._initialized) {
      this._context.bindFramebuffer(this);
      const r = this._context.gl, t = this._getGLAttachmentPoint(e.descriptor);
      r.framebufferRenderbuffer(C.FRAMEBUFFER, t, r.RENDERBUFFER, null);
    }
    return this._depthStencilBuffer = null, e;
  }
  copyToTexture(e, r, t, n, o, s, h) {
    (e < 0 || r < 0 || o < 0 || s < 0) && console.error("Offsets cannot be negative!"), (t <= 0 || n <= 0) && console.error("Copy width and height must be greater than zero!");
    const a = h.descriptor;
    h.descriptor.target !== S.TEXTURE_2D && console.error("Texture target must be TEXTURE_2D!"), (a?.width == null || a?.height == null || e + t > this.width || r + n > this.height || o + t > a.width || s + n > a.height) && console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");
    const c = this._context, l = c.bindTexture(h, y.TEXTURE_UNIT_FOR_UPDATES);
    c.setActiveTexture(y.TEXTURE_UNIT_FOR_UPDATES), c.bindFramebuffer(this), c.gl.copyTexSubImage2D(S.TEXTURE_2D, 0, o, s, e, r, t, n), c.bindTexture(l, y.TEXTURE_UNIT_FOR_UPDATES);
  }
  readPixels(e, r, t, n, o, s, h) {
    (t <= 0 || n <= 0) && console.error("Copy width and height must be greater than zero!"), h || console.error("Target memory is not initialized!"), this._context.bindFramebuffer(this), this._context.gl.readPixels(e, r, t, n, o, s, h);
  }
  async readPixelsAsync(e, r, t, n, o, s, h) {
    const { gl: a } = this._context, c = Ce.createPixelPack(this._context, L.STREAM_READ, h.byteLength);
    this._context.bindBuffer(c), this._context.bindFramebuffer(this), a.readPixels(e, r, t, n, o, s, 0), this._context.unbindBuffer(f.PIXEL_PACK_BUFFER), await c.getSubDataAsync(h), c.dispose();
  }
  resize(e, r) {
    if (this.width === e && this.height === r) return;
    const t = { width: e, height: r };
    P(t, this._context.parameters.maxTextureSize), this._colorAttachments.forEach((n) => n.resize(t.width, t.height)), this._depthStencilTexture?.resize(t.width, t.height), this._initialized && (P(t, this._context.parameters.maxRenderbufferSize), this._depthStencilBuffer?.resize(t.width, t.height), this._context.getBoundFramebufferObject() === this && this._context.bindFramebuffer(null), this._initialized = !1);
  }
  initializeAndBind(e = C.FRAMEBUFFER) {
    const r = this._context.gl;
    if (this._initialized) return void r.bindFramebuffer(e, this.glName);
    this._glName && r.deleteFramebuffer(this._glName);
    const t = r.createFramebuffer();
    if (r.bindFramebuffer(e, t), this._colorAttachments.forEach((n, o) => this._framebufferTexture2D(n.glName, o, Q(n), e)), this._depthStencilBuffer) {
      const n = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
      r.framebufferRenderbuffer(e, n, r.RENDERBUFFER, this._depthStencilBuffer.glName);
    } else this._depthStencilTexture && this._framebufferTexture2D(this._depthStencilTexture.glName, r.DEPTH_STENCIL_ATTACHMENT, Q(this._depthStencilTexture), e);
    ye() && r.checkFramebufferStatus(e) !== r.FRAMEBUFFER_COMPLETE && console.error("Framebuffer is incomplete!"), this._glName = t, this._initialized = !0;
  }
  _framebufferTexture2D(e, r = E.COLOR_ATTACHMENT0, t = S.TEXTURE_2D, n = C.FRAMEBUFFER, o = 0) {
    this._context.gl.framebufferTexture2D(n, r, t, e, o);
  }
  _disposeDepthStencilAttachments() {
    const e = this._context.gl;
    if (this._depthStencilBuffer) {
      if (this._initialized) {
        this._context.bindFramebuffer(this);
        const r = this._getGLAttachmentPoint(this._depthStencilBuffer.descriptor);
        e.framebufferRenderbuffer(C.FRAMEBUFFER, r, e.RENDERBUFFER, null);
      }
      this._depthStencilBuffer = K(this._depthStencilBuffer);
    }
    this._depthStencilTexture && (this._initialized && (this._context.bindFramebuffer(this), this._framebufferTexture2D(null, e.DEPTH_STENCIL_ATTACHMENT)), this._depthStencilTexture = K(this._depthStencilTexture));
  }
  _validateTextureDescriptor(e) {
    e.target !== S.TEXTURE_2D && e.target !== S.TEXTURE_CUBE_MAP && console.error("Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!"), P(e, this._context.parameters.maxTextureSize), this._validateBufferDimensions(e);
  }
  _validateRenderBufferDescriptor(e) {
    P(e, this._context.parameters.maxRenderbufferSize), this._validateBufferDimensions(e);
  }
  _validateBufferDimensions(e) {
    e.width <= 0 && (e.width = this.width), e.height <= 0 && (e.height = this.height), this.width > 0 && this.height > 0 && (this.width === e.width && this.height === e.height || console.error("Attachment size must match framebuffer size!"));
  }
  _getGLAttachmentPoint(e) {
    switch (e.internalFormat) {
      case D.DEPTH_COMPONENT16:
      case D.DEPTH_COMPONENT24:
      case D.DEPTH_COMPONENT32F:
        return this._context.gl.DEPTH_ATTACHMENT;
      case D.DEPTH24_STENCIL8:
      case D.DEPTH32F_STENCIL8:
      case D.DEPTH_STENCIL:
        return this._context.gl.DEPTH_STENCIL_ATTACHMENT;
      case D.STENCIL_INDEX8:
        return this._context.gl.STENCIL_ATTACHMENT;
    }
  }
  _validateColorAttachmentPoint(e) {
    if (v._MAX_COLOR_ATTACHMENTS === -1) {
      const { gl: t } = this._context;
      v._MAX_COLOR_ATTACHMENTS = t.getParameter(t.MAX_COLOR_ATTACHMENTS);
    }
    const r = e - E.COLOR_ATTACHMENT0;
    r + 1 > v._MAX_COLOR_ATTACHMENTS && X.getLogger("esri.views.webgl.FrameBufferObject").error("esri.FrameBufferObject", `illegal attachment point for color attachment: ${r + 1}. Implementation supports up to ${v._MAX_COLOR_ATTACHMENTS} color attachments`);
  }
};
function O(i) {
  return i != null && "type" in i && i.type === N.Texture;
}
function Le(i) {
  return i != null && "type" in i && i.type === N.RenderBuffer;
}
function Oe(i) {
  return O(i) || i != null && "pixelFormat" in i;
}
function P(i, e) {
  const r = Math.max(i.width, i.height);
  if (r > e) {
    Pe().warn(`Resizing FBO attachment size ${i.width}x${i.height} to device limit ${e}`);
    const t = e / r;
    return i.width = Math.round(i.width * t), i.height = Math.round(i.height * t), !1;
  }
  return !0;
}
function Q(i) {
  return i.descriptor.target === S.TEXTURE_CUBE_MAP ? S.TEXTURE_CUBE_MAP_POSITIVE_X : S.TEXTURE_2D;
}
Be._MAX_COLOR_ATTACHMENTS = -1;
const ke = ["layout", "centroid", "smooth", "case", "mat2x2", "mat2x3", "mat2x4", "mat3x2", "mat3x3", "mat3x4", "mat4x2", "mat4x3", "mat4x4", "uint", "uvec2", "uvec3", "uvec4", "samplerCubeShadow", "sampler2DArray", "sampler2DArrayShadow", "isampler2D", "isampler3D", "isamplerCube", "isampler2DArray", "usampler2D", "usampler3D", "usamplerCube", "usampler2DArray", "coherent", "restrict", "readonly", "writeonly", "resource", "atomic_uint", "noperspective", "patch", "sample", "subroutine", "common", "partition", "active", "filter", "image1D", "image2D", "image3D", "imageCube", "iimage1D", "iimage2D", "iimage3D", "iimageCube", "uimage1D", "uimage2D", "uimage3D", "uimageCube", "image1DArray", "image2DArray", "iimage1DArray", "iimage2DArray", "uimage1DArray", "uimage2DArray", "image1DShadow", "image2DShadow", "image1DArrayShadow", "image2DArrayShadow", "imageBuffer", "iimageBuffer", "uimageBuffer", "sampler1DArray", "sampler1DArrayShadow", "isampler1D", "isampler1DArray", "usampler1D", "usampler1DArray", "isampler2DRect", "usampler2DRect", "samplerBuffer", "isamplerBuffer", "usamplerBuffer", "sampler2DMS", "isampler2DMS", "usampler2DMS", "sampler2DMSArray", "isampler2DMSArray", "usampler2DMSArray", "trunc", "round", "roundEven", "isnan", "isinf", "floatBitsToInt", "floatBitsToUint", "intBitsToFloat", "uintBitsToFloat", "packSnorm2x16", "unpackSnorm2x16", "packUnorm2x16", "unpackUnorm2x16", "packHalf2x16", "unpackHalf2x16", "outerProduct", "transpose", "determinant", "inverse", "texture", "textureSize", "textureProj", "textureLod", "textureOffset", "texelFetch", "texelFetchOffset", "textureProjOffset", "textureLodOffset", "textureProjLod", "textureProjLodOffset", "textureGrad", "textureGradOffset", "textureProjGrad", "textureProjGradOffset"];
var Z, ce = { exports: {} };
(Z = ["precision", "highp", "mediump", "lowp", "attribute", "const", "uniform", "varying", "break", "continue", "do", "for", "while", "if", "else", "in", "out", "inout", "float", "int", "void", "bool", "true", "false", "discard", "return", "mat2", "mat3", "mat4", "vec2", "vec3", "vec4", "ivec2", "ivec3", "ivec4", "bvec2", "bvec3", "bvec4", "sampler1D", "sampler2D", "sampler3D", "samplerCube", "sampler1DShadow", "sampler2DShadow", "struct", "asm", "class", "union", "enum", "typedef", "template", "this", "packed", "goto", "switch", "default", "inline", "noinline", "volatile", "public", "static", "extern", "external", "interface", "long", "short", "double", "half", "fixed", "unsigned", "input", "output", "hvec2", "hvec3", "hvec4", "dvec2", "dvec3", "dvec4", "fvec2", "fvec3", "fvec4", "sampler2DRect", "sampler3DRect", "sampler2DRectShadow", "sizeof", "cast", "namespace", "using"]) !== void 0 && (ce.exports = Z);
const Ie = V(ce.exports);
var J, le = { exports: {} };
J = le, function(i) {
  var e = ["<<=", ">>=", "++", "--", "<<", ">>", "<=", ">=", "==", "!=", "&&", "||", "+=", "-=", "*=", "/=", "%=", "&=", "^^", "^=", "|=", "(", ")", "[", "]", ".", "!", "~", "*", "/", "%", "+", "-", "<", ">", "&", "^", "|", "?", ":", "=", ",", ";", "{", "}"];
  e !== void 0 && (J.exports = e);
}();
const ee = V(le.exports);
var ue = { exports: {} };
(function(i) {
  (function(e) {
    var r = /* @__PURE__ */ function() {
      return ["abs", "acos", "all", "any", "asin", "atan", "ceil", "clamp", "cos", "cross", "dFdx", "dFdy", "degrees", "distance", "dot", "equal", "exp", "exp2", "faceforward", "floor", "fract", "gl_BackColor", "gl_BackLightModelProduct", "gl_BackLightProduct", "gl_BackMaterial", "gl_BackSecondaryColor", "gl_ClipPlane", "gl_ClipVertex", "gl_Color", "gl_DepthRange", "gl_DepthRangeParameters", "gl_EyePlaneQ", "gl_EyePlaneR", "gl_EyePlaneS", "gl_EyePlaneT", "gl_Fog", "gl_FogCoord", "gl_FogFragCoord", "gl_FogParameters", "gl_FragColor", "gl_FragCoord", "gl_FragData", "gl_FragDepth", "gl_FragDepthEXT", "gl_FrontColor", "gl_FrontFacing", "gl_FrontLightModelProduct", "gl_FrontLightProduct", "gl_FrontMaterial", "gl_FrontSecondaryColor", "gl_LightModel", "gl_LightModelParameters", "gl_LightModelProducts", "gl_LightProducts", "gl_LightSource", "gl_LightSourceParameters", "gl_MaterialParameters", "gl_MaxClipPlanes", "gl_MaxCombinedTextureImageUnits", "gl_MaxDrawBuffers", "gl_MaxFragmentUniformComponents", "gl_MaxLights", "gl_MaxTextureCoords", "gl_MaxTextureImageUnits", "gl_MaxTextureUnits", "gl_MaxVaryingFloats", "gl_MaxVertexAttribs", "gl_MaxVertexTextureImageUnits", "gl_MaxVertexUniformComponents", "gl_ModelViewMatrix", "gl_ModelViewMatrixInverse", "gl_ModelViewMatrixInverseTranspose", "gl_ModelViewMatrixTranspose", "gl_ModelViewProjectionMatrix", "gl_ModelViewProjectionMatrixInverse", "gl_ModelViewProjectionMatrixInverseTranspose", "gl_ModelViewProjectionMatrixTranspose", "gl_MultiTexCoord0", "gl_MultiTexCoord1", "gl_MultiTexCoord2", "gl_MultiTexCoord3", "gl_MultiTexCoord4", "gl_MultiTexCoord5", "gl_MultiTexCoord6", "gl_MultiTexCoord7", "gl_Normal", "gl_NormalMatrix", "gl_NormalScale", "gl_ObjectPlaneQ", "gl_ObjectPlaneR", "gl_ObjectPlaneS", "gl_ObjectPlaneT", "gl_Point", "gl_PointCoord", "gl_PointParameters", "gl_PointSize", "gl_Position", "gl_ProjectionMatrix", "gl_ProjectionMatrixInverse", "gl_ProjectionMatrixInverseTranspose", "gl_ProjectionMatrixTranspose", "gl_SecondaryColor", "gl_TexCoord", "gl_TextureEnvColor", "gl_TextureMatrix", "gl_TextureMatrixInverse", "gl_TextureMatrixInverseTranspose", "gl_TextureMatrixTranspose", "gl_Vertex", "greaterThan", "greaterThanEqual", "inversesqrt", "length", "lessThan", "lessThanEqual", "log", "log2", "matrixCompMult", "max", "min", "mix", "mod", "normalize", "not", "notEqual", "pow", "radians", "reflect", "refract", "sign", "sin", "smoothstep", "sqrt", "step", "tan", "texture2D", "texture2DLod", "texture2DProj", "texture2DProjLod", "textureCube", "textureCubeLod", "texture2DLodEXT", "texture2DProjLodEXT", "textureCubeLodEXT", "texture2DGradEXT", "texture2DProjGradEXT", "textureCubeGradEXT", "textureSize", "texelFetch"];
    }();
    r !== void 0 && (i.exports = r);
  })();
})(ue);
const $e = V(ue.exports);
var x = 999, te = 9999, $ = 0, H = 1, re = 2, ie = 3, ne = 4, B = 5, He = 6, ze = 7, je = 8, oe = 9, Xe = 10, se = 11, Ve = ["block-comment", "line-comment", "preprocessor", "operator", "integer", "float", "ident", "builtin", "keyword", "whitespace", "eof", "integer"];
function Ge() {
  var i, e, r, t = 0, n = 0, o = x, s = [], h = [], a = 1, c = 0, l = 0, _ = !1, p = !1, g = "";
  return function(u) {
    return h = [], u !== null ? _e(u.replace ? u.replace(/\r\n/g, `
`) : u) : de();
  };
  function d(u) {
    u.length && h.push({ type: Ve[o], data: u, position: l, line: a, column: c });
  }
  function _e(u) {
    var R;
    for (t = 0, r = (g += u).length; i = g[t], t < r; ) {
      switch (R = t, o) {
        case $:
          t = xe();
          break;
        case H:
          t = pe();
          break;
        case re:
          t = G();
          break;
        case ie:
          t = Te();
          break;
        case ne:
          t = be();
          break;
        case se:
          t = Ee();
          break;
        case B:
          t = Ae();
          break;
        case te:
          t = Se();
          break;
        case oe:
          t = ge();
          break;
        case x:
          t = me();
      }
      R !== t && (g[R] === `
` ? (c = 0, ++a) : ++c);
    }
    return n += t, g = g.slice(t), h;
  }
  function de(u) {
    return s.length && d(s.join("")), o = Xe, d("(eof)"), h;
  }
  function me() {
    return s = s.length ? [] : s, e === "/" && i === "*" ? (l = n + t - 1, o = $, e = i, t + 1) : e === "/" && i === "/" ? (l = n + t - 1, o = H, e = i, t + 1) : i === "#" ? (o = re, l = n + t, t) : /\s/.test(i) ? (o = oe, l = n + t, t) : (_ = /\d/.test(i), p = /[^\w_]/.test(i), l = n + t, o = _ ? ne : p ? ie : te, t);
  }
  function ge() {
    return /[^\s]/g.test(i) ? (d(s.join("")), o = x, t) : (s.push(i), e = i, t + 1);
  }
  function G() {
    return i !== "\r" && i !== `
` || e === "\\" ? (s.push(i), e = i, t + 1) : (d(s.join("")), o = x, t);
  }
  function pe() {
    return G();
  }
  function xe() {
    return i === "/" && e === "*" ? (s.push(i), d(s.join("")), o = x, t + 1) : (s.push(i), e = i, t + 1);
  }
  function Te() {
    if (e === "." && /\d/.test(i)) return o = B, t;
    if (e === "/" && i === "*") return o = $, t;
    if (e === "/" && i === "/") return o = H, t;
    if (i === "." && s.length) {
      for (; k(s); ) ;
      return o = B, t;
    }
    if (i === ";" || i === ")" || i === "(") {
      if (s.length) for (; k(s); ) ;
      return d(i), o = x, t + 1;
    }
    var u = s.length === 2 && i !== "=";
    if (/[\w_\d\s]/.test(i) || u) {
      for (; k(s); ) ;
      return o = x, t;
    }
    return s.push(i), e = i, t + 1;
  }
  function k(u) {
    for (var R, M, Y = 0; ; ) {
      if (R = ee.indexOf(u.slice(0, u.length + Y).join("")), M = ee[R], R === -1) {
        if (Y-- + u.length > 0) continue;
        M = u.slice(0, 1).join("");
      }
      return d(M), l += M.length, (s = s.slice(M.length)).length;
    }
  }
  function Ee() {
    return /[^a-fA-F0-9]/.test(i) ? (d(s.join("")), o = x, t) : (s.push(i), e = i, t + 1);
  }
  function be() {
    return i === "." || /[eE]/.test(i) ? (s.push(i), o = B, e = i, t + 1) : i === "x" && s.length === 1 && s[0] === "0" ? (o = se, s.push(i), e = i, t + 1) : /[^\d]/.test(i) ? (d(s.join("")), o = x, t) : (s.push(i), e = i, t + 1);
  }
  function Ae() {
    return i === "f" && (s.push(i), e = i, t += 1), /[eE]/.test(i) || i === "-" && /[eE]/.test(e) ? (s.push(i), e = i, t + 1) : /[^\d]/.test(i) ? (d(s.join("")), o = x, t) : (s.push(i), e = i, t + 1);
  }
  function Se() {
    if (/[^\d\w_]/.test(i)) {
      var u = s.join("");
      return o = Ie.indexOf(u) > -1 ? je : $e.indexOf(u) > -1 ? ze : He, d(s.join("")), o = x, t;
    }
    return s.push(i), e = i, t + 1;
  }
}
function Ye(i) {
  var e = Ge(), r = [];
  return r = (r = r.concat(e(i))).concat(e(null));
}
function Ke(i) {
  return Ye(i);
}
function We(i) {
  return i.map((e) => e.type !== "eof" ? e.data : "").join("");
}
const z = /* @__PURE__ */ new Set(["GL_OES_standard_derivatives", "GL_EXT_frag_depth", "GL_EXT_draw_buffers", "GL_EXT_shader_texture_lod"]);
function qe(i, e = "100", r = "300 es") {
  const t = /^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/;
  for (const n of i) if (n.type === "preprocessor") {
    const o = t.exec(n.data);
    if (o) {
      const s = o[1].replaceAll(/\s\s+/g, " ");
      if (s === r) return s;
      if (s === e) return n.data = "#version " + r, e;
      throw new Error("unknown glsl version: " + s);
    }
  }
  return i.splice(0, 0, { type: "preprocessor", data: "#version " + r }, { type: "whitespace", data: `
` }), null;
}
function Qe(i, e) {
  for (let r = e - 1; r >= 0; r--) {
    const t = i[r];
    if (t.type !== "whitespace" && t.type !== "block-comment") {
      if (t.type !== "keyword") break;
      if (t.data === "attribute" || t.data === "in") return !0;
    }
  }
  return !1;
}
function w(i, e, r, t) {
  t = t || r;
  for (const n of i) if (n.type === "ident" && n.data === r)
    return t in e ? e[t]++ : e[t] = 0, w(i, e, t + "_" + e[t], t);
  return r;
}
function fe(i, e, r = "afterVersion") {
  function t(a, c) {
    for (let l = c; l < a.length; l++) {
      const _ = a[l];
      if (_.type === "operator" && _.data === ";") return l;
    }
    return null;
  }
  function n(a) {
    let c = -1, l = 0, _ = -1;
    for (let p = 0; p < a.length; p++) {
      const g = a[p];
      if (g.type === "preprocessor" && (/\#(if|ifdef|ifndef)\s+.+/.test(g.data) ? ++l : /\#endif\s*.*/.test(g.data) && --l), r !== "afterVersion" && r !== "afterPrecision" || g.type === "preprocessor" && g.data.startsWith("#version") && (_ = Math.max(_, p)), r === "afterPrecision" && g.type === "keyword" && g.data === "precision") {
        const d = t(a, p);
        if (d === null) throw new Error("precision statement not followed by any semicolons!");
        _ = Math.max(_, d);
      }
      c < _ && l === 0 && (c = p);
    }
    return c + 1;
  }
  const o = { data: `
`, type: "whitespace" }, s = (a) => a < i.length && /[^\r\n]$/.test(i[a].data);
  let h = n(i);
  s(h - 1) && i.splice(h++, 0, o);
  for (const a of e) i.splice(h++, 0, a);
  s(h - 1) && s(h) && i.splice(h, 0, o);
}
function Ze(i, e, r, t = "lowp") {
  fe(i, [{ type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: t }, { type: "whitespace", data: " " }, { type: "keyword", data: r }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function Je(i, e, r, t, n = "lowp") {
  fe(i, [{ type: "keyword", data: "layout" }, { type: "operator", data: "(" }, { type: "keyword", data: "location" }, { type: "whitespace", data: " " }, { type: "operator", data: "=" }, { type: "whitespace", data: " " }, { type: "integer", data: t.toString() }, { type: "operator", data: ")" }, { type: "whitespace", data: " " }, { type: "keyword", data: "out" }, { type: "whitespace", data: " " }, { type: "keyword", data: n }, { type: "whitespace", data: " " }, { type: "keyword", data: r }, { type: "whitespace", data: " " }, { type: "ident", data: e }, { type: "operator", data: ";" }], "afterPrecision");
}
function et(i, e) {
  let r, t, n = -1;
  for (let o = e; o < i.length; o++) {
    const s = i[o];
    if (s.type === "operator" && (s.data === "[" && (r = o), s.data === "]")) {
      t = o;
      break;
    }
    s.type === "integer" && (n = parseInt(s.data, 10));
  }
  return r && t && i.splice(r, t - r + 1), n;
}
function ae(i, e) {
  if (i.startsWith("#version 300")) return i;
  const r = Ke(i);
  if (qe(r, "100", "300 es") === "300 es") return i;
  let t = null, n = null;
  const o = {}, s = {};
  for (let h = 0; h < r.length; ++h) {
    const a = r[h];
    switch (a.type) {
      case "keyword":
        e === T.VERTEX_SHADER && a.data === "attribute" ? a.data = "in" : a.data === "varying" && (a.data = e === T.VERTEX_SHADER ? "out" : "in");
        break;
      case "builtin":
        if (/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(a.data.trim()) && (a.data = a.data.replaceAll(/(2D|Cube|EXT)/g, "")), e === T.FRAGMENT_SHADER && a.data === "gl_FragColor" && (t || (t = w(r, o, "fragColor"), Ze(r, t, "vec4")), a.data = t), e === T.FRAGMENT_SHADER && a.data === "gl_FragData") {
          const c = et(r, h + 1), l = w(r, o, "fragData");
          Je(r, l, "vec4", c, "mediump"), a.data = l;
        } else e === T.FRAGMENT_SHADER && a.data === "gl_FragDepthEXT" && (n || (n = w(r, o, "gl_FragDepth")), a.data = n);
        break;
      case "ident":
        if (ke.includes(a.data)) {
          if (e === T.VERTEX_SHADER && Qe(r, h)) throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");
          a.data in s || (s[a.data] = w(r, o, a.data)), a.data = s[a.data];
        }
    }
  }
  for (let h = r.length - 1; h >= 0; --h) {
    const a = r[h];
    if (a.type === "preprocessor") {
      const c = a.data.match(/\#extension\s+(.*)\:/);
      if (c && c[1] && z.has(c[1].trim())) {
        const p = r[h + 1];
        r.splice(h, p && p.type === "whitespace" ? 2 : 1);
      }
      const l = a.data.match(/\#ifdef\s+(.*)/);
      l && l[1] && z.has(l[1].trim()) && (a.data = "#if 1");
      const _ = a.data.match(/\#ifndef\s+(.*)/);
      _ && _[1] && z.has(_[1].trim()) && (a.data = "#if 0");
    }
  }
  return tt(i, We(r));
}
function tt(i, e) {
  return e;
}
const rt = 4294967295;
class ft {
  constructor(e, r, t, n, o = /* @__PURE__ */ new Map(), s = []) {
    this._context = e, this._locations = n, this._uniformBlockBindings = o, this._transformFeedbackVaryings = s, this._refCount = 1, this._compiled = !1, this._linesOfCode = 0, this._nameToUniformLocation = /* @__PURE__ */ new Map(), this._nameToUniform1 = /* @__PURE__ */ new Map(), this._nameToUniform1v = /* @__PURE__ */ new Map(), this._nameToUniform2 = /* @__PURE__ */ new Map(), this._nameToUniform3 = /* @__PURE__ */ new Map(), this._nameToUniform4 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix3 = /* @__PURE__ */ new Map(), this._nameToUniformMatrix4 = /* @__PURE__ */ new Map(), e || console.error("RenderingContext isn't initialized!"), r.length === 0 && console.error("Shaders source should not be empty!"), r = ae(r, T.VERTEX_SHADER), t = ae(t, T.FRAGMENT_SHADER), this._vShader = he(this._context, T.VERTEX_SHADER, r), this._fShader = he(this._context, T.FRAGMENT_SHADER, t), ot.enabled && (this._linesOfCode = r.match(/\n/g).length + t.match(/\n/g).length + 2, this._context.instanceCounter.increment(m.LinesOfCode, this._vShader, this._linesOfCode)), this._vShader && this._fShader || console.error("Error loading shaders!"), this._context.instanceCounter.increment(m.Shader, this), j() && (this.vertexShader = r, this.fragmentShader = t), this.usedMemory = r.length + t.length;
    const h = this._context.gl, a = h.createProgram();
    h.attachShader(a, this._vShader), h.attachShader(a, this._fShader), this._locations.forEach((c, l) => h.bindAttribLocation(a, c, l)), this._transformFeedbackVaryings?.length && h.transformFeedbackVaryings(a, this._transformFeedbackVaryings, h.SEPARATE_ATTRIBS), h.linkProgram(a), j() && !h.getProgramParameter(a, h.LINK_STATUS) && console.error(`Could not link shader
validated: ${h.getProgramParameter(a, h.VALIDATE_STATUS)}, gl error ${h.getError()}, vertex: ${h.getShaderParameter(this._vShader, h.COMPILE_STATUS)}, fragment: ${h.getShaderParameter(this._fShader, h.COMPILE_STATUS)}, info log: ${h.getProgramInfoLog(a)}, vertex source: ${this.vertexShader}, fragment source: ${this.fragmentShader}`);
    for (const [c, l] of this._uniformBlockBindings) {
      const _ = h.getUniformBlockIndex(a, c);
      _ < rt && h.uniformBlockBinding(a, _, l);
    }
    this._glName = a, this._context.instanceCounter.increment(m.Program, this);
  }
  get glName() {
    return this._glName;
  }
  get hasGLName() {
    return this._glName != null;
  }
  get hasTransformFeedbackVaryings() {
    return !!this._transformFeedbackVaryings?.length;
  }
  get compiled() {
    if (this._compiled) return !0;
    const e = this._context.gl.getExtension("KHR_parallel_shader_compile");
    return e == null || this.glName == null ? (this._compiled = !0, !0) : (this._compiled = !!this._context.gl.getProgramParameter(this.glName, e.COMPLETION_STATUS_KHR), this._compiled);
  }
  dispose() {
    if (--this._refCount > 0) return;
    const e = this._context.gl, r = this._context.instanceCounter;
    this._nameToUniformLocation.forEach((t) => t && r.decrement(m.Uniform, t)), this._nameToUniformLocation.clear(), this._vShader && (this._linesOfCode > 0 && (r.decrement(m.LinesOfCode, this._vShader, this._linesOfCode), this._linesOfCode = 0), e.deleteShader(this._vShader), this._vShader = null, r.decrement(m.Shader, this)), this._fShader && (e.deleteShader(this._fShader), this._fShader = null), this._glName && (e.deleteProgram(this._glName), this._glName = null, r.decrement(m.Program, this));
  }
  ref() {
    ++this._refCount;
  }
  _getUniformLocation(e) {
    const r = this._nameToUniformLocation.get(e);
    if (r !== void 0) return r;
    if (this.glName) {
      const t = this._context.gl.getUniformLocation(this.glName, e);
      return this._nameToUniformLocation.set(e, t), t && this._context.instanceCounter.increment(m.Uniform, t), t;
    }
    return null;
  }
  hasUniform(e) {
    return this._getUniformLocation(e) != null;
  }
  setUniform1i(e, r) {
    const t = this._nameToUniform1.get(e);
    t !== void 0 && r === t || (this._context.gl.uniform1i(this._getUniformLocation(e), r), this._nameToUniform1.set(e, r));
  }
  setUniform1iv(e, r) {
    b(this._nameToUniform1v, e, r) && this._context.gl.uniform1iv(this._getUniformLocation(e), r);
  }
  setUniform2iv(e, r) {
    b(this._nameToUniform2, e, r) && this._context.gl.uniform2iv(this._getUniformLocation(e), r);
  }
  setUniform3iv(e, r) {
    b(this._nameToUniform3, e, r) && this._context.gl.uniform3iv(this._getUniformLocation(e), r);
  }
  setUniform4iv(e, r) {
    b(this._nameToUniform4, e, r) && this._context.gl.uniform4iv(this._getUniformLocation(e), r);
  }
  setUniform1f(e, r) {
    const t = this._nameToUniform1.get(e);
    t !== void 0 && r === t || (this._context.gl.uniform1f(this._getUniformLocation(e), r), this._nameToUniform1.set(e, r));
  }
  setUniform1fv(e, r) {
    b(this._nameToUniform1v, e, r) && this._context.gl.uniform1fv(this._getUniformLocation(e), r);
  }
  setUniform2f(e, r, t) {
    const n = this._nameToUniform2.get(e);
    n === void 0 ? (this._context.gl.uniform2f(this._getUniformLocation(e), r, t), this._nameToUniform2.set(e, [r, t])) : r === n[0] && t === n[1] || (this._context.gl.uniform2f(this._getUniformLocation(e), r, t), n[0] = r, n[1] = t);
  }
  setUniform2fv(e, r) {
    b(this._nameToUniform2, e, r) && this._context.gl.uniform2fv(this._getUniformLocation(e), r);
  }
  setUniform3f(e, r, t, n) {
    const o = this._nameToUniform3.get(e);
    o === void 0 ? (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, n), this._nameToUniform3.set(e, [r, t, n])) : r === o[0] && t === o[1] && n === o[2] || (this._context.gl.uniform3f(this._getUniformLocation(e), r, t, n), o[0] = r, o[1] = t, o[2] = n);
  }
  setUniform3fv(e, r) {
    const t = this._getUniformLocation(e);
    t != null && b(this._nameToUniform3, e, r) && this._context.gl.uniform3fv(t, r);
  }
  setUniform4f(e, r, t, n, o) {
    const s = this._nameToUniform4.get(e);
    s === void 0 ? (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, n, o), this._nameToUniform4.set(e, [r, t, n, o])) : s !== void 0 && r === s[0] && t === s[1] && n === s[2] && o === s[3] || (this._context.gl.uniform4f(this._getUniformLocation(e), r, t, n, o), s[0] = r, s[1] = t, s[2] = n, s[3] = o);
  }
  setUniform4fv(e, r) {
    const t = this._getUniformLocation(e);
    t != null && b(this._nameToUniform4, e, r) && this._context.gl.uniform4fv(t, r);
  }
  setUniformMatrix3fv(e, r, t = !1) {
    const n = this._getUniformLocation(e);
    n != null && b(this._nameToUniformMatrix3, e, r) && this._context.gl.uniformMatrix3fv(n, t, r);
  }
  setUniformMatrix4fv(e, r, t = !1) {
    const n = this._getUniformLocation(e);
    n != null && b(this._nameToUniformMatrix4, e, r) && this._context.gl.uniformMatrix4fv(n, t, r);
  }
  stop() {
  }
}
function he(i, e, r) {
  const t = i.gl, n = t.createShader(e);
  return t.shaderSource(n, r), t.compileShader(n), j() && !t.getShaderParameter(n, t.COMPILE_STATUS) && (console.error("Compile error in ".concat(e === T.VERTEX_SHADER ? "vertex" : "fragment", " shader")), console.error(t.getShaderInfoLog(n)), console.error(it(r))), n;
}
function it(i) {
  let e = 2;
  return i.replaceAll(`
`, () => `
` + nt(e++) + ":");
}
function nt(i) {
  return i >= 1e3 ? i.toString() : ("  " + i).slice(-3);
}
function b(i, e, r) {
  const t = i.get(e);
  if (!t) return i.set(e, Array.from(r)), !0;
  const n = r.length;
  if (t.length !== n) return i.set(e, Array.from(r)), !0;
  for (let o = 0; o < n; ++o) {
    const s = r[o];
    if (t[o] !== s) {
      for (t[o] = s; o < n; ++o) t[o] = r[o];
      return !0;
    }
  }
  return !1;
}
const ot = { enabled: !1 };
export {
  Ce as h,
  ct as i,
  ft as r,
  Ne as s,
  Be as x
};
//# sourceMappingURL=Program-DzoSBHvo.js.map
