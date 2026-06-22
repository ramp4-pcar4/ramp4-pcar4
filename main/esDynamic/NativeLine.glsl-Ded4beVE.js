import{n as e}from"./glsl-C3kp6zqV.js";import{t}from"./ShaderBuilder-BteJty_U.js";import{B as n,M as r,n as i,rn as a,t as o}from"./VertexColor.glsl-B6NvE-zG.js";import{a as s}from"./AlphaCutoff-Bp9xYXyU.js";function c(c){let l=new t,{vertex:u,fragment:d,varyings:f}=l;return l.fragment.include(s,c),l.include(i),l.include(o,c),l.include(r,c),n(u,c),l.attributes.add(`position`,`vec3`),f.add(`vpos`,`vec3`,{invariant:!0}),u.main.add(e`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),c.hasVertexColors||d.uniforms.add(new a(`constantColor`,e=>e.color)),d.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${c.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),l}var l=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:`Module`}));export{l as n,c as t};