import { cr as t, h7 as n, cl as n$1, hx as n$2, hy as G, cu as e$3, ck as z, ch as P$1 } from './main-CjrSZKDN.js';
import { e } from './mat3f64-DiVtVT5k.js';
import { e as e$1 } from './mat4f64-D1udxz0O.js';
import { e as e$2 } from './quatf64-BVXz_O4E.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class m{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0;}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0;}static createVec2f64(){return new m(n)}static createVec3f64(){return new m(n$1)}static createVec4f64(){return new m(n$2)}static createMat3f64(){return new m(e)}static createMat4f64(){return new m(e$1)}static createQuatf64(){return new m(e$2)}get test(){return {length:this._items.length}}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
m.createVec2f64();const c=m.createVec3f64();m.createVec4f64();m.createMat3f64();const f=m.createMat4f64(),o=m.createQuatf64();

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function E(t=Y){return [t[0],t[1],t[2],t[3]]}function F(t){return t}function b(t,n,r,o=E()){const c=r[0]-n[0],e=r[1]-n[1],u=r[2]-n[2],i=t[0]-n[0],s=t[1]-n[1],f=t[2]-n[2],a=e*f-u*s,I=u*i-c*f,N=c*s-e*i,M=a*a+I*I+N*N,m=Math.abs(M-1)>1e-5&&M>1e-12?1/Math.sqrt(M):1;return o[0]=a*m,o[1]=I*m,o[2]=N*m,o[3]=-(o[0]*t[0]+o[1]*t[1]+o[2]*t[2]),o}function X(t,n,u,i=0,s=Math.floor(u*(1/3)),f=Math.floor(u*(2/3))){if(u<3)return !1;n(y,i);let a=s,I=!1;for(;a<u-1&&!I;)n(C,a),a++,I=!G(y,C);if(!I)return !1;for(a=Math.max(a,f),I=!1;a<u&&!I;)n(L,a),a++,e$3(P,y,C),z(P,P),e$3(x,C,L),z(x,x),I=!G(y,L)&&!G(C,L)&&Math.abs(P$1(P,x))<k;return I?(b(y,C,L,t),!0):(0!==i||1!==s||2!==f)&&X(t,n,u,0,1,2)}const k=.99619469809,y=n$1(),C=n$1(),L=n$1(),P=n$1(),x=n$1();const Y=[0,0,1,0];var Z;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX";}(Z||(Z={}));Z.INFINITE_MIN|Z.INFINITE_MAX;Z.INFINITE_MAX;

export { E, F, X, c, f, o };
