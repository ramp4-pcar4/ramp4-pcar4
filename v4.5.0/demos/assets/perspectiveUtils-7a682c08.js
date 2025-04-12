import { e as e$1, y, k as a, dE as v$1, t, fd as c, b as e$2, eh as un, bi as v, r as r$1, fe as o, ff as S, fg as o$1, fh as r, ax as i$1, fi as c$1, aw as s, aW as n$1 } from './main-5658cd6e.js';
import { a as a$1 } from './normalizeUtilsSync-c3a052ce.js';
import { e as e$3 } from './mat3f64-f0e5b33e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let u=class extends v$1{constructor(o){super(o);}get bounds(){const o=this.coords;return t(o)||t(o.extent)?null:c(o.extent)}get coords(){const o=e$2(this.element.georeference)?.coords;return un(o,this.spatialReference).geometry}get normalizedCoords(){return v.fromJSON(a$1(this.coords))}get normalizedBounds(){const o=r$1(this.normalizedCoords)?this.normalizedCoords.extent:null;return r$1(o)?c(o):null}};e$1([y()],u.prototype,"spatialReference",void 0),e$1([y()],u.prototype,"element",void 0),e$1([y()],u.prototype,"bounds",null),e$1([y()],u.prototype,"coords",null),e$1([y()],u.prototype,"normalizedCoords",null),e$1([y()],u.prototype,"normalizedBounds",null),u=e$1([a("esri.layers.support.MediaElementView")],u);

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const f=n$1(),i=e$3(),e=e$3(),p=e$3();function h(t,r$1,n){return o(f,r$1[0],r$1[1],1),S(f,f,o$1(i,n)),0===f[2]?r(t,f[0],f[1]):r(t,f[0]/f[2],f[1]/f[2])}function j(s,n,o){return k(e,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),k(p,o[0],o[1],o[2],o[3],o[4],o[5],o[6],o[7]),i$1(s,c$1(e,e),p),0!==s[8]&&(s[0]/=s[8],s[1]/=s[8],s[2]/=s[8],s[3]/=s[8],s[4]/=s[8],s[5]/=s[8],s[6]/=s[8],s[7]/=s[8],s[8]/=s[8]),s}function k(o$2,c,u,e,p,h,j,k,v){s(o$2,c,e,h,u,p,j,1,1,1),o(f,k,v,1),c$1(i,o$2);const[x,b,d]=S(f,f,o$1(i,i));return s(i,x,0,0,0,b,0,0,0,d),i$1(o$2,i,o$2)}

export { h, j, u };
