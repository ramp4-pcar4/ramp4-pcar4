import{b5 as d,b6 as f,b7 as i,b8 as b,U as u}from"./main-8009ebf4.js";import"./preload-helper-388ac9d5.js";function l(n){const t=n.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t}function j(n,t){const e={};for(const s of t){const{parentObjectId:a,parentGlobalId:o,attachmentInfos:r}=s;for(const c of r){const{id:h}=c,p=d(f(`${n.path}/${a}/attachments/${h}`)),m=i.fromJSON(c);m.set({url:p,parentObjectId:a,parentGlobalId:o}),e[a]?e[a].push(m):e[a]=[m]}}return e}function q(n,t,e){let s={query:b({...n.query,f:"json",...l(t)})};return e&&(s={...e,...s,query:{...e.query,...s.query}}),u(n.path+"/queryAttachments",s).then(a=>a.data.attachmentGroups)}async function O(n,t,e){const{objectIds:s}=t,a=[];for(const o of s)a.push(u(n.path+"/"+o+"/attachments",e));return Promise.all(a).then(o=>s.map((r,c)=>({parentObjectId:r,attachmentInfos:o[c].data.attachmentInfos})))}export{q as executeAttachmentQuery,O as fetchAttachments,j as processAttachmentQueryResult};
