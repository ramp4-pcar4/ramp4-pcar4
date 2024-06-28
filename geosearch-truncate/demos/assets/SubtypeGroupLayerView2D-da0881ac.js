import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-81f3306c.js';
import { X } from './FeatureLayerView2D-a511a026.js';
import './preload-helper-a4975f27.js';
import './Container-6e8bfa00.js';
import './highlightReasons-1ad4e237.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-6f6d52b5.js';
import './LayerView-611d2b16.js';
import './TechniqueInstance-ebabca52.js';
import './UpdateTracking2D-9116c553.js';
import './TurboLine-ad3051aa.js';
import './enums-d24bcbbf.js';
import './earcut-af49cf80.js';
import './GeometryUtils-25b30a74.js';
import './Rect-09e0f861.js';
import './LabelMetric-b88a203c.js';
import './Program-e520abc8.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-0a4bc4e8.js';
import './constants-412c3a33.js';
import './TileContainer-2966f1c4.js';
import './WGLContainer-c4fe7cd4.js';
import './ProgramTemplate-23408574.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-d79d4497.js';
import './floatRGBA-4ca67943.js';
import './FeatureCommandQueue-9add50e2.js';
import './HighlightCounter-b7428b0a.js';
import './popupUtils-6d199c48.js';
import './RefreshableLayerView-4d6701d3.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
