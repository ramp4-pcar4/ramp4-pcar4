import { aX as e, aZ as c, a_ as v, ag as b$1, J as s$1 } from './main-ba570a3b.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
const i=i=>{let a=class extends i{initialize(){this.addHandles(v((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{b$1(r)||s$1.getLogger(this).error(r);}));})),"RefreshableLayerView");}};return a=e([c("esri.layers.mixins.RefreshableLayerView")],a),a};

export { i };
