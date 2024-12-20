import { dN as s, s as s$1, P as a } from './main-C4Zge2Yj.js';
import { l } from './MeshVertexAttributes-B2rPWawN.js';
import { M } from './vertexSpaceConversion-D48ElOkl.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-Ew1iLS3I.js';
import './computeTranslationToOriginAndRotation-V-PHwmDT.js';
import './meshVertexSpaceUtils-B9_haoxH.js';
import './MeshLocalVertexSpace-CHFgsj5E.js';
import './vec3-C4rWi5eU.js';
import './projection-D4k9GpuV.js';
import './DoubleArray-DvEtFJ2d.js';
import './BufferView-Bl5B52S_.js';
import './vec4-rU8s-TOk.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
