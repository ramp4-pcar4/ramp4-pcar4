import{s as c,T as l}from"./main-C3PVbFgd.js";async function i(a,r,t){let e;try{e=await createImageBitmap(a)}catch(o){throw new c("request:server",`Unable to load ${r}`,{url:r,error:o})}return l(t),e}async function u(a,r,t,e,o){let n;try{n=await createImageBitmap(a)}catch(s){throw new c("request:server",`Unable to load tile ${r}/${t}/${e}`,{error:s,level:r,row:t,col:e})}return l(o),n}export{u as o,i as t};
