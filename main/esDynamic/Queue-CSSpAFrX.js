import{b as h,c as s}from"./main-C3PVbFgd.js";class r{constructor(t=e=>e.values().next().value){this._peeker=t,this._observable=new h,this._items=new Set}get length(){return s(this._observable),this._items.size}clear(){this.length!==0&&(this._items.clear(),this._observable.notify())}last(){if(this.length===0)return;let t;for(t of this._items);return t}peek(){if(this.length!==0)return this._peeker(this._items)}push(t){this.contains(t)||(this._items.add(t),this._observable.notify())}contains(t){return s(this._observable),this._items.has(t)}pop(){if(this.length===0)return;const t=this.peek();return this._items.delete(t),this._observable.notify(),t}popLast(){if(this.length===0)return;const t=this.last();return this._items.delete(t),this._observable.notify(),t}remove(t){this.contains(t)&&(this._items.delete(t),this._observable.notify())}filter(t){const e=this.length;return this._items.forEach(i=>{t(i)||this._items.delete(i)}),e!==this._items.size&&this._observable.notify(),this}*[Symbol.iterator](){s(this._observable),yield*this._items}}export{r as s};
