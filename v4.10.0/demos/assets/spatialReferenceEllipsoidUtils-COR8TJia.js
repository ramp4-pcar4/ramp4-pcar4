import{aZ as a,bJ as k,bK as b,bL as u,bM as m,bN as r,bO as f}from"./main-CzbArNue.js";const C=new a(k),n=new a(b),e=new a(u),g=new a(m);function M(t){const w=c.get(t);if(w)return w;let s=C;if(t)if(t===n)s=n;else if(t===e)s=e;else{const o=t.wkid,p=t.latestWkid;if(o!=null||p!=null)r(o)||r(p)?s=n:(f(o)||f(p))&&(s=e);else{const i=t.wkt2??t.wkt;if(i){const l=i.toUpperCase();l===U?s=n:l===$&&(s=e)}}}return c.set(t,s),s}const c=new Map,U=n.wkt.toUpperCase(),$=e.wkt.toUpperCase();export{M as a,g as w};
