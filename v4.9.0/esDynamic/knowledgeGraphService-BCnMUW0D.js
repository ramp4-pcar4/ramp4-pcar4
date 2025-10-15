import { N as i, O as s, P as w, dU as Y, b_ as O, bh as L, af as Fe, hX as le, s as d, eJ as ee, aT as fe, a6 as ge, aS as te, aR as re, C as _e, a2 as k, a3 as De } from "./main-DIdq27YS.js";
import { m as me, p as we, t as Ne, c as ze } from "./GraphQueryStreaming-BgiYd5iK.js";
let D = class extends Y {
  constructor(r) {
    super(r), this.resultRows = [];
  }
};
i([s()], D.prototype, "resultRows", void 0), D = i([w("esri.rest.knowledgeGraph.GraphQueryResult")], D);
const pe = D;
let N = class extends Y {
  constructor(r) {
    super(r), this.resultRowsStream = new ReadableStream();
  }
};
i([s()], N.prototype, "resultRowsStream", void 0), N = i([w("esri.rest.knowledgeGraph.GraphQueryResult")], N);
const de = N;
let G = class extends O {
  constructor(r) {
    super(r), this.name = null, this.unique = null, this.ascending = null, this.description = null, this.fieldNames = null;
  }
};
i([s({ type: String, json: { write: !0 } })], G.prototype, "name", void 0), i([s({ type: Boolean, json: { write: !0 } })], G.prototype, "unique", void 0), i([s({ type: Boolean, json: { write: !0 } })], G.prototype, "ascending", void 0), i([s({ type: String, json: { write: !0 } })], G.prototype, "description", void 0), i([s({ type: [String], json: { write: !0 } })], G.prototype, "fieldNames", void 0), G = i([w("esri.rest.knowledgeGraph.FieldIndex")], G);
const Ee = G;
let f = class extends O {
  constructor(r) {
    super(r), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = null, this.required = null, this.defaultVisibility = null, this.systemMaintained = null, this.role = null, this.defaultValue = null;
  }
};
i([s({ type: String, json: { write: !0 } })], f.prototype, "name", void 0), i([s({ type: String, json: { write: !0 } })], f.prototype, "alias", void 0), i([s({ type: String, json: { write: !0 } })], f.prototype, "fieldType", void 0), i([s({ type: String, json: { write: !0 } })], f.prototype, "geometryType", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "hasM", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "hasZ", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "nullable", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "editable", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "required", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "defaultVisibility", void 0), i([s({ type: Boolean, json: { write: !0 } })], f.prototype, "systemMaintained", void 0), i([s()], f.prototype, "role", void 0), i([s({ type: Object, json: { type: String, write: { writer: (e, r) => {
  r.defaultValue = e != null ? e.toString() : null;
} } } })], f.prototype, "defaultValue", void 0), f = i([w("esri.rest.knowledgeGraph.GraphProperty")], f);
const Te = f;
let I = class extends O {
  constructor(r) {
    super(r), this.name = null, this.alias = null, this.role = null, this.strict = null, this.properties = null, this.fieldIndexes = null;
  }
};
i([s({ type: String, json: { write: !0 } })], I.prototype, "name", void 0), i([s({ type: String, json: { write: !0 } })], I.prototype, "alias", void 0), i([s({ type: String, json: { write: !0 } })], I.prototype, "role", void 0), i([s({ type: Boolean, json: { write: !0 } })], I.prototype, "strict", void 0), i([s({ type: [Te], json: { write: !0 } })], I.prototype, "properties", void 0), i([s({ type: [Ee], json: { write: !0 } })], I.prototype, "fieldIndexes", void 0), I = i([w("esri.rest.knowledgeGraph.GraphObjectType")], I);
const ve = I;
let W = class extends ve {
  constructor(r) {
    super(r);
  }
};
W = i([w("esri.rest.knowledgeGraph.EntityType")], W);
const Ie = W;
let z = class extends ve {
  constructor(r) {
    super(r), this.endPoints = [];
  }
};
i([s()], z.prototype, "endPoints", void 0), z = i([w("esri.rest.knowledgeGraph.RelationshipType")], z);
const Ge = z;
let _ = class extends O {
  constructor(e) {
    super(e), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = null, this.entityTypes = null, this.relationshipTypes = null;
  }
};
i([s({ type: Date, json: { type: Number, write: { writer: (e, r) => {
  r.timestamp = e?.getTime();
} } } })], _.prototype, "timestamp", void 0), i([s({ type: L, json: { write: !0 } })], _.prototype, "spatialReference", void 0), i([s({ type: Boolean, json: { write: !0 } })], _.prototype, "strict", void 0), i([s({ type: String, json: { write: !0 } })], _.prototype, "objectIdField", void 0), i([s({ type: String, json: { write: !0 } })], _.prototype, "globalIdField", void 0), i([s()], _.prototype, "arcgisManaged", void 0), i([s()], _.prototype, "identifierInfo", void 0), i([s()], _.prototype, "searchIndexes", void 0), i([s({ type: [Ie], json: { write: !0 } })], _.prototype, "entityTypes", void 0), i([s({ type: [Ge], json: { write: !0 } })], _.prototype, "relationshipTypes", void 0), _ = i([w("esri.rest.knowledgeGraph.DataModel")], _);
const Re = _;
let c = class extends O {
  constructor(r) {
    super(r), this.capabilities = [], this.supportsSearch = !1, this.supportedQueryFormats = [], this.allowGeometryUpdates = !1, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = !1, this.dataEditingNotSupported = !1, this.schemaEditingNotSupported = !1;
  }
};
i([s({ type: [String], json: { write: !0 } })], c.prototype, "capabilities", void 0), i([s({ type: Boolean, json: { write: !0 } })], c.prototype, "supportsSearch", void 0), i([s({ type: [String], json: { write: !0 } })], c.prototype, "supportedQueryFormats", void 0), i([s({ type: Boolean, json: { write: !0 } })], c.prototype, "allowGeometryUpdates", void 0), i([s({ type: Number, json: { write: !0 } })], c.prototype, "searchMaxRecordCount", void 0), i([s({ type: Object, json: { write: !0 } })], c.prototype, "serviceCapabilities", void 0), i([s({ type: Number, json: { write: !0 } })], c.prototype, "maxRecordCount", void 0), i([s({ type: String, json: { write: !0 } })], c.prototype, "description", void 0), i([s({ type: String, json: { write: !0 } })], c.prototype, "copyrightText", void 0), i([s({ type: String, json: { write: !0 } })], c.prototype, "units", void 0), i([s({ type: Object, json: { write: !0 } })], c.prototype, "spatialReference", void 0), i([s({ type: Number, json: { write: !0 } })], c.prototype, "currentVersion", void 0), i([s({ type: Object, json: { write: !0 } })], c.prototype, "dateFieldsTimeReference", void 0), i([s({ type: String, json: { write: !0 } })], c.prototype, "serviceItemId", void 0), i([s({ type: Boolean, json: { write: !0 } })], c.prototype, "supportsDocuments", void 0), i([s({ type: Boolean, json: { write: !0 } })], c.prototype, "dataEditingNotSupported", void 0), i([s({ type: Boolean, json: { write: !0 } })], c.prototype, "schemaEditingNotSupported", void 0), c = i([w("esri.rest.knowledgeGraph.ServiceDefinition")], c);
const be = c;
let M = class extends O {
  constructor(r) {
    super(r), this.dataModel = null, this.serviceDefinition = null;
  }
};
i([s({ type: String, json: { write: !0 } })], M.prototype, "url", void 0), i([s({ type: Re, json: { write: !0 } })], M.prototype, "dataModel", void 0), i([s({ type: be, json: { write: !0 } })], M.prototype, "serviceDefinition", void 0), M = i([w("esri.rest.knowledgeGraph.KnowledgeGraph")], M);
const Ae = M, ue = "esri/rest/knowledgeGraph/wasmInterface/";
let Q;
async function R() {
  const e = Q;
  if (e) return e;
  const r = Fe("wasm-simd");
  return Q = Le(r), Q;
}
async function Le(e) {
  if (e) {
    const { default: t } = await import("./arcgis-knowledge-client-core-simd-9U-x4sqO.js").then((n) => n.a);
    return t({ locateFile: (n) => le(ue + n) });
  }
  const { default: r } = await import("./arcgis-knowledge-client-core-aqdKOxOH.js").then((t) => t.a);
  return r({ locateFile: (t) => le(ue + t) });
}
function Se(e, r) {
  const t = new r.ArrayValue();
  return t.deleteLater(), e.forEach((n) => {
    t.add_value(oe(n, r));
  }), t;
}
function Me(e, r) {
  const t = new r.ObjectValue();
  t.deleteLater();
  for (const [n, o] of Object.entries(e)) t.set_key_value(n, oe(o, r));
  return t;
}
function ne(e, r) {
  if (e instanceof fe) return Ye(e, r);
  if (e instanceof ge) return Qe(e, r);
  if (e instanceof te || e instanceof re) return qe(e, r);
  throw new d("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: e });
}
function Ce(e, r) {
  r.input_quantization_parameters = { xy_resolution: e.xyResolution, x_false_origin: e.xFalseOrigin, y_false_origin: e.yFalseOrigin, z_resolution: e.zResolution, z_false_origin: e.zFalseOrigin, m_resolution: e.mResolution, m_false_origin: e.mFalseOrigin };
}
function Ue(e, r, t) {
  if (!e.extent) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", e.extent);
  if (!e.quantizeMode) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", e.quantizeMode);
  if (!e.tolerance) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", e.quantizeMode);
  r.output_quantization_parameters = { extent: { xmax: e.extent.xmax, ymax: e.extent.ymax, xmin: e.extent.xmin, ymin: e.extent.ymin }, quantize_mode: t.esriQuantizeMode[e.quantizeMode], tolerance: e.tolerance };
}
function oe(e, r) {
  if (e == null) return "";
  if (typeof e != "object" || e instanceof Date) return e;
  if (e instanceof ee) return ne(e, r);
  if (Array.isArray(e)) {
    const t = new r.ArrayValue();
    return t.deleteLater(), e.forEach((n) => {
      t.add_value(oe(n, r));
    }), t;
  }
  return Me(e, r);
}
function qe(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  let a = [];
  e instanceof te ? (t.geometry_type = r.esriGeometryType.esriGeometryPolyline, a = e.paths) : e instanceof re && (t.geometry_type = r.esriGeometryType.esriGeometryPolygon, a = e.rings);
  let l = 0, p = 0;
  return a.forEach((u) => {
    let y = 0;
    u.forEach((h) => {
      y++, h.forEach((E) => {
        n[p] = E, p++;
      });
    }), o[l] = y, l++;
  }), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function Ye(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.geometry_type = t.geometry_type = r.esriGeometryType.esriGeometryMultipoint, t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  o[0] = e.points.length;
  let a = 0;
  return e.points.forEach((l) => {
    l.forEach((p) => {
      n[a] = p, a++;
    });
  }), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function Qe(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.geometry_type = r.esriGeometryType.esriGeometryPoint, t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  o[0] = 1, n[0] = e.x, n[1] = e.y;
  let a = 2;
  return e.hasZ && (n[a] = e.z, a++), e.hasM && (n[a] = e.m, a++), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function $(e, r) {
  if (!e.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (e instanceof me) {
    const t = new r.EntityValue();
    t.deleteLater(), t.type_name = e.typeName;
    for (const [n, o] of Object.entries(e.properties)) t.set_key_value(n, ce(o, r));
    return e.id && t.set_id(e.id), t;
  }
  if (e instanceof we) {
    const t = new r.RelationshipValue();
    t.deleteLater(), t.type_name = e.typeName;
    for (const [n, o] of Object.entries(e.properties)) t.set_key_value(n, ce(o, r));
    return e.id && t.set_id(e.id), e.originId && e.destinationId && t.set_related_entity_ids(e.originId, e.destinationId), t;
  }
  throw new d("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function Be(e) {
  return { xy_resolution: e.xyResolution, x_false_origin: e.xFalseOrigin, y_false_origin: e.yFalseOrigin, z_resolution: e.zResolution, z_false_origin: e.zFalseOrigin, m_resolution: e.mResolution, m_false_origin: e.mFalseOrigin };
}
function ce(e, r) {
  return e == null ? "" : typeof e != "object" || e instanceof Date ? e : e instanceof ee ? ne(e, r) : "";
}
let b = class extends Y {
  constructor(r) {
    super(r), this.name = null, this.supportedCategory = null, this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
i([s()], b.prototype, "name", void 0), i([s()], b.prototype, "supportedCategory", void 0), i([s()], b.prototype, "analyzers", void 0), i([s()], b.prototype, "searchProperties", void 0), b = i([w("esri.rest.knowledgeGraph.SearchIndex")], b);
const Ve = b;
var C, U, q, H, K, Z, J;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Provenance = 1] = "Provenance", e[e.Document = 2] = "Document";
})(C || (C = {})), function(e) {
  e[e.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e[e.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e[e.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e[e.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e[e.esriFieldTypeString = 4] = "esriFieldTypeString", e[e.esriFieldTypeDate = 5] = "esriFieldTypeDate", e[e.esriFieldTypeOID = 6] = "esriFieldTypeOID", e[e.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e[e.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e[e.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e[e.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e[e.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e[e.esriFieldTypeXML = 12] = "esriFieldTypeXML", e[e.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e[e.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e[e.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e[e.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(U || (U = {})), function(e) {
  e[e.esriGeometryNull = 0] = "esriGeometryNull", e[e.esriGeometryPoint = 1] = "esriGeometryPoint", e[e.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e[e.esriGeometryPolyline = 3] = "esriGeometryPolyline", e[e.esriGeometryPolygon = 4] = "esriGeometryPolygon", e[e.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e[e.esriGeometryAny = 6] = "esriGeometryAny", e[e.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(q || (q = {})), function(e) {
  e[e.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e[e.esriUUIDESRI = 1] = "esriUUIDESRI", e[e.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(H || (H = {})), function(e) {
  e[e.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e[e.esriTypeEntity = 1] = "esriTypeEntity", e[e.esriTypeRelationship = 2] = "esriTypeRelationship", e[e.esriTypeBoth = 4] = "esriTypeBoth";
}(K || (K = {})), function(e) {
  e[e.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e[e.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e[e.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e[e.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e[e.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e[e.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e[e.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e[e.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e[e.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e[e.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension";
}(Z || (Z = {})), function(e) {
  e[e.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e[e.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e[e.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(J || (J = {}));
function We(e) {
  return e.deleteLater(), new Re({ timestamp: e.timestamp, spatialReference: new L(e.spatial_reference), strict: e.strict, objectIdField: e.objectid_property, globalIdField: e.globalid_property, arcgisManaged: e.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: J[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value], databaseNativeIdentifier: e.identifier_info?.identifier_mapping_info?.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: H[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value] } }, searchIndexes: ot(e.search_indexes), entityTypes: Xe(e.entity_types), relationshipTypes: nt(e.relationship_types) });
}
function He(e) {
  return e.deleteLater(), new Ie(xe(e));
}
function Ke(e) {
  return e.deleteLater(), new Ee({ name: e.name, unique: e.unique, ascending: e.ascending, description: e.description, fieldNames: et(e.fields) });
}
function xe(e) {
  return { name: e.name, alias: e.alias, role: C[e.role.value] ? C[e.role.value] : null, strict: e.strict, properties: tt(e.properties), fieldIndexes: rt(e.field_indexes) };
}
function Ze(e) {
  return e.deleteLater(), new Te({ alias: e.alias, name: e.name, fieldType: U[e.field_type.value] ? U[e.field_type.value] : null, geometryType: q[e.geometry_type.value] ? q[e.geometry_type.value] : null, hasM: e.has_m, hasZ: e.has_z, nullable: e.nullable, editable: e.editable, required: e.required, defaultVisibility: e.default_visibility, systemMaintained: e.system_maintained, role: Z[e.role.value], defaultValue: e.default_value });
}
function Je(e) {
  e.deleteLater();
  const r = xe(e), t = [];
  for (let n = 0; n < e.end_points.size(); n++) {
    const o = e.end_points.get(n);
    t.push({ originEntityType: o.origin_entity_type, destinationEntityType: o.dest_entity_type });
  }
  return e.end_points.delete(), new Ge(Object.assign({ endPoints: t }, r));
}
function Xe(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(He(e.get(t)));
  return e.delete(), r;
}
function et(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(e.get(t));
  return e.delete(), r;
}
function tt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(Ze(e.get(t)));
  return e.delete(), r;
}
function rt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(Ke(e.get(t)));
  return e.delete(), r;
}
function nt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(Je(e.get(t)));
  return e.delete(), r;
}
function ot(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) {
    const n = new Ve(), o = e.get(0);
    n.name = o.name, n.supportedCategory = K[o.supported_category.value];
    const a = o.analyzers.size();
    for (let l = 0; l < a; l++) n.analyzers.push({ name: o.analyzers.get(l).name });
    o.analyzers.delete();
    for (let l = 0; l < o.search_properties.keys().size(); l++) {
      const p = o.search_properties.keys().get(l), u = o.search_properties.get(p), y = [];
      for (let h = 0; h < u.property_names.size(); h++) y.push(u.property_names.get(h));
      n.searchProperties.set(p, { propertyNames: y });
    }
    r.push(n);
  }
  return e.delete(), r;
}
var m;
(function(e) {
  e[e.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", e[e.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", e[e.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", e[e.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", e[e.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", e[e.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", e[e.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", e[e.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
})(m || (m = {}));
var S, ye;
(function(e) {
  e[e.OBJECT = 0] = "OBJECT", e[e.ENTITY = 1] = "ENTITY", e[e.RELATIONSHIP = 2] = "RELATIONSHIP", e[e.PATH = 3] = "PATH", e[e.ARRAY = 4] = "ARRAY";
})(S || (S = {})), function(e) {
  e[e.view = 0] = "view", e[e.edit = 1] = "edit";
}(ye || (ye = {}));
function it(e, r) {
  const t = { spatialReference: r }, n = ie(e, t), o = e.lengths, a = e.coords, l = o[0];
  t.points = [];
  let p = 0;
  for (let u = 0; u < l; u++) {
    const y = [];
    for (let h = 0; h < n; h++) y[h] = a[p], p++;
    t.points.push(y);
  }
  return new fe(t);
}
function at(e, r) {
  const t = { spatialReference: r };
  let n = 2;
  ie(e, t);
  const o = e.coords;
  return t.x = o[0], t.y = o[1], e.has_z && (t.z = o[n], n++), e.has_m && (t.m = o[n]), new ge(t);
}
function st(e, r) {
  return new te(Oe(e, r));
}
function lt(e, r) {
  return new re(Oe(e, r));
}
function Oe(e, r) {
  const t = { spatialReference: r }, n = ie(e, t), o = e.lengths, a = e.coords;
  let l = "";
  if (e.geometry_type.value === m.ESRI_GEOMETRY_POLYGON) l = "rings";
  else {
    if (e.geometry_type.value !== m.ESRI_GEOMETRY_POLYLINE) throw new d("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
    l = "paths";
  }
  t[l] = [];
  let p = 0;
  return o.forEach((u) => {
    const y = [];
    for (let h = 0; h < u; h++) {
      const E = [];
      for (let g = 0; g < n; g++) E[g] = a[p], p++;
      y.push(E);
    }
    t[l].push(y);
  }), t;
}
function ie(e, r) {
  let t = 2;
  return e.has_z ? (r.hasZ = e.has_z, t++) : r.hasZ = !1, e.has_m ? (r.hasM = e.has_m, t++) : r.hasM = !1, t;
}
const F = () => _e.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"), pt = { decodedWasmObjToQueryResponseObj: (e, r, t) => {
  if (e == null) return null;
  if (typeof e != "object" || "getDate" in e) return e;
  if ("geometry_type" in e) switch (e.geometry_type.value) {
    case null:
      return null;
    case m.ESRI_GEOMETRY_POINT:
      return at(e, t);
    case m.ESRI_GEOMETRY_MULTIPOINT:
      return it(e, t);
    case m.ESRI_GEOMETRY_POLYLINE:
      return st(e, t);
    case m.ESRI_GEOMETRY_POLYGON:
      return lt(e, t);
    case m.ESRI_GEOMETRY_ENVELOPE:
    case m.ESRI_GEOMETRY_MULTI_PATCH:
      return F().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
    case m.ESRI_GEOMETRY_NULL:
    case m.ESRI_GEOMETRY_ANY:
    default:
      return F().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
  }
  else {
    if (!("object_value_type" in e)) return F().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e.object_value_type.value) {
      case S.OBJECT:
        return ut(e, r, t);
      case S.ENTITY:
        return Pe(e, r, t);
      case S.RELATIONSHIP:
        return ke(e, r, t);
      case S.PATH:
        return ct(e, r, t);
      case S.ARRAY:
        return dt(e, r, t);
      default:
        return F().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function dt(e, r, t) {
  const n = [], o = e.count();
  for (let a = 0; a < o; a++) {
    const l = e.get_value_at(a);
    n.push(ae(l, r, t));
  }
  return n;
}
function ae(e, r, t) {
  return pt.decodedWasmObjToQueryResponseObj(e, r, t);
}
function Pe(e, r, t) {
  const n = e.type_name, o = se(e, r, t), a = e.get_id();
  return new me(Object.assign({ typeName: n, id: a }, o));
}
function se(e, r, t) {
  const n = {}, o = e.key_count();
  for (let a = 0; a < o; a++) n[e.get_key_at(a)] = ae(e.get_value_at(a), r, t);
  return { properties: n };
}
function ut(e, r, t) {
  return new Ne(se(e, r, t));
}
function ct(e, r, t) {
  const n = e.entity_count(), o = e.relationship_count(), a = [];
  for (let l = 0; l < n; l++) a.push(Pe(e.get_entity_at(l), r, t)), l < o && a.push(ke(e.get_relationship_at(l), r, t));
  return new ze({ path: a });
}
function ke(e, r, t) {
  const n = e.type_name, o = se(e, r, t);
  return new we(Object.assign({ typeName: n, id: e.get_id(), originId: e.get_origin_entity_id(), destinationId: e.get_destination_entity_id() }, o));
}
let x = class extends Y {
  constructor(r) {
    super(r), this.hasError = null, this.error = null, this.editResults = [];
  }
};
i([s()], x.prototype, "hasError", void 0), i([s()], x.prototype, "error", void 0), i([s()], x.prototype, "editResults", void 0), x = i([w("esri.rest.knowledgeGraph.GraphApplyEdits")], x);
const yt = x;
function ht(e) {
  const r = new yt();
  r.hasError = e.has_error(), r.hasError && (r.error = { errorCode: e.error.error_code, errorMessage: e.error.error_message });
  const t = e.get_edit_results_count();
  for (let n = 0; n < t; n++) {
    const o = e.get_edit_results_at(n), a = e.get_edit_results_type_name_at(n), l = [], p = [], u = [], y = o.get_add_results_count(), h = o.get_update_results_count(), E = o.get_delete_results_count();
    for (let g = 0; g < y; g++) {
      const T = o.get_add_result_at(g);
      l.push({ id: T.id, error: { errorCode: T.error.error_code, errorMessage: T.error.error_message } });
    }
    for (let g = 0; g < h; g++) {
      const T = o.get_update_result_at(g);
      p.push({ id: T.id, error: { errorCode: T.error.error_code, errorMessage: T.error.error_message } });
    }
    for (let g = 0; g < E; g++) {
      const T = o.get_delete_result_at(g);
      u.push({ id: T.id, error: { errorCode: T.error.error_code, errorMessage: T.error.error_message } });
    }
    r.editResults.push({ typeName: a, adds: l, updates: p, deletes: u });
  }
  return r;
}
const v = { fetchKnowledgeGraph: async (e) => {
  const r = new Ae({ url: e }), t = [];
  return t.push(j(r)), t.push(je(r)), await Promise.all(t), r;
}, refreshDataModel: async (e) => {
  e.dataModel = await $e(e);
}, refreshServiceDefinition: async (e) => {
  const r = (await k(e.url, { query: { f: "json" } })).data;
  return r.capabilities = r?.capabilities?.split(","), r.supportedQueryFormats = r?.supportedQueryFormats?.split(","), e.serviceDefinition = new be(r), e.serviceDefinition;
}, executeQueryStreaming: async (e, r, t) => {
  const n = `${e.url}/graph/query`;
  await B(e);
  const o = await V(n, t);
  o.data.body = await It(r, e);
  const a = await A(o.data.url, o.data);
  if (e.dataModel) return new de({ resultRowsStream: await he(a, e.dataModel, r.outputSpatialReference ?? void 0) });
  throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e, r, t) => {
  if (e.serviceDefinition?.dataEditingNotSupported) throw new d("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n = `${e.url}/graph/applyEdits`;
  await B(e);
  const o = await V(n, t);
  return o.data.body = await vt(r, e), Rt(await A(o.data.url, o.data));
}, executeQuery: async (e, r, t) => {
  const n = `${e.url}/graph/query`, o = await k(n, { responseType: "array-buffer", query: { f: "pbf", openCypherQuery: r.openCypherQuery, ...t?.query }, signal: t?.signal, timeout: t?.timeout }), a = o.getHeader?.("content-type"), l = o.data;
  if (a?.includes("application/x-protobuf")) {
    const p = new (await R()).GraphQueryDecoder();
    if (p.deleteLater(), e.dataModel) return new pe({ resultRows: X(p, l, e.dataModel) });
    throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: a, data: o.data });
}, executeSearch: async (e, r, t) => {
  const n = r.typeCategoryFilter, o = `${e.url}/graph/search`, a = await k(o, { responseType: "array-buffer", query: { f: "pbf", searchQuery: `"${r.searchQuery}"`, typeCategoryFilter: n, ...t?.query }, signal: t?.signal, timeout: t?.timeout }), l = a.getHeader?.("content-type"), p = a.data;
  if (l?.includes("application/x-protobuf")) {
    const u = new (await R()).GraphQueryDecoder();
    if (u.deleteLater(), e.dataModel) return new pe({ resultRows: X(u, p, e.dataModel) });
    throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: l, data: a.data });
}, executeSearchStreaming: async (e, r, t) => {
  const n = `${e.url}/graph/search`;
  await B(e);
  const o = await V(n, t);
  o.data.body = await Gt(r);
  const a = await A(o.data.url, o.data);
  if (e.dataModel) return new de({ resultRowsStream: await he(a, e.dataModel) });
  throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, _fetchWrapper: async (e, r) => fetch(e, r) };
async function ft(e, r, t) {
  return v.executeApplyEdits(e, r, t);
}
async function gt(e, r, t) {
  return v.executeQuery(e, r, t);
}
async function _t(e, r, t) {
  return v.executeQueryStreaming(e, r, t);
}
async function mt(e, r, t) {
  return v.executeSearch(e, r, t);
}
async function wt(e, r, t) {
  return v.executeSearchStreaming(e, r, t);
}
async function Et(e) {
  return v.fetchKnowledgeGraph(e);
}
async function j(e) {
  return v.refreshDataModel(e);
}
async function je(e) {
  return v.refreshServiceDefinition(e);
}
async function A(e, r) {
  return v._fetchWrapper(e, r);
}
async function B(e) {
  De?.findCredential(e.url) || (e.dataModel ? await $e(e) : await j(e));
}
function P(e, r, t) {
  if (e.error_code !== 0) throw new d(r, t, { errorCode: e.error_code, errorMessage: e.error_message });
}
function Tt(e, r, t, n) {
  r == null ? t.set_param_key_value(e, "") : typeof r != "object" || r instanceof Date ? t.set_param_key_value(e, r) : r instanceof ee ? t.set_param_key_value(e, ne(r, n)) : r instanceof Array ? t.set_param_key_value(e, Se(r, n)) : t.set_param_key_value(e, Me(r, n));
}
async function vt(e, r) {
  if (r.dataModel || await j(r), !r.dataModel) throw new d("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const t = await R(), n = !!e.options?.cascadeDelete, o = new t.GraphApplyEditsEncoder(t.SpatialReferenceUtil.WGS84(), e.options?.inputQuantizationParameters ? Be(e.options?.inputQuantizationParameters) : t.InputQuantizationUtil.WGS84_lossless());
  o.deleteLater(), o.cascade_delete = n;
  try {
    let l;
    e.entityAdds?.forEach((p) => {
      l = o.add_entity($(p, t)), P(l, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e.relationshipAdds?.forEach((p) => {
      if (!p.originId || !p.destinationId) throw new d("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      l = o.add_relationship($(p, t)), P(l, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e.entityUpdates?.forEach((p) => {
      if (!p.id) throw new d("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      l = o.update_entity($(p, t)), P(l, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e.relationshipUpdates?.forEach((p) => {
      if (!p.id) throw new d("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      l = o.update_relationship($(p, t)), P(l, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e.entityDeletes?.forEach((p) => {
      if (!p.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const u = o.make_delete_helper(p.typeName, !0);
      u.deleteLater(), p.ids?.forEach((y) => {
        u.delete_by_id(y);
      });
    }), e.relationshipDeletes?.forEach((p) => {
      if (!p.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const u = o.make_delete_helper(p.typeName, !1);
      p.ids?.forEach((y) => {
        u.delete_by_id(y);
      });
    }), o.encode();
  } catch (l) {
    throw new d("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: l });
  }
  const a = o.get_encoding_result();
  return P(a.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(a.get_byte_buffer());
}
async function It(e, r) {
  const t = await R(), n = new t.GraphQueryRequestEncoder();
  if (n.deleteLater(), e.outputSpatialReference ? n.output_spatial_reference = { wkid: e.outputSpatialReference.wkid, latestWkid: e.outputSpatialReference.latestWkid, vcsWkid: e.outputSpatialReference.vcsWkid, latestVcsWkid: e.outputSpatialReference.latestVcsWkid, wkt: e.outputSpatialReference.wkt ?? "" } : n.output_spatial_reference = t.SpatialReferenceUtil.WGS84(), n.open_cypher_query = e.openCypherQuery, e.bindParameters) for (const [a, l] of Object.entries(e.bindParameters)) Tt(a, l, n, t);
  if (e.bindGeometryQuantizationParameters) Ce(e.bindGeometryQuantizationParameters, n);
  else {
    if (r.dataModel || await j(r), r.dataModel?.spatialReference?.wkid !== 4326) throw new d("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n.input_quantization_parameters = t.InputQuantizationUtil.WGS84_lossless();
  }
  e.outputQuantizationParameters && Ue(e.outputQuantizationParameters, n, t);
  try {
    n.encode();
  } catch (a) {
    throw new d("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: a });
  }
  const o = n.get_encoding_result();
  if (o.error.error_code !== 0) throw new d("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o.error.error_code, errorMessage: o.error.error_message });
  return structuredClone(o.get_byte_buffer());
}
async function Gt(e) {
  const r = await R(), t = new r.GraphSearchRequestEncoder();
  if (t.deleteLater(), t.search_query = e.searchQuery, t.type_category_filter = r.esriNamedTypeCategory[e.typeCategoryFilter], e.returnSearchContext === !0 && (t.return_search_context = e.returnSearchContext), e.start != null && e.start > 0 && (t.start_index = e.start), e.num != null && (t.max_num_results = e.num), e.idsFilter != null && Array.isArray(e.idsFilter) && e.idsFilter.length > 0) try {
    t.set_ids_filter(Se(e.idsFilter, r));
  } catch (o) {
    throw new d("knowledge-graph:ids-format-error", "Attempting to set ids filter failed.  This is usually caused by an incorrectly formatted UUID string", { error: o });
  }
  e.namedTypesFilter?.forEach((o) => {
    t.add_named_type_filter(o);
  });
  try {
    t.encode();
  } catch (o) {
    throw new d("knowledge-graph:search-encoding-failed", "Attempting to encode the search failed", { error: o });
  }
  const n = t.get_encoding_result();
  if (n.error.error_code !== 0) throw new d("knowledge-graph:search-encoding-failed", "Attempting to get encoding result from the query failed", { errorCode: n.error.error_code, errorMessage: n.error.error_message });
  return structuredClone(n.get_byte_buffer());
}
async function V(e, r) {
  return k(e, { responseType: "native-request-init", method: "post", query: { f: "pbf", ...r?.query }, body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: r?.signal, timeout: r?.timeout });
}
async function Rt(e) {
  const r = e.headers.get("content-type");
  if (r?.includes("application/x-protobuf")) {
    const t = await e.arrayBuffer(), n = new (await R()).GraphApplyEditsDecoder();
    return n.deleteLater(), n.decode(new Uint8Array(t)), ht(n);
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: r, data: e.text() });
}
function X(e, r, t, n = new L({ wkid: L.WGS84.wkid })) {
  e.push_buffer(new Uint8Array(r));
  const o = [];
  let a = 0;
  for (; e.next_row(); ) {
    a || (a = e.get_header_keys().size());
    const l = new Array(a);
    for (let p = 0; p < a; p++) {
      const u = e.get_value(p);
      l[p] = ae(u, t, n);
    }
    o.push(l);
  }
  if (e.has_error()) throw new d("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: e.error.error_code, errorMessage: e.error.error_message });
  return o;
}
async function he(e, r, t) {
  const n = e.headers.get("content-type");
  if (e.headers.get("content-length") && _e.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), n?.includes("application/x-protobuf")) {
    const o = e.body?.getReader(), a = new (await R()).GraphQueryDecoder();
    return a.deleteLater(), new ReadableStream({ async start(l) {
      try {
        return p();
      } catch (u) {
        o?.releaseLock(), l.error(new d("knowledge-graph:stream-decoding-error", "The server returned a valid response, but there was an error decoding the response stream", { error: u })), l.close();
      }
      function p() {
        return o?.read().then(({ done: u, value: y }) => {
          if (u) {
            let E;
            if (a.has_error() && (E = new d("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded", { errorCode: a.error.error_code, errorMessage: a.error.error_message })), o.releaseLock(), E) throw l.error(E), E;
            return void l.close();
          }
          const h = X(a, y, r, t);
          return h.length > 0 && l.enqueue(h), p();
        });
      }
    } });
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: n, data: e.text() });
}
async function $e(e) {
  const r = `${e.url}/dataModel/queryDataModel`, t = await k(r, { responseType: "array-buffer", query: { f: "pbf" } }), n = t.getHeader?.("content-type"), o = t.data;
  if (n?.includes("application/x-protobuf")) {
    const a = (await R()).decode_data_model_from_protocol_buffer(new Uint8Array(o));
    if (!a) throw new d("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return We(a);
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: n, data: t.data });
}
const At = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchWrapper: A,
  executeApplyEdits: ft,
  executeQuery: gt,
  executeQueryStreaming: _t,
  executeSearch: mt,
  executeSearchStreaming: wt,
  fetchKnowledgeGraph: Et,
  kgRestServices: v,
  refreshDataModel: j,
  refreshServiceDefinition: je
}, Symbol.toStringTag, { value: "Module" }));
export {
  _t as G,
  Et as T,
  At as k,
  Ge as p,
  Ie as t
};
//# sourceMappingURL=knowledgeGraphService-BCnMUW0D.js.map
