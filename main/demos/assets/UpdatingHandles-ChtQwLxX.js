import{B as r,D as p,N as _,aN as g,aO as o,aP as u,aQ as c,aJ as m,a9 as h,A as H}from"./main-Bd_03BNf.js";let l=class extends g{constructor(){super(...arguments),this.updating=!1,this._handleId=0,this._scheduleHandleId=0,this._pendingPromises=new Set}destroy(){this.removeAll()}add(e,t,s={}){return this._installWatch(e,t,s,o)}addWhen(e,t,s={}){return this._installWatch(e,t,s,u)}addOnCollectionChange(e,t,{initial:s=!1,final:a=!1}={}){const n=++this._handleId;return this.addHandles([c(e,"after-changes",this._createSyncUpdatingCallback(),m),c(e,"change",t,{onListenerAdd:s?d=>t({added:d.toArray(),removed:[]}):void 0,onListenerRemove:a?d=>t({added:[],removed:d.toArray()}):void 0})],n),h(()=>this.removeHandles(n))}addPromise(e){if(e==null)return e;const t=++this._handleId;this.addHandles(h(()=>{this._pendingPromises.delete(e)&&(this._pendingPromises.size!==0||this.hasHandles(i)||this._set("updating",!1))}),t),this._pendingPromises.add(e),this._set("updating",!0);const s=()=>this.removeHandles(t);return e.then(s,s),e}removeAll(){this._pendingPromises.clear(),this.removeAllHandles(),this._set("updating",!1)}_installWatch(e,t,s={},a){const n=++this._handleId;s.sync||this._installSyncUpdatingWatch(e,n);const d=a(e,t,s);return this.addHandles(d,n),h(()=>this.removeHandles(n))}_installSyncUpdatingWatch(e,t){const s=this._createSyncUpdatingCallback(),a=o(e,s,{sync:!0,equals:()=>!1});return this.addHandles(a,t),a}_createSyncUpdatingCallback(){return()=>{this.removeHandles(i),++this._scheduleHandleId;const e=this._scheduleHandleId;this._get("updating")||this._set("updating",!0),this.addHandles(H(()=>{e===this._scheduleHandleId&&(this._set("updating",this._pendingPromises.size>0),this.removeHandles(i))}),i)}}};r([p({readOnly:!0})],l.prototype,"updating",void 0),l=r([_("esri.core.support.UpdatingHandles")],l);const i=-42;export{l as h};
