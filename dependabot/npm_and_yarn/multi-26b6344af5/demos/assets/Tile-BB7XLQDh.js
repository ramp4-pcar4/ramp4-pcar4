import{e as ce}from"./common-DQOJ18NT.js";import{bU as ie,aL as ue,l as Z,a as fe,w as me,L as de,u as Q,A as _e,S as pe,aN as ge,U as ye,az as xe,jq as ve,H as T,J as F,N as we,c3 as D,hn as Me,e0 as Ie,jr as Se}from"./main-Cv8ITM2j.js";import{e as q}from"./TileKey-MVyPksrw.js";import{m as be,b as U}from"./vec2-ChnYg_BJ.js";import{s as Be}from"./Queue-CEzF52XX.js";import{s as E}from"./ReactiveMap-CZlL85xT.js";import{r as Te}from"./signal-B1irWiNX.js";import{t as $e}from"./quickselect-QQC62dOK.js";import{a as Ce}from"./Query-CsgMbHO2.js";function Fe(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t}function ze(t){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=0,t[5]=0,t}function ke(t,e,s,i,r,o,n){return t[0]=e,t[1]=s,t[2]=i,t[3]=r,t[4]=o,t[5]=n,t}function Ye(t,e){const s=e[0],i=e[1],r=e[2],o=e[3],n=e[4],l=e[5];let h=s*o-i*r;return h?(h=1/h,t[0]=o*h,t[1]=-i*h,t[2]=-r*h,t[3]=s*h,t[4]=(r*l-o*n)*h,t[5]=(i*n-s*l)*h,t):null}function Pe(t){return t[0]*t[3]-t[1]*t[2]}function re(t,e,s){const i=e[0],r=e[1],o=e[2],n=e[3],l=e[4],h=e[5],a=s[0],c=s[1],f=s[2],m=s[3],p=s[4],g=s[5];return t[0]=i*a+o*c,t[1]=r*a+n*c,t[2]=i*f+o*m,t[3]=r*f+n*m,t[4]=i*p+o*g+l,t[5]=r*p+n*g+h,t}function Xe(t,e,s){const i=e[0],r=e[1],o=e[2],n=e[3],l=e[4],h=e[5],a=Math.sin(s),c=Math.cos(s);return t[0]=i*c+o*a,t[1]=r*c+n*a,t[2]=i*-a+o*c,t[3]=r*-a+n*c,t[4]=l,t[5]=h,t}function Re(t,e,s){const i=e[0],r=e[1],o=e[2],n=e[3],l=e[4],h=e[5],a=s[0],c=s[1];return t[0]=i*a,t[1]=r*a,t[2]=o*c,t[3]=n*c,t[4]=l,t[5]=h,t}function qe(t,e,s){const i=e[0],r=e[1],o=e[2],n=e[3],l=e[4],h=e[5],a=s[0],c=s[1];return t[0]=i,t[1]=r,t[2]=o,t[3]=n,t[4]=i*a+o*c+l,t[5]=r*a+n*c+h,t}function Le(t,e){const s=Math.sin(e),i=Math.cos(e);return t[0]=i,t[1]=s,t[2]=-s,t[3]=i,t[4]=0,t[5]=0,t}function Ae(t,e){return t[0]=e[0],t[1]=0,t[2]=0,t[3]=e[1],t[4]=0,t[5]=0,t}function Oe(t,e){return t[0]=1,t[1]=0,t[2]=0,t[3]=1,t[4]=e[0],t[5]=e[1],t}function Ve(t){return"mat2d("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+", "+t[4]+", "+t[5]+")"}function Ee(t){return Math.sqrt(t[0]**2+t[1]**2+t[2]**2+t[3]**2+t[4]**2+t[5]**2+1)}function Ne(t,e,s){return t[0]=e[0]+s[0],t[1]=e[1]+s[1],t[2]=e[2]+s[2],t[3]=e[3]+s[3],t[4]=e[4]+s[4],t[5]=e[5]+s[5],t}function oe(t,e,s){return t[0]=e[0]-s[0],t[1]=e[1]-s[1],t[2]=e[2]-s[2],t[3]=e[3]-s[3],t[4]=e[4]-s[4],t[5]=e[5]-s[5],t}function je(t,e,s){return t[0]=e[0]*s,t[1]=e[1]*s,t[2]=e[2]*s,t[3]=e[3]*s,t[4]=e[4]*s,t[5]=e[5]*s,t}function Ke(t,e,s,i){return t[0]=e[0]+s[0]*i,t[1]=e[1]+s[1]*i,t[2]=e[2]+s[2]*i,t[3]=e[3]+s[3]*i,t[4]=e[4]+s[4]*i,t[5]=e[5]+s[5]*i,t}function We(t,e){return t[0]===e[0]&&t[1]===e[1]&&t[2]===e[2]&&t[3]===e[3]&&t[4]===e[4]&&t[5]===e[5]}function De(t,e){const s=t[0],i=t[1],r=t[2],o=t[3],n=t[4],l=t[5],h=e[0],a=e[1],c=e[2],f=e[3],m=e[4],p=e[5],g=ce();return Math.abs(s-h)<=g*Math.max(1,Math.abs(s),Math.abs(h))&&Math.abs(i-a)<=g*Math.max(1,Math.abs(i),Math.abs(a))&&Math.abs(r-c)<=g*Math.max(1,Math.abs(r),Math.abs(c))&&Math.abs(o-f)<=g*Math.max(1,Math.abs(o),Math.abs(f))&&Math.abs(n-m)<=g*Math.max(1,Math.abs(n),Math.abs(m))&&Math.abs(l-p)<=g*Math.max(1,Math.abs(l),Math.abs(p))}const Je=re,Ze=oe;Object.freeze(Object.defineProperty({__proto__:null,add:Ne,copy:Fe,determinant:Pe,equals:De,exactEquals:We,frob:Ee,fromRotation:Le,fromScaling:Ae,fromTranslation:Oe,identity:ze,invert:Ye,mul:Je,multiply:re,multiplyScalar:je,multiplyScalarAndAdd:Ke,rotate:Xe,scale:Re,set:ke,str:Ve,sub:Ze,subtract:oe,translate:qe},Symbol.toStringTag,{value:"Module"}));function Qe(){const t=new Float32Array(6);return t[0]=1,t[3]=1,t}function Ue(t){const e=new Float32Array(6);return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e}function He(t,e,s,i,r,o){const n=new Float32Array(6);return n[0]=t,n[1]=e,n[2]=s,n[3]=i,n[4]=r,n[5]=o,n}function Ge(t,e){return new Float32Array(t,e,6)}function ne(t,e,s,i){const r=e[i],o=e[i+1];t[i]=s[0]*r+s[2]*o+s[4],t[i+1]=s[1]*r+s[3]*o+s[5]}function et(t,e,s,i=0,r=0,o=2){const n=r||e.length/o;for(let l=i;l<n;l++)ne(t,e,s,l*o)}Object.freeze(Object.defineProperty({__proto__:null,clone:Ue,create:Qe,createView:Ge,fromValues:He,transform:ne,transformMany:et},Symbol.toStringTag,{value:"Module"}));function z(t,e){return[t,e]}function $(t,e,s){return t[0]=e,t[1]=s,t}function tt(t,e,s,i,r){return t[0]=e,t[1]=s,t[2]=i,t[3]=r,t}const w=new q("0/0/0/0");let st=class le{static create(e,s,i=null){const r=ie(e.spatialReference),o=s.origin||z(e.origin.x,e.origin.y),n=z(e.size[0]*s.resolution,e.size[1]*s.resolution),l=z(-1/0,-1/0),h=z(1/0,1/0),a=z(1/0,1/0);i!=null&&($(l,Math.max(0,Math.floor((i.xmin-o[0])/n[0])),Math.max(0,Math.floor((o[1]-i.ymax)/n[1]))),$(h,Math.max(0,Math.floor((i.xmax-o[0])/n[0])),Math.max(0,Math.floor((o[1]-i.ymin)/n[1]))),$(a,h[0]-l[0]+1,h[1]-l[1]+1));const{cols:c,rows:f}=s;let m,p,g,y;return!i&&c&&f&&($(l,c[0],f[0]),$(h,c[1],f[1]),$(a,c[1]-c[0]+1,f[1]-f[0]+1)),e.isWrappable?(m=z(Math.ceil(Math.round((r.valid[1]-r.valid[0])/s.resolution)/e.size[0]),a[1]),p=!0,g=r.origin,y=r.valid):(m=a,p=!1),new le(s.level,s.resolution,s.scale,o,l,h,a,n,m,p,g,y)}constructor(e,s,i,r,o,n,l,h,a,c,f,m){this.level=e,this.resolution=s,this.scale=i,this.origin=r,this.first=o,this.last=n,this.size=l,this.norm=h,this.worldSize=a,this.wrap=c,this._spatialReferenceOrigin=f,this._spatialReferenceValid=m}normalizeCol(e){if(!this.wrap)return e;const s=this.worldSize[0];return e<0?s-1-Math.abs((e+1)%s):e%s}normalizeKey(e){if(!this.wrap)return;const s=this.worldSize[0],i=e.col;i<0?(e.col=i+s,e.world-=1):i>=s&&(e.col=i-s,e.world+=1)}denormalizeCol(e,s){return this.wrap?this.worldSize[0]*s+e:e}getWorldForColumn(e){return this.wrap?Math.floor(e/this.worldSize[0]):0}getFirstColumnForWorld(e){return e*this.worldSize[0]+this.first[0]}getLastColumnForWorld(e){return e*this.worldSize[0]+this.first[0]+this.size[0]-1}getColumnForX(e){return(e-this.origin[0])/this.norm[0]}getXForColumn(e){const s=this.origin[0]+e*this.norm[0],i=this._spatialReferenceOrigin,r=this._spatialReferenceValid;return this.wrap&&i&&r?s===i[0]?r[0]:this.origin[0]===i[0]&&e===this.worldSize[0]?r[1]:s:s}getRowForY(e){return(this.origin[1]-e)/this.norm[1]}getYForRow(e){return this.origin[1]-e*this.norm[1]}getTileBounds(e,s,i=!1){w.set(s);const r=i?w.col:this.denormalizeCol(w.col,w.world),o=w.row;return tt(e,this.getXForColumn(r),this.getYForRow(o+1),this.getXForColumn(r+1),this.getYForRow(o)),e}getTileCoords(e,s,i=!1){w.set(s);const r=i?w.col:this.denormalizeCol(w.col,w.world);return Array.isArray(e)?$(e,this.getXForColumn(r),this.getYForRow(w.row)):(e.x=this.getXForColumn(r),e.y=this.getYForRow(w.row)),e}},V=class{constructor(){this.spans=[]}acquire(e){this.lodInfo=e}release(){this.lodInfo=null,this.spans.length=0}*keys(){const e=this.lodInfo;for(const{row:s,colFrom:i,colTo:r}of this.spans)for(let o=i;o<=r;o++){const n=e.getWorldForColumn(o);yield new q(e.level,s,e.normalizeCol(o),n)}}forEach(e,s){const{spans:i,lodInfo:r}=this,{level:o}=r;if(i.length!==0)for(const{row:n,colFrom:l,colTo:h}of i)for(let a=l;a<=h;a++)e.call(s,o,n,r.normalizeCol(a),r.getWorldForColumn(a))}};V.pool=new ue(V);let N=class{constructor(e,s,i){this.row=e,this.colFrom=s,this.colTo=i}};const _=new q("0/0/0/0");let it=class he{static create(e,s){e[1]>s[1]&&([e,s]=[s,e]);const[i,r]=e,[o,n]=s,l=o-i,h=n-r,a=h!==0?l/h:0,c=(Math.ceil(r)-r)*a,f=(Math.floor(r)-r)*a;return new he(i,Math.floor(r),Math.ceil(n),a,l<0?c:f,l<0?f:c,l<0?o:i,l<0?i:o)}constructor(e,s,i,r,o,n,l,h){this.x=e,this.ymin=s,this.ymax=i,this.invM=r,this.leftAdjust=o,this.rightAdjust=n,this.leftBound=l,this.rightBound=h}incrRow(){this.x+=this.invM}getLeftCol(){return Math.max(this.x+this.leftAdjust,this.leftBound)}getRightCol(){return Math.min(this.x+this.rightAdjust,this.rightBound)}};const v=[[0,0],[0,0],[0,0],[0,0]],rt=1e-6;let It=class{constructor(e,s=null,i=e.lods[0].level,r=e.lods[e.lods.length-1].level){this.tileInfo=e,this.fullExtent=s,this.scales=[],this._infoByScale={},this._infoByLevel={};const o=e.lods.filter(l=>l.level>=i&&l.level<=r);this.minScale=o[0].scale,this.maxScale=o[o.length-1].scale;const n=this._lodInfos=o.map(l=>st.create(e,l,s));o.forEach((l,h)=>{this._infoByLevel[l.level]=n[h],this._infoByScale[l.scale]=n[h],this.scales[h]=l.scale},this),this._wrap=e.isWrappable}get spatialReference(){return this.tileInfo.spatialReference}getLODInfoAt(e){return this._infoByLevel[typeof e=="number"?e:e.level]}getTileBounds(e,s,i=!1){_.set(s);const r=this._infoByLevel[_.level];return r?r.getTileBounds(e,_,i):e}getTileCoords(e,s,i=!1){_.set(s);const r=this._infoByLevel[_.level];return r?r.getTileCoords(e,_,i):e}getTileCoverage(e,s=192,i=!0,r="closest"){if(!i&&(e.scale>this.minScale||e.scale<this.maxScale))return null;const o=r==="closest"?this.getClosestInfoForScale(e.scale):this.getSmallestInfoForScale(e.scale),n=V.pool.acquire(o),l=this._wrap;let h,a,c,f=1/0,m=-1/0;const p=n.spans;v[0][0]=v[0][1]=v[1][1]=v[3][0]=-s,v[1][0]=v[2][0]=e.size[0]+s,v[2][1]=v[3][1]=e.size[1]+s;for(const u of v)e.toMap(u,u),u[0]=o.getColumnForX(u[0]),u[1]=o.getRowForY(u[1]);const g=[];let y=3;for(let u=0;u<4;u++){if(v[u][1]===v[y][1]){y=u;continue}const d=it.create(v[u],v[y]);f=Math.min(d.ymin,f),m=Math.max(d.ymax,m),g[d.ymin]===void 0&&(g[d.ymin]=[]),g[d.ymin].push(d),y=u}if(f==null||m==null||m-f>100)return null;let x=[];for(h=f;h<m;){g[h]!=null&&(x=x.concat(g[h])),a=1/0,c=-1/0;for(let u=x.length-1;u>=0;u--){const d=x[u];a=Math.min(a,d.getLeftCol()),c=Math.max(c,d.getRightCol())}if(a=Math.floor(a),c=Math.floor(c),h>=o.first[1]&&h<=o.last[1])if(l)if(o.size[0]<o.worldSize[0]){const u=Math.floor(c/o.worldSize[0]);for(let d=Math.floor(a/o.worldSize[0]);d<=u;d++)p.push(new N(h,Math.max(o.getFirstColumnForWorld(d),a),Math.min(o.getLastColumnForWorld(d),c)))}else p.push(new N(h,a,c));else a>o.last[0]||c<o.first[0]||(a=Math.max(a,o.first[0]),c=Math.min(c,o.last[0]),p.push(new N(h,a,c)));h+=1;for(let u=x.length-1;u>=0;u--){const d=x[u];d.ymax>=h?d.incrRow():x.splice(u,1)}}return n}getTileParentId(e){_.set(e);const s=this._infoByLevel[_.level],i=this._lodInfos.indexOf(s)-1;return i<0?null:(this._getTileIdAtLOD(_,this._lodInfos[i],_),_.id)}getTileResolution(e){const s=this._infoByLevel[typeof e=="object"?e.level:e];return s?s.resolution:-1}getTileScale(e){const s=this._infoByLevel[e.level];return s?s.scale:-1}intersects(e,s){_.set(s);const i=this._infoByLevel[_.level],r=e.lodInfo;if(r.resolution>i.resolution){this._getTileIdAtLOD(_,r,_);const n=r.denormalizeCol(_.col,_.world);for(const l of e.spans)if(l.row===_.row&&l.colFrom<=n&&l.colTo>=n)return!0}if(r.resolution<i.resolution){const[n,l,h,a]=e.spans.reduce((y,x)=>(y[0]=Math.min(y[0],x.row),y[1]=Math.max(y[1],x.row),y[2]=Math.min(y[2],x.colFrom),y[3]=Math.max(y[3],x.colTo),y),[1/0,-1/0,1/0,-1/0]),c=i.denormalizeCol(_.col,_.world),f=r.getColumnForX(i.getXForColumn(c)),m=r.getRowForY(i.getYForRow(_.row)),p=r.getColumnForX(i.getXForColumn(c+1))-1,g=r.getRowForY(i.getYForRow(_.row+1))-1;return!(f>a||p<h||m>l||g<n)}const o=r.denormalizeCol(_.col,_.world);return e.spans.some(n=>n.row===_.row&&n.colFrom<=o&&n.colTo>=o)}normalizeBounds(e,s,i){if(e[0]=s[0],e[1]=s[1],e[2]=s[2],e[3]=s[3],this._wrap){const r=ie(this.tileInfo.spatialReference),o=-i*(r.valid[1]-r.valid[0]);e[0]+=o,e[2]+=o}return e}getSmallestInfoForScale(e){const s=this.scales;if(this._infoByScale[e])return this._infoByScale[e];if(e>s[0])return this._infoByScale[s[0]];for(let i=1;i<s.length-1;i++)if(e>s[i]+rt)return this._infoByScale[s[i-1]];return this._infoByScale[s[s.length-1]]}getClosestInfoForScale(e){const s=this.scales;return this._infoByScale[e]||(e=s.reduce((i,r)=>Math.abs(r-e)<Math.abs(i-e)?r:i,s[0])),this._infoByScale[e]}scaleToLevel(e){const s=this.scales;if(this._infoByScale[e])return this._infoByScale[e].level;for(let i=s.length-1;i>=0;i--)if(e<s[i])return i===s.length-1?this._infoByScale[s[s.length-1]].level:this._infoByScale[s[i]].level+(s[i]-e)/(s[i]-s[i+1]);return this._infoByScale[s[0]].level}scaleToZoom(e){return this.tileInfo.scaleToZoom(e)}zoomToScale(e){return this.tileInfo.zoomToScale(e)}_getTileIdAtLOD(e,s,i){const r=this._infoByLevel[i.level];return e.set(i),s.resolution<r.resolution?null:(s.resolution===r.resolution||(e.level=s.level,e.col=Math.floor(i.col*r.resolution/s.resolution+.01),e.row=Math.floor(i.row*r.resolution/s.resolution+.01)),e)}},ot=class{constructor(e,s){this.item=e,this.controller=s,this.promise=null}};class nt{constructor(e){this._schedule=null,this._task=null,this._deferreds=new E,this._controllers=new E,this._processingItems=new E,this._pausedSignal=Te(!1),this.concurrency=1,e.concurrency&&(this.concurrency=e.concurrency),this._queue=new Be(e.peeker),this.process=e.process;const s=e.scheduler;e.priority&&s&&(this._task=s.registerTask(e.priority,this))}destroy(){this.clear(),this._schedule=Z(this._schedule),this._task=Z(this._task)}get updating(){return!!this._task?.updating||this.running}get length(){return this._processingItems.size+this._queue.length}abort(e){const s=this._controllers.get(e);s&&s.abort()}clear(){this._queue.clear();const e=[];this._controllers.forEach(s=>e.push(s)),this._controllers.clear(),e.forEach(s=>s.abort()),this._processingItems.clear(),this._cancelNext()}forEach(e){this._deferreds.forEach((s,i)=>e(i))}get(e){const s=this._deferreds.get(e);return s?s.promise:void 0}isOngoing(e){return this._processingItems.has(e)}has(e){return this._deferreds.has(e)}pause(){this._pausedSignal.value||(this._pausedSignal.value=!0,this._cancelNext())}push(e,s){const i=this.get(e);if(i)return i;const r=new AbortController;let o=null;s&&(o=fe(s,()=>r.abort()));const n=()=>{const c=this._processingItems.get(e);c&&c.controller.abort(),l(),a.reject(Q())},l=()=>{h.remove(),o?.remove(),this._removeItem(e),this._queue.remove(e),this._scheduleNext()},h=me(r.signal,n),a=de();return this._deferreds.set(e,a),this._controllers.set(e,r),a.promise.then(l,l),this._queue.push(e),this._scheduleNext(),a.promise}last(){return this._queue.last()}lastPromise(){const e=this.last();return e?this.get(e):null}peek(){return this._queue.peek()}popLast(){const e=this._queue.popLast();return e&&(this._deferreds.get(e)?.reject(Q()),this._removeItem(e)),e}reset(){const e=Array.from(this._processingItems.values());this._processingItems.clear();for(const s of e)this._queue.push(s.item),s.controller.abort();this._scheduleNext()}resume(){this._pausedSignal.value&&(this._pausedSignal.value=!1,this._scheduleNext())}takeAll(){const e=[];for(;this._queue.length;)e.push(this._queue.pop());return this.clear(),e}get running(){return!this._pausedSignal.value&&this._queue.length>0&&this._processingItems.size<this.concurrency}runTask(e){for(;!e.done&&this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop()),e.madeProgress()}_removeItem(e){this._deferreds.delete(e),this._controllers.delete(e),this._processingItems.delete(e)}_scheduleNext(){this._task||this._pausedSignal.value||this._schedule||(this._schedule=_e(()=>{this._schedule=null,this._next()}))}_next(){for(;this._queue.length>0&&this._processingItems.size<this.concurrency;)this._process(this._queue.pop())}_cancelNext(){this._schedule&&(this._schedule.remove(),this._schedule=null)}_processResult(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).resolve(s))}_processError(e,s){this._canProcessFulfillment(e)&&(this._scheduleNext(),this._deferreds.get(e.item).reject(s))}_canProcessFulfillment(e){return!!this._deferreds.get(e.item)&&this._processingItems.get(e.item)===e}_process(e){if(e==null)return;let s;const i=new AbortController,r=new ot(e,i);this._processingItems.set(e,r);try{s=this.process(e,i.signal)}catch(o){this._processError(r,o)}pe(s)?(r.promise=s,s.then(o=>this._processResult(r,o),o=>this._processError(r,o))):this._processResult(r,s)}get test(){}}const H=[0,0];let b=class extends ge{constructor(e){super(e),this._keyToItem=new Map,this._tilesByScale=new Map,this.concurrency=6}initialize(){const{concurrency:e,process:s,scheduler:i,priority:r}=this;this._queue=new nt({concurrency:e,scheduler:i,priority:r,process:(o,n)=>{const l=this._keyToItem.get(o);return s(l,{signal:n})},peeker:o=>this._peek(o)})}destroy(){this.clear(),this._queue=ye(this._queue)}get length(){return this._queue?this._queue.length:0}abort(e){const s=typeof e=="string"?e:e.id;this._queue.abort(s)}clear(){this._queue.clear(),this._keyToItem.clear(),this._tilesByScale.clear()}has(e){return typeof e=="string"?this._keyToItem.has(e):this._keyToItem.has(e.id)}pause(){this._queue.pause()}push(e){const s=e.key.id;if(this._queue.has(s))return this._queue.get(s);const i=this._queue.push(s),r=this.tileInfoView.getTileScale(e.key),o=xe(this._tilesByScale,r,()=>new Set),n=()=>{o.delete(e.key),o.size===0&&this._tilesByScale.delete(r),this._keyToItem.delete(s)};return o.add(e.key),this._keyToItem.set(s,e),i.then(n,n),i}reset(){this._queue.reset()}resume(){this._queue.resume()}_peek(e){if(!this.state)return e.values().next().value;const s=new Set;for(const n of e)s.add(this._keyToItem.get(n).key);const i=this.state.scale;let r,o=Number.POSITIVE_INFINITY;for(const[n,l]of this._tilesByScale)if(ve(l,h=>s.has(h))){const h=Math.abs(n-i);h<o&&(r=l,o=h)}return this._getClosestTileKey(r,e).id}_getClosestTileKey(e,s){const i=this.tileInfoView,r=this.state.center;let o,n=Number.POSITIVE_INFINITY;for(const l of e)if(s.has(l.id)){i.getTileCoords(H,l);const h=be(H,r);h<n&&(n=h,o=l)}return o}};T([F({constructOnly:!0})],b.prototype,"concurrency",void 0),T([F({constructOnly:!0})],b.prototype,"priority",void 0),T([F({constructOnly:!0})],b.prototype,"process",void 0),T([F({constructOnly:!0})],b.prototype,"scheduler",void 0),T([F()],b.prototype,"state",void 0),T([F({constructOnly:!0})],b.prototype,"tileInfoView",void 0),b=T([we("esri.views.2d.tiling.TileQueue")],b);const Tt=b;class lt{constructor(e,s,i){this.maxSize=e,this._tileInfoView=s,this._removedFunc=i,this._tilePerId=new Map,this._tileKeysPerLevel=[]}clear(){this._tilePerId.clear(),this._tileKeysPerLevel=[]}has(e){return this._tilePerId.has(e)}get(e){return this._tilePerId.get(e)}pop(e){const s=this._tilePerId.get(e);if(!s)return;const i=s.key.level,r=this._tileKeysPerLevel[i];G(this._tilePerId,e);for(let o=0;o<r.length;o++)if(r[o].id===e){r.splice(o,1);break}return s.visible=!0,s}add(e){e.visible=!1;const s=e.key,i=s.id;if(this._tilePerId.has(i))return;this._tilePerId.set(i,e);const r=s.level;this._tileKeysPerLevel[r]||(this._tileKeysPerLevel[r]=[]),this._tileKeysPerLevel[r].push(s)}prune(e,s,i){let r=this._tilePerId.size;if(r<=this.maxSize)return;let o=this._tileKeysPerLevel.length-1;for(;r>this.maxSize&&o>=0;)o!==e&&(r=this._pruneAroundCenterTile(r,s,i,o)),o--;r>this.maxSize&&(r=this._pruneAroundCenterTile(r,s,i,e))}_pruneAroundCenterTile(e,s,i,r){const o=this._tileKeysPerLevel[r];if(!o||o.length===0)return e;const{size:n,origin:l}=this._tileInfoView.tileInfo,h=i*n[0],a=i*n[1],c=[0,0],f=[0,0];for(o.sort((m,p)=>(c[0]=l.x+h*(m.col+.5),c[1]=l.y-a*(m.row+.5),f[0]=l.x+h*(p.col+.5),f[1]=l.y-a*(p.row+.5),U(c,s)-U(f,s)));o.length>0;){const m=o.pop();if(this._removeTile(m.id),--e===this.maxSize)break}return e}_removeTile(e){const s=this._tilePerId.get(e);this._removedFunc&&s&&this._removedFunc(s),G(this._tilePerId,e)}}function G(t,e){t.delete(e)}const C=new q(0,0,0,0),S=new Map,P=[],j=[];let $t=class{constructor(e){this._previousScale=Number.POSITIVE_INFINITY,this.cachePolicy="keep",this.coveragePolicy="closest",this.resampling=!0,this.tileIndex=new Map,this.tiles=[],this.buffer=192,this.acquireTile=e.acquireTile,this.releaseTile=e.releaseTile,this.tileInfoView=e.tileInfoView,e.resampling!=null&&(this.resampling=e.resampling),e.cachePolicy&&(this.cachePolicy=e.cachePolicy),e.coveragePolicy&&(this.coveragePolicy=e.coveragePolicy),e.buffer!=null&&(this.buffer=e.buffer),e.cacheSize&&(this._tileCache=new lt(e.cacheSize,this.tileInfoView,s=>{this.releaseTile(s)}))}destroy(){this.tileIndex.clear()}update(e){const{resampling:s,tileIndex:i}=this,{scale:r,center:o,resolution:n}=e.state,{minScale:l,maxScale:h}=this.tileInfoView,a=!e.stationary&&r>this._previousScale;if(this._previousScale=r,!s&&(r>l||r<h))return this.tiles.length=0,void this.clear();const c=this.tileInfoView.getTileCoverage(e.state,this.buffer,this.resampling,this.coveragePolicy);if(!c)return this.tiles.length=0,void this.clear();const{spans:f,lodInfo:m}=c,{level:p}=m;this.tiles.length=0,i.forEach(u=>u.visible=!0);let g=0,y=0;if(f.length>0)for(const{row:u,colFrom:d,colTo:L}of f)for(let B=d;B<=L;B++){g++;const M=C.set(p,u,m.normalizeCol(B),m.getWorldForColumn(B)).id;let I=i.get(M);if(I)I.isReady?(S.set(M,I),y++):a||this._addParentTile(M,S);else{if(this._tileCache?.has(M)){if(I=this._tileCache.pop(M),this.tileIndex.set(M,I),I.isReady){S.set(M,I),y++;continue}}else I=this.acquireTile(C),this.tileIndex.set(M,I);a||this._addParentTile(M,S)}}const x=y===g;for(const[u,d]of i){if(S.has(u))continue;C.set(u);const L=this.tileInfoView.intersects(c,C),B=this.cachePolicy==="purge"?C.level!==p:C.level>p;!L||!a&&x?!B&&L||P.push(d):d.isReady?B&&this.cachePolicy==="purge"&&this._hasReadyAncestor(C,p)?P.push(d):j.push(d):B&&P.push(d)}for(const u of j)u.isReady&&S.set(u.key.id,u);for(const u of P)this._tileCache?this._tileCache.add(u):this.releaseTile(u),i.delete(u.key.id);for(const u of S.values())this.tiles.push(u);for(const u of i.values())S.has(u.key.id)||(u.visible=!1);this._tileCache?.prune(p,o,n),V.pool.release(c),j.length=0,P.length=0,S.clear()}clear(){const{tileIndex:e}=this;for(const s of e.values())this.releaseTile(s);e.clear()}refresh(e){for(const s of this.tileIndex.values())e(s);this._tileCache?.clear()}updateCacheSize(e){this._tileCache&&(this._tileCache.maxSize=e)}_addParentTile(e,s){let i=e,r=null;for(;i=this.tileInfoView.getTileParentId(i),i;)if(this.tileIndex.has(i)){if(r=this.tileIndex.get(i),r?.isReady){s.has(r.key.id)||s.set(r.key.id,r);break}}else if(this._tileCache?.has(i)&&(r=this._tileCache.pop(i),this.tileIndex.set(i,r),r?.isReady)){s.has(r.key.id)||s.set(r.key.id,r);break}}_hasReadyAncestor(e,s){const i=D();this.tileInfoView.getTileBounds(i,e,!0);for(const r of this.tileIndex.values())if(r.isReady&&r.key.level>=s&&r.key.level<e.level){const o=D();if(this.tileInfoView.getTileBounds(o,r.key,!0),Me(o,i))return!0}return!1}};function J(t,e){if(!(this instanceof J))return new J(t,e);this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&(typeof e=="function"?this.toBBox=e:this._initFormat(e)),this.clear()}function ht(t,e,s){if(!s)return e.indexOf(t);for(var i=0;i<e.length;i++)if(s(t,e[i]))return i;return-1}function k(t,e){X(t,0,t.children.length,e,t)}function X(t,e,s,i,r){r||(r=Y(null)),r.minX=1/0,r.minY=1/0,r.maxX=-1/0,r.maxY=-1/0;for(var o,n=e;n<s;n++)o=t.children[n],R(r,t.leaf?i(o):o);return r}function R(t,e){return t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY),t}function ee(t,e){return t.minX-e.minX}function te(t,e){return t.minY-e.minY}function K(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function A(t){return t.maxX-t.minX+(t.maxY-t.minY)}function at(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function ct(t,e){var s=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),r=Math.min(t.maxX,e.maxX),o=Math.min(t.maxY,e.maxY);return Math.max(0,r-s)*Math.max(0,o-i)}function W(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function O(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function Y(t){return{children:t,height:1,leaf:!0,minX:1/0,minY:1/0,maxX:-1/0,maxY:-1/0}}function se(t,e,s,i,r){for(var o,n=[e,s];n.length;)(s=n.pop())-(e=n.pop())<=i||(o=e+Math.ceil((s-e)/i/2)*i,$e(t,o,e,s,r),n.push(e,o,o,s))}J.prototype={all:function(){return this._all(this.data,[])},search:function(t){var e=this.data,s=[],i=this.toBBox;if(!O(t,e))return s;for(var r,o,n,l,h=[];e;){for(r=0,o=e.children.length;r<o;r++)n=e.children[r],O(t,l=e.leaf?i(n):n)&&(e.leaf?s.push(n):W(t,l)?this._all(n,s):h.push(n));e=h.pop()}return s},collides:function(t){var e=this.data,s=this.toBBox;if(!O(t,e))return!1;for(var i,r,o,n,l=[];e;){for(i=0,r=e.children.length;i<r;i++)if(o=e.children[i],O(t,n=e.leaf?s(o):o)){if(e.leaf||W(t,n))return!0;l.push(o)}e=l.pop()}return!1},load:function(t){if(!t||!t.length)return this;if(t.length<this._minEntries){for(var e=0,s=t.length;e<s;e++)this.insert(t[e]);return this}var i=this._build(t.slice(),0,t.length-1,0);if(this.data.children.length)if(this.data.height===i.height)this._splitRoot(this.data,i);else{if(this.data.height<i.height){var r=this.data;this.data=i,i=r}this._insert(i,this.data.height-i.height-1,!0)}else this.data=i;return this},insert:function(t){return t!=null&&this._insert(t,this.data.height-1),this},clear:function(){return this.data=Y([]),this},remove:function(t,e){if(t==null)return this;for(var s,i,r,o,n=this.data,l=this.toBBox(t),h=[],a=[];n||h.length;){if(n||(n=h.pop(),i=h[h.length-1],s=a.pop(),o=!0),n.leaf&&(r=ht(t,n.children,e))!==-1)return n.children.splice(r,1),h.push(n),this._condense(h),this;o||n.leaf||!W(n,l)?i?(s++,n=i.children[s],o=!1):n=null:(h.push(n),a.push(s),s=0,i=n,n=n.children[0])}return this},toBBox:function(t){return t},compareMinX:ee,compareMinY:te,toJSON:function(){return this.data},fromJSON:function(t){return this.data=t,this},_all:function(t,e){for(var s=[];t;)t.leaf?e.push.apply(e,t.children):s.push.apply(s,t.children),t=s.pop();return e},_build:function(t,e,s,i){var r,o=s-e+1,n=this._maxEntries;if(o<=n)return k(r=Y(t.slice(e,s+1)),this.toBBox),r;i||(i=Math.ceil(Math.log(o)/Math.log(n)),n=Math.ceil(o/Math.pow(n,i-1))),(r=Y([])).leaf=!1,r.height=i;var l,h,a,c,f=Math.ceil(o/n),m=f*Math.ceil(Math.sqrt(n));for(se(t,e,s,m,this.compareMinX),l=e;l<=s;l+=m)for(se(t,l,a=Math.min(l+m-1,s),f,this.compareMinY),h=l;h<=a;h+=f)c=Math.min(h+f-1,a),r.children.push(this._build(t,h,c,i-1));return k(r,this.toBBox),r},_chooseSubtree:function(t,e,s,i){for(var r,o,n,l,h,a,c,f;i.push(e),!e.leaf&&i.length-1!==s;){for(c=f=1/0,r=0,o=e.children.length;r<o;r++)h=K(n=e.children[r]),(a=at(t,n)-h)<f?(f=a,c=h<c?h:c,l=n):a===f&&h<c&&(c=h,l=n);e=l||e.children[0]}return e},_insert:function(t,e,s){var i=this.toBBox,r=s?t:i(t),o=[],n=this._chooseSubtree(r,this.data,e,o);for(n.children.push(t),R(n,r);e>=0&&o[e].children.length>this._maxEntries;)this._split(o,e),e--;this._adjustParentBBoxes(r,o,e)},_split:function(t,e){var s=t[e],i=s.children.length,r=this._minEntries;this._chooseSplitAxis(s,r,i);var o=this._chooseSplitIndex(s,r,i),n=Y(s.children.splice(o,s.children.length-o));n.height=s.height,n.leaf=s.leaf,k(s,this.toBBox),k(n,this.toBBox),e?t[e-1].children.push(n):this._splitRoot(s,n)},_splitRoot:function(t,e){this.data=Y([t,e]),this.data.height=t.height+1,this.data.leaf=!1,k(this.data,this.toBBox)},_chooseSplitIndex:function(t,e,s){var i,r,o,n,l,h,a,c;for(h=a=1/0,i=e;i<=s-e;i++)n=ct(r=X(t,0,i,this.toBBox),o=X(t,i,s,this.toBBox)),l=K(r)+K(o),n<h?(h=n,c=i,a=l<a?l:a):n===h&&l<a&&(a=l,c=i);return c},_chooseSplitAxis:function(t,e,s){var i=t.leaf?this.compareMinX:ee,r=t.leaf?this.compareMinY:te;this._allDistMargin(t,e,s,i)<this._allDistMargin(t,e,s,r)&&t.children.sort(i)},_allDistMargin:function(t,e,s,i){t.children.sort(i);var r,o,n=this.toBBox,l=X(t,0,e,n),h=X(t,s-e,s,n),a=A(l)+A(h);for(r=e;r<s-e;r++)o=t.children[r],R(l,t.leaf?n(o):o),a+=A(l);for(r=s-e-1;r>=e;r--)o=t.children[r],R(h,t.leaf?n(o):o),a+=A(h);return a},_adjustParentBBoxes:function(t,e,s){for(var i=s;i>=0;i--)R(e[i],t)},_condense:function(t){for(var e,s=t.length-1;s>=0;s--)t[s].children.length===0?s>0?(e=t[s-1].children).splice(e.indexOf(t[s]),1):this.clear():k(t[s],this.toBBox)},_initFormat:function(t){var e=["return a"," - b",";"];this.compareMinX=new Function("a","b",e.join(t[0])),this.compareMinY=new Function("a","b",e.join(t[1])),this.toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}};function ut(t,{timeZone:e,timeExtent:s}){return{$view:{scale:t,timeZone:e,timeProperties:{currentStart:s?.start,currentEnd:s?.end}}}}class ae{constructor(e,s){this.key=new q(0,0,0,0),this.bounds=D(),this.objectIds=new Set,this.key.set(s);const i=e.getLODInfoAt(this.key);this.tileInfoView=e,this.tileInfoView.getTileBounds(this.bounds,this.key,!0),this.resolution=i.resolution,this.level=i.level,this.scale=i.scale,this.minScale=e.zoomToScale(i.level-1),this.maxScale=e.zoomToScale(i.level+1)}get lod(){return this.tileInfoView.getLODInfoAt(this.key)}get id(){return this.key.id}get extent(){return Ie(this.bounds,this.tileInfoView.tileInfo.spatialReference)}get transform(){return{originPosition:"upperLeft",scale:[this.resolution,this.resolution],translate:[this.bounds[0],this.bounds[3]]}}createArcadeEvaluationOptions(e){return ut(this.scale,e)}createChildTiles(){const e=this.key.getChildKeys(),s=Se.acquire();for(let i=0;i<e.length;i++)s[i]=new ae(this.tileInfoView,e[i]);return s}getQuantizationParameters(){return Ce.fromJSON({mode:"view",originPosition:"upperLeft",tolerance:this.resolution,extent:{xmin:this.bounds[0],ymin:this.bounds[1],xmax:this.bounds[2],ymax:this.bounds[3],spatialReference:this.tileInfoView.tileInfo.spatialReference}})}}export{Le as M,qe as a,ze as b,Xe as c,ke as d,re as e,Re as f,et as g,It as h,J as i,ut as j,ae as k,Oe as l,Ae as m,Qe as n,Tt as p,$t as r,V as s,Ye as u};
