import { l } from './highlightReasons-C6YF5eGX.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class e{constructor(){this._idToCounters=new Map;}get empty(){return 0===this._idToCounters.size}addReason(t,e){for(const o of t){let t=this._idToCounters.get(o);t||(t=new Map,this._idToCounters.set(o,t)),t.set(e,(t.get(e)||0)+1);}}deleteReason(t,e){for(const o of t){const t=this._idToCounters.get(o);if(!t)continue;let s=t.get(e);if(null==s)return;s--,s>0?t.set(e,s):t.delete(e),0===t.size&&this._idToCounters.delete(o);}}getHighlightReason(e){const o=this._idToCounters.get(e);if(!o)return null;let s=null;for(const n of l)o.get(n)&&(s=n);return s||null}ids(){return this._idToCounters.keys()}}

export { e };
