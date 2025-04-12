import{fu as C,ab as S,bh as R,b as j,cx as A,f as B,eX as O,fv as q,fw as G}from"./main-46bfe858.js";import{O as Y}from"./quantizationUtils-588a963a.js";import{c as M,D as _,m as k,f as U,d as X,T as Z,y as H,x as J,z as K,S as L,M as Q}from"./utils-ab179e54.js";import"./preload-helper-388ac9d5.js";let y=null;function W(e,a,o){return e.x<0?e.x+=a:e.x>o&&(e.x-=a),e}function aa(e,a,o,l){const n=C(o)?S(o):null,s=n?Math.round((n.valid[1]-n.valid[0])/a.scale[0]):null;return e.map(t=>{const i=new R(j(t.geometry));return Y(a,i,i,i.hasZ,i.hasM),t.geometry=n?W(i,s,l[0]):i,t})}function ea(e,a=18,o,l,n,s){const t=new Float64Array(n*s);a=Math.round(O(a));let i=Number.POSITIVE_INFINITY,r=Number.NEGATIVE_INFINITY,m=0,f=0,d=0,c=0;const z=q(l,o);for(const{geometry:T,attributes:v}of e){const{x:p,y:u}=T,x=Math.max(0,p-a),F=Math.max(0,u-a),b=Math.min(s,u+a),D=Math.min(n,p+a),g=+z(v);for(let $=F;$<b;$++)for(let w=x;w<D;w++){const E=$*n+w,P=G(w-p,$-u,a),N=t[E];m=t[E]+=P*g;const V=m-N;f+=V,d+=V*V,m<i&&(i=m),m>r&&(r=m),c++}}if(!c)return{mean:0,stddev:0,min:0,max:0,mid:0,count:0};const I=(r-i)/2;return{mean:f/c,stdDev:Math.sqrt((d-f*f/c)/c),min:i,max:r,mid:I,count:c}}async function h(e,a){if(!a)return[];const{field:o,field2:l,field3:n,fieldDelimiter:s}=e,t=e.valueExpression,i=e.normalizationType,r=e.normalizationField,m=e.normalizationTotal,f=[],d=e.viewInfoParams;let c=null,z=null;if(t){if(!y){const{arcadeUtils:v}=await A();y=v}c=y.createFunction(t),z=d&&y.getViewInfo({viewingMode:d.viewingMode,scale:d.scale,spatialReference:new B(d.spatialReference)})}const I=e.fieldInfos,T=!(a[0]&&"declaredClass"in a[0]&&a[0].declaredClass==="esri.Graphic")&&I?{fields:I}:null;return a.forEach(v=>{const p=v.attributes;let u;if(t){const x=T?{...v,layer:T}:v,F=y.createExecContext(x,z);u=y.executeFunction(c,F)}else p&&(u=p[o],l&&(u=`${M(u)}${s}${M(p[l])}`,n&&(u=`${u}${s}${M(p[n])}`)));if(i&&typeof u=="number"&&isFinite(u)){const x=p&&parseFloat(p[r]);u=_(u,i,x,m)}f.push(u)}),f}async function oa(e){const{attribute:a,features:o}=e,{normalizationType:l,normalizationField:n,minValue:s,maxValue:t,fieldType:i}=a,r=await h({field:a.field,valueExpression:a.valueExpression,normalizationType:l,normalizationField:n,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=k({normalizationType:l,normalizationField:n,minValue:s,maxValue:t}),f={value:.5,fieldType:i},d=i==="esriFieldTypeString"?U({values:r,supportsNullCount:m,percentileParams:f}):X({values:r,minValue:s,maxValue:t,useSampleStdDev:!l,supportsNullCount:m,percentileParams:f});return Z(d,i==="esriFieldTypeDate")}async function sa(e){const{attribute:a,features:o}=e,l=await h({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),n=H(l);return J(n,a.domains,a.returnAllCodedValues,a.fieldDelimiter)}async function ra(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await h({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o),m=K(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return L(m,i)}async function ma(e){const{attribute:a,features:o}=e,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i}=a,r=await h({field:l,valueExpression:a.valueExpression,normalizationType:n,normalizationField:s,normalizationTotal:t,viewInfoParams:a.viewInfoParams,fieldInfos:a.fieldInfos},o);return Q(r,{field:l,normalizationType:n,normalizationField:s,normalizationTotal:t,classificationMethod:i,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})}async function ua(e){const{attribute:a,features:o}=e,{field:l,radius:n,fieldOffset:s,transform:t,spatialReference:i,size:r}=a,m=aa(o,t,i,r),{count:f,min:d,max:c,mean:z,stdDev:I}=ea(m,n,s,l,r[0],r[1]);return{count:f,min:d,max:c,avg:z,stddev:I}}export{ra as classBreaks,ua as heatmapStatistics,ma as histogram,oa as summaryStatistics,sa as uniqueValues};
