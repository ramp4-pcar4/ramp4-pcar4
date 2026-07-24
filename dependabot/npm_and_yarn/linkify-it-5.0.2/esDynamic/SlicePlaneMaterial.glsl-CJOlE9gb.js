import{E as e,L as t,g as n,w as r,x as i}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{d as a,f as o,l as s}from"./oitResolution.glsl-GKlYUQFU.js";import{t as c}from"./ShaderBuilder-CSrAKPgp.js";function l(l){let u=new c,{vertex:d,fragment:f,attributes:p,varyings:m}=u;return e(d,l),u.include(n,l),f.include(i),f.include(r),p.add(`position`,`vec3`),p.add(`uv0`,`vec2`),m.add(`vUV`,`vec2`),d.main.add(o`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),f.uniforms.add(new t(`backgroundColor`,e=>e.backgroundColor),new t(`gridColor`,e=>e.gridColor),new s(`gridWidth`,e=>e.gridWidth)).main.add(o`
    const float LINE_WIDTH = 1.0;

    vec2 uvScaled = vUV * gridWidth;
    vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
    vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);

    // mask aliasing along edges
    grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
    grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);

    float gridFade = max(grid.x, grid.y);
    float gridAlpha = gridColor.a * gridFade;

    // premultiply alpha in output
    vec4 finalColor =
      premultiplyAlpha(backgroundColor) * (1.0 - gridAlpha) +
      premultiplyAlpha(vec4(gridColor.rgb, gridAlpha));
    ${a(l.emissionDimmingPass,`if (finalColor.a > alphaCutoff) { finalColor.rgb /= finalColor.a; }`)}
    outputColorHighlightOLID(finalColor, finalColor.rgb);`),u}var u=Object.freeze(Object.defineProperty({__proto__:null,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as t};