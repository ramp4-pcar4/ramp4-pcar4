import{bx as l}from"./main-C3PVbFgd.js";function f(r,n,i){return n.flatten(({sublayers:e})=>e).length!==r.length?!0:!!r.some(e=>e.originIdOf("minScale")>i||e.originIdOf("maxScale")>i||e.originIdOf("renderer")>i||e.originIdOf("labelingInfo")>i||e.originIdOf("opacity")>i||e.originIdOf("labelsVisible")>i||e.originIdOf("source")>i)||!a(r,n)}function c(r,n,i){return!!r.some(e=>{const o=e.source,t=!o||o.type==="map-layer"&&o.mapLayerId===e.id&&(o.gdbVersion==null||o.gdbVersion===i);e.commitProperty("renderer"),e.commitProperty("labelingInfo"),e.commitProperty("opacity"),e.commitProperty("labelsVisible"),e.commitProperty("orderBy");const s=e.layer?.capabilities?.exportMap?.supportsSublayerOrderBy??!1;return!t||e.originIdOf("renderer")>l.SERVICE||e.originIdOf("labelingInfo")>l.SERVICE||e.originIdOf("opacity")>l.SERVICE||e.originIdOf("labelsVisible")>l.SERVICE||s&&e.originIdOf("orderBy")>l.SERVICE})||!a(r,n)}function a(r,n){if(!r?.length||n==null)return!0;const i=n.slice().reverse().flatten(({sublayers:t})=>t&&t.toArray().reverse()).map(t=>t.id).toArray();if(r.length>i.length)return!1;let e=0;const o=i.length;for(const{id:t}of r){for(;e<o&&i[e]!==t;)e++;if(e>=o)return!1}return!0}function d(r){return!!r&&r.some(n=>n.minScale!=null||n.layerDefinition?.minScale!=null)}export{f as e,c as i,d as o};
