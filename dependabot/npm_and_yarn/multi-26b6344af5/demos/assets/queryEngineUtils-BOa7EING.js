import{b as o,e as d}from"./hitTestSelectUtils-CmkBTuwe.js";import{b as i,c as g}from"./RouteLayerInteraction-BfLxFOqE.js";import{r as c}from"./VertexSnappingCandidate-Dfg5Mj0L.js";function t({x:e,y:r,z:n}){return d(e,r,n??0)}function l(e,r){switch(e.type){case"edge":return e.draped?new i({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:o(t(e.target)),objectId:e.objectId,getGroundElevation:r}):new g({edgeStart:t(e.start),edgeEnd:t(e.end),targetPoint:o(t(e.target)),objectId:e.objectId,isDraped:!1});case"vertex":return new c({targetPoint:o(t(e.target)),objectId:e.objectId,isDraped:!1})}}function b(e,r){return e!=null&&e.type==="3d"?(n,a)=>e.elevationProvider.getElevation(n,a,0,r,"ground"):()=>null}export{b as i,l as o};
