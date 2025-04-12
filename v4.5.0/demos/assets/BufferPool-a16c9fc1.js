import { t, h as has, r as r$1, K as c$1 } from './main-5658cd6e.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let a$1 = class a{constructor(t){if(this.next=null,!Array.isArray(t))return void(this.data=t);this.data=t[0];let e=this;for(let n=1;n<t.length;n++)e.next=new a([t[n]]),e=e.next;}*values(){let t=this;for(;t;)yield t.data,t=t.next;}forEach(t){let a=this;for(;a;)t(a.data),a=a.next;}find(t){return t(this.data)?this:this.next?.find(t)}max(t,a=this){const e=t(this.data)>t(a.data)?this:a;return this.next?this.next.max(t,e):e}remove(t,a=null){return this===t?a?(a.next=this.next,a):this.next:this.next?.remove(t,this)??null}get last(){return this.next?this.next.last:this}};class e{constructor(e){this._head=null,t(e)||(this._head=new a$1(e));}get head(){return this._head}maxAvailableSpace(){if(t(this._head))return 0;const a=this._head.max((t=>t.end-t.start));return a.data.end-a.data.start}firstFit(a){if(t(this._head))return null;let e=null,n=this._head;for(;n;){const t=n.data.end-n.data.start;if(t===a)return e?e.next=n.next:this._head=n.next,n.data.start;if(t>a){const t=n.data.start;return n.data.start+=a,t}e=n,n=n.next;}return null}free(e,n){const r=e+n;if(t(this._head)){const t=new a$1({start:e,end:r});return void(this._head=t)}if(r<=this._head.data.start){if(r===this._head.data.start)return void(this._head.data.start-=n);const t=new a$1({start:e,end:r});return t.next=this._head,void(this._head=t)}let s=this._head,d=s.next;for(;d;){if(d.data.start>=r){if(s.data.end===e){if(s.data.end+=n,s.data.end===d.data.start){const t=d.data.end-d.data.start;return s.data.end+=t,void(s.next=d.next)}return}if(d.data.start===r)return void(d.data.start-=n);const t=new a$1({start:e,end:r});return t.next=s.next,void(s.next=t)}s=d,d=d.next;}if(e===s.data.end)return void(s.data.end+=n);const i=new a$1({start:e,end:r});s.next=i;}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
const a=has("esri-2d-log-allocations");class i{constructor(t,e){this._array=t,this._pool=e;}get array(){return this._array}get length(){return this._array.length}static create(t,e){const s=e.acquire(t);return new i(s,e)}expand(t){const e=this._pool.acquire(t);e.set(this._array),this._pool.release(this._array),this._array=e;}destroy(){this._pool.release(this._array);}set(t,e){this._array.set(t._array,e);}slice(){const t=this._pool.acquire(this._array.byteLength);return t.set(this._array),new i(t,this._pool)}}class o{constructor(){this._data=new ArrayBuffer(o.BYTE_LENGTH),this._freeList=new e({start:0,end:this._data.byteLength});}static get BYTE_LENGTH(){return 64e6}get buffer(){return this._data}allocate(t$1){const e=this._freeList.firstFit(t$1);return t(e)?null:new Uint32Array(this._data,e,t$1/Uint32Array.BYTES_PER_ELEMENT)}free(t){this._freeList.free(t.byteOffset,t.byteLength);}}class n{constructor(){this._bytesAllocated=0,this._pages=[],this._pagesByBuffer=new Map,this._addPage();}destroy(){this._pages=[],this._pagesByBuffer=null;}get _bytesTotal(){return this._pages.length*o.BYTE_LENGTH}acquire(s){if(this._bytesAllocated+=s,a&&console.log(`Allocating ${s}, (${this._bytesAllocated} / ${this._bytesTotal})`),s>o.BYTE_LENGTH)return new Uint32Array(s/Uint32Array.BYTES_PER_ELEMENT);for(const e of this._pages){const r=e.allocate(s);if(r$1(r))return r}return c$1(this._addPage().allocate(s),"Expected to allocate page")}release(t){this._bytesAllocated-=t.byteLength,a&&console.log(`Freeing ${t.byteLength}, (${this._bytesAllocated} / ${this._bytesTotal})`);const e=this._pagesByBuffer.get(t.buffer);e&&e.free(t);}_addPage(){const t=new o;return this._pages.push(t),this._pagesByBuffer.set(t.buffer,t),t}}

export { a$1 as a, e, i, n };
