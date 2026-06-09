import{n as e,t}from"./glsl-BgsHvHfn.js";import{t as n}from"./FloatPassUniform-Tzg3-nNy.js";import{t as r}from"./Texture2DPassUniform-CGa-LtRS.js";import{t as i}from"./ShaderBuilder-Dy-kUWY5.js";import{t as a}from"./NoParameters-BB6oVGYE.js";import{a as o,i as s}from"./AlphaCutoff-CuHez9y6.js";import{n as c}from"./View.glsl-DXY3WEB3.js";import{t as l}from"./TerrainDepthTest.glsl-DaP2filK.js";import{t as u}from"./OutputColorHighlightOLID.glsl-CII2xE3L.js";import{t as d}from"./Transform.glsl-Dc4LVo-U.js";var f=class extends a{};function p(a){let f=new i,{vertex:p,fragment:m,varyings:h}=f,{output:g,perspectiveInterpolation:_}=a;return c(p,a),f.include(d),f.include(l,a),f.fragment.include(o,a),f.fragment.code.add(e`void outputObjectAndLayerIdColor() {
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