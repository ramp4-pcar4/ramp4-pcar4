import{f1 as r}from"./main-CzbArNue.js";import{w as s}from"./dom-BveoWHh2.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const n=r;function i(e){return"opened"in e?e.opened:e.open}function f(e){n(()=>{e.transitionEl&&s(e.transitionEl,e.openTransitionProp,()=>{i(e)?e.onBeforeOpen():e.onBeforeClose()},()=>{i(e)?e.onOpen():e.onClose()})})}export{f as o};
