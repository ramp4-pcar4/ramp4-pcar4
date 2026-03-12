import { e, y, k as a$2, dA as l$1, be as c, g6 as b, b9 as f, gT as i$2, U as U$1, gU as o, bO as s$1, c as s, B as b$1 } from './main-5658cd6e.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let i$1=class i extends l$1{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),t=this.geometries[0],o={};return o.outSR=this.outSpatialReference.wkid||JSON.stringify(this.outSpatialReference.toJSON()),o.inSR=t.spatialReference.wkid||JSON.stringify(t.spatialReference.toJSON()),o.geometries=JSON.stringify({geometryType:c(t),geometries:r}),this.transformation&&(o.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(o.transformForward=this.transformForward),o}};e([y()],i$1.prototype,"geometries",void 0),e([y({json:{read:{source:"outSR"}}})],i$1.prototype,"outSpatialReference",void 0),e([y()],i$1.prototype,"transformation",void 0),e([y()],i$1.prototype,"transformForward",void 0),i$1=e([a$2("esri.rest.support.ProjectParameters")],i$1);const a$1=i$1;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i=b(a$1);async function n$1(o$1,m,n){m=i(m);const u=f(o$1),c$1={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=c(m.geometries[0]),f$1=i$2(c$1,n);return U$1(u.path+"/project",f$1).then((({data:{geometries:r}})=>o(r,a,j)))}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
async function n(o=null,i){if(s$1.geometryServiceUrl)return s$1.geometryServiceUrl;if(!o)throw new s("internal:geometry-service-url-not-configured");let n;n="portal"in o?o.portal||b$1.getDefault():o,await n.load({signal:i});const a=n.helperServices?.geometry?.url;if(!a)throw new s("internal:geometry-service-url-not-configured");return a}async function a(r,t,a=null,l){const c=await n(a,l),s$1=new a$1;s$1.geometries=[r],s$1.outSpatialReference=t;const m=await n$1(c,s$1,{signal:l});if(m&&Array.isArray(m)&&1===m.length)return m[0];throw new s("internal:geometry-service-projection-failed")}

export { n as getGeometryServiceURL, a as projectGeometry };
