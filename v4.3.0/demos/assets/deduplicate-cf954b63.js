import{b3 as O}from"./main-46bfe858.js";import{t as R,n as L}from"./Indices-957ffa2d.js";function F(o,n,y){const e=Array.isArray(o),r=e?o.length/n:o.byteLength/(4*n),A=e?o:new Uint32Array(o,0,r*n),g=y?.minReduction??0,c=y?.originalIndices||null,q=c?c.length:0,i=y?.componentOffsets||null;let b=0;if(i)for(let t=0;t<i.length-1;t++){const u=i[t+1]-i[t];u>b&&(b=u)}else b=r;const m=Math.floor(1.1*b)+1;(a==null||a.length<2*m)&&(a=new Uint32Array(O(2*m)));for(let t=0;t<2*m;t++)a[t]=0;let f=0;const w=!!i&&!!c,U=w?q:r;let h=R(r/3);const p=new Uint32Array(q),k=1.96;let j=g!==0?Math.ceil(4*k*k/(g*g)*g*(1-g)):U,d=1,v=i?i[1]:U;for(let t=0;t<U;t++){if(t===j){const l=1-f/t;if(l+k*Math.sqrt(l*(1-l)/t)<g)return null;j*=2}if(t===v){for(let l=0;l<2*m;l++)a[l]=0;if(c)for(let l=i[d-1];l<i[d];l++)p[l]=h[c[l]];v=i[++d]}const u=w?c[t]:t,C=u*n,x=B(A,C,n);let s=x%m,I=f;for(;a[2*s+1]!==0;){if(a[2*s]===x){const l=a[2*s+1]-1;if($(A,C,l*n,n)){I=h[l];break}}s++,s>=m&&(s-=m)}I===f&&(a[2*s]=x,a[2*s+1]=u+1,f++),h[u]=I}if(g!==0&&1-f/r<g)return null;if(w){for(let t=i[d-1];t<p.length;t++)p[t]=h[c[t]];h=L(p)}const M=e?new Array(f):new Uint32Array(f*n);f=0;for(let t=0;t<U;t++)h[t]===f&&(z(A,(w?c[t]:t)*n,M,f*n,n),f++);if(c&&!w){const t=new Uint32Array(q);for(let u=0;u<t.length;u++)t[u]=h[c[u]];h=L(t)}return{buffer:Array.isArray(M)?M:M.buffer,indices:h,uniqueCount:f}}function $(o,n,y,e){for(let r=0;r<e;r++)if(o[n+r]!==o[y+r])return!1;return!0}function z(o,n,y,e,r){for(let A=0;A<r;A++)y[e+A]=o[n+A]}function B(o,n,y){let e=0;for(let r=0;r<y;r++)e=o[n+r]+e|0,e=e+(e<<11)+(e>>>2)|0;return e>>>0}let a=null;export{F as r};
