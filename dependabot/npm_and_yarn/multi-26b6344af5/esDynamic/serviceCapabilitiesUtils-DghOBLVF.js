import{aZ as v,b2 as h,N as S}from"./main-0iYVBzEC.js";import{d as f}from"./infoFor3D-BeWnZejW.js";function e(t,s,r){return!!g(t,s,r)}function c(t,s,r){return g(t,s,r)}function g(t,s,r){return t&&t.hasOwnProperty(s)?t[s]:r}const A={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function Q(t){const s=t?.supportedSpatialAggregationStatistics?.map(r=>r.toLowerCase());return{envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function l(t,s){return!!t?.supportedOperationsWithCacheHint?.map(r=>r.toLowerCase())?.includes(s.toLowerCase())}function R(t){const s=t?.supportedStatisticTypes?.map(r=>r.toLowerCase());return{count:!!s?.includes("count"),sum:!!s?.includes("sum"),min:!!s?.includes("min"),max:!!s?.includes("max"),avg:!!s?.includes("avg"),var:!!s?.includes("var"),stddev:!!s?.includes("stddev"),percentileContinuous:!!s?.includes("percentile_continuous"),percentileDiscrete:!!s?.includes("percentile_discrete"),envelope:!!s?.includes("envelopeaggregate"),centroid:!!s?.includes("centroidaggregate"),convexHull:!!s?.includes("convexhullaggregate")}}function x(t){const s=t?.supportedNormalizationTypes?.map(r=>r.toLowerCase());return{field:!!s?.includes("field"),log:!!s?.includes("log"),naturalLog:!!s?.includes("naturallog"),percentOfTotal:!!s?.includes("percentoftotal"),squareRoot:!!s?.includes("squareroot")}}function F(t,s){return{analytics:B(t),attachment:T(t),data:D(t),metadata:w(t),operations:E(t.capabilities,t,s),query:b(t,s),queryAttributeBins:M(t),queryRelated:z(t),queryTopFeatures:I(t),editing:O(t)}}function B(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryAnalytics")}}function T(t){const s=t.attachmentProperties,r={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:l(t.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:e(t.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:e(t,"supportsAttachmentsResizing",!1)};return s&&Array.isArray(s)&&s.forEach(p=>{const o=A[p.name];o&&(r[o]=!!p.isEnabled)}),r}function D(t){return{isVersioned:e(t,"isDataVersioned",!1),isBranchVersioned:e(t,"isDataBranchVersioned",!1),supportsAttachment:e(t,"hasAttachments",!1),supportsM:e(t,"hasM",!1),supportsZ:e(t,"hasZ",!1)}}function w(t){return{supportsAdvancedFieldProperties:e(t,"supportsFieldDescriptionProperty",!1)}}function E(t,s,r){const p=t?t.toLowerCase().split(",").map(C=>C.trim()):[],o=r?S(r):null,y=p.includes(o!=null&&o.serverType==="MapServer"?"data":"query"),u=p.includes("editing")&&!s.datesInUnknownTimezone;let n=u&&p.includes("create"),a=u&&p.includes("delete"),i=u&&p.includes("update");const m=p.includes("changetracking"),d=s.advancedQueryCapabilities;return u&&!(n||a||i)&&(n=a=i=!0),{supportsCalculate:e(s,"supportsCalculate",!1),supportsTruncate:e(s,"supportsTruncate",!1),supportsValidateSql:e(s,"supportsValidateSql",!1),supportsAdd:n,supportsDelete:a,supportsEditing:u,supportsChangeTracking:m,supportsQuery:y,supportsQueryAnalytics:e(d,"supportsQueryAnalytic",!1),supportsQueryAttachments:e(d,"supportsQueryAttachments",!1),supportsQueryBins:e(d,"supportsQueryBins",!1),supportsQueryTopFeatures:e(d,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:e(s,"supportsAttachmentsResizing",!1),supportsSync:p.includes("sync"),supportsUpdate:i,supportsExceedsLimitStatistics:e(s,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:e(s,"supportsAsyncConvert3D",!1)}}function b(t,s){const r=t.advancedQueryCapabilities,p=t.ownershipBasedAccessControlForFeatures,o=t.archivingInfo,y=t.currentVersion,u=s?.includes("MapServer"),n=!u||y>=v("mapserver-pbf-version-support"),a=h(s),i=new Set((t.supportedQueryFormats??"").split(",").map(m=>m.toLowerCase().trim()));return{maxRecordCount:c(t,"maxRecordCount",void 0),maxRecordCountFactor:c(t,"maxRecordCountFactor",void 0),standardMaxRecordCount:c(t,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:Q(r),supportsCacheHint:e(r,"supportsQueryWithCacheHint",!1)||l(r,"query"),supportsCentroid:e(r,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:a,supportsCurrentUser:e(r,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:e(r,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:e(r,"supportsDisjointSpatialRel",!1),supportsDistance:e(r,"supportsQueryWithDistance",!1),supportsDistinct:e(r,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:e(r,"supportsReturningQueryExtent",!1),supportsFormatPBF:n&&i.has("pbf"),supportsFullTextSearch:e(r,"supportsFullTextSearch",!1),supportsGeometryProperties:e(r,"supportsReturningGeometryProperties",!1),supportsHavingClause:e(r,"supportsHavingClause",!1),supportsHistoricMoment:e(o,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:e(r,"supportsMaxRecordCountFactor",!1),supportsOrderBy:e(r,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:e(r,"supportsPagination",!1),supportsPercentileStatistics:e(r,"supportsPercentileStatistics",!1),supportsQuantization:e(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:e(t,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:e(p,"allowAnonymousToQuery",!0),supportsQueryByOthers:e(p,"allowOthersToQuery",!0),supportsQueryGeometry:e(t,"supportsReturningQueryGeometry",!1),supportsResultType:e(r,"supportsQueryWithResultType",!1),supportsReturnMesh:!!f(t.infoFor3D),supportsSpatialAggregationStatistics:e(r,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:e(r,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:e(t,"useStandardizedQueries",!1),supportsStatistics:e(r,"supportsStatistics",t.supportsStatistics),supportsTopFeaturesQuery:e(r,"supportsTopFeaturesQuery",!1),supportsTrueCurve:e(r,"supportsTrueCurve",!1),tileMaxRecordCount:c(t,"tileMaxRecordCount",void 0)}}function z(t){const s=t.advancedQueryCapabilities,r=e(s,"supportsAdvancedQueryRelated",!1);return{supportsPagination:e(s,"supportsQueryRelatedPagination",!1),supportsCount:r,supportsOrderBy:r,supportsCacheHint:l(s,"queryRelated")}}function I(t){return{supportsCacheHint:l(t.advancedQueryCapabilities,"queryTopFilter")}}function M(t){const s=t?t.queryBinsCapabilities:void 0;return{supportsDate:e(s,"supportsDateBin",!1),supportsFixedInterval:e(s,"supportsFixedIntervalBin",!1),supportsAutoInterval:e(s,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:e(s,"supportsFixedBoundariesBin",!1),supportsStackBy:e(s,"supportsStackBy",!1),supportsSplitBy:e(s,"supportsSplitBy",!1),supportsSnapToData:e(s,"supportsSnapToData",!1),supportsReturnFullIntervalBin:e(s,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:e(s,"supportsFirstDayOfWeek",!1),supportsNormalization:e(s,"supportsNormalization",!1),supportedStatistics:R(s),supportedNormalizationTypes:x(s)}}function O(t){const s=t.ownershipBasedAccessControlForFeatures,r=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:e(t,"allowGeometryUpdates",!0),supportsGlobalId:e(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:e(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:e(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:e(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:e(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:e(s,"allowAnonymousToDelete",!0),supportsDeleteByOthers:e(s,"allowOthersToDelete",!0),supportsUpdateByAnonymous:e(s,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:e(s,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:e(r,"supportsAsyncApplyEdits",!1),zDefault:c(t,"zDefault",void 0)}}function q(t){return{operations:{supportsAppend:e(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:e(t,"supportsExportClip",!1),supportsExportFrameset:e(t,"supportsExportFrameset",!1),supportsMensuration:e(t,"supportsMensuration",!1),supportsUpdate:e(t,"supportsUpdate",!1)}}}export{q as A,F as c};
