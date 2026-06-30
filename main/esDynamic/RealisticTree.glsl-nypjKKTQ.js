import{y as e}from"./mathUtils-CK5hnLZf.js";import{n as t,t as n}from"./decorators-CYnpsqxn.js";import{A as r}from"./promiseUtils-Src651V9.js";import{t as i}from"./time-Cd0nBi0n.js";import{s as a}from"./reactiveUtils-DmufD0Fi.js";import{r as o}from"./tslib.es6-CVTII-xV.js";import{y as s}from"./vec2-Ct_ybxJk.js";import{l as c}from"./mat3-Cq_9WtPN.js";import{r as l,t as u}from"./mat3f64-Dy80iIif.js";import{a as d,r as f,s as p}from"./vec3f64-AlvO6xQn.js";import{r as m}from"./mat4f64-CfZSfBjp.js";import{j as h,n as g}from"./vec3-BvdLhmU_.js";import{i as _,n as v}from"./vec2f64-BxrAN9V8.js";import{l as y}from"./vec4-B53Z0Xys.js";import{i as b}from"./vec4f64-BgMl3sDy.js";import{g as ee}from"./enums-DbMIex2k.js";import{a as x,c as S,i as C,l as w,m as te,n as T,o as ne,r as E,s as re}from"./Emissions.glsl-DHYGZCki.js";import{n as D,t as O}from"./glsl-C3kp6zqV.js";import{t as ie}from"./Uniform-CUdn9KGj.js";import{r as ae,t as oe}from"./Texture-BybbdX_u.js";import{t as k}from"./ShaderBuilder-BteJty_U.js";import{l as se,u as ce}from"./renderState-PwAWo9ML.js";import{$ as le,B as A,J as j,Lt as ue,M as de,N as fe,Nt as M,Ot as pe,P as me,Q as he,R as ge,S as _e,V as ve,Xt as ye,Yt as be,Z as xe,Zt as Se,a as Ce,an as we,b as Te,c as Ee,cn as N,dn as De,et as P,fn as Oe,h as ke,i as Ae,in as F,kt as je,ln as Me,n as I,nn as L,o as Ne,on as Pe,q as R,qt as Fe,r as Ie,rn as Le,s as Re,sn as ze,t as Be,tt as Ve,un as He,z}from"./VertexColor.glsl-B6NvE-zG.js";import{t as Ue}from"./Texture2DBindUniform-CV4og1sD.js";import{t as We}from"./NoParameters-CWYi4J7C.js";import{a as B,n as Ge,r as Ke,t as qe}from"./AlphaCutoff-Bp9xYXyU.js";function V(e,t){switch(e.fragment.code.add(D`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(D`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(D`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function Je(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:{e.include(V,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new j(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal));let{hasModelRotationScale:i}=t;i&&n.uniforms.add(new Ne(`transformNormalGlobalFromModel`,e=>e.transformNormalGlobalFromModel)),n.code.add(D`
        void forwardNormal() {
          vNormalWorld = ${O(i,D`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:e.vertex.code.add(D`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var Ye=class extends Ce{constructor(){super(...arguments),this.transformNormalViewFromGlobal=u()}},Xe=class extends Ae{constructor(){super(...arguments),this.transformNormalGlobalFromModel=u(),this.toMapSpace=b()}};function Ze({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:n,roughnessFactor:r,emissiveTexture:i,emissiveFactor:a,occlusionTexture:o}){return e==null&&t==null&&i==null&&(a==null||g(a,f))&&o==null&&(r==null||r===1)&&(n==null||n===1)}var Qe=d(1,1,.5),$e=d(0,.6,.2),et=d(0,1,.2);function tt(e){e.vertex.code.add(D`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function nt(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(P),e.vertex.include(he),e.vertex.include(xe),e.vertex.code.add(D`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(D`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var rt=u();function it(e,t){let{hasModelTransformation:n,instancedDoublePrecision:r,instanced:i,output:a,hasVertexTangents:o}=t;n&&(e.vertex.uniforms.add(new ue(`model`,e=>e.modelTransformation??m)),e.vertex.uniforms.add(new j(`normalLocalOriginFromModel`,e=>(c(rt,e.modelTransformation??m),rt)))),i&&r&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let s=e.vertex;r&&(s.include(Re,t),s.uniforms.add(new F(`viewOriginHi`,e=>De(h(H,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),H)),new F(`viewOriginLo`,e=>Oe(h(H,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),H)))),s.code.add(D`
    vec3 getVertexInLocalOriginSpace() {
      return ${n?r?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:r?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?D`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),s.code.add(D`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${n?r?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:r?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),a===2&&(ve(s),s.code.add(D`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${n?r?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:r?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),o&&s.code.add(D`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n?r?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:r?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var H=p();function at(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new je(`symbolColorMixMode`,e=>M[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(P),e.vertex.include(he),e.vertex.include(xe),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(D`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(D`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(D`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${D.int(M.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${D.int(M.ignore)} : symbolColorMixMode;
    }
  `)}function ot(e,t){switch(t.output){case 3:case 4:case 5:case 6:e.fragment.code.add(D`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:e.fragment.code.add(D`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function U(e,t){st(e,t,new C(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function st(e,t,n){let r=e.fragment,i=t.alphaDiscardMode,a=i===0;i!==2&&i!==3||r.uniforms.add(n),r.code.add(D`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?`color.a = 1.0;`:`if (color.a < ${a?D.float(qe):`textureAlphaCutoff`}) {\n              discard;\n             } ${O(i===2,`else { color.a = 1.0; }`)}`}
    }
  `)}function ct(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 1:A(n,t),e.include(I),r.include(B,t),e.include(w,t),s&&r.uniforms.add(new T(`tex`,e=>e.texture)),n.main.add(D`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(U,t),r.main.add(D`
        discardBySlice(vpos);
        ${O(s,D`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:A(n,t),e.include(I),e.include(w,t),e.include(R,t),e.include(ot,t),r.include(B,t),e.include(Ve,t),Ie(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new T(`tex`,e=>e.texture)),n.main.add(D`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(U,t),r.main.add(D`
        discardBySlice(vpos);
        ${O(s,D`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?D`outputObjectAndLayerIdColor();`:D`outputDepth(depth);`}`);break;case 2:{A(n,t),e.include(I),e.include(V,t),e.include(Je,t),e.include(w,t),e.include(R,t),s&&r.uniforms.add(new T(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(D`
        vpos = getVertexInLocalOriginSpace();
        ${a?D`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:D`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(B,t),e.include(U,t),r.main.add(D`
        discardBySlice(vpos);
        ${O(s,D`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?D`vec3 normal = screenDerivativeNormal(vPositionView);`:D`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:A(n,t),e.include(I),e.include(w,t),e.include(R,t),s&&r.uniforms.add(new T(`tex`,e=>e.texture)),n.main.add(D`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(B,t),e.include(U,t),e.include(Ge,t),r.main.add(D`
        discardBySlice(vpos);
        ${O(s,D`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function lt(e,t){return ut(e,t)}function ut(e,t){let n=e.fragment,{hasVertexTangents:r,doubleSidedMode:i,hasNormalTexture:a,textureCoordinateType:o,bindType:s,hasNormalTextureTransform:c}=t;r?(e.attributes.add(`tangent`,`vec4`),e.varyings.add(`vTangent`,`vec4`),i===2?n.code.add(D`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):n.code.add(D`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):n.code.add(D`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),a&&o!==0&&(e.include(S,t),n.uniforms.add(s===1?new T(`normalTexture`,e=>e.textureNormal):new E(`normalTexture`,e=>e.textureNormal)),c&&(n.uniforms.add(s===1?new we(`scale`,e=>e.scale??v):new pe(`scale`,e=>e.scale??v)),n.uniforms.add(new j(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??l))),n.code.add(D`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&n.code.add(D`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),n.code.add(D`return tangentSpace * rawNormal;
}`))}var dt=3e5,ft=5e5,pt=16;function mt(){let e=new k,t=e.fragment;return e.include(Pe),e.include(ze),t.include(Me),t.include(re),t.uniforms.add(new L(`radius`,e=>W(e.camera))).code.add(D`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(D`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),t.uniforms.add(new T(`normalMap`,e=>e.normalTexture),new T(`depthMap`,e=>e.depthTexture),new C(`projScale`,e=>e.projScale),new T(`rnm`,e=>e.noiseTexture),new we(`rnmScale`,(e,t)=>s(ht,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new C(`intensity`,e=>e.intensity),new He(`screenSize`,e=>s(ht,e.camera.fullWidth,e.camera.fullHeight))).main.add(D`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragOcclusion = 1.0;
      return;
    }

    // get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 norm4 = texelFetch(normalMap, iuv, 0);
    if(norm4.a != 1.0) {
      fragOcclusion = 1.0;
      return;
    }
    vec3 norm = normalize(norm4.xyz * 2.0 - 1.0);

    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

    float sum = 0.0;
    vec3 tapPixelPos;

    vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

    // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
    // bug or deviation from CE somewhere else?
    float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

    for(int i = 0; i < ${D.int(pt)}; ++i) {
      vec2 unitOffset = reflect(sphere[i], fres).xy;
      vec2 offset = vec2(-unitOffset * radius * ps);

      // don't use current or very nearby samples
      if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
        continue;
      }

      vec2 tc = vec2(gl_FragCoord.xy + offset);
      if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
      vec2 tcTap = tc / screenSize;
      float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

      tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

      sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
    }

    // output the result
    float A = max(1.0 - sum * intensity / float(${D.int(pt)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function W(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}var ht=_(),gt=Object.freeze(Object.defineProperty({__proto__:null,build:mt,getRadius:W},Symbol.toStringTag,{value:`Module`})),_t=4;function vt(){let e=new k,t=e.fragment;return e.include(Pe),t.include(Me),t.uniforms.add(new T(`depthMap`,e=>e.depthTexture),new E(`tex`,e=>e.colorTexture),new pe(`blurSize`,e=>e.blurSize),new C(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),t.code.add(D`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${D.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),t.main.add(D`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${D.int(_t)}; r <= ${D.int(_t)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var yt=Object.freeze(Object.defineProperty({__proto__:null,build:vt},Symbol.toStringTag,{value:`Module`})),G=class extends Fe{constructor(){super(...arguments),this.shader=new be(yt,()=>import(`./SSAOBlur.glsl-CprilLW4.js`))}initializePipeline(){return ce({colorWrite:se})}};G=o([t(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],G);var bt=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,xt=class extends We{constructor(){super(...arguments),this.projScale=1}},St=class extends xt{constructor(){super(...arguments),this.intensity=1}},Ct=class extends We{},wt=class extends Ct{constructor(){super(...arguments),this.blurSize=_()}},K=class extends Fe{constructor(){super(...arguments),this.shader=new be(gt,()=>import(`./SSAO.glsl-CJ9-KGAw.js`))}initializePipeline(){return ce({colorWrite:se})}};K=o([t(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],K);var q=class extends ye{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=Se.SSAO,this.isEnabled=()=>!1,this._enableTime=i(0),this._passParameters=new St,this._drawParameters=new wt}initialize(){let e=Uint8Array.from(atob(bt),e=>e.charCodeAt(0)),t=new ae(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new oe(this.renderingContext,t,e),this.techniques.precompile(K),this.techniques.precompile(G),this.addHandles(a(()=>this.isEnabled(),()=>this._enableTime=i(0)))}destroy(){this._passParameters.noiseTexture=r(this._passParameters.noiseTexture)}render(t){let n=t.find(({name:e})=>e===`normals`),r=n?.getTexture(),a=n?.getTexture(ee);if(!r||!a)return;let o=this.techniques.get(K),c=this.techniques.get(G);if(!o.compiled||!c.compiled)return this._enableTime=i(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=i(performance.now()));let l=this.renderingContext,u=this.view.qualitySettings.fadeDuration,d=this.bindParameters,f=d.camera,p=f.relativeElevation,m=e((ft-p)/(ft-dt),0,1),h=u>0?Math.min(u,performance.now()-this._enableTime)/u:1,g=h*m;this._passParameters.normalTexture=r,this._passParameters.depthTexture=a,this._passParameters.projScale=1/f.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Tt/W(f)**6*g;let _=f.fullViewport[2],v=f.fullViewport[3],y=this.fboCache.acquire(_,v,`ssao input`,2);l.bindFramebuffer(y.fbo),l.setViewport(0,0,_,v),l.bindTechnique(o,d,this._passParameters,this._drawParameters),l.screen.draw();let b=Math.round(_/2),x=Math.round(v/2),S=this.fboCache.acquire(b,x,`ssao blur`,0);l.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=y.getTexture(),s(this._drawParameters.blurSize,0,2/v),l.bindTechnique(c,d,this._passParameters,this._drawParameters),l.setViewport(0,0,b,x),l.screen.draw(),y.release();let C=this.fboCache.acquire(b,x,Se.SSAO,0);return l.bindFramebuffer(C.fbo),l.setViewport(0,0,_,v),l.setClearColor(1,1,1,0),l.clear(16384),this._drawParameters.colorTexture=S.getTexture(),s(this._drawParameters.blurSize,2/_,0),l.bindTechnique(c,d,this._passParameters,this._drawParameters),l.setViewport(0,0,b,x),l.screen.draw(),l.setViewport4fv(f.fullViewport),S.release(),h<1&&this.requestRender(2),C}};o([n()],q.prototype,`consumes`,void 0),o([n()],q.prototype,`produces`,void 0),o([n({constructOnly:!0})],q.prototype,`isEnabled`,void 0),q=o([t(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],q);var Tt=.5;function J(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new Ue(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(D`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(D`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Et(e,t){let n=t.lightingSphericalHarmonicsOrder===void 0?2:t.lightingSphericalHarmonicsOrder;n===0?(e.uniforms.add(new F(`lightingAmbientSH0`,({lighting:e})=>h(Dt,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),e.code.add(D`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===1?(e.uniforms.add(new N(`lightingAmbientSH_R`,({lighting:e})=>y(Y,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3])),new N(`lightingAmbientSH_G`,({lighting:e})=>y(Y,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3])),new N(`lightingAmbientSH_B`,({lighting:e})=>y(Y,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3]))),e.code.add(D`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===2&&(e.uniforms.add(new F(`lightingAmbientSH0`,({lighting:e})=>h(Dt,e.sh.r[0],e.sh.g[0],e.sh.b[0])),new N(`lightingAmbientSH_R1`,({lighting:e})=>y(Y,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4])),new N(`lightingAmbientSH_G1`,({lighting:e})=>y(Y,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4])),new N(`lightingAmbientSH_B1`,({lighting:e})=>y(Y,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4])),new N(`lightingAmbientSH_R2`,({lighting:e})=>y(Y,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8])),new N(`lightingAmbientSH_G2`,({lighting:e})=>y(Y,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8])),new N(`lightingAmbientSH_B2`,({lighting:e})=>y(Y,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8]))),e.code.add(D`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(D`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var Dt=p(),Y=b();function X(e){e.uniforms.add(new F(`mainLightDirection`,e=>e.lighting.mainLight.direction))}function Z(e){e.uniforms.add(new F(`mainLightIntensity`,e=>e.lighting.mainLight.intensity))}function Ot(e){X(e),Z(e),e.code.add(D`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function kt(e){e.code.add(D`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(D`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(D`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function At(e,t){e.include(me),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(D`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(D`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(kt),e.code.add(D`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(D`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function jt(e,t){e.include(me),e.code.add(D`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(D`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(D`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(D`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(D`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Mt(e){e.code.add(D`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(D`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Nt(e){e.code.add(D`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(D`vec3 tonemapKhronosNeutral(vec3 color, float exposure) {
const float startCompression = 0.76;
const float desaturation = 0.15;
color *= exposure;
float x = min( color.r, min( color.g, color.b ) );
float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
color -= offset;
float peak = max( color.r, max( color.g, color.b ) );
if ( peak < startCompression ) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / ( peak + d - startCompression );
color *= newPeak / peak;
float g = 1.0 - 1.0 / ( desaturation * ( peak - newPeak ) + 1.0 );
return mix( color, vec3( newPeak ), g );
}`)}function Q(e){e.constants.add(`ambientBoostFactor`,`float`,_e)}function $(e){e.uniforms.add(new L(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Pt(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i}=t;e.include(J,t),n!==0&&e.include(At,t),e.include(Et,t),e.include(me),e.include(Nt,t),e.include(re);let a=!(n===2&&!i);switch(a&&e.include(Mt),e.code.add(D`
    ${O(n!==0,`const float GROUND_REFLECTANCE = 0.2;`)}
  `),Q(e),$(e),X(e),e.code.add(D`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?D`normalize(vPosWorld)`:D`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),Z(e),e.code.add(D`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),n){case 0:case 4:case 3:e.include(Ot),e.code.add(D`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:e.code.add(D`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(D`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?e.uniforms.add(new ke(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(D`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new L(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new L(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(D`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(D`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${a?D`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:D`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:X(e),Z(e),e.code.add(D`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = linearizeGamma(c);
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = delinearizeGamma(outColorLinear);
return outColor;
}`)}}function Ft(e,t){let n=e.fragment;switch(n.code.add(D`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:n.code.add(D`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:n.code.add(D`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:n.code.add(D`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function It(e,t){let n=t.pbrMode,r=e.fragment;if(n!==2&&n!==0&&n!==1)return void r.code.add(D`void applyPBRFactors() {}`);if(n===0)return void r.code.add(D`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===2)return void r.code.add(D`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:o,hasOcclusionTextureTransform:s,bindType:c}=t;(i||o)&&e.include(S,t),r.code.add(D`vec3 mrr;
float occlusion;`),i&&r.uniforms.add(c===1?new T(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new E(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),o&&r.uniforms.add(c===1?new T(`texOcclusion`,e=>e.textureOcclusion):new E(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(c===1?new x(`mrrFactors`,e=>e.mrrFactors):new ne(`mrrFactors`,e=>e.mrrFactors)),r.code.add(D`
    ${O(i,D`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${O(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${O(i,`applyMetallicRoughness(${a?`metallicRoughnessUV`:`vuv0`});`)}
      ${O(o,`applyOcclusion(${s?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Lt(e,t){let n=te(t.output)&&t.receiveShadows;n&&Ee(e,!0),e.vertex.code.add(D`
    void forwardLinearDepthToReadShadowMap() { ${O(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var Rt=class extends ie{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},zt=class extends ie{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function Bt(e){e.fragment.uniforms.add(new zt(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ht(e)}function Vt(e){e.fragment.uniforms.add(new Rt(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ht(e)}function Ht(e){let{fragment:t}=e;t.uniforms.add(new N(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new Ke(`numCascades`,e=>e.shadowMap.numCascades)),t.code.add(D`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
vec3 calculateUVZShadow(in vec3 _worldPos, in float _linearDepth, in ivec2 shadowMapSize) {
int i = _linearDepth < cascadeDistances[1] ? 0 : _linearDepth < cascadeDistances[2] ? 1 : _linearDepth < cascadeDistances[3] ? 2 : 3;
if (i >= numCascades) {
return invalidShadowmapUVZ;
}
mat4 shadowMatrix = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
vec3 lvpos = lightSpacePosition(_worldPos, shadowMatrix);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) {
return invalidShadowmapUVZ;
}
vec2 uvShadow = cascadeCoordinates(i, shadowMapSize, lvpos);
return vec3(uvShadow, lvpos.z);
}`)}function Ut(e){e.fragment.code.add(D`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var Wt=class extends ie{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}};function Gt(e,t){t.receiveShadows&&e.include(Bt),qt(e,t)}function Kt(e,t){t.receiveShadows&&e.include(Vt),qt(e,t)}function qt(e,t){e.fragment.uniforms.add(new L(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{receiveShadows:n,spherical:r}=t;e.include(Lt,t),n&&Jt(e),e.fragment.code.add(D`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:O(r,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function Jt(e){e.include(Ut),e.fragment.uniforms.add(new Wt(`shadowMap`,({shadowMap:e})=>e.depthTexture)).code.add(D`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Yt(e,t){t.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new j(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??l)).code.add(D`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(D`void forwardColorUV(){}`)}function Xt(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new j(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??l)).code.add(D`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(D`void forwardNormalUV(){}`)}function Zt(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new j(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??l)).code.add(D`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(D`void forwardEmissiveUV(){}`)}function Qt(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new j(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??l)).code.add(D`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(D`void forwardOcclusionUV(){}`)}function $t(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new j(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??l)).code.add(D`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(D`void forwardMetallicRoughnessUV(){}`)}function en(e,t){t.snowCover&&(e.uniforms.add(new L(`snowCover`,e=>e.snowCover)).code.add(D`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(D`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function tn(e){let t=new k,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,normalType:s,offsetBackfaces:c,spherical:l,snowCover:u,pbrMode:d,textureAlphaPremultiplied:f,instancedDoublePrecision:p,hasVertexColors:m,hasVertexTangents:h,hasColorTexture:g,hasNormalTexture:_,hasNormalTextureTransform:v,hasColorTextureTransform:y}=e;if(A(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(R,e),t.include(it,e),t.include(Te,e),t.include(Yt,e),!te(o))return t.include(ct,e),t;t.include(Xt,e),t.include(Zt,e),t.include(Qt,e),t.include($t,e),z(r,e),t.include(V,e),t.include(I);let b=s===0||s===1;return b&&c&&t.include(tt),t.include(lt,e),t.include(Je,e),t.include(nt,e),a.add(`vPositionLocal`,`vec3`),t.include(w,e),t.include(at,e),t.include(Be,e),r.uniforms.add(new Le(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(fe,e),r.include(P),r.include(le),t.include(p?Gt:Kt,e),r.main.add(D`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${O(b,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${O(h,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${O(b&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${D.int(M.ignore)} && vcolorExt.a < ${D.float(qe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include(Pt,e),i.include(J,e),t.include(U,e),i.include(B,e),t.include(de,e),z(i,e),i.uniforms.add(r.uniforms.get(`localOrigin`),new x(`ambient`,e=>e.ambient),new x(`diffuse`,e=>e.diffuse),new C(`opacity`,e=>e.opacity),new C(`layerOpacity`,e=>e.layerOpacity)),g&&i.uniforms.add(new T(`tex`,e=>e.texture)),t.include(It,e),i.include(At,e),i.include(ge),t.include(Ft,e),i.include(en,e),Q(i),$(i),Z(i),i.main.add(D`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${g?D`
            vec4 texColor = texture(tex, ${y?`colorUV`:`vuv0`});
            ${O(f,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:D`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${s===2?D`vec3 normal = screenDerivativeNormal(vPositionLocal);`:D`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${O(m,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${O(m,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${_?`mat3 tangentSpace = computeTangentSpace(${h?`normal`:`normal, vpos, vuv0`});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${v?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${l?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${O(u,D`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${d===1||d===2?D`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${O(u,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:D`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${O(u,`, snow`)});
  `),t}var nn=Object.freeze(Object.defineProperty({__proto__:null,build:tn},Symbol.toStringTag,{value:`Module`}));function rn(e){let t=new k,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,offsetBackfaces:s,pbrMode:c,snowCover:l,spherical:u}=e,d=c===1||c===2;if(A(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(R,e),t.include(it,e),t.include(Te,e),t.include(fe,e),!te(o))return t.include(ct,e),t;z(t.vertex,e),t.include(V,e),t.include(I),s&&t.include(tt),a.add(`vNormalWorld`,`vec3`),a.add(`localvpos`,`vec3`,{invariant:!0}),t.include(w,e),t.include(at,e),t.include(nt,e),t.include(Be,e),r.include(P),r.include(le),r.uniforms.add(new Le(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(e.instancedDoublePrecision?Gt:Kt,e),r.main.add(D`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${D.int(M.ignore)} && vcolorExt.a < ${D.float(qe)};
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${O(s,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:f,hasColorTextureTransform:p}=e;return i.include(Pt,e),i.include(J,e),t.include(U,e),i.include(B,e),t.include(de,e),z(i,e),X(i),Q(i),$(i),i.uniforms.add(r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new x(`ambient`,e=>e.ambient),new x(`diffuse`,e=>e.diffuse),new C(`opacity`,e=>e.opacity),new C(`layerOpacity`,e=>e.layerOpacity)),f&&i.uniforms.add(new T(`tex`,e=>e.texture)),t.include(It,e),i.include(At,e),i.include(ge),i.include(en,e),Z(i),i.main.add(D`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${f?`texture(tex, ${p?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${O(f,`${O(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?D`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:D`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${u?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${O(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${D`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${d?D`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${O(l,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:D`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${O(l,`, 1.0`)});`),t}var an=Object.freeze(Object.defineProperty({__proto__:null,build:rn},Symbol.toStringTag,{value:`Module`}));export{ot as C,$e as D,Ze as E,Xe as O,ft as S,Qe as T,J as _,en as a,mt as b,Ft as c,Pt as d,Nt as f,Et as g,X as h,nn as i,Ye as k,$ as l,Z as m,an as n,Kt as o,jt as p,tn as r,It as s,rn as t,Q as u,vt as v,et as w,dt as x,W as y};