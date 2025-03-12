import { bw as l, cm as r$1, cs as t, hz as A, cl as n$1, hA as p, cu as e$1, hB as s$2, ci as _ } from './main-CjrSZKDN.js';
import { s } from './Util-BSy55QTp.js';
import { s as s$1 } from './ObjectStack-DgG_JAsf.js';
import { v } from './lineSegment-50B4AFiq.js';
import './plane-C_YYEwcq.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var e;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT";}(e||(e={}));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class o{constructor(i,e,o){this.primitiveIndices=i,this._numIndexPerPrimitive=e,this.position=o,this._children=void 0,s(i.length>=1),s(3===o.size||4===o.size);const{data:c,size:l,indices:m}=o;s(m.length%this._numIndexPerPrimitive==0),s(m.length>=i.length*this._numIndexPerPrimitive);const d=i.length;let u=l*m[this._numIndexPerPrimitive*i[0]];a.clear(),a.push(u);const f=r$1(c[u],c[u+1],c[u+2]),x=t(f);for(let t=0;t<d;++t){const e=this._numIndexPerPrimitive*i[t];for(let i=0;i<this._numIndexPerPrimitive;++i){u=l*m[e+i],a.push(u);let t=c[u];f[0]=Math.min(t,f[0]),x[0]=Math.max(t,x[0]),t=c[u+1],f[1]=Math.min(t,f[1]),x[1]=Math.max(t,x[1]),t=c[u+2],f[2]=Math.min(t,f[2]),x[2]=Math.max(t,x[2]);}}this.bbMin=f,this.bbMax=x;const P=A(n$1(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(x[0]-f[0],x[1]-f[1]),x[2]-f[2]);let v=this.radius*this.radius;for(let t=0;t<a.length;++t){u=a.at(t);const i=c[u]-P[0],e=c[u+1]-P[1],s=c[u+2]-P[2],r=i*i+e*e+s*s;if(r<=v)continue;const n=Math.sqrt(r),h=.5*(n-this.radius);this.radius=this.radius+h,v=this.radius*this.radius;const o=h/n;P[0]+=i*o,P[1]+=e*o,P[2]+=s*o;}this.center=P,a.clear();}getChildren(){if(this._children||p(this.bbMin,this.bbMax)<=1)return this._children;const i=A(n$1(),this.bbMin,this.bbMax,.5),s=this.primitiveIndices.length,r=new Uint8Array(s),h=new Array(8);for(let t=0;t<8;++t)h[t]=0;const{data:a,size:c,indices:l}=this.position;for(let t=0;t<s;++t){let e=0;const s=this._numIndexPerPrimitive*this.primitiveIndices[t];let n=c*l[s],o=a[n],m=a[n+1],d=a[n+2];for(let i=1;i<this._numIndexPerPrimitive;++i){n=c*l[s+i];const t=a[n],e=a[n+1],r=a[n+2];t<o&&(o=t),e<m&&(m=e),r<d&&(d=r);}o<i[0]&&(e|=1),m<i[1]&&(e|=2),d<i[2]&&(e|=4),r[t]=e,++h[e];}let m=0;for(let t=0;t<8;++t)h[t]>0&&++m;if(m<2)return;const d=new Array(8);for(let t=0;t<8;++t)d[t]=h[t]>0?new Uint32Array(h[t]):void 0;for(let t=0;t<8;++t)h[t]=0;for(let t=0;t<s;++t){const i=r[t];d[i][h[i]++]=this.primitiveIndices[t];}this._children=new Array;for(let t=0;t<8;++t)void 0!==d[t]&&this._children.push(new o(d[t],this._numIndexPerPrimitive,this.position));return this._children}static prune(){a.prune();}}const a=new l({deallocator:null});

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function j(t$1){return t$1?{p0:t(t$1.p0),p1:t(t$1.p1),p2:t(t$1.p2)}:{p0:n$1(),p1:n$1(),p2:n$1()}}function d(t,e,o){return e$1(M,e,t),e$1(O,o,t),.5*s$2(_(M,M,O))}new s$1(v);new s$1((()=>j()));const M=n$1(),O=n$1();

export { d, e, o };
