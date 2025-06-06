import { bk as f$2, hj as T, hk as G, hl as p$1, eF as u$1, hm as I, hn as D, ho as s, hp as F, hq as En, hr as en, hs as o$1, a7 as G$1, ht as q, hu as i, hv as o$2, hw as h, cl as n$1 } from './main-48Jy8Lgr.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const p=new f$2(T),l=new f$2(G),f$1=new f$2(p$1);new f$2(u$1);function a(e){const t=c.get(e);if(t)return t;let s=p;if(e)if(e===l)s=l;else if(e===f$1)s=f$1;else {const t=e.wkid,n=e.latestWkid;if(null!=t||null!=n)I(t)||I(n)?s=l:(D(t)||D(n))&&(s=f$1);else {const t=e.wkt2??e.wkt;if(t){const e=t.toUpperCase();e===k?s=l:e===m&&(s=f$1);}}}return c.set(e,s),s}const c=new Map,k=l.wkt.toUpperCase(),m=f$1.wkt.toUpperCase();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function n(t,n,o){const r=Math.sin(t),a=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=o;return c[0]=-r,c[4]=-i*a,c[8]=s*a,c[12]=0,c[1]=a,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function o(o,r,a){return n(o,r,a),s(a,a),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function R(r,i$1,R,c){if(null==r||null==c)return !1;const p=F(r,En),P=F(c,en);if(p===P&&!f(P)&&(p!==o$1.UNKNOWN||G$1(r,c)))return q(R,i$1),!0;if(f(P)){const r=i[p][o$1.LON_LAT],t=i[o$1.LON_LAT][P];return null!=r&&null!=t&&(r(i$1,0,L,0),t(L,0,_,0),n(u*L[0],u*L[1],R),R[12]=_[0],R[13]=_[1],R[14]=_[2],!0)}if((P===o$1.WEB_MERCATOR||P===o$1.PLATE_CARREE||P===o$1.WGS84)&&(p===o$1.WGS84||p===o$1.CGCS2000&&P===o$1.PLATE_CARREE||p===o$1.SPHERICAL_ECEF||p===o$1.WEB_MERCATOR)){const r=i[p][o$1.LON_LAT],t=i[o$1.LON_LAT][P];return null!=r&&null!=t&&(r(i$1,0,L,0),t(L,0,_,0),p===o$1.SPHERICAL_ECEF?o(u*L[0],u*L[1],R):o$2(R),R[12]=_[0],R[13]=_[1],R[14]=_[2],!0)}return !1}function f(r){return r===o$1.SPHERICAL_ECEF||r===o$1.SPHERICAL_MARS_PCPF||r===o$1.SPHERICAL_MOON_PCPF}const u=h(1),L=n$1(),_=n$1();

export { R, a };
