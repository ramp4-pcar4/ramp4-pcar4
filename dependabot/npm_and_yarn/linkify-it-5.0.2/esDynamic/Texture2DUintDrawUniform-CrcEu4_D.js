import{M as e}from"./decorators-DjO8WY5-.js";import{r as t}from"./tslib.es6-CVTII-xV.js";import{Q as n,q as r}from"./BufferView-DulaDPJF.js";import{j as i}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import{a,d as o,f as s,o as c,u as l}from"./oitResolution.glsl-GKlYUQFU.js";function u(e){switch(e.elementType){case`float`:switch(e.elementCount){case 1:return s`float`;case 2:return s`vec2`;case 3:return s`vec3`;case 4:return s`vec4`;case 9:return s`mat3`;default:e.elementCount}break;case`int`:switch(e.elementCount){case 1:return s`int`;case 2:return s`ivec2`;case 3:return s`ivec3`;case 4:return s`ivec4`;case 9:throw Error(`Invalid element count 9 for type int`);default:e.elementCount}break;case`uint`:switch(e.elementCount){case 1:return s`uint`;case 2:return s`uvec2`;case 3:return s`uvec3`;case 4:return s`uvec4`;case 9:throw Error(`Invalid element count 9 for type uint`);default:e.elementCount}break;default:e.elementType}throw Error(`unsupported field`)}var d=new i(`constNaN`,()=>NaN,{supportsNaN:!0}),f=class extends a{constructor(e){super(),this.supportNaN=e}};function p(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(d),e.code.add(s`bool bitsEncodeFloat16NaN(highp uint bits) {
const highp uint nanExponent = 0x00007c00u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x000003ffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(s`
    mediump float unpackHalf1x16(highp uint bits) {
      ${o(n,s`
        if (bitsEncodeFloat16NaN(bits)) {
          return constNaN;
        }`)}
      return unpackHalf2x16(bits).x;
    }`),e.code.add(s`
    mediump vec2 unpackHalf2x16NaNSupport(highp uint bits) {
      vec2 result = unpackHalf2x16(bits);
      ${o(n,s`
        if (bitsEncodeFloat16NaN(bits)) {
          result.x = constNaN;
        }
        if (bitsEncodeFloat16NaN(bits >> ${s.uint(E[2])})) {
          result.y = constNaN;
        }
        `)}
      return result;
    }`)}function m(e,t){let n=t?.supportNaN;n&&(e.uniforms.add(d),e.code.add(s`bool bitsEncodeFloat32NaN(highp uint bits) {
const highp uint nanExponent = 0x7f800000u;
highp uint exponent = bits & nanExponent;
highp uint mantissa = bits & 0x007fffffu;
return exponent == nanExponent && mantissa != 0u;
}`)),e.code.add(s`
    highp float unpackFloat1x32(highp uint bits) {
      ${o(n,s`
        if (bitsEncodeFloat32NaN(bits)) {
          return constNaN;
        }`)}
      return uintBitsToFloat(bits);
    }`)}function h(e){e.code.add(s`mediump int unpackInt1x16(highp uint bits) {
highp uint signExtendedBits = (bits & 0x8000u) != 0u ? (bits | 0xffff0000u) : bits;
return int(signExtendedBits);
}`)}function g(e,t){let{fieldType:n}=e;return`${(0,C[n])(w(e,t))}`}function _(e,t){let n=[];for(let t of e){let e=s`unpackFloat1x32(${t})`;n.push(e)}return n.join(t)}t([c()],f.prototype,`supportNaN`,void 0);var v=e=>s`${e[0]}`,y=e=>s`((uvec4(${e[0]}) >> ${s`uvec4(${s.uint(E[0])}, ${s.uint(E[1])}, ${s.uint(E[2])}, ${s.uint(E[3])})`}) & ${s`uvec4(${s.hexuint(D[1])})`})`,b=e=>s`(float(${v(e)})/${s.float(255)})`,x=e=>s`unpackFloat1x32(${e[0]})`,S=e=>s`vec4(${_(e,`, `)})`,C={u8:v,unorm8:b,vec4unorm8:e=>s`(vec4(${y(e)})/${s.float(255)})`,snorm16:e=>s`unpackSnorm2x16(${e[0]}).x`,vec2snorm16:e=>s`unpackSnorm2x16(${e[0]})`,f16:n?e=>s`unpackHalf1x16(${e[0]})`:x,vec4f16:n?e=>s`vec4(unpackHalf2x16NaNSupport(${e[0]}), unpackHalf2x16NaNSupport(${e[1]}))`:S,f32:x,vec4u8:y,vec2f32:e=>s`vec2(${_(e,`, `)})`,vec3f32:e=>s`vec3(${_(e,`, `)})`,vec4f32:S,mat3f32:e=>s`mat3(${_(e,`,
`)})`};function w(e,t){let{byteOffset:n,byteSize:r}=e,i=t.channelByteStride,a=t.byteStride,o=Math.ceil(r/T),c=O[t.channels],l=[];for(let e=0;e<o;++e){let t=e*T,o=n+t,u=r-t,d=Math.min(u,T),f=0,p=[];for(;f<d;){let e=o+f,t=Math.floor(e/a),n=e%a,r=Math.floor(n/i),l=n%i,u=i-l,m=d-f,h=Math.min(u,m),g=s`texel${s.int(t)}${c[r]}`,_=h===4?``:s` & ${s.hexuint(D[h])}`,v=s`(${s`((${g}${l===0?``:s` >> ${s.uint(E[l])}`})${_})`})${f===0?``:s` << ${s.uint(E[f])}`}`;p.push(v),f+=h}l.push(s`(${p.join(` | `)})`)}return l}var T=4,E=[0,8,16,24],D=[0,255,65535,16777215,4294967295],O={1:[s``],2:[s`.x`,s`.y`],4:[s`.x`,s`.y`,s`.z`,s`.w`]},k=new f(!0),A=new f(!1),j=class{constructor(t){this.moduleId=e(),this.namespace=`_tbb_${this.moduleId}_`;let{itemIndexAttribute:n,bufferUniform:r,layout:i}=t,a=t.fieldFilter??(()=>!0),o=t.enableNaNSupport?k:A;this.TextureBackedBufferModule=(e,t)=>M(this.namespace,e,t,n,r,i,a,o),this.getTextureAttribute=N(this.namespace)}};function M(e,t,n,i,a,o,c,l){let{vertex:d}=t,{texelFormatInfo:f}=o;d.include(m,l),d.include(p,l),d.include(h);let _=`${e}tbbStride`,v=`${e}TextureBackedBufferItemData`,y=`${e}fetchTextureBackedBufferItemData`,b=P(e);for(let e of[_,v,y,b])r(e.length<1024,`Identifiers do not have a valid length`);d.constants.add(_,`uint`,o.texelStride),d.uniforms.add(a);let x=[];for(let e of o.fields.values())c(e.name,n)&&x.push(e);if(x.length===0)return;let S=[];for(let e=0;e<o.texelStride;++e)S.push(!1);for(let e of x)for(let t=0;t<e.numTexels;++t)S[e.startTexel+t]=!0;d.code.add(s`
  struct ${v} {`);for(let e of x)d.code.add(s`\t${u(e)} ${e.name};`);d.code.add(s`};`),d.code.add(s`
  ${v} ${y}(highp uint itemIndex) {
    ${v} itemData;
    highp uint index = itemIndex * ${_};
    highp uint rowWidth = uint(textureSize(${a.name}, 0).x);
    int coordX = int(index % rowWidth);
    int coordY = int(index / rowWidth);
  `);let C=F[f.channels],w=I[f.channels];for(let e=0;e<S.length;++e)!1!==S[e]&&d.code.add(s`highp ${C} texel${s.int(e)} = texelFetch(${a.name}, ivec2(coordX + ${s.int(e)}, coordY), 0)${w};`);for(let e of x)d.code.add(s`itemData.${e.name} = ${g(e,f)};`);d.code.add(s`return itemData;
}`),d.code.add(s`${v} ${b};`),d.main.add(s`${b} = ${y}(${i});`)}function N(e){let t=P(e);return e=>s`${t}.${e}`}function P(e){return`${e}ItemData`}var F={1:s`uint`,2:s`uvec2`,4:s`uvec4`},I={1:s`.x`,2:s`.xy`,4:``},L=class extends l{constructor(e,t){super(e,`usampler2D`,2,(n,r,i)=>n.bindTexture(e,t(r,i)))}};export{j as n,L as t};