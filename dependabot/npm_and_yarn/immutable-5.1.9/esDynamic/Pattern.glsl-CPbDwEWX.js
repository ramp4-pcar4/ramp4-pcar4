import{r as e}from"./tslib.es6-CVTII-xV.js";import{Bt as t,E as n,H as r,L as i,N as a,T as o,W as s,g as c,j as l,t as u,w as d}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{d as f,f as p,o as m}from"./oitResolution.glsl-GKlYUQFU.js";import{t as h}from"./ShaderBuilder-CSrAKPgp.js";import{n as g}from"./InterleavedLayout-B84f2gUG.js";import{n as _,t as v}from"./VertexColor.glsl-Cb1nwMPz.js";import{t as y}from"./TextureBackedBufferLayout-4TYum013.js";import{n as b,t as x}from"./Texture2DUintDrawUniform-CrcEu4_D.js";var S=class extends u{constructor(){super(...arguments),this.cullFace=0,this.style=0,this.emissionSource=0,this.hasVertexColors=!1,this.hasOccludees=!1,this.hasVVColor=!1,this.draped=!1,this.textureCoordinateType=0,this.discardInvisibleFragments=!0,this.writeDepth=!0,this.hasVVInstancing=!1,this.hasVVSize=!1,this.hasVVOpacity=!1,this.overlayEnabled=!1,this.snowCover=!1}};function C(e,t,n,r){return e.draped?null:e.hasVVColor?r:e.hasVertexColors?n:t}e([m({count:3})],S.prototype,`cullFace`,void 0),e([m({count:6})],S.prototype,`style`,void 0),e([m({count:8})],S.prototype,`emissionSource`,void 0),e([m()],S.prototype,`hasVertexColors`,void 0),e([m()],S.prototype,`hasOccludees`,void 0),e([m()],S.prototype,`hasVVColor`,void 0),e([m()],S.prototype,`draped`,void 0);function w(e){let n=g().vec3f(`position`).vec4f(`uvMapSpace`);return e.draped?e.hasVVColor?n.f32(`colorFeatureAttribute`):e.hasVertexColors&&n.vec4u8(`color`,{glNormalized:!0}):n.u32(`textureElementIndex`,{integer:!0}),t()&&n.vec4u8(`olidColor`),n.freeze()}var T=[{type:`mat3f32`,name:`boundingRect`}],E=new y(T),D=new y([...T,{type:`vec4unorm8`,name:`color`}]),O=new y([...T,{type:`f32`,name:`colorFeatureAttribute`}]);function k(e){return C(e,E,D,O)}var A=new x(`componentTextureBuffer`,e=>e.textureBuffer),j=new b({layout:E,itemIndexAttribute:`textureElementIndex`,bufferUniform:A}),M=new b({layout:D,itemIndexAttribute:`textureElementIndex`,bufferUniform:A}),N=new b({layout:O,itemIndexAttribute:`textureElementIndex`,bufferUniform:A,enableNaNSupport:!0});function P(e){return C(e,j,M,N)}var F=.70710678118,I=F,L=.08715574274,R=10,z=1;function B(e){let t=P(e),u=t!=null,m=new h;u&&m.include(t.TextureBackedBufferModule,e);let{vertex:g,fragment:y,attributes:b,varyings:x}=m,S=e.output===10;n(g,e),m.include(_);let C=``;u?(e.hasVVColor&&(C=t.getTextureAttribute(`colorFeatureAttribute`)),e.hasVertexColors?(m.varyings.add(`vColor`,`vec4`),m.vertex.code.add(p`void forwardVertexColor() { vColor = ${t.getTextureAttribute(`color`)}; }`)):m.vertex.code.add(p`void forwardVertexColor() {}`),b.add(`textureElementIndex`,`uint`)):(m.include(v,e),e.hasVVColor&&(b.add(`colorFeatureAttribute`,`float`),C=`colorFeatureAttribute`)),b.add(`position`,`vec3`),g.inputs.add(`position`,()=>`position`),m.include(a,e),m.include(r,e),y.include(s,e),m.include(c,e),e.draped&&g.uniforms.add(new l(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)),b.add(`uvMapSpace`,`vec4`),e.hasVertexColors||x.add(`vColor`,`vec4`),x.add(`vpos`,`vec3`,{invariant:!0}),x.add(`vuv`,`vec2`),g.uniforms.add(new i(`uColor`,e=>e.color));let w=e.style===3||e.style===4||e.style===5;return w&&g.code.add(p`
      const mat2 rotate45 = mat2(${p.float(F)}, ${p.float(-.70710678118)},
                                 ${p.float(I)}, ${p.float(F)});
    `),!e.draped&&u&&(o(g,e),g.uniforms.add(new l(`worldToScreenPerDistanceRatio`,e=>1/e.camera.perScreenPixelRatio)),g.code.add(p`vec3 projectPointToLineSegment(vec3 center, vec3 halfVector, vec3 point) {
float projectedLength = dot(halfVector, point - center) / dot(halfVector, halfVector);
return center + halfVector * clamp(projectedLength, -1.0, 1.0);
}`),g.code.add(p`vec3 intersectRayPlane(vec3 rayDir, vec3 rayOrigin, vec3 planeNormal, vec3 planePoint) {
float d = dot(planeNormal, planePoint);
float t = (d - dot(planeNormal, rayOrigin)) / dot(planeNormal, rayDir);
return rayOrigin + t * rayDir;
}`),g.code.add(p`
      float boundingRectDistanceToCamera() {
        vec3 center = ${t.getTextureAttribute(`boundingRect`)}[0];
        vec3 halfU = ${t.getTextureAttribute(`boundingRect`)}[1];
        vec3 halfV = ${t.getTextureAttribute(`boundingRect`)}[2];
        vec3 n = normalize(cross(halfU, halfV));

        vec3 viewDir = - vec3(view[0][2], view[1][2], view[2][2]);

        float viewAngle = dot(viewDir, n);
        float minViewAngle = ${p.float(L)};

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
    `)),g.code.add(p`
    vec2 scaledUV() {
      vec2 uv = uvMapSpace.xy ${f(w,` * rotate45`)};
      vec2 uvCellOrigin = uvMapSpace.zw ${f(w,` * rotate45`)};

      ${f(!e.draped,p`float distanceToCamera = boundingRectDistanceToCamera();
               float worldToScreenRatio = worldToScreenPerDistanceRatio / distanceToCamera;`)}

      // Logarithmically discretize ratio to avoid jittering
      float step = 0.1;
      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);

      vec2 uvOffset = mod(uvCellOrigin * discreteWorldToScreenRatio, ${p.float(R)});
      return uvOffset + (uv * discreteWorldToScreenRatio);
    }
  `),g.main.add(p`
    vuv = scaledUV();
    vpos = position;
    forwardVertexColor();
    forwardObjectAndLayerIdColor();
    ${e.hasVertexColors?`vColor *= uColor;`:e.hasVVColor?p`vColor = uColor * interpolateVVColor(${C});`:`vColor = uColor;`}
    gl_Position = transformPosition(proj, view, vpos);
  `),y.include(d),e.draped&&y.uniforms.add(new l(`texelSize`,e=>1/e.camera.pixelRatio)),S||(y.code.add(p`
      const float lineWidth = ${p.float(z)};
      const float spacing = ${p.float(R)};
      const float spacingINV = ${p.float(1/R)};

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
    `),e.draped||y.code.add(p`const int maxSamples = 5;
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
}`)),y.main.add(p`
    discardBySlice(vpos);
    vec4 color = vColor;
    ${f(!S,p`color.a *= ${V(e)};`)}
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),m}function V(e){function t(t){return e.draped?p`coverage(vuv.${t}, texelSize)`:p`sampleAA(vuv.${t})`}switch(e.style){case 3:case 0:return t(`y`);case 4:case 1:return t(`x`);case 5:case 2:return p`1.0 - (1.0 - ${t(`x`)}) * (1.0 - ${t(`y`)})`;default:return`0.0`}}var H=Object.freeze(Object.defineProperty({__proto__:null,build:B},Symbol.toStringTag,{value:`Module`}));export{S as a,w as i,B as n,k as r,H as t};