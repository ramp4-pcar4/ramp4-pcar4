import { gd as s, ge as F, gf as ln, gg as en, gh as N, a6 as G, gi as q, gj as L$1, gk as o$1, gl as h, ap as n$1 } from './main-C4Zge2Yj.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function n(t,n,o){const r=Math.sin(t),a=Math.cos(t),i=Math.sin(n),s=Math.cos(n),c=o;return c[0]=-r,c[4]=-i*a,c[8]=s*a,c[12]=0,c[1]=a,c[5]=-i*r,c[9]=s*r,c[13]=0,c[2]=0,c[6]=s,c[10]=i,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function o(o,r,a){return n(o,r,a),s(a,a),a}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function u(r,i,u,_){if(null==r||null==_)return !1;const p=F(r,ln),a=F(_,en);if(p===a&&!c(a)&&(p!==N.UNKNOWN||G(r,_)))return q(u,i),!0;if(c(a)){const r=L$1[p][N.LON_LAT],t=L$1[N.LON_LAT][a];return null!=r&&null!=t&&(r(i,0,L,0),t(L,0,R,0),n(A*L[0],A*L[1],u),u[12]=R[0],u[13]=R[1],u[14]=R[2],!0)}if(!(a!==N.WEB_MERCATOR&&a!==N.PLATE_CARREE&&a!==N.WGS84&&a!==N.CGCS2000||p!==N.WGS84&&p!==N.SPHERICAL_ECEF&&p!==N.WEB_MERCATOR&&p!==N.CGCS2000)){const r=L$1[p][N.LON_LAT],t=L$1[N.LON_LAT][a];return null!=r&&null!=t&&(r(i,0,L,0),t(L,0,R,0),p===N.SPHERICAL_ECEF?o(A*L[0],A*L[1],u):o$1(u),u[12]=R[0],u[13]=R[1],u[14]=R[2],!0)}return !1}function c(r){return r===N.SPHERICAL_ECEF||r===N.SPHERICAL_MARS_PCPF||r===N.SPHERICAL_MOON_PCPF}const A=h(1),L=n$1(),R=n$1();

export { u };
