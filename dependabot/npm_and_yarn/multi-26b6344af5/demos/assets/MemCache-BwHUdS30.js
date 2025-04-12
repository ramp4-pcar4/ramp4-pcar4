import{ab as d}from"./main-Cv8ITM2j.js";const a=-3,l=a-1;var o;(function(_){_[_.ALL=0]="ALL",_[_.SOME=1]="SOME"})(o||(o={}));class S{get size(){return this._size}constructor(e=10485760){this._maxSize=e,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new d,this._users=new d}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear()}register(e){this._users.push(e)}deregister(e){this._users.removeUnordered(e)}registerRemoveFunc(e,i){this._removeFuncs.push([e,i])}deregisterRemoveFunc(e){this._removeFuncs.filterInPlace(i=>i[0]!==e)}get maxSize(){return this._maxSize}set maxSize(e){this._maxSize=Math.max(e,-1),this._checkSize()}getSize(e,i){return this._db.get(e.id+i)?.size??0}put(e,i,s,h,r){i=e.id+i;const t=this._db.get(i);if(t&&(this._size-=t.size,e.size-=t.size,this._db.delete(i),t.entry!==s&&this._notifyRemove(i,t.entry,t.size,o.ALL)),h>this._maxSize)return void this._notifyRemove(i,s,h,o.ALL);if(s===void 0)return void console.warn("Refusing to cache undefined entry ");if(!h||h<0)return console.warn(`Refusing to cache entry with size ${h} for key ${i}`),void this._notifyRemove(i,s,0,o.ALL);const n=1+Math.max(r,l)-a;this._db.set(i,new b(s,h,n)),this._size+=h,e.size+=h,this._checkSize()}updateSize(e,i,s,h){i=e.id+i;const r=this._db.get(i);if(r&&r.entry===s){for(this._size-=r.size,e.size-=r.size;h>this._maxSize;){const t=this._notifyRemove(i,s,h,o.SOME);if(!(t!=null&&t>0))return void this._db.delete(i);h=t}r.size=h,this._size+=h,e.size+=h,this._checkSize()}}pop(e,i){i=e.id+i;const s=this._db.get(i);if(s)return this._size-=s.size,e.size-=s.size,this._db.delete(i),++this._hit,s.entry;++this._miss}get(e,i){i=e.id+i;const s=this._db.get(i);if(s!==void 0)return this._db.delete(i),s.lives=s.lifetime,this._db.set(i,s),++this._hit,s.entry;++this._miss}peek(e,i){const s=this._db.get(e.id+i);return s?++this._hit:++this._miss,s?.entry}get performanceInfo(){const e={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},i={},s=new Array;this._db.forEach((t,n)=>{const c=t.lifetime;s[c]=(s[c]||0)+t.size,this._users.forAll(u=>{const{id:f,name:z}=u;if(n.startsWith(f)){const m=i[z]||0;i[z]=m+t.size}})});const h={};this._users.forAll(t=>{const n=t.name;if("hitRate"in t&&typeof t.hitRate=="number"&&!isNaN(t.hitRate)&&t.hitRate>0){const c=i[n]||0;i[n]=c,h[n]=Math.round(100*t.hitRate)+"%"}else h[n]="0%"});const r=Object.keys(i);r.sort((t,n)=>i[n]-i[t]),r.forEach(t=>e[t]=Math.round(i[t]/2**20)+"MB / "+h[t]);for(let t=s.length-1;t>=0;--t){const n=s[t];n&&(e["Priority "+(t+a-1)]=Math.round(n/this._size*100)+"%")}return e}resetStats(){this._hit=this._miss=0,this._users.forAll(e=>e.resetHitRate())}clear(e){const i=e.id;this._db.forEach((s,h)=>{h.startsWith(i)&&(this._size-=s.size,this._db.delete(h),this._notifyRemove(h,s.entry,s.size,o.ALL))}),e.size=0}clearAll(){this._db.forEach((e,i)=>this._notifyRemove(i,e.entry,e.size,o.ALL)),this._users.forAll(e=>e.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(e,i,s,h){let r;return this._removeFuncs.some(t=>{if(e.startsWith(t[0])){const n=t[1](i,h,s);return typeof n=="number"&&(r=n),!0}return!1}),r}_checkSize(){this._users.forAll(e=>this._checkSizeLimits(e)),this._checkSizeLimits()}_checkSizeLimits(e){const i=e??this;if(i.maxSize<0||i.size<=i.maxSize)return;const s=e?.id;let h=!0;for(;h;){h=!1;for(const[r,t]of this._db)if(t.lifetime===0&&(!s||r.startsWith(s))){if(this._purgeItem(r,t,e),i.size<=.9*i.maxSize)return;h||=this._db.has(r)}}for(const[r,t]of this._db)if((!s||r.startsWith(s))&&(this._purgeItem(r,t,e),i.size<=.9*i.maxSize))return}_purgeItem(e,i,s=this._users.find(h=>e.startsWith(h.id))){if(this._db.delete(e),i.lives<=1){this._size-=i.size,s&&(s.size-=i.size);const h=this._notifyRemove(e,i.entry,i.size,o.SOME);h!=null&&h>0&&(this._size+=h,s&&(s.size+=h),i.lives=i.lifetime,i.size=h,this._db.set(e,i))}else--i.lives,this._db.set(e,i)}}class b{constructor(e,i,s){this.entry=e,this.size=i,this.lifetime=s,this.lives=s}}export{a as e,S as h};
