import { bL as j, bM as I } from './main-8822140d.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
async function n(n,p=n.popupTemplate){if(null==p)return [];const u=await p.getRequiredFields(n.fieldsIndex),{lastEditInfoEnabled:t}=p,{objectIdField:d,typeIdField:s,globalIdField:i,relationships:a}=n;if(u.includes("*"))return ["*"];const o=t?j(n):[],f=I(n.fieldsIndex,[...u,...o]);return s&&f.push(s),f&&d&&n.fieldsIndex?.has(d)&&!f.includes(d)&&f.push(d),f&&i&&n.fieldsIndex?.has(i)&&!f.includes(i)&&f.push(i),a&&a.forEach((e=>{const{keyField:l}=e;f&&l&&n.fieldsIndex?.has(l)&&!f.includes(l)&&f.push(l);})),f}function p(e,l){return e.popupTemplate?e.popupTemplate:null!=l&&l.defaultPopupTemplateEnabled&&null!=e.defaultPopupTemplate?e.defaultPopupTemplate:null}

export { n, p };
