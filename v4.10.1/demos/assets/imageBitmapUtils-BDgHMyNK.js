import{s as l,G as c}from"./main-DVcB5zI_.js";async function u(a,e,t){let r;try{r=await createImageBitmap(a)}catch(o){throw new l("request:server",`Unable to load ${e}`,{url:e,error:o})}return c(t),r}async function w(a,e,t,r,o){let n;try{n=await createImageBitmap(a)}catch(i){throw new l("request:server",`Unable to load tile ${e}/${t}/${r}`,{error:i,level:e,row:t,col:r})}return c(o),n}export{w as o,u as t};
