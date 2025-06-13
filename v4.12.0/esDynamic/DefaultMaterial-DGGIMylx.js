import{H as He,o as B,s as Vt,A as Ht,c as we,r as Wt,g as We,P as Ut,N as Yt}from"./vec32-BuqRmYBM.js";import{fr as Me,fu as X,eC as ye,a9 as N,x as s,z as Se,K as qt,df as oe,a4 as Jt,f2 as Zt,bp as kt,b5 as Xt,am as $t}from"./main-DnzmeE4U.js";import{l as Ue}from"./ViewingMode-CyR_b1T8.js";import{H as Kt}from"./InterleavedLayout-DcHoXu73.js";import{n as g,u as $,t as Ye,o as Ce,r as Qt}from"./ShaderOutput-C_OqLoo1.js";import{n as E,a as b,t as re}from"./NormalAttribute.glsl-C9zbIKka.js";import{r as Oe,u as m,v as qe,x as ea,y as A,z as ta,F as aa,B as oa,C as ra,D as ie,p as ia,E as na,l as sa,c as L,G as F,b as V,H,I as W,J as K,K as O,L as U,M as la,P as ca,Q as da,R as P,S as ua,T as Je,U as Ze,V as ke,W as Xe,X as ma,Y as Ne,Z as ne,_ as $e,$ as ha,g as se,a0 as pa,a1 as va,a2 as ze,a3 as le,k as Ke,o as z,a4 as fa,a5 as Ee,a6 as ce,j as ga,a7 as xa,a8 as ba,a9 as Ta,aa as Qe,ab as et,d as de,ac as tt,ad as at,ae as ot,af as rt,ag as it,ah as ue,ai as nt,aj as wa,ak as st,al as Ma,am as ya,an as Sa,ao as Ca,ap as Oa,aq as Na,ar as za,as as Ea,at as c,au as D,av as _a,aw as Ia,A as _e,ax as Ga,ay as Aa,az as La,aA as Ra,aB as Fa,aC as Pa,aD as Da}from"./VerticalOffset.glsl-BtVaDxLq.js";import{n as r,t as f}from"./glsl-o28TenZV.js";import{i as _,B as Ie,g as Ge,b as lt,e as Q,n as me,f as ja}from"./renderState-DlSSrLcZ.js";import{e as T}from"./VertexAttribute-DFC3a3eR.js";import{n as ct,r as Ba}from"./vec4f64-CjUMzAyX.js";import{e as Ae,o as Y}from"./mat3f64-Dh9_zhFu.js";import{j as Va}from"./mat3-DOnW3DjW.js";import{o as dt}from"./mat4f64-BaJwL7tQ.js";import{o as Ha,r as Wa}from"./doublePrecisionUtils-BJbYwoii.js";import{a as Le}from"./BindType-CKbZk6AG.js";import{s as Ua,n as ut}from"./vec2f64-CEUyUoff.js";import{o as he}from"./vec2-BnynUbeJ.js";import{i as pe}from"./ShaderBuilder-BkQM64Qp.js";import{D as mt,G as Ya,t as qa,_ as Ja,f as Za,O as ht}from"./enums-DBi1-Mm2.js";import{p as ka,w as Xa}from"./Texture-DXSFJsEu.js";import{s as I}from"./vec42-D8CJyqHG.js";function $a(e){e.vertex.code.add(r`
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
  `)}function Ka({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:a,roughnessFactor:o,emissiveTexture:i,emissiveFactor:n,occlusionTexture:d}){return e==null&&t==null&&i==null&&(n==null||He(n,Me))&&d==null&&(o==null||o===1)&&(a==null||a===1)}const pt=X(1,1,.5),Qa=X(0,.6,.2),eo=X(0,1,.2);function to(e){const t=e.fragment.code;t.add(r`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
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
}`)}function Re(e,t){const a=e.fragment.code;e.include(Oe),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic&&t.pbrMode!==m.Simplified&&t.pbrMode!==m.TerrainWithWater||(a.add(r`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),a.add(r`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||(e.include(to),a.add(r`struct PBRShadingInfo
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
};`),a.add(r`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),a.add(r`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),a.add(r`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function ao(e,t){const a=e.fragment.code;e.include(Oe),a.add(r`
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
  `),a.add(r`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),a.add(r`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),a.add(r`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),a.add(r`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze) * strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}`)}const vt=3e5,Fe=5e5;function ft(e){e.code.add(r`const float MAX_RGBA4_FLOAT =
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
}`)}let oo=class extends qe{constructor(e,t,a){super(e,"mat4",Le.Pass,(o,i,n)=>o.setUniformMatrix4fv(e,t(i,n)),a)}};function gt(e,t){const a=e.fragment;switch(a.code.add(r`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case y.None:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case y.View:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case y.WindingOrder:a.code.add(r`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:ye(t.doubleSidedMode);case y.COUNT:}}var y;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(y||(y={}));function xt(e,t){switch(t.normalType){case b.Attribute:case b.Compressed:e.include(re,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new ea("transformNormalGlobalFromModel",a=>a.transformNormalGlobalFromModel),new A("transformNormalViewFromGlobal",a=>a.transformNormalViewFromGlobal)),e.vertex.code.add(r`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case b.ScreenDerivative:e.vertex.code.add(r`void forwardNormal() {}`);break;default:ye(t.normalType);case b.COUNT:}}let ro=class extends aa{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ae()}},bt=class extends ta{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ae(),this.toMapSpace=ct()}};function Tt(e){e.vertex.code.add(r`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const wt=Ae();function Mt(e,t){const a=t.hasModelTransformation,o=t.instancedDoublePrecision;a&&(e.vertex.uniforms.add(new oa("model",n=>n.modelTransformation??dt)),e.vertex.uniforms.add(new A("normalLocalOriginFromModel",n=>(Va(wt,n.modelTransformation??dt),wt)))),t.instanced&&o&&(e.attributes.add(T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.INSTANCEMODEL,"mat3"),e.attributes.add(T.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;o&&(i.include(ra,t),i.uniforms.add(new ie("viewOriginHi",n=>Ha(B(ve,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ve)),new ie("viewOriginLo",n=>Wa(B(ve,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]),ve)))),i.code.add(r`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":o?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?r`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(r`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":o?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===g.Normal&&(ia(i),i.code.add(r`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":o?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(r`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":o?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ve=N();function yt(e,t){t.hasSymbolColors?(e.include($a),e.attributes.add(T.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(r`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new na("colorMixMode",a=>sa[a.colorMixMode])),e.vertex.code.add(r`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function St(e,t){switch(t.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:e.fragment.include(ft),e.fragment.code.add(r`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function q(e,t){io(e,t,new L("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function io(e,t,a){const o=e.fragment,i=t.alphaDiscardMode,n=i===_.Blend;i!==_.Mask&&i!==_.MaskBlend||o.uniforms.add(a),o.code.add(r`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===_.Opaque?"color.a = 1.0;":`if (color.a < ${n?r.float(F):"textureAlphaCutoff"}) {
              discard;
             } ${f(i===_.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function Ct(e,t){const{vertex:a,fragment:o}=e,i=t.hasColorTexture&&t.alphaDiscardMode!==_.Opaque,{output:n,normalType:d,hasColorTextureTransform:h}=t;switch(n){case g.Depth:V(a,t),e.include(H,t),e.fragment.include(U,t),e.include(W,t),i&&o.uniforms.add(new O("tex",u=>u.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(q,t),o.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:V(a,t),e.include(H,t),e.include(W,t),e.include(K,t),e.include(St,t),e.fragment.include(U,t),e.include(ca,t),da(e),e.varyings.add("depth","float"),i&&o.uniforms.add(new O("tex",u=>u.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(q,t),o.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${n===g.ObjectAndLayerIdColor?r`outputObjectAndLayerIdColor();`:r`outputDepth(depth);`}`);break;case g.Normal:{V(a,t),e.include(H,t),e.include(re,t),e.include(xt,t),e.include(W,t),e.include(K,t),i&&o.uniforms.add(new O("tex",v=>v.texture)),d===b.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const u=d===b.Attribute||d===b.Compressed;a.main.add(r`
        vpos = getVertexInLocalOriginSpace();
        ${u?r`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:r`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),e.fragment.include(U,t),e.include(q,t),o.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${d===b.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionView);`:r`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case g.Highlight:V(a,t),e.include(H,t),e.include(W,t),e.include(K,t),i&&o.uniforms.add(new O("tex",u=>u.texture)),a.main.add(r`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.fragment.include(U,t),e.include(q,t),e.include(la,t),o.main.add(r`
        discardBySlice(vpos);
        ${f(i,r`vec4 texColor = texture(tex, ${h?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function no(e,t){const a=e.fragment;t.hasVertexTangents?(e.attributes.add(T.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===y.WindingOrder?a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(r`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(r`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==P.None&&(e.include(ua,t),a.uniforms.add(t.bindType===Le.Pass?new O("normalTexture",o=>o.textureNormal):new Je("normalTexture",o=>o.textureNormal)),t.hasNormalTextureTransform&&(a.uniforms.add(new Ze("scale",o=>o.scale??Ua)),a.uniforms.add(new A("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??Y))),a.code.add(r`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&a.code.add(r`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(r`return tangentSpace * rawNormal;
}`))}const Pe=4;function Ot(){const e=new pe,t=e.fragment;e.include(ke);const a=(Pe+1)/2,o=1/(2*a*a);return t.include(Xe),t.uniforms.add(new O("depthMap",i=>i.depthTexture),new Je("tex",i=>i.colorTexture),new ma("blurSize",i=>i.blurSize),new L("projScale",(i,n)=>{const d=n.camera.distance;return d>5e4?Math.max(0,i.projScale-(d-5e4)):i.projScale})),t.code.add(r`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(r`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.int(Pe)}; r <= ${r.int(Pe)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const so=Object.freeze(Object.defineProperty({__proto__:null,build:Ot},Symbol.toStringTag,{value:"Module"}));let Nt=class extends Ne{constructor(e,t){super(e,t,new ne(so,()=>import("./RealisticTree.glsl-De7nH4tm.js").then(a=>a.S)))}initializePipeline(){return Ie({colorWrite:Ge})}};const lo="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class co extends $e{constructor(){super(...arguments),this.projScale=1}}let uo=class extends co{constructor(){super(...arguments),this.intensity=1}};class mo extends $e{}class ho extends mo{constructor(){super(...arguments),this.blurSize=ut()}}const zt=16;function Et(){const e=new pe,t=e.fragment;return e.include(ke),e.include(ha),t.include(Xe),t.uniforms.add(new se("radius",a=>fe(a.camera))).code.add(r`vec3 sphere[16] = vec3[16](
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
}`),t.uniforms.add(new O("normalMap",a=>a.normalTexture),new O("depthMap",a=>a.depthTexture),new L("projScale",a=>a.projScale),new O("rnm",a=>a.noiseTexture),new Ze("rnmScale",(a,o)=>he(_t,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new L("intensity",a=>a.intensity),new pa("screenSize",a=>he(_t,a.camera.fullWidth,a.camera.fullHeight))),e.outputs.add("fragOcclusion","float"),t.main.add(r`
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

      fragOcclusion = A;`),e}function fe(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const _t=ut(),po=Object.freeze(Object.defineProperty({__proto__:null,build:Et,getRadius:fe},Symbol.toStringTag,{value:"Module"}));let It=class extends Ne{constructor(e,t){super(e,t,new ne(po,()=>import("./RealisticTree.glsl-De7nH4tm.js").then(a=>a.b)))}initializePipeline(){return Ie({colorWrite:Ge})}};const ee=2;let te=class extends va{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=ze.SSAO,this.isEnabled=()=>!1,this._enableTime=oe(0),this._passParameters=new uo,this._drawParameters=new ho}initialize(){const e=Uint8Array.from(atob(lo),a=>a.charCodeAt(0)),t=new ka;t.wrapMode=mt.CLAMP_TO_EDGE,t.pixelFormat=Ya.RGB,t.wrapMode=mt.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Xa(this.renderingContext,t,e),this.techniques.precompile(It),this.techniques.precompile(Nt),this.addHandles(Jt(()=>this.isEnabled(),()=>this._enableTime=oe(0)))}destroy(){this._passParameters.noiseTexture=Zt(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,a=e.find(({name:S})=>S==="normals"),o=a?.getTexture(),i=a?.getTexture(qa),n=this.fboCache,d=t.camera,h=d.fullViewport[2],u=d.fullViewport[3],v=Math.round(h/ee),x=Math.round(u/ee),C=this.techniques.get(It),w=this.techniques.get(Nt);if(!C.compiled||!w.compiled)return this._enableTime=oe(performance.now()),this.requestRender(lt.UPDATE),n.acquire(v,x,ze.SSAO,le.RED);this._enableTime===0&&(this._enableTime=oe(performance.now()));const p=this.renderingContext,R=this.view.qualitySettings.fadeDuration,M=d.relativeElevation,ae=kt((Fe-M)/(Fe-vt),0,1),J=R>0?Math.min(R,performance.now()-this._enableTime)/R:1,Te=J*ae;this._passParameters.normalTexture=o,this._passParameters.depthTexture=i,this._passParameters.projScale=1/d.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*vo/fe(d)**6*Te;const Z=n.acquire(h,u,"ssao input",le.RG);p.bindFramebuffer(Z.fbo),p.setViewport(0,0,h,u),p.bindTechnique(C,t,this._passParameters,this._drawParameters),p.screen.draw();const k=n.acquire(v,x,"ssao blur",le.RED);p.bindFramebuffer(k.fbo),this._drawParameters.colorTexture=Z.getTexture(),he(this._drawParameters.blurSize,0,ee/u),p.bindTechnique(w,t,this._passParameters,this._drawParameters),p.setViewport(0,0,v,x),p.screen.draw(),Z.release();const j=n.acquire(v,x,ze.SSAO,le.RED);return p.bindFramebuffer(j.fbo),p.setViewport(0,0,h,u),p.setClearColor(1,1,1,0),p.clear(Ja.COLOR),this._drawParameters.colorTexture=k.getTexture(),he(this._drawParameters.blurSize,ee/h,0),p.bindTechnique(w,t,this._passParameters,this._drawParameters),p.setViewport(0,0,v,x),p.screen.draw(),p.setViewport4fv(d.fullViewport),k.release(),J<1&&this.requestRender(lt.UPDATE),j}};s([Se()],te.prototype,"consumes",void 0),s([Se()],te.prototype,"produces",void 0),s([Se({constructOnly:!0})],te.prototype,"isEnabled",void 0),te=s([qt("esri.views.3d.webgl-engine.effects.ssao.SSAO")],te);const vo=.5;function ge(e,t){const a=e.fragment;t.receiveAmbientOcclusion?(a.uniforms.add(new Ke("ssaoTex",o=>o.ssao?.getTexture())),a.constants.add("blurSizePixelsInverse","float",1/ee),a.code.add(r`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(r`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Gt(e,t){const a=e.fragment,o=t.lightingSphericalHarmonicsOrder!==void 0?t.lightingSphericalHarmonicsOrder:2;o===0?(a.uniforms.add(new ie("lightingAmbientSH0",({lighting:i})=>B(At,i.sh.r[0],i.sh.g[0],i.sh.b[0]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(a.uniforms.add(new z("lightingAmbientSH_R",({lighting:i})=>I(G,i.sh.r[0],i.sh.r[1],i.sh.r[2],i.sh.r[3])),new z("lightingAmbientSH_G",({lighting:i})=>I(G,i.sh.g[0],i.sh.g[1],i.sh.g[2],i.sh.g[3])),new z("lightingAmbientSH_B",({lighting:i})=>I(G,i.sh.b[0],i.sh.b[1],i.sh.b[2],i.sh.b[3]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):o===2&&(a.uniforms.add(new ie("lightingAmbientSH0",({lighting:i})=>B(At,i.sh.r[0],i.sh.g[0],i.sh.b[0])),new z("lightingAmbientSH_R1",({lighting:i})=>I(G,i.sh.r[1],i.sh.r[2],i.sh.r[3],i.sh.r[4])),new z("lightingAmbientSH_G1",({lighting:i})=>I(G,i.sh.g[1],i.sh.g[2],i.sh.g[3],i.sh.g[4])),new z("lightingAmbientSH_B1",({lighting:i})=>I(G,i.sh.b[1],i.sh.b[2],i.sh.b[3],i.sh.b[4])),new z("lightingAmbientSH_R2",({lighting:i})=>I(G,i.sh.r[5],i.sh.r[6],i.sh.r[7],i.sh.r[8])),new z("lightingAmbientSH_G2",({lighting:i})=>I(G,i.sh.g[5],i.sh.g[6],i.sh.g[7],i.sh.g[8])),new z("lightingAmbientSH_B2",({lighting:i})=>I(G,i.sh.b[5],i.sh.b[6],i.sh.b[7],i.sh.b[8]))),a.code.add(r`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==m.Normal&&t.pbrMode!==m.Schematic||a.code.add(r`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const At=N(),G=ct();function xe(e){e.constants.add("ambientBoostFactor","float",fa)}function be(e){e.uniforms.add(new se("lightingGlobalFactor",t=>t.lighting.globalFactor))}function De(e,t){const a=e.fragment;switch(e.include(ge,t),t.pbrMode!==m.Disabled&&e.include(Re,t),e.include(Gt,t),e.include(Oe),a.code.add(r`
    const float GAMMA_SRGB = ${r.float(Xt)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===m.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),xe(a),be(a),Ee(a),a.code.add(r`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?r`normalize(vPosWorld)`:r`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),ce(a),a.code.add(r`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case m.Disabled:case m.WaterOnIntegratedMesh:case m.Water:e.include(xa),a.code.add(r`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case m.Normal:case m.Schematic:a.code.add(r`const float fillLightIntensity = 0.25;
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
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(r`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?a.uniforms.add(new ga("hasFillLights",o=>o.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(r`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new se("lightingSpecularStrength",o=>o.lighting.mainLight.specularStrength),new se("lightingEnvironmentStrength",o=>o.lighting.mainLight.environmentStrength)).code.add(r`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(r`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==m.Schematic||t.hasColorTexture?r`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:r`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case m.Simplified:case m.TerrainWithWater:Ee(a),ce(a),a.code.add(r`const float roughnessTerrain = 0.5;
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
}`);break;default:ye(t.pbrMode);case m.COUNT:}}let fo=class extends qe{constructor(e,t,a){super(e,"mat4",Le.Draw,(o,i,n,d)=>o.setUniformMatrix4fv(e,t(i,n,d)),a)}};function Lt(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new oo("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),Rt(e))}function je(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new fo("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),Rt(e))}function Rt(e){const t=e.fragment;t.include(ft),t.uniforms.add(new Ke("shadowMap",a=>a.shadowMap.depthTexture),new ba("numCascades",a=>a.shadowMap.numCascades),new z("cascadeDistances",a=>a.shadowMap.cascadeDistances)).code.add(r`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function go(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new A("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??Y)).code.add(r`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardColorUV(){}`)}function xo(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new A("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??Y)).code.add(r`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardNormalUV(){}`)}function bo(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new A("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??Y)).code.add(r`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardEmissiveUV(){}`)}function To(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new A("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??Y)).code.add(r`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardOcclusionUV(){}`)}function wo(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==P.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new A("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??Y)).code.add(r`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(r`void forwardMetallicRoughnessUV(){}`)}function Ft(e){e.include(Ta),e.code.add(r`
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
  `)}function Pt(e){const t=new pe,{vertex:a,fragment:o,varyings:i}=t,{output:n,normalType:d,offsetBackfaces:h,instancedColor:u,spherical:v,receiveShadows:x,snowCover:C,pbrMode:w,textureAlphaPremultiplied:p,instancedDoublePrecision:R,hasVertexColors:M,hasVertexTangents:ae,hasColorTexture:J,hasNormalTexture:Te,hasNormalTextureTransform:Z,hasColorTextureTransform:k}=e;if(V(a,e),t.include(Qe),i.add("vpos","vec3"),t.include(K,e),t.include(Mt,e),t.include(et,e),t.include(go,e),!$(n))return t.include(Ct,e),t;t.include(xo,e),t.include(bo,e),t.include(To,e),t.include(wo,e),de(a,e),t.include(re,e),t.include(H,e);const j=d===b.Attribute||d===b.Compressed;return j&&h&&t.include(Tt),t.include(no,e),t.include(xt,e),u&&t.attributes.add(T.INSTANCECOLOR,"vec4"),i.add("vPositionLocal","vec3"),t.include(W,e),t.include(tt,e),t.include(yt,e),t.include(at,e),a.uniforms.add(new ot("externalColor",S=>S.externalColor)),i.add("vcolorExt","vec4"),t.include(rt,e),a.main.add(r`
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
    ${f(ae,"vTangent = dpTransformVertexTangent(tangent);")}
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
  `),t.include(De,e),t.include(ge,e),t.include(q,e),t.include(R?Lt:je,e),t.fragment.include(U,e),t.include(it,e),de(o,e),o.uniforms.add(a.uniforms.get("localOrigin"),new ue("ambient",S=>S.ambient),new ue("diffuse",S=>S.diffuse),new L("opacity",S=>S.opacity),new L("layerOpacity",S=>S.layerOpacity)),J&&o.uniforms.add(new O("tex",S=>S.texture)),t.include(nt,e),t.include(Re,e),o.include(Ft),t.include(gt,e),xe(o),be(o),ce(o),o.main.add(r`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${J?r`
            vec4 texColor = texture(tex, ${k?"colorUV":"vuv0"});
            ${f(p,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:r`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${d===b.ScreenDerivative?r`vec3 normal = screenDerivativeNormal(vPositionLocal);`:r`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${x?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":f(v,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${f(M,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${f(M,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${Te?`mat3 tangentSpace = computeTangentSpace(${ae?"normal":"normal, vpos, vuv0"});
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
  `),t}const Mo=Object.freeze(Object.defineProperty({__proto__:null,build:Pt},Symbol.toStringTag,{value:"Module"}));let yo=class extends ro{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=pt,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Q.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=Me,this.instancedDoublePrecision=!1,this.normalType=b.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=X(.2,.2,.2),this.diffuse=X(.8,.8,.8),this.externalColor=Ba(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=N(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=me.Less,this.textureAlphaMode=_.Blend,this.textureAlphaCutoff=F,this.textureAlphaPremultiplied=!1,this.renderOccluded=wa.Occlude,this.isDecoration=!1}};class So extends bt{constructor(){super(...arguments),this.origin=N(),this.slicePlaneLocalOrigin=this.origin}}let Dt=class extends Ne{constructor(e,t,a=new ne(Mo,()=>import("./RealisticTree.glsl-De7nH4tm.js").then(o=>o.D))){super(e,t,a),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:a,output:o,transparent:i,cullFace:n,customDepthTest:d,hasOccludees:h,enableOffset:u}=e,v=a===st.NONE,x=a===st.FrontFace;return Ie({blending:$(o)&&i?Ma(a):null,culling:Oo(e)?ja(n):null,depthTest:{func:ya(a,Co(d))},depthWrite:Sa(e),drawBuffers:o===g.Depth?{buffers:[Za.NONE]}:Ca(a,o),colorWrite:Ge,stencilWrite:h?Oa:null,stencilTest:h?t?Na:za:null,polygonOffset:v||x?null:Ea(u)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Co(e){return e===me.Lequal?ht.LEQUAL:ht.LESS}function Oo(e){return e.cullFace!==Q.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class l extends _a{constructor(t,a){super(),this.spherical=t,this.doublePrecisionRequiresObfuscation=a,this.alphaDiscardMode=_.Opaque,this.doubleSidedMode=y.None,this.pbrMode=m.Disabled,this.cullFace=Q.None,this.normalType=b.Attribute,this.customDepthTest=me.Less,this.emissionSource=D.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===D.Texture||this.hasOcclusionTexture||this.hasNormalTexture?P.Default:P.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}s([c({count:_.COUNT})],l.prototype,"alphaDiscardMode",void 0),s([c({count:y.COUNT})],l.prototype,"doubleSidedMode",void 0),s([c({count:m.COUNT})],l.prototype,"pbrMode",void 0),s([c({count:Q.COUNT})],l.prototype,"cullFace",void 0),s([c({count:b.COUNT})],l.prototype,"normalType",void 0),s([c({count:me.COUNT})],l.prototype,"customDepthTest",void 0),s([c({count:D.COUNT})],l.prototype,"emissionSource",void 0),s([c()],l.prototype,"hasVertexColors",void 0),s([c()],l.prototype,"hasSymbolColors",void 0),s([c()],l.prototype,"hasVerticalOffset",void 0),s([c()],l.prototype,"hasColorTexture",void 0),s([c()],l.prototype,"hasMetallicRoughnessTexture",void 0),s([c()],l.prototype,"hasOcclusionTexture",void 0),s([c()],l.prototype,"hasNormalTexture",void 0),s([c()],l.prototype,"hasScreenSizePerspective",void 0),s([c()],l.prototype,"hasVertexTangents",void 0),s([c()],l.prototype,"hasOccludees",void 0),s([c()],l.prototype,"hasModelTransformation",void 0),s([c()],l.prototype,"offsetBackfaces",void 0),s([c()],l.prototype,"vvSize",void 0),s([c()],l.prototype,"vvColor",void 0),s([c()],l.prototype,"receiveShadows",void 0),s([c()],l.prototype,"receiveAmbientOcclusion",void 0),s([c()],l.prototype,"textureAlphaPremultiplied",void 0),s([c()],l.prototype,"instanced",void 0),s([c()],l.prototype,"instancedColor",void 0),s([c()],l.prototype,"writeDepth",void 0),s([c()],l.prototype,"transparent",void 0),s([c()],l.prototype,"enableOffset",void 0),s([c()],l.prototype,"terrainDepthTest",void 0),s([c()],l.prototype,"cullAboveTerrain",void 0),s([c()],l.prototype,"snowCover",void 0),s([c()],l.prototype,"hasColorTextureTransform",void 0),s([c()],l.prototype,"hasEmissionTextureTransform",void 0),s([c()],l.prototype,"hasNormalTextureTransform",void 0),s([c()],l.prototype,"hasOcclusionTextureTransform",void 0),s([c()],l.prototype,"hasMetallicRoughnessTextureTransform",void 0);function jt(e){const t=new pe,{vertex:a,fragment:o,varyings:i}=t,{output:n,offsetBackfaces:d,instancedColor:h,pbrMode:u,snowCover:v,spherical:x}=e,C=u===m.Normal||u===m.Schematic;if(V(a,e),t.include(Qe),i.add("vpos","vec3"),t.include(K,e),t.include(Mt,e),t.include(et,e),t.include(rt,e),$(n)&&(de(t.vertex,e),t.include(re,e),t.include(H,e),d&&t.include(Tt),h&&t.attributes.add(T.INSTANCECOLOR,"vec4"),i.add("vNormalWorld","vec3"),i.add("localvpos","vec3"),t.include(W,e),t.include(tt,e),t.include(yt,e),t.include(at,e),a.uniforms.add(new ot("externalColor",w=>w.externalColor)),i.add("vcolorExt","vec4"),a.main.add(r`
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
      ${f(d,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),$(n)){const{hasColorTexture:w,hasColorTextureTransform:p,receiveShadows:R}=e;t.include(De,e),t.include(ge,e),t.include(q,e),t.include(e.instancedDoublePrecision?Lt:je,e),t.fragment.include(U,e),t.include(it,e),de(t.fragment,e),Ee(o),xe(o),be(o),o.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new ue("ambient",M=>M.ambient),new ue("diffuse",M=>M.diffuse),new L("opacity",M=>M.opacity),new L("layerOpacity",M=>M.layerOpacity)),w&&o.uniforms.add(new O("tex",M=>M.texture)),t.include(nt,e),t.include(Re,e),o.include(Ft),ce(o),o.main.add(r`
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
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(Ct,e),t}const No=Object.freeze(Object.defineProperty({__proto__:null,build:jt},Symbol.toStringTag,{value:"Module"}));class zo extends Dt{constructor(t,a){super(t,a,new ne(No,()=>import("./RealisticTree.glsl-De7nH4tm.js").then(o=>o.R))),this.type="RealisticTreeTechnique"}}class Eo extends Ia{constructor(t,a){super(t,Io),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[_e.OPAQUE_MATERIAL,o=>(Ye(o)||Ce(o))&&!this.parameters.transparent],[_e.TRANSPARENT_MATERIAL,o=>(Ye(o)||Ce(o))&&this.parameters.transparent&&this.parameters.writeDepth],[_e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,o=>(Qt(o)||Ce(o))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Ao(this.parameters),this._configuration=new l(a.spherical,a.doublePrecisionRequiresObfuscation)}isVisibleForOutput(t){return t!==g.Shadow&&t!==g.ShadowExcludeHighlight&&t!==g.ShadowHighlight||this.parameters.castShadows}get visible(){const t=this.parameters;if(t.layerOpacity<F)return!1;const{hasInstancedColor:a,hasVertexColors:o,hasSymbolColors:i,vvColor:n}=t,d=a||n||i,h=t.colorMixMode==="replace",u=t.opacity>=F;if(o&&d)return h||u;const v=t.externalColor&&t.externalColor[3]>=F;return o?h?v:u:d?h||u:h?v:u}get hasEmissions(){return!!this.parameters.emissiveTextureId||!He(this.parameters.emissiveFactor,Me)}getConfiguration(t,a){const o=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:d}=o;return this._configuration.output=t,this._configuration.hasNormalTexture=!i&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!i&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=o.verticalOffset!=null,this._configuration.hasScreenSizePerspective=o.screenSizePerspective!=null,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=i?b.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,o.customDepthTest!=null&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=a.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?Q.None:o.cullFace,this._configuration.cullAboveTerrain=a.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&o.modelTransformation!=null,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=i?y.WindingOrder:n&&d==="normal"?y.View:n&&d==="winding-order"?y.WindingOrder:y.None,this._configuration.instancedColor=o.hasInstancedColor,$(t)?(this._configuration.terrainDepthTest=a.terrainDepthTest,this._configuration.receiveShadows=o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&a.ssao!=null):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?m.Schematic:m.Normal:m.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=i?D.None:o.emissiveTextureId!=null?D.Texture:o.usePBR?D.Value:D.None,this._configuration.hasOcclusionTexture=!i&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=a.oitPass,this._configuration.enableOffset=a.camera.relativeElevation<Ga,this._configuration.snowCover=Go(a),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(t,a,o,i,n,d){if(this.parameters.verticalOffset!=null){const h=o.camera;B(Ve,a[12],a[13],a[14]);let u=null;switch(o.viewingMode){case Ue.Global:u=Ht(Bt,Ve);break;case Ue.Local:u=Vt(Bt,Fo)}let v=0;const x=we(Po,Ve,h.eye),C=Wt(x),w=We(x,x,1/C);let p=null;this.parameters.screenSizePerspective&&(p=Ut(u,w)),v+=Aa(h,C,this.parameters.verticalOffset,p??0,this.parameters.screenSizePerspective),We(u,u,v),Yt(Be,u,o.transform.inverseRotation),i=we(Lo,i,Be),n=we(Ro,n,Be)}La(t,o,i,n,Ra(o.verticalOffset),d)}createGLMaterial(t){return new _o(t)}createBufferWriter(){return new Fa(this._vertexBufferLayout)}}class _o extends Pa{constructor(t){super({...t,...t.material.parameters})}beginSlot(t){this._material.setParameters({receiveShadows:t.shadowMap.enabled});const a=this._material.parameters;this.updateTexture(a.textureId);const o=t.camera.viewInverseTransposeMatrix;return B(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(a.treeRendering?zo:Dt,t)}}class Io extends yo{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Go(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}function Ao(e){const t=Kt().vec3f(T.POSITION);return e.normalType===b.Compressed?t.vec2i16(T.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(T.NORMAL),e.hasVertexTangents&&t.vec4f(T.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(T.UV0),e.hasVertexColors&&t.vec4u8(T.COLOR),e.hasSymbolColors&&t.vec4u8(T.SYMBOLCOLOR),Da()&&t.vec4u8(T.OBJECTANDLAYERIDCOLOR),t}const Lo=N(),Ro=N(),Fo=$t(0,0,1),Bt=N(),Be=N(),Ve=N(),Po=N();export{Pt as J,So as N,jt as _,bt as a,Fe as b,St as c,De as d,vt as e,ge as f,gt as g,y as h,Ot as i,Gt as j,Et as m,Ka as n,Qa as o,be as p,ao as r,eo as s,pt as t,xe as u,fe as v,je as x,Eo as z};
