import{M as e}from"./decorators-CLILM215.js";import{r as t}from"./tslib.es6-CQRs8sXx.js";import{W as n}from"./BufferView-BMkQTBVW.js";import{r}from"./Util-CMYCH__d.js";import{n as i,t as a}from"./glsl-BlSepfbN.js";import{t as o}from"./Uniform-DlntK5q6.js";import{t as s}from"./ShaderBuilder-CAOj4ema.js";import{t as c}from"./Float4PassUniform-CGmatYpU.js";import{t as l}from"./FloatBindUniform-CQkkuCDc.js";import{a as u,c as d,i as f,l as p}from"./AlphaCutoff-C0WvOihj.js";import{n as m}from"./InterleavedLayout-Dwt5sNDI.js";import{d as h}from"./FloatsPassUniform-CByThRMM.js";import{t as g}from"./DefaultTechniqueConfiguration-xPoqNG2f.js";import{t as ee}from"./ObjectAndLayerIdColor.glsl-C0bAoJlY.js";import{t as te}from"./VisualVariables.glsl-BSK9QtRf.js";import{n as _,t as v}from"./View.glsl-CC1Nd4YT.js";import{t as y}from"./TerrainDepthTest.glsl-OufBd8JI.js";import{t as b}from"./OutputColorHighlightOLID.glsl-DsZ9QL0T.js";import{t as x}from"./Transform.glsl-Czk5kVD-.js";import{t as S}from"./VertexColor.glsl-Bbkes2XF.js";import{t as C}from"./TextureBackedBufferLayout-41l3dDOQ.js";var w=class extends g{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasOccludees=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.emissionSource=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.occlusionPass=!1,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}};function T(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}t([p({count:3})],w.prototype,`cullFace`,void 0),t([p({count:6})],w.prototype,`style`,void 0),t([p()],w.prototype,`hasVertexColors`,void 0),t([p()],w.prototype,`polygonOffset`,void 0),t([p()],w.prototype,`hasOccludees`,void 0),t([p()],w.prototype,`enableOffset`,void 0),t([p()],w.prototype,`terrainDepthTest`,void 0),t([p()],w.prototype,`cullAboveTerrain`,void 0),t([p()],w.prototype,`hasVVColor`,void 0),t([p()],w.prototype,`draped`,void 0);function E(e){let t=m().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?t.f32(`colorFeatureAttribute`):e.hasVertexColors&&t.vec4u8(`color`,{glNormalized:!0}):t.u32(`textureElementIndex`,{integer:!0}),h()&&t.vec4u8(`olidColor`),t.freeze()}var D=[{type:`mat3f32`,name:`boundingRect`}],O=new C(D),k=new C([...D,{type:`vec4unorm8`,name:`color`}]),A=new C([...D,{type:`f32`,name:`colorFeatureAttribute`}]);function ne(e){return T(e,O,k,A)}function re(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return i`float`;case 2:return i`vec2`;case 3:return i`vec3`;case 4:return i`vec4`;case 9:return i`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return i`int`;case 2:return i`ivec2`;case 3:return i`ivec3`;case 4:return i`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return i`uint`;case 2:return i`uvec2`;case 3:return i`uvec3`;case 4:return i`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}var j=new l(`const_NaN`,()=>NaN,{supportsNaN:!0}),M=class extends d{constructor(e){super(),this.supportNaN=e}};function N(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(j),e.code.add(i`bool bitsEncodeFloat16NaN(highp uint bits) {
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
    }`)}function P(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(j),e.code.add(i`bool bitsEncodeFloat32NaN(highp uint bits) {
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
    }`)}function F(e){let{fieldType:t}=e;return`${(0,I[t])(L(e))}`}t([p()],M.prototype,`supportNaN`,void 0);var I={u8:e=>i`${e[0]}`,unorm8:e=>i`float(${e[0]})/255.0`,vec4unorm8:e=>i`vec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})/255.0`,f16:n?e=>i`unpackHalf2x8(${`${e[0]}, ${e[1]}`})`:e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,f32:e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,vec4u8:e=>i`uvec4(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`,mat3f32:e=>i`mat3(${e.reduce((e,t)=>{let n=e.at(-1);return n==null||n.length>=4?e.push([t]):n.push(t),e},[]).map(e=>i`unpackFloat4x8(${`${e[0]}, ${e[1]}, ${e[2]}, ${e[3]}`})`).join(`,
`)})`};function L(e){let{startTexel:t,byteOffset:n,texelByteStride:r,byteSize:a}=e,o=t,s=n%r,c=[];for(let e=0;e<a;++e){let e=i`texel${i.int(o)}.${R[s]}`;c.push(e),++s,s>=r&&(s=0,++o)}return c}var R=[`x`,`y`,`z`,`w`],z=new M(!0),B=new M(!1),V=class{constructor(t){this.moduleId=e(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:n,bufferUniform:r,layout:i}=t,a=t.fieldFilter??(()=>!0),o=t.enableNaNSupport?z:B;this.TextureBackedBufferModule=(e,t)=>H(this.namespace,e,t,n,r,i,a,o),this.getTextureAttribute=U(this.namespace)}};function H(e,t,n,a,o,s,c,l){let{vertex:u}=t;u.include(P,l),u.include(N,l);let d=`${e}tbbStride`,f=`${e}TextureBackedBufferItemData`,p=`${e}fetchTextureBackedBufferItemData`,m=W(e);for(let e of[d,f,p,m])r(e.length<1024,`Identifiers do not have a valid length`);u.constants.add(d,`uint`,s.texelStride),u.uniforms.add(o);let h=[];for(let e of s.fields.values())c(e.name,n)&&h.push(e);if(h.length===0)return;let g=[];for(let e=0;e<s.texelStride;++e)g.push(!1);for(let e of h)for(let t=0;t<e.numTexels;++t)g[e.startTexel+t]=!0;u.code.add(i`
  struct ${f} {`);for(let e of h)u.code.add(i`\t${re(e)} ${e.name};`);u.code.add(i`};`),u.code.add(i`
  ${f} ${p}(highp uint itemIndex) {
    ${f} itemData;
    highp uint index = itemIndex * ${d};
    highp uint rowWidth = uint(textureSize(${o.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);for(let e=0;e<g.length;++e)!1!==g[e]&&u.code.add(i`lowp uvec4 texel${i.int(e)} = texelFetch(${o.name}, ivec2(coordX + ${i.int(e)}, coordY), 0);`);for(let e of h)u.code.add(i`itemData.${e.name} = ${F(e)};`);u.code.add(i`return itemData;
}`),u.code.add(i`${f} ${m};`),u.main.add(i`${m} = ${p}(${a});`)}function U(e){let t=W(e);return e=>i`${t}.${e}`}function W(e){return`${e}ItemData`}var G=new class extends o{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}}(`componentTextureBuffer`,e=>e.textureBuffer),K=new V({layout:O,itemIndexAttribute:`textureElementIndex`,bufferUniform:G}),q=new V({layout:k,itemIndexAttribute:`textureElementIndex`,bufferUniform:G}),J=new V({layout:A,itemIndexAttribute:`textureElementIndex`,bufferUniform:G,enableNaNSupport:!0});function Y(e){return T(e,K,q,J)}var X=.70710678118,Z=X,ie=.08715574274,Q=10,ae=1;function $(e){let t=Y(e),n=t!=null,r=new s;n&&r.include(t.TextureBackedBufferModule,e);let{vertex:o,fragment:d,attributes:p,varyings:m}=r,h=e.output===8;_(o,e),r.include(x);let g=``;n?(e.hasVVColor&&(g=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(r.varyings.add(`vColor`,`vec4`),r.vertex.code.add(i`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):r.vertex.code.add(i`void forwardVertexColor() {}`),p.add(`textureElementIndex`,`uint`)):(r.include(S,e),e.hasVVColor&&(p.add(`colorFeatureAttribute`,`float`),g=`colorFeatureAttribute`)),r.include(te,e),r.include(ee,e),r.fragment.include(u,e),r.include(b,e),r.include(y,e),e.draped&&o.uniforms.add(new l(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),p.add(`position`,`vec3`),p.add(`uvMapSpace`,`vec4`),e.hasVertexColors||m.add(`vColor`,`vec4`),m.add(`vpos`,`vec3`,{invariant:!0}),m.add(`vuv`,`vec2`),o.uniforms.add(new c(`uColor`,e=>e.color));let C=e.style===3||e.style===4||e.style===5;return C&&o.code.add(i`
      const mat2 rotate45 = mat2(${i.float(X)}, ${i.float(-Z)},
                                 ${i.float(Z)}, ${i.float(X)});
    `),!e.draped&&n&&(v(o,e),o.uniforms.add(new l(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),o.code.add(i`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
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
      vec2 uv = uvMapSpace.xy ${a(C,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${a(C,` * rotate45`)};

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
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?i`vColor = uColor * interpolateVVColor(${g});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),d.include(f),e.draped&&d.uniforms.add(new l(`texelSize`,e=>1/e.camera.pixelRatio)),h||(d.code.add(i`
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
    `),e.draped||d.code.add(i`const int maxSamples = 5;
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
}`)),d.main.add(i`
    discardBySlice(vpos);
    discardByTerrainDepth();
    vec4 color = vColor;
    ${a(!h,i`color.a *= ${oe(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),r}function oe(e){function t(t){return e.draped?i`coverage(vuv.${t}, texelSize)`:i`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return i`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var se=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:`Module`}));export{w as a,E as i,$ as n,ne as r,se as t};