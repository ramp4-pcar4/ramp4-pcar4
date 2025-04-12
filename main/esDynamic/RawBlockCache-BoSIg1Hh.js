import{bC as F}from"./main-C3PVbFgd.js";import{V as G,z as J,m as K}from"./rasterProjectionHelper-b7S7XeHI.js";class N{constructor(n=15e3,t=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,t)}decreaseRefCount(n,t){const e=n+"/"+t,o=this._cachedBlocks;if(o.has(e)){const l=o.get(e);return l.refCount--,l.refCount<=0&&(o.delete(e),l.controller&&l.controller.abort()),l.refCount}return 0}getBlock(n,t){const e=n+"/"+t,o=this._cachedBlocks;if(o.has(e)){const l=o.get(e);return l.ts=Date.now(),l.refCount++,o.delete(e),o.set(e,l),l.block}return null}putBlock(n,t,e,o){const l=this._cachedBlocks,r=n+"/"+t;if(l.has(r)){const c=l.get(r);c.ts=Date.now(),c.refCount++}else l.set(r,{block:e,ts:Date.now(),refCount:1,controller:o});this._trim(),this._updateTimer()}deleteBlock(n,t){const e=this._cachedBlocks,o=n+"/"+t;e.has(o)&&e.delete(o)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const t=Array.from(n),e=Date.now();for(let o=0;o<t.length&&t[o][1].ts<=e-this._duration;o++)n.delete(t[o][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const t=Array.from(n);for(let e=0;e<t.length-this._size;e++)n.delete(t[e][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const u=new Map,h=new N;function P(i,n){return n==null?i:`${i}?sliceId=${n}`}function U(i,n){const t={extent:null,rasterInfo:n,cache:new Map},e=u.get(i);return e?(e.push(t),e.length-1):(u.set(i,[t]),0)}function X(i,n){const t=u.get(i);t&&(t[n]=null,t.some(e=>e!=null)||u.delete(i))}function Y(i,n,t){const e=u.get(i);if(!e)return n==null?h.decreaseRefCount(i,t):0;if(n==null||e[n]==null)return h.decreaseRefCount(i,t);const o=e[n]?.cache,l=o?.get(t);if(o&&l){if(l.refCount--,l.refCount===0){o.delete(t);for(let r=0;r<e.length;r++)e[r]?.cache.delete(t);l.controller&&l.controller.abort()}return l.refCount}return 0}function Z(i,n,t){const e=u.get(i);if(!e)return n==null?h.getBlock(i,t):null;if(n==null||e[n]==null){for(let l=0;l<e.length;l++){const r=e[l]?.cache.get(t);if(r)return r.refCount++,r.block}return h.getBlock(i,t)}const o=e[n]?.cache.get(t);if(o)return o.refCount++,o.block;for(let l=0;l<e.length;l++){if(l===n||!e[l])continue;const r=e[l]?.cache,c=r?.get(t);if(r&&c)return c.refCount++,r.set(t,c),c.block}return null}function O(i,n,t,e,o=null){const l=u.get(i);if(!l)return void(n==null&&h.putBlock(i,t,e,o));if(n==null||l[n]==null)return void h.putBlock(i,t,e,o);const r={refCount:1,block:e,isResolved:!1,isRejected:!1,controller:o};e.then(()=>r.isResolved=!0).catch(()=>r.isRejected=!0),l[n]?.cache.set(t,r)}function Q(i,n,t){const e=u.get(i);e?n!=null&&e[n]!=null?e[n]?.cache.delete(t):h.deleteBlock(i,t):n==null&&h.deleteBlock(i,t)}function tt(i,n){const t=u.get(i);return t?t[n]??null:null}function et(i,n,t,e,o,l,r=null){const c=tt(i,n);if(!c)return;const m=c.extent,{cache:k,rasterInfo:y}=c;if(m&&m.xmin===t.xmin&&m.xmax===t.xmax&&m.ymin===t.ymin&&m.ymax===t.ymax)return;e=e??0;const C=t.clone().normalize(),{spatialReference:M,transform:R}=y,w=new Set;for(let x=0;x<C.length;x++){const s=C[x];if(s.xmax-s.xmin<=e||s.ymax-s.ymin<=e)continue;let a=G(s,M,r);R!=null&&(a=R.inverseTransform(a));const j=new F({x:e,y:e,spatialReference:s.spatialReference});if(o==null&&!(o=J(j,M,s,r)))return;const{pyramidLevel:g,pyramidResolution:S,excessiveReading:A}=K(o,y,l||"closest");if(A)return;const{storageInfo:f}=y,{origin:b}=f,{x:v,y:z}=S,I=Math.max(0,Math.floor((a.xmin-b.x)/v)),T=Math.max(0,Math.floor((b.y-a.ymax)/z)),H=Math.ceil(a.width/v-.1),W=Math.ceil(a.height/z-.1),$=g>0?f.pyramidBlockWidth:f.blockWidth,D=g>0?f.pyramidBlockHeight:f.blockHeight,d=f.blockBoundary[g];if(!d)continue;const _=1,E=Math.max(d.minCol,Math.floor(I/$)-_),L=Math.max(d.minRow,Math.floor(T/D)-_),V=Math.min(d.maxCol,Math.floor((I+H-1)/$)+_),q=Math.min(d.maxRow,Math.floor((T+W-1)/D)+_);for(let p=L;p<=q;p++)for(let B=E;B<=V;B++)w.add(`${g}/${p}/${B}`)}k.forEach((x,s)=>{if(!w.has(s)){const a=k.get(s);(a==null||a.isResolved||a.isRejected)&&k.delete(s)}}),c.extent={xmin:t.xmin,ymin:t.ymin,xmax:t.xmax,ymax:t.ymax}}export{X as a,et as g,O as h,P as i,Z as m,Y as s,U as u,Q as x};
