import{bS as E,k as d,o as l,A as N,aD as H,dA as P,D as _,bF as T,G as q,d8 as A,dx as z}from"./main-kpG51UWM.js";import{z as B}from"./TileInfo-CWIRDhZl.js";import{S as C}from"./Bitmap-CcqmzvfR.js";import{h as D}from"./Tile-D75RMC64.js";import{e as I}from"./TileKey-C5IL-JBr.js";const U=Math.PI/180;function k(e){return e*U}function F(e,i){const s=k(i.rotation),t=Math.abs(Math.cos(s)),r=Math.abs(Math.sin(s)),[o,n]=i.size;return e[0]=Math.round(n*r+o*t),e[1]=Math.round(n*t+o*r),e}function G(e,i,s,t){const[r,o]=i,[n,a]=t,m=.5*s;return e[0]=r-m*n,e[1]=o-m*a,e[2]=r+m*n,e[3]=o+m*a,e}const u=E(),c=[0,0],v=new I(0,0,0,0),y={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};let p=class extends H{constructor(e){super(e),this._imagePromise=null,this.bitmaps=[],this.hidpi=y.hidpi,this.imageMaxWidth=y.imageMaxWidth,this.imageMaxHeight=y.imageMaxHeight,this.imageRotationSupported=y.imageRotationSupported,this.imageNormalizationSupported=y.imageNormalizationSupported,this.update=P(async(i,s)=>{if(_(s),!i.stationary||this.destroyed)return;const t=i.state,r=T(t.spatialReference),o=this.hidpi?i.pixelRatio:1,n=t.worldScreenWidth>0,a=n&&this.imageNormalizationSupported&&t.worldScreenWidth<t.size[0],m=Math.round((this.imageMaxWidth??0)/o),f=Math.round((this.imageMaxHeight??0)/o);a?(c[0]=t.worldScreenWidth,c[1]=t.size[1]):this.imageRotationSupported?(c[0]=t.size[0],c[1]=t.size[1]):F(c,t);const M=Math.floor(c[0])>m||Math.floor(c[1])>f,S=r&&(t.extent.xmin<r.valid[0]||t.extent.xmax>r.valid[1]),w=!this.imageNormalizationSupported&&S,x=!M&&!w,W=this.imageRotationSupported?t.rotation:0,b=this.container.children.slice();if(x){const h=a?t.paddedViewState.center:t.center;this._imagePromise=this._singleExport(t,c,h,t.resolution,W,o,s)}else{let h=Math.min(m,f);n&&(h=Math.min(t.worldScreenWidth,h),h=Math.round(t.worldScreenWidth/Math.ceil(t.worldScreenWidth/h))),this._imagePromise=this._tiledExport(t,h,o,s)}try{const h=await this._imagePromise??[];_(s);const R=[];if(this._imagePromise=null,this.destroyed)return;this.bitmaps=h;for(const g of b)h.includes(g)||R.push(g.fadeOut().then(()=>{g.remove(),g.destroy()}));for(const g of h)R.push(g.fadeIn());await Promise.all(R)}catch(h){this._imagePromise=null,q(h)}},5e3),this.updateExports=P(async i=>{const s=[];for(const t of this.container.children){if(!t.visible||!t.stage)return;s.push(i(t).then(()=>{t.invalidateTexture(),t.requestRender()}))}this._imagePromise=A(s).then(()=>this._imagePromise=null),await this._imagePromise})}destroy(){this.bitmaps.forEach(e=>e.destroy()),this.bitmaps=[]}get updating(){return!this.destroyed&&this._imagePromise!==null}async _export(e,i,s,t,r,o){const n=await this.fetchSource(e,Math.floor(i*r),Math.floor(s*r),{rotation:t,pixelRatio:r,signal:o});_(o);const a=new C(null,!0);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/i,a.rotation=t,a.pixelRatio=r,a.opacity=0,this.container.addChild(a),await a.setSourceAsync(n,o),_(o),a}async _singleExport(e,i,s,t,r,o,n){G(u,s,t,i);const a=z(u,e.spatialReference);return[await this._export(a,i[0],i[1],r,o,n)]}_tiledExport(e,i,s,t){const r=B.create({size:i,spatialReference:e.spatialReference,scales:[e.scale]}),o=new D(r),n=o.getTileCoverage(e);if(!n)return null;const a=[];return n.forEach((m,f,M,S)=>{v.set(m,f,M,0),o.getTileBounds(u,v);const w=z(u,e.spatialReference);a.push(this._export(w,i,i,0,s,t).then(x=>(S!==0&&(v.set(m,f,M,S),o.getTileBounds(u,v),x.x=u[0],x.y=u[3]),x)))}),Promise.all(a)}};d([l()],p.prototype,"_imagePromise",void 0),d([l()],p.prototype,"bitmaps",void 0),d([l()],p.prototype,"container",void 0),d([l()],p.prototype,"fetchSource",void 0),d([l()],p.prototype,"hidpi",void 0),d([l()],p.prototype,"imageMaxWidth",void 0),d([l()],p.prototype,"imageMaxHeight",void 0),d([l()],p.prototype,"imageRotationSupported",void 0),d([l()],p.prototype,"imageNormalizationSupported",void 0),d([l()],p.prototype,"requestUpdate",void 0),d([l()],p.prototype,"updating",null),p=d([N("esri.views.2d.layers.support.ExportStrategy")],p);const K=p;export{K as _};
