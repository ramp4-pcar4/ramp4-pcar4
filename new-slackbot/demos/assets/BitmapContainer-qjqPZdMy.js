import { n, h } from './WGLContainer-Cb25DKOu.js';
import { E } from './Container-Dzffad4h.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class a extends n{constructor(){super(...arguments),this._hasCrossfade=!1;}get requiresDedicatedFBO(){return super.requiresDedicatedFBO||this._hasCrossfade}beforeRender(e){super.beforeRender(e),this._manageFade();}prepareRenderPasses(s){const a=s.registerRenderPass({name:"bitmap",brushes:[h.bitmap],target:()=>this.children,drawPhase:E.MAP});return [...super.prepareRenderPasses(s),a]}_manageFade(){this.children.reduce(((e,r)=>e+(r.inFadeTransition?1:0)),0)>=2?(this.children.forEach((e=>e.blendFunction="additive")),this._hasCrossfade=!0):(this.children.forEach((e=>e.blendFunction="standard")),this._hasCrossfade=!1);}}

export { a };
