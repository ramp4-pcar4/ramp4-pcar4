import{i as e}from"./vec4f64-DFGee9an.js";import{n as t,t as n}from"./glsl-EDZkDhgF.js";import{t as r}from"./Float3PassUniform-BEhcqx4m.js";import{t as i}from"./FloatPassUniform-gHcGW-mi.js";import{t as a}from"./ShaderBuilder-aUMFb5cS.js";import{t as o}from"./Float4PassUniform-R_rVPKlL.js";import{t as s}from"./FloatBindUniform-avAg5yxD.js";import{a as c,i as l}from"./AlphaCutoff-lGKpUdxr.js";import{n as u,r as d,t as f}from"./View.glsl-YsNDLcX0.js";import{t as p}from"./TerrainDepthTest.glsl-DZ7tKbZj.js";import{t as m}from"./OutputColorHighlightOLID.glsl-vs7-ar26.js";import{t as h}from"./Transform.glsl-B8LYsJdc.js";function g(e,n){if(!n.screenSizeEnabled)return;let r=e.vertex;f(r,n),r.uniforms.add(new s(`perScreenPixelRatio`,e=>e.camera.perScreenPixelRatio),new i(`screenSizeScale`,e=>e.screenSizeScale)).code.add(t`float computeRenderPixelSizeAt( vec3 pWorld ){
vec3 viewForward = - vec3(view[0][2], view[1][2], view[2][2]);
float viewDirectionDistance = abs(dot(viewForward, pWorld - cameraPosition));
return viewDirectionDistance * perScreenPixelRatio;
}
vec3 screenSizeScaling(vec3 position, vec3 anchor){
return position * screenSizeScale * computeRenderPixelSizeAt(anchor) + anchor;
}`)}function _(e){let i=new a;i.include(h),i.include(g,e),i.fragment.include(c,e),i.include(m,e),i.include(p,e);let{vertex:s,fragment:f}=i;return f.include(l),u(s,e),f.uniforms.add(new o(`uColor`,e=>e.color)),i.attributes.add(`position`,`vec3`),i.varyings.add(`vWorldPosition`,`vec3`),e.screenSizeEnabled&&i.attributes.add(`offset`,`vec3`),e.shadingEnabled&&(d(s),i.attributes.add(`normal`,`vec3`),i.varyings.add(`vViewNormal`,`vec3`),f.uniforms.add(new r(`shadingDirection`,e=>e.shadingDirection)),f.uniforms.add(new o(`shadedColor`,e=>v(e.shadingTint,e.color)))),s.main.add(t`
    vWorldPosition = ${e.screenSizeEnabled?t`screenSizeScaling(offset, position)`:t`position`};
    ${n(e.shadingEnabled,t`vec3 worldNormal = normal;
           vViewNormal = (viewNormal * vec4(worldNormal, 1)).xyz;`)}
    forwardViewPosDepth((view * vec4(vWorldPosition, 1.0)).xyz);
    gl_Position = transformPosition(proj, view, vWorldPosition);
  `),f.main.add(t`
      discardBySlice(vWorldPosition);
      discardByTerrainDepth();
      ${e.shadingEnabled?t`vec3 viewNormalNorm = normalize(vViewNormal);
             float shadingFactor = 1.0 - clamp(-dot(viewNormalNorm, shadingDirection), 0.0, 1.0);
             vec4 finalColor = mix(uColor, shadedColor, shadingFactor);`:t`vec4 finalColor = uColor;`}
      outputColorHighlightOLID(applySlice(finalColor, vWorldPosition), finalColor.rgb);`),i}function v(e,t){let n=1-e[3],r=e[3]+t[3]*n;return r===0?(y[3]=r,y):(y[0]=(e[0]*e[3]+t[0]*t[3]*n)/r,y[1]=(e[1]*e[3]+t[1]*t[3]*n)/r,y[2]=(e[2]*e[3]+t[2]*t[3]*n)/r,y[3]=t[3],y)}var y=e(),b=Object.freeze(Object.defineProperty({__proto__:null,build:_},Symbol.toStringTag,{value:`Module`}));export{_ as n,b as t};