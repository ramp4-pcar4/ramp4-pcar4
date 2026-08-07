import{S as e}from"./mathUtils-B8Pbjr-0.js";import{n as t}from"./Error-BLNxTZXW.js";import{M as n,n as r}from"./decorators-DjO8WY5-.js";import{a as i,i as a}from"./time-De8ZycDw.js";import{r as o}from"./tslib.es6-CVTII-xV.js";import{x as s}from"./units-2lwcY6Me.js";import{C as c,E as l}from"./vec2-CaA6hqP1.js";import{g as u}from"./screenUtils-CXAx9VgV.js";import{l as d,s as f}from"./vec3f64-AlvO6xQn.js";import{A as p,M as m,P as h,S as g,b as _,c as v,f as y,k as b,n as x,v as S,y as C}from"./vec3-ClQKZZz-.js";import{t as w}from"./mat4f64-CfZSfBjp.js";import{t as ee}from"./projectBuffer-D2SjAhja.js";import{T as te,b as T,x as E}from"./mat4-DSO-PSgk.js";import{o as D}from"./vec2f64-BboENI_i.js";import{l as ne}from"./vec4-B53Z0Xys.js";import{a as O,n as k,o as A,r as re,s as j}from"./vec4f64-DXTW_O4m.js";import{C as ie,b as M,h as N,v as ae}from"./plane-Cbn5HZ0N.js";import{n as P}from"./uuid-RST9JWTL.js";import{t as oe}from"./computeTranslationToOriginAndRotation-C8uOyBgI.js";import{$ as se,J as ce}from"./BufferView-DulaDPJF.js";import{a as F,c as le,n as ue,s as de,t as fe}from"./WebGLLayer-DjvMh_Jj.js";import{A as pe,At as me,Bt as he,C as ge,Ct as _e,E as ve,Et as ye,F as be,H as xe,It as Se,L as Ce,N as we,O as Te,Rt as Ee,T as De,W as Oe,X as ke,a as Ae,c as je,d as Me,f as Ne,g as Pe,h as Fe,i as Ie,j as Le,k as Re,l as ze,lt as Be,m as Ve,o as He,p as Ue,s as We,t as Ge,u as Ke,w as qe,x as Je,yt as Ye}from"./TriangleTechniqueConfiguration-B0Mc-FdP.js";import"./Texture-CsJ9FSgz.js";import{a as Xe,f as Ze,i as Qe,o as $e,p as et,s as tt,u as nt}from"./SceneLighting-CPjMLrqt.js";import{n as rt}from"./Attribute-DHBGPjZN.js";import{c as it,d as at,f as ot,o as st,s as ct}from"./lineSegment-BQ3dwycm.js";import{h as lt,i as ut,s as dt}from"./enums-DbMIex2k.js";import{i as ft,n as pt,o as mt}from"./renderState-DPK327gI.js";import{c as ht,d as I,f as L,i as gt,l as R,o as z}from"./oitResolution.glsl-GKlYUQFU.js";import{t as _t}from"./ShaderBuilder-CSrAKPgp.js";import{c as vt,d as yt,l as bt,m as xt,p as St}from"./Emissions.glsl-CZ7LcZnm.js";import{i as Ct,n as wt}from"./InterleavedLayout-B84f2gUG.js";function Tt(e,t,n,r,i,a,o,s,c,l,u){let d=zt[u.mode],f,p,m=0;if(ee(e,t,n,r,c.spatialReference,i,s))return d?.requiresAlignment(u)?(m=d.applyElevationAlignmentBuffer(r,i,a,o,s,c,l,u),f=a,p=o):(f=r,p=i),ee(f,c.spatialReference,p,a,l.spatialReference,o,s)?m:void 0}function Et(e,t,n,r,i){let a=(le(e)?e.z:de(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case`on-the-ground`:{let n=F(t,e,`ground`)??0;i.verticalDistanceToGround=0,i.sampledElevation=n,i.z=n;return}case`relative-to-ground`:{let o=F(t,e,`ground`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`relative-to-scene`:{let o=F(t,e,`scene`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`absolute-height`:{let o=n.geometryZWithOffset(a,r),s=F(t,e,`ground`)??0;i.verticalDistanceToGround=o-s,i.sampledElevation=s,i.z=o;return}default:i.z=0;return}}function Dt(e,t,n,r){return Et(e,t,n,r,B),B.z}function Ot(e,t,n){return t===`on-the-ground`&&n===`on-the-ground`?e.staysOnTheGround:t===n||t!==`on-the-ground`&&n!==`on-the-ground`?t==null||n==null?e.definedChanged:1:e.onTheGroundChanged}function kt(e){return e===`relative-to-ground`||e===`relative-to-scene`}function At(e){return e!==`absolute-height`}function jt(e,t,n,r,i){Et(t,n,i,r,B),Mt(e,B.verticalDistanceToGround);let a=B.sampledElevation,o=te(Bt,e.transformation);return Vt[0]=t.x,Vt[1]=t.y,Vt[2]=B.z,oe(t.spatialReference,Vt,o,r.spatialReference)?e.transformation=o:console.warn(`Could not locate symbol object properly, it might be misplaced`),a}function Mt(e,t){for(let n=0;n<e.geometries.length;++n){let r=e.geometries[n].getMutableAttribute(`groundDistance`);r&&r.data[0]!==t&&(r.data[0]=t,e.geometryVertexAttributeUpdated(e.geometries[n],`groundDistance`))}}function Nt(e,t,n,r,i,a){let o=0,s=a.spatialReference;t*=3,r*=3;for(let c=0;c<i;++c){let i=e[t],c=e[t+1],l=e[t+2],u=a.getElevation(i,c,l,s,`ground`)??0;o+=u,n[r]=i,n[r+1]=c,n[r+2]=u,t+=3,r+=3}return o/i}function Pt(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`ground`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function Ft(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`scene`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function It(e){let t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return t!==0||n!=null}function Lt(e,t,n,r,i,a,o,s){let c=s.calculateOffsetRenderUnits(o),l=s.featureExpressionInfoContext;t*=3,r*=3;for(let a=0;a<i;++a){let i=e[t],a=e[t+1],o=e[t+2];n[r]=i,n[r+1]=a,n[r+2]=l==null?o+c:c,t+=3,r+=3}return 0}var Rt=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}},zt={"absolute-height":{applyElevationAlignmentBuffer:Lt,requiresAlignment:It},"on-the-ground":{applyElevationAlignmentBuffer:Nt,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Pt,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:Ft,requiresAlignment:()=>!0}},Bt=w(),B=new Rt,Vt=f(),Ht=class{constructor(e,t){this.vec3=e,this.id=t}};function Ut(e,t,n,r){return new Ht(d(e,t,n),r)}var Wt={stableRendering:!1},Gt={rootOrigin:null},V={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},Kt={dash:V.dash,"dash-dot":[...V.dash,...V.dot],dot:V.dot,"long-dash":V[`long-dash`],"long-dash-dot":[...V[`long-dash`],...V.dot],"long-dash-dot-dot":[...V[`long-dash`],...V.dot,...V.dot],none:null,"short-dash":V[`short-dash`],"short-dash-dot":[...V[`short-dash`],...V[`short-dot`]],"short-dash-dot-dot":[...V[`short-dash`],...V[`short-dot`],...V[`short-dot`]],"short-dot":V[`short-dot`],solid:null},qt=8,Jt=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=P()}};function Yt(e){return e!=null&&`image`in e}function Xt(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function Zt(e){return{pattern:[e,e],pixelRatio:2}}function Qt(e){switch(e?.type){case`style`:return $t(e.style);case`image`:return new Jt(e.image,e.width,e.length);case void 0:case null:return null}return null}function $t(e){return e==null?null:Xt(Kt[e],qt)}var en=8;function tn(e,t){let{vertex:n,attributes:r}=e;n.uniforms.add(new R(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:i,spherical:a}=t;i?(e.include(Ze,t),et(n),De(n,t),n.uniforms.add(new Re(`inverseViewMatrix`,(e,t)=>T(nn,E(nn,t.camera.viewMatrix,e.origin)))),n.code.add(L`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?L`normalize(worldPos + localOrigin)`:L`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(L`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new gt(`vvSizeMinSize`,e=>e.vvSize.minSize),new gt(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new gt(`vvSizeOffset`,e=>e.vvSize.offset),new gt(`vvSizeFactor`,e=>e.vvSize.factor),new gt(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(L`
    float getSize(${I(i,`vec3 pos`)}) {
      float size = isnan(sizeFeatureAttribute)
        ? vvSizeFallback.x
        : intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;

      return ${I(i,`applyLineSizeScreenSizePerspective(size, pos)`,`size`)};
    }
    `)):(r.add(`size`,`float`),n.code.add(L`
    float getSize(${I(i,`vec3 pos`)}) {
      float fullSize = intrinsicWidth * size;
      return ${I(i,`applyLineSizeScreenSizePerspective(fullSize, pos)`,`fullSize`)};
    }
    `)),t.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new be(`vvOpacityValues`,en,e=>e.vvOpacity.values),new be(`vvOpacityOpacities`,en,e=>e.vvOpacity.opacityValues),new R(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(L`
    float interpolateOpacity(float value) {
      if (value <= vvOpacityValues[0]) {
        return vvOpacityOpacities[0];
      }

      for (int i = 1; i < vvOpacityNumber; ++i) {
        if (vvOpacityValues[i] >= value) {
          float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
          return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
        }
      }

      return vvOpacityOpacities[vvOpacityNumber - 1];
    }

    vec4 applyOpacity(vec4 color) {
      if (isnan(opacityFeatureAttribute)) {
        // If there is a color vv then it will already have taken care of applying the fallback
        return ${I(t.hasVVColor,`color`,`vec4(color.rgb, vvOpacityFallback)`)};
      }

      return vec4(color.rgb, interpolateOpacity(opacityFeatureAttribute));
    }
    `)):n.code.add(L`vec4 applyOpacity(vec4 color) {
return color;
}`),t.hasVVColor?(e.include(we,t),r.add(`colorFeatureAttribute`,`float`),n.code.add(L`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),n.code.add(L`vec4 getColor() {
return applyOpacity(color);
}`))}var nn=w();function rn(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function an(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function on(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function sn(e){if(e==null)return 1;let t=on(e);return Math.floor(t.reduce((e,t)=>e+t))}function cn(e){return e==null?k:e.length===4?e:ne(ln,e[0],e[1],e[2],1)}var ln=O();function un(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(L`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(De(r,t),r.uniforms.add(new Le(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(L`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(L`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${L.float(fn)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),Te(r),r.code.add(L`
    vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {

      // First check if the segment is long enough to support fully screen space patterns.
      // Force sparse mode for segments that are very large in screen space even if it is not allowed,
      // to avoid imprecision from calculating with large floats.
      if (segmentLengthPseudoScreen >= ${n?`patternLength`:`1e4`}) {
        // Round the screen length to get an integer number of pattern repetitions (minimum 1).
        float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
        float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
        float segmentLengthScreenRounded = flooredRepetitions * patternLength;

        float stretch = repetitions / flooredRepetitions;

        // We need to impose a lower bound on the stretch factor to prevent the dots from merging together when there is only 1 repetition.
        // 0.75 is the lowest possible stretch value for flooredRepetitions > 1, so it makes sense as lower bound.
        vStipplePatternStretch = max(0.75, stretch);

        return vec2(0.0, segmentLengthScreenRounded);
      }
      return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
    }
  `),i.uniforms.add(new ht(`stipplePatternTexture`,e=>e.stippleTexture),new R(`stipplePatternPixelSizeInv`,e=>1/dn(e))),t.stippleOffColorEnabled&&i.uniforms.add(new Ce(`stippleOffColor`,e=>cn(e.stippleOffColor))),e.include(an),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(nt),i.code.add(L`vec4 getStippleColor(out bool isClamped) {
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = vStippleDistance * stipplePatternPixelSizeInv;
float v = vStippleV == -1.0 ? 0.5 : vStippleV;
return texture(stipplePatternTexture, vec2(u, v));
}
vec4 getStippleColor() {
bool ignored;
return getStippleColor(ignored);
}
float getStippleSDF() {
vec4 color = getStippleColor();
return color.a == 0.0 ? -0.5 : 0.5;
}
float getStippleAlpha(float lineWidth) {
return getStippleColor().a;
}
vec4 blendStipple(vec4 color, float stippleAlpha) {
vec4 stippleColor = getStippleColor();
int mixMode  = 1;
vec3 col = mixExternalColor(color.rgb, vec3(1.0), stippleColor.rgb, mixMode);
float opacity = mixExternalOpacity(color.a, 1.0, stippleColor.a, mixMode);
return vec4(col, opacity);
}`)):i.code.add(L`
    float getStippleSDF(out bool isClamped) {
      float stippleDistanceClamped = noPerspectiveRead(clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y));
      float lineSizeInv = noPerspectiveRead(vLineSizeInv);

      vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
      isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;

      float u = stippleDistanceClamped * stipplePatternPixelSizeInv * lineSizeInv;
      u = fract(u);

      float sdf = texture(stipplePatternTexture, vec2(u, 0.5)).r;

      return (sdf - 0.5) * vStipplePatternStretch + 0.5;
    }

    float getStippleSDF() {
      bool ignored;
      return getStippleSDF(ignored);
    }

    float getStippleAlpha(float lineWidth) {
      bool isClamped;
      float stippleSDF = getStippleSDF(isClamped);
      float antiAliasedResult = clamp(stippleSDF * lineWidth + 0.5, 0.0, 1.0);
      return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${t.stippleOffColorEnabled?`mix(color, stippleOffColor, stippleAlpha)`:`vec4(color.rgb, color.a * stippleAlpha)`};
    }
  `),i.code.add(L`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${I(!t.stippleOffColorEnabled,`if (stippleAlpha < threshold) { discard; }`)}
    }
  `)}function dn(e){let t=e.stipplePattern;return Yt(t)?t.length:t?sn(t)/t.pixelRatio:1}var fn=.4,H=.5,pn=re(H/2,H/2,1-H/2,1-H/2);function mn(e){return e===`cross`||e===`x`}function hn(e,t=128,n=t*H,r=0){let{data:i,parameters:a}=gn(e,t,n,r);return new tt(i,a)}function gn(e,t=128,n=t*H,r=0){return{data:_n(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:dt.FLOAT,pixelFormat:6403,internalFormat:ut.R16F,reloadable:!0}}}function _n(e,t=128,n=t*H,r=0){switch(e){case`circle`:default:return vn(t,n);case`square`:return yn(t,n);case`cross`:return xn(t,n,r);case`x`:return Sn(t,n,r);case`kite`:return bn(t,n);case`triangle`:return Cn(t,n);case`arrow`:return wn(t,n)}}function vn(e,t){let n=e/2-.5;return kn(e,Dn(n,n,t/2))}function yn(e,t){return Tn(e,t,!1)}function bn(e,t){return Tn(e,t,!0)}function xn(e,t,n=0){return En(e,t,!1,n)}function Sn(e,t,n=0){return En(e,t,!0,n)}function Cn(e,t){return kn(e,On(e/2,t,t/2))}function wn(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=Dn(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=On(i,n,r);return kn(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function Tn(e,t,n){return n&&(t/=Math.SQRT2),kn(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function En(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return kn(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function Dn(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function On(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function kn(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var An=.25;function jn(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;Te(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(L`
  float getLineWidth(${I(r,`vec3 pos`)}) {
     return max(getSize(${I(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new Le(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(L`
  bool areWorldMarkersHidden(vec3 pos, vec3 other) {
    vec3 midPoint = mix(pos, other, 0.5);
    float distanceToCamera = length(midPoint);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    float worldMarkerSize = getScreenMarkerSize(getLineWidth(${I(r,`pos`)})) * screenToWorldRatio;
    float segmentLen = length(pos - other);
    return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
  }

  float getWorldMarkerSize(vec3 pos) {
    float distanceToCamera = length(pos);
    float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
    return getScreenMarkerSize(getLineWidth(${I(r,`pos`)})) * screenToWorldRatio;
  }
  `))}var Mn=L`vec4(0.0, 0.0, 2.0, 1.0)`,Nn=a(1),Pn=a(1);function Fn(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:a,vertex:o,fragment:s}=e;i.add(`timeStamps`,`vec4`),a.add(`vTimeStamp`,`float`),a.add(`vFirstTime`,`float`),a.add(`vLastTime`,`float`),a.add(`vTransitionType`,`float`),o.main.add(L`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&s.constants.add(`decayRate`,`float`,2.3),s.code.add(L`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${In(r)}
    }`),s.uniforms.add(new R(`timeElapsed`,e=>e.timeElapsed),new R(`trailLength`,e=>e.trailLength),new R(`speed`,e=>e.animationSpeed),new Qe(`startEndTime`,e=>l(Ln,e.startTime,e.endTime))),s.constants.add(`fadeInTime`,`float`,Pn),s.constants.add(`fadeOutTime`,`float`,Nn),s.constants.add(`incomingTransition`,`int`,0),s.constants.add(`outgoingTransition`,`int`,2),s.code.add(L`float fadeIn(float x) {
return smoothstep(0.0, fadeInTime, x);
}
float fadeOut(float x) {
return isinf(fadeOutTime) ? 1.0 : smoothstep(fadeOutTime, 0.0, x);
}
void updateAlphaIf(inout float alpha, bool condition, float newAlpha) {
alpha = condition ? min(alpha, newAlpha) : alpha;
}
vec4 animate(vec4 color) {
float startTime = startEndTime[0];
float endTime = startEndTime[1];
float totalTime = vLastTime - vFirstTime;
float actualFadeOutTime = min(fadeOutTime * speed, trailLength);
float longStreamlineThreshold = (fadeInTime + 1.0) * speed + actualFadeOutTime;
bool longStreamline = totalTime > longStreamlineThreshold;
float totalTimeWithFadeOut = longStreamline && actualFadeOutTime != trailLength ? totalTime : totalTime + actualFadeOutTime;
float fadeOutStartTime = longStreamline ? totalTime - actualFadeOutTime : totalTime;
float originTime =  -vFirstTime;
float actualEndTime = int(vTransitionType) == outgoingTransition ? min(endTime, startTime + vLastTime / speed) : endTime;
vec4 animatedColor = color;
if (speed == 0.0) {
float alpha = getTrailOpacity((totalTimeWithFadeOut - (vTimeStamp - vFirstTime)) / trailLength);
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
animatedColor.a *= alpha;
return animatedColor;
}
float relativeStartTime = mod(startTime, totalTimeWithFadeOut);
float shiftedTimeElapsed = timeElapsed - relativeStartTime + originTime;
float headRelativeToFirst = mod(shiftedTimeElapsed * speed, totalTimeWithFadeOut);
float vRelativeToHead = headRelativeToFirst - originTime - vTimeStamp;
float vAbsoluteTime = timeElapsed - vRelativeToHead / speed;
if (startTime > timeElapsed) {
return vec4(0.0);
}
float alpha = getTrailOpacity(vRelativeToHead / trailLength);
updateAlphaIf(alpha, true, fadeIn(timeElapsed - startTime));
updateAlphaIf(alpha, !isinf(actualEndTime), fadeOut(timeElapsed - actualEndTime));
updateAlphaIf(alpha, int(vTransitionType) != incomingTransition, step(startTime, vAbsoluteTime));
updateAlphaIf(alpha, headRelativeToFirst > fadeOutStartTime, fadeOut((headRelativeToFirst - fadeOutStartTime) / speed));
alpha *= fadeIn(vTimeStamp - vFirstTime);
animatedColor.a *= alpha;
return animatedColor;
}`)}function In(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Ln=D(),Rn=1;function zn(e){let t=new _t,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:h,hasScreenSizePerspective:g,worldSizedImagePattern:_}=e;i.inputs.add(`position`,()=>`position`),a.include($e),t.include(tn,e),t.include(un,e),t.include(xe,e),t.include(Fn,e);let v=o&&!s;v&&(i.uniforms.add(new R(`markerScale`,e=>e.markerScale)),t.include(jn,{space:2,hasScreenSizePerspective:g})),ve(i,e),i.uniforms.add(new pe(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new ge(`nearFar`,e=>e.camera.nearFar),new R(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new Xe(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),i.constants.add(`EPS`,`float`,.001),i.constants.add(`NUM_JOIN_SUBDIVISIONS`,`float`,e.numJoinSubdivisions),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`),u||(r.add(`vIsInsideJoin`,`int`),r.add(`vStretchFactor`,`float`),r.add(`vJoinCenterLineSDFs`,`vec2`),r.add(`vSubdivisionFactor`,`float`));let y=u;y&&r.add(`vLineSizeInv`,`float`);let b=l===2,x=u&&b,S=d||x;S&&r.add(`vLineDistanceNorm`,`float`),b&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(L`vec3 perpendicular(vec3 v) {
return vec3(v.y, -v.x, 0.0);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec3 rotateZ(vec3 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return vec3(m * v.xy, v.z);
}`),i.code.add(L`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
posNdc.z /= posNdc.w;
return posNdc;
}`),i.code.add(L`void clip(
inout vec4 pos,
inout vec4 prev,
inout vec4 next,
bool isStartVertex
) {
float vnp = nearFar[0] * 0.99;
if (pos.z > -nearFar[0]) {
if (!isStartVertex) {
if (prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if (next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
}`),Te(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(L`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Mn};
    }
    else {
      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);

      bool isJoin = abs(lineParameters.y) < 3.0;
  `),v&&i.main.add(L`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos.xyz, other.xyz);
if (!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos.xyz) * 0.5;
}`),t.include(rn),i.main.add(L`
      clip(pos, prev, next, isStartVertex);

      vec3 clippedPos = pos.xyz;
      vec3 clippedCenter = mix(pos.xyz, isStartVertex ? next.xyz : prev.xyz, 0.5);

      pos = projectAndScale(pos);
      next = projectAndScale(next);
      prev = projectAndScale(prev);

      vec3 left = (pos.xyz - prev.xyz);
      vec3 right = (next.xyz - pos.xyz);

      float leftLen = length(left);
      float rightLen = length(right);

      float lineSize = getSize(${I(g,`clippedPos`)});
      ${I(u&&g,`float patternLineSize = getSize(clippedCenter);`)}
      ${I(u&&!g,`float patternLineSize = lineSize;`)}

      ${I(_,L`
          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio * worldToScreenRatio;
          if (lineWidth < 1.0) {
            coverage = lineWidth;
            lineWidth = 1.0;
          }
        `,L`
          if (lineSize < 1.0) {
            coverage = lineSize; // convert sub-pixel coverage to alpha
            lineSize = 1.0;
          }

          lineSize += aaWidth;
          float lineWidth = lineSize * pixelRatio;
        `)}

      vLineWidth = noPerspectiveWrite(lineWidth, pos.w);
      ${y?L`vLineSizeInv = noPerspectiveWrite(1.0 / lineSize, pos.w);`:``}
  `),(u||b)&&i.main.add(L`
      float isEndVertex = float(!isStartVertex);
      vec3 segmentOrigin = mix(pos.xyz, prev.xyz, isEndVertex);
      vec3 segment = mix(right, left, isEndVertex);
      ${b?L`vec3 segmentEnd = mix(next.xyz, pos.xyz, isEndVertex);`:``}
    `),i.main.add(L`left = (leftLen > EPS) ? left/leftLen : vec3(0.0, 0.0, 0.0);
right = (rightLen > EPS) ? right/rightLen : vec3(0.0, 0.0, 0.0);
vec3 segmentDirection = isStartVertex ? right : left;
vec3 capDisplacementDir = vec3(0.0, 0.0, 0.0);
vec3 joinDisplacementDir = vec3(0.0, 0.0, 0.0);
float displacementLen = lineWidth;
float miterDisplacementLen = lineWidth;
float innerDisplacementLen = lineWidth;`),u||i.main.add(L`vIsInsideJoin = 0;
vStretchFactor = 1.0;
vSubdivisionFactor = 0.0;
vJoinCenterLineSDFs = vec2(LARGE_HALF_FLOAT);`),i.main.add(L`float subdivisionFactor = 0.0;
bool isOutside = false;
if (isJoin) {
isOutside = (left.x * right.y - left.y * right.x) * lineParameters.y > 0.0;
vec3 joinDirection = normalize(left + right);
joinDisplacementDir = perpendicular(joinDirection);
if (leftLen > EPS && rightLen > EPS) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
miterDisplacementLen = displacementLen;
innerDisplacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
if (!isOutside) {
displacementLen = innerDisplacementLen;
}
}
subdivisionFactor = lineParameters.x;`),u||i.main.add(L`if(subdivisionFactor > 0.0) {
vIsInsideJoin = 1;
}
vSubdivisionFactor = isOutside ? subdivisionFactor : 0.5;
if (miterDisplacementLen > miterLimit * lineWidth) {
vec2 leftScreenDir = left.xy;
vec2 rightScreenDir = right.xy;
float leftScreenLen = length(leftScreenDir);
float rightScreenLen = length(rightScreenDir);
if (leftScreenLen > EPS && rightScreenLen > EPS) {
leftScreenDir /= leftScreenLen;
rightScreenDir /= rightScreenLen;
float theta = acos(clamp(dot(leftScreenDir, rightScreenDir), -1.0, 1.0));
float subdividedTriangleHeight = (innerDisplacementLen + lineWidth) * cos(theta / (2.0 + 2.0 * NUM_JOIN_SUBDIVISIONS));
float bevelTriangleHeight = innerDisplacementLen + lineWidth * cos(theta * 0.5);
float triangleHeight = NUM_JOIN_SUBDIVISIONS > 0.0 ? subdividedTriangleHeight : bevelTriangleHeight;
vStretchFactor = noPerspectiveWrite(max(triangleHeight / (2.0 * lineWidth), 1.0), pos.w);
}
}`),i.main.add(L`if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),f?i.main.add(L`
        vec3 startDir = leftLen < EPS ? right : left;
        startDir = perpendicular(startDir);

        vec3 endDir = rightLen < EPS ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${u?L`min(1.0, subdivisionFactor * ((NUM_JOIN_SUBDIVISIONS + 1.0) / NUM_JOIN_SUBDIVISIONS))`:L`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir.xy, endDir.xy), -1.0, 1.0));
        joinDisplacementDir = rotateZ(startDir, -sign(lineParameters.y) * factor * rotationAngle);
      `):i.main.add(L`
        vec3 startDir = perpendicular(leftLen < EPS ? right : left);
        vec3 endDir = perpendicular(rightLen < EPS ? left : right);

        ${I(u,L`joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? endDir : startDir;`,L`joinDisplacementDir = mix(startDir, endDir, subdivisionFactor);`)}
  `);let C=l!==0;return i.main.add(L`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${C?L`capDisplacementDir = vec3((isStartVertex ? -right : left).xy, 0.0);`:``}
    }
  `),i.main.add(L`
    // Displacement (in pixels) caused by join/or cap
    vec2 dposXY = (joinDisplacementDir.xy * sign(lineParameters.y) + capDisplacementDir.xy) * displacementLen;

    /**
     * To prevent z-fighting between layers, we also adjust the z value.
     * We want to ensure that the orientation of the final triangles is the same, regardless of the line width.
     * To do so, the below formula projects the xy displacement onto the original segment direction
     * to find the z-offset necessary so the triangle orientation is independent of the width.
     */
    float dposZ = dot(dposXY, segmentDirection.xy) / dot(segmentDirection.xy, segmentDirection.xy) * segmentDirection.z;
    vec3 dpos = vec3(dposXY, dposZ);

    float lineDistNorm = noPerspectiveWrite(sign(lineParameters.y), pos.w);

    vLineDistance = lineWidth * lineDistNorm;
    ${S?L`vLineDistanceNorm = lineDistNorm;`:``}

    pos.xyz += dpos;
  `),u||i.main.add(L`if (isJoin) {
vec2 joinCenterToVertex = dposXY;
vec2 leftCenterlineDir = left.xy;
vec2 rightCenterlineDir = right.xy;
float leftCenterlineLen = length(leftCenterlineDir);
float rightCenterlineLen = length(rightCenterlineDir);
leftCenterlineDir = leftCenterlineLen > EPS ? leftCenterlineDir / leftCenterlineLen : vec2(1.0, 0.0);
rightCenterlineDir = rightCenterlineLen > EPS ? rightCenterlineDir / rightCenterlineLen : leftCenterlineDir;
vJoinCenterLineSDFs = noPerspectiveWrite(
vec2(
dot(vec2(rightCenterlineDir.y, -rightCenterlineDir.x), joinCenterToVertex),
dot(vec2(leftCenterlineDir.y, -leftCenterlineDir.x), joinCenterToVertex)
),
pos.w
);
}`),b&&i.main.add(L`vec2 segmentDir = normalize(segment.xy);
vSegmentSDF = noPerspectiveWrite((isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin.xy, segmentDir)), pos.w);
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new Le(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(L`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(L`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(L`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(L`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new R(`stipplePatternPixelSize`,e=>dn(e))),i.main.add(L`
      float patternLength = patternLineSize * stipplePatternPixelSize;

      ${I(_,L`
          float uu = mix(u0, u0 - segmentLengthRender, isEndVertex);
          vStippleDistanceLimits = vec2(uu, uu + segmentLengthRender);
          vStipplePatternStretch = 1.0;

          // The v-coordinate used in case of an image pattern.
          bool isLeft = sign(lineParameters.y) < 0.0;
          vStippleV = isLeft ? 0.0 : 1.0;
        `,L`
          // Compute the coordinates at both start and end of the line segment, because we need both to clamp to in the
          // fragment shader
          vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
        `)}

      vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);

      // Adjust the coordinate to the displaced position (the pattern is shortened/overextended on the in/outside of
      // joins)
      if (segmentLengthScreenDouble >= EPS) {
        // Project the actual vertex position onto the line segment. Note that the resulting factor is within [0..1]
        // at the original vertex positions, and slightly outside of that range at the displaced positions
        vec3 stippleDisplacement = pos.xyz - segmentOrigin;
        float stippleDisplacementFactor = dot(segment.xy, stippleDisplacement.xy) / (segmentLengthScreenDouble * segmentLengthScreenDouble);

        // Apply this offset to the actual vertex coordinate (can be screen or pseudo-screen space)
        vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
      }

      // Cancel out perspective correct interpolation because we want this length the really represent the screen
      // distance
      vStippleDistanceLimits = noPerspectiveWrite(vStippleDistanceLimits, pos.w);
      vStippleDistance = noPerspectiveWrite(vStippleDistance, pos.w);

      // Disable stipple distance limits on caps
      vStippleDistanceLimits = isJoin ?
                                 vStippleDistanceLimits :
                                 isStartVertex ?
                                  vec2(-1e34, vStippleDistanceLimits.y) :
                                  vec2(vStippleDistanceLimits.x, 1e34);
    `)),i.main.add(L`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;
      pos.z = pos.z * pos.w;

      vColor = getColor();
      vColor.a = noPerspectiveWrite(vColor.a * coverage, pos.w);

      ${p&&!s?`pos.z -= EPS * pos.w;`:``}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),t.fragment.include(Oe,e),t.include(Pe,e),a.include(qe),a.main.add(L`discardBySlice(vpos);`),t.include(an),a.include(Je),a.main.add(L`
    float lineWidth = noPerspectiveRead(vLineWidth);
    float lineDistance = noPerspectiveRead(vLineDistance);
    ${I(S,L`float lineDistanceNorm = noPerspectiveRead(vLineDistanceNorm);`)}
  `),p?a.main.add(L`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(b&&a.main.add(L`float sdf = noPerspectiveRead(min(vSegmentSDF, vReverseSegmentSDF));
vec2 fragmentPosition = vec2(min(sdf, 0.0), lineDistance);
float fragmentRadius = length(fragmentPosition);
float fragmentCapSDF = (fragmentRadius - lineWidth) * 0.5;
float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);
if (capCoverage < alphaCutoff) {
discard;
}`),x?a.main.add(L`vec2 stipplePosition = vec2(
min(getStippleSDF() * 2.0 - 1.0, 0.0),
lineDistanceNorm
);
float stippleRadius = length(stipplePosition * lineWidth);
float stippleCapSDF = (stippleRadius - lineWidth) * 0.5;
float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):a.main.add(L`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==11&&a.main.add(L`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),t.include(an),a.uniforms.add(new Ce(`intrinsicColor`,e=>e.color)).main.add(L`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new Ce(`innerColor`,e=>e.innerColor??e.color),new R(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(L`float distToInner = abs(lineDistance) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`),a.main.add(L`vec4 finalColor = blendStipple(color, stippleAlpha);`),d&&(a.uniforms.add(new R(`falloff`,e=>e.falloff)),a.main.add(L`finalColor.a *= pow(max(0.0, 1.0 - abs(lineDistanceNorm)), falloff);`)),u||a.main.add(L`float stretchFactor = vIsInsideJoin == 1 ? noPerspectiveRead(vStretchFactor) : 1.0;
float featherWidth = 2.0;
float featherStartDistance = max(lineWidth - featherWidth / stretchFactor, 0.0);
float straightFeatherStartDistance = max(lineWidth - featherWidth, 0.0);
float value = abs(lineDistance);
float feather = (value - featherStartDistance) / (lineWidth - featherStartDistance);
vec2 joinCenterSDFs = noPerspectiveRead(vJoinCenterLineSDFs);
float joinCenterDistance = abs(vSubdivisionFactor > 0.5 ? joinCenterSDFs.x : joinCenterSDFs.y);
float straightFeather = (joinCenterDistance - straightFeatherStartDistance) / (lineWidth - straightFeatherStartDistance);
feather = vIsInsideJoin == 1 ? max(feather, straightFeather) : feather;
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`),h&&a.main.add(L`
        finalColor = animate(finalColor);

        ${I(c!==11,L`
            if (finalColor.a <= alphaCutoff) {
              discard;
            }`)}
      `)),a.main.add(L`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var Bn=Object.freeze(Object.defineProperty({__proto__:null,build:zn,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}));function Vn(e){let t=wt().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return e.hasVVColor?t.f32(`colorFeatureAttribute`):t.vec4u8(`color`,{glNormalized:!0}),e.hasVVSize?t.f32(`sizeFeatureAttribute`):t.f32(`size`),e.hasVVOpacity&&t.f32(`opacityFeatureAttribute`),he()&&t.vec4u8(`olidColor`),e.hasAnimation&&t.vec4f16(`timeStamps`),t}var Hn=class extends Se{constructor(e,t){super(e,t,Ct(Vn(t))),this.shader=new Ee(Bn,()=>import(`./RibbonLine.glsl-DCc0wLsf.js`)),this.ignoreUnused=!0,this.primitiveType=t.wireframe?lt.LINES:lt.TRIANGLE_STRIP}_makePipelineState(e,t){let{output:n,hasOccludees:r}=e;return pt({blending:Fe(n,!1,e.emissionDimmingPass),depthTest:Ve(n),depthWrite:Ue(e),colorWrite:mt,stencilWrite:r?Ke:null,stencilTest:r?t?Ne:Ae:null,polygonOffset:Ie(e)})}initializePipeline(e){if(e.occluder){let{hasOccludees:t}=e;this._occluderPipelineTransparent=pt({blending:ft,polygonOffset:Ie(e),depthTest:je,depthWrite:null,colorWrite:mt,stencilWrite:null,stencilTest:t?ze:null}),this._occluderPipelineOpaque=pt({blending:ft,polygonOffset:Ie(e),depthTest:t?je:Me,depthWrite:null,colorWrite:mt,stencilWrite:t?He:null,stencilTest:t?We:null}),this._occluderPipelineMaskWrite=pt({blending:null,polygonOffset:Ie(e),depthTest:Me,depthWrite:null,colorWrite:null,stencilWrite:t?Ke:null,stencilTest:t?Ne:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t,n){if(n)return this._occludeePipeline;switch(e.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(e,t,n);case 10:return this._occluderPipelineOpaque??super.getPipeline(e,t,n);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e,t,n)}}};Hn=o([r(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],Hn);var U=class extends Ge{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.polygonOffsetIndex=0,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.numJoinSubdivisions=1,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};o([z({count:3})],U.prototype,`capType`,void 0),o([z({count:8})],U.prototype,`emissionSource`,void 0),o([z({count:4})],U.prototype,`animation`,void 0),o([z({count:16})],U.prototype,`polygonOffsetIndex`,void 0),o([z()],U.prototype,`writeDepth`,void 0),o([z()],U.prototype,`draped`,void 0),o([z()],U.prototype,`stippleEnabled`,void 0),o([z()],U.prototype,`stippleOffColorEnabled`,void 0),o([z()],U.prototype,`stipplePreferContinuous`,void 0),o([z({count:8})],U.prototype,`numJoinSubdivisions`,void 0),o([z()],U.prototype,`roundJoins`,void 0),o([z()],U.prototype,`applyMarkerOffset`,void 0),o([z()],U.prototype,`hasVVSize`,void 0),o([z()],U.prototype,`hasVVColor`,void 0),o([z()],U.prototype,`hasVVOpacity`,void 0),o([z()],U.prototype,`falloffEnabled`,void 0),o([z()],U.prototype,`innerColorEnabled`,void 0),o([z()],U.prototype,`hasOccludees`,void 0),o([z()],U.prototype,`occluder`,void 0),o([z()],U.prototype,`wireframe`,void 0),o([z()],U.prototype,`discardInvisibleFragments`,void 0),o([z()],U.prototype,`hasScreenSizePerspective`,void 0),o([z()],U.prototype,`worldSizedImagePattern`,void 0);var Un=class extends Ye{constructor(e,t){super(e,Gn),this.produces=new Map([[2,e=>bt(e)||xt(e)&&this.parameters.renderOccluded===8],[3,e=>yt(e)],[10,e=>vt(e)&&this.parameters.renderOccluded===8],[11,e=>vt(e)&&this.parameters.renderOccluded===8],[4,e=>xt(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,e=>xt(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,e=>St(e)]]),this._configuration=new U(t)}updateConfiguration(e){super.updateConfiguration(e);let t=e.slot===18,n=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,r=n&&t&&this.parameters.isImagePattern();this._configuration.draped=t,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=n,this._configuration.stippleOffColorEnabled=n&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=n&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=Xn(this.parameters.join,n),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Yn(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!r,this._configuration.worldSizedImagePattern=r}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:t,screenToWorldRatio:n},r,i,a,o){if(!r.options.selectionMode)return;let s=t.get(`size`),c=this.parameters.width;if(this.parameters.vvSize){let n=t.get(`sizeFeatureAttribute`).data[0];Number.isNaN(n)?c*=this.parameters.vvSize.fallback[0]:c*=e(this.parameters.vvSize.offset[0]+n*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else s&&(c*=s.data[0]);let l=i[0],u=i[1],d=(c/2+4)*n,f=Number.MAX_VALUE,p=0,m=t.get(`position`).data,h=Jn(this.parameters,t)?m.length-2:m.length-5;for(let t=0;t<h;t+=3){let n=m[t],r=m[t+1],i=(t+3)%m.length,a=l-n,o=u-r,s=m[i]-n,c=m[i+1]-r,d=e((s*a+c*o)/(s*s+c*c),0,1),h=s*d-a,g=c*d-o,_=h*h+g*g;_<f&&(f=_,p=t/3)}f<d*d&&a(o.distance,o.normal,p)}intersect(n,r,i,a,o,s){let{options:l,camera:u,rayBegin:d,rayEnd:f}=i;if(!l.selectionMode||!n.visible||!u)return;if(!ce(r))return void t.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let v=n.attributes,y=v.get(`position`).data,S=this.parameters.width;if(this.parameters.vvSize){let t=v.get(`sizeFeatureAttribute`).data[0];Number.isNaN(t)||(S*=e(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else v.has(`size`)&&(S*=v.get(`size`).data[0]);let w=tr;c(w,i.point);let ee=S*u.pixelRatio,te=4*u.pixelRatio,T=ee/2+te;m(cr[0],w[0]-T,w[1]+T,0),m(cr[1],w[0]+T,w[1]+T,0),m(cr[2],w[0]+T,w[1]-T,0),m(cr[3],w[0]-T,w[1]-T,0);for(let e=0;e<4;e++)if(!u.unprojectFromRenderScreen(cr[e],Q[e]))return;ae(u.eye,Q[0],Q[1],lr),ae(u.eye,Q[1],Q[2],ur),ae(u.eye,Q[2],Q[3],dr),ae(u.eye,Q[3],Q[0],fr);let E=Number.MAX_VALUE,D=0,ne=Jn(this.parameters,v)?y.length-2:y.length-5;for(let e=0;e<ne;e+=3){W[0]=y[e]+r[12],W[1]=y[e+1]+r[13],W[2]=y[e+2]+r[14];let t=(e+3)%y.length;if(G[0]=y[t]+r[12],G[1]=y[t+1]+r[13],G[2]=y[t+2]+r[14],N(lr,W)<0&&N(lr,G)<0||N(ur,W)<0&&N(ur,G)<0||N(dr,W)<0&&N(dr,G)<0||N(fr,W)<0&&N(fr,G)<0)continue;let n=u.projectToRenderScreen(W,nr),i=u.projectToRenderScreen(G,rr);if(n==null||i==null)continue;if(n[2]<0&&i[2]>0){_(K,W,G);let e=u.frustum;if(h(K,K,-N(e[4],W)/x(K,ie(e[4]))),g(W,W,K),!u.projectToRenderScreen(W,n))continue}else if(n[2]>0&&i[2]<0){_(K,G,W);let e=u.frustum;if(h(K,K,-N(e[4],G)/x(K,ie(e[4]))),g(G,G,K),!u.projectToRenderScreen(G,i))continue}else if(n[2]<0&&i[2]<0)continue;n[2]=0,i[2]=0;let a=st(n,i,or),o=it(a,w);if(!(o>=E)){if(this.parameters.screenSizePerspective){let e=this.computeScreenSizePerspectiveWidth(a,W,G,w,u,S,te);if(o>=e*e)continue}E=o,b(ir,W),b(ar,G),D=e/3}}if(E<T*T){let e=Number.MAX_VALUE;if(ot(st(ir,ar,or),st(d,f,sr),q)){_(q,q,d);let t=C(q);h(q,q,1/t),e=t/p(d,f)}s(e,q,D)}}createBufferWriter(){return new Kn(Vn(this.parameters),this.parameters)}createGLMaterial(e){return new Wn(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:i(e.time)},!1),e.dt!==0)}computeScreenSizePerspectiveWidth(e,t,n,r,i,a,o){v(Qn,t,n,ct(e,r)),y($n,Qn,i.viewMatrix);let s=C($n),c=this.computeCameraAbsCosAngle(Qn,i,this._configuration.spherical);return Zn.update(c,s,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),Zn.apply(a)*i.pixelRatio/2+o}computeCameraAbsCosAngle(e,t,n){return n?S(q,e):m(q,0,0,1),_(er,e,t.eye),S(er,er),Math.abs(x(q,er))}},Wn=class extends ye{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(Hn,e)}},Gn=class extends Be{constructor(){super(...arguments),this._width=0,this.color=j,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=a(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=a(0),this.endTime=a(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return Yt(this.stipplePattern)&&this.stippleTexture!=null}},Kn=class{constructor(e,t){this.layout=e,this._parameters=t,this.numJoinSubdivisions=Xn(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return Jn(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,n=this._isClosed(e),r=n?2:4;return r+=((n?t:t-1)-+!n)*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,n,r,i){if(i==null)return;let{buffer:a,offset:o}=i,s=this.layout,c=n.get(`position`),l=c.indices,u=c.data.length/3,d=n.get(`distanceToStart`)?.data;l&&l.length!==2*(u-1)&&console.warn(`RibbonLineMaterial does not support indices`);let f=s.fields.has(`sizeFeatureAttribute`),h=1,g=null;if(f){let e=n.get(`sizeFeatureAttribute`);e.data.length===1?h=e.data[0]:g=e.data}else h=n.get(`size`)?.data[0]??1;let _=[1,1,1,1],v=0,x=null,S=s.fields.has(`colorFeatureAttribute`);if(S){let e=n.get(`colorFeatureAttribute`);e.data.length===1?v=e.data[0]:x=e.data}else _=n.get(`color`)?.data??_;let C=n.get(`timeStamps`)?.data,w=C&&s.fields.has(`timeStamps`),ee=s.fields.has(`opacityFeatureAttribute`),te=0,T=null;if(ee){let e=n.get(`opacityFeatureAttribute`);e.data.length===1?te=e.data[0]:T=e.data}let E=new Float32Array(a.buffer),D=se(a.buffer),O=new Uint8Array(a.buffer),k=s.stride/4,A=o*k,re=A,j=0,ie=d?(e,t,n)=>j=d[n]:(e,t,n)=>j+=p(e,t),M=E.BYTES_PER_ELEMENT/D.BYTES_PER_ELEMENT,N=4/M,ae=he(),P=(e,t,n,i,a,o,s,c)=>{E[A++]=t[0],E[A++]=t[1],E[A++]=t[2],ke(e,t,D,A*M),A+=N,ke(n,t,D,A*M),A+=N,E[A++]=c;let l=A*M;if(D[l++]=a,D[l++]=o,A=Math.ceil(l/M),S)E[A]=x?.[s]??v;else{let e=Math.min(4*s,_.length-4),t=4*A;O[t]=255*_[e],O[t+1]=255*_[e+1],O[t+2]=255*_[e+2],O[t+3]=255*_[e+3]}if(A++,E[A++]=g?.[s]??h,ee&&(E[A++]=T?.[s]??te),ae){let e=4*A;r?(O[e++]=r[0],O[e++]=r[1],O[e++]=r[2],O[e++]=r[3]):(O[e++]=0,O[e++]=0,O[e++]=0,O[e++]=0),A=Math.ceil(.25*e)}w&&(l=A*M,D[l++]=i[0],D[l++]=i[1],D[l++]=i[2],D[l++]=i[3],A=Math.ceil(l/M))};A+=k,m(Y,c.data[0],c.data[1],c.data[2]),w&&ne(Z,C[0],C[1],C[2],C[3]),e&&y(Y,Y,e);let oe=this._isClosed(n);if(oe){let t=c.data.length-3;m(J,c.data[t],c.data[t+1],c.data[t+2]),e&&y(J,J,e)}else m(X,c.data[3],c.data[4],c.data[5]),e&&y(X,X,e),P(Y,Y,X,Z,1,-4,0,0),P(Y,Y,X,Z,1,4,0,0),b(J,Y),b(Y,X),w&&ne(Z,C[4],C[5],C[6],C[7]);let ce=+!oe,F=oe?u:u-1;for(let t=ce;t<F;t++){let n=(t+1)%u*3;m(X,c.data[n],c.data[n+1],c.data[n+2]),e&&y(X,X,e),ie(J,Y,t),P(J,Y,X,Z,0,-1,t,j),P(J,Y,X,Z,0,1,t,j);let r=this.numJoinSubdivisions;for(let e=0;e<r;++e){let n=(e+1)/(r+1);P(J,Y,X,Z,n,-1,t,j),P(J,Y,X,Z,n,1,t,j)}if(P(J,Y,X,Z,1,-2,t,j),P(J,Y,X,Z,1,2,t,j),b(J,Y),b(Y,X),w){let e=(t+1)%u*4;ne(Z,C[e],C[e+1],C[e+2],C[e+3])}}oe?(m(X,c.data[3],c.data[4],c.data[5]),e&&y(X,X,e),j=ie(J,Y,F),P(J,Y,X,Z,0,-1,ce,j),P(J,Y,X,Z,0,1,ce,j)):(j=ie(J,Y,F),P(J,Y,Y,Z,0,-5,F,j),P(J,Y,Y,Z,0,5,F,j)),qn(E,re+k,E,re,k),A=qn(E,A-k,E,A,k),this._parameters.wireframe&&this._addWireframeVertices(a,re,A,k)}_addWireframeVertices(e,t,n,r){let i=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,n-t),o=0,s=e=>o=qn(a,e,i,o,r);for(let e=0;e<a.length-1;e+=2*r)s(e),s(e+2*r),s(e+1*r),s(e+2*r),s(e+1*r),s(e+3*r)}};function qn(e,t,n,r,i){for(let a=0;a<i;a++)n[r++]=e[t++];return r}function Jn(e,t){return e.isClosed?t.get(`position`).indices.length>2:!1}function Yn(e){return e.anchor===1&&e.hideOnShortSegments&&e.placement===`begin-end`&&e.worldSpace}function Xn(e,t){let n=+!!t;switch(e){case`miter`:case`bevel`:return n;case`round`:return 1+n}}var Zn=new _e,W=f(),G=f(),Qn=f(),$n=f(),er=f(),K=f(),q=f(),tr=f(),nr=u(),rr=u(),ir=f(),ar=f(),or=at(),sr=at(),J=f(),Y=f(),X=f(),Z=O(),cr=[u(),u(),u(),u()],Q=[f(),f(),f(),f()],lr=M(),ur=M(),dr=M(),fr=M(),pr=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+n(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._originSR?.isGeographic&&(this._gridSize/=s(this._originSR)),this._baselineDistance=.5*this._gridSize;let t=this._baselineDistance*mr;this._baselineObjectSize=t/hr}getOrigin(e){let t=this._origins.get(this._rootOriginId);if(t==null){let t=Gt.rootOrigin;if(t!=null)return this._origins.set(this._rootOriginId,Ut(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);let n=Ut(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,n),n}let n=this._gridSize,r=Math.round(e[0]/n),i=Math.round(e[1]/n),a=Math.round(e[2]/n),o=`${r}/${i}/${a}`,s=this._origins.get(o),c=.5*n;if(_($,e,t.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),$[0]<c&&$[1]<c&&$[2]<c){if(s){let t=Math.max(...$);if(_($,e,s.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),Math.max(...$)<t)return s}return t}return s||(s=Ut(r*n,i*n,a*n,o),this._origins.set(o,s)),s}needsOriginUpdate(e,t,n){let r=p(e.vec3,t),i=Math.max(1,n/this._baselineObjectSize);return r>this._baselineDistance*i}_drawOriginBox(e,t=A(1,1,0,1)){let n=window.view,r=n.stage,i=t.toString();if(!this._objects.has(i)){this._material=new Un({width:2,color:t},!1);let e=new fe(r,{pickable:!1}),n=new ue({castShadow:!1});e.add(n),this._objects.set(i,n)}let a=this._objects.get(i),o=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],s=o.length,c=Array(3*s),l=[],u=.5*this._gridSize;for(let t=0;t<s;t++)c[3*t]=e[0]+(1&o[t]?u:-u),c[3*t+1]=e[1]+(2&o[t]?u:-u),c[3*t+2]=e[2]+(4&o[t]?u:-u),t>0&&l.push(t-1,t);ee(c,this._originSR,0,c,n.renderSpatialReference,0,s);let d=new me(this._material,[[`position`,new rt(c,l,3,!0)]],null,2);a.addGeometry(d)}get test(){}},$=f(),mr=2**-23,hr=.05;export{jt as C,Et as D,Mt as E,Ot as S,At as T,Wt as _,Mn as a,Dt as b,mn as c,pn as d,an as f,Zt as g,Qt as h,Rn as i,H as l,tn as m,Un as n,jn as o,rn as p,zn as r,An as s,pr as t,hn as u,Ut as v,Tt as w,kt as x,Rt as y};