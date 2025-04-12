import{aD as v,aE as b}from"./main-0iYVBzEC.js";const m={ar:[".",","],bg:[",","\xA0"],bs:[",","."],ca:[",","."],cs:[",","\xA0"],da:[",","."],de:[",","."],"de-ch":[".","\u2019"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[",","\xA0"],fi:[",","\xA0"],fr:[",","\u202F"],"fr-ch":[",","\u202F"],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[",","\xA0"],id:[",","."],it:[",","."],"it-ch":[".","\u2019"],ja:[".",","],ko:[".",","],lt:[",","\xA0"],lv:[",","\xA0"],mk:[",","."],nb:[",","\xA0"],nl:[",","."],no:[",","\xA0"],pl:[",","\xA0"],pt:[",","."],"pt-pt":[",","\xA0"],ro:[",","."],ru:[",","\xA0"],sk:[",","\xA0"],sl:[",","."],sr:[",","."],sv:[",","\xA0"],th:[".",","],tr:[",","."],uk:[",","\xA0"],vi:[",","."],zh:[".",","]};function S(n=v()){let t=(n=n.toLowerCase())in m;if(!t){const a=n.split("-");a.length>1&&a[0]in m&&(n=a[0],t=!0),t||(n="en")}const[e,l,s="#,##0.###"]=m[n];return{decimal:e,group:l,pattern:s}}function z(n,t){const e=S((t={...t}).locale);t.customs=e;const l=t.pattern||e.pattern;return isNaN(n)||Math.abs(n)===1/0?null:y(n,l,t)}const w=/[#0,]*[#0](?:\.0*#*)?/;function y(n,t,e){const l=(e=e||{}).customs.group,s=e.customs.decimal,a=t.split(";"),r=a[0];if((t=a[n<0?1:0]||"-"+r).includes("%"))n*=100;else if(t.includes("\u2030"))n*=1e3;else{if(t.includes("\xA4"))throw new Error("currency notation not supported");if(t.includes("E"))throw new Error("exponential notation not supported")}const d=w,f=r.match(d);if(!f)throw new Error("unable to find a number expression in pattern: "+t);return e.fractional===!1&&(e.places=0),t.replace(d,O(n,f[0],{decimal:s,group:l,places:e.places,round:e.round}))}function O(n,t,e){(e=e||{}).places===!0&&(e.places=0),e.places===1/0&&(e.places=6);const l=t.split("."),s=typeof e.places=="string"&&e.places.indexOf(",");let a=e.places;s?a=e.places.slice(s+1):+a>=0||(a=(l[1]||[]).length),e.round<0||(n=Number(n.toFixed(Number(a))));const r=String(Math.abs(n)).split("."),d=r[1]||"";if(l[1]||e.places){s&&(e.places=e.places.slice(0,Math.max(0,s)));const o=e.places!==void 0?e.places:l[1]&&l[1].lastIndexOf("0")+1;+o>d.length&&(r[1]=d.padEnd(Number(o),"0")),+a<d.length&&(r[1]=d.slice(0,Math.max(0,Number(a))))}else r[1]&&r.pop();const f=l[0].replace(",","");let i=f.indexOf("0");i!==-1&&(i=f.length-i,i>r[0].length&&(r[0]=r[0].padStart(i,"0")),f.includes("#")||(r[0]=r[0].slice(-i)));let p,c,u=l[0].lastIndexOf(",");if(u!==-1){p=l[0].length-u-1;const o=l[0].slice(0,u);u=o.lastIndexOf(","),u!==-1&&(c=o.length-u-1)}const x=[];for(let o=r[0];o;){const h=o.length-p;x.push(h>0?o.slice(Math.max(0,h)):o),o=h>0?o.slice(0,h):"",c&&(p=c,c=void 0)}return r[0]=x.reverse().join(e.group||","),r.join(e.decimal||".")}function N(n){const t=S((n=n||{}).locale),e=n.pattern||t.pattern,l=t.group,s=t.decimal;let a=1;if(e.includes("%"))a/=100;else if(e.includes("\u2030"))a/=1e3;else if(e.includes("\xA4"))throw new Error("currency notation not supported");const r=e.split(";");return r.length===1&&r.push("-"+r[0]),{regexp:g(r,d=>(d="(?:"+b(d,".")+")").replace(w,f=>{const i={signed:!1,separator:n.strict?l:[l,""],fractional:n.fractional,decimal:s,exponent:!1},p=f.split(".");let c=n.places;p.length===1&&a!==1&&(p[1]="###"),p.length===1||c===0?i.fractional=!1:(c===void 0&&(c=n.pattern?p[1].lastIndexOf("0")+1:1/0),c&&n.fractional==null&&(i.fractional=!0),!n.places&&+c<p[1].length&&(c+=","+p[1].length),i.places=c);const u=p[0].split(",");return u.length>1&&(i.groupSize=u.pop().length,u.length>1&&(i.groupSize2=u.pop().length)),"("+k(i)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:l,decimal:s,factor:a}}function M(n,t){const e=N(t),l=new RegExp("^"+e.regexp+"$").exec(n);if(!l)return NaN;let s=l[1];if(!l[1]){if(!l[2])return NaN;s=l[2],e.factor*=-1}return s=s.replaceAll(new RegExp("["+e.group+"\\s\\xa0]","g"),"").replace(e.decimal,"."),Number(s)*e.factor}function k(n){"places"in(n=n||{})||(n.places=1/0),typeof n.decimal!="string"&&(n.decimal="."),"fractional"in n&&!String(n.places).startsWith("0")||(n.fractional=[!0,!1]),"exponent"in n||(n.exponent=[!0,!1]),"eSigned"in n||(n.eSigned=[!0,!1]);const t=E(n),e=g(n.fractional,s=>{let a="";return s&&n.places!==0&&(a="\\"+n.decimal,n.places===1/0?a="(?:"+a+"\\d+)?":a+="\\d{"+n.places+"}"),a},!0);let l=t+e;return e&&(l="(?:(?:"+l+")|(?:"+e+"))"),l+g(n.exponent,s=>s?"([eE]"+E({signed:n.eSigned})+")":"")}function E(n){return"signed"in(n=n||{})||(n.signed=[!0,!1]),"separator"in n?"groupSize"in n||(n.groupSize=3):n.separator="",g(n.signed,t=>t?"[-+]":"",!0)+g(n.separator,t=>{if(!t)return"(?:\\d+)";(t=b(t))===" "?t="\\s":t==="\xA0"&&(t="\\s\\xa0");const e=n.groupSize,l=n.groupSize2;if(l){const s="(?:0|[1-9]\\d{0,"+(l-1)+"}(?:["+t+"]\\d{"+l+"})*["+t+"]\\d{"+e+"})";return e-l>0?"(?:"+s+"|(?:0|[1-9]\\d{0,"+(e-1)+"}))":s}return"(?:0|[1-9]\\d{0,"+(e-1)+"}(?:["+t+"]\\d{"+e+"})*)"},!0)}const g=(n,t,e)=>{if(!Array.isArray(n))return t(n);const l=[];for(let s=0;s<n.length;s++)l.push(t(n[s]));return A(l.join("|"),!!e)},A=(n,t)=>"("+(t?"?:":"")+n+")";export{N as c,z as l,M as p};
