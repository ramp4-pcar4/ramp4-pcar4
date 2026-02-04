import { h } from './GeometryUtils-919c0656.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
var t;!function(e){e[e.moveTo=1]="moveTo",e[e.lineTo=2]="lineTo",e[e.close=7]="close";}(t||(t={}));class s{constructor(e,t,s=0){this.values={},this._geometry=void 0,this._pbfGeometry=null,this.featureIndex=s;const o=t.keys,r=t.values,a=e.asUnsafe();for(;a.next();)switch(a.tag()){case 1:this.id=a.getUInt64();break;case 2:{const e=a.getMessage().asUnsafe(),t=this.values;for(;!e.empty();){const s=e.getUInt32(),a=e.getUInt32();t[o[s]]=r[a];}e.release();break}case 3:this.type=a.getUInt32();break;case 4:this._pbfGeometry=a.getMessage();break;default:a.skip();}}getGeometry(s){if(void 0!==this._geometry)return this._geometry;if(!this._pbfGeometry)return null;const o=this._pbfGeometry.asUnsafe();let r,a;this._pbfGeometry=null,s?s.reset(this.type):r=[];let n,i=t.moveTo,l=0,h$1=0,c=0;for(;!o.empty();){if(0===l){const e=o.getUInt32();i=7&e,l=e>>3;}switch(l--,i){case t.moveTo:h$1+=o.getSInt32(),c+=o.getSInt32(),s?s.moveTo(h$1,c):r&&(a&&r.push(a),a=[],a.push(new h(h$1,c)));break;case t.lineTo:h$1+=o.getSInt32(),c+=o.getSInt32(),s?s.lineTo(h$1,c):a&&a.push(new h(h$1,c));break;case t.close:s?s.close():a&&!a[0].equals(h$1,c)&&a.push(a[0].clone());break;default:throw o.release(),new Error("Invalid path operation")}}return s?n=s.result():r&&(a&&r.push(a),n=r),o.release(),this._geometry=n,n}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class e{constructor(t){this.extent=4096,this.keys=[],this.values=[],this._pbfLayer=t.clone();const s=t.asUnsafe();for(;s.next();)switch(s.tag()){case 1:this.name=s.getString();break;case 3:this.keys.push(s.getString());break;case 4:this.values.push(s.processMessage(e._parseValue));break;case 5:this.extent=s.getUInt32();break;default:s.skip();}}getData(){return this._pbfLayer}static _parseValue(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getInt64();case 5:return e.getUInt64();case 6:return e.getSInt64();case 7:return e.getBool();default:e.skip();}return null}}

export { e, s };
