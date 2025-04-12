import{o as ut}from"./_commonjsHelpers-BITg13Vk.js";var Hn,zn={exports:{}};function ct(){return Hn||(Hn=1,on=zn,$=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,an=function(K={}){var un,z,i=K!==void 0?K:{};i.ready=new Promise((n,r)=>{un=n,z=r});var cn=Object.assign({},i),sn=typeof window=="object",D=typeof importScripts=="function";typeof process=="object"&&typeof process.versions=="object"&&process.versions.node;var Q,b="";function Dn(n){return i.locateFile?i.locateFile(n,b):b+n}(sn||D)&&(D?b=self.location.href:typeof document<"u"&&document.currentScript&&(b=document.currentScript.src),$&&(b=$),b=b.indexOf("blob:")!==0?b.substr(0,b.replace(/[?#].*/,"").lastIndexOf("/")+1):"",D&&(Q=n=>{var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var x,V,Vn=i.print||console.log.bind(console),F=i.printErr||console.warn.bind(console);Object.assign(i,cn),cn=null,i.arguments&&i.arguments,i.thisProgram&&i.thisProgram,i.quit&&i.quit,i.wasmBinary&&(x=i.wasmBinary),i.noExitRuntime,typeof WebAssembly!="object"&&B("no native wasm support detected");var P,v,R,M,E,p,fn,ln,dn,pn=!1;function vn(){var n=V.buffer;i.HEAP8=P=new Int8Array(n),i.HEAP16=R=new Int16Array(n),i.HEAP32=E=new Int32Array(n),i.HEAPU8=v=new Uint8Array(n),i.HEAPU16=M=new Uint16Array(n),i.HEAPU32=p=new Uint32Array(n),i.HEAPF32=fn=new Float32Array(n),i.HEAPF64=ln=new Float64Array(n)}var hn=[],mn=[],gn=[];function Mn(){if(i.preRun)for(typeof i.preRun=="function"&&(i.preRun=[i.preRun]);i.preRun.length;)Nn(i.preRun.shift());Y(hn)}function Bn(){Y(mn)}function qn(){if(i.postRun)for(typeof i.postRun=="function"&&(i.postRun=[i.postRun]);i.postRun.length;)Gn(i.postRun.shift());Y(gn)}function Nn(n){hn.unshift(n)}function Ln(n){mn.unshift(n)}function Gn(n){gn.unshift(n)}var W=0,U=null;function Xn(n){W++,i.monitorRunDependencies&&i.monitorRunDependencies(W)}function Zn(n){if(W--,i.monitorRunDependencies&&i.monitorRunDependencies(W),W==0&&U){var r=U;U=null,r()}}function B(n){i.onAbort&&i.onAbort(n),F(n="Aborted("+n+")"),pn=!0,n+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(n);throw z(r),r}var I,$n="data:application/octet-stream;base64,";function yn(n){return n.startsWith($n)}function _n(n){try{if(n==I&&x)return new Uint8Array(x);if(Q)return Q(n);throw"both async and sync fetching of the wasm failed"}catch(r){B(r)}}function Kn(n){return x||!sn&&!D||typeof fetch!="function"?Promise.resolve().then(()=>_n(n)):fetch(n,{credentials:"same-origin"}).then(r=>{if(!r.ok)throw"failed to load wasm binary file at '"+n+"'";return r.arrayBuffer()}).catch(()=>_n(n))}function wn(n,r,t){return Kn(n).then(e=>WebAssembly.instantiate(e,r)).then(e=>e).then(t,e=>{F("failed to asynchronously prepare wasm: "+e),B(e)})}function Qn(n,r,t,e){return n||typeof WebAssembly.instantiateStreaming!="function"||yn(r)||typeof fetch!="function"?wn(r,t,e):fetch(r,{credentials:"same-origin"}).then(o=>WebAssembly.instantiateStreaming(o,t).then(e,function(a){return F("wasm streaming compile failed: "+a),F("falling back to ArrayBuffer instantiation"),wn(r,t,e)}))}function Yn(){var n={env:xn,wasi_snapshot_preview1:xn};function r(e,o){var a=e.exports;return i.asm=a,V=i.asm.memory,vn(),dn=i.asm.__indirect_function_table,Ln(i.asm.__wasm_call_ctors),Zn(),a}function t(e){r(e.instance)}if(Xn(),i.instantiateWasm)try{return i.instantiateWasm(n,r)}catch(e){F("Module.instantiateWasm callback failed with error: "+e),z(e)}return Qn(x,I,n,t).catch(z),{}}function Y(n){for(;n.length>0;)n.shift()(i)}yn(I="i3s.wasm")||(I=Dn(I));var q=[];function J(n){var r=q[n];return r||(n>=q.length&&(q.length=n+1),q[n]=r=dn.get(n)),r}function Jn(n,r){J(n)(r)}function nr(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(r){p[this.ptr+4>>2]=r},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(r){p[this.ptr+8>>2]=r},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_caught=function(r){r=r?1:0,P[this.ptr+12|0]=r},this.get_caught=function(){return P[this.ptr+12|0]!=0},this.set_rethrown=function(r){r=r?1:0,P[this.ptr+13|0]=r},this.get_rethrown=function(){return P[this.ptr+13|0]!=0},this.init=function(r,t){this.set_adjusted_ptr(0),this.set_type(r),this.set_destructor(t)},this.set_adjusted_ptr=function(r){p[this.ptr+16>>2]=r},this.get_adjusted_ptr=function(){return p[this.ptr+16>>2]},this.get_exception_ptr=function(){if(In(this.get_type()))return p[this.excPtr>>2];var r=this.get_adjusted_ptr();return r!==0?r:this.excPtr}}function rr(n,r,t){throw new nr(n).init(r,t),n}var N={};function bn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function L(n){return this.fromWireType(E[n>>2])}var S={},k={},G={},tr=48,er=57;function ir(n){if(n===void 0)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=tr&&r<=er?"_"+n:n}function or(n,r){return n=ir(n),{[n]:function(){return r.apply(this,arguments)}}[n]}function nn(n,r){var t=or(r,function(e){this.name=r,this.message=e;var o=new Error(e).stack;o!==void 0&&(this.stack=this.toString()+`
`+o.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:this.name+": "+this.message},t}var An=void 0;function Tn(n){throw new An(n)}function Cn(n,r,t){function e(u){var s=t(u);s.length!==n.length&&Tn("Mismatched type converter count");for(var f=0;f<n.length;++f)A(n[f],s[f])}n.forEach(function(u){G[u]=r});var o=new Array(r.length),a=[],c=0;r.forEach((u,s)=>{k.hasOwnProperty(u)?o[s]=k[u]:(a.push(u),S.hasOwnProperty(u)||(S[u]=[]),S[u].push(()=>{o[s]=k[u],++c===a.length&&e(o)}))}),a.length===0&&e(o)}function ar(n){var r=N[n];delete N[n];var t=r.rawConstructor,e=r.rawDestructor,o=r.fields;Cn([n],o.map(a=>a.getterReturnType).concat(o.map(a=>a.setterArgumentType)),a=>{var c={};return o.forEach((u,s)=>{var f=u.fieldName,l=a[s],d=u.getter,_=u.getterContext,w=a[s+o.length],j=u.setter,y=u.setterContext;c[f]={read:H=>l.fromWireType(d(_,H)),write:(H,en)=>{var C=[];j(y,H,w.toWireType(C,en)),bn(C)}}}),[{name:r.name,fromWireType:function(u){var s={};for(var f in c)s[f]=c[f].read(u);return e(u),s},toWireType:function(u,s){for(var f in c)if(!(f in s))throw new TypeError('Missing field:  "'+f+'"');var l=t();for(f in c)c[f].write(l,s[f]);return u!==null&&u.push(e,l),l},argPackAdvance:8,readValueFromPointer:L,destructorFunction:e}]})}function ur(n,r,t,e,o){}function rn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function cr(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);Pn=n}var Pn=void 0;function h(n){for(var r="",t=n;v[t];)r+=Pn[v[t++]];return r}var En=void 0;function m(n){throw new En(n)}function A(n,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||m('type "'+e+'" must have a positive integer typeid pointer'),k.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;m("Cannot register type '"+e+"' twice")}if(k[n]=r,delete G[n],S.hasOwnProperty(n)){var o=S[n];delete S[n],o.forEach(a=>a())}}function sr(n,r,t,e,o){var a=rn(t);A(n,{name:r=h(r),fromWireType:function(c){return!!c},toWireType:function(c,u){return u?e:o},argPackAdvance:8,readValueFromPointer:function(c){var u;if(t===1)u=P;else if(t===2)u=R;else{if(t!==4)throw new TypeError("Unknown boolean type size: "+r);u=E}return this.fromWireType(u[c>>a])},destructorFunction:null})}function fr(){this.allocated=[void 0],this.freelist=[],this.get=function(n){return this.allocated[n]},this.allocate=function(n){let r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=n,r},this.free=function(n){this.allocated[n]=void 0,this.freelist.push(n)}}var g=new fr;function Wn(n){n>=g.reserved&&--g.get(n).refcount==0&&g.free(n)}function lr(){for(var n=0,r=g.reserved;r<g.allocated.length;++r)g.allocated[r]!==void 0&&++n;return n}function dr(){g.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),g.reserved=g.allocated.length,i.count_emval_handles=lr}var X={toValue:n=>(n||m("Cannot use deleted val. handle = "+n),g.get(n).value),toHandle:n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return g.allocate({refcount:1,value:n})}}};function pr(n,r){A(n,{name:r=h(r),fromWireType:function(t){var e=X.toValue(t);return Wn(t),e},toWireType:function(t,e){return X.toHandle(e)},argPackAdvance:8,readValueFromPointer:L,destructorFunction:null})}function vr(n,r){switch(r){case 2:return function(t){return this.fromWireType(fn[t>>2])};case 3:return function(t){return this.fromWireType(ln[t>>3])};default:throw new TypeError("Unknown float type: "+n)}}function hr(n,r,t){var e=rn(t);A(n,{name:r=h(r),fromWireType:function(o){return o},toWireType:function(o,a){return a},argPackAdvance:8,readValueFromPointer:vr(r,e),destructorFunction:null})}function mr(n,r,t,e,o,a){var c=r.length;c<2&&m("argTypes array size mismatch! Must at least get return value and 'this' types!"),r[1];for(var u=!1,s=1;s<r.length;++s)if(r[s]!==null&&r[s].destructorFunction===void 0){u=!0;break}var f=r[0].name!=="void",l=c-2,d=new Array(l),_=[],w=[];return function(){var j;arguments.length!==l&&m("function "+n+" called with "+arguments.length+" arguments, expected "+l+" args!"),w.length=0,_.length=1,_[0]=o;for(var y=0;y<l;++y)d[y]=r[y+2].toWireType(w,arguments[y]),_.push(d[y]);function H(en){if(u)bn(w);else for(var C=2;C<r.length;C++){var at=C===1?j:d[C-2];r[C].destructorFunction!==null&&r[C].destructorFunction(at)}if(f)return r[0].fromWireType(en)}return H(e.apply(null,_))}}function gr(n,r,t){if(n[r].overloadTable===void 0){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||m("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}function yr(n,r,t){i.hasOwnProperty(n)?((t===void 0||i[n].overloadTable!==void 0&&i[n].overloadTable[t]!==void 0)&&m("Cannot register public name '"+n+"' twice"),gr(i,n,n),i.hasOwnProperty(t)&&m("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[n].overloadTable[t]=r):(i[n]=r,t!==void 0&&(i[n].numArguments=t))}function _r(n,r){for(var t=[],e=0;e<n;e++)t.push(p[r+4*e>>2]);return t}function wr(n,r,t){i.hasOwnProperty(n)||Tn("Replacing nonexistant public symbol"),i[n].overloadTable!==void 0&&t!==void 0?i[n].overloadTable[t]=r:(i[n]=r,i[n].argCount=t)}function br(n,r,t){var e=i["dynCall_"+n];return t&&t.length?e.apply(null,[r].concat(t)):e.call(null,r)}function Ar(n,r,t){return n.includes("j")?br(n,r,t):J(r).apply(null,t)}function Tr(n,r){var t=[];return function(){return t.length=0,Object.assign(t,arguments),Ar(n,r,t)}}function O(n,r){function t(){return n.includes("j")?Tr(n,r):J(r)}n=h(n);var e=t();return typeof e!="function"&&m("unknown function pointer with signature "+n+": "+r),e}var kn=void 0;function jn(n){var r=Un(n),t=h(r);return T(r),t}function Cr(n,r){var t=[],e={};function o(a){e[a]||k[a]||(G[a]?G[a].forEach(o):(t.push(a),e[a]=!0))}throw r.forEach(o),new kn(n+": "+t.map(jn).join([", "]))}function Pr(n,r,t,e,o,a,c){var u=_r(r,t);n=h(n),o=O(e,o),yr(n,function(){Cr("Cannot call "+n+" due to unbound types",u)},r-1),Cn([],u,function(s){var f=[s[0],null].concat(s.slice(1));return wr(n,mr(n,f,null,o,a),r-1),[]})}function Er(n,r,t){switch(r){case 0:return t?function(e){return P[e]}:function(e){return v[e]};case 1:return t?function(e){return R[e>>1]}:function(e){return M[e>>1]};case 2:return t?function(e){return E[e>>2]}:function(e){return p[e>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Wr(n,r,t,e,o){r=h(r);var a=rn(t),c=l=>l;if(e===0){var u=32-8*t;c=l=>l<<u>>>u}var s=r.includes("unsigned"),f=(l,d)=>{};A(n,{name:r,fromWireType:c,toWireType:s?function(l,d){return f(d,this.name),d>>>0}:function(l,d){return f(d,this.name),d},argPackAdvance:8,readValueFromPointer:Er(r,a,e!==0),destructorFunction:null})}function kr(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(a){var c=p,u=c[a>>=2],s=c[a+1];return new e(c.buffer,s,u)}A(n,{name:t=h(t),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})}function jr(n,r,t,e){if(!(e>0))return 0;for(var o=t,a=t+e-1,c=0;c<n.length;++c){var u=n.charCodeAt(c);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++c)),u<=127){if(t>=a)break;r[t++]=u}else if(u<=2047){if(t+1>=a)break;r[t++]=192|u>>6,r[t++]=128|63&u}else if(u<=65535){if(t+2>=a)break;r[t++]=224|u>>12,r[t++]=128|u>>6&63,r[t++]=128|63&u}else{if(t+3>=a)break;r[t++]=240|u>>18,r[t++]=128|u>>12&63,r[t++]=128|u>>6&63,r[t++]=128|63&u}}return r[t]=0,t-o}function Fr(n,r,t){return jr(n,v,r,t)}function Rr(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e<=127?r++:e<=2047?r+=2:e>=55296&&e<=57343?(r+=4,++t):r+=3}return r}var Fn=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function Rn(n,r,t){for(var e=r+t,o=r;n[o]&&!(o>=e);)++o;if(o-r>16&&n.buffer&&Fn)return Fn.decode(n.subarray(r,o));for(var a="";r<o;){var c=n[r++];if(128&c){var u=63&n[r++];if((224&c)!=192){var s=63&n[r++];if((c=(240&c)==224?(15&c)<<12|u<<6|s:(7&c)<<18|u<<12|s<<6|63&n[r++])<65536)a+=String.fromCharCode(c);else{var f=c-65536;a+=String.fromCharCode(55296|f>>10,56320|1023&f)}}else a+=String.fromCharCode((31&c)<<6|u)}else a+=String.fromCharCode(c)}return a}function Sr(n,r){return n?Rn(v,n,r):""}function xr(n,r){var t=(r=h(r))==="std::string";A(n,{name:r,fromWireType:function(e){var o,a=p[e>>2],c=e+4;if(t)for(var u=c,s=0;s<=a;++s){var f=c+s;if(s==a||v[f]==0){var l=Sr(u,f-u);o===void 0?o=l:(o+="\0",o+=l),u=f+1}}else{var d=new Array(a);for(s=0;s<a;++s)d[s]=String.fromCharCode(v[c+s]);o=d.join("")}return T(e),o},toWireType:function(e,o){var a;o instanceof ArrayBuffer&&(o=new Uint8Array(o));var c=typeof o=="string";c||o instanceof Uint8Array||o instanceof Uint8ClampedArray||o instanceof Int8Array||m("Cannot pass non-string to std::string"),a=t&&c?Rr(o):o.length;var u=tn(4+a+1),s=u+4;if(p[u>>2]=a,t&&c)Fr(o,s,a+1);else if(c)for(var f=0;f<a;++f){var l=o.charCodeAt(f);l>255&&(T(s),m("String has UTF-16 code units that do not fit in 8 bits")),v[s+f]=l}else for(f=0;f<a;++f)v[s+f]=o[f];return e!==null&&e.push(T,u),u},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(e){T(e)}})}var Sn=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0;function Ur(n,r){for(var t=n,e=t>>1,o=e+r/2;!(e>=o)&&M[e];)++e;if((t=e<<1)-n>32&&Sn)return Sn.decode(v.subarray(n,t));for(var a="",c=0;!(c>=r/2);++c){var u=R[n+2*c>>1];if(u==0)break;a+=String.fromCharCode(u)}return a}function Ir(n,r,t){if(t===void 0&&(t=2147483647),t<2)return 0;for(var e=r,o=(t-=2)<2*n.length?t/2:n.length,a=0;a<o;++a){var c=n.charCodeAt(a);R[r>>1]=c,r+=2}return R[r>>1]=0,r-e}function Or(n){return 2*n.length}function Hr(n,r){for(var t=0,e="";!(t>=r/4);){var o=E[n+4*t>>2];if(o==0)break;if(++t,o>=65536){var a=o-65536;e+=String.fromCharCode(55296|a>>10,56320|1023&a)}else e+=String.fromCharCode(o)}return e}function zr(n,r,t){if(t===void 0&&(t=2147483647),t<4)return 0;for(var e=r,o=e+t-4,a=0;a<n.length;++a){var c=n.charCodeAt(a);if(c>=55296&&c<=57343&&(c=65536+((1023&c)<<10)|1023&n.charCodeAt(++a)),E[r>>2]=c,(r+=4)+4>o)break}return E[r>>2]=0,r-e}function Dr(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function Vr(n,r,t){var e,o,a,c,u;t=h(t),r===2?(e=Ur,o=Ir,c=Or,a=()=>M,u=1):r===4&&(e=Hr,o=zr,c=Dr,a=()=>p,u=2),A(n,{name:t,fromWireType:function(s){for(var f,l=p[s>>2],d=a(),_=s+4,w=0;w<=l;++w){var j=s+4+w*r;if(w==l||d[j>>u]==0){var y=e(_,j-_);f===void 0?f=y:(f+="\0",f+=y),_=j+r}}return T(s),f},toWireType:function(s,f){typeof f!="string"&&m("Cannot pass non-string to C++ string type "+t);var l=c(f),d=tn(4+l+r);return p[d>>2]=l>>u,o(f,d+4,l+r),s!==null&&s.push(T,d),d},argPackAdvance:8,readValueFromPointer:L,destructorFunction:function(s){T(s)}})}function Mr(n,r,t,e,o,a){N[n]={name:h(r),rawConstructor:O(t,e),rawDestructor:O(o,a),fields:[]}}function Br(n,r,t,e,o,a,c,u,s,f){N[n].fields.push({fieldName:h(r),getterReturnType:t,getter:O(e,o),getterContext:a,setterArgumentType:c,setter:O(u,s),setterContext:f})}function qr(n,r){A(n,{isVoid:!0,name:r=h(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,e){}})}function Nr(n){n>4&&(g.get(n).refcount+=1)}var Lr={};function Gr(n){var r=Lr[n];return r===void 0?h(n):r}function Xr(n){return X.toHandle(Gr(n))}function Zr(n,r){var t=k[n];return t===void 0&&m(r+" has unknown type "+jn(n)),t}function $r(n,r){var t=(n=Zr(n,"_emval_take_value")).readValueFromPointer(r);return X.toHandle(t)}function Kr(){B("")}function Qr(n,r,t){v.copyWithin(n,r,r+t)}function Yr(){return 2147483648}function Jr(n){var r=V.buffer;try{return V.grow(n-r.byteLength+65535>>>16),vn(),1}catch{}}function nt(n){var r=v.length;n>>>=0;var t=Yr();if(n>t)return!1;let e=(c,u)=>c+(u-c%u)%u;for(var o=1;o<=4;o*=2){var a=r*(1+.2/o);if(a=Math.min(a,n+100663296),Jr(Math.min(t,e(Math.max(n,a),65536))))return!0}return!1}function rt(n){return 52}function tt(n,r,t,e,o){return 70}var et=[null,[],[]];function it(n,r){var t=et[n];r===0||r===10?((n===1?Vn:F)(Rn(t,0)),t.length=0):t.push(r)}function ot(n,r,t,e){for(var o=0,a=0;a<t;a++){var c=p[r>>2],u=p[r+4>>2];r+=8;for(var s=0;s<u;s++)it(n,v[c+s]);o+=u}return p[e>>2]=o,0}An=i.InternalError=nn(Error,"InternalError"),cr(),En=i.BindingError=nn(Error,"BindingError"),dr(),kn=i.UnboundTypeError=nn(Error,"UnboundTypeError");var xn={__call_sighandler:Jn,__cxa_throw:rr,_embind_finalize_value_object:ar,_embind_register_bigint:ur,_embind_register_bool:sr,_embind_register_emval:pr,_embind_register_float:hr,_embind_register_function:Pr,_embind_register_integer:Wr,_embind_register_memory_view:kr,_embind_register_std_string:xr,_embind_register_std_wstring:Vr,_embind_register_value_object:Mr,_embind_register_value_object_field:Br,_embind_register_void:qr,_emval_decref:Wn,_emval_incref:Nr,_emval_new_cstring:Xr,_emval_take_value:$r,abort:Kr,emscripten_memcpy_big:Qr,emscripten_resize_heap:nt,fd_close:rt,fd_seek:tt,fd_write:ot};Yn();var tn=function(){return(tn=i.asm.malloc).apply(null,arguments)},T=function(){return(T=i.asm.free).apply(null,arguments)},Un=function(){return(Un=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Z,In=function(){return(In=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function On(){function n(){Z||(Z=!0,i.calledRun=!0,pn||(Bn(),un(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),qn()))}W>0||(Mn(),W>0||(i.setStatus?(i.setStatus("Running..."),setTimeout(function(){setTimeout(function(){i.setStatus("")},1),n()},1)):n()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},U=function n(){Z||On(),Z||(U=n)},i.preInit)for(typeof i.preInit=="function"&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return On(),K.ready},on.exports=an),zn.exports;var on,$,an}const st=ut(ct()),ft=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{ft as i};
