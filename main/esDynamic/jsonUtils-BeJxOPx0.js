import{b3 as s,J as u}from"./main-C3PVbFgd.js";import{m as o}from"./typeUtils-DOkFRtHp.js";function l(e,n){return t(e,null,n)}const a=s({types:o});function t(e,n,r){return e?e&&(e.styleName||e.styleUrl)&&e.type!=="uniqueValue"?(r?.messages&&r.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):a(e,n,r):null}export{l as fromJSON,t as read};
