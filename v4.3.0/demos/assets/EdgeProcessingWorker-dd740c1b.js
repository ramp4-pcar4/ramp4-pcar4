import{y as p,u as d,i as g,c as m,l as h,p as $,o as y,m as w,T as L,h as D,a as b,b as E,d as I,A,O as x,x as V,g as k,w as U,E as B,L as T,B as v,F as z,I as C,U as F,j as H,V as O,M as S,S as M,k as N,q as j,v as q,z as G,C as J,D as _,G as K,H as P}from"./BufferView-cea33757.js";import{f as Q,u as c,p as u,A as R,a as W,m as X}from"./edgeProcessing-1ec2ac1b.js";import"./main-46bfe858.js";import"./preload-helper-388ac9d5.js";import"./deduplicate-cf954b63.js";import"./Indices-957ffa2d.js";import"./InterleavedLayout-baa5a1ee.js";import"./types-e1c0a5bf.js";import"./VertexAttribute-15d1866a.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";function a(t,e){return e.push(t.buffer),{buffer:t.buffer,layout:Y(t.layout)}}function Y(t){const e=new Array;return t.fields.forEach((s,n)=>{const r={...s,constructor:f(s.constructor)};e.push([n,r])}),{stride:t.stride,fields:e,fieldNames:t.fieldNames}}const Z=[p,d,g,m,h,$,y,w,L,D,b,E,I,A,x,V,k,U,B,T,v,z,C,F,H,O,S,M,N,j,q,G,J,_,K,P];function f(t){return`${t.ElementType}_${t.ElementCount}`}const tt=new Map;Z.forEach(t=>tt.set(f(t),t));class $t{async extract(e){const s=o(e),n=Q(s),r=[s.data.buffer];return{result:et(n,r),transferList:r}}async extractComponentsEdgeLocations(e){const s=o(e),n=c(s.data,s.skipDeduplicate,s.indices,s.indicesLength),r=u(n,it,l),i=[];return{result:a(r.regular.instancesData,i),transferList:i}}async extractEdgeLocations(e){const s=o(e),n=c(s.data,s.skipDeduplicate,s.indices,s.indicesLength),r=u(n,rt,l),i=[];return{result:a(r.regular.instancesData,i),transferList:i}}}function o(t){return{data:R.createView(t.dataBuffer),indices:t.indicesType==="Uint32Array"?new Uint32Array(t.indices):t.indicesType==="Uint16Array"?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function et(t,e){return e.push(t.regular.lodInfo.lengths.buffer),e.push(t.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:a(t.regular.instancesData,e),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:a(t.silhouette.instancesData,e),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class st{allocate(e){return W.createBuffer(e)}trim(e,s){return e.slice(0,s)}write(e,s,n){e.position0.setVec(s,n.position0),e.position1.setVec(s,n.position1)}}class nt{allocate(e){return X.createBuffer(e)}trim(e,s){return e.slice(0,s)}write(e,s,n){e.position0.setVec(s,n.position0),e.position1.setVec(s,n.position1),e.componentIndex.set(s,n.componentIndex)}}const rt=new st,it=new nt,l={allocate:()=>null,write:()=>{},trim:()=>null};export{$t as default};
