import { dK as n, s as c, aa as s } from "./main-C4pF0E7B.js";
import { l as i } from "./MeshVertexAttributes-AtSRJZD7.js";
import { M as m } from "./vertexSpaceConversion-BDB8iBSZ.js";
async function u(e, t, a) {
  await Promise.resolve(), n(a);
  const r = m(e, t);
  if (!r) throw new c("meshUtils:convertVertexSpace()", "Failed to convert to provided vertex space due to projection errors");
  const o = e.cloneAndModifyVertexAttributes(new i({ ...r, uv: s(e.vertexAttributes.uv), color: s(e.vertexAttributes.color) }), t);
  return o.transform = null, o;
}
export {
  u as convertMeshVertexSpace
};
//# sourceMappingURL=convertMeshVertexSpace-CozYlA_3.js.map
