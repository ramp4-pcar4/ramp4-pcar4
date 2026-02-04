import { o } from './floatRGBA-CPBREnzC.js';
import { aw as o$1 } from './main-BpBTVFw9.js';
import { o as o$2 } from './constants-C0QDwCF4.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const r=o=>"vertical"===o||"horizontal"===o||"cross"===o||"esriSFSCross"===o||"esriSFSVertical"===o||"esriSFSHorizontal"===o;function e(o,a,e){const i=a.style,n=o$1(Math.ceil(e)),s=r(i)?8*n:16*n,l=2*n;o.width=s,o.height=s;const h=o.getContext("2d");h.strokeStyle="#FFFFFF",h.lineWidth=n,h.beginPath(),"vertical"!==i&&"cross"!==i&&"esriSFSCross"!==i&&"esriSFSVertical"!==i||(h.moveTo(s/2,-l),h.lineTo(s/2,s+l)),"horizontal"!==i&&"cross"!==i&&"esriSFSCross"!==i&&"esriSFSHorizontal"!==i||(h.moveTo(-l,s/2),h.lineTo(s+l,s/2)),"backward-diagonal"!==i&&"diagonal-cross"!==i&&"esriSFSDiagonalCross"!==i&&"esriSFSBackwardDiagonal"!==i||(h.moveTo(-l,-l),h.lineTo(s+l,s+l),h.moveTo(s-l,-l),h.lineTo(s+l,l),h.moveTo(-l,s-l),h.lineTo(l,s+l)),"forward-diagonal"!==i&&"diagonal-cross"!==i&&"esriSFSForwardDiagonal"!==i&&"esriSFSDiagonalCross"!==i||(h.moveTo(s+l,-l),h.lineTo(-l,s+l),h.moveTo(l,-l),h.lineTo(-l,l),h.moveTo(s+l,s-l),h.lineTo(s-l,s+l)),h.stroke();const c=h.getImageData(0,0,o.width,o.height),m=new Uint8Array(c.data);let S;for(let t=0;t<m.length;t+=4)S=m[t+3]/255,m[t]=m[t]*S,m[t+1]=m[t+1]*S,m[t+2]=m[t+2]*S;return [m,o.width,o.height,n]}function i(t,r){const e="Butt"===r,i="Square"===r,n=!e&&!i;t.length%2==1&&(t=[...t,...t]);const s=o$2,l=2*s;let h=0;for(const o of t)h+=o;const c=Math.round(h*s),m=new Float32Array(c*l),S=.5*s;let F=0,g=0,T=.5,d=!0;for(const o of t){for(F=g,g+=o*s;T<=g;){let o=.5;for(;o<l;){const t=(o-.5)*c+T-.5,a=n?(o-s)*(o-s):Math.abs(o-s);m[t]=d?e?Math.max(Math.max(F+S-T,a),Math.max(T-g+S,a)):a:n?Math.min((T-F)*(T-F)+a,(T-g)*(T-g)+a):i?Math.min(Math.max(T-F,a),Math.max(g-T,a)):Math.min(Math.max(T-F+S,a),Math.max(g+S-T,a)),o++;}T++;}d=!d;}const f=m.length,M=new Uint8Array(4*f);for(let a=0;a<f;++a){const t=(n?Math.sqrt(m[a]):m[a])/s;o(t,M,4*a);}return [M,c,l]}

export { e, i };
