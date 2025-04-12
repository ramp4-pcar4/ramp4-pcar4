import{V as c,aI as u,aJ as m,B as a,D as h,bI as p,N as v,e7 as g,eS as y,n as I}from"./main-Bd_03BNf.js";import{a as b}from"./layerContainerType-C5CzMsLd.js";const n=new c,o=new WeakMap;function w(t){D(t)&&n.push(new WeakRef(t))}function C(t){const e=n.find(s=>s.deref()===t);e&&n.remove(e)}function D(t){return t!=null&&typeof t=="object"&&"refreshInterval"in t&&"refresh"in t}function d(t,e){return Number.isFinite(t)&&Number.isFinite(e)?e<=0?t:d(e,t%e):0}let f=0,i=0;function $(){const t=Date.now();let e=!1;for(const s of n){const r=s.deref();r?r.refreshInterval&&t-(o.get(r)??0)+5>=6e4*r.refreshInterval&&(o.set(r,t),r.refresh(t)):e=!0}if(e)for(let s=n.length-1;s>=0;s--)n.at(s).deref()||n.removeAt(s)}u(()=>{const t=Date.now();let e=0;for(const s of n){const r=s.deref();r&&(e=d(Math.round(6e4*r.refreshInterval),e),r.refreshInterval?o.get(r)||o.set(r,t):o.delete(r))}if(e!==i){if(i=e,clearInterval(f),i===0)return void(f=0);f=setInterval($,i)}},m);const l=.1,R=t=>{let e=class extends t{constructor(...s){super(...s),this.refreshInterval=0,this.refreshTimestamp=0,this._debounceHasDataChanged=g(()=>this.hasDataChanged()),this.when().then(()=>{this.destroyed||w(this)},()=>{})}destroy(){C(this)}castRefreshInterval(s){return s>=l?s:s<=0?0:l}get refreshParameters(){return{_ts:this.refreshTimestamp||null}}refresh(s=Date.now()){y(this._debounceHasDataChanged()).then(r=>{r&&this._set("refreshTimestamp",s),this.emit("refresh",{dataChanged:r})},r=>{I.getLogger(this).error(r),this.emit("refresh",{dataChanged:!1,error:r})})}async hasDataChanged(){return!0}get test(){}};return a([h({type:Number,json:{write:!0,origins:{"web-scene":{write:{enabled:!0,layerContainerTypes:b}}}}})],e.prototype,"refreshInterval",void 0),a([p("refreshInterval")],e.prototype,"castRefreshInterval",null),a([h({readOnly:!0})],e.prototype,"refreshTimestamp",void 0),a([h({readOnly:!0})],e.prototype,"refreshParameters",null),e=a([v("esri.layers.mixins.RefreshableLayer")],e),e};export{R as f};
