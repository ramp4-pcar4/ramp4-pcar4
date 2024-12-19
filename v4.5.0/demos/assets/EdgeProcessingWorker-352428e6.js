import { y, u as u$1, i, c as c$1, l as l$1, p as p$1, o as o$1, m, T, h, a, b, d as d$1, A, O as O$1, x, g as g$1, w, E, L, B, F as F$1, I, U, j, V, M, S, k, q, v, z as z$1, C, D, G, H as H$1 } from './BufferView-280c2f14.js';
import { f as f$1, u as u$2, p as p$2, A as A$1, a as a$1, m as m$1 } from './edgeProcessing-5682f52d.js';
import './main-5658cd6e.js';
import './preload-helper-a4975f27.js';
import './deduplicate-c946c408.js';
import './Indices-ea523834.js';
import './InterleavedLayout-769e3a2b.js';
import './types-814802c7.js';
import './VertexAttribute-a23f2f69.js';
import './enums-1f7f0b0a.js';
import './VertexElementDescriptor-a439aa9a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function z(e,t){return t.push(e.buffer),{buffer:e.buffer,layout:F(e.layout)}}function F(e){const t=new Array;return e.fields.forEach(((e,r)=>{const o={...e,constructor:J(e.constructor)};t.push([r,o]);})),{stride:e.stride,fields:t,fieldNames:e.fieldNames}}const H=[y,u$1,i,c$1,l$1,p$1,o$1,m,T,h,a,b,d$1,A,O$1,x,g$1,w,E,L,B,F$1,I,U,j,V,M,S,k,q,v,z$1,C,D,G,H$1];function J(e){return `${e.ElementType}_${e.ElementCount}`}const O=new Map;H.forEach((e=>O.set(J(e),e)));

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
class o{async extract(e){const t=c(e),n=f$1(t),r=[t.data.buffer];return {result:l(n,r),transferList:r}}async extractComponentsEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$2(i,p,g),o=[];return {result:z(a.regular.instancesData,o),transferList:o}}async extractEdgeLocations(t){const s=c(t),i=u$2(s.data,s.skipDeduplicate,s.indices,s.indicesLength),a=p$2(i,f,g),o=[];return {result:z(a.regular.instancesData,o),transferList:o}}}function c(e){return {data:A$1.createView(e.dataBuffer),indices:"Uint32Array"===e.indicesType?new Uint32Array(e.indices):"Uint16Array"===e.indicesType?new Uint16Array(e.indices):e.indices,indicesLength:e.indicesLength,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}}function l(t,n){n.push(t.regular.lodInfo.lengths.buffer),n.push(t.silhouette.lodInfo.lengths.buffer);return {regular:{instancesData:z(t.regular.instancesData,n),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:z(t.silhouette.instancesData,n),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(e){return a$1.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1);}}class d{allocate(e){return m$1.createBuffer(e)}trim(e,t){return e.slice(0,t)}write(e,t,n){e.position0.setVec(t,n.position0),e.position1.setVec(t,n.position1),e.componentIndex.set(t,n.componentIndex);}}const f=new u,p=new d,g={allocate:()=>null,write:()=>{},trim:()=>null};

export { o as default };
