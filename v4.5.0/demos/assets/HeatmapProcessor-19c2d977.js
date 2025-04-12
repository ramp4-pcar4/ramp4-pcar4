import { e, k as a, ez as m, r as r$1, eq as o, eA as s } from './main-5658cd6e.js';
import { o as o$2 } from './definitions-281daf3f.js';
import { p as p$1 } from './BaseProcessor-3639b75a.js';
import { o as o$1 } from './tileUtils-f6baf24c.js';
import './preload-helper-a4975f27.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class p{constructor(e,t){this.offset=e,this.extent=t;}}function c(e){const t=e.key,s=new Map,r=256,i=o$2,o=e.tileInfoView.tileInfo.isWrappable;return s.set(o$1(t,-1,-1,o).id,new p([-i,-i],[i-r,i-r,i,i])),s.set(o$1(t,0,-1,o).id,new p([0,-i],[0,i-r,i,i])),s.set(o$1(t,1,-1,o).id,new p([i,-i],[0,i-r,r,i])),s.set(o$1(t,-1,0,o).id,new p([-i,0],[i-r,0,i,i])),s.set(o$1(t,1,0,o).id,new p([i,0],[0,0,r,i])),s.set(o$1(t,-1,1,o).id,new p([-i,i],[i-r,0,i,r])),s.set(o$1(t,0,1,o).id,new p([0,i],[0,0,i,r])),s.set(o$1(t,1,1,o).id,new p([i,i],[0,0,r,r])),s}let l=class extends p$1{constructor(){super(...arguments),this.type="heatmap",this._tileKeyToFeatureSets=new Map;}initialize(){this.handles.add([this.tileStore.on("update",this.onTileUpdate.bind(this))]);}async update(e,t){const s=t.schema.processors[0];if("heatmap"!==s.type)return;m(this._schema,s)&&(e.mesh=!0,this._schema=s);}onTileUpdate(e){for(const t of e.removed)this._tileKeyToFeatureSets.delete(t.key.id);}onTileClear(e){const t={clear:!0};return this._tileKeyToFeatureSets.delete(e.key.id),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:e.id,data:t})}async onTileMessage(e,r,i){this._tileKeyToFeatureSets.has(e.key.id)||this._tileKeyToFeatureSets.set(e.key.id,new Map);const a=this._tileKeyToFeatureSets.get(e.key.id);if(a&&r$1(r.addOrUpdate)&&r.addOrUpdate.hasFeatures&&a.set(r.addOrUpdate.instance,r),r.end){const t=[],r=c(e);this._tileKeyToFeatureSets.forEach(((i,o$1)=>{if(o$1===e.key.id)i.forEach((e=>o(e.addOrUpdate,(e=>t.push(e)))));else if(r.has(o$1)){const e=r.get(o$1),[a,n]=e.offset;i.forEach((e=>o(e.addOrUpdate,(e=>{const s=e.transform(a,n,1,1);t.push(s);}))));}}));const a=s(t,this._schema.mesh,512,512),n={tileKey:e.key.id,intensityInfo:a},d=[a.matrix];return this.remoteClient.invoke("tileRenderer.onTileData",n,{...i,transferList:d})}}onTileError(e,t,s){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:e.id,error:t},s)}};l=e([a("esri.views.2d.layers.features.processors.HeatmapProcessor")],l);const h=l;

export { h as default };
