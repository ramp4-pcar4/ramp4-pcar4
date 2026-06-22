const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SSAOBlur.glsl-Bx5LvkQG.js","./VertexColor.glsl-CGCZmPas.js","./store-TEwW3sPL.js","./preload-helper-BTGlBio-.js","./store-9vAoC8ak.css","./Texture-DfG05azB.js","./Clonable-BjDfsS0D.js","./Accessor-ckm1DFE8.js","./decorators-D2aC5xmm.js","./scheduling-BXSyHQTn.js","./Cyclical-CYO9PsvH.js","./JSONSupport-MKjveNE3.js","./Point-CZpR6CJC.js","./SpatialReference-CnXM4sDw.js","./enums-CsvnPRfA.js","./Evented-DmRRrx43.js","./sphere-WIJ4tg4K.js","./plane-DXDqgqh2.js","./reactiveUtils-BH6f49GZ.js","./Extent-uhoOLo58.js","./Polygon-DqgtXNxQ.js","./Polyline-khG_8Q_2.js","./aaBoundingRect-DsxD-oAt.js","./curveExtent-BDOuvPI0.js","./computeTranslationToOriginAndRotation-Dcx4cqnH.js","./projectPointToVector-Bm1Gy7Kb.js","./projectionUtils-Cexz8g53.js","./Multipoint-brB9_7JI.js","./GeographicTransformation-O3AXtk_L.js","./spatialReferenceEllipsoidUtils-C3Ryan6s.js","./projectVectorToVector-qpTaf6iY.js","./Indices-Dfi6S0bC.js","./aaBoundingBox-BKSdisoG.js","./BufferView-D9s1lKs5.js","./frustum-4ViPvfv-.js","./normalizeUtils-BCd96750.js","./jsonUtils-ByWKU8r-.js","./normalizeUtilsCommon-YKqEUf84.js","./utils-DhP2bl9F2.js","./utils-C0Q3z-vt.js","./videoUtils-DnncL-Kz.js","./image-D2PwBrJr.js","./orientedBoundingBox-DbQJXwsE.js","./quat-BnBBT9ug.js","./Emissions.glsl-DOGoT6RN.js","./glsl-D85RBwKC.js","./Uniform-FnPH-ujw.js","./AlphaCutoff-Dm0bYlmh.js","./HighlightReadBitmap.glsl-gSqhLTwZ.js","./Texture2DBindUniform-4_yYNByJ.js","./NoParameters-ZDc3QXO4.js","./HUDIntersectorResult-DYAyXmlU.js","./VertexAttributeLocations-Cv8LOkho.js","./VertexElementDescriptor-DVcI4qMB.js","./renderState-DnqNRJEw.js","./ShaderBuilder-B4XLodJj.js","./SSAO.glsl-DsLMUIeO.js"])))=>i.map(i=>d[i]);
import{$d as e,Fu as t,If as n,Ji as r,Ki as i,Li as a,Ma as o,Qv as s,Uu as c,Vu as l,Zd as u,cf as d,ra as f,wg as p,wi as m,x_ as h,zg as g,zu as _}from"./store-TEwW3sPL.js";import{t as v}from"./preload-helper-BTGlBio-.js";import{n as y,t as b}from"./decorators-D2aC5xmm.js";import{s as x}from"./reactiveUtils-BH6f49GZ.js";import{g as ee}from"./enums-CsvnPRfA.js";import{a as S,c as C,i as w,l as T,m as te,n as E,o as ne,r as D,s as re}from"./Emissions.glsl-DOGoT6RN.js";import{n as O,t as k}from"./glsl-D85RBwKC.js";import{t as ie}from"./Uniform-FnPH-ujw.js";import{r as ae,t as oe}from"./Texture-DfG05azB.js";import{t as A}from"./ShaderBuilder-B4XLodJj.js";import{l as se,u as ce}from"./renderState-DnqNRJEw.js";import{$ as le,B as j,J as M,Lt as ue,M as de,N as fe,Nt as N,Ot as pe,P as me,Q as he,R as ge,S as _e,V as ve,Xt as ye,Yt as be,Z as xe,Zt as Se,a as Ce,an as we,b as Te,c as Ee,cn as P,dn as De,et as F,fn as Oe,h as ke,i as Ae,in as I,kt as je,ln as Me,n as L,nn as R,o as Ne,on as Pe,q as z,qt as Fe,r as Ie,rn as Le,s as Re,sn as ze,t as Be,tt as Ve,un as He,z as B}from"./VertexColor.glsl-CGCZmPas.js";import{t as Ue}from"./Texture2DBindUniform-4_yYNByJ.js";import{t as We}from"./NoParameters-ZDc3QXO4.js";import{a as V,n as Ge,r as Ke,t as qe}from"./AlphaCutoff-Dm0bYlmh.js";function H(e,t){switch(e.fragment.code.add(O`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(O`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(O`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function Je(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:{e.include(H,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new M(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal));let{hasModelRotationScale:i}=t;i&&n.uniforms.add(new Ne(`transformNormalGlobalFromModel`,e=>e.transformNormalGlobalFromModel)),n.code.add(O`
        void forwardNormal() {
          vNormalWorld = ${k(i,O`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:e.vertex.code.add(O`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var Ye=class extends Ce{constructor(){super(...arguments),this.transformNormalViewFromGlobal=u()}},Xe=class extends Ae{constructor(){super(...arguments),this.transformNormalGlobalFromModel=u(),this.toMapSpace=m()}};function Ze({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:n,roughnessFactor:r,emissiveTexture:i,emissiveFactor:a,occlusionTexture:o}){return e==null&&t==null&&i==null&&(a==null||f(a,_))&&o==null&&(r==null||r===1)&&(n==null||n===1)}var Qe=l(1,1,.5),$e=l(0,.6,.2),et=l(0,1,.2);function tt(e){e.vertex.code.add(O`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function nt(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(F),e.vertex.include(he),e.vertex.include(xe),e.vertex.code.add(O`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(O`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var rt=u();function it(e,n){let{hasModelTransformation:r,instancedDoublePrecision:i,instanced:a,output:s,hasVertexTangents:c}=n;r&&(e.vertex.uniforms.add(new ue(`model`,e=>e.modelTransformation??t)),e.vertex.uniforms.add(new M(`normalLocalOriginFromModel`,e=>(d(rt,e.modelTransformation??t),rt)))),a&&i&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let l=e.vertex;i&&(l.include(Re,n),l.uniforms.add(new I(`viewOriginHi`,e=>De(o(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U)),new I(`viewOriginLo`,e=>Oe(o(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U)))),l.code.add(O`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?i?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:i?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?O`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),l.code.add(O`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?i?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:i?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),s===2&&(ve(l),l.code.add(O`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?i?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:i?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),c&&l.code.add(O`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?i?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:i?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var U=c();function at(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new je(`symbolColorMixMode`,e=>N[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(F),e.vertex.include(he),e.vertex.include(xe),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(O`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(O`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(O`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${O.int(N.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${O.int(N.ignore)} : symbolColorMixMode;
    }
  `)}function ot(e,t){switch(t.output){case 3:case 4:case 5:case 6:e.fragment.code.add(O`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 7:e.fragment.code.add(O`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function W(e,t){st(e,t,new w(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function st(e,t,n){let r=e.fragment,i=t.alphaDiscardMode,a=i===0;i!==2&&i!==3||r.uniforms.add(n),r.code.add(O`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?`color.a = 1.0;`:`if (color.a < ${a?O.float(qe):`textureAlphaCutoff`}) {\n              discard;\n             } ${k(i===2,`else { color.a = 1.0; }`)}`}
    }
  `)}function ct(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 1:j(n,t),e.include(L),r.include(V,t),e.include(T,t),s&&r.uniforms.add(new E(`tex`,e=>e.texture)),n.main.add(O`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(W,t),r.main.add(O`
        discardBySlice(vpos);
        ${k(s,O`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:j(n,t),e.include(L),e.include(T,t),e.include(z,t),e.include(ot,t),r.include(V,t),e.include(Ve,t),Ie(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new E(`tex`,e=>e.texture)),n.main.add(O`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(W,t),r.main.add(O`
        discardBySlice(vpos);
        ${k(s,O`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===9?O`outputObjectAndLayerIdColor();`:O`outputDepth(depth);`}`);break;case 2:{j(n,t),e.include(L),e.include(H,t),e.include(Je,t),e.include(T,t),e.include(z,t),s&&r.uniforms.add(new E(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(O`
        vpos = getVertexInLocalOriginSpace();
        ${a?O`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:O`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(V,t),e.include(W,t),r.main.add(O`
        discardBySlice(vpos);
        ${k(s,O`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?O`vec3 normal = screenDerivativeNormal(vPositionView);`:O`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:j(n,t),e.include(L),e.include(T,t),e.include(z,t),s&&r.uniforms.add(new E(`tex`,e=>e.texture)),n.main.add(O`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(V,t),e.include(W,t),e.include(Ge,t),r.main.add(O`
        discardBySlice(vpos);
        ${k(s,O`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function lt(e,t){return ut(e,t)}function ut(t,n){let r=t.fragment,{hasVertexTangents:a,doubleSidedMode:o,hasNormalTexture:s,textureCoordinateType:c,bindType:l,hasNormalTextureTransform:u}=n;a?(t.attributes.add(`tangent`,`vec4`),t.varyings.add(`vTangent`,`vec4`),o===2?r.code.add(O`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):r.code.add(O`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):r.code.add(O`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),s&&c!==0&&(t.include(C,n),r.uniforms.add(l===1?new E(`normalTexture`,e=>e.textureNormal):new D(`normalTexture`,e=>e.textureNormal)),u&&(r.uniforms.add(l===1?new we(`scale`,e=>e.scale??i):new pe(`scale`,e=>e.scale??i)),r.uniforms.add(new M(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??e))),r.code.add(O`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),u&&r.code.add(O`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),r.code.add(O`return tangentSpace * rawNormal;
}`))}var dt=3e5,ft=5e5,pt=16;function mt(){let e=new A,t=e.fragment;return e.include(Pe),e.include(ze),t.include(Me),t.include(re),t.uniforms.add(new R(`radius`,e=>G(e.camera))).code.add(O`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(O`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),t.uniforms.add(new E(`normalMap`,e=>e.normalTexture),new E(`depthMap`,e=>e.depthTexture),new w(`projScale`,e=>e.projScale),new E(`rnm`,e=>e.noiseTexture),new we(`rnmScale`,(e,t)=>n(ht,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new w(`intensity`,e=>e.intensity),new He(`screenSize`,e=>n(ht,e.camera.fullWidth,e.camera.fullHeight))).main.add(O`
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

    for(int i = 0; i < ${O.int(pt)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${O.int(pt)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function G(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}var ht=r(),gt=Object.freeze(Object.defineProperty({__proto__:null,build:mt,getRadius:G},Symbol.toStringTag,{value:`Module`})),_t=4;function vt(){let e=new A,t=e.fragment;return e.include(Pe),t.include(Me),t.uniforms.add(new E(`depthMap`,e=>e.depthTexture),new D(`tex`,e=>e.colorTexture),new pe(`blurSize`,e=>e.blurSize),new w(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),t.code.add(O`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${O.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),t.main.add(O`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${O.int(_t)}; r <= ${O.int(_t)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var yt=Object.freeze(Object.defineProperty({__proto__:null,build:vt},Symbol.toStringTag,{value:`Module`})),K=class extends Fe{constructor(){super(...arguments),this.shader=new be(yt,()=>v(()=>import(`./SSAOBlur.glsl-Bx5LvkQG.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]),import.meta.url))}initializePipeline(){return ce({colorWrite:se})}};K=p([y(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],K);var bt=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,xt=class extends We{constructor(){super(...arguments),this.projScale=1}},St=class extends xt{constructor(){super(...arguments),this.intensity=1}},Ct=class extends We{},wt=class extends Ct{constructor(){super(...arguments),this.blurSize=r()}},q=class extends Fe{constructor(){super(...arguments),this.shader=new be(gt,()=>v(()=>import(`./SSAO.glsl-DsLMUIeO.js`),__vite__mapDeps([56,2,3,4,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55]),import.meta.url))}initializePipeline(){return ce({colorWrite:se})}};q=p([y(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],q);var J=class extends ye{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=Se.SSAO,this.isEnabled=()=>!1,this._enableTime=g(0),this._passParameters=new St,this._drawParameters=new wt}initialize(){let e=Uint8Array.from(atob(bt),e=>e.charCodeAt(0)),t=new ae(32);t.wrapMode=33071,t.pixelFormat=6407,t.wrapMode=10497,t.hasMipmap=!0,this._passParameters.noiseTexture=new oe(this.renderingContext,t,e),this.techniques.precompile(q),this.techniques.precompile(K),this.addHandles(x(()=>this.isEnabled(),()=>this._enableTime=g(0)))}destroy(){this._passParameters.noiseTexture=h(this._passParameters.noiseTexture)}render(e){let t=e.find(({name:e})=>e===`normals`),r=t?.getTexture(),i=t?.getTexture(ee);if(!r||!i)return;let a=this.techniques.get(q),o=this.techniques.get(K);if(!a.compiled||!o.compiled)return this._enableTime=g(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=g(performance.now()));let c=this.renderingContext,l=this.view.qualitySettings.fadeDuration,u=this.bindParameters,d=u.camera,f=d.relativeElevation,p=s((ft-f)/(ft-dt),0,1),m=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,h=m*p;this._passParameters.normalTexture=r,this._passParameters.depthTexture=i,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Tt/G(d)**6*h;let _=d.fullViewport[2],v=d.fullViewport[3],y=this.fboCache.acquire(_,v,`ssao input`,2);c.bindFramebuffer(y.fbo),c.setViewport(0,0,_,v),c.bindTechnique(a,u,this._passParameters,this._drawParameters),c.screen.draw();let b=Math.round(_/2),x=Math.round(v/2),S=this.fboCache.acquire(b,x,`ssao blur`,0);c.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=y.getTexture(),n(this._drawParameters.blurSize,0,2/v),c.bindTechnique(o,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),y.release();let C=this.fboCache.acquire(b,x,Se.SSAO,0);return c.bindFramebuffer(C.fbo),c.setViewport(0,0,_,v),c.setClearColor(1,1,1,0),c.clear(16384),this._drawParameters.colorTexture=S.getTexture(),n(this._drawParameters.blurSize,2/_,0),c.bindTechnique(o,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),c.setViewport4fv(d.fullViewport),S.release(),m<1&&this.requestRender(2),C}};p([b()],J.prototype,`consumes`,void 0),p([b()],J.prototype,`produces`,void 0),p([b({constructOnly:!0})],J.prototype,`isEnabled`,void 0),J=p([y(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],J);var Tt=.5;function Y(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new Ue(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(O`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(O`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Et(e,t){let n=t.lightingSphericalHarmonicsOrder===void 0?2:t.lightingSphericalHarmonicsOrder;n===0?(e.uniforms.add(new I(`lightingAmbientSH0`,({lighting:e})=>o(Dt,e.sh.r[0],e.sh.g[0],e.sh.b[0]))),e.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):n===1?(e.uniforms.add(new P(`lightingAmbientSH_R`,({lighting:e})=>a(X,e.sh.r[0],e.sh.r[1],e.sh.r[2],e.sh.r[3])),new P(`lightingAmbientSH_G`,({lighting:e})=>a(X,e.sh.g[0],e.sh.g[1],e.sh.g[2],e.sh.g[3])),new P(`lightingAmbientSH_B`,({lighting:e})=>a(X,e.sh.b[0],e.sh.b[1],e.sh.b[2],e.sh.b[3]))),e.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):n===2&&(e.uniforms.add(new I(`lightingAmbientSH0`,({lighting:e})=>o(Dt,e.sh.r[0],e.sh.g[0],e.sh.b[0])),new P(`lightingAmbientSH_R1`,({lighting:e})=>a(X,e.sh.r[1],e.sh.r[2],e.sh.r[3],e.sh.r[4])),new P(`lightingAmbientSH_G1`,({lighting:e})=>a(X,e.sh.g[1],e.sh.g[2],e.sh.g[3],e.sh.g[4])),new P(`lightingAmbientSH_B1`,({lighting:e})=>a(X,e.sh.b[1],e.sh.b[2],e.sh.b[3],e.sh.b[4])),new P(`lightingAmbientSH_R2`,({lighting:e})=>a(X,e.sh.r[5],e.sh.r[6],e.sh.r[7],e.sh.r[8])),new P(`lightingAmbientSH_G2`,({lighting:e})=>a(X,e.sh.g[5],e.sh.g[6],e.sh.g[7],e.sh.g[8])),new P(`lightingAmbientSH_B2`,({lighting:e})=>a(X,e.sh.b[5],e.sh.b[6],e.sh.b[7],e.sh.b[8]))),e.code.add(O`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(O`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}var Dt=c(),X=m();function Z(e){e.uniforms.add(new I(`mainLightDirection`,e=>e.lighting.mainLight.direction))}function Q(e){e.uniforms.add(new I(`mainLightIntensity`,e=>e.lighting.mainLight.intensity))}function Ot(e){Z(e),Q(e),e.code.add(O`vec3 applyShading(vec3 shadingNormal, float shadow) {
float dotVal = clamp(dot(shadingNormal, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function kt(e){e.code.add(O`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(O`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(O`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function At(e,t){e.include(me),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(O`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(O`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(kt),e.code.add(O`struct PBRShadingInfo
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
};`),e.code.add(O`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function jt(e,t){e.include(me),e.code.add(O`
    struct PBRShadingWater {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(O`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(O`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(O`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(O`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Mt(e){e.code.add(O`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(O`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Nt(e){e.code.add(O`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(O`vec3 tonemapKhronosNeutral(vec3 color, float exposure) {
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
}`)}function $(e){e.constants.add(`ambientBoostFactor`,`float`,_e)}function Pt(e){e.uniforms.add(new R(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Ft(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i}=t;e.include(Y,t),n!==0&&e.include(At,t),e.include(Et,t),e.include(me),e.include(Nt,t),e.include(re);let a=!(n===2&&!i);switch(a&&e.include(Mt),e.code.add(O`
    ${k(n!==0,`const float GROUND_REFLECTANCE = 0.2;`)}
  `),$(e),Pt(e),Z(e),e.code.add(O`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?O`normalize(vPosWorld)`:O`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),Q(e),e.code.add(O`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),n){case 0:case 4:case 3:e.include(Ot),e.code.add(O`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:e.code.add(O`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),e.code.add(O`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?e.uniforms.add(new ke(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(O`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),e.uniforms.add(new R(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new R(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(O`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),e.code.add(O`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;
        ${a?O`vec3 outColor = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:O`vec3 outColor = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}
        return delinearizeGamma(outColor);
      }
    `);break;case 5:case 6:Z(e),Q(e),e.code.add(O`const float roughnessTerrain = 0.5;
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
}`)}}function It(e,t){let n=e.fragment;switch(n.code.add(O`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:n.code.add(O`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:n.code.add(O`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:n.code.add(O`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function Lt(e,t){let n=t.pbrMode,r=e.fragment;if(n!==2&&n!==0&&n!==1)return void r.code.add(O`void applyPBRFactors() {}`);if(n===0)return void r.code.add(O`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===2)return void r.code.add(O`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:o,hasOcclusionTextureTransform:s,bindType:c}=t;(i||o)&&e.include(C,t),r.code.add(O`vec3 mrr;
float occlusion;`),i&&r.uniforms.add(c===1?new E(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new D(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),o&&r.uniforms.add(c===1?new E(`texOcclusion`,e=>e.textureOcclusion):new D(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(c===1?new S(`mrrFactors`,e=>e.mrrFactors):new ne(`mrrFactors`,e=>e.mrrFactors)),r.code.add(O`
    ${k(i,O`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${k(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${k(i,`applyMetallicRoughness(${a?`metallicRoughnessUV`:`vuv0`});`)}
      ${k(o,`applyOcclusion(${s?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Rt(e,t){let n=te(t.output)&&t.receiveShadows;n&&Ee(e,!0),e.vertex.code.add(O`
    void forwardLinearDepthToReadShadowMap() { ${k(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var zt=class extends ie{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},Bt=class extends ie{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function Vt(e){e.fragment.uniforms.add(new Bt(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ut(e)}function Ht(e){e.fragment.uniforms.add(new zt(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),Ut(e)}function Ut(e){let{fragment:t}=e;t.uniforms.add(new P(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new Ke(`numCascades`,e=>e.shadowMap.numCascades)),t.code.add(O`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function Wt(e){e.fragment.code.add(O`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var Gt=class extends ie{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}};function Kt(e,t){t.receiveShadows&&e.include(Vt),Jt(e,t)}function qt(e,t){t.receiveShadows&&e.include(Ht),Jt(e,t)}function Jt(e,t){e.fragment.uniforms.add(new R(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{receiveShadows:n,spherical:r}=t;e.include(Rt,t),n&&Yt(e),e.fragment.code.add(O`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${n?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:k(r,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function Yt(e){e.include(Wt),e.fragment.uniforms.add(new Gt(`shadowMap`,({shadowMap:e})=>e.depthTexture)).code.add(O`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Xt(t,n){n.hasColorTextureTransform?(t.varyings.add(`colorUV`,`vec2`),t.vertex.uniforms.add(new M(`colorTextureTransformMatrix`,t=>t.colorTextureTransformMatrix??e)).code.add(O`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(O`void forwardColorUV(){}`)}function Zt(t,n){n.hasNormalTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`normalUV`,`vec2`),t.vertex.uniforms.add(new M(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??e)).code.add(O`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(O`void forwardNormalUV(){}`)}function Qt(t,n){n.hasEmissionTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`emissiveUV`,`vec2`),t.vertex.uniforms.add(new M(`emissiveTextureTransformMatrix`,t=>t.emissiveTextureTransformMatrix??e)).code.add(O`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(O`void forwardEmissiveUV(){}`)}function $t(t,n){n.hasOcclusionTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`occlusionUV`,`vec2`),t.vertex.uniforms.add(new M(`occlusionTextureTransformMatrix`,t=>t.occlusionTextureTransformMatrix??e)).code.add(O`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(O`void forwardOcclusionUV(){}`)}function en(t,n){n.hasMetallicRoughnessTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`metallicRoughnessUV`,`vec2`),t.vertex.uniforms.add(new M(`metallicRoughnessTextureTransformMatrix`,t=>t.metallicRoughnessTextureTransformMatrix??e)).code.add(O`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(O`void forwardMetallicRoughnessUV(){}`)}function tn(e,t){t.snowCover&&(e.uniforms.add(new R(`snowCover`,e=>e.snowCover)).code.add(O`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(O`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function nn(e){let t=new A,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,normalType:s,offsetBackfaces:c,spherical:l,snowCover:u,pbrMode:d,textureAlphaPremultiplied:f,instancedDoublePrecision:p,hasVertexColors:m,hasVertexTangents:h,hasColorTexture:g,hasNormalTexture:_,hasNormalTextureTransform:v,hasColorTextureTransform:y}=e;if(j(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(z,e),t.include(it,e),t.include(Te,e),t.include(Xt,e),!te(o))return t.include(ct,e),t;t.include(Zt,e),t.include(Qt,e),t.include($t,e),t.include(en,e),B(r,e),t.include(H,e),t.include(L);let b=s===0||s===1;return b&&c&&t.include(tt),t.include(lt,e),t.include(Je,e),t.include(nt,e),a.add(`vPositionLocal`,`vec3`),t.include(T,e),t.include(at,e),t.include(Be,e),r.uniforms.add(new Le(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(fe,e),r.include(F),r.include(le),t.include(p?Kt:qt,e),r.main.add(O`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${k(b,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${k(h,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${k(b&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${O.int(N.ignore)} && vcolorExt.a < ${O.float(qe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include(Ft,e),i.include(Y,e),t.include(W,e),i.include(V,e),t.include(de,e),B(i,e),i.uniforms.add(r.uniforms.get(`localOrigin`),new S(`ambient`,e=>e.ambient),new S(`diffuse`,e=>e.diffuse),new w(`opacity`,e=>e.opacity),new w(`layerOpacity`,e=>e.layerOpacity)),g&&i.uniforms.add(new E(`tex`,e=>e.texture)),t.include(Lt,e),i.include(At,e),i.include(ge),t.include(It,e),i.include(tn,e),$(i),Pt(i),Q(i),i.main.add(O`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${g?O`
            vec4 texColor = texture(tex, ${y?`colorUV`:`vuv0`});
            ${k(f,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:O`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${s===2?O`vec3 normal = screenDerivativeNormal(vPositionLocal);`:O`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${k(m,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${k(m,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${_?`mat3 tangentSpace = computeTangentSpace(${h?`normal`:`normal, vpos, vuv0`});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${v?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${l?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${k(u,O`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${d===1||d===2?O`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${k(u,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:O`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${k(u,`, snow`)});
  `),t}var rn=Object.freeze(Object.defineProperty({__proto__:null,build:nn},Symbol.toStringTag,{value:`Module`}));function an(e){let t=new A,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,offsetBackfaces:s,pbrMode:c,snowCover:l,spherical:u}=e,d=c===1||c===2;if(j(r,e),n.add(`position`,`vec3`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(z,e),t.include(it,e),t.include(Te,e),t.include(fe,e),!te(o))return t.include(ct,e),t;B(t.vertex,e),t.include(H,e),t.include(L),s&&t.include(tt),a.add(`vNormalWorld`,`vec3`),a.add(`localvpos`,`vec3`,{invariant:!0}),t.include(T,e),t.include(at,e),t.include(nt,e),t.include(Be,e),r.include(F),r.include(le),r.uniforms.add(new Le(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(e.instancedDoublePrecision?Kt:qt,e),r.main.add(O`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${O.int(N.ignore)} && vcolorExt.a < ${O.float(qe)};
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
    ${k(s,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:f,hasColorTextureTransform:p}=e;return i.include(Ft,e),i.include(Y,e),t.include(W,e),i.include(V,e),t.include(de,e),B(i,e),Z(i),$(i),Pt(i),i.uniforms.add(r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new S(`ambient`,e=>e.ambient),new S(`diffuse`,e=>e.diffuse),new w(`opacity`,e=>e.opacity),new w(`layerOpacity`,e=>e.layerOpacity)),f&&i.uniforms.add(new E(`tex`,e=>e.texture)),t.include(Lt,e),i.include(At,e),i.include(ge),i.include(tn,e),Q(i),i.main.add(O`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${f?`texture(tex, ${p?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${k(f,`${k(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?O`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:O`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${u?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${k(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${O`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${d?O`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${k(l,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:O`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${k(l,`, 1.0`)});`),t}var on=Object.freeze(Object.defineProperty({__proto__:null,build:an},Symbol.toStringTag,{value:`Module`}));export{ot as C,$e as D,Ze as E,Xe as O,ft as S,Qe as T,Y as _,tn as a,mt as b,It as c,Ft as d,Nt as f,Et as g,Z as h,rn as i,Ye as k,Pt as l,Q as m,on as n,qt as o,jt as p,nn as r,Lt as s,an as t,$ as u,vt as v,et as w,dt as x,G as y};