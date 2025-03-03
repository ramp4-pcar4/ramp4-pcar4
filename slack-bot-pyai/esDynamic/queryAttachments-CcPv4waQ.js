import { cv as d, cw as f, cx as i, cy as y, a2 as u } from "./main-DhLeoxL5.js";
function l(n) {
  const t = n.toJSON();
  return t.attachmentTypes && (t.attachmentTypes = t.attachmentTypes.join(",")), t.keywords && (t.keywords = t.keywords.join(",")), t.globalIds && (t.globalIds = t.globalIds.join(",")), t.objectIds && (t.objectIds = t.objectIds.join(",")), t.size && (t.size = t.size.join(",")), t;
}
function j(n, t) {
  const e = {};
  for (const s of t) {
    const { parentObjectId: a, parentGlobalId: o, attachmentInfos: r } = s;
    for (const c of r) {
      const { id: h } = c, p = d(f(`${n.path}/${a}/attachments/${h}`)), m = i.fromJSON(c);
      m.set({ url: p, parentObjectId: a, parentGlobalId: o }), e[a] ? e[a].push(m) : e[a] = [m];
    }
  }
  return e;
}
function b(n, t, e) {
  let s = { query: y({ ...n.query, f: "json", ...l(t) }) };
  return e && (s = { ...e, ...s, query: { ...e.query, ...s.query } }), u(n.path + "/queryAttachments", s).then((a) => a.data.attachmentGroups);
}
async function q(n, t, e) {
  const { objectIds: s } = t, a = [];
  for (const o of s) a.push(u(n.path + "/" + o + "/attachments", e));
  return Promise.all(a).then((o) => s.map((r, c) => ({ parentObjectId: r, attachmentInfos: o[c].data.attachmentInfos })));
}
export {
  b as executeAttachmentQuery,
  q as fetchAttachments,
  j as processAttachmentQueryResult
};
//# sourceMappingURL=queryAttachments-CcPv4waQ.js.map
