import{n as p}from"./projectBuffer-D86redIv.js";import{a as m}from"./MeshLocalVertexSpace-DGxdCf4L.js";import{bj as e}from"./main-B5_XOOwi.js";import{B as n}from"./vertexSpaceConversion-DG0_9QSs.js";import"./preload-helper-ExcqyqRp.js";import"./mat3-XZDRtl20.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-CUdVSMyt.js";import"./mat4f64-CSKppSlJ.js";import"./vec32-DACfXE6P.js";import"./spatialReferenceEllipsoidUtils-D6F8fOwT.js";import"./computeTranslationToOriginAndRotation-BS1OgOv0.js";import"./projectPointToVector-DG2fEkt3.js";import"./projection-DwpqUf7U.js";import"./meshVertexSpaceUtils-BdGk07L9.js";import"./vec3-NqjSj-t4.js";import"./BufferView-isk7FOAG.js";import"./vec2-DGVIkCvT.js";import"./vec42-CKs01hkn.js";import"./vec4-BOybBZ6c.js";function d(t,i){const o=n(t,m.absolute);if(!o)return null;let r=o.position;return e(t.spatialReference,i)||(r=new Float64Array(o.position.length),p(o.position,t.spatialReference,0,r,i,0))?r:null}export{d as projectMeshVertexPositions};
