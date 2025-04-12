import{b1 as A,aq as Y,aJ as Q,gL as _,cS as v,gM as D,a1 as h,U as f,G as l,D as X,e_ as Z,J as ee,eY as se,n as te}from"./main-B5_XOOwi.js";import{r as oe}from"./uuid-Cl5lrJ4c.js";import{m as re,b as ne,a as x,i as E,N as ae}from"./External-DUi74QmW.js";import{r as ie,n as ce,a as le,d as ue,c as I,l as pe,t as me,b as fe,u as de,p as ge}from"./meshSpatialReferenceScaleUtils-CJXuNUYx.js";import{g as he}from"./arcgisLayerUrl-ByaroTWn.js";import{m as we,l as ye,s as Pe,u as be,a as Te}from"./infoFor3D-_5f2f6Um.js";import{i as Ae,n as ve}from"./meshFeatureAttributes-D62c9a8f.js";import"./preload-helper-ExcqyqRp.js";import"./MeshTransform-BH0BsItI.js";import"./mat4-CUdVSMyt.js";import"./common-DQOJ18NT.js";import"./mat4f64-CSKppSlJ.js";import"./quat-B6CD9Y0G.js";import"./mat3f64-q3fE-ZOt.js";import"./quatf64-aQ5IuZRd.js";import"./vec32-DACfXE6P.js";import"./vec42-CKs01hkn.js";const $={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function w(t,e=o=>{},s){return new $e(t,e,s)}let $e=class{constructor(e,s=r=>{},o){if(this.onProgress=s,this.taskName=o,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,typeof e=="number"){this._weights={};for(let r=0;r<e;r++){const n=r,a=1/e;this._weights[n]=a,this._progressMap.set(n,0)}}else this._weights=e;this.emitProgress()}emitProgress(){let e=0;for(const[s,o]of this._progressMap.entries())e+=o*this._weights[s];if(e===1&&A("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[o,r]of this._timingsMap){const n=Math.round(r.end-r.start)/1e3,a=Math.round(n/s*100);console.log(this.taskName??"Task",{stepKey:o,stepTime:n,relativeTime:a})}}this.onProgress(e)}setProgress(e,s){if(this._progressMap.set(e,s),A("enable-feature:esri-3dofl-upload-timings")){const o=performance.now();this._startTime??=o;const r=Y(this._timingsMap,e,()=>({start:o,end:0}));s===1&&(r.end=o)}this.emitProgress()}simulate(e,s){return R(o=>this.setProgress(e,o),s)}makeOnProgress(e){return s=>this.setProgress(e,s)}};function R(t=s=>{},e=_e){const s=performance.now();t(0);const o=setInterval(()=>{const r=performance.now()-s,n=1-Math.exp(-r/e);t(n)},Ne);return Q(()=>{clearInterval(o),t(1)})}function Me(t,e=je){return _(D(t*k/e))}function Fe(t,e=Se){return _(D(t*k/e))}const je=10,Se=10,k=8e-6,Ne=v(50),_e=v(1e3),C=1e6,N=20*C,De=2e9,xe=3;async function Ee({data:t,name:e,description:s},o,r){let n=null;try{const a=h(o,"uploads"),i=h(a,"info"),{data:u}=await f(i,{query:{f:"json"},responseType:"json"});l(r);const d=he(o),g=u.maxUploadFileSize*C,m=d?De:g,c=d?Math.min(N,g):N;if(t.size>m)throw new Error("Data too large");const z=h(a,"register"),{data:M}=await f(z,{query:{f:"json",itemName:Ie(e),description:s},responseType:"json",method:"post"});if(l(r),!M.success)throw new Error("Registration failed");const{itemID:L}=M.item;n=h(a,L);const J=h(n,"uploadPart"),F=Math.ceil(t.size/c),y=new Array;for(let p=0;p<F;++p)y.push(t.slice(p*c,Math.min((p+1)*c,t.size)));const P=y.slice().reverse(),j=new Array,G=w(F,r?.onProgress,"uploadItem"),H=async()=>{for(;P.length!==0;){const p=y.length-P.length,b=P.pop(),T=new FormData,K=G.simulate(p,Me(b.size));try{T.append("f","json"),T.append("file",b),T.append("partId",`${p}`);const{data:V}=await f(J,{timeout:0,body:T,responseType:"json",method:"post"});if(l(r),!V.success)throw new Error("Part upload failed")}finally{K.remove()}}};for(let p=0;p<xe&&P.length!==0;++p)j.push(H());await Promise.all(j);const W=h(n,"commit"),{data:S}=await f(W,{query:{f:"json",parts:y.map((p,b)=>b).join(",")},responseType:"json",method:"post"});if(l(r),!S.success)throw new Error("Commit failed");return S.item}catch(a){if(n!=null){const i=h(n,"delete");await f(i,{query:{f:"json"},responseType:"json",method:"post"})}throw a}}function Ie(t){return t.replaceAll("/","_").replaceAll("\\","_")}async function bs(t,e,s){const o=t.length;if(!o)return s?.onProgress?.(1),[];const r=w(o,s?.onProgress,"uploadAssets");return Promise.all(t.map((n,a)=>Re(n,e,{...s,onProgress:r.makeOnProgress(a)})))}async function Re(t,{layer:e,ongoingUploads:s},o){const r=s.get(t);if(r)return r;if(!Ze(e))throw new ie;if(ke(t,e))return o?.onProgress?.(1),t;const n=Ce(t,e,o);s.set(t,n);try{await n}finally{s.delete(t)}return t}function ke(t,e){const{parsedUrl:s}=e;return s!=null&&t.metadata.externalSources.some(o=>re(o,s))}async function Ce(t,e,s){const{metadata:o}=t,{displaySource:r}=o,n=U(r?.source,e,{checkForConversionRequired:A("enable-feature:georeferenced-uploads")}),a=n!=null?Ue(n,e,s):o.externalSources.length>0?qe(t,e,s):Oe(t,e,s),i=await a;return l(s),t.addExternalSources([i]),t}async function Ue(t,e,s){return{source:await q(t,e,s),original:!0,unitConversionDisabled:!0}}async function qe(t,e,s){const o=B(e),{externalSources:r}=t.metadata,n=ze(r,e);if(!n)throw new ce;const a=w($.uploadConvertibleSource,s?.onProgress,"uploadConvertibleSource"),i=await q(n,e,{onProgress:a.makeOnProgress("uploadEditSource")});t.addExternalSources([{source:i,original:!0}]);const u=n.reduce((g,{asset:m})=>m instanceof File?g+m.size:g,0),d=a.simulate("serviceAssetsToGlb",Fe(u));try{const{source:g,transform:m,origin:c}=await Ve(i,e,o);return t.transform=m,c&&(t.metadata.georeferenced=!0,s?.useAssetOrigin&&(t.vertexSpace.origin=[c.x,c.y,c.z??0],t.spatialReference=c.spatialReference)),{source:g,unitConversionDisabled:!0}}finally{d.remove()}}async function Oe(t,e,s){const o=w($.uploadLocalMesh,s?.onProgress,"uploadLocalMesh"),r=Be(t,e,{...s,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await O([r],e,{...s,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:t.extent.clone(),original:!0}}async function Be(t,e,s){const o=B(e),r=await t.load(s),n=await r.toBinaryGLTF({origin:r.origin,signal:s?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return l(s),{blob:new Blob([n],{type:"model/gltf-binary"}),assetName:`${oe()}.glb`,assetType:o}}function ze(t,e){for(const s of t){const o=U(s.source,e);if(o)return o}return null}function U(t,{infoFor3D:e},s={}){if(!t)return null;const{supportedFormats:o,editFormats:r}=e,n=ae(t),a=new Array,i=we(e),u=ye(e);let d=!1;for(const g of n){const m=Le(g,o);if(!m)return null;const{assetType:c}=m;if(s.checkForConversionRequired&&(c===i||c===u))return null;r.includes(c)&&(d=!0),a.push(m)}return d?a:null}function Le(t,e){const s=ne(t,e);return s?{asset:t,assetType:s}:null}async function q(t,e,s){return O(t.map(o=>Je(o,s)),e,s)}async function O(t,e,s){const o=w($.uploadAssetBlobs,s?.onProgress,"uploadAssetBlobs"),r=await He(t,e,{...s,onProgress:o.makeOnProgress("prepareAssetItems")});l(s);const n=r.map(({item:i})=>i),{uploadResults:a}=await We(n,e,{...s,onProgress:o.makeOnProgress("uploadAssetItems")});return l(s),t.map((i,u)=>Ke(r[u],a[u],e))}async function Je(t,e){const{asset:s,assetType:o}=t;if(s instanceof File)return{blob:s,assetName:s.name,assetType:o};const r=await s.toBlob(e);return l(e),{blob:r,assetName:s.assetName,assetType:o}}async function Ge(t,e,s){const{blob:o,assetType:r,assetName:n}=t;let a=null;try{const i=await Ee({data:o,name:n},e.url,s);l(s),a={assetType:r,assetUploadId:i.itemID}}catch(i){ee(i),es().warnOnce(`Service ${e.url} does not support the REST Uploads API.`)}if(!a){const i=await se(o);if(l(s),!i.isBase64)throw new de;a={assetType:r,assetData:i.data}}if(!a)throw new ge;return{item:a,assetName:n}}function He(t,e,s){const o=w(t.length,s?.onProgress,"prepareAssetItems");return Promise.all(t.map(async(r,n)=>{const a=Ge(await r,e,{...s,onProgress:o.makeOnProgress(n)});return l(s),a}))}async function We(t,e,s){const o=R(s?.onProgress);try{const r=await f(h(e.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(t)},method:"post",responseType:"json"});if(l(s),r.data.uploadResults.length!==t.length)throw new le(t.length,r.data.uploadResults.length);return r.data}finally{o.remove()}}function Ke(t,e,s){const{success:o}=e;if(!o){const{error:d}=e;throw new ue(t.assetName,d)}const{assetHash:r}=e,{assetName:n,item:{assetType:a}}=t,{infoFor3D:{supportedFormats:i}}=s,u=Pe(a,i);if(!u)throw new I(a);return new x(n,u,[new E(`${s.parsedUrl.path}/assets/${r}`,r)])}async function Ve(t,e,s){const o=t.map(({assetName:n,parts:a})=>({assetName:n,assetHash:a[0].partHash}));let r;try{const n=h(e.parsedUrl.path,"convert3D"),a=e.capabilities?.operations.supportsAsyncConvert3D;r=(await(a?Xe:Qe)(n,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:s,async:a},responseType:"json",timeout:0})).data}catch{throw new pe}return Ye(e,r)}function Ye(t,e){const s={source:e.assets.map(o=>{const r=be(o.contentType,t.infoFor3D.supportedFormats);if(!r)throw new I(r);return new x(o.assetName,o.contentType,[new E(o.assetURL,o.assetHash)])}),origin:void 0,transform:void 0};if(A("enable-feature:georeferenced-uploads")&&e.transform){if(s.transform=Ae(e.transform),e.spatialReference){const o=X.fromJSON(e.spatialReference);s.origin=ve(e.transform,o)}}else s.transform=me(t.spatialReference);return s}function Qe(t,e){return f(t,e)}async function Xe(t,e){const s=(await f(t,e)).data.statusUrl;for(;;){const o=(await f(s,{query:{f:"json"},responseType:"json"})).data;switch(o.status){case"Completed":return f(o.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(o.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await Z(ss)}}function Ze(t){return!!t.infoFor3D&&!!t.url}function B({infoFor3D:t}){const e=Te(t);if(!e)throw new fe;return e}function es(){return te.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const ss=v(1e3);export{bs as uploadAssets};
