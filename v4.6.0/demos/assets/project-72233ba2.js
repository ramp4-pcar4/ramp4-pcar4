import { bH as e, bI as y, bJ as c, cI as f, bn as d, bm as p$1, fU as d$1, bj as f$1, cG as n$1, U as U$1, fV as o } from './main-8822140d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let a=class extends f{constructor(r){super(r),this.geometries=[],this.outSpatialReference=null,this.transformation=null,this.transformForward=null;}toJSON(){const r=this.geometries.map((r=>r.toJSON())),o=this.geometries[0],t={};return t.outSR=d(this.outSpatialReference),t.inSR=d(o.spatialReference),t.geometries=JSON.stringify({geometryType:p$1(o),geometries:r}),this.transformation&&(t.transformation=this.transformation.wkid||JSON.stringify(this.transformation)),null!=this.transformForward&&(t.transformForward=this.transformForward),t}};e([y()],a.prototype,"geometries",void 0),e([y({json:{read:{source:"outSR"}}})],a.prototype,"outSpatialReference",void 0),e([y()],a.prototype,"transformation",void 0),e([y()],a.prototype,"transformForward",void 0),a=e([c("esri.rest.support.ProjectParameters")],a);const p=a;

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i=d$1(p);async function n(o$1,m,n){m=i(m);const u=f$1(o$1),c={...u.query,f:"json",...m.toJSON()},j=m.outSpatialReference,a=p$1(m.geometries[0]),f=n$1(c,n);return U$1(u.path+"/project",f).then((({data:{geometries:r}})=>o(r,a,j)))}

export { n, p };
