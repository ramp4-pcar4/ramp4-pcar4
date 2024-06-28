import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-ea2ac364.js';
import { X } from './FeatureLayerView2D-edad818c.js';
import './preload-helper-a4975f27.js';
import './Container-638d0fae.js';
import './highlightReasons-dacedcbb.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-813594b1.js';
import './LayerView-7254ee35.js';
import './TechniqueInstance-2c5c10fd.js';
import './UpdateTracking2D-b9fad5e0.js';
import './TurboLine-49ca70eb.js';
import './enums-d24bcbbf.js';
import './earcut-6175cae4.js';
import './GeometryUtils-d8fd9f30.js';
import './Rect-09e0f861.js';
import './LabelMetric-3a80a80c.js';
import './Program-3681201a.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-fbd2e71b.js';
import './constants-412c3a33.js';
import './TileContainer-8b175705.js';
import './WGLContainer-0982da6a.js';
import './ProgramTemplate-90842f8d.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-c098ec24.js';
import './floatRGBA-4cdd6bcc.js';
import './FeatureCommandQueue-6683a538.js';
import './HighlightCounter-a4576e6b.js';
import './popupUtils-ca263642.js';
import './RefreshableLayerView-cd0a7243.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
