import{ca as f,cb as r}from"./main-DCIX61zy.js";async function h(e,n=e.popupTemplate){if(n==null)return[];const t=await n.getRequiredFields(e.fieldsIndex),{lastEditInfoEnabled:i}=n,{objectIdField:p,typeIdField:a,globalIdField:s,relationships:d}=e;if(t.includes("*"))return["*"];const o=i?f(e):[],l=r(e.fieldsIndex,[...t,...o]);return a&&l.push(a),l&&p&&e.fieldsIndex?.has(p)&&!l.includes(p)&&l.push(p),l&&s&&e.fieldsIndex?.has(s)&&!l.includes(s)&&l.push(s),d&&d.forEach(c=>{const{keyField:u}=c;l&&u&&e.fieldsIndex?.has(u)&&!l.includes(u)&&l.push(u)}),l}function m(e,n){return e.popupTemplate?e.popupTemplate:n!=null&&n.defaultPopupTemplateEnabled&&e.defaultPopupTemplate!=null?e.defaultPopupTemplate:null}export{h as n,m as p};
