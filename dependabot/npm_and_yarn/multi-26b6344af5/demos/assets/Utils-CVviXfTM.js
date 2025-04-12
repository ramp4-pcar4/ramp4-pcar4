import{C as o,U as h}from"./enums-Dk3osxpS.js";import{t as N,n as A}from"./vec2f32-BbH2jxlN.js";import{n as $,s as p}from"./main-Cv8ITM2j.js";import{s as P}from"./getDataTypeBytes-DflDeYgv.js";import{t as Y}from"./VertexElementDescriptor-BLyltQyJ.js";let T=class E{constructor(t,e,n,s,i,a,c){this.instanceId=t,this.textureKey=e,this.indexStart=n,this.indexCount=s,this.vertexStart=i,this.vertexCount=a,this.overlaps=c}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new E(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,e,n,s,i,a,c,u){t.push(e),t.push(n),t.push(s),t.push(i),t.push(a),t.push(c),t.push(u)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const e=t.readInt32(),n=t.readInt32(),s=t.readInt32(),i=t.readInt32(),a=t.readInt32(),c=t.readInt32(),u=t.readInt32();return new E(e,n,s,i,a,c,u)}};T.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function y(r,t){if(t!==null){r.push(t.length);for(const e of t)e.serialize(r);return r}r.push(0)}function I(r,t,e){const n=r.readInt32(),s=new Array(n);for(let i=0;i<s.length;i++)s[i]=t.deserialize(r,e);return s}let L=class S{constructor(t,e){this.id=t,this.sortKey=e,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),y(t,this.records),t}static deserialize(t){const e=t.readInt32(),n=t.readF32(),s=new S(e,n);return s.records=I(t,T)??[],s}};L.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+T.byteSizeHint;let B=class d{constructor(t,e,n,s){this.transformedX=0,this.transformedY=0,this.center=N(t,e),this.centerT=A(),this.halfWidth=n/2,this.halfHeight=s/2,this.width=n,this.height=s}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new d(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,e=4){const n=Math.abs(t.centerT[0]-this.centerT[0]),s=Math.abs(t.centerT[1]-this.centerT[1]),i=(t.halfWidth+this.halfWidth+e)/n,a=(t.halfHeight+this.halfHeight+e)/s,c=Math.min(i,a);return Math.log2(c)}extend(t){const e=Math.min(this.xmin,t.xmin),n=Math.min(this.ymin,t.ymin),s=Math.max(this.xmax,t.xmax)-e,i=Math.max(this.ymax,t.ymax)-n,a=e+s/2,c=n+i/2;this.width=s,this.height=i,this.halfWidth=s/2,this.halfHeight=i/2,this.x=a,this.y=c}static deserialize(t){const e=t.readF32(),n=t.readF32(),s=t.readInt32(),i=t.readInt32();return new d(e,n,s,i)}};const M=new Float32Array(1),R=new Uint32Array(M.buffer);function b(r){return M[0]=r,R[0]}function W(r,t){return 65535&r|t<<16}function g(r){const t=b(r),e=t>>>31;let n=t>>>23&255,s=8388607&t;return n-=127,n>15?e<<15|31744:n<-25?0:(n<-14&&(s+=8388608,s/=2**(-14-n),n=-15),n+=15,s/=8192,s=O(s,1023),e<<15|n<<10|s)}function O(r,t){const e=Math.floor(r),n=r-e;return e<t&&(n>.5||n===.5&&e%2==1)?e+1:e}function m(r){let t=r>>>15,e=r>>10&31,n=1023&r;return t=t?-1:1,e-=15,n/=1024,e>-15?n+=1:e=-14,t*2**e*n}function K(r,t,e,n){const s=e.packPrecisionFactor??1;switch(e.type){case o.BYTE:if(e.count===1)r.setInt8(n+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Int8Array.BYTES_PER_ELEMENT;r.setInt8(n+e.offset+a,t[i]*s)}break;case o.UNSIGNED_BYTE:if(e.count===1)r.setUint8(n+e.offset,t*s);else for(let i=0;i<e.count;i++){const a=i*Uint8Array.BYTES_PER_ELEMENT;r.setUint8(n+e.offset+a,t[i]*s)}break;case o.SHORT:if(e.count===1)r.setInt16(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int16Array.BYTES_PER_ELEMENT;r.setInt16(n+e.offset+a,t[i]*s,!0)}break;case o.UNSIGNED_SHORT:if(e.count===1)r.setUint16(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(n+e.offset+a,t[i]*s,!0)}break;case o.INT:if(e.count===1)r.setInt32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Int32Array.BYTES_PER_ELEMENT;r.setInt32(n+e.offset+a,t[i]*s,!0)}break;case o.UNSIGNED_INT:if(e.count===1)r.setUint32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Uint32Array.BYTES_PER_ELEMENT;r.setUint32(n+e.offset+a,t[i]*s,!0)}break;case o.FLOAT:if(e.count===1)r.setFloat32(n+e.offset,t*s,!0);else for(let i=0;i<e.count;i++){const a=i*Float32Array.BYTES_PER_ELEMENT;r.setFloat32(n+e.offset+a,t[i]*s,!0)}break;case o.HALF_FLOAT:if(e.count===1)r.setUint16(n+e.offset,g(t*s),!0);else for(let i=0;i<e.count;i++){const a=i*Uint16Array.BYTES_PER_ELEMENT;r.setUint16(n+e.offset+a,g(t[i]*s),!0)}}}function V(r,t,e){switch(t.type){case o.BYTE:{if(t.count===1)return r.getInt8(e+t.offset);const n=[];for(let s=0;s<t.count;s++){const i=s*Int8Array.BYTES_PER_ELEMENT;n.push(r.getInt8(e+t.offset+i))}return n}case o.UNSIGNED_BYTE:{if(t.count===1)return r.getUint8(e+t.offset);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint8Array.BYTES_PER_ELEMENT;n.push(r.getUint8(e+t.offset+i))}return n}case o.SHORT:{if(t.count===1)return r.getInt16(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Int16Array.BYTES_PER_ELEMENT;n.push(r.getInt16(e+t.offset+i,!0))}return n}case o.UNSIGNED_SHORT:{if(t.count===1)return r.getUint16(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;n.push(r.getUint16(e+t.offset+i,!0))}return n}case o.INT:{if(t.count===1)return r.getInt32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Int32Array.BYTES_PER_ELEMENT;n.push(r.getInt32(e+t.offset+i,!0))}return n}case o.UNSIGNED_INT:{if(t.count===1)return r.getUint32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Uint32Array.BYTES_PER_ELEMENT;n.push(r.getUint32(e+t.offset+i,!0))}return n}case o.FLOAT:{if(t.count===1)return r.getFloat32(e+t.offset,!0);const n=[];for(let s=0;s<t.count;s++){const i=s*Float32Array.BYTES_PER_ELEMENT;n.push(r.getFloat32(e+t.offset+i,!0))}return n}case o.HALF_FLOAT:{if(t.count===1)return m(r.getUint16(e+t.offset,!0));const n=[];for(let s=0;s<t.count;s++){const i=s*Uint16Array.BYTES_PER_ELEMENT;n.push(m(r.getUint16(e+t.offset+i,!0)))}return n}}}class x{constructor(t,e,n,s,i,a,c,u,f=[]){this.entityTexel=t,this.anchorX=e,this.anchorY=n,this.directionX=s,this.directionY=i,this.maxScale=a,this.minScale=c,this.referenceBounds=u,this.bounds=f}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),y(t,this.bounds)}static deserialize(t){const e=t.readInt32(),n=t.readF32(),s=t.readF32(),i=t.readF32(),a=t.readF32(),c=t.readF32(),u=t.readF32(),f=t.readF32(),F=t.readF32(),w=t.readF32(),U=I(t,B)??[];return new x(e,n,s,i,a,c,u,{size:f,offsetX:F,offsetY:w},U)}}const _=()=>$.getLogger("esri.views.2d.engine.webgl.Utils");function J(r){switch(r){case h.UNSIGNED_BYTE:return 1;case h.UNSIGNED_SHORT_4_4_4_4:return 2;case h.FLOAT:return 4;default:return void _().error(new p("webgl-utils",`Unable to handle type ${r}`))}}function j(r){switch(r){case h.UNSIGNED_BYTE:return Uint8Array;case h.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case h.FLOAT:return Float32Array;default:return void _().error(new p("webgl-utils",`Unable to handle type ${r}`))}}function z(r){const t=new Map;for(const e in r){const n=r[e];let s=0;t.set(e,n.map(i=>{const a=new Y(i.name,i.count,i.type,s,0,i.normalized||!1);return s+=i.count*P(i.type),a})),t.get(e).forEach(i=>i.stride=s)}return t}const C=r=>{const t=new Map;for(const e in r)for(const n of r[e])t.set(n.name,n.location);return t},k=r=>{const t={};return r.forEach((e,n)=>t[n]=e?.length?e[0].stride:0),t},l=new Map,q=(r,t)=>{if(!l.has(r)){const e=z(t),n={strides:k(e),bufferLayouts:e,attributes:C(t)};l.set(r,n)}return l.get(r)},Q=r=>r.includes("data:image/svg+xml");function Z(r){const t=[];for(let e=0;e<r.length;e++)t.push(r.charCodeAt(e));return t}function tt(r){if(r==null)return"";const{type:t}=r;switch(t){case"CIMMarkerPlacementAlongLineRandomSize":return`${t}-${r.seed}-${r.randomization}`;case"CIMMarkerPlacementAlongLineVariableSize":return`${t}-${r.maxRandomOffset}-${r.numberOfSizes}-${r.seed}-${r.variationMethod}`;case"CIMMarkerPlacementAtExtremities":return`${t}-${r.extremityPlacement}-${r.offsetAlongLine}`;case"CIMMarkerPlacementAtRatioPositions":return`${t}-${r.beginPosition}-${r.endPosition}-${r.flipFirst}-${JSON.stringify(r.positionArray)}`;case"CIMMarkerPlacementAtMeasuredUnits":return`${t}-${r.interval}-${r.skipMarkerRate}-${r.placeAtExtremities}`;case"CIMMarkerPlacementInsidePolygon":return`${t}-${r.stepX}-${r.stepY}-${r.randomness}-${r.gridType}-${r.seed}-${r.shiftOddRows}`;case"CIMMarkerPlacementOnLine":return`${t}-${r.relativeTo}-${r.startPointOffset}`;case"CIMMarkerPlacementOnVertices":return`${t}-${r.placeOnControlPoints}-${r.placeOnEndPoints}-${r.placeOnRegularVertices}`;case"CIMMarkerPlacementPolygonCenter":return`${t}-${r.method}`;default:return`${t}`}}export{q as $,B as a,W as b,K as c,V as d,Z as e,Q as f,j as i,I as n,J as o,tt as p,x as r,L as s,T as t};
