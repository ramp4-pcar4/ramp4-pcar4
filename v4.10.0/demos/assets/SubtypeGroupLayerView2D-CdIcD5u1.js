import{bw as a,by as n,cf as d,cg as u,Q as l}from"./main-CzbArNue.js";import{r as g}from"./FeatureLayerView2D-B2YOjOGO.js";import"./preload-helper-ExcqyqRp.js";import"./Container-YB8BBMjE.js";import"./timeSupport-Bj-pNdJN.js";import"./LayerView-Ck3mR3vt.js";import"./layerViewUtils-CKW6QWO-.js";import"./TechniqueInstance-CfXcGkOf.js";import"./UpdateTracking2D-BdYdrn9N.js";import"./BidiEngine-DNnuvc1i.js";import"./GeometryUtils-B5OGAATT.js";import"./Rect-CUzevAry.js";import"./LabelMetric-hP-xV4kN.js";import"./Program-DtvrcJVH.js";import"./BufferObject-COmOSznC.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./BindType-BmZEZMMh.js";import"./Util-DC-hA0iR.js";import"./TileContainer-Da-C8_CP.js";import"./WGLContainer-lo2WWuxf.js";import"./VertexArrayObject-CH1EhbG6.js";import"./ProgramTemplate-D4pS209o.js";import"./vec3f32-nZdmKIgz.js";import"./StyleDefinition-DxIfDb1I.js";import"./config-MDUrh2eL.js";import"./earcut-Lltz9D9k.js";import"./FeatureCommandQueue-DmpjJglh.js";import"./constants-F8oTIn7N.js";import"./CircularArray-CujHzHWW.js";import"./SDFHelper-D3jYOu-4.js";import"./floatRGBA-27q1qkUd.js";import"./HighlightCounter-Czi-fdpx.js";import"./popupUtils-CJBtuwUc.js";import"./RefreshableLayerView-BD7EM3Zi.js";let i=class extends g{initialize(){this.addHandles([d(()=>this.view.scale,()=>this._update(),u)],"constructor")}isUpdating(){const t=this.layer.sublayers.some(s=>s.renderer!=null),r=this._commandsQueue.updateTracking.updating,o=this._updatingRequiredFieldsPromise!=null,p=!this._workerProxy,e=this.dataUpdating,m=t&&(r||o||p||e);return l("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${m}
  -> hasRenderer ${t}
  -> hasPendingCommand ${r}
  -> updatingRequiredFields ${o}
  -> updatingProxy ${p}
  -> updatingPipeline ${e}
`),m}};i=a([n("esri.views.2d.layers.SubtypeGroupLayerView2D")],i);const N=i;export{N as default};
