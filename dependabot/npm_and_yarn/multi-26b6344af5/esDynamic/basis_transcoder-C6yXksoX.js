var Wr,hn=(Wr=typeof document<"u"?document.currentScript?.src:void 0,function(pt={}){var _r,Z,c=Object.assign({},pt),dt=new Promise((r,t)=>{_r=r,Z=t}),ft=!0,Fr=Object.assign({},c),F="";function vt(r){return c.locateFile?c.locateFile(r,F):F+r}typeof document<"u"&&document.currentScript&&(F=document.currentScript.src),Wr&&(F=Wr),F=F.startsWith("blob:")?"":F.substr(0,F.replace(/[?#].*/,"").lastIndexOf("/")+1);var N,X,yt=c.print||console.log.bind(console),D=c.printErr||console.error.bind(console);Object.assign(c,Fr),Fr=null,c.arguments&&c.arguments,c.thisProgram&&c.thisProgram,c.quit&&c.quit,c.wasmBinary&&(N=c.wasmBinary);var j,g,x,M,I,f,jr,Or,Sr=!1;function kr(){var r=X.buffer;c.HEAP8=j=new Int8Array(r),c.HEAP16=x=new Int16Array(r),c.HEAPU8=g=new Uint8Array(r),c.HEAPU16=M=new Uint16Array(r),c.HEAP32=I=new Int32Array(r),c.HEAPU32=f=new Uint32Array(r),c.HEAPF32=jr=new Float32Array(r),c.HEAPF64=Or=new Float64Array(r)}var Er=[],Rr=[],Dr=[];function mt(){if(c.preRun)for(typeof c.preRun=="function"&&(c.preRun=[c.preRun]);c.preRun.length;)wt(c.preRun.shift());hr(Er)}function gt(){hr(Rr)}function $t(){if(c.postRun)for(typeof c.postRun=="function"&&(c.postRun=[c.postRun]);c.postRun.length;)bt(c.postRun.shift());hr(Dr)}function wt(r){Er.unshift(r)}function Tt(r){Rr.unshift(r)}function bt(r){Dr.unshift(r)}var E=0,z=null;function Ct(r){E++,c.monitorRunDependencies?.(E)}function Pt(r){if(E--,c.monitorRunDependencies?.(E),E==0&&z){var t=z;z=null,t()}}function xr(r){c.onAbort?.(r),D(r="Aborted("+r+")"),Sr=!0,r+=". Build with -sASSERTIONS for more info.";var t=new WebAssembly.RuntimeError(r);throw Z(t),t}var Y,At="data:application/octet-stream;base64,",Ir=r=>r.startsWith(At);function Wt(){var r="basis_transcoder.wasm";return Ir(r)?r:vt(r)}function Vr(r){if(r==Y&&N)return new Uint8Array(N);throw"both async and sync fetching of the wasm failed"}function _t(r){return!N&&ft&&typeof fetch=="function"?fetch(r,{credentials:"same-origin"}).then(t=>{if(!t.ok)throw`failed to load wasm binary file at '${r}'`;return t.arrayBuffer()}).catch(()=>Vr(r)):Promise.resolve().then(()=>Vr(r))}function Hr(r,t,e){return _t(r).then(n=>WebAssembly.instantiate(n,t)).then(e,n=>{D(`failed to asynchronously prepare wasm: ${n}`),xr(n)})}function Ft(r,t,e,n){return r||typeof WebAssembly.instantiateStreaming!="function"||Ir(t)||typeof fetch!="function"?Hr(t,e,n):fetch(t,{credentials:"same-origin"}).then(a=>WebAssembly.instantiateStreaming(a,e).then(n,function(o){return D(`wasm streaming compile failed: ${o}`),D("falling back to ArrayBuffer instantiation"),Hr(t,e,n)}))}function jt(){return{a:cn}}function Ot(){var r=jt();function t(n,a){return A=n.exports,X=A.L,kr(),Lr=A.Q,Tt(A.M),Pt(),A}function e(n){t(n.instance)}if(Ct(),c.instantiateWasm)try{return c.instantiateWasm(r,t)}catch(n){D(`Module.instantiateWasm callback failed with error: ${n}`),Z(n)}return Y||(Y=Wt()),Ft(N,Y,r,e).catch(Z),{}}var hr=r=>{for(;r.length>0;)r.shift()(c)};c.noExitRuntime;class St{constructor(t){this.excPtr=t,this.ptr=t-24}set_type(t){f[this.ptr+4>>2]=t}get_type(){return f[this.ptr+4>>2]}set_destructor(t){f[this.ptr+8>>2]=t}get_destructor(){return f[this.ptr+8>>2]}set_caught(t){t=t?1:0,j[this.ptr+12]=t}get_caught(){return j[this.ptr+12]!=0}set_rethrown(t){t=t?1:0,j[this.ptr+13]=t}get_rethrown(){return j[this.ptr+13]!=0}init(t,e){this.set_adjusted_ptr(0),this.set_type(t),this.set_destructor(e)}set_adjusted_ptr(t){f[this.ptr+16>>2]=t}get_adjusted_ptr(){return f[this.ptr+16>>2]}get_exception_ptr(){if(st(this.get_type()))return f[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}var kt=(r,t,e)=>{throw new St(r).init(t,e),r},Et=()=>{xr("")},rr={},pr=r=>{for(;r.length;){var t=r.pop();r.pop()(t)}};function q(r){return this.fromWireType(f[r>>2])}var Ur,Br,V,H={},R={},tr={},er=r=>{throw new Ur(r)},O=(r,t,e)=>{function n(i){var s=e(i);s.length!==r.length&&er("Mismatched type converter count");for(var l=0;l<r.length;++l)C(r[l],s[l])}r.forEach(function(i){tr[i]=t});var a=new Array(t.length),o=[],u=0;t.forEach((i,s)=>{R.hasOwnProperty(i)?a[s]=R[i]:(o.push(i),H.hasOwnProperty(i)||(H[i]=[]),H[i].push(()=>{a[s]=R[i],++u===o.length&&n(a)}))}),o.length===0&&n(a)},Rt=r=>{var t=rr[r];delete rr[r];var e=t.rawConstructor,n=t.rawDestructor,a=t.fields,o=a.map(u=>u.getterReturnType).concat(a.map(u=>u.setterArgumentType));O([r],o,u=>{var i={};return a.forEach((s,l)=>{var h=s.fieldName,p=u[l],v=s.getter,y=s.getterContext,T=u[l+a.length],B=s.setter,S=s.setterContext;i[h]={read:k=>p.fromWireType(v(y,k)),write:(k,Q)=>{var w=[];B(S,k,T.toWireType(w,Q)),pr(w)}}}),[{name:t.name,fromWireType:s=>{var l={};for(var h in i)l[h]=i[h].read(s);return n(s),l},toWireType:(s,l)=>{for(var h in i)if(!(h in l))throw new TypeError(`Missing field: "${h}"`);var p=e();for(h in i)i[h].write(p,l[h]);return s!==null&&s.push(n,p),p},argPackAdvance:P,readValueFromPointer:q,destructorFunction:n}]})},Dt=(r,t,e,n,a)=>{},xt=()=>{for(var r=new Array(256),t=0;t<256;++t)r[t]=String.fromCharCode(t);Br=r},m=r=>{for(var t="",e=r;g[e];)t+=Br[g[e++]];return t},d=r=>{throw new V(r)};function It(r,t,e={}){var n=t.name;if(r||d(`type "${n}" must have a positive integer typeid pointer`),R.hasOwnProperty(r)){if(e.ignoreDuplicateRegistrations)return;d(`Cannot register type '${n}' twice`)}if(R[r]=t,delete tr[r],H.hasOwnProperty(r)){var a=H[r];delete H[r],a.forEach(o=>o())}}function C(r,t,e={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");return It(r,t,e)}var G,P=8,Vt=(r,t,e,n)=>{C(r,{name:t=m(t),fromWireType:function(a){return!!a},toWireType:function(a,o){return o?e:n},argPackAdvance:P,readValueFromPointer:function(a){return this.fromWireType(g[a])},destructorFunction:null})},Ht=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),dr=r=>{function t(e){return e.$$.ptrType.registeredClass.name}d(t(r)+" instance already deleted")},fr=!1,Nr=r=>{},Ut=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Mr=r=>{r.count.value-=1,r.count.value===0&&Ut(r)},zr=(r,t,e)=>{if(t===e)return r;if(e.baseClass===void 0)return null;var n=zr(r,t,e.baseClass);return n===null?null:e.downcast(n)},qr={},Bt=()=>Object.keys(J).length,Nt=()=>{var r=[];for(var t in J)J.hasOwnProperty(t)&&r.push(J[t]);return r},L=[],vr=()=>{for(;L.length;){var r=L.pop();r.$$.deleteScheduled=!1,r.delete()}},Mt=r=>{G=r,L.length&&G&&G(vr)},zt=()=>{c.getInheritedInstanceCount=Bt,c.getLiveInheritedInstances=Nt,c.flushPendingDeletes=vr,c.setDelayFunction=Mt},J={},qt=(r,t)=>{for(t===void 0&&d("ptr should not be undefined");r.baseClass;)t=r.upcast(t),r=r.baseClass;return t},Gt=(r,t)=>(t=qt(r,t),J[t]),nr=(r,t)=>(t.ptrType&&t.ptr||er("makeClassHandle requires ptr and ptrType"),!!t.smartPtrType!=!!t.smartPtr&&er("Both smartPtrType and smartPtr must be specified"),t.count={value:1},K(Object.create(r,{$$:{value:t,writable:!0}})));function Lt(r){var t=this.getPointee(r);if(!t)return this.destructor(r),null;var e=Gt(this.registeredClass,t);if(e!==void 0){if(e.$$.count.value===0)return e.$$.ptr=t,e.$$.smartPtr=r,e.clone();var n=e.clone();return this.destructor(r),n}function a(){return this.isSmartPointer?nr(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:t,smartPtrType:this,smartPtr:r}):nr(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var o,u=this.registeredClass.getActualType(t),i=qr[u];if(!i)return a.call(this);o=this.isConst?i.constPointerType:i.pointerType;var s=zr(t,this.registeredClass,o.registeredClass);return s===null?a.call(this):this.isSmartPointer?nr(o.registeredClass.instancePrototype,{ptrType:o,ptr:s,smartPtrType:this,smartPtr:r}):nr(o.registeredClass.instancePrototype,{ptrType:o,ptr:s})}var K=r=>typeof FinalizationRegistry>"u"?(K=t=>t,r):(fr=new FinalizationRegistry(t=>{Mr(t.$$)}),K=t=>{var e=t.$$;if(e.smartPtr){var n={$$:e};fr.register(t,n,t)}return t},Nr=t=>fr.unregister(t),K(r)),Jt=()=>{Object.assign(ar.prototype,{isAliasOf(r){if(!(this instanceof ar)||!(r instanceof ar))return!1;var t=this.$$.ptrType.registeredClass,e=this.$$.ptr;r.$$=r.$$;for(var n=r.$$.ptrType.registeredClass,a=r.$$.ptr;t.baseClass;)e=t.upcast(e),t=t.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return t===n&&e===a},clone(){if(this.$$.ptr||dr(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var r=K(Object.create(Object.getPrototypeOf(this),{$$:{value:Ht(this.$$)}}));return r.$$.count.value+=1,r.$$.deleteScheduled=!1,r},delete(){this.$$.ptr||dr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),Nr(this),Mr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||dr(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),L.push(this),L.length===1&&G&&G(vr),this.$$.deleteScheduled=!0,this}})};function ar(){}var U=(r,t)=>Object.defineProperty(t,"name",{value:r}),Gr=(r,t,e)=>{if(r[t].overloadTable===void 0){var n=r[t];r[t]=function(...a){return r[t].overloadTable.hasOwnProperty(a.length)||d(`Function '${e}' called with an invalid number of arguments (${a.length}) - expects one of (${r[t].overloadTable})!`),r[t].overloadTable[a.length].apply(this,a)},r[t].overloadTable=[],r[t].overloadTable[n.argCount]=n}},yr=(r,t,e)=>{c.hasOwnProperty(r)?((e===void 0||c[r].overloadTable!==void 0&&c[r].overloadTable[e]!==void 0)&&d(`Cannot register public name '${r}' twice`),Gr(c,r,r),c.hasOwnProperty(e)&&d(`Cannot register multiple overloads of a function with the same number of arguments (${e})!`),c[r].overloadTable[e]=t):(c[r]=t,e!==void 0&&(c[r].numArguments=e))},Kt=48,Qt=57,Zt=r=>{if(r===void 0)return"_unknown";var t=(r=r.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return t>=Kt&&t<=Qt?`_${r}`:r};function Xt(r,t,e,n,a,o,u,i){this.name=r,this.constructor=t,this.instancePrototype=e,this.rawDestructor=n,this.baseClass=a,this.getActualType=o,this.upcast=u,this.downcast=i,this.pureVirtualFunctions=[]}var mr=(r,t,e)=>{for(;t!==e;)t.upcast||d(`Expected null or instance of ${e.name}, got an instance of ${t.name}`),r=t.upcast(r),t=t.baseClass;return r};function Yt(r,t){if(t===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;t.$$||d(`Cannot pass "${Cr(t)}" as a ${this.name}`),t.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`);var e=t.$$.ptrType.registeredClass;return mr(t.$$.ptr,e,this.registeredClass)}function re(r,t){var e;if(t===null)return this.isReference&&d(`null is not a valid ${this.name}`),this.isSmartPointer?(e=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,e),e):0;t&&t.$$||d(`Cannot pass "${Cr(t)}" as a ${this.name}`),t.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&t.$$.ptrType.isConst&&d(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);var n=t.$$.ptrType.registeredClass;if(e=mr(t.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(t.$$.smartPtr===void 0&&d("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:t.$$.smartPtrType===this?e=t.$$.smartPtr:d(`Cannot convert argument of type ${t.$$.smartPtrType?t.$$.smartPtrType.name:t.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:e=t.$$.smartPtr;break;case 2:if(t.$$.smartPtrType===this)e=t.$$.smartPtr;else{var a=t.clone();e=this.rawShare(e,$.toHandle(()=>a.delete())),r!==null&&r.push(this.rawDestructor,e)}break;default:d("Unsupporting sharing policy")}return e}function te(r,t){if(t===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;t.$$||d(`Cannot pass "${Cr(t)}" as a ${this.name}`),t.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),t.$$.ptrType.isConst&&d(`Cannot convert argument of type ${t.$$.ptrType.name} to parameter type ${this.name}`);var e=t.$$.ptrType.registeredClass;return mr(t.$$.ptr,e,this.registeredClass)}var ee=()=>{Object.assign(or.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:P,readValueFromPointer:q,fromWireType:Lt})};function or(r,t,e,n,a,o,u,i,s,l,h){this.name=r,this.registeredClass=t,this.isReference=e,this.isConst=n,this.isSmartPointer=a,this.pointeeType=o,this.sharingPolicy=u,this.rawGetPointee=i,this.rawConstructor=s,this.rawShare=l,this.rawDestructor=h,a||t.baseClass!==void 0?this.toWireType=re:n?(this.toWireType=Yt,this.destructorFunction=null):(this.toWireType=te,this.destructorFunction=null)}var Lr,Jr,Kr=(r,t,e)=>{c.hasOwnProperty(r)||er("Replacing nonexistent public symbol"),c[r].overloadTable!==void 0&&e!==void 0?c[r].overloadTable[e]=t:(c[r]=t,c[r].argCount=e)},ne=(r,t,e)=>(r=r.replace(/p/g,"i"),(0,c["dynCall_"+r])(t,...e)),ir=[],Qr=r=>{var t=ir[r];return t||(r>=ir.length&&(ir.length=r+1),ir[r]=t=Lr.get(r)),t},ae=(r,t,e=[])=>r.includes("j")?ne(r,t,e):Qr(t)(...e),oe=(r,t)=>(...e)=>ae(r,t,e),b=(r,t)=>{function e(){return r.includes("j")?oe(r,t):Qr(t)}r=m(r);var n=e();return typeof n!="function"&&d(`unknown function pointer with signature ${r}: ${t}`),n},ie=(r,t)=>{var e=U(t,function(n){this.name=t,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return e.prototype=Object.create(r.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},e},Zr=r=>{var t=it(r),e=m(t);return _(t),e},sr=(r,t)=>{var e=[],n={};function a(o){n[o]||R[o]||(tr[o]?tr[o].forEach(a):(e.push(o),n[o]=!0))}throw t.forEach(a),new Jr(`${r}: `+e.map(Zr).join([", "]))},se=(r,t,e,n,a,o,u,i,s,l,h,p,v)=>{h=m(h),o=b(a,o),i&&=b(u,i),l&&=b(s,l),v=b(p,v);var y=Zt(h);yr(y,function(){sr(`Cannot construct ${h} due to unbound types`,[n])}),O([r,t,e],n?[n]:[],T=>{var B,S;T=T[0],S=n?(B=T.registeredClass).instancePrototype:ar.prototype;var k=U(h,function(...Ar){if(Object.getPrototypeOf(this)!==Q)throw new V("Use 'new' to construct "+h);if(w.constructor_body===void 0)throw new V(h+" has no accessible constructor");var ht=w.constructor_body[Ar.length];if(ht===void 0)throw new V(`Tried to invoke ctor of ${h} with invalid number of parameters (${Ar.length}) - expected (${Object.keys(w.constructor_body).toString()}) parameters instead!`);return ht.apply(this,Ar)}),Q=Object.create(S,{constructor:{value:k}});k.prototype=Q;var w=new Xt(h,k,Q,v,B,o,i,l);w.baseClass&&(w.baseClass.__derivedClasses??=[],w.baseClass.__derivedClasses.push(w));var ln=new or(h,w,!0,!1,!1),ct=new or(h+"*",w,!1,!1,!1),lt=new or(h+" const*",w,!1,!0,!1);return qr[r]={pointerType:ct,constPointerType:lt},Kr(y,k),[ln,ct,lt]})},gr=(r,t)=>{for(var e=[],n=0;n<r;n++)e.push(f[t+4*n>>2]);return e};function Xr(r){for(var t=1;t<r.length;++t)if(r[t]!==null&&r[t].destructorFunction===void 0)return!0;return!1}function Yr(r,t){if(!(r instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);var e=U(r.name||"unknownFunctionName",function(){});e.prototype=r.prototype;var n=new e,a=r.apply(n,t);return a instanceof Object?a:n}function ue(r,t,e,n){for(var a=Xr(r),o=r.length,u="",i="",s=0;s<o-2;++s)u+=(s!==0?", ":"")+"arg"+s,i+=(s!==0?", ":"")+"arg"+s+"Wired";var l=`
        return function (${u}) {
        if (arguments.length !== ${o-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${o-2}');
        }`;a&&(l+=`var destructors = [];
`);var h=a?"destructors":"null",p=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];for(t&&(l+="var thisWired = classParam['toWireType']("+h+`, this);
`),s=0;s<o-2;++s)l+="var arg"+s+"Wired = argType"+s+"['toWireType']("+h+", arg"+s+`);
`,p.push("argType"+s);if(t&&(i="thisWired"+(i.length>0?", ":"")+i),l+=(e||n?"var rv = ":"")+"invoker(fn"+(i.length>0?", ":"")+i+`);
`,a)l+=`runDestructors(destructors);
`;else for(s=t?1:2;s<r.length;++s){var v=s===1?"thisWired":"arg"+(s-2)+"Wired";r[s].destructorFunction!==null&&(l+=`${v}_dtor(${v});
`,p.push(`${v}_dtor`))}return e&&(l+=`var ret = retType['fromWireType'](rv);
return ret;
`),[p,l+=`}
`]}function $r(r,t,e,n,a,o){var u=t.length;u<2&&d("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=t[1]!==null&&e!==null,s=Xr(t),l=t[0].name!=="void",h=[r,d,n,a,pr,t[0],t[1]],p=0;p<u-2;++p)h.push(t[p+2]);if(!s)for(p=i?1:2;p<t.length;++p)t[p].destructorFunction!==null&&h.push(t[p].destructorFunction);let[v,y]=ue(t,i,l,o);v.push(y);var T=Yr(Function,v)(...h);return U(r,T)}var ce=(r,t,e,n,a,o)=>{var u=gr(t,e);a=b(n,a),O([],[r],i=>{var s=`constructor ${(i=i[0]).name}`;if(i.registeredClass.constructor_body===void 0&&(i.registeredClass.constructor_body=[]),i.registeredClass.constructor_body[t-1]!==void 0)throw new V(`Cannot register multiple constructors with identical number of parameters (${t-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.registeredClass.constructor_body[t-1]=()=>{sr(`Cannot construct ${i.name} due to unbound types`,u)},O([],u,l=>(l.splice(1,0,null),i.registeredClass.constructor_body[t-1]=$r(s,l,null,a,o),[])),[]})},rt=r=>{const t=(r=r.trim()).indexOf("(");return t!==-1?r.substr(0,t):r},le=(r,t,e,n,a,o,u,i,s)=>{var l=gr(e,n);t=m(t),t=rt(t),o=b(a,o),O([],[r],h=>{var p=`${(h=h[0]).name}.${t}`;function v(){sr(`Cannot call ${p} due to unbound types`,l)}t.startsWith("@@")&&(t=Symbol[t.substring(2)]),i&&h.registeredClass.pureVirtualFunctions.push(t);var y=h.registeredClass.instancePrototype,T=y[t];return T===void 0||T.overloadTable===void 0&&T.className!==h.name&&T.argCount===e-2?(v.argCount=e-2,v.className=h.name,y[t]=v):(Gr(y,t,p),y[t].overloadTable[e-2]=v),O([],l,B=>{var S=$r(p,B,h,o,u,s);return y[t].overloadTable===void 0?(S.argCount=e-2,y[t]=S):y[t].overloadTable[e-2]=S,[]}),[]})},he=(r,t,e)=>{r=m(r),O([],[t],n=>(n=n[0],c[r]=n.fromWireType(e),[]))},wr=[],W=[],Tr=r=>{r>9&&--W[r+1]==0&&(W[r]=void 0,wr.push(r))},pe=()=>W.length/2-5-wr.length,de=()=>{W.push(0,1,void 0,1,null,1,!0,1,!1,1),c.count_emval_handles=pe},$={toValue:r=>(r||d("Cannot use deleted val. handle = "+r),W[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const t=wr.pop()||W.length;return W[t]=r,W[t+1]=1,t}}}},fe={name:"emscripten::val",fromWireType:r=>{var t=$.toValue(r);return Tr(r),t},toWireType:(r,t)=>$.toHandle(t),argPackAdvance:P,readValueFromPointer:q,destructorFunction:null},ve=r=>C(r,fe),ye=(r,t,e)=>{switch(t){case 1:return e?function(n){return this.fromWireType(j[n])}:function(n){return this.fromWireType(g[n])};case 2:return e?function(n){return this.fromWireType(x[n>>1])}:function(n){return this.fromWireType(M[n>>1])};case 4:return e?function(n){return this.fromWireType(I[n>>2])}:function(n){return this.fromWireType(f[n>>2])};default:throw new TypeError(`invalid integer width (${t}): ${r}`)}},me=(r,t,e,n)=>{function a(){}t=m(t),a.values={},C(r,{name:t,constructor:a,fromWireType:function(o){return this.constructor.values[o]},toWireType:(o,u)=>u.value,argPackAdvance:P,readValueFromPointer:ye(t,e,n),destructorFunction:null}),yr(t,a)},br=(r,t)=>{var e=R[r];return e===void 0&&d(`${t} has unknown type ${Zr(r)}`),e},ge=(r,t,e)=>{var n=br(r,"enum");t=m(t);var a=n.constructor,o=Object.create(n.constructor.prototype,{value:{value:e},constructor:{value:U(`${n.name}_${t}`,function(){})}});a.values[e]=o,a[t]=o},Cr=r=>{if(r===null)return"null";var t=typeof r;return t==="object"||t==="array"||t==="function"?r.toString():""+r},$e=(r,t)=>{switch(t){case 4:return function(e){return this.fromWireType(jr[e>>2])};case 8:return function(e){return this.fromWireType(Or[e>>3])};default:throw new TypeError(`invalid float width (${t}): ${r}`)}},we=(r,t,e)=>{C(r,{name:t=m(t),fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:P,readValueFromPointer:$e(t,e),destructorFunction:null})},Te=(r,t,e,n,a,o,u)=>{var i=gr(t,e);r=m(r),r=rt(r),a=b(n,a),yr(r,function(){sr(`Cannot call ${r} due to unbound types`,i)},t-1),O([],i,s=>{var l=[s[0],null].concat(s.slice(1));return Kr(r,$r(r,l,null,a,o,u),t-1),[]})},be=(r,t,e)=>{switch(t){case 1:return e?n=>j[n]:n=>g[n];case 2:return e?n=>x[n>>1]:n=>M[n>>1];case 4:return e?n=>I[n>>2]:n=>f[n>>2];default:throw new TypeError(`invalid integer width (${t}): ${r}`)}},Ce=(r,t,e,n,a)=>{t=m(t);var o=l=>l;if(n===0){var u=32-8*e;o=l=>l<<u>>>u}var i=t.includes("unsigned"),s=(l,h)=>{};C(r,{name:t,fromWireType:o,toWireType:i?function(l,h){return s(h,this.name),h>>>0}:function(l,h){return s(h,this.name),h},argPackAdvance:P,readValueFromPointer:be(t,e,n!==0),destructorFunction:null})},Pe=(r,t,e)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];function a(o){var u=f[o>>2],i=f[o+4>>2];return new n(j.buffer,i,u)}C(r,{name:e=m(e),fromWireType:a,argPackAdvance:P,readValueFromPointer:a},{ignoreDuplicateRegistrations:!0})},Ae=(r,t,e,n)=>{if(!(n>0))return 0;for(var a=e,o=e+n-1,u=0;u<r.length;++u){var i=r.charCodeAt(u);if(i>=55296&&i<=57343&&(i=65536+((1023&i)<<10)|1023&r.charCodeAt(++u)),i<=127){if(e>=o)break;t[e++]=i}else if(i<=2047){if(e+1>=o)break;t[e++]=192|i>>6,t[e++]=128|63&i}else if(i<=65535){if(e+2>=o)break;t[e++]=224|i>>12,t[e++]=128|i>>6&63,t[e++]=128|63&i}else{if(e+3>=o)break;t[e++]=240|i>>18,t[e++]=128|i>>12&63,t[e++]=128|i>>6&63,t[e++]=128|63&i}}return t[e]=0,e-a},We=(r,t,e)=>Ae(r,g,t,e),_e=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n<=127?t++:n<=2047?t+=2:n>=55296&&n<=57343?(t+=4,++e):t+=3}return t},tt=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,et=(r,t,e)=>{for(var n=t+e,a=t;r[a]&&!(a>=n);)++a;if(a-t>16&&r.buffer&&tt)return tt.decode(r.subarray(t,a));for(var o="";t<a;){var u=r[t++];if(128&u){var i=63&r[t++];if((224&u)!=192){var s=63&r[t++];if((u=(240&u)==224?(15&u)<<12|i<<6|s:(7&u)<<18|i<<12|s<<6|63&r[t++])<65536)o+=String.fromCharCode(u);else{var l=u-65536;o+=String.fromCharCode(55296|l>>10,56320|1023&l)}}else o+=String.fromCharCode((31&u)<<6|i)}else o+=String.fromCharCode(u)}return o},Fe=(r,t)=>r?et(g,r,t):"",je=(r,t)=>{var e=(t=m(t))==="std::string";C(r,{name:t,fromWireType(n){var a,o=f[n>>2],u=n+4;if(e)for(var i=u,s=0;s<=o;++s){var l=u+s;if(s==o||g[l]==0){var h=Fe(i,l-i);a===void 0?a=h:(a+="\0",a+=h),i=l+1}}else{var p=new Array(o);for(s=0;s<o;++s)p[s]=String.fromCharCode(g[u+s]);a=p.join("")}return _(n),a},toWireType(n,a){var o;a instanceof ArrayBuffer&&(a=new Uint8Array(a));var u=typeof a=="string";u||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||d("Cannot pass non-string to std::string"),o=e&&u?_e(a):a.length;var i=Pr(4+o+1),s=i+4;if(f[i>>2]=o,e&&u)We(a,s,o+1);else if(u)for(var l=0;l<o;++l){var h=a.charCodeAt(l);h>255&&(_(s),d("String has UTF-16 code units that do not fit in 8 bits")),g[s+l]=h}else for(l=0;l<o;++l)g[s+l]=a[l];return n!==null&&n.push(_,i),i},argPackAdvance:P,readValueFromPointer:q,destructorFunction(n){_(n)}})},nt=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,Oe=(r,t)=>{for(var e=r,n=e>>1,a=n+t/2;!(n>=a)&&M[n];)++n;if((e=n<<1)-r>32&&nt)return nt.decode(g.subarray(r,e));for(var o="",u=0;!(u>=t/2);++u){var i=x[r+2*u>>1];if(i==0)break;o+=String.fromCharCode(i)}return o},Se=(r,t,e)=>{if(e??=2147483647,e<2)return 0;for(var n=t,a=(e-=2)<2*r.length?e/2:r.length,o=0;o<a;++o){var u=r.charCodeAt(o);x[t>>1]=u,t+=2}return x[t>>1]=0,t-n},ke=r=>2*r.length,Ee=(r,t)=>{for(var e=0,n="";!(e>=t/4);){var a=I[r+4*e>>2];if(a==0)break;if(++e,a>=65536){var o=a-65536;n+=String.fromCharCode(55296|o>>10,56320|1023&o)}else n+=String.fromCharCode(a)}return n},Re=(r,t,e)=>{if(e??=2147483647,e<4)return 0;for(var n=t,a=n+e-4,o=0;o<r.length;++o){var u=r.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&r.charCodeAt(++o)),I[t>>2]=u,(t+=4)+4>a)break}return I[t>>2]=0,t-n},De=r=>{for(var t=0,e=0;e<r.length;++e){var n=r.charCodeAt(e);n>=55296&&n<=57343&&++e,t+=4}return t},xe=(r,t,e)=>{var n,a,o,u;e=m(e),t===2?(n=Oe,a=Se,u=ke,o=i=>M[i>>1]):t===4&&(n=Ee,a=Re,u=De,o=i=>f[i>>2]),C(r,{name:e,fromWireType:i=>{for(var s,l=f[i>>2],h=i+4,p=0;p<=l;++p){var v=i+4+p*t;if(p==l||o(v)==0){var y=n(h,v-h);s===void 0?s=y:(s+="\0",s+=y),h=v+t}}return _(i),s},toWireType:(i,s)=>{typeof s!="string"&&d(`Cannot pass non-string to C++ string type ${e}`);var l=u(s),h=Pr(4+l+t);return f[h>>2]=l/t,a(s,h+4,l+t),i!==null&&i.push(_,h),h},argPackAdvance:P,readValueFromPointer:q,destructorFunction(i){_(i)}})},Ie=(r,t,e,n,a,o)=>{rr[r]={name:m(t),rawConstructor:b(e,n),rawDestructor:b(a,o),fields:[]}},Ve=(r,t,e,n,a,o,u,i,s,l)=>{rr[r].fields.push({fieldName:m(t),getterReturnType:e,getter:b(n,a),getterContext:o,setterArgumentType:u,setter:b(i,s),setterContext:l})},He=(r,t)=>{C(r,{isVoid:!0,name:t=m(t),argPackAdvance:0,fromWireType:()=>{},toWireType:(e,n)=>{}})},Ue=(r,t,e)=>g.copyWithin(r,t,t+e),at=(r,t,e)=>{var n=[],a=r.toWireType(n,e);return n.length&&(f[t>>2]=$.toHandle(n)),a},Be=(r,t,e)=>(r=$.toValue(r),t=br(t,"emval::as"),at(t,e,r)),ur=[],Ne=(r,t,e,n)=>(r=ur[r])(null,t=$.toValue(t),e,n),Me={},cr=r=>{var t=Me[r];return t===void 0?m(r):t},ze=(r,t,e,n,a)=>(r=ur[r])(t=$.toValue(t),t[e=cr(e)],n,a),ot=()=>typeof globalThis=="object"?globalThis:Function("return this")(),qe=r=>r===0?$.toHandle(ot()):(r=cr(r),$.toHandle(ot()[r])),Ge=r=>{var t=ur.length;return ur.push(r),t},Le=(r,t)=>{for(var e=new Array(r),n=0;n<r;++n)e[n]=br(f[t+4*n>>2],"parameter "+n);return e},Je=(r,t,e)=>{var n=Le(r,t),a=n.shift();r--;var o=`return function (obj, func, destructorsRef, args) {
`,u=0,i=[];e===0&&i.push("obj");for(var s=["retType"],l=[a],h=0;h<r;++h)i.push("arg"+h),s.push("argType"+h),l.push(n[h]),o+=`  var arg${h} = argType${h}.readValueFromPointer(args${u?"+"+u:""});
`,u+=n[h].argPackAdvance;o+=`  var rv = ${e===1?"new func":"func.call"}(${i.join(", ")});
`,a.isVoid||(s.push("emval_returnValue"),l.push(at),o+=`  return emval_returnValue(retType, destructorsRef, rv);
`),o+=`};
`,s.push(o);var p=Yr(Function,s)(...l),v=`methodCaller<(${n.map(y=>y.name).join(", ")}) => ${a.name}>`;return Ge(U(v,p))},Ke=r=>(r=cr(r),$.toHandle(c[r])),Qe=(r,t)=>(r=$.toValue(r),t=$.toValue(t),$.toHandle(r[t])),Ze=r=>{r>9&&(W[r+1]+=1)},Xe=r=>$.toHandle(cr(r)),Ye=r=>{var t=$.toValue(r);pr(t),Tr(r)},rn=()=>2147483648,tn=r=>{var t=(r-X.buffer.byteLength+65535)/65536;try{return X.grow(t),kr(),1}catch{}},en=r=>{var t=g.length;r>>>=0;var e=rn();if(r>e)return!1;for(var n=(i,s)=>i+(s-i%s)%s,a=1;a<=4;a*=2){var o=t*(1+.2/a);o=Math.min(o,r+100663296);var u=Math.min(e,n(Math.max(r,o),65536));if(tn(u))return!0}return!1},nn=r=>52;function an(r,t,e,n,a){return 70}var on=[null,[],[]],sn=(r,t)=>{var e=on[r];t===0||t===10?((r===1?yt:D)(et(e,0)),e.length=0):e.push(t)},un=(r,t,e,n)=>{for(var a=0,o=0;o<e;o++){var u=f[t>>2],i=f[t+4>>2];t+=8;for(var s=0;s<i;s++)sn(r,g[u+s]);a+=i}return f[n>>2]=a,0};Ur=c.InternalError=class extends Error{constructor(r){super(r),this.name="InternalError"}},xt(),V=c.BindingError=class extends Error{constructor(r){super(r),this.name="BindingError"}},Jt(),zt(),ee(),Jr=c.UnboundTypeError=ie(Error,"UnboundTypeError"),de();var lr,cn={K:kt,G:Et,s:Rt,C:Dt,I:Vt,w:se,v:ce,d:le,m:he,H:ve,o:me,a:ge,A:we,k:Te,l:Ce,f:Pe,z:je,u:xe,t:Ie,c:Ve,J:He,F:Ue,n:Be,q:Ne,p:ze,b:Tr,x:qe,i:Je,r:Ke,g:Qe,j:Ze,h:Xe,e:Ye,D:en,E:nn,B:an,y:un},A=Ot(),it=r=>(it=A.N)(r),Pr=r=>(Pr=A.O)(r),_=r=>(_=A.P)(r),st=r=>(st=A.R)(r);function ut(){function r(){lr||(lr=!0,c.calledRun=!0,Sr||(gt(),_r(c),c.onRuntimeInitialized&&c.onRuntimeInitialized(),$t()))}E>0||(mt(),E>0||(c.setStatus?(c.setStatus("Running..."),setTimeout(function(){setTimeout(function(){c.setStatus("")},1),r()},1)):r()))}if(c.dynCall_jiji=(r,t,e,n,a)=>(c.dynCall_jiji=A.S)(r,t,e,n,a),z=function r(){lr||ut(),lr||(z=r)},c.preInit)for(typeof c.preInit=="function"&&(c.preInit=[c.preInit]);c.preInit.length>0;)c.preInit.pop()();return ut(),dt});export{hn as default};
