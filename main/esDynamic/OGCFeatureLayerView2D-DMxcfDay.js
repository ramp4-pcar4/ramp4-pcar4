import{x as a,z as t,K as l}from"./main-C3PVbFgd.js";import{d as o}from"./FeatureLayerView2D-BnGHXJwI.js";const p=r=>{let e=class extends r{get availableFields(){return this.layer.fieldsIndex.fields.map(i=>i.name)}};return a([t()],e.prototype,"layer",void 0),a([t({readOnly:!0})],e.prototype,"availableFields",null),e=a([l("esri.views.layers.OGCFeatureLayerView")],e),e};let s=class extends p(o){supportsSpatialReference(r){return this.layer.serviceSupportsSpatialReference(r)}};s=a([l("esri.views.2d.layers.OGCFeatureLayerView2D")],s);const n=s;export{n as default};
