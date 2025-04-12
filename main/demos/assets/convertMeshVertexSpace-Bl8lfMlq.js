import{X as m,s,v as p}from"./main-Bd_03BNf.js";import{p as n}from"./MeshVertexAttributes-D6OSeyAf.js";import{B as c}from"./vertexSpaceConversion-Bb2b5GFl.js";import"./preload-helper-ExcqyqRp.js";import"./meshProperties-C4iW0Ukm.js";import"./mat3-CruJiiUv.js";import"./common-DQOJ18NT.js";import"./mat3f64-q3fE-ZOt.js";import"./mat4-BPDfjts0.js";import"./mat4f64-Dk4dwAN8.js";import"./vec32-DZGiaTNj.js";import"./spatialReferenceEllipsoidUtils-BD5s55BZ.js";import"./computeTranslationToOriginAndRotation-DYwxtIyT.js";import"./projectBuffer-0UYQHA4x.js";import"./projectPointToVector-Dbyur5pJ.js";import"./projection-B5J11HCw.js";import"./meshVertexSpaceUtils-BUKaRhIi.js";import"./MeshLocalVertexSpace-BfGZtBZ2.js";import"./vec3-Bl-fy7lJ.js";import"./BufferView-DCWPR4zm.js";import"./vec2-maR1OrZI.js";import"./vec42-CKs01hkn.js";import"./vec4-D6stUvC3.js";async function g(t,r,o){await Promise.resolve(),m(o);const e=c(t,r,{useEllipsoid:o?.useEllipsoid});if(!e)throw new s("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const i=t.cloneAndModifyVertexAttributes(new n({...e,uv:p(t.vertexAttributes.uv),color:p(t.vertexAttributes.color)}),r);return i.transform=null,i}export{g as convertMeshVertexSpace};
