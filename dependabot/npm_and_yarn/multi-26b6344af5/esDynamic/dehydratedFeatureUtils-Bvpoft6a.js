import{n as D}from"./glsl-o28TenZV.js";import{aI as N,eZ as Le,dr as _e,c0 as $e,iW as Be,iX as ke,iv as qe,bj as Xe,iY as Ye,iZ as Ze,i_ as We,fC as Je,cI as Pe,cC as Ke}from"./main-0iYVBzEC.js";import{t as Qe}from"./doublePrecisionUtils-BJbYwoii.js";import{s as et,a as tt,c as nt,o as Me,e as ot,g as de,h as at,p as st,w as rt,i as it,j as lt,k as ct,n as U,f as G,l as Te,m as Se}from"./Geometry-C2snnSwZ.js";import{e as y}from"./VertexAttribute-DFC3a3eR.js";import{x as ut,l as ft,m as pt}from"./mat4-BjdIAOlU.js";import{e as ht}from"./mat4f64-BaJwL7tQ.js";import{s as dt}from"./vec42-D8CJyqHG.js";import{t as mt,N as gt}from"./vec4f64-CjUMzAyX.js";import{n as wt}from"./projection-C0A164Al.js";import{u as vt}from"./meshVertexSpaceUtils-FTE7IM--.js";import{e as me}from"./projectVectorToVector-BfOGrT1m.js";import{o as Ot,x as yt}from"./hydratedFeatures-CwqAxWEi.js";import{c as H,_ as $,A as z,o as ae,s as ee,g as E,u as F,E as xt,P as be}from"./vec32-JpmRWeeI.js";import{r as I,n as j,t as Re}from"./vec3f32-BS0cezmI.js";import{o as At,w as Ie}from"./Indices-sS4N7KyW.js";import{M as Pt,l as Mt,x as Tt}from"./plane-C9Xu9arH.js";import{k as St}from"./sphere-DYZxr4e_.js";import{t as S}from"./orientedBoundingBox-BHn5KtHB.js";import{s as te}from"./InterleavedLayout-nuww11dk.js";function bt(e){e.code.add(D`const float MAX_RGBA_FLOAT =
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
}`),e.code.add(D`const vec4 RGBA_TO_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgbaTofloat(vec4 rgba) {
return dot(rgba, RGBA_TO_FLOAT_FACTORS);
}`),e.code.add(D`const vec4 uninterpolatedRGBAToFloatFactors = vec4(
1.0 / 256.0,
1.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0,
1.0 / 256.0 / 256.0 / 256.0 / 256.0
);
float uninterpolatedRGBAToFloat(vec4 rgba) {
return (dot(round(rgba * 255.0), uninterpolatedRGBAToFloatFactors) - 0.5) * 2.0;
}`)}function Rt(e,n){return e==null&&(e=[]),e.push(n),e}function It(e,n){if(e==null)return null;const o=e.filter(t=>t!==n);return o.length===0?null:o}function Ct(e,n,o,t,a){se[0]=e.get(n,0),se[1]=e.get(n,1),se[2]=e.get(n,2),Qe(se,k,3),o.set(a,0,k[0]),t.set(a,0,k[1]),o.set(a,1,k[2]),t.set(a,1,k[3]),o.set(a,2,k[4]),t.set(a,2,k[5])}const se=N(),k=new Float32Array(6),Ce=.5;function Nt(e,n){e.include(et),e.attributes.add(y.POSITION,"vec3"),e.attributes.add(y.NORMAL,"vec3"),e.attributes.add(y.CENTEROFFSETANDDISTANCE,"vec4");const o=e.vertex;tt(o,n),nt(o,n),o.uniforms.add(new Me("viewport",t=>t.camera.fullViewport),new ot("polygonOffset",t=>t.shaderPolygonOffset),new de("cameraGroundRelative",t=>t.camera.aboveGround?1:-1)),n.hasVerticalOffset&&at(o),o.constants.add("smallOffsetAngle","float",.984807753012208),o.code.add(D`struct ProjectHUDAux {
vec3 posModel;
vec3 posView;
vec3 vnormal;
float distanceToCamera;
float absCosAngle;
};`),o.code.add(D`
    float applyHUDViewDependentPolygonOffset(float pointGroundDistance, float absCosAngle, inout vec3 posView) {
      float pointGroundSign = ${n.terrainDepthTest?D.float(0):D`sign(pointGroundDistance)`};
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
  `),n.draped&&!n.hasVerticalOffset||st(o),n.draped||(o.uniforms.add(new de("perDistancePixelRatio",t=>Math.tan(t.camera.fovY/2)/(t.camera.fullViewport[2]/2))),o.code.add(D`
    void applyHUDVerticalGroundOffset(vec3 normalModel, inout vec3 posModel, inout vec3 posView) {
      float distanceToCamera = length(posView);

      // Compute offset in world units for a half pixel shift
      float pixelOffset = distanceToCamera * perDistancePixelRatio * ${D.float(Ce)};

      // Apply offset along normal in the direction away from the ground surface
      vec3 modelOffset = normalModel * cameraGroundRelative * pixelOffset;

      // Apply the same offset also on the view space position
      vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;

      posModel += modelOffset;
      posView += viewOffset;
    }
  `)),n.screenCenterOffsetUnitsEnabled&&rt(o),n.hasScreenSizePerspective&&it(o),o.code.add(D`
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

      ${n.hasVerticalOffset?D`
            float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * aux.distanceToCamera, verticalOffset.z, verticalOffset.w);
            vec3 modelOffset = aux.vnormal * worldOffset;
            aux.posModel += modelOffset;
            vec3 viewOffset = (viewNormal * vec4(modelOffset, 1.0)).xyz;
            aux.posView += viewOffset;
            // Since we elevate the object, we need to take that into account
            // in the distance to ground
            pointGroundDistance += worldOffset;`:""}

      float groundRelative = applyHUDViewDependentPolygonOffset(pointGroundDistance, aux.absCosAngle, aux.posView);

      ${n.screenCenterOffsetUnitsEnabled?"":D`
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
  `)}function Ne(e){e.uniforms.add(new lt("alignPixelEnabled",n=>n.alignPixelEnabled)),e.code.add(D`vec4 alignToPixelCenter(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.500123) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = (floor(xy * widthHeight) + vec2(0.5)) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`),e.code.add(D`vec4 alignToPixelOrigin(vec4 clipCoord, vec2 widthHeight) {
if (!alignPixelEnabled)
return clipCoord;
vec2 xy = vec2(0.5) + 0.5 * clipCoord.xy / clipCoord.w;
vec2 pixelSz = vec2(1.0) / widthHeight;
vec2 ij = floor((xy + 0.5 * pixelSz) * widthHeight) * pixelSz;
vec2 result = (ij * 2.0 - vec2(1.0)) * clipCoord.w;
return vec4(result, clipCoord.zw);
}`)}var ne;(function(e){e[e.Occluded=0]="Occluded",e[e.NotOccluded=1]="NotOccluded",e[e.Both=2]="Both",e[e.COUNT=3]="COUNT"})(ne||(ne={}));function Dt(e){e.vertex.uniforms.add(new de("renderTransparentlyOccludedHUD",n=>n.hudRenderStyle===ne.Occluded?1:n.hudRenderStyle===ne.NotOccluded?0:.75),new Me("viewport",n=>n.camera.fullViewport),new ct("hudVisibilityTexture",n=>n.hudVisibility?.getTexture())),e.vertex.include(Ne),e.vertex.code.add(D`bool testHUDVisibility(vec4 posProj) {
vec4 posProjCenter = alignToPixelCenter(posProj, viewport.zw);
vec4 occlusionPixel = texture(hudVisibilityTexture, .5 + .5 * posProjCenter.xy / posProjCenter.w);
if (renderTransparentlyOccludedHUD > 0.5) {
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g * renderTransparentlyOccludedHUD < 1.0;
}
return occlusionPixel.r * occlusionPixel.g > 0.0 && occlusionPixel.g == 1.0;
}`)}function zt(e,n){if(e.type==="point")return B(e,n,!1);if(Ot(e))switch(e.type){case"extent":return B(e.center,n,!1);case"polygon":return B(e.centroid,n,!1);case"polyline":return B(De(e),n,!0);case"mesh":return B(vt(e.vertexSpace,e.spatialReference)??e.extent.center,n,!1);case"multipoint":return}else switch(e.type){case"extent":return B(Vt(e),n,!0);case"polygon":return B(Ft(e),n,!0);case"polyline":return B(De(e),n,!0);case"multipoint":return}}function De(e){const n=e.paths[0];if(!n||n.length===0)return null;const o=Be(n,ke(n)/2);return me(o[0],o[1],o[2],e.spatialReference)}function Vt(e){return me(.5*(e.xmax+e.xmin),.5*(e.ymax+e.ymin),e.zmin!=null&&e.zmax!=null&&isFinite(e.zmin)&&isFinite(e.zmax)?.5*(e.zmax+e.zmin):void 0,e.spatialReference)}function Ft(e){const n=e.rings[0];if(!n||n.length===0)return null;const o=qe(e.rings,!!e.hasZ);return me(o[0],o[1],o[2],e.spatialReference)}function B(e,n,o){const t=o?e:yt(e);return n&&e?wt(e,t,n)?t:null:t}function Ut(e,n,o,t=0){if(e){n||(n=$e());const a=e;let f=.5*a.width*(o-1),s=.5*a.height*(o-1);return a.width<1e-7*a.height?f+=s/20:a.height<1e-7*a.width&&(s+=f/20),dt(n,a.xmin-f-t,a.ymin-s-t,a.xmax+f+t,a.ymax+s+t),n}return null}function Gt(e,n,o=null){const t=mt(gt);return e!=null&&(t[0]=e[0],t[1]=e[1],t[2]=e[2]),n!=null?t[3]=n:e!=null&&e.length>3&&(t[3]=e[3]),o&&(t[0]*=o,t[1]*=o,t[2]*=o,t[3]*=o),t}function Et(e=Le,n,o,t=1){const a=new Array(3);if(n==null||o==null)a[0]=1,a[1]=1,a[2]=1;else{let f,s=0;for(let i=2;i>=0;i--){const c=e[i],r=c!=null,l=i===0&&!f&&!r,h=o[i];let x;c==="symbol-value"||l?x=h!==0?n[i]/h:1:r&&c!=="proportional"&&isFinite(c)&&(x=h!==0?c/h:1),x!=null&&(a[i]=x,f=x,s=Math.max(s,Math.abs(x)))}for(let i=2;i>=0;i--)a[i]==null?a[i]=f:a[i]===0&&(a[i]=.001*s)}for(let f=2;f>=0;f--)a[f]/=t;return _e(a)}function jt(e){return e.isPrimitive!=null}function Ht(e){return ze(jt(e)?[e.width,e.depth,e.height]:e)?null:"Symbol sizes may not be negative values"}function ze(e){const n=o=>o==null||o>=0;return Array.isArray(e)?e.every(n):n(e)}function Lt(e,n,o,t=ht()){return e&&ut(t,t,-e/180*Math.PI),n&&ft(t,t,n/180*Math.PI),o&&pt(t,t,o/180*Math.PI),t}function _t(e,n,o){if(o.minDemResolution!=null)return o.minDemResolution;const t=Xe(n),a=Ye(e)*t,f=Ze(e)*t,s=We(e)*(n.isGeographic?1:t);return a===0&&f===0&&s===0?o.minDemResolutionForPoints:.01*Math.max(a,f,s)}var ge;(function(e){function n(s,i){const c=s[i],r=s[i+1],l=s[i+2];return Math.sqrt(c*c+r*r+l*l)}function o(s,i){const c=s[i],r=s[i+1],l=s[i+2],h=1/Math.sqrt(c*c+r*r+l*l);s[i]*=h,s[i+1]*=h,s[i+2]*=h}function t(s,i,c){s[i]*=c,s[i+1]*=c,s[i+2]*=c}function a(s,i,c,r,l,h=i){(l=l||s)[h]=s[i]+c[r],l[h+1]=s[i+1]+c[r+1],l[h+2]=s[i+2]+c[r+2]}function f(s,i,c,r,l,h=i){(l=l||s)[h]=s[i]-c[r],l[h+1]=s[i+1]-c[r+1],l[h+2]=s[i+2]-c[r+2]}e.length=n,e.normalize=o,e.scale=t,e.add=a,e.subtract=f})(ge||(ge={}));const X=ge,we=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],$t=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],Bt=[0,0,1,0,1,1,0,1],kt=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],Ve=new Array(36);for(let e=0;e<6;e++)for(let n=0;n<6;n++)Ve[6*e+n]=e;const q=new Array(36);for(let e=0;e<6;e++)q[6*e]=0,q[6*e+1]=1,q[6*e+2]=2,q[6*e+3]=2,q[6*e+4]=3,q[6*e+5]=0;function qt(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(24);for(let t=0;t<8;t++)o[3*t]=we[t][0]*n[0],o[3*t+1]=we[t][1]*n[1],o[3*t+2]=we[t][2]*n[2];return new G(e,[[y.POSITION,new S(o,kt,3,!0)],[y.NORMAL,new S($t,Ve,3)],[y.UV0,new S(Bt,q,2)]])}const ve=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],Xt=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],Yt=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],Zt=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];function Wt(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(18);for(let t=0;t<6;t++)o[3*t]=ve[t][0]*n[0],o[3*t+1]=ve[t][1]*n[1],o[3*t+2]=ve[t][2]*n[2];return new G(e,[[y.POSITION,new S(o,Yt,3,!0)],[y.NORMAL,new S(Xt,Zt,3)]])}const re=I(-.5,0,-.5),ie=I(.5,0,-.5),le=I(0,0,.5),ce=I(0,.5,0),Y=j(),Z=j(),W=j(),J=j(),K=j();H(Y,re,ce),H(Z,re,ie),$(W,Y,Z),z(W,W),H(Y,ie,ce),H(Z,ie,le),$(J,Y,Z),z(J,J),H(Y,le,ce),H(Z,le,re),$(K,Y,Z),z(K,K);const Oe=[re,ie,le,ce],Jt=[0,-1,0,W[0],W[1],W[2],J[0],J[1],J[2],K[0],K[1],K[2]],Kt=[0,1,2,3,1,0,3,2,1,3,0,2],Qt=[0,0,0,1,1,1,2,2,2,3,3,3];function en(e,n){Array.isArray(n)||(n=[n,n,n]);const o=new Array(12);for(let t=0;t<4;t++)o[3*t]=Oe[t][0]*n[0],o[3*t+1]=Oe[t][1]*n[1],o[3*t+2]=Oe[t][2]*n[2];return new G(e,[[y.POSITION,new S(o,Kt,3,!0)],[y.NORMAL,new S(Jt,Qt,3)]])}function tn(e,n,o,t,a={uv:!0}){const f=-Math.PI,s=2*Math.PI,i=-Math.PI/2,c=Math.PI,r=Math.max(3,Math.floor(o)),l=Math.max(2,Math.floor(t)),h=(r+1)*(l+1),x=U(3*h),P=U(3*h),A=U(2*h),w=[];let p=0;for(let g=0;g<=l;g++){const R=[],u=g/l,M=i+u*c,T=Math.cos(M);for(let C=0;C<=r;C++){const L=C/r,v=f+L*s,V=Math.cos(v)*T,b=Math.sin(M),oe=-Math.sin(v)*T;x[3*p]=V*n,x[3*p+1]=b*n,x[3*p+2]=oe*n,P[3*p]=V,P[3*p+1]=b,P[3*p+2]=oe,A[2*p]=L,A[2*p+1]=u,R.push(p),++p}w.push(R)}const m=new Array;for(let g=0;g<l;g++)for(let R=0;R<r;R++){const u=w[g][R],M=w[g][R+1],T=w[g+1][R+1],C=w[g+1][R];g===0?(m.push(u),m.push(T),m.push(C)):g===l-1?(m.push(u),m.push(M),m.push(T)):(m.push(u),m.push(M),m.push(T),m.push(T),m.push(C),m.push(u))}const d=[[y.POSITION,new S(x,m,3,!0)],[y.NORMAL,new S(P,m,3,!0)]];return a.uv&&d.push([y.UV0,new S(A,m,2,!0)]),a.offset&&(d[0][0]=y.OFFSET,d.push([y.POSITION,new S(Float64Array.from(a.offset),Ie(m.length),3,!0)])),new G(e,d)}function nn(e,n,o,t){const a=on(n,o);return new G(e,a)}function on(e,n,o){let t,a;t=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=[0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1];for(let c=0;c<t.length;c+=3)X.scale(t,c,e/X.length(t,c));let f={};function s(c,r){c>r&&([c,r]=[r,c]);const l=c.toString()+"."+r.toString();if(f[l])return f[l];let h=t.length;return t.length+=3,X.add(t,3*c,t,3*r,t,h),X.scale(t,h,e/X.length(t,h)),h/=3,f[l]=h,h}for(let c=0;c<n;c++){const r=a.length,l=new Array(4*r);for(let h=0;h<r;h+=3){const x=a[h],P=a[h+1],A=a[h+2],w=s(x,P),p=s(P,A),m=s(A,x),d=4*h;l[d]=x,l[d+1]=w,l[d+2]=m,l[d+3]=P,l[d+4]=p,l[d+5]=w,l[d+6]=A,l[d+7]=m,l[d+8]=p,l[d+9]=w,l[d+10]=p,l[d+11]=m}a=l,f={}}const i=Se(t);for(let c=0;c<i.length;c+=3)X.normalize(i,c);return[[y.POSITION,new S(Se(t),a,3,!0)],[y.NORMAL,new S(i,a,3,!0)]]}function an(e,n={}){const{normal:o,position:t,color:a,rotation:f,size:s,centerOffsetAndDistance:i,uvs:c,featureAttribute:r,objectAndLayerIdColor:l=null}=n,h=t?Pe(t):N(),x=o?Pe(o):Ke(0,0,1),P=a?[255*a[0],255*a[1],255*a[2],a.length>3?255*a[3]:255]:[255,255,255,255],A=s!=null&&s.length===2?s:[1,1],w=f!=null?[f]:[0],p=Ie(1),m=[[y.POSITION,new S(h,p,3,!0)],[y.NORMAL,new S(x,p,3,!0)],[y.COLOR,new S(P,p,4,!0)],[y.SIZE,new S(A,p,2)],[y.ROTATION,new S(w,p,1,!0)]];if(c&&m.push([y.UV0,new S(c,p,c.length)]),i!=null){const d=[i[0],i[1],i[2],i[3]];m.push([y.CENTEROFFSETANDDISTANCE,new S(d,p,4)])}if(r){const d=[r[0],r[1],r[2],r[3]];m.push([y.FEATUREATTRIBUTE,new S(d,p,4)])}return new G(e,m,null,Te.Point,l)}function Fe(e,n,o,t,a=!0,f=!0){let s=0;const i=n,c=e;let r=I(0,s,0),l=I(0,s+c,0),h=I(0,-1,0),x=I(0,1,0);t&&(s=c,l=I(0,0,0),r=I(0,s,0),h=I(0,1,0),x=I(0,-1,0));const P=[l,r],A=[h,x],w=o+2,p=Math.sqrt(c*c+i*i);if(t)for(let u=o-1;u>=0;u--){const M=u*(2*Math.PI/o),T=I(Math.cos(M)*i,s,Math.sin(M)*i);P.push(T);const C=I(c*Math.cos(M)/p,-i/p,c*Math.sin(M)/p);A.push(C)}else for(let u=0;u<o;u++){const M=u*(2*Math.PI/o),T=I(Math.cos(M)*i,s,Math.sin(M)*i);P.push(T);const C=I(c*Math.cos(M)/p,i/p,c*Math.sin(M)/p);A.push(C)}const m=new Array,d=new Array;if(a){for(let u=3;u<P.length;u++)m.push(1),m.push(u-1),m.push(u),d.push(0),d.push(0),d.push(0);m.push(P.length-1),m.push(2),m.push(1),d.push(0),d.push(0),d.push(0)}if(f){for(let u=3;u<P.length;u++)m.push(u),m.push(u-1),m.push(0),d.push(u),d.push(u-1),d.push(1);m.push(0),m.push(2),m.push(P.length-1),d.push(1),d.push(2),d.push(A.length-1)}const g=U(3*w);for(let u=0;u<w;u++)g[3*u]=P[u][0],g[3*u+1]=P[u][1],g[3*u+2]=P[u][2];const R=U(3*w);for(let u=0;u<w;u++)R[3*u]=A[u][0],R[3*u+1]=A[u][1],R[3*u+2]=A[u][2];return[[y.POSITION,new S(g,m,3,!0)],[y.NORMAL,new S(R,d,3,!0)]]}function sn(e,n,o,t,a,f=!0,s=!0){return new G(e,Fe(n,o,t,a,f,s))}function rn(e,n,o,t,a,f,s){const i=a?Re(a):I(1,0,0),c=f?Re(f):I(0,0,0);s??=!0;const r=j();z(r,i);const l=j();E(l,r,Math.abs(n));const h=j();E(h,l,-.5),F(h,h,c);const x=I(0,1,0);Math.abs(1-be(r,x))<.2&&ae(x,0,0,1);const P=j();$(P,r,x),z(P,P),$(x,P,r);const A=2*t+(s?2:0),w=t+(s?2:0),p=U(3*A),m=U(3*w),d=U(2*A),g=new Array(3*t*(s?4:2)),R=new Array(3*t*(s?4:2));s&&(p[3*(A-2)]=h[0],p[3*(A-2)+1]=h[1],p[3*(A-2)+2]=h[2],d[2*(A-2)]=0,d[2*(A-2)+1]=0,p[3*(A-1)]=p[3*(A-2)]+l[0],p[3*(A-1)+1]=p[3*(A-2)+1]+l[1],p[3*(A-1)+2]=p[3*(A-2)+2]+l[2],d[2*(A-1)]=1,d[2*(A-1)+1]=1,m[3*(w-2)]=-r[0],m[3*(w-2)+1]=-r[1],m[3*(w-2)+2]=-r[2],m[3*(w-1)]=r[0],m[3*(w-1)+1]=r[1],m[3*(w-1)+2]=r[2]);const u=(v,V,b)=>{g[v]=V,R[v]=b};let M=0;const T=j(),C=j();for(let v=0;v<t;v++){const V=v*(2*Math.PI/t);E(T,x,Math.sin(V)),E(C,P,Math.cos(V)),F(T,T,C),m[3*v]=T[0],m[3*v+1]=T[1],m[3*v+2]=T[2],E(T,T,o),F(T,T,h),p[3*v]=T[0],p[3*v+1]=T[1],p[3*v+2]=T[2],d[2*v]=v/t,d[2*v+1]=0,p[3*(v+t)]=p[3*v]+l[0],p[3*(v+t)+1]=p[3*v+1]+l[1],p[3*(v+t)+2]=p[3*v+2]+l[2],d[2*(v+t)]=v/t,d[2*v+1]=1;const b=(v+1)%t;u(M++,v,v),u(M++,v+t,v),u(M++,b,b),u(M++,b,b),u(M++,v+t,v),u(M++,b+t,b)}if(s){for(let v=0;v<t;v++){const V=(v+1)%t;u(M++,A-2,w-2),u(M++,v,w-2),u(M++,V,w-2)}for(let v=0;v<t;v++){const V=(v+1)%t;u(M++,v+t,w-1),u(M++,A-1,w-1),u(M++,V+t,w-1)}}const L=[[y.POSITION,new S(p,g,3,!0)],[y.NORMAL,new S(m,R,3,!0)],[y.UV0,new S(d,g,2,!0)]];return new G(e,L)}function ln(e,n,o,t,a,f){t=t||10,a=a==null||a,te(n.length>1);const s=[[0,0,0]],i=[],c=[];for(let r=0;r<t;r++){i.push([0,-r-1,-(r+1)%t-1]);const l=r/t*2*Math.PI;c.push([Math.cos(l)*o,Math.sin(l)*o])}return Ue(e,c,n,s,i,a,f)}function Ue(e,n,o,t,a,f,s=I(0,0,0)){const i=n.length,c=U(o.length*i*3+(6*t.length||0)),r=U(o.length*i*3+(t?6:0)),l=new Array,h=new Array;let x=0,P=0;const A=N(),w=N(),p=N(),m=N(),d=N(),g=N(),R=N(),u=N(),M=N(),T=N(),C=N(),L=N(),v=N(),V=Pt();ae(M,0,1,0),H(w,o[1],o[0]),z(w,w),f?(F(u,o[0],s),z(p,u)):ae(p,0,0,1),xe(w,p,M,M,d,p,Ge),ee(m,p),ee(L,d);for(let O=0;O<t.length;O++)E(g,d,t[O][0]),E(u,p,t[O][2]),F(g,g,u),F(g,g,o[0]),c[x++]=g[0],c[x++]=g[1],c[x++]=g[2];r[P++]=-w[0],r[P++]=-w[1],r[P++]=-w[2];for(let O=0;O<a.length;O++)l.push(a[O][0]>0?a[O][0]:-a[O][0]-1+t.length),l.push(a[O][1]>0?a[O][1]:-a[O][1]-1+t.length),l.push(a[O][2]>0?a[O][2]:-a[O][2]-1+t.length),h.push(0),h.push(0),h.push(0);let b=t.length;const oe=t.length-1;for(let O=0;O<o.length;O++){let Ae=!1;O>0&&(ee(A,w),O<o.length-1?(H(w,o[O+1],o[O]),z(w,w)):Ae=!0,F(T,A,w),z(T,T),F(C,o[O-1],m),Mt(o[O],T,V),Tt(V,St(C,A),u)?(H(u,u,o[O]),z(p,u),$(d,T,p),z(d,d)):xe(T,m,L,M,d,p,Ge),ee(m,p),ee(L,d)),f&&(F(u,o[O],s),z(v,u));for(let _=0;_<i;_++)if(E(g,d,n[_][0]),E(u,p,n[_][1]),F(g,g,u),z(R,g),r[P++]=R[0],r[P++]=R[1],r[P++]=R[2],F(g,g,o[O]),c[x++]=g[0],c[x++]=g[1],c[x++]=g[2],!Ae){const pe=(_+1)%i;l.push(b+_),l.push(b+i+_),l.push(b+pe),l.push(b+pe),l.push(b+i+_),l.push(b+i+pe);for(let he=0;he<6;he++){const He=l.length-6;h.push(l[He+he]-oe)}}b+=i}const Ee=o[o.length-1];for(let O=0;O<t.length;O++)E(g,d,t[O][0]),E(u,p,t[O][1]),F(g,g,u),F(g,g,Ee),c[x++]=g[0],c[x++]=g[1],c[x++]=g[2];const ue=P/3;r[P++]=w[0],r[P++]=w[1],r[P++]=w[2];const fe=b-i;for(let O=0;O<a.length;O++)l.push(a[O][0]>=0?b+a[O][0]:-a[O][0]-1+fe),l.push(a[O][2]>=0?b+a[O][2]:-a[O][2]-1+fe),l.push(a[O][1]>=0?b+a[O][1]:-a[O][1]-1+fe),h.push(ue),h.push(ue),h.push(ue);const je=[[y.POSITION,new S(c,l,3,!0)],[y.NORMAL,new S(r,h,3,!0)]];return new G(e,je)}function cn(e,n,o,t){te(n.length>1,"createPolylineGeometry(): polyline needs at least 2 points"),te(n[0].length===3,"createPolylineGeometry(): malformed vertex"),te(o==null||o.length===n.length,"createPolylineGeometry: need same number of points and normals"),te(o==null||o[0].length===3,"createPolylineGeometry(): malformed normal");const a=Je(3*n.length),f=new Array(2*(n.length-1));let s=0,i=0;for(let r=0;r<n.length;r++){for(let l=0;l<3;l++)a[s++]=n[r][l];r>0&&(f[i++]=r-1,f[i++]=r)}const c=[[y.POSITION,new S(a,f,3,!0)]];if(o){const r=U(3*o.length);let l=0;for(let h=0;h<n.length;h++)for(let x=0;x<3;x++)r[l++]=o[h][x];c.push([y.NORMAL,new S(r,f,3,!0)])}return t&&c.push([y.COLOR,new S(t,At(t.length/4),4)]),new G(e,c,null,Te.Line)}function un(e,n,o,t,a,f=0){const s=new Array(18),i=[[-o,f,a/2],[t,f,a/2],[0,n+f,a/2],[-o,f,-a/2],[t,f,-a/2],[0,n+f,-a/2]],c=[0,1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5];for(let r=0;r<6;r++)s[3*r]=i[r][0],s[3*r+1]=i[r][1],s[3*r+2]=i[r][2];return new G(e,[[y.POSITION,new S(s,c,3,!0)]])}function fn(e,n){const o=e.getMutableAttribute(y.POSITION).data;for(let t=0;t<o.length;t+=3){const a=o[t],f=o[t+1],s=o[t+2];ae(Q,a,f,s),xt(Q,Q,n),o[t]=Q[0],o[t+1]=Q[1],o[t+2]=Q[2]}}function pn(e,n=e){const o=e.attributes,t=o.get(y.POSITION).data,a=o.get(y.NORMAL).data;if(a){const f=n.getMutableAttribute(y.NORMAL).data;for(let s=0;s<a.length;s+=3){const i=a[s+1];f[s+1]=-a[s+2],f[s+2]=i}}if(t){const f=n.getMutableAttribute(y.POSITION).data;for(let s=0;s<t.length;s+=3){const i=t[s+1];f[s+1]=-t[s+2],f[s+2]=i}}}function ye(e,n,o,t,a){return!(Math.abs(be(n,e))>a)&&($(o,e,n),z(o,o),$(t,o,e),z(t,t),!0)}function xe(e,n,o,t,a,f,s){return ye(e,n,a,f,s)||ye(e,o,a,f,s)||ye(e,t,a,f,s)}const Ge=.99619469809,Q=N();function hn(e){return e.type==="point"}export{Gt as A,Wt as B,Et as D,_t as E,qt as F,xe as M,fn as O,Ut as S,Ht as U,ze as Z,hn as a,ne as b,Fe as c,Ce as d,Rt as e,en as f,rn as g,sn as h,zt as i,Ct as j,an as k,Ne as l,pn as m,Dt as n,Lt as o,tn as p,un as q,It as r,nn as s,bt as t,Nt as u,ln as v,cn as w,Ue as x};
