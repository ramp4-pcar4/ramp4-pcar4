import{j as o,o as u,ab as l,e1 as p,ao as g}from"./main-Dl1O3oXF.js";import{c as h}from"./FeatureLayerView2D-CSsISkvo.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(d=>d.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredPromise!=null,t=!this._workerProxy,r=this.dataUpdating,n=a&&(i||s||t||r);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${n}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),n}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const c=e;export{c as default};
