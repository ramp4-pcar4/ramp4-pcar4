import{r as e}from"./mat3f64-H1VyAOlk.js";import{n as t}from"./vec2f64-D8dbcrKD.js";import{c as n,n as r,r as i}from"./Emissions.glsl-C1fRgyHC.js";import{n as a,t as o}from"./glsl-EDZkDhgF.js";import{t as s}from"./Float3PassUniform-BEhcqx4m.js";import{t as c}from"./FloatPassUniform-gHcGW-mi.js";import{t as l}from"./Texture2DDrawUniform-DswgHdDh.js";import{t as u}from"./Texture2DPassUniform-RVTT2Sjh.js";import{t as d}from"./ShaderBuilder-aUMFb5cS.js";import{n as f}from"./MaterialUtil-Fmbx5pLm.js";import{t as p}from"./Float2PassUniform-oNPLRE_S.js";import{t as m}from"./Float4PassUniform-R_rVPKlL.js";import{a as h,t as ee}from"./AlphaCutoff-lGKpUdxr.js";import{t as g}from"./Float2DrawUniform-LhTbmE_3.js";import{a as te,i as _,t as v}from"./VisualVariables.glsl-CLB2wooA.js";import{t as y}from"./Matrix3PassUniform-26xzgjv6.js";import{n as b,t as x}from"./View.glsl-YsNDLcX0.js";import{t as ne}from"./MixExternalColor.glsl-67xddAS3.js";import{t as re}from"./TerrainDepthTest.glsl-DZ7tKbZj.js";import{t as ie}from"./OutputColorHighlightOLID.glsl-vs7-ar26.js";import{r as ae}from"./VerticalOffset.glsl-BXr3ZmRy.js";import{t as oe}from"./Transform.glsl-B8LYsJdc.js";import{t as se}from"./VertexColor.glsl-DkZ0DT-i.js";import{a as S,c as C,i as w,n as T,o as E,r as D,t as O,u as k}from"./DefaultMaterialAuxiliaryPasses.glsl-B2g_FZwE.js";import{a as A,i as j,n as M,o as N,r as P,t as F}from"./SnowCover.glsl-C23wZ4DV.js";import{a as I,n as L,s as R,t as z}from"./ReadShadowMap.glsl-B3ui5m-b.js";import{t as B}from"./Normals.glsl-BBG8Tr27.js";function ce(e,t){return V(e,t)}function V(n,i){let o=n.fragment,{hasVertexTangents:s,doubleSidedMode:c,hasNormalTexture:d,textureCoordinateType:f,bindType:m,hasNormalTextureTransform:h}=i;s?(n.attributes.add(`tangent`,`vec4`),n.varyings.add(`vTangent`,`vec4`),c===2?o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(a`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(a`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),d&&f!==0&&(n.include(r,i),o.uniforms.add(m===1?new u(`normalTexture`,e=>e.textureNormal):new l(`normalTexture`,e=>e.textureNormal)),h&&(o.uniforms.add(m===1?new p(`scale`,e=>e.scale??t):new g(`scale`,e=>e.scale??t)),o.uniforms.add(new y(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??e))),o.code.add(a`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),h&&o.code.add(a`mat3 normalRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(a`return tangentSpace * rawNormal;
}`))}function H(t,n){n.hasColorTextureTransform?(t.varyings.add(`colorUV`,`vec2`),t.vertex.uniforms.add(new y(`colorTextureTransformMatrix`,t=>t.colorTextureTransformMatrix??e)).code.add(a`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(a`void forwardColorUV(){}`)}function U(t,n){n.hasNormalTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`normalUV`,`vec2`),t.vertex.uniforms.add(new y(`normalTextureTransformMatrix`,t=>t.normalTextureTransformMatrix??e)).code.add(a`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(a`void forwardNormalUV(){}`)}function W(t,n){n.hasEmissionTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`emissiveUV`,`vec2`),t.vertex.uniforms.add(new y(`emissiveTextureTransformMatrix`,t=>t.emissiveTextureTransformMatrix??e)).code.add(a`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(a`void forwardEmissiveUV(){}`)}function G(t,n){n.hasOcclusionTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`occlusionUV`,`vec2`),t.vertex.uniforms.add(new y(`occlusionTextureTransformMatrix`,t=>t.occlusionTextureTransformMatrix??e)).code.add(a`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(a`void forwardOcclusionUV(){}`)}function le(t,n){n.hasMetallicRoughnessTextureTransform&&n.textureCoordinateType!==0?(t.varyings.add(`metallicRoughnessUV`,`vec2`),t.vertex.uniforms.add(new y(`metallicRoughnessTextureTransformMatrix`,t=>t.metallicRoughnessTextureTransformMatrix??e)).code.add(a`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(a`void forwardMetallicRoughnessUV(){}`)}function K(e){let t=new d,{attributes:r,vertex:l,fragment:p,varyings:g}=t,{output:y,normalType:V,offsetBackfaces:K,spherical:q,snowCover:J,pbrMode:Y,textureAlphaPremultiplied:ue,instancedDoublePrecision:de,hasVertexColors:X,hasVertexTangents:Z,hasColorTexture:Q,hasNormalTexture:fe,hasNormalTextureTransform:pe,hasColorTextureTransform:me}=e;if(b(l,e),r.add(`position`,`vec3`),g.add(`vpos`,`vec3`,{invariant:!0}),t.include(v,e),t.include(w,e),t.include(ae,e),t.include(H,e),!n(y))return t.include(O,e),t;t.include(U,e),t.include(W,e),t.include(G,e),t.include(le,e),x(l,e),t.include(k,e),t.include(oe);let $=V===0||V===1;return $&&K&&t.include(E),t.include(ce,e),t.include(C,e),t.include(S,e),g.add(`vPositionLocal`,`vec3`),t.include(i,e),t.include(D,e),t.include(se,e),l.uniforms.add(new m(`externalColor`,e=>e.externalColor,{supportsNaN:!0})),g.add(`vcolorExt`,`vec4`),t.include(re,e),l.include(te),l.include(_),t.include(de?L:z,e),l.main.add(a`
    forwardVertexColor();

    MaskedColor maskedColor =
      applySymbolColor(applyVVColor(applyInstanceColor(createMaskedFromNaNColor(externalColor))));

    vcolorExt = maskedColor.color;
    forwardColorMixMode(maskedColor.mask);

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${o($,`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`)}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${o(Z,`vTangent = dpTransformVertexTangent(tangent);`)}
    gl_Position = transformPosition(proj, view, vpos);
    ${o($&&K,`gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);`)}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (opacityMixMode != ${a.int(f.ignore)} && vcolorExt.a < ${a.float(ee)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
    forwardLinearDepthToReadShadowMap();
  `),p.include(A,e),p.include(N,e),t.include(T,e),p.include(h,e),t.include(ie,e),x(p,e),p.uniforms.add(l.uniforms.get(`localOrigin`),new s(`ambient`,e=>e.ambient),new s(`diffuse`,e=>e.diffuse),new c(`opacity`,e=>e.opacity),new c(`layerOpacity`,e=>e.layerOpacity)),Q&&p.uniforms.add(new u(`tex`,e=>e.texture)),t.include(M,e),p.include(I,e),p.include(ne),t.include(B,e),p.include(F,e),j(p),P(p),R(p),p.main.add(a`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${Q?a`
            vec4 texColor = texture(tex, ${me?`colorUV`:`vuv0`});
            ${o(ue,`texColor.rgb /= texColor.a;`)}
            discardOrAdjustAlpha(texColor);`:a`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${V===2?a`vec3 normal = screenDerivativeNormal(vPositionLocal);`:a`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

    float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
    float shadow = readShadow(additionalAmbientScale, vpos);

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${o(X,`vColor.rgb *`)} matColor, texColor.rgb, vcolorExt.rgb, colorMixMode);
    float opacity_ = layerOpacity * mixExternalOpacity(${o(X,`vColor.a * `)} opacity, texColor.a, vcolorExt.a, opacityMixMode);

    ${fe?`mat3 tangentSpace = computeTangentSpace(${Z?`normal`:`normal, vpos, vuv0`});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${pe?`normalUV`:`vuv0`});`:`vec3 shadingNormal = normal;`}
    vec3 normalGround = ${q?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

    ${o(J,a`
          float snow = getSnow(normal, normalGround);
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${Y===1||Y===2?a`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${o(J,`mrr = applySnowToMRR(mrr, snow);`)}
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:a`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${o(J,`, snow`)});
  `),t}var q=Object.freeze(Object.defineProperty({__proto__:null,build:K},Symbol.toStringTag,{value:`Module`}));export{q as n,K as t};