import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-b03b5063.js';
import { X } from './FeatureLayerView2D-e4def875.js';
import './preload-helper-a4975f27.js';
import './Container-bf3f4a13.js';
import './highlightReasons-6c0a22e8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-a56ecf7a.js';
import './LayerView-6c0e0f20.js';
import './TechniqueInstance-1be19484.js';
import './UpdateTracking2D-1a150aea.js';
import './TurboLine-db7a7ea8.js';
import './enums-d24bcbbf.js';
import './earcut-00b34c4e.js';
import './GeometryUtils-f4aea631.js';
import './Rect-09e0f861.js';
import './LabelMetric-15d3c2d4.js';
import './Program-b0a40859.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-bd1e8edc.js';
import './constants-412c3a33.js';
import './TileContainer-1222339a.js';
import './WGLContainer-ed98186c.js';
import './ProgramTemplate-127684de.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-ec1b6d5f.js';
import './floatRGBA-a0ea3075.js';
import './FeatureCommandQueue-f7275d24.js';
import './HighlightCounter-72b1ae15.js';
import './popupUtils-9994daef.js';
import './RefreshableLayerView-838f08d8.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
