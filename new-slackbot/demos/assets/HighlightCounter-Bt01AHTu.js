import { l } from './highlightReasons-jOHx54Tz.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class t{constructor(){this._idToCounters=new Map;}get empty(){return 0===this._idToCounters.size}addReason(e,t){for(const s of e){let e=this._idToCounters.get(s);e||(e=new Map,this._idToCounters.set(s,e)),e.set(t,(e.get(t)||0)+1);}}deleteReason(e,t){for(const s of e){const e=this._idToCounters.get(s);if(!e)continue;let o=e.get(t);if(null==o)return;o--,o>0?e.set(t,o):e.delete(t),0===e.size&&this._idToCounters.delete(s);}}getHighestReason(t){const s=this._idToCounters.get(t);if(!s)return null;let o=null;for(const n of l)s.get(n)&&(o=n);return o||null}ids(){return this._idToCounters.keys()}}

export { t };
