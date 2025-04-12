import{x as L,H as r,J as a,bv as O,N as T,O as _,cq as S,bE as y,bU as R,bl as P,d7 as W,bj as F,cE as G,c3 as j,aH as A,M as E,K as D}from"./main-Cv8ITM2j.js";import{t as I}from"./TileKey-DZd6gJy7.js";var b;let f=b=class extends L{constructor(e){super(e),this.cols=null,this.level=0,this.levelValue=null,this.origin=null,this.resolution=0,this.rows=null,this.scale=0}clone(){return new b({cols:this.cols,level:this.level,levelValue:this.levelValue,resolution:this.resolution,rows:this.rows,scale:this.scale})}};r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"cols",void 0),r([a({type:O,json:{write:!0}})],f.prototype,"level",void 0),r([a({type:String,json:{write:!0}})],f.prototype,"levelValue",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"origin",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"resolution",void 0),r([a({json:{write:!0,origins:{"web-document":{read:!1,write:!1},"portal-item":{read:!1,write:!1}}}})],f.prototype,"rows",void 0),r([a({type:Number,json:{write:!0}})],f.prototype,"scale",void 0),f=b=r([T("esri.layers.support.LOD")],f);const v=f;var d;const N=new A({PNG:"png",PNG8:"png8",PNG24:"png24",PNG32:"png32",JPEG:"jpg",JPG:"jpg",DIB:"dib",TIFF:"tiff",EMF:"emf",PS:"ps",PDF:"pdf",GIF:"gif",SVG:"svg",SVGZ:"svgz",Mixed:"mixed",MIXED:"mixed",LERC:"lerc",LERC2D:"lerc2d",RAW:"raw",pbf:"pbf"});let n=d=class extends L{static create(e={}){const{resolutionFactor:t=1,scales:s,size:i=256,spatialReference:l=_.WebMercator,numLODs:o=24}=e;if(!S(l)){const u=[];if(s)for(let c=0;c<s.length;c++){const h=s[c];u.push(new v({level:c,scale:h,resolution:h}))}else{let c=5e-4;for(let h=o-1;h>=0;h--)u.unshift(new v({level:h,scale:c,resolution:c})),c*=2}return new d({dpi:96,lods:u,origin:new y(0,0,l),size:[i,i],spatialReference:l})}const p=R(l),g=e.origin?new y({x:e.origin.x,y:e.origin.y,spatialReference:l}):new y(p?{x:p.origin[0],y:p.origin[1],spatialReference:l}:{x:0,y:0,spatialReference:l}),m=96,w=1/(P(l)*39.37*m),x=[];if(s)for(let u=0;u<s.length;u++){const c=s[u],h=c*w;x.push(new v({level:u,scale:c,resolution:h}))}else{let u=W(l)?512/i*5916575275917094e-7:256/i*591657527591555e-6;const c=Math.ceil(o/t);x.push(new v({level:0,scale:u,resolution:u*w}));for(let h=1;h<c;h++){const z=u/2**t,M=z*w;x.push(new v({level:h,scale:z,resolution:M})),u=z}}return new d({dpi:m,lods:x,origin:g,size:[i,i],spatialReference:l})}constructor(e){super(e),this.dpi=96,this.format=null,this.origin=null,this.size=null,this.spatialReference=null}get isWrappable(){const{spatialReference:e,origin:t}=this;if(e&&t){const s=R(e);return e.isWrappable&&!!s&&Math.abs(s.origin[0]-t.x)<=s.dx}return!1}readOrigin(e,t){return y.fromJSON({spatialReference:t.spatialReference,...e})}set lods(e){let t=0,s=0;const i=[],l=this._levelToLOD={};e&&(t=-1/0,s=1/0,e.forEach(o=>{i.push(o.scale),t=o.scale>t?o.scale:t,s=o.scale<s?o.scale:s,l[o.level]=o})),this._set("scales",i),this._set("lods",e),this._initializeUpsampleLevels()}readSize(e,t){return[t.cols,t.rows]}writeSize(e,t){t.cols=e[0],t.rows=e[1]}zoomToScale(e){const t=this.scales;if(e<=0)return t[0];if(e>=t.length-1)return t[t.length-1];const s=Math.floor(e),i=s+1;return t[s]/(t[s]/t[i])**(e-s)}scaleToZoom(e){const t=this.scales,s=t.length-1;let i=0;for(;i<s;i++){const l=t[i],o=t[i+1];if(l<=e)return i;if(o===e)return i+1;if(l>e&&o<e)return i+Math.log(l/e)/Math.log(l/o)}return i}tileAt(e,t,s,i){const l=this.lodAt(e);if(!l)return null;let o,p;if(typeof t=="number")o=t,p=s;else if(F(t.spatialReference,this.spatialReference))o=t.x,p=t.y,i=s;else{const w=G(t,this.spatialReference);if(w==null)return null;o=w.x,p=w.y,i=s}const g=l.resolution*this.size[0],m=l.resolution*this.size[1];return i||(i=new I(null,0,0,0,j())),i.level=e,i.row=Math.floor((this.origin.y-p)/m+.001),i.col=Math.floor((o-this.origin.x)/g+.001),this.updateTileInfo(i),i}updateTileInfo(e,t=d.ExtrapolateOptions.NONE){let s=this.lodAt(e.level);if(!s&&t===d.ExtrapolateOptions.POWER_OF_TWO){const p=this.lods[this.lods.length-1];p.level<e.level&&(s=p)}if(!s)return;const i=e.level-s.level,l=s.resolution*this.size[0]/2**i,o=s.resolution*this.size[1]/2**i;e.id=`${e.level}/${e.row}/${e.col}`,e.extent||(e.extent=j()),e.extent[0]=this.origin.x+e.col*l,e.extent[1]=this.origin.y-(e.row+1)*o,e.extent[2]=e.extent[0]+l,e.extent[3]=e.extent[1]+o}upsampleTile(e){const t=this._upsampleLevels[e.level];return!(!t||t.parentLevel===-1)&&(e.level=t.parentLevel,e.row=Math.floor(e.row/t.factor+.001),e.col=Math.floor(e.col/t.factor+.001),this.updateTileInfo(e),!0)}getTileBounds(e,t){const s=this.lodAt(t.level);if(s==null)return null;const{resolution:i}=s,l=i*this.size[0],o=i*this.size[1];return e[0]=this.origin.x+t.col*l,e[1]=this.origin.y-(t.row+1)*o,e[2]=e[0]+l,e[3]=e[1]+o,e}lodAt(e){return this._levelToLOD?.[e]??null}clone(){return d.fromJSON(this.write({}))}getCompatibleForVTL(e){if(this.size[0]!==this.size[1]||this.size[0]===256&&e===512)return null;const t=(this.size[0]===512&&e===256?-1:0)+(this.spatialReference.isGeographic?1:0);if(this.size[0]===e&&t===0)return this;const s=[],i=this.lods.length-t;for(let l=0;l<i;l++){const o=l+t,{scale:p,resolution:g}=o>=0?this.lods[o]:{scale:2*this.lods[0].scale,resolution:2*this.lods[0].resolution};s.push(new v({level:l,scale:p,resolution:g}))}return new d({size:[e,e],dpi:this.dpi,format:this.format,compressionQuality:this.compressionQuality,origin:this.origin,spatialReference:this.spatialReference,lods:s})}_initializeUpsampleLevels(){const e=this.lods;this._upsampleLevels=[];let t=null;for(let s=0;s<e.length;s++){const i=e[s];this._upsampleLevels[i.level]={parentLevel:t?t.level:-1,factor:t?t.resolution/i.resolution:0},t=i}}};r([a({type:Number,json:{write:!0}})],n.prototype,"compressionQuality",void 0),r([a({type:Number,json:{write:!0}})],n.prototype,"dpi",void 0),r([a({type:String,json:{read:N.read,write:N.write,origins:{"web-scene":{read:!1,write:!1}}}})],n.prototype,"format",void 0),r([a({readOnly:!0})],n.prototype,"isWrappable",null),r([a({type:y,json:{write:!0}})],n.prototype,"origin",void 0),r([E("origin")],n.prototype,"readOrigin",null),r([a({type:[v],value:null,json:{write:!0}})],n.prototype,"lods",null),r([a({readOnly:!0})],n.prototype,"scales",void 0),r([a({cast:e=>Array.isArray(e)?e:typeof e=="number"?[e,e]:[256,256]})],n.prototype,"size",void 0),r([E("size",["rows","cols"])],n.prototype,"readSize",null),r([D("size",{cols:{type:O},rows:{type:O}})],n.prototype,"writeSize",null),r([a({type:_,json:{write:!0}})],n.prototype,"spatialReference",void 0),n=d=r([T("esri.layers.support.TileInfo")],n),function(e){var t;(t=e.ExtrapolateOptions||(e.ExtrapolateOptions={}))[t.NONE=0]="NONE",t[t.POWER_OF_TWO=1]="POWER_OF_TWO"}(n||(n={}));const Q=n;export{v as p,Q as z};
