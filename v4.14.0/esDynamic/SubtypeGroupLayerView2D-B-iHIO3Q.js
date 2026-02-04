import{av as o,fc as u,al as l,_ as p,Y as g}from"./main-CSjwO60s.js";import{d as h}from"./FeatureLayerView2D-CPRvrYca.js";let e=class extends h{initialize(){this.addHandles([o(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const a=this.layer.sublayers.some(n=>n.renderer!=null),i=this._commandsQueue.updateTracking.updating,s=this._updatingRequiredPromise!=null,t=!this._workerProxy,r=this.dataUpdating,d=a&&(i||s||t||r);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${d}
  -> hasRenderer ${a}
  -> hasPendingCommand ${i}
  -> updatingRequiredFields ${s}
  -> updatingProxy ${t}
  -> updatingPipeline ${r}
`),d}};e=p([g("esri.views.2d.layers.SubtypeGroupLayerView2D")],e);const c=e;export{c as default};
