import{aF as E,aG as S}from"./main-Bd_03BNf.js";const x={ar:[".",","],bg:[","," "],bs:[",","."],ca:[",","."],cs:[","," "],da:[",","."],de:[",","."],"de-ch":[".","’"],el:[",","."],en:[".",","],"en-au":[".",","],es:[",","."],"es-mx":[".",","],et:[","," "],fi:[","," "],fr:[","," "],"fr-ch":[","," "],he:[".",","],hi:[".",",","#,##,##0.###"],hr:[",","."],hu:[","," "],id:[",","."],it:[",","."],"it-ch":[".","’"],ja:[".",","],ko:[".",","],lt:[","," "],lv:[","," "],mk:[",","."],nb:[","," "],nl:[",","."],no:[","," "],pl:[","," "],pt:[",","."],"pt-pt":[","," "],ro:[",","."],ru:[","," "],sk:[","," "],sl:[",","."],sr:[",","."],sv:[","," "],th:[".",","],tr:[",","."],uk:[","," "],vi:[",","."],zh:[".",","]};function w(e=E()){let r=(e=e.toLowerCase())in x;if(!r){const s=e.split("-");s.length>1&&s[0]in x&&(e=s[0],r=!0),r||(e="en")}const[n,t,l="#,##0.###"]=x[e];return{decimal:n,group:t,pattern:l}}function k(e,r){const n=w((r={...r}).locale);r.customs=n;const t=r.pattern||n.pattern;return isNaN(e)||Math.abs(e)===1/0?null:v(e,t,r)}const N=/[#0,]*[#0](?:\.0*#*)?/;function v(e,r,n){const t=(n=n||{}).customs.group,l=n.customs.decimal,s=r.split(";"),a=s[0];if((r=s[e<0?1:0]||"-"+a).includes("%"))e*=100;else if(r.includes("‰"))e*=1e3;else{if(r.includes("¤"))throw new Error("currency notation not supported");if(r.includes("E"))throw new Error("exponential notation not supported")}const d=N,u=a.match(d);if(!u)throw new Error("unable to find a number expression in pattern: "+r);return n.fractional===!1&&(n.places=0),r.replace(d,z(e,u[0],{decimal:l,group:t,places:n.places,round:n.round}))}function z(e,r,n){(n=n||{}).places===!0&&(n.places=0),n.places===1/0&&(n.places=6);const t=r.split("."),l=typeof n.places=="string"&&n.places.indexOf(",");let s=n.places;l?s=n.places.slice(l+1):+s>=0||(s=(t[1]||[]).length),n.round<0||(e=Number(e.toFixed(Number(s))));const a=String(Math.abs(e)).split("."),d=a[1]||"";if(t[1]||n.places){l&&(n.places=n.places.slice(0,Math.max(0,l)));const i=n.places!==void 0?n.places:t[1]&&t[1].lastIndexOf("0")+1;+i>d.length&&(a[1]=d.padEnd(Number(i),"0")),+s<d.length&&(a[1]=d.slice(0,Math.max(0,Number(s))))}else a[1]&&a.pop();const u=t[0].replace(",","");let f=u.indexOf("0");f!==-1&&(f=u.length-f,f>a[0].length&&(a[0]=a[0].padStart(f,"0")),u.includes("#")||(a[0]=a[0].slice(-f)));let p,c,o=t[0].lastIndexOf(",");if(o!==-1){p=t[0].length-o-1;const i=t[0].slice(0,o);o=i.lastIndexOf(","),o!==-1&&(c=i.length-o-1)}const g=[];for(let i=a[0];i;){const m=i.length-p;g.push(m>0?i.slice(Math.max(0,m)):i),i=m>0?i.slice(0,m):"",c&&(p=c,c=void 0)}return a[0]=g.reverse().join(n.group||","),a.join(n.decimal||".")}function y(e){const r=w((e=e||{}).locale),n=e.pattern||r.pattern,t=r.group,l=r.decimal;let s=1;if(n.includes("%"))s/=100;else if(n.includes("‰"))s/=1e3;else if(n.includes("¤"))throw new Error("currency notation not supported");const a=n.split(";");return a.length===1&&a.push("-"+a[0]),{regexp:h(a,u=>(u="(?:"+S(u,".")+")").replace(N,f=>{const p={signed:!1,separator:e.strict?t:[t,""],fractional:e.fractional,decimal:l,exponent:!1},c=f.split(".");let o=e.places;c.length===1&&s!==1&&(c[1]="###"),c.length===1||o===0?p.fractional=!1:(o===void 0&&(o=e.pattern?c[1].lastIndexOf("0")+1:1/0),o&&e.fractional==null&&(p.fractional=!0),!e.places&&+o<c[1].length&&(o+=","+c[1].length),p.places=o);const g=c[0].split(",");return g.length>1&&(p.groupSize=g.pop().length,g.length>1&&(p.groupSize2=g.pop().length)),"("+O(p)+")"}),!0).replaceAll(/[\xa0 ]/g,"[\\s\\xa0]"),group:t,decimal:l,factor:s}}function A(e,r){const n=y(r),t=new RegExp("^"+n.regexp+"$").exec(e);if(!t)return NaN;let l=t[1];if(!t[1]){if(!t[2])return NaN;l=t[2],n.factor*=-1}return l=l.replaceAll(new RegExp("["+n.group+"\\s\\xa0]","g"),"").replace(n.decimal,"."),Number(l)*n.factor}function O(e){"places"in(e=e||{})||(e.places=1/0),typeof e.decimal!="string"&&(e.decimal="."),"fractional"in e&&!String(e.places).startsWith("0")||(e.fractional=[!0,!1]),"exponent"in e||(e.exponent=[!0,!1]),"eSigned"in e||(e.eSigned=[!0,!1]);const r=b(e),n=h(e.fractional,l=>{let s="";return l&&e.places!==0&&(s="\\"+e.decimal,e.places===1/0?s="(?:"+s+"\\d+)?":s+="\\d{"+e.places+"}"),s},!0);let t=r+n;return n&&(t="(?:(?:"+t+")|(?:"+n+"))"),t+h(e.exponent,l=>l?"([eE]"+b({signed:e.eSigned})+")":"")}function b(e){return"signed"in(e=e||{})||(e.signed=[!0,!1]),"separator"in e?"groupSize"in e||(e.groupSize=3):e.separator="",h(e.signed,r=>r?"[-+]":"",!0)+h(e.separator,r=>{if(!r)return"(?:\\d+)";(r=S(r))===" "?r="\\s":r===" "&&(r="\\s\\xa0");const n=e.groupSize,t=e.groupSize2;if(t){const l="(?:0|[1-9]\\d{0,"+(t-1)+"}(?:["+r+"]\\d{"+t+"})*["+r+"]\\d{"+n+"})";return n-t>0?"(?:"+l+"|(?:0|[1-9]\\d{0,"+(n-1)+"}))":l}return"(?:0|[1-9]\\d{0,"+(n-1)+"}(?:["+r+"]\\d{"+n+"})*)"},!0)}const h=(e,r,n)=>{if(!Array.isArray(e))return r(e);const t=[];for(let l=0;l<e.length;l++)t.push(r(e[l]));return M(t.join("|"),!!n)},M=(e,r)=>"("+(r?"?:":"")+e+")";export{y as c,k as l,A as p};
