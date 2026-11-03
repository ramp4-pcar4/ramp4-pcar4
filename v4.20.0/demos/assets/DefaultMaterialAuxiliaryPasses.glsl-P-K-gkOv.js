import{l as e}from"./mat3-Cqwq-S0j.js";import{t}from"./mat3f64-CHFEVEZ6.js";import{s as n}from"./vec3f64-AstwQ_2i.js";import{r}from"./mat4f64-CR6tgU3J.js";import{j as i}from"./vec3-wFzKlETV.js";import{i as a}from"./vec4f64-C5KC4udO.js";import{r as o}from"./Emissions.glsl-ClaXet58.js";import{n as s,t as c}from"./glsl-BlSepfbN.js";import{t as l}from"./FloatPassUniform-BPzXeigN.js";import{t as u}from"./Texture2DPassUniform-Mr-K9FL9.js";import{n as d,o as f,s as p}from"./MaterialUtil-Dara1sy_.js";import{t as m}from"./Float3BindUniform-DuWv399F.js";import"./NoParameters-CkJgCJZ9.js";import{a as h,n as g,t as _}from"./AlphaCutoff-C0WvOihj.js";import{t as v}from"./Matrix4PassUniform-DsqshnRS.js";import{t as y}from"./IntegerPassUniform-D5qRqlks.js";import{t as b}from"./ObjectAndLayerIdColor.glsl-C0bAoJlY.js";import{a as x,n as S,r as C,t as w}from"./VisualVariables.glsl-BSK9QtRf.js";import{t as T}from"./Matrix3PassUniform-Cx8xv3IP.js";import{n as E,r as D}from"./View.glsl-CC1Nd4YT.js";import{a as O,i as k,n as A,o as j,r as M,t as N}from"./Transform.glsl-Czk5kVD-.js";import{s as P}from"./SnowCover.glsl-BDPpyfrS.js";function F(e,t){switch(e.fragment.code.add(s`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`),t.normalType){case 1:e.attributes.add(`normalCompressed`,`vec2`),e.vertex.code.add(s`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case 0:e.attributes.add(`normal`,`vec3`),e.vertex.code.add(s`vec3 normalModel() {
return normal;
}`);break;default:t.normalType;case 2:case 3:}}function I(e,t){let{vertex:n,varyings:r}=e;switch(t.normalType){case 0:case 1:{e.include(F,t),r.add(`vNormalWorld`,`vec3`),r.add(`vNormalView`,`vec3`),n.uniforms.add(new T(`transformNormalViewFromGlobal`,e=>e.transformNormalViewFromGlobal));let{hasModelRotationScale:i}=t;i&&n.uniforms.add(new O(`transformNormalGlobalFromModel`,e=>e.transformNormalGlobalFromModel)),n.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${c(i,s`transformNormalGlobalFromModel * `)} normalModel();
          vNormalView = transformNormalViewFromGlobal * vNormalWorld;
        }
      `);break}case 2:e.vertex.code.add(s`void forwardNormal() {}`);break;default:t.normalType;case 3:}}var L=class extends k{constructor(){super(...arguments),this.transformNormalViewFromGlobal=t()}},R=class extends M{constructor(){super(...arguments),this.transformNormalGlobalFromModel=t(),this.toMapSpace=a()}};function z(e){e.vertex.code.add(s`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function B(e,t){t.instancedColor?(e.attributes.add(`instanceColor`,`vec4`),e.vertex.include(x),e.vertex.include(C),e.vertex.include(S),e.vertex.code.add(s`
      MaskedColor applyInstanceColor(MaskedColor color) {
        return multiplyMaskedColors( color, createMaskedFromUInt8NaNColor(${`instanceColor`}));
      }
    `)):e.vertex.code.add(s`MaskedColor applyInstanceColor(MaskedColor color) {
return color;
}`)}var V=t();function H(t,n){let{hasModelTransformation:a,instancedDoublePrecision:o,instanced:c,output:l,hasVertexTangents:u}=n;a&&(t.vertex.uniforms.add(new v(`model`,e=>e.modelTransformation??r)),t.vertex.uniforms.add(new T(`normalLocalOriginFromModel`,t=>(e(V,t.modelTransformation??r),V)))),c&&o&&(t.attributes.add(`instanceModelOriginHi`,`vec3`),t.attributes.add(`instanceModelOriginLo`,`vec3`),t.attributes.add(`instanceModel`,`mat3`),t.attributes.add(`instanceModelNormal`,`mat3`));let d=t.vertex;o&&(d.include(j,n),d.uniforms.add(new m(`viewOriginHi`,e=>f(i(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U)),new m(`viewOriginLo`,e=>p(i(U,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]),U)))),d.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${a?o?`(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz`:`(model * localPosition()).xyz`:o?`instanceModel * localPosition().xyz`:`localPosition().xyz`};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${o?s`
          // Issue: (should be resolved now with invariant position) https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -instanceModelOriginHi, -instanceModelOriginLo);
          return _pos - originDelta;`:`return vpos;`}
    }
    `),d.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${a?o?`normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)`:`normalLocalOriginFromModel * _normal.xyz`:o?`instanceModelNormal * _normal.xyz`:`_normal.xyz`});
    }
    `),l===2&&(D(d),d.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${a?o?`vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)`:`vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)`:o?`vec4(instanceModelNormal * _normal.xyz, 1.0)`:`_normal`}).xyz);
    }
    `)),u&&d.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${a?o?`return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);`:`return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);`:o?`return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);`:`return _tangent;`}
    }`)}var U=n();function W(e,t){e.varyings.add(`colorMixMode`,`int`),e.varyings.add(`opacityMixMode`,`int`),e.vertex.uniforms.add(new y(`symbolColorMixMode`,e=>d[e.colorMixMode])),t.hasSymbolColors?(e.vertex.include(x),e.vertex.include(C),e.vertex.include(S),e.attributes.add(`symbolColor`,`vec4`),e.vertex.code.add(s`
    MaskedColor applySymbolColor(MaskedColor color) {
      return multiplyMaskedColors(color, createMaskedFromUInt8NaNColor(${`symbolColor`}));
    }
  `)):e.vertex.code.add(s`MaskedColor applySymbolColor(MaskedColor color) {
return color;
}`),e.vertex.code.add(s`
    void forwardColorMixMode(bvec4 mask) {
      colorMixMode = mask.r ? ${s.int(d.ignore)} : symbolColorMixMode;
      opacityMixMode = mask.a ? ${s.int(d.ignore)} : symbolColorMixMode;
    }
  `)}function G(e,t){K(e,t,new l(`textureAlphaCutoff`,e=>e.textureAlphaCutoff))}function K(e,t,n){let r=e.fragment,i=t.alphaDiscardMode,a=i===0;i!==2&&i!==3||r.uniforms.add(n),r.code.add(s`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${i===1?`color.a = 1.0;`:`if (color.a < ${a?s.float(_):`textureAlphaCutoff`}) {\n              discard;\n             } ${c(i===2,`else { color.a = 1.0; }`)}`}
    }
  `)}function q(e,t){let{vertex:n,fragment:r,varyings:i}=e,{hasColorTexture:a,alphaDiscardMode:l}=t,d=a&&l!==1,{output:f,normalType:p,hasColorTextureTransform:m}=t;switch(f){case 1:E(n,t),e.include(N),r.include(h,t),e.include(o,t),d&&r.uniforms.add(new u(`tex`,e=>e.texture)),n.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(G,t),r.main.add(s`
        discardBySlice(vpos);
        ${c(d,s`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}`);break;case 3:case 4:case 5:case 6:case 9:E(n,t),e.include(N),e.include(o,t),e.include(w,t),e.include(P,t),r.include(h,t),e.include(b,t),A(e),i.add(`depth`,`float`,{invariant:!0}),d&&r.uniforms.add(new u(`tex`,e=>e.texture)),n.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(G,t),r.main.add(s`
        discardBySlice(vpos);
        ${c(d,s`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
               discardOrAdjustAlpha(texColor);`)}
        ${f===9?s`outputObjectAndLayerIdColor();`:s`outputDepth(depth);`}`);break;case 2:{E(n,t),e.include(N),e.include(F,t),e.include(I,t),e.include(o,t),e.include(w,t),d&&r.uniforms.add(new u(`tex`,e=>e.texture)),p===2&&i.add(`vPositionView`,`vec3`,{invariant:!0});let a=p===0||p===1;n.main.add(s`
        vpos = getVertexInLocalOriginSpace();
        ${a?s`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:s`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),r.include(h,t),e.include(G,t),r.main.add(s`
        discardBySlice(vpos);
        ${c(d,s`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}

        ${p===2?s`vec3 normal = screenDerivativeNormal(vPositionView);`:s`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case 8:E(n,t),e.include(N),e.include(o,t),e.include(w,t),d&&r.uniforms.add(new u(`tex`,e=>e.texture)),n.main.add(s`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),r.include(h,t),e.include(G,t),e.include(g,t),r.main.add(s`
        discardBySlice(vpos);
        ${c(d,s`vec4 texColor = texture(tex, ${m?`colorUV`:`vuv0`});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}export{B as a,I as c,H as i,L as l,G as n,z as o,W as r,R as s,q as t,F as u};