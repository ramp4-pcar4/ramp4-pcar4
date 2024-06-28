import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-a7dddec6.js';
import { X } from './FeatureLayerView2D-88c2cde6.js';
import './preload-helper-a4975f27.js';
import './Container-217b1704.js';
import './highlightReasons-a3d2d3c3.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-5b90fc04.js';
import './LayerView-304d084f.js';
import './TechniqueInstance-31b1b597.js';
import './UpdateTracking2D-2171f1f0.js';
import './TurboLine-c4d37b6b.js';
import './enums-d24bcbbf.js';
import './earcut-85e1162f.js';
import './GeometryUtils-265b8927.js';
import './Rect-09e0f861.js';
import './LabelMetric-9509222c.js';
import './Program-868bb31c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-c8aa4065.js';
import './constants-412c3a33.js';
import './TileContainer-0ce64ef4.js';
import './WGLContainer-50efbd79.js';
import './ProgramTemplate-36573304.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-3f6fc77b.js';
import './floatRGBA-4816416f.js';
import './FeatureCommandQueue-be221c85.js';
import './HighlightCounter-011ed14c.js';
import './popupUtils-2d3b1fd5.js';
import './RefreshableLayerView-0b0ab4f8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
