import{dg as A,eY as I,eZ as k,e_ as q,eI as z,k as a,o as i,A as B,v as P,aA as T,e$ as Y,cp as Z,cv as l}from"./main-Dv0FawL-.js";import{j as $,P as C,h as D,B as F}from"./mat4-keCyYikV.js";import{e as y}from"./mat4f64-Dn1WEGBx.js";import{v as g,b as h,x as G}from"./quat-Ce6gmKEA.js";import{e as m}from"./quatf64-C16JxGFv.js";import{s as H}from"./vec32-BQh4ekea.js";function s(t=N){return[t[0],t[1],t[2],t[3]]}function u(t,o,n=s()){return H(n,t),n[3]=o,n}function Q(t,o=s()){const n=$(e,t);return b(o,A(g(o,n))),o}function v(t,o,n=s()){return h(e,t,c(t)),h(M,o,c(o)),G(e,M,e),b(n,A(g(n,e)))}function R(t,o,n,x=s()){return u(I,t,p),u(k,o,d),u(q,n,j),v(p,d,p),v(p,j,x),x}function S(t){return t}function U(t){return t[3]}function c(t){return z(t[3])}function b(t,o){return t[3]=o,t}const N=[0,0,1,0],e=m(),M=m();s();const p=s(),d=s(),j=s();var f;let r=f=class extends P{constructor(t){super(t),this.translation=T(),this.rotationAxis=Y(N),this.rotationAngle=0,this.scale=Z(1,1,1)}get rotation(){return u(this.rotationAxis,this.rotationAngle)}set rotation(t){this.rotationAxis=l(t),this.rotationAngle=U(t)}get localMatrix(){const t=y();return h(w,this.rotation,c(this.rotation)),C(t,w,this.translation,this.scale),t}get localMatrixInverse(){return D(y(),this.localMatrix)}equals(t){return this===t||t!=null&&F(this.localMatrix,t.localMatrix)}clone(){const t={translation:l(this.translation),rotationAxis:l(this.rotationAxis),rotationAngle:this.rotationAngle,scale:l(this.scale)};return new f(t)}};a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"translation",void 0),a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAxis",void 0),a([i({type:Number,nonNullable:!0,json:{write:!0}})],r.prototype,"rotationAngle",void 0),a([i({type:[Number],nonNullable:!0,json:{write:!0}})],r.prototype,"scale",void 0),a([i()],r.prototype,"rotation",null),a([i()],r.prototype,"localMatrix",null),a([i()],r.prototype,"localMatrixInverse",null),r=f=a([B("esri.geometry.support.MeshTransform")],r);const w=m(),V=r;export{V as N,R as d,s as j,Q as k,S as w,c as z};
