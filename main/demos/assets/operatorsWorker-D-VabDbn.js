const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./disjointOperator-BuGUgdU0.js","./ProjectionTransformation-Dr49wlOX.js","./Transformation2D-DZfKTQC6.js","./SimpleGeometryCursor-B92kdZ15.js","./main-Bd_03BNf.js","./preload-helper-ExcqyqRp.js","./main-gKmidBZg.css","./jsonConverter-V072NVoI.js","./intersectsOperator-BpxODuH4.js","./OperatorIntersects-CPrmzcmK.js","./touchesOperator-D_TsHWZg.js","./OperatorTouches-B6Mf17V6.js","./crossesOperator-BC-wiPdj.js","./OperatorCrosses-TJwreXqS.js","./withinOperator-iniNlIbY.js","./OperatorWithin-OWLQar44.js","./containsOperator-BeJGeCfh.js","./overlapsOperator-_4RExro_.js","./OperatorOverlaps-BA9YlsgF.js","./equalsOperator-BjVheRXg.js","./apiConverter-DbRWNxLp.js","./relateOperator-BQIk2JrA.js","./intersectionOperator-SIMpny5X.js","./operatorIntersection-7rEbGSuR.js","./unionOperator-BPMyQ4Mn.js","./operatorUnion-kFcjTZvf.js","./differenceOperator-mZ9UxXO2.js","./symmetricDifferenceOperator-DJjfuOVy.js","./clipOperator-CuvomYvK.js","./cutOperator-0GGb87VI.js","./areaOperator-Cd5kOqrZ.js","./unitConversion-BWs6G75B.js","./geodeticAreaOperator-B4wOeH3t.js","./geodeticCurveType-CirnHLSB.js","./lengthOperator-C2gi_Qi_.js","./geodeticLengthOperator-DpvhR0A3.js","./distanceOperator-C9_MWgcc.js","./densifyOperator-6nTXgRJu.js","./geodeticDensifyOperator-DQiNVY6N.js","./operatorGeodeticDensify-B-QcJ3f9.js","./generalizeOperator-HhLG52SY.js","./OperatorGeneralize-BKt9FOyN.js","./bufferOperator-DBi1Dhss.js","./operatorBuffer-D6sbDi8W.js","./GeometryCleaner-BEJM7I4l-DUttS_B6.js","./geodesicBufferOperator-5Jrka2nL.js","./operatorGeodesicBuffer-4P4qflkY.js","./offsetOperator-BxDn_428.js","./operatorOffset-8BLRNqTK.js","./affineTransformOperator-D8K8C1OE.js","./Transformation-BvKsWxud.js","./centroidOperator-B6Ra8IVC.js","./Centroid-DZi-eb9F-C0A_cHQ1.js","./labelPointOperator-CbtSCtLd.js","./OperatorProximity-COwUStSe.js","./simplifyOperator-Bpc_llz7.js","./operatorSimplify-DU8X7o9X.js","./convexHullOperator-Blqga-xD.js","./operatorConvexHull-Bkrs_LJg.js","./proximityOperator-CGe-7L0n.js"])))=>i.map(i=>d[i]);
import{_ as a}from"./preload-helper-ExcqyqRp.js";import{b8 as c}from"./main-Bd_03BNf.js";function _(t,e){let i;return{loaded:!1,load:()=>i??=e().then(r=>{p[t]={loaded:!0,execute:r}})}}function m(t){return t==null?null:t.toJSON()}const p={disjoint:_("disjoint",()=>a(()=>import("./disjointOperator-BuGUgdU0.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),intersects:_("intersects",()=>a(()=>import("./intersectsOperator-BpxODuH4.js"),__vite__mapDeps([8,9,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),touches:_("touches",()=>a(()=>import("./touchesOperator-D_TsHWZg.js"),__vite__mapDeps([10,11,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),crosses:_("crosses",()=>a(()=>import("./crossesOperator-BC-wiPdj.js"),__vite__mapDeps([12,13,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),within:_("within",()=>a(()=>import("./withinOperator-iniNlIbY.js"),__vite__mapDeps([14,15,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),contains:_("contains",()=>a(()=>import("./containsOperator-BeJGeCfh.js"),__vite__mapDeps([16,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),overlaps:_("overlaps",()=>a(()=>import("./overlapsOperator-_4RExro_.js"),__vite__mapDeps([17,18,1,2,3,4,5,6,7]),import.meta.url).then(t=>t.execute)),equals:_("equals",async()=>{const t=await a(()=>import("./equalsOperator-BjVheRXg.js").then(e=>e.e),__vite__mapDeps([19,1,2,3,4,5,6,20,7]),import.meta.url);return(e,i)=>t.execute(c(e),c(i))}),relate:_("relate",async()=>{const t=await a(()=>import("./relateOperator-BQIk2JrA.js").then(e=>e.r),__vite__mapDeps([21,1,2,3,4,5,6,20,7]),import.meta.url);return(e,i,r)=>t.execute(c(e),c(i),r)}),intersection:_("intersection",()=>a(()=>import("./intersectionOperator-SIMpny5X.js"),__vite__mapDeps([22,4,5,6,23,3,2,1,7]),import.meta.url).then(t=>t.execute)),union:_("union",()=>a(()=>import("./unionOperator-BPMyQ4Mn.js"),__vite__mapDeps([24,25,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.executeMany)),difference:_("difference",async()=>{const t=await a(()=>import("./differenceOperator-mZ9UxXO2.js").then(e=>e.d),__vite__mapDeps([26,2,1,3,4,5,6,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),symmetricDifference:_("symmetricDifference",async()=>{const t=await a(()=>import("./symmetricDifferenceOperator-DJjfuOVy.js").then(e=>e.s),__vite__mapDeps([27,4,5,6,2,1,3,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),clip:_("clip",async()=>{const t=await a(()=>import("./clipOperator-CuvomYvK.js").then(e=>e.c),__vite__mapDeps([28,2,1,3,4,5,6,7,20]),import.meta.url);return(e,i)=>m(t.execute(c(e),c(i)))}),cut:_("cut",async()=>{const t=await a(()=>import("./cutOperator-0GGb87VI.js").then(e=>e.c),__vite__mapDeps([29,4,5,6,2,1,3,7,20]),import.meta.url);return(e,i)=>t.execute(c(e),c(i)).map(r=>m(r))}),area:_("area",async()=>{const t=await a(()=>import("./areaOperator-Cd5kOqrZ.js").then(r=>r.a),__vite__mapDeps([30,4,5,6,2,1,3,7,20]),import.meta.url),{convertFromSpatialReferenceUnit:e,toAreaUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toAreaUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toAreaUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n)=>{const o=t.execute(c(r));return e(r.spatialReference,i(n),o)}}),geodeticArea:_("geodeticArea",async()=>{const t=await a(()=>import("./geodeticAreaOperator-B4wOeH3t.js").then(n=>n.g),__vite__mapDeps([32,4,5,6,33]),import.meta.url),{convert:e,squareMeters:i,toAreaUnit:r}=await a(async()=>{const{convert:n,squareMeters:o,toAreaUnit:u}=await import("./unitConversion-BWs6G75B.js").then(s=>s.e);return{convert:n,squareMeters:o,toAreaUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o)=>{const u=t.execute(c(n));return e(i,r(o),u)}}),length:_("length",async()=>{const t=await a(()=>import("./lengthOperator-C2gi_Qi_.js"),__vite__mapDeps([34,4,5,6,7,2,1,3]),import.meta.url),{convertFromSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n)=>{const o=t.execute(r);return e(r.spatialReference,i(n),o)}}),geodeticLength:_("geodeticLength",async()=>{const t=await a(()=>import("./geodeticLengthOperator-DpvhR0A3.js").then(n=>n.g),__vite__mapDeps([35,4,5,6,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BWs6G75B.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o)=>{const u=t.execute(c(n));return e(i,r(o),u)}}),distance:_("distance",async()=>{const t=await a(()=>import("./distanceOperator-C9_MWgcc.js").then(r=>r.d),__vite__mapDeps([36,2,4,5,6,1,3,20,7]),import.meta.url),{convertFromSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertFromSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertFromSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>{const u=t.execute(c(r),c(n));return e(r.spatialReference,i(o),u)}}),densify:_("densify",async()=>{const t=await a(()=>import("./densifyOperator-6nTXgRJu.js").then(r=>r.d),__vite__mapDeps([37,4,5,6,2,1,3,7,20]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>(n=e(i(o),r.spatialReference,n),m(t.execute(c(r),n)))}),geodeticDensify:_("geodeticDensify",async()=>{const t=await a(()=>import("./geodeticDensifyOperator-DQiNVY6N.js").then(n=>n.a),__vite__mapDeps([38,4,5,6,39,3,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BWs6G75B.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o,u)=>(o=e(r(u),i,o),m(t.execute(c(n),o)))}),generalize:_("generalize",async()=>{const t=await a(()=>import("./generalizeOperator-HhLG52SY.js").then(r=>r.g),__vite__mapDeps([40,4,5,6,2,1,3,7,41,20]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o,u)=>(n=e(i(o),r.spatialReference,n),m(t.execute(c(r),n,u)))}),buffer:_("buffer",async()=>{const t=await a(()=>import("./bufferOperator-DBi1Dhss.js"),__vite__mapDeps([42,4,5,6,43,3,2,1,44,41,7]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o)=>(n=e(i(o),r.spatialReference,n),t.execute(r,n))}),geodesicBuffer:_("geodesicBuffer",async()=>{const t=await a(()=>import("./geodesicBufferOperator-5Jrka2nL.js"),__vite__mapDeps([45,5,4,6,46,3,33]),import.meta.url),{convert:e,meters:i,toLengthUnit:r}=await a(async()=>{const{convert:n,meters:o,toLengthUnit:u}=await import("./unitConversion-BWs6G75B.js").then(s=>s.e);return{convert:n,meters:o,toLengthUnit:u}},__vite__mapDeps([31,4,5,6]),import.meta.url);return await t.load(),(n,o,u)=>(o=e(r(u),i,o),t.execute(n,o))}),offset:_("offset",async()=>{const t=await a(()=>import("./offsetOperator-BxDn_428.js"),__vite__mapDeps([47,4,5,6,48,3,1,2,7]),import.meta.url),{convertToSpatialReferenceUnit:e,toLengthUnit:i}=await a(async()=>{const{convertToSpatialReferenceUnit:r,toLengthUnit:n}=await import("./unitConversion-BWs6G75B.js").then(o=>o.e);return{convertToSpatialReferenceUnit:r,toLengthUnit:n}},__vite__mapDeps([31,4,5,6]),import.meta.url);return(r,n,o,u)=>(n=e(i(o),r.spatialReference,n),t.execute(r,n,u))}),rotate:_("rotate",async()=>{const t=await a(()=>import("./affineTransformOperator-D8K8C1OE.js"),__vite__mapDeps([49,4,5,6,3,2,20,1,7]),import.meta.url),{default:e}=await a(async()=>{const{default:i}=await import("./Transformation-BvKsWxud.js");return{default:i}},__vite__mapDeps([50,2,4,5,6]),import.meta.url);return(i,r,n,o)=>{const u=new e().rotate(r,n,o);return m(t.execute(c(i),u))}}),centroid:_("centroid",async()=>{const t=await a(()=>import("./centroidOperator-B6Ra8IVC.js").then(e=>e.c),__vite__mapDeps([51,52,2,20,1,3,4,5,6,7]),import.meta.url);return e=>m(t.execute(c(e)))}),labelPoint:_("labelPoint",async()=>{const t=await a(()=>import("./labelPointOperator-CbtSCtLd.js").then(e=>e.l),__vite__mapDeps([53,2,1,3,4,5,6,7,52,54,20]),import.meta.url);return e=>m(t.execute(c(e)))}),simplify:_("simplify",()=>a(()=>import("./simplifyOperator-Bpc_llz7.js"),__vite__mapDeps([55,56,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.execute)),isSimple:_("isSimple",()=>a(()=>import("./simplifyOperator-Bpc_llz7.js"),__vite__mapDeps([55,56,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.isSimple)),convexHull:_("convexHull",()=>a(()=>import("./convexHullOperator-Blqga-xD.js"),__vite__mapDeps([57,58,3,2,1,4,5,6,7]),import.meta.url).then(t=>t.execute)),getNearestCoordinate:_("getNearestCoordinate",async()=>{const t=await a(()=>import("./proximityOperator-CGe-7L0n.js").then(e=>e.p),__vite__mapDeps([59,2,1,3,4,5,6,7,54,20]),import.meta.url);return(e,i,r)=>{const n=t.getNearestCoordinate(c(e),c(i),r);return{...n,coordinate:m(n.coordinate)}}}),getNearestVertex:_("getNearestVertex",async()=>{const t=await a(()=>import("./proximityOperator-CGe-7L0n.js").then(e=>e.p),__vite__mapDeps([59,2,1,3,4,5,6,7,54,20]),import.meta.url);return(e,i)=>{const r=t.getNearestVertex(c(e),c(i));return{...r,coordinate:m(r.coordinate)}}})};function l(t,e){const i=p[t];return i.loaded?i.execute.apply(void 0,e):i.load().then(()=>l(t,e))}export{l as invokeGeometryOp};
