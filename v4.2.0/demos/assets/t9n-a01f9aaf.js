import{gw as I,gx as p,ds as F}from"./main-8009ebf4.js";import{c as N}from"./observers-7f8bc640.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */function K(e){return e==="Enter"||e===" "}const b=["0","1","2","3","4","5","6","7","8","9"];/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const O=new RegExp("-","g"),C=new RegExp("\\.?0+$");class r{constructor(t){if(this.add=n=>r.fromBigInt(this.value+new r(n).value),this.subtract=n=>r.fromBigInt(this.value-new r(n).value),this.multiply=n=>r._divRound(this.value*new r(n).value,r.SHIFT),this.divide=n=>r._divRound(this.value*r.SHIFT,new r(n).value),t instanceof r)return t;const[s,a]=String(t).split(".").concat("");this.value=BigInt(s+a.padEnd(r.DECIMALS,"0").slice(0,r.DECIMALS))+BigInt(r.ROUNDED&&a[r.DECIMALS]>="5"),this.isNegative=t.charAt(0)==="-"}getIntegersAndDecimals(){const t=this.value.toString().replace(O,"").padStart(r.DECIMALS+1,"0"),s=t.slice(0,-r.DECIMALS),a=t.slice(-r.DECIMALS).replace(C,"");return{integers:s,decimals:a}}toString(){const{integers:t,decimals:s}=this.getIntegersAndDecimals();return`${this.isNegative?"-":""}${t}${s.length?"."+s:""}`}formatToParts(t){const{integers:s,decimals:a}=this.getIntegersAndDecimals(),n=t.numberFormatter.formatToParts(BigInt(s));return this.isNegative&&n.unshift({type:"minusSign",value:t.minusSign}),a.length&&(n.push({type:"decimal",value:t.decimal}),a.split("").forEach(i=>n.push({type:"fraction",value:i}))),n}format(t){const{integers:s,decimals:a}=this.getIntegersAndDecimals(),n=`${this.isNegative?t.minusSign:""}${t.numberFormatter.format(BigInt(s))}`,i=a.length?`${t.decimal}${a.split("").map(c=>t.numberFormatter.format(Number(c))).join("")}`:"";return`${n}${i}`}}r.DECIMALS=100;r.ROUNDED=!0;r.SHIFT=BigInt("1"+"0".repeat(r.DECIMALS));r._divRound=(e,t)=>r.fromBigInt(e/t+(r.ROUNDED?e*BigInt(2)/t%BigInt(2):BigInt(0)));r.fromBigInt=e=>Object.assign(Object.create(r.prototype),{value:e});function d(e){return!(!e||isNaN(Number(e)))}function B(e){return!e||!A(e)?"":g(e,t=>{let s=!1;const a=t.split("").filter((n,i)=>n.match(/\./g)&&!s?(s=!0,!0):n.match(/\-/g)&&i===0?!0:b.includes(n)).reduce((n,i)=>n+i);return d(a)?new r(a).toString():""})}const L=/^([-0])0+(?=\d)/,M=/(?!^\.)\.$/,$=/(?!^-)-/g,_=/^-\b0\b\.?0*$/,J=e=>g(e,t=>{const s=t.replace($,"").replace(M,"").replace(L,"$1");return d(s)?_.test(s)?s:new r(s).toString():t});function g(e,t){if(!e)return e;const s=e.toLowerCase().indexOf("e")+1;return s?e.replace(/[eE]*$/g,"").substring(0,s).concat(e.slice(s).replace(/[eE]/g,"")).split(/[eE]/).map((a,n)=>t(n===1?a.replace(/\./g,""):a)).join("e").replace(/^e/,"1e"):t(e)}function A(e){return b.some(t=>e.includes(t))}const u="en",z=["ar","bg","bs","ca","cs","da","de","el",u,"es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","no","nl","pl","pt-BR","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],R=["ar","bg","bs","ca","cs","da","de","de-CH","el",u,"en-AU","en-CA","en-GB","es","es-MX","et","fi","fr","fr-CH","he","hi","hr","hu","id","it","it-CH","ja","ko","lt","lv","mk","no","nl","pl","pt","pt-PT","ro","ru","sk","sl","sr","sv","th","tr","uk","vi","zh-CN","zh-HK","zh-TW"],x=["arab","arabext","bali","beng","deva","fullwide","gujr","guru","hanidec","khmr","knda","laoo","latn","limb","mlym","mong","mymr","orya","tamldec","telu","thai","tibt"],v=e=>x.includes(e),m=new Intl.NumberFormat().resolvedOptions().numberingSystem,S=m==="arab"||!v(m)?"latn":m,T=e=>v(e)?e:S;function w(e,t="cldr"){const s=t==="cldr"?R:z;return e?s.includes(e)?e:(e=e.toLowerCase(),e==="nb"?"no":t==="t9n"&&e==="pt"?"pt-BR":(e.includes("-")&&(e=e.replace(/(\w+)-(\w+)/,(a,n,i)=>`${n}-${i.toUpperCase()}`),s.includes(e)||(e=e.split("-")[0])),e==="zh"?"zh-CN":s.includes(e)?e:(console.warn(`Translations for the "${e}" locale are not available and will fall back to the default, English (en).`),u))):u}const o=new Set;function V(e){k(e),o.size===0&&y?.observe(document.documentElement,{attributes:!0,attributeFilter:["lang"],subtree:!0}),o.add(e)}function k(e){e.effectiveLocale=j(e)}function W(e){o.delete(e),o.size===0&&y.disconnect()}const y=N("mutation",e=>{e.forEach(t=>{const s=t.target;o.forEach(a=>{if(!I(s,a.el))return;const i=p(a.el,"[lang]");if(!i){a.effectiveLocale=u;return}const c=i.lang;a.effectiveLocale=i.hasAttribute("lang")&&c===""?u:c})})});function j(e){return e.el.lang||p(e.el,"[lang]")?.lang||document.documentElement.lang||u}class H{constructor(){this.delocalize=t=>this._numberFormatOptions?g(t,s=>s.trim().replace(new RegExp(`[${this._minusSign}]`,"g"),"-").replace(new RegExp(`[${this._group}]`,"g"),"").replace(new RegExp(`[${this._decimal}]`,"g"),".").replace(new RegExp(`[${this._digits.join("")}]`,"g"),this._getDigitIndex)):t,this.localize=t=>this._numberFormatOptions?g(t,s=>d(s.trim())?new r(s.trim()).format(this).replace(new RegExp(`[${this._actualGroup}]`,"g"),this._group):s):t}get group(){return this._group}get decimal(){return this._decimal}get minusSign(){return this._minusSign}get digits(){return this._digits}get numberFormatter(){return this._numberFormatter}get numberFormatOptions(){return this._numberFormatOptions}set numberFormatOptions(t){if(t.locale=w(t?.locale),t.numberingSystem=T(t?.numberingSystem),!this._numberFormatOptions&&t.locale===u&&t.numberingSystem===S&&Object.keys(t).length===2||JSON.stringify(this._numberFormatOptions)===JSON.stringify(t))return;this._numberFormatOptions=t,this._numberFormatter=new Intl.NumberFormat(this._numberFormatOptions.locale,this._numberFormatOptions),this._digits=[...new Intl.NumberFormat(this._numberFormatOptions.locale,{useGrouping:!1,numberingSystem:this._numberFormatOptions.numberingSystem}).format(9876543210)].reverse();const s=new Map(this._digits.map((n,i)=>[n,i])),a=new Intl.NumberFormat(this._numberFormatOptions.locale).formatToParts(-123456789e-1);this._actualGroup=a.find(n=>n.type==="group").value,this._group=this._actualGroup.trim().length===0?" ":this._actualGroup,this._decimal=a.find(n=>n.type==="decimal").value,this._minusSign=a.find(n=>n.type==="minusSign").value,this._getDigitIndex=n=>s.get(n)}}const Z=new H;/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const l={};async function U(e,t){const s=`${t}_${e}`;return l[s]||(l[s]=fetch(F(`./assets/${t}/t9n/messages_${e}.json`)).then(a=>(a.ok||f(),a.json())).catch(()=>f())),l[s]}function f(){throw new Error("could not fetch component message bundle")}function h(e){e.messages={...e.defaultMessages,...e.messageOverrides}}async function X(e){e.defaultMessages=await E(e,e.effectiveLocale),h(e)}async function E(e,t){const{el:s}=e,n=s.tagName.toLowerCase().replace("calcite-","");return U(w(t,"t9n"),n)}async function q(e,t){e.defaultMessages=await E(e,t),h(e)}function Q(e){e.onMessagesChange=D}function Y(e){e.onMessagesChange=void 0}function D(){h(this)}export{Q as a,Y as b,V as c,W as d,d as e,J as f,S as g,b as h,K as i,Z as n,B as p,X as s,q as u};
