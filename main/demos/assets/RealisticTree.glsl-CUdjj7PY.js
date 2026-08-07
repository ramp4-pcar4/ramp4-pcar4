const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./SSAOBlur.glsl-C8c0cLiL.js","./SceneLighting-BG1CT_Zr.js","./store-5v4E3u6t.js","./preload-helper-C6XEuiEO.js","./store-CGbH87qM.css","./decorators-Ddg95x5O.js","./Accessor-d3_CTXeF.js","./scheduling-CjAJH4tw.js","./reactiveUtils-DJWUbjDy.js","./Evented-hr5MaQDr.js","./SpatialReference-CtYlZ12x.js","./JSONSupport-BjpGP83m.js","./Extent-DRt_O1tL.js","./aaBoundingRect-Cmwi3kBO.js","./Polygon-WF325tFJ.js","./zmUtils--ihLQQBg.js","./curveExtent-CuNZJ2DN.js","./ellipticArc7Utils-BX76jNF2.js","./plane-wK2-mEau.js","./sphere-D0ubc12Z.js","./projectPointToVector-3yB2VbEn.js","./projectionUtils-DVjXhc5z.js","./Multipoint-DeAqN5DV.js","./Polyline-CvwV6eRt.js","./spatialReferenceEllipsoidUtils-Js7ijEsn.js","./GeographicTransformation-6E10XrsI.js","./Clonable-BjFPMyJ-.js","./computeTranslationToOriginAndRotation-CLots2s7.js","./localRotationUtils-Cgk-scf7.js","./BufferView-yIGy-hoJ.js","./TriangleTechniqueConfiguration-COBrPyyo.js","./screenUtils-CFOhT9Tk.js","./Indices-BCLQdgzQ.js","./frustum-8f7n3t-_.js","./Attribute-DyLIUiq7.js","./lineSegment-Ctx1b-rx.js","./checkWebGLError-CvezQgQ6.js","./enums-CsvnPRfA.js","./renderState-DJBSiCrT.js","./VertexAttributeLocations-CK8r_Bsj.js","./VertexElementDescriptor-DVcI4qMB.js","./oitResolution.glsl-BFyFSgo3.js","./NoParameters-ZDc3QXO4.js","./Emissions.glsl-DSgdcDhg.js","./Texture-B-U-7diJ.js","./Cyclical-C0sNeafh.js","./projectVectorToVector-CzQLpxBJ.js","./HUDIntersectorResult-96bcoHy5.js","./orientedBoundingBox-LLAAVQhw.js","./quat-B6Rvd6a0.js","./normalizeUtils-BhnDtY9i.js","./jsonUtils-CUpAYS5n.js","./utils-ChISHIE4.js","./utils-BcLZSx8S.js","./normalizeUtilsCommon-Cc7y5u2f.js","./densifyCurvedGeometry-CLH9I8he.js","./RenderingContext-CyxusZ4P.js","./VertexArrayObject-BPplGyT3.js","./ProgramCache-CEAVhh8U.js","./VertexBuffer-iWAYxWlO.js","./DebugRendererInfo-IzJAyK7D.js","./videoUtils-B8e0KMIk.js","./image-BcoaziLt.js","./ShaderBuilder-B5bKgQt6.js","./BooleanBindUniform-A8XIB6Ob.js","./SSAO.glsl-BJQ_g-Qs.js","./GlobalIlluminationBlur.glsl-BXJbKDsn.js","./GlobalIlluminationColorQuantization.glsl-BQYAy19m.js","./GlobalIlluminationWeights.glsl-BjCjcvIJ.js","./GlobalIllumination.glsl-DOJBK2VR.js","./ScreenSpaceRayMarching.glsl-C4k2YPnS.js","./GlobalIlluminationUpscale.glsl-C-Ht0qqw.js"])))=>i.map(i=>d[i]);
import{Gd as e,Jg as t,Ji as n,Ju as r,Lf as i,Mg as a,O_ as o,Qu as s,Si as c,Vu as l,Xi as u,Xu as d,cu as f,fu as p,k_ as m,nf as h,qd as g,uy as _}from"./store-5v4E3u6t.js";import{t as v}from"./preload-helper-C6XEuiEO.js";import{n as y,t as b}from"./decorators-Ddg95x5O.js";import{c as x,s as S}from"./reactiveUtils-DJWUbjDy.js";import{A as C,B as w,C as T,D as ee,Dt as te,E,H as ne,It as D,L as re,M as ie,N as O,Ot as ae,P as k,R as oe,Rt as A,S as se,T as ce,V as j,W as M,_ as le,b as ue,g as de,j as N,v as fe,x as pe,xt as P,y as F,z as me}from"./TriangleTechniqueConfiguration-COBrPyyo.js";import{s as he,t as ge}from"./Texture-B-U-7diJ.js";import{_ as _e,a as ve,g as ye,h as I,i as be,m as xe,o as Se,t as Ce,u as we,v as L}from"./SceneLighting-BG1CT_Zr.js";import{g as Te,n as R}from"./enums-CsvnPRfA.js";import{n as z,o as B}from"./renderState-DJBSiCrT.js";import{a as Ee,c as V,d as H,f as U,i as W,l as G,o as De,r as K,s as q,t as Oe,u as ke}from"./oitResolution.glsl-BFyFSgo3.js";import{t as J}from"./NoParameters-ZDc3QXO4.js";import{t as Y}from"./ShaderBuilder-B5bKgQt6.js";import{i as Ae,m as je,n as Me,r as X}from"./Emissions.glsl-DSgdcDhg.js";import{c as Ne,l as Z,o as Pe,s as Fe,t as Ie,u as Le}from"./BooleanBindUniform-A8XIB6Ob.js";import{a as Re,i as ze,n as Q,o as Be,r as Ve,s as He,t as Ue}from"./VertexColor.glsl-DRxd_ZMj.js";import{i as We,n as Ge,r as Ke,t as qe}from"./ScreenSpaceRayMarching.glsl-C4k2YPnS.js";import{t as Je}from"./GlobalIlluminationColorQuantization.glsl-BQYAy19m.js";import{t as Ye}from"./GlobalIlluminationWeights.glsl-BjCjcvIJ.js";function Xe(e,t){switch(e.fragment.code.add(U`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(U`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(U`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function Ze(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:e.include(Xe,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new k(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal)),n.code.add(U`void forwardNormal() {
vNormalWorld = normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case 2:e.vertex.code.add(U`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var Qe=class extends Re{constructor(){super(...arguments),this.transformNormalViewFromGlobal=e()}},$e=class extends ze{constructor(){super(...arguments),this.toMapSpace=c()}};function et({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:n,roughnessFactor:i,emissiveTexture:a,emissiveFactor:o,occlusionTexture:s}){return e==null&&t==null&&a==null&&(o==null||p(o,r))&&s==null&&(i==null||i===1)&&(n==null||n===1)}var tt=d(1,1,.5),nt=d(0,.6,.2),rt=d(0,1,.2);function it(e){e.vertex.code.add(U`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function at(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(j),e.vertex.include(me),e.vertex.include(oe),e.vertex.code.add(U`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(U`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var ot=e();function st(e,t){let{hasModelTransformation:n,instancedDoublePrecision:r,instanced:i,output:a,hasVertexTangents:o}=t;n&&(e.vertex.uniforms.add(new Fe(`model`,e=>e.modelTransformation??f)),e.vertex.uniforms.add(new k(`normalLocalOriginFromModel`,e=>(h(ot,e.modelTransformation??f),ot)))),i&&r&&(e.attributes.add(`instanceModelOriginHi`,`vec3`),e.attributes.add(`instanceModelOriginLo`,`vec3`),e.attributes.add(`instanceModel`,`mat3`),e.attributes.add(`instanceModelNormal`,`mat3`));let s=e.vertex;r&&(s.include(Be),s.uniforms.add(new ie(`viewOriginHi`,e=>te(l(ct,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),ct)),new ie(`viewOriginLo`,e=>ae(l(ct,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),ct)))),s.code.add(U`
    vec3 getVertexInLocalOriginSpace() {
      return ${n?r?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:r?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?U`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),s.code.add(U`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${n?r?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:r?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),a===4&&(ee(s),s.code.add(U`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${n?r?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:r?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),o&&s.code.add(U`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${n?r?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:r?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var ct=s();function lt(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new ye(`symbolColorMixMode`,e=>P[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(j),e.vertex.include(me),e.vertex.include(oe),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(U`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(U`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(U`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${U.int(P.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${U.int(P.ignore)} : symbolColorMixMode;
    }
  `)}function ut(e,t){switch(t.output){case 5:case 6:case 7:case 8:e.fragment.code.add(U`float _calculateFragDepth(const in float depth) {
const float slope_scale = 2.0;
const float bias = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + slope_scale * m + bias;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`);break;case 9:e.fragment.code.add(U`void outputDepth(float _linearDepth){
gl_FragDepth = _linearDepth;
}`)}}function $(e,t){dt(e,t,new G(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function dt(e,t,n){let r=e.fragment;switch(r.code.add(`void discardOrAdjustAlpha(inout vec4 color) {`),t.alphaDiscardMode){case 1:r.code.add(`color.a = 1.0;`);break;case 0:r.include(pe),r.code.add(`if (color.a < alphaCutoff) discard;`);break;case 3:r.uniforms.add(n).code.add(`if (color.a < textureAlphaCutoff) discard;`);break;case 2:r.uniforms.add(n).code.add(`
        if (color.a < textureAlphaCutoff) discard;
        color.a = 1.0;
      `);break;case 4:break;default:t.alphaDiscardMode}r.code.add(`}`)}function ft(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:o}=t,s=a&&o!==1,{output:c,normalType:l,hasColorTextureTransform:u}=t;switch(c){case 3:E(n,t),e.include(Q),r.include(M,t),e.include(X,t),s&&r.uniforms.add(new V(`tex`,e=>e.texture)),n.main.add(U`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include($,t),r.main.add(U`
        discardBySlice(vpos);
        ${H(s,U`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 5:case 6:case 7:case 8:case 11:E(n,t),e.include(Q),e.include(X,t),e.include(O,t),e.include(ut,t),r.include(M,t),e.include(ne,t),Ve(e),i.add(`depth`,`float`,{invariant:!0}),s&&r.uniforms.add(new V(`tex`,e=>e.texture)),n.main.add(U`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include($,t),r.main.add(U`
        discardBySlice(vpos);
        ${H(s,U`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${c===11?U`outputObjectAndLayerIdColor();`:U`outputDepth(depth);`}`);break;case 4:{E(n,t),e.include(Q),e.include(Xe,t),e.include(Ze,t),e.include(X,t),e.include(O,t),s&&r.uniforms.add(new V(`tex`,e=>e.texture)),l===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=l===0||l===1;n.main.add(U`
        vpos = getVertexInLocalOriginSpace();
        ${a?U`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:U`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(M,t),e.include($,t),r.main.add(U`
        discardBySlice(vpos);
        ${H(s,U`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${l===2?U`vec3 normal = screenDerivativeNormal(vPositionView);`:U`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 10:E(n,t),e.include(Q),e.include(X,t),e.include(O,t),s&&r.uniforms.add(new V(`tex`,e=>e.texture)),n.main.add(U`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(M,t),e.include($,t),e.include(fe,t),r.main.add(U`
        discardBySlice(vpos);
        ${H(s,U`vec4 texColor = texture(tex, ${u?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function pt(e,t){return mt(e,t)}function mt(e,t){let n=e.fragment,{hasVertexTangents:r,doubleSidedMode:i,hasNormalTexture:a,textureCoordinateType:o,bindType:s,hasNormalTextureTransform:c}=t;r?(e.attributes.add(`tangent`,`vec4`),e.varyings.add(`vTangent`,`vec4`),i===2?n.code.add(U`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):n.code.add(U`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):n.code.add(U`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),a&&o!==0&&(e.include(Me,t),n.uniforms.add(s===1?new V(`normalTexture`,e=>e.textureNormal):new q(`normalTexture`,e=>e.textureNormal)),c&&(n.uniforms.add(s===1?new be(`scale`,e=>e.scale??u):new xe(`scale`,e=>e.scale??u)),n.uniforms.add(new k(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??g))),n.code.add(U`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),c&&n.code.add(U`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),n.code.add(U`return tangentSpace * rawNormal;
}`))}var ht=3e5,gt=5e5,_t=16;function vt(){let e=new Y,t=e.fragment;return e.include(I),e.include(Ne),t.include(Z),t.include(K),t.uniforms.add(new N(`radius`,e=>yt(e.camera))).code.add(U`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(U`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add(`fragOcclusion`,`float`),t.uniforms.add(new V(`normalMap`,e=>e.normalTexture),new V(`depthMap`,e=>e.depthTexture),new G(`projScale`,e=>e.projScale),new V(`rnm`,e=>e.noiseTexture),new be(`rnmScale`,(e,t)=>i(bt,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height)),new G(`intensity`,e=>e.intensity),new T(`screenSize`,e=>i(bt,e.camera.fullWidth,e.camera.fullHeight))).main.add(U`
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

    for(int i = 0; i < ${U.int(_t)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${U.int(_t)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * pow(A, 4.0)) * INV_GAMMA;

    fragOcclusion = A;
  `),e}function yt(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}var bt=n(),xt=Object.freeze(Object.defineProperty({__proto__:null,build:vt,getRadius:yt},Symbol.toStringTag,{value:`Module`})),St=4;function Ct(){let e=new Y,t=e.fragment;return e.include(I),t.include(Z),t.uniforms.add(new V(`depthMap`,e=>e.depthTexture),new q(`tex`,e=>e.colorTexture),new xe(`blurSize`,e=>e.blurSize),new G(`projScale`,(e,t)=>{let n=t.camera.distance;return n>5e4?Math.max(0,e.projScale-(n-5e4)):e.projScale})),t.code.add(U`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${U.float(.08)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add(`fragBlur`,`float`),t.main.add(U`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${U.int(St)}; r <= ${U.int(St)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}var wt=Object.freeze(Object.defineProperty({__proto__:null,build:Ct},Symbol.toStringTag,{value:`Module`})),Tt=class extends D{constructor(){super(...arguments),this.shader=new A(wt,()=>v(()=>import(`./SSAOBlur.glsl-C8c0cLiL.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]),import.meta.url))}initializePipeline(){return z({colorWrite:B})}};Tt=a([y(`esri.views.3d.webgl-engine.effects.ssao.SSAOBlurTechnique`)],Tt);var Et=`eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM`,Dt=class extends J{constructor(){super(...arguments),this.projScale=1}},Ot=class extends Dt{constructor(){super(...arguments),this.intensity=1}},kt=class extends J{},At=class extends kt{constructor(){super(...arguments),this.blurSize=n()}},jt=class extends D{constructor(){super(...arguments),this.shader=new A(xt,()=>v(()=>import(`./SSAO.glsl-BJQ_g-Qs.js`),__vite__mapDeps([65,2,3,4,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64]),import.meta.url))}initializePipeline(){return z({colorWrite:B})}};jt=a([y(`esri.views.3d.webgl-engine.effects.ssao.SSAOTechnique`)],jt);var Mt=class extends _e{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=L.AMBIENT_ILLUMINATION,this._enableTime=t(0),this._passParameters=new Ot,this._drawParameters=new At}initialize(){let e=Uint8Array.from(atob(Et),e=>e.charCodeAt(0)),n=new he(32);n.wrapMode=33071,n.pixelFormat=6407,n.wrapMode=10497,n.hasMipmap=!0,this._passParameters.noiseTexture=new ge(this.renderingContext,n,e),this.addHandles(S(()=>this.view.stage.renderer.hasAmbientIllumination,()=>this._enableTime=t(0)))}destroy(){this._passParameters.noiseTexture=o(this._passParameters.noiseTexture)}render(e){let n=e.find(({name:e})=>e===`normals`),r=n?.getTexture(),a=n?.getTexture(Te);if(!r||!a)return;let o=this.techniques.getCompiled(jt),s=this.techniques.getCompiled(Tt);if(!o||!s)return this._enableTime=t(performance.now()),void this.requestRender(1);this._enableTime===0&&(this._enableTime=t(performance.now()));let c=this.renderingContext,l=this.view.qualitySettings.fadeDuration,u=this.bindParameters,d=u.camera,f=d.relativeElevation,p=_((gt-f)/(gt-ht),0,1),m=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,h=m*p;this._passParameters.normalTexture=r,this._passParameters.depthTexture=a,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Nt/yt(d)**6*h;let g=d.fullViewport[2],v=d.fullViewport[3],y=this.fboCache.acquire(g,v,`ssao input`,2);c.bindFramebuffer(y.fbo),c.setViewport(0,0,g,v),c.bindTechnique(o,u,this._passParameters,this._drawParameters),c.screen.draw();let b=Math.round(g/2),x=Math.round(v/2),S=this.fboCache.acquire(b,x,`ssao blur`,0);c.bindFramebuffer(S.fbo),this._drawParameters.colorTexture=y.getTexture(),i(this._drawParameters.blurSize,0,2/v),c.bindTechnique(s,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),y.release();let C=this.fboCache.acquire(b,x,L.AMBIENT_ILLUMINATION,0);return c.bindFramebuffer(C.fbo),c.setViewport(0,0,g,v),c.setClearColor(1,1,1,0),c.clear(16384),this._drawParameters.colorTexture=S.getTexture(),i(this._drawParameters.blurSize,2/g,0),c.bindTechnique(s,u,this._passParameters,this._drawParameters),c.setViewport(0,0,b,x),c.screen.draw(),c.setViewport4fv(d.fullViewport),S.release(),m<1&&this.requestRender(2),C}};a([b()],Mt.prototype,`consumes`,void 0),a([b()],Mt.prototype,`produces`,void 0),Mt=a([y(`esri.views.3d.webgl-engine.effects.ssao.SSAO`)],Mt);var Nt=.5;function Pt(e,t){t.receiveAmbientOcclusion?(e.uniforms.add(new F(`ssaoTex`,e=>e.ssao?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/2),e.code.add(U`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(U`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}var Ft=class extends ke{constructor(e,t,n,r){super(e,`float`,0,(t,i)=>t.setUniform1fv(e,n(i),r),t)}};function It(e,t){e.uniforms.add(new Ft(`shR`,9,({lighting:e})=>e.sh.r),new Ft(`shG`,9,({lighting:e})=>e.sh.g),new Ft(`shB`,9,({lighting:e})=>e.sh.b)),e.code.add(U`vec3 calculateAmbientIrradiance(vec3 normal) {
vec3 ambientLight = 0.282095 * vec3(shR[0], shG[0], shB[0]);
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
vec4 lightingAmbientSH_R1 = vec4(shR[1], shR[2], shR[3], shR[4]);
vec4 lightingAmbientSH_G1 = vec4(shG[1], shG[2], shG[3], shG[4]);
vec4 lightingAmbientSH_B1 = vec4(shB[1], shB[2], shB[3], shB[4]);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
vec4 lightingAmbientSH_R2 = vec4(shR[5], shR[6], shR[7], shR[8]);
vec4 lightingAmbientSH_G2 = vec4(shG[5], shG[6], shG[7], shG[8]);
vec4 lightingAmbientSH_B2 = vec4(shB[5], shB[6], shB[7], shB[8]);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight;
}`),t.pbrMode!==1&&t.pbrMode!==2||e.code.add(U`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance()
{
vec3 ambientLight = 1.2 * (0.282095 * vec3(shR[0], shG[0], shB[0])) - 0.2;
return ambientLight *= skyTransmittance;
}`)}function Lt(e){e.code.add(U`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(U`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(U`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Rt(e,t){e.include(K),e.include(Se),t.pbrMode!==1&&t.pbrMode!==2&&t.pbrMode!==5&&t.pbrMode!==6||(e.code.add(U`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(U`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),e.code.add(U`struct PBRShadingInfo
{
float NdotV;
float NdotL;
float LdotH;
float NdotUP;
float RdotUP;
float NdotAmbDir;
float NdotH_Horizon;
float NdotH;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
vec3 reflectedView;
float averageAmbientRadiance;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),e.code.add(U`void calculateCommonInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
vec3 h = normalize(mainLightDirection - viewDirection);
inputs.NdotV = clamp(abs(dot(normal, -viewDirection)), 0.001, 1.0);
inputs.NdotUP = clamp(dot(normal, upDirection), -1.0, 1.0);
inputs.reflectedView = normalize(reflect(-viewDirection, normal));
inputs.RdotUP = clamp(dot(inputs.reflectedView, upDirection), -1.0, 1.0);
inputs.albedoLinear = linearizeGamma(albedo);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
}`)),t.pbrMode!==1&&t.pbrMode!==2||(e.include(Lt),e.code.add(U`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotUP);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotUP, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),e.code.add(U`void calculatePBRInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo, vec3 mrr) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);
inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);
}`)),t.pbrMode!==5&&t.pbrMode!==6||e.code.add(U`const vec3 fresnelReflectionSimplified = vec3(0.04);
void calculateSimplifiedInputs(out PBRShadingInfo inputs, vec3 normal, vec3 viewDirection, vec3 upDirection, vec3 albedo) {
calculateCommonInputs(inputs, normal, viewDirection, upDirection, albedo);
float lightness = 0.3 * inputs.albedoLinear[0] + 0.5 * inputs.albedoLinear[1] + 0.2 * inputs.albedoLinear[2];
inputs.f0 = (0.85 * lightness + 0.15) * fresnelReflectionSimplified;
inputs.f90 =  vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
}`)}function zt(e,t){e.include(Se),e.code.add(U`
    struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater?`2.2`:`2.0`};
  `),e.code.add(U`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(U`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(U`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(U`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function Bt(e){e.include(Z),e.uniforms.add(new T(`zProjectionMapLastFrame`,e=>Le(e.reprojection.lastFrameCamera))),e.code.add(U`float linearDepthFromTextureLastFrame(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv), zProjectionMapLastFrame);
}`)}var Vt=.01,Ht=.008,Ut=.002,Wt=.5,Gt=.02,Kt=.1,qt=.008,Jt=.012,Yt=.008,Xt=40,Zt=.095,Qt=.008,$t=60,en=2,tn=.0039,nn=.25,rn=.15,an=25,on=.15,sn=.5,cn=1,ln=1,un=16,dn=class extends J{constructor(){super(...arguments),this.projScale=1,this.scaleGlobalIllumination=1,this.accumulatedFrames=0,this.temporalSampleFrame=0,this.rayMarchMinReach=on,this.rayMarchMaxReach=sn,this.rayMarchWorldReach=25,this.rayMarchMinReachEmissionWeight=1,this.rayMarchMaxReachEmissionWeight=1,this.rayMarchMaxSteps=16,this.colorBleedWeight=rn}};function fn(e){let t=new Y,n=t.fragment;return t.include(I),t.include(Ne),We(n),n.include(Bt),n.include(K),n.include(Je),t.include(qe,e),n.uniforms.add(new V(`normalMap`,e=>e.normalTexture),new V(`depthMap`,e=>e.depthTexture),new F(`lastFrameColorTexture`,e=>e.reprojection.lastFrameColor?.getTexture()),new F(`lastFrameDepthTexture`,e=>e.reprojection.lastFrameDepth?.attachment),new F(`lastFrameGlobalIlluminationTexture`,e=>e.globalIllumination?.getTexture()),new F(`lastFrameGlobalIlluminationWeightTexture`,e=>e.globalIllumination?.getTexture(R)),new C(`reprojectionViewMatrix`,e=>e.reprojection.viewMatrix),new C(`view`,e=>e.camera.viewMatrix),new G(`accumulatedFrames`,e=>e.accumulatedFrames),new G(`temporalSampleFrame`,e=>e.temporalSampleFrame),new G(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination)),n.uniforms.add(new G(`rayMarchMinReach`,e=>e.rayMarchMinReach),new G(`rayMarchMaxReach`,e=>e.rayMarchMaxReach),new G(`rayMarchWorldReach`,e=>e.rayMarchWorldReach),new G(`rayMarchMinReachEmissionWeight`,e=>e.rayMarchMinReachEmissionWeight),new G(`rayMarchMaxReachEmissionWeight`,e=>e.rayMarchMaxReachEmissionWeight),new G(`rayMarchMaxSteps`,e=>e.rayMarchMaxSteps),new G(`colorBleedWeight`,e=>e.colorBleedWeight)),e.hasEmission&&n.uniforms.add(new F(`lastFrameEmissionTexture`,e=>e.reprojection.lastFrameEmission?.attachment)),n.code.add(U`
    float computeIdleColorBlendWeight(float accumulatedFrames) {
      float idleColorBlendProgress = clamp(
        accumulatedFrames / ${U.float(Xt)},
        0.0,
        1.0
      );
      return mix(
        ${U.float(Jt)},
        ${U.float(Yt)},
        idleColorBlendProgress
      );
    }

    float computeIdleOcclusionBlendWeight(float accumulatedFrames) {
      float idleOcclusionBlendProgress = clamp(
        accumulatedFrames / ${U.float($t)},
        0.0,
        1.0
      );
      return mix(
        ${U.float(Zt)},
        ${U.float(Qt)},
        pow(idleOcclusionBlendProgress, ${U.float(en)})
      );
    }

    bool isEdgeDepth(float centerDepth, vec2 sampleUv) {
      vec2 texelSize = 1.0 / vec2(textureSize(depthMap, 0));
      float depthLeft = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(-texelSize.x, 0.0)));
      float depthRight = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(texelSize.x, 0.0)));
      float depthUp = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, texelSize.y)));
      float depthDown = linearizeDepth(depthFromTexture(depthMap, sampleUv + vec2(0.0, -texelSize.y)));

      float maxDifference = max(max(abs(centerDepth - depthLeft), abs(centerDepth - depthRight)), max(abs(centerDepth - depthUp), abs(centerDepth - depthDown)));

      return abs(maxDifference / centerDepth) > 0.01;
    }

    vec3 sampleCosineHemisphere(vec2 u) {
      float phi = 6.28318530718 * u.x;
      float radius = sqrt(u.y);
      float x = radius * cos(phi);
      float y = radius * sin(phi);
      float z = sqrt(max(0.0, 1.0 - u.y));

      return vec3(x, y, z);
    }

    mat3 basisFromNormal(vec3 n) {
      vec3 up = abs(n.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
      vec3 tangent = normalize(cross(up, n));
      vec3 bitangent = cross(n, tangent);

      return mat3(tangent, bitangent, n);
    }

    float blueNoiseDitherValue(vec2 pixel, float frame, vec2 axis, float phase) {
      float scroll = 5.588238 * mod(frame, 512.0);
      vec2 p = pixel + vec2(scroll);
      vec2 rotated = vec2(
        axis.x * p.x + axis.y * p.y,
        -axis.y * p.x + axis.x * p.y
      );

      return fract(52.9829189 * fract(0.06711056 * rotated.x + 0.00583715 * rotated.y + phase));
    }

    vec4 blueNoiseDither(vec2 pixel, float frame) {
      vec4 value = vec4(
        blueNoiseDitherValue(pixel, frame, vec2(0.9659258, 0.25881904), 0.0),
        blueNoiseDitherValue(pixel, frame, vec2(0.70710677, 0.70710677), 0.17),
        blueNoiseDitherValue(pixel, frame, vec2(0.25881904, 0.9659258), 0.37),
        blueNoiseDitherValue(pixel, frame, vec2(1.0, 0.0), 0.61)
      );

      return value * 2.0 - 1.0;
    }
  `),t.outputs.add(`fragGlobalIllumination`,`vec4`,0),t.outputs.add(`fragWeight`,`float`,1),n.main.add(U`
    float depth = depthFromTexture(depthMap, uv);

    // Early out if depth is out of range, such as in the sky
    if (depth >= 1.0 || depth <= 0.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }

    // Get the normal of current fragment
    ivec2 iuv = ivec2(uv * vec2(textureSize(normalMap, 0)));
    vec4 normal4 = texelFetch(normalMap, iuv, 0);
    if (normal4.a != 1.0) {
      fragGlobalIllumination = vec4(0.0, 0.0, 0.0, 1.0);
      fragWeight = 0.0;
      return;
    }
    vec3 normal = normalize(normal4.xyz * 2.0 - 1.0);

    // Reconstruct view space position of current fragment
    float currentPixelDepth = linearizeDepth(depth);
    vec3 currentPixelPos = reconstructPosition(uv * vec2(textureSize(normalMap, 0)), currentPixelDepth);
    vec4 viewPos = vec4(currentPixelPos, 1.0);

    // Reproject current view position to last frame
    vec4 reprojectedViewPos = reprojectionViewMatrix * viewPos;
    vec4 reprojectedCoordinate = applyProjectionMat(proj, reprojectedViewPos.xyz);

    // Read last frame reprojected depth and GI history
    float lastFrameDepthViewPos = -linearDepthFromTextureLastFrame(lastFrameDepthTexture, reprojectedCoordinate.xy);
    vec4 lastFrameGlobalIllumination = texture(lastFrameGlobalIlluminationTexture, reprojectedCoordinate.xy);
    float historyOcclusionBlendWeight = texture(lastFrameGlobalIlluminationWeightTexture, reprojectedCoordinate.xy).r;

    int steps;
    float occlusionBlendWeight = 1.0;
    float colorBlendWeight = 1.0;
    float idleColorBlendWeight = computeIdleColorBlendWeight(accumulatedFrames);
    float idleOcclusionBlendWeight = computeIdleOcclusionBlendWeight(accumulatedFrames);
    float reprojectionDepthMismatch = abs((lastFrameDepthViewPos + reprojectedViewPos.z) / max(lastFrameDepthViewPos, reprojectedViewPos.z));
    bool hasReprojectionMismatch = reprojectionDepthMismatch > ${U.float(Vt)};
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool isLowQualityEdgePixel = isScaledGlobalIllumination && isEdgeDepth(currentPixelDepth, uv);
    bool resetColorHistory = false;

    // Heuristic to determine blending weights and number of steps for occlusion and color
    if (hasReprojectionMismatch) {
      if (isLowQualityEdgePixel) {
        steps = 1;
        occlusionBlendWeight = ${U.float(Ht)};
        resetColorHistory = true;
      } else {
        steps = 6;
        occlusionBlendWeight = 1.0;
        resetColorHistory = true;
      }
    } else {
      steps = 1;
      if (historyOcclusionBlendWeight > ${U.float(Wt)}) {
        occlusionBlendWeight = ${U.float(Kt)};
        colorBlendWeight = ${U.float(qt)};
      } else if (historyOcclusionBlendWeight > ${U.float(Gt)}) {
        occlusionBlendWeight = historyOcclusionBlendWeight - 0.05;
        colorBlendWeight = ${U.float(qt)};
      } else {
        occlusionBlendWeight = isScaledGlobalIllumination ? ${U.float(Ht)} : idleOcclusionBlendWeight;
        colorBlendWeight = isScaledGlobalIllumination ? ${U.float(Ut)} : idleColorBlendWeight;
      }
    }

    vec4 randomDirectionSample;
    mat3 normalBasis = basisFromNormal(normal);
    int temporalSampleStride = min(64 / steps, 6);
    float temporalFrameOffset = mod(temporalSampleFrame, float(64 / steps));

    // For each ray determine if it hits geometry and accumulate occlusion or color
    float stepSize = 1.0 / float(steps);
    for (int i = 0; i < steps; ++i) {
      float sampleIndex = float(i * temporalSampleStride + int(temporalFrameOffset));
      randomDirectionSample = blueNoiseDither(floor(gl_FragCoord.xy), sampleIndex);
      vec2 hemisphereSample = randomDirectionSample.rg * 0.5 + 0.5;
      float offsetSample = randomDirectionSample.a * 0.5 + 0.5;
      vec3 rayDirection = normalBasis * sampleCosineHemisphere(hemisphereSample);
      float rayMarchScreenReach = rayMarchScreenReachFromWorldReach(viewPos.xyz, rayDirection, rayMarchWorldReach);
      rayMarchScreenReach = clamp(rayMarchScreenReach, rayMarchMinReach, rayMarchMaxReach);
      vec3 hit = screenSpaceIntersectionWithLimits(
        rayDirection,
        viewPos.xyz,
        normalize(viewPos.xyz),
        normal,
        offsetSample,
        rayMarchScreenReach,
        rayMarchMaxSteps
      );

      if (hit.z > 0.0) {
        ${H(e.hasColor,U`
          // Emission and color bleed - Reproject the current receiver and sampled hit to estimate bounced color
          vec3 receiverColor = texture(lastFrameColorTexture, reprojectedCoordinate.xy).rgb;

          vec2 hitReprojectedCoordinate = reprojectionCoordinate(hit);
          vec3 sourceColor = texture(lastFrameColorTexture, hitReprojectedCoordinate).rgb;
          vec3 sourceColorLinear = linearizeGamma(sourceColor);
          vec3 sourceEmission = ${H(e.hasEmission,`texture(lastFrameEmissionTexture, hitReprojectedCoordinate).xyz`,`vec3(0.0)`)};

          float emissionWeight = mix(
            rayMarchMinReachEmissionWeight,
            rayMarchMaxReachEmissionWeight,
            (rayMarchScreenReach - rayMarchMinReach) / max(rayMarchMaxReach - rayMarchMinReach, 0.00001)
          );
          fragGlobalIllumination.rgb += ((sourceColorLinear * colorBleedWeight) + sourceEmission * emissionWeight) * stepSize;
          `)}
      } else {
        // Occlusion - heuristic modulating sky intensity based on angle to main light
        vec4 viewMainLightDirection = view * vec4(mainLightDirection, 0.0);
        float skyModulation = pow(max(dot(rayDirection, viewMainLightDirection.xyz), 0.0), 3.0) * 5.5;
        float skyFacingWeight = clamp(3.5 * dot(viewMainLightDirection.xyz, normal), 0.0, 1.0);
        skyModulation = mix(1.0, skyModulation * 0.2 + 0.8, skyFacingWeight);
        fragGlobalIllumination.a += skyModulation * stepSize;
      }
    }

    // Rendering trick add noise to reduce accumulation artifacts
    float accumulationDither = occlusionBlendWeight < 1.0
      ? randomDirectionSample.b * ${U.float(tn)}
      : 0.0;

    ${H(e.hasColor,U`
      // Accumulate color
      vec3 lastFrameColor = lastFrameGlobalIllumination.rgb;
      float colorDitherScale = isScaledGlobalIllumination ? ${U.float(nn)} : 1.0;
      fragGlobalIllumination.rgb = resetColorHistory
        ? vec3(0.0)
        : mix(lastFrameColor + accumulationDither * colorDitherScale, fragGlobalIllumination.rgb, colorBlendWeight);
      `,U`
      fragGlobalIllumination.rgb = vec3(0.0);
      `)}
    fragGlobalIllumination.rgb = quantizeGlobalIlluminationColor(fragGlobalIllumination.rgb);

    // Accumulate occlusion
    fragGlobalIllumination.a = mix(lastFrameGlobalIllumination.a + accumulationDither, fragGlobalIllumination.a, occlusionBlendWeight);

    fragWeight = occlusionBlendWeight;
  `),t}var pn=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationPassParameters:dn,build:fn,defaultColorBleedWeight:rn,defaultRayMarchMaxReach:sn,defaultRayMarchMaxReachEmissionWeight:1,defaultRayMarchMaxSteps:16,defaultRayMarchMinReach:on,defaultRayMarchMinReachEmissionWeight:1,defaultRayMarchWorldReach:25},Symbol.toStringTag,{value:`Module`})),mn=4,hn=class extends J{constructor(){super(...arguments),this.blurSize=n()}};function gn(){let e=new Y,t=e.fragment;e.include(I),e.include(Ne),e.include(Ye),t.include(Z),t.include(le,_n),t.include(Je);let n=5e4;t.uniforms.add(new Ie(`hasEmission`,e=>e.hasEmission),new V(`depthMap`,e=>e.depthTexture),new V(`normalMap`,e=>e.normalTexture),new q(`globalIlluminationTexture`,e=>e.texture),new q(`globalIlluminationWeightTexture`,e=>e.weightTexture),new xe(`blurSize`,e=>e.blurSize),new G(`scaleGlobalIllumination`,e=>e.scaleGlobalIllumination),new G(`projScale`,(e,t)=>{let r=t.camera.distance;return r>n?Math.max(0,e.projScale-(r-n)):e.projScale}));let r=.03;return t.code.add(U`
    void accumulateBlurSample(
      vec2 sampleUv,
      float sampleOffset,
      float centerDepth,
      vec3 centerNormal,
      float depthSharpness,
      bool skipOcclusionBlur,
      inout float emissionWeightSum,
      inout vec3 emissionSum,
      inout float occlusionWeightSum,
      inout float occlusionSum,
      float centerOcclusionBlendWeight
    ) {
      vec4 sampleGlobalIllumination = texture(globalIlluminationTexture, sampleUv);
      vec3 sampleNormal = texture(normalMap, sampleUv).rgb;
      float sampleDepth = linearDepthFromTexture(depthMap, sampleUv);

      float depthDelta = sampleDepth - centerDepth;
      bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
      float normalSimilarityWeight = globalIlluminationNormalSimilarityWeight(sampleNormal, centerNormal);
      float depthNormalCorrection = globalIlluminationDepthNormalCorrection(sampleNormal);
      vec3 emission = sampleGlobalIllumination.rgb;
      float emissionSpatialWeightMultiplier = isScaledGlobalIllumination ? ${U.float(400)} : 1.0;

      float emissionWeight = exp(
        -sampleOffset * sampleOffset * ${U.float(.04081632653061224)} * ${U.float(.1)} * emissionSpatialWeightMultiplier
        - depthDelta * depthDelta * depthSharpness * depthNormalCorrection
      );
      emissionWeight *= normalSimilarityWeight;
      emissionWeightSum += emissionWeight;
      emissionSum += emissionWeight * emission;

      if (skipOcclusionBlur) {
        return;
      }

      float occlusionSpatialKernelScale = centerOcclusionBlendWeight > ${U.float(r)}
        ? ${U.float(.08)}
        : ${U.float(1.5)};
      float occlusionWeight = exp(-sampleOffset * sampleOffset * occlusionSpatialKernelScale - depthDelta * depthDelta * depthSharpness);
      occlusionWeight *= normalSimilarityWeight;
      occlusionWeightSum += occlusionWeight;
      occlusionSum += occlusionWeight * sampleGlobalIllumination.a;
    }
  `),t.main.add(U`
    vec3 emissionSum = vec3(0.0);
    float emissionWeightSum = 0.0;

    vec4 centerGlobalIllumination = texture(globalIlluminationTexture, uv);
    float centerOcclusionBlendWeight = texture(globalIlluminationWeightTexture, uv).r;
    bool isScaledGlobalIllumination = scaleGlobalIllumination < 1.0;
    bool shouldReuseCenterOcclusion = isScaledGlobalIllumination && centerOcclusionBlendWeight <= ${U.float(r)};
    bool shouldSkipLowQualityBlur = !hasEmission && shouldReuseCenterOcclusion;
    if (shouldSkipLowQualityBlur) {
      fragColor = vec4(
        quantizeGlobalIlluminationColor(centerGlobalIllumination.rgb),
        centerGlobalIllumination.a
      );
      return;
    }

    float centerDepth = linearDepthFromTexture(depthMap, uv);
    vec3 centerNormal = texture(normalMap, uv).rgb;
    float occlusionSum = 0.0;
    float occlusionWeightSum = 0.0;

    float depthSharpness = globalIlluminationDepthSharpness(projScale, centerDepth);
    for (int sampleOffset = -${U.int(mn)}; sampleOffset <= ${U.int(mn)}; ++sampleOffset) {
      float sampleOffsetFloat = float(sampleOffset);
      vec2 sampleUv = uv + sampleOffsetFloat * blurSize;
      accumulateBlurSample(
        sampleUv,
        sampleOffsetFloat,
        centerDepth,
        centerNormal,
        depthSharpness,
        shouldReuseCenterOcclusion,
        emissionWeightSum,
        emissionSum,
        occlusionWeightSum,
        occlusionSum,
        centerOcclusionBlendWeight
      );
    }

    float occlusion = shouldReuseCenterOcclusion ? centerGlobalIllumination.a : occlusionSum / occlusionWeightSum;
    vec3 blurredEmission = (emissionSum / emissionWeightSum).rgb;

    // heuristic dithering of the colors to remove banding, color shifts and wrong color accumulation
    float dither = ditherNoise(vec4(blurredEmission, occlusion)) - 1./32768.0;
    blurredEmission += isScaledGlobalIllumination ? 0.85 * dither : dither;

    fragColor = vec4(quantizeGlobalIlluminationColor(blurredEmission), occlusion);
  `),e}var _n=new Oe;_n.useFloatBlend=!1;var vn=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationBlurDrawParameters:hn,build:gn},Symbol.toStringTag,{value:`Module`})),yn=class extends D{constructor(){super(...arguments),this.shader=new A(vn,()=>v(()=>import(`./GlobalIlluminationBlur.glsl-BXJbKDsn.js`),__vite__mapDeps([66,2,3,4,1,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,67,68]),import.meta.url))}initializePipeline(){return z({colorWrite:B})}};yn=a([y(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationBlurTechnique`)],yn);var bn=class extends D{constructor(){super(...arguments),this.shader=new A(pn,()=>v(()=>import(`./GlobalIllumination.glsl-DOJBK2VR.js`),__vite__mapDeps([69,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,70,67]),import.meta.url))}initializePipeline(){return z({colorWrite:B})}};bn=a([y(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationTechnique`)],bn);var xn=class extends Ee{constructor(){super(...arguments),this.hasColor=!0,this.hasEmission=!1,this.rayMarchMaxReach=sn,this.rayMarchMaxSteps=16,this.useProjectedRayLength=!0,this.clampRayToScreen=!1}};a([De()],xn.prototype,`hasColor`,void 0),a([De()],xn.prototype,`hasEmission`,void 0);var Sn=5e4,Cn=100,wn=class extends J{};function Tn(){let e=new Y,t=e.fragment;return e.include(I),e.include(Ne),e.include(Ye),t.include(Z),t.include(Je),t.uniforms.add(new V(`depthMap`,e=>e.depthTexture),new V(`normalMap`,e=>e.normalTexture),new q(`tex`,e=>e.colorTexture),new q(`globalIlluminationWeightTexture`,e=>e.weightTexture),new G(`projScale`,(e,t)=>{let n=t.camera.distance;return n>Sn?Math.max(0,e.projScale-(n-Sn)):e.projScale})),t.code.add(U`
    float computeDepthWeight(float sampleDepth, float centerDepth, float depthSharpness) {
      float depthDelta = abs(sampleDepth - centerDepth);
      return exp(-0.08 - depthDelta * depthDelta * depthSharpness);
    }

    vec3 normalFromTexture(sampler2D normalTexture, vec2 uv) {
      ivec2 normalTextureSize = textureSize(normalTexture, 0);
      ivec2 normalTexel = clamp(ivec2(uv * vec2(normalTextureSize)), ivec2(0), normalTextureSize - ivec2(1));
      return texelFetch(normalTexture, normalTexel, 0).xyz;
    }

    void sampleJointBilateralUpscale(vec2 sampleUv, out vec4 upscaledColor, out float upscaledWeight) {
      float centerDepth = linearDepthFromTexture(depthMap, sampleUv);
      vec3 centerNormal = normalFromTexture(normalMap, sampleUv);
      float depthSharpness = ${U.float(Cn)} * globalIlluminationDepthSharpness(projScale, centerDepth, centerNormal);

      vec2 lowResTextureSize = vec2(textureSize(tex, 0));
      vec2 texelPosition = sampleUv * lowResTextureSize - 0.5;
      vec2 texelBase = floor(texelPosition);
      vec2 bilinearWeightsFraction = fract(texelPosition);

      vec2 uv00 = (texelBase + vec2(0.5, 0.5)) / lowResTextureSize;
      vec2 uv10 = (texelBase + vec2(1.5, 0.5)) / lowResTextureSize;
      vec2 uv01 = (texelBase + vec2(0.5, 1.5)) / lowResTextureSize;
      vec2 uv11 = (texelBase + vec2(1.5, 1.5)) / lowResTextureSize;

      vec4 color00 = texture(tex, uv00);
      vec4 color10 = texture(tex, uv10);
      vec4 color01 = texture(tex, uv01);
      vec4 color11 = texture(tex, uv11);
      float weight00 = texture(globalIlluminationWeightTexture, uv00).r;
      float weight10 = texture(globalIlluminationWeightTexture, uv10).r;
      float weight01 = texture(globalIlluminationWeightTexture, uv01).r;
      float weight11 = texture(globalIlluminationWeightTexture, uv11).r;

      float depth00 = linearDepthFromTexture(depthMap, uv00);
      float depth10 = linearDepthFromTexture(depthMap, uv10);
      float depth01 = linearDepthFromTexture(depthMap, uv01);
      float depth11 = linearDepthFromTexture(depthMap, uv11);

      vec3 normal00 = normalFromTexture(normalMap, uv00);
      vec3 normal10 = normalFromTexture(normalMap, uv10);
      vec3 normal01 = normalFromTexture(normalMap, uv01);
      vec3 normal11 = normalFromTexture(normalMap, uv11);

      float bilinearWeight00 = (1.0 - bilinearWeightsFraction.x) * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight10 = bilinearWeightsFraction.x * (1.0 - bilinearWeightsFraction.y);
      float bilinearWeight01 = (1.0 - bilinearWeightsFraction.x) * bilinearWeightsFraction.y;
      float bilinearWeight11 = bilinearWeightsFraction.x * bilinearWeightsFraction.y;

      float jointBilateralWeight00 = bilinearWeight00 * computeDepthWeight(depth00, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal00, centerNormal);
      float jointBilateralWeight10 = bilinearWeight10 * computeDepthWeight(depth10, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal10, centerNormal);
      float jointBilateralWeight01 = bilinearWeight01 * computeDepthWeight(depth01, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal01, centerNormal);
      float jointBilateralWeight11 = bilinearWeight11 * computeDepthWeight(depth11, centerDepth, depthSharpness) * globalIlluminationNormalSimilarityWeight(normal11, centerNormal);
      float jointBilateralWeightSum = jointBilateralWeight00 + jointBilateralWeight10 + jointBilateralWeight01 + jointBilateralWeight11;

      if (jointBilateralWeightSum < 0.0001) {
        // Fall back to the nearest low-resolution texel when all bilateral weights collapse.
        vec2 nearestUv = (floor(texelPosition + 0.5) + vec2(0.5)) / lowResTextureSize;
        upscaledColor = texture(tex, nearestUv);
        upscaledWeight = texture(globalIlluminationWeightTexture, nearestUv).r;
        return;
      }

      upscaledColor = (
        color00 * jointBilateralWeight00 +
        color10 * jointBilateralWeight10 +
        color01 * jointBilateralWeight01 +
        color11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;

      upscaledWeight = (
        weight00 * jointBilateralWeight00 +
        weight10 * jointBilateralWeight10 +
        weight01 * jointBilateralWeight01 +
        weight11 * jointBilateralWeight11
      ) / jointBilateralWeightSum;
    }
  `),e.outputs.add(`fragColor`,`vec4`,0),e.outputs.add(`fragWeight`,`float`,1),t.main.add(U`sampleJointBilateralUpscale(uv, fragColor, fragWeight);
fragColor.rgb = quantizeGlobalIlluminationColor(fragColor.rgb);`),e}var En=Object.freeze(Object.defineProperty({__proto__:null,GlobalIlluminationUpscaleDrawParameters:wn,build:Tn},Symbol.toStringTag,{value:`Module`})),Dn=class extends D{constructor(){super(...arguments),this.shader=new A(En,()=>v(()=>import(`./GlobalIlluminationUpscale.glsl-C-Ht0qqw.js`),__vite__mapDeps([71,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,67,68]),import.meta.url))}initializePipeline(){return z({colorWrite:B})}};Dn=a([y(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIlluminationUpscaleTechnique`)],Dn);var On=class extends _e{constructor(e){super(e),this.consumes={required:[`normals`]},this.produces=L.AMBIENT_ILLUMINATION,this._passParameters=new dn,this._drawParameters=new hn,this._drawParametersUpscale=new wn,this._maxFrames=256,this._lowQualityResolutionScale=.25,this._configuration=new xn,this._globalIllumination=null,this._isGlobalIlluminationUpdate=!1,this._resetBuffer=!1}initialize(){this.addHandles(S(()=>this.view.stage.renderer.hasGlobalIllumination,()=>{this._resetAccumulatedFrames(),this._requestRender()},x))}destroy(){this._globalIllumination=m(this._globalIllumination)}resetAccumulatedFrames(){this._isGlobalIlluminationUpdate||this._resetAccumulatedFrames()}render(e){if(this._passParameters.accumulatedFrames>=this._maxFrames)return this._globalIllumination?.retain(),this._globalIllumination;let t=e.find(({name:e})=>e===`normals`),n=t?.getTexture(),r=t?.getTexture(Te),a=this._mode;if(!n||!r)return this._emptyOutput;if(a===0)return this._resetBuffer=!1,this._emptyOutput;if(!this._canRender)return this._resetBuffer=!1,this._requestRender(),this._emptyOutput;let o=this.bindParameters;this._configuration.hasEmission=!!o.reprojection.lastFrameEmission;let s=this.techniques.getCompiled(bn,this._configuration),c=this.techniques.getCompiled(yn),l=a===1,u=l?this._lowQualityResolutionScale:1,d=l?this.techniques.getCompiled(Dn):null;if(!s||!c||l&&!d)return this._requestRender(),this._emptyOutput;let f=this.renderingContext,{camera:p}=o;this._passParameters.normalTexture=n,this._passParameters.depthTexture=r,this._passParameters.projScale=1/p.computeScreenPixelSizeAtDist(1),this._passParameters.scaleGlobalIllumination=u;let{fullWidth:m,fullHeight:h}=p,g=Math.max(1,Math.floor(m*u)),_=Math.max(1,Math.floor(h*u)),v=this.fboCache.acquire(g,_,`global illumination input`).acquireColor(R,0);f.bindFramebuffer(v.fbo),f.setViewport(0,0,g,_),f.bindTechnique(s,o,this._passParameters,this._drawParameters),f.screen.draw();let y=v.obtainAttachment(R),b=Math.max(1,Math.round(g/1)),x=Math.max(1,Math.round(_/1)),S=this.fboCache.acquire(b,x,`global illumination blur horizontal`);f.bindFramebuffer(S.fbo),this._drawParameters.texture=v.getTexture(),this._drawParameters.weightTexture=y.attachment,i(this._drawParameters.blurSize,0,1/_),f.bindTechnique(c,o,this._passParameters,this._drawParameters),f.setViewport(0,0,b,x),f.screen.draw(),v.release();let C=l?`global illumination blur vertical`:L.AMBIENT_ILLUMINATION,w=this.fboCache.acquire(b,x,C);f.bindFramebuffer(w.fbo),f.setViewport(0,0,b,x),f.setClearColor(1,1,1,0),f.clear(16384),this._drawParameters.texture=S.getTexture(),this._drawParameters.weightTexture=y.attachment,i(this._drawParameters.blurSize,1/b,0),f.bindTechnique(c,o,this._passParameters,this._drawParameters),f.setViewport(0,0,b,x),f.screen.draw(),S.release(),w.attachColor(y,R),y.release();let T=w;return d&&(T=this.fboCache.acquire(m,h,L.AMBIENT_ILLUMINATION).acquireColor(36065,0),f.bindFramebuffer(T.fbo),f.setViewport(0,0,m,h),f.setClearColor(1,1,1,0),f.clear(16384),this._drawParametersUpscale.colorTexture=w.getTexture(),this._drawParametersUpscale.weightTexture=w.getTexture(36065),f.bindTechnique(d,o,this._passParameters,this._drawParametersUpscale),f.screen.draw(),w.release()),f.setViewport4fv(p.fullViewport),this._passParameters.temporalSampleFrame=(this._passParameters.temporalSampleFrame+1)%64,++this._passParameters.accumulatedFrames,this._cacheGlobalIllumination(T),this._passParameters.accumulatedFrames<this._maxFrames&&this._requestRender(),T}_requestRender(){this._isGlobalIlluminationUpdate=!0,this.requestRender(1),this._isGlobalIlluminationUpdate=!1}_cacheGlobalIllumination(e){this._globalIllumination!==e&&(this._globalIllumination=m(this._globalIllumination),this._globalIllumination=e,this._globalIllumination.retain())}get _emptyOutput(){let e=this.renderingContext,{fullWidth:t,fullHeight:n}=this.bindParameters.camera,r=this.fboCache.acquire(t,n,L.AMBIENT_ILLUMINATION).acquireColor(R,0);return e.bindFramebuffer(r.fbo),e.setViewport(0,0,t,n),e.clearBuffer(0,[0,0,0,1]),e.clearBuffer(1,[0,0,0,0]),r}get _canRender(){let{reprojection:e,hasEmission:t,globalIllumination:n}=this.bindParameters;return!(!e.lastFrameColor||t&&!e.lastFrameEmission||!e.lastFrameDepth||!n||this._resetBuffer)}get _mode(){let{hasGlobalIlluminationHighQuality:e,hasGlobalIllumination:t}=this.view.stage.renderer;return e?2:+!!t}_resetAccumulatedFrames(){this._passParameters.accumulatedFrames=0,this._globalIllumination=m(this._globalIllumination)}get test(){let e=this;return{passParameters:this._passParameters,configuration:this._configuration,get maxFrames(){return e._maxFrames},set maxFrames(t){e._maxFrames=t},get lowQualityResolutionScale(){return e._lowQualityResolutionScale},set lowQualityResolutionScale(t){e._lowQualityResolutionScale=t},get mode(){return e._mode},restartAccumulation:()=>{this._resetAccumulatedFrames(),this._passParameters.temporalSampleFrame=0,this._resetBuffer=!0,this._requestRender()}}}};a([b()],On.prototype,`consumes`,void 0),a([b()],On.prototype,`produces`,void 0),On=a([y(`esri.views.3d.webgl-engine.effects.globalIllumination.GlobalIllumination`)],On);function kn(e,t){t.receiveGlobalIllumination?(e.uniforms.add(new Ie(`hasGlobalIlluminationTexture`,e=>e.globalIllumination!=null),new F(`globalIlluminationTexture`,e=>e.globalIllumination?.getTexture())),e.constants.add(`blurSizePixelsInverse`,`float`,1/1),e.code.add(U`vec3 readGlobalIlluminationOcclusionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec3(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return vec3(texelFetch(globalIlluminationTexture, texel, 0).a);
}
vec3 readGlobalIlluminationOcclusion() {
return 1.0 - readGlobalIlluminationOcclusionInverse();
}
vec4 readGlobalIlluminationEmissionInverse() {
if (!hasGlobalIlluminationTexture) {
return vec4(1.0);
}
ivec2 texel = ivec2(gl_FragCoord.xy * blurSizePixelsInverse);
return 1.0 - vec4(texelFetch(globalIlluminationTexture, texel, 0).rgb, 0.0);
}
vec4 readGlobalIlluminationEmission() {
return max((1.0 - readGlobalIlluminationEmissionInverse() - 0.01) / 0.99, 0.0);
}`)):e.code.add(U`vec3 readGlobalIlluminationOcclusionInverse() { return vec3(1.0); }
vec3 readGlobalIlluminationOcclusion() { return vec3(0.0); }
vec4 readGlobalIlluminationEmissionInverse() { return vec4(1.0); }
vec4 readGlobalIlluminationEmission() { return vec4(0.0); }`)}function An(e){e.code.add(U`float mapChannel(float x, vec2 p) {
if((x < p.x) && (p.x == 0.0) || !(x < p.x) && (p.x == 1.0)) {
return 0.0;
}
float result = (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
return max(result, 0.0);
}`),e.code.add(U`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function jn(e){e.code.add(U`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`),e.code.add(U`vec3 tonemapKhronosNeutral(vec3 color) {
const float startCompression = 0.76;
const float desaturation = 0.15;
float peak = max(color.r, max(color.g, color.b));
if (peak < startCompression) {
return color;
}
float d = 1.0 - startCompression;
float newPeak = 1.0 - d * d / (peak + d - startCompression);
color *= newPeak / peak;
float g = 1.0 - 1.0 / (desaturation * (peak - newPeak) + 1.0 );
return mix(color, vec3(newPeak), g);
}`)}function Mn(e){e.constants.add(`ambientBoostFactor`,`float`,Ce)}function Nn(e){e.uniforms.add(new N(`lightingGlobalFactor`,e=>e.lighting.globalFactor))}function Pn(e,t){let{pbrMode:n,spherical:r,hasColorTexture:i,receiveGlobalIllumination:a}=t;e.include(K),e.include(kn,t),e.include(Pt,t),n!==0&&e.include(Rt,t),e.include(It,t),e.include(Se),e.include(jn,t);let o=!(n===2&&!i);o&&e.include(An),Mn(e),Nn(e),We(e),e.code.add(U`
    float additionalDirectedAmbientLight(float lightAlignment) {
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }

    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float lightAlignment = dot(${r?U`normalize(vPosWorld)`:U`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(lightAlignment * 2.5, 0.0, 1.0));
    }
  `),Ke(e),e.code.add(U`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`);let s=a?`globalIlluminationOcclusion`:`ssao`,c=a?.75:1,l=a?1.5:1;switch(n){case 0:case 4:case 3:e.include(Ge),e.code.add(U`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld) * (1.0 - ssao);
vec3 albedoLinear = linearizeGamma(albedo);
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return delinearizeGamma(outColor);
}`);break;case 1:case 2:{let n=a?.35:.2;e.code.add(U`
        const float fillLightIntensity = 0.25;
        const float horizonLightDiffusion = 0.4;
        const float additionalAmbientIrradianceFactor = 0.02;
        const float groundReflectance = ${U.float(n)};

        vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
                                      vec3 viewDirection, vec3 upDirection, vec3 mrr, float additionalAmbientIrradiance) {
          PBRShadingInfo inputs;
          calculatePBRInputs(inputs, normal, viewDirection, upDirection, albedo, mrr);

          ${H(a,U`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}
      `),t.useFillLights?e.uniforms.add(new Ie(`hasFillLights`,e=>e.enableFillLights)):e.constants.add(`hasFillLights`,`bool`,!1),e.code.add(U`
        vec3 ambientDir = vec3(5.0 * upDirection[1] - upDirection[0] * upDirection[2], - 5.0 * upDirection[0] - upDirection[2] * upDirection[1], upDirection[1] * upDirection[1] + upDirection[0] * upDirection[0]);
        ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));

        inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;

        // Calculate the irradiance components: sun, fill lights and the sky.
        vec3 mainLightIrradianceComponent = ${U.float(c)} * inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
        vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
        // calculate ambient irradiance for localView and additionalLight for globalView
        vec3 ambientLightIrradianceComponent = ${U.float(l)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;

        // Assemble the overall irradiance of the sky that illuminates the surface
        inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
        // Assemble the overall irradiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky irradiance by the groundReflectance
        inputs.groundIrradianceToSurface = groundReflectance * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
      `),e.uniforms.add(new N(`lightingSpecularStrength`,e=>e.lighting.mainLight.specularStrength),new N(`lightingEnvironmentStrength`,e=>e.lighting.mainLight.environmentStrength)).code.add(U`
        vec3 horizonRingDir = inputs.RdotUP * upDirection - inputs.reflectedView;
        vec3 horizonRingH = normalize(horizonRingDir - viewDirection);
        inputs.NdotH_Horizon = dot(normal, horizonRingH);

        vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
        vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;

        // calculateAmbientRadiance for localView and additionalLight for global view
        vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance() * (1.0 - ${s}) + additionalLight;
        float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotUP + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));

        // Assemble the overall radiance of the sky that illuminates the surface
        inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Assemble the overall radiance of the ground that illuminates the surface. for this we use the simple model that changes only the sky radiance by the groundReflectance
        inputs.groundRadianceToSurface = 0.5 * groundReflectance * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;

        // Calculate average ambient radiance - This is used in the gamut mapping process to determine the black level for compression
        inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + groundReflectance);
      `),e.code.add(U`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent;

        ${H(a,U`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

      ${o?U`vec3 adjustedOutColorLinear = blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance);`:U`vec3 adjustedOutColorLinear = max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance);`}

        return delinearizeGamma(adjustedOutColorLinear);
      }
    `);break}case 5:case 6:{let t=a?.35:.5,n=a?.75:1,r=a?1.5:1;We(e),Ke(e),e.code.add(U`
      const float roughnessTerrain = 0.5;
      const float specularityTerrain = ${U.float(t)};

      vec3 evaluatePBRSimplifiedLighting(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDirection, vec3 upDirection) {
        PBRShadingInfo inputs;
        calculateSimplifiedInputs(inputs, normal, viewDirection, upDirection, albedo);

        ${H(a,U`vec3 globalIlluminationOcclusion = min(1.2 * readGlobalIlluminationOcclusion(), 1.0);`)}

        vec3 mainLightIrradianceComponent = ${U.float(n)} * (1.0 - shadow) * inputs.NdotL * mainLightIntensity;
        vec3 ambientLightIrradianceComponent = ${U.float(r)} * calculateAmbientIrradiance(normal) * (1.0 - ${s}) + additionalLight;
        vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;

        vec3 indirectDiffuse = ((1.0 - inputs.NdotUP) * mainLightIrradianceComponent + (1.0 + inputs.NdotUP ) * ambientSky) * 0.5;
        vec3 outDiffColor = inputs.albedoLinear * (1.0 - inputs.f0) * indirectDiffuse / PI;

        vec3 mainLightRadianceComponent = normalDistribution(inputs.NdotH, roughnessTerrain) * mainLightIntensity;
        vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, inputs.NdotV);
        vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
        vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;

        vec3 outColorLinear = outDiffColor + specularComponent;

        ${H(a,U`
        vec3 globalIlluminationEmission = 2.25 * (0.75 * inputs.albedoLinear + 0.25) * readGlobalIlluminationEmission().rgb;
        outColorLinear += globalIlluminationEmission;`)}

        return delinearizeGamma(outColorLinear);
      }
      `);break}}}function Fn(e,t){let n=e.fragment;switch(n.code.add(U`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case 0:n.code.add(U`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case 1:n.code.add(U`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case 2:n.code.add(U`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:t.doubleSidedMode;case 3:}}function In(e,t){let n=t.pbrMode,r=e.fragment;if(n!==2&&n!==0&&n!==1)return void r.code.add(U`void applyPBRFactors() {}`);if(n===0)return void r.code.add(U`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(n===2)return void r.code.add(U`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);let{hasMetallicRoughnessTexture:i,hasMetallicRoughnessTextureTransform:a,hasOcclusionTexture:o,hasOcclusionTextureTransform:s,bindType:c}=t;(i||o)&&e.include(Me,t),r.code.add(U`vec3 mrr;
float occlusion;`),i&&r.uniforms.add(c===1?new V(`texMetallicRoughness`,e=>e.textureMetallicRoughness):new q(`texMetallicRoughness`,e=>e.textureMetallicRoughness)),o&&r.uniforms.add(c===1?new V(`texOcclusion`,e=>e.textureOcclusion):new q(`texOcclusion`,e=>e.textureOcclusion)),r.uniforms.add(c===1?new W(`mrrFactors`,e=>e.mrrFactors):new Ae(`mrrFactors`,e=>e.mrrFactors)),r.code.add(U`
    ${H(i,U`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${H(o,`void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }`)}

    float getBakedOcclusion() {
      return ${o?`occlusion`:`1.0`};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${H(i,`applyMetallicRoughness(${a?`metallicRoughnessUV`:`vuv0`});`)}
      ${H(o,`applyOcclusion(${s?`occlusionUV`:`vuv0`});`)}
    }
  `)}function Ln(e,t){let n=je(t.output)&&t.receiveShadows;n&&He(e,!0),e.vertex.code.add(U`
    void forwardLinearDepthToReadShadowMap() { ${H(n,`forwardLinearDepth(gl_Position.w);`)} }
  `)}var Rn=class extends ke{constructor(e,t,n,r){super(e,`mat4`,2,(n,i,a,o)=>n.setUniformMatrices4fv(e,t(i,a,o),r),n)}},zn=class extends ke{constructor(e,t,n,r){super(e,`mat4`,1,(n,i,a)=>n.setUniformMatrices4fv(e,t(i,a),r),n)}};function Bn(e){e.uniforms.add(new zn(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(Hn)}function Vn(e){e.uniforms.add(new Rn(`shadowMapMatrix`,(e,t)=>t.shadowMap.getShadowMapMatrices(e.origin),4)),e.include(Hn)}function Hn(e){e.uniforms.add(new ve(`cascadeDistances`,e=>e.shadowMap.cascadeDistances),new ue(`numCascades`,e=>e.shadowMap.numCascades)),e.code.add(Un)}var Un=U`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`;function Wn(e){e.code.add(U`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}var Gn=class extends ke{constructor(e,t){super(e,`sampler2DShadow`,0,(n,r)=>n.bindTexture(e,t(r)))}};function Kn(e,t){t.receiveShadows&&e.fragment.include(Bn),Jn(e,t)}function qn(e,t){t.receiveShadows&&e.fragment.include(Vn),Jn(e,t)}function Jn(e,t){e.fragment.uniforms.add(new N(`lightingGlobalFactor`,e=>e.lighting.globalFactor));let{hasShadowHighlights:n,receiveShadows:r,spherical:i}=t;e.include(Ln,t),r&&Yn(e.fragment,n),e.fragment.code.add(U`
    float readShadow(float additionalAmbientScale, vec3 vpos) {
      return ${r?`max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))`:H(i,`lightingGlobalFactor * (1.0 - additionalAmbientScale)`,`0.0`)};
    }
  `)}function Yn(e,t){Zn(e,t),Xn(e)}function Xn(e){e.code.add(U`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap, 0));
return readShadowMaps(uvzShadow);
}`)}function Zn(e,t){e.include(Wn),e.uniforms.add(Qn()),t&&e.uniforms.add(new F(`shadowHighlight`,({shadowHighlight:e})=>e?.getTexture())),e.code.add(U`
    float readShadowMaps(const in vec3 uvzShadow) {
      if (uvzShadow.z < 0.0) {
        return 0.0;
      }

      float shadow1 = readShadowMapUVZ(uvzShadow, shadowMap);
      ${H(t,`float shadow2 = texelFetch(shadowHighlight, ivec2(gl_FragCoord.xy), 0).r;
         return shadow1 > shadow2 ? shadow1 : shadow2;`,`return shadow1;`)}
    }
  `)}function Qn(){return new Gn(`shadowMap`,({shadowMap:e})=>e.getOutput(5)??e.getOutput(7))}function $n(e,t){t.hasColorTextureTransform?(e.varyings.add(`colorUV`,`vec2`),e.vertex.uniforms.add(new k(`colorTextureTransformMatrix`,e=>e.colorTextureTransformMatrix??g)).code.add(U`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(U`void forwardColorUV(){}`)}function er(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`normalUV`,`vec2`),e.vertex.uniforms.add(new k(`normalTextureTransformMatrix`,e=>e.normalTextureTransformMatrix??g)).code.add(U`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(U`void forwardNormalUV(){}`)}function tr(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`emissiveUV`,`vec2`),e.vertex.uniforms.add(new k(`emissiveTextureTransformMatrix`,e=>e.emissiveTextureTransformMatrix??g)).code.add(U`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(U`void forwardEmissiveUV(){}`)}function nr(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`occlusionUV`,`vec2`),e.vertex.uniforms.add(new k(`occlusionTextureTransformMatrix`,e=>e.occlusionTextureTransformMatrix??g)).code.add(U`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(U`void forwardOcclusionUV(){}`)}function rr(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==0?(e.varyings.add(`metallicRoughnessUV`,`vec2`),e.vertex.uniforms.add(new k(`metallicRoughnessTextureTransformMatrix`,e=>e.metallicRoughnessTextureTransformMatrix??g)).code.add(U`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(U`void forwardMetallicRoughnessUV(){}`)}function ir(e,t){t.snowCover&&(e.uniforms.add(new N(`snowCover`,e=>e.snowCover)).code.add(U`float getSnow(vec3 normal, vec3 groundNormal) {
return smoothstep(0.5, 0.55, dot(normal, groundNormal)) * snowCover;
}
float getRealisticTreeSnow(vec3 faceNormal, vec3 shadingNormal, vec3 groundNormal) {
float snow = min(1.0, smoothstep(0.5, 0.55, dot(faceNormal, groundNormal)) +
smoothstep(0.5, 0.55, dot(-faceNormal, groundNormal)) +
smoothstep(0.0, 0.1, dot(shadingNormal, groundNormal)));
return snow * snowCover;
}`),e.code.add(U`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}`))}function ar(e){let t=new Y,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,normalType:s,offsetBackfaces:c,spherical:l,snowCover:u,pbrMode:d,textureAlphaPremultiplied:f,instancedDoublePrecision:p,hasVertexColors:m,hasVertexTangents:h,hasColorTexture:g,hasNormalTexture:_,hasNormalTextureTransform:v,hasColorTextureTransform:y}=e;if(E(r,e),n.add(`position`,`vec3`),r.inputs.add(`position`,()=>`position`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(O,e),t.include(st,e),t.include(Pe,e),t.include($n,e),!je(o))return t.include(ft,e),t;t.include(er,e),t.include(tr,e),t.include(nr,e),t.include(rr,e),ce(r,e),t.include(Xe,e),t.include(Q);let b=s===0||s===1;return b&&c&&t.include(it),t.include(pt,e),t.include(Ze,e),t.include(at,e),a.add(`vPositionLocal`,`vec3`),t.include(X,e),t.include(lt,e),t.include(Ue,e),r.uniforms.add(new re(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),r.include(j),r.include(w),t.include(p?Kn:qn,e),r.main.add(U`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${H(b,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${H(h,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${H(b&&c,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${U.int(P.ignore)} && vcolorExt.a < ${U.float(se)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),i.include(Pn,e),i.include(Pt,e),t.include($,e),i.include(M,e),t.include(de,e),ce(i,e),i.uniforms.add(r.uniforms.get(`localOrigin`),new W(`ambient`,e=>e.ambient),new W(`diffuse`,e=>e.diffuse),new G(`opacity`,e=>e.opacity),new G(`layerOpacity`,e=>e.layerOpacity)),g&&i.uniforms.add(new V(`tex`,e=>e.texture)),t.include(In,e),i.include(Rt,e),i.include(we),t.include(Fn,e),i.include(ir,e),Mn(i),Nn(i),Ke(i),i.main.add(U`
    discardBySlice(vpos);
    ${g?U`
            vec4 texColor = texture(tex, ${y?`colorUV`:`vuv0`});
            ${H(f,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:U`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${s===2?U`vec3 normal = screenDerivativeNormal(vPositionLocal);`:U`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${H(m,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${H(m,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${_?`mat3 tangentSpace = computeTangentSpace(${h?`normal`:`normal, vpos, vuv0`});\n           vec3 shadingNormal = computeTextureNormal(tangentSpace, ${v?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${l?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${H(u,U`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${d===1||d===2?U`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${H(u,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:U`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${H(u,`, snow`)});
  `),t}var or=Object.freeze(Object.defineProperty({__proto__:null,build:ar},Symbol.toStringTag,{value:`Module`}));function sr(e){let t=new Y,{attributes:n,vertex:r,fragment:i,varyings:a}=t,{output:o,offsetBackfaces:s,pbrMode:c,snowCover:l,spherical:u}=e,d=c===1||c===2;if(E(r,e),n.add(`position`,`vec3`),r.inputs.add(`position`,()=>`position`),a.add(`vpos`,`vec3`,{invariant:!0}),t.include(O,e),t.include(st,e),t.include(Pe,e),t.include($n,e),!je(o))return t.include(ft,e),t;t.include(tr,e),ce(t.vertex,e),t.include(Xe,e),t.include(Q),s&&t.include(it),a.add(`vNormalWorld`,`vec3`),a.add(`localvpos`,`vec3`,{invariant:!0}),t.include(X,e),t.include(lt,e),t.include(at,e),t.include(Ue,e),r.include(j),r.include(w),r.uniforms.add(new re(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),a.add(`vcolorExt`,`vec4`),t.include(e.instancedDoublePrecision?Kn:qn,e),r.include(pe),r.main.add(U`
    forwardVertexColor();

    MaskedColor maskedColorExt =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColorExt.color;
    forwardColorMixMode(maskedColorExt.mask);

    bool alphaCut = opacityMixMode != ${U.int(P.ignore)} && vcolorExt.a < alphaCutoff;
    vpos = getVertexInLocalOriginSpace();

    localvpos = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
    vpos = addVerticalOffset(vpos, localOrigin);
    vec4 basePosition = transformPosition(proj, view, vpos);

    forwardTextureCoordinates();
    forwardColorUV();
    forwardEmissiveUV();
    forwardLinearDepthToReadShadowMap();
    gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
    ${H(s,`offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);`,`basePosition;`)}
  `);let{hasColorTexture:f,hasColorTextureTransform:p}=e;return i.include(Pn,e),i.include(Pt,e),t.include($,e),i.include(M,e),t.include(de,e),ce(i,e),We(i),Mn(i),Nn(i),i.uniforms.add(r.uniforms.get(`localOrigin`),r.uniforms.get(`view`),new W(`ambient`,e=>e.ambient),new W(`diffuse`,e=>e.diffuse),new G(`opacity`,e=>e.opacity),new G(`layerOpacity`,e=>e.layerOpacity)),f&&i.uniforms.add(new V(`tex`,e=>e.texture)),t.include(In,e),i.include(Rt,e),i.include(we),i.include(ir,e),Ke(i),i.main.add(U`
      discardBySlice(vpos);
      vec4 texColor = ${f?`texture(tex, ${p?`colorUV`:`vuv0`})`:` vec4(1.0)`};
      ${H(f,`${H(e.textureAlphaPremultiplied,`texColor.rgb /= texColor.a;`)}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = readShadow(additionalAmbientScale, vpos);
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?U`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, opacityMixMode);`:U`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, opacityMixMode);`}

      vec3 shadingNormal = normalize(vNormalWorld);
      vec3 groundNormal = ${u?`normalize(vpos + localOrigin)`:`vec3(0.0, 0.0, 1.0)`};

      ${H(l,`vec3 faceNormal = screenDerivativeNormal(vpos);
         float snow = getRealisticTreeSnow(faceNormal, shadingNormal, groundNormal);
         albedo = mix(albedo, vec3(1), snow);`)}

      ${U`albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}

      ${d?U`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${H(l,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, groundNormal, mrr, additionalAmbientIrradiance);`:U`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${H(l,`, 1.0`)});`),t}var cr=Object.freeze(Object.defineProperty({__proto__:null,build:sr},Symbol.toStringTag,{value:`Module`}));export{yt as A,$e as B,sn as C,It as D,zt as E,it as F,rt as I,tt as L,ht as M,gt as N,Pt as O,ut as P,et as R,on as S,rn as T,Qe as V,ln as _,ir as a,un as b,Fn as c,Pn as d,jn as f,hn as g,gn as h,ar as i,vt as j,Ct as k,Nn as l,Tn as m,cr as n,qn as o,wn as p,or as r,In as s,sr as t,Mn as u,cn as v,fn as w,dn as x,an as y,nt as z};