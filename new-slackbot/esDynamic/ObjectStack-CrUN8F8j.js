import { co as i } from "./main-BpIyUAdL.js";
class r {
  constructor(t) {
    this._allocator = t, this._items = [], this._itemsPtr = 0, this._grow();
  }
  get() {
    return this._itemsPtr === 0 && i(() => this._reset()), this._itemsPtr === this._items.length && this._grow(), this._items[this._itemsPtr++];
  }
  _reset() {
    const t = Math.min(3 * Math.max(8, this._itemsPtr), this._itemsPtr + 3 * s);
    this._items.length = Math.min(t, this._items.length), this._itemsPtr = 0;
  }
  _grow() {
    for (let t = 0; t < Math.max(8, Math.min(this._items.length, s)); t++) this._items.push(this._allocator());
  }
}
const s = 1024;
export {
  r as s
};
//# sourceMappingURL=ObjectStack-CrUN8F8j.js.map
