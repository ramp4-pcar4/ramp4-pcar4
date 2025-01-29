import { I } from './InterleavedLayout-B-1YW3S9.js';
import { f as f$1, u as u$2, p as p$1, E, d as d$1, m } from './edgeProcessing-B1dgW4xA.js';
import './BufferView-Lo8NNSAL.js';
import './main-YSH8Qvd0.js';
import './preload-helper-dJJaZANz.js';
import './types-D3aYjW3J.js';
import './Util-CC8AWGD5.js';
import './deduplicate-ZjD5ZJSd.js';
import './Indices-DHyj2YLw.js';
import './VertexAttribute-CwgXid27.js';
import './enums-CwcDCDam.js';
import './VertexElementDescriptor-Bcj0303n.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function u$1(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new I(r.layout)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=f$1(t),r=[t.data.buffer];return {result:u(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$1(i,p),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$1(i,f),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}}function c(e){return {data:E.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function u(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:u$1(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u$1(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class l{allocate(e){return d$1.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class d{allocate(e){return m.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const f=new l,p=new d;

export { o as default };
