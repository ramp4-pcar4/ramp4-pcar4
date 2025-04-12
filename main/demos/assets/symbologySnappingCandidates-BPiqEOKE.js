import{az as x,X as $,bi as m,v as g,cC as y}from"./main-Bd_03BNf.js";import{e as z}from"./LRUCache-k4-1Y9qe.js";import{n as I}from"./ElevationInfo-DnuPtDzp.js";function X(s=!1,e){if(s){const{elevationInfo:t,alignPointsInFeatures:n}=e;return new v(t,n)}return new b}let b=class{async alignCandidates(e,t,n){return e}notifyElevationSourceChange(){}};const w=1024;let v=class{constructor(e,t){this._elevationInfo=e,this._alignPointsInFeatures=t,this._alignmentsCache=new z(w),this._cacheVersion=0}async alignCandidates(e,t,n){const a=this._elevationInfo;return a==null||a.mode!=="absolute-height"||a.featureExpressionInfo?this._alignComputedElevationCandidates(e,t,n):(S(e,t,a),e)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}async _alignComputedElevationCandidates(e,t,n){const a=new Map;for(const u of e)x(a,u.objectId,O).push(u);const[o,c,i]=this._prepareQuery(a,t),r=await this._alignPointsInFeatures(o,n);if($(n),i!==this._cacheVersion)return this._alignComputedElevationCandidates(e,t,n);this._applyCacheAndResponse(o,r,c);const{drapedObjectIds:h,failedObjectIds:l}=r,d=[];for(const u of e){const{objectId:f}=u;h.has(f)&&u.type==="edge"&&(u.draped=!0),l.has(f)||d.push(u)}return d}_prepareQuery(e,t){const n=[],a=[];for(const[o,c]of e){const i=[];for(const r of c)this._addToQueriesOrCachedResult(o,r.target,i,a),r.type==="edge"&&(this._addToQueriesOrCachedResult(o,r.start,i,a),this._addToQueriesOrCachedResult(o,r.end,i,a));i.length!==0&&n.push({objectId:o,points:i})}return[{spatialReference:t.toJSON(),pointsInFeatures:n},a,this._cacheVersion]}_addToQueriesOrCachedResult(e,t,n,a){const o=_(e,t),c=this._alignmentsCache.get(o);c==null?n.push(t):a.push(new j(t,c))}_applyCacheAndResponse(e,{elevations:t,drapedObjectIds:n,failedObjectIds:a},o){for(const r of o)r.apply();let c=0;const i=this._alignmentsCache;for(const{objectId:r,points:h}of e.pointsInFeatures){if(a.has(r)){c+=h.length;continue}const l=!n.has(r);for(const d of h){const u=_(r,d),f=t[c++];d.z=f,l&&i.put(u,f,1)}}}};class j{constructor(e,t){this.point=e,this.z=t}apply(){this.point.z=this.z}}function _(s,{x:e,y:t,z:n,spatialReference:a}){return`${s}-${e}-${t}-${n??0}}-wkid:${a?.wkid}`}function S(s,e,t){const{offset:n,unit:a}=t;if(n==null)return;const o=m(e),c=n*(I(a??"meters")/o);for(const i of s)switch(i.type){case"edge":i.start.z+=c,i.end.z+=c;continue;case"vertex":i.target.z+=c;continue}}function O(){return[]}class R{filter(e,t){return t}notifyElevationSourceChange(){}}let V=class{filter(e,t){const{point:n,distance:a}=e,{z:o}=n;if(o==null||t.length===0)return t;const c=M(a),i=this._updateCandidatesTo3D(t,n,c).filter(E);return i.sort(P),i}_updateCandidatesTo3D(e,t,n){for(const a of e)switch(a.type){case"edge":Q(a,t,n);continue;case"vertex":F(a,t,n);continue}return e}};function E(s){return s.distance<=1}function K(s=!1){return s?new V:new R}function Q(s,e,{x:t,y:n,z:a}){const{start:o,end:c,target:i}=s;s.draped||T(i,e,o,c);const r=(e.x-i.x)/t,h=(e.y-i.y)/n,l=(e.z-i.z)/a;s.distance=Math.sqrt(r*r+h*h+l*l)}function T(s,e,t,n){const a=n.x-t.x,o=n.y-t.y,c=n.z-t.z,i=a*a+o*o+c*c,r=(e.x-t.x)*a+(e.y-t.y)*o+c*(e.z-t.z),h=Math.min(1,Math.max(0,r/i)),l=t.x+a*h,d=t.y+o*h,u=t.z+c*h;s.x=l,s.y=d,s.z=u}function F(s,e,{x:t,y:n,z:a}){const{target:o}=s,c=(e.x-o.x)/t,i=(e.y-o.y)/n,r=(e.z-o.z)/a,h=Math.sqrt(c*c+i*i+r*r);s.distance=h}function M(s){return typeof s=="number"?{x:s,y:s,z:s}:s}function P(s,e){return s.distance-e.distance}function L(s=!1,e){return s?new A(e):new k}class k{async fetch(){return[]}notifySymbologyChange(){}}const q=1024;class A{constructor(e){this._getSymbologyCandidates=e,this._candidatesCache=new z(q),this._cacheVersion=0}async fetch(e,t){if(e.length===0)return[];const n=[],a=[],o=this._candidatesCache;for(const d of e){const u=C(d),f=o.get(u);if(f)for(const p of f)a.push(g(p));else n.push(d),o.put(u,[],1)}if(n.length===0)return a;const c=this._cacheVersion,{candidates:i,sourceCandidateIndices:r}=await this._getSymbologyCandidates(n,t);if($(t),c!==this._cacheVersion)return this.fetch(e,t);const h=[],{length:l}=i;for(let d=0;d<l;++d){const u=i[d],f=C(n[r[d]]),p=o.get(f);p.push(u),o.put(f,p,p.length),h.push(g(u))}return a.concat(h)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function C(s){switch(s.type){case"vertex":{const{objectId:e,target:t}=s,n=`${e}-vertex-${t.x}-${t.y}-${t.z??0}`;return y(n).toString()}case"edge":{const{objectId:e,start:t,end:n}=s,a=`${e}-edge-${t.x}-${t.y}-${t.z??0}-to-${n.x}-${n.y}-${n.z??0}`;return y(a).toString()}default:return""}}export{X as i,L as n,K as r};
