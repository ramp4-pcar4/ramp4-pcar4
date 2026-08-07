import{S as e}from"./mathUtils-B8Pbjr-0.js";import{c as t,d as n,f as r,i,l as a,r as o,s,u as c}from"./oitResolution.glsl-GKlYUQFU.js";function l(e){return e===5||e===6||e===7}function u(e){return l(e)||e===8||e===9}function d(e){return x(e)||e===4}function f(e){return d(e)||u(e)}function p(e){return e===10||e===11}function m(e){return v(e)||p(e)}function h(e){return e===1}function g(e){return e===2}function _(e){return h(e)||g(e)}function v(e){return e===0||_(e)}function y(e){return v(e)||e===11}function b(e){return v(e)||p(e)}function x(e){return b(e)||S(e)}function S(e){return e===3}var C=class extends c{constructor(e,t,n){super(e,`vec3`,2,(r,i,a,o)=>r.setUniform3fv(e,t(i,a,o),n))}};function w(e,t){switch(t.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(r`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(r`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:t.textureCoordinateType;case 0:e.vertex.code.add(r`void forwardTextureCoordinates() {}`);return;case 3:return}}function T(e){e.fragment.code.add(r`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function E(e,t){let{textureCoordinateType:n}=t;if(n===0||n===3)return;e.include(w,t);let i=n===2;i&&e.include(T),e.fragment.code.add(r`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}var D=class extends c{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}};function O(c,l){if(!v(l.output))return;c.fragment.include(o);let{emissionSource:u,hasEmissiveTextureTransform:d,bindType:f}=l,p=u===3||u===4||u===5;p&&(c.include(E,l),c.fragment.uniforms.add(f===1?new t(`texEmission`,e=>e.textureEmissive):new s(`texEmission`,e=>e.textureEmissive)));let m=u===2||p;m&&c.fragment.uniforms.add(f===1?new i(`emissiveBaseColor`,e=>e.emissiveBaseColor):new C(`emissiveBaseColor`,e=>e.emissiveBaseColor));let h=u!==0;if(h&&!(u===7||u===6||u===4||u===5)){let t=t=>e(t??0,0,16);c.fragment.uniforms.add(f===1?new a(`emissiveStrength`,e=>t(e.emissiveStrength)):new D(`emissiveStrength`,e=>t(e.emissiveStrength)))}let g=u===7,_=u===5,y=u===1||u===6||g;c.fragment.code.add(r`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${m?_?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:y?g?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${n(p,`${n(_,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${d?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${d?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.a = emissions.rgb == vec3(0.0) ? 0.0: emissions.a;`)}
      ${n(h,`emissions.rgb *= emissiveStrength * ${r.float(1)};`)}
      return emissions;
    }
  `)}export{f as _,y as a,x as c,S as d,_ as f,d as g,u as h,C as i,p as l,v as m,E as n,b as o,m as p,w as r,h as s,O as t,g as u};