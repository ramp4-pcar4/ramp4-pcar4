import{n as N}from"./glsl-BH37Aalp.js";import{aK as C,f0 as Ve,du as Ue,c3 as je,i$ as Ee,j0 as Ge,iA as Le,bl as He,j1 as _e,j2 as Be,j3 as ke,fF as qe,cL as Ae,cF as Xe}from"./main-Co__46aP.js";import{t as Ze}from"./doublePrecisionUtils-B0owpBza.js";import{s as Ye,a as Ke,c as Qe,o as Te,e as Je,g as Oe,h as We,p as et,w as tt,i as nt,j as ot,k as rt,n as j,f as E,l as Ie,m as Pe}from"./Geometry-XJqD6zbB.js";import{e as x}from"./VertexAttribute-Cq4MnHjR.js";import{x as st,l as at,m as lt}from"./mat4-CektqcCx.js";import{e as it}from"./mat4f64-Dk4dwAN8.js";import{s as ct}from"./vec42-CKs01hkn.js";import{t as ut,N as ft}from"./vec4f64-o2zAXfmz.js";import{n as ht}from"./projection-DKTSCWK9.js";import{u as pt}from"./meshVertexSpaceUtils-CmdJ9q-l.js";import{e as xe}from"./projectVectorToVector-CNKIlrHi.js";import{o as dt,x as mt}from"./hydratedFeatures-itFU8iK2.js";import{o as ie,c as G,A as z,s as ee,g as V,u as F,_ as B,E as wt,P as Re}from"./vec32-TksrOGUG.js";import{r as I,t as Me,n as U}from"./vec3f32-nZdmKIgz.js";import{o as gt,w as Ce}from"./Indices-DZ2V549t.js";import{M as Ot,l as vt,x as xt}from"./plane-MlEwYlI4.js";import{k as yt}from"./sphere-D1LFIIV7.js";import{t as S}from"./orientedBoundingBox-Cnxo-T2X.js";import{s as te}from"./InterleavedLayout-DbhT0re0.js";function an(e){e.code.add(N`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}`),e.code.add(N`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(N`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function ln(e,n){return e==null&&(e=[]),e.push(n),e}function cn(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function un(e,n,o,t,r){oe[0]=e.get(n,0),oe[1]=e.get(n,1),oe[2]=e.get(n,2),Ze(oe,k,3),o.set(r,0,k[0]),t.set(r,0,k[1]),o.set(r,1,k[2]),t.set(r,1,k[3]),o.set(r,2,k[4]),t.set(r,2,k[5])}const oe=C(),k=new Float32Array(6),At=.5;function fn(e,n){e.include(Ye),e.attributes.add(x.POSITION,"vec3"),e.attributes.add(x.NORMAL,"vec3"),e.attributes.add(x.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;Ke(o,n),Qe(o,n),o.uniforms.add(new Te("viewport",t=>t.camera.fullViewport),new Je("polygonOffset",t=>t.shaderPolygonOffset),new Oe("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&We(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(N`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(N`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?N.float(0):N`sign(pointGroundDistance)`};
      if (pointGroundSign == 0.0) {
        pointGroundSign = cameraGroundRelative;
      }

      // cameraGroundRelative is -1 if camera is below ground, 1 if above ground
      // groundRelative is 1 if both camera and symbol are on the same side of the ground, -1 otherwise
      float groundRelative = cameraGroundRelative * pointGroundSign;

      // view angle dependent part of polygon offset emulation: we take the absolute value because the sign that is
      // dropped is instead introduced using the ground-relative position of the symbol and the camera
      if (polygonOffset > .0) {
        float cosAlpha = clamp(absCosAngle, 0.01, 1.0);
        float tanAlpha = sqrt(1.0 - cosAlpha * cosAlpha) / cosAlpha;
        float factor = (1.0 - tanAlpha / viewport[2]);

        // same side of the terrain
        if (groundRelative > 0.0) {
          posView *= factor;
        }
        // opposite sides of the terrain
        else {
          posView /= factor;
        }
      }

      return groundRelative;
    }
  `),n.draped&&!n.hasVerticalOffset||et(o),n.draped||(o.uniforms.add(new Oe("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(N`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${N.float(At)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&tt(o),n.hasScreenSizePerspective&&nt(o),o.code.add(N`
    vec4 projectPositionHUD(out ProjectHUDAux aux) {
      vec3 centerOffset = centerOffsetAndDistance.xyz;
      float pointGroundDistance = centerOffsetAndDistance.w;

      aux.posModel = position;
      aux.posView = (view * vec4(aux.posModel, 1.0)).xyz;
      aux.vnormal = normal;
      ${n.draped?"":"applyHUDVerticalGroundOffset(aux.vnormal, aux.posModel, aux.posView);"}

      // Screen sized offset in world space, used for example for line callouts
      // Note: keep this implementation in sync with the CPU implementation, see
      //   - MaterialUtil.verticalOffsetAtDistance
      //   - HUDMaterial.applyVerticalOffsetTransformation

      aux.distanceToCamera = length(aux.posView);

      vec3 viewDirObjSpace = normalize(cameraPosition - aux.posModel);
      float cosAngle = dot(aux.vnormal, viewDirObjSpace);

      aux.absCosAngle = abs(cosAngle);

      ${n.hasScreenSizePerspective&&(n.hasVerticalOffset||n.screenCenterOffsetUnitsEnabled)?"vec3 perspectiveFactor = screenSizePerspectiveScaleFactor(aux.absCosAngle, aux.distanceToCamera, screenSizePerspectiveAlignment);":""}

      ${n.hasVerticalOffset?n.hasScreenSizePerspective?"float verticalOffsetScreenHeight = applyScreenSizePerspectiveScaleFactorFloat(verticalOffset.x, perspectiveFactor);":"float verticalOffsetScreenHeight = verticalOffset.x;":""}

      ${n.hasVerticalOffset?N`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":N`
            // Apply x/y in view space, but z in screen space (i.e. along posView direction)
            aux.posView += vec3(centerOffset.x, centerOffset.y, 0.0);

            // Same material all have same z != 0.0 condition so should not lead to
            // branch fragmentation and will save a normalization if it's not needed
            if (centerOffset.z != 0.0) {
              aux.posView -= normalize(aux.posView) * centerOffset.z;
            }
          `}

      vec4 posProj = proj * vec4(aux.posView, 1.0);

      ${n.screenCenterOffsetUnitsEnabled?n.hasScreenSizePerspective?"float centerOffsetY = applyScreenSizePerspectiveScaleFactorFloat(centerOffset.y, perspectiveFactor);":"float centerOffsetY = centerOffset.y;":""}

      ${n.screenCenterOffsetUnitsEnabled?"posProj.xy += vec2(centerOffset.x, centerOffsetY) * pixelRatio * 2.0 / viewport.zw * posProj.w;":""}

      // constant part of polygon offset emulation
      posProj.z -= groundRelative * polygonOffset * posProj.w;
      return posProj;
    }
  `)}function Pt(e){e.uniforms.add(new ot("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(N`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(N`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ce;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ce||(ce={}));function hn(e){e.vertex.uniforms.add(new Oe("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ce.Occluded?1:n.hudRenderStyle===ce.NotOccluded?0:.75),new Te("viewport",n=>n.camera.fullViewport),new rt("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),e.vertex.include(Pt),e.vertex.code.add(N`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function pn(e,n){if(e.type==="point")return _(e,n,!1);if(dt(e))switch(e.type){case"extent":return _(e.center,n,!1);case"polygon":return _(e.centroid,n,!1);case"polyline":return _($e(e),n,!0);case"mesh":return _(pt(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return _(Mt(e),n,!0);case"polygon":return _($t(e),n,!0);case"polyline":return _($e(e),n,!0);case"multipoint":return}}function $e(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=Ee(n,Ge(n)/2);return xe(o[0],o[1],o[2],e.spatialReference)}function Mt(e){return xe(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function $t(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=Le(e.rings,!!e.hasZ);return xe(o[0],o[1],o[2],e.spatialReference)}function _(e,n,o){const t=o?e:mt(e);return n&&e?ht(e,t,n)?t:null:t}function dn(e,n,o,t=0){if(e){n||(n=je());const r=e;let f=.5*r.width*(o-1),s=.5*r.height*(o-1);return r.width<1e-7*r.height?f+=s/20:r.height<1e-7*r.width&&(s+=f/20),ct(n,r.xmin-f-t,r.ymin-s-t,r.xmax+f+t,r.ymax+s+t),n}return null}function mn(e,n,o=null){const t=ut(ft);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function wn(e=Ve,n,o,t=1){const r=new Array(3);if(n==null||o==null)r[0]=1,r[1]=1,r[2]=1;else{let f,s=0;for(let l=2;l>=0;l--){const c=e[l],a=c!=null,i=l===0&&!f&&!a,p=o[l];let y;c==="symbol-value"||i?y=p!==0?n[l]/p:1:a&&c!=="proportional"&&isFinite(c)&&(y=p!==0?c/p:1),y!=null&&(r[l]=y,f=y,s=Math.max(s,Math.abs(y)))}for(let l=2;l>=0;l--)r[l]==null?r[l]=f:r[l]===0&&(r[l]=.001*s)}for(let f=2;f>=0;f--)r[f]/=t;return Ue(r)}function St(e){return e.isPrimitive!=null}function gn(e){return bt(St(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function bt(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function On(e,n,o,t=it()){return e&&st(t,t,-e/180*Math.PI),n&&at(t,t,n/180*Math.PI),o&&lt(t,t,o/180*Math.PI),t}function vn(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=He(n),r=_e(e)*t,f=Be(e)*t,s=ke(e)*(n.isGeographic?1:t);return r===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(r,f,s)}var ve;(function(e){function n(s,l){const c=s[l],a=s[l+1],i=s[l+2];return Math.sqrt(c*c+a*a+i*i)}function o(s,l){const c=s[l],a=s[l+1],i=s[l+2],p=1/Math.sqrt(c*c+a*a+i*i);s[l]*=p,s[l+1]*=p,s[l+2]*=p}function t(s,l,c){s[l]*=c,s[l+1]*=c,s[l+2]*=c}function r(s,l,c,a,i,p=l){(i=i||s)[p]=s[l]+c[a],i[p+1]=s[l+1]+c[a+1],i[p+2]=s[l+2]+c[a+2]}function f(s,l,c,a,i,p=l){(i=i||s)[p]=s[l]-c[a],i[p+1]=s[l+1]-c[a+1],i[p+2]=s[l+2]-c[a+2]}e.length=n,e.normalize=o,e.scale=t,e.add=r,e.subtract=f})(ve||(ve={}));const X=ve,de=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],Tt=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],It=[0,0,1,0,1,1,0,1],Rt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ne=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ne[6*e+n]=e;const q=new Array(36);for(let e=0;e<6;e++)q[6*e]=0,q[6*e+1]=1,q[6*e+2]=2,q[6*e+3]=2,q[6*e+4]=3,q[6*e+5]=0;function xn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=de[t][0]*n[0],o[3*t+1]=de[t][1]*n[1],o[3*t+2]=de[t][2]*n[2];return new E(e,[[x.POSITION,new S(o,Rt,3,!0)],[x.NORMAL,new S(Tt,Ne,3)],[x.UV0,new S(It,q,2)]])}const me=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Ct=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Nt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],zt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function yn(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=me[t][0]*n[0],o[3*t+1]=me[t][1]*n[1],o[3*t+2]=me[t][2]*n[2];return new E(e,[[x.POSITION,new S(o,Nt,3,!0)],[x.NORMAL,new S(Ct,zt,3)]])}const re=I(-.5,0,-.5),se=I(.5,0,-.5),ae=I(0,0,.5),le=I(0,.5,0),Z=U(),Y=U(),Q=U(),J=U(),W=U();G(Z,re,le),G(Y,re,se),B(Q,Z,Y),z(Q,Q),G(Z,se,le),G(Y,se,ae),B(J,Z,Y),z(J,J),G(Z,ae,le),G(Y,ae,re),B(W,Z,Y),z(W,W);const we=[re,se,ae,le],Dt=[0,-1,0,Q[0],Q[1],Q[2],J[0],J[1],J[2],W[0],W[1],W[2]],Ft=[0,1,2,3,1,0,3,2,1,3,0,2],Vt=[0,0,0,1,1,1,2,2,2,3,3,3];function An(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=we[t][0]*n[0],o[3*t+1]=we[t][1]*n[1],o[3*t+2]=we[t][2]*n[2];return new E(e,[[x.POSITION,new S(o,Ft,3,!0)],[x.NORMAL,new S(Dt,Vt,3)]])}function Pn(e,n,o,t,r={uv:!0}){const f=-Math.PI,s=2*Math.PI,l=-Math.PI/2,c=Math.PI,a=Math.max(3,Math.floor(o)),i=Math.max(2,Math.floor(t)),p=(a+1)*(i+1),y=j(3*p),P=j(3*p),A=j(2*p),g=[];let h=0;for(let w=0;w<=i;w++){const T=[],u=w/i,M=l+u*c,$=Math.cos(M);for(let R=0;R<=a;R++){const L=R/a,O=f+L*s,D=Math.cos(O)*$,b=Math.sin(M),ne=-Math.sin(O)*$;y[3*h]=D*n,y[3*h+1]=b*n,y[3*h+2]=ne*n,P[3*h]=D,P[3*h+1]=b,P[3*h+2]=ne,A[2*h]=L,A[2*h+1]=u,T.push(h),++h}g.push(T)}const m=new Array;for(let w=0;w<i;w++)for(let T=0;T<a;T++){const u=g[w][T],M=g[w][T+1],$=g[w+1][T+1],R=g[w+1][T];w===0?(m.push(u),m.push($),m.push(R)):w===i-1?(m.push(u),m.push(M),m.push($)):(m.push(u),m.push(M),m.push($),m.push($),m.push(R),m.push(u))}const d=[[x.POSITION,new S(y,m,3,!0)],[x.NORMAL,new S(P,m,3,!0)]];return r.uv&&d.push([x.UV0,new S(A,m,2,!0)]),r.offset&&(d[0][0]=x.OFFSET,d.push([x.POSITION,new S(Float64Array.from(r.offset),Ce(m.length),3,!0)])),new E(e,d)}function Mn(e,n,o,t){const r=Ut(n,o);return new E(e,r)}function Ut(e,n,o){let t,r;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],r=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)X.scale(t,c,e/X.length(t,c));let f={};function s(c,a){c>a&&([c,a]=[a,c]);const i=c.toString()+"."+a.toString();if(f[i])return f[i];let p=t.length;return t.length+=3,X.add(t,3*c,t,3*a,t,p),X.scale(t,p,e/X.length(t,p)),p/=3,f[i]=p,p}for(let c=0;c<n;c++){const a=r.length,i=new Array(4*a);for(let p=0;p<a;p+=3){const y=r[p],P=r[p+1],A=r[p+2],g=s(y,P),h=s(P,A),m=s(A,y),d=4*p;i[d]=y,i[d+1]=g,i[d+2]=m,i[d+3]=P,i[d+4]=h,i[d+5]=g,i[d+6]=A,i[d+7]=m,i[d+8]=h,i[d+9]=g,i[d+10]=h,i[d+11]=m}r=i,f={}}const l=Pe(t);for(let c=0;c<l.length;c+=3)X.normalize(l,c);return[[x.POSITION,new S(Pe(t),r,3,!0)],[x.NORMAL,new S(l,r,3,!0)]]}function $n(e,n={}){const{normal:o,position:t,color:r,rotation:f,size:s,centerOffsetAndDistance:l,uvs:c,featureAttribute:a,objectAndLayerIdColor:i=null}=n,p=t?Ae(t):C(),y=o?Ae(o):Xe(0,0,1),P=r?[255*r[0],255*r[1],255*r[2],r.length>3?255*r[3]:255]:[255,255,255,255],A=s!=null&&s.length===2?s:[1,1],g=f!=null?[f]:[0],h=Ce(1),m=[[x.POSITION,new S(p,h,3,!0)],[x.NORMAL,new S(y,h,3,!0)],[x.COLOR,new S(P,h,4,!0)],[x.SIZE,new S(A,h,2)],[x.ROTATION,new S(g,h,1,!0)]];if(c&&m.push([x.UV0,new S(c,h,c.length)]),l!=null){const d=[l[0],l[1],l[2],l[3]];m.push([x.CENTEROFFSETANDDISTANCE,new S(d,h,4)])}if(a){const d=[a[0],a[1],a[2],a[3]];m.push([x.FEATUREATTRIBUTE,new S(d,h,4)])}return new E(e,m,null,Ie.Point,i)}function jt(e,n,o,t,r=!0,f=!0){let s=0;const l=n,c=e;let a=I(0,s,0),i=I(0,s+c,0),p=I(0,-1,0),y=I(0,1,0);t&&(s=c,i=I(0,0,0),a=I(0,s,0),p=I(0,1,0),y=I(0,-1,0));const P=[i,a],A=[p,y],g=o+2,h=Math.sqrt(c*c+l*l);if(t)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*l,s,Math.sin(M)*l);P.push($);const R=I(c*Math.cos(M)/h,-l/h,c*Math.sin(M)/h);A.push(R)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),$=I(Math.cos(M)*l,s,Math.sin(M)*l);P.push($);const R=I(c*Math.cos(M)/h,l/h,c*Math.sin(M)/h);A.push(R)}const m=new Array,d=new Array;if(r){for(let u=3;u<P.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(P.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<P.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(P.length-1),d.push(1),d.push(2),d.push(A.length-1)}const w=j(3*g);for(let u=0;u<g;u++)w[3*u]=P[u][0],w[3*u+1]=P[u][1],w[3*u+2]=P[u][2];const T=j(3*g);for(let u=0;u<g;u++)T[3*u]=A[u][0],T[3*u+1]=A[u][1],T[3*u+2]=A[u][2];return[[x.POSITION,new S(w,m,3,!0)],[x.NORMAL,new S(T,d,3,!0)]]}function Sn(e,n,o,t,r,f=!0,s=!0){return new E(e,jt(n,o,t,r,f,s))}function bn(e,n,o,t,r,f,s){const l=r?Me(r):I(1,0,0),c=f?Me(f):I(0,0,0);s??=!0;const a=U();z(a,l);const i=U();V(i,a,Math.abs(n));const p=U();V(p,i,-.5),F(p,p,c);const y=I(0,1,0);Math.abs(1-Re(a,y))<.2&&ie(y,0,0,1);const P=U();B(P,a,y),z(P,P),B(y,P,a);const A=2*t+(s?2:0),g=t+(s?2:0),h=j(3*A),m=j(3*g),d=j(2*A),w=new Array(3*t*(s?4:2)),T=new Array(3*t*(s?4:2));s&&(h[3*(A-2)]=p[0],h[3*(A-2)+1]=p[1],h[3*(A-2)+2]=p[2],d[2*(A-2)]=0,d[2*(A-2)+1]=0,h[3*(A-1)]=h[3*(A-2)]+i[0],h[3*(A-1)+1]=h[3*(A-2)+1]+i[1],h[3*(A-1)+2]=h[3*(A-2)+2]+i[2],d[2*(A-1)]=1,d[2*(A-1)+1]=1,m[3*(g-2)]=-a[0],m[3*(g-2)+1]=-a[1],m[3*(g-2)+2]=-a[2],m[3*(g-1)]=a[0],m[3*(g-1)+1]=a[1],m[3*(g-1)+2]=a[2]);const u=(O,D,b)=>{w[O]=D,T[O]=b};let M=0;const $=U(),R=U();for(let O=0;O<t;O++){const D=O*(2*Math.PI/t);V($,y,Math.sin(D)),V(R,P,Math.cos(D)),F($,$,R),m[3*O]=$[0],m[3*O+1]=$[1],m[3*O+2]=$[2],V($,$,o),F($,$,p),h[3*O]=$[0],h[3*O+1]=$[1],h[3*O+2]=$[2],d[2*O]=O/t,d[2*O+1]=0,h[3*(O+t)]=h[3*O]+i[0],h[3*(O+t)+1]=h[3*O+1]+i[1],h[3*(O+t)+2]=h[3*O+2]+i[2],d[2*(O+t)]=O/t,d[2*O+1]=1;const b=(O+1)%t;u(M++,O,O),u(M++,O+t,O),u(M++,b,b),u(M++,b,b),u(M++,O+t,O),u(M++,b+t,b)}if(s){for(let O=0;O<t;O++){const D=(O+1)%t;u(M++,A-2,g-2),u(M++,O,g-2),u(M++,D,g-2)}for(let O=0;O<t;O++){const D=(O+1)%t;u(M++,O+t,g-1),u(M++,A-1,g-1),u(M++,D+t,g-1)}}const L=[[x.POSITION,new S(h,w,3,!0)],[x.NORMAL,new S(m,T,3,!0)],[x.UV0,new S(d,w,2,!0)]];return new E(e,L)}function Tn(e,n,o,t,r,f){t=t||10,r=r==null||r,te(n.length>1);const s=[[0,0,0]],l=[],c=[];for(let a=0;a<t;a++){l.push([0,-a-1,-(a+1)%t-1]);const i=a/t*2*Math.PI;c.push([Math.cos(i)*o,Math.sin(i)*o])}return Et(e,c,n,s,l,r,f)}function Et(e,n,o,t,r,f,s=I(0,0,0)){const l=n.length,c=j(o.length*l*3+(6*t.length||0)),a=j(o.length*l*3+(t?6:0)),i=new Array,p=new Array;let y=0,P=0;const A=C(),g=C(),h=C(),m=C(),d=C(),w=C(),T=C(),u=C(),M=C(),$=C(),R=C(),L=C(),O=C(),D=Ot();ie(M,0,1,0),G(g,o[1],o[0]),z(g,g),f?(F(u,o[0],s),z(h,u)):ie(h,0,0,1),Se(g,h,M,M,d,h,be),ee(m,h),ee(L,d);for(let v=0;v<t.length;v++)V(w,d,t[v][0]),V(u,h,t[v][2]),F(w,w,u),F(w,w,o[0]),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2];a[P++]=-g[0],a[P++]=-g[1],a[P++]=-g[2];for(let v=0;v<r.length;v++)i.push(r[v][0]>0?r[v][0]:-r[v][0]-1+t.length),i.push(r[v][1]>0?r[v][1]:-r[v][1]-1+t.length),i.push(r[v][2]>0?r[v][2]:-r[v][2]-1+t.length),p.push(0),p.push(0),p.push(0);let b=t.length;const ne=t.length-1;for(let v=0;v<o.length;v++){let ye=!1;v>0&&(ee(A,g),v<o.length-1?(G(g,o[v+1],o[v]),z(g,g)):ye=!0,F($,A,g),z($,$),F(R,o[v-1],m),vt(o[v],$,D),xt(D,yt(R,A),u)?(G(u,u,o[v]),z(h,u),B(d,$,h),z(d,d)):Se($,m,L,M,d,h,be),ee(m,h),ee(L,d)),f&&(F(u,o[v],s),z(O,u));for(let H=0;H<l;H++)if(V(w,d,n[H][0]),V(u,h,n[H][1]),F(w,w,u),z(T,w),a[P++]=T[0],a[P++]=T[1],a[P++]=T[2],F(w,w,o[v]),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2],!ye){const he=(H+1)%l;i.push(b+H),i.push(b+l+H),i.push(b+he),i.push(b+he),i.push(b+l+H),i.push(b+l+he);for(let pe=0;pe<6;pe++){const Fe=i.length-6;p.push(i[Fe+pe]-ne)}}b+=l}const ze=o[o.length-1];for(let v=0;v<t.length;v++)V(w,d,t[v][0]),V(u,h,t[v][1]),F(w,w,u),F(w,w,ze),c[y++]=w[0],c[y++]=w[1],c[y++]=w[2];const ue=P/3;a[P++]=g[0],a[P++]=g[1],a[P++]=g[2];const fe=b-l;for(let v=0;v<r.length;v++)i.push(r[v][0]>=0?b+r[v][0]:-r[v][0]-1+fe),i.push(r[v][2]>=0?b+r[v][2]:-r[v][2]-1+fe),i.push(r[v][1]>=0?b+r[v][1]:-r[v][1]-1+fe),p.push(ue),p.push(ue),p.push(ue);const De=[[x.POSITION,new S(c,i,3,!0)],[x.NORMAL,new S(a,p,3,!0)]];return new E(e,De)}function In(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const r=qe(3*n.length),f=new Array(2*(n.length-1));let s=0,l=0;for(let a=0;a<n.length;a++){for(let i=0;i<3;i++)r[s++]=n[a][i];a>0&&(f[l++]=a-1,f[l++]=a)}const c=[[x.POSITION,new S(r,f,3,!0)]];if(o){const a=j(3*o.length);let i=0;for(let p=0;p<n.length;p++)for(let y=0;y<3;y++)a[i++]=o[p][y];c.push([x.NORMAL,new S(a,f,3,!0)])}return t&&c.push([x.COLOR,new S(t,gt(t.length/4),4)]),new E(e,c,null,Ie.Line)}function Rn(e,n,o,t,r,f=0){const s=new Array(18),l=[[-o,f,r/2],[t,f,r/2],[0,n+f,r/2],[-o,f,-r/2],[t,f,-r/2],[0,n+f,-r/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let a=0;a<6;a++)s[3*a]=l[a][0],s[3*a+1]=l[a][1],s[3*a+2]=l[a][2];return new E(e,[[x.POSITION,new S(s,c,3,!0)]])}function Cn(e,n){const o=e.getMutableAttribute(x.POSITION).data;for(let t=0;t<o.length;t+=3){const r=o[t],f=o[t+1],s=o[t+2];ie(K,r,f,s),wt(K,K,n),o[t]=K[0],o[t+1]=K[1],o[t+2]=K[2]}}function Nn(e,n=e){const o=e.attributes,t=o.get(x.POSITION).data,r=o.get(x.NORMAL).data;if(r){const f=n.getMutableAttribute(x.NORMAL).data;for(let s=0;s<r.length;s+=3){const l=r[s+1];f[s+1]=-r[s+2],f[s+2]=l}}if(t){const f=n.getMutableAttribute(x.POSITION).data;for(let s=0;s<t.length;s+=3){const l=t[s+1];f[s+1]=-t[s+2],f[s+2]=l}}}function ge(e,n,o,t,r){return!(Math.abs(Re(n,e))>r)&&(B(o,e,n),z(o,o),B(t,o,e),z(t,t),!0)}function Se(e,n,o,t,r,f,s){return ge(e,n,r,f,s)||ge(e,o,r,f,s)||ge(e,t,r,f,s)}const be=.99619469809,K=C();function zn(e){return e.type==="point"}export{mn as A,yn as B,wn as D,vn as E,xn as F,Se as M,Cn as O,dn as S,gn as U,bt as Z,zn as a,ce as b,jt as c,At as d,ln as e,An as f,bn as g,Sn as h,pn as i,un as j,$n as k,Pt as l,Nn as m,hn as n,On as o,Pn as p,Rn as q,cn as r,Mn as s,an as t,fn as u,Tn as v,In as w,Et as x};
