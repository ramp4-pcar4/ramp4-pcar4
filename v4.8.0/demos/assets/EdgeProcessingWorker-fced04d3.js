import { I } from './InterleavedLayout-51b87011.js';
import { f as f$1, u as u$2, a as u$3, I as I$1, d as d$1, m } from './edgeProcessing-c3d8b0bf.js';
import './BufferView-9deea9cd.js';
import './main-ba570a3b.js';
import './preload-helper-a4975f27.js';
import './types-e38a67d0.js';
import './Util-4b247651.js';
import './deduplicate-b3c4915a.js';
import './Indices-59125451.js';
import './VertexAttribute-66b2103c.js';
import './enums-af0bf3a9.js';
import './VertexElementDescriptor-ec2771ab.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
function u$1(r,u){return u.push(r.buffer),{buffer:r.buffer,layout:new I(r.layout)}}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=f$1(t),r=[t.data.buffer];return {result:l(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=u$3(i,p,g),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=u$3(i,f,g),o=[];return {result:u$1(a.regular.instancesData,o),transferList:o}}}function c(e){return {data:I$1.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:u$1(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u$1(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(e){return d$1.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class d{allocate(e){return m.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const f=new u,p=new d,g={allocate:()=>null,write:()=>{},trim:()=>null};

export { o as default };
