import{M as e}from"./decorators-CYnpsqxn.js";import{r as t}from"./tslib.es6-CVTII-xV.js";import{G as n,X as r}from"./BufferView-C2897Cpl.js";import{n as i,t as a}from"./glsl-C3kp6zqV.js";import{t as o}from"./Uniform-CUdn9KGj.js";import{t as s}from"./ShaderBuilder-BteJty_U.js";import{At as c,B as l,M as u,N as d,n as f,nn as p,q as m,rn as h,t as g,tt as _,wt as v,z as y}from"./VertexColor.glsl-B6NvE-zG.js";import{a as ee,c as b,i as x,l as S}from"./AlphaCutoff-Bp9xYXyU.js";import{a as C}from"./FloatArray-mQgxOGXs.js";import{t as w}from"./TextureBackedBufferLayout-B_nboQy3.js";var T=class extends v{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasOccludees=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}};function E(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}t([S({count:3})],T.prototype,`cullFace`,void 0),t([S({count:6})],T.prototype,`style`,void 0),t([S()],T.prototype,`hasVertexColors`,void 0),t([S()],T.prototype,`polygonOffset`,void 0),t([S()],T.prototype,`hasOccludees`,void 0),t([S()],T.prototype,`enableOffset`,void 0),t([S()],T.prototype,`terrainDepthTest`,void 0),t([S()],T.prototype,`cullAboveTerrain`,void 0),t([S()],T.prototype,`hasVVColor`,void 0),t([S()],T.prototype,`draped`,void 0);function te(e){let t=C().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?t.f32(`colorFeatureAttribute`):e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}):t.u32(`textureElementIndex`,{integer:!0}),c()&&t.vec4u8(`olidColor`),t.freeze()}var D=[{type:`mat3f32`,name:`boundingRect`}],O=new w(D),k=new w([...D,{type:`vec4unorm8`,name:`color`}]),A=new w([...D,{type:`f32`,name:`colorFeatureAttribute`}]);function j(e){return E(e,O,k,A)}function M(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return i`float`;case 2:return i`vec2`;case 3:return i`vec3`;case 4:return i`vec4`;case 9:return i`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return i`int`;case 2:return i`ivec2`;case 3:return i`ivec3`;case 4:return i`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return i`uint`;case 2:return i`uvec2`;case 3:return i`uvec3`;case 4:return i`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}var N=new p(`const_NaN`,()=>NaN,{supportsNaN:!0}),P=class extends b{constructor(e){super(),this.supportNaN=e}};function ne(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(N),e.code.add(i`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(i`
    mediump float unpackHalf2x8(highp uint bits0, highp uint bits1) {
      highp uint halfBits = (bits1 << 8u) | bits0;
      ${a(n,i`
        if (bitsEncodeFloat16NaN(halfBits)) {
          return const_NaN;
        }`)}
      return unpackHalf2x16(halfBits).x;
    }`)}function F(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(N),e.code.add(i`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(i`
    highp float unpackFloat4x8(highp uint bits0, highp uint bits1, highp uint bits2, highp uint bits3) {
      highp uint floatBits = (bits3 << 24u) |(bits2 << 16u) | (bits1 << 8u) | bits0;
      ${a(n,i`
        if (bitsEncodeFloat32NaN(floatBits)) {
          return const_NaN;
        }`)}
      return uintBitsToFloat(floatBits);
    }`)}function I(e){let{fieldType:t}=e;return`${(0,L[t])(R(e))}`}t([S()],P.prototype,`supportNaN`,void 0);var L={u8:e=>i`${e[0]}`,unorm8:e=>i`float(${e[0]})/255.0`,vec4unorm8:e=>i`vec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})/255.0`,f16:r?e=>i`unpackHalf2x8(${`${e[0]}, ${e[1]}`})`:e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,f32:e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,vec4u8:e=>i`uvec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,mat3f32:e=>i`mat3(${e.reduce((e,t)=>{let n=e.at(-1);return n==null||n.length>=4?e.push([t]):n.push(t),e},[]).map(e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`).join(`,
`)})`};function R(e){let{startTexel:t,byteOffset:n,texelByteStride:r,byteSize:a}=e,o=t,s=n%r,c=[];for(let e=0;e<a;++e){let e=i`texel${i.int(o)}.${z[s]}`;c.push(e),++s,s>=r&&(s=0,++o)}return c}var z=[`x`,`y`,`z`,`w`],B=new P(!0),V=new P(!1),H=class{constructor(t){this.moduleId=e(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:n,bufferUniform:r,layout:i}=t,a=t.fieldFilter??(()=>!0),o=t.enableNaNSupport?B:V;this.TextureBackedBufferModule=(e,t)=>U(this.namespace,e,t,n,r,i,a,o),this.getTextureAttribute=W(this.namespace)}};function U(e,t,r,a,o,s,c,l){let{vertex:u}=t;u.include(F,l),u.include(ne,l);let d=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,p=`${e}fetchTextureBackedBufferItemData`,m=G(e);for(let e of[d,f,p,m])n(e.length<1024,`Identifiers do not have a valid length`);u.constants.add(d,`uint`,s.texelStride),u.uniforms.add(o);let h=[];for(let e of s.fields.values())c(e.name,r)&&h.push(e);if(h.length===0)return;let g=[];for(let e=0;e<s.texelStride;++e)g.push(!1);for(let e of h)for(let t=0;t<e.numTexels;++t)g[e.startTexel+t]=!0;u.code.add(i`
  struct ${f} {`);for(let e of h)u.code.add(i`\t${M(e)} ${e.name};`);u.code.add(i`};`),u.code.add(i`
  ${f} ${p}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${d};
    highp uint rowWidth = uint(textureSize(${o.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);for(let e=0;e<g.length;++e)!1!==g[e]&&u.code.add(i`lowp uvec4 texel${i.int(e)} = texelFetch(${o.name}, ivec2(coordX + ${i.int(e)}, coordY), 0);`);for(let e of h)u.code.add(i`itemData.${e.name} = ${I(e)};`);u.code.add(i`return itemData;
}`),u.code.add(i`${f} ${m};`),u.main.add(i`${m} = ${p}(${a});`)}function W(e){let t=G(e);return e=>i`${t}.${e}`}function G(e){return`${e}ItemData`}var K=new class extends o{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}}(`componentTextureBuffer`,e=>e.textureBuffer),q=new H({layout:O,itemIndexAttribute:`textureElementIndex`,bufferUniform:K}),J=new H({layout:k,itemIndexAttribute:`textureElementIndex`,bufferUniform:K}),Y=new H({layout:A,itemIndexAttribute:`textureElementIndex`,bufferUniform:K,enableNaNSupport:!0});function X(e){return E(e,q,J,Y)}var Z=.70710678118,re=Z,ie=.08715574274,Q=10,ae=1;function $(e){let t=X(e),n=t!=null,r=new s;n&&r.include(t.TextureBackedBufferModule,e);let{vertex:o,fragment:c,attributes:v,varyings:b}=r,S=e.output===8;l(o,e),r.include(f);let C=``;n?(e.hasVVColor&&(C=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(r.varyings.add(`vColor`,`vec4`),r.vertex.code.add(i`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):r.vertex.code.add(i`void forwardVertexColor() {}`),v.add(`textureElementIndex`,`uint`)):(r.include(g,e),e.hasVVColor&&(v.add(`colorFeatureAttribute`,`float`),C=`colorFeatureAttribute`)),r.include(m,e),r.include(_,e),r.fragment.include(ee,e),r.include(u,e),r.include(d,e),e.draped&&o.uniforms.add(new p(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),v.add(`position`,`vec3`),v.add(`uvMapSpace`,`vec4`),e.hasVertexColors||b.add(`vColor`,`vec4`),b.add(`vpos`,`vec3`,{invariant:!0}),b.add(`vuv`,`vec2`),o.uniforms.add(new h(`uColor`,e=>e.color));let w=e.style===3||e.style===4||e.style===5;return w&&o.code.add(i`
      const mat2 rotate45 = mat2(${i.float(Z)}, ${i.float(-.70710678118)},
                                 ${i.float(re)}, ${i.float(Z)});
    `),!e.draped&&n&&(y(o,e),o.uniforms.add(new p(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),o.code.add(i`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),o.code.add(i`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),o.code.add(i`
      float boundingRectDistanceToCamera() {
        vec3 center = ${t.getTextureAttribute(`boundingRect`)}[0];
        vec3 halfU = ${t.getTextureAttribute(`boundingRect`)}[1];
        vec3 halfV = ${t.getTextureAttribute(`boundingRect`)}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${i.float(ie)};

        if (abs(viewAngle) < minViewAngle) {
          // view direction is (almost) parallel to plane -> clamp it to min angle
          float normalComponent = sign(viewAngle) * minViewAngle - viewAngle;
          viewDir = normalize(viewDir + normalComponent * n);
        }

        // intersect view direction with infinite plane that contains bounding rect
        vec3 planeProjected = intersectRayPlane(viewDir, cameraPosition, n, center);

        // clip to bounds by projecting to u and v line segments individually
        vec3 uProjected = projectPointToLineSegment(center, halfU, planeProjected);
        vec3 vProjected = projectPointToLineSegment(center, halfV, planeProjected);

        // use to calculate the closest point to camera on bounding rect
        vec3 closestPoint = uProjected + vProjected - center;

        return length(closestPoint - cameraPosition);
      }
    `)),o.code.add(i`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${a(w,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${a(w,` * rotate45`)};

      ${a(!e.draped,i`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${i.float(Q)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),o.main.add(i`
    vuv = scaledUV();
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?i`vColor = uColor * interpolateVVColor(${C});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),c.include(x),e.draped&&c.uniforms.add(new p(`texelSize`,e=>1/e.camera.pixelRatio)),S||(c.code.add(i`
      const float lineWidth = ${i.float(ae)};
      const float spacing = ${i.float(Q)};
      const float spacingINV = ${i.float(1/Q)};

      float coverage(float p, float txlSize) {
        p = mod(p, spacing);

        float halfTxlSize = txlSize / 2.0;

        float start = p - halfTxlSize;
        float end = p + halfTxlSize;

        float coverage = (ceil(end * spacingINV) - floor(start * spacingINV)) * lineWidth;
        coverage -= min(lineWidth, mod(start, spacing));
        coverage -= max(lineWidth - mod(end, spacing), 0.0);

        return coverage / txlSize;
      }
    `),e.draped||c.code.add(i`const int maxSamples = 5;
float sampleAA(float p) {
vec2 dxdy = abs(vec2(dFdx(p), dFdy(p)));
float fwidth = dxdy.x + dxdy.y;
ivec2 samples = 1 + ivec2(clamp(dxdy, 0.0, float(maxSamples - 1)));
vec2 invSamples = 1.0 / vec2(samples);
float accumulator = 0.0;
for (int j = 0; j < maxSamples; j++) {
if(j >= samples.y) {
break;
}
for (int i = 0; i < maxSamples; i++) {
if(i >= samples.x) {
break;
}
vec2 step = vec2(i,j) * invSamples - 0.5;
accumulator += coverage(p + step.x * dxdy.x + step.y * dxdy.y, fwidth);
}
}
accumulator /= float(samples.x * samples.y);
return accumulator;
}`)),c.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${a(!S,i`color.a *= ${oe(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),r}function oe(e){function t(t){return e.draped?i`coverage(vuv.${t}, texelSize)`:i`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return i`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var se=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:`Module`}));export{T as a,te as i,$ as n,j as r,se as t};