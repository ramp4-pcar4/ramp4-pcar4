import{o as e}from"./vec2f64-D8dbcrKD.js";import{c as t}from"./Emissions.glsl-C1fRgyHC.js";import{n,t as r}from"./glsl-EDZkDhgF.js";import{t as i}from"./Float3PassUniform-BEhcqx4m.js";import{t as a}from"./FloatPassUniform-gHcGW-mi.js";import{t as o}from"./ShaderBuilder-aUMFb5cS.js";import{t as s}from"./Float2PassUniform-oNPLRE_S.js";import{t as c}from"./Float4PassUniform-R_rVPKlL.js";import{a as l,i as u,n as d}from"./AlphaCutoff-lGKpUdxr.js";import{n as f,r as p,t as m}from"./FloatsPassUniform-VyaOZV1-.js";import{t as h}from"./ObjectAndLayerIdColor.glsl-C3sEfoJy.js";import{n as g,r as _,t as v}from"./View.glsl-YsNDLcX0.js";import{t as y}from"./TerrainDepthTest.glsl-DZ7tKbZj.js";import{t as b}from"./OutputColorHighlightOLID.glsl-vs7-ar26.js";import{n as x,t as S}from"./Transform.glsl-B8LYsJdc.js";import{a as C,i as w,n as T,o as E,r as D,s as O,t as k}from"./SnowCover.glsl-C23wZ4DV.js";import{s as A,t as j}from"./ReadShadowMap.glsl-B3ui5m-b.js";import{t as M}from"./Normals.glsl-BBG8Tr27.js";import{t as N}from"./NormalUtils.glsl-CWSzXXL2.js";var P=8;function F(e,t){let{attributes:o,vertex:l}=e;o.add(`position`,`vec3`),o.add(`profileVertexAndNormal`,`vec4`),o.add(`profileAuxData`,`vec3`),o.add(`profileRight`,`vec2`),o.add(`profileUp`,`vec2`),l.code.add(n`bool isCapVertex() {
return profileAuxData.z == 1.0;
}`),l.uniforms.add(new s(`size`,e=>e.size));let{hasVVSize:u,hasVVColor:d,hasVVOpacity:p}=t;u?(o.add(`sizeFeatureAttribute`,`float`),l.uniforms.add(new i(`vvSizeMinSize`,e=>e.vvSize.minSize),new i(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new i(`vvSizeOffset`,e=>e.vvSize.offset),new i(`vvSizeFactor`,e=>e.vvSize.factor),new i(`vvSizeFallback`,e=>e.vvSize.fallback)),l.code.add(n`vec2 getSize() {
float value = sizeFeatureAttribute;
if (isnan(value)) {
return vvSizeFallback.xz;
}
return size * clamp(vvSizeOffset + value * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).xz;
}`)):l.code.add(n`vec2 getSize(){
return size;
}`),p?(o.add(`opacityFeatureAttribute`,`float`),l.constants.add(`vvOpacityNumber`,`int`,P),l.uniforms.add(new m(`vvOpacityValues`,P,e=>e.vvOpacity.values),new m(`vvOpacityOpacities`,P,e=>e.vvOpacity.opacityValues),new a(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),l.code.add(n`
    vec4 applyOpacity(vec4 color) {
      // if we encounter NaN in the color it means the color is in the fallback case where the symbol color
      // is not defined and there is no valid color visual variable override. In this case just return a fully
      // transparent color
      if (isnan(color.r)) {
        return vec4(0);
      }

      float value = opacityFeatureAttribute;

      if (isnan(value)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${r(d,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      if (value <= vvOpacityValues[0]) {
        return vec4(color.rgb, vvOpacityOpacities[0]);
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return vec4(color.rgb, mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f));
        }
      }

      return vec4( color.rgb, vvOpacityOpacities[vvOpacityNumber - 1]);
    }
    `)):l.code.add(n`vec4 applyOpacity(vec4 color){
return color;
}`),d?(o.add(`colorFeatureAttribute`,`float`),l.constants.add(`vvColorNumber`,`int`,8),l.uniforms.add(new m(`vvColorValues`,8,e=>e.vvColor.values),new f(`vvColorColors`,8,e=>e.vvColor.colors),new c(`vvColorFallback`,e=>e.vvColor.fallback)),l.code.add(n`vec4 getColor() {
float value = colorFeatureAttribute;
if (isnan(value)) {
return applyOpacity(vvColorFallback);
}
if (value <= vvColorValues[0]) {
return applyOpacity(vvColorColors[0]);
}
for (int i = 1; i < vvColorNumber; ++i) {
if (vvColorValues[i] >= value) {
float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
return applyOpacity(mix(vvColorColors[i-1], vvColorColors[i], f));
}
}
return applyOpacity(vvColorColors[vvColorNumber - 1]);
}`)):l.code.add(n`vec4 getColor(){
return applyOpacity(vec4(1, 1, 1, 1));
}`),l.code.add(n`vec3 decompressAxis(vec2 axis) {
float z = 1.0 - abs(axis.x) - abs(axis.y);
return normalize(vec3(axis + sign(axis) * min(z, 0.0), z));
}
vec3 calculateVPos() {
vec2 size = getSize();
vec3 origin = position;
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec2 profileVertex = profileVertexAndNormal.xy * size;`),l.code.add(n`if(isCapVertex()) {
float positionOffsetAlongProfilePlaneNormal = profileAuxData.x * size[0];
vec3 forward = cross(up, right);
vec3 offset = right * profileVertex.x + up * profileVertex.y + forward * positionOffsetAlongProfilePlaneNormal;
return origin + offset;
}
vec2 rotationRight = vec2(profileAuxData.x, profileAuxData.y);
float maxDistance = length(rotationRight);`),l.code.add(n`rotationRight = maxDistance > 0.0 ? normalize(rotationRight) : vec2(0, 0);
float rx = dot(profileVertex, rotationRight);
if (abs(rx) > maxDistance) {
vec2 rotationUp = vec2(-rotationRight.y, rotationRight.x);
float ry = dot(profileVertex, rotationUp);
profileVertex = rotationRight * maxDistance * sign(rx) + rotationUp * ry;
}
vec3 offset = right * profileVertex.x + up * profileVertex.y;
return origin + offset;
}`),l.code.add(n`vec3 localNormal() {
vec3 right = decompressAxis(profileRight);
vec3 up = decompressAxis(profileUp);
vec3 normal = right * profileVertexAndNormal.z + up * profileVertexAndNormal.w;
if(isCapVertex()) {
vec3 forward = cross(up, right);
normal += forward * profileAuxData.y;
}
return normal;
}`)}var I=class extends p{constructor(){super(...arguments),this.size=e(1,1)}};function L(e){let s=new o,{vertex:c,fragment:f,varyings:p}=s;g(c,e),p.add(`vpos`,`vec3`,{invariant:!0}),s.include(F,e);let{output:m,spherical:P,pbrMode:I,snowCover:L}=e;switch((t(m)||m===9)&&(s.include(S),s.include(j,e),s.include(h,e),s.include(y,e),p.add(`vnormal`,`vec3`),p.add(`vcolor`,`vec4`),c.main.add(n`vpos = calculateVPos();
vnormal = normalize(localNormal());
forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);
forwardObjectAndLayerIdColor();
vcolor = getColor();
forwardLinearDepthToReadShadowMap();`)),m){case 0:s.include(T,e),f.include(C,e),f.include(E,e),s.include(M,e),f.include(l,e),s.include(b,e),v(f,e),w(f),D(f),f.uniforms.add(c.uniforms.get(`localOrigin`),new i(`ambient`,e=>e.ambient),new i(`diffuse`,e=>e.diffuse),new a(`opacity`,e=>e.opacity)),f.include(u),f.include(k,e),A(f),f.main.add(n`
        discardBySlice(vpos);
        discardByTerrainDepth();

        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        shadingParams.normalView = vnormal;
        vec3 normal = shadingNormal(shadingParams);
        float ssao = evaluateAmbientOcclusionInverse();

        vec3 posWorld = vpos + localOrigin;
        vec3 normalGround = ${P?`normalize(posWorld);`:`vec3(0.0, 0.0, 1.0);`}

        vec3 albedo = vcolor.rgb * max(ambient, diffuse); // combine the old material parameters into a single one
        float combinedOpacity = vcolor.a * opacity;

        ${r(L,n`float snow = getSnow(normal, normalGround);
                 albedo = mix(albedo, vec3(1), snow);
                 ssao = mix(ssao, 1.0, snow);`)}

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        float shadow = readShadow(additionalAmbientScale, vpos);

        ${r(I===2,`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];\n           ${r(L,`mrr = applySnowToMRR(mrr, snow);`)}`)}

        vec3 shadedColor = ${I===2?`evaluateSceneLightingPBR(normal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, additionalAmbientIrradiance);`:`evaluateSceneLighting(normal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        vec4 finalColor = vec4(shadedColor, combinedOpacity);
        outputColorHighlightOLID(applySlice(finalColor, vpos), albedo ${r(L,`, snow`)});`);break;case 1:s.include(S),c.main.add(n`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(l,e),f.main.add(n`discardBySlice(vpos);`);break;case 3:case 4:case 5:case 6:s.include(S),x(s),p.add(`depth`,`float`),c.main.add(n`vpos = calculateVPos();
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);`),s.fragment.include(l,e),s.include(O,e),f.main.add(n`discardBySlice(vpos);
outputDepth(depth);`);break;case 9:s.fragment.include(l,e),f.main.add(n`discardBySlice(vpos);
outputObjectAndLayerIdColor();`);break;case 2:s.include(S),s.include(N,e),_(c),p.add(`vnormal`,`vec3`),c.main.add(n`vpos = calculateVPos();
vnormal = normalize((viewNormal * vec4(localNormal(), 1.0)).xyz);
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(l,e),f.main.add(n`discardBySlice(vpos);
vec3 normal = normalize(vnormal);
if (gl_FrontFacing == false) normal = -normal;
fragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);`);break;case 8:s.include(S),s.include(N,e),p.add(`vnormal`,`vec3`),c.main.add(n`vpos = calculateVPos();
gl_Position = transformPosition(proj, view, vpos);`),s.fragment.include(l,e),s.include(d,e),f.main.add(n`discardBySlice(vpos);
calculateOcclusionAndOutputHighlight();`)}return s}var R=Object.freeze(Object.defineProperty({__proto__:null,build:L},Symbol.toStringTag,{value:`Module`}));export{R as n,I as r,L as t};