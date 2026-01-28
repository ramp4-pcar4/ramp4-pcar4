import { c as V } from "./WGLContainer-Bk5jGrnu.js";
import { glslifyDefineMap as it, ProgramCache as rt } from "./webglDeps-CkZ7q_lK.js";
import { af as D, h0 as y, cj as Y, C as nt, f3 as at, aM as lt } from "./main-BpIyUAdL.js";
import { e as v, m as et, c as b, u as q, o as ot } from "./Texture-DagG5chw.js";
import { R as m, T as k, N as R, S as st, O as P, I as T, V as B, F as A, A as a, E as d, C as x, D as U, L as S, G, U as w, P as ht, f as _t, X as z, Y as I, _ as F, n as g, r as ut, i as H, M as O } from "./enums-Do5C4ZjN.js";
import { o as K, S as ft, s as ct, G as dt } from "./OrderIndependentTransparency-BCDkO_nh.js";
import { h as C, x as M } from "./Program-B2kWsUYK.js";
import { t as N, f as Et, a as gt } from "./testSVGPremultipliedAlpha-ByIEoroW.js";
import { r as pt } from "./floatRGBA-BCvAa9jJ.js";
import { t as j } from "./doublePrecisionUtils-BJbYwoii.js";
import { o as L } from "./ProgramTemplate-Dd0nPn23.js";
import { t as X } from "./VertexElementDescriptor-BAy1DPb3.js";
const bt = (n) => {
  let t = "";
  t += n[0].toUpperCase();
  for (let e = 1; e < n.length; e++) {
    const s = n[e];
    s === s.toUpperCase() ? (t += "_", t += s) : t += s.toUpperCase();
  }
  return t;
}, Ft = (n) => {
  const t = {};
  for (const e in n)
    t[bt(e)] = n[e];
  return it(t);
}, qt = (n, t, e, s) => {
  const i = n + n.substring(n.lastIndexOf("/")), r = t + t.substring(t.lastIndexOf("/")), l = Ft(s);
  return { attributes: e, shaders: { vertexShader: l + V(`${i}.vert`), fragmentShader: l + V(`${r}.frag`) } };
};
let Z = class {
  constructor() {
    this.blend = !1, this.blendColor = { r: 0, g: 0, b: 0, a: 0 }, this.blendFunction = { srcRGB: m.ONE, dstRGB: m.ZERO, srcAlpha: m.ONE, dstAlpha: m.ZERO }, this.blendEquation = { mode: k.ADD, modeAlpha: k.ADD }, this.colorMask = { r: !0, g: !0, b: !0, a: !0 }, this.faceCulling = !1, this.cullFace = R.BACK, this.frontFace = st.CCW, this.scissorTest = !1, this.scissorRect = { x: 0, y: 0, width: 0, height: 0 }, this.depthTest = !1, this.depthFunction = P.LESS, this.clearDepth = 1, this.depthWrite = !0, this.depthRange = { zNear: 0, zFar: 1 }, this.viewport = null, this.stencilTest = !1, this.polygonOffsetFill = !1, this.polygonOffset = [0, 0], this.stencilFunction = { face: R.FRONT_AND_BACK, func: P.ALWAYS, ref: 0, mask: 1 }, this.clearStencil = 0, this.stencilWriteMask = 1, this.stencilOperation = { face: R.FRONT_AND_BACK, fail: T.KEEP, zFail: T.KEEP, zPass: T.KEEP }, this.clearColor = { r: 0, g: 0, b: 0, a: 0 }, this.program = null, this.vertexBuffer = null, this.indexBuffer = null, this.uniformBuffer = null, this.pixelPackBuffer = null, this.pixelUnpackBuffer = null, this.copyReadBuffer = null, this.copyWriteBuffer = null, this.transformFeedbackBuffer = null, this.uniformBufferBindingPoints = new Array(), this.transformBufferBindingPoints = new Array(), this.readFramebuffer = null, this.drawFramebuffer = null, this.renderbuffer = null, this.activeTexture = 0, this.textureUnitMap = new Array(), this.vertexArrayObject = null;
  }
}, Rt = class {
  constructor() {
    for (this._current = new Array(), this._allocations = null; this._current.length < B.COUNT; ) this._current.push(0);
  }
  increment(t, e, s = 1) {
    this._current[t] += s, this._allocations?.add(e);
  }
  decrement(t, e, s = 1) {
    this._current[t] -= s, this._allocations?.remove(e);
  }
  get current() {
    return this._current;
  }
  get total() {
    return this.current.reduce((t, e, s) => t + (s < B.UNCOUNTED ? e : 0), 0);
  }
  get resourceInformation() {
    let t = "";
    if (this.total > 0) {
      t += `Live objects:
`;
      for (let e = 0; e < B.COUNT; ++e) {
        const s = this._current[e];
        s > 0 && (t += `${B[e]}: ${s}
`);
      }
    }
    return t += this._allocations?.resetLog(), t;
  }
}, mt = class {
  constructor(t, e, s) {
    const i = e.textureFilterAnisotropic, r = s.maxAnisotropy ?? 1 / 0;
    this.versionString = t.getParameter(t.VERSION), this.maxVertexTextureImageUnits = t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS), this.maxVertexAttributes = t.getParameter(t.MAX_VERTEX_ATTRIBS), this.maxMaxAnisotropy = i ? Math.min(t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY), r) : 1, this.maxTextureImageUnits = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), this.maxTextureSize = t.getParameter(t.MAX_TEXTURE_SIZE), this.maxRenderbufferSize = t.getParameter(t.MAX_RENDERBUFFER_SIZE), this.maxViewportDims = t.getParameter(t.MAX_VIEWPORT_DIMS), this.maxUniformBufferBindings = t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS), this.maxVertexUniformBlocks = t.getParameter(t.MAX_VERTEX_UNIFORM_BLOCKS), this.maxFragmentUniformBlocks = t.getParameter(t.MAX_FRAGMENT_UNIFORM_BLOCKS), this.maxUniformBlockSize = t.getParameter(t.MAX_UNIFORM_BLOCK_SIZE), this.uniformBufferOffsetAlignment = t.getParameter(t.UNIFORM_BUFFER_OFFSET_ALIGNMENT), this.maxArrayTextureLayers = t.getParameter(t.MAX_ARRAY_TEXTURE_LAYERS), this.maxSamples = t.getParameter(t.MAX_SAMPLES);
  }
};
class W {
  constructor(t) {
    this._rctx = t, this._indexBuffer = this._createIndexbuffer(), this._program = this._createHelperProgram();
  }
  static getShaderSources() {
    return { vertex: `#version 300 es
    precision highp float;

    void main(void) {
      gl_Position = vec4(0.0, 0.0, float(gl_VertexID)-2.0, 1.0);
    }`, fragment: `#version 300 es
    precision highp float;

    out vec4 fragColor;

    void main(void) {
      fragColor = vec4(0.0, 0.0, 0.0, 1.0);
    }` };
  }
  _createHelperProgram() {
    const t = W.getShaderSources();
    return this._rctx.programCache.acquire(t.vertex, t.fragment, /* @__PURE__ */ new Map([]));
  }
  _createIndexbuffer() {
    return C.createIndex(this._rctx, A.STATIC_DRAW, new Uint32Array([0]));
  }
  run() {
    this._program.compiled && this._indexBuffer && (this._rctx.bindVAO(null), this._rctx.useProgram(this._program), this._rctx.bindBuffer(this._indexBuffer, a.ELEMENT_ARRAY_BUFFER), this._rctx.drawElements(d.POINTS, 1, x.UNSIGNED_INT, 0));
  }
  dispose() {
    this._program.dispose(), this._indexBuffer.dispose();
  }
  get test() {
    return { cachedWebGLObjects: this._indexBuffer?.glName ? 1 : 0 };
  }
}
class Bt extends N {
  constructor(t) {
    super(), this._rctx = t, this._helperProgram = null, D("mac") && D("chrome") && (this._program = this._prepareProgram(), this._helperProgram = this._prepareHelperProgram());
  }
  dispose() {
    super.dispose(), this._helperProgram?.dispose(), this._helperProgram = null;
  }
  _test(t) {
    const e = this._rctx, s = e.getBoundFramebufferObject(), { x: i, y: r, width: l, height: h } = e.getViewport();
    e.resetState();
    const u = new v(1);
    u.wrapMode = U.CLAMP_TO_EDGE, u.samplingMode = S.NEAREST;
    const o = new M(e, u), _ = C.createIndex(this._rctx, A.STATIC_DRAW, new Uint8Array([0]));
    e.bindFramebuffer(o), e.setViewport(0, 0, 1, 1), e.useProgram(this._helperProgram), e.bindBuffer(_, a.ELEMENT_ARRAY_BUFFER), e.drawElements(d.POINTS, 1, x.UNSIGNED_BYTE, 0), e.useProgram(t), e.bindVAO(null), e.drawArrays(d.TRIANGLES, 0, 258);
    const c = new Uint8Array(4);
    return o.readPixels(0, 0, 1, 1, G.RGBA, w.UNSIGNED_BYTE, c), e.setViewport(i, r, l, h), e.bindFramebuffer(s), o.dispose(), _.dispose(), c[0] === 255;
  }
  _prepareProgram() {
    const e = `#version 300 es
    precision highp float;

    out float triangleId;

    const vec3 triangleVertices[3] = vec3[3](vec3(-0.5, -0.5, 0.0), vec3(0.5, -0.5, 0.0), vec3(0.0, 0.5, 0.0));

    void main(void) {
      triangleId = floor(float(gl_VertexID)/3.0);

      vec3 position = triangleVertices[gl_VertexID % 3];
      float offset = triangleId / ${K.float(85)};
      position.z = 0.5 - offset;

      gl_Position = vec4(position, 1.0);
    }
    `, s = `#version 300 es
    precision highp float;

    in float triangleId;

    out vec4 fragColor;

    void main(void) {
      fragColor = triangleId == ${K.float(85)} ? vec4(0.0, 1.0, 0.0, 1.0) : vec4(1.0, 0.0, 0.0, 1.0);
    }
    `;
    return this._rctx.programCache.acquire(e, s, /* @__PURE__ */ new Map([]));
  }
  _prepareHelperProgram() {
    const t = W.getShaderSources();
    return this._rctx.programCache.acquire(t.vertex, t.fragment, /* @__PURE__ */ new Map([]));
  }
}
let Tt = class extends N {
  constructor(t) {
    super(), this._rctx = t, this._program = Q(this._rctx, !1), this._obfuscated = Q(this._rctx, !0);
  }
  dispose() {
    super.dispose(), this._obfuscated = y(this._obfuscated);
  }
  _test(t) {
    if (D("force-double-precision-obfuscation")) return !0;
    if (this._obfuscated == null) return !1;
    const e = this._rctx, s = e.getBoundFramebufferObject(), { x: i, y: r, width: l, height: h } = e.getViewport(), u = this._runProgram(t), o = this._runProgram(this._obfuscated);
    return e.setViewport(i, r, l, h), e.bindFramebuffer(s), u !== 0 && (o === 0 || u / o > 5);
  }
  _runProgram(t) {
    const e = this._rctx;
    e.resetState();
    const s = new v(1);
    s.wrapMode = U.CLAMP_TO_EDGE, s.samplingMode = S.NEAREST;
    const i = new M(e, s), r = C.createVertex(e, A.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), l = new L(e, /* @__PURE__ */ new Map([["position", 0]]), { geometry: [new X("position", 2, x.UNSIGNED_SHORT, 0, 4)] }, { geometry: r }), h = Y(5633261287538229e-9, 2626832878767164e-9, 1.4349880495278358e6), u = Y(563327146742708e-8, 2.6268736381334523e6, 1434963231608387e-9), o = new Float32Array(6);
    j(h, o, 3);
    const _ = new Float32Array(6);
    j(u, _, 3), e.useProgram(t), t.setUniform3f("u_highA", o[0], o[2], o[4]), t.setUniform3f("u_lowA", o[1], o[3], o[5]), t.setUniform3f("u_highB", _[0], _[2], _[4]), t.setUniform3f("u_lowB", _[1], _[3], _[5]), e.bindFramebuffer(i), e.setViewport(0, 0, 1, 1), e.bindVAO(l), e.drawArrays(d.TRIANGLE_STRIP, 0, 4);
    const c = new Uint8Array(4);
    i.readPixels(0, 0, 1, 1, G.RGBA, w.UNSIGNED_BYTE, c), l.dispose(), i.dispose();
    const E = (h[2] - u[2]) / 25, p = pt(c);
    return Math.abs(E - p);
  }
};
function Q(n, t) {
  const e = `

  precision highp float;

  attribute vec2 position;

  uniform vec3 u_highA;
  uniform vec3 u_lowA;
  uniform vec3 u_highB;
  uniform vec3 u_lowB;

  varying vec4 v_color;

  ${t ? "#define DOUBLE_PRECISION_REQUIRES_OBFUSCATION" : ""}

  #ifdef DOUBLE_PRECISION_REQUIRES_OBFUSCATION

  vec3 dpPlusFrc(vec3 a, vec3 b) {
    return mix(a, a + b, vec3(notEqual(b, vec3(0))));
  }

  vec3 dpMinusFrc(vec3 a, vec3 b) {
    return mix(vec3(0), a - b, vec3(notEqual(a, b)));
  }

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = dpPlusFrc(hiA, hiB);
    vec3 e = dpMinusFrc(t1, hiA);
    vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
    return t1 + t2;
  }

  #else

  vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
    vec3 t1 = hiA + hiB;
    vec3 e = t1 - hiA;
    vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
    return t1 + t2;
  }

  #endif

  const float MAX_RGBA_FLOAT =
    255.0 / 256.0 +
    255.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 +
    255.0 / 256.0 / 256.0 / 256.0 / 256.0;

  const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);

  vec4 float2rgba(const float value) {
    // Make sure value is in the domain we can represent
    float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);

    // Decompose value in 32bit fixed point parts represented as
    // uint8 rgba components. Decomposition uses the fractional part after multiplying
    // by a power of 256 (this removes the bits that are represented in the previous
    // component) and then converts the fractional part to 8bits.
    vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);

    // Convert uint8 values (from 0 to 255) to floating point representation for
    // the shader
    const float toU8AsFloat = 1.0 / 255.0;

    return fixedPointU8 * toU8AsFloat;
  }

  void main() {
    vec3 val = dpAdd(u_highA, u_lowA, -u_highB, -u_lowB);

    v_color = float2rgba(val.z / 25.0);

    gl_Position = vec4(position * 2.0 - 1.0, 0.0, 1.0);
  }
  `;
  return n.programCache.acquire(e, `
  precision highp float;

  varying vec4 v_color;

  void main() {
    gl_FragColor = v_color;
  }
  `, /* @__PURE__ */ new Map([["position", 0]]));
}
let At = class extends N {
  constructor(t) {
    if (super(), this._rctx = t, !t.gl || !(t.capabilities.colorBufferFloat?.textureFloat && t.capabilities.colorBufferFloat?.floatBlend)) return;
    const e = `
    precision highp float;
    attribute vec2 a_pos;

    void main() {
      gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
    }
    `, s = `
     precision highp float;

     void main() {
      gl_FragColor = vec4(0.5, 0.5, 0.5, 0.5);
     }
    `;
    this._program = t.programCache.acquire(e, s, /* @__PURE__ */ new Map([["a_pos", 0]]));
  }
  _test(t) {
    const e = this._rctx, s = new v(1);
    s.wrapMode = U.CLAMP_TO_EDGE, s.dataType = w.FLOAT, s.internalFormat = ht.RGBA32F, s.samplingMode = S.NEAREST;
    const i = new M(e, s), r = C.createVertex(e, A.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), l = new L(e, /* @__PURE__ */ new Map([["a_pos", 0]]), { geometry: [new X("a_pos", 2, x.UNSIGNED_SHORT, 0, 4)] }, { geometry: r });
    e.useProgram(t);
    const h = e.getBoundFramebufferObject(), { x: u, y: o, width: _, height: c } = e.getViewport();
    e.bindFramebuffer(i), e.setViewport(0, 0, 1, 1), e.bindVAO(l), e.drawArrays(d.TRIANGLE_STRIP, 0, 4);
    const E = ft({ blending: ct });
    e.setPipelineState(E), e.drawArrays(d.TRIANGLE_STRIP, 0, 4);
    const p = e.gl.getError();
    return e.setViewport(u, o, _, c), e.bindFramebuffer(h), l.dispose(), i.dispose(), p !== 1282 || (console.warn("Device claims support for WebGL extension EXT_float_blend but does not support it. Using fall back."), !1);
  }
};
class xt extends N {
  constructor(t) {
    super(), this._rctx = t;
    const e = `
      precision highp float;
      attribute vec2 a_pos;
      uniform highp sampler2D u_texture;
      varying vec4 v_color;

      float getBit(in float bitset, in int bitIndex) {
        float offset = pow(2.0, float(bitIndex));
        return mod(floor(bitset / offset), 2.0);
      }

      void main() {
        vec4 value = texture2D(u_texture, vec2(0.0));
        float bit = getBit(value.x * 255.0, 1);

        v_color = bit * vec4(1.0);
        gl_Position = vec4(a_pos * 2.0 - 1.0, 0.0, 1.0);
      }
      `, s = `
      precision highp float;
      varying vec4 v_color;

      void main() {
        gl_FragColor = v_color;
      }
      `;
    this._program = t.programCache.acquire(e, s, /* @__PURE__ */ new Map([["a_pos", 0]]));
  }
  _test(t) {
    const e = this._rctx, s = new v(1);
    s.wrapMode = U.CLAMP_TO_EDGE, s.samplingMode = S.NEAREST;
    const i = new M(e, s), r = new Uint8Array(4), l = C.createVertex(e, A.STATIC_DRAW, new Uint16Array([0, 0, 1, 0, 0, 1, 1, 1])), h = new L(e, /* @__PURE__ */ new Map([["a_position", 0]]), { geometry: [new X("a_position", 2, x.SHORT, 0, 4)] }, { geometry: l });
    e.useProgram(t);
    const u = new et(e, s, new Uint8Array([2, 255, 0, 0]));
    t.setUniform1i("u_texture", 0), e.bindTexture(u, 0);
    const o = e.getBoundFramebufferObject();
    e.bindFramebuffer(i), e.useProgram(t);
    const { x: _, y: c, width: E, height: p } = e.getViewport();
    e.setViewport(0, 0, 1, 1), e.bindVAO(h), e.drawArrays(d.TRIANGLE_STRIP, 0, 4), e.setViewport(_, c, E, p), i.readPixels(0, 0, 1, 1, G.RGBA, w.UNSIGNED_BYTE, r), h.dispose(), i.dispose();
    const $ = r[0] !== 255 || r[1] !== 255 || r[2] !== 255 || r[3] !== 255;
    return $ && nt.getLogger("esri.views.webgl.testSamplerPrecision").warn(`A problem was detected with your graphics driver. Your driver does not appear to honor sampler precision specifiers, which may result in rendering issues due to numerical instability. We recommend ensuring that your drivers have been updated to the latest version. Applying lowp sampler workaround. [${r[0]}.${r[1]}.${r[2]}.${r[3]}]`), e.bindFramebuffer(o), $;
  }
}
class St {
  constructor(t) {
    this.rctx = t, this.floatBufferBlend = new At(t), this.svgPremultipliesAlpha = new Et(t), this.doublePrecisionRequiresObfuscation = new Tt(t), this.ignoresSamplerPrecision = new xt(t), this.drawArraysRequiresIndicesTypeReset = new Bt(t);
  }
  dispose() {
    this.ignoresSamplerPrecision.dispose(), this.doublePrecisionRequiresObfuscation.dispose(), this.svgPremultipliesAlpha.dispose(), this.floatBufferBlend.dispose(), this.drawArraysRequiresIndicesTypeReset.dispose();
  }
}
function Ct(n, t) {
  if (t.compressedTextureETC) return null;
  const e = n.getExtension("WEBGL_compressed_texture_etc");
  return e ? { COMPRESSED_R11_EAC: e.COMPRESSED_R11_EAC, COMPRESSED_SIGNED_R11_EAC: e.COMPRESSED_SIGNED_R11_EAC, COMPRESSED_RG11_EAC: e.COMPRESSED_RG11_EAC, COMPRESSED_SIGNED_RG11_EAC: e.COMPRESSED_SIGNED_RG11_EAC, COMPRESSED_RGB8_ETC2: e.COMPRESSED_RGB8_ETC2, COMPRESSED_SRGB8_ETC2: e.COMPRESSED_SRGB8_ETC2, COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2: e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2: e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2, COMPRESSED_RGBA8_ETC2_EAC: e.COMPRESSED_RGBA8_ETC2_EAC, COMPRESSED_SRGB8_ALPHA8_ETC2_EAC: e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC } : null;
}
function Ot(n, t) {
  if (t.compressedTextureS3TC) return null;
  const e = n.getExtension("WEBGL_compressed_texture_s3tc");
  return e ? { COMPRESSED_RGB_S3TC_DXT1: e.COMPRESSED_RGB_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT1: e.COMPRESSED_RGBA_S3TC_DXT1_EXT, COMPRESSED_RGBA_S3TC_DXT3: e.COMPRESSED_RGBA_S3TC_DXT3_EXT, COMPRESSED_RGBA_S3TC_DXT5: e.COMPRESSED_RGBA_S3TC_DXT5_EXT } : null;
}
function Pt(n, t) {
  if (t.textureFilterAnisotropic) return null;
  const e = n.getExtension("EXT_texture_filter_anisotropic") || n.getExtension("MOZ_EXT_texture_filter_anisotropic") || n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
  return e ? { MAX_TEXTURE_MAX_ANISOTROPY: e.MAX_TEXTURE_MAX_ANISOTROPY_EXT, TEXTURE_MAX_ANISOTROPY: e.TEXTURE_MAX_ANISOTROPY_EXT } : null;
}
function vt(n, t) {
  const e = !t.colorBufferHalfFloat && n.getExtension("EXT_color_buffer_half_float") || !t.colorBufferFloat && n.getExtension("EXT_color_buffer_float"), s = !t.colorBufferFloat && n.getExtension("EXT_color_buffer_float"), i = !t.floatBlend && !t.colorBufferFloat && n.getExtension("EXT_float_blend");
  return e || s || i ? { textureFloat: !!s, textureHalfFloat: !!e, floatBlend: !!i, R16F: n.R16F, RG16F: n.RG16F, RGBA16F: n.RGBA16F, R32F: n.R32F, RG32F: n.RG32F, RGBA32F: n.RGBA32F, R11F_G11F_B10F: n.R11F_G11F_B10F, RGB16F: n.RGB16F } : null;
}
function J(n, t, e, s, i) {
  if (s) return !0;
  if (t[e]) return !1;
  for (const r of i) if (n.getExtension(r)) return !0;
  return !1;
}
function Ut(n, t) {
  if (t.textureNorm16) return null;
  const e = n.getExtension("EXT_texture_norm16");
  return e ? { R16: e.R16_EXT, RG16: e.RG16_EXT, RGB16: e.RGB16_EXT, RGBA16: e.RGBA16_EXT, R16_SNORM: e.R16_SNORM_EXT, RG16_SNORM: e.RG16_SNORM_EXT, RGB16_SNORM: e.RGB16_SNORM_EXT, RGBA16_SNORM: e.RGBA16_SNORM_EXT } : null;
}
function wt(n, t) {
  const e = t.loseContext && n.getExtension("WEBGL_lose_context");
  return e ? { loseRenderingContext: () => e.loseContext() } : null;
}
class Mt {
  constructor(t, e) {
    this._gl = t, this._compressedTextureETC = null, this._compressedTextureS3TC = null, this._textureFilterAnisotropic = null, this._textureFloat = null, this._colorBufferFloat = null, this._loseContext = null, this._textureNorm16 = null, this._depthTexture = null, this._textureFloatLinear = null, this._disabledExtensions = e.disabledExtensions || {}, this._debugWebGLExtensions = e.debugWebGLExtensions || {};
  }
  get compressedTextureETC() {
    return this._compressedTextureETC || (this._compressedTextureETC = Ct(this._gl, this._disabledExtensions)), this._compressedTextureETC;
  }
  get compressedTextureS3TC() {
    return this._compressedTextureS3TC || (this._compressedTextureS3TC = Ot(this._gl, this._disabledExtensions)), this._compressedTextureS3TC;
  }
  get textureFilterAnisotropic() {
    return this._textureFilterAnisotropic || (this._textureFilterAnisotropic = Pt(this._gl, this._disabledExtensions)), this._textureFilterAnisotropic;
  }
  get disjointTimerQuery() {
    return this._disjointTimerQuery || (this._disjointTimerQuery = gt(this._gl, this._disabledExtensions)), this._disjointTimerQuery;
  }
  get textureFloat() {
    if (!this._textureFloat) {
      const { textureFloatLinear: t } = this._disabledExtensions;
      this._textureFloat = { textureFloatLinear: !t && !!this._gl.getExtension("OES_texture_float_linear") };
    }
    return this._textureFloat;
  }
  get colorBufferFloat() {
    return this._colorBufferFloat || (this._colorBufferFloat = vt(this._gl, this._disabledExtensions)), this._colorBufferFloat;
  }
  get depthTexture() {
    return this._depthTexture === null && (this._depthTexture = J(this._gl, this._disabledExtensions, "depthTexture", !0, ["WEBGL_depth_texture", "MOZ_WEBGL_depth_texture", "WEBKIT_WEBGL_depth_texture"])), this._depthTexture;
  }
  get loseContext() {
    return this._loseContext || (this._loseContext = wt(this._gl, this._debugWebGLExtensions)), this._loseContext;
  }
  get textureNorm16() {
    return this._textureNorm16 || (this._textureNorm16 = Ut(this._gl, this._disabledExtensions)), this._textureNorm16;
  }
  get textureFloatLinear() {
    return this._textureFloatLinear === null && (this._textureFloatLinear = J(this._gl, this._disabledExtensions, "textureFloatLinear", !1, ["OES_texture_float_linear"])), this._textureFloatLinear;
  }
  enable(t) {
    return this[t];
  }
}
let Qt = class {
  constructor(t, e) {
    this.gl = t, this.instanceCounter = new Rt(), this.programCache = new rt(this), this._transformFeedbackRequestInfo = null, this._state = new Z(), this._numOfDrawCalls = 0, this._numOfTriangles = 0, this._loadExtensions(), this.configure(e);
  }
  configure(t) {
    this._capabilities = new Mt(this.gl, t), this._parameters = new mt(this.gl, this._capabilities, t), et.TEXTURE_UNIT_FOR_UPDATES = this._parameters.maxTextureImageUnits - 1;
    const e = this.gl.getParameter(this.gl.VIEWPORT);
    this._state = new Z(), this._state.viewport = { x: e[0], y: e[1], width: e[2], height: e[3] }, this._stateTracker = new dt({ setBlending: (s) => {
      if (s) {
        this.setBlendingEnabled(!0), this.setBlendEquationSeparate(s.opRgb, s.opAlpha), this.setBlendFunctionSeparate(s.srcRgb, s.dstRgb, s.srcAlpha, s.dstAlpha);
        const i = s.color;
        this.setBlendColor(i.r, i.g, i.b, i.a);
      } else this.setBlendingEnabled(!1);
    }, setCulling: (s) => {
      s ? (this.setFaceCullingEnabled(!0), this.setCullFace(s.face), this.setFrontFace(s.mode)) : this.setFaceCullingEnabled(!1);
    }, setPolygonOffset: (s) => {
      s ? (this.setPolygonOffsetFillEnabled(!0), this.setPolygonOffset(s.factor, s.units)) : this.setPolygonOffsetFillEnabled(!1);
    }, setDepthTest: (s) => {
      s ? (this.setDepthTestEnabled(!0), this.setDepthFunction(s.func)) : this.setDepthTestEnabled(!1);
    }, setStencilTest: (s) => {
      if (s) {
        this.setStencilTestEnabled(!0);
        const i = s.function;
        this.setStencilFunction(i.func, i.ref, i.mask);
        const r = s.operation;
        this.setStencilOp(r.fail, r.zFail, r.zPass);
      } else this.setStencilTestEnabled(!1);
    }, setDepthWrite: (s) => {
      s ? (this.setDepthWriteEnabled(!0), this.setDepthRange(s.zNear, s.zFar)) : this.setDepthWriteEnabled(!1);
    }, setColorWrite: (s) => {
      s ? this.setColorMask(s.r, s.g, s.b, s.a) : this.setColorMask(!1, !1, !1, !1);
    }, setStencilWrite: (s) => {
      s ? this.setStencilWriteMask(s.mask) : this.setStencilWriteMask(0);
    }, setDrawBuffers: (s) => {
      const { gl: i } = this;
      if (s) i.drawBuffers(s.buffers);
      else {
        const { drawFramebuffer: r } = this._state;
        r === null || r.colorAttachments.length === 0 ? i.drawBuffers([_t.BACK]) : i.drawBuffers([z.COLOR_ATTACHMENT0]);
      }
    } }), this.enforceState(), y(this._driverTest), this._driverTest = new St(this);
  }
  dispose() {
    y(this._driverTest), this.programCache.dispose(), this.bindVAO(null), this.unbindBuffer(a.ARRAY_BUFFER), this.unbindBuffer(a.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(a.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(a.PIXEL_PACK_BUFFER), this.unbindBuffer(a.PIXEL_UNPACK_BUFFER), this.unbindBuffer(a.COPY_READ_BUFFER), this.unbindBuffer(a.COPY_WRITE_BUFFER), this._state.textureUnitMap.length = 0, b() && console.log(this.instanceCounter.resourceInformation);
  }
  get driverTest() {
    return this._driverTest;
  }
  get contextAttributes() {
    return this.gl.getContextAttributes();
  }
  get parameters() {
    return this._parameters;
  }
  setPipelineState(t) {
    this._stateTracker.setPipeline(t);
  }
  setBlendingEnabled(t) {
    this._state.blend !== t && (t === !0 ? this.gl.enable(this.gl.BLEND) : this.gl.disable(this.gl.BLEND), this._state.blend = t, this._stateTracker.invalidateBlending());
  }
  externalProgramUpdate() {
    this._state.program?.stop(), this._state.program = null;
  }
  externalTextureUnitUpdate(t, e) {
    for (let s = 0; s < t.length; ++s) this._state.textureUnitMap[t[s]] = null;
    e >= 0 && (this._state.activeTexture = e);
  }
  externalVertexArrayObjectUpdate() {
    this.gl.bindVertexArray(null), this._state.vertexArrayObject = null, this._state.vertexBuffer = null, this._state.indexBuffer = null;
  }
  externalVertexBufferUpdate() {
    this._state.vertexBuffer = null;
  }
  externalIndexBufferUpdate() {
    this._state.indexBuffer = null;
  }
  setBlendColor(t, e, s, i) {
    t === this._state.blendColor.r && e === this._state.blendColor.g && s === this._state.blendColor.b && i === this._state.blendColor.a || (this.gl.blendColor(t, e, s, i), this._state.blendColor.r = t, this._state.blendColor.g = e, this._state.blendColor.b = s, this._state.blendColor.a = i, this._stateTracker.invalidateBlending());
  }
  setBlendFunction(t, e) {
    t === this._state.blendFunction.srcRGB && e === this._state.blendFunction.dstRGB || (this.gl.blendFunc(t, e), this._state.blendFunction.srcRGB = t, this._state.blendFunction.srcAlpha = t, this._state.blendFunction.dstRGB = e, this._state.blendFunction.dstAlpha = e, this._stateTracker.invalidateBlending());
  }
  setBlendFunctionSeparate(t, e, s, i) {
    this._state.blendFunction.srcRGB === t && this._state.blendFunction.srcAlpha === s && this._state.blendFunction.dstRGB === e && this._state.blendFunction.dstAlpha === i || (this.gl.blendFuncSeparate(t, e, s, i), this._state.blendFunction.srcRGB = t, this._state.blendFunction.srcAlpha = s, this._state.blendFunction.dstRGB = e, this._state.blendFunction.dstAlpha = i, this._stateTracker.invalidateBlending());
  }
  setBlendEquation(t) {
    this._state.blendEquation.mode !== t && (this.gl.blendEquation(t), this._state.blendEquation.mode = t, this._state.blendEquation.modeAlpha = t, this._stateTracker.invalidateBlending());
  }
  setBlendEquationSeparate(t, e) {
    this._state.blendEquation.mode === t && this._state.blendEquation.modeAlpha === e || (this.gl.blendEquationSeparate(t, e), this._state.blendEquation.mode = t, this._state.blendEquation.modeAlpha = e, this._stateTracker.invalidateBlending());
  }
  setColorMask(t, e, s, i) {
    this._state.colorMask.r === t && this._state.colorMask.g === e && this._state.colorMask.b === s && this._state.colorMask.a === i || (this.gl.colorMask(t, e, s, i), this._state.colorMask.r = t, this._state.colorMask.g = e, this._state.colorMask.b = s, this._state.colorMask.a = i, this._stateTracker.invalidateColorWrite());
  }
  setClearColor(t, e, s, i) {
    this._state.clearColor.r === t && this._state.clearColor.g === e && this._state.clearColor.b === s && this._state.clearColor.a === i || (this.gl.clearColor(t, e, s, i), this._state.clearColor.r = t, this._state.clearColor.g = e, this._state.clearColor.b = s, this._state.clearColor.a = i);
  }
  setFaceCullingEnabled(t) {
    this._state.faceCulling !== t && (t === !0 ? this.gl.enable(this.gl.CULL_FACE) : this.gl.disable(this.gl.CULL_FACE), this._state.faceCulling = t, this._stateTracker.invalidateCulling());
  }
  setPolygonOffsetFillEnabled(t) {
    this._state.polygonOffsetFill !== t && (t === !0 ? this.gl.enable(this.gl.POLYGON_OFFSET_FILL) : this.gl.disable(this.gl.POLYGON_OFFSET_FILL), this._state.polygonOffsetFill = t, this._stateTracker.invalidatePolygonOffset());
  }
  setPolygonOffset(t, e) {
    this._state.polygonOffset[0] === t && this._state.polygonOffset[1] === e || (this._state.polygonOffset[0] = t, this._state.polygonOffset[1] = e, this.gl.polygonOffset(t, e), this._stateTracker.invalidatePolygonOffset());
  }
  setCullFace(t) {
    this._state.cullFace !== t && (this.gl.cullFace(t), this._state.cullFace = t, this._stateTracker.invalidateCulling());
  }
  setFrontFace(t) {
    this._state.frontFace !== t && (this.gl.frontFace(t), this._state.frontFace = t, this._stateTracker.invalidateCulling());
  }
  setScissorTestEnabled(t) {
    this._state.scissorTest !== t && (t === !0 ? this.gl.enable(this.gl.SCISSOR_TEST) : this.gl.disable(this.gl.SCISSOR_TEST), this._state.scissorTest = t);
  }
  setScissorRect(t, e, s, i) {
    this._state.scissorRect.x === t && this._state.scissorRect.y === e && this._state.scissorRect.width === s && this._state.scissorRect.height === i || (this.gl.scissor(t, e, s, i), this._state.scissorRect.x = t, this._state.scissorRect.y = e, this._state.scissorRect.width = s, this._state.scissorRect.height = i);
  }
  setDepthTestEnabled(t) {
    this._state.depthTest !== t && (t === !0 ? this.gl.enable(this.gl.DEPTH_TEST) : this.gl.disable(this.gl.DEPTH_TEST), this._state.depthTest = t, this._stateTracker.invalidateDepthTest());
  }
  setClearDepth(t) {
    this._state.clearDepth !== t && (this.gl.clearDepth(t), this._state.clearDepth = t);
  }
  setDepthFunction(t) {
    this._state.depthFunction !== t && (this.gl.depthFunc(t), this._state.depthFunction = t, this._stateTracker.invalidateDepthTest());
  }
  setDepthWriteEnabled(t) {
    this._state.depthWrite !== t && (this.gl.depthMask(t), this._state.depthWrite = t, this._stateTracker.invalidateDepthWrite());
  }
  setDepthRange(t, e) {
    this._state.depthRange.zNear === t && this._state.depthRange.zFar === e || (this.gl.depthRange(t, e), this._state.depthRange.zNear = t, this._state.depthRange.zFar = e, this._stateTracker.invalidateDepthWrite());
  }
  setStencilTestEnabled(t) {
    this._state.stencilTest !== t && (t === !0 ? this.gl.enable(this.gl.STENCIL_TEST) : this.gl.disable(this.gl.STENCIL_TEST), this._state.stencilTest = t, this._stateTracker.invalidateStencilTest());
  }
  setClearStencil(t) {
    t !== this._state.clearStencil && (this.gl.clearStencil(t), this._state.clearStencil = t);
  }
  setStencilFunction(t, e, s) {
    this._state.stencilFunction.func === t && this._state.stencilFunction.ref === e && this._state.stencilFunction.mask === s || (this.gl.stencilFunc(t, e, s), this._state.stencilFunction.face = R.FRONT_AND_BACK, this._state.stencilFunction.func = t, this._state.stencilFunction.ref = e, this._state.stencilFunction.mask = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilFunctionSeparate(t, e, s, i) {
    this._state.stencilFunction.face === t && this._state.stencilFunction.func === e && this._state.stencilFunction.ref === s && this._state.stencilFunction.mask === i || (this.gl.stencilFuncSeparate(t, e, s, i), this._state.stencilFunction.face = t, this._state.stencilFunction.func = e, this._state.stencilFunction.ref = s, this._state.stencilFunction.mask = i, this._stateTracker.invalidateStencilTest());
  }
  setStencilWriteMask(t) {
    this._state.stencilWriteMask !== t && (this.gl.stencilMask(t), this._state.stencilWriteMask = t, this._stateTracker.invalidateStencilWrite());
  }
  setStencilOp(t, e, s) {
    this._state.stencilOperation.face === R.FRONT_AND_BACK && this._state.stencilOperation.fail === t && this._state.stencilOperation.zFail === e && this._state.stencilOperation.zPass === s || (this.gl.stencilOp(t, e, s), this._state.stencilOperation.face = R.FRONT_AND_BACK, this._state.stencilOperation.fail = t, this._state.stencilOperation.zFail = e, this._state.stencilOperation.zPass = s, this._stateTracker.invalidateStencilTest());
  }
  setStencilOpSeparate(t, e, s, i) {
    this._state.stencilOperation.face === t && this._state.stencilOperation.fail === e && this._state.stencilOperation.zFail === s && this._state.stencilOperation.zPass === i || (this.gl.stencilOpSeparate(t, e, s, i), this._state.stencilOperation.face = t, this._state.stencilOperation.fail = e, this._state.stencilOperation.zFail = s, this._state.stencilOperation.zPass = i, this._stateTracker.invalidateStencilTest());
  }
  setActiveTexture(t, e = !1) {
    const s = this._state.activeTexture;
    return t >= 0 && (e || t !== this._state.activeTexture) && (this.gl.activeTexture(I + t), this._state.activeTexture = t), s;
  }
  clear(t) {
    t && this.gl.clear(t);
  }
  clearSafe(t, e = 255) {
    t && (t & F.COLOR_BUFFER_BIT && this.setColorMask(!0, !0, !0, !0), t & F.DEPTH_BUFFER_BIT && this.setDepthWriteEnabled(!0), t & F.STENCIL_BUFFER_BIT && this.setStencilWriteMask(e), this.gl.clear(t));
  }
  clearFramebuffer(t, e = !1, s = !1) {
    let i = 0;
    if (t) {
      const l = Math.max(1e-13, t[3]);
      this.setClearColor(t[0], t[1], t[2], l), i |= F.COLOR_BUFFER_BIT;
    }
    e && (i |= F.DEPTH_BUFFER_BIT), s === !1 ? s = 0 : (s === !0 && (s = 255), i |= F.STENCIL_BUFFER_BIT), i && this.clearSafe(i, s);
  }
  drawArrays(t, e, s) {
    if (this._transformFeedbackRequestInfo) {
      if (t !== this._transformFeedbackRequestInfo.primitiveType) throw new Error("DrawArrays called during transform feedback, but primitiveType does not match that of the current transform feedback request");
      if (this._state.program?.hasTransformFeedbackVaryings == null) throw new Error("DrawArrays called during transform feedback, but the shader program was not linked with a transform feedback varying");
    }
    if (b()) {
      this._numOfDrawCalls++, this._numOfTriangles += tt(t, s);
      const i = this._state.textureUnitMap;
      for (let r = 0; r < i.length; r++) {
        const l = i[r];
        if (l != null && l === this._state.drawFramebuffer?.colorTexture) throw new Error(`Detected readWrite. Texture already bound at index ${r}`);
      }
    }
    this.gl.drawArrays(t, e, s), q(this.gl);
  }
  drawArraysInstanced(t, e, s, i) {
    this.gl.drawArraysInstanced(t, e, s, i), q(this.gl);
  }
  drawElements(t, e, s, i) {
    if (this._transformFeedbackRequestInfo) throw new Error("Cannot called drawElements during a transform feedback request");
    if (b() && (this._numOfDrawCalls++, this._numOfTriangles += tt(t, e)), this.gl.drawElements(t, e, s, i), b()) {
      const r = ot(this);
      if (r) {
        const l = this.getBoundVAO(), h = l?.indexBuffer, u = l?.vertexBuffers, o = { indexBuffer: h, vertexBuffers: u }, _ = { mode: t, count: e, type: s, offset: i }, c = h?.size ?? 0, E = i + e, p = c < E ? `. Buffer is too small. Attempted to draw index ${E} of ${c}` : "";
        console.error(`drawElements: ${r}${p}`, { args: _, vao: o });
      }
    }
  }
  logInfo() {
    b() && console.log(`DrawCalls: ${this._numOfDrawCalls}, Triangles: ${this._numOfTriangles}`);
  }
  resetInfo() {
    b() && (this._numOfDrawCalls = 0, this._numOfTriangles = 0);
  }
  get capabilities() {
    return this._capabilities;
  }
  setViewport(t, e, s, i) {
    s = Math.max(Math.round(s), 1), i = Math.max(Math.round(i), 1);
    const r = this._state.viewport;
    r.x === t && r.y === e && r.width === s && r.height === i || (r.x = t, r.y = e, r.width = s, r.height = i, this.gl.viewport(t, e, s, i));
  }
  setViewport4fv(t) {
    this.setViewport(t[0], t[1], t[2], t[3]);
  }
  restoreViewport({ x: t, y: e, width: s, height: i }) {
    this.setViewport(t, e, s, i);
  }
  getViewport() {
    const t = this._state.viewport;
    return { x: t.x, y: t.y, width: t.width, height: t.height };
  }
  useProgram(t) {
    this._state.program !== t && (this._state.program?.stop(), this._state.program = t, this.gl.useProgram(t?.glName ?? null));
  }
  bindTexture(t, e, s = !1) {
    (e >= this.parameters.maxTextureImageUnits || e < 0) && console.error("Input texture unit is out of range of available units!");
    const i = this._state.textureUnitMap[e];
    return t?.glName == null ? (i != null && (this.setActiveTexture(e, s), this.gl.bindTexture(i.descriptor.target, null)), this._state.textureUnitMap[e] = null, i) : s || i !== t ? (this.setActiveTexture(e, s), this.gl.bindTexture(t.descriptor.target, t.glName), t.applyChanges(), this._state.textureUnitMap[e] = t, i) : (t.isDirty && (this.setActiveTexture(e, s), t.applyChanges()), i);
  }
  unbindTexture(t) {
    if (t != null) for (let e = 0; e < this.parameters.maxTextureImageUnits; e++) this._state.textureUnitMap[e] === t && (this.bindTexture(null, e), this._state.textureUnitMap[e] = null);
  }
  bindFramebuffer(t, e = !1) {
    if (e || this._state.readFramebuffer !== t || this._state.drawFramebuffer !== t) {
      if (this._stateTracker.invalidateDrawBuffers(), t == null) return this.gl.bindFramebuffer(g.FRAMEBUFFER, null), void (this._state.readFramebuffer = this._state.drawFramebuffer = null);
      t.initializeAndBind(g.FRAMEBUFFER), this._state.readFramebuffer = t, this._state.drawFramebuffer = t;
    }
  }
  bindFramebufferSeparate(t, e, s = !1) {
    const i = e === g.READ_FRAMEBUFFER, r = i ? this._state.readFramebuffer : this._state.drawFramebuffer;
    (s || r !== t) && (t == null ? this.gl.bindFramebuffer(e, null) : t.initializeAndBind(e), i ? this._state.readFramebuffer = t ?? null : this._state.drawFramebuffer = t ?? null);
  }
  blitFramebuffer(t, e, s = 0, i = 0, r = t.width, l = t.height, h = 0, u = 0, o = e.width, _ = e.height, c = F.COLOR_BUFFER_BIT, E = S.NEAREST) {
    this.bindFramebufferSeparate(t, g.READ_FRAMEBUFFER), this.bindFramebufferSeparate(e, g.DRAW_FRAMEBUFFER), this.gl.blitFramebuffer(s, i, r, l, h, u, o, _, c, E);
  }
  bindBuffer(t, e) {
    if (t) switch (e ??= t.bufferType, e) {
      case a.ARRAY_BUFFER:
        this._state.vertexBuffer = f(this.gl, t, e, this._state.vertexBuffer);
        break;
      case a.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = f(this.gl, t, e, this._state.indexBuffer);
        break;
      case a.UNIFORM_BUFFER:
        this._state.uniformBuffer = f(this.gl, t, e, this._state.uniformBuffer);
        break;
      case a.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = f(this.gl, t, e, this._state.pixelPackBuffer);
        break;
      case a.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = f(this.gl, t, e, this._state.pixelUnpackBuffer);
        break;
      case a.COPY_READ_BUFFER:
        this._state.copyReadBuffer = f(this.gl, t, e, this._state.copyReadBuffer);
        break;
      case a.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = f(this.gl, t, e, this._state.copyWriteBuffer);
        break;
      case a.TRANSFORM_FEEDBACK_BUFFER:
        this._state.transformFeedbackBuffer = f(this.gl, t, e, this._state.transformFeedbackBuffer);
    }
  }
  bindRenderbuffer(t) {
    const e = this.gl;
    t || (e.bindRenderbuffer(e.RENDERBUFFER, null), this._state.renderbuffer = null), this._state.renderbuffer !== t && (e.bindRenderbuffer(e.RENDERBUFFER, t.glName), this._state.renderbuffer = t);
  }
  _getBufferBinding(t, e) {
    if (e >= this.parameters.maxUniformBufferBindings || e < 0) return console.error("Uniform buffer binding point is out of range!"), null;
    const s = t === a.UNIFORM_BUFFER ? this._state.uniformBufferBindingPoints : this._state.transformBufferBindingPoints;
    let i = s[e];
    return i == null && (i = { buffer: null, offset: 0, size: 0 }, s[e] = i), i;
  }
  bindBufferBase(t, e, s) {
    const i = this._getBufferBinding(t, e);
    i != null && (i.buffer === s && i.offset === 0 && i.size === 0 || (this.gl.bindBufferBase(t, e, s ? s.glName : null), i.buffer = s, i.offset = 0, i.size = 0));
  }
  bindBufferRange(t, e, s, i, r) {
    const l = this._getBufferBinding(t, e);
    l != null && (l.buffer === s && l.offset === i && l.size === r || (i % this._parameters.uniformBufferOffsetAlignment == 0 ? (this.gl.bindBufferRange(t, e, s.glName, i, r), l.buffer = s, l.offset = i, l.size = r) : console.error("Uniform buffer binding offset is not a multiple of the context offset alignment")));
  }
  bindUBO(t, e, s, i) {
    e != null ? (b() && (i ?? e.byteLength) > this._parameters.maxUniformBlockSize && console.error("Attempting to bind more data than the maximum uniform block size"), e.initialize(), s !== void 0 && i !== void 0 ? this.bindBufferRange(a.UNIFORM_BUFFER, t, e.buffer, s, i) : this.bindBufferBase(a.UNIFORM_BUFFER, t, e.buffer)) : this.bindBufferBase(a.UNIFORM_BUFFER, t, null);
  }
  unbindUBO(t) {
    for (let e = 0, s = this._state.uniformBufferBindingPoints.length; e < s; e++) {
      const i = this._state.uniformBufferBindingPoints[e];
      i != null && i.buffer === t.buffer && this.bindBufferBase(a.UNIFORM_BUFFER, e, null);
    }
  }
  unbindBuffer(t) {
    switch (t) {
      case a.ARRAY_BUFFER:
        this._state.vertexBuffer = f(this.gl, null, t, this._state.vertexBuffer);
        break;
      case a.ELEMENT_ARRAY_BUFFER:
        this._state.indexBuffer = f(this.gl, null, t, this._state.indexBuffer);
        break;
      case a.UNIFORM_BUFFER:
        this._state.uniformBuffer = f(this.gl, null, t, this._state.uniformBuffer);
        break;
      case a.PIXEL_PACK_BUFFER:
        this._state.pixelPackBuffer = f(this.gl, null, t, this._state.pixelPackBuffer);
        break;
      case a.PIXEL_UNPACK_BUFFER:
        this._state.pixelUnpackBuffer = f(this.gl, null, t, this._state.pixelUnpackBuffer);
        break;
      case a.COPY_READ_BUFFER:
        this._state.copyReadBuffer = f(this.gl, null, t, this._state.copyReadBuffer);
        break;
      case a.COPY_WRITE_BUFFER:
        this._state.copyWriteBuffer = f(this.gl, null, t, this._state.copyWriteBuffer);
    }
  }
  bindVAO(t = null) {
    t != null ? this._state.vertexArrayObject !== t && (t.bind(), this._state.vertexArrayObject = t) : this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null);
  }
  bindTransformFeedback(t) {
    const { gl: e } = this;
    e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, t.glName);
  }
  beginTransformFeedback(t, e) {
    if (this._transformFeedbackRequestInfo) throw new Error("Already in a transform feedback request");
    const { gl: s } = this;
    s.bindTransformFeedback(s.TRANSFORM_FEEDBACK, t.glName), s.beginTransformFeedback(e), this._transformFeedbackRequestInfo = { primitiveType: e };
  }
  endTransformFeedback() {
    if (!this._transformFeedbackRequestInfo) throw new Error("Not in a transform feedback request");
    const { gl: t } = this;
    t.endTransformFeedback(), t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null), this._transformFeedbackRequestInfo = null;
  }
  async clientWaitAsync(t = lt(10)) {
    const { gl: e } = this, s = e.fenceSync(ut.SYNC_GPU_COMMANDS_COMPLETE, 0);
    if (!s) throw new Error("Client wait failed, could not create sync object");
    let i;
    this.instanceCounter.increment(B.Sync, s), e.flush();
    do
      await at(t), i = e.clientWaitSync(s, 0, 0);
    while (i === H.TIMEOUT_EXPIRED);
    if (this.instanceCounter.decrement(B.Sync, s), e.deleteSync(s), i === H.WAIT_FAILED) throw new Error("Client wait failed");
  }
  getBoundFramebufferObject(t = g.FRAMEBUFFER) {
    return t === g.READ_FRAMEBUFFER ? this._state.readFramebuffer : this._state.drawFramebuffer;
  }
  getBoundVAO() {
    return this._state.vertexArrayObject;
  }
  resetState() {
    this.useProgram(null), this.bindVAO(null), this.bindFramebuffer(null, !0), this.unbindBuffer(a.ARRAY_BUFFER), this.unbindBuffer(a.ELEMENT_ARRAY_BUFFER), this.unbindBuffer(a.UNIFORM_BUFFER), this._state.uniformBufferBindingPoints.length = 0, this.unbindBuffer(a.PIXEL_PACK_BUFFER), this.unbindBuffer(a.PIXEL_UNPACK_BUFFER), this.unbindBuffer(a.COPY_READ_BUFFER), this.unbindBuffer(a.COPY_WRITE_BUFFER);
    for (let t = 0; t < this.parameters.maxTextureImageUnits; ++t) this.bindTexture(null, t);
    this.setBlendingEnabled(!1), this.setBlendFunction(m.ONE, m.ZERO), this.setBlendEquation(k.ADD), this.setBlendColor(0, 0, 0, 0), this.setFaceCullingEnabled(!1), this.setCullFace(R.BACK), this.setFrontFace(st.CCW), this.setPolygonOffsetFillEnabled(!1), this.setPolygonOffset(0, 0), this.setScissorTestEnabled(!1), this.setScissorRect(0, 0, this.gl.canvas.width, this.gl.canvas.height), this.setDepthTestEnabled(!1), this.setDepthFunction(P.LESS), this.setDepthRange(0, 1), this.setStencilTestEnabled(!1), this.setStencilFunction(P.ALWAYS, 0, 0), this.setStencilOp(T.KEEP, T.KEEP, T.KEEP), this.setClearColor(0, 0, 0, 0), this.setClearDepth(1), this.setClearStencil(0), this.setColorMask(!0, !0, !0, !0), this.setStencilWriteMask(4294967295), this.setDepthWriteEnabled(!0), this.setViewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
  }
  enforceState() {
    const { gl: t } = this;
    t.bindVertexArray(null);
    for (let s = 0; s < this.parameters.maxVertexAttributes; s++) t.disableVertexAttribArray(s);
    this._state.vertexBuffer ? t.bindBuffer(this._state.vertexBuffer.bufferType, this._state.vertexBuffer.glName) : t.bindBuffer(a.ARRAY_BUFFER, null), this._state.indexBuffer ? t.bindBuffer(this._state.indexBuffer.bufferType, this._state.indexBuffer.glName) : t.bindBuffer(a.ELEMENT_ARRAY_BUFFER, null), this._state.uniformBuffer ? t.bindBuffer(this._state.uniformBuffer.bufferType, this._state.uniformBuffer.glName) : t.bindBuffer(a.UNIFORM_BUFFER, null);
    for (let s = 0; s < this._parameters.maxUniformBufferBindings; s++) {
      const i = this._state.uniformBufferBindingPoints[s];
      if (i != null) {
        const { buffer: r, offset: l, size: h } = i;
        r !== null ? l === 0 && h === 0 ? t.bindBufferBase(a.UNIFORM_BUFFER, s, r.glName) : t.bindBufferRange(a.UNIFORM_BUFFER, s, r.glName, l, h) : t.bindBufferBase(a.UNIFORM_BUFFER, s, null);
      }
    }
    if (this._state.pixelPackBuffer ? t.bindBuffer(this._state.pixelPackBuffer.bufferType, this._state.pixelPackBuffer.glName) : t.bindBuffer(a.PIXEL_PACK_BUFFER, null), this._state.pixelUnpackBuffer ? t.bindBuffer(this._state.pixelUnpackBuffer.bufferType, this._state.pixelUnpackBuffer.glName) : t.bindBuffer(a.PIXEL_UNPACK_BUFFER, null), this._state.copyReadBuffer ? t.bindBuffer(this._state.copyReadBuffer.bufferType, this._state.copyReadBuffer.glName) : t.bindBuffer(a.COPY_READ_BUFFER, null), this._state.copyWriteBuffer ? t.bindBuffer(this._state.copyWriteBuffer.bufferType, this._state.copyWriteBuffer.glName) : t.bindBuffer(a.COPY_WRITE_BUFFER, null), t.bindFramebuffer(g.READ_FRAMEBUFFER, null), t.readBuffer(t.BACK), this._state.readFramebuffer && (t.bindFramebuffer(g.READ_FRAMEBUFFER, this._state.readFramebuffer.glName), t.readBuffer(z.COLOR_ATTACHMENT0)), t.bindFramebuffer(g.DRAW_FRAMEBUFFER, this._state.drawFramebuffer?.glName ?? null), this._state.vertexArrayObject) {
      const s = this._state.vertexArrayObject;
      this._state.vertexArrayObject && (this._state.vertexArrayObject.unbind(), this._state.vertexArrayObject = null), this.bindVAO(s);
    }
    t.useProgram(this._state.program?.glName ?? null), t.blendColor(this._state.blendColor.r, this._state.blendColor.g, this._state.blendColor.b, this._state.blendColor.a), t.bindRenderbuffer(t.RENDERBUFFER, this._state.renderbuffer?.glName ?? null), this._state.blend === !0 ? t.enable(this.gl.BLEND) : t.disable(this.gl.BLEND), t.blendEquationSeparate(this._state.blendEquation.mode, this._state.blendEquation.modeAlpha), t.blendFuncSeparate(this._state.blendFunction.srcRGB, this._state.blendFunction.dstRGB, this._state.blendFunction.srcAlpha, this._state.blendFunction.dstAlpha), t.clearColor(this._state.clearColor.r, this._state.clearColor.g, this._state.clearColor.b, this._state.clearColor.a), t.clearDepth(this._state.clearDepth), t.clearStencil(this._state.clearStencil), t.colorMask(this._state.colorMask.r, this._state.colorMask.g, this._state.colorMask.b, this._state.colorMask.a), t.cullFace(this._state.cullFace), t.depthFunc(this._state.depthFunction), t.depthRange(this._state.depthRange.zNear, this._state.depthRange.zFar), this._state.depthTest === !0 ? t.enable(t.DEPTH_TEST) : t.disable(t.DEPTH_TEST), t.depthMask(this._state.depthWrite), t.frontFace(this._state.frontFace), t.lineWidth(1), this._state.faceCulling === !0 ? t.enable(t.CULL_FACE) : t.disable(t.CULL_FACE), t.polygonOffset(this._state.polygonOffset[0], this._state.polygonOffset[1]), this._state.polygonOffsetFill === !0 ? t.enable(t.POLYGON_OFFSET_FILL) : t.disable(t.POLYGON_OFFSET_FILL), t.scissor(this._state.scissorRect.x, this._state.scissorRect.y, this._state.scissorRect.width, this._state.scissorRect.height), this._state.scissorTest === !0 ? t.enable(t.SCISSOR_TEST) : t.disable(t.SCISSOR_TEST), t.stencilFunc(this._state.stencilFunction.func, this._state.stencilFunction.ref, this._state.stencilFunction.mask), t.stencilOpSeparate(this._state.stencilOperation.face, this._state.stencilOperation.fail, this._state.stencilOperation.zFail, this._state.stencilOperation.zPass), this._state.stencilTest === !0 ? t.enable(t.STENCIL_TEST) : t.disable(t.STENCIL_TEST), t.stencilMask(this._state.stencilWriteMask);
    for (let s = 0; s < this.parameters.maxTextureImageUnits; s++) {
      t.activeTexture(I + s), t.bindTexture(O.TEXTURE_2D, null), t.bindTexture(O.TEXTURE_CUBE_MAP, null), t.bindTexture(O.TEXTURE_3D, null), t.bindTexture(O.TEXTURE_2D_ARRAY, null);
      const i = this._state.textureUnitMap[s];
      i != null && t.bindTexture(i.descriptor.target, i.glName);
    }
    t.activeTexture(I + this._state.activeTexture);
    const e = this._state.viewport;
    t.viewport(e.x, e.y, e.width, e.height), this.resetInfo();
  }
  _loadExtensions() {
    this.gl.getExtension("KHR_parallel_shader_compile");
  }
};
function f(n, t, e, s) {
  return t ? s !== t && n.bindBuffer(e, t.glName) : n.bindBuffer(e, null), t;
}
function tt(n, t) {
  switch (n) {
    case d.POINTS:
      return 2 * t;
    case d.TRIANGLES:
      return t / 3;
    case d.TRIANGLE_STRIP:
    case d.TRIANGLE_FAN:
      return t - 2;
    default:
      return 0;
  }
}
export {
  qt as o,
  Qt as w
};
//# sourceMappingURL=RenderingContext-BEdbum0U.js.map
