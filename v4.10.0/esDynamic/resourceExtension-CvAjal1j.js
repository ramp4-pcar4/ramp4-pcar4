import{ax as o}from"./main-DCIX61zy.js";function e(i){return p[g(i)]||m}function g(i){return i.type==="json"?"application/json":i.type==="blob"?i.blob.type:l(i.url)}function l(i){const a=o(i);return t[a]||n}const p={},n="text/plain",m=p[n],t={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const i in t)p[t[i]]=i;export{e as p};
