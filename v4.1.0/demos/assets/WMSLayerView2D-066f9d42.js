import{e as s,y as m,fH as F,n as b,gJ as M,aO as S,f as g,at as E,u as R,O as q,w as U}from"./main-e6c796d9.js";import{a as I}from"./BitmapContainer-ae251026.js";import{f as V,u as W}from"./LayerView-1a919b5a.js";import{v as H}from"./ExportStrategy-731b5deb.js";import{i as L}from"./RefreshableLayerView-d84dad09.js";import"./preload-helper-388ac9d5.js";import"./WGLContainer-514e80dc.js";import"./definitions-19bfb61c.js";import"./VertexArrayObject-3edd1b52.js";import"./Texture-67b84735.js";import"./enums-64ab819c.js";import"./VertexElementDescriptor-2925c6af.js";import"./color-efbded4a.js";import"./enums-55085e26.js";import"./ProgramTemplate-cc0d5dc0.js";import"./MaterialKey-596a8b14.js";import"./utils-b09a5dd6.js";import"./StyleDefinition-fbc907c2.js";import"./config-1337d16e.js";import"./GeometryUtils-dd03fc25.js";import"./Container-7f118176.js";import"./earcut-61f7b102.js";import"./Bitmap-bdcbcbee.js";const j=e=>{let t=class extends e{initialize(){this.exportImageParameters=new M({layer:this.layer})}destroy(){this.exportImageParameters=S(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}fetchPopupFeatures(a){const{layer:i}=this;if(!a)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i}));const{popupEnabled:p}=i;if(!p)return Promise.reject(new g("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:p}));const u=this.createFetchPopupFeaturesQuery(a);if(!u)return Promise.resolve([]);const{extent:r,width:o,height:n,x:d,y:c}=u;if(!(r&&o&&n))throw new g("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:r,width:o,height:n});return i.fetchFeatureInfo(r,o,n,d,c)}};return s([m()],t.prototype,"exportImageParameters",void 0),s([m({readOnly:!0})],t.prototype,"exportImageVersion",null),s([m()],t.prototype,"layer",void 0),s([m(F)],t.prototype,"timeExtent",void 0),t=s([b("esri.layers.mixins.WMSLayerView")],t),t};let h=class extends j(L(V(W))){constructor(){super(...arguments),this.bitmapContainer=new I}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{E(t)||R.getLogger(this.declaredClass).error(t)})}attach(){const{layer:e}=this,{imageMaxHeight:t,imageMaxWidth:a}=e;this.bitmapContainer=new I,this.container.addChild(this.bitmapContainer),this.strategy=new H({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:t,imageMaxWidth:a,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(q(()=>this.exportImageVersion,()=>this.requestUpdate()))}detach(){this.strategy=S(this.strategy),this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,bitmapContainer:a}=this,{x:i,y:p}=e,{spatialReference:u}=t;let r,o=0,n=0;if(a.children.some(C=>{const{width:x,height:f,resolution:w,x:l,y}=C,v=l+w*x,P=y-w*f;return i>=l&&i<=v&&p<=y&&p>=P&&(r=new U({xmin:l,ymin:P,xmax:v,ymax:y,spatialReference:u}),o=x,n=f,!0)}),!r)return null;const d=r.width/o,c=Math.round((i-r.xmin)/d),$=Math.round((r.ymax-p)/d);return{extent:r,width:o,height:n,x:c,y:$}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,a,i){return this.layer.fetchImageBitmap(e,t,a,{timeExtent:this.timeExtent,...i})}};s([m()],h.prototype,"strategy",void 0),s([m()],h.prototype,"updating",void 0),h=s([b("esri.views.2d.layers.WMSLayerView2D")],h);const pt=h;export{pt as default};
