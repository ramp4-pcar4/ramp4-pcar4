import { i as o } from "./multiOriginJSONSupportUtils-DGETddQl.js";
function p(t) {
  t?.writtenProperties && t.writtenProperties.forEach(({ target: r, propName: e, newOrigin: i }) => {
    o(r) && i && r.originOf(e) !== i && r.updateOrigin(e, i);
  });
}
export {
  p as i
};
//# sourceMappingURL=originUtils-BLsWtgV9.js.map
