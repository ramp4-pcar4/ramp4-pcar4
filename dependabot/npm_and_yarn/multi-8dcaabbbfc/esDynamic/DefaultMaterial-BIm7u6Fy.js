import{H as He,o as B,s as Vt,A as Ht,c as we,r as Wt,g as We,P as Ut,N as Yt}from"./vec32-DjpflXQy.js";import{eU as Me,gq as X,gp as ye,aI as N,D as s,G as Se,K as qt,d5 as ae,aM as Jt,fp as Zt,aP as kt,ch as Xt,cC as $t}from"./main-CKI8Ciev.js";import{l as Ue}from"./ViewingMode-CyR_b1T8.js";import{H as Kt}from"./InterleavedLayout-DA697C1S.js";import{n as g,u as $,t as Ye,o as Ce,r as Qt}from"./ShaderOutput-C_OqLoo1.js";import{n as E,a as b,t as re}from"./NormalAttribute.glsl-CIrihNHd.js";import{a7 as eo,a8 as to,a9 as A,aa as oo,ab as ao,ac as ro,ad as ie,p as io,ae as no,af as so,e as L,B as F,a as V,ag as H,ah as W,u as K,C as O,ai as U,D as lo,v as co,aj as uo,J as P,ak as mo,al as qe,y as Je,am as Ze,an as ke,ao as ho,F as Oe,G as ne,ap as Xe,aq as po,g as se,ar as vo,as as fo,at as Ne,au as le,k as $e,o as z,av as m,aw as ze,ax as Ee,ay as ce,j as go,az as xo,aA as bo,q as Ke,aB as To,x as wo,aC as Qe,aD as et,c as de,aE as tt,aF as ot,z as at,r as rt,aG as it,aH as ue,aI as nt,X as Mo,E as st,H as yo,aJ as So,aK as Co,aL as Oo,aM as No,aN as zo,aO as Eo,aP as _o,I as Io,K as D,L as d,M as Go,O as _e,aQ as Ao,U as Lo,aR as Ro,d as Fo,aS as Po,Y as Do,a4 as jo}from"./Geometry-C4JlCGYa.js";import{n as r,t as f}from"./glsl-o28TenZV.js";import{i as _,a as lt,e as Q,n as me}from"./basicInterfaces-Dsf65ICa.js";import{e as T}from"./VertexAttribute-DFC3a3eR.js";import{n as ct,r as Bo}from"./vec4f64-CjUMzAyX.js";import{e as Ie,o as Y}from"./mat3f64-Dh9_zhFu.js";import{j as Vo}from"./mat3-DOnW3DjW.js";import{o as dt}from"./mat4f64-BaJwL7tQ.js";import{o as Ho,r as Wo}from"./doublePrecisionUtils-BJbYwoii.js";import{a as Ge}from"./BindType-CKbZk6AG.js";import{s as Uo,n as ut}from"./vec2f64-CEUyUoff.js";import{o as he}from"./vec2-BnynUbeJ.js";import{i as pe}from"./ShaderBuilder-CELCiXbK.js";import{B as Ae,g as Le,f as Yo}from"./renderState-NvYx7DEn.js";import{D as mt,G as qo,t as Jo,_ as Zo,f as ko,O as ht}from"./enums-DBi1-Mm2.js";import{p as Xo,w as $o}from"./Texture-Dh570PFG.js";import{s as I}from"./vec42-D8CJyqHG.js";function Ko(e){e.vertex.code.add(r`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${r.int(E.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${r.int(E.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${r.int(E.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${r.int(E.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function pt(e,t){switch(t.normalType){case b.Attribute:case b.Compressed:e.include(re,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new to("transformNormalGlobalFromModel",o=>o.transformNormalGlobalFromModel),new A("transformNormalViewFromGlobal",o=>o.transformNormalViewFromGlobal)),e.vertex.code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case b.ScreenDerivative:e.vertex.code.add(r`void forwardNormal() {}`);break;default:Me(t.normalType);case b.COUNT:}}let Qo=class extends eo{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ie()}},vt=class extends oo{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ie(),this.toMapSpace=ct()}};function ea({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:a,emissiveTexture:i,emissiveFactor:n,occlusionTexture:c}){return e==null&&t==null&&i==null&&(n==null||He(n,ye))&&c==null&&(a==null||a===1)&&(o==null||o===1)}const ft=X(1,1,.5),ta=X(0,.6,.2),oa=X(0,1,.2);function gt(e){e.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const xt=Ie();function bt(e,t){const o=t.hasModelTransformation,a=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new ao("model",n=>n.modelTransformation??dt)),e.vertex.uniforms.add(new A("normalLocalOriginFromModel",n=>(Vo(xt,n.modelTransformation??dt),xt)))),t.instanced&&a&&(e.attributes.add(T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.INSTANCEMODEL,"mat3"),e.attributes.add(T.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;a&&(i.include(ro,t),i.uniforms.add(new ie("viewOriginHi",n=>Ho(B(ve,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ve)),new ie("viewOriginLo",n=>Wo(B(ve,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ve)))),i.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?a?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":a?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${a?r`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?a?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":a?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===g.Normal&&(io(i),i.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?a?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":a?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?a?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":a?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ve=N();function Tt(e,t){t.hasSymbolColors?(e.include(Ko),e.attributes.add(T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new no("colorMixMode",o=>so[o.colorMixMode])),e.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function wt(e){e.code.add(r`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function Mt(e,t){switch(t.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:e.fragment.include(wt),e.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function q(e,t){aa(e,t,new L("textureAlphaCutoff",o=>o.textureAlphaCutoff))}function aa(e,t,o){const a=e.fragment,i=t.alphaDiscardMode,n=i===_.Blend;i!==_.Mask&&i!==_.MaskBlend||a.uniforms.add(o),a.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===_.Opaque?"color.a = 1.0;":`if (color.a < ${n?r.float(F):"textureAlphaCutoff"}) {
              discard;
             } ${f(i===_.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function yt(e,t){const{vertex:o,fragment:a}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==_.Opaque,{output:n,normalType:c,hasColorTextureTransform:h}=t;switch(n){case g.Depth:V(o,t),e.include(H,t),e.fragment.include(U,t),e.include(W,t),i&&a.uniforms.add(new O("tex",u=>u.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(q,t),a.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:V(o,t),e.include(H,t),e.include(W,t),e.include(K,t),e.include(Mt,t),e.fragment.include(U,t),e.include(co,t),uo(e),e.varyings.add("depth","float"),i&&a.uniforms.add(new O("tex",u=>u.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(q,t),a.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${n===g.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case g.Normal:{V(o,t),e.include(H,t),e.include(re,t),e.include(pt,t),e.include(W,t),e.include(K,t),i&&a.uniforms.add(new O("tex",v=>v.texture)),c===b.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const u=c===b.Attribute||c===b.Compressed;o.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${u?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(U,t),e.include(q,t),a.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${c===b.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:V(o,t),e.include(H,t),e.include(W,t),e.include(K,t),i&&a.uniforms.add(new O("tex",u=>u.texture)),o.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(U,t),e.include(q,t),e.include(lo,t),a.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function St(e,t){const o=e.fragment;switch(o.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case y.None:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case y.View:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case y.WindingOrder:o.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Me(t.doubleSidedMode);case y.COUNT:}}var y;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(y||(y={}));function ra(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===y.WindingOrder?o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==P.None&&(e.include(mo,t),o.uniforms.add(t.bindType===Ge.Pass?new O("normalTexture",a=>a.textureNormal):new qe("normalTexture",a=>a.textureNormal)),t.hasNormalTextureTransform&&(o.uniforms.add(new Je("scale",a=>a.scale??Uo)),o.uniforms.add(new A("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??Y))),o.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(r`return tangentSpace * rawNormal;
}`))}const Ct=3e5,Re=5e5,Fe=4;function Ot(){const e=new pe,t=e.fragment;e.include(Ze);const o=(Fe+1)/2,a=1/(2*o*o);return t.include(ke),t.uniforms.add(new O("depthMap",i=>i.depthTexture),new qe("tex",i=>i.colorTexture),new ho("blurSize",i=>i.blurSize),new L("projScale",(i,n)=>{const c=n.camera.distance;return c>5e4?Math.max(0,i.projScale-(c-5e4)):i.projScale})),t.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(a)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(Fe)}; r <= ${r.int(Fe)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const ia=Object.freeze(Object.defineProperty({__proto__:null,build:Ot},Symbol.toStringTag,{value:"Module"}));let Nt=class extends Oe{constructor(e,t){super(e,t,new ne(ia,()=>import("./HUDMaterial.glsl-XDzdkuP_.js").then(o=>o.S)))}initializePipeline(){return Ae({colorWrite:Le})}};const na="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let sa=class extends Xe{constructor(){super(...arguments),this.projScale=1}},la=class extends sa{constructor(){super(...arguments),this.intensity=1}},ca=class extends Xe{};class da extends ca{constructor(){super(...arguments),this.blurSize=ut()}}const zt=16;function Et(){const e=new pe,t=e.fragment;return e.include(Ze),e.include(po),t.include(ke),t.uniforms.add(new se("radius",o=>fe(o.camera))).code.add(r`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(r`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new O("normalMap",o=>o.normalTexture),new O("depthMap",o=>o.depthTexture),new L("projScale",o=>o.projScale),new O("rnm",o=>o.noiseTexture),new Je("rnmScale",(o,a)=>he(_t,a.camera.fullWidth/o.noiseTexture.descriptor.width,a.camera.fullHeight/o.noiseTexture.descriptor.height)),new L("intensity",o=>o.intensity),new vo("screenSize",o=>he(_t,o.camera.fullWidth,o.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.main.add(r`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${r.int(zt)}; ++i) {
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
      float A = max(1.0 - sum * intensity / float(${r.int(zt)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function fe(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const _t=ut(),ua=Object.freeze(Object.defineProperty({__proto__:null,build:Et,getRadius:fe},Symbol.toStringTag,{value:"Module"}));let It=class extends Oe{constructor(e,t){super(e,t,new ne(ua,()=>import("./HUDMaterial.glsl-XDzdkuP_.js").then(o=>o.c)))}initializePipeline(){return Ae({colorWrite:Le})}};const ee=2;let te=class extends fo{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Ne.SSAO,this.isEnabled=()=>!1,this._enableTime=ae(0),this._passParameters=new la,this._drawParameters=new da}initialize(){const e=Uint8Array.from(atob(na),o=>o.charCodeAt(0)),t=new Xo;t.wrapMode=mt.CLAMP_TO_EDGE,t.pixelFormat=qo.RGB,t.wrapMode=mt.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new $o(this.renderingContext,t,e),this.techniques.precompile(It),this.techniques.precompile(Nt),this.addHandles(Jt(()=>this.isEnabled(),()=>this._enableTime=ae(0)))}destroy(){this._passParameters.noiseTexture=Zt(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find(({name:S})=>S==="normals"),a=o?.getTexture(),i=o?.getTexture(Jo),n=this.fboCache,c=t.camera,h=c.fullViewport[2],u=c.fullViewport[3],v=Math.round(h/ee),x=Math.round(u/ee),C=this.techniques.get(It),w=this.techniques.get(Nt);if(!C.compiled||!w.compiled)return this._enableTime=ae(performance.now()),this.requestRender(lt.UPDATE),n.acquire(v,x,Ne.SSAO,le.RED);this._enableTime===0&&(this._enableTime=ae(performance.now()));const p=this.renderingContext,R=this.view.qualitySettings.fadeDuration,M=c.relativeElevation,oe=kt((Re-M)/(Re-Ct),0,1),J=R>0?Math.min(R,performance.now()-this._enableTime)/R:1,Te=J*oe;this._passParameters.normalTexture=a,this._passParameters.depthTexture=i,this._passParameters.projScale=1/c.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ma/fe(c)**6*Te;const Z=n.acquire(h,u,"ssao input",le.RG);p.bindFramebuffer(Z.fbo),p.setViewport(0,0,h,u),p.bindTechnique(C,t,this._passParameters,this._drawParameters),p.screen.draw();const k=n.acquire(v,x,"ssao blur",le.RED);p.bindFramebuffer(k.fbo),this._drawParameters.colorTexture=Z.getTexture(),he(this._drawParameters.blurSize,0,ee/u),p.bindTechnique(w,t,this._passParameters,this._drawParameters),p.setViewport(0,0,v,x),p.screen.draw(),Z.release();const j=n.acquire(v,x,Ne.SSAO,le.RED);return p.bindFramebuffer(j.fbo),p.setViewport(0,0,h,u),p.setClearColor(1,1,1,0),p.clear(Zo.COLOR),this._drawParameters.colorTexture=k.getTexture(),he(this._drawParameters.blurSize,ee/h,0),p.bindTechnique(w,t,this._passParameters,this._drawParameters),p.setViewport(0,0,v,x),p.screen.draw(),p.setViewport4fv(c.fullViewport),k.release(),J<1&&this.requestRender(lt.UPDATE),j}};s([Se()],te.prototype,"consumes",void 0),s([Se()],te.prototype,"produces",void 0),s([Se({constructOnly:!0})],te.prototype,"isEnabled",void 0),te=s([qt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],te);const ma=.5;function ge(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new $e("ssaoTex",a=>a.ssao?.getTexture())),o.constants.add("blurSizePixelsInverse","float",1/ee),o.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Gt(e,t){const o=e.fragment,a=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;a===0?(o.uniforms.add(new ie("lightingAmbientSH0",({lighting:i})=>B(At,i.sh.r[0],i.sh.g[0],i.sh.b[0]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):a===1?(o.uniforms.add(new z("lightingAmbientSH_R",({lighting:i})=>I(G,i.sh.r[0],i.sh.r[1],i.sh.r[2],i.sh.r[3])),new z("lightingAmbientSH_G",({lighting:i})=>I(G,i.sh.g[0],i.sh.g[1],i.sh.g[2],i.sh.g[3])),new z("lightingAmbientSH_B",({lighting:i})=>I(G,i.sh.b[0],i.sh.b[1],i.sh.b[2],i.sh.b[3]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):a===2&&(o.uniforms.add(new ie("lightingAmbientSH0",({lighting:i})=>B(At,i.sh.r[0],i.sh.g[0],i.sh.b[0])),new z("lightingAmbientSH_R1",({lighting:i})=>I(G,i.sh.r[1],i.sh.r[2],i.sh.r[3],i.sh.r[4])),new z("lightingAmbientSH_G1",({lighting:i})=>I(G,i.sh.g[1],i.sh.g[2],i.sh.g[3],i.sh.g[4])),new z("lightingAmbientSH_B1",({lighting:i})=>I(G,i.sh.b[1],i.sh.b[2],i.sh.b[3],i.sh.b[4])),new z("lightingAmbientSH_R2",({lighting:i})=>I(G,i.sh.r[5],i.sh.r[6],i.sh.r[7],i.sh.r[8])),new z("lightingAmbientSH_G2",({lighting:i})=>I(G,i.sh.g[5],i.sh.g[6],i.sh.g[7],i.sh.g[8])),new z("lightingAmbientSH_B2",({lighting:i})=>I(G,i.sh.b[5],i.sh.b[6],i.sh.b[7],i.sh.b[8]))),o.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||o.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const At=N(),G=ct();function ha(e){const t=e.fragment.code;t.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(r`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(r`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function Pe(e,t){const o=e.fragment.code;e.include(ze),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic&&t.pbrMode!==m.Simplified&&t.pbrMode!==m.TerrainWithWater||(o.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||(e.include(ha),o.add(r`struct PBRShadingInfo
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
};`),o.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(r`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(r`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function pa(e,t){const o=e.fragment.code;e.include(ze),o.add(r`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),o.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),o.add(r`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),o.add(r`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),o.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}function xe(e){e.constants.add("ambientBoostFactor","float",bo)}function be(e){e.uniforms.add(new se("lightingGlobalFactor",t=>t.lighting.globalFactor))}function De(e,t){const o=e.fragment;switch(e.include(ge,t),t.pbrMode!==m.Disabled&&e.include(Pe,t),e.include(Gt,t),e.include(ze),o.code.add(r`
    const float GAMMA_SRGB = ${r.float(Xt)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===m.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),xe(o),be(o),Ee(o),o.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ce(o),o.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case m.Disabled:case m.WaterOnIntegratedMesh:case m.Water:e.include(xo),o.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case m.Normal:case m.Schematic:o.code.add(r`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new go("hasFillLights",a=>a.enableFillLights)):o.constants.add("hasFillLights","bool",!1),o.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new se("lightingSpecularStrength",a=>a.lighting.mainLight.specularStrength),new se("lightingEnvironmentStrength",a=>a.lighting.mainLight.environmentStrength)).code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==m.Schematic||t.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case m.Simplified:case m.TerrainWithWater:Ee(o),ce(o),o.code.add(r`const float roughnessTerrain = 0.5;
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
}`);break;default:Me(t.pbrMode);case m.COUNT:}}let va=class extends Ke{constructor(e,t,o){super(e,"mat4",Ge.Draw,(a,i,n,c)=>a.setUniformMatrix4fv(e,t(i,n,c)),o)}};class fa extends Ke{constructor(t,o,a){super(t,"mat4",Ge.Pass,(i,n,c)=>i.setUniformMatrix4fv(t,o(n,c)),a)}}function Lt(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new fa("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),Rt(e))}function je(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new va("shadowMapMatrix",(o,a)=>a.shadowMap.getShadowMapMatrices(o.origin),4)),Rt(e))}function Rt(e){const t=e.fragment;t.include(wt),t.uniforms.add(new $e("shadowMap",o=>o.shadowMap.depthTexture),new To("numCascades",o=>o.shadowMap.numCascades),new z("cascadeDistances",o=>o.shadowMap.cascadeDistances)).code.add(r`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function ga(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new A("colorTextureTransformMatrix",o=>o.colorTextureTransformMatrix??Y)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardColorUV(){}`)}function xa(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new A("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??Y)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardNormalUV(){}`)}function ba(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new A("emissiveTextureTransformMatrix",o=>o.emissiveTextureTransformMatrix??Y)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardEmissiveUV(){}`)}function Ta(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new A("occlusionTextureTransformMatrix",o=>o.occlusionTextureTransformMatrix??Y)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardOcclusionUV(){}`)}function wa(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new A("metallicRoughnessTextureTransformMatrix",o=>o.metallicRoughnessTextureTransformMatrix??Y)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Ft(e){e.include(wo),e.code.add(r`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${r.int(E.Multiply)}) {
        return allMixed;
      }
      if (mode == ${r.int(E.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(E.Replace)}) {
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

      if (mode == ${r.int(E.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${r.int(E.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function Pt(e){const t=new pe,{vertex:o,fragment:a,varyings:i}=t,{output:n,normalType:c,offsetBackfaces:h,instancedColor:u,spherical:v,receiveShadows:x,snowCover:C,pbrMode:w,textureAlphaPremultiplied:p,instancedDoublePrecision:R,hasVertexColors:M,hasVertexTangents:oe,hasColorTexture:J,hasNormalTexture:Te,hasNormalTextureTransform:Z,hasColorTextureTransform:k}=e;if(V(o,e),t.include(Qe),i.add("vpos","vec3"),t.include(K,e),t.include(bt,e),t.include(et,e),t.include(ga,e),!$(n))return t.include(yt,e),t;t.include(xa,e),t.include(ba,e),t.include(Ta,e),t.include(wa,e),de(o,e),t.include(re,e),t.include(H,e);const j=c===b.Attribute||c===b.Compressed;return j&&h&&t.include(gt),t.include(ra,e),t.include(pt,e),u&&t.attributes.add(T.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(W,e),t.include(tt,e),t.include(Tt,e),t.include(ot,e),o.uniforms.add(new at("externalColor",S=>S.externalColor)),i.add("vcolorExt","vec4"),t.include(rt,e),o.main.add(r`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${f(u,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${f(j,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${f(oe,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${f(j&&h,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${r.float(F)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),t.include(De,e),t.include(ge,e),t.include(q,e),t.include(R?Lt:je,e),t.fragment.include(U,e),t.include(it,e),de(a,e),a.uniforms.add(o.uniforms.get("localOrigin"),new ue("ambient",S=>S.ambient),new ue("diffuse",S=>S.diffuse),new L("opacity",S=>S.opacity),new L("layerOpacity",S=>S.layerOpacity)),J&&a.uniforms.add(new O("tex",S=>S.texture)),t.include(nt,e),t.include(Pe,e),a.include(Ft),t.include(St,e),xe(a),be(a),ce(a),a.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${J?r`
            vec4 texColor = texture(tex, ${k?"colorUV":"vuv0"});
            ${f(p,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${c===b.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":f(v,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${f(M,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${f(M,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${Te?`mat3 tangentSpace = computeTangentSpace(${oe?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${Z?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${v?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${f(C,r`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${w===m.Normal||w===m.Schematic?r`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${f(C,r`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${C?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),t}const Ma=Object.freeze(Object.defineProperty({__proto__:null,build:Pt},Symbol.toStringTag,{value:"Module"}));let ya=class extends Qo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ft,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Q.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=ye,this.instancedDoublePrecision=!1,this.normalType=b.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=X(.2,.2,.2),this.diffuse=X(.8,.8,.8),this.externalColor=Bo(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=me.Less,this.textureAlphaMode=_.Blend,this.textureAlphaCutoff=F,this.textureAlphaPremultiplied=!1,this.renderOccluded=Mo.Occlude,this.isDecoration=!1}};class Sa extends vt{constructor(){super(...arguments),this.origin=N(),this.slicePlaneLocalOrigin=this.origin}}let Dt=class extends Oe{constructor(e,t,o=new ne(Ma,()=>import("./HUDMaterial.glsl-XDzdkuP_.js").then(a=>a.D))){super(e,t,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:a,transparent:i,cullFace:n,customDepthTest:c,hasOccludees:h,enableOffset:u}=e,v=o===st.NONE,x=o===st.FrontFace;return Ae({blending:$(a)&&i?Oo(o):null,culling:Oa(e)?Yo(n):null,depthTest:{func:Co(o,Ca(c))},depthWrite:So(e),drawBuffers:a===g.Depth?{buffers:[ko.NONE]}:yo(o,a),colorWrite:Le,stencilWrite:h?_o:null,stencilTest:h?t?zo:Eo:null,polygonOffset:v||x?null:No(u)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Ca(e){return e===me.Lequal?ht.LEQUAL:ht.LESS}function Oa(e){return e.cullFace!==Q.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class l extends Io{constructor(t,o){super(),this.spherical=t,this.doublePrecisionRequiresObfuscation=o,this.alphaDiscardMode=_.Opaque,this.doubleSidedMode=y.None,this.pbrMode=m.Disabled,this.cullFace=Q.None,this.normalType=b.Attribute,this.customDepthTest=me.Less,this.emissionSource=D.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===D.Texture||this.hasOcclusionTexture||this.hasNormalTexture?P.Default:P.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}s([d({count:_.COUNT})],l.prototype,"alphaDiscardMode",void 0),s([d({count:y.COUNT})],l.prototype,"doubleSidedMode",void 0),s([d({count:m.COUNT})],l.prototype,"pbrMode",void 0),s([d({count:Q.COUNT})],l.prototype,"cullFace",void 0),s([d({count:b.COUNT})],l.prototype,"normalType",void 0),s([d({count:me.COUNT})],l.prototype,"customDepthTest",void 0),s([d({count:D.COUNT})],l.prototype,"emissionSource",void 0),s([d()],l.prototype,"hasVertexColors",void 0),s([d()],l.prototype,"hasSymbolColors",void 0),s([d()],l.prototype,"hasVerticalOffset",void 0),s([d()],l.prototype,"hasColorTexture",void 0),s([d()],l.prototype,"hasMetallicRoughnessTexture",void 0),s([d()],l.prototype,"hasOcclusionTexture",void 0),s([d()],l.prototype,"hasNormalTexture",void 0),s([d()],l.prototype,"hasScreenSizePerspective",void 0),s([d()],l.prototype,"hasVertexTangents",void 0),s([d()],l.prototype,"hasOccludees",void 0),s([d()],l.prototype,"hasModelTransformation",void 0),s([d()],l.prototype,"offsetBackfaces",void 0),s([d()],l.prototype,"vvSize",void 0),s([d()],l.prototype,"vvColor",void 0),s([d()],l.prototype,"receiveShadows",void 0),s([d()],l.prototype,"receiveAmbientOcclusion",void 0),s([d()],l.prototype,"textureAlphaPremultiplied",void 0),s([d()],l.prototype,"instanced",void 0),s([d()],l.prototype,"instancedColor",void 0),s([d()],l.prototype,"writeDepth",void 0),s([d()],l.prototype,"transparent",void 0),s([d()],l.prototype,"enableOffset",void 0),s([d()],l.prototype,"terrainDepthTest",void 0),s([d()],l.prototype,"cullAboveTerrain",void 0),s([d()],l.prototype,"snowCover",void 0),s([d()],l.prototype,"hasColorTextureTransform",void 0),s([d()],l.prototype,"hasEmissionTextureTransform",void 0),s([d()],l.prototype,"hasNormalTextureTransform",void 0),s([d()],l.prototype,"hasOcclusionTextureTransform",void 0),s([d()],l.prototype,"hasMetallicRoughnessTextureTransform",void 0);function jt(e){const t=new pe,{vertex:o,fragment:a,varyings:i}=t,{output:n,offsetBackfaces:c,instancedColor:h,pbrMode:u,snowCover:v,spherical:x}=e,C=u===m.Normal||u===m.Schematic;if(V(o,e),t.include(Qe),i.add("vpos","vec3"),t.include(K,e),t.include(bt,e),t.include(et,e),t.include(rt,e),$(n)&&(de(t.vertex,e),t.include(re,e),t.include(H,e),c&&t.include(gt),h&&t.attributes.add(T.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.include(W,e),t.include(tt,e),t.include(Tt,e),t.include(ot,e),o.uniforms.add(new at("externalColor",w=>w.externalColor)),i.add("vcolorExt","vec4"),o.main.add(r`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${f(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${r.float(F)};
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
      ${f(c,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),$(n)){const{hasColorTexture:w,hasColorTextureTransform:p,receiveShadows:R}=e;t.include(De,e),t.include(ge,e),t.include(q,e),t.include(e.instancedDoublePrecision?Lt:je,e),t.fragment.include(U,e),t.include(it,e),de(t.fragment,e),Ee(a),xe(a),be(a),a.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new ue("ambient",M=>M.ambient),new ue("diffuse",M=>M.diffuse),new L("opacity",M=>M.opacity),new L("layerOpacity",M=>M.layerOpacity)),w&&a.uniforms.add(new O("tex",M=>M.texture)),t.include(nt,e),t.include(Pe,e),a.include(Ft),ce(a),a.main.add(r`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${w?`texture(tex, ${p?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${f(w,`${f(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${R?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":x?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?r`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:r`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${f(v,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${r`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${f(C,`vec3 normalGround = ${x?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${C?r`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${f(v,r`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${v?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:r`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(yt,e),t}const Na=Object.freeze(Object.defineProperty({__proto__:null,build:jt},Symbol.toStringTag,{value:"Module"}));class za extends Dt{constructor(t,o){super(t,o,new ne(Na,()=>import("./HUDMaterial.glsl-XDzdkuP_.js").then(a=>a.R))),this.type="RealisticTreeTechnique"}}class Ea extends Go{constructor(t,o){super(t,Ia),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[_e.OPAQUE_MATERIAL,a=>(Ye(a)||Ce(a))&&!this.parameters.transparent],[_e.TRANSPARENT_MATERIAL,a=>(Ye(a)||Ce(a))&&this.parameters.transparent&&this.parameters.writeDepth],[_e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,a=>(Qt(a)||Ce(a))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Aa(this.parameters),this._configuration=new l(o.spherical,o.doublePrecisionRequiresObfuscation)}isVisibleForOutput(t){return t!==g.Shadow&&t!==g.ShadowExcludeHighlight&&t!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const t=this.parameters;if(t.layerOpacity<F)return!1;const{hasInstancedColor:o,hasVertexColors:a,hasSymbolColors:i,vvColor:n}=t,c=o||n||i,h=t.colorMixMode==="replace",u=t.opacity>=F;if(a&&c)return h||u;const v=t.externalColor&&t.externalColor[3]>=F;return a?h?v:u:c?h||u:h?v:u}get hasEmissions(){return!!this.parameters.emissiveTextureId||!He(this.parameters.emissiveFactor,ye)}getConfiguration(t,o){const a=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:c}=a;return this._configuration.output=t,this._configuration.hasNormalTexture=!i&&!!a.normalTextureId,this._configuration.hasColorTexture=!!a.textureId,this._configuration.hasVertexTangents=!i&&a.hasVertexTangents,this._configuration.instanced=a.isInstanced,this._configuration.instancedDoublePrecision=a.instancedDoublePrecision,this._configuration.vvSize=!!a.vvSize,this._configuration.hasVerticalOffset=a.verticalOffset!=null,this._configuration.hasScreenSizePerspective=a.screenSizePerspective!=null,this._configuration.hasSlicePlane=a.hasSlicePlane,this._configuration.alphaDiscardMode=a.textureAlphaMode,this._configuration.normalType=i?b.Attribute:a.normalType,this._configuration.transparent=a.transparent,this._configuration.writeDepth=a.writeDepth,a.customDepthTest!=null&&(this._configuration.customDepthTest=a.customDepthTest),this._configuration.hasOccludees=o.hasOccludees,this._configuration.cullFace=a.hasSlicePlane?Q.None:a.cullFace,this._configuration.cullAboveTerrain=o.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&a.modelTransformation!=null,this._configuration.hasVertexColors=a.hasVertexColors,this._configuration.hasSymbolColors=a.hasSymbolColors,this._configuration.doubleSidedMode=i?y.WindingOrder:n&&c==="normal"?y.View:n&&c==="winding-order"?y.WindingOrder:y.None,this._configuration.instancedColor=a.hasInstancedColor,$(t)?(this._configuration.terrainDepthTest=o.terrainDepthTest,this._configuration.receiveShadows=a.receiveShadows,this._configuration.receiveAmbientOcclusion=a.receiveAmbientOcclusion&&o.ssao!=null):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!a.vvColor,this._configuration.textureAlphaPremultiplied=!!a.textureAlphaPremultiplied,this._configuration.pbrMode=a.usePBR?a.isSchematic?m.Schematic:m.Normal:m.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!a.metallicRoughnessTextureId,this._configuration.emissionSource=i?D.None:a.emissiveTextureId!=null?D.Texture:a.usePBR?D.Value:D.None,this._configuration.hasOcclusionTexture=!i&&!!a.occlusionTextureId,this._configuration.offsetBackfaces=!(!a.transparent||!a.offsetTransparentBackfaces),this._configuration.oitPass=o.oitPass,this._configuration.enableOffset=o.camera.relativeElevation<Ao,this._configuration.snowCover=Ga(o),this._configuration.hasColorTextureTransform=!!a.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!a.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!a.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!a.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!a.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(t,o,a,i,n,c){if(this.parameters.verticalOffset!=null){const h=a.camera;B(Ve,o[12],o[13],o[14]);let u=null;switch(a.viewingMode){case Ue.Global:u=Ht(Bt,Ve);break;case Ue.Local:u=Vt(Bt,Fa)}let v=0;const x=we(Pa,Ve,h.eye),C=Wt(x),w=We(x,x,1/C);let p=null;this.parameters.screenSizePerspective&&(p=Ut(u,w)),v+=Lo(h,C,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),We(u,u,v),Yt(Be,u,a.transform.inverseRotation),i=we(La,i,Be),n=we(Ra,n,Be)}Ro(t,a,i,n,Fo(a.verticalOffset),c)}createGLMaterial(t){return new _a(t)}createBufferWriter(){return new Po(this._vertexBufferLayout)}}class _a extends jo{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const o=this._material.parameters;this.updateTexture(o.textureId);const a=t.camera.viewInverseTransposeMatrix;return B(o.origin,a[3],a[7],a[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(o.treeRendering?za:Dt,t)}}class Ia extends ya{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Ga(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}function Aa(e){const t=Kt().vec3f(T.POSITION);return e.normalType===b.Compressed?t.vec2i16(T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(T.NORMAL),e.hasVertexTangents&&t.vec4f(T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(T.UV0),e.hasVertexColors&&t.vec4u8(T.COLOR),e.hasSymbolColors&&t.vec4u8(T.SYMBOLCOLOR),Do()&&t.vec4u8(T.OBJECTANDLAYERIDCOLOR),t}const La=N(),Ra=N(),Fa=$t(0,0,1),Bt=N(),Be=N(),Ve=N(),Pa=N();export{Pt as J,Sa as N,jt as _,vt as a,Re as b,Mt as c,De as d,Ct as e,ge as f,St as g,y as h,Ot as i,Gt as j,Et as m,ea as n,ta as o,be as p,pa as r,oa as s,ft as t,xe as u,fe as v,je as x,Ea as z};
