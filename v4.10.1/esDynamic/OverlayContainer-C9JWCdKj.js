import{u as L}from"./common-CYWrYyJl.js";import{o as Q,i as V,M as J,f as X,h as Y}from"./mat3-CC4Foazl.js";import{e as Z,E as tt,m as st}from"./MapView-CrMD8fFU.js";import{t as et}from"./vec2f32-CVhmN3Me.js";import{r as ot}from"./vec3f32-BS0cezmI.js";import{L as it}from"./normalizeUtils-ByZ4e68x.js";import{k as o,fV as B,C as rt,bF as at}from"./main-Dv0FawL-.js";import{n as nt}from"./WGLContainer-BYLfakHc.js";import{t as pt,a as F,i as dt}from"./FeatureCommandQueue-DGs3U5QI.js";import{h as U,C as x,g as p,a as lt,j as R,S as ht,m as W,I as ct,v as ut,P as q,b as ft,c as mt,G as vt,H as xt,l as yt,w as gt,e as wt}from"./UpdateTracking2D-BZQzmp01.js";import{O as _t,I,C as N,E as Mt}from"./enums-DBi1-Mm2.js";class C extends ct{}o([U(0,x)],C.prototype,"pos",void 0),o([U(1,x)],C.prototype,"uv",void 0);class St extends ut{}class k extends q{}o([p(lt)],k.prototype,"dvs",void 0);class m extends q{}o([p(x)],m.prototype,"perspective",void 0),o([p(x)],m.prototype,"texSize",void 0),o([p(R)],m.prototype,"wrapAroundShift",void 0),o([p(R)],m.prototype,"opacity",void 0),o([p(ht)],m.prototype,"texture",void 0);class y extends ft{vertex(t){const e=t.uv.divide(this.config.texSize),s=new R(1).add(mt(e,this.config.perspective)),n=new vt(t.pos.add(new x(this.config.wrapAroundShift,0)),1),i=this.transform.dvs.multiply(n);return{uv:e,glPosition:new xt(i.xy.multiply(s),0,s)}}fragment(t){const e=yt(this.config.texture,t.uv).multiply(this.config.opacity),s=new gt;return s.glFragColor=e,s}}o([p(k)],y.prototype,"transform",void 0),o([p(m)],y.prototype,"config",void 0),o([B(0,W(C))],y.prototype,"vertex",null),o([B(0,W(St))],y.prototype,"fragment",null);let bt=class extends pt{constructor(){super(...arguments),this.type=wt.Overlay,this._mesh=null,this.shaders={overlay:new y}}render(a,t){const{context:e,painter:s}=a,n=this._getMesh(a,t);s.setPipelineState(F);const{isWrapAround:i,wrapAroundShift:d}=t.config,l={...t.config,wrapAroundShift:0},u={shader:this.shaders.overlay,uniforms:{transform:t.transform,config:l},defines:null,optionalAttributes:null,useComputeBuffer:!1};s.setPipelineState({...F,stencil:{write:!1,test:{compare:_t.EQUAL,op:{fail:I.KEEP,zFail:I.KEEP,zPass:I.REPLACE},ref:0,mask:255}}}),s.submitDrawMeshUntyped(e,u,n),i&&(l.wrapAroundShift=d,s.submitDrawMeshUntyped(e,u,n))}shutdown(){rt(this._mesh)}_getMesh(a,t){const{context:e}=a;if(this._mesh){const s=this._mesh.vertexBuffers.get("positions");if(!s)throw new Error("Buffer not found");s.setData(t.position)}else{const s=t.index!=null?t.index.length:t.position.length/2;this._mesh=new dt(e,{vertex:{positions:t.position,uvs:t.tex},index:t.index!=null?{index:t.index}:void 0,groups:[{attributes:[{name:"pos",count:2,type:N.FLOAT,location:0,vertex:"positions",stride:8,offset:0},{name:"tex",count:2,type:N.UNSIGNED_SHORT,location:1,vertex:"uvs",stride:4,offset:0}],index:t.index!=null?"index":void 0,primitive:Mt.TRIANGLE_STRIP}],parts:[{group:0,start:0,count:s}]})}return this._mesh}};class At extends nt{constructor(){super(...arguments),this._viewStateId=-1,this._dvsMat3=Z(),this._overlayTechnique=new bt}get dvsMat3(){return this._dvsMat3}beforeRender(t){this._updateMatrices(t),this._updateOverlays(t,this.children);for(const e of this.children)e.beforeRender(t)}doRender(t){if(t.drawPhase!==tt.MAP||!this.visible)return;super.doRender(t);const e=this._overlayTechnique;for(const s of this.children)s.draw(t,e)}onDetach(){this._overlayTechnique.shutdown()}_updateMatrices(t){const{state:e}=t,{id:s,size:n,pixelRatio:i,resolution:d,rotation:l,viewpoint:u,displayMat3:M}=e;if(this._viewStateId===s)return;const g=L(l),h=i*n[0],f=i*n[1];this._localOrigin=u.targetGeometry.clone();const{x:v,y:S}=this._localOrigin,w=it(v,e.spatialReference);this._localOrigin.x=w,this._localOrigin.y=S;const b=d*h,A=d*f,r=Q(this._dvsMat3);V(r,r,M),J(r,r,et(h/2,f/2)),X(r,r,ot(h/b,-f/A,1)),Y(r,r,-g),this._viewStateId=s}_updateOverlays(t,e){const{state:s}=t,{rotation:n,spatialReference:i,worldScreenWidth:d,size:l,viewpoint:u}=s,M=this._localOrigin;let g,h=0;const f=at(i);if(f&&i.isWrappable){const v=l[0],S=l[1],w=L(n),b=Math.abs(Math.cos(w)),A=Math.abs(Math.sin(w)),r=Math.round(v*b+S*A),[T,z]=f.valid,c=st(i),{x:D,y:H}=u.targetGeometry,K=[D,H],E=[0,0];s.toScreen(E,K);const _=[0,0];let O;O=r>d?.5*d:.5*r;const G=Math.floor((D+.5*c)/c),$=T+G*c,j=z+G*c,P=[E[0]+O,0];s.toMap(_,P),_[0]>j&&(h=c),P[0]=E[0]-O,s.toMap(_,P),_[0]<$&&(h=-c),g={worldWidth:c,xBounds:[T,z]}}for(const v of e)v.updateDrawCoords(M,h,i,g)}}export{At as u};
