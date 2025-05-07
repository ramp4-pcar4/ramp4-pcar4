import{aM as o,df as u,aZ as l,D as p,K as g}from"./main-0iYVBzEC.js";import{d as h}from"./FeatureLayerView2D-DVyM_t77.js";let e=class extends h{initialize(){this.addHandles([o(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(n=>n.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredPromise!=null,t=!this._workerProxy,d=this.dataUpdating,r=a&&(i||s||t||d);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${r}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${d}
`),r}};e=p([g("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const m=e;export{m as default};
