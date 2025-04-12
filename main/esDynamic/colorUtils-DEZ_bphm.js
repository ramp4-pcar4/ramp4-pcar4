import{aK as s,bu as w,o as A,bv as E}from"./main-C3PVbFgd.js";import"./vec42-D8CJyqHG.js";import{r as G}from"./vec4f64-CjUMzAyX.js";function x(n){return"r"in n&&"g"in n&&"b"in n}function k(n){return"h"in n&&"s"in n&&"v"in n}function y(n){return"l"in n&&"a"in n&&"b"in n}function v(n){return"l"in n&&"c"in n&&"h"in n}function I(n){return"x"in n&&"y"in n&&"z"in n}const L=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],P=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]];function z(n,o){const r=[];let e,t;if(n[0].length!==o.length)throw new Error("dimensions do not match");const u=n.length,c=n[0].length;let a=0;for(e=0;e<u;e++){for(a=0,t=0;t<c;t++)a+=n[e][t]*o[t];r.push(a)}return r}function H(n){const o=[n.r/255,n.g/255,n.b/255].map(e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4),r=z(L,o);return{x:100*r[0],y:100*r[1],z:100*r[2]}}function M(n){const o=z(P,[n.x/100,n.y/100,n.z/100]).map(r=>{const e=r<=.0031308?12.92*r:1.055*r**.4166666666666667-.055;return Math.min(1,Math.max(e,0))});return{r:Math.round(255*o[0]),g:Math.round(255*o[1]),b:Math.round(255*o[2])}}function B(n){const o=[n.x/95.047,n.y/100,n.z/108.883].map(r=>r>.008856451679035631?r**.3333333333333333:7.787037037037035*r+.13793103448275862);return{l:116*o[1]-16,a:500*(o[0]-o[1]),b:200*(o[1]-o[2])}}function C(n){const o=n.l,r=[(o+16)/116+n.a/500,(o+16)/116,(o+16)/116-n.b/200].map(e=>e>6/29?e**3:3*(6/29)**2*(e-4/29));return{x:95.047*r[0],y:100*r[1],z:108.883*r[2]}}function q(n){const o=n.l,r=n.a,e=n.b,t=Math.sqrt(r*r+e*e);let u=Math.atan2(e,r);return u=u>0?u:u+2*Math.PI,{l:o,c:t,h:u}}function D(n){const o=n.l,r=n.c,e=n.h;return{l:o,a:r*Math.cos(e),b:r*Math.sin(e)}}function F(n){return B(H(n))}function K(n){return M(C(n))}function N(n){return q(B(H(n)))}function S(n){return M(C(D(n)))}function T(n){const o=n.r,r=n.g,e=n.b,t=Math.max(o,r,e),u=t-Math.min(o,r,e);let c=t,a=u===0?0:t===o?(r-e)/u%6:t===r?(e-o)/u+2:(o-r)/u+4,i=u===0?0:u/c;return a<0&&(a+=6),a*=60,i*=100,c*=100/255,{h:a,s:i,v:c}}function j(n){const o=(n.h+360)%360/60,r=n.s/100,e=n.v/100*255,t=e*r,u=t*(1-Math.abs(o%2-1));let c;switch(Math.floor(o)){case 0:c={r:t,g:u,b:0};break;case 1:c={r:u,g:t,b:0};break;case 2:c={r:0,g:t,b:u};break;case 3:c={r:0,g:u,b:t};break;case 4:c={r:u,g:0,b:t};break;case 5:case 6:c={r:t,g:0,b:u};break;default:c={r:0,g:0,b:0}}return c.r=Math.round(c.r+e-t),c.g=Math.round(c.g+e-t),c.b=Math.round(c.b+e-t),c}function f(n){return x(n)?n:v(n)?S(n):y(n)?K(n):I(n)?M(n):k(n)?j(n):n}function R(n){return k(n)?n:T(f(n))}function U(n){return y(n)?n:F(f(n))}function Q(n){return v(n)?n:N(f(n))}function V(n,o){const{r,g:e,b:t}=n;return .2126*r+.7152*e+.0722*t}var g;function W(n,o=g.High){return V(n)>o?new s([0,0,0,n.a]):new s([255,255,255,n.a])}function Y(n,o){const r=U(n);r.l*=1-o;const e=f(r),t=n.clone();return t.setColor(e),t.a=n.a,t}function Z(n,o){const r=n.clone();return r.a*=o,r}function _(n,o){const r=R(n);r.s*=o;const e=f(r),t=n.clone();return t.setColor(e),t.a=n.a,t}function $(n){return s.toUnitRGBA(n)}function J(n){return G(n[0],n[1],n[2],n.length>3?n[3]:1)}function O(n,o){const r=s.toUnitRGBA(n);return r[3]*=o,r}function X(n,o,r={}){if(n.length===0||o<=0)return[];if((n=n.map(e=>typeof e=="string"?new s(e):e)).length===1||o===1){const e=[],t=n[0];for(let u=0;u<o;u++)e.push(t.clone());return e}if(r.shuffle&&(n=w(A(n),r.seed)),n.length>=o){const e=[],t=(n.length-1)/(o-1);for(let u=0;u<o;u++){const c=Math.round(u*t);e.push(n[c].clone())}return e}return nn(n,o,r)}function nn(n,o,r={}){const e=[],t=n.length-1,u=Math.ceil((o-n.length)/t);n:for(let c=0;c<t;c++){const a=n[c],i=n[c+1];for(let h=1;h<=u;h++){const l=h/(u+1);if(e.push(rn(a,i,l,r)),e.length+n.length===o)break n}}return[...n.map(c=>c.clone()),...w(e,r.seed??1)]}(function(n){n[n.Low=160]="Low",n[n.High=225]="High"})(g||(g={}));const m=(n,o)=>{const r=Math.floor(10*o())-5;return Math.min(255,Math.max(0,n+r))};function rn(n,o,r,e={}){const t=n.r,u=n.g,c=n.b,a=o.r,i=o.g,h=o.b,l=Math.round(t+(a-t)*r),d=Math.round(u+(i-u)*r),p=Math.round(c+(h-c)*r);if(!e.offset)return new s([l,d,p]);const b=E(e.seed);return new s([m(l,b),m(d,b),m(p,b)])}export{R as B,U as C,_ as D,W as E,$ as F,Q as H,Y as I,J as N,Z as P,g as R,O as S,X as T,f as U,x as i};
