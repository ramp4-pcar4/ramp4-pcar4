import{wi as e}from"./store-TEwW3sPL.js";import{a as t,i as n}from"./Emissions.glsl-DOGoT6RN.js";import{n as r,t as i}from"./glsl-D85RBwKC.js";import{t as a}from"./ShaderBuilder-B4XLodJj.js";import{B as o,M as s,N as c,V as l,n as u,nn as d,rn as f,z as p}from"./VertexColor.glsl-CGCZmPas.js";import{a as m,i as h}from"./AlphaCutoff-Dm0bYlmh.js";function g(e,t){if(!t.screenSizeEnabled)return;let i=e.vertex;p(i,t),i.uniforms.add(new d(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new n(`screenSizeScale`,e=>e.screenSizeScale)).code.add(r`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function _(e){let n=new a;n.include(u),n.include(g,e),n.fragment.include(m,e),n.include(s,e),n.include(c,e);let{vertex:d,fragment:p}=n;return p.include(h),o(d,e),p.uniforms.add(new f(`uColor`,e=>e.color)),n.attributes.add(`position`,`vec3`),n.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&n.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(l(d),n.attributes.add(`normal`,`vec3`),n.varyings.add(`vViewNormal`,`vec3`),p.uniforms.add(new t(`shadingDirection`,e=>e.shadingDirection)),p.uniforms.add(new f(`shadedColor`,e=>v(e.shadingTint,e.color)))),d.main.add(r`
    vWorldPosition = ${e.screenSizeEnabled?r`screenSizeScaling(offset, position)`:r`position`};
    ${i(e.shadingEnabled,r`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),p.main.add(r`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e.shadingEnabled?r`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:r`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),n}function v(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(y[3]=r,y):(y[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,y[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,y[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,y[3]=t[3],y)}var y=e(),b=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}));export{_ as n,b as t};