import { dN as s, s as s$1, P as a } from './main-YSH8Qvd0.js';
import { l } from './MeshVertexAttributes-BQErGVSn.js';
import { M } from './vertexSpaceConversion-wpOs4rjM.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-2MXwy-q2.js';
import './computeTranslationToOriginAndRotation-BzHnTzMb.js';
import './meshVertexSpaceUtils-BWw2ChPZ.js';
import './MeshLocalVertexSpace-CfZyzxtt.js';
import './vec3-ClSyidte.js';
import './projection-dfTHVS_y.js';
import './DoubleArray-CgRM5UWL.js';
import './BufferView-Lo8NNSAL.js';
import './vec4-BZ4xuOzG.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
