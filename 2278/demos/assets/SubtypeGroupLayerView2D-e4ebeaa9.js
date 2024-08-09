import { aX as e, aZ as c, b3 as d$1, b5 as P$1, W as has } from './main-e59ca501.js';
import { X } from './FeatureLayerView2D-bfd8e151.js';
import './preload-helper-a4975f27.js';
import './Container-4363ce99.js';
import './highlightReasons-4f8752c8.js';
import './definitions-1e43ef7c.js';
import './enums-af0bf3a9.js';
import './Texture-982364b2.js';
import './LayerView-e7060a91.js';
import './TechniqueInstance-8727be57.js';
import './UpdateTracking2D-fc8d78db.js';
import './TurboLine-bc81f071.js';
import './enums-d24bcbbf.js';
import './earcut-53600461.js';
import './GeometryUtils-4a87f9f7.js';
import './Rect-09e0f861.js';
import './LabelMetric-92b6cc5f.js';
import './Program-b3e4c384.js';
import './VertexElementDescriptor-ec2771ab.js';
import './BindType-941d78d8.js';
import './Util-1acb9ed4.js';
import './constants-412c3a33.js';
import './TileContainer-d1770f32.js';
import './WGLContainer-43df48a1.js';
import './ProgramTemplate-fa9ffc66.js';
import './StyleDefinition-acf40298.js';
import './config-71aad884.js';
import './tileUtils-6f82bc7d.js';
import './SDFHelper-a8cbbb85.js';
import './floatRGBA-278434c2.js';
import './FeatureCommandQueue-318803fc.js';
import './HighlightCounter-0f95af9a.js';
import './popupUtils-7531b4d7.js';
import './RefreshableLayerView-e37e8ba1.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.29/esri/copyright.txt for details.
*/
let o=class extends X{initialize(){this.addHandles([d$1((()=>this.view.scale),(()=>this._update()),P$1)],"constructor");}isUpdating(){const e=this.layer.sublayers.some((e=>null!=e.renderer)),r=this._commandsQueue.updateTracking.updating,s=null!=this._updatingRequiredFieldsPromise,i=!this._worker,t=this.dataUpdating,o=e&&(r||s||i||t);return has("esri-2d-log-updating")&&console.log(`Updating FLV2D: ${o}\n  -> hasRenderer ${e}\n  -> hasPendingCommand ${r}\n  -> updatingRequiredFields ${s}\n  -> updatingProxy ${i}\n  -> updatingPipeline ${t}\n`),o}};o=e([c("esri.views.2d.layers.SubtypeGroupLayerView2D")],o);const a=o;

export { a as default };
