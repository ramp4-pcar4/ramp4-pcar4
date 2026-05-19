import{n as e}from"./glsl-BgsHvHfn.js";import{t}from"./ShaderBuilder-uXIdT_oE.js";import{t as n}from"./Float4PassUniform-DsukPcOl.js";import{a as r,i}from"./AlphaCutoff-ChZwrRYo.js";import{t as a}from"./ObjectAndLayerIdColor.glsl-CmAKBg45.js";import{t as o}from"./VisualVariables.glsl-0X3We4WE.js";import{n as s}from"./View.glsl-DXY3WEB3.js";import{t as c}from"./TerrainDepthTest.glsl-DaP2filK.js";import{t as l}from"./OutputColorHighlightOLID.glsl-CE04GXZD.js";import{t as u}from"./Transform.glsl-Dc4LVo-U.js";import{t as d}from"./VertexColor.glsl-wJbZIFoT.js";function f(f){let p=new t,{vertex:m,fragment:h,attributes:g,varyings:_}=p,{hasVVColor:v,hasVertexColors:y}=f;return s(m,f),p.include(u),p.include(d,f),p.include(o,f),p.include(a,f),h.include(r,f),p.include(l,f),p.include(c,f),g.add(`position`,`vec3`),v&&g.add(`colorFeatureAttribute`,`float`),y||_.add(`vColor`,`vec4`),_.add(`vpos`,`vec3`,{invariant:!0}),m.uniforms.add(new n(`uColor`,e=>e.color)),m.main.add(e`
      vpos = position;
      forwardVertexColor();
      forwardObjectAndLayerIdColor();

      ${y?`vColor *= uColor;`:v?`vColor = uColor * interpolateVVColor(colorFeatureAttribute);`:`vColor = uColor;`}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),h.include(i),h.main.add(e`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOLID(applySlice(vColor, vpos), vColor.rgb);`),p}var p=Object.freeze(Object.defineProperty({__proto__:null,build:f},Symbol.toStringTag,{value:`Module`}));export{p as n,f as t};