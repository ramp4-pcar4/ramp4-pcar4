import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-531e2c38.js';
import { X } from './FeatureLayerView2D-301c9fcb.js';
import './preload-helper-a4975f27.js';
import './Container-f917ce80.js';
import './highlightReasons-04263050.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-5141d14b.js';
import './LayerView-bf33f7c7.js';
import './TechniqueInstance-60325a51.js';
import './UpdateTracking2D-1bb76ba2.js';
import './TurboLine-b7202ff5.js';
import './enums-d24bcbbf.js';
import './earcut-91ce8cb1.js';
import './GeometryUtils-c190e310.js';
import './Rect-09e0f861.js';
import './LabelMetric-82163c88.js';
import './Program-f70659d3.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-b824ff3b.js';
import './constants-412c3a33.js';
import './TileContainer-09b357c1.js';
import './WGLContainer-e8086d8d.js';
import './ProgramTemplate-24045991.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-48fb39da.js';
import './floatRGBA-e23b54b4.js';
import './FeatureCommandQueue-9dbd257d.js';
import './HighlightCounter-8ba6d450.js';
import './popupUtils-c8b35af3.js';
import './RefreshableLayerView-d8a1f1c9.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
