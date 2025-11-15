import{x as o,K as u,a4 as l,dq as p,bC as g}from"./main-DnzmeE4U.js";import{d as h}from"./FeatureLayerView2D-CgmDil8f.js";let e=class extends h{initialize(){this.addHandles([l(()=>this.view.scale,()=>this._update(),p)],"constructor")}isUpdating(){const i=this.layer.sublayers.some(n=>n.renderer!=null),s=this._commandsQueue.updateTracking.updating,a=this._updatingRequiredPromise!=null,t=!this._workerProxy,d=this.dataUpdating,r=i&&(s||a||t||d);return g("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${r}
  -> hasRenderer ${i}
  -> hasPendingCommand ${s}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${d}
`),r}};e=o([u("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const m=e;export{m as default};
