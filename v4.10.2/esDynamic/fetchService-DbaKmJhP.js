import{U as l}from"./main-kpG51UWM.js";async function o(a,e){const{data:t}=await l(a,{responseType:"json",query:{f:"json",...e?.customParameters,token:e?.apiKey}});return t}const p={BingMapsLayer:async()=>(await import("./BingMapsLayer-BigMnKl_.js")).default,BuildingSceneLayer:async()=>(await import("./BuildingSceneLayer-IIePcdNz.js")).default,CSVLayer:async()=>(await import("./CSVLayer-CJQy-BsL.js")).default,CatalogLayer:async()=>(await import("./CatalogLayer-BeO1fLsl.js")).default,DimensionLayer:async()=>(await import("./DimensionLayer-DFh7fPYo.js")).default,ElevationLayer:async()=>(await import("./ElevationLayer-G6y-P-jo.js")).default,FeatureLayer:async()=>(await import("./FeatureLayer-BrRKw5Si.js")).default,GeoJSONLayer:async()=>(await import("./GeoJSONLayer-BFFwDRph.js")).default,GeoRSSLayer:async()=>(await import("./GeoRSSLayer-DgF8xnYi.js")).default,GroupLayer:async()=>(await import("./GroupLayer-ER-XzoYr.js")).default,ImageryLayer:async()=>(await import("./ImageryLayer-B-bJb8lU.js")).default,ImageryTileLayer:async()=>(await import("./ImageryTileLayer-DixyNESc.js")).default,IntegratedMesh3DTilesLayer:async()=>(await import("./IntegratedMesh3DTilesLayer-BEcgXCkk.js")).default,IntegratedMeshLayer:async()=>(await import("./IntegratedMeshLayer-C-XaBbXd.js")).default,KMLLayer:async()=>(await import("./KMLLayer-DwQXpcMB.js")).default,KnowledgeGraphLayer:async()=>(await import("./KnowledgeGraphLayer-BjNFJGLf.js")).default,LineOfSightLayer:async()=>(await import("./LineOfSightLayer-D6sUQaEP.js")).default,LinkChartLayer:async()=>(await import("./LinkChartLayer-KcYDvLxD.js")).default,MapImageLayer:async()=>(await import("./MapImageLayer-B_rP0PhA.js")).default,MapNotesLayer:async()=>(await import("./MapNotesLayer-DauvjDLM.js")).default,MediaLayer:async()=>(await import("./MediaLayer-DiCs97gD.js")).default,OGCFeatureLayer:async()=>(await import("./OGCFeatureLayer-DPXQjO1S.js")).default,OpenStreetMapLayer:async()=>(await import("./OpenStreetMapLayer-Bx4EhJij.js")).default,OrientedImageryLayer:async()=>(await import("./OrientedImageryLayer-CwG5o4Di.js")).default,PointCloudLayer:async()=>(await import("./PointCloudLayer-CkxImr5P.js")).default,RouteLayer:async()=>(await import("./RouteLayer-BQQ6WxtH.js")).default,SceneLayer:async()=>(await import("./SceneLayer-DOh9PmQy.js")).default,StreamLayer:async()=>(await import("./StreamLayer-Bqnt-d3H.js")).default,SubtypeGroupLayer:async()=>(await import("./SubtypeGroupLayer-D1vAbwEU.js")).default,TileLayer:async()=>(await import("./TileLayer-Be5tWeN5.js")).default,UnknownLayer:async()=>(await import("./UnknownLayer-DwWK383_.js")).default,UnsupportedLayer:async()=>(await import("./UnsupportedLayer-CCUtmZ2i.js")).default,VectorTileLayer:async()=>(await import("./VectorTileLayer-DruyQukp.js")).default,VideoLayer:async()=>(await import("./VideoLayer-Dxs-NJSn.js")).default,ViewshedLayer:async()=>(await import("./ViewshedLayer-BYX-h7eL.js")).default,VoxelLayer:async()=>(await import("./VoxelLayer-KL84GttA.js")).default,WFSLayer:async()=>(await import("./WFSLayer-DKnx5V8b.js")).default,WMSLayer:async()=>(await import("./WMSLayer-C8eYRV4V.js")).default,WMTSLayer:async()=>(await import("./WMTSLayer-DJY_jjIE.js")).default,WebTileLayer:async()=>(await import("./WebTileLayer-CUoicUjK.js").then(a=>a.W)).default},f=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function d(a,e){const{loadContext:t,...r}=e||{},i=t?await t.fetchServiceMetadata(a,r):await o(a,r);c(i),u(i);const n={serviceJSON:i};if((i.currentVersion??0)<10.5)return n;const s=`${a}/layers`,y=t?await t.fetchServiceMetadata(s,r):await o(s,r);return c(y),u(y),n.layersJSON={layers:y.layers,tables:y.tables},n}function L(a){const{type:e}=a;return!!e&&f.has(e)}function m(a){return a.type==="Table"}function u(a){a.layers=a.layers?.filter(L),a.tables=a.tables?.filter(m)}function w(a){a.type||="Feature Layer"}function S(a){a.type||="Table"}function c(a){a.layers?.forEach(w),a.tables?.forEach(S)}function g(a){switch(a){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}export{d as a,p as b,g as i,o as t};
