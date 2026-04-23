import{n as e}from"./glsl-EDZkDhgF.js";import{t}from"./FloatPassUniform-gHcGW-mi.js";import{t as n}from"./ShaderBuilder-aUMFb5cS.js";import{t as r}from"./Float4PassUniform-R_rVPKlL.js";import{n as i}from"./View.glsl-YsNDLcX0.js";function a(a){let o=new n,{vertex:s,fragment:c,attributes:l,varyings:u}=o;return i(s,a),l.add(`position`,`vec3`),l.add(`uv0`,`vec2`),u.add(`vUV`,`vec2`),s.main.add(e`vUV = uv0;
gl_Position = proj * view * vec4(position, 1.0);`),c.uniforms.add(new r(`backgroundColor`,e=>e.backgroundColor),new r(`gridColor`,e=>e.gridColor),new t(`gridWidth`,e=>e.gridWidth)).main.add(e`const float LINE_WIDTH = 1.0;
vec2 uvScaled = vUV * gridWidth;
vec2 gridUV = (fract(uvScaled + 0.5) - 0.5) / (LINE_WIDTH * fwidth(uvScaled));
vec2 grid = (1.0 - step(0.5, gridUV)) * step(-0.5, gridUV);
grid.x *= step(0.5, uvScaled.x) * step(uvScaled.x, gridWidth - 0.5);
grid.y *= step(0.5, uvScaled.y) * step(uvScaled.y, gridWidth - 0.5);
float gridFade = max(grid.x, grid.y);
float gridAlpha = gridColor.a * gridFade;
fragColor =
vec4(backgroundColor.rgb * backgroundColor.a, backgroundColor.a) * (1.0 - gridAlpha) +
vec4(gridColor.rgb, 1.0) * gridAlpha;`),o}var o=Object.freeze(Object.defineProperty({__proto__:null,build:a},Symbol.toStringTag,{value:`Module`}));export{o as n,a as t};