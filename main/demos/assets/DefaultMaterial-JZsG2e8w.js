const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RealisticTree.glsl-CgRLrQ0J.js","./main-CISBdIQH.js","./preload-helper-ExcqyqRp.js","./main-dpdk7fuu.css","./dehydratedFeatureUtils-BLnlR8lO.js","./glsl-Cj7KC756.js","./mat4-BKyelCEs.js","./common-DQOJ18NT.js","./mat4f64-q_b6UJoq.js","./vec42-CKs01hkn.js","./vec4f64-DPb6J-GU.js","./projectionUtils-DMXibLVV.js","./meshVertexSpaceUtils-BebcSB4I.js","./vec32-Coka7ZT9.js","./MeshLocalVertexSpace-BJ94OiDU.js","./projectVectorToVector-WpK4hvgq.js","./projectPointToVector-DR30fI5w.js","./hydratedFeatures-2Vb5P870.js","./vec3f32-WCVSSNPR.js","./OutputColorHighlightOID.glsl-BtAbuSJt.js","./videoUtils-B8cAFkr8.js","./requestImageUtils-C7ugDI2r.js","./basicInterfaces-CZwQPxTp.js","./TextureFormat-1mYWTFa-.js","./enums-UBzvFP7O.js","./Texture-D2Y9jyC4.js","./getDataTypeBytes-D2DiHx_d.js","./BufferView-Cs3iNMFz.js","./vec2-maR1OrZI.js","./vec2f64-Cgb6qxNH.js","./Indices-COsLXUe7.js","./triangle-DCzlaHYw.js","./sphere-Mxa1Bxq3.js","./mat3-CruJiiUv.js","./mat3f64-B5o_lm6j.js","./vectorStacks-DjjbRqMy.js","./quatf64-aQ5IuZRd.js","./lineSegment-CAUOtTcJ.js","./VertexAttribute-BfkzOMLV.js","./BindType-BBwFZqyN.js","./ShaderOutput-Bdd80V3g.js","./renderState-DAt0XJBU.js","./ViewingMode-Chk7YAAL.js","./orientedBoundingBox-Dqt2aYKj.js","./quat-DqY1gcTW.js","./spatialReferenceEllipsoidUtils-BTI9l57A.js","./computeTranslationToOriginAndRotation-BzkWry0j.js","./plane-BfIuUGk0.js","./lengthUtils-CwjJ4q6x.js","./boundedPlane-DKB2JU0a.js","./memoryEstimations-CTdSFfdp.js","./IntersectorType-MzDgEpor.js","./ShaderBuilder-CDMOqKjB.js","./NormalAttribute.glsl-D8uHq78D.js"])))=>i.map(i=>d[i]);
import{H as to,o as q,s as Ao,A as Go,c as we,r as Po,g as Ve,P as _o,N as Do}from"./vec32-Coka7ZT9.js";import{fi as ro,gL as ze,gO as Q,aj as O,h as c,j as Me,n as Fo,e2 as ie,ad as jo,fY as Ro,ah as Vo,cS as Bo,lq as k,d8 as Ho}from"./main-CISBdIQH.js";import{l as Be}from"./ViewingMode-Chk7YAAL.js";import{O as Wo}from"./InterleavedLayout-DbfkZG2k.js";import{n as w,u as ee,r as He,o as Te,t as Uo,C as qo}from"./ShaderOutput-Bdd80V3g.js";import{n as G,a as M,t as he}from"./NormalAttribute.glsl-D8uHq78D.js";import{q as Yo,r as F,F as Jo,u as Zo,v as ko,x as Xo,y as se,z as Ko,A as Qo,h as ea,B as oa,C as aa,c as D,D as oe,f as V,E as B,G as H,H as K,I as $,J as W,K as ta,M as ra,N as ia,O as R,P as na,Q as io,R as no,S as so,T as lo,U as sa,V as Oe,W as pe,X as co,Y as la,e as le,Z as ca,_ as da,$ as We,a0 as Se,k as ma,o as z,a1 as p,a2 as Ie,a3 as ua,a4 as Ee,a5 as ce,j as ha,a6 as pa,a7 as Le,a8 as va,a9 as fa,aa as mo,d as de,ab as uo,ac as ho,ad as po,ae as vo,af as fo,ag as me,ah as go,ai as ga,aj as xa,ak as ba,al as wa,am as Ma,an as Ta,ao as Sa,ap as ya,aq as Ca,ar as Na,as as u,at as _,au as $a,av as Ea,aw as ye,ax as za,ay as Oa,az as Ia,aA as La,aB as Aa,aC as Ga,aD as Pa}from"./OutputColorHighlightOID.glsl-BtAbuSJt.js";import{n as i,t as v}from"./glsl-Cj7KC756.js";import{i as N,a as Ue,e as ae,n as te}from"./basicInterfaces-CZwQPxTp.js";import{e as x}from"./VertexAttribute-BfkzOMLV.js";import{_ as ve}from"./preload-helper-ExcqyqRp.js";import{n as xo,s as _a,r as Da}from"./vec4f64-DPb6J-GU.js";import{e as Ae,r as Y}from"./mat3f64-B5o_lm6j.js";import{j as Fa}from"./mat3-CruJiiUv.js";import{r as qe}from"./mat4f64-q_b6UJoq.js";import{a as fe}from"./BindType-BBwFZqyN.js";import{a as ja,n as bo}from"./vec2f64-Cgb6qxNH.js";import{o as ue}from"./vec2-maR1OrZI.js";import{i as ge}from"./ShaderBuilder-CDMOqKjB.js";import{B as Ge,g as Pe,f as Ra}from"./renderState-DAt0XJBU.js";import{P as Ye,M as Va,g as Ba,_ as Ha,C as Je}from"./enums-UBzvFP7O.js";import{a as Wa,S as Ua}from"./Texture-D2Y9jyC4.js";import{s as L}from"./vec42-CKs01hkn.js";function qa(e){e.vertex.code.add(i`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.int(G.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.int(G.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.int(G.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.int(G.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function Ya(e,o){const t=e.fragment;switch(t.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case S.None:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case S.View:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case S.WindingOrder:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ro(o.doubleSidedMode);case S.COUNT:}}var S;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(S||(S={}));function ur({normalTexture:e,metallicRoughnessTexture:o,metallicFactor:t,roughnessFactor:r,emissiveTexture:a,emissiveFactor:s,occlusionTexture:n}){return e==null&&o==null&&a==null&&(s==null||to(s,ze))&&n==null&&(r==null||r===1)&&(t==null||t===1)}const Ja=Q(1,1,.5),hr=Q(0,.6,.2),pr=Q(0,1,.2);function wo(e,o){switch(o.normalType){case M.Attribute:case M.Compressed:e.include(he,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Yo("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new F("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)),e.vertex.code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case M.ScreenDerivative:e.vertex.code.add(i`void forwardNormal() {}`);break;default:ro(o.normalType);case M.COUNT:}}let Za=class extends Jo{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ae()}},ka=class extends Zo{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ae(),this.toMapSpace=xo()}};function Mo(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const Ze=Ae();function To(e,o){const{hasModelTransformation:t,instancedDoublePrecision:r,instanced:a,output:s,hasVertexTangents:n}=o;t&&(e.vertex.uniforms.add(new ko("model",d=>d.modelTransformation??qe)),e.vertex.uniforms.add(new F("normalLocalOriginFromModel",d=>(Fa(Ze,d.modelTransformation??qe),Ze)))),a&&r&&(e.attributes.add(x.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(x.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(x.INSTANCEMODEL,"mat3"),e.attributes.add(x.INSTANCEMODELNORMAL,"mat3"));const l=e.vertex;r&&(l.include(Xo,o),l.uniforms.add(new se("viewOriginHi",d=>Ko(q(ne,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ne)),new se("viewOriginLo",d=>Qo(q(ne,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),ne)))),l.code.add(i`
    vec3 getVertexInLocalOriginSpace() {
      return ${t?r?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":r?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${r?i`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),l.code.add(i`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${t?r?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":r?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),s===w.Normal&&(ea(l),l.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),n&&l.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ne=O();function So(e,o){o.hasSymbolColors?(e.include(qa),e.attributes.add(x.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new oa("colorMixMode",t=>aa[t.colorMixMode])),e.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Xa(e,o){switch(o.output){case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}function U(e,o){Ka(e,o,new D("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function Ka(e,o,t){const r=e.fragment,a=o.alphaDiscardMode,s=a===N.Blend;a!==N.Mask&&a!==N.MaskBlend||r.uniforms.add(t),r.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${a===N.Opaque?"color.a = 1.0;":`if (color.a < ${s?i.float(oe):"textureAlphaCutoff"}) {
              discard;
             } ${v(a===N.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function yo(e,o){const{vertex:t,fragment:r,varyings:a}=e,{hasColorTexture:s,alphaDiscardMode:n}=o,l=s&&n!==N.Opaque,{output:d,normalType:h,hasColorTextureTransform:f}=o;switch(d){case w.Depth:V(t,o),e.include(B,o),r.include(W,o),e.include(H,o),l&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(U,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:case w.ObjectAndLayerIdColor:V(t,o),e.include(B,o),e.include(H,o),e.include(K,o),e.include(Xa,o),r.include(W,o),e.include(ra,o),ia(e),a.add("depth","float",{invariant:!0}),l&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(U,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${d===w.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case w.Normal:{V(t,o),e.include(B,o),e.include(he,o),e.include(wo,o),e.include(H,o),e.include(K,o),l&&r.uniforms.add(new $("tex",y=>y.texture)),h===M.ScreenDerivative&&a.add("vPositionView","vec3",{invariant:!0});const g=h===M.Attribute||h===M.Compressed;t.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${g?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(W,o),e.include(U,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${h===M.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case w.Highlight:V(t,o),e.include(B,o),e.include(H,o),e.include(K,o),l&&r.uniforms.add(new $("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(W,o),e.include(U,o),e.include(ta,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function Qa(e,o){const t=e.fragment,{hasVertexTangents:r,doubleSidedMode:a,hasNormalTexture:s,textureCoordinateType:n,bindType:l,hasNormalTextureTransform:d}=o;r?(e.attributes.add(x.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),a===S.WindingOrder?t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),s&&n!==R.None&&(e.include(na,o),t.uniforms.add(l===fe.Pass?new $("normalTexture",h=>h.textureNormal):new io("normalTexture",h=>h.textureNormal)),d&&(t.uniforms.add(new no("scale",h=>h.scale??ja)),t.uniforms.add(new F("normalTextureTransformMatrix",h=>h.normalTextureTransformMatrix??Y))),t.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),d&&t.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(i`return tangentSpace * rawNormal;
}`))}const et=3e5,ke=5e5,Ce=4;function ot(){const e=new ge,o=e.fragment;e.include(so);const t=(Ce+1)/2,r=1/(2*t*t);return o.include(lo),o.uniforms.add(new $("depthMap",a=>a.depthTexture),new io("tex",a=>a.colorTexture),new sa("blurSize",a=>a.blurSize),new D("projScale",(a,s)=>{const n=s.camera.distance;return n>5e4?Math.max(0,a.projScale-(n-5e4)):a.projScale})),o.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(r)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),o.main.add(i`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${i.int(Ce)}; r <= ${i.int(Ce)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const at=Object.freeze(Object.defineProperty({__proto__:null,build:ot},Symbol.toStringTag,{value:"Module"}));let Xe=class extends Oe{constructor(o,t){super(o,t,new pe(at,()=>ve(()=>import("./RealisticTree.glsl-CgRLrQ0J.js").then(r=>r.c),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url)))}initializePipeline(){return Ge({colorWrite:Pe})}};const tt="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let rt=class extends co{constructor(){super(...arguments),this.projScale=1}},it=class extends rt{constructor(){super(...arguments),this.intensity=1}},nt=class extends co{},st=class extends nt{constructor(){super(...arguments),this.blurSize=bo()}};const Ke=16;function lt(){const e=new ge,o=e.fragment;return e.include(so),e.include(la),o.include(lo),o.uniforms.add(new le("radius",t=>_e(t.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),o.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.outputs.add("fragOcclusion","float"),o.uniforms.add(new $("normalMap",t=>t.normalTexture),new $("depthMap",t=>t.depthTexture),new D("projScale",t=>t.projScale),new $("rnm",t=>t.noiseTexture),new no("rnmScale",(t,r)=>ue(Qe,r.camera.fullWidth/t.noiseTexture.descriptor.width,r.camera.fullHeight/t.noiseTexture.descriptor.height)),new D("intensity",t=>t.intensity),new ca("screenSize",t=>ue(Qe,t.camera.fullWidth,t.camera.fullHeight))).main.add(i`
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

    for(int i = 0; i < ${i.int(Ke)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${i.int(Ke)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function _e(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const Qe=bo(),ct=Object.freeze(Object.defineProperty({__proto__:null,build:lt,getRadius:_e},Symbol.toStringTag,{value:"Module"}));let eo=class extends Oe{constructor(o,t){super(o,t,new pe(ct,()=>ve(()=>import("./RealisticTree.glsl-CgRLrQ0J.js").then(r=>r.d),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url)))}initializePipeline(){return Ge({colorWrite:Pe})}};const X=2;let Z=class extends da{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=We.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new it,this._drawParameters=new st}initialize(){const e=Uint8Array.from(atob(tt),t=>t.charCodeAt(0)),o=new Wa;o.wrapMode=Ye.CLAMP_TO_EDGE,o.pixelFormat=Va.RGB,o.wrapMode=Ye.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new Ua(this.renderingContext,o,e),this.techniques.precompile(eo),this.techniques.precompile(Xe),this.addHandles(jo(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Ro(this._passParameters.noiseTexture)}render(e){const o=e.find(({name:xe})=>xe==="normals"),t=o?.getTexture(),r=o?.getTexture(Ba);if(!t||!r)return;const a=this.techniques.get(eo),s=this.techniques.get(Xe);if(!a.compiled||!s.compiled)return this._enableTime=ie(performance.now()),void this.requestRender(Ue.UPDATE);this._enableTime===0&&(this._enableTime=ie(performance.now()));const n=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,h=d.camera,f=h.relativeElevation,g=Vo((ke-f)/(ke-et),0,1),y=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,E=y*g;this._passParameters.normalTexture=t,this._passParameters.depthTexture=r,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*dt/_e(h)**6*E;const T=h.fullViewport[2],I=h.fullViewport[3],P=this.fboCache.acquire(T,I,"ssao input",Se.RG8UNORM);n.bindFramebuffer(P.fbo),n.setViewport(0,0,T,I),n.bindTechnique(a,d,this._passParameters,this._drawParameters),n.screen.draw();const b=Math.round(T/X),j=Math.round(I/X),J=this.fboCache.acquire(b,j,"ssao blur",Se.R8UNORM);n.bindFramebuffer(J.fbo),this._drawParameters.colorTexture=P.getTexture(),ue(this._drawParameters.blurSize,0,X/I),n.bindTechnique(s,d,this._passParameters,this._drawParameters),n.setViewport(0,0,b,j),n.screen.draw(),P.release();const re=this.fboCache.acquire(b,j,We.SSAO,Se.R8UNORM);return n.bindFramebuffer(re.fbo),n.setViewport(0,0,T,I),n.setClearColor(1,1,1,0),n.clear(Ha.COLOR),this._drawParameters.colorTexture=J.getTexture(),ue(this._drawParameters.blurSize,X/T,0),n.bindTechnique(s,d,this._passParameters,this._drawParameters),n.setViewport(0,0,b,j),n.screen.draw(),n.setViewport4fv(h.fullViewport),J.release(),y<1&&this.requestRender(Ue.UPDATE),re}};c([Me()],Z.prototype,"consumes",void 0),c([Me()],Z.prototype,"produces",void 0),c([Me({constructOnly:!0})],Z.prototype,"isEnabled",void 0),Z=c([Fo("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Z);const dt=.5;function De(e,o){o.receiveAmbientOcclusion?(e.uniforms.add(new ma("ssaoTex",t=>t.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/X),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function mt(e,o){const t=e.fragment,r=o.lightingSphericalHarmonicsOrder!==void 0?o.lightingSphericalHarmonicsOrder:2;r===0?(t.uniforms.add(new se("lightingAmbientSH0",({lighting:a})=>q(oo,a.sh.r[0],a.sh.g[0],a.sh.b[0]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(t.uniforms.add(new z("lightingAmbientSH_R",({lighting:a})=>L(A,a.sh.r[0],a.sh.r[1],a.sh.r[2],a.sh.r[3])),new z("lightingAmbientSH_G",({lighting:a})=>L(A,a.sh.g[0],a.sh.g[1],a.sh.g[2],a.sh.g[3])),new z("lightingAmbientSH_B",({lighting:a})=>L(A,a.sh.b[0],a.sh.b[1],a.sh.b[2],a.sh.b[3]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):r===2&&(t.uniforms.add(new se("lightingAmbientSH0",({lighting:a})=>q(oo,a.sh.r[0],a.sh.g[0],a.sh.b[0])),new z("lightingAmbientSH_R1",({lighting:a})=>L(A,a.sh.r[1],a.sh.r[2],a.sh.r[3],a.sh.r[4])),new z("lightingAmbientSH_G1",({lighting:a})=>L(A,a.sh.g[1],a.sh.g[2],a.sh.g[3],a.sh.g[4])),new z("lightingAmbientSH_B1",({lighting:a})=>L(A,a.sh.b[1],a.sh.b[2],a.sh.b[3],a.sh.b[4])),new z("lightingAmbientSH_R2",({lighting:a})=>L(A,a.sh.r[5],a.sh.r[6],a.sh.r[7],a.sh.r[8])),new z("lightingAmbientSH_G2",({lighting:a})=>L(A,a.sh.g[5],a.sh.g[6],a.sh.g[7],a.sh.g[8])),new z("lightingAmbientSH_B2",({lighting:a})=>L(A,a.sh.b[5],a.sh.b[6],a.sh.b[7],a.sh.b[8]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),o.pbrMode!==p.Normal&&o.pbrMode!==p.Schematic||t.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const oo=O(),A=xo();function ut(e){e.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Fe(e,o){e.include(Ie),o.pbrMode!==p.Normal&&o.pbrMode!==p.Schematic&&o.pbrMode!==p.Simplified&&o.pbrMode!==p.TerrainWithWater||(e.code.add(i`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),e.code.add(i`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),o.pbrMode!==p.Normal&&o.pbrMode!==p.Schematic||(e.include(ut),e.code.add(i`struct PBRShadingInfo
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
};`),e.code.add(i`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`))}function Sr(e,o){e.include(Ie),e.code.add(i`
  struct PBRShadingWater {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${o.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),e.code.add(i`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),e.code.add(i`float normalDistributionWater(float NdotH, float roughness) {
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),e.code.add(i`float geometricOcclusionKelemen(float LoH) {
return 0.25 / (LoH * LoH);
}`),e.code.add(i`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max) {
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function ht(e){e.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function pt(e){e.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function je(e){e.constants.add("ambientBoostFactor","float",ua)}function Re(e){e.uniforms.add(new le("lightingGlobalFactor",o=>o.lighting.globalFactor))}function Co(e,o){const t=e.fragment,{pbrMode:r,spherical:a,hasColorTexture:s}=o;t.include(De,o),r!==p.Disabled&&t.include(Fe,o),e.include(mt,o),t.include(Ie),t.include(pt,o);const n=!(r===p.Schematic&&!s);switch(n&&t.include(ht),t.code.add(i`
    const float GAMMA_SRGB = ${i.float(Bo)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${v(r!==p.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),je(t),Re(t),Ee(t),t.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${a?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ce(t),t.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case p.Disabled:case p.WaterOnIntegratedMesh:case p.Water:e.include(pa),t.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case p.Normal:case p.Schematic:t.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight,
vec3 viewDir, vec3 groundNormal, vec3 mrr, vec4 _emission,
float additionalAmbientIrradiance) {
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, groundNormal), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, groundNormal), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),t.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.useFillLights?t.uniforms.add(new ha("hasFillLights",l=>l.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new le("lightingSpecularStrength",l=>l.lighting.mainLight.specularStrength),new le("lightingEnvironmentStrength",l=>l.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE);`),t.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : tonemapACES(pow(_emission.rgb, vec3(GAMMA_SRGB)));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${n?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case p.Simplified:case p.TerrainWithWater:Ee(t),ce(t),t.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
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
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);default:case p.COUNT:}}let vt=class extends Le{constructor(o,t,r){super(o,"mat4",fe.Draw,(a,s,n,l)=>a.setUniformMatrix4fv(o,t(s,n,l)),r)}},ft=class extends Le{constructor(o,t,r){super(o,"mat4",fe.Pass,(a,s,n)=>a.setUniformMatrix4fv(o,t(s,n)),r)}};function gt(e){e.fragment.uniforms.add(new ft("shadowMapMatrix",(o,t)=>t.shadowMap.getShadowMapMatrices(o.origin),4)),No(e)}function xt(e){e.fragment.uniforms.add(new vt("shadowMapMatrix",(o,t)=>t.shadowMap.getShadowMapMatrices(o.origin),4)),No(e)}function No(e){const{fragment:o}=e;o.uniforms.add(new z("cascadeDistances",t=>t.shadowMap.cascadeDistances),new va("numCascades",t=>t.shadowMap.numCascades)),o.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function bt(e){e.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}class wt extends Le{constructor(o,t){super(o,"sampler2DShadow",fe.Bind,(r,a)=>r.bindTexture(o,t(a)))}}function $o(e,o){o.receiveShadows&&(e.include(gt),zo(e))}function Eo(e,o){o.receiveShadows&&(e.include(xt),zo(e))}function zo(e){e.include(bt);const{fragment:o}=e;o.uniforms.add(new wt("shadowMap",t=>t.shadowMap.depthTexture)),o.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Mt(e,o){o.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new F("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??Y)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function Tt(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==R.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new F("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??Y)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function St(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==R.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new F("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??Y)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function yt(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==R.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new F("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??Y)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Ct(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==R.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new F("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??Y)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Oo(e){e.include(fa),e.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(G.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(G.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(G.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(G.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(G.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Nt(e,o){o.snowCover&&(e.code.add(i`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}function $t(e){const o=new ge,{attributes:t,vertex:r,fragment:a,varyings:s}=o,{output:n,normalType:l,offsetBackfaces:d,instancedColor:h,spherical:f,receiveShadows:g,snowCover:y,pbrMode:E,textureAlphaPremultiplied:T,instancedDoublePrecision:I,hasVertexColors:P,hasVertexTangents:b,hasColorTexture:j,hasNormalTexture:J,hasNormalTextureTransform:re,hasColorTextureTransform:xe,hasBloom:Lo}=e;if(V(r,e),t.add(x.POSITION,"vec3"),s.add("vpos","vec3",{invariant:!0}),o.include(K,e),o.include(To,e),o.include(mo,e),o.include(Mt,e),!ee(n))return o.include(yo,e),o;o.include(Tt,e),o.include(St,e),o.include(yt,e),o.include(Ct,e),de(r,e),o.include(he,e),o.include(B,e);const be=l===M.Attribute||l===M.Compressed;return be&&d&&o.include(Mo),o.include(Qa,e),o.include(wo,e),h&&o.attributes.add(x.INSTANCECOLOR,"vec4"),s.add("vPositionLocal","vec3"),o.include(H,e),o.include(uo,e),o.include(So,e),o.include(ho,e),r.uniforms.add(new po("externalColor",C=>C.colorMixMode==="ignore"?_a:C.externalColor)),s.add("vcolorExt","vec4"),o.include(vo,e),r.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${v(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(be,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(b,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(be&&d,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${i.float(oe)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),o.include(Co,e),a.include(De,e),o.include(U,e),o.include(I?$o:Eo,e),a.include(W,e),o.include(fo,e),de(a,e),a.uniforms.add(r.uniforms.get("localOrigin"),new me("ambient",C=>C.ambient),new me("diffuse",C=>C.diffuse),new D("opacity",C=>C.opacity),new D("layerOpacity",C=>C.layerOpacity)),j&&a.uniforms.add(new $("tex",C=>C.texture)),o.include(go,e),a.include(Fe,e),a.include(Oo),o.include(Ya,e),a.include(Nt,e),je(a),Re(a),ce(a),a.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${j?i`
            vec4 texColor = texture(tex, ${xe?"colorUV":"vuv0"});
            ${v(T,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${l===M.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${g?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":v(f,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${v(P,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${v(P,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${J?`mat3 tangentSpace = computeTangentSpace(${b?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(y,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${E===p.Normal||E===p.Schematic?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${Lo?"vec4(0.0)":"getEmissions(albedo)"};
            ${v(y,`mrr = applySnowToMRR(mrr, snow);
                 emission = snowCoverForEmissions(emission, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${v(y,", snow")});
  `),o}const Et=Object.freeze(Object.defineProperty({__proto__:null,build:$t},Symbol.toStringTag,{value:"Module"}));class zt extends Za{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ja,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ae.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=k.Color,this.emissiveBaseColor=ze,this.instancedDoublePrecision=!1,this.normalType=M.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=Q(.2,.2,.2),this.diffuse=Q(.8,.8,.8),this.externalColor=Da(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=O(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=te.Less,this.textureAlphaMode=N.Blend,this.textureAlphaCutoff=oe,this.textureAlphaPremultiplied=!1,this.renderOccluded=ga.Occlude,this.isDecoration=!1}}class Nr extends ka{constructor(){super(...arguments),this.origin=O(),this.slicePlaneLocalOrigin=this.origin}}class Io extends Oe{constructor(o,t,r=new pe(Et,()=>ve(()=>import("./RealisticTree.glsl-CgRLrQ0J.js").then(a=>a.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url))){super(o,t,r),this.type="DefaultMaterialTechnique"}_makePipeline(o,t){const{oitPass:r,output:a,transparent:s,cullFace:n,customDepthTest:l,hasOccludees:d}=o;return Ge({blending:ee(a)&&s?xa(r):null,culling:It(o)?Ra(n):null,depthTest:{func:ba(r,Ot(l))},depthWrite:wa(o),drawBuffers:Ma(a,Ta(r,a)),colorWrite:Pe,stencilWrite:d?Sa:null,stencilTest:d?t?ya:Ca:null,polygonOffset:Na(o)})}initializePipeline(o){return this._occludeePipelineState=this._makePipeline(o,!0),this._makePipeline(o,!1)}getPipeline(o){return o?this._occludeePipelineState:super.getPipeline()}}function Ot(e){return e===te.Lequal?Je.LEQUAL:Je.LESS}function It(e){return e.cullFace!==ae.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class m extends $a{constructor(o){super(),this.spherical=o,this.alphaDiscardMode=N.Opaque,this.doubleSidedMode=S.None,this.pbrMode=p.Disabled,this.cullFace=ae.None,this.normalType=M.Attribute,this.customDepthTest=te.Less,this.emissionSource=_.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===_.Texture||this.hasOcclusionTexture||this.hasNormalTexture?R.Default:R.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}c([u({count:N.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([u({count:S.COUNT})],m.prototype,"doubleSidedMode",void 0),c([u({count:p.COUNT})],m.prototype,"pbrMode",void 0),c([u({count:ae.COUNT})],m.prototype,"cullFace",void 0),c([u({count:M.COUNT})],m.prototype,"normalType",void 0),c([u({count:te.COUNT})],m.prototype,"customDepthTest",void 0),c([u({count:_.COUNT})],m.prototype,"emissionSource",void 0),c([u()],m.prototype,"hasVertexColors",void 0),c([u()],m.prototype,"hasSymbolColors",void 0),c([u()],m.prototype,"hasVerticalOffset",void 0),c([u()],m.prototype,"hasColorTexture",void 0),c([u()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([u()],m.prototype,"hasOcclusionTexture",void 0),c([u()],m.prototype,"hasNormalTexture",void 0),c([u()],m.prototype,"hasScreenSizePerspective",void 0),c([u()],m.prototype,"hasVertexTangents",void 0),c([u()],m.prototype,"hasOccludees",void 0),c([u()],m.prototype,"instancedDoublePrecision",void 0),c([u()],m.prototype,"hasModelTransformation",void 0),c([u()],m.prototype,"offsetBackfaces",void 0),c([u()],m.prototype,"vvSize",void 0),c([u()],m.prototype,"vvColor",void 0),c([u()],m.prototype,"receiveShadows",void 0),c([u()],m.prototype,"receiveAmbientOcclusion",void 0),c([u()],m.prototype,"textureAlphaPremultiplied",void 0),c([u()],m.prototype,"instanced",void 0),c([u()],m.prototype,"instancedColor",void 0),c([u()],m.prototype,"writeDepth",void 0),c([u()],m.prototype,"transparent",void 0),c([u()],m.prototype,"enableOffset",void 0),c([u()],m.prototype,"terrainDepthTest",void 0),c([u()],m.prototype,"cullAboveTerrain",void 0),c([u()],m.prototype,"snowCover",void 0),c([u()],m.prototype,"hasBloom",void 0),c([u()],m.prototype,"hasColorTextureTransform",void 0),c([u()],m.prototype,"hasEmissionTextureTransform",void 0),c([u()],m.prototype,"hasNormalTextureTransform",void 0),c([u()],m.prototype,"hasOcclusionTextureTransform",void 0),c([u()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Lt(e){const o=new ge,{attributes:t,vertex:r,fragment:a,varyings:s}=o,{output:n,offsetBackfaces:l,instancedColor:d,pbrMode:h,snowCover:f,spherical:g,hasBloom:y}=e,E=h===p.Normal||h===p.Schematic;if(V(r,e),t.add(x.POSITION,"vec3"),s.add("vpos","vec3",{invariant:!0}),o.include(K,e),o.include(To,e),o.include(mo,e),o.include(vo,e),ee(n)&&(de(o.vertex,e),o.include(he,e),o.include(B,e),l&&o.include(Mo),d&&o.attributes.add(x.INSTANCECOLOR,"vec4"),s.add("vNormalWorld","vec3"),s.add("localvpos","vec3",{invariant:!0}),o.include(H,e),o.include(uo,e),o.include(So,e),o.include(ho,e),r.uniforms.add(new po("externalColor",T=>T.externalColor)),s.add("vcolorExt","vec4"),r.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${v(d,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${i.float(oe)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${v(l,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),ee(n)){const{hasColorTexture:T,hasColorTextureTransform:I,receiveShadows:P}=e;o.include(Co,e),a.include(De,e),o.include(U,e),o.include(e.instancedDoublePrecision?$o:Eo,e),a.include(W,e),o.include(fo,e),de(a,e),Ee(a),je(a),Re(a),a.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new me("ambient",b=>b.ambient),new me("diffuse",b=>b.diffuse),new D("opacity",b=>b.opacity),new D("layerOpacity",b=>b.layerOpacity)),T&&a.uniforms.add(new $("tex",b=>b.texture)),o.include(go,e),a.include(Fe,e),a.include(Oo),ce(a),a.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${T?`texture(tex, ${I?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(T,`${v(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${P?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":g?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?i`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${v(f,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${i`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${v(E,`vec3 normalGround = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${E?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(f,i`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${f||y?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${v(f,", 1.0")});`)}return o.include(yo,e),o}const At=Object.freeze(Object.defineProperty({__proto__:null,build:Lt},Symbol.toStringTag,{value:"Module"}));class Gt extends Io{constructor(o,t){super(o,t,new pe(At,()=>ve(()=>import("./RealisticTree.glsl-CgRLrQ0J.js").then(r=>r.R),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53]),import.meta.url))),this.type="RealisticTreeTechnique"}}class $r extends Ea{constructor(o,t){super(o,_t),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[ye.OPAQUE_MATERIAL,r=>(He(r)||Te(r))&&!this.transparent],[ye.TRANSPARENT_MATERIAL,r=>(He(r)||Te(r))&&this.transparent&&this.parameters.writeDepth],[ye.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,r=>(Uo(r)||Te(r))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Dt(this.parameters),this._configuration=new m(t.spherical)}isVisibleForOutput(o){return o!==w.Shadow&&o!==w.ShadowExcludeHighlight&&o!==w.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:o,colorMixMode:t,opacity:r,externalColor:a}=this.parameters;return o*(t==="replace"?1:r)*(t==="ignore"?1:a[3])>=oe}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!to(this.parameters.emissiveBaseColor,ze)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===k.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===k.Color)}getConfiguration(o,t){const{parameters:r,_configuration:a}=this,{treeRendering:s,doubleSided:n,doubleSidedType:l}=r;return super.getConfiguration(o,t,this._configuration),a.hasNormalTexture=!s&&!!r.normalTextureId,a.hasColorTexture=!!r.textureId,a.hasVertexTangents=!s&&r.hasVertexTangents,a.instanced=r.isInstanced,a.instancedDoublePrecision=r.instancedDoublePrecision,a.vvSize=!!r.vvSize,a.hasVerticalOffset=r.verticalOffset!=null,a.hasScreenSizePerspective=r.screenSizePerspective!=null,a.hasSlicePlane=r.hasSlicePlane,a.alphaDiscardMode=r.textureAlphaMode,a.normalType=s?M.Attribute:r.normalType,a.transparent=this.transparent,a.writeDepth=r.writeDepth,a.customDepthTest=r.customDepthTest??te.Less,a.hasOccludees=t.hasOccludees,a.cullFace=r.hasSlicePlane?ae.None:r.cullFace,a.cullAboveTerrain=t.cullAboveTerrain,a.hasModelTransformation=!s&&r.modelTransformation!=null,a.hasVertexColors=r.hasVertexColors,a.hasSymbolColors=r.hasSymbolColors,a.doubleSidedMode=s?S.WindingOrder:n&&l==="normal"?S.View:n&&l==="winding-order"?S.WindingOrder:S.None,a.instancedColor=r.hasInstancedColor,ee(o)?(a.terrainDepthTest=t.terrainDepthTest,a.receiveShadows=r.receiveShadows,a.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&t.ssao!=null):(a.terrainDepthTest=!1,a.receiveShadows=a.receiveAmbientOcclusion=!1),a.vvColor=!!r.vvColor,a.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,a.pbrMode=r.usePBR?r.isSchematic?p.Schematic:p.Normal:p.Disabled,a.hasMetallicRoughnessTexture=!s&&!!r.metallicRoughnessTextureId,a.emissionSource=s?_.None:r.emissiveTextureId!=null&&r.emissiveSource===k.Emissive?_.Texture:r.usePBR?r.emissiveSource===k.Emissive?_.EmissiveColor:_.SymbolColor:_.None,a.hasOcclusionTexture=!s&&!!r.occlusionTextureId,a.offsetBackfaces=!(!this.transparent||!r.offsetTransparentBackfaces),a.oitPass=t.oitPass,a.enableOffset=t.camera.relativeElevation<za,a.snowCover=t.snowCover,a.hasBloom=qo(o),a.hasColorTextureTransform=!!r.colorTextureTransformMatrix,a.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,a.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,a.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,a.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,a}intersect(o,t,r,a,s,n){if(this.parameters.verticalOffset!=null){const l=r.camera;q($e,t[12],t[13],t[14]);let d=null;switch(r.viewingMode){case Be.Global:d=Go(ao,$e);break;case Be.Local:d=Ao(ao,Vt)}let h=0;const f=we(Bt,$e,l.eye),g=Po(f),y=Ve(f,f,1/g);let E=null;this.parameters.screenSizePerspective&&(E=_o(d,y)),h+=Oa(l,g,this.parameters.verticalOffset,E??0,this.parameters.screenSizePerspective),Ve(d,d,h),Do(Ne,d,r.transform.inverseRotation),a=we(jt,a,Ne),s=we(Rt,s,Ne)}Ia(o,r,a,s,La(r.verticalOffset),n)}createGLMaterial(o){return new Pt(o)}createBufferWriter(){return new Aa(this._vertexBufferLayout)}get transparent(){return Ft(this.parameters)}}class Pt extends Ga{constructor(o){super({...o,...o.material.parameters})}beginSlot(o){this._material.setParameters({receiveShadows:o.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=o.camera.viewInverseTransposeMatrix;return q(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?Gt:Io,o)}}class _t extends zt{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Dt(e){const o=Wo().vec3f(x.POSITION);return e.normalType===M.Compressed?o.vec2i16(x.NORMALCOMPRESSED,{glNormalized:!0}):o.vec3f(x.NORMAL),e.hasVertexTangents&&o.vec4f(x.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&o.vec2f16(x.UV0),e.hasVertexColors&&o.vec4u8(x.COLOR),e.hasSymbolColors&&o.vec4u8(x.SYMBOLCOLOR),Pa()&&o.vec4u8(x.OLIDCOLOR),o}function Ft(e){const{drivenOpacity:o,opacity:t,externalColor:[r,a,s,n],layerOpacity:l,texture:d,textureId:h,textureAlphaMode:f,colorMixMode:g}=e;return o||t<1&&g!=="replace"||n<1&&g!=="ignore"||l<1||(d!=null||h!=null)&&f!==N.Opaque&&f!==N.Mask&&g!=="replace"}const jt=O(),Rt=O(),Vt=Ho(0,0,1),ao=O(),Ne=O(),$e=O(),Bt=O();export{_t as H,$t as K,Co as L,Ft as Q,Lt as R,$r as W,pt as a,ke as b,Xa as c,De as d,et as e,Ya as f,je as g,Eo as h,ot as i,Re as j,Nr as k,Nt as l,lt as m,ur as n,hr as o,S as p,mt as q,Sr as r,pr as s,Ja as t,_e as v};
