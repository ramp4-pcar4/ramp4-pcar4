import{dc as G,fs as H,q as t,u as r,bx as J,bA as U,g2 as X,C as F,g3 as Z,V as D,c_ as k,aG as L,f4 as P,cZ as B,aw as I,eL as _,aR as q,v as K}from"./main-B5_XOOwi.js";import{c as Q,b as W}from"./featureReferenceUtils-BkMN4PQy.js";import{a as x}from"./Cyclical-Q67pgA4o.js";import{c as Y}from"./Analysis-B_D2RWOz.js";import{X as ee}from"./projection-DwpqUf7U.js";import{S as te}from"./MultiOriginJSONSupport-DkLctrrM.js";import{f as ie}from"./Layer-nl2KuhhW.js";import{b as re}from"./OperationalLayer-Cehlr_R7.js";import"./preload-helper-ExcqyqRp.js";import"./vec32-DACfXE6P.js";import"./common-DQOJ18NT.js";import"./sphere-ConAvt7u.js";import"./mat4-CUdVSMyt.js";import"./vec42-CKs01hkn.js";import"./vec4f64-CMoMXWBi.js";import"./mat3-XZDRtl20.js";import"./mat3f64-q3fE-ZOt.js";import"./plane-DGliVf72.js";import"./mat4f64-CSKppSlJ.js";import"./quatf64-aQ5IuZRd.js";import"./vec2f64-B7N_6o8F.js";import"./IntersectorInterfaces-dI_rFEZm.js";import"./boundedPlane-DCi92Phe.js";import"./lineSegment-lbrjui-u.js";import"./projectBuffer-D86redIv.js";import"./TimeExtent-ClRYiBYy.js";import"./commonProperties-ic16IyJB.js";import"./ElevationInfo-D0F8JnN_.js";import"./lengthUtils-DlDHnfM5.js";let a=class extends G(Z){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&Q(this.feature,e.feature)}};t([r({type:J,json:{write:!0}})],a.prototype,"observer",void 0),t([r({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],a.prototype,"farDistance",void 0),t([r({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),U(i=>x.normalize(X(i),void 0,!0))],a.prototype,"heading",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"tilt",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],a.prototype,"horizontalFieldOfView",void 0),t([r({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],a.prototype,"verticalFieldOfView",void 0),t([r(W)],a.prototype,"feature",void 0),t([r({json:{read:!1}})],a.prototype,"isValid",null),a=t([F("esri.analysis.Viewshed")],a);const S=a,N=D.ofType(S);let p=class extends Y{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(L(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},P))}get viewsheds(){return this._get("viewsheds")||new N}set viewsheds(e){this._set("viewsheds",B(e,this.viewsheds,N))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const u=this.viewsheds.filter(s=>s.observer!=null),m=u.map(s=>s.observer).toArray(),o=ee(m,e);return o.pending!=null?{pending:o.pending,extent:null}:{pending:null,extent:o.geometries.map((s,d)=>{const b=u.at(d);return s!=null&&b!=null?this._computeViewshedExtent(this.viewsheds.at(d),s):null}).filter(s=>s!=null).reduce((s,d)=>se(s,d),null)}}_computeViewshedExtent(e,u){const{farDistance:m,heading:o,tilt:s,horizontalFieldOfView:d,verticalFieldOfView:b}=e,{spatialReference:j}=u,V=d/2,O=b/2,$=m/j.metersPerUnit,T=[x.normalize(o-V),o,x.normalize(o+V)],h=I.fromPoint(u),v=f=>{const c=T.map(l=>x.normalize(l-f));if(c[0]>c[2]||d===360)return $;const y=c.map(l=>Math.abs(l>180?360-l:l)).reduce((l,g)=>l>g?g:l);return y>90?0:$*Math.cos(_(y))};h.xmax+=v(90),h.xmin-=v(-90),h.ymax+=v(0),h.ymin-=v(180);const w=u.z;if(w!=null){let f=w,c=w;const y=s-90,l=q(y+O,-90,90),g=q(y-O,-90,90),R=j?.isGeographic?m:$;f+=R*z(l),c+=R*z(g);const C=M(O)*R,E=z(y)*C*(1-M(V));s<90&&(f-=E),s>90&&(c-=E),h.zmax=Math.max(f,w),h.zmin=Math.min(c,w)}return h}clear(){this.viewsheds.removeAll()}};function se(i,e){return i==null?e:e==null?i:i.union(e)}function M(i){return Math.cos(_(i))}function z(i){return Math.sin(_(i))}t([r({type:["viewshed"]})],p.prototype,"type",void 0),t([r({cast:k,type:N,nonNullable:!0})],p.prototype,"viewsheds",null),t([r({readOnly:!0})],p.prototype,"spatialReference",null),t([r()],p.prototype,"_extent",void 0),t([r({readOnly:!0})],p.prototype,"extent",null),t([r({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([F("esri.analysis.ViewshedAnalysis")],p);const A=p;let n=class extends re(te(ie)){constructor(i){super(i),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new A,this.opacity=1}initialize(){this.addHandles(L(()=>this.source,(i,e)=>{e!=null&&e.parent===this&&(e.parent=null),i!=null&&(i.parent=this)},P))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(i){this.source===i&&(this.source=new A)}get analysis(){return this.source}set analysis(i){this.source=i}get viewsheds(){return this.source.viewsheds}set viewsheds(i){this.source.viewsheds=i}writeViewsheds(i,e,u,m){e.viewsheds=i.filter(o=>o.isValid()).map(o=>o.toJSON(m)).toJSON()}};t([r({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([r({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([r({nonNullable:!0})],n.prototype,"source",void 0),t([r({readOnly:!0})],n.prototype,"spatialReference",null),t([r({readOnly:!0})],n.prototype,"fullExtent",null),t([r({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([r({type:["show","hide"]})],n.prototype,"listMode",void 0),t([r({type:D.ofType(S),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([K("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([F("esri.layers.ViewshedLayer")],n);const Le=n;export{Le as default};
