import{e0 as u,e3 as o,ar as l,a7 as p,ab as g}from"./main-De_li5Sb.js";import{B as c,p as h}from"./FeatureLikeLayerView-qoixepRl.js";class m extends c{constructor(){super(...arguments),this.layer=null}}let s=class extends h(m){initialize(){this.addHandles([u(()=>this.view.scale,()=>this._update(),o)],"constructor")}isUpdating(){const e=this.layer.sublayers.some(d=>d.renderer!=null),a=this._commandsQueue.updateTracking.updating,i=this._updatingRequiredPromise!=null,t=!this._workerProxy,r=this.dataUpdating,n=e&&(a||i||t||r);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${e}
  -> hasPendingCommand ${a}
  -> updatingRequiredFields ${i}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),n}};s=p([g("esri.views.2d.layers.SubtypeGroupLayerView2D")],s);const y=s;export{y as default};
