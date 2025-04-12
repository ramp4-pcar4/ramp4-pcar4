import{bE as V}from"./main-Bd_03BNf.js";import{V as q,z as G,m as J}from"./rasterProjectionHelper-8LIY8j8p.js";class K{constructor(n=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,e)}decreaseRefCount(n,e){const t=n+"/"+e,o=this._cachedBlocks;if(o.has(t)){const l=o.get(t);return l.refCount--,l.refCount<=0&&(o.delete(t),l.controller&&l.controller.abort()),l.refCount}return 0}getBlock(n,e){const t=n+"/"+e,o=this._cachedBlocks;if(o.has(t)){const l=o.get(t);return l.ts=Date.now(),l.refCount++,o.delete(t),o.set(t,l),l.block}return null}putBlock(n,e,t,o){const l=this._cachedBlocks,i=n+"/"+e;if(l.has(i)){const c=l.get(i);c.ts=Date.now(),c.refCount++}else l.set(i,{block:t,ts:Date.now(),refCount:1,controller:o});this._trim(),this._updateTimer()}deleteBlock(n,e){const t=this._cachedBlocks,o=n+"/"+e;t.has(o)&&t.delete(o)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const e=Array.from(n),t=Date.now();for(let o=0;o<e.length&&e[o][1].ts<=t-this._duration;o++)n.delete(e[o][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const e=Array.from(n);for(let t=0;t<e.length-this._size;t++)n.delete(e[t][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const u=new Map,h=new K;function U(r,n){return n==null?r:`${r}?sliceId=${n}`}function X(r,n){const e={extent:null,rasterInfo:n,cache:new Map},t=u.get(r);return t?(t.push(e),t.length-1):(u.set(r,[e]),0)}function Y(r,n){const e=u.get(r);e&&(e[n]=null,e.some(t=>t!=null)||u.delete(r))}function Z(r,n,e){const t=u.get(r);if(!t)return n==null?h.decreaseRefCount(r,e):0;if(n==null||t[n]==null)return h.decreaseRefCount(r,e);const o=t[n]?.cache,l=o?.get(e);if(o&&l){if(l.refCount--,l.refCount===0){o.delete(e);for(let i=0;i<t.length;i++)t[i]?.cache.delete(e);l.controller&&l.controller.abort()}return l.refCount}return 0}function ee(r,n,e){const t=u.get(r);if(!t)return n==null?h.getBlock(r,e):null;if(n==null||t[n]==null){for(let l=0;l<t.length;l++){const i=t[l]?.cache.get(e);if(i)return i.refCount++,i.block}return h.getBlock(r,e)}const o=t[n]?.cache.get(e);if(o)return o.refCount++,o.block;for(let l=0;l<t.length;l++){if(l===n||!t[l])continue;const i=t[l]?.cache,c=i?.get(e);if(i&&c)return c.refCount++,i.set(e,c),c.block}return null}function te(r,n,e,t,o=null){const l=u.get(r);if(!l)return void(n==null&&h.putBlock(r,e,t,o));if(n==null||l[n]==null)return void h.putBlock(r,e,t,o);const i={refCount:1,block:t,isResolved:!1,isRejected:!1,controller:o};t.then(()=>i.isResolved=!0).catch(()=>i.isRejected=!0),l[n]?.cache.set(e,i)}function ne(r,n,e){const t=u.get(r);t?n!=null&&t[n]!=null?t[n]?.cache.delete(e):h.deleteBlock(r,e):n==null&&h.deleteBlock(r,e)}function N(r,n){const e=u.get(r);return e?e[n]??null:null}function le(r,n,e,t,o,l,i=null){const c=N(r,n);if(!c)return;const m=c.extent,{cache:k,rasterInfo:y}=c;if(m&&m.xmin===e.xmin&&m.xmax===e.xmax&&m.ymin===e.ymin&&m.ymax===e.ymax)return;t=t??0;const C=e.clone().normalize(),{spatialReference:M,transform:R}=y,w=new Set;for(let x=0;x<C.length;x++){const s=C[x];if(s.xmax-s.xmin<=t||s.ymax-s.ymin<=t)continue;let a=q(s,M,i);R!=null&&(a=R.inverseTransform(a));const D=new V({x:t,y:t,spatialReference:s.spatialReference});if(o==null&&!(o=G(D,M,s,i)))return;const{pyramidLevel:g,pyramidResolution:E,excessiveReading:H}=J(o,y,l||"closest");if(H)return;const{storageInfo:f}=y,{origin:b}=f,{x:v,y:z}=E,$=Math.max(0,Math.floor((a.xmin-b.x)/v)),I=Math.max(0,Math.floor((b.y-a.ymax)/z)),S=Math.ceil(a.width/v-.1),W=Math.ceil(a.height/z-.1),T=g>0?f.pyramidBlockWidth:f.blockWidth,j=g>0?f.pyramidBlockHeight:f.blockHeight,d=f.blockBoundary[g];if(!d)continue;const _=1,A=Math.max(d.minCol,Math.floor($/T)-_),F=Math.max(d.minRow,Math.floor(I/j)-_),L=Math.min(d.maxCol,Math.floor(($+S-1)/T)+_),P=Math.min(d.maxRow,Math.floor((I+W-1)/j)+_);for(let p=F;p<=P;p++)for(let B=A;B<=L;B++)w.add(`${g}/${p}/${B}`)}k.forEach((x,s)=>{if(!w.has(s)){const a=k.get(s);(a==null||a.isResolved||a.isRejected)&&k.delete(s)}}),c.extent={xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}export{Y as a,le as g,te as h,U as i,ee as m,Z as s,X as u,ne as x};
