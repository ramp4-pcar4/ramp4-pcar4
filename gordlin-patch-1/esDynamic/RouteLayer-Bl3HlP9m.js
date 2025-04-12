import { N as t, O as s, lC as C, P as I, b_ as j, e6 as V, e4 as he, e7 as Xe, dN as R, d$ as N, et as q, s as M, bY as fe, a2 as re, l9 as Se, z as et, bX as xe, C as Fe, eU as Ue, a6 as Ee, ap as K, aS as be, aU as Ge, Y as F, bh as W, b6 as qe, ao as tt, nN as rt, dS as Pe, kd as ot, eK as st, b$ as it, V as A, dV as nt, dZ as at, dX as lt, dY as ut, d_ as pt, b2 as ct, es as yt, aT as dt, cV as Ae, a4 as Oe, mA as mt, I as ft, a0 as ht, Q as vt, f as wt, K as gt, gt as St, Z as bt, dG as Tt, b9 as Bt, j2 as Nt, e8 as Pt } from "./main-BEi6lHs4.js";
import { i as $t } from "./originUtils-BLsWtgV9.js";
import { U as Y, y as $e, s as Rt, R as It, r as We, b as Re, d as At, n as Ot, o as Lt, w as jt, S as Dt, D as Le, e as Mt, k as Ct, i as _t, h as kt, l as Jt, m as oe, c as se, O as Q, f as X, j as ee, a as te, g as le, p as xt } from "./Stop-Bx9upCnV.js";
let E = class extends j {
  constructor(r) {
    super(r), this.break = new V({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.first = new V({ color: [0, 255, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.unlocated = new V({ color: [255, 0, 0], size: 12, outline: { color: [255, 255, 255], width: 3 } }), this.last = new V({ color: [255, 0, 0], size: 20, outline: { color: [255, 255, 255], width: 4 } }), this.middle = new V({ color: [51, 51, 51], size: 12, outline: { color: [0, 122, 194], width: 3 } }), this.waypoint = new V({ color: [255, 255, 255], size: 12, outline: { color: [0, 122, 194], width: 3 } });
  }
};
t([s({ types: C })], E.prototype, "break", void 0), t([s({ types: C })], E.prototype, "first", void 0), t([s({ types: C })], E.prototype, "unlocated", void 0), t([s({ types: C })], E.prototype, "last", void 0), t([s({ types: C })], E.prototype, "middle", void 0), t([s({ types: C })], E.prototype, "waypoint", void 0), E = t([I("esri.layers.support.RouteStopSymbols")], E);
const Ze = E;
let J = class extends j {
  constructor(r) {
    super(r), this.directionLines = new he({ color: [0, 122, 194], width: 6 }), this.directionPoints = new V({ color: [255, 255, 255], size: 6, outline: { color: [0, 122, 194], width: 2 } }), this.pointBarriers = new V({ style: "x", size: 10, outline: { color: [255, 0, 0], width: 3 } }), this.polygonBarriers = new Xe({ color: [255, 170, 0, 0.6], outline: { width: 7.5, color: [255, 0, 0, 0.6] } }), this.polylineBarriers = new he({ width: 7.5, color: [255, 85, 0, 0.7] }), this.routeInfo = new he({ width: 8, color: [20, 89, 127] }), this.stops = new Ze();
  }
};
t([s({ types: C })], J.prototype, "directionLines", void 0), t([s({ types: C })], J.prototype, "directionPoints", void 0), t([s({ types: C })], J.prototype, "pointBarriers", void 0), t([s({ types: C })], J.prototype, "polygonBarriers", void 0), t([s({ types: C })], J.prototype, "polylineBarriers", void 0), t([s({ types: C })], J.prototype, "routeInfo", void 0), t([s({ type: Ze })], J.prototype, "stops", void 0), J = t([I("esri.layers.support.RouteSymbols")], J);
const Ve = J;
let _ = class extends j {
  constructor(r) {
    super(r), this.dataType = null, this.name = null, this.parameterNames = null, this.restrictionUsageParameterName = null, this.timeNeutralAttributeName = null, this.trafficSupport = null, this.units = null, this.usageType = null;
  }
};
t([s({ type: String })], _.prototype, "dataType", void 0), t([R(Y, { ignoreUnknown: !1 })], _.prototype, "name", void 0), t([s({ type: [String] })], _.prototype, "parameterNames", void 0), t([s({ type: String })], _.prototype, "restrictionUsageParameterName", void 0), t([R($e, { ignoreUnknown: !1 })], _.prototype, "timeNeutralAttributeName", void 0), t([s({ type: String })], _.prototype, "trafficSupport", void 0), t([R(Rt)], _.prototype, "units", void 0), t([R(It)], _.prototype, "usageType", void 0), _ = t([I("esri.rest.support.NetworkAttribute")], _);
const Ft = _;
let Z = class extends j {
  constructor(r) {
    super(r), this.buildTime = null, this.name = null, this.networkAttributes = null, this.networkSources = null, this.state = null;
  }
};
t([s({ type: Number })], Z.prototype, "buildTime", void 0), t([s({ type: String })], Z.prototype, "name", void 0), t([s({ type: [Ft] })], Z.prototype, "networkAttributes", void 0), t([s()], Z.prototype, "networkSources", void 0), t([s({ type: String })], Z.prototype, "state", void 0), Z = t([I("esri.rest.support.NetworkDataset")], Z);
const Ut = Z;
let $ = class extends j {
  constructor(r) {
    super(r), this.accumulateAttributeNames = null, this.attributeParameterValues = null, this.currentVersion = null, this.defaultTravelMode = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsSupportedLanguages = null, this.directionsTimeAttribute = null, this.hasZ = null, this.impedance = null, this.networkDataset = null, this.supportedTravelModes = null;
  }
  readAccumulateAttributes(r) {
    return r == null ? null : r.map((o) => Y.fromJSON(o));
  }
  writeAccumulateAttributes(r, o, i) {
    r?.length && (o[i] = r.map((n) => Y.toJSON(n)));
  }
  get capabilities() {
    return { supportsNow: (this.currentVersion ?? 10) >= 10.81 };
  }
  readDefaultTravelMode(r, o) {
    const i = o.supportedTravelModes?.find(({ id: n }) => n === o.defaultTravelMode) ?? o.supportedTravelModes?.find(({ itemId: n }) => n === o.defaultTravelMode);
    return i ? Re.fromJSON(i) : null;
  }
};
t([s()], $.prototype, "accumulateAttributeNames", void 0), t([N("accumulateAttributeNames")], $.prototype, "readAccumulateAttributes", null), t([q("accumulateAttributeNames")], $.prototype, "writeAccumulateAttributes", null), t([s()], $.prototype, "attributeParameterValues", void 0), t([s()], $.prototype, "capabilities", null), t([s()], $.prototype, "currentVersion", void 0), t([s()], $.prototype, "defaultTravelMode", void 0), t([N("defaultTravelMode", ["defaultTravelMode", "supportedTravelModes"])], $.prototype, "readDefaultTravelMode", null), t([s()], $.prototype, "directionsLanguage", void 0), t([R(We)], $.prototype, "directionsLengthUnits", void 0), t([s()], $.prototype, "directionsSupportedLanguages", void 0), t([R($e, { ignoreUnknown: !1 })], $.prototype, "directionsTimeAttribute", void 0), t([s()], $.prototype, "hasZ", void 0), t([R(Y, { ignoreUnknown: !1 })], $.prototype, "impedance", void 0), t([s({ type: Ut })], $.prototype, "networkDataset", void 0), t([s({ type: [Re] })], $.prototype, "supportedTravelModes", void 0), $ = t([I("esri.rest.support.NetworkServiceDescription")], $);
const Et = $, Gt = () => Fe.getLogger("esri.rest.networkService");
function ue(e, r, o, i) {
  i[o] = [r.length, r.length + e.length], e.forEach((n) => {
    r.push(n.geometry);
  });
}
function qt(e, r) {
  for (let o = 0; o < r.length; o++) {
    const i = e[r[o]];
    if (i && i.length) for (const n of i) n.z = void 0;
  }
  Gt().warnOnce(`The remote Network Analysis service is powered by a network dataset which is not Z-aware.
Z-coordinates of the input geometry are ignored.`);
}
function Wt(e, r) {
  for (let o = 0; o < r.length; o++) {
    const i = e[r[o]];
    if (i && i.length) {
      for (const n of i) if (n != null && n.hasZ) return !0;
    }
  }
  return !1;
}
async function ze(e, r, o) {
  if (!e) throw new M("network-service:missing-url", "Url to Network service is missing");
  const i = fe({ f: "json", token: r }, o), { data: n } = await re(e, i), y = n.currentVersion >= 10.4 ? Vt(e, r, o) : Zt(e, o), { defaultTravelMode: u, supportedTravelModes: d } = await y;
  return n.defaultTravelMode = u, n.supportedTravelModes = d, Et.fromJSON(n);
}
async function Zt(e, r) {
  const o = fe({ f: "json" }, r), { data: i } = await re(e.replace(/\/rest\/.*$/i, "/info"), o);
  if (!i?.owningSystemUrl) return { supportedTravelModes: [], defaultTravelMode: null };
  const { owningSystemUrl: n } = i, y = Se(n) + "/sharing/rest/portals/self", { data: u } = await re(y, o), d = et("helperServices.routingUtilities.url", u);
  if (!d) return { supportedTravelModes: [], defaultTravelMode: null };
  const g = xe(n), h = /\/solve$/i.test(g.path) ? "Route" : /\/solveclosestfacility$/i.test(g.path) ? "ClosestFacility" : "ServiceAreas", a = fe({ f: "json", serviceName: h }, r), S = Se(d) + "/GetTravelModes/execute", P = await re(S, a), T = [];
  let m = null;
  if (P?.data?.results?.length) {
    const f = P.data.results;
    for (const w of f) if (w.paramName === "supportedTravelModes") {
      if (w.value?.features) {
        for (const { attributes: l } of w.value.features) if (l) {
          const B = JSON.parse(l.TravelMode);
          T.push(B);
        }
      }
    } else w.paramName === "defaultTravelMode" && (m = w.value);
  }
  return { supportedTravelModes: T, defaultTravelMode: m };
}
async function Vt(e, r, o) {
  try {
    const i = fe({ f: "json", token: r }, o), n = Se(e) + "/retrieveTravelModes", { data: { supportedTravelModes: y, defaultTravelMode: u } } = await re(n, i);
    return { supportedTravelModes: y, defaultTravelMode: u };
  } catch (i) {
    throw new M("network-service:retrieveTravelModes", "Could not get to the NAServer's retrieveTravelModes.", { error: i });
  }
}
const je = new Ue({ esriJobMessageTypeInformative: "informative", esriJobMessageTypeProcessDefinition: "process-definition", esriJobMessageTypeProcessStart: "process-start", esriJobMessageTypeProcessStop: "process-stop", esriJobMessageTypeWarning: "warning", esriJobMessageTypeError: "error", esriJobMessageTypeEmpty: "empty", esriJobMessageTypeAbort: "abort" });
let ie = class extends j {
  constructor(r) {
    super(r), this.description = null, this.type = null;
  }
};
t([s({ type: String, json: { write: !0 } })], ie.prototype, "description", void 0), t([s({ type: String, json: { read: je.read, write: je.write } })], ie.prototype, "type", void 0), ie = t([I("esri.rest.support.GPMessage")], ie);
const zt = ie, De = new Ue({ 0: "informative", 1: "process-definition", 2: "process-start", 3: "process-stop", 50: "warning", 100: "error", 101: "empty", 200: "abort" });
let de = class extends zt {
  constructor(r) {
    super(r), this.type = null;
  }
};
t([s({ type: String, json: { read: De.read, write: De.write } })], de.prototype, "type", void 0), de = t([I("esri.rest.support.NAMessage")], de);
const Kt = de;
let ne = class extends j {
  constructor(r) {
    super(r);
  }
};
t([s({ json: { read: { source: "string" } } })], ne.prototype, "text", void 0), t([R(At, { name: "stringType" })], ne.prototype, "type", void 0), ne = t([I("esri.rest.support.DirectionsString")], ne);
const Ke = ne;
let G = class extends j {
  constructor(r) {
    super(r), this.arriveTime = null, this.arriveTimeOffset = null, this.geometry = null, this.strings = null;
  }
  readArriveTimeOffset(r, o) {
    return Ot(o.ETA, o.arriveTimeUTC);
  }
  readGeometry(r, o) {
    return Ee.fromJSON(o.point);
  }
};
t([s({ type: Date, json: { read: { source: "arriveTimeUTC" } } })], G.prototype, "arriveTime", void 0), t([s()], G.prototype, "arriveTimeOffset", void 0), t([N("arriveTimeOffset", ["arriveTimeUTC", "ETA"])], G.prototype, "readArriveTimeOffset", null), t([s({ type: Ee })], G.prototype, "geometry", void 0), t([N("geometry", ["point"])], G.prototype, "readGeometry", null), t([s({ type: [Ke] })], G.prototype, "strings", void 0), G = t([I("esri.rest.support.DirectionsEvent")], G);
const Yt = G;
function Ht(e) {
  if (e == null || e === "") return null;
  let r = 0, o = 0, i = 0, n = 0;
  const y = [];
  let u, d, g, h, a, S, P, T, m = 0, f = 0, w = 0;
  if (a = e.match(/((\+|\-)[^\+\-\|]+|\|)/g), a || (a = []), parseInt(a[m], 32) === 0) {
    m = 2;
    const l = parseInt(a[m], 32);
    m++, S = parseInt(a[m], 32), m++, 1 & l && (f = a.indexOf("|") + 1, P = parseInt(a[f], 32), f++), 2 & l && (w = a.indexOf("|", f) + 1, T = parseInt(a[w], 32), w++);
  } else S = parseInt(a[m], 32), m++;
  for (; m < a.length && a[m] !== "|"; ) {
    u = parseInt(a[m], 32) + r, m++, r = u, d = parseInt(a[m], 32) + o, m++, o = d;
    const l = [u / S, d / S];
    f && (h = parseInt(a[f], 32) + i, f++, i = h, l.push(h / P)), w && (g = parseInt(a[w], 32) + n, w++, n = g, l.push(g / T)), y.push(l);
  }
  return { paths: [y], hasZ: f > 0, hasM: w > 0 };
}
let H = class extends K {
  constructor(e) {
    super(e), this.events = null, this.strings = null;
  }
  readGeometry(e, r) {
    const o = Ht(r.compressedGeometry);
    return o != null ? be.fromJSON(o) : null;
  }
};
t([s({ type: [Yt] })], H.prototype, "events", void 0), t([N("geometry", ["compressedGeometry"])], H.prototype, "readGeometry", null), t([s({ type: [Ke] })], H.prototype, "strings", void 0), H = t([I("esri.rest.support.DirectionsFeature")], H);
const Qt = H;
function Xt(e, r) {
  if (e.length === 0) return new be({ spatialReference: r });
  const o = [];
  for (const u of e) for (const d of u.paths) o.push(...d);
  const i = [];
  o.forEach((u, d) => {
    d !== 0 && u[0] === o[d - 1][0] && u[1] === o[d - 1][1] || i.push(u);
  });
  const { hasM: n, hasZ: y } = e[0];
  return new be({ hasM: n, hasZ: y, paths: [i], spatialReference: r });
}
let L = class extends F {
  constructor(r) {
    super(r), this.extent = null, this.features = [], this.geometryType = "polyline", this.routeId = null, this.routeName = null, this.totalDriveTime = null, this.totalLength = null, this.totalTime = null;
  }
  readFeatures(r, o) {
    if (!r) return [];
    const i = o.summary.envelope.spatialReference ?? o.spatialReference, n = i && W.fromJSON(i);
    return r.map((y) => {
      const u = Qt.fromJSON(y);
      if (u.geometry != null && (u.geometry.spatialReference = n), u.events != null) for (const d of u.events) d.geometry != null && (d.geometry.spatialReference = n);
      return u;
    });
  }
  get mergedGeometry() {
    return this.features ? Xt(this.features.map(({ geometry: r }) => r), this.extent.spatialReference) : null;
  }
  get strings() {
    return this.features.flatMap(({ strings: r }) => r).filter(qe);
  }
};
t([s({ type: Ge, json: { read: { source: "summary.envelope" } } })], L.prototype, "extent", void 0), t([s({ nonNullable: !0 })], L.prototype, "features", void 0), t([N("features")], L.prototype, "readFeatures", null), t([s()], L.prototype, "geometryType", void 0), t([s({ readOnly: !0 })], L.prototype, "mergedGeometry", null), t([s()], L.prototype, "routeId", void 0), t([s()], L.prototype, "routeName", void 0), t([s({ value: null, readOnly: !0 })], L.prototype, "strings", null), t([s({ json: { read: { source: "summary.totalDriveTime" } } })], L.prototype, "totalDriveTime", void 0), t([s({ json: { read: { source: "summary.totalLength" } } })], L.prototype, "totalLength", void 0), t([s({ json: { read: { source: "summary.totalTime" } } })], L.prototype, "totalTime", void 0), L = t([I("esri.rest.support.DirectionsFeatureSet")], L);
const er = L;
let D = class extends j {
  constructor(e) {
    super(e), this.directionLines = null, this.directionPoints = null, this.directions = null, this.route = null, this.routeName = null, this.stops = null, this.traversedEdges = null, this.traversedJunctions = null, this.traversedTurns = null;
  }
};
t([s({ type: F, json: { write: !0 } })], D.prototype, "directionLines", void 0), t([s({ type: F, json: { write: !0 } })], D.prototype, "directionPoints", void 0), t([s({ type: er, json: { write: !0 } })], D.prototype, "directions", void 0), t([s({ type: K, json: { write: !0 } })], D.prototype, "route", void 0), t([s({ type: String, json: { write: !0 } })], D.prototype, "routeName", void 0), t([s({ type: [K], json: { write: !0 } })], D.prototype, "stops", void 0), t([s({ type: F, json: { write: !0 } })], D.prototype, "traversedEdges", void 0), t([s({ type: F, json: { write: !0 } })], D.prototype, "traversedJunctions", void 0), t([s({ type: F, json: { write: !0 } })], D.prototype, "traversedTurns", void 0), D = t([I("esri.rest.support.RouteResult")], D);
const tr = D;
function ve(e) {
  return e ? F.fromJSON(e).features.filter(qe) : [];
}
let k = class extends j {
  constructor(r) {
    super(r), this.messages = null, this.pointBarriers = null, this.polylineBarriers = null, this.polygonBarriers = null, this.routeResults = null;
  }
  readPointBarriers(r, o) {
    return ve(o.barriers);
  }
  readPolylineBarriers(r) {
    return ve(r);
  }
  readPolygonBarriers(r) {
    return ve(r);
  }
};
t([s({ type: [Kt] })], k.prototype, "messages", void 0), t([s({ type: [K] })], k.prototype, "pointBarriers", void 0), t([N("pointBarriers", ["barriers"])], k.prototype, "readPointBarriers", null), t([s({ type: [K] })], k.prototype, "polylineBarriers", void 0), t([N("polylineBarriers")], k.prototype, "readPolylineBarriers", null), t([s({ type: [K] })], k.prototype, "polygonBarriers", void 0), t([N("polygonBarriers")], k.prototype, "readPolygonBarriers", null), t([s({ type: [tr] })], k.prototype, "routeResults", void 0), k = t([I("esri.rest.support.RouteSolveResult")], k);
const rr = k;
function pe(e) {
  return e instanceof F;
}
async function or(e, r, o) {
  const i = [], n = [], y = {}, u = {}, d = xe(e), { path: g } = d;
  pe(r.stops) && ue(r.stops.features, n, "stops.features", y), pe(r.pointBarriers) && ue(r.pointBarriers.features, n, "pointBarriers.features", y), pe(r.polylineBarriers) && ue(r.polylineBarriers.features, n, "polylineBarriers.features", y), pe(r.polygonBarriers) && ue(r.polygonBarriers.features, n, "polygonBarriers.features", y);
  const h = await tt(n);
  for (const T in y) {
    const m = y[T];
    i.push(T), u[T] = h.slice(m[0], m[1]);
  }
  if (Wt(u, i)) {
    let T = null;
    try {
      T = await ze(g, r.apiKey, o);
    } catch {
    }
    T && !T.hasZ && qt(u, i);
  }
  for (const T in u) u[T].forEach((m, f) => {
    rt(r, T)[f].geometry = m;
  });
  const a = { ...o, query: { ...d.query, ...Lt(r), f: "json" } }, S = g.endsWith("/solve") ? g : `${g}/solve`, { data: P } = await re(S, a);
  return sr(P);
}
function sr(e) {
  const { barriers: r, directionLines: o, directionPoints: i, directions: n, messages: y, polygonBarriers: u, polylineBarriers: d, routes: g, stops: h, traversedEdges: a, traversedJunctions: S, traversedTurns: P } = e, T = (l) => {
    const B = f.find((O) => O.routeName === l);
    if (B != null) return B;
    const b = { routeId: f.length + 1, routeName: l };
    return f.push(b), b;
  }, m = (l) => {
    const B = f.find((O) => O.routeId === l);
    if (B != null) return B;
    const b = { routeId: l, routeName: null };
    return f.push(b), b;
  }, f = [];
  g?.features.forEach((l, B) => {
    l.geometry.spatialReference = g.spatialReference ?? void 0;
    const b = l.attributes.Name, O = B + 1;
    f.push({ routeId: O, routeName: b, route: l });
  }), n?.forEach((l) => {
    const { routeName: B } = l;
    T(B).directions = l;
  });
  const w = (h?.features.every((l) => l.attributes.RouteName == null) ?? !1) && f.length > 0 ? f[0].routeName : null;
  return h?.features.forEach((l) => {
    l.geometry && (l.geometry.spatialReference ??= h.spatialReference ?? void 0);
    const B = w ?? l.attributes.RouteName, b = T(B);
    b.stops ??= [], b.stops.push(l);
  }), o?.features.forEach((l) => {
    const B = l.attributes.RouteID, b = m(B), { geometryType: O, spatialReference: U } = o;
    b.directionLines ??= { features: [], geometryType: O, spatialReference: U }, b.directionLines.features.push(l);
  }), i?.features.forEach((l) => {
    const B = l.attributes.RouteID, b = m(B), { geometryType: O, spatialReference: U } = i;
    b.directionPoints ??= { features: [], geometryType: O, spatialReference: U }, b.directionPoints.features.push(l);
  }), a?.features.forEach((l) => {
    const B = l.attributes.RouteID, b = m(B), { geometryType: O, spatialReference: U } = a;
    b.traversedEdges ??= { features: [], geometryType: O, spatialReference: U }, b.traversedEdges.features.push(l);
  }), S?.features.forEach((l) => {
    const B = l.attributes.RouteID, b = m(B), { geometryType: O, spatialReference: U } = S;
    b.traversedJunctions ??= { features: [], geometryType: O, spatialReference: U }, b.traversedJunctions.features.push(l);
  }), P?.features.forEach((l) => {
    const B = l.attributes.RouteID, b = m(B);
    b.traversedTurns ??= { features: [] }, b.traversedTurns.features.push(l);
  }), rr.fromJSON({ routeResults: f, barriers: r, polygonBarriers: u, polylineBarriers: d, messages: y });
}
const ir = { type: String, json: { read: { source: "token" }, write: { target: "token" } } };
let x = class extends Pe(j) {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null, this.geometry = null, this.geometryType = null, this.name = null, this.spatialRelationship = null, this.type = "layer", this.where = null;
  }
};
t([s({ type: Boolean, json: { write: !0 } })], x.prototype, "doNotLocateOnRestrictedElements", void 0), t([s({ types: ot, json: { read: st, write: !0 } })], x.prototype, "geometry", void 0), t([R(jt)], x.prototype, "geometryType", void 0), t([s({ type: String, json: { name: "layerName", write: !0 } })], x.prototype, "name", void 0), t([R(Dt, { name: "spatialRel" })], x.prototype, "spatialRelationship", void 0), t([s({ type: String, json: { write: !0 } })], x.prototype, "type", void 0), t([s({ type: String, json: { write: !0 } })], x.prototype, "where", void 0), x = t([I("esri.rest.support.DataLayer")], x);
const nr = x;
var Te;
let me = Te = class extends F {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null;
  }
  clone() {
    return new Te({ doNotLocateOnRestrictedElements: this.doNotLocateOnRestrictedElements, ...this.cloneProperties() });
  }
};
t([s({ type: Boolean, json: { write: !0 } })], me.prototype, "doNotLocateOnRestrictedElements", void 0), me = Te = t([I("esri.rest.support.NetworkFeatureSet")], me);
const ar = me;
let ae = class extends Pe(j) {
  constructor(e) {
    super(e), this.doNotLocateOnRestrictedElements = null, this.url = null;
  }
};
t([s({ type: Boolean, json: { write: !0 } })], ae.prototype, "doNotLocateOnRestrictedElements", void 0), t([s({ type: String, json: { write: !0 } })], ae.prototype, "url", void 0), ae = t([I("esri.rest.support.NetworkUrl")], ae);
const lr = ae;
var Be;
let p = Be = class extends Pe(j) {
  constructor(e) {
    super(e), this.accumulateAttributes = null, this.apiKey = null, this.attributeParameterValues = null, this.directionsLanguage = null, this.directionsLengthUnits = null, this.directionsOutputType = null, this.directionsStyleName = null, this.directionsTimeAttribute = null, this.findBestSequence = null, this.geometryPrecision = null, this.geometryPrecisionM = null, this.geometryPrecisionZ = null, this.ignoreInvalidLocations = null, this.impedanceAttribute = null, this.outputGeometryPrecision = null, this.outputGeometryPrecisionUnits = null, this.outputLines = "true-shape", this.outSpatialReference = null, this.overrides = null, this.pointBarriers = null, this.polygonBarriers = null, this.polylineBarriers = null, this.preserveFirstStop = null, this.preserveLastStop = null, this.preserveObjectID = null, this.restrictionAttributes = null, this.restrictUTurns = null, this.returnBarriers = !1, this.returnDirections = !1, this.returnPolygonBarriers = !1, this.returnPolylineBarriers = !1, this.returnRoutes = !0, this.returnStops = !1, this.returnTraversedEdges = null, this.returnTraversedJunctions = null, this.returnTraversedTurns = null, this.returnZ = !0, this.startTime = null, this.startTimeIsUTC = !0, this.stops = null, this.timeWindowsAreUTC = null, this.travelMode = null, this.useHierarchy = null, this.useTimeWindows = null;
  }
  static from(e) {
    return it(Be, e);
  }
  readAccumulateAttributes(e) {
    return e == null ? null : e.map((r) => Y.fromJSON(r));
  }
  writeAccumulateAttributes(e, r, o) {
    e?.length && (r[o] = e.map((i) => Y.toJSON(i)));
  }
  writePointBarriers(e, r, o) {
    ce(e, r, o);
  }
  writePolygonBarrier(e, r, o) {
    ce(e, r, o);
  }
  writePolylineBarrier(e, r, o) {
    ce(e, r, o);
  }
  readRestrictionAttributes(e) {
    return e == null ? null : e.map((r) => Le.fromJSON(r));
  }
  writeRestrictionAttributes(e, r, o) {
    e?.length && (r[o] = e.map((i) => Le.toJSON(i)));
  }
  readStartTime(e, r) {
    const { startTime: o } = r;
    return o == null ? null : o === "now" ? "now" : new Date(o);
  }
  writeStartTime(e, r) {
    e != null && (r.startTime = e === "now" ? "now" : e.getTime());
  }
  readStops(e, r) {
    return mr(r.stops);
  }
  writeStops(e, r, o) {
    ce(e, r, o);
  }
};
t([s({ type: [String], json: { name: "accumulateAttributeNames", write: !0 } })], p.prototype, "accumulateAttributes", void 0), t([N("accumulateAttributes")], p.prototype, "readAccumulateAttributes", null), t([q("accumulateAttributes")], p.prototype, "writeAccumulateAttributes", null), t([s(ir)], p.prototype, "apiKey", void 0), t([s({ json: { write: !0 } })], p.prototype, "attributeParameterValues", void 0), t([s({ type: String, json: { write: !0 } })], p.prototype, "directionsLanguage", void 0), t([R(We)], p.prototype, "directionsLengthUnits", void 0), t([R(Mt)], p.prototype, "directionsOutputType", void 0), t([R(Ct)], p.prototype, "directionsStyleName", void 0), t([R($e, { name: "directionsTimeAttributeName", ignoreUnknown: !1 })], p.prototype, "directionsTimeAttribute", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "findBestSequence", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecision", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecisionM", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "geometryPrecisionZ", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "ignoreInvalidLocations", void 0), t([R(Y, { name: "impedanceAttributeName", ignoreUnknown: !1 })], p.prototype, "impedanceAttribute", void 0), t([s({ type: Number, json: { write: !0 } })], p.prototype, "outputGeometryPrecision", void 0), t([R(_t)], p.prototype, "outputGeometryPrecisionUnits", void 0), t([R(kt)], p.prototype, "outputLines", void 0), t([s({ type: W, json: { name: "outSR", write: !0 } })], p.prototype, "outSpatialReference", void 0), t([s({ json: { write: !0 } })], p.prototype, "overrides", void 0), t([s({ json: { name: "barriers", write: !0 } })], p.prototype, "pointBarriers", void 0), t([q("pointBarriers")], p.prototype, "writePointBarriers", null), t([s({ json: { write: !0 } })], p.prototype, "polygonBarriers", void 0), t([q("polygonBarriers")], p.prototype, "writePolygonBarrier", null), t([s({ json: { write: !0 } })], p.prototype, "polylineBarriers", void 0), t([q("polylineBarriers")], p.prototype, "writePolylineBarrier", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveFirstStop", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveLastStop", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "preserveObjectID", void 0), t([s({ type: [String], json: { name: "restrictionAttributeNames", write: !0 } })], p.prototype, "restrictionAttributes", void 0), t([N("restrictionAttributes")], p.prototype, "readRestrictionAttributes", null), t([q("restrictionAttributes")], p.prototype, "writeRestrictionAttributes", null), t([R(Jt)], p.prototype, "restrictUTurns", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnDirections", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolygonBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnPolylineBarriers", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnRoutes", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnStops", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedEdges", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedJunctions", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnTraversedTurns", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "returnZ", void 0), t([s({ json: { write: !0 } })], p.prototype, "startTime", void 0), t([N("startTime")], p.prototype, "readStartTime", null), t([q("startTime")], p.prototype, "writeStartTime", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "startTimeIsUTC", void 0), t([s({ json: { write: !0 } })], p.prototype, "stops", void 0), t([N("stops")], p.prototype, "readStops", null), t([q("stops")], p.prototype, "writeStops", null), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "timeWindowsAreUTC", void 0), t([s({ type: Re, json: { write: !0 } })], p.prototype, "travelMode", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "useHierarchy", void 0), t([s({ type: Boolean, json: { write: !0 } })], p.prototype, "useTimeWindows", void 0), p = Be = t([I("esri.rest.support.RouteParameters")], p);
const ur = p;
function pr(e) {
  return e && "type" in e;
}
function cr(e) {
  return e && "features" in e && "doNotLocateOnRestrictedElements" in e;
}
function yr(e) {
  return e && "url" in e;
}
function dr(e) {
  return e && "features" in e;
}
function mr(e) {
  return pr(e) ? nr.fromJSON(e) : yr(e) ? lr.fromJSON(e) : cr(e) ? ar.fromJSON(e) : dr(e) ? F.fromJSON(e) : null;
}
function ce(e, r, o) {
  e != null && (r[o] = A.isCollection(e) ? { features: e.toArray().map((i) => i.toJSON()) } : e.toJSON());
}
function we(e) {
  return e.length ? e : null;
}
function Ne(e) {
  switch (e) {
    case "esriGeometryPoint":
      return { type: "esriSMS", style: "esriSMSCircle", size: 12, color: [0, 0, 0, 0], outline: Ne("esriGeometryPolyline") };
    case "esriGeometryPolyline":
      return { type: "esriSLS", style: "esriSLSSolid", width: 1, color: [0, 0, 0, 0] };
    case "esriGeometryPolygon":
      return { type: "esriSFS", style: "esriSFSNull", outline: Ne("esriGeometryPolyline") };
  }
}
function ye(e) {
  return "layers" in e;
}
function fr(e) {
  return e.declaredClass === "esri.rest.support.FeatureSet";
}
function hr(e) {
  return e.declaredClass === "esri.rest.support.NetworkFeatureSet";
}
function vr(e, r, o) {
  const i = r.networkDataset?.networkAttributes, n = i?.filter(({ usageType: c }) => c === "cost") ?? [], y = o.travelMode ?? r.defaultTravelMode;
  if (y == null) return void He().warn("route-layer:missing-travel-mode", "The routing service must have a default travel mode or one must be specified in the route parameter.");
  const { timeAttributeName: u, distanceAttributeName: d } = y, g = n.find(({ name: c }) => c === u), h = n.find(({ name: c }) => c === d), a = o.travelMode?.impedanceAttributeName ?? o.impedanceAttribute ?? r.impedance, S = g?.units, P = h?.units;
  if (!S || !P) throw new M("routelayer:unknown-impedance-units", "the units of either the distance or time impedance are unknown");
  const T = o.directionsLanguage ?? r.directionsLanguage, m = o.accumulateAttributes ?? r.accumulateAttributeNames ?? [], f = new Set(n.filter(({ name: c }) => c === u || c === d || c === a || c != null && m.includes(c)).map(({ name: c }) => c)), w = (c) => {
    for (const Ie in c) f.has(Ie) || delete c[Ie];
  };
  for (const c of e.pointBarriers) c.costs != null && (c.addedCost = c.costs[a] ?? 0, w(c.costs));
  for (const c of e.polygonBarriers) c.costs != null && (c.scaleFactor = c.costs[a] ?? 1, w(c.costs));
  for (const c of e.polylineBarriers) c.costs != null && (c.scaleFactor = c.costs[a] ?? 1, w(c.costs));
  const { routeInfo: l } = e, { findBestSequence: B, preserveFirstStop: b, preserveLastStop: O, startTimeIsUTC: U, timeWindowsAreUTC: Qe } = o;
  l.analysisSettings = new xt({ accumulateAttributes: m, directionsLanguage: T, findBestSequence: B, preserveFirstStop: b, preserveLastStop: O, startTimeIsUTC: U, timeWindowsAreUTC: Qe, travelMode: y }), l.totalDuration = z(l.totalCosts?.[u] ?? 0, S), l.totalDistance = ge(l.totalCosts?.[d] ?? 0, P), l.totalLateDuration = z(l.totalViolations?.[u] ?? 0, S), l.totalWaitDuration = z(l.totalWait?.[u] ?? 0, S), l.totalCosts != null && w(l.totalCosts), l.totalViolations != null && w(l.totalViolations), l.totalWait != null && w(l.totalWait);
  for (const c of e.stops) c.serviceCosts != null && (c.serviceDuration = z(c.serviceCosts[u] ?? 0, S), c.serviceDistance = ge(c.serviceCosts[d] ?? 0, P), w(c.serviceCosts)), c.cumulativeCosts != null && (c.cumulativeDuration = z(c.cumulativeCosts[u] ?? 0, S), c.cumulativeDistance = ge(c.cumulativeCosts[d] ?? 0, P), w(c.cumulativeCosts)), c.violations != null && (c.lateDuration = z(c.violations[u] ?? 0, S), w(c.violations)), c.wait != null && (c.waitDuration = z(c.wait[u] ?? 0, S), w(c.wait));
}
async function Me(e) {
  const r = W.WGS84;
  return await Tt(e.spatialReference, r), Bt(e, r);
}
function z(e, r) {
  switch (r) {
    case "seconds":
      return e / 60;
    case "hours":
      return 60 * e;
    case "days":
      return 60 * e * 24;
    default:
      return e;
  }
}
function ge(e, r) {
  return r === "decimal-degrees" || r === "points" || r === "unknown" ? e : Nt(e, r, "meters");
}
function wr(e) {
  const { attributes: r, geometry: o, popupTemplate: i, symbol: n } = e.toGraphic().toJSON();
  return { attributes: r, geometry: o, popupInfo: i, symbol: n };
}
const gr = A.ofType(oe), Sr = A.ofType(se), Ce = A.ofType(Q), _e = A.ofType(X), ke = A.ofType(ee), Je = A.ofType(te), Ye = "esri.layers.RouteLayer", He = () => Fe.getLogger(Ye);
let v = class extends nt(at(lt(ut(pt(Pt))))) {
  constructor(e) {
    super(e), this._cachedServiceDescription = null, this._featureCollection = null, this._type = "Feature Collection", this.defaultSymbols = new Ve(), this.directionLines = null, this.directionPoints = null, this.featureCollectionType = "route", this.legendEnabled = !1, this.maxScale = 0, this.minScale = 0, this.pointBarriers = new Ce(), this.polygonBarriers = new _e(), this.polylineBarriers = new ke(), this.routeInfo = null, this.spatialReference = W.WGS84, this.stops = new Je(), this.type = "route";
    const r = () => {
      this._setStopSymbol(this.stops);
    };
    this.addHandles(ct(() => this.stops, "change", r, { sync: !0, onListenerAdd: r }));
  }
  writeFeatureCollectionWebmap(e, r, o, i) {
    const n = [this._writePolygonBarriers(), this._writePolylineBarriers(), this._writePointBarriers(), this._writeRouteInfo(), this._writeDirectionLines(), this._writeDirectionPoints(), this._writeStops()].filter((d) => !!d), y = n.map((d, g) => g), u = i.origin === "web-map" ? "featureCollection.layers" : "layers";
    yt(u, n, r), r.opacity = this.opacity, r.visibility = this.visible, r.visibleLayers = y;
  }
  readDirectionLines(e, r) {
    return this._getNetworkFeatures(r, "DirectionLines", (o) => oe.fromGraphic(o));
  }
  readDirectionPoints(e, r) {
    return this._getNetworkFeatures(r, "DirectionPoints", (o) => se.fromGraphic(o));
  }
  get fullExtent() {
    const e = new Ge({ xmin: -180, ymin: -90, xmax: 180, ymax: 90, spatialReference: W.WGS84 });
    if (this.routeInfo?.geometry != null) return this.routeInfo.geometry.extent ?? e;
    if (this.stops == null) return e;
    const r = this.stops.filter((n) => n.geometry != null);
    if (r.length < 2) return e;
    const { spatialReference: o } = r.at(0).geometry;
    if (o == null) return e;
    const i = r.toArray().map((n) => {
      const y = n.geometry;
      return [y.x, y.y];
    });
    return new dt({ points: i, spatialReference: o }).extent;
  }
  readMaxScale(e, r) {
    return (ye(r) ? r.layers : r.featureCollection?.layers)?.find((n) => n.layerDefinition.maxScale != null)?.layerDefinition.maxScale ?? 0;
  }
  readMinScale(e, r) {
    return (ye(r) ? r.layers : r.featureCollection?.layers)?.find((n) => n.layerDefinition.minScale != null)?.layerDefinition.minScale ?? 0;
  }
  readPointBarriers(e, r) {
    return this._getNetworkFeatures(r, "Barriers", (o) => Q.fromGraphic(o));
  }
  readPolygonBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolygonBarriers", (o) => X.fromGraphic(o));
  }
  readPolylineBarriers(e, r) {
    return this._getNetworkFeatures(r, "PolylineBarriers", (o) => ee.fromGraphic(o));
  }
  readRouteInfo(e, r) {
    const o = this._getNetworkFeatures(r, "RouteInfo", (i) => le.fromGraphic(i));
    return o.length > 0 ? o.at(0) : null;
  }
  readSpatialReference(e, r) {
    const o = ye(r) ? r.layers : r.featureCollection?.layers;
    if (!o?.length) return W.WGS84;
    const { layerDefinition: i, featureSet: n } = o[0], y = n.features[0], u = y?.geometry?.spatialReference ?? n.spatialReference ?? i.spatialReference ?? i.extent.spatialReference ?? Ae;
    return W.fromJSON(u);
  }
  readStops(e, r) {
    return this._getNetworkFeatures(r, "Stops", (o) => te.fromGraphic(o), (o) => this._setStopSymbol(o));
  }
  get title() {
    return this.routeInfo?.name != null ? this.routeInfo.name : "Route";
  }
  set title(e) {
    this._overrideIfSome("title", e);
  }
  get url() {
    return Oe.routeServiceUrl;
  }
  set url(e) {
    e != null ? this._set("url", mt(e, He())) : this._set("url", Oe.routeServiceUrl);
  }
  load(e) {
    return this.addResolvingPromise(this.loadFromPortal({ supportedTypes: ["Feature Collection"] }, e)), Promise.resolve(this);
  }
  removeAll() {
    this.removeResult(), this.pointBarriers.removeAll(), this.polygonBarriers.removeAll(), this.polylineBarriers.removeAll(), this.stops.removeAll();
  }
  removeResult() {
    this.directionLines != null && (this.directionLines.removeAll(), this._set("directionLines", null)), this.directionPoints != null && (this.directionPoints.removeAll(), this._set("directionPoints", null)), this.routeInfo != null && this._set("routeInfo", null);
  }
  async save() {
    await this.load();
    const { fullExtent: e, portalItem: r } = this;
    if (!r) throw new M("routelayer:portal-item-not-set", "save() requires to the layer to have a portal item");
    if (!r.id) throw new M("routelayer:portal-item-not-saved", "Please use saveAs() first to save the routelayer");
    if (r.type !== "Feature Collection") throw new M("routelayer:portal-item-wrong-type", 'Portal item needs to have type "Feature Collection"');
    if (this.routeInfo == null) throw new M("routelayer:route-unsolved", "save() requires a solved route");
    const { portal: o } = r;
    await o.signIn(), o.user || await r.reload();
    const { itemUrl: i, itemControl: n } = r;
    if (n !== "admin" && n !== "update") throw new M("routelayer:insufficient-permissions", "To save this layer, you need to be the owner or an administrator of your organization");
    const y = { messages: [], origin: "portal-item", portal: o, url: i ? ft(i) : void 0, writtenProperties: [] }, u = this.write(void 0, y);
    return r.extent = await Me(e), r.title = this.title, await r.update({ data: u }), r;
  }
  async saveAs(e, r = {}) {
    if (await this.load(), this.routeInfo == null) throw new M("routelayer:route-unsolved", "saveAs() requires a solved route");
    const o = ht.from(e).clone();
    o.extent ??= await Me(this.fullExtent), o.id = null, o.portal ??= vt.getDefault(), o.title ??= this.title, o.type = "Feature Collection", o.typeKeywords = ["Data", "Feature Collection", wt.MULTI_LAYER, "Route Layer"];
    const { portal: i } = o, n = { messages: [], origin: "portal-item", portal: i, url: null, writtenProperties: [] };
    await i.signIn();
    const y = r?.folder, u = this.write(void 0, n);
    return await i.user?.addItem({ item: o, folder: y, data: u }), this.portalItem = o, $t(n), n.portalItem = o, o;
  }
  async solve(e, r) {
    const o = e?.stops ?? this.stops, i = e?.pointBarriers ?? we(this.pointBarriers), n = e?.polylineBarriers ?? we(this.polylineBarriers), y = e?.polygonBarriers ?? we(this.polygonBarriers);
    if (o == null) throw new M("routelayer:undefined-stops", "the route layer must have stops defined in the route parameters.");
    if ((fr(o) || hr(o)) && o.features.length < 2 || A.isCollection(o) && o.length < 2) throw new M("routelayer:insufficent-stops", "the route layer must have two or more stops to solve a route.");
    if (A.isCollection(o)) for (const f of o) f.routeName = null;
    const u = e?.apiKey, d = this.url, g = await this._getServiceDescription(d, u, r), h = e?.travelMode ?? g.defaultTravelMode, a = e?.accumulateAttributes ?? [];
    h != null && (a.push(h.distanceAttributeName), h.timeAttributeName && a.push(h.timeAttributeName));
    const S = { accumulateAttributes: a, directionsOutputType: "featuresets", ignoreInvalidLocations: !0, pointBarriers: i, polylineBarriers: n, polygonBarriers: y, preserveFirstStop: !0, preserveLastStop: !0, returnBarriers: !!i, returnDirections: !0, returnPolygonBarriers: !!y, returnPolylineBarriers: !!n, returnRoutes: !0, returnStops: !0, stops: o }, P = ur.from(e ?? {});
    let T;
    P.set(S);
    try {
      T = await or(d, P, r);
    } catch (f) {
      throw gt(f) ? f : new M("routelayer:failed-route-request", "the routing request failed", { error: f });
    }
    const m = this._toRouteLayerSolution(T);
    return this._isOverridden("title") || (this.title = m.routeInfo.name ?? "Route"), vr(m, g, P), m;
  }
  update(e) {
    const { stops: r, directionLines: o, directionPoints: i, pointBarriers: n, polylineBarriers: y, polygonBarriers: u, routeInfo: d } = e;
    this.set({ stops: r, pointBarriers: n, polylineBarriers: y, polygonBarriers: u }), this._set("directionLines", o), this._set("directionPoints", i), this._set("routeInfo", d), d.geometry != null && (this.spatialReference = d.geometry.spatialReference);
  }
  _getNetworkFeatures(e, r, o, i) {
    const n = ye(e) ? e.layers : e.featureCollection?.layers, y = n?.find((f) => f.layerDefinition.name === r);
    if (y == null) return new A();
    const { layerDefinition: u, popupInfo: d, featureSet: g } = y, h = u.drawingInfo.renderer, { features: a } = g, S = g.spatialReference ?? u.spatialReference ?? u.extent.spatialReference ?? Ae, P = h && St(h), T = W.fromJSON(S), m = a.map((f) => {
      const w = K.fromJSON(f);
      w.geometry != null && f.geometry != null && f.geometry.spatialReference == null && (w.geometry.spatialReference = T);
      const l = o(w);
      return l.symbol ??= P?.getSymbol(w) ?? this._getNetworkSymbol(r), l.popupTemplate ??= d && bt.fromJSON(d), l;
    });
    return i && m.some((f) => !f.symbol) && i(m), new A(m);
  }
  _getNetworkSymbol(e) {
    switch (e) {
      case "Barriers":
        return this.defaultSymbols.pointBarriers;
      case "DirectionPoints":
        return this.defaultSymbols.directionPoints;
      case "DirectionLines":
        return this.defaultSymbols.directionLines;
      case "PolylineBarriers":
        return this.defaultSymbols.polylineBarriers;
      case "PolygonBarriers":
        return this.defaultSymbols.polygonBarriers;
      case "RouteInfo":
        return this.defaultSymbols.routeInfo;
      case "Stops":
        return null;
    }
  }
  async _getServiceDescription(e, r, o) {
    if (this._cachedServiceDescription != null && this._cachedServiceDescription.url === e) return this._cachedServiceDescription.serviceDescription;
    const i = await ze(e, r, o);
    return this._cachedServiceDescription = { serviceDescription: i, url: e }, i;
  }
  _setStopSymbol(e) {
    if (!e || e.length === 0 || this.defaultSymbols.stops == null || e.every(({ symbol: a }) => a != null)) return;
    const { first: r, last: o, middle: i, unlocated: n, waypoint: y, break: u } = this.defaultSymbols.stops;
    if (this.routeInfo == null || e.length === 1) return void e.forEach((a, S) => {
      switch (S) {
        case 0:
          a.symbol = r;
          break;
        case e.length - 1:
          a.symbol = o;
          break;
        default:
          a.symbol = i;
      }
    });
    const d = e.map(({ sequence: a }) => a).filter((a) => a != null), g = Math.min(...d), h = Math.max(...d);
    for (const a of e) a.sequence !== g ? a.sequence !== h ? a.status === "ok" || a.status === "not-located-on-closest" ? a.locationType !== "waypoint" ? a.locationType !== "break" ? a.symbol = i : a.symbol = u : a.symbol = y : a.symbol = n : a.symbol = o : a.symbol = r;
  }
  _toRouteLayerSolution(e) {
    const r = e.routeResults[0].stops?.map((h) => te.fromJSON(h.toJSON()));
    this._setStopSymbol(r);
    const o = new Je(r), i = new _e(e.polygonBarriers?.map((h) => {
      const a = X.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.polygonBarriers, a;
    })), n = new ke(e.polylineBarriers?.map((h) => {
      const a = ee.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.polylineBarriers, a;
    })), y = new Ce(e.pointBarriers?.map((h) => {
      const a = Q.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.pointBarriers, a;
    })), u = e.routeResults[0].route?.toJSON(), d = le.fromJSON(u);
    d.symbol = this.defaultSymbols.routeInfo;
    const g = new Sr(e.routeResults[0].directionPoints?.features.map((h) => {
      const a = se.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.directionPoints, a;
    }));
    return { directionLines: new gr(e.routeResults[0].directionLines?.features.map((h) => {
      const a = oe.fromJSON(h.toJSON());
      return a.symbol = this.defaultSymbols.directionLines, a;
    })), directionPoints: g, pointBarriers: y, polygonBarriers: i, polylineBarriers: n, routeInfo: d, stops: o };
  }
  _writeDirectionLines() {
    return this._writeNetworkFeatures(this.directionLines, this.defaultSymbols.directionLines, "esriGeometryPolyline", oe.fields, oe.popupInfo, "DirectionLines", "Direction Lines");
  }
  _writeDirectionPoints() {
    return this._writeNetworkFeatures(this.directionPoints, this.defaultSymbols.directionPoints, "esriGeometryPoint", se.fields, se.popupInfo, "DirectionPoints", "Direction Points");
  }
  _writeNetworkFeatures(e, r, o, i, n, y, u) {
    if (!e?.length) return null;
    const d = this.spatialReference.toJSON(), { fullExtent: g, maxScale: h, minScale: a } = this;
    return { featureSet: { features: e.toArray().map((S) => wr(S)), geometryType: o, spatialReference: d }, layerDefinition: { capabilities: "Query,Update,Editing", drawingInfo: { renderer: { type: "simple", symbol: r != null ? r.toJSON() : Ne(o) } }, extent: g.toJSON(), fields: i, geometryType: o, hasM: !1, hasZ: !1, maxScale: h, minScale: a, name: y, objectIdField: "ObjectID", spatialReference: d, title: u, type: "Feature Layer", typeIdField: "" }, popupInfo: n };
  }
  _writePointBarriers() {
    return this._writeNetworkFeatures(this.pointBarriers, this.defaultSymbols.pointBarriers, "esriGeometryPoint", Q.fields, Q.popupInfo, "Barriers", "Point Barriers");
  }
  _writePolygonBarriers() {
    return this._writeNetworkFeatures(this.polygonBarriers, this.defaultSymbols.polygonBarriers, "esriGeometryPolygon", X.fields, X.popupInfo, "PolygonBarriers", "Polygon Barriers");
  }
  _writePolylineBarriers() {
    return this._writeNetworkFeatures(this.polylineBarriers, this.defaultSymbols.polylineBarriers, "esriGeometryPolyline", ee.fields, ee.popupInfo, "PolylineBarriers", "Line Barriers");
  }
  _writeRouteInfo() {
    return this._writeNetworkFeatures(this.routeInfo != null ? new A([this.routeInfo]) : null, this.defaultSymbols.routeInfo, "esriGeometryPolyline", le.fields, le.popupInfo, "RouteInfo", "Route Details");
  }
  _writeStops() {
    const e = this._writeNetworkFeatures(this.stops, null, "esriGeometryPoint", te.fields, te.popupInfo, "Stops", "Stops");
    if (e == null) return null;
    const { stops: r } = this.defaultSymbols, o = r?.first?.toJSON(), i = r?.middle?.toJSON(), n = r?.last?.toJSON();
    return e.layerDefinition.drawingInfo.renderer = { type: "uniqueValue", field1: "Sequence", defaultSymbol: i, uniqueValueInfos: [{ value: "1", symbol: o, label: "First Stop" }, { value: `${this.stops.length}`, symbol: n, label: "Last Stop" }] }, e;
  }
};
t([s({ readOnly: !0, json: { read: !1, origins: { "portal-item": { write: { allowNull: !0, ignoreOrigin: !0 } }, "web-map": { write: { overridePolicy() {
  return { allowNull: !0, ignoreOrigin: this.portalItem == null };
} } } } } })], v.prototype, "_featureCollection", void 0), t([q(["web-map", "portal-item"], "_featureCollection")], v.prototype, "writeFeatureCollectionWebmap", null), t([s({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { target: "type", overridePolicy() {
  return { ignoreOrigin: this.portalItem != null };
} } } } } })], v.prototype, "_type", void 0), t([s({ nonNullable: !0, type: Ve })], v.prototype, "defaultSymbols", void 0), t([s({ readOnly: !0 })], v.prototype, "directionLines", void 0), t([N(["web-map", "portal-item"], "directionLines", ["layers", "featureCollection.layers"])], v.prototype, "readDirectionLines", null), t([s({ readOnly: !0 })], v.prototype, "directionPoints", void 0), t([N(["web-map", "portal-item"], "directionPoints", ["layers", "featureCollection.layers"])], v.prototype, "readDirectionPoints", null), t([s({ readOnly: !0, json: { read: !1, origins: { "web-map": { write: { ignoreOrigin: !0 } } } } })], v.prototype, "featureCollectionType", void 0), t([s({ readOnly: !0 })], v.prototype, "fullExtent", null), t([s({ json: { origins: { "web-map": { name: "featureCollection.showLegend" } }, write: !0 } })], v.prototype, "legendEnabled", void 0), t([s({ type: ["show", "hide"] })], v.prototype, "listMode", void 0), t([s({ type: Number, nonNullable: !0, json: { write: !1 } })], v.prototype, "maxScale", void 0), t([N(["web-map", "portal-item"], "maxScale", ["layers", "featureCollection.layers"])], v.prototype, "readMaxScale", null), t([s({ type: Number, nonNullable: !0, json: { write: !1 } })], v.prototype, "minScale", void 0), t([N(["web-map", "portal-item"], "minScale", ["layers", "featureCollection.layers"])], v.prototype, "readMinScale", null), t([s({ type: ["ArcGISFeatureLayer"], value: "ArcGISFeatureLayer" })], v.prototype, "operationalLayerType", void 0), t([s({ nonNullable: !0, type: A.ofType(Q) })], v.prototype, "pointBarriers", void 0), t([N(["web-map", "portal-item"], "pointBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPointBarriers", null), t([s({ nonNullable: !0, type: A.ofType(X) })], v.prototype, "polygonBarriers", void 0), t([N(["web-map", "portal-item"], "polygonBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPolygonBarriers", null), t([s({ nonNullable: !0, type: A.ofType(ee) })], v.prototype, "polylineBarriers", void 0), t([N(["web-map", "portal-item"], "polylineBarriers", ["layers", "featureCollection.layers"])], v.prototype, "readPolylineBarriers", null), t([s({ readOnly: !0 })], v.prototype, "routeInfo", void 0), t([N(["web-map", "portal-item"], "routeInfo", ["layers", "featureCollection.layers"])], v.prototype, "readRouteInfo", null), t([s({ type: W })], v.prototype, "spatialReference", void 0), t([N(["web-map", "portal-item"], "spatialReference", ["layers", "featureCollection.layers"])], v.prototype, "readSpatialReference", null), t([s({ nonNullable: !0, type: A.ofType(te) })], v.prototype, "stops", void 0), t([N(["web-map", "portal-item"], "stops", ["layers", "featureCollection.layers"])], v.prototype, "readStops", null), t([s()], v.prototype, "title", null), t([s({ readOnly: !0, json: { read: !1 } })], v.prototype, "type", void 0), t([s()], v.prototype, "url", null), v = t([I(Ye)], v);
const Cr = v;
export {
  Cr as default
};
//# sourceMappingURL=RouteLayer-Bl3HlP9m.js.map
