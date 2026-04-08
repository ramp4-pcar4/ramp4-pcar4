import{n as e}from"./glsl-BlSepfbN.js";import{t}from"./ShaderBuilder-DS-lb90Q.js";import{t as n}from"./Float4PassUniform-CGmatYpU.js";import{a as r}from"./AlphaCutoff-B5iH7Vka.js";import{n as i}from"./View.glsl-DDYb2Tl9.js";import{t as a}from"./OutputColorHighlightOLID.glsl-iHuYijyc.js";import{t as o}from"./Transform.glsl-Czk5kVD-.js";import{t as s}from"./VertexColor.glsl-Bbkes2XF.js";function c(c){let l=new t,{vertex:u,fragment:d,varyings:f}=l;return l.fragment.include(r,c),l.include(o),l.include(s,c),l.include(a,c),i(u,c),l.attributes.add(`position`,`vec3`),f.add(`vpos`,`vec3`,{invariant:!0}),u.main.add(e`vpos = position;
forwardVertexColor();
gl_Position = transformPosition(proj, view, vpos);`),c.hasVertexColors||d.uniforms.add(new n(`constantColor`,e=>e.color)),d.main.add(e`
    discardBySlice(vpos);
    vec4 color = ${c.hasVertexColors?`vColor`:`constantColor`};
    outputColorHighlightOLID(applySlice(color, vpos), color.rgb);
  `),l}var l=Object.freeze(Object.defineProperty({__proto__:null,build:c},Symbol.toStringTag,{value:`Module`}));export{l as n,c as t};