import{F as r}from"./dom-31sk8mer.js";/*! All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
v3.0.3 */function o(n){return n[n.openProp||"open"]}function i(n){requestAnimationFrame(()=>{n.transitionEl&&r(n.transitionEl,n.transitionProp,()=>{o(n)?n.onBeforeOpen():n.onBeforeClose()},()=>{o(n)?n.onOpen():n.onClose()})})}export{i as s};
