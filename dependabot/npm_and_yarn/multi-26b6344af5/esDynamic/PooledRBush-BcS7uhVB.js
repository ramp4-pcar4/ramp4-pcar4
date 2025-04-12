import{a9 as g,c6 as F,c7 as y,c8 as J}from"./main-0iYVBzEC.js";import{t as N}from"./quickselect-DHTstthl.js";class O{constructor(t=9,i){this._compareMinX=D,this._compareMinY=H,this._toBBox=n=>n,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),i&&(typeof i=="function"?this._toBBox=i:this._initFormat(i)),this.clear()}destroy(){this.clear(),d.prune(),Y.prune(),m.prune(),B.prune()}all(t){A(this._data,t)}search(t,i){let n=this._data;const a=this._toBBox;if(X(t,n))for(d.clear();n;){for(let s=0,h=n.children.length;s<h;s++){const r=n.children[s],o=n.leaf?a(r):r;X(t,o)&&(n.leaf?i(r):b(t,o)?A(r,i):d.push(r))}n=d.pop()}}collides(t){let i=this._data;const n=this._toBBox;if(!X(t,i))return!1;for(d.clear();i;){for(let a=0,s=i.children.length;a<s;a++){const h=i.children[a],r=i.leaf?n(h):h;if(X(t,r)){if(i.leaf||b(t,r))return!0;d.push(h)}}i=d.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let n=0,a=t.length;n<a;n++)this.insert(t[n]);return this}let i=this._build(t.slice(),0,t.length-1,0);if(this._data.children.length)if(this._data.height===i.height)this._splitRoot(this._data,i);else{if(this._data.height<i.height){const n=this._data;this._data=i,i=n}this._insert(i,this._data.height-i.height-1,!0)}else this._data=i;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new w([]),this}remove(t){if(!t)return this;let i,n=this._data,a=null,s=0,h=!1;const r=this._toBBox(t);for(m.clear(),B.clear();n||m.length>0;){if(n||(n=m.pop(),a=m.data[m.length-1],s=B.pop()??0,h=!0),n.leaf&&(i=F(n.children,y(t),n.children.length,n.indexHint),i!==-1))return n.children.splice(i,1),m.push(n),this._condense(m),this;h||n.leaf||!b(n,r)?a?(s++,n=a.children[s],h=!1):n=null:(m.push(n),B.push(s),s=0,a=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_build(t,i,n,a){const s=n-i+1;let h=this._maxEntries;if(s<=h){const l=new w(t.slice(i,n+1));return f(l,this._toBBox),l}a||(a=Math.ceil(Math.log(s)/Math.log(h)),h=Math.ceil(s/h**(a-1)));const r=new S([]);r.height=a;const o=Math.ceil(s/h),c=o*Math.ceil(Math.sqrt(h));R(t,i,n,c,this._compareMinX);for(let l=i;l<=n;l+=c){const u=Math.min(l+c-1,n);R(t,l,u,o,this._compareMinY);for(let p=l;p<=u;p+=o){const I=Math.min(p+o-1,u);r.children.push(this._build(t,p,I,a-1))}}return f(r,this._toBBox),r}_insert(t,i,n){const a=this._toBBox,s=n?t:a(t);m.clear();const h=q(s,this._data,i,m);for(h.children.push(t),_(h,s);i>=0&&m.data[i].children.length>this._maxEntries;)this._split(m,i),i--;k(s,m,i)}_split(t,i){const n=t.data[i],a=n.children.length,s=this._minEntries;this._chooseSplitAxis(n,s,a);const h=this._chooseSplitIndex(n,s,a);if(!h)return;const r=n.children.splice(h,n.children.length-h),o=n.leaf?new w(r):new S(r);o.height=n.height,f(n,this._toBBox),f(o,this._toBBox),i?t.data[i-1].children.push(o):this._splitRoot(n,o)}_splitRoot(t,i){this._data=new S([t,i]),this._data.height=t.height+1,f(this._data,this._toBBox)}_chooseSplitIndex(t,i,n){let a,s,h;a=s=1/0;for(let r=i;r<=n-i;r++){const o=x(t,0,r,this._toBBox),c=x(t,r,n,this._toBBox),l=$(o,c),u=E(o)+E(c);l<a?(a=l,h=r,s=u<s?u:s):l===a&&u<s&&(s=u,h=r)}return h}_chooseSplitAxis(t,i,n){const a=t.leaf?this._compareMinX:D,s=t.leaf?this._compareMinY:H;this._allDistMargin(t,i,n,a)<this._allDistMargin(t,i,n,s)&&t.children.sort(a)}_allDistMargin(t,i,n,a){t.children.sort(a);const s=this._toBBox,h=x(t,0,i,s),r=x(t,n-i,n,s);let o=M(h)+M(r);for(let c=i;c<n-i;c++){const l=t.children[c];_(h,t.leaf?s(l):l),o+=M(h)}for(let c=n-i-1;c>=i;c--){const l=t.children[c];_(r,t.leaf?s(l):l),o+=M(r)}return o}_condense(t){for(let i=t.length-1;i>=0;i--){const n=t.data[i];if(n.children.length===0)if(i>0){const a=t.data[i-1],s=a.children;s.splice(F(s,n,s.length,a.indexHint),1)}else this.clear();else f(n,this._toBBox)}}_initFormat(t){const i=["return a"," - b",";"];this._compareMinX=new Function("a","b",i.join(t[0])),this._compareMinY=new Function("a","b",i.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function q(e,t,i,n){for(;n.push(t),t.leaf!==!0&&n.length-1!==i;){let a,s=1/0,h=1/0;for(let r=0,o=t.children.length;r<o;r++){const c=t.children[r],l=E(c),u=G(e,c)-l;u<h?(h=u,s=l<s?l:s,a=c):u===h&&l<s&&(s=l,a=c)}t=a||t.children[0]}return t}function A(e,t){let i=e;for(Y.clear();i;){if(i.leaf===!0)for(const n of i.children)t(y(n));else Y.pushArray(i.children);i=Y.pop()??null}}function k(e,t,i){for(let n=i;n>=0;n--)_(t.data[n],e)}function f(e,t){x(e,0,e.children.length,t,e)}function x(e,t,i,n,a){a||(a=new w([])),a.minX=1/0,a.minY=1/0,a.maxX=-1/0,a.maxY=-1/0;for(let s,h=t;h<i;h++)s=e.children[h],_(a,e.leaf?n(s):s);return a}function _(e,t){e.minX=Math.min(e.minX,t.minX),e.minY=Math.min(e.minY,t.minY),e.maxX=Math.max(e.maxX,t.maxX),e.maxY=Math.max(e.maxY,t.maxY)}function D(e,t){return e.minX-t.minX}function H(e,t){return e.minY-t.minY}function E(e){return(e.maxX-e.minX)*(e.maxY-e.minY)}function M(e){return e.maxX-e.minX+(e.maxY-e.minY)}function G(e,t){return(Math.max(t.maxX,e.maxX)-Math.min(t.minX,e.minX))*(Math.max(t.maxY,e.maxY)-Math.min(t.minY,e.minY))}function $(e,t){const i=Math.max(e.minX,t.minX),n=Math.max(e.minY,t.minY),a=Math.min(e.maxX,t.maxX),s=Math.min(e.maxY,t.maxY);return Math.max(0,a-i)*Math.max(0,s-n)}function b(e,t){return e.minX<=t.minX&&e.minY<=t.minY&&t.maxX<=e.maxX&&t.maxY<=e.maxY}function X(e,t){return t.minX<=e.maxX&&t.minY<=e.maxY&&t.maxX>=e.minX&&t.maxY>=e.minY}function R(e,t,i,n,a){const s=[t,i];for(;s.length;){const h=s.pop(),r=s.pop();if(h-r<=n)continue;const o=r+Math.ceil((h-r)/n/2)*n;N(e,o,r,h,a),s.push(r,o,o,h)}}const d=new g,Y=new g,m=new g,B=new g({deallocator:void 0});class j{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class v extends j{constructor(){super(...arguments),this.height=1,this.indexHint=new J}}class w extends v{constructor(t){super(),this.children=t,this.leaf=!0}}class S extends v{constructor(t){super(),this.children=t,this.leaf=!1}}export{j as E,O as s};
