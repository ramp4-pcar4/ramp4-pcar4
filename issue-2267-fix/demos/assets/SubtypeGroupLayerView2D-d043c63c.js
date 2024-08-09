import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-d907decb.js';
import { X } from './FeatureLayerView2D-a577696e.js';
import './preload-helper-a4975f27.js';
import './Container-3a9d8b65.js';
import './highlightReasons-ecdd3940.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6c4d1254.js';
import './LayerView-352fd40b.js';
import './TechniqueInstance-a52cc378.js';
import './UpdateTracking2D-12d8e2fb.js';
import './TurboLine-a5007592.js';
import './enums-d24bcbbf.js';
import './earcut-35d48295.js';
import './GeometryUtils-d1e3eed8.js';
import './Rect-09e0f861.js';
import './LabelMetric-487a78fb.js';
import './Program-94d53150.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-349e5799.js';
import './constants-412c3a33.js';
import './TileContainer-d5765d19.js';
import './WGLContainer-40f41cbf.js';
import './ProgramTemplate-f8c8ff42.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-5a2ae5de.js';
import './floatRGBA-815c922e.js';
import './FeatureCommandQueue-c7b04ac7.js';
import './HighlightCounter-0872da6f.js';
import './popupUtils-93bad0a0.js';
import './RefreshableLayerView-8ba01d19.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
