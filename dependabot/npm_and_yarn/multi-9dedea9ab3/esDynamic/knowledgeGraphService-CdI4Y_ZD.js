import { O as i, P as s, Q as _, e2 as L, bX as O, bx as z, a9 as Ue, fq as ge, s as d, eU as se, b7 as Ie, a3 as Re, b6 as pe, b5 as le, D as J, $ as N, a0 as qe } from "./main-DMoCLB29.js";
import { m as Se, p as be, t as Ye, c as Qe } from "./GraphQueryStreaming-DVFhqZin.js";
let x = class extends L {
  constructor(r) {
    super(r), this.headerKeys = [], this.outSpatialReference = null, this.exceededTransferLimit = !1;
  }
};
i([s()], x.prototype, "headerKeys", void 0), i([s()], x.prototype, "outSpatialReference", void 0), i([s()], x.prototype, "exceededTransferLimit", void 0), x = i([_("esri.rest.knowledgeGraph.GraphQueryResultHeader")], x);
const V = x;
let F = class extends L {
  constructor(r) {
    super(r), this.resultRows = [], this.resultHeader = new V();
  }
};
i([s()], F.prototype, "resultRows", void 0), i([s()], F.prototype, "resultHeader", void 0), F = i([_("esri.rest.knowledgeGraph.GraphQueryResult")], F);
const me = F;
let D = class extends L {
  constructor(r) {
    super(r), this.resultRowsStream = new ReadableStream(), this.resultHeader = new V();
  }
};
i([s()], D.prototype, "resultRowsStream", void 0), i([s()], D.prototype, "resultHeader", void 0), D = i([_("esri.rest.knowledgeGraph.GraphQueryStreamingResult")], D);
const we = D;
let R = class extends O {
  constructor(r) {
    super(r), this.name = null, this.unique = null, this.ascending = null, this.description = null, this.fieldNames = null;
  }
};
i([s({ type: String, json: { write: !0 } })], R.prototype, "name", void 0), i([s({ type: Boolean, json: { write: !0 } })], R.prototype, "unique", void 0), i([s({ type: Boolean, json: { write: !0 } })], R.prototype, "ascending", void 0), i([s({ type: String, json: { write: !0 } })], R.prototype, "description", void 0), i([s({ type: [String], json: { write: !0 } })], R.prototype, "fieldNames", void 0), R = i([_("esri.rest.knowledgeGraph.FieldIndex")], R);
const Pe = R;
let g = class extends O {
  constructor(r) {
    super(r), this.name = null, this.alias = null, this.fieldType = null, this.geometryType = null, this.hasM = null, this.hasZ = null, this.nullable = null, this.editable = null, this.required = null, this.defaultVisibility = null, this.systemMaintained = null, this.role = null, this.defaultValue = null;
  }
};
i([s({ type: String, json: { write: !0 } })], g.prototype, "name", void 0), i([s({ type: String, json: { write: !0 } })], g.prototype, "alias", void 0), i([s({ type: String, json: { write: !0 } })], g.prototype, "fieldType", void 0), i([s({ type: String, json: { write: !0 } })], g.prototype, "geometryType", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "hasM", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "hasZ", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "nullable", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "editable", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "required", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "defaultVisibility", void 0), i([s({ type: Boolean, json: { write: !0 } })], g.prototype, "systemMaintained", void 0), i([s()], g.prototype, "role", void 0), i([s({ json: { write: !0 } })], g.prototype, "defaultValue", void 0), g = i([_("esri.rest.knowledgeGraph.GraphProperty")], g);
const xe = g;
let I = class extends O {
  constructor(r) {
    super(r), this.name = null, this.alias = null, this.role = null, this.strict = null, this.properties = null, this.fieldIndexes = null, this.type = null;
  }
};
i([s({ type: String, json: { write: !0 } })], I.prototype, "name", void 0), i([s({ type: String, json: { write: !0 } })], I.prototype, "alias", void 0), i([s({ type: String, json: { write: !0 } })], I.prototype, "role", void 0), i([s({ type: Boolean, json: { write: !0 } })], I.prototype, "strict", void 0), i([s({ type: [xe], json: { write: !0 } })], I.prototype, "properties", void 0), i([s({ type: [Pe], json: { write: !0 } })], I.prototype, "fieldIndexes", void 0), I = i([_("esri.rest.knowledgeGraph.GraphObjectType")], I);
const Me = I;
let X = class extends Me {
  constructor(r) {
    super(r), this.type = "entity";
  }
};
X = i([_("esri.rest.knowledgeGraph.EntityType")], X);
const ee = X;
let q = class extends Me {
  constructor(r) {
    super(r), this.endPoints = [], this.type = "relationship";
  }
};
i([s()], q.prototype, "endPoints", void 0), q = i([_("esri.rest.knowledgeGraph.RelationshipType")], q);
const ke = q;
let m = class extends O {
  constructor(r) {
    super(r), this.timestamp = null, this.spatialReference = null, this.strict = null, this.objectIdField = null, this.globalIdField = null, this.arcgisManaged = null, this.identifierInfo = null, this.searchIndexes = null, this.entityTypes = null, this.relationshipTypes = null, this.metaEntityTypes = null;
  }
};
i([s({ type: Date, json: { type: Number, write: { writer: (e, r) => {
  r.timestamp = e?.getTime();
} } } })], m.prototype, "timestamp", void 0), i([s({ type: z, json: { write: !0 } })], m.prototype, "spatialReference", void 0), i([s({ type: Boolean, json: { write: !0 } })], m.prototype, "strict", void 0), i([s({ type: String, json: { write: !0 } })], m.prototype, "objectIdField", void 0), i([s({ type: String, json: { write: !0 } })], m.prototype, "globalIdField", void 0), i([s()], m.prototype, "arcgisManaged", void 0), i([s()], m.prototype, "identifierInfo", void 0), i([s()], m.prototype, "searchIndexes", void 0), i([s({ type: [ee], json: { write: !0 } })], m.prototype, "entityTypes", void 0), i([s({ type: [ke], json: { write: !0 } })], m.prototype, "relationshipTypes", void 0), i([s({ type: [ee], json: { write: !0 } })], m.prototype, "metaEntityTypes", void 0), m = i([_("esri.rest.knowledgeGraph.DataModel")], m);
const Oe = m;
let h = class extends O {
  constructor(r) {
    super(r), this.capabilities = [], this.supportsSearch = !1, this.supportedQueryFormats = [], this.allowGeometryUpdates = !1, this.searchMaxRecordCount = null, this.serviceCapabilities = null, this.maxRecordCount = null, this.description = "", this.copyrightText = "", this.units = "", this.spatialReference = null, this.currentVersion = null, this.dateFieldsTimeReference = null, this.serviceItemId = "", this.supportsDocuments = !1, this.dataEditingNotSupported = !1, this.schemaEditingNotSupported = !1, this.supportsProvenance = !1;
  }
};
i([s({ type: [String], json: { write: !0 } })], h.prototype, "capabilities", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "supportsSearch", void 0), i([s({ type: [String], json: { write: !0 } })], h.prototype, "supportedQueryFormats", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "allowGeometryUpdates", void 0), i([s({ type: Number, json: { write: !0 } })], h.prototype, "searchMaxRecordCount", void 0), i([s({ type: Object, json: { write: !0 } })], h.prototype, "serviceCapabilities", void 0), i([s({ type: Number, json: { write: !0 } })], h.prototype, "maxRecordCount", void 0), i([s({ type: String, json: { write: !0 } })], h.prototype, "description", void 0), i([s({ type: String, json: { write: !0 } })], h.prototype, "copyrightText", void 0), i([s({ type: String, json: { write: !0 } })], h.prototype, "units", void 0), i([s({ type: z, json: { write: !0 } })], h.prototype, "spatialReference", void 0), i([s({ type: Number, json: { write: !0 } })], h.prototype, "currentVersion", void 0), i([s({ type: Object, json: { write: !0 } })], h.prototype, "dateFieldsTimeReference", void 0), i([s({ type: String, json: { write: !0 } })], h.prototype, "serviceItemId", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "supportsDocuments", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "dataEditingNotSupported", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "schemaEditingNotSupported", void 0), i([s({ type: Boolean, json: { write: !0 } })], h.prototype, "supportsProvenance", void 0), h = i([_("esri.rest.knowledgeGraph.ServiceDefinition")], h);
const je = h;
let M = class extends O {
  constructor(r) {
    super(r), this.dataModel = null, this.serviceDefinition = null;
  }
};
i([s({ type: String, json: { write: !0 } })], M.prototype, "url", void 0), i([s({ type: Oe, json: { write: !0 } })], M.prototype, "dataModel", void 0), i([s({ type: je, json: { write: !0 } })], M.prototype, "serviceDefinition", void 0), M = i([_("esri.rest.knowledgeGraph.KnowledgeGraph")], M);
const He = M, _e = "esri/rest/knowledgeGraph/wasmInterface/";
let W;
async function S() {
  const e = W;
  if (e) return e;
  const r = Ue("wasm-simd");
  return W = Be(r), W;
}
async function Be(e) {
  if (e) {
    const { default: t } = await import("./arcgis-knowledge-client-core-simd-D6CHNaz9.js").then((n) => n.a);
    return t({ locateFile: (n) => ge(_e + n) });
  }
  const { default: r } = await import("./arcgis-knowledge-client-core-BWIexEoh.js").then((t) => t.a);
  return r({ locateFile: (t) => ge(_e + t) });
}
var P, ve, te;
(function(e) {
  e[e.OBJECT = 0] = "OBJECT", e[e.ENTITY = 1] = "ENTITY", e[e.RELATIONSHIP = 2] = "RELATIONSHIP", e[e.PATH = 3] = "PATH", e[e.ARRAY = 4] = "ARRAY";
})(P || (P = {})), function(e) {
  e[e.view = 0] = "view", e[e.edit = 1] = "edit";
}(ve || (ve = {})), function(e) {
  e[e.exclude = 0] = "exclude", e[e.include = 1] = "include";
}(te || (te = {}));
function $e(e, r) {
  const t = new r.ArrayValue();
  return t.deleteLater(), e.forEach((n) => {
    t.add_value(ue(n, r));
  }), t;
}
function Fe(e, r) {
  const t = new r.ObjectValue();
  t.deleteLater();
  for (const [n, o] of Object.entries(e)) t.set_key_value(n, ue(o, r));
  return t;
}
function de(e, r) {
  if (e instanceof Ie) return Je(e, r);
  if (e instanceof Re) return Xe(e, r);
  if (e instanceof pe || e instanceof le) return Ze(e, r);
  throw new d("knowledge-graph:unsupported-geometry", "Only Point, Multipoint, Polyline, and Polygon geometry are supported by ArcGIS Knowledge", { geometry: e });
}
function Ve(e, r) {
  r.input_quantization_parameters = { xy_resolution: e.xyResolution, x_false_origin: e.xFalseOrigin, y_false_origin: e.yFalseOrigin, z_resolution: e.zResolution, z_false_origin: e.zFalseOrigin, m_resolution: e.mResolution, m_false_origin: e.mFalseOrigin };
}
function We(e, r, t) {
  if (!e.extent) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization provided to the encoder had an illegal value as part of its extent", e.extent);
  if (!e.quantizeMode) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal mode setting", e.quantizeMode);
  if (!e.tolerance) throw new d("knowledge-graph:illegal-output-quantization", "The Output quantization contained an illegal tolerance setting", e.quantizeMode);
  r.output_quantization_parameters = { extent: { xmax: e.extent.xmax, ymax: e.extent.ymax, xmin: e.extent.xmin, ymin: e.extent.ymin }, quantize_mode: t.esriQuantizeMode[e.quantizeMode], tolerance: e.tolerance };
}
function Ke(e, r) {
  r.provenance_behavior = { value: te[e] };
}
function ue(e, r) {
  if (e == null) return "";
  if (typeof e != "object" || e instanceof Date) return e;
  if (e instanceof se) return de(e, r);
  if (Array.isArray(e)) {
    const t = new r.ArrayValue();
    return t.deleteLater(), e.forEach((n) => {
      t.add_value(ue(n, r));
    }), t;
  }
  return Fe(e, r);
}
function Ze(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  let a = [];
  e instanceof pe ? (t.geometry_type = r.esriGeometryType.esriGeometryPolyline, a = e.paths) : e instanceof le && (t.geometry_type = r.esriGeometryType.esriGeometryPolygon, a = e.rings);
  let p = 0, l = 0;
  return a.forEach((c) => {
    let u = 0;
    c.forEach((y) => {
      u++, y.forEach((T) => {
        n[l] = T, l++;
      });
    }), o[p] = u, p++;
  }), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function Je(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.geometry_type = t.geometry_type = r.esriGeometryType.esriGeometryMultipoint, t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  o[0] = e.points.length;
  let a = 0;
  return e.points.forEach((p) => {
    p.forEach((l) => {
      n[a] = l, a++;
    });
  }), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function Xe(e, r) {
  const t = new r.GeometryValue();
  t.deleteLater(), t.geometry_type = r.esriGeometryType.esriGeometryPoint, t.has_z = e.hasZ, t.has_m = e.hasM;
  const n = [], o = [];
  o[0] = 1, n[0] = e.x, n[1] = e.y;
  let a = 2;
  return e.hasZ && (n[a] = e.z, a++), e.hasM && (n[a] = e.m, a++), t.coords = new Float64Array(n), t.lengths = new Uint32Array(o), t;
}
function C(e, r) {
  if (!e.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits");
  if (e instanceof Se) {
    const t = new r.EntityValue();
    t.deleteLater(), t.type_name = e.typeName;
    for (const [n, o] of Object.entries(e.properties)) t.set_key_value(n, Te(o, r));
    return e.id && t.set_id(e.id), t;
  }
  if (e instanceof be) {
    const t = new r.RelationshipValue();
    t.deleteLater(), t.type_name = e.typeName;
    for (const [n, o] of Object.entries(e.properties)) t.set_key_value(n, Te(o, r));
    return e.id && t.set_id(e.id), e.originId && e.destinationId && t.set_related_entity_ids(e.originId, e.destinationId), t;
  }
  throw new d("knowledge-graph:applyEdits-encoding-failure", "Could not determine the type of a named graph object passed to the encoder");
}
function et(e) {
  return { xy_resolution: e.xyResolution, x_false_origin: e.xFalseOrigin, y_false_origin: e.yFalseOrigin, z_resolution: e.zResolution, z_false_origin: e.zFalseOrigin, m_resolution: e.mResolution, m_false_origin: e.mFalseOrigin };
}
function Te(e, r) {
  return e == null ? null : typeof e != "object" || e instanceof Date ? e : e instanceof se ? de(e, r) : null;
}
let b = class extends L {
  constructor(r) {
    super(r), this.name = null, this.supportedCategory = null, this.analyzers = [], this.searchProperties = /* @__PURE__ */ new Map();
  }
};
i([s()], b.prototype, "name", void 0), i([s()], b.prototype, "supportedCategory", void 0), i([s()], b.prototype, "analyzers", void 0), i([s()], b.prototype, "searchProperties", void 0), b = i([_("esri.rest.knowledgeGraph.SearchIndex")], b);
const tt = b;
var Q, H, B, re, ne, oe, ie;
(function(e) {
  e[e.Regular = 0] = "Regular", e[e.Provenance = 1] = "Provenance", e[e.Document = 2] = "Document";
})(Q || (Q = {})), function(e) {
  e[e.esriFieldTypeSmallInteger = 0] = "esriFieldTypeSmallInteger", e[e.esriFieldTypeInteger = 1] = "esriFieldTypeInteger", e[e.esriFieldTypeSingle = 2] = "esriFieldTypeSingle", e[e.esriFieldTypeDouble = 3] = "esriFieldTypeDouble", e[e.esriFieldTypeString = 4] = "esriFieldTypeString", e[e.esriFieldTypeDate = 5] = "esriFieldTypeDate", e[e.esriFieldTypeOID = 6] = "esriFieldTypeOID", e[e.esriFieldTypeGeometry = 7] = "esriFieldTypeGeometry", e[e.esriFieldTypeBlob = 8] = "esriFieldTypeBlob", e[e.esriFieldTypeRaster = 9] = "esriFieldTypeRaster", e[e.esriFieldTypeGUID = 10] = "esriFieldTypeGUID", e[e.esriFieldTypeGlobalID = 11] = "esriFieldTypeGlobalID", e[e.esriFieldTypeXML = 12] = "esriFieldTypeXML", e[e.esriFieldTypeBigInteger = 13] = "esriFieldTypeBigInteger", e[e.esriFieldTypeDateOnly = 14] = "esriFieldTypeDateOnly", e[e.esriFieldTypeTimeOnly = 15] = "esriFieldTypeTimeOnly", e[e.esriFieldTypeTimestampOffset = 16] = "esriFieldTypeTimestampOffset";
}(H || (H = {})), function(e) {
  e[e.esriGeometryNull = 0] = "esriGeometryNull", e[e.esriGeometryPoint = 1] = "esriGeometryPoint", e[e.esriGeometryMultipoint = 2] = "esriGeometryMultipoint", e[e.esriGeometryPolyline = 3] = "esriGeometryPolyline", e[e.esriGeometryPolygon = 4] = "esriGeometryPolygon", e[e.esriGeometryEnvelope = 5] = "esriGeometryEnvelope", e[e.esriGeometryAny = 6] = "esriGeometryAny", e[e.esriGeometryMultiPatch = 7] = "esriGeometryMultiPatch";
}(B || (B = {})), function(e) {
  e[e.esriMethodHintUNSPECIFIED = 0] = "esriMethodHintUNSPECIFIED", e[e.esriUUIDESRI = 1] = "esriUUIDESRI", e[e.esriUUIDRFC4122 = 2] = "esriUUIDRFC4122";
}(re || (re = {})), function(e) {
  e[e.esriTypeUNSPECIFIED = 0] = "esriTypeUNSPECIFIED", e[e.esriTypeEntity = 1] = "esriTypeEntity", e[e.esriTypeRelationship = 2] = "esriTypeRelationship", e[e.esriTypeBoth = 4] = "esriTypeBoth";
}(ne || (ne = {})), function(e) {
  e[e.esriGraphPropertyUNSPECIFIED = 0] = "esriGraphPropertyUNSPECIFIED", e[e.esriGraphPropertyRegular = 1] = "esriGraphPropertyRegular", e[e.esriGraphPropertyDocumentName = 2] = "esriGraphPropertyDocumentName", e[e.esriGraphPropertyDocumentTitle = 3] = "esriGraphPropertyDocumentTitle", e[e.esriGraphPropertyDocumentUrl = 4] = "esriGraphPropertyDocumentUrl", e[e.esriGraphPropertyDocumentText = 5] = "esriGraphPropertyDocumentText", e[e.esriGraphPropertyDocumentKeywords = 6] = "esriGraphPropertyDocumentKeywords", e[e.esriGraphPropertyDocumentContentType = 7] = "esriGraphPropertyDocumentContentType", e[e.esriGraphPropertyDocumentMetadata = 8] = "esriGraphPropertyDocumentMetadata", e[e.esriGraphPropertyDocumentFileExtension = 9] = "esriGraphPropertyDocumentFileExtension", e[e.esriGraphPropertyProvenanceInstanceId = 10] = "esriGraphPropertyProvenanceInstanceId", e[e.esriGraphPropertyProvenanceSourceType = 11] = "esriGraphPropertyProvenanceSourceType", e[e.esriGraphPropertyProvenanceSourceName = 12] = "esriGraphPropertyProvenanceSourceName", e[e.esriGraphPropertyProvenanceSource = 13] = "esriGraphPropertyProvenanceSource", e[e.esriGraphPropertyProvenanceComment = 14] = "esriGraphPropertyProvenanceComment", e[e.esriGraphPropertyProvenanceTypeName = 15] = "esriGraphPropertyProvenanceTypeName", e[e.esriGraphPropertyProvenancePropertyName = 16] = "esriGraphPropertyProvenancePropertyName";
}(oe || (oe = {})), function(e) {
  e[e.esriIdentifierInfoTypeUNSPECIFIED = 0] = "esriIdentifierInfoTypeUNSPECIFIED", e[e.esriIdentifierInfoTypeDatabaseNative = 1] = "esriIdentifierInfoTypeDatabaseNative", e[e.esriIdentifierInfoTypeUniformProperty = 2] = "esriIdentifierInfoTypeUniformProperty";
}(ie || (ie = {}));
function rt(e) {
  return e.deleteLater(), new Oe({ timestamp: e.timestamp, spatialReference: new z(e.spatial_reference), strict: e.strict, objectIdField: e.objectid_property, globalIdField: e.globalid_property, arcgisManaged: e.arcgis_managed, identifierInfo: { identifierMappingInfo: { identifierInfoType: ie[e.identifier_info?.identifier_mapping_info?.identifier_info_type?.value], databaseNativeIdentifier: e.identifier_info?.identifier_mapping_info?.database_native_identifier, uniformPropertyIdentifier: { identifierPropertyName: e.identifier_info?.identifier_mapping_info?.uniform_property_identifier?.identifier_property_name } }, identifierGenerationInfo: { uuidMethodHint: re[e.identifier_info?.identifier_generation_info?.uuid_method_hint?.value] } }, searchIndexes: ut(e.search_indexes), entityTypes: Ee(e.entity_types), relationshipTypes: dt(e.relationship_types), metaEntityTypes: Ee(e.meta_entity_types) });
}
function nt(e) {
  return e.deleteLater(), new ee(De(e));
}
function ot(e) {
  return e.deleteLater(), new Pe({ name: e.name, unique: e.unique, ascending: e.ascending, description: e.description, fieldNames: st(e.fields) });
}
function De(e) {
  return { name: e.name, alias: e.alias, role: Q[e.role.value] ? Q[e.role.value] : null, strict: e.strict, properties: pt(e.properties), fieldIndexes: lt(e.field_indexes) };
}
function it(e) {
  return e.deleteLater(), new xe({ alias: e.alias, name: e.name, fieldType: H[e.field_type.value] ? H[e.field_type.value] : null, geometryType: B[e.geometry_type.value] ? B[e.geometry_type.value] : null, hasM: e.has_m, hasZ: e.has_z, nullable: e.nullable, editable: e.editable, required: e.required, defaultVisibility: e.default_visibility, systemMaintained: e.system_maintained, role: oe[e.role.value], defaultValue: e.default_value });
}
function at(e) {
  e.deleteLater();
  const r = De(e), t = [];
  for (let n = 0; n < e.end_points.size(); n++) {
    const o = e.end_points.get(n);
    t.push({ originEntityType: o.origin_entity_type, destinationEntityType: o.dest_entity_type });
  }
  return e.end_points.delete(), new ke(Object.assign({ endPoints: t }, r));
}
function Ee(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(nt(e.get(t)));
  return e.delete(), r;
}
function st(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(e.get(t));
  return e.delete(), r;
}
function pt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(it(e.get(t)));
  return e.delete(), r;
}
function lt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(ot(e.get(t)));
  return e.delete(), r;
}
function dt(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) r.push(at(e.get(t)));
  return e.delete(), r;
}
function ut(e) {
  const r = [];
  for (let t = 0; t < e.size(); t++) {
    const n = new tt(), o = e.get(0);
    n.name = o.name, n.supportedCategory = ne[o.supported_category.value];
    const a = o.analyzers.size();
    for (let p = 0; p < a; p++) n.analyzers.push({ name: o.analyzers.get(p).name });
    o.analyzers.delete();
    for (let p = 0; p < o.search_properties.keys().size(); p++) {
      const l = o.search_properties.keys().get(p), c = o.search_properties.get(l), u = [];
      for (let y = 0; y < c.property_names.size(); y++) u.push(c.property_names.get(y));
      n.searchProperties.set(l, { propertyNames: u });
    }
    r.push(n);
  }
  return e.delete(), r;
}
var v;
(function(e) {
  e[e.ESRI_GEOMETRY_NULL = 0] = "ESRI_GEOMETRY_NULL", e[e.ESRI_GEOMETRY_POINT = 1] = "ESRI_GEOMETRY_POINT", e[e.ESRI_GEOMETRY_MULTIPOINT = 2] = "ESRI_GEOMETRY_MULTIPOINT", e[e.ESRI_GEOMETRY_POLYLINE = 3] = "ESRI_GEOMETRY_POLYLINE", e[e.ESRI_GEOMETRY_POLYGON = 4] = "ESRI_GEOMETRY_POLYGON", e[e.ESRI_GEOMETRY_ENVELOPE = 5] = "ESRI_GEOMETRY_ENVELOPE", e[e.ESRI_GEOMETRY_ANY = 6] = "ESRI_GEOMETRY_ANY", e[e.ESRI_GEOMETRY_MULTI_PATCH = 7] = "ESRI_GEOMETRY_MULTI_PATCH";
})(v || (v = {}));
function ct(e, r) {
  const t = { spatialReference: r }, n = ce(e, t), o = e.lengths, a = e.coords, p = o[0];
  t.points = [];
  let l = 0;
  for (let c = 0; c < p; c++) {
    const u = [];
    for (let y = 0; y < n; y++) u[y] = a[l], l++;
    t.points.push(u);
  }
  return new Ie(t);
}
function yt(e, r) {
  const t = { spatialReference: r };
  let n = 2;
  ce(e, t);
  const o = e.coords;
  return t.x = o[0], t.y = o[1], e.has_z && (t.z = o[n], n++), e.has_m && (t.m = o[n]), new Re(t);
}
function ht(e, r) {
  return new pe(Ne(e, r));
}
function ft(e, r) {
  return new le(Ne(e, r));
}
function Ne(e, r) {
  const t = { spatialReference: r }, n = ce(e, t), o = e.lengths, a = e.coords;
  let p = "";
  if (e.geometry_type.value === v.ESRI_GEOMETRY_POLYGON) p = "rings";
  else {
    if (e.geometry_type.value !== v.ESRI_GEOMETRY_POLYLINE) throw new d("KnowledgeGraph:illegal-geometry-type", "Illegal Geometry type for multipath conversion");
    p = "paths";
  }
  t[p] = [];
  let l = 0;
  return o.forEach((c) => {
    const u = [];
    for (let y = 0; y < c; y++) {
      const T = [];
      for (let G = 0; G < n; G++) T[G] = a[l], l++;
      u.push(T);
    }
    t[p].push(u);
  }), t;
}
function ce(e, r) {
  let t = 2;
  return e.has_z ? (r.hasZ = e.has_z, t++) : r.hasZ = !1, e.has_m ? (r.hasM = e.has_m, t++) : r.hasM = !1, t;
}
const U = () => J.getLogger("esri.rest.knowledgeGraph.WasmToQueryResponseObjConstructors"), gt = { decodedWasmObjToQueryResponseObj: (e, r, t) => {
  if (e == null) return null;
  if (typeof e != "object" || "getDate" in e) return e;
  if ("geometry_type" in e) switch (e.geometry_type.value) {
    case null:
      return null;
    case v.ESRI_GEOMETRY_POINT:
      return yt(e, t);
    case v.ESRI_GEOMETRY_MULTIPOINT:
      return ct(e, t);
    case v.ESRI_GEOMETRY_POLYLINE:
      return ht(e, t);
    case v.ESRI_GEOMETRY_POLYGON:
      return ft(e, t);
    case v.ESRI_GEOMETRY_ENVELOPE:
    case v.ESRI_GEOMETRY_MULTI_PATCH:
      return U().warnOnce("Envelope and Multipatch are not supported on knowledge entities, but one of those geometry types was detected. Result interpreted as null"), null;
    case v.ESRI_GEOMETRY_NULL:
    case v.ESRI_GEOMETRY_ANY:
    default:
      return U().warnOnce("Unknown or blank geometry type returned - Result interpreted as null"), null;
  }
  else {
    if (!("object_value_type" in e)) return U().warnOnce("A decoded value came back of a type that is not supported. Result interpreted as null"), null;
    switch (e.object_value_type.value) {
      case P.OBJECT:
        return wt(e, r, t);
      case P.ENTITY:
        return Le(e, r, t);
      case P.RELATIONSHIP:
        return ze(e, r, t);
      case P.PATH:
        return _t(e, r, t);
      case P.ARRAY:
        return mt(e, r, t);
      default:
        return U().warnOnce("Unknown graph object type detected!  Result interpreted as null"), null;
    }
  }
} };
function mt(e, r, t) {
  const n = [], o = e.count();
  for (let a = 0; a < o; a++) {
    const p = e.get_value_at(a);
    n.push(ye(p, r, t));
  }
  return n;
}
function ye(e, r, t) {
  return gt.decodedWasmObjToQueryResponseObj(e, r, t);
}
function Le(e, r, t) {
  const n = e.type_name, o = he(e, r, t), a = e.get_id();
  return new Se(Object.assign({ typeName: n, id: a }, o));
}
function he(e, r, t) {
  const n = {}, o = e.key_count();
  for (let a = 0; a < o; a++) n[e.get_key_at(a)] = ye(e.get_value_at(a), r, t);
  return { properties: n };
}
function wt(e, r, t) {
  return new Ye(he(e, r, t));
}
function _t(e, r, t) {
  const n = e.entity_count(), o = e.relationship_count(), a = [];
  for (let p = 0; p < n; p++) a.push(Le(e.get_entity_at(p), r, t)), p < o && a.push(ze(e.get_relationship_at(p), r, t));
  return new Qe({ path: a });
}
function ze(e, r, t) {
  const n = e.type_name, o = he(e, r, t);
  return new be(Object.assign({ typeName: n, id: e.get_id(), originId: e.get_origin_entity_id(), destinationId: e.get_destination_entity_id() }, o));
}
function vt(e) {
  const r = [];
  for (let n = 0; n < e.get_header_keys().size(); n++) r.push(e.get_header_keys().get(n));
  const t = new z(e.get_out_sr());
  return new V({ headerKeys: r, outSpatialReference: t, exceededTransferLimit: e.exceeded_transfer_limit() });
}
let k = class extends L {
  constructor(r) {
    super(r), this.hasError = null, this.error = null, this.editResults = [];
  }
};
i([s()], k.prototype, "hasError", void 0), i([s()], k.prototype, "error", void 0), i([s()], k.prototype, "editResults", void 0), k = i([_("esri.rest.knowledgeGraph.GraphApplyEditsResult")], k);
const Tt = k;
function Et(e) {
  const r = e.has_error(), t = new Tt({ hasError: r, error: r ? { errorCode: e.error.error_code, errorMessage: e.error.error_message } : null }), n = e.get_edit_results_count();
  for (let o = 0; o < n; o++) {
    const a = e.get_edit_results_at(o), p = e.get_edit_results_type_name_at(o), l = [], c = [], u = [], y = a.get_add_results_count(), T = a.get_update_results_count(), G = a.get_delete_results_count();
    for (let w = 0; w < y; w++) {
      const f = a.get_add_result_at(w);
      l.push({ id: f.id, error: { errorCode: f.error.error_code, errorMessage: f.error.error_message } });
    }
    for (let w = 0; w < T; w++) {
      const f = a.get_update_result_at(w);
      c.push({ id: f.id, error: { errorCode: f.error.error_code, errorMessage: f.error.error_message } });
    }
    for (let w = 0; w < G; w++) {
      const f = a.get_delete_result_at(w);
      u.push({ id: f.id, error: { errorCode: f.error.error_code, errorMessage: f.error.error_message } });
    }
    t.editResults.push({ typeName: p, adds: l, updates: c, deletes: u });
  }
  return t;
}
const E = { fetchKnowledgeGraph: async (e) => {
  const r = new He({ url: e }), t = [];
  return t.push(A(r)), t.push(Ae(r)), await Promise.all(t), r;
}, refreshDataModel: async (e) => {
  e.dataModel = await Ce(e);
}, refreshServiceDefinition: async (e) => {
  const r = (await N(e.url, { query: { f: "json" } })).data;
  return r.capabilities = r?.capabilities?.split(","), r.supportedQueryFormats = r?.supportedQueryFormats?.split(","), e.serviceDefinition = new je(r), e.serviceDefinition;
}, executeQueryStreaming: async (e, r, t) => {
  const n = "include", o = `${e.url}/graph/query`;
  await K(e);
  const a = await Z(o, t);
  if (!e.serviceDefinition?.supportsProvenance && r.provenanceBehavior === n) throw new d("knowledge-graph:provenance-not-supported", "The Knowledge Graph Service definition indicated that provenance is not supported");
  a.data.body = await kt(r, e);
  const p = await Y(a.data.url, a.data);
  if (e.dataModel) {
    const l = await Ge(p, e.dataModel);
    return new we({ resultRowsStream: l.readableStream, resultHeader: l.resultHeader });
  }
  throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, executeApplyEdits: async (e, r, t) => {
  if (e.serviceDefinition?.dataEditingNotSupported) throw new d("knowledge-graph:data-editing-not-supported", "The Knowledge Graph Service definition indicated that data editing is not supported");
  const n = `${e.url}/graph/applyEdits`;
  await K(e);
  const o = await Z(n, t);
  return o.data.body = await Mt(r, e), jt(await Y(o.data.url, o.data));
}, executeQuery: async (e, r, t) => {
  const n = `${e.url}/graph/query`, o = await N(n, { responseType: "array-buffer", query: { f: "pbf", openCypherQuery: r.openCypherQuery, ...t?.query }, signal: t?.signal, timeout: t?.timeout }), a = o.getHeader?.("content-type"), p = o.data;
  if (a?.includes("application/x-protobuf")) {
    const l = new (await S()).GraphQueryDecoder();
    if (l.deleteLater(), e.dataModel) {
      const c = ae(l, p, e.dataModel);
      return new me({ resultRows: c.resultRows, resultHeader: c.resultHeader });
    }
    throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: a, data: o.data });
}, executeSearch: async (e, r, t) => {
  const n = r.typeCategoryFilter, o = `${e.url}/graph/search`, a = await N(o, { responseType: "array-buffer", query: { f: "pbf", searchQuery: `"${r.searchQuery}"`, typeCategoryFilter: n, ...t?.query }, signal: t?.signal, timeout: t?.timeout }), p = a.getHeader?.("content-type"), l = a.data;
  if (p?.includes("application/x-protobuf")) {
    const c = new (await S()).GraphQueryDecoder();
    if (c.deleteLater(), e.dataModel) {
      const u = ae(c, l, e.dataModel);
      return new me({ resultRows: u.resultRows, resultHeader: u.resultHeader });
    }
    throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: p, data: a.data });
}, executeSearchStreaming: async (e, r, t) => {
  const n = `${e.url}/graph/search`;
  await K(e);
  const o = await Z(n, t);
  o.data.body = await Ot(r);
  const a = await Y(o.data.url, o.data);
  if (e.dataModel) {
    const p = await Ge(a, e.dataModel);
    return new we({ resultRowsStream: p.readableStream, resultHeader: p.resultHeader });
  }
  throw new d("knowledge-graph:undefined-data-model", "The KnowledgeGraph supplied did not have a data model");
}, _fetchWrapper: async (e, r) => fetch(e, r) };
async function Gt(e, r, t) {
  return E.executeApplyEdits(e, r, t);
}
async function It(e, r, t) {
  return E.executeQuery(e, r, t);
}
async function Rt(e, r, t) {
  return E.executeQueryStreaming(e, r, t);
}
async function St(e, r, t) {
  return E.executeSearch(e, r, t);
}
async function bt(e, r, t) {
  return E.executeSearchStreaming(e, r, t);
}
async function Pt(e) {
  return E.fetchKnowledgeGraph(e);
}
async function A(e) {
  return E.refreshDataModel(e);
}
async function Ae(e) {
  return E.refreshServiceDefinition(e);
}
async function Y(e, r) {
  return E._fetchWrapper(e, r);
}
async function K(e) {
  qe?.findCredential(e.url) || (e.dataModel ? await Ce(e) : await A(e));
}
function $(e, r, t) {
  if (e.error_code !== 0) throw new d(r, t, { errorCode: e.error_code, errorMessage: e.error_message });
}
function xt(e, r, t, n) {
  r == null ? t.set_param_key_value(e, "") : typeof r != "object" || r instanceof Date ? t.set_param_key_value(e, r) : r instanceof se ? t.set_param_key_value(e, de(r, n)) : Array.isArray(r) ? t.set_param_key_value(e, $e(r, n)) : t.set_param_key_value(e, Fe(r, n));
}
async function Mt(e, r) {
  if (r.dataModel || await A(r), !r.dataModel) throw new d("knowledge-graph:data-model-undefined", "Encoding could not proceed because a data model was not provided and it could not be determined from the service");
  const t = await S(), n = !!e.options?.cascadeDelete, o = new t.GraphApplyEditsEncoder(t.SpatialReferenceUtil.WGS84(), e.options?.inputQuantizationParameters ? et(e.options?.inputQuantizationParameters) : t.InputQuantizationUtil.WGS84_lossless());
  o.deleteLater(), o.cascade_delete = n;
  try {
    let p;
    e.entityAdds?.forEach((l) => {
      p = o.add_entity(C(l, t)), $(p, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e.relationshipAdds?.forEach((l) => {
      if (!l.originId || !l.destinationId) throw new d("knowledge-graph:relationship-origin-destination-missing", "When adding a new relationship, you must provide both an origin and destination id on the appropriate class property");
      p = o.add_relationship(C(l, t)), $(p, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e.entityUpdates?.forEach((l) => {
      if (!l.id) throw new d("knowledge-graph:entity-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      p = o.update_entity(C(l, t)), $(p, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - an entity failed to be added to the encoder");
    }), e.relationshipUpdates?.forEach((l) => {
      if (!l.id) throw new d("knowledge-graph:relationship-id-missing", "When updating an entity or relationship, you must specify the id on the class level property");
      p = o.update_relationship(C(l, t)), $(p, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits - a relationship failed to be added to the encoder");
    }), e.entityDeletes?.forEach((l) => {
      if (!l.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const c = o.make_delete_helper(l.typeName, !0);
      c.deleteLater(), l.ids?.forEach((u) => {
        c.delete_by_id(u);
      });
    }), e.relationshipDeletes?.forEach((l) => {
      if (!l.typeName) throw new d("knowledge-graph:no-type-name", "You must indicate the entity/relationship named object type to apply edits - delete");
      const c = o.make_delete_helper(l.typeName, !1);
      l.ids?.forEach((u) => {
        c.delete_by_id(u);
      });
    }), o.encode();
  } catch (p) {
    throw new d("knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed", { error: p });
  }
  const a = o.get_encoding_result();
  return $(a.error, "knowledge-graph:applyEdits-encoding-failed", "Attempting to encode the applyEdits failed"), structuredClone(a.get_byte_buffer());
}
async function kt(e, r) {
  const t = await S(), n = new t.GraphQueryRequestEncoder();
  if (n.deleteLater(), e.outputSpatialReference ? n.output_spatial_reference = { wkid: e.outputSpatialReference.wkid, latestWkid: e.outputSpatialReference.latestWkid, vcsWkid: e.outputSpatialReference.vcsWkid, latestVcsWkid: e.outputSpatialReference.latestVcsWkid, wkt: e.outputSpatialReference.wkt ?? "" } : n.output_spatial_reference = t.SpatialReferenceUtil.WGS84(), n.open_cypher_query = e.openCypherQuery, e.bindParameters) for (const [a, p] of Object.entries(e.bindParameters)) xt(a, p, n, t);
  if (e.bindGeometryQuantizationParameters) Ve(e.bindGeometryQuantizationParameters, n);
  else {
    if (r.dataModel || await A(r), r.dataModel?.spatialReference?.wkid !== 4326) throw new d("knowledge-graph:SR-quantization-mismatch", "If the DataModel indicates a coordinate system other than WGS84, inputQuantizationParameters must be provided to the query encoder");
    n.input_quantization_parameters = t.InputQuantizationUtil.WGS84_lossless();
  }
  e.outputQuantizationParameters && We(e.outputQuantizationParameters, n, t), e.provenanceBehavior && Ke(e.provenanceBehavior, n);
  try {
    n.encode();
  } catch (a) {
    throw new d("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { error: a });
  }
  const o = n.get_encoding_result();
  if (o.error.error_code !== 0) throw new d("knowledge-graph:query-encoding-failed", "Attempting to encode the query failed", { errorCode: o.error.error_code, errorMessage: o.error.error_message });
  return structuredClone(o.get_byte_buffer());
}
async function Ot(e) {
  const r = await S(), t = new r.GraphSearchRequestEncoder();
  if (t.deleteLater(), t.search_query = e.searchQuery, t.type_category_filter = r.esriNamedTypeCategory[e.typeCategoryFilter], e.returnSearchContext === !0 && (t.return_search_context = e.returnSearchContext), e.start != null && e.start > 0 && (t.start_index = e.start), e.num != null && (t.max_num_results = e.num), e.idsFilter != null && Array.isArray(e.idsFilter) && e.idsFilter.length > 0) try {
    t.set_ids_filter($e(e.idsFilter, r));
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
async function Z(e, r) {
  return N(e, { responseType: "native-request-init", method: "post", query: { f: "pbf", ...r?.query }, body: "x", headers: { "Content-Type": "application/octet-stream" }, signal: r?.signal, timeout: r?.timeout });
}
async function jt(e) {
  const r = e.headers.get("content-type");
  if (r?.includes("application/x-protobuf")) {
    const t = await e.arrayBuffer(), n = new (await S()).GraphApplyEditsDecoder();
    return n.deleteLater(), n.decode(new Uint8Array(t)), Et(n);
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: r, data: e.text() });
}
function ae(e, r, t, n) {
  e.push_buffer(new Uint8Array(r));
  const o = [];
  let a, p, l = 0;
  for (; e.next_row(); ) {
    a && p || (a = n ?? vt(e), p = a.outSpatialReference ?? new z({ wkid: 4326 })), l || (l = e.get_header_keys().size());
    const c = new Array(l);
    for (let u = 0; u < l; u++) {
      const y = e.get_value(u);
      c[u] = ye(y, t, p);
    }
    o.push(c);
  }
  if (e.has_error()) throw new d("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - inner row decoding", { errorCode: e.error.error_code, errorMessage: e.error.error_message });
  return { resultHeader: a, resultRows: o };
}
async function Ge(e, r) {
  const t = e.headers.get("content-type");
  if (e.headers.get("content-length") && J.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").warnOnce("Found `Content-Length` header when expecting a streaming HTTP response! Please investigate whether all intermediate HTTP proxies and/or load balancers are configured such that they don't forcefully buffer the entire response before returning it to the client. A valid HTTP streaming response should use Chunked Transfer Encoding and not have a Content Length defined."), t?.includes("application/x-protobuf")) {
    const n = e.body?.getReader(), o = new (await S()).GraphQueryDecoder();
    let a, p, l;
    o.deleteLater();
    const c = new Promise((y, T) => {
      p = y, l = T;
    });
    let u = !1;
    return { readableStream: new ReadableStream({ async start(y) {
      try {
        return T();
      } catch (G) {
        n?.releaseLock(), y.error(new d("knowledge-graph:stream-decoding-error", "The server returned a valid response, but there was an error decoding the response stream", { error: G })), y.close();
      }
      function T() {
        return n?.read().then(({ done: G, value: w }) => {
          try {
            if (G) {
              let j;
              if (o.has_error() ? j = new d("knowledge-graph:stream-decoding-error", "One or more result rows were not successfully decoded - query stream done", { errorCode: o.error.error_code, errorMessage: o.error.error_message }) : u || p(new V()), n.releaseLock(), j) throw y.error(j), l(j), j;
              return void y.close();
            }
            const f = ae(o, w, r, a), fe = f.resultRows;
            return fe.length > 0 && y.enqueue(fe), !a && f.resultHeader && (a = f.resultHeader, p(f.resultHeader), u = !0), T();
          } catch (f) {
            throw J.getLogger("esri.rest.knowledgeGraph.knowledgeGraphService").error(f), l(f), new d("knowledge-graph:unexpected-server-response", "Error inside streaming data return parsing", { error: f });
          }
        });
      }
    } }), resultHeader: await c };
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: t, data: e.text() });
}
async function Ce(e) {
  const r = `${e.url}/dataModel/queryDataModel`, t = await N(r, { responseType: "array-buffer", query: { f: "pbf" } }), n = t.getHeader?.("content-type"), o = t.data;
  if (n?.includes("application/x-protobuf")) {
    const a = (await S()).decode_data_model_from_protocol_buffer(new Uint8Array(o));
    if (!a) throw new d("knowledge-graph:data-model-decode-failure", "The server responded to the data model query, but the response failed to be decoded.  This typically occurs when the Knowledge JS API (4.26 or later) is used with an unsupported backend (11.0 or earlier)");
    return rt(a);
  }
  throw new d("knowledge-graph:unexpected-server-response", "server returned an unexpected response", { responseType: n, data: t.data });
}
const Wt = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  _fetchWrapper: Y,
  executeApplyEdits: Gt,
  executeQuery: It,
  executeQueryStreaming: Rt,
  executeSearch: St,
  executeSearchStreaming: bt,
  fetchKnowledgeGraph: Pt,
  kgRestServices: E,
  refreshDataModel: A,
  refreshServiceDefinition: Ae
}, Symbol.toStringTag, { value: "Module" }));
export {
  Pt as R,
  Rt as T,
  Wt as k,
  S as r
};
//# sourceMappingURL=knowledgeGraphService-CdI4Y_ZD.js.map
