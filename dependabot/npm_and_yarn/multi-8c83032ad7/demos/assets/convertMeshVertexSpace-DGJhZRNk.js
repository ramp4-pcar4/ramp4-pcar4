import { dN as s, s as s$1, P as a } from './main-CaWYn_3L.js';
import { l } from './MeshVertexAttributes-KX7TNlX4.js';
import { M } from './vertexSpaceConversion-BvBj8YFi.js';
import './preload-helper-dJJaZANz.js';
import './mat3f64-BNcPSU_3.js';
import './mat4f64-UGgSIQpQ.js';
import './spatialReferenceEllipsoidUtils-B1d79Hag.js';
import './computeTranslationToOriginAndRotation-nE2aS2KA.js';
import './meshVertexSpaceUtils-Cr7ka81q.js';
import './MeshLocalVertexSpace-ktas1fPz.js';
import './vec3-DaKuBIlJ.js';
import './projection-bUWhBPrs.js';
import './DoubleArray-aYMnYZGt.js';
import './BufferView-BO7qw-FC.js';
import './vec4-D9Qq1jHe.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
async function i(i,n,c){await Promise.resolve(),s(c);const m=M(i,n);if(!m)throw new s$1("meshUtils:convertVertexSpace()","Failed to convert to provided vertex space due to projection errors");const p=i.cloneAndModifyVertexAttributes(new l({...m,uv:a(i.vertexAttributes.uv),color:a(i.vertexAttributes.color)}),n);return p.transform=null,p}

export { i as convertMeshVertexSpace };
