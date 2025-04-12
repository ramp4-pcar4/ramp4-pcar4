import { bw as l$1, bx as z, by as f$1, bz as b$1 } from './main-h0RsJOaN.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class s{constructor(t=9,i){this._compareMinX=o,this._compareMinY=l,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&("function"==typeof i?this._toBBox=i:this._initFormat(i)),this.clear();}destroy(){this.clear(),p.prune(),g.prune(),M.prune(),X.prune();}all(t){this._all(this._data,t);}search(t,i){let n=this._data;const e=this._toBBox;if(x(t,n))for(p.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const h=n.children[s],a=n.leaf?e(h):h;x(t,a)&&(n.leaf?i(h):_(t,a)?this._all(h,i):p.push(h));}n=p.pop();}}collides(t){let i=this._data;const n=this._toBBox;if(!x(t,i))return !1;for(p.clear();i;){for(let e=0,s=i.children.length;e<s;e++){const s=i.children[e],h=i.leaf?n(s):s;if(x(t,h)){if(i.leaf||_(t,h))return !0;p.push(s);}}i=p.pop();}return !1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let i=0,n=t.length;i<n;i++)this.insert(t[i]);return this}let i=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else {if(this._data.height<i.height){const t=this._data;this._data=i,i=t;}this._insert(i,this._data.height-i.height-1,!0);}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(i){if(!i)return this;let n,e=this._data,s=null,h=0,a=!1;const r=this._toBBox(i);for(M.clear(),X.clear();e||M.length>0;){if(e||(e=M.pop(),s=M.data[M.length-1],h=X.pop()??0,a=!0),e.leaf&&(n=z(e.children,i,e.children.length,e.indexHint),-1!==n))return e.children.splice(n,1),M.push(e),this._condense(M),this;a||e.leaf||!_(e,r)?s?(h++,e=s.children[h],a=!1):e=null:(M.push(e),X.push(h),h=0,s=e,e=e.children[0]);}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,i){let n=t;for(g.clear();n;){if(!0===n.leaf)for(const t of n.children)i(t);else g.pushArray(n.children);n=g.pop()??null;}}_build(t,i,n,e){const s=n-i+1;let a=this._maxEntries;if(s<=a){const e=new w(t.slice(i,n+1));return h(e,this._toBBox),e}e||(e=Math.ceil(Math.log(s)/Math.log(a)),a=Math.ceil(s/a**(e-1)));const r=new b([]);r.height=e;const o=Math.ceil(s/a),l=o*Math.ceil(Math.sqrt(a));f(t,i,n,l,this._compareMinX);for(let h=i;h<=n;h+=l){const i=Math.min(h+l-1,n);f(t,h,i,o,this._compareMinY);for(let n=h;n<=i;n+=o){const s=Math.min(n+o-1,i);r.children.push(this._build(t,n,s,e-1));}}return h(r,this._toBBox),r}_chooseSubtree(t,i,n,e){for(;e.push(i),!0!==i.leaf&&e.length-1!==n;){let n,e=1/0,s=1/0;for(let h=0,a=i.children.length;h<a;h++){const a=i.children[h],r=c(a),o=d(t,a)-r;o<s?(s=o,e=r<e?r:e,n=a):o===s&&r<e&&(e=r,n=a);}i=n||i.children[0];}return i}_insert(t,i,n){const e=this._toBBox,s=n?t:e(t);M.clear();const h=this._chooseSubtree(s,this._data,i,M);for(h.children.push(t),r(h,s);i>=0&&M.data[i].children.length>this._maxEntries;)this._split(M,i),i--;this._adjustParentBBoxes(s,M,i);}_split(t,i){const n=t.data[i],e=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,e);const a=this._chooseSplitIndex(n,s,e);if(!a)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(a,n.children.length-a),o=n.leaf?new w(r):new b(r);o.height=n.height,h(n,this._toBBox),h(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o);}_splitRoot(t,i){this._data=new b([t,i]),this._data.height=t.height+1,h(this._data,this._toBBox);}_chooseSplitIndex(t,i,n){let e,s,h;e=s=1/0;for(let r=i;r<=n-i;r++){const i=a(t,0,r,this._toBBox),o=a(t,r,n,this._toBBox),l=u(i,o),m=c(i)+c(o);l<e?(e=l,h=r,s=m<s?m:s):l===e&&m<s&&(s=m,h=r);}return h}_chooseSplitAxis(t,i,n){const e=t.leaf?this._compareMinX:o,s=t.leaf?this._compareMinY:l;this._allDistMargin(t,i,n,e)<this._allDistMargin(t,i,n,s)&&t.children.sort(e);}_allDistMargin(t,i,n,e){t.children.sort(e);const s=this._toBBox,h=a(t,0,i,s),o=a(t,n-i,n,s);let l=m(h)+m(o);for(let a=i;a<n-i;a++){const i=t.children[a];r(h,t.leaf?s(i):i),l+=m(h);}for(let a=n-i-1;a>=i;a--){const i=t.children[a];r(o,t.leaf?s(i):i),l+=m(o);}return l}_adjustParentBBoxes(t,i,n){for(let e=n;e>=0;e--)r(i.data[e],t);}_condense(i){for(let n=i.length-1;n>=0;n--){const e=i.data[n];if(0===e.children.length)if(n>0){const s=i.data[n-1],h=s.children;h.splice(z(h,e,h.length,s.indexHint),1);}else this.clear();else h(e,this._toBBox);}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};");}}function h(t,i){a(t,0,t.children.length,i,t);}function a(t,i,n,e,s){s||(s=new w([])),s.minX=1/0,s.minY=1/0,s.maxX=-1/0,s.maxY=-1/0;for(let h,a=i;a<n;a++)h=t.children[a],r(s,t.leaf?e(h):h);return s}function r(t,i){t.minX=Math.min(t.minX,i.minX),t.minY=Math.min(t.minY,i.minY),t.maxX=Math.max(t.maxX,i.maxX),t.maxY=Math.max(t.maxY,i.maxY);}function o(t,i){return t.minX-i.minX}function l(t,i){return t.minY-i.minY}function c(t){return (t.maxX-t.minX)*(t.maxY-t.minY)}function m(t){return t.maxX-t.minX+(t.maxY-t.minY)}function d(t,i){return (Math.max(i.maxX,t.maxX)-Math.min(i.minX,t.minX))*(Math.max(i.maxY,t.maxY)-Math.min(i.minY,t.minY))}function u(t,i){const n=Math.max(t.minX,i.minX),e=Math.max(t.minY,i.minY),s=Math.min(t.maxX,i.maxX),h=Math.min(t.maxY,i.maxY);return Math.max(0,s-n)*Math.max(0,h-e)}function _(t,i){return t.minX<=i.minX&&t.minY<=i.minY&&i.maxX<=t.maxX&&i.maxY<=t.maxY}function x(t,i){return i.minX<=t.maxX&&i.minY<=t.maxY&&i.maxX>=t.minX&&i.maxY>=t.minY}function f(t,i,n,s,h){const a=[i,n];for(;a.length;){const i=a.pop(),n=a.pop();if(i-n<=s)continue;const r=n+Math.ceil((i-n)/s/2)*s;f$1(t,r,n,i,h),a.push(n,r,r,i);}}const p=new l$1,g=new l$1,M=new l$1,X=new l$1({deallocator:void 0});class Y{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0;}}class B extends Y{constructor(){super(...arguments),this.height=1,this.indexHint=new b$1;}}class w extends B{constructor(t){super(),this.children=t,this.leaf=!0;}}class b extends B{constructor(t){super(),this.children=t,this.leaf=!1;}}

export { s };
