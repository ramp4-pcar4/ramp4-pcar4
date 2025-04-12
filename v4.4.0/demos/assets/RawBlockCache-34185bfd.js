import{r as W,bh as J}from"./main-8eb577c9.js";import{J as L,C as P,o as q}from"./rasterProjectionHelper-b2144909.js";class F{constructor(n=15e3,e=5e3){this._timer=null,this._cachedBlocks=new Map,this._size=-1,this._duration=n,this._interval=Math.min(n,e)}decreaseRefCount(n,e){const t=n+"/"+e,l=this._cachedBlocks;if(l.has(t)){const r=l.get(t);return r.refCount--,r.refCount<=0&&(l.delete(t),r.controller&&r.controller.abort()),r.refCount}return 0}getBlock(n,e){const t=n+"/"+e,l=this._cachedBlocks;if(l.has(t)){const r=l.get(t);return r.ts=Date.now(),r.refCount++,l.delete(t),l.set(t,r),r.block}return null}putBlock(n,e,t,l){const r=this._cachedBlocks,c=n+"/"+e;if(r.has(c)){const s=r.get(c);s.ts=Date.now(),s.refCount++}else r.set(c,{block:t,ts:Date.now(),refCount:1,controller:l});this._trim(),this._updateTimer()}deleteBlock(n,e){const t=this._cachedBlocks,l=n+"/"+e;t.has(l)&&t.delete(l)}updateMaxSize(n){this._size=n,this._trim()}empty(){this._cachedBlocks.clear(),this._clearTimer()}getCurrentSize(){return this._cachedBlocks.size}_updateTimer(){if(this._timer!=null)return;const n=this._cachedBlocks;this._timer=setInterval(()=>{const e=Array.from(n),t=Date.now();for(let l=0;l<e.length&&e[l][1].ts<=t-this._duration;l++)n.delete(e[l][0]);n.size===0&&this._clearTimer()},this._interval)}_trim(){const n=this._cachedBlocks;if(this._size===-1||this._size>=n.size)return;const e=Array.from(n);for(let t=0;t<e.length-this._size;t++)n.delete(e[t][0])}_clearTimer(){this._timer!=null&&(clearInterval(this._timer),this._timer=null)}}const u=new Map,h=new F;function O(o,n){return n==null?o:`${o}?sliceId=${n}`}function Q(o,n){const e={extent:null,rasterInfo:n,cache:new Map},t=u.get(o);return t?(t.push(e),t.length-1):(u.set(o,[e]),0)}function U(o,n){const e=u.get(o);e&&(e[n]=null,e.some(t=>t!=null)||u.delete(o))}function V(o,n,e){const t=u.get(o);if(!t)return n==null?h.decreaseRefCount(o,e):0;if(n==null||t[n]==null)return h.decreaseRefCount(o,e);const l=t[n]?.cache,r=l?.get(e);if(l&&r){if(r.refCount--,r.refCount===0){l.delete(e);for(let c=0;c<t.length;c++)t[c]?.cache.delete(e);r.controller&&r.controller.abort()}return r.refCount}return 0}function X(o,n,e){const t=u.get(o);if(!t)return n==null?h.getBlock(o,e):null;if(n==null||t[n]==null){for(let r=0;r<t.length;r++){const c=t[r]?.cache.get(e);if(c)return c.refCount++,c.block}return h.getBlock(o,e)}const l=t[n]?.cache.get(e);if(l)return l.refCount++,l.block;for(let r=0;r<t.length;r++){if(r===n||!t[r])continue;const c=t[r]?.cache,s=c?.get(e);if(c&&s)return s.refCount++,c.set(e,s),s.block}return null}function Y(o,n,e,t,l=null){const r=u.get(o);if(!r)return void(n==null&&h.putBlock(o,e,t,l));if(n==null||r[n]==null)return void h.putBlock(o,e,t,l);const c={refCount:1,block:t,isResolved:!1,isRejected:!1,controller:l};t.then(()=>c.isResolved=!0).catch(()=>c.isRejected=!0),r[n]?.cache.set(e,c)}function Z(o,n,e){const t=u.get(o);t?n!=null&&t[n]!=null?t[n]?.cache.delete(e):h.deleteBlock(o,e):n==null&&h.deleteBlock(o,e)}function G(o,n){const e=u.get(o);return e?e[n]??null:null}function ee(o,n,e,t,l,r,c=null){const s=G(o,n);if(!s)return;const f=s.extent,{cache:k,rasterInfo:y}=s;if(f&&f.xmin===e.xmin&&f.xmax===e.xmax&&f.ymin===e.ymin&&f.ymax===e.ymax)return;t=t??0;const M=e.clone().normalize(),{spatialReference:R,transform:v}=y,b=new Set;for(let d=0;d<M.length;d++){const a=M[d];if(a.xmax-a.xmin<=t||a.ymax-a.ymin<=t)continue;let i=L(a,R,c);W(v)&&(i=v.inverseTransform(i));const I=new J({x:t,y:t,spatialReference:a.spatialReference});if(l==null&&!(l=P(I,R,a,c)))return;const{pyramidLevel:p,pyramidResolution:x,excessiveReading:T}=q(l,y,r||"closest");if(T)return;const{storageInfo:m}=y,{origin:w}=m,g={x:Math.max(0,Math.floor((i.xmin-w.x)/x.x)),y:Math.max(0,Math.floor((w.y-i.ymax)/x.y))},j=Math.ceil((i.xmax-i.xmin)/x.x-.1),D=Math.ceil((i.ymax-i.ymin)/x.y-.1),z=p>0?m.pyramidBlockWidth:m.blockWidth,$=p>0?m.pyramidBlockHeight:m.blockHeight,_=1,H=Math.max(0,Math.floor(g.x/z)-_),S=Math.max(0,Math.floor(g.y/$)-_),A=Math.floor((g.x+j-1)/z)+_,E=Math.floor((g.y+D-1)/$)+_;for(let B=S;B<=E;B++)for(let C=H;C<=A;C++)b.add(`${p}/${B}/${C}`)}k.forEach((d,a)=>{if(!b.has(a)){const i=k.get(a);(i==null||i.isResolved||i.isRejected)&&k.delete(a)}}),s.extent={xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax}}export{O as a,Z as d,U as f,ee as g,Y as h,V as m,Q as u,X as x};
