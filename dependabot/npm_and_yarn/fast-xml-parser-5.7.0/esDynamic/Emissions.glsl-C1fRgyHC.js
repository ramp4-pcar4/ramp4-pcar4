import{n as e,t}from"./glsl-EDZkDhgF.js";import{t as n}from"./Gamma.glsl-3nSDeBy7.js";import{t as r}from"./Uniform-Dp2mgLmf.js";import{t as i}from"./Float3DrawUniform-CLaN-1NK.js";import{t as a}from"./Float3PassUniform-BEhcqx4m.js";import{t as o}from"./FloatPassUniform-gHcGW-mi.js";import{t as s}from"./Texture2DDrawUniform-DswgHdDh.js";import{t as c}from"./Texture2DPassUniform-RVTT2Sjh.js";function l(e){return e===3||e===4||e===5}function u(e){return l(e)||e===6||e===7}function d(e){return _(e)||e===2}function f(e){return e===8||e===9}function p(e){return m(e)||f(e)}function m(e){return e===0}function h(e){return m(e)||e===9}function g(e){return m(e)||f(e)}function _(e){return g(e)||v(e)}function v(e){return e===1}function y(e){return v(e)||u(e)}function b(t,n){switch(n.textureCoordinateType){case 1:t.attributes.add(`uv0`,`vec2`),t.varyings.add(`vuv0`,`vec2`),t.vertex.code.add(e`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:t.attributes.add(`uv0`,`vec2`),t.attributes.add(`uvRegion`,`vec4`),t.varyings.add(`vuv0`,`vec2`),t.varyings.add(`vuvRegion`,`vec4`),t.vertex.code.add(e`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:n.textureCoordinateType;case 0:t.vertex.code.add(e`void forwardTextureCoordinates() {}`);return;case 3:return}}function x(t){t.fragment.code.add(e`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function S(t,n){let{textureCoordinateType:r}=n;if(r===0||r===3)return;t.include(b,n);let i=r===2;i&&t.include(x),t.fragment.code.add(e`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}var C=class extends r{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}};function w(r,l){if(!m(l.output))return;r.fragment.include(n);let{emissionSource:u,hasEmissiveTextureTransform:d,bindType:f}=l,p=u===3||u===4||u===5;p&&(r.include(S,l),r.fragment.uniforms.add(f===1?new c(`texEmission`,e=>e.textureEmissive):new s(`texEmission`,e=>e.textureEmissive)));let h=u===2||p;h&&r.fragment.uniforms.add(f===1?new a(`emissiveBaseColor`,e=>e.emissiveBaseColor):new i(`emissiveBaseColor`,e=>e.emissiveBaseColor));let g=u!==0;g&&!(u===7||u===6||u===4||u===5)&&r.fragment.uniforms.add(f===1?new o(`emissiveStrength`,e=>e.emissiveStrength??0):new C(`emissiveStrength`,e=>e.emissiveStrength??0));let _=u===7,v=u===5,y=u===1||u===6||_;r.fragment.code.add(e`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${h?v?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:y?_?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${t(p,`${t(v,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${d?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${d?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${t(g,`emissions.rgb *= emissiveStrength * ${e.float(1)};`)}
      return emissions;
    }
  `)}export{y as a,m as c,d,f,v as i,g as l,S as n,h as o,_ as p,b as r,p as s,w as t,u};