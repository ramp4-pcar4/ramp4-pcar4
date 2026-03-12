/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const a=(t,r,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof r!="object"&&Object.defineProperty(t,r,e),e);/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function i(t){return(r,e)=>{const{slot:o,selector:n}=t??{},c="slot"+(o?`[name=${o}]`:":not([name])");return a(r,e,{get(){const l=this.renderRoot?.querySelector(c),s=l?.assignedElements(t)??[];return n===void 0?s:s.filter(u=>u.matches(n))}})}}export{i as o};
