import { c } from './arcadeTimeUtils-53abd942.js';
import { B, G, b as T, v, r as re, _ as ue, Q as Ze, U, y as Z, K as fe, J as J$1, z, P as t$1, V, $ as t$3, C, l as le, g, a0 as Me, a1 as I$1, a2 as o, a3 as l } from './arcadeUtils-3774d10c.js';
import { t, e } from './executionError-ed2c63c0.js';
import { e as e$1, E, j, f, c as c$1, a as e$2, b as a, d as a$1, S, C as C$2, I, A, y, g as A$1, x, D, h as E$1 } from './featureSetUtils-806bf99f.js';
import { t as t$2 } from './portalUtils-6edc6c88.js';
import { u, A as A$2 } from './SpatialFilter-1d01f0ad.js';
import { ex as C$1, H as He, ee as y$1 } from './main-5658cd6e.js';
import { f as f$1 } from './WhereClause-2f1c02a5.js';
import './preload-helper-a4975f27.js';
import './number-88191db7.js';
import './geometryEngineAsync-fc9d31c2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function Q(e,t,n,i){if(1===i.length){if(J$1(i[0]))return l(e,i[0],-1);if(V(i[0]))return l(e,i[0].toArray(),-1)}return l(e,i,-1)}async function J(e,t,n){const i=e.getVariables();if(i.length>0){const a=[];for(let e=0;e<i.length;e++){const r={name:i[e]};a.push(await t.evaluateIdentifier(n,r));}const r={};for(let e=0;e<i.length;e++)r[i[e]]=a[e];return e.parameters=r,e}return e}function K(e,t,n=null){for(const i in e)if(i.toLowerCase()===t.toLowerCase())return e[i];return n}function X(e){if(null===e)return null;const t={type:K(e,"type",""),name:K(e,"name","")};if("range"===t.type)t.range=K(e,"range",[]);else {t.codedValues=[];for(const n of K(e,"codedValues",[]))t.codedValues.push({name:K(n,"name",""),code:K(n,"code",null)});}return t}function Y(e){if(null===e)return null;const t={},n=K(e,"wkt",null);null!==n&&(t.wkt=n);const i=K(e,"wkid",null);return null!==i&&(t.wkid=i),t}function ee(e){if(null===e)return null;const t={hasZ:K(e,"hasz",!1),hasM:K(e,"hasm",!1)},n=K(e,"spatialreference",null);n&&(t.spatialReference=Y(n));const i=K(e,"x",null);if(null!==i)return t.x=i,t.y=K(e,"y",null),t;const a=K(e,"rings",null);if(null!==a)return t.rings=a,t;const r=K(e,"paths",null);if(null!==r)return t.paths=r,t;const s=K(e,"points",null);if(null!==s)return t.points=s,t;for(const o of ["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const n=K(e,o,null);null!==n&&(t[o]=n);}return t}function te(e,t){for(const n of t)if(n===e)return !0;return !1}function ne(e){return !!e.layerDefinition&&(!!e.featureSet&&(!1!==te(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&(!1!==J$1(e.layerDefinition.fields)&&!1!==J$1(e.featureSet.features)))))}function ie(_){"async"===_.mode&&(_.functions.timezone=function(t$1,r){return _.standardFunctionAsync(t$1,r,(async(s,o,l)=>{if(B(l,1,2,t$1,r),G(l[0])){if(await l[0].load(),1===l.length||null===l[1])return l[0].dateTimeReferenceFieldIndex.layerDateFieldsTimeZone;if(!(l[1]instanceof T)||!1===l[1].hasField("type"))throw new t(t$1,e.InvalidParameter,r);const e$1=l[1].field("type");if(!1===v(e$1))throw new t(t$1,e.InvalidParameter,r);switch(re(e$1).toLowerCase()){case"preferredtimezone":return l[0].dateTimeReferenceFieldIndex.layerPreferredTimeZone;case"editfieldsinfo":return l[0].dateTimeReferenceFieldIndex.layerEditFieldsTimeZone;case"timeinfo":return l[0].dateTimeReferenceFieldIndex.layerTimeInfoTimeZone;case"field":if(l[1].hasField("fieldname")&&v(l[1].field("fieldname")))return l[0].dateTimeReferenceFieldIndex.fieldTimeZone(re(l[1].field("fieldname")))}throw new t(t$1,e.InvalidParameter,r)}const f=ue(l[0],Ze(t$1));if(null===f)return null;const c$1=f.timeZone;return "system"===c$1?c.systemTimeZoneCanonicalName:c$1}))},_.functions.sqltimestamp=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{B(s,1,3,e$1,t$1);const o=s[0];if(U(o)){if(1===s.length)return o.toSQLString();if(2===s.length)return o.changeTimeZone(re(s[1])).toSQLString();throw new t(e$1,e.InvalidParameter,t$1)}if(G(o)){if(3!==s.length)throw new t(e$1,e.InvalidParameter,t$1);await o.load();const n=re(s[1]);if(!1===U(s[2]))throw new t(e$1,e.InvalidParameter,t$1);const r=o.fieldTimeZone(n);return null===r?s[2].toSQLString():s[2].changeTimeZone(r).toSQLString()}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"sqltimestamp",min:2,max:4}),_.functions.featuresetbyid=function(e$2,t$1){return _.standardFunctionAsync(e$2,t$1,((n,r,o)=>{if(B(o,2,4,e$2,t$1),o[0]instanceof e$1){const n=re(o[1]);let r=Z(o[2],null);const s=fe(Z(o[3],!0));if(null===r&&(r=["*"]),!1===J$1(r))throw new t(e$2,e.InvalidParameter,t$1);return o[0].featureSetById(n,s,r)}throw new t(e$2,e.InvalidParameter,t$1)}))},_.signatures.push({name:"featuresetbyid",min:2,max:4}),_.functions.getfeatureset=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,((n,r,s)=>{if(B(s,1,2,e$1,t$1),z(s[0])){let t=Z(s[1],"datasource");return null===t&&(t="datasource"),t=re(t).toLowerCase(),E(s[0].fullSchema(),t,e$1.lrucache,e$1.interceptor,e$1.spatialReference)}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"getfeatureset",min:1,max:2}),_.functions.featuresetbyportalitem=function(e$1,n){return _.standardFunctionAsync(e$1,n,((r,s,o)=>{if(B(o,2,5,e$1,n),null===o[0])throw new t(e$1,e.PortalRequired,n);if(o[0]instanceof t$1){const t$1=re(o[1]),r=re(o[2]);let s=Z(o[3],null);const f=fe(Z(o[4],!0));if(null===s&&(s=["*"]),!1===J$1(s))throw new t(e$1,e.InvalidParameter,n);let c=null;return e$1.services&&e$1.services.portal&&(c=e$1.services.portal),c=t$2(o[0],c),j(t$1,r,e$1.spatialReference,s,f,c,e$1.lrucache,e$1.interceptor)}if(!1===v(o[0]))throw new t(e$1,e.PortalRequired,n);const f=re(o[0]),c=re(o[1]);let u=Z(o[2],null);const d=fe(Z(o[3],!0));if(null===u&&(u=["*"]),!1===J$1(u))throw new t(e$1,e.InvalidParameter,n);if(e$1.services&&e$1.services.portal)return j(f,c,e$1.spatialReference,u,d,e$1.services.portal,e$1.lrucache,e$1.interceptor);throw new t(e$1,e.PortalRequired,n)}))},_.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),_.functions.featuresetbyname=function(e$2,t$1){return _.standardFunctionAsync(e$2,t$1,((n,r,o)=>{if(B(o,2,4,e$2,t$1),o[0]instanceof e$1){const n=re(o[1]);let r=Z(o[2],null);const s=fe(Z(o[3],!0));if(null===r&&(r=["*"]),!1===J$1(r))throw new t(e$2,e.InvalidParameter,t$1);return o[0].featureSetByName(n,s,r)}throw new t(e$2,e.InvalidParameter,t$1)}))},_.signatures.push({name:"featuresetbyname",min:2,max:4}),_.functions.featureset=function(e$1,t$1){return _.standardFunction(e$1,t$1,((r,s,o)=>{B(o,1,1,e$1,t$1);let l=o[0];const f$1={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(v(l))l=JSON.parse(l),void 0!==l.layerDefinition?(f$1.layerDefinition=l.layerDefinition,f$1.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(f$1.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(f$1.featureSet.features=l.features,f$1.featureSet.geometryType=l.geometryType,f$1.layerDefinition.geometryType=f$1.featureSet.geometryType,f$1.layerDefinition.objectIdField=l.objectIdFieldName,f$1.layerDefinition.typeIdField=l.typeIdFieldName,f$1.layerDefinition.globalIdField=l.globalIdFieldName,f$1.layerDefinition.fields=l.fields,l.spatialReference&&(f$1.layerDefinition.spatialReference=l.spatialReference));else {if(!(o[0]instanceof T))throw new t(e$1,e.InvalidParameter,t$1);{l=JSON.parse(o[0].castToText(!0));const e=K(l,"layerdefinition");if(null!==e){f$1.layerDefinition.geometryType=K(e,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.globalIdField=K(e,"globalidfield",""),f$1.layerDefinition.objectIdField=K(e,"objectidfield",""),f$1.layerDefinition.typeIdField=K(e,"typeidfield","");const t=K(e,"spatialreference",null);t&&(f$1.layerDefinition.spatialReference=Y(t));for(const i of K(e,"fields",[])){const e={name:K(i,"name",""),alias:K(i,"alias",""),type:K(i,"type",""),nullable:K(i,"nullable",!0),editable:K(i,"editable",!0),length:K(i,"length",null),domain:X(K(i,"domain"))};f$1.layerDefinition.fields.push(e);}const n=K(l,"featureset",null);if(n){const e={};for(const t of f$1.layerDefinition.fields)e[t.name.toLowerCase()]=t.name;for(const t of K(n,"features",[])){const n={},i=K(t,"attributes",{});for(const t in i)n[e[t.toLowerCase()]]=i[t];f$1.featureSet.features.push({attributes:n,geometry:ee(K(t,"geometry",null))});}}}else {f$1.layerDefinition.geometryType=K(l,"geometrytype",""),f$1.featureSet.geometryType=f$1.layerDefinition.geometryType,f$1.layerDefinition.objectIdField=K(l,"objectidfieldname",""),f$1.layerDefinition.typeIdField=K(l,"typeidfieldname","");const e=K(l,"spatialreference",null);e&&(f$1.layerDefinition.spatialReference=Y(e));for(const n of K(l,"fields",[])){const e={name:K(n,"name",""),alias:K(n,"alias",""),type:K(n,"type",""),nullable:K(n,"nullable",!0),editable:K(n,"editable",!0),length:K(n,"length",null),domain:X(K(n,"domain"))};f$1.layerDefinition.fields.push(e);}const t={};for(const n of f$1.layerDefinition.fields)t[n.name.toLowerCase()]=n.name;for(const n of K(l,"features",[])){const e={},i=K(n,"attributes",{});for(const n in i)e[t[n.toLowerCase()]]=i[n];f$1.featureSet.features.push({attributes:e,geometry:ee(K(n,"geometry",null))});}}}}if(!1===ne(f$1))throw new t(e$1,e.InvalidParameter,t$1);return ""===(f$1?.layerDefinition?.geometryType||"")&&(f$1.layerDefinition.geometryType="esriGeometryNull"),f.create(f$1,e$1.spatialReference)}))},_.signatures.push({name:"featureset",min:1,max:1}),_.functions.filter=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(B(s,2,2,e$1,t$1),J$1(s[0])||V(s[0])){const n=[];let r=s[0];r instanceof t$3&&(r=r.toArray());let o=null;if(!C(s[1]))throw new t(e$1,e.InvalidParameter,t$1);o=s[1].createFunction(e$1);for(const e of r){const t=o(e);C$1(t)?!0===await t&&n.push(e):!0===t&&n.push(e);}return n}if(G(s[0])){const t=await s[0].load(),n=f$1.create(s[1],t.getFieldsIndex()),i=n.getVariables();if(i.length>0){const t=[];for(let n=0;n<i.length;n++){const a={name:i[n]};t.push(await _.evaluateIdentifier(e$1,a));}const a={};for(let e=0;e<i.length;e++)a[i[e]]=t[e];return n.parameters=a,new c$1({parentfeatureset:s[0],whereclause:n})}return new c$1({parentfeatureset:s[0],whereclause:n})}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"filter",min:2,max:2}),_.functions.orderby=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(B(s,2,2,e$1,t$1),G(s[0])){const e=new e$2(s[1]);return new a({parentfeatureset:s[0],orderbyclause:e})}throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"orderby",min:2,max:2}),_.functions.top=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{if(B(s,2,2,e$1,t$1),G(s[0]))return new a$1({parentfeatureset:s[0],topnum:s[1]});if(J$1(s[0]))return le(s[1])>=s[0].length?s[0].slice(0):s[0].slice(0,le(s[1]));if(V(s[0]))return le(s[1])>=s[0].length()?s[0].slice(0):s[0].slice(0,le(s[1]));throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"top",min:2,max:2}),_.functions.first=function(e,t){return _.standardFunctionAsync(e,t,(async(n,i,a)=>{if(B(a,1,1,e,t),G(a[0])){const t=await a[0].first(n.abortSignal);if(null!==t){const n=g.createFromGraphicLikeObject(t.geometry,t.attributes,a[0],e.timeReference);return n._underlyingGraphic=t,n}return t}return J$1(a[0])?0===a[0].length?null:a[0][0]:V(a[0])?0===a[0].length()?null:a[0].get(0):null}))},_.signatures.push({name:"first",min:1,max:1}),_.functions.attachments=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,o)=>{B(o,1,2,e$1,t$1);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(o.length>1)if(o[1]instanceof T){if(o[1].hasField("minsize")&&(l.minsize=le(o[1].field("minsize"))),o[1].hasField("metadata")&&(l.returnMetadata=fe(o[1].field("metadata"))),o[1].hasField("maxsize")&&(l.maxsize=le(o[1].field("maxsize"))),o[1].hasField("types")){const e=Me(o[1].field("types"),!1);e.length>0&&(l.types=e);}}else if(null!==o[1])throw new t(e$1,e.InvalidParameter,t$1);if(z(o[0])){let t=o[0]._layer;return t instanceof He&&(t=S(t,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===t?[]:!1===G(t)?[]:(await t.load(),t.queryAttachments(o[0].field(t.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===o[0])return [];throw new t(e$1,e.InvalidParameter,t$1)}))},_.signatures.push({name:"attachments",min:1,max:2}),_.functions.featuresetbyrelationshipname=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{B(s,2,4,e$1,t$1);const o=s[0],l=re(s[1]);let d=Z(s[2],null);const m=fe(Z(s[3],!0));if(null===d&&(d=["*"]),!1===J$1(d))throw new t(e$1,e.InvalidParameter,t$1);if(null===s[0])return null;if(!z(s[0]))throw new t(e$1,e.InvalidParameter,t$1);let h=o._layer;if(h instanceof He&&(h=S(h,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===h)return null;if(!1===G(h))return null;h=await h.load();const g=h.relationshipMetaData().filter((e=>e.name===l));if(0===g.length)return null;if(void 0!==g[0].relationshipTableId&&null!==g[0].relationshipTableId&&g[0].relationshipTableId>-1)return C$2(h,g[0],o.field(h.objectIdField),h.spatialReference,d,m,e$1.lrucache,e$1.interceptor);let I$1=h.serviceUrl();if(!I$1)return null;I$1="/"===I$1.charAt(I$1.length-1)?I$1+g[0].relatedTableId.toString():I$1+"/"+g[0].relatedTableId.toString();const F=await I(I$1,h.spatialReference,d,m,e$1.lrucache,e$1.interceptor);await F.load();let A=F.relationshipMetaData();if(A=A.filter((e=>e.id===g[0].id)),!1===o.hasField(g[0].keyField)||null===o.field(g[0].keyField)){const e=await h.getFeatureByObjectId(o.field(h.objectIdField),[g[0].keyField]);if(e){const t=f$1.create(A[0].keyField+"= @id",F.getFieldsIndex());return t.parameters={id:e.attributes[g[0].keyField]},F.filter(t)}return new u({parentfeatureset:F})}const N=f$1.create(A[0].keyField+"= @id",F.getFieldsIndex());return N.parameters={id:o.field(g[0].keyField)},F.filter(N)}))},_.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),_.functions.featuresetbyassociation=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(n,r,s)=>{B(s,2,3,e$1,t$1);const o$1=s[0],l=re(Z(s[1],"")).toLowerCase(),c=v(s[2])?re(s[2]):null;if(null===s[0])return null;if(!z(s[0]))throw new t(e$1,e.InvalidParameter,t$1);let u=o$1._layer;if(u instanceof He&&(u=S(u,e$1.spatialReference,["*"],!0,e$1.lrucache,e$1.interceptor)),null===u)return null;if(!1===G(u))return null;await u.load();const m=u.serviceUrl(),g=await A(m,e$1.spatialReference);let I=null,F=null,D$1=!1;if(null!==c&&""!==c&&void 0!==c){for(const e of g.terminals)e.terminalName===c&&(F=e.terminalId);null===F&&(D$1=!0);}const b=g.associations.getFieldsIndex(),A$2=b.get("TOGLOBALID").name,N=b.get("FROMGLOBALID").name,S$1=b.get("TOTERMINALID").name,T=b.get("FROMTERMINALID").name,$=b.get("FROMNETWORKSOURCEID").name,M=b.get("TONETWORKSOURCEID").name,O=b.get("ASSOCIATIONTYPE").name,k=b.get("ISCONTENTVISIBLE").name,z$1=b.get("OBJECTID").name;for(const e of u.fields)if("global-id"===e.type){I=o$1.field(e.name);break}let H=null,G$1=new y(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f$1.create("0",g.associations.getFieldsIndex())),W=new y(new y$1({name:"side",alias:"side",type:"string"}),f$1.create("''",g.associations.getFieldsIndex()));const _="globalid",U="globalId",Q={};for(const e in g.lkp)Q[e]=g.lkp[e].sourceId;const J=new A$1(new y$1({name:"classname",alias:"classname",type:"string"}),null,Q);let K="";switch(l){case"midspan":{K=`((${A$2}='${I}') OR ( ${N}='${I}')) AND (${O} IN (5))`,J.codefield=f$1.create(`CASE WHEN (${A$2}='${I}') THEN ${$} ELSE ${M} END`,g.associations.getFieldsIndex());const e=o(D.findField(g.associations.fields,N));e.name=_,e.alias=_,H=new y(e,f$1.create(`CASE WHEN (${N}='${I}') THEN ${A$2} ELSE ${N} END`,g.associations.getFieldsIndex())),G$1=g.unVersion>=4?new E$1(D.findField(g.associations.fields,b.get("PERCENTALONG").name)):new y(new y$1({name:"percentalong",alias:"percentalong",type:"double"}),f$1.create("0",g.associations.getFieldsIndex()));break}case"junctionedge":{K=`((${A$2}='${I}') OR ( ${N}='${I}')) AND (${O} IN (4,6))`,J.codefield=f$1.create(`CASE WHEN (${A$2}='${I}') THEN ${$} ELSE ${M} END`,g.associations.getFieldsIndex());const e=o(D.findField(g.associations.fields,N));e.name=_,e.alias=_,H=new y(e,f$1.create(`CASE WHEN (${N}='${I}') THEN ${A$2} ELSE ${N} END`,g.associations.getFieldsIndex())),W=new y(new y$1({name:"side",alias:"side",type:"string"}),f$1.create(`CASE WHEN (${O}=4) THEN 'from' ELSE 'to' END`,g.associations.getFieldsIndex()));break}case"connected":{let e=`${A$2}='@T'`,t=`${N}='@T'`;null!==F&&(e+=` AND ${S$1}=@A`,t+=` AND ${T}=@A`),K="(("+e+") OR ("+t+"))",K=I$1(K,"@T",I??""),e=I$1(e,"@T",I??""),null!==F&&(e=I$1(e,"@A",F.toString()),K=I$1(K,"@A",F.toString())),J.codefield=f$1.create("CASE WHEN "+e+` THEN ${$} ELSE ${M} END`,g.associations.getFieldsIndex());const n=o(D.findField(g.associations.fields,N));n.name=_,n.alias=_,H=new y(n,f$1.create("CASE WHEN "+e+` THEN ${N} ELSE ${A$2} END`,g.associations.getFieldsIndex()));break}case"container":K=`${A$2}='${I}' AND ${O} = 2`,null!==F&&(K+=` AND ${S$1} = `+F.toString()),J.codefield=$,K="( "+K+" )",H=new x(D.findField(g.associations.fields,N),_,_);break;case"content":K=`(${N}='${I}' AND ${O} = 2)`,null!==F&&(K+=` AND ${T} = `+F.toString()),J.codefield=M,K="( "+K+" )",H=new x(D.findField(g.associations.fields,A$2),_,_);break;case"structure":K=`(${A$2}='${I}' AND ${O} = 3)`,null!==F&&(K+=` AND ${S$1} = `+F.toString()),J.codefield=$,K="( "+K+" )",H=new x(D.findField(g.associations.fields,N),_,U);break;case"attached":K=`(${N}='${I}' AND ${O} = 3)`,null!==F&&(K+=` AND ${T} = `+F.toString()),J.codefield=M,K="( "+K+" )",H=new x(D.findField(g.associations.fields,A$2),_,U);break;default:throw new t(e$1,e.InvalidParameter,t$1)}D$1&&(K="1 <> 1");return new D({parentfeatureset:g.associations,adaptedFields:[new E$1(D.findField(g.associations.fields,z$1)),new E$1(D.findField(g.associations.fields,k)),H,W,J,G$1],extraFilter:K?f$1.create(K,g.associations.getFieldsIndex()):null})}))},_.signatures.push({name:"featuresetbyassociation",min:2,max:6}),_.functions.groupby=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,o)=>{if(B(o,3,3,e$1,t$1),!G(o[0]))throw new t(e$1,e.InvalidParameter,t$1);const l=await o[0].load(),f=[],c=[];let u=!1,d=[];if(v(o[1]))d.push(o[1]);else if(o[1]instanceof T)d.push(o[1]);else if(J$1(o[1]))d=o[1];else {if(!V(o[1]))throw new t(e$1,e.InvalidParameter,t$1);d=o[1].toArray();}for(const m of d)if(v(m)){const e=f$1.create(re(m),l.getFieldsIndex()),t=!0===A$2(e)?re(m):"%%%%FIELDNAME";f.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(u=!0);}else {if(!(m instanceof T))throw new t(e$1,e.InvalidParameter,t$1);{const n=m.hasField("name")?m.field("name"):"%%%%FIELDNAME",r=m.hasField("expression")?m.field("expression"):"";if("%%%%FIELDNAME"===n&&(u=!0),!n)throw new t(e$1,e.InvalidParameter,t$1);f.push({name:n,expression:f$1.create(r||n,l.getFieldsIndex())});}}if(d=[],v(o[2]))d.push(o[2]);else if(J$1(o[2]))d=o[2];else if(V(o[2]))d=o[2].toArray();else {if(!(o[2]instanceof T))throw new t(e$1,e.InvalidParameter,t$1);d.push(o[2]);}for(const m of d){if(!(m instanceof T))throw new t(e$1,e.InvalidParameter,t$1);{const n=m.hasField("name")?m.field("name"):"",r=m.hasField("statistic")?m.field("statistic"):"",s=m.hasField("expression")?m.field("expression"):"";if(!n||!r||!s)throw new t(e$1,e.InvalidParameter,t$1);c.push({name:n,statistic:r.toLowerCase(),expression:f$1.create(s,l.getFieldsIndex())});}}if(u){const e={};for(const n of l.fields)e[n.name.toLowerCase()]=1;for(const n of f)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of c)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of f)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of f)await J(t.expression,_,e$1);for(const t of c)await J(t.expression,_,e$1);return o[0].groupby(f,c)}))},_.signatures.push({name:"groupby",min:3,max:3}),_.functions.distinct=function(e$1,t$1){return _.standardFunctionAsync(e$1,t$1,(async(r,s,o)=>{if(G(o[0])){B(o,2,2,e$1,t$1);const r=await o[0].load(),s=[];let l=[];if(v(o[1]))l.push(o[1]);else if(o[1]instanceof T)l.push(o[1]);else if(J$1(o[1]))l=o[1];else {if(!V(o[1]))throw new t(e$1,e.InvalidParameter,t$1);l=o[1].toArray();}let f=!1;for(const o of l)if(v(o)){const e=f$1.create(re(o),r.getFieldsIndex()),t=!0===A$2(e)?re(o):"%%%%FIELDNAME";s.push({name:t,expression:e}),"%%%%FIELDNAME"===t&&(f=!0);}else {if(!(o instanceof T))throw new t(e$1,e.InvalidParameter,t$1);{const n=o.hasField("name")?o.field("name"):"%%%%FIELDNAME",l=o.hasField("expression")?o.field("expression"):"";if("%%%%FIELDNAME"===n&&(f=!0),!n)throw new t(e$1,e.InvalidParameter,t$1);s.push({name:n,expression:f$1.create(l||n,r.getFieldsIndex())});}}if(f){const e={};for(const n of r.fields)e[n.name.toLowerCase()]=1;for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let t=0;for(const n of s)if("%%%%FIELDNAME"===n.name){for(;1===e["field_"+t.toString()];)t++;e["field_"+t.toString()]=1,n.name="FIELD_"+t.toString();}}for(const t of s)await J(t.expression,_,e$1);return o[0].groupby(s,[])}return Q("distinct",r,s,o)}))});}

export { ie as registerFunctions };
