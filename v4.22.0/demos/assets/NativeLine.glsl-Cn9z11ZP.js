import{E as e,H as t,L as n,W as r,g as i}from"./TriangleTechniqueConfiguration-COBrPyyo.js";import{f as a}from"./oitResolution.glsl-BFyFSgo3.js";import{t as o}from"./ShaderBuilder-B5bKgQt6.js";import{n as s,t as c}from"./VertexColor.glsl-DRxd_ZMj.js";function l(l){let u=new o,{vertex:d,fragment:f,varyings:p}=u;return u.fragment.include(r,l),u.include(s),u.include(c,l),u.include(t,l),u.include(i,l),e(d,l),u.attributes.add(`position`,`vec3`),p.add(`vpos`,`vec3`,{invariant:!0}),d.main.add(a`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),l.hasVertexColors||f.uniforms.add(new n(`constantColor`,e=>e.color)),f.main.add(a`
    discardBySlice(vpos);
    vec4 color = ${l.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),u}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{u as n,l as t};