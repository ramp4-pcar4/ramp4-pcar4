import { bL as e, bM as L, bN as o, bO as i, bP as M, bQ as t, bR as f$1, bS as h$1, aE as s, bT as mt } from './main-CaWYn_3L.js';
import { r } from './vec3f32-CmlAce5k.js';
import { n, h } from './WGLContainer-BQatdvvZ.js';
import { E } from './Container-CbEAunjn.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class f extends n{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=e();}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t);}prepareRenderPasses(t){const e=t.registerRenderPass({name:"overlay",brushes:[h.overlay],target:()=>this.children,drawPhase:E.MAP});return [...super.prepareRenderPasses(t),e]}_updateMatrices(i$1){const{state:c}=i$1,{id:p,size:m,pixelRatio:d,resolution:h,rotation:f,viewpoint:u,displayMat3:M$1}=c;if(this._viewStateId===p)return;const v=Math.PI/180*f,g=d*m[0],_=d*m[1];this._localOrigin=u.targetGeometry.clone();const{x:y,y:b}=this._localOrigin,x=L(y,c.spatialReference);this._localOrigin.x=x,this._localOrigin.y=b;const j=h*g,w=h*_,R=o(this._dvsMat3);i(R,R,M$1),M(R,R,t(g/2,_/2)),f$1(R,R,r(g/j,-_/w,1)),h$1(R,R,-v),this._viewStateId=p;}_updateOverlays(t,e){const{state:r}=t,{rotation:s$1,spatialReference:o,worldScreenWidth:i,size:a,viewpoint:n}=r,l=this._localOrigin;let m,d=0;const h=s(o);if(h&&o.isWrappable){const t=a[0],e=a[1],l=180/Math.PI*s$1,c=Math.abs(Math.cos(l)),f=Math.abs(Math.sin(l)),u=Math.round(t*c+e*f),[M,v]=h.valid,g=mt(o),{x:_,y}=n.targetGeometry,b=[_,y],x=[0,0];r.toScreen(x,b);const j=[0,0];let w;w=u>i?.5*i:.5*u;const R=Math.floor((_+.5*g)/g),O=M+R*g,P=v+R*g,I=[x[0]+w,0];r.toMap(j,I),j[0]>P&&(d=g),I[0]=x[0]-w,r.toMap(j,I),j[0]<O&&(d=-g),m={worldWidth:g,xBounds:[M,v]};}for(const c of e)c.updateDrawCoords(l,d,o,m);}}

export { f };
