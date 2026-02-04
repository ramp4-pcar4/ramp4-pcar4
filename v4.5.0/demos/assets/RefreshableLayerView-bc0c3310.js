import { e, y, k as a, br as a$1, bq as j$1, p as s$1 } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const i=i=>{let c=class extends i{initialize(){this.handles.add(a$1((()=>this.layer),"refresh",(r=>{this.doRefresh(r.dataChanged).catch((r=>{j$1(r)||s$1.getLogger(this.declaredClass).error(r);}));})),"RefreshableLayerView");}};return e([y()],c.prototype,"layer",void 0),c=e([a("esri.layers.mixins.RefreshableLayerView")],c),c};

export { i };
