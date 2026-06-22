import{i as e,n as t}from"./Emissions.glsl-DHYGZCki.js";import{n,t as r}from"./glsl-C3kp6zqV.js";import{t as i}from"./ShaderBuilder-BteJty_U.js";import{B as a,M as o,N as s,n as c}from"./VertexColor.glsl-B6NvE-zG.js";import{t as l}from"./NoParameters-CWYi4J7C.js";import{a as u,i as d}from"./AlphaCutoff-Bp9xYXyU.js";var f=class extends l{};function p(l){let f=new i,{vertex:p,fragment:m,varyings:h}=f,{output:g,perspectiveInterpolation:_}=l;return a(p,l),f.include(c),f.include(s,l),f.fragment.include(u,l),f.fragment.code.add(n`void outputObjectAndLayerIdColor() {
    ${r(g===9,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),f.include(o,l),f.attributes.add(`position`,`vec3`),f.attributes.add(`uv0`,`vec2`),_&&f.attributes.add(`perspectiveDivide`,`float`),p.main.add(n`
    vpos = position;
    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${r(_,`gl_Position *= perspectiveDivide;`)}`),h.add(`vpos`,`vec3`,{invariant:!0}),h.add(`vTexCoord`,`vec2`),m.include(d),m.uniforms.add(new e(`opacity`,e=>e.opacity),new t(`tex`,e=>e.texture)).main.add(n`discardBySlice(vpos);
discardByTerrainDepth();
vec4 finalColor = texture(tex, vTexCoord) * opacity;
outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),f}var m=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:f,build:p},Symbol.toStringTag,{value:`Module`}));export{m as n,f as r,p as t};