function En(e,w){for(var h=0;h<w.length;h++){const s=w[h];if(typeof s!="string"&&!Array.isArray(s)){for(const c in s)if(c!=="default"&&!(c in e)){const m=Object.getOwnPropertyDescriptor(s,c);m&&Object.defineProperty(e,c,m.get?m:{enumerable:!0,get:()=>s[c]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}var V,E,Z,q={exports:{}};V=q,E=typeof document<"u"&&document.currentScript?document.currentScript.src:void 0,typeof __filename<"u"&&(E=E||__filename),Z=function(e){var w,h;(e=(e=e||{})!==void 0?e:{}).ready=new Promise(function(n,r){w=n,h=r});var s,c={};for(s in e)e.hasOwnProperty(s)&&(c[s]=e[s]);var m,I,x,g,_,U=typeof window=="object",b=typeof importScripts=="function",$=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string",l="";function nn(n){return e.locateFile?e.locateFile(n,l):l+n}$?(l=b?require("path").dirname(l)+"/":__dirname+"/",m=function(n,r){return g||(g=require("fs")),_||(_=require("path")),n=_.normalize(n),g.readFileSync(n,r?null:"utf8")},x=function(n){var r=m(n,!0);return r.buffer||(r=new Uint8Array(r)),en(r.buffer),r},I=function(n,r,t){g||(g=require("fs")),_||(_=require("path")),n=_.normalize(n),g.readFile(n,function(i,a){i?t(i):r(a.buffer)})},process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),process.on("uncaughtException",function(n){if(!(n instanceof Pn))throw n}),process.on("unhandledRejection",y),e.inspect=function(){return"[Emscripten Module object]"}):(U||b)&&(b?l=self.location.href:typeof document<"u"&&document.currentScript&&(l=document.currentScript.src),E&&(l=E),l=l.indexOf("blob:")!==0?l.substr(0,l.lastIndexOf("/")+1):"",m=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.send(null),r.responseText},b&&(x=function(n){var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}),I=function(n,r,t){var i=new XMLHttpRequest;i.open("GET",n,!0),i.responseType="arraybuffer",i.onload=function(){i.status==200||i.status==0&&i.response?r(i.response):t()},i.onerror=t,i.send(null)}),e.print||console.log.bind(console);var v,D,A=e.printErr||console.warn.bind(console);for(s in c)c.hasOwnProperty(s)&&(e[s]=c[s]);c=null,e.arguments&&e.arguments,e.thisProgram&&e.thisProgram,e.quit&&e.quit,e.wasmBinary&&(v=e.wasmBinary),e.noExitRuntime,typeof WebAssembly!="object"&&y("no native wasm support detected");var C=!1;function en(n,r){n||y("Assertion failed: "+r)}var F,R,T,p,H,B=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0;function rn(n,r,t){for(var i=r+t,a=r;n[a]&&!(a>=i);)++a;if(a-r>16&&n.subarray&&B)return B.decode(n.subarray(r,a));for(var u="";r<a;){var o=n[r++];if(128&o){var P=63&n[r++];if((224&o)!=192){var K=63&n[r++];if((o=(240&o)==224?(15&o)<<12|P<<6|K:(7&o)<<18|P<<12|K<<6|63&n[r++])<65536)u+=String.fromCharCode(o);else{var Q=o-65536;u+=String.fromCharCode(55296|Q>>10,56320|1023&Q)}}else u+=String.fromCharCode((31&o)<<6|P)}else u+=String.fromCharCode(o)}return u}function M(n,r){return n?rn(T,n,r):""}function tn(n,r){return n%r>0&&(n+=r-n%r),n}function k(n){F=n,e.HEAP8=R=new Int8Array(n),e.HEAP16=new Int16Array(n),e.HEAP32=p=new Int32Array(n),e.HEAPU8=T=new Uint8Array(n),e.HEAPU16=new Uint16Array(n),e.HEAPU32=new Uint32Array(n),e.HEAPF32=new Float32Array(n),e.HEAPF64=new Float64Array(n)}e.INITIAL_MEMORY;var z=[],L=[],G=[];function on(){if(e.preRun)for(typeof e.preRun=="function"&&(e.preRun=[e.preRun]);e.preRun.length;)an(e.preRun.shift());O(z)}function un(){O(L)}function sn(){if(e.postRun)for(typeof e.postRun=="function"&&(e.postRun=[e.postRun]);e.postRun.length;)cn(e.postRun.shift());O(G)}function an(n){z.unshift(n)}function fn(n){L.unshift(n)}function cn(n){G.unshift(n)}var d=0,S=null;function ln(n){d++,e.monitorRunDependencies&&e.monitorRunDependencies(d)}function pn(n){if(d--,e.monitorRunDependencies&&e.monitorRunDependencies(d),d==0&&S){var r=S;S=null,r()}}function y(n){e.onAbort&&e.onAbort(n),A(n+=""),C=!0,n="abort("+n+"). Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(n);throw h(r),r}e.preloadedImages={},e.preloadedAudios={};var f,hn="data:application/octet-stream;base64,";function X(n){return n.startsWith(hn)}function N(n){return n.startsWith("file://")}function Y(n){try{if(n==f&&v)return new Uint8Array(v);if(x)return x(n);throw"both async and sync fetching of the wasm failed"}catch(r){y(r)}}function mn(){if(!v&&(U||b)){if(typeof fetch=="function"&&!N(f))return fetch(f,{credentials:"same-origin"}).then(function(n){if(!n.ok)throw"failed to load wasm binary file at '"+f+"'";return n.arrayBuffer()}).catch(function(){return Y(f)});if(I)return new Promise(function(n,r){I(f,function(t){n(new Uint8Array(t))},r)})}return Promise.resolve().then(function(){return Y(f)})}function dn(){var n={a:Sn};function r(u,o){var P=u.exports;e.asm=P,k((D=e.asm.g).buffer),H=e.asm.m,fn(e.asm.h),pn()}function t(u){r(u.instance)}function i(u){return mn().then(function(o){return WebAssembly.instantiate(o,n)}).then(u,function(o){A("failed to asynchronously prepare wasm: "+o),y(o)})}function a(){return v||typeof WebAssembly.instantiateStreaming!="function"||X(f)||N(f)||typeof fetch!="function"?i(t):fetch(f,{credentials:"same-origin"}).then(function(u){return WebAssembly.instantiateStreaming(u,n).then(t,function(o){return A("wasm streaming compile failed: "+o),A("falling back to ArrayBuffer instantiation"),i(t)})})}if(ln(),e.instantiateWasm)try{return e.instantiateWasm(n,r)}catch(u){return A("Module.instantiateWasm callback failed with error: "+u),!1}return a().catch(h),{}}function O(n){for(;n.length>0;){var r=n.shift();if(typeof r!="function"){var t=r.func;typeof t=="number"?r.arg===void 0?H.get(t)():H.get(t)(r.arg):t(r.arg===void 0?null:r.arg)}else r(e)}}function yn(n,r,t,i){y("Assertion failed: "+M(n)+", at: "+[r?M(r):"unknown filename",t,i?M(i):"unknown function"])}function gn(n){return J(n+16)+16}function _n(n){this.excPtr=n,this.ptr=n-16,this.set_type=function(r){p[this.ptr+4>>2]=r},this.get_type=function(){return p[this.ptr+4>>2]},this.set_destructor=function(r){p[this.ptr+8>>2]=r},this.get_destructor=function(){return p[this.ptr+8>>2]},this.set_refcount=function(r){p[this.ptr>>2]=r},this.set_caught=function(r){r=r?1:0,R[this.ptr+12>>0]=r},this.get_caught=function(){return R[this.ptr+12>>0]!=0},this.set_rethrown=function(r){r=r?1:0,R[this.ptr+13>>0]=r},this.get_rethrown=function(){return R[this.ptr+13>>0]!=0},this.init=function(r,t){this.set_type(r),this.set_destructor(t),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var r=p[this.ptr>>2];p[this.ptr>>2]=r+1},this.release_ref=function(){var r=p[this.ptr>>2];return p[this.ptr>>2]=r-1,r===1}}function wn(n,r,t){throw new _n(n).init(r,t),n}function bn(){y()}function vn(n,r,t){T.copyWithin(n,r,r+t)}function An(n){try{return D.grow(n-F.byteLength+65535>>>16),k(D.buffer),1}catch{}}function Rn(n){var r=T.length,t=2147483648;if((n>>>=0)>t)return!1;for(var i=1;i<=4;i*=2){var a=r*(1+.2/i);if(a=Math.min(a,n+100663296),An(Math.min(t,tn(Math.max(n,a),65536))))return!0}return!1}X(f="lerc-wasm.wasm")||(f=nn(f));var Sn={a:yn,c:gn,b:wn,f:bn,d:vn,e:Rn};dn(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.h).apply(null,arguments)},e._lerc_getBlobInfo=function(){return(e._lerc_getBlobInfo=e.asm.i).apply(null,arguments)},e._lerc_getDataRanges=function(){return(e._lerc_getDataRanges=e.asm.j).apply(null,arguments)},e._lerc_decode=function(){return(e._lerc_decode=e.asm.k).apply(null,arguments)},e._lerc_decode_4D=function(){return(e._lerc_decode_4D=e.asm.l).apply(null,arguments)};var j,J=e._malloc=function(){return(J=e._malloc=e.asm.n).apply(null,arguments)};function Pn(n){this.name="ExitStatus",this.message="Program terminated with exit("+n+")",this.status=n}function W(n){function r(){j||(j=!0,e.calledRun=!0,C||(un(),w(e),e.onRuntimeInitialized&&e.onRuntimeInitialized(),sn()))}d>0||(on(),d>0||(e.setStatus?(e.setStatus("Running..."),setTimeout(function(){setTimeout(function(){e.setStatus("")},1),r()},1)):r()))}if(e._free=function(){return(e._free=e.asm.o).apply(null,arguments)},S=function n(){j||W(),j||(S=n)},e.run=W,e.preInit)for(typeof e.preInit=="function"&&(e.preInit=[e.preInit]);e.preInit.length>0;)e.preInit.pop()();return W(),e.ready},V.exports=Z;const In=En({__proto__:null,default:q.exports},[q.exports]);export{In as l};
