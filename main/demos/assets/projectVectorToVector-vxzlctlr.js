import{O as i}from"./main-Bd_03BNf.js";import"./projectBuffer-0UYQHA4x.js";import{c as r}from"./projectPointToVector-Dbyur5pJ.js";function p(n,t,a,e){return{x:n,y:t,z:a,hasZ:a!=null,hasM:!1,spatialReference:e,type:"point"}}function f(n,t,a,e,o){n.x=t,n.y=a,n.z=e,n.hasZ=e!=null,n.spatialReference=o}function m(n,t,a,e,o){return!(t==null||e==null||n.length<2)&&(l.x=n[0],l.y=n[1],l.z=n[2],l.spatialReference=t,r(l,a,e,o))}const l=p(0,0,0,i.WGS84);export{f as a,p as e,m as n};
