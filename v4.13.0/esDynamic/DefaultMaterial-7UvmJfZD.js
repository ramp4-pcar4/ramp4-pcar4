import{H as We,o as B,s as Yo,A as qo,c as Se,r as Jo,g as Ue,P as Zo,N as ko}from"./vec32-Cj8pVsU0.js";import{ff as Ye,gN as k,gM as ye,ah as E,v as c,x as Ce,z as $o,d$ as ie,ab as Xo,fV as Ko,af as Qo,cP as ea,lm as $,d5 as oa}from"./main-BFDurRCu.js";import{l as qe}from"./ViewingMode-CdRKcXnc.js";import{O as aa}from"./InterleavedLayout-C2YUDwKf.js";import{n as w,u as X,r as Je,o as Ne,t as ta,C as ra}from"./ShaderOutput-CUn9tpiG.js";import{n as G,a as M,t as ne}from"./NormalAttribute.glsl-BnbqDItl.js";import{F as ia,q as na,r as D,u as sa,v as la,x as ca,y as se,z as da,A as ma,h as ua,B as ha,C as pa,c as F,D as K,f as H,E as W,G as U,H as Q,I as N,J as Y,K as va,M as fa,N as ga,O as V,P as xa,Q as Ze,R as ke,S as $e,T as Xe,U as ba,V as Oe,W as le,X as Ke,Y as wa,e as ce,Z as Ma,_ as Ta,$ as Qe,a0 as ze,k as Sa,o as I,a1 as p,a2 as Ee,a3 as Ie,a4 as de,j as ya,a5 as Ca,a6 as Na,a7 as Le,a8 as Oa,a9 as za,aa as eo,d as me,ab as oo,ac as ao,ad as to,ae as ro,af as io,ag as ue,ah as no,ai as Ea,aj as Ia,ak as La,al as Ga,am as Aa,an as Pa,ao as Ra,ap as Da,aq as Fa,ar as ja,as as _a,at as j,au as u,av as Va,aw as Ge,ax as Ba,ay as Ha,az as Wa,aA as Ua,aB as Ya,aC as qa,aD as Ja}from"./OutputColorHighlightOID.glsl-BdXTjs7_.js";import{n as i,t as v}from"./glsl-Z5uYj8ka.js";import{i as O,a as so,e as ee,n as oe}from"./basicInterfaces-Dsf65ICa.js";import{e as x}from"./VertexAttribute-hUz6pozM.js";import{n as lo,s as Za,r as ka}from"./vec4f64-DD-nkcCV.js";import{e as Ae,r as q}from"./mat3f64-BnNZDR5l.js";import{j as $a}from"./mat3-DOnW3DjW.js";import{r as co}from"./mat4f64-xsZDPPj0.js";import{a as he}from"./BindType-CKbZk6AG.js";import{a as Xa,n as mo}from"./vec2f64-CkowXrDb.js";import{o as pe}from"./vec2-BnynUbeJ.js";import{i as ve}from"./ShaderBuilder-CU5v4tk1.js";import{B as Pe,g as Re,f as Ka}from"./renderState-BM-MCKUz.js";import{P as uo,M as Qa,g as et,_ as ot,C as ho}from"./enums-wEDHPbCF.js";import{a as at,S as tt}from"./Texture-D5XWO2GQ.js";import{s as A}from"./vec42-D8CJyqHG.js";function rt(e){e.vertex.code.add(i`
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
  `)}function po(e,o){const t=e.fragment;switch(t.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),o.doubleSidedMode){case T.None:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case T.View:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case T.WindingOrder:t.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:Ye(o.doubleSidedMode);case T.COUNT:}}var T;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(T||(T={}));function it({normalTexture:e,metallicRoughnessTexture:o,metallicFactor:t,roughnessFactor:r,emissiveTexture:a,emissiveFactor:n,occlusionTexture:s}){return e==null&&o==null&&a==null&&(n==null||We(n,ye))&&s==null&&(r==null||r===1)&&(t==null||t===1)}const vo=k(1,1,.5),nt=k(0,.6,.2),st=k(0,1,.2);function fo(e,o){switch(o.normalType){case M.Attribute:case M.Compressed:e.include(ne,o),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new na("transformNormalGlobalFromModel",t=>t.transformNormalGlobalFromModel),new D("transformNormalViewFromGlobal",t=>t.transformNormalViewFromGlobal)),e.vertex.code.add(i`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case M.ScreenDerivative:e.vertex.code.add(i`void forwardNormal() {}`);break;default:Ye(o.normalType);case M.COUNT:}}let lt=class extends ia{constructor(){super(...arguments),this.transformNormalViewFromGlobal=Ae()}},ct=class extends sa{constructor(){super(...arguments),this.transformNormalGlobalFromModel=Ae(),this.toMapSpace=lo()}};function go(e){e.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}const xo=Ae();function bo(e,o){const{hasModelTransformation:t,instancedDoublePrecision:r,instanced:a,output:n,hasVertexTangents:s}=o;t&&(e.vertex.uniforms.add(new la("model",d=>d.modelTransformation??co)),e.vertex.uniforms.add(new D("normalLocalOriginFromModel",d=>($a(xo,d.modelTransformation??co),xo)))),a&&r&&(e.attributes.add(x.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(x.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(x.INSTANCEMODEL,"mat3"),e.attributes.add(x.INSTANCEMODELNORMAL,"mat3"));const l=e.vertex;r&&(l.include(ca,o),l.uniforms.add(new se("viewOriginHi",d=>da(B(fe,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),fe)),new se("viewOriginLo",d=>ma(B(fe,d.camera.viewInverseTransposeMatrix[3],d.camera.viewInverseTransposeMatrix[7],d.camera.viewInverseTransposeMatrix[11]),fe)))),l.code.add(i`
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
    `),n===w.Normal&&(ua(l),l.code.add(i`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${t?r?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":r?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),s&&l.code.add(i`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${t?r?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":r?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const fe=E();function wo(e,o){o.hasSymbolColors?(e.include(rt),e.attributes.add(x.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new ha("colorMixMode",t=>pa[t.colorMixMode])),e.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Mo(e,o){switch(o.output){case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:e.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth){
float fragDepth = _calculateFragDepth(_linearDepth);
gl_FragDepth = fragDepth;
}`)}}function J(e,o){dt(e,o,new F("textureAlphaCutoff",t=>t.textureAlphaCutoff))}function dt(e,o,t){const r=e.fragment,a=o.alphaDiscardMode,n=a===O.Blend;a!==O.Mask&&a!==O.MaskBlend||r.uniforms.add(t),r.code.add(i`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${a===O.Opaque?"color.a = 1.0;":`if (color.a < ${n?i.float(K):"textureAlphaCutoff"}) {
              discard;
             } ${v(a===O.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}function To(e,o){const{vertex:t,fragment:r,varyings:a}=e,{hasColorTexture:n,alphaDiscardMode:s}=o,l=n&&s!==O.Opaque,{output:d,normalType:h,hasColorTextureTransform:f}=o;switch(d){case w.Depth:H(t,o),e.include(W,o),r.include(Y,o),e.include(U,o),l&&r.uniforms.add(new N("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(J,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case w.Shadow:case w.ShadowHighlight:case w.ShadowExcludeHighlight:case w.ViewshedShadow:case w.ObjectAndLayerIdColor:H(t,o),e.include(W,o),e.include(U,o),e.include(Q,o),e.include(Mo,o),r.include(Y,o),e.include(fa,o),ga(e),a.add("depth","float",{invariant:!0}),l&&r.uniforms.add(new N("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(J,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${d===w.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}`);break;case w.Normal:{H(t,o),e.include(W,o),e.include(ne,o),e.include(fo,o),e.include(U,o),e.include(Q,o),l&&r.uniforms.add(new N("tex",y=>y.texture)),h===M.ScreenDerivative&&a.add("vPositionView","vec3",{invariant:!0});const g=h===M.Attribute||h===M.Compressed;t.main.add(i`
        vpos = getVertexInLocalOriginSpace();
        ${g?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(Y,o),e.include(J,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${h===M.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case w.Highlight:H(t,o),e.include(W,o),e.include(U,o),e.include(Q,o),l&&r.uniforms.add(new N("tex",g=>g.texture)),t.main.add(i`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(Y,o),e.include(J,o),e.include(va,o),r.main.add(i`
        discardBySlice(vpos);
        ${v(l,i`vec4 texColor = texture(tex, ${f?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}function mt(e,o){const t=e.fragment,{hasVertexTangents:r,doubleSidedMode:a,hasNormalTexture:n,textureCoordinateType:s,bindType:l,hasNormalTextureTransform:d}=o;r?(e.attributes.add(x.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),a===T.WindingOrder?t.code.add(i`mat3 computeTangentSpace(vec3 normal) {
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
}`),n&&s!==V.None&&(e.include(xa,o),t.uniforms.add(l===he.Pass?new N("normalTexture",h=>h.textureNormal):new Ze("normalTexture",h=>h.textureNormal)),d&&(t.uniforms.add(new ke("scale",h=>h.scale??Xa)),t.uniforms.add(new D("normalTextureTransformMatrix",h=>h.normalTextureTransformMatrix??q))),t.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),d&&t.code.add(i`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(i`return tangentSpace * rawNormal;
}`))}const So=3e5,De=5e5,Fe=4;function yo(){const e=new ve,o=e.fragment;e.include($e);const t=(Fe+1)/2,r=1/(2*t*t);return o.include(Xe),o.uniforms.add(new N("depthMap",a=>a.depthTexture),new Ze("tex",a=>a.colorTexture),new ba("blurSize",a=>a.blurSize),new F("projScale",(a,n)=>{const s=n.camera.distance;return s>5e4?Math.max(0,a.projScale-(s-5e4)):a.projScale})),o.code.add(i`
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
    for (int r = -${i.int(Fe)}; r <= ${i.int(Fe)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const ut=Object.freeze(Object.defineProperty({__proto__:null,build:yo},Symbol.toStringTag,{value:"Module"}));let Co=class extends Oe{constructor(e,o){super(e,o,new le(ut,()=>import("./RealisticTree.glsl-DzbI6Sba.js").then(t=>t.c)))}initializePipeline(){return Pe({colorWrite:Re})}};const ht="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let pt=class extends Ke{constructor(){super(...arguments),this.projScale=1}},vt=class extends pt{constructor(){super(...arguments),this.intensity=1}},ft=class extends Ke{},gt=class extends ft{constructor(){super(...arguments),this.blurSize=mo()}};const No=16;function Oo(){const e=new ve,o=e.fragment;return e.include($e),e.include(wa),o.include(Xe),o.uniforms.add(new ce("radius",t=>ge(t.camera))).code.add(i`vec3 sphere[16] = vec3[16](
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
}`),e.outputs.add("fragOcclusion","float"),o.uniforms.add(new N("normalMap",t=>t.normalTexture),new N("depthMap",t=>t.depthTexture),new F("projScale",t=>t.projScale),new N("rnm",t=>t.noiseTexture),new ke("rnmScale",(t,r)=>pe(zo,r.camera.fullWidth/t.noiseTexture.descriptor.width,r.camera.fullHeight/t.noiseTexture.descriptor.height)),new F("intensity",t=>t.intensity),new Ma("screenSize",t=>pe(zo,t.camera.fullWidth,t.camera.fullHeight))).main.add(i`
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

    for(int i = 0; i < ${i.int(No)}; ++i) {
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
    float A = max(1.0 - sum * intensity / float(${i.int(No)}), 0.0);

    // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
    A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

    fragOcclusion = A;
  `),e}function ge(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const zo=mo(),xt=Object.freeze(Object.defineProperty({__proto__:null,build:Oo,getRadius:ge},Symbol.toStringTag,{value:"Module"}));let Eo=class extends Oe{constructor(e,o){super(e,o,new le(xt,()=>import("./RealisticTree.glsl-DzbI6Sba.js").then(t=>t.d)))}initializePipeline(){return Pe({colorWrite:Re})}};const ae=2;let te=class extends Ta{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Qe.SSAO,this.isEnabled=()=>!1,this._enableTime=ie(0),this._passParameters=new vt,this._drawParameters=new gt}initialize(){const e=Uint8Array.from(atob(ht),t=>t.charCodeAt(0)),o=new at;o.wrapMode=uo.CLAMP_TO_EDGE,o.pixelFormat=Qa.RGB,o.wrapMode=uo.REPEAT,o.hasMipmap=!0,o.width=32,o.height=32,this._passParameters.noiseTexture=new tt(this.renderingContext,o,e),this.techniques.precompile(Eo),this.techniques.precompile(Co),this.addHandles(Xo(()=>this.isEnabled(),()=>this._enableTime=ie(0)))}destroy(){this._passParameters.noiseTexture=Ko(this._passParameters.noiseTexture)}render(e){const o=e.find(({name:Me})=>Me==="normals"),t=o?.getTexture(),r=o?.getTexture(et);if(!t||!r)return;const a=this.techniques.get(Eo),n=this.techniques.get(Co);if(!a.compiled||!n.compiled)return this._enableTime=ie(performance.now()),void this.requestRender(so.UPDATE);this._enableTime===0&&(this._enableTime=ie(performance.now()));const s=this.renderingContext,l=this.view.qualitySettings.fadeDuration,d=this.bindParameters,h=d.camera,f=h.relativeElevation,g=Qo((De-f)/(De-So),0,1),y=l>0?Math.min(l,performance.now()-this._enableTime)/l:1,z=y*g;this._passParameters.normalTexture=t,this._passParameters.depthTexture=r,this._passParameters.projScale=1/h.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*bt/ge(h)**6*z;const S=h.fullViewport[2],L=h.fullViewport[3],R=this.fboCache.acquire(S,L,"ssao input",ze.RG8UNORM);s.bindFramebuffer(R.fbo),s.setViewport(0,0,S,L),s.bindTechnique(a,d,this._passParameters,this._drawParameters),s.screen.draw();const b=Math.round(S/ae),_=Math.round(L/ae),Z=this.fboCache.acquire(b,_,"ssao blur",ze.R8UNORM);s.bindFramebuffer(Z.fbo),this._drawParameters.colorTexture=R.getTexture(),pe(this._drawParameters.blurSize,0,ae/L),s.bindTechnique(n,d,this._passParameters,this._drawParameters),s.setViewport(0,0,b,_),s.screen.draw(),R.release();const re=this.fboCache.acquire(b,_,Qe.SSAO,ze.R8UNORM);return s.bindFramebuffer(re.fbo),s.setViewport(0,0,S,L),s.setClearColor(1,1,1,0),s.clear(ot.COLOR),this._drawParameters.colorTexture=Z.getTexture(),pe(this._drawParameters.blurSize,ae/S,0),s.bindTechnique(n,d,this._passParameters,this._drawParameters),s.setViewport(0,0,b,_),s.screen.draw(),s.setViewport4fv(h.fullViewport),Z.release(),y<1&&this.requestRender(so.UPDATE),re}};c([Ce()],te.prototype,"consumes",void 0),c([Ce()],te.prototype,"produces",void 0),c([Ce({constructOnly:!0})],te.prototype,"isEnabled",void 0),te=c([$o("esri.views.3d.webgl-engine.effects.ssao.SSAO")],te);const bt=.5;function xe(e,o){o.receiveAmbientOcclusion?(e.uniforms.add(new Sa("ssaoTex",t=>t.ssao?.getTexture())),e.constants.add("blurSizePixelsInverse","float",1/ae),e.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):e.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Io(e,o){const t=e.fragment,r=o.lightingSphericalHarmonicsOrder!==void 0?o.lightingSphericalHarmonicsOrder:2;r===0?(t.uniforms.add(new se("lightingAmbientSH0",({lighting:a})=>B(Lo,a.sh.r[0],a.sh.g[0],a.sh.b[0]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):r===1?(t.uniforms.add(new I("lightingAmbientSH_R",({lighting:a})=>A(P,a.sh.r[0],a.sh.r[1],a.sh.r[2],a.sh.r[3])),new I("lightingAmbientSH_G",({lighting:a})=>A(P,a.sh.g[0],a.sh.g[1],a.sh.g[2],a.sh.g[3])),new I("lightingAmbientSH_B",({lighting:a})=>A(P,a.sh.b[0],a.sh.b[1],a.sh.b[2],a.sh.b[3]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):r===2&&(t.uniforms.add(new se("lightingAmbientSH0",({lighting:a})=>B(Lo,a.sh.r[0],a.sh.g[0],a.sh.b[0])),new I("lightingAmbientSH_R1",({lighting:a})=>A(P,a.sh.r[1],a.sh.r[2],a.sh.r[3],a.sh.r[4])),new I("lightingAmbientSH_G1",({lighting:a})=>A(P,a.sh.g[1],a.sh.g[2],a.sh.g[3],a.sh.g[4])),new I("lightingAmbientSH_B1",({lighting:a})=>A(P,a.sh.b[1],a.sh.b[2],a.sh.b[3],a.sh.b[4])),new I("lightingAmbientSH_R2",({lighting:a})=>A(P,a.sh.r[5],a.sh.r[6],a.sh.r[7],a.sh.r[8])),new I("lightingAmbientSH_G2",({lighting:a})=>A(P,a.sh.g[5],a.sh.g[6],a.sh.g[7],a.sh.g[8])),new I("lightingAmbientSH_B2",({lighting:a})=>A(P,a.sh.b[5],a.sh.b[6],a.sh.b[7],a.sh.b[8]))),t.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`))}const Lo=E(),P=lo();function wt(e){e.code.add(i`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG) {
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),e.code.add(i`float integratedRadiance(float cosTheta2, float roughness) {
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),e.code.add(i`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness) {
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function je(e,o){e.include(Ee),o.pbrMode!==p.Normal&&o.pbrMode!==p.Schematic&&o.pbrMode!==p.Simplified&&o.pbrMode!==p.TerrainWithWater||(e.code.add(i`float normalDistribution(float NdotH, float roughness)
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
}`)),o.pbrMode!==p.Normal&&o.pbrMode!==p.Schematic||(e.include(wt),e.code.add(i`struct PBRShadingInfo
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
}`))}function Mt(e,o){e.include(Ee),e.code.add(i`
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
}`)}function Tt(e){e.code.add(i`float mapChannel(float x, vec2 p) {
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),e.code.add(i`vec3 blackLevelSoftCompression(vec3 color, float averageAmbientRadiance) {
vec2 p = vec2(0.02, 0.0075) * averageAmbientRadiance;
return vec3(mapChannel(color.x, p), mapChannel(color.y, p), mapChannel(color.z, p));
}`)}function Go(e){e.code.add(i`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function be(e){e.constants.add("ambientBoostFactor","float",Na)}function we(e){e.uniforms.add(new ce("lightingGlobalFactor",o=>o.lighting.globalFactor))}function _e(e,o){const t=e.fragment,{pbrMode:r,spherical:a,hasColorTexture:n}=o;t.include(xe,o),r!==p.Disabled&&t.include(je,o),e.include(Io,o),t.include(Ee),t.include(Go,o);const s=!(r===p.Schematic&&!n);switch(s&&t.include(Tt),t.code.add(i`
    const float GAMMA_SRGB = ${i.float(ea)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${v(r!==p.Disabled,"const float GROUND_REFLECTANCE = 0.2;")}
  `),be(t),we(t),Ie(t),t.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${a?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),de(t),t.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),r){case p.Disabled:case p.WaterOnIntegratedMesh:case p.Water:e.include(Ca),t.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
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
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),o.useFillLights?t.uniforms.add(new ya("hasFillLights",l=>l.enableFillLights)):t.constants.add("hasFillLights","bool",!1),t.code.add(i`vec3 ambientDir = vec3(5.0 * groundNormal[1] - groundNormal[0] * groundNormal[2], - 5.0 * groundNormal[0] - groundNormal[2] * groundNormal[1], groundNormal[1] * groundNormal[1] + groundNormal[0] * groundNormal[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),t.uniforms.add(new ce("lightingSpecularStrength",l=>l.lighting.mainLight.specularStrength),new ce("lightingEnvironmentStrength",l=>l.lighting.mainLight.environmentStrength)).code.add(i`vec3 horizonRingDir = inputs.RdotNG * groundNormal - reflectedView;
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
        ${s?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case p.Simplified:case p.TerrainWithWater:Ie(t),de(t),t.code.add(i`const float roughnessTerrain = 0.5;
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
}`);default:case p.COUNT:}}let St=class extends Le{constructor(e,o,t){super(e,"mat4",he.Draw,(r,a,n,s)=>r.setUniformMatrix4fv(e,o(a,n,s)),t)}},yt=class extends Le{constructor(e,o,t){super(e,"mat4",he.Pass,(r,a,n)=>r.setUniformMatrix4fv(e,o(a,n)),t)}};function Ct(e){e.fragment.uniforms.add(new yt("shadowMapMatrix",(o,t)=>t.shadowMap.getShadowMapMatrices(o.origin),4)),Ao(e)}function Nt(e){e.fragment.uniforms.add(new St("shadowMapMatrix",(o,t)=>t.shadowMap.getShadowMapMatrices(o.origin),4)),Ao(e)}function Ao(e){const{fragment:o}=e;o.uniforms.add(new I("cascadeDistances",t=>t.shadowMap.cascadeDistances),new Oa("numCascades",t=>t.shadowMap.numCascades)),o.code.add(i`const vec3 invalidShadowmapUVZ = vec3(0.0, 0.0, -1.0);
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
}`)}function Ot(e){e.fragment.code.add(i`float readShadowMapUVZ(vec3 uvzShadow, sampler2DShadow _shadowMap) {
return texture(_shadowMap, uvzShadow);
}`)}class zt extends Le{constructor(o,t){super(o,"sampler2DShadow",he.Bind,(r,a)=>r.bindTexture(o,t(a)))}}function Po(e,o){o.receiveShadows&&(e.include(Ct),Ro(e))}function Ve(e,o){o.receiveShadows&&(e.include(Nt),Ro(e))}function Ro(e){e.include(Ot);const{fragment:o}=e;o.uniforms.add(new zt("shadowMap",t=>t.shadowMap.depthTexture)),o.code.add(i`float readShadowMap(const in vec3 _worldPos, float _linearDepth) {
vec3 uvzShadow = calculateUVZShadow(_worldPos, _linearDepth, textureSize(shadowMap,0));
if (uvzShadow.z < 0.0) {
return 0.0;
}
return readShadowMapUVZ(uvzShadow, shadowMap);
}`)}function Et(e,o){o.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new D("colorTextureTransformMatrix",t=>t.colorTextureTransformMatrix??q)).code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardColorUV(){}`)}function It(e,o){o.hasNormalTextureTransform&&o.textureCoordinateType!==V.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new D("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??q)).code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardNormalUV(){}`)}function Lt(e,o){o.hasEmissionTextureTransform&&o.textureCoordinateType!==V.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new D("emissiveTextureTransformMatrix",t=>t.emissiveTextureTransformMatrix??q)).code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardEmissiveUV(){}`)}function Gt(e,o){o.hasOcclusionTextureTransform&&o.textureCoordinateType!==V.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new D("occlusionTextureTransformMatrix",t=>t.occlusionTextureTransformMatrix??q)).code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardOcclusionUV(){}`)}function At(e,o){o.hasMetallicRoughnessTextureTransform&&o.textureCoordinateType!==V.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new D("metallicRoughnessTextureTransformMatrix",t=>t.metallicRoughnessTextureTransformMatrix??q)).code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function Do(e){e.include(za),e.code.add(i`
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
  `)}function Fo(e,o){o.snowCover&&(e.code.add(i`float getSnow(vec3 normal, vec3 normalGround) {
return smoothstep(0.5, 0.55, dot(normal, normalGround));
}`),e.code.add(i`vec3 applySnowToMRR(vec3 mrr, float snow) {
return mix(mrr, vec3(0.0, 1.0, 0.04), snow);
}
vec4 snowCoverForEmissions(vec4 emission, float snow) {
return mix(emission, vec4(0.0), snow);
}`))}function jo(e){const o=new ve,{attributes:t,vertex:r,fragment:a,varyings:n}=o,{output:s,normalType:l,offsetBackfaces:d,instancedColor:h,spherical:f,receiveShadows:g,snowCover:y,pbrMode:z,textureAlphaPremultiplied:S,instancedDoublePrecision:L,hasVertexColors:R,hasVertexTangents:b,hasColorTexture:_,hasNormalTexture:Z,hasNormalTextureTransform:re,hasColorTextureTransform:Me,hasBloom:Uo}=e;if(H(r,e),t.add(x.POSITION,"vec3"),n.add("vpos","vec3",{invariant:!0}),o.include(Q,e),o.include(bo,e),o.include(eo,e),o.include(Et,e),!X(s))return o.include(To,e),o;o.include(It,e),o.include(Lt,e),o.include(Gt,e),o.include(At,e),me(r,e),o.include(ne,e),o.include(W,e);const Te=l===M.Attribute||l===M.Compressed;return Te&&d&&o.include(go),o.include(mt,e),o.include(fo,e),h&&o.attributes.add(x.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),o.include(U,e),o.include(oo,e),o.include(wo,e),o.include(ao,e),r.uniforms.add(new to("externalColor",C=>C.colorMixMode==="ignore"?Za:C.externalColor)),n.add("vcolorExt","vec4"),o.include(ro,e),r.main.add(i`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${v(h,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${v(Te,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${v(b,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${v(Te&&d,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${i.float(K)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),o.include(_e,e),a.include(xe,e),o.include(J,e),o.include(L?Po:Ve,e),a.include(Y,e),o.include(io,e),me(a,e),a.uniforms.add(r.uniforms.get("localOrigin"),new ue("ambient",C=>C.ambient),new ue("diffuse",C=>C.diffuse),new F("opacity",C=>C.opacity),new F("layerOpacity",C=>C.layerOpacity)),_&&a.uniforms.add(new N("tex",C=>C.texture)),o.include(no,e),a.include(je,e),a.include(Do),o.include(po,e),a.include(Fo,e),be(a),we(a),de(a),a.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${_?i`
            vec4 texColor = texture(tex, ${Me?"colorUV":"vuv0"});
            ${v(S,"texColor.rgb /= texColor.a;")}
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
    vec3 albedo = mixExternalColor(${v(R,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${v(R,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${Z?`mat3 tangentSpace = computeTangentSpace(${b?"normal":"normal, vpos, vuv0"});
            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${re?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${f?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${v(y,i`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${z===p.Normal||z===p.Schematic?i`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            vec4 emission = ${Uo?"vec4(0.0)":"getEmissions(albedo)"};
            ${v(y,`mrr = applySnowToMRR(mrr, snow);
                 emission = snowCoverForEmissions(emission, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos, albedo ${v(y,", snow")});
  `),o}const Pt=Object.freeze(Object.defineProperty({__proto__:null,build:jo},Symbol.toStringTag,{value:"Module"}));class Rt extends lt{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=vo,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=ee.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveStrength=0,this.emissiveSource=$.Color,this.emissiveBaseColor=ye,this.instancedDoublePrecision=!1,this.normalType=M.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=k(.2,.2,.2),this.diffuse=k(.8,.8,.8),this.externalColor=ka(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=E(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.drivenOpacity=!1,this.writeDepth=!0,this.customDepthTest=oe.Less,this.textureAlphaMode=O.Blend,this.textureAlphaCutoff=K,this.textureAlphaPremultiplied=!1,this.renderOccluded=Ea.Occlude,this.isDecoration=!1}}class Dt extends ct{constructor(){super(...arguments),this.origin=E(),this.slicePlaneLocalOrigin=this.origin}}class _o extends Oe{constructor(o,t,r=new le(Pt,()=>import("./RealisticTree.glsl-DzbI6Sba.js").then(a=>a.D))){super(o,t,r),this.type="DefaultMaterialTechnique"}_makePipeline(o,t){const{oitPass:r,output:a,transparent:n,cullFace:s,customDepthTest:l,hasOccludees:d}=o;return Pe({blending:X(a)&&n?Ra(r):null,culling:jt(o)?Ka(s):null,depthTest:{func:Pa(r,Ft(l))},depthWrite:Aa(o),drawBuffers:La(a,Ga(r,a)),colorWrite:Re,stencilWrite:d?ja:null,stencilTest:d?t?Da:Fa:null,polygonOffset:Ia(o)})}initializePipeline(o){return this._occludeePipelineState=this._makePipeline(o,!0),this._makePipeline(o,!1)}getPipeline(o){return o?this._occludeePipelineState:super.getPipeline()}}function Ft(e){return e===oe.Lequal?ho.LEQUAL:ho.LESS}function jt(e){return e.cullFace!==ee.None||!e.hasSlicePlane&&!e.transparent&&!e.doubleSidedMode}class m extends _a{constructor(o){super(),this.spherical=o,this.alphaDiscardMode=O.Opaque,this.doubleSidedMode=T.None,this.pbrMode=p.Disabled,this.cullFace=ee.None,this.normalType=M.Attribute,this.customDepthTest=oe.Less,this.emissionSource=j.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.instancedDoublePrecision=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasBloom=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0,this.draped=!1}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===j.Texture||this.hasOcclusionTexture||this.hasNormalTexture?V.Default:V.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}c([u({count:O.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([u({count:T.COUNT})],m.prototype,"doubleSidedMode",void 0),c([u({count:p.COUNT})],m.prototype,"pbrMode",void 0),c([u({count:ee.COUNT})],m.prototype,"cullFace",void 0),c([u({count:M.COUNT})],m.prototype,"normalType",void 0),c([u({count:oe.COUNT})],m.prototype,"customDepthTest",void 0),c([u({count:j.COUNT})],m.prototype,"emissionSource",void 0),c([u()],m.prototype,"hasVertexColors",void 0),c([u()],m.prototype,"hasSymbolColors",void 0),c([u()],m.prototype,"hasVerticalOffset",void 0),c([u()],m.prototype,"hasColorTexture",void 0),c([u()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([u()],m.prototype,"hasOcclusionTexture",void 0),c([u()],m.prototype,"hasNormalTexture",void 0),c([u()],m.prototype,"hasScreenSizePerspective",void 0),c([u()],m.prototype,"hasVertexTangents",void 0),c([u()],m.prototype,"hasOccludees",void 0),c([u()],m.prototype,"instancedDoublePrecision",void 0),c([u()],m.prototype,"hasModelTransformation",void 0),c([u()],m.prototype,"offsetBackfaces",void 0),c([u()],m.prototype,"vvSize",void 0),c([u()],m.prototype,"vvColor",void 0),c([u()],m.prototype,"receiveShadows",void 0),c([u()],m.prototype,"receiveAmbientOcclusion",void 0),c([u()],m.prototype,"textureAlphaPremultiplied",void 0),c([u()],m.prototype,"instanced",void 0),c([u()],m.prototype,"instancedColor",void 0),c([u()],m.prototype,"writeDepth",void 0),c([u()],m.prototype,"transparent",void 0),c([u()],m.prototype,"enableOffset",void 0),c([u()],m.prototype,"terrainDepthTest",void 0),c([u()],m.prototype,"cullAboveTerrain",void 0),c([u()],m.prototype,"snowCover",void 0),c([u()],m.prototype,"hasBloom",void 0),c([u()],m.prototype,"hasColorTextureTransform",void 0),c([u()],m.prototype,"hasEmissionTextureTransform",void 0),c([u()],m.prototype,"hasNormalTextureTransform",void 0),c([u()],m.prototype,"hasOcclusionTextureTransform",void 0),c([u()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0);function Vo(e){const o=new ve,{attributes:t,vertex:r,fragment:a,varyings:n}=o,{output:s,offsetBackfaces:l,instancedColor:d,pbrMode:h,snowCover:f,spherical:g,hasBloom:y}=e,z=h===p.Normal||h===p.Schematic;if(H(r,e),t.add(x.POSITION,"vec3"),n.add("vpos","vec3",{invariant:!0}),o.include(Q,e),o.include(bo,e),o.include(eo,e),o.include(ro,e),X(s)&&(me(o.vertex,e),o.include(ne,e),o.include(W,e),l&&o.include(go),d&&o.attributes.add(x.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3",{invariant:!0}),o.include(U,e),o.include(oo,e),o.include(wo,e),o.include(ao,e),r.uniforms.add(new to("externalColor",S=>S.externalColor)),n.add("vcolorExt","vec4"),r.main.add(i`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${v(d,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${i.float(K)};
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
    `)),X(s)){const{hasColorTexture:S,hasColorTextureTransform:L,receiveShadows:R}=e;o.include(_e,e),a.include(xe,e),o.include(J,e),o.include(e.instancedDoublePrecision?Po:Ve,e),a.include(Y,e),o.include(io,e),me(a,e),Ie(a),be(a),we(a),a.uniforms.add(r.uniforms.get("localOrigin"),r.uniforms.get("view"),new ue("ambient",b=>b.ambient),new ue("diffuse",b=>b.diffuse),new F("opacity",b=>b.opacity),new F("layerOpacity",b=>b.layerOpacity)),S&&a.uniforms.add(new N("tex",b=>b.texture)),o.include(no,e),a.include(je,e),a.include(Do),de(a),a.main.add(i`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${S?`texture(tex, ${L?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${v(S,`${v(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}
        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${R?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":g?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
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
      ${v(z,`vec3 normalGround = ${g?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${z?i`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${v(f,i`mrr = applySnowToMRR(mrr, 1.0)`)}
            vec4 emission = ${f||y?"vec4(0.0)":"getEmissions(albedo)"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos, albedo ${v(f,", 1.0")});`)}return o.include(To,e),o}const _t=Object.freeze(Object.defineProperty({__proto__:null,build:Vo},Symbol.toStringTag,{value:"Module"}));class Vt extends _o{constructor(o,t){super(o,t,new le(_t,()=>import("./RealisticTree.glsl-DzbI6Sba.js").then(r=>r.R))),this.type="RealisticTreeTechnique"}}class Bt extends Va{constructor(o,t){super(o,Bo),this.materialType="default",this.supportsEdges=!0,this.intersectDraped=void 0,this.produces=new Map([[Ge.OPAQUE_MATERIAL,r=>(Je(r)||Ne(r))&&!this.transparent],[Ge.TRANSPARENT_MATERIAL,r=>(Je(r)||Ne(r))&&this.transparent&&this.parameters.writeDepth],[Ge.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,r=>(ta(r)||Ne(r))&&this.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=Wt(this.parameters),this._configuration=new m(t.spherical)}isVisibleForOutput(o){return o!==w.Shadow&&o!==w.ShadowExcludeHighlight&&o!==w.ShadowHighlight||this.parameters.castShadows}get visible(){const{layerOpacity:o,colorMixMode:t,opacity:r,externalColor:a}=this.parameters;return o*(t==="replace"?1:r)*(t==="ignore"?1:a[3])>=K}get _hasEmissiveBase(){return!!this.parameters.emissiveTextureId||!We(this.parameters.emissiveBaseColor,ye)}get hasEmissions(){return this.parameters.emissiveStrength>0&&(this.parameters.emissiveSource===$.Emissive&&this._hasEmissiveBase||this.parameters.emissiveSource===$.Color)}getConfiguration(o,t){const{parameters:r,_configuration:a}=this,{treeRendering:n,doubleSided:s,doubleSidedType:l}=r;return super.getConfiguration(o,t,this._configuration),a.hasNormalTexture=!n&&!!r.normalTextureId,a.hasColorTexture=!!r.textureId,a.hasVertexTangents=!n&&r.hasVertexTangents,a.instanced=r.isInstanced,a.instancedDoublePrecision=r.instancedDoublePrecision,a.vvSize=!!r.vvSize,a.hasVerticalOffset=r.verticalOffset!=null,a.hasScreenSizePerspective=r.screenSizePerspective!=null,a.hasSlicePlane=r.hasSlicePlane,a.alphaDiscardMode=r.textureAlphaMode,a.normalType=n?M.Attribute:r.normalType,a.transparent=this.transparent,a.writeDepth=r.writeDepth,a.customDepthTest=r.customDepthTest??oe.Less,a.hasOccludees=t.hasOccludees,a.cullFace=r.hasSlicePlane?ee.None:r.cullFace,a.cullAboveTerrain=t.cullAboveTerrain,a.hasModelTransformation=!n&&r.modelTransformation!=null,a.hasVertexColors=r.hasVertexColors,a.hasSymbolColors=r.hasSymbolColors,a.doubleSidedMode=n?T.WindingOrder:s&&l==="normal"?T.View:s&&l==="winding-order"?T.WindingOrder:T.None,a.instancedColor=r.hasInstancedColor,X(o)?(a.terrainDepthTest=t.terrainDepthTest,a.receiveShadows=r.receiveShadows,a.receiveAmbientOcclusion=r.receiveAmbientOcclusion&&t.ssao!=null):(a.terrainDepthTest=!1,a.receiveShadows=a.receiveAmbientOcclusion=!1),a.vvColor=!!r.vvColor,a.textureAlphaPremultiplied=!!r.textureAlphaPremultiplied,a.pbrMode=r.usePBR?r.isSchematic?p.Schematic:p.Normal:p.Disabled,a.hasMetallicRoughnessTexture=!n&&!!r.metallicRoughnessTextureId,a.emissionSource=n?j.None:r.emissiveTextureId!=null&&r.emissiveSource===$.Emissive?j.Texture:r.usePBR?r.emissiveSource===$.Emissive?j.EmissiveColor:j.SymbolColor:j.None,a.hasOcclusionTexture=!n&&!!r.occlusionTextureId,a.offsetBackfaces=!(!this.transparent||!r.offsetTransparentBackfaces),a.oitPass=t.oitPass,a.enableOffset=t.camera.relativeElevation<Ba,a.snowCover=t.snowCover,a.hasBloom=ra(o),a.hasColorTextureTransform=!!r.colorTextureTransformMatrix,a.hasNormalTextureTransform=!!r.normalTextureTransformMatrix,a.hasEmissionTextureTransform=!!r.emissiveTextureTransformMatrix,a.hasOcclusionTextureTransform=!!r.occlusionTextureTransformMatrix,a.hasMetallicRoughnessTextureTransform=!!r.metallicRoughnessTextureTransformMatrix,a}intersect(o,t,r,a,n,s){if(this.parameters.verticalOffset!=null){const l=r.camera;B(He,t[12],t[13],t[14]);let d=null;switch(r.viewingMode){case qe.Global:d=qo(Wo,He);break;case qe.Local:d=Yo(Wo,qt)}let h=0;const f=Se(Jt,He,l.eye),g=Jo(f),y=Ue(f,f,1/g);let z=null;this.parameters.screenSizePerspective&&(z=Zo(d,y)),h+=Ha(l,g,this.parameters.verticalOffset,z??0,this.parameters.screenSizePerspective),Ue(d,d,h),ko(Be,d,r.transform.inverseRotation),a=Se(Ut,a,Be),n=Se(Yt,n,Be)}Wa(o,r,a,n,Ua(r.verticalOffset),s)}createGLMaterial(o){return new Ht(o)}createBufferWriter(){return new Ya(this._vertexBufferLayout)}get transparent(){return Ho(this.parameters)}}class Ht extends Ja{constructor(o){super({...o,...o.material.parameters})}beginSlot(o){this._material.setParameters({receiveShadows:o.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const r=o.camera.viewInverseTransposeMatrix;return B(t.origin,r[3],r[7],r[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(t.treeRendering?Vt:_o,o)}}class Bo extends Rt{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}function Wt(e){const o=aa().vec3f(x.POSITION);return e.normalType===M.Compressed?o.vec2i16(x.NORMALCOMPRESSED,{glNormalized:!0}):o.vec3f(x.NORMAL),e.hasVertexTangents&&o.vec4f(x.TANGENT),(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&o.vec2f16(x.UV0),e.hasVertexColors&&o.vec4u8(x.COLOR),e.hasSymbolColors&&o.vec4u8(x.SYMBOLCOLOR),qa()&&o.vec4u8(x.OLIDCOLOR),o}function Ho(e){const{drivenOpacity:o,opacity:t,externalColor:[r,a,n,s],layerOpacity:l,texture:d,textureId:h,textureAlphaMode:f,colorMixMode:g}=e;return o||t<1&&g!=="replace"||s<1&&g!=="ignore"||l<1||(d!=null||h!=null)&&f!==O.Opaque&&f!==O.Mask&&g!=="replace"}const Ut=E(),Yt=E(),qt=oa(0,0,1),Wo=E(),Be=E(),He=E(),Jt=E();export{Bo as H,jo as K,_e as L,Ho as Q,Vo as R,Bt as W,Go as a,De as b,Mo as c,xe as d,So as e,po as f,be as g,Ve as h,yo as i,we as j,Dt as k,Fo as l,Oo as m,it as n,nt as o,T as p,Io as q,Mt as r,st as s,vo as t,ge as v};
