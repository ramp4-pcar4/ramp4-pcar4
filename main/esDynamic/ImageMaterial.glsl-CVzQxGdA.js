import{E as e,W as t,g as n,w as r}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{c as i,d as a,f as o,l as s}from"./oitResolution.glsl-GKlYUQFU.js";import{t as c}from"./NoParameters-CWYi4J7C.js";import{t as l}from"./ShaderBuilder-CSrAKPgp.js";import{n as u}from"./VertexColor.glsl-Cb1nwMPz.js";var d=class extends c{};function f(c){let d=new l,{vertex:f,fragment:p,varyings:m}=d,{output:h,perspectiveInterpolation:g,emissionDimmingPass:_}=c;return e(f,c),d.include(u),d.fragment.include(t,c),d.fragment.code.add(o`void outputObjectAndLayerIdColor() {
    ${a(h===11,`fragColor = vec4(0, 0, 0, 1);`)}
    }`),d.include(n,c),d.attributes.add(`position`,`vec3`),d.attributes.add(`uv0`,`vec2`),g&&d.attributes.add(`perspectiveDivide`,`float`),f.main.add(o`
    vpos = position;
    vTexCoord = uv0;
    gl_Position = transformPosition(proj, view, vpos);
    ${a(g,`gl_Position *= perspectiveDivide;`)}`),m.add(`vpos`,`vec3`,{invariant:!0}),m.add(`vTexCoord`,`vec2`),p.include(r),p.uniforms.add(new s(`opacity`,e=>e.opacity),new i(`tex`,e=>e.texture)).main.add(o`
    discardBySlice(vpos);
    vec4 finalColor = texture(tex, vTexCoord) * opacity;
    ${a(_,`if (finalColor.a > 0.0) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),d}var p=Object.freeze(Object.defineProperty({__proto__:null,ImageMaterialPassParameters:d,build:f},Symbol.toStringTag,{value:`Module`}));export{p as n,d as r,f as t};