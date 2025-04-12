import{s as b,bH as W,bI as X,ap as ce,bG as he,cg as L,bh as V,ag as de,ce as ee,hy as Ze,ey as fe,ha as je,hz as Be,f as U,aq as ke,aJ as me,C as $e,hA as E,b3 as pe,D as He,hB as Le,cS as Ue,bO as Je,cU as Ye,bq as te,bY as Ke,cJ as We,ae as ye,a9 as Xe,cM as et,bS as tt,bZ as it}from"./main-I34c1W55.js";import{Y as st}from"./projection-CWCxBqta.js";import{R as ge}from"./normalizeUtils-DTkh_H_s.js";import{o as at}from"./featureConversionUtils-CpxfICn8.js";import{e as xe}from"./LRUCache-ZfeFKpq2.js";import{Z as rt}from"./WhereClause-CXI2Zkil.js";import{i as _e}from"./fieldType-BWhJ6RUZ.js";import{a as O,h as Z,y as ie,v as Fe,b as nt,P as j,t as ot,I as we}from"./timeSupport-Cpa6UIyb.js";import{j as D,x as se,g as P,a as lt,S as Se,b as ut}from"./queryUtils-DRiQDASA.js";import{t as ct}from"./QueryEngineCapabilities-Gr588n9t.js";import{s as Ie}from"./quantizationUtils-D7EiPGyU.js";import{I as ht}from"./utils-XBf-yJQA.js";import{m as ae,B as dt,f as Te,p as Re,C as ft,k as mt,$ as pt,E as yt,P as gt,U as xt,g as _t,v as Ft,d as wt}from"./utils-B8nnYR3C.js";import{Z as St}from"./FieldsIndex-BWCyDbTB.js";import{C as ve}from"./Scheduler-BJXHWoQH.js";let It=class{constructor(n,e){this._cache=new xe(n),this._invalidCache=new xe(e)}get(n,e){const t=`${e.uid}:${n}`,i=this._cache.get(t);if(i)return i;if(this._invalidCache.get(t)!=null)return null;try{const s=rt.create(n,{fieldsIndex:e});return this._cache.put(t,s),s}catch(s){return this._invalidCache.put(t,s),null}}getError(n,e){const t=`${e.uid}:${n}`;return this._invalidCache.get(t)??null}};const be=new It(50,500),B="unsupported-query",Ae=" as ",Ee=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeBigInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong"]),Ve=new Set(["esriFieldTypeDate","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]),Tt=new Set(["esriFieldTypeString","esriFieldTypeGUID","esriFieldTypeGlobalID",...Ee,...Ve]);function re(n,e,t={}){const i=M(e,n);if(!i){const a=be.getError(e,n);throw new b(B,"invalid SQL expression",{expression:e,error:a})}const s=t.expressionName||"expression";if(t.validateStandardized&&!i.isStandardized)throw new b(B,`${s} is not standard`,{expression:e});if(t.validateAggregate&&!i.isAggregate)throw new b(B,`${s} does not contain a valid aggregate function`,{expression:e});return i.fieldNames}function Rt(n,e,t,i){if(!t)return!0;const s="where clause";return C(n,e,re(n,t,{validateStandardized:!0,expressionName:s}),{expressionName:s,query:i}),!0}function vt(n,e,t,i,s){if(!t)return!0;const a="having clause",r=re(n,t,{validateAggregate:!0,expressionName:a});if(C(n,e,r,{expressionName:a,query:s}),!M(t,n)?.getExpressions().every(o=>{const{aggregateType:l,field:u}=o,c=n.get(u)?.name;return i.some(h=>{const{onStatisticField:d,statisticType:m}=h;return n.get(d)?.name===c&&m.toLowerCase().trim()===l})}))throw new b(B,"expressions in having clause should also exist in outStatistics",{having:t});return!0}function M(n,e){return n?be.get(n,e):null}function ze(n){return/\((.*?)\)/.test(n)?n:n.split(Ae)[0]}function bt(n){return n.split(Ae)[1]}function C(n,e,t,i={}){const s=new Map;if(At(s,n,e,i.allowedFieldTypes??Tt,t),s.size){const a=i.expressionName??"expression";throw new b(B,`${a} contains invalid or missing fields`,{errors:Array.from(s.values()),query:i.query})}}function At(n,e,t,i,s){const a=s.includes("*")?[...t,...s.filter(r=>r!=="*")]:s;for(const r of a)if(e.get(r))Ce(n,e,t,i,r);else try{const o=re(e,ze(r),{validateStandardized:!0});for(const l of o)Ce(n,e,t,i,l)}catch(o){n.set(r,{type:"expression-error",expression:r,error:o})}}function Ce(n,e,t,i,s){const a=e.get(s);a?t.has(a.name)?i!=="all"&&i?.has(a.type)===!1&&n.set(s,{type:"invalid-type",fieldName:a.name,fieldType:_e.fromJSON(a.type),allowedFieldTypes:Array.from(i,r=>_e.fromJSON(r))}):n.set(s,{type:"missing-field",fieldName:a.name}):n.set(s,{type:"invalid-field",fieldName:s})}const Et=5;let Vt=class{constructor(){this._storage=new Map,this._purgeInterval=Et,this._sweep=()=>{if(this._timer=void 0,!this._storage)return;const n=1e3*this._purgeInterval,e=performance.now()-n;for(const[t,i]of this._storage){if(!(i.time<e))return void(this._storage.size>0&&(this._timer=setTimeout(this._sweep,n)));this._storage.delete(t)}}}destroy(){this._storage?.clear(),this._storage=null,clearTimeout(this._timer)}get size(){return this._storage?.size??0}put(n,e){this._storage?.set(n,new Ct(e)),this._scheduleSweep()}get(n){if(!this._storage)return;const e=this._storage?.get(n);return e?(this._storage?.delete(n),e.time=performance.now(),this._storage?.set(n,e),e.items):void 0}clear(){this._storage?.clear()}_scheduleSweep(){this._storage&&(this._timer??=setTimeout(this._sweep,1e3*this._purgeInterval))}},zt=0;class Ct{constructor(e){this.items=e,this.time=performance.now(),this.id=zt++}}let J=class{constructor(n,e,t){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=n.returnDistinctValues??!1,this.fieldsIndex=t,this.featureAdapter=e;const i=n.outFields;if(i&&!i.includes("*")){this.outFields=i;let s=0;for(const a of i){const r=ze(a),o=this.fieldsIndex.get(r),l=o?null:M(r,t),u=o?o.name:bt(a)||"FIELD_EXP_"+s++;this._fieldDataCache.set(a,{alias:u,clause:l})}}}countDistinctValues(n){return this.returnDistinctValues?(n.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):n.length}getAttributes(n){const e=this._processAttributesForOutFields(n);return this._processAttributesForDistinctValues(e)}getFieldValue(n,e,t){const i=t?t.name:e;let s=null;return this._fieldDataCache.has(i)?s=this._fieldDataCache.get(i)?.clause:t||(s=M(e,this.fieldsIndex),this._fieldDataCache.set(i,{alias:i,clause:s})),t?this.featureAdapter.getAttribute(n,i):s?.calculateValue(n,this.featureAdapter)}getDataValues(n,e,t=!0){const i=e.normalizationType,s=e.normalizationTotal,a=this.fieldsIndex.get(e.field),r=W(a)||X(a),o=ce(a);return n.map(l=>{let u=e.field&&this.getFieldValue(l,e.field,this.fieldsIndex.get(e.field));if(e.field2?(u=`${ae(u)}${e.fieldDelimiter}${ae(this.getFieldValue(l,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(u=`${u}${e.fieldDelimiter}${ae(this.getFieldValue(l,e.field3,this.fieldsIndex.get(e.field3)))}`)):typeof u=="string"&&t&&(r?u=u?new Date(u).getTime():null:o&&(u=u?ht(u):null)),i&&Number.isFinite(u)){const c=i==="field"&&e.normalizationField?this.getFieldValue(l,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;u=dt(u,i,c,s)}return u})}async getExpressionValues(n,e,t,i,s){const{arcadeUtils:a}=await he(),r=a.hasGeometryOperations(e);r&&await a.enableGeometryOperations();const o=a.createFunction(e),l=a.getViewInfo(t),u={fields:this.fieldsIndex.fields};return n.map(c=>{const h={attributes:this.featureAdapter.getAttributes(c),layer:u,geometry:r?{...O(i.geometryType,i.hasZ,i.hasM,this.featureAdapter.getGeometry(c)),spatialReference:t?.spatialReference}:null},d=a.createExecContext(h,l,s);return a.executeFunction(o,d)})}validateItem(n,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:M(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testFeature(n,this.featureAdapter)??!1}validateItems(n,e){return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:M(e,this.fieldsIndex)}),this._fieldDataCache.get(e)?.clause?.testSet(n,this.featureAdapter)??!1}_processAttributesForOutFields(n){const e=this.outFields;if(!e?.length)return this.featureAdapter.getAttributes(n);const t={};for(const i of e){const{alias:s,clause:a}=this._fieldDataCache.get(i);t[s]=a?a.calculateValue(n,this.featureAdapter):this.featureAdapter.getAttribute(n,s)}return t}_processAttributesForDistinctValues(n){if(n==null||!this.returnDistinctValues)return n;const e=this.outFields,t=[];if(e)for(const a of e){const{alias:r}=this._fieldDataCache.get(a);t.push(n[r])}else for(const a in n)t.push(n[a]);const i=`${(e||["*"]).join(",")}=${t.join(",")}`;let s=this._returnDistinctMap.get(i)||0;return this._returnDistinctMap.set(i,++s),s>1?null:n}};function qe(n,e,t){return{objectId:n,target:e,distance:t,type:"vertex"}}function qt(n,e,t,i,s,a=!1){return{objectId:n,target:e,distance:t,type:"edge",start:i,end:s,draped:a}}class v{constructor(e,t,i){this.items=e,this.query=t,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new J(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:i,outStatistics:s}=this.query;if(!t?.length)return 1;const a=new Map,r=new Map,o=new Set;for(const l of s){const{statisticType:u}=l,c=u!=="exceedslimit"?l.onStatisticField:void 0;if(!r.has(c)){const d=[];for(const m of t){const y=this._getAttributeValues(e,m,a);d.push(y)}r.set(c,this._calculateUniqueValues(d,e.returnDistinctValues))}const h=r.get(c);for(const d in h){const{data:m,items:y}=h[d],f=m.join(",");i&&!e.validateItems(y,i)||o.add(f)}}return o.size}async createQueryResponse(){let e;if(this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const t=this.query.geometry;L(this.query.outSR)&&!V(t.spatialReference,this.query.outSR)?e.queryGeometry=Z({spatialReference:this.query.outSR,...D(t,t.spatialReference,this.query.outSR)}):e.queryGeometry=Z({spatialReference:this.query.outSR,...t})}return e}createSnappingResponse(e,t){const i=this.featureAdapter,s=De(this.hasZ,this.hasM),{point:a,mode:r}=e,o=typeof e.distance=="number"?e.distance:e.distance.x,l=typeof e.distance=="number"?e.distance:e.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",h=this._getPointCreator(r,this.spatialReference,t),d=new Me(null,0),m=new Me(null,0),y={x:0,y:0,z:0};for(const f of this.items){const w=i.getGeometry(f);if(w==null)continue;const{coords:_,lengths:I}=w;if(d.coords=_,m.coords=_,e.returnEdge){let S=0;for(let g=0;g<I.length;g++){const p=I[g];for(let F=0;F<p;F++,S+=s){const x=d;if(x.coordsIndex=S,F!==p-1){const T=m;T.coordsIndex=S+s;const R=y;Dt(y,a,x,T);const q=(a.x-R.x)/o,k=(a.y-R.y)/l,A=q*q+k*k;A<=1&&u.candidates.push(qt(i.getObjectId(f),h(R),Math.sqrt(A),h(x),h(T)))}}}}if(e.vertexMode!=="none"){const S=c?_.length-s:_.length;if(e.vertexMode==="all")for(let g=0;g<S;g+=s){const p=d;p.coordsIndex=g;const F=(a.x-p.x)/o,x=(a.y-p.y)/l,T=F*F+x*x;T<=1&&u.candidates.push(qe(i.getObjectId(f),h(p),Math.sqrt(T)))}else if(e.vertexMode==="ends"){const g=[0];c||g.push(_.length-s);for(const p of g){const F=d;F.coordsIndex=p;const x=(a.x-F.x)/o,T=(a.y-F.y)/l,R=x*x+T*T;R<=1&&u.candidates.push(qe(i.getObjectId(f),h(F),Math.sqrt(R)))}}}}return u.candidates.sort((f,w)=>f.distance-w.distance),u}_getPointCreator(e,t,i){const s=i==null||V(t,i)?o=>o:o=>D(o,t,i),{hasZ:a}=this,r=0;return e==="3d"?a?({x:o,y:l,z:u})=>s({x:o,y:l,z:u}):({x:o,y:l})=>s({x:o,y:l,z:r}):({x:o,y:l})=>s({x:o,y:l})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,minValue:o,maxValue:l,scale:u,timeZone:c,outStatisticTypes:h}=e,d=this.fieldsIndex.get(t),m=de(d)||W(d)||X(d),y=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:u,timeZone:c}),f=wt({normalizationType:a,normalizationField:s,minValue:o,maxValue:l}),w={value:.5,fieldType:d?.type},_=ee(d)?Te({values:y,supportsNullCount:f,percentileParams:w,outStatisticTypes:h}):Re({values:y,minValue:o,maxValue:l,useSampleStdDev:!a,supportsNullCount:f,percentileParams:w,outStatisticTypes:h});return ft(_,h,m)}async createUniqueValuesResponse(e){const{field:t,valueExpression:i,domains:s,returnAllCodedValues:a,scale:r,timeZone:o}=e,l=await this._getDataValues({field:t,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,valueExpression:i,scale:r,timeZone:o},!1),u=mt(l);return pt(u,s,a,e.fieldDelimiter)}async createClassBreaksResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h,scale:d,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:d,timeZone:m}),f=yt(y,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numClasses:h});return gt(f,o)}async createHistogramResponse(e){const{field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h,scale:d,timeZone:m}=e,y=await this._getDataValues({field:t,valueExpression:i,normalizationField:s,normalizationType:a,normalizationTotal:r,scale:d,timeZone:m});return xt(y,{field:t,normalizationField:s,normalizationType:a,normalizationTotal:r,classificationMethod:o,standardDeviationInterval:l,minValue:u,maxValue:c,numBins:h})}_sortFeatures(e,t,i){if(e.length>1&&t?.length)for(const s of t.reverse()){const a=s.split(" "),r=a[0],o=this.fieldsIndex.get(r),l=!!a[1]&&a[1].toLowerCase()==="desc",u=_t(o?.type,l);e.sort((c,h)=>{const d=i(c,r,o),m=i(h,r,o);return u(d,m)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:i,hasM:s,hasZ:a,objectIdField:r,spatialReference:o}=this,{outFields:l,outSR:u,quantizationParameters:c,resultRecordCount:h,resultOffset:d,returnZ:m,returnM:y}=e,f=h!=null&&t.length>(d||0)+h,w=l&&(l.includes("*")?[...this.fieldsIndex.fields]:l.map(_=>this.fieldsIndex.get(_)));return{exceededTransferLimit:f,features:this._createFeatures(e,t),fields:w,geometryType:i,hasM:s&&y,hasZ:a&&m,objectIdFieldName:r,spatialReference:Z(u||o),transform:c&&Ie(c)||null}}_createFeatures(e,t){const i=new J(e,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:a}=this,{orderByFields:r,quantizationParameters:o,returnGeometry:l,returnCentroid:u,maxAllowableOffset:c,resultOffset:h,resultRecordCount:d,returnZ:m=!1,returnM:y=!1}=e,f=a&&m,w=s&&y;let _=[],I=0;const S=[...t];if(this._sortFeatures(S,r,(p,F,x)=>i.getFieldValue(p,F,x)),this.geometryType&&(l||u)){const p=Ie(o)??void 0,F=this.geometryType==="esriGeometryPolygon"||this.geometryType==="esriGeometryPolyline";if(l&&!u)for(const x of S){const T=this.featureAdapter.getGeometry(x),R={attributes:i.getAttributes(x),geometry:O(this.geometryType,this.hasZ,this.hasM,T,c,p,f,w)};F&&T&&!R.geometry&&(R.centroid=ie(this,this.featureAdapter.getCentroid(x,this),p)),_[I++]=R}else if(!l&&u)for(const x of S)_[I++]={attributes:i.getAttributes(x),centroid:ie(this,this.featureAdapter.getCentroid(x,this),p)};else for(const x of S)_[I++]={attributes:i.getAttributes(x),centroid:ie(this,this.featureAdapter.getCentroid(x,this),p),geometry:O(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(x),c,p,f,w)}}else for(const p of S){const F=i.getAttributes(p);F&&(_[I++]={attributes:F})}const g=h||0;if(d!=null){const p=g+d;_=_.slice(g,Math.min(_.length,p))}return _}_createExceedsLimitQueryResponse(e){let t=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY;for(const r of e.outStatistics??[])if(r.statisticType==="exceedslimit"){i=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,s=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,a=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>i;else if(this.items.length>s)t=!0;else{const r=De(this.hasZ,this.hasM),o=this.featureAdapter;t=this.items.reduce((l,u)=>{const c=o.getGeometry(u);return l+(c!=null&&c.coords.length||0)},0)/r>a}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},i=[],s=new Map,a=new Map,r=new Map,o=new Map,l=new J(e,this.featureAdapter,this.fieldsIndex),u=e.outStatistics,{groupByFieldsForStatistics:c,having:h,orderByFields:d,resultRecordCount:m}=e,y=c?.length,f=!!y,w=f?c[0]:null,_=f&&!this.fieldsIndex.get(w);for(const S of u??[]){const{outStatisticFieldName:g,statisticType:p}=S,F=S,x=p!=="exceedslimit"?S.onStatisticField:void 0,T=p==="percentile_disc"||p==="percentile_cont",R=p==="EnvelopeAggregate"||p==="CentroidAggregate"||p==="ConvexHullAggregate",q=f&&y===1&&(x===w||_)&&p==="count";if(f){if(!r.has(x)){const $=[];for(const K of c){const H=this._getAttributeValues(l,K,s);$.push(H)}r.set(x,this._calculateUniqueValues($,!R&&l.returnDistinctValues))}const A=r.get(x);if(!A)continue;const Y=Object.keys(A);for(const $ of Y){const{count:K,data:H,items:oe,itemPositions:Ne}=A[$],le=H.join(",");if(!h||l.validateItems(oe,h)){const Q=o.get(le)||{attributes:{}};if(R){Q.aggregateGeometries||(Q.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:G}=await this._getAggregateGeometry(F,oe);Q.aggregateGeometries[G]=z}else{let z=null;if(q)z=K;else{const G=this._getAttributeValues(l,x,s),ue=Ne.map(Oe=>G[Oe]);z=T&&"statisticParameters"in F?this._getPercentileValue(F,ue):this._getStatisticValue(F,ue,null,l.returnDistinctValues)}Q.attributes[g]=z}let Ge=0;c.forEach((z,G)=>Q.attributes[this.fieldsIndex.get(z)?z:"EXPR_"+ ++Ge]=H[G]),o.set(le,Q)}}}else if(R){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:A,outStatisticFieldName:Y}=await this._getAggregateGeometry(F,this.items);t.aggregateGeometries[Y]=A}else{const A=this._getAttributeValues(l,x,s);t.attributes[g]=T&&"statisticParameters"in F?this._getPercentileValue(F,A):this._getStatisticValue(F,A,a,l.returnDistinctValues)}const k=p!=="min"&&p!=="max"||!ee(this.fieldsIndex.get(x))&&!this._isAnyDateField(x)?null:this.fieldsIndex.get(x)?.type;i.push({name:g,alias:g,type:k||"esriFieldTypeDouble"})}const I=f?Array.from(o.values()):[t];return this._sortFeatures(I,d,(S,g)=>S.attributes[g]),m&&(I.length=Math.min(m,I.length)),{fields:i,features:I}}_isAnyDateField(e){const t=this.fieldsIndex.get(e);return de(t)||W(t)||X(t)||ce(t)}async _getAggregateGeometry(e,t){const{convexHull:i,union:s}=await import("./geometryEngineJSON-CGn_tfx8.js").then(f=>f.g),{statisticType:a,outStatisticFieldName:r}=e,{featureAdapter:o,spatialReference:l,geometryType:u,hasZ:c,hasM:h}=this,d=t.map(f=>O(u,c,h,o.getGeometry(f))),m=i(l,d,!0)[0],y={aggregateGeometries:null,outStatisticFieldName:null};if(a==="EnvelopeAggregate"){const f=m?Ze(m):fe(s(l,d));y.aggregateGeometries={...f,spatialReference:l},y.outStatisticFieldName=r||"extent"}else if(a==="CentroidAggregate"){const f=m?je(m):Be(fe(s(l,d)));y.aggregateGeometries={x:f[0],y:f[1],spatialReference:l},y.outStatisticFieldName=r||"centroid"}else a==="ConvexHullAggregate"&&(y.aggregateGeometries=m,y.outStatisticFieldName=r||"convexHull");return y}_getStatisticValue(e,t,i,s){const{onStatisticField:a,statisticType:r}=e;let o=null;return o=i?.has(a)?i.get(a):ee(this.fieldsIndex.get(a))||this._isAnyDateField(a)?Te({values:t,returnDistinct:s}):Re({values:s?[...new Set(t)]:t,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(a,o),o[r==="var"?"variance":r]}_getPercentileValue(e,t){const{onStatisticField:i,statisticParameters:s,statisticType:a}=e,{value:r,orderBy:o}=s,l=this.fieldsIndex.get(i);return Ft(t,{value:r,orderBy:o,fieldType:l?.type,isDiscrete:a==="percentile_disc"})}_getAttributeValues(e,t,i){if(i.has(t))return i.get(t);const s=this.fieldsIndex.get(t),a=this.items.map(r=>e.getFieldValue(r,t,s));return i.set(t,a),a}_calculateUniqueValues(e,t){const i={},s=this.items,a=s.length;for(let r=0;r<a;r++){const o=s[r],l=[];for(const c of e)l.push(c[r]);const u=l.join(",");i[u]==null?i[u]={count:1,data:l,items:[o],itemPositions:[r]}:(t||i[u].count++,i[u].items.push(o),i[u].itemPositions.push(r))}return i}async _getDataValues(e,t=!0){const i=new J(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,scale:a,timeZone:r}=e;return s?i.getExpressionValues(this.items,s,{viewingMode:"map",scale:a,spatialReference:this.query.outSR||this.spatialReference},{geometryType:this.geometryType,hasZ:this.hasZ,hasM:this.hasM},r):i.getDataValues(this.items,U(e),t)}}function Dt(n,e,t,i){const s=i.x-t.x,a=i.y-t.y,r=s*s+a*a,o=(e.x-t.x)*s+(e.y-t.y)*a,l=Math.min(1,Math.max(0,o/r));n.x=t.x+s*l,n.y=t.y+a*l}function De(n,e){return n?e?4:3:e?3:2}class Me{constructor(e,t){this.coords=e,this.coordsIndex=t}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}const N="unsupported-query";async function Qe(n,{fieldsIndex:e,geometryType:t,spatialReference:i,availableFields:s}){if((n.distance??0)<0||n.geometryPrecision!=null||n.multipatchOption&&n.multipatchOption!=="xyFootprint"||n.pixelSize||n.relationParam||n.text)throw new b(N,"Unsupported query options",{query:n});return Pe(e,s,n),Qt(e,s,n),Promise.all([Fe(n,t,i),se(i,n.outSR)]).then(()=>n)}function Pe(n,e,t){const{outFields:i,orderByFields:s,returnDistinctValues:a,outStatistics:r}=t,o=r?r.map(l=>l.outStatisticFieldName&&l.outStatisticFieldName.toLowerCase()).filter(Boolean):[];if(s&&s.length>0){const l=" asc",u=" desc",c=s.map(h=>{const d=h.toLowerCase();return d.includes(l)?d.split(l)[0]:d.includes(u)?d.split(u)[0]:h}).filter(h=>!o.includes(h));C(n,e,c,{expressionName:"orderByFields",query:t})}if(i&&i.length>0)C(n,e,i,{expressionName:"outFields",query:t,allowedFieldTypes:"all"});else if(a)throw new b(N,"outFields should be specified for returnDistinctValues",{query:t});Rt(n,e,t.where,t)}const Mt=new Set([...Ee,...Ve]);function Qt(n,e,t){const{outStatistics:i,groupByFieldsForStatistics:s,having:a}=t,r=s?.length,o=i?.length;if(a){if(!r||!o)throw new b(N,"outStatistics and groupByFieldsForStatistics should be specified with having",{query:t});vt(n,e,a,i,t)}if(o){if(!Gt(i))return;const l=i.map(u=>u.onStatisticField).filter(Boolean);C(n,e,l,{expressionName:"onStatisticFields",query:t}),r&&C(n,e,s,{expressionName:"groupByFieldsForStatistics",query:t});for(const u of i){const{onStatisticField:c,statisticType:h}=u;if((h==="percentile_disc"||h==="percentile_cont")&&"statisticParameters"in u){const{statisticParameters:d}=u;if(!d)throw new b(N,"statisticParameters should be set for percentile type",{definition:u,query:t})}else n.get(c)&&h!=="count"&&h!=="min"&&h!=="max"&&C(n,e,[c],{expressionName:`outStatistics with '${h}' statistic type`,allowedFieldTypes:Mt,query:t})}}}async function Pt(n,e,{fieldsIndex:t,geometryType:i,spatialReference:s,availableFields:a}){if((n.distance??0)<0||n.geometryPrecision!=null||n.multipatchOption||n.pixelSize||n.relationParam||n.text||n.outStatistics||n.groupByFieldsForStatistics||n.having||n.orderByFields)throw new b(N,"Unsupported query options",{query:n});return Pe(t,a,n),Promise.all([Nt(t,a,e,n),Fe(n,i,s),se(s,n.outSR)]).then(()=>n)}async function Nt(n,e,t,i){let s=[];if(t.valueExpression){const{arcadeUtils:a}=await he();s=a.extractFieldNames(t.valueExpression)}if(t.field&&s.push(t.field),t.field2&&s.push(t.field2),t.field3&&s.push(t.field3),t.normalizationField&&s.push(t.normalizationField),!s.length&&!t.valueExpression)throw new b(N,"field or valueExpression is required",{params:t});C(n,e,s,{expressionName:"statistics",query:i})}function Gt(n){return n!=null&&n.every(e=>e.statisticType!=="exceedslimit")}const Ot="unsupported-query";class Zt{constructor(e){this._cache=new Vt,this._changeHandle=null,this.capabilities={query:ct},this.geometryType=e.geometryType,this.hasM=!!e.hasM,this.hasZ=!!e.hasZ,this.objectIdField=e.objectIdField,this.spatialReference=e.spatialReference,this.definitionExpression=e.definitionExpression,this.featureStore=e.featureStore,this.aggregateAdapter=e.aggregateAdapter,this._changeHandle=this.featureStore.events.on("changed",()=>this.clearCache()),this.timeInfo=e.timeInfo,this.fieldsIndex=ke(e.fieldsIndex)?e.fieldsIndex:St.fromJSON(e.fieldsIndex),!e.availableFields||e.availableFields.length===1&&e.availableFields[0]==="*"?this.availableFields=new Set(this.fieldsIndex.fields.map(t=>t.name)):this.availableFields=new Set(e.availableFields.map(t=>this.fieldsIndex.get(t)?.name).filter(t=>t!=null)),e.scheduler&&e.priority&&(this._frameTask=e.scheduler.registerTask(e.priority))}destroy(){this._frameTask=me(this._frameTask),this.clearCache(),$e(this._cache),this._changeHandle=me(this._changeHandle)}get featureAdapter(){return this.featureStore.featureAdapter}clearCache(){this._cache.clear(),this._allFeaturesPromise=null,this._timeExtentPromise=null,this._fullExtentPromise=null}async executeQuery(e,t){const i=E(t);try{return await(await this._executeQuery(e,{},i)).createQueryResponse()}catch(s){if(s!==P)throw s;return new v([],e,this).createQueryResponse()}}async executeQueryForCount(e={},t){const i=E(t);try{return(await this._executeQuery(e,{returnGeometry:!1,returnCentroid:!1,outSR:null},i)).createQueryResponseForCount()}catch(s){if(s!==P)throw s;return 0}}async executeQueryForExtent(e,t){const i=E(t),s=e.outSR;try{const a=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},i),r=a.size;return r?{count:r,extent:await this._getBounds(a.items,a.spatialReference,s||this.spatialReference)}:{count:0,extent:null}}catch(a){if(a===P)return{count:0,extent:null};throw a}}async executeQueryForIds(e,t){return this.executeQueryForIdSet(e,t).then(i=>Array.from(i))}async executeQueryForIdSet(e,t){const i=E(t);try{const s=await this._executeQuery(e,{returnGeometry:!0,returnCentroid:!1,outSR:null},i),a=s.items,r=new Set;return await this._reschedule(()=>{for(const o of a)r.add(s.featureAdapter.getObjectId(o))},i),r}catch(s){if(s===P)return new Set;throw s}}async executeQueryForSnapping(e,t){const i=E(t),{point:s,distance:a,returnEdge:r,vertexMode:o}=e;if(!r&&o==="none")return{candidates:[]};let l=U(e.query);l=await this._schedule(()=>lt(l,this.definitionExpression,this.spatialReference),i),l=await this._reschedule(()=>Qe(l,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),i);const u=!V(s.spatialReference,this.spatialReference);u&&await se(s.spatialReference,this.spatialReference);const c=typeof a=="number"?a:a.x,h=typeof a=="number"?a:a.y,d={xmin:s.x-c,xmax:s.x+c,ymin:s.y-h,ymax:s.y+h,spatialReference:s.spatialReference},m=u?D(d,this.spatialReference):d;if(!m)return{candidates:[]};const y=(await ge(pe(s),null,{signal:i}))[0],f=(await ge(pe(m),null,{signal:i}))[0];if(y==null||f==null)return{candidates:[]};const w=new v(await this._reschedule(()=>this._searchFeatures(ne(f.toJSON())),i),l,this);await this._reschedule(()=>this._executeObjectIdsQuery(w),i),await this._reschedule(()=>this._executeTimeQuery(w),i),await this._reschedule(()=>this._executeAttributesQuery(w),i),await this._reschedule(()=>this._executeGeometryQueryForSnapping(w,i),i);const _=y.toJSON(),I=u?D(_,this.spatialReference):_,S=u?Math.max(m.xmax-m.xmin,m.ymax-m.ymin)/2:a;return w.createSnappingResponse({...e,point:I,distance:S},s.spatialReference)}async executeQueryForLatestObservations(e,t){const i=E(t);if(!this.timeInfo?.trackIdField)throw new b(Ot,"Missing timeInfo or timeInfo.trackIdField",{query:e,timeInfo:this.timeInfo});try{const s=await this._executeQuery(e,{},i);return await this._reschedule(()=>this._filterLatest(s),i),await s.createQueryResponse()}catch(s){if(s!==P)throw s;return new v([],e,this).createQueryResponse()}}async executeQueryForSummaryStatistics(e={},t,i){const s=E(i),{field:a,normalizationField:r,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:o},s)).createSummaryStatisticsResponse(t)}async executeQueryForUniqueValues(e={},t,i){const s=E(i),{field:a,field2:r,field3:o,valueExpression:l}=t;return(await this._executeQueryForStatistics(e,{field:a,field2:r,field3:o,valueExpression:l},s)).createUniqueValuesResponse(t)}async executeQueryForClassBreaks(e={},t,i){const s=E(i),{field:a,normalizationField:r,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:o},s)).createClassBreaksResponse(t)}async executeQueryForHistogram(e={},t,i){const s=E(i),{field:a,normalizationField:r,valueExpression:o}=t;return(await this._executeQueryForStatistics(e,{field:a,normalizationField:r,valueExpression:o},s)).createHistogramResponse(t)}async fetchRecomputedExtents(e){const t=E(e);this._timeExtentPromise||=nt(this.timeInfo,this.featureStore);const[i,s]=await Promise.all([this._getFullExtent(),this._timeExtentPromise]);return He(t),{fullExtent:i,timeExtent:s}}async _getBounds(e,t,i){const s=Le(Je(),Ue);await this.featureStore.forEachBounds(e,o=>Ye(s,o));const a={xmin:s[0],ymin:s[1],xmax:s[3],ymax:s[4],spatialReference:Z(this.spatialReference)};this.hasZ&&isFinite(s[2])&&isFinite(s[5])&&(a.zmin=s[2],a.zmax=s[5],a.hasZ=!0);const r=D(a,t,i);if(r.spatialReference=Z(i),r.xmax-r.xmin==0){const o=te(r.spatialReference);r.xmin-=o,r.xmax+=o}if(r.ymax-r.ymin==0){const o=te(r.spatialReference);r.ymin-=o,r.ymax+=o}if(this.hasZ&&r.zmin!=null&&r.zmax!=null&&r.zmax-r.zmin==0){const o=te(r.spatialReference);r.zmin-=o,r.zmax+=o}return r}_getFullExtent(){return this._fullExtentPromise||="getFullExtent"in this.featureStore&&this.featureStore.getFullExtent?Promise.resolve(this.featureStore.getFullExtent(this.spatialReference)):this._getAllFeatures().then(e=>this._getBounds(e,this.spatialReference,this.spatialReference)),this._fullExtentPromise}async _schedule(e,t){return this._frameTask!=null?this._frameTask.schedule(e,t):e(ve)}async _reschedule(e,t){return this._frameTask!=null?this._frameTask.reschedule(e,t):e(ve)}async _getAllFeaturesQueryEngineResult(e){return new v(await this._getAllFeatures(),e,this)}async _getAllFeatures(){if(this._allFeaturesPromise==null){const i=[];this._allFeaturesPromise=(async()=>{await this.featureStore.forEach(s=>i.push(s))})().then(()=>i)}const e=this._allFeaturesPromise,t=await e;return e===this._allFeaturesPromise?t.slice():this._getAllFeatures()}async _executeQuery(e,t,i){e=U(e),e=await this._schedule(()=>Se(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>Qe(e,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),i),e={...e,...t};const s=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),a=await this._reschedule(()=>this._executeGeometryQuery(e,s,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),i),await this._reschedule(()=>this._executeObjectIdsQuery(a),i),await this._reschedule(()=>this._executeTimeQuery(a),i),await this._reschedule(()=>this._executeAttributesQuery(a),i),a}async _executeSceneFilterQuery(e,t){if(e.sceneFilter==null)return null;const{outSR:i,returnGeometry:s,returnCentroid:a}=e,r=this.featureStore.featureSpatialReference,o=e.sceneFilter.geometry,l=r==null||V(r,o.spatialReference)?o:D(o,r);if(!l)return null;const u=s||a,c=L(i)&&!V(this.spatialReference,i)&&u?async f=>this._project(f,i):f=>f,h=this.featureAdapter,d=await this._reschedule(()=>this._searchFeatures(ne(l)),t);if(e.sceneFilter.spatialRelationship==="disjoint"){if(!d.length)return null;const f=new Set;for(const I of d)f.add(h.getObjectId(I));const w=await this._reschedule(()=>this._getAllFeatures(),t),_=await this._reschedule(async()=>{const I=await j("esriSpatialRelDisjoint",l,this.geometryType,this.hasZ,this.hasM),S=p=>!f.has(h.getObjectId(p))||I(h.getGeometry(p)),g=await this._runSpatialFilter(w,S,t);return new v(g,e,this)},t);return c(_)}if(!d.length)return new v([],e,this);if(this._canExecuteSinglePass(l,e))return c(new v(d,e,this));const m=await j("esriSpatialRelContains",l,this.geometryType,this.hasZ,this.hasM),y=await this._runSpatialFilter(d,f=>m(h.getGeometry(f)),t);return c(new v(y,e,this))}async _executeGeometryQuery(e,t,i){if(t!=null&&t.items.length===0)return t;e=t!=null?t.query:e;const{geometry:s,outSR:a,spatialRel:r,returnGeometry:o,returnCentroid:l}=e,u=this.featureStore.featureSpatialReference,c=!s||u==null||V(u,s.spatialReference)?s:D(s,u),h=o||l,d=L(a)&&!V(this.spatialReference,a),m=t==null?this._getCacheKey(e):null,y=m?this._cache.get(m):null;if(y!=null)return new v(y,e,this);const f=async g=>(d&&h&&await this._project(g,a),m&&this._cache.put(m,g.items),g);if(!c)return f(t??await this._getAllFeaturesQueryEngineResult(e));const w=this.featureAdapter;let _=await this._reschedule(()=>this._searchFeatures(ne(s)),i);if(r==="esriSpatialRelDisjoint"){if(!_.length)return f(t??await this._getAllFeaturesQueryEngineResult(e));const g=new Set;for(const x of _)g.add(w.getObjectId(x));const p=t!=null?t.items:await this._reschedule(()=>this._getAllFeatures(),i),F=await this._reschedule(async()=>{const x=await j(r,c,this.geometryType,this.hasZ,this.hasM),T=q=>!g.has(w.getObjectId(q))||x(w.getGeometry(q)),R=await this._runSpatialFilter(p,T,i);return new v(R,e,this)},i);return f(F)}if(t!=null){const g=new it;_=_.filter(p=>Ke(t.items,p,t.items.length,g)>=0)}if(!_.length){const g=new v([],e,this);return m&&this._cache.put(m,g.items),g}if(this._canExecuteSinglePass(c,e))return f(new v(_,e,this));const I=await j(r,c,this.geometryType,this.hasZ,this.hasM),S=await this._runSpatialFilter(_,g=>I(w.getGeometry(g)),i);return f(new v(S,e,this))}async _executeGeometryQueryForSnapping(e,t){const{query:i}=e,{spatialRel:s}=i;if(!e?.items?.length||!i.geometry||!s)return;const a=await j(s,i.geometry,this.geometryType,this.hasZ,this.hasM),r=await this._runSpatialFilter(e.items,o=>a(o.geometry),t);e.items=r}_executeAggregateIdsQuery(e){if(e.items.length===0||!e.query.aggregateIds?.length||this.aggregateAdapter==null)return;const t=new Set;for(const s of e.query.aggregateIds)this.aggregateAdapter.getFeatureObjectIds(s).forEach(a=>t.add(a));const i=this.featureAdapter.getObjectId;e.items=e.items.filter(s=>t.has(i(s)))}_executeObjectIdsQuery(e){if(e.items.length===0||!e.query.objectIds?.length)return;const t=new Set(e.query.objectIds),i=this.featureAdapter.getObjectId;e.items=e.items.filter(s=>t.has(i(s)))}_executeTimeQuery(e){if(e.items.length===0)return;const t=ot(this.timeInfo,e.query.timeExtent,this.featureAdapter);t!=null&&(e.items=e.items.filter(t))}_executeAttributesQuery(e){if(e.items.length===0)return;const t=M(e.query.where,this.fieldsIndex);if(t){if(!t.isStandardized)throw new TypeError("Where clause is not standardized");e.items=e.items.filter(i=>t.testFeature(i,this.featureAdapter))}}async _runSpatialFilter(e,t,i){if(!t)return e;if(this._frameTask==null)return e.filter(o=>t(o));let s=0;const a=new Array,r=async o=>{for(;s<e.length;){const l=e[s++];t(l)&&(a.push(l),o.madeProgress()),o.done&&await this._reschedule(u=>r(u),i)}};return this._reschedule(o=>r(o),i).then(()=>a)}_filterLatest(e){const{trackIdField:t,startTimeField:i,endTimeField:s}=this.timeInfo,a=s||i,r=new Map,o=this.featureAdapter.getAttribute;for(const l of e.items){const u=o(l,t),c=o(l,a),h=r.get(u);(!h||c>o(h,a))&&r.set(u,l)}e.items=Array.from(r.values())}_getCacheKey(e){const{geometry:t,spatialRel:i,returnGeometry:s,returnCentroid:a,outSR:r,resultType:o,cacheHint:l}=e;if(o!=="tile"&&!l)return null;const u=s||a;return L(r)&&!V(this.spatialReference,r)&&u?JSON.stringify([t,i,r]):JSON.stringify([t,i])}_canExecuteSinglePass(e,t){const{spatialRel:i}=t;return we(e)&&(i==="esriSpatialRelEnvelopeIntersects"||this.geometryType==="esriGeometryPoint"&&(i==="esriSpatialRelIntersects"||i==="esriSpatialRelContains"))}async _project(e,t){if(!t||V(this.spatialReference,t))return e;const i=this.featureAdapter;let s;try{const r=await this._getFullExtent();s=st(this.spatialReference,t,r)}catch{}const a=await ut(e.items.map(r=>O(this.geometryType,this.hasZ,this.hasM,i.getGeometry(r))),this.spatialReference,t,s);return e.items=a.map((r,o)=>i.cloneWithGeometry(e.items[o],at(r,this.hasZ,this.hasM))),e}async _searchFeatures(e){const t=new Set;await Promise.all(e.map(s=>this.featureStore.forEachInBounds(s,a=>t.add(a))));const i=Array.from(t.values());return t.clear(),i}async _executeQueryForStatistics(e,t,i){e=U(e);try{e=await this._schedule(()=>Se(e,this.definitionExpression,this.spatialReference),i),e=await this._reschedule(()=>Pt(e,t,{availableFields:this.availableFields,fieldsIndex:this.fieldsIndex,geometryType:this.geometryType,spatialReference:this.spatialReference}),i);const s=await this._reschedule(()=>this._executeSceneFilterQuery(e,i),i),a=await this._reschedule(()=>this._executeGeometryQuery(e,s,i),i);return await this._reschedule(()=>this._executeAggregateIdsQuery(a),i),await this._reschedule(()=>this._executeObjectIdsQuery(a),i),await this._reschedule(()=>this._executeTimeQuery(a),i),await this._reschedule(()=>this._executeAttributesQuery(a),i),a}catch(s){if(s!==P)throw s;return new v([],e,this)}}}function ne(n){if(we(n)){if(We(n))return[ye(Math.min(n.xmin,n.xmax),Math.min(n.ymin,n.ymax),Math.max(n.xmin,n.xmax),Math.max(n.ymin,n.ymax))];if(Xe(n))return n.rings.map(e=>ye(Math.min(e[0][0],e[2][0]),Math.min(e[0][1],e[2][1]),Math.max(e[0][0],e[2][0]),Math.max(e[0][1],e[2][1])))}return[et(tt(),n)]}export{Zt as V};
