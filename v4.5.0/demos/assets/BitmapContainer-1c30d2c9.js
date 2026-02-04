import { a as a$1, w } from './WGLContainer-ac280853.js';
import { T } from './color-6132b2c2.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class a extends a$1{constructor(){super(...arguments),this._hasCrossfade=!1;}get requiresDedicatedFBO(){return this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade();}prepareRenderPasses(r){const a=r.registerRenderPass({name:"bitmap",brushes:[w.bitmap],target:()=>this.children,drawPhase:T.MAP});return [...super.prepareRenderPasses(r),a]}_manageFade(){this.children.reduce(((e,s)=>e+(s.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1);}}

export { a };
