import{_ as re}from"./preload-helper.387dac8f.js";import{hQ as B,s as A,i as te,cK as oe,cL as H,e as U,hR as Y,hS as le,hT as X,bV as ue,hU as ce,f2 as de}from"./main.efb50b2c.js";import{s as k}from"./quantizationUtils.d09757e3.js";import{WhereClause as he}from"./WhereClause.5a38bf79.js";import{T as fe,s as me,m as J,c as K,V as ge,g as pe,h as ye,y as xe,D as Fe,z as Ie,f as _e,d as Ve}from"./utils.9dfb26f2.js";import{g as W}from"./projectionSupport.a2ec70ff.js";import{x as $,J as G,O as ee}from"./utils.1e6f5f3b.js";class Te{constructor(e,t){this._cache=new B(e),this._invalidCache=new B(t)}get(e,t){const s=`${t.uid}:${e}`,n=this._cache.get(s);if(n)return n;if(this._invalidCache.get(s)!==void 0)return null;try{const i=he.create(e,t);return this._cache.put(s,i),i}catch{return this._invalidCache.put(s,null),null}}}const O=new Te(50,500),b="feature-store:unsupported-query",se=" as ",ve=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function Me(c,e){if(!e)return!0;const t=O.get(e,c);if(!t)throw new A(b,"invalid SQL expression",{where:e});if(!t.isStandardized)throw new A(b,"where clause is not standard",{where:e});return j(c,t.fieldNames,"where clause contains missing fields"),!0}function qe(c,e,t){if(!e)return!0;const s=O.get(e,c);if(!s)throw new A(b,"invalid SQL expression",{having:e});if(!s.isAggregate)throw new A(b,"having does not contain a valid aggregate function",{having:e});const n=s.fieldNames;if(j(c,n,"having contains missing fields"),!s.getExpressions().every(i=>{const{aggregateType:a,field:r}=i,o=c.has(r)&&c.get(r).name;return t.some(l=>{const{onStatisticField:u,statisticType:f}=l;return(c.has(u)&&c.get(u).name)===o&&f.toLowerCase().trim()===a})}))throw new A(b,"expressions in having should also exist in outStatistics",{having:e});return!0}function R(c,e){return c?O.get(c,e):null}function j(c,e,t,s=!0){const n=[];for(const i of e)if(i!=="*"&&!c.has(i))if(s){const a=ie(i);try{const r=R(a,c);if(!r)throw new A(b,"invalid SQL expression",{where:a});if(!r.isStandardized)throw new A(b,"expression is not standard",{clause:r});j(c,r.fieldNames,"expression contains missing fields")}catch(r){const o=r&&r.details;if(o&&(o.clause||o.where))throw r;o&&o.missingFields?n.push(...o.missingFields):n.push(i)}}else n.push(i);if(n.length)throw new A(b,t,{missingFields:n})}function ie(c){return c.split(se)[0]}function ze(c){return c.split(se)[1]}function Pe(c,e){const t=e.get(c);return!!t&&!ve.has(t.type)}class q{constructor(e,t,s){this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=e.returnDistinctValues,this.fieldsIndex=s,this.featureAdapter=t;const n=e.outFields;if(n&&!n.includes("*")){this.outFields=n;let i=0;for(const a of n){const r=ie(a),o=this.fieldsIndex.get(r),l=o?null:R(r,s),u=o?o.name:ze(a)||"FIELD_EXP_"+i++;this._fieldDataCache.set(a,{alias:u,clause:l})}}}countDistinctValues(e){return this.returnDistinctValues?(e.forEach(t=>this.getAttributes(t)),this._returnDistinctMap.size):e.length}getAttributes(e){const t=this._processAttributesForOutFields(e);return this._processAttributesForDistinctValues(t)}getFieldValue(e,t,s){const n=s?s.name:t;let i=null;return this._fieldDataCache.has(n)?i=this._fieldDataCache.get(n).clause:s||(i=R(t,this.fieldsIndex),this._fieldDataCache.set(n,{alias:n,clause:i})),s?this.featureAdapter.getAttribute(e,n):i.calculateValue(e,this.featureAdapter)}getNormalizedValue(e,t){const s=t.normalizationType,n=t.normalizationTotal;let i=this.getFieldValue(e,t.field,t.fieldInfo);if(s&&Number.isFinite(i)){const a=this.getFieldValue(e,t.normalizationField,t.normalizationFieldInfo);i=fe(i,s,a,n)}return i}getExpressionValue(e,t,s,n){const i={attributes:this.featureAdapter.getAttributes(e),layer:{fields:this.fieldsIndex.fields}},a=n.createExecContext(i,s);return n.executeFunction(t,a)}getExpressionValues(e,t,s,n){const i={fields:this.fieldsIndex.fields};return e.map(a=>{const r={attributes:this.featureAdapter.getAttributes(a),layer:i},o=n.createExecContext(r,s);return n.executeFunction(t,o)})}validateItem(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:R(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testFeature(e,this.featureAdapter)}validateItems(e,t){return this._fieldDataCache.has(t)||this._fieldDataCache.set(t,{alias:t,clause:R(t,this.fieldsIndex)}),this._fieldDataCache.get(t).clause.testSet(e,this.featureAdapter)}_processAttributesForOutFields(e){const t=this.outFields;if(!t||!t.length)return this.featureAdapter.getAttributes(e);const s={};for(const n of t){const{alias:i,clause:a}=this._fieldDataCache.get(n);s[i]=a?a.calculateValue(e,this.featureAdapter):this.featureAdapter.getAttribute(e,i)}return s}_processAttributesForDistinctValues(e){if(te(e)||!this.returnDistinctValues)return e;const t=this.outFields,s=[];if(t)for(const a of t){const{alias:r}=this._fieldDataCache.get(a);s.push(e[r])}else for(const a in e)s.push(e[a]);const n=`${(t||["*"]).join(",")}=${s.join(",")}`;let i=this._returnDistinctMap.get(n)||0;return this._returnDistinctMap.set(n,++i),i>1?null:e}}class $e{constructor(e,t,s){this.items=e,this.query=t,this.geometryType=s.geometryType,this.hasM=s.hasM,this.hasZ=s.hasZ,this.fieldsIndex=s.fieldsIndex,this.objectIdField=s.objectIdField,this.spatialReference=s.spatialReference,this.featureAdapter=s.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const e=new q(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return e.countDistinctValues(this.items);const{groupByFieldsForStatistics:t,having:s,outStatistics:n}=this.query;if(!t?.length)return 1;const a=new Map,r=new Map,o=new Set;for(const l of n){const{statisticType:u}=l,f=u!=="exceedslimit"?l.onStatisticField:void 0;if(!r.has(f)){const h=[];for(const d of t){const F=this._getAttributeValues(e,d,a);h.push(F)}r.set(f,this._calculateUniqueValues(h,e.returnDistinctValues))}const m=r.get(f);for(const h in m){const{data:d,items:F}=m[h],I=d.join(",");s&&!e.validateItems(F,s)||o.add(I)}}return o.size}async createQueryResponse(){let e;return this.query.outStatistics?e=this.query.outStatistics.some(t=>t.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):e=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry&&(oe(this.query.outSR)&&!H(this.query.geometry.spatialReference,this.query.outSR)?e.queryGeometry=$({spatialReference:this.query.outSR,...W(this.query.geometry,this.query.geometry.spatialReference,this.query.outSR)}):e.queryGeometry=$({spatialReference:this.query.outSR,...this.query.geometry})),e}createSnappingResponse(e,t){const s=this.featureAdapter,n=be(this.hasZ,this.hasM),{x:i,y:a}=e.point,r=typeof e.distance=="number"?e.distance:e.distance.x,o=typeof e.distance=="number"?e.distance:e.distance.y,l={candidates:[]},u=this.geometryType==="esriGeometryPolygon",f=this._getPointCreator(e.point,this.spatialReference,t);for(const m of this.items){const h=s.getGeometry(m);if(te(h))continue;const{coords:d,lengths:F}=h;if(e.types&P.EDGE){let I=0;for(let y=0;y<F.length;y++){const _=F[y];for(let x=0;x<_;x++,I+=n){const V=d[I],p=d[I+1];if(x!==_-1){const g=d[I+n],S=d[I+n+1],{x:C,y:N}=Ae(i,a,V,p,g,S),T=(i-C)/r,v=(a-N)/o,w=T*T+v*v;w<=1&&l.candidates.push({type:"edge",objectId:s.getObjectId(m),distance:Math.sqrt(w),target:f(C,N),start:f(V,p),end:f(g,S)})}}}}if(e.types&P.VERTEX){const I=u?d.length-n:d.length;for(let y=0;y<I;y+=n){const _=d[y],x=d[y+1],V=(i-_)/r,p=(a-x)/o,g=V*V+p*p;g<=1&&l.candidates.push({type:"vertex",objectId:s.getObjectId(m),distance:Math.sqrt(g),target:f(_,x)})}}}return l.candidates.sort((m,h)=>m.distance-h.distance),l}_getPointCreator(e,t,s){const n=U(s)&&!H(t,s)?i=>W(i,t,s):i=>i;return e.z!=null&&e.m!=null?(i,a)=>n({x:i,y:a,z:e.z,m:e.m}):e.z!=null?(i,a)=>n({x:i,y:a,z:e.z}):e.m!=null?(i,a)=>n({x:i,y:a,m:e.m}):(i,a)=>n({x:i,y:a})}async createSummaryStatisticsResponse(e){const{field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,minValue:r,maxValue:o,scale:l}=e,u=this.fieldsIndex.isDateField(t),f=await this._getDataValues({field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:l}),m=me({normalizationType:i,normalizationField:n,minValue:r,maxValue:o}),h=this.fieldsIndex.get(t),d={value:.5,fieldType:h?.type},F=Y(h)?J({values:f,supportsNullCount:m,percentileParams:d}):K({values:f,minValue:r,maxValue:o,useSampleStdDev:!i,supportsNullCount:m,percentileParams:d});return ge(F,u)}async createUniqueValuesResponse(e){const{field:t,valueExpression:s,domain:n,returnAllCodedValues:i,scale:a}=e,r=await this._getDataValues({field:t,valueExpression:s,scale:a}),o=pe(r);return ye(o,n,i)}async createClassBreaksResponse(e){const{field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:f,scale:m}=e,h=await this._getDataValues({field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:m}),d=xe(h,{field:t,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numClasses:f});return Fe(d,r)}async createHistogramResponse(e){const{field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:f,scale:m}=e,h=await this._getDataValues({field:t,valueExpression:s,normalizationField:n,normalizationType:i,normalizationTotal:a,scale:m});return Ie(h,{field:t,normalizationField:n,normalizationType:i,normalizationTotal:a,classificationMethod:r,standardDeviationInterval:o,minValue:l,maxValue:u,numBins:f})}_sortFeatures(e,t,s){if(e.length>1&&t&&t.length)for(const n of t.reverse()){const i=n.split(" "),a=i[0],r=this.fieldsIndex.get(a),o=i[1]&&i[1].toLowerCase()==="desc",l=_e(r?.type,o);e.sort((u,f)=>{const m=s(u,a,r),h=s(f,a,r);return l(m,h)})}}_createFeatureQueryResponse(e){const t=this.items,{geometryType:s,hasM:n,hasZ:i,objectIdField:a,spatialReference:r}=this,{outFields:o,outSR:l,quantizationParameters:u,resultRecordCount:f,resultOffset:m,returnZ:h,returnM:d}=e,F=f!=null&&t.length>(m||0)+f,I=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(y=>this.fieldsIndex.get(y)));return{exceededTransferLimit:F,features:this._createFeatures(e,t),fields:I,geometryType:s,hasM:n&&d,hasZ:i&&h,objectIdFieldName:a,spatialReference:$(l||r),transform:u&&k(u)||null}}_createFeatures(e,t){const s=new q(e,this.featureAdapter,this.fieldsIndex),{hasM:n,hasZ:i}=this,{orderByFields:a,quantizationParameters:r,returnGeometry:o,returnCentroid:l,maxAllowableOffset:u,resultOffset:f,resultRecordCount:m,returnZ:h=!1,returnM:d=!1}=e,F=i&&h,I=n&&d;let y=[],_=0;const x=[...t];if(this._sortFeatures(x,a,(p,g,S)=>s.getFieldValue(p,g,S)),o||l){const p=k(r);if(o&&!l)for(const g of x)y[_++]={attributes:s.getAttributes(g),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,p,F,I)};else if(!o&&l)for(const g of x)y[_++]={attributes:s.getAttributes(g),centroid:ee(this,this.featureAdapter.getCentroid(g,this),p)};else for(const g of x)y[_++]={attributes:s.getAttributes(g),centroid:ee(this,this.featureAdapter.getCentroid(g,this),p),geometry:G(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(g),u,p,F,I)}}else for(const p of x){const g=s.getAttributes(p);g&&(y[_++]={attributes:g})}const V=f||0;if(m!=null){const p=V+m;y=y.slice(V,Math.min(y.length,p))}return y}_createExceedsLimitQueryResponse(e){let t=!1,s=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY,i=Number.POSITIVE_INFINITY;for(const a of e.outStatistics)if(a.statisticType==="exceedslimit"){s=a.maxPointCount!=null?a.maxPointCount:Number.POSITIVE_INFINITY,n=a.maxRecordCount!=null?a.maxRecordCount:Number.POSITIVE_INFINITY,i=a.maxVertexCount!=null?a.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")t=this.items.length>s;else if(this.items.length>n)t=!0;else{const a=this.hasZ?this.hasM?4:3:this.hasM?3:2,r=this.featureAdapter;t=this.items.reduce((o,l)=>{const u=r.getGeometry(l);return o+(U(u)&&u.coords.length||0)},0)/a>i}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(t)}}]}}async _createStatisticsQueryResponse(e){const t={attributes:{}},s=[],n=new Map,i=new Map,a=new Map,r=new Map,o=new q(e,this.featureAdapter,this.fieldsIndex),l=e.outStatistics,{groupByFieldsForStatistics:u,having:f,orderByFields:m}=e,h=u&&u.length,d=!!h,F=d&&u[0],I=d&&!this.fieldsIndex.get(F);for(const _ of l){const{outStatisticFieldName:x,statisticType:V}=_,p=_,g=V!=="exceedslimit"?_.onStatisticField:void 0,S=V==="percentile_disc"||V==="percentile_cont",C=V==="EnvelopeAggregate"||V==="CentroidAggregate"||V==="ConvexHullAggregate",N=d&&h===1&&(g===F||I)&&V==="count";if(d){if(!a.has(g)){const v=[];for(const w of u){const M=this._getAttributeValues(o,w,n);v.push(M)}a.set(g,this._calculateUniqueValues(v,o.returnDistinctValues))}const T=a.get(g);for(const v in T){const{count:w,data:M,items:Q,itemPositions:ae}=T[v],L=M.join(",");if(!f||o.validateItems(Q,f)){const D=r.get(L)||{attributes:{}};if(C){D.aggregateGeometries||(D.aggregateGeometries={});const{aggregateGeometries:z,outStatisticFieldName:E}=await this._getAggregateGeometry(p,Q);D.aggregateGeometries[E]=z}else{let z=null;if(N)z=w;else{const E=this._getAttributeValues(o,g,n),Z=ae.map(ne=>E[ne]);z=S&&"statisticParameters"in p?this._getPercentileValue(p,Z):this._getStatisticValue(p,Z,null,o.returnDistinctValues)}D.attributes[x]=z}u.forEach((z,E)=>D.attributes[this.fieldsIndex.get(z)?z:`EXPR_${E+1}`]=M[E]),r.set(L,D)}}}else if(C){t.aggregateGeometries||(t.aggregateGeometries={});const{aggregateGeometries:T,outStatisticFieldName:v}=await this._getAggregateGeometry(p,this.items);t.aggregateGeometries[v]=T}else{const T=this._getAttributeValues(o,g,n);t.attributes[x]=S&&"statisticParameters"in p?this._getPercentileValue(p,T):this._getStatisticValue(p,T,i,o.returnDistinctValues)}s.push({name:x,alias:x,type:"esriFieldTypeDouble"})}const y=d?Array.from(r.values()):[t];return this._sortFeatures(y,m,(_,x)=>_.attributes[x]),{fields:s,features:y}}async _getAggregateGeometry(e,t){const s=await re(()=>import("./geometryEngineJSON.2762c1dd.js"),["assets/geometryEngineJSON.2762c1dd.js","assets/geometryEngineBase.f43341a0.js","assets/geometryEngineJSON.d3fb0de1.js","assets/json.d1a0fa35.js"]),{statisticType:n,outStatisticFieldName:i}=e,{featureAdapter:a,spatialReference:r,geometryType:o,hasZ:l,hasM:u}=this,f=t.map(d=>G(o,l,u,a.getGeometry(d))),m=s.convexHull(r,f,!0)[0],h={aggregateGeometries:null,outStatisticFieldName:null};if(n==="EnvelopeAggregate"){const d=m?le(m):X(s.union(r,f));h.aggregateGeometries={...d,spatialReference:r},h.outStatisticFieldName=i||"extent"}else if(n==="CentroidAggregate"){const d=m?ue(m):ce(X(s.union(r,f)));h.aggregateGeometries={x:d[0],y:d[1],spatialReference:r},h.outStatisticFieldName=i||"centroid"}else n==="ConvexHullAggregate"&&(h.aggregateGeometries=m,h.outStatisticFieldName=i||"convexHull");return h}_getStatisticValue(e,t,s,n){const{onStatisticField:i,statisticType:a}=e;let r=null;return r=s?.has(i)?s.get(i):Y(this.fieldsIndex.get(i))?J({values:t,returnDistinct:n}):K({values:t,minValue:null,maxValue:null,useSampleStdDev:!0}),s&&s.set(i,r),r[a==="var"?"variance":a]}_getPercentileValue(e,t){const{onStatisticField:s,statisticParameters:n,statisticType:i}=e,{value:a,orderBy:r}=n,o=this.fieldsIndex.get(s);return Ve(t,{value:a,orderBy:r,fieldType:o?.type,isDiscrete:i==="percentile_disc"})}_getAttributeValues(e,t,s){if(s.has(t))return s.get(t);const n=this.fieldsIndex.get(t),i=this.items.map(a=>e.getFieldValue(a,t,n));return s.set(t,i),i}_getAttributeNormalizedValues(e,t){return this.items.map(s=>e.getNormalizedValue(s,{field:t.field,fieldInfo:this.fieldsIndex.get(t.field),normalizationField:t.normalizationField,normalizationFieldInfo:this.fieldsIndex.get(t.normalizationField),normalizationType:t.normalizationType,normalizationTotal:t.normalizationTotal}))}async _getAttributeExpressionValues(e,t,s){const{arcadeUtils:n}=await de(),i=n.createFunction(t),a=s&&n.getViewInfo(s);return e.getExpressionValues(this.items,i,a,n)}_calculateUniqueValues(e,t){const s={},n=this.items,i=n.length;for(let a=0;a<i;a++){const r=n[a],o=[];for(const u of e)o.push(u[a]);const l=o.join(",");t?s[l]==null&&(s[l]={count:1,data:o,items:[r],itemPositions:[a]}):s[l]==null?s[l]={count:1,data:o,items:[r],itemPositions:[a]}:(s[l].count++,s[l].items.push(r),s[l].itemPositions.push(a))}return s}async _getDataValues(e){const t=new q(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:s,field:n,normalizationField:i,normalizationType:a,normalizationTotal:r,scale:o}=e,l=s?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return s?this._getAttributeExpressionValues(t,s,l):this._getAttributeNormalizedValues(t,{field:n,normalizationField:i,normalizationType:a,normalizationTotal:r})}}function Ae(c,e,t,s,n,i){const a=n-t,r=i-s,o=a*a+r*r,l=(c-t)*a+(e-s)*r,u=Math.min(1,Math.max(0,l/o));return{x:t+a*u,y:s+r*u}}function be(c,e){return c?e?4:3:e?3:2}var P;(function(c){c[c.NONE=0]="NONE",c[c.EDGE=1]="EDGE",c[c.VERTEX=2]="VERTEX"})(P||(P={}));export{P as E,qe as a,j as c,Pe as f,R as l,Me as o,$e as v};
