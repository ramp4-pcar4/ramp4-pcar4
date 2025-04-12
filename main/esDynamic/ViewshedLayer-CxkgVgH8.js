import{G,aX as J,g6 as H,x as t,z as i,bC as k,bG as B,gD as K,K as N,V as M,dl as U,aM as D,dm as P,dk as X,bz as Y,d1 as R,aP as L,B as I}from"./main-C3PVbFgd.js";import{c as Q,b as W}from"./featureReferenceUtils-BfXl4E1a.js";import{a as g}from"./Cyclical-C4bjAlTb.js";import{c as Z}from"./Analysis-BTGuAEtj.js";import{Y as $}from"./projection-q5gROb6j.js";import{S as ee}from"./MultiOriginJSONSupport-DBm6Kwq0.js";import{f as te}from"./Layer-B1UUjGAB.js";import{b as ie}from"./OperationalLayer-D5jBFa-a.js";let o=class extends G.JSONSupportMixin(J){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&Q(this.feature,e.feature)}};t([i({type:k,json:{write:{isRequired:!0}}})],o.prototype,"observer",void 0),t([i({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),B(e=>g.normalize(K(e),void 0,!0))],o.prototype,"heading",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),t([i(W)],o.prototype,"feature",void 0),t([i({json:{read:!1}})],o.prototype,"isValid",null),o=t([N("esri.analysis.Viewshed")],o);const S=o,F=M.ofType(S);let p=class extends Z{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(D(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},P))}get viewsheds(){return this._get("viewsheds")||new F}set viewsheds(e){this._set("viewsheds",X(e,this.viewsheds,F))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const r=this.viewsheds.filter(s=>s.observer!=null),y=r.map(s=>s.observer).toArray(),l=$(y,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,d)=>{const x=r.at(d);return s!=null&&x!=null?this._computeViewshedExtent(this.viewsheds.at(d),s):null}).filter(s=>s!=null).reduce((s,d)=>se(s,d),null)}}_computeViewshedExtent(e,r){const{farDistance:y,heading:l,tilt:s,horizontalFieldOfView:d,verticalFieldOfView:x}=e,{spatialReference:j}=r,b=d/2,V=x/2,O=y/j.metersPerUnit,T=[g.normalize(l-b),l,g.normalize(l+b)],u=Y.fromPoint(r),f=m=>{const h=T.map(a=>g.normalize(a-m));if(h[0]>h[2]||d===360)return O;const c=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,v)=>a>v?v:a);return c>90?0:O*Math.cos(R(c))};u.xmax+=f(90),u.xmin-=f(-90),u.ymax+=f(0),u.ymin-=f(180);const w=r.z;if(w!=null){let m=w,h=w;const c=s-90,a=L(c+V,-90,90),v=L(c-V,-90,90),z=j?.isGeographic?y:O;m+=z*E(a),h+=z*E(v);const C=A(V)*z,q=E(c)*C*(1-A(b));s<90&&(m-=q),s>90&&(h-=q),u.zmax=Math.max(m,w),u.zmin=Math.min(h,w)}return u}clear(){this.viewsheds.removeAll()}};function se(e,r){return e==null?r:r==null?e:e.union(r)}function A(e){return Math.cos(R(e))}function E(e){return Math.sin(R(e))}t([i({type:["viewshed"]})],p.prototype,"type",void 0),t([i({cast:U,type:F,nonNullable:!0})],p.prototype,"viewsheds",null),t([i({readOnly:!0})],p.prototype,"spatialReference",null),t([i()],p.prototype,"_extent",void 0),t([i({readOnly:!0})],p.prototype,"extent",null),t([i({readOnly:!0})],p.prototype,"requiredPropertiesForEditing",null),p=t([N("esri.analysis.ViewshedAnalysis")],p);const _=p;let n=class extends ie(ee(te)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new _,this.opacity=1}initialize(){this.addHandles(D(()=>this.source,(e,r)=>{r!=null&&r.parent===this&&(r.parent=null),e!=null&&(e.parent=this)},P))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new _)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,y,l){r.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({type:_,nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:M.ofType(S),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([I("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([N("esri.layers.ViewshedLayer")],n);const re=n;export{re as default};
