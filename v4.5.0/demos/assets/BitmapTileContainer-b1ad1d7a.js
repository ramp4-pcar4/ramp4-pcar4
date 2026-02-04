import { eM as e, aa as u } from './main-5658cd6e.js';
import { R } from './Bitmap-076fab0d.js';
import { r as r$1 } from './TiledDisplayObject-4282c17d.js';
import { w } from './WGLContainer-ac280853.js';
import { T } from './color-6132b2c2.js';
import { i } from './TileContainer-76cc62ef.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class r extends r$1{constructor(e,s,r,i,a,n,m=null){super(e,s,r,i,a,n),this.bitmap=new R(m,{immutable:!1,requestRenderOnSourceChangedEnabled:!1}),this.bitmap.coordScale=[a,n],this.bitmap.once("isReady",(()=>this.ready()));}destroy(){super.destroy(),this.bitmap.destroy();}beforeRender(e){super.beforeRender(e),this.bitmap.beforeRender(e);}afterRender(e){super.afterRender(e),this.bitmap.afterRender(e);}set stencilRef(e){this.bitmap.stencilRef=e;}get stencilRef(){return this.bitmap.stencilRef}_createTransforms(){return {dvs:e(),tileMat3:e()}}setTransform(e){super.setTransform(e),this.bitmap.transforms.dvs=this.transforms.dvs;}onAttach(){this.bitmap.stage=this.stage;}onDetach(){this.bitmap&&(this.bitmap.stage=null);}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class n extends i{get requiresDedicatedFBO(){return this.children.some((e=>"additive"===e.bitmap.blendFunction))}createTile(r$1){const t=this._tileInfoView.getTileBounds(u(),r$1),s=this._tileInfoView.getTileResolution(r$1.level),[n,o]=this._tileInfoView.tileInfo.size;return new r(r$1,s,t[0],t[3],n,o)}prepareRenderPasses(e){const i=e.registerRenderPass({name:"bitmap (tile)",brushes:[w.bitmap],target:()=>this.children.map((e=>e.bitmap)),drawPhase:T.MAP});return [...super.prepareRenderPasses(e),i]}doRender(e){this.visible&&e.drawPhase===T.MAP&&super.doRender(e);}}

export { n };
