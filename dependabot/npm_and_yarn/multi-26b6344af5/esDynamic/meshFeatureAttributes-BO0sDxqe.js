import{bC as o}from"./main-0iYVBzEC.js";import{N as r}from"./MeshTransform-B7fj1ZKc.js";function s(n,i,a=t){return new o({x:n[a.originX],y:n[a.originY],z:n[a.originZ],spatialReference:i})}function e(n,i=t){return new r({translation:[n[i.translationX],-n[i.translationZ],n[i.translationY]],rotationAxis:[n[i.rotationX],-n[i.rotationZ],n[i.rotationY]],rotationAngle:n[i.rotationDeg],scale:[n[i.scaleX],n[i.scaleZ],n[i.scaleY]]})}const t={originX:"originX",originY:"originY",originZ:"originZ",translationX:"translationX",translationY:"translationY",translationZ:"translationZ",scaleX:"scaleX",scaleY:"scaleY",scaleZ:"scaleZ",rotationX:"rotationX",rotationY:"rotationY",rotationZ:"rotationZ",rotationDeg:"rotationDeg"};export{e as i,s as n};
