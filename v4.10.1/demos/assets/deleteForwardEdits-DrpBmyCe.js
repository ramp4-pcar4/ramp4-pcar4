import{s as m,U as n}from"./main-DVcB5zI_.js";import{f as p,i as u,s as c}from"./utils-DrUkmw0x.js";import"./preload-helper-ExcqyqRp.js";async function $(i,s,o,r){if(!s)throw new m("post:missing-guid","guid for version is missing");const t=p(i),e=o.toJSON(),a=u(t.query,{query:c({...e,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:f}=await n(d,a);return f}export{$ as deleteForwardEdits};
