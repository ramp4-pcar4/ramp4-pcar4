import{a_ as a,v as p,k as t,o as i,u as m,q as l,A as d}from"./main-kpG51UWM.js";import{i as u}from"./Field-C6hA1tZj.js";import{p as c}from"./FeatureTemplate-SPHPD45f.js";let o=class extends a(p){constructor(s){super(s),this.id=null,this.name=null,this.domains=null,this.templates=null}readDomains(s){const r={};for(const e of Object.keys(s))r[e]=u(s[e]);return r}writeDomains(s,r){const e={};for(const n of Object.keys(s))s[n]&&(e[n]=s[n]?.toJSON());r.domains=e}};t([i({json:{write:!0}})],o.prototype,"id",void 0),t([i({json:{write:!0}})],o.prototype,"name",void 0),t([i({json:{write:!0}})],o.prototype,"domains",void 0),t([m("domains")],o.prototype,"readDomains",null),t([l("domains")],o.prototype,"writeDomains",null),t([i({type:[c],json:{write:!0}})],o.prototype,"templates",void 0),o=t([d("esri.layers.support.FeatureType")],o);const y=o;export{y as n};
