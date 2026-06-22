import{d as e}from"./colorUtils-DQikkwDH.js";import{n as t,t as n}from"./glsl-C3kp6zqV.js";import{t as r}from"./Uniform-CUdn9KGj.js";function i(e){return e===3||e===4||e===5}function a(e){return i(e)||e===6||e===7}function o(e){return f(e)||e===2}function s(e){return e===8||e===9}function c(e){return l(e)||s(e)}function l(e){return e===0}function u(e){return l(e)||e===9}function d(e){return l(e)||s(e)}function f(e){return d(e)||p(e)}function p(e){return e===1}function m(e){return p(e)||a(e)}function h(e,n){switch(n.textureCoordinateType){case 1:e.attributes.add(`uv0`,`vec2`),e.varyings.add(`vuv0`,`vec2`),e.vertex.code.add(t`void forwardTextureCoordinates() { vuv0 = uv0; }`);return;case 2:e.attributes.add(`uv0`,`vec2`),e.attributes.add(`uvRegion`,`vec4`),e.varyings.add(`vuv0`,`vec2`),e.varyings.add(`vuvRegion`,`vec4`),e.vertex.code.add(t`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);return;default:n.textureCoordinateType;case 0:e.vertex.code.add(t`void forwardTextureCoordinates() {}`);return;case 3:return}}function g(e){e.fragment.code.add(t`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function _(e,n){let{textureCoordinateType:r}=n;if(r===0||r===3)return;e.include(h,n);let i=r===2;i&&e.include(g),e.fragment.code.add(t`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?`textureAtlasLookup(tex, uv, vuvRegion)`:`texture(tex, uv)`};
    }
  `)}function v(n){n.constants.add(`GAMMA`,`float`,e).constants.add(`INV_GAMMA`,`float`,1/e).code.add(t`vec3 delinearizeGamma(vec3 color) {
return pow(color, vec3(INV_GAMMA));
}
vec4 delinearizeGamma(vec4 color) {
return vec4(delinearizeGamma(color.rgb), color.a);
}
vec3 linearizeGamma(vec3 color) {
return pow(color, vec3(GAMMA));
}`)}var y=class extends r{constructor(e,t,n){super(e,`vec3`,2,(r,i,a,o)=>r.setUniform3fv(e,t(i,a,o),n))}},b=class extends r{constructor(e,t,n){super(e,`vec3`,1,(r,i,a)=>r.setUniform3fv(e,t(i,a),n))}},x=class extends r{constructor(e,t,n){super(e,`float`,2,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}},S=class extends r{constructor(e,t,n){super(e,`float`,1,(r,i,a)=>r.setUniform1f(e,t(i,a),n))}},C=class extends r{constructor(e,t){super(e,`sampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}},w=class extends r{constructor(e,t){super(e,`sampler2D`,1,(n,r,i)=>n.bindTexture(e,t(r,i)))}};function T(e,r){if(!l(r.output))return;e.fragment.include(v);let{emissionSource:i,hasEmissiveTextureTransform:a,bindType:o}=r,s=i===3||i===4||i===5;s&&(e.include(_,r),e.fragment.uniforms.add(o===1?new w(`texEmission`,e=>e.textureEmissive):new C(`texEmission`,e=>e.textureEmissive)));let c=i===2||s;c&&e.fragment.uniforms.add(o===1?new b(`emissiveBaseColor`,e=>e.emissiveBaseColor):new y(`emissiveBaseColor`,e=>e.emissiveBaseColor));let u=i!==0;u&&!(i===7||i===6||i===4||i===5)&&e.fragment.uniforms.add(o===1?new S(`emissiveStrength`,e=>e.emissiveStrength??0):new x(`emissiveStrength`,e=>e.emissiveStrength??0));let d=i===7,f=i===5,p=i===1||i===6||d;e.fragment.code.add(t`
    vec4 getEmissions(vec3 symbolColor) {
      vec4 emissions = ${c?f?`emissiveSource == 0 ? vec4(emissiveBaseColor, 1.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(emissiveBaseColor, 1.0)`:p?d?`emissiveSource == 0 ? vec4(0.0): vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(linearizeGamma(symbolColor), 1.0)`:`vec4(0.0)`};
      ${n(s,`${n(f,`if(emissiveSource == 0) {\n              vec4 emissiveFromTex = textureLookup(texEmission, ${a?`emissiveUV`:`vuv0`});\n              emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);\n           }`,`vec4 emissiveFromTex = textureLookup(texEmission, ${a?`emissiveUV`:`vuv0`});\n           emissions *= vec4(linearizeGamma(emissiveFromTex.rgb), emissiveFromTex.a);`)}\n        emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)}
      ${n(u,`emissions.rgb *= emissiveStrength * ${t.float(1)};`)}
      return emissions;
    }
  `)}export{o as _,b as a,_ as c,m as d,u as f,a as g,d as h,S as i,h as l,l as m,w as n,y as o,c as p,C as r,v as s,T as t,p as u,s as v,f as y};