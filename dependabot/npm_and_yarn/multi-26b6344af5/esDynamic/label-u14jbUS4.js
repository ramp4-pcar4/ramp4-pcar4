import{Q as L,m as p,R as k}from"./dom-BoCTcYFU.js";const b="calciteInternalLabelClick",d="calciteInternalLabelConnected",u="calciteInternalLabelDisconnected",h="calcite-label",o=new WeakMap,r=new WeakMap,c=new WeakMap,m=new WeakMap,a=new Set,w=e=>{const{id:t}=e,n=t&&L(e,{selector:`${h}[for="${t}"]`});if(n)return n;const l=p(e,h);return!l||I(l,e)?null:l};function I(e,t){let n;const l="custom-element-ancestor-check",i=s=>{s.stopImmediatePropagation();const f=s.composedPath();n=f.slice(f.indexOf(t),f.indexOf(e))};return e.addEventListener(l,i,{once:!0}),t.dispatchEvent(new CustomEvent(l,{composed:!0,bubbles:!0})),e.removeEventListener(l,i),n.filter(s=>s!==t&&s!==e).filter(s=>s.tagName?.includes("-")).length>0}function E(e){if(!e)return;const t=w(e.el);if(r.has(t)&&t===e.labelEl||!t&&a.has(e))return;const n=x.bind(e);if(t){e.labelEl=t;const l=o.get(t)||[];l.push(e),o.set(t,l.sort(v)),r.has(e.labelEl)||(r.set(e.labelEl,g),e.labelEl.addEventListener(b,g)),a.delete(e),document.removeEventListener(d,c.get(e)),m.set(e,n),document.addEventListener(u,n)}else a.has(e)||(n(),document.removeEventListener(u,m.get(e)))}function C(e){if(!e||(a.delete(e),document.removeEventListener(d,c.get(e)),document.removeEventListener(u,m.get(e)),c.delete(e),m.delete(e),!e.labelEl))return;const t=o.get(e.labelEl);t.length===1&&(e.labelEl.removeEventListener(b,r.get(e.labelEl)),r.delete(e.labelEl)),o.set(e.labelEl,t.filter(n=>n!==e).sort(v)),e.labelEl=null}function v(e,t){return k(e.el,t.el)?-1:1}function M(e){return e.label||e.labelEl?.textContent?.trim()||""}function g(e){const t=e.detail.sourceEvent.target,n=o.get(this),l=n.find(s=>s.el===t);if(n.includes(l))return;const i=n[0];i.disabled||i.onLabelClick(e)}function W(){a.has(this)&&E(this)}function x(){a.add(this);const e=c.get(this)||W.bind(this);c.set(this,e),document.addEventListener(d,e)}async function y(e){if(await e.componentOnReady(),o.has(e))return;const t=e.ownerDocument?.getElementById(e.for);t&&requestAnimationFrame(()=>{for(const n of a)if(n.el===t){E(n);break}})}export{y as B,d as E,M as I,C as T,u as f,E as v};
