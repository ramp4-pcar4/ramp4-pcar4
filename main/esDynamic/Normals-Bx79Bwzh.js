import{aP as l}from"./main-C3PVbFgd.js";import"./vec32-vV1LFGew.js";function M(a,r,o,n,t,c=2){const h=1/(Math.abs(o)+Math.abs(n)+Math.abs(t)),s=o*h,e=n*h,i=t<=0?(s>=0?1:-1)*(1-Math.abs(e)):s,f=t<=0?(e>=0?1:-1)*(1-Math.abs(s)):e,u=r*c;a[u]=b(i),a[u+1]=b(f)}function m(a){const r=a.length/3,o=new Int16Array(2*r);let n=0;for(let t=0;t<r;++t)M(o,t,a[n++],a[n++],a[n++]);return o}function b(a){return l(Math.round(32767*a),-32767,32767)}export{m as e,M as s};
