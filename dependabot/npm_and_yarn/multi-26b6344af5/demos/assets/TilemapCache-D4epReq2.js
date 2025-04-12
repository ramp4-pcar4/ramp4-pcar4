import{cd as T,v as z,a5 as O,s as u,aN as q,aO as L,di as S,Y as _,a9 as P,g9 as x,ga as M,a as C,u as I,bF as U,ab as j,H as d,J as y,N as k}from"./main-Cv8ITM2j.js";import{E}from"./ByteSizeUnit-BsxeN7wM.js";import{e as H}from"./LRUCache-vJ6pZFyB.js";import{t as N}from"./TileKey-DZd6gJy7.js";import{i as F}from"./memoryEstimations-mpuvLg4e.js";function R(e,t=!1){return e<=T?t?new Array(e).fill(0):new Array(e):new Uint32Array(e)}class w{constructor(t){K(t);const{location:a,data:i}=t;this.location=Object.freeze(z(a));const l=this.location.width,n=this.location.height;let o=!0,r=!0;const c=Math.ceil(l*n/32),s=R(c);let h=0;for(let f=0;f<i.length;f++){const p=f%32;i[f]?(r=!1,s[h]|=1<<p):o=!1,p===31&&++h}r?(this._availability="unavailable",this.byteSize=40):o?(this._availability="available",this.byteSize=40):(this._availability=s,this.byteSize=40+F(s))}getAvailability(t,a){if(this._availability==="unavailable"||this._availability==="available")return this._availability;const i=(t-this.location.top)*this.location.width+(a-this.location.left),l=i%32,n=i>>5,o=this._availability;return n<0||n>o.length?"unknown":o[n]&1<<l?"available":"unavailable"}static fromDefinition(t,a){const i=t.service.request||O,{row:l,col:n,width:o,height:r}=t,c={query:{f:"json"}};return a=a?{...c,...a}:c,i(J(t),a).then(s=>s.data).catch(s=>{if(s?.details?.httpStatus===422)return{location:{top:l,left:n,width:o,height:r},valid:!0,data:new Array(o*r).fill(0)};throw s}).then(s=>{if(s.location&&(s.location.top!==l||s.location.left!==n||s.location.width!==o||s.location.height!==r))throw new u("tilemap:location-mismatch","Tilemap response for different location than requested",{response:s,definition:{top:l,left:n,width:o,height:r}});return w.fromJSON(s)})}static fromJSON(t){return Object.freeze(new w(t))}}function $(e){return`${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}function J(e){let t;if(e.service.tileServers?.length){const i=e.service.tileServers;t=`${i&&i.length?i[e.row%i.length]:e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`}else t=`${e.service.url}/tilemap/${e.level}/${e.row}/${e.col}/${e.width}/${e.height}`;const a=e.service.query;return a&&(t=`${t}?${a}`),t}function K(e){if(!e?.location)throw new u("tilemap:missing-location","Location missing from tilemap response");if(e.valid===!1)throw new u("tilemap:invalid","Tilemap response was marked as invalid");if(!e.data)throw new u("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(e.data))throw new u("tilemap:data-mismatch","Data must be an array of numbers");if(e.data.length!==e.location.width*e.location.height)throw new u("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")}var v;function A(e,t,a){return new u("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:a})}let m=v=class extends q{constructor(e){super(e),this._pendingTilemapRequests={},this.request=O,this.size=32,this._prefetchingEnabled=!0}initialize(){this._tilemapCache=new H(2*E.MEGABYTES),this.addHandles(L(()=>{const{layer:e}=this;return[e?.parsedUrl,e?.tileServers,e?.apiKey,e?.customParameters]},()=>this._initializeTilemapDefinition(),S))}get effectiveMinLOD(){return this.minLOD??this.layer.tileInfo.lods[0].level}get effectiveMaxLOD(){return this.maxLOD??this.layer.tileInfo.lods[this.layer.tileInfo.lods.length-1].level}getAvailability(e,t,a){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return"unavailable";const i=this._tilemapFromCache(e,t,a,this._tmpTilemapDefinition);return i?i.getAvailability(t,a):"unknown"}fetchAvailability(e,t,a,i){return!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD?Promise.reject(A(e,t,a)):this._fetchTilemap(e,t,a,i).catch(l=>l).then(l=>{if(l instanceof w){const n=l.getAvailability(t,a);if(n==="unavailable")throw A(e,t,a);return n}if(_(l))throw l;return"unknown"})}fetchAvailabilityUpsample(e,t,a,i,l){i.level=e,i.row=t,i.col=a;const n=this.layer.tileInfo;n.updateTileInfo(i);const o=this.fetchAvailability(e,t,a,l).catch(r=>{if(_(r))throw r;if(n.upsampleTile(i))return this.fetchAvailabilityUpsample(i.level,i.row,i.col,i,l);throw r});return this._fetchAvailabilityUpsamplePrefetch(i.id,e,t,a,l,o),o}async _fetchAvailabilityUpsamplePrefetch(e,t,a,i,l,n){if(!this._prefetchingEnabled||e==null)return;const o=`prefetch-${e}`;if(this.hasHandles(o))return;const r=new AbortController;n.then(()=>r.abort(),()=>r.abort());let c=!1;const s=P(()=>{c||(c=!0,r.abort())});if(this.addHandles(s,o),await x(10,r.signal).catch(()=>{}),c||(c=!0,this.removeHandles(o)),M(r))return;const h=new N(e,t,a,i),f={...l,signal:r.signal},p=this.layer.tileInfo;for(let D=0;v._prefetches.length<v._maxPrefetch&&p.upsampleTile(h);++D){const b=this.fetchAvailability(h.level,h.row,h.col,f);v._prefetches.push(b);const g=()=>{v._prefetches.removeUnordered(b)};b.then(g,g)}}_fetchTilemap(e,t,a,i){if(!this.layer.tileInfo.lodAt(e)||e<this.effectiveMinLOD||e>this.effectiveMaxLOD)return Promise.reject(new u("tilemap-cache:level-unavailable",`Level ${e} is unavailable in the service`));const l=this._tmpTilemapDefinition,n=this._tilemapFromCache(e,t,a,l);if(n)return Promise.resolve(n);const o=i?.signal;return i={...i,signal:null},new Promise((r,c)=>{C(o,()=>c(I()));const s=$(l);let h=this._pendingTilemapRequests[s];if(!h){h=w.fromDefinition(l,i).then(p=>(this._tilemapCache.put(s,p,p.byteSize),p));const f=()=>{delete this._pendingTilemapRequests[s]};this._pendingTilemapRequests[s]=h,h.then(f,f)}h.then(r,c)})}_initializeTilemapDefinition(){if(!this.layer.parsedUrl)return;const{parsedUrl:e,apiKey:t,customParameters:a}=this.layer;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:U({...e.query,...a,token:t??e.query?.token}),tileServers:this.layer.tileServers,request:this.request},width:this.size,height:this.size,level:0,row:0,col:0}}_tilemapFromCache(e,t,a,i){i.level=e,i.row=t-t%this.size,i.col=a-a%this.size;const l=$(i);return this._tilemapCache.get(l)}get test(){}};m._maxPrefetch=4,m._prefetches=new j({initialSize:v._maxPrefetch}),d([y({constructOnly:!0})],m.prototype,"layer",void 0),d([y({constructOnly:!0})],m.prototype,"minLOD",void 0),d([y({constructOnly:!0})],m.prototype,"maxLOD",void 0),d([y({constructOnly:!0})],m.prototype,"request",void 0),d([y({constructOnly:!0})],m.prototype,"size",void 0),m=v=d([k("esri.layers.support.TilemapCache")],m);export{m as T};
