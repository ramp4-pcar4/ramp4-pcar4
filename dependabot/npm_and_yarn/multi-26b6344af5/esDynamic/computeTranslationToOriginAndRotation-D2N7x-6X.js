import{bh as N,aI as R,d1 as O}from"./main-0iYVBzEC.js";import{s as S,q as M,o as P}from"./mat4-BjdIAOlU.js";import{F as T,N as r,L}from"./projectBuffer-B9YCeKCd.js";function l(e,c,s){const f=Math.sin(e),E=Math.cos(e),n=Math.sin(c),a=Math.cos(c),t=s;return t[0]=-f,t[4]=-n*E,t[8]=a*E,t[12]=0,t[1]=E,t[5]=-n*f,t[9]=a*f,t[13]=0,t[2]=0,t[6]=a,t[10]=n,t[14]=0,t[3]=0,t[7]=0,t[11]=0,t[15]=1,t}function m(e,c,s){return l(e,c,s),S(s,s),s}function p(e,c,s,f){const E=T(e,f);if(E==null)return!1;const n=E.source.spatialReferenceId,a=E.dest.spatialReferenceId;if(n===a&&!A(a)&&(n!==r.UNKNOWN||N(e,f)))return M(s,c),!0;if(A(a)){const u=L[n][r.LON_LAT],C=L[r.LON_LAT][a];return u!=null&&C!=null&&(u(c,0,o,0),C(o,0,i,0),l(_*o[0],_*o[1],s),s[12]=i[0],s[13]=i[1],s[14]=i[2],!0)}const t=A(n);if((a===r.WEB_MERCATOR||a===r.PLATE_CARREE||a===r.WGS84||a===r.CGCS2000)&&(n===r.WGS84||t||n===r.WEB_MERCATOR||n===r.CGCS2000)){const u=L[n][r.LON_LAT],C=L[r.LON_LAT][a];return u!=null&&C!=null&&(u(c,0,o,0),C(o,0,i,0),t?m(_*o[0],_*o[1],s):P(s),s[12]=i[0],s[13]=i[1],s[14]=i[2],!0)}return!1}function A(e){return e===r.SPHERICAL_ECEF||e===r.SPHERICAL_MARS_PCPF||e===r.SPHERICAL_MOON_PCPF||e===r.WGS84_ECEF}const _=O(1),o=R(),i=R();export{p as m,l as n};
