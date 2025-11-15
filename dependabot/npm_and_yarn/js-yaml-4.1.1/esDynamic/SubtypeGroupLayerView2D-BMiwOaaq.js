import{as as o,fb as u,ai as l,_ as p,U as g}from"./main-BdfHWGJs.js";import{d as h}from"./FeatureLayerView2D-BnN7zfHj.js";let e=class extends h{initialize(){this.addHandles([o(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const i=this.layer.sublayers.some(n=>n.renderer!=null),s=this._commandsQueue.updateTracking.updating,a=this._updatingRequiredPromise!=null,t=!this._workerProxy,r=this.dataUpdating,d=i&&(s||a||t||r);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${i}
  -> hasPendingCommand ${s}
  -> updatingRequiredFields ${a}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),d}};e=p([g("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const m=e;export{m as default};
