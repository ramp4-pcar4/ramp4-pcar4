import{aA as _,cj as j,s as F,cL as A,a_ as L,U as V,n as P,I as R,a2 as G,at as T,as as M,bh as Q,cu as J,f1 as Z,M as B,ci as Y,bN as U}from"./main-C3PVbFgd.js";import{e as $,n as W}from"./date-Cqvy-TgA.js";import{V as z}from"./projection-q5gROb6j.js";import{t as H}from"./json-BI97KiBB.js";import{s as K,e as X}from"./OptimizedFeature-CZG9VXQi.js";import{u as ee}from"./executeQueryForSnapping-BOADVISL.js";import{f as te}from"./FeatureStore-Bwst0Wg2.js";import{x as ie}from"./queryUtils-DTc0miTf.js";import{L as ne}from"./QueryEngine-DoTquUrM.js";import{c as se}from"./number-ClWsKiG3.js";import{a as ae,u as oe}from"./clientSideDefaults-BXWkLwj5.js";import{Z as I}from"./FieldsIndex-vbyX-sdH.js";function re(a,i,e){i=_(i)?.toLowerCase(),e=_(e)?.toLowerCase();const t=a.map(o=>o.toLowerCase()),n=i?a[t.indexOf(i)]:null,r=e?a[t.indexOf(e)]:null;return{longitudeFieldName:n||a[t.indexOf(ce.find(o=>t.includes(o)))],latitudeFieldName:r||a[t.indexOf(le.find(o=>t.includes(o)))]}}const le=["lat","lat83","latitude","latitude83","latdecdeg","lat_dd","y","ycenter","point_y"],ce=["lon","lng","lng83","long","long83","longitude","longitude83","longdecdeg","long_dd","x","xcenter","point_x"],E=/^\s*"([\S\s]*)"\s*$/,b=/""/g,S=`
`,ue=[","," ",";","|","	"];function*O(a,i,e){let t=0;for(;t<=a.length;){const n=a.indexOf(i,t),r=a.slice(t,n>-1?n:void 0);t+=r.length+i.length,e&&!r.trim()||(yield r)}}function q(a){const i=a.includes(`\r
`)?`\r
`:S;return O(a,i,!0)}function C(a,i){return O(a,i,!1)}function de(a,i,e){a=a.trim(),i=i?.trim();const t=[],n=Array.from(new Set([e?.delimiter,...ue])).filter(o=>o!=null);for(const o of n){const l=w(a,o).length,c=w(i,o).length??l;l>1&&t.push({weight:Math.min(l,c),delimiter:o})}const r=t.sort(({weight:o},{weight:l})=>l-o).map(({delimiter:o})=>o);for(const o of r){const l=k(a,o).names,c=re(l,e?.longitudeField,e?.latitudeField);if(c.longitudeFieldName&&c.latitudeFieldName)return{delimiter:o,locationInfo:c}}return{delimiter:r[0],locationInfo:null}}function*v(a,i,e,t=()=>Object.create(null)){const n=q(a);n.next();let r="",o="",l=0,c=t(),d=0;e:for(const y of n){const m=C(y,e);for(const p of m)if(r+=o+p,o="",l+=D(p),l%2==0){if(l>0){const h=E.exec(r);if(!h){c=t(),d=0,r="",l=0;continue e}c[i[d]]=h[1].replaceAll(b,'"'),d++}else c[i[d]]=r,d++;r="",l=0}else o=e;l===0?(yield c,c=t(),d=0):o=S}}function k(a,i){const e=w(a,i).filter(n=>n!=null),t=e.map(n=>_(n));for(let n=t.length-1;n>=0;n--)t[n]||(t.splice(n,1),e.splice(n,1));return{names:t,aliases:e}}function w(a,i){if(!a?.length)return[];const e=[];let t="",n="",r=0;const o=C(a,i);for(const l of o)if(t+=n+l,n="",r+=D(l),r%2==0){if(r>0){const c=E.exec(t);c&&e.push(c[1].replaceAll(b,'"'))}else e.push(t);t="",r=0}else n=i;return e}function D(a){let i=0,e=0;for(e=a.indexOf('"',e);e>=0;)i++,e=a.indexOf('"',e+1);return i}function fe(a,i,e,t,n){const r=[],o=v(a,e,i),l=[];for(const c of o){if(l.length===10)break;l.push(c)}for(let c=0;c<e.length;c++){const d=e[c],y=t[c];if(d===n.longitudeFieldName||d===n.latitudeFieldName)r.push({name:d,type:"esriFieldTypeDouble",alias:y});else{let m;switch(me(l.map(p=>p[d]))){case"integer":m="esriFieldTypeInteger";break;case"double":m="esriFieldTypeDouble";break;case"date":m="esriFieldTypeDate";break;default:m="esriFieldTypeString"}r.push({name:d,type:m,alias:y,length:j(m)})}}return r}function me(a){if(!a.length)return"string";const i=/[^+\-.,0-9]/;return a.map(e=>{if(e!==""){if(!i.test(e)){let t=N(e);if(!isNaN(t))return/[.,]/.test(e)||!Number.isInteger(t)||t>214783647||t<-214783648?"double":"integer";if(e.includes("E")&&(t=Number(e),!Number.isNaN(t)||e.includes(",")&&(e=e.replace(",","."),t=Number(e),!Number.isNaN(t))))return"double"}return $(e)?"date":"string"}}).reduce((e,t)=>e===void 0?t:t===void 0?e:e===t?t:e==="string"||t==="string"?"string":e==="double"||t==="double"?"double":void 0)}const N=function(){const a=se(),i=new RegExp("^"+a.regexp+"$"),e=new RegExp("["+a.group+"\\s\\xa0]","g"),t=a.factor;return n=>{const r=i.exec(n);if(a.factor=t,!r)return NaN;let o=r[1];if(!r[1]){if(!r[2])return NaN;o=r[2],a.factor*=-1}return o=o.replace(e,"").replace(a.decimal,"."),+o*a.factor}}();function pe(a){return JSON.parse(JSON.stringify(a))}const he=oe("esriGeometryPoint"),ye=["csv"],ge=[0,0];class Fe{constructor(i,e){this.x=i,this.y=e}}class _e{constructor(){this._queryEngine=null,this._snapshotFeatures=async i=>{const e=await this._fetch(i);return this._createFeatures(e)}}destroy(){this._queryEngine?.destroy(),this._queryEngine=null}async load(i,e={}){this._loadOptions=i;const[t]=await Promise.all([this._fetch(e.signal),this._checkProjection(i?.parsingOptions?.spatialReference)]),n=Ie(t,i);this._locationInfo=n.locationInfo,this._delimiter=n.delimiter,this._queryEngine=this._createQueryEngine(n);const r=await this._createFeatures(t);this._queryEngine.featureStore.addMany(r);const{fullExtent:o,timeExtent:l}=await this._queryEngine.fetchRecomputedExtents();if(n.layerDefinition.extent=o,l){const{start:c,end:d}=l;n.layerDefinition.timeInfo.timeExtent=[c,d]}return n}async applyEdits(){throw new F("csv-layer:editing-not-supported","applyEdits() is not supported on CSVLayer")}async queryFeatures(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(i,e.signal)}async queryFeatureCount(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(i,e.signal)}async queryObjectIds(i={},e={}){return await this._waitSnapshotComplete(),(await this._queryEngine.executeQueryForIds(i,e.signal)).filter(A)}async queryExtent(i={},e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(i,e.signal)}async querySnapping(i,e={}){return await this._waitSnapshotComplete(),ee(this._queryEngine,i,e.signal)}async queryAttributeBins(i,e={}){return await this._waitSnapshotComplete(),this._queryEngine.executeAttributeBinsQuery(i,e.signal)}async refresh(i){this._loadOptions.customParameters=i,this._snapshotTask?.abort(),this._snapshotTask=L(this._snapshotFeatures),this._snapshotTask.promise.then(n=>{this._queryEngine.featureStore.clear(),n&&this._queryEngine.featureStore.addMany(n)},n=>{this._queryEngine.featureStore.clear(),V(n)||P.getLogger("esri.layers.CSVLayer").error(new F("csv-layer:refresh","An error occurred during refresh",{error:n}))}),await this._waitSnapshotComplete();const{fullExtent:e,timeExtent:t}=await this._queryEngine.fetchRecomputedExtents();return{extent:e,timeExtent:t}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _fetch(i){const{url:e,customParameters:t}=this._loadOptions;if(!e)throw new F("csv-layer:invalid-source","url not defined");const n=R(e);return(await G(n.path,{query:{...n.query,...t},responseType:"text",signal:i})).data}_createQueryEngine(i){const{objectIdField:e,fields:t,extent:n,timeInfo:r}=i.layerDefinition,o=new te({geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1});return new ne({fieldsIndex:I.fromLayerJSON({fields:t,dateFieldsTimeReference:{timeZoneIANA:T}}),geometryType:"esriGeometryPoint",hasM:!1,hasZ:!1,timeInfo:r,objectIdField:e,spatialReference:n.spatialReference||{wkid:4326},featureStore:o})}async _createFeatures(i){const{latitudeFieldName:e,longitudeFieldName:t}=this._locationInfo,{objectIdField:n,fieldsIndex:r,spatialReference:o}=this._queryEngine;let l=[];const c=[],d=r.fields.filter(s=>s.name!==n).map(s=>s.name);let y=0;const m={};for(const s of r.fields)if(s.type!=="esriFieldTypeOID"&&s.type!=="esriFieldTypeGlobalID"){const u=M(s);u!==void 0&&(m[s.name]=u)}const p=v(i,d,this._delimiter,ae(m,n));for(const s of p){const u=this._parseCoordinateValue(s[e]),g=this._parseCoordinateValue(s[t]);if(g!=null&&u!=null&&!isNaN(u)&&!isNaN(g)){s[e]=u,s[t]=g;for(const f in s)if(f!==e&&f!==t)if(r.isDateField(f))s[f]=W(s[f]);else if(r.isNumericField(f)){const x=N(s[f]);isNaN(x)?s[f]=null:s[f]=x}else s[f]!=null&&(s[f]=pe(s[f]));s[n]=y,y++,l.push(new Fe(g,u)),c.push(s)}}if(!Q({wkid:4326},o))if(J(o))for(const s of l)[s.x,s.y]=Z(s.x,s.y,ge);else l=z(H,l,B.WGS84,o,null,null);const h=[];for(let s=0;s<l.length;s++){const{x:u,y:g}=l[s],f=c[s];f[n]=s+1,h.push(new K(new X([],[u,g]),f,null,f[n]))}return h}_parseCoordinateValue(i){if(i==null||i==="")return null;let e=N(i);return(isNaN(e)||Math.abs(e)>181)&&(e=parseFloat(i)),e}async _checkProjection(i){try{await ie(Y,i)}catch{throw new F("csv-layer:projection-not-supported","Projection not supported")}}}function Ie(a,i){const e=i.parsingOptions||{},t={delimiter:e.delimiter,layerDefinition:null,locationInfo:{latitudeFieldName:e.latitudeField,longitudeFieldName:e.longitudeField}},n=t.layerDefinition={name:U(i.url,ye)||"csv",dateFieldsTimeReference:{timeZoneIANA:T},drawingInfo:he,geometryType:"esriGeometryPoint",objectIdField:null,fields:[],timeInfo:e.timeInfo,extent:{xmin:Number.POSITIVE_INFINITY,ymin:Number.POSITIVE_INFINITY,xmax:Number.NEGATIVE_INFINITY,ymax:Number.NEGATIVE_INFINITY,spatialReference:e.spatialReference||{wkid:4326}}},r=q(a),o=r.next().value?.trim(),l=r.next().value?.trim();if(!o)throw new F("csv-layer:empty-csv","CSV is empty",{csv:a});const{delimiter:c,locationInfo:d}=de(o,l,e);if(!c)throw new F("csv-layer:invalid-delimiter","Unable to detect the delimiter from CSV",{firstLine:o,secondLine:l,parsingOptions:e});if(!d)throw new F("csv-layer:location-fields-not-found","Unable to identify latitude and longitude fields from the CSV file",{firstLine:o,secondLine:l,parsingOptions:e});t.locationInfo=d,t.delimiter=c;const{names:y,aliases:m}=k(o,c),p=fe(a,t.delimiter,y,m,t.locationInfo);if(e.fields?.length){const s=new I(e.fields);for(const u of p){const g=s.get(u.name);g&&Object.assign(u,g)}}if(!p.some(s=>s.type==="esriFieldTypeOID"&&(n.objectIdField=s.name,!0))){const s={name:"__OBJECTID",alias:"__OBJECTID",type:"esriFieldTypeOID",editable:!1,nullable:!1};n.objectIdField=s.name,p.unshift(s)}n.fields=p;const h=new I(n.fields);if(t.locationInfo&&(t.locationInfo.latitudeFieldName=h.get(t.locationInfo.latitudeFieldName).name,t.locationInfo.longitudeFieldName=h.get(t.locationInfo.longitudeFieldName).name),n.timeInfo){const s=n.timeInfo;if(s.startTimeField){const u=h.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=h.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=h.get(s.trackIdField);s.trackIdField=u?u.name:null}s.startTimeField||s.endTimeField||(n.timeInfo=null)}return t}export{_e as default};
