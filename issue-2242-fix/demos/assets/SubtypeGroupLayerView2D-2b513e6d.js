import { aX as e, aZ as c, b3 as d$1, b5 as P$1, X as has } from './main-73be8b09.js';
import { X } from './FeatureLayerView2D-953baaba.js';
import './preload-helper-a4975f27.js';
import './Container-f0bd0539.js';
import './highlightReasons-16f4e1a4.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-baa6fe37.js';
import './LayerView-006ddf70.js';
import './TechniqueInstance-8d457942.js';
import './UpdateTracking2D-12849e1e.js';
import './TurboLine-6c42aee0.js';
import './enums-d24bcbbf.js';
import './earcut-4ed90869.js';
import './GeometryUtils-ef734e8b.js';
import './Rect-09e0f861.js';
import './LabelMetric-a665d9b8.js';
import './Program-5322f5c6.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-35ccc2d9.js';
import './constants-412c3a33.js';
import './TileContainer-eaa66cca.js';
import './WGLContainer-55313a47.js';
import './ProgramTemplate-cacba1b0.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-5b8f663b.js';
import './floatRGBA-3010a02e.js';
import './FeatureCommandQueue-43aad68c.js';
import './HighlightCounter-1dbe39d6.js';
import './popupUtils-a53c1804.js';
import './RefreshableLayerView-a9ba9824.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
