import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-94362e0c.js';
import { X } from './FeatureLayerView2D-dd518e53.js';
import './preload-helper-a4975f27.js';
import './Container-a73c9c87.js';
import './highlightReasons-b35f66f2.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-7273ab1a.js';
import './LayerView-3378a41b.js';
import './TechniqueInstance-e2c78e5a.js';
import './UpdateTracking2D-434d8c34.js';
import './TurboLine-a31d277b.js';
import './enums-d24bcbbf.js';
import './earcut-1e14bf20.js';
import './GeometryUtils-be4b8840.js';
import './Rect-09e0f861.js';
import './LabelMetric-7635de25.js';
import './Program-da4c27a4.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-6f67b5e7.js';
import './constants-412c3a33.js';
import './TileContainer-d8261971.js';
import './WGLContainer-206bc867.js';
import './ProgramTemplate-86b5eea5.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-1e1d04fd.js';
import './floatRGBA-def54223.js';
import './FeatureCommandQueue-ab58c794.js';
import './HighlightCounter-fe4f51b1.js';
import './popupUtils-64b9b271.js';
import './RefreshableLayerView-7ff0f0ed.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
