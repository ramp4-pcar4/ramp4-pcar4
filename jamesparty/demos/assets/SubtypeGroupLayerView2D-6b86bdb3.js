import { bH as e, bJ as c, bP as d$1, bR as P$1, a0 as has } from './main-7bf96003.js';
import { X } from './FeatureLayerView2D-73cbeba1.js';
import './preload-helper-a4975f27.js';
import './Container-8191ca70.js';
import './highlightReasons-be296056.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-f4a79c26.js';
import './LayerView-6f824516.js';
import './TechniqueInstance-2924aff7.js';
import './UpdateTracking2D-c11b4c32.js';
import './TurboLine-4a7f27ac.js';
import './enums-d24bcbbf.js';
import './earcut-a880ce24.js';
import './GeometryUtils-2c624062.js';
import './Rect-09e0f861.js';
import './LabelMetric-40672cc3.js';
import './Program-1cba9e3c.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './constants-412c3a33.js';
import './TileContainer-ebee0c60.js';
import './WGLContainer-d1353ae6.js';
import './ProgramTemplate-c63c359c.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-d0f4dab3.js';
import './floatRGBA-845e6cc3.js';
import './FeatureCommandQueue-84adcc79.js';
import './HighlightCounter-5113a062.js';
import './popupUtils-2f8c2eee.js';
import './RefreshableLayerView-8b243eec.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
