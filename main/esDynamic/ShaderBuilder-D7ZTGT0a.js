import{i as T,s as p}from"./main-CnDVnExo.js";import{a as c}from"./BindType-CKbZk6AG.js";const l=()=>T.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class g{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}}class v extends g{constructor(){super(...arguments),this.vertex=new b,this.fragment=new b,this.attributes=new A,this.varyings=new E,this.extensions=new m,this.outputs=new d}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e,r=!1){const t=this.extensions.generateSource(e),i=this.attributes.generateSource(e),a=this.varyings.generateSource(e),s=e==="vertex"?this.vertex:this.fragment,u=s.uniforms.generateSource(),h=s.code.generateSource(),_=s.main.generateSource(r),f=e==="vertex"?L:F,S=s.constants.generateSource(),$=this.outputs.generateSource(e);return`#version 300 es
${t.join(`
`)}
${f}
${S.join(`
`)}
${u.join(`
`)}
${i.join(`
`)}
${a.join(`
`)}
${$.join(`
`)}
${h.join(`
`)}
${_.join(`
`)}`}generateBind(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[c.Bind];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[c.Bind];s&&r.set(a.name,s)});const t=Array.from(r.values()),i=t.length;return a=>{for(let s=0;s<i;++s)t[s](e,a)}}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[c.Pass];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[c.Pass];s&&r.set(a.name,s)});const t=Array.from(r.values()),i=t.length;return(a,s)=>{for(let u=0;u<i;++u)t[u](e,a,s)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const s=a.bind[c.Draw];s&&r.set(a.name,s)}),this.fragment.uniforms.entries.forEach(a=>{const s=a.bind[c.Draw];s&&r.set(a.name,s)});const t=Array.from(r.values()),i=t.length;return(a,s,u)=>{for(let h=0;h<i;++h)t[h](e,u,a,s)}}}class w{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new p("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else l().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:r,type:t})=>r!=null?`uniform ${t} ${e}[${r}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}}class y{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new p("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class I{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class b extends g{constructor(){super(...arguments),this.uniforms=new w(this),this.main=new y(this),this.code=new I(this),this.constants=new n(this)}get builder(){return this}}class A{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}}class E{constructor(){this._entries=new Map}add(e,r,t){this._entries.has(e)?l().warn(`Ignoring duplicate varying ${r} ${e}`):this._entries.set(e,{type:r,invariant:t?.invariant??!1})}generateSource(e){const r=new Array;return this._entries.forEach((t,i)=>r.push((t.invariant&&e==="vertex"?"invariant ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${i};`)),r}}class m{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const r=e==="vertex"?m.ALLOWLIST_VERTEX:m.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(t=>r.includes(t)).map(t=>`#extension ${t} : enable`)}static{this.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"]}static{this.ALLOWLIST_VERTEX=[]}}class d{constructor(){this._entries=new Map}add(e,r,t=0){const i=this._entries.get(t);i?.name!==e||i?.type!==r?this._entries.set(t,{name:e,type:r}):l().warn(`Fragment shader output location ${t} occupied`)}static{this.DEFAULT_TYPE="vec4"}static{this.DEFAULT_NAME="fragColor"}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:d.DEFAULT_NAME,type:d.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((t,i)=>r.push(`layout(location = ${i}) out ${t.type} ${t.name};`)),r}}class n{constructor(e){this._stage=e,this._entries=new Set}add(e,r,t){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=n._numberToFloatStr(t);break;case"int":i=n._numberToIntStr(t);break;case"bool":i=t.toString();break;case"vec2":i=`vec2(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])})`;break;case"vec3":i=`vec3(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])})`;break;case"vec4":i=`vec4(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])},                            ${n._numberToFloatStr(t[3])})`;break;case"ivec2":i=`ivec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"ivec3":i=`ivec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"ivec4":i=`ivec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"uvec2":i=`uvec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"uvec3":i=`uvec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"uvec4":i=`uvec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(t,a=>n._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const F=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
#endif`,L=`precision highp float;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{v as i};
