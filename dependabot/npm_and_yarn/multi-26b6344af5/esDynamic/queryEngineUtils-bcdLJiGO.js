import{b as o,e as d}from"./hitTestSelectUtils-BWWHjXOI.js";import{b as i,c as g}from"./RouteLayerInteraction-CagB_eq7.js";import{r as c}from"./VertexSnappingCandidate-CouxmIMU.js";function e({x:t,y:r,z:n}){return d(t,r,n??0)}function s(t,r){switch(t.type){case"edge":return t.draped?new i({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:o(e(t.target)),objectId:t.objectId,getGroundElevation:r}):new g({edgeStart:e(t.start),edgeEnd:e(t.end),targetPoint:o(e(t.target)),objectId:t.objectId,isDraped:!1});case"vertex":return new c({targetPoint:o(e(t.target)),objectId:t.objectId,isDraped:!1})}}function u(t,r){return t!=null&&t.type==="3d"?(n,a)=>t.elevationProvider.getElevation(n,a,0,r,"ground"):()=>null}export{u as i,s as o};
