import{gH as m,b2 as y,aK as c,bt as M,bv as T}from"./main-DCIX61zy.js";import{S as I}from"./Bitmap-DixeSrEO.js";import{r as A,t as P}from"./WGLContainer-whJgsi2t.js";import{i as _}from"./TileContainer-C5yGwaDr.js";let C=class extends A{constructor(e,t,r,s,i,a,o=null){super(e,t,r,s,i,a),this.bitmap=new I(o),this.bitmap.coordScale=[i,a],this.bitmap.once("isReady",()=>this.ready())}destroy(){super.destroy(),this.bitmap.destroy()}beforeRender(e){this.bitmap.beforeRender(e),super.beforeRender(e)}afterRender(e){this.bitmap.afterRender(e),super.afterRender(e)}set stencilRef(e){this.bitmap.stencilRef=e}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return{displayViewScreenMat3:m(),tileMat3:m()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.displayViewScreenMat3=this.transforms.displayViewScreenMat3}onAttach(){this.bitmap.stage=this.stage}onDetach(){this.bitmap&&(this.bitmap.stage=null)}},F=class extends _{get requiresDedicatedFBO(){return this.children.some(e=>e.bitmap.blendFunction==="additive")}createTile(e){const t=this.tileInfoView.getTileBounds(y(),e),r=this.tileInfoView.getTileResolution(e.level),[s,i]=this.tileInfoView.tileInfo.size;return new C(e,r,t[0],t[3],s,i)}prepareRenderPasses(e){const t=e.registerRenderPass({name:"bitmap (tile)",brushes:[P.bitmap],target:()=>this.children.map(r=>r.bitmap),drawPhase:c.MAP});return[...super.prepareRenderPasses(e),t]}doRender(e){this.visible&&e.drawPhase===c.MAP&&super.doRender(e)}};const L=e=>{let t=class extends e{attach(){this.view.timeline.record(`${this.layer.title} (BitmapTileLayer) Attach`),this._bitmapView=new F(this._tileInfoView),this.container.addChild(this._bitmapView)}detach(){this.container.removeChild(this._bitmapView),this._bitmapView?.removeAllChildren(),this._bitmapView=null}};return t=M([T("esri.views.2d.layers.BitmapTileLayerView2D")],t),t};function x(e){return e instanceof HTMLImageElement?e.naturalWidth:e.width}function D(e){return e instanceof HTMLImageElement?e.naturalHeight:e.height}function S(e,t,r,s){if(r.level===s.level)return t;const i=e.tileInfo.size,a=e.getTileResolution(r.level),o=e.getTileResolution(s.level);let n=e.getLODInfoAt(s.level);const u=n.getXForColumn(s.col),f=n.getYForRow(s.row);n=e.getLODInfoAt(r.level);const b=n.getXForColumn(r.col),w=n.getYForRow(r.row),l=x(t)/i[0],h=D(t)/i[1],g=Math.round(l*((u-b)/a)),R=Math.round(h*(-(f-w)/a)),v=Math.round(l*i[0]*(o/a)),V=Math.round(h*i[1]*(o/a)),d=p(i);return d.getContext("2d").drawImage(t,g,R,v,V,0,0,i[0],i[1]),d}function p(e){const t=document.createElement("canvas");return[t.width,t.height]=e,t}export{S as n,p as o,L as r};
