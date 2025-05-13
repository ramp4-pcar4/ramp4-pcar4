import{x as o,K as u,aM as l,df as p,aY as g}from"./main-Dz8eEJXL.js";import{d as h}from"./FeatureLayerView2D-BBmiwN9K.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(n=>n.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredPromise!=null,t=!this._workerProxy,d=this.dataUpdating,r=a&&(i||s||t||d);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${r}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${d}
`),r}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const m=e;export{m as default};
