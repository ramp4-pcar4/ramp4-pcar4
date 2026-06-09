import{n as e,t}from"./glsl-CXvSXY75.js";import{t as n}from"./FloatPassUniform-D6ArRZe3.js";import{t as r}from"./Texture2DPassUniform-BsoMa898.js";import{t as i}from"./ShaderBuilder-BoqE5F3y.js";import{t as a}from"./NoParameters-DMf6FU7k.js";import{a as o,i as s}from"./AlphaCutoff-BuZgig4m.js";import{n as c}from"./View.glsl-BI7CtvMJ.js";import{t as l}from"./TerrainDepthTest.glsl-Bpi73Lk3.js";import{t as u}from"./OutputColorHighlightOLID.glsl-Ck5hCOVi.js";import{t as d}from"./Transform.glsl-CfvgOo8k.js";var f=class extends a{};function p(a){let f=new i,{vertex:p,fragment:m,varyings:h}=f,{output:g,perspectiveInterpolation:_}=a;return c(p,a),f.include(d),f.include(l,a),f.fragment.include(o,a),f.fragment.code.add(e`void outputObjectAndLayerIdColor() {
    ${t(g===9,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),f.include(u,a),f.attributes.add(`position`,`vec3`),f.attributes.add(`uv0`,`vec2`),_&&f.attributes.add(`perspectiveDivide`,`float`),p.main.add(e`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${t(_,`gl_Position *= perspectiveDivide;`)}`),h.add(`vpos`,`vec3`,{invariant:!0}),h.add(`vTexCoord`,`vec2`),m.include(s),m.uniforms.add(new n(`opacity`,e=>e.opacity),new r(`tex`,e=>e.texture)).main.add(e`discardBySlice(vpos);
discardByTerrainDepth();
vec4 finalColor = texture(tex, vTexCoord) * opacity;
outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),f}var m=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:f,build:p},Symbol.toStringTag,{value:`Module`}));export{m as n,f as r,p as t};