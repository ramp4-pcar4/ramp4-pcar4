import{x as S}from"./themeUtils-DunS4jaw.js";const n=Symbol.for(""),d=t=>{if(t?.r===n)return t?._$litStatic$},h=t=>({_$litStatic$:t,r:n}),m=(t,...i)=>({_$litStatic$:i.reduce((e,a,o)=>e+(s=>{if(s._$litStatic$!==void 0)return s._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${s}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(a)+t[o+1],t[0]),r:n}),p=new Map,v=t=>(i,...e)=>{const a=e.length;let o,s;const l=[],$=[];let u,r=0,c=!1;for(;r<a;){for(u=i[r];r<a&&(s=e[r],(o=d(s))!==void 0);)u+=o+i[++r],c=!0;r!==a&&$.push(s),l.push(u),r++}if(r===a&&l.push(i[a]),c){const f=l.join("$$lit$$");(i=p.get(f))===void 0&&(l.raw=l,p.set(f,i=l)),e=$}return t(i,...e)},_=v(S);export{m as i,h as s,_ as u};
