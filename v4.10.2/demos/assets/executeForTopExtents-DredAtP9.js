import{aw as p}from"./main-B5_XOOwi.js";import{f as n}from"./utils-DSGzLx6N.js";import{d as e}from"./queryTopFeatures-BdUKR_x8.js";import s from"./TopFeaturesQuery-BC6cXxL5.js";import"./preload-helper-ExcqyqRp.js";import"./normalizeUtils-CPO1YcIx.js";import"./normalizeUtilsCommon-HtTsMmEj.js";import"./utils-WXIwzruR.js";import"./query-DVCT1-_3.js";import"./pbfQueryUtils-5AsSoYmo.js";import"./pbf-C1YeVrwY.js";import"./OptimizedFeature-CIptWNVu.js";import"./OptimizedFeatureSet-Blu9Ckm7.js";import"./queryZScale-Cg1rQb43.js";import"./projection-DwpqUf7U.js";import"./projectBuffer-D86redIv.js";import"./TimeExtent-ClRYiBYy.js";async function g(m,r,i){const a=n(m),o=await e(a,s.from(r),{...i}),t=o.data.extent;return!t||isNaN(t.xmin)||isNaN(t.ymin)||isNaN(t.xmax)||isNaN(t.ymax)?{count:o.data.count,extent:null}:{count:o.data.count,extent:p.fromJSON(t)}}export{g as executeForTopExtents};
