import{e7 as G,jI as H,bt as t,bu as i,D as K,gb as S,i3 as g,jJ as I,bv as z,jK as U,a8 as q,cK as k,cc as D,hG as M,cJ as B,jL as Q,bn as W,fA as N,b0 as L,ec as X,ef as Y,eO as Z,ep as $}from"./main-DCIX61zy.js";import{c as ee,b as te}from"./featureReferenceUtils-BtZXLS60.js";import{c as ie}from"./Analysis-DKuyhf4S.js";let o=class extends G(U){constructor(e){super(e),this.observer=null,this.farDistance=1e3,this.heading=0,this.tilt=90,this.horizontalFieldOfView=45,this.verticalFieldOfView=45,this.feature=null}isValid(){return this.observer!=null&&this.farDistance>0}equals(e){return H(this.observer,e.observer)&&this.farDistance===e.farDistance&&this.heading===e.heading&&this.tilt===e.tilt&&this.horizontalFieldOfView===e.horizontalFieldOfView&&this.verticalFieldOfView===e.verticalFieldOfView&&ee(this.feature,e.feature)}};t([i({type:K,json:{write:!0}})],o.prototype,"observer",void 0),t([i({type:Number,nonNullable:!0,range:{min:0},json:{write:{isRequired:!0}}})],o.prototype,"farDistance",void 0),t([i({type:Number,nonNullable:!0,json:{write:{isRequired:!0}}}),S(e=>g.normalize(I(e),void 0,!0))],o.prototype,"heading",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"tilt",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:360},json:{write:{isRequired:!0}}})],o.prototype,"horizontalFieldOfView",void 0),t([i({type:Number,nonNullable:!0,range:{min:0,max:180},json:{write:{isRequired:!0}}})],o.prototype,"verticalFieldOfView",void 0),t([i(te)],o.prototype,"feature",void 0),t([i({json:{read:!1}})],o.prototype,"isValid",null),o=t([z("esri.analysis.Viewshed")],o);const A=o,R=q.ofType(A);let u=class extends ie{constructor(e){super(e),this.type="viewshed",this._extent=null}initialize(){this.addHandles(D(()=>this._computeExtent(),e=>{e.pending==null&&(this._extent=e.extent)},M))}get viewsheds(){return this._get("viewsheds")||new R}set viewsheds(e){this._set("viewsheds",B(e,this.viewsheds,R))}get spatialReference(){for(const e of this.viewsheds)if(e.observer!=null)return e.observer.spatialReference;return null}get extent(){return this._extent}get requiredPropertiesForEditing(){return this.viewsheds.items.map(({observer:e})=>e)}async waitComputeExtent(){const e=this._computeExtent();e.pending!=null&&await e.pending}_computeExtent(){const{spatialReference:e}=this;if(e==null)return{pending:null,extent:null};const r=this.viewsheds.filter(s=>s.observer!=null),y=r.map(s=>s.observer).toArray(),l=Q(y,e);return l.pending!=null?{pending:l.pending,extent:null}:{pending:null,extent:l.geometries.map((s,p)=>{const b=r.at(p);return s!=null&&b!=null?this._computeViewshedExtent(this.viewsheds.at(p),s):null}).filter(s=>s!=null).reduce((s,p)=>se(s,p),null)}}_computeViewshedExtent(e,r){const{farDistance:y,heading:l,tilt:s,horizontalFieldOfView:p,verticalFieldOfView:b}=e,{spatialReference:E}=r,x=p/2,O=b/2,V=y/E.metersPerUnit,T=[g.normalize(l-x),l,g.normalize(l+x)],d=W.fromPoint(r),f=v=>{const h=T.map(a=>g.normalize(a-v));if(h[0]>h[2]||p===360)return V;const c=h.map(a=>Math.abs(a>180?360-a:a)).reduce((a,m)=>a>m?m:a);return c>90?0:V*Math.cos(N(c))};d.xmax+=f(90),d.xmin-=f(-90),d.ymax+=f(0),d.ymin-=f(180);const w=r.z;if(w!=null){let v=w,h=w;const c=s-90,a=L(c+O,-90,90),m=L(c-O,-90,90),j=E?.isGeographic?y:V;v+=j*F(a),h+=j*F(m);const C=P(O)*j,_=F(c)*C*(1-P(x));s<90&&(v-=_),s>90&&(h-=_),d.zmax=Math.max(v,w),d.zmin=Math.min(h,w)}return d}clear(){this.viewsheds.removeAll()}};function se(e,r){return e==null?r:r==null?e:e.union(r)}function P(e){return Math.cos(N(e))}function F(e){return Math.sin(N(e))}t([i({type:["viewshed"]})],u.prototype,"type",void 0),t([i({cast:k,type:R,nonNullable:!0})],u.prototype,"viewsheds",null),t([i({readOnly:!0})],u.prototype,"spatialReference",null),t([i()],u.prototype,"_extent",void 0),t([i({readOnly:!0})],u.prototype,"extent",null),t([i({readOnly:!0})],u.prototype,"requiredPropertiesForEditing",null),u=t([z("esri.analysis.ViewshedAnalysis")],u);const J=u;let n=class extends X(Y($)){constructor(e){super(e),this.type="viewshed",this.operationalLayerType="ViewshedLayer",this.source=new J,this.opacity=1}initialize(){this.addHandles(D(()=>this.source,(e,r)=>{r!=null&&r.parent===this&&(r.parent=null),e!=null&&(e.parent=this)},M))}async load(){return this.addResolvingPromise(this.source.waitComputeExtent()),this}get spatialReference(){return this.source.spatialReference}get fullExtent(){return this.source.extent}releaseAnalysis(e){this.source===e&&(this.source=new J)}get analysis(){return this.source}set analysis(e){this.source=e}get viewsheds(){return this.source.viewsheds}set viewsheds(e){this.source.viewsheds=e}writeViewsheds(e,r,y,l){r.viewsheds=e.filter(s=>s.isValid()).map(s=>s.toJSON(l)).toJSON()}};t([i({json:{read:!1},readOnly:!0})],n.prototype,"type",void 0),t([i({type:["ViewshedLayer"]})],n.prototype,"operationalLayerType",void 0),t([i({nonNullable:!0})],n.prototype,"source",void 0),t([i({readOnly:!0})],n.prototype,"spatialReference",null),t([i({readOnly:!0})],n.prototype,"fullExtent",null),t([i({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],n.prototype,"opacity",void 0),t([i({type:["show","hide"]})],n.prototype,"listMode",void 0),t([i({type:q.ofType(A),json:{write:{ignoreOrigin:!0},origins:{"web-scene":{write:{ignoreOrigin:!0}}}}})],n.prototype,"viewsheds",null),t([Z("web-scene","viewsheds")],n.prototype,"writeViewsheds",null),n=t([z("esri.layers.ViewshedLayer")],n);const re=n;export{re as default};
