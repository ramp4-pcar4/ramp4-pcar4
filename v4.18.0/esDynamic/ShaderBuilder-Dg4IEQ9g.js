import{ad as S,r as d}from"./main-De_li5Sb.js";const m=()=>S.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class l{constructor(){this._includedModules=new Map}include(e,r){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,r),e(this.builder,r))}}class _ extends l{constructor(){super(...arguments),this.vertex=new p,this.fragment=new p,this.attributes=new y,this.varyings=new A,this.outputs=new h}get attributeNames(){return this.attributes.names}get builder(){return this}generate(e,r=!1){const t=this.attributes.generateSource(e),s=this.varyings.generateSource(e),i=e==="vertex"?this.vertex:this.fragment,a=i.uniforms.generateSource(),u=i.code.generateSource(),c=i.main.generateSource(r),g=this.debugName?`// ${this.debugName}
`:"",b=e==="vertex"?E:F,$=i.constants.generateSource(),f=this.outputs.generateSource(e);return`#version 300 es
${g}
${b}
${$.join(`
`)}
${a.join(`
`)}
${t.join(`
`)}
${s.join(`
`)}
${f.join(`
`)}
${u.join(`
`)}
${c.join(`
`)}`}generateBind(e){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const a=i.bind[0];a&&r.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{const a=i.bind[0];a&&r.set(i.name,a)});const t=Array.from(r.values()),s=t.length;return i=>{for(let a=0;a<s;++a)t[a](e,i)}}generateBindPass(e){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const a=i.bind[1];a&&r.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{const a=i.bind[1];a&&r.set(i.name,a)});const t=Array.from(r.values()),s=t.length;return(i,a)=>{for(let u=0;u<s;++u)t[u](e,i,a)}}generateBindDraw(e){const r=new Map;this.vertex.uniforms.entries.forEach(i=>{const a=i.bind[2];a&&r.set(i.name,a)}),this.fragment.uniforms.entries.forEach(i=>{const a=i.bind[2];a&&r.set(i.name,a)});const t=Array.from(r.values()),s=t.length;return(i,a,u)=>{for(let c=0;c<s;++c)t[c](e,u,i,a)}}}class v{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const r of e)this._add(r);return this._stage}get(e){return this._entries.get(e)}_add(e){if(e!=null){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new d("shaderbuilder:duplicate-uniform",`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else m().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(({name:e,arraySize:r,type:t})=>r!=null?`uniform ${t} ${e}[${r}];`:`uniform ${t} ${e};`)}get entries(){return Array.from(this._entries.values())}}class T{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(e){if(this._bodies.length>0)return[`void main() {
 ${this._bodies.join(`
`)||""} 
}`];if(e)throw new d("shaderbuilder:missing-main","Shader does not contain main function body.");return[]}}class w{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class p extends l{constructor(){super(...arguments),this.uniforms=new v(this),this.main=new T(this),this.code=new w(this),this.constants=new n(this)}get builder(){return this}}class y{constructor(){this._entries=new Array}add(e,r){this._entries.push([e,r])}generateSource(e){return e==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}get names(){return this._entries.map(([e])=>e)}}class A{constructor(){this._entries=new Map}add(e,r,t){this._entries.has(e)?m().warn(`Ignoring duplicate varying ${r} ${e}`):this._entries.set(e,{type:r,invariant:t?.invariant??!1})}generateSource(e){const r=new Array;return this._entries.forEach((t,s)=>r.push((t.invariant&&e==="vertex"?"invariant ":"")+(t.type==="int"?"flat ":"")+(e==="vertex"?"out":"in")+` ${t.type} ${s};`)),r}}class h{constructor(){this._entries=new Map}add(e,r,t=0){const s=this._entries.get(t);s?.name!==e||s?.type!==r?this._entries.set(t,{name:e,type:r}):m().warn(`Fragment shader output location ${t} occupied`)}static{this.DEFAULT_TYPE="vec4"}static{this.DEFAULT_NAME="fragColor"}generateSource(e){if(e==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:h.DEFAULT_NAME,type:h.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((t,s)=>r.push(`layout(location = ${s}) out ${t.type} ${t.name};`)),r}}class n{constructor(e){this._stage=e,this._entries=new Set}add(e,r,t){let s="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":s=n._numberToFloatStr(t);break;case"int":s=n._numberToIntStr(t);break;case"uint":s=n._numberToUintStr(t);break;case"bool":s=t.toString();break;case"vec2":s=`vec2(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])})`;break;case"vec3":s=`vec3(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])})`;break;case"vec4":s=`vec4(${n._numberToFloatStr(t[0])},                            ${n._numberToFloatStr(t[1])},                            ${n._numberToFloatStr(t[2])},                            ${n._numberToFloatStr(t[3])})`;break;case"ivec2":s=`ivec2(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])})`;break;case"ivec3":s=`ivec3(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])})`;break;case"ivec4":s=`ivec4(${n._numberToIntStr(t[0])},                             ${n._numberToIntStr(t[1])},                             ${n._numberToIntStr(t[2])},                             ${n._numberToIntStr(t[3])})`;break;case"uvec2":s=`uvec2(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])})`;break;case"uvec3":s=`uvec3(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])},                             ${n._numberToUintStr(t[2])})`;break;case"uvec4":s=`uvec4(${n._numberToUintStr(t[0])},                             ${n._numberToUintStr(t[1])},                             ${n._numberToUintStr(t[2])},                             ${n._numberToUintStr(t[3])})`;break;case"mat2":case"mat3":case"mat4":s=`${r}(${Array.prototype.map.call(t,i=>n._numberToFloatStr(i)).join(", ")})`}return this._entries.add(`const ${r} ${e} = ${s};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToUintStr(e){return`${e.toFixed(0)}u`}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const F=`#ifdef GL_FRAGMENT_PRECISION_HIGH
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
 precision highp int;
 precision highp sampler2D;
 precision highp usampler2D;
 precision highp sampler2DArray;
 precision highp sampler2DShadow;


 invariant gl_Position;
 `;export{_ as s};
