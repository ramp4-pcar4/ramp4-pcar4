import{s as m,a4 as n}from"./main-Bd_03BNf.js";import{f as p,i as u,s as c}from"./utils-D9KQFO7x.js";import"./preload-helper-ExcqyqRp.js";async function h(i,s,o,r){if(!s)throw new m("post:missing-guid","guid for version is missing");const t=p(i),e=o.toJSON(),a=u(t.query,{query:c({...e,f:"json"}),...r,method:"post"});s.startsWith("{")&&(s=s.slice(1,-1));const d=`${t.path}/versions/${s}/deleteForwardEdits`,{data:f}=await n(d,a);return f}export{h as deleteForwardEdits};
