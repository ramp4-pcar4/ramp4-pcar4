import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-11560473.js';
import { X } from './FeatureLayerView2D-5e73d48e.js';
import './preload-helper-a4975f27.js';
import './Container-2b3b720d.js';
import './highlightReasons-26b94219.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-e6d7d511.js';
import './LayerView-bfd478a1.js';
import './TechniqueInstance-a4514021.js';
import './UpdateTracking2D-b6cb1547.js';
import './TurboLine-d74002eb.js';
import './enums-d24bcbbf.js';
import './earcut-e36c2950.js';
import './GeometryUtils-1880e7d6.js';
import './Rect-09e0f861.js';
import './LabelMetric-bb3ed296.js';
import './Program-151af727.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-2ea80bcc.js';
import './constants-412c3a33.js';
import './TileContainer-d0be874d.js';
import './WGLContainer-974b3fd0.js';
import './ProgramTemplate-27ae976b.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-58ba07ce.js';
import './floatRGBA-e1eaf43e.js';
import './FeatureCommandQueue-8d4f0417.js';
import './HighlightCounter-00c4a2a3.js';
import './popupUtils-396dafd8.js';
import './RefreshableLayerView-b0bda0c1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
