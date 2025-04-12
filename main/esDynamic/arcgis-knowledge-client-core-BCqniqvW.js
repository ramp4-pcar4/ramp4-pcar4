import{o as ot,e as Re}from"./_commonjsHelpers-BITg13Vk.js";var Cr,Wr={exports:{}};function it(){return Cr||(Cr=1,de=Wr,ye=typeof document<"u"?document.currentScript?.src:void 0,ge=function(jr={}){var Ie,Z,Be,f=jr,Er=new Promise((e,r)=>{Ie=e,Z=r}),Me=Object.assign({},f),He="./this.program",F="";typeof document<"u"&&document.currentScript&&(F=document.currentScript.src),ye&&(F=ye),F=F.startsWith("blob:")?"":F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1),Be=async e=>{if((e=await fetch(e,{credentials:"same-origin"})).ok)return e.arrayBuffer();throw Error(e.status+" : "+e.url)};var Pr=f.print||console.log.bind(console),B=f.printErr||console.error.bind(console);Object.assign(f,Me),Me=null,f.thisProgram&&(He=f.thisProgram);var X,we,M,b,H,V,U,v,De,Ve,ze,qe,ee=f.wasmBinary,re=!1;function Ne(){var e=X.buffer;f.HEAP8=M=new Int8Array(e),f.HEAP16=H=new Int16Array(e),f.HEAPU8=b=new Uint8Array(e),f.HEAPU16=V=new Uint16Array(e),f.HEAP32=U=new Int32Array(e),f.HEAPU32=v=new Uint32Array(e),f.HEAPF32=De=new Float32Array(e),f.HEAPF64=qe=new Float64Array(e),f.HEAP64=Ve=new BigInt64Array(e),f.HEAPU64=ze=new BigUint64Array(e)}var Le=[],Ge=[],Je=[];function Or(){var e=f.preRun.shift();Le.unshift(e)}var _=0,z=null;function Ke(e){throw f.onAbort?.(e),B(e="Aborted("+e+")"),re=!0,e=new WebAssembly.RuntimeError(e+". Build with -sASSERTIONS for more info."),Z(e),e}var $e,Qe=e=>e.startsWith("data:application/octet-stream;base64,");async function kr(e){if(!ee)try{var r=await Be(e);return new Uint8Array(r)}catch{}if(e!=$e||!ee)throw"both async and sync fetching of the wasm failed";return e=new Uint8Array(ee)}async function Sr(e,r){try{var t=await kr(e);return await WebAssembly.instantiate(t,r)}catch(n){B(`failed to asynchronously prepare wasm: ${n}`),Ke(n)}}async function xr(e){var r=$e;if(!ee&&typeof WebAssembly.instantiateStreaming=="function"&&!Qe(r)&&typeof fetch=="function")try{var t=fetch(r,{credentials:"same-origin"});return await WebAssembly.instantiateStreaming(t,e)}catch(n){B(`wasm streaming compile failed: ${n}`),B("falling back to ArrayBuffer instantiation")}return Sr(r,e)}class Ye{name="ExitStatus";constructor(r){this.message=`Program terminated with exit(${r})`,this.status=r}}var be=e=>{for(;0<e.length;)e.shift()(f)},Te=f.noExitRuntime||!0;class Fr{constructor(r){this.ga=r-24}}var te={},ne=e=>{for(;e.length;){var r=e.pop();e.pop()(r)}};function q(e){return this.fromWireType(v[e>>2])}var N,Ze,p,D={},R={},ae={},W=(e,r,t)=>{function n(i){if((i=t(i)).length!==e.length)throw new N("Mismatched type converter count");for(var u=0;u<e.length;++u)j(e[u],i[u])}e.forEach(i=>ae[i]=r);var a=Array(r.length),o=[],s=0;r.forEach((i,u)=>{R.hasOwnProperty(i)?a[u]=R[i]:(o.push(i),D.hasOwnProperty(i)||(D[i]=[]),D[i].push(()=>{a[u]=R[i],++s===o.length&&n(a)}))}),o.length===0&&n(a)},oe=e=>{if(e===null)return"null";var r=typeof e;return r==="object"||r==="array"||r==="function"?e.toString():""+e},g=e=>{for(var r="";b[e];)r+=Ze[b[e++]];return r};function Ur(e,r,t={}){var n=r.name;if(!e)throw new p(`type "${n}" must have a positive integer typeid pointer`);if(R.hasOwnProperty(e)){if(t.La)return;throw new p(`Cannot register type '${n}' twice`)}R[e]=r,delete ae[e],D.hasOwnProperty(e)&&(r=D[e],delete D[e],r.forEach(a=>a()))}function j(e,r,t={}){return Ur(e,r,t)}var Xe=(e,r,t)=>{switch(r){case 1:return t?n=>M[n]:n=>b[n];case 2:return t?n=>H[n>>1]:n=>V[n>>1];case 4:return t?n=>U[n>>2]:n=>v[n>>2];case 8:return t?n=>Ve[n>>3]:n=>ze[n>>3];default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},Ae=e=>{throw new p(e.ea.ha.fa.name+" instance already deleted")},Ce=!1,er=()=>{},rr=(e,r,t)=>r===t?e:t.ka===void 0||(e=rr(e,r,t.ka))===null?null:t.Ea(e),tr={},_r={},Rr=(e,r)=>{if(r===void 0)throw new p("ptr should not be undefined");for(;e.ka;)r=e.ua(r),e=e.ka;return _r[r]},ie=(e,r)=>{if(!r.ha||!r.ga)throw new N("makeClassHandle requires ptr and ptrType");if(!!r.na!=!!r.ja)throw new N("Both smartPtrType and smartPtr must be specified");return r.count={value:1},se(Object.create(e,{ea:{value:r,writable:!0}}))},se=e=>typeof FinalizationRegistry>"u"?(se=r=>r,e):(Ce=new FinalizationRegistry(r=>{--(r=r.ea).count.value,r.count.value===0&&(r.ja?r.na.oa(r.ja):r.ha.fa.oa(r.ga))}),er=r=>{Ce.unregister(r)},(se=r=>{var t=r.ea;return t.ja&&Ce.register(r,{ea:t},r),r})(e));function ue(){}var L=(e,r)=>Object.defineProperty(r,"name",{value:e}),We=(e,r,t)=>{if(e[r].ia===void 0){var n=e[r];e[r]=function(...a){if(!e[r].ia.hasOwnProperty(a.length))throw new p(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${e[r].ia})!`);return e[r].ia[a.length].apply(this,a)},e[r].ia=[],e[r].ia[n.qa]=n}},je=(e,r,t)=>{if(f.hasOwnProperty(e)){if(t===void 0||f[e].ia!==void 0&&f[e].ia[t]!==void 0)throw new p(`Cannot register public name '${e}' twice`);if(We(f,e,e),f[e].ia.hasOwnProperty(t))throw new p(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`);f[e].ia[t]=r}else f[e]=r,f[e].qa=t},Ir=e=>{var r=(e=e.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=r&&57>=r?`_${e}`:e};function Br(e,r,t,n,a,o,s,i){this.name=e,this.constructor=r,this.pa=t,this.oa=n,this.ka=a,this.Ga=o,this.ua=s,this.Ea=i,this.Na=[]}var fe=(e,r,t)=>{for(;r!==t;){if(!r.ua)throw new p(`Expected null or instance of ${t.name}, got an instance of ${r.name}`);e=r.ua(e),r=r.ka}return e};function Mr(e,r){if(r===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);return 0}if(!r.ea)throw new p(`Cannot pass "${oe(r)}" as a ${this.name}`);if(!r.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);return fe(r.ea.ga,r.ea.ha.fa,this.fa)}function Hr(e,r){if(r===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);if(this.xa){var t=this.za();return e!==null&&e.push(this.oa,t),t}return 0}if(!r||!r.ea)throw new p(`Cannot pass "${oe(r)}" as a ${this.name}`);if(!r.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);if(!this.wa&&r.ea.ha.wa)throw new p(`Cannot convert argument of type ${r.ea.na?r.ea.na.name:r.ea.ha.name} to parameter type ${this.name}`);if(t=fe(r.ea.ga,r.ea.ha.fa,this.fa),this.xa){if(r.ea.ja===void 0)throw new p("Passing raw pointer to smart pointer is illegal");switch(this.Sa){case 0:if(r.ea.na!==this)throw new p(`Cannot convert argument of type ${r.ea.na?r.ea.na.name:r.ea.ha.name} to parameter type ${this.name}`);t=r.ea.ja;break;case 1:t=r.ea.ja;break;case 2:if(r.ea.na===this)t=r.ea.ja;else{var n=r.clone();t=this.Oa(t,E(()=>n.delete())),e!==null&&e.push(this.oa,t)}break;default:throw new p("Unsupporting sharing policy")}}return t}function Dr(e,r){if(r===null){if(this.ya)throw new p(`null is not a valid ${this.name}`);return 0}if(!r.ea)throw new p(`Cannot pass "${oe(r)}" as a ${this.name}`);if(!r.ea.ga)throw new p(`Cannot pass deleted object as a pointer of type ${this.name}`);if(r.ea.ha.wa)throw new p(`Cannot convert argument of type ${r.ea.ha.name} to parameter type ${this.name}`);return fe(r.ea.ga,r.ea.ha.fa,this.fa)}function G(e,r,t,n,a,o,s,i,u,h,l){this.name=e,this.fa=r,this.ya=t,this.wa=n,this.xa=a,this.Ma=o,this.Sa=s,this.Ca=i,this.za=u,this.Oa=h,this.oa=l,a||r.ka!==void 0?this.toWireType=Hr:(this.toWireType=n?Mr:Dr,this.ma=null)}var nr,ar,or=(e,r,t)=>{if(!f.hasOwnProperty(e))throw new N("Replacing nonexistent public symbol");f[e].ia!==void 0&&t!==void 0?f[e].ia[t]=r:(f[e]=r,f[e].qa=t)},le=[],$=(e,r)=>{e=g(e);var t=le[r];if(t||(r>=le.length&&(le.length=r+1),le[r]=t=nr.get(r)),typeof t!="function")throw new p(`unknown function pointer with signature ${e}: ${r}`);return t},ir=e=>{e=$r(e);var r=g(e);return S(e),r},I=(e,r)=>{function t(o){a[o]||R[o]||(ae[o]?ae[o].forEach(t):(n.push(o),a[o]=!0))}var n=[],a={};throw r.forEach(t),new ar(`${e}: `+n.map(ir).join([", "]))};function Vr(e){for(var r=1;r<e.length;++r)if(e[r]!==null&&e[r].ma===void 0)return!0;return!1}function he(e,r,t,n,a){var o=r.length;if(2>o)throw new p("argTypes array size mismatch! Must at least get return value and 'this' types!");var s=r[1]!==null&&t!==null,i=Vr(r),u=r[0].name!=="void",h=o-2,l=Array(h),c=[],m=[];return L(e,function(...w){if(m.length=0,c.length=s?2:1,c[0]=a,s){var y=r[1].toWireType(m,this);c[1]=y}for(var d=0;d<h;++d)l[d]=r[d+2].toWireType(m,w[d]),c.push(l[d]);if(w=n(...c),i)ne(m);else for(d=s?1:2;d<r.length;d++){var A=d===1?y:l[d-2];r[d].ma!==null&&r[d].ma(A)}return y=u?r[0].fromWireType(w):void 0})}var Ee,sr,ur,J,ce=(e,r)=>{for(var t=[],n=0;n<e;n++)t.push(v[r+4*n>>2]);return t},Pe=e=>{const r=(e=e.trim()).indexOf("(");return r!==-1?e.substr(0,r):e},fr=(e,r,t)=>{if(!(e instanceof Object))throw new p(`${t} with invalid "this": ${e}`);if(!(e instanceof r.fa.constructor))throw new p(`${t} incompatible with "this" of type ${e.constructor.name}`);if(!e.ea.ga)throw new p(`cannot call emscripten binding method ${t} on deleted object`);return fe(e.ea.ga,e.ea.ha.fa,r.fa)},Oe=[],O=[],ke=e=>{9<e&&--O[e+1]==0&&(O[e]=void 0,Oe.push(e))},T=e=>{if(!e)throw new p("Cannot use deleted val. handle = "+e);return O[e]},E=e=>{switch(e){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:const r=Oe.pop()||O.length;return O[r]=e,O[r+1]=1,r}},lr={name:"emscripten::val",fromWireType:e=>{var r=T(e);return ke(e),r},toWireType:(e,r)=>E(r),la:8,readValueFromPointer:q,ma:null},zr=(e,r,t)=>{switch(r){case 1:return t?function(n){return this.fromWireType(M[n])}:function(n){return this.fromWireType(b[n])};case 2:return t?function(n){return this.fromWireType(H[n>>1])}:function(n){return this.fromWireType(V[n>>1])};case 4:return t?function(n){return this.fromWireType(U[n>>2])}:function(n){return this.fromWireType(v[n>>2])};default:throw new TypeError(`invalid integer width (${r}): ${e}`)}},K=(e,r)=>{var t=R[e];if(t===void 0)throw e=`${r} has unknown type ${ir(e)}`,new p(e);return t},qr=(e,r)=>{switch(r){case 4:return function(t){return this.fromWireType(De[t>>2])};case 8:return function(t){return this.fromWireType(qe[t>>3])};default:throw new TypeError(`invalid float width (${r}): ${e}`)}},Nr=Object.assign({optional:!0},lr),Q=(e,r,t)=>{var n=b;if(0<t){t=r+t-1;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),127>=o){if(r>=t)break;n[r++]=o}else{if(2047>=o){if(r+1>=t)break;n[r++]=192|o>>6}else{if(65535>=o){if(r+2>=t)break;n[r++]=224|o>>12}else{if(r+3>=t)break;n[r++]=240|o>>18,n[r++]=128|o>>12&63}n[r++]=128|o>>6&63}n[r++]=128|63&o}}n[r]=0}},hr=typeof TextDecoder<"u"?new TextDecoder:void 0,cr=(e,r=0,t=NaN)=>{var n=r+t;for(t=r;e[t]&&!(t>=n);)++t;if(16<t-r&&e.buffer&&hr)return hr.decode(e.subarray(r,t));for(n="";r<t;){var a=e[r++];if(128&a){var o=63&e[r++];if((224&a)==192)n+=String.fromCharCode((31&a)<<6|o);else{var s=63&e[r++];65536>(a=(240&a)==224?(15&a)<<12|o<<6|s:(7&a)<<18|o<<12|s<<6|63&e[r++])?n+=String.fromCharCode(a):(a-=65536,n+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else n+=String.fromCharCode(a)}return n},pr=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Lr=(e,r)=>{for(var t=e>>1,n=t+r/2;!(t>=n)&&V[t];)++t;if(32<(t<<=1)-e&&pr)return pr.decode(b.subarray(e,t));for(t="",n=0;!(n>=r/2);++n){var a=H[e+2*n>>1];if(a==0)break;t+=String.fromCharCode(a)}return t},Gr=(e,r,t)=>{if(t??=2147483647,2>t)return 0;var n=r;t=(t-=2)<2*e.length?t/2:e.length;for(var a=0;a<t;++a)H[r>>1]=e.charCodeAt(a),r+=2;return H[r>>1]=0,r-n},Jr=e=>2*e.length,Kr=(e,r)=>{for(var t=0,n="";!(t>=r/4);){var a=U[e+4*t>>2];if(a==0)break;++t,65536<=a?(a-=65536,n+=String.fromCharCode(55296|a>>10,56320|1023&a)):n+=String.fromCharCode(a)}return n},Qr=(e,r,t)=>{if(t??=2147483647,4>t)return 0;var n=r;t=n+t-4;for(var a=0;a<e.length;++a){var o=e.charCodeAt(a);if(55296<=o&&57343>=o&&(o=65536+((1023&o)<<10)|1023&e.charCodeAt(++a)),U[r>>2]=o,(r+=4)+4>t)break}return U[r>>2]=0,r-n},Yr=e=>{for(var r=0,t=0;t<e.length;++t){var n=e.charCodeAt(t);55296<=n&&57343>=n&&++t,r+=4}return r},Se=0,mr=(e,r,t)=>{var n=[];return e=e.toWireType(n,t),n.length&&(v[r>>2]=E(n)),e},pe=[],Zr={},xe=e=>{var r=Zr[e];return r===void 0?g(e):r},vr=()=>{function e(r){r.$$$embind_global$$$=r;var t=typeof $$$embind_global$$$=="object"&&r.$$$embind_global$$$==r;return t||delete r.$$$embind_global$$$,t}if(typeof globalThis=="object")return globalThis;if(typeof $$$embind_global$$$=="object"||(typeof Re=="object"&&e(Re)?$$$embind_global$$$=Re:typeof self=="object"&&e(self)&&($$$embind_global$$$=self),typeof $$$embind_global$$$=="object"))return $$$embind_global$$$;throw Error("unable to get global object.")},Xr=e=>{var r=pe.length;return pe.push(e),r},et=(e,r)=>{for(var t=Array(e),n=0;n<e;++n)t[n]=K(v[r+4*n>>2],"parameter "+n);return t},rt=Reflect.construct,Y={},dr=e=>{if(!(e instanceof Ye||e=="unwind"))throw e},yr=e=>{throw we=e,Te||0<Se||(f.onExit?.(e),re=!0),new Ye(e)},tt=e=>{if(!re)try{if(e(),!(Te||0<Se))try{we=e=we,yr(e)}catch(r){dr(r)}}catch(r){dr(r)}},Fe={},gr=()=>{if(!Ee){var e,r={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:(typeof navigator=="object"&&navigator.languages&&navigator.languages[0]||"C").replace("-","_")+".UTF-8",_:He||"./this.program"};for(e in Fe)Fe[e]===void 0?delete r[e]:r[e]=Fe[e];var t=[];for(e in r)t.push(`${e}=${r[e]}`);Ee=t}return Ee},nt=[null,[],[]];N=f.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}};for(var wr=Array(256),me=0;256>me;++me)wr[me]=String.fromCharCode(me);Ze=wr,p=f.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},Object.assign(ue.prototype,{isAliasOf:function(e){if(!(this instanceof ue&&e instanceof ue))return!1;var r=this.ea.ha.fa,t=this.ea.ga;e.ea=e.ea;var n=e.ea.ha.fa;for(e=e.ea.ga;r.ka;)t=r.ua(t),r=r.ka;for(;n.ka;)e=n.ua(e),n=n.ka;return r===n&&t===e},clone:function(){if(this.ea.ga||Ae(this),this.ea.ta)return this.ea.count.value+=1,this;var e=se,r=Object,t=r.create,n=Object.getPrototypeOf(this),a=this.ea;return(e=e(t.call(r,n,{ea:{value:{count:a.count,sa:a.sa,ta:a.ta,ga:a.ga,ha:a.ha,ja:a.ja,na:a.na}}}))).ea.count.value+=1,e.ea.sa=!1,e},delete(){if(this.ea.ga||Ae(this),this.ea.sa&&!this.ea.ta)throw new p("Object already scheduled for deletion");er(this);var e=this.ea;--e.count.value,e.count.value===0&&(e.ja?e.na.oa(e.ja):e.ha.fa.oa(e.ga)),this.ea.ta||(this.ea.ja=void 0,this.ea.ga=void 0)},isDeleted:function(){return!this.ea.ga},deleteLater:function(){if(this.ea.ga||Ae(this),this.ea.sa&&!this.ea.ta)throw new p("Object already scheduled for deletion");return this.ea.sa=!0,this}}),Object.assign(G.prototype,{Ha(e){return this.Ca&&(e=this.Ca(e)),e},Aa(e){this.oa?.(e)},la:8,readValueFromPointer:q,fromWireType:function(e){function r(){return this.xa?ie(this.fa.pa,{ha:this.Ma,ga:t,na:this,ja:e}):ie(this.fa.pa,{ha:this,ga:e})}var t=this.Ha(e);if(!t)return this.Aa(e),null;var n=Rr(this.fa,t);if(n!==void 0)return n.ea.count.value===0?(n.ea.ga=t,n.ea.ja=e,n.clone()):(n=n.clone(),this.Aa(e),n);if(n=this.fa.Ga(t),!(n=tr[n]))return r.call(this);n=this.wa?n.Da:n.pointerType;var a=rr(t,this.fa,n.fa);return a===null?r.call(this):this.xa?ie(n.fa.pa,{ha:n,ga:a,na:this,ja:e}):ie(n.fa.pa,{ha:n,ga:a})}}),ar=f.UnboundTypeError=(sr=Error,(J=L(ur="UnboundTypeError",function(e){this.name=ur,this.message=e,(e=Error(e).stack)!==void 0&&(this.stack=this.toString()+`
`+e.replace(/^Error(:[^\n]*)?\n/,""))})).prototype=Object.create(sr.prototype),J.prototype.constructor=J,J.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},J),O.push(0,1,void 0,1,null,1,!0,1,!1,1),f.count_emval_handles=()=>O.length/2-5-Oe.length;var k,at={m:(e,r,t)=>{var n=new Fr(e);throw v[n.ga+16>>2]=0,v[n.ga+4>>2]=r,v[n.ga+8>>2]=t,e},O:()=>Ke(""),r:e=>{var r=te[e];delete te[e];var t=r.za,n=r.oa,a=r.Ba,o=a.map(s=>s.Ka).concat(a.map(s=>s.Qa));W([e],o,s=>{var i={};return a.forEach((u,h)=>{var l=s[h],c=u.Ia,m=u.Ja,w=s[h+a.length],y=u.Pa,d=u.Ra;i[u.Fa]={read:A=>l.fromWireType(c(m,A)),write:(A,x)=>{var P=[];y(d,A,w.toWireType(P,x)),ne(P)}}}),[{name:r.name,fromWireType:u=>{var h,l={};for(h in i)l[h]=i[h].read(u);return n(u),l},toWireType:(u,h)=>{for(var l in i)if(!(l in h))throw new TypeError(`Missing field: "${l}"`);var c=t();for(l in i)i[l].write(c,h[l]);return u!==null&&u.push(n,c),c},la:8,readValueFromPointer:q,ma:n}]})},E:(e,r,t)=>{j(e,{name:r=g(r),fromWireType:n=>n,toWireType:function(n,a){if(typeof a!="bigint"&&typeof a!="number")throw new TypeError(`Cannot convert "${oe(a)}" to ${this.name}`);return typeof a=="number"&&(a=BigInt(a)),a},la:8,readValueFromPointer:Xe(r,t,r.indexOf("u")==-1),ma:null})},V:(e,r,t,n)=>{j(e,{name:r=g(r),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?t:n},la:8,readValueFromPointer:function(a){return this.fromWireType(b[a])},ma:null})},f:(e,r,t,n,a,o,s,i,u,h,l,c,m)=>{l=g(l),o=$(a,o),i&&=$(s,i),h&&=$(u,h),m=$(c,m);var w=Ir(l);je(w,function(){I(`Cannot construct ${l} due to unbound types`,[n])}),W([e,r,t],n?[n]:[],y=>{if(y=y[0],n)var d=y.fa,A=d.pa;else A=ue.prototype;y=L(l,function(..._e){if(Object.getPrototypeOf(this)!==x)throw new p("Use 'new' to construct "+l);if(C.ra===void 0)throw new p(l+" has no accessible constructor");var Ar=C.ra[_e.length];if(Ar===void 0)throw new p(`Tried to invoke ctor of ${l} with invalid number of parameters (${_e.length}) - expected (${Object.keys(C.ra).toString()}) parameters instead!`);return Ar.apply(this,_e)});var x=Object.create(A,{constructor:{value:y}});y.prototype=x;var P,C=new Br(l,y,x,m,d,o,i,h);return C.ka&&((P=C.ka).va??(P.va=[]),C.ka.va.push(C)),d=new G(l,C,!0,!1,!1),P=new G(l+"*",C,!1,!1,!1),A=new G(l+" const*",C,!1,!0,!1),tr[e]={pointerType:P,Da:A},or(w,y),[d,P,A]})},v:(e,r,t,n,a,o,s)=>{var i=ce(t,n);r=g(r),r=Pe(r),o=$(a,o),W([],[e],u=>{function h(){I(`Cannot call ${l} due to unbound types`,i)}var l=`${(u=u[0]).name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var c=u.fa.constructor;return c[r]===void 0?(h.qa=t-1,c[r]=h):(We(c,r,l),c[r].ia[t-1]=h),W([],i,m=>{if(m=he(l,[m[0],null].concat(m.slice(1)),null,o,s),c[r].ia===void 0?(m.qa=t-1,c[r]=m):c[r].ia[t-1]=m,u.fa.va)for(const w of u.fa.va)w.constructor.hasOwnProperty(r)||(w.constructor[r]=m);return[]}),[]})},g:(e,r,t,n,a,o)=>{var s=ce(r,t);a=$(n,a),W([],[e],i=>{var u=`constructor ${(i=i[0]).name}`;if(i.fa.ra===void 0&&(i.fa.ra=[]),i.fa.ra[r-1]!==void 0)throw new p(`Cannot register multiple constructors with identical number of parameters (${r-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.fa.ra[r-1]=()=>{I(`Cannot construct ${i.name} due to unbound types`,s)},W([],s,h=>(h.splice(1,0,null),i.fa.ra[r-1]=he(u,h,null,a,o),[])),[]})},a:(e,r,t,n,a,o,s,i)=>{var u=ce(t,n);r=g(r),r=Pe(r),o=$(a,o),W([],[e],h=>{function l(){I(`Cannot call ${c} due to unbound types`,u)}var c=`${(h=h[0]).name}.${r}`;r.startsWith("@@")&&(r=Symbol[r.substring(2)]),i&&h.fa.Na.push(r);var m=h.fa.pa,w=m[r];return w===void 0||w.ia===void 0&&w.className!==h.name&&w.qa===t-2?(l.qa=t-2,l.className=h.name,m[r]=l):(We(m,r,c),m[r].ia[t-2]=l),W([],u,y=>(y=he(c,y,h,o,s),m[r].ia===void 0?(y.qa=t-2,m[r]=y):m[r].ia[t-2]=y,[])),[]})},c:(e,r,t,n,a,o,s,i,u,h)=>{r=g(r),a=$(n,a),W([],[e],l=>{var c=`${(l=l[0]).name}.${r}`,m={get(){I(`Cannot access ${c} due to unbound types`,[t,s])},enumerable:!0,configurable:!0};return m.set=u?()=>I(`Cannot access ${c} due to unbound types`,[t,s]):()=>{throw new p(c+" is a read-only property")},Object.defineProperty(l.fa.pa,r,m),W([],u?[t,s]:[t],w=>{var y=w[0],d={get(){var x=fr(this,l,c+" getter");return y.fromWireType(a(o,x))},enumerable:!0};if(u){u=$(i,u);var A=w[1];d.set=function(x){var P=fr(this,l,c+" setter"),C=[];u(h,P,A.toWireType(C,x)),ne(C)}}return Object.defineProperty(l.fa.pa,r,d),[]}),[]})},T:e=>j(e,lr),n:(e,r,t,n)=>{function a(){}r=g(r),a.values={},j(e,{name:r,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,s)=>s.value,la:8,readValueFromPointer:zr(r,t,n),ma:null}),je(r,a)},e:(e,r,t)=>{var n=K(e,"enum");r=g(r),e=n.constructor,n=Object.create(n.constructor.prototype,{value:{value:t},constructor:{value:L(`${n.name}_${r}`,function(){})}}),e.values[t]=n,e[r]=n},D:(e,r,t)=>{j(e,{name:r=g(r),fromWireType:n=>n,toWireType:(n,a)=>a,la:8,readValueFromPointer:qr(r,t),ma:null})},X:(e,r,t,n,a,o)=>{var s=ce(r,t);e=g(e),e=Pe(e),a=$(n,a),je(e,function(){I(`Cannot call ${e} due to unbound types`,s)},r-1),W([],s,i=>(or(e,he(e,[i[0],null].concat(i.slice(1)),null,a,o),r-1),[]))},w:(e,r,t,n,a)=>{if(r=g(r),a===-1&&(a=4294967295),a=i=>i,n===0){var o=32-8*t;a=i=>i<<o>>>o}var s=r.includes("unsigned")?function(i,u){return u>>>0}:function(i,u){return u};j(e,{name:r,fromWireType:a,toWireType:s,la:8,readValueFromPointer:Xe(r,t,n!==0),ma:null})},o:(e,r,t)=>{function n(o){return new a(M.buffer,v[o+4>>2],v[o>>2])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,BigInt64Array,BigUint64Array][r];j(e,{name:t=g(t),fromWireType:n,la:8,readValueFromPointer:n},{La:!0})},t:e=>{j(e,Nr)},i:(e,r,t,n,a,o,s,i,u,h,l,c)=>{t=g(t),o=$(a,o),i=$(s,i),h=$(u,h),c=$(l,c),W([e],[r],m=>(m=m[0],[new G(t,m.fa,!1,!1,!0,m,n,o,i,h,c)]))},U:(e,r)=>{j(e,{name:r=g(r),fromWireType:function(t){for(var n,a=v[t>>2],o=t+4,s=o,i=0;i<=a;++i){var u=o+i;i!=a&&b[u]!=0||(s=s?cr(b,s,u-s):"",n===void 0?n=s:(n+="\0",n+=s),s=u+1)}return S(t),n},toWireType:function(t,n){n instanceof ArrayBuffer&&(n=new Uint8Array(n));var a,o=typeof n=="string";if(!(o||n instanceof Uint8Array||n instanceof Uint8ClampedArray||n instanceof Int8Array))throw new p("Cannot pass non-string to std::string");if(o)for(var s=a=0;s<n.length;++s){var i=n.charCodeAt(s);127>=i?a++:2047>=i?a+=2:55296<=i&&57343>=i?(a+=4,++s):a+=3}else a=n.length;if(i=(s=Ue(4+a+1))+4,v[s>>2]=a,o)Q(n,i,a+1);else if(o)for(o=0;o<a;++o){var u=n.charCodeAt(o);if(255<u)throw S(i),new p("String has UTF-16 code units that do not fit in 8 bits");b[i+o]=u}else for(o=0;o<a;++o)b[i+o]=n[o];return t!==null&&t.push(S,s),s},la:8,readValueFromPointer:q,ma(t){S(t)}})},C:(e,r,t)=>{if(t=g(t),r===2)var n=Lr,a=Gr,o=Jr,s=i=>V[i>>1];else r===4&&(n=Kr,a=Qr,o=Yr,s=i=>v[i>>2]);j(e,{name:t,fromWireType:i=>{for(var u,h=v[i>>2],l=i+4,c=0;c<=h;++c){var m=i+4+c*r;c!=h&&s(m)!=0||(l=n(l,m-l),u===void 0?u=l:(u+="\0",u+=l),l=m+r)}return S(i),u},toWireType:(i,u)=>{if(typeof u!="string")throw new p(`Cannot pass non-string to C++ string type ${t}`);var h=o(u),l=Ue(4+h+r);return v[l>>2]=h/r,a(u,l+4,h+r),i!==null&&i.push(S,l),l},la:8,readValueFromPointer:q,ma(i){S(i)}})},s:(e,r,t,n,a,o)=>{te[e]={name:g(r),za:$(t,n),oa:$(a,o),Ba:[]}},j:(e,r,t,n,a,o,s,i,u,h)=>{te[e].Ba.push({Fa:g(r),Ka:t,Ia:$(n,a),Ja:o,Qa:s,Pa:$(i,u),Ra:h})},W:(e,r)=>{j(e,{Ta:!0,name:r=g(r),la:0,fromWireType:()=>{},toWireType:()=>{}})},J:()=>{Te=!1,Se=0},l:(e,r,t)=>(e=T(e),r=K(r,"emval::as"),mr(r,t,e)),y:(e,r)=>(e=T(e),(r=K(r,"emval::as")).toWireType(null,e)),Y:(e,r,t,n)=>(e=pe[e])(null,r=T(r),t,n),B:(e,r,t,n,a)=>(e=pe[e])(r=T(r),r[t=xe(t)],n,a),b:ke,G:e=>e===0?E(vr()):(e=xe(e),E(vr()[e])),A:(e,r,t)=>{var n=et(e,r),a=n.shift();e--;var o=Array(e);return r=`methodCaller<(${n.map(s=>s.name).join(", ")}) => ${a.name}>`,Xr(L(r,(s,i,u,h)=>{for(var l=0,c=0;c<e;++c)o[c]=n[c].readValueFromPointer(h+l),l+=n[c].la;return s=t===1?rt(i,o):i.apply(s,o),mr(a,u,s)}))},q:(e,r)=>(e=T(e),r=T(r),E(e[r])),h:e=>{9<e&&(O[e+1]+=1)},I:(e,r)=>(e=T(e))instanceof(r=T(r)),u:e=>typeof(e=T(e))=="number",x:e=>typeof(e=T(e))=="string",F:()=>E([]),p:e=>E(xe(e)),k:e=>{var r=T(e);ne(r),ke(e)},d:(e,r)=>(e=(e=K(e,"_emval_take_value")).readValueFromPointer(r),E(e)),z:e=>(e=T(e),E(typeof e)),K:(e,r)=>{if(Y[e]&&(clearTimeout(Y[e].id),delete Y[e]),!r)return 0;var t=setTimeout(()=>{delete Y[e],tt(()=>br(e,performance.now()))},r);return Y[e]={id:t,Ua:r},0},L:(e,r,t,n)=>{var a=new Date().getFullYear(),o=new Date(a,0,1).getTimezoneOffset();a=new Date(a,6,1).getTimezoneOffset(),v[e>>2]=60*Math.max(o,a),U[r>>2]=+(o!=a),e=(r=s=>{var i=Math.abs(s);return`UTC${0<=s?"-":"+"}${String(Math.floor(i/60)).padStart(2,"0")}${String(i%60).padStart(2,"0")}`})(o),r=r(a),a<o?(Q(e,t,17),Q(r,n,17)):(Q(e,n,17),Q(r,t,17))},P:e=>{var r=b.length;if(2147483648<(e>>>=0))return!1;for(var t=1;4>=t;t*=2){var n=r*(1+.2/t);n=Math.min(n,e+100663296);e:{n=(Math.min(2147483648,65536*Math.ceil(Math.max(e,n)/65536))-X.buffer.byteLength+65535)/65536|0;try{X.grow(n),Ne();var a=1;break e}catch{}a=void 0}if(a)return!0}return!1},M:(e,r)=>{var t=0;return gr().forEach((n,a)=>{var o=r+t;for(a=v[e+4*a>>2]=o,o=0;o<n.length;++o)M[a++]=n.charCodeAt(o);M[a]=0,t+=n.length+1}),0},N:(e,r)=>{var t=gr();v[e>>2]=t.length;var n=0;return t.forEach(a=>n+=a.length+1),v[r>>2]=n,0},S:()=>52,R:function(){return 70},Q:(e,r,t,n)=>{for(var a=0,o=0;o<t;o++){var s=v[r>>2],i=v[r+4>>2];r+=8;for(var u=0;u<i;u++){var h=b[s+u],l=nt[e];h===0||h===10?((e===1?Pr:B)(cr(l)),l.length=0):l.push(h)}a+=i}return v[n>>2]=a,0},H:yr};(async function(){function e(n){return k=n.exports,X=k.Z,Ne(),nr=k.ca,Ge.unshift(k._),_--,f.monitorRunDependencies?.(_),_==0&&z&&(n=z,z=null,n()),k}_++,f.monitorRunDependencies?.(_);var r={a:at};if(f.instantiateWasm)try{return f.instantiateWasm(r,e)}catch(n){B(`Module.instantiateWasm callback failed with error: ${n}`),Z(n)}$e??=Qe("arcgis-knowledge-client-core.wasm")?"arcgis-knowledge-client-core.wasm":f.locateFile?f.locateFile("arcgis-knowledge-client-core.wasm",F):F+"arcgis-knowledge-client-core.wasm";try{var t=await xr(r);return e(t.instance),t}catch(n){Z(n)}})();var ve,$r=e=>($r=k.$)(e),Ue=e=>(Ue=k.aa)(e),S=e=>(S=k.ba)(e),br=(e,r)=>(br=k.da)(e,r);function Tr(){function e(){if(!ve&&(ve=!0,f.calledRun=!0,!re)){if(be(Ge),Ie(f),f.onRuntimeInitialized?.(),f.postRun)for(typeof f.postRun=="function"&&(f.postRun=[f.postRun]);f.postRun.length;){var r=f.postRun.shift();Je.unshift(r)}be(Je)}}if(!(0<_)){if(f.preRun)for(typeof f.preRun=="function"&&(f.preRun=[f.preRun]);f.preRun.length;)Or();be(Le),0<_||(f.setStatus?(f.setStatus("Running..."),setTimeout(()=>{setTimeout(()=>f.setStatus(""),1),e()},1)):e())}}if(z=function e(){ve||Tr(),ve||(z=e)},f.preInit)for(typeof f.preInit=="function"&&(f.preInit=[f.preInit]);0<f.preInit.length;)f.preInit.pop()();return Tr(),Er},de.exports=ge,de.exports.default=ge),Wr.exports;var de,ye,ge}const st=ot(it()),ut=Object.freeze(Object.defineProperty({__proto__:null,default:st},Symbol.toStringTag,{value:"Module"}));export{ut as a};
