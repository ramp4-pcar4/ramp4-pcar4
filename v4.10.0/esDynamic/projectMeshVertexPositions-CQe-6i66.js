import{a5 as n,bE as r}from"./main-DCIX61zy.js";import{b as s}from"./MeshLocalVertexSpace-DkOk3052.js";import{B as a}from"./vertexSpaceConversion-J1a6a3Ka.js";function l(e,i){const o=a(e,s.absolute);if(!o)return null;let t=o.position;return n(e.spatialReference,i)||(t=new Float64Array(o.position.length),r(o.position,e.spatialReference,0,t,i,0))?t:null}export{l as projectMeshVertexPositions};
