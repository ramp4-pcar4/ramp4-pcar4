import{i as $,s as g}from"./main-CtmwM019.js";const l=()=>$.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class b{constructor(){this._includedModules=new Map}include(e,n){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,n),e(this.builder,n))}}class x extends b{constructor(){super(...arguments),this.vertex=new p,this.fragment=new p,this.attributes=new y,this.varyings=new I,this.extensions=new h,this.outputs=new m}get fragmentUniforms(){return this.fragment.uniforms.entries}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,n=!1){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,u=s.uniforms.generateSource(),c=s.code.generateSource(),d=s.main.generateSource(n),f=e==="vertex"?E:A,_=s.constants.generateSource(),S=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}
${f}
${_.join(`
`)}
${u.join(`
`)}
${i.join(`
`)}
${a.join(`
`)}
${S.join(`
`)}
${c.join(`
`)}
${d.join(`
`)}`}generateBind(e){const n=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[0];s&&n.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[0];s&&n.set(a.name,s)});const t=Array.from(n.values()),i=t.length;return a=>{for(let s=0;s<i;++s)t[s](e,a)}}generateBindPass(e){const n=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[1];s&&n.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[1];s&&n.set(a.name,s)});const t=Array.from(n.values()),i=t.length;return(a,s)=>{for(let u=0;u<i;++u)t[u](e,a,s)}}generateBindDraw(e){const n=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[2];s&&n.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[2];s&&n.set(a.name,s)});const t=Array.from(n.values()),i=t.length;return(a,s,u)=>{for(let c=0;c<i;++c)t[c](e,u,a,s)}}}class T{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const n of e)this._add(n);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new g("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else l().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:n,type:t})=>n!=null?`uniform ${t} ${e}[${n}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}}class v{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new g("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class w{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class p extends b{constructor(){super(...arguments),this.uniforms=new T(this),this.main=new v(this),this.code=new w(this),this.constants=new r(this)}get builder(){return this}}class y{constructor(){this._entries=new Array}add(e,n){this._entries.push([e,n])}generateSource(e){return e==="fragment"?[]:this._entries.map(n=>`in ${n[1]} ${n[0]};`)}get names(){return this._entries.map(([e])=>e)}}class I{constructor(){this._entries=new Map}add(e,n,t){this._entries.has(e)?l().warn(`Ignoring duplicate varying ${n} ${e}`):this._entries.set(e,{type:n,invariant:t?.invariant??!1})}generateSource(e){const n=new Array;return this._entries.forEach((t,i)=>n.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${i};`)),n}}class h{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const n=e==="vertex"?h.ALLOWLIST_VERTEX:h.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>n.includes(t)).map(t=>`#extension ${t} : enable`)}static{this.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"]}static{this.ALLOWLIST_VERTEX=[]}}class m{constructor(){this._entries=new Map}add(e,n,t=0){const i=this._entries.get(t);i?.name!==e||i?.type!==n?this._entries.set(t,{name:e,type:n}):l().warn(`Fragment shader output location ${t} occupied`)}static{this.DEFAULT_TYPE="vec4"}static{this.DEFAULT_NAME="fragColor"}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:m.DEFAULT_NAME,type:m.DEFAULT_TYPE});const n=new Array;return this._entries.forEach((t,i)=>n.push(`layout(location = ${i}) out ${t.type} ${t.name};`)),n}}class r{constructor(e){this._stage=e,this._entries=new Set}add(e,n,t){let i="ERROR_CONSTRUCTOR_STRING";switch(n){case"float":i=r._numberToFloatStr(t);break;case"int":i=r._numberToIntStr(t);break;case"bool":i=t.toString();break;case"vec2":i=`vec2(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])})`;break;case"vec3":i=`vec3(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])})`;break;case"vec4":i=`vec4(${r._numberToFloatStr(t[0])},                            ${r._numberToFloatStr(t[1])},                            ${r._numberToFloatStr(t[2])},                            ${r._numberToFloatStr(t[3])})`;break;case"ivec2":i=`ivec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"ivec3":i=`ivec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"ivec4":i=`ivec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"uvec2":i=`uvec2(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])})`;break;case"uvec3":i=`uvec3(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])})`;break;case"uvec4":i=`uvec4(${r._numberToIntStr(t[0])},                             ${r._numberToIntStr(t[1])},                             ${r._numberToIntStr(t[2])},                             ${r._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${n}(${Array.prototype.map.call(t,a=>r._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${n} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const A=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp int;
  precision highp sampler2D;
  precision highp usampler2D;
  precision highp sampler2DArray;
  precision highp sampler2DShadow;
#else
  precision mediump float;
  precision mediump int;
  precision mediump sampler2D;
  precision mediump usampler2D;
  precision mediump sampler2DArray;
  precision mediump sampler2DShadow;
#endif`,E=`precision highp float;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{x as s};
