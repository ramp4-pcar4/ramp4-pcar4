import{D as n,s as a,f as i}from"./main-kpG51UWM.js";import{p as c}from"./MeshVertexAttributes-CbNpPur2.js";import{B as l}from"./vertexSpaceConversion-CiKaVq_u.js";async function p(e,o,t){await Promise.resolve(),n(t);const r=l(e,o,{useEllipsoid:t?.useEllipsoid});if(!r)throw new a("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const s=e.cloneAndModifyVertexAttributes(new c({...r,uv:i(e.vertexAttributes.uv),color:i(e.vertexAttributes.color)}),o);return s.transform=null,s}export{p as convertMeshVertexSpace};
