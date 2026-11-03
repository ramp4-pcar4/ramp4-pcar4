const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./RibbonLine.glsl-CQ8A-dtc.js","./TriangleTechniqueConfiguration-COBrPyyo.js","./store-5v4E3u6t.js","./preload-helper-C6XEuiEO.js","./store-CGbH87qM.css","./decorators-Ddg95x5O.js","./Accessor-d3_CTXeF.js","./scheduling-CjAJH4tw.js","./screenUtils-CFOhT9Tk.js","./Polygon-WF325tFJ.js","./SpatialReference-CtYlZ12x.js","./JSONSupport-BjpGP83m.js","./Extent-DRt_O1tL.js","./zmUtils--ihLQQBg.js","./aaBoundingRect-Cmwi3kBO.js","./curveExtent-CuNZJ2DN.js","./ellipticArc7Utils-BX76jNF2.js","./plane-wK2-mEau.js","./BufferView-yIGy-hoJ.js","./Indices-BCLQdgzQ.js","./frustum-8f7n3t-_.js","./Attribute-DyLIUiq7.js","./lineSegment-Ctx1b-rx.js","./checkWebGLError-CvezQgQ6.js","./enums-CsvnPRfA.js","./renderState-DJBSiCrT.js","./VertexAttributeLocations-CK8r_Bsj.js","./VertexElementDescriptor-DVcI4qMB.js","./oitResolution.glsl-BFyFSgo3.js","./NoParameters-ZDc3QXO4.js","./Emissions.glsl-DSgdcDhg.js","./ShaderBuilder-B5bKgQt6.js"])))=>i.map(i=>d[i]);
import{Ci as e,Du as t,Fi as n,Fn as r,J_ as i,Ji as a,Lf as o,Mg as s,Ou as c,Pf as l,Qu as u,Ru as d,Si as f,Uu as p,Vu as m,Xg as h,Zg as g,_u as _,bi as v,do as y,du as b,ed as x,fo as S,go as C,ju as ee,ku as w,ou as T,pp as E,uy as D,wi as O,wo as k,xu as A,yi as j,zu as te}from"./store-5v4E3u6t.js";import{t as ne}from"./preload-helper-C6XEuiEO.js";import{M,n as re}from"./decorators-Ddg95x5O.js";import{g as N}from"./screenUtils-CFOhT9Tk.js";import{C as ie,b as ae,h as P,v as F}from"./plane-wK2-mEau.js";import{t as oe}from"./computeTranslationToOriginAndRotation-CLots2s7.js";import{$ as se,J as ce}from"./BufferView-yIGy-hoJ.js";import{a as le,c as ue,n as de,s as fe,t as pe}from"./WebGLLayer-CSv4Cktk.js";import{A as me,At as he,Bt as ge,C as _e,Ct as ve,E as ye,Et as be,F as xe,H as Se,It as Ce,L as we,N as Te,O as Ee,Rt as De,T as Oe,W as ke,X as Ae,a as je,c as Me,d as Ne,f as Pe,g as Fe,h as Ie,i as Le,j as Re,k as ze,l as Be,lt as Ve,m as He,o as Ue,p as We,s as Ge,t as Ke,u as qe,w as Je,x as Ye,yt as Xe}from"./TriangleTechniqueConfiguration-COBrPyyo.js";import"./Texture-B-U-7diJ.js";import{a as Ze,f as Qe,i as $e,o as et,p as tt,s as nt,u as rt}from"./SceneLighting-BG1CT_Zr.js";import{n as it}from"./Attribute-DyLIUiq7.js";import{c as at,d as ot,f as st,o as ct,s as lt}from"./lineSegment-Ctx1b-rx.js";import{h as ut,i as dt,s as ft}from"./enums-CsvnPRfA.js";import{i as pt,n as mt,o as ht}from"./renderState-DJBSiCrT.js";import{c as gt,d as I,f as L,i as _t,l as R,o as z}from"./oitResolution.glsl-BFyFSgo3.js";import{t as vt}from"./ShaderBuilder-B5bKgQt6.js";import{c as yt,d as bt,l as xt,m as St,p as Ct}from"./Emissions.glsl-DSgdcDhg.js";import{i as wt,n as Tt}from"./InterleavedLayout-DvNvUjog.js";function Et(e,t,n,r,i,a,o,s,c,l,u){let d=Bt[u.mode],f,p,m=0;if(k(e,t,n,r,c.spatialReference,i,s))return d?.requiresAlignment(u)?(m=d.applyElevationAlignmentBuffer(r,i,a,o,s,c,l,u),f=a,p=o):(f=r,p=i),k(f,c.spatialReference,p,a,l.spatialReference,o,s)?m:void 0}function Dt(e,t,n,r,i){let a=(ue(e)?e.z:fe(e)?e.array[e.offset+2]:e[2])||0;switch(n.mode){case`on-the-ground`:{let n=le(t,e,`ground`)??0;i.verticalDistanceToGround=0,i.sampledElevation=n,i.z=n;return}case`relative-to-ground`:{let o=le(t,e,`ground`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`relative-to-scene`:{let o=le(t,e,`scene`)??0,s=n.geometryZWithOffset(a,r);i.verticalDistanceToGround=s,i.sampledElevation=o,i.z=s+o;return}case`absolute-height`:{let o=n.geometryZWithOffset(a,r),s=le(t,e,`ground`)??0;i.verticalDistanceToGround=o-s,i.sampledElevation=s,i.z=o;return}default:i.z=0;return}}function Ot(e,t,n,r){return Dt(e,t,n,r,B),B.z}function kt(e,t,n){return t===`on-the-ground`&&n===`on-the-ground`?e.staysOnTheGround:t===n||t!==`on-the-ground`&&n!==`on-the-ground`?t==null||n==null?e.definedChanged:1:e.onTheGroundChanged}function At(e){return e===`relative-to-ground`||e===`relative-to-scene`}function jt(e){return e!==`absolute-height`}function Mt(e,t,n,r,i){Dt(t,n,i,r,B),Nt(e,B.verticalDistanceToGround);let a=B.sampledElevation,o=C(Vt,e.transformation);return Ht[0]=t.x,Ht[1]=t.y,Ht[2]=B.z,oe(t.spatialReference,Ht,o,r.spatialReference)?e.transformation=o:console.warn(`Could not locate symbol object properly, it might be misplaced`),a}function Nt(e,t){for(let n=0;n<e.geometries.length;++n){let r=e.geometries[n].getMutableAttribute(`groundDistance`);r&&r.data[0]!==t&&(r.data[0]=t,e.geometryVertexAttributeUpdated(e.geometries[n],`groundDistance`))}}function Pt(e,t,n,r,i,a){let o=0,s=a.spatialReference;t*=3,r*=3;for(let c=0;c<i;++c){let i=e[t],c=e[t+1],l=e[t+2],u=a.getElevation(i,c,l,s,`ground`)??0;o+=u,n[r]=i,n[r+1]=c,n[r+2]=u,t+=3,r+=3}return o/i}function Ft(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`ground`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function It(e,t,n,r,i,a,o,s){let c=0,l=s.calculateOffsetRenderUnits(o),u=s.featureExpressionInfoContext,d=a.spatialReference;t*=3,r*=3;for(let o=0;o<i;++o){let i=e[t],o=e[t+1],s=e[t+2],f=a.getElevation(i,o,s,d,`scene`)??0;c+=f,n[r]=i,n[r+1]=o,n[r+2]=u==null?s+f+l:f+l,t+=3,r+=3}return c/i}function Lt(e){let t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return t!==0||n!=null}function Rt(e,t,n,r,i,a,o,s){let c=s.calculateOffsetRenderUnits(o),l=s.featureExpressionInfoContext;t*=3,r*=3;for(let a=0;a<i;++a){let i=e[t],a=e[t+1],o=e[t+2];n[r]=i,n[r+1]=a,n[r+2]=l==null?o+c:c,t+=3,r+=3}return 0}var zt=class{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}},Bt={"absolute-height":{applyElevationAlignmentBuffer:Rt,requiresAlignment:Lt},"on-the-ground":{applyElevationAlignmentBuffer:Pt,requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:Ft,requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:It,requiresAlignment:()=>!0}},Vt=T(),B=new zt,Ht=u(),Ut=class{constructor(e,t){this.vec3=e,this.id=t}};function Wt(e,t,n,r){return new Ut(x(e,t,n),r)}var Gt={stableRendering:!1},Kt={rootOrigin:null},V={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},qt={dash:V.dash,"dash-dot":[...V.dash,...V.dot],dot:V.dot,"long-dash":V[`long-dash`],"long-dash-dot":[...V[`long-dash`],...V.dot],"long-dash-dot-dot":[...V[`long-dash`],...V.dot,...V.dot],none:null,"short-dash":V[`short-dash`],"short-dash-dot":[...V[`short-dash`],...V[`short-dot`]],"short-dash-dot-dot":[...V[`short-dash`],...V[`short-dot`],...V[`short-dot`]],"short-dot":V[`short-dot`],solid:null},Jt=8,Yt=class{constructor(e,t,n){this.image=e,this.width=t,this.length=n,this.uuid=r()}};function Xt(e){return e!=null&&`image`in e}function Zt(e,t){return e==null?e:{pattern:e.slice(),pixelRatio:t}}function Qt(e){return{pattern:[e,e],pixelRatio:2}}function $t(e){switch(e?.type){case`style`:return en(e.style);case`image`:return new Yt(e.image,e.width,e.length);case void 0:case null:return null}return null}function en(e){return e==null?null:Zt(qt[e],Jt)}var tn=8;function nn(e,t){let{vertex:n,attributes:r}=e;n.uniforms.add(new R(`intrinsicWidth`,e=>e.width));let{hasScreenSizePerspective:i,spherical:a}=t;i?(e.include(Qe,t),tt(n),Oe(n,t),n.uniforms.add(new ze(`inverseViewMatrix`,(e,t)=>y(rn,S(rn,t.camera.viewMatrix,e.origin)))),n.code.add(L`
      float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
        vec3 worldPos = (inverseViewMatrix * vec4(pos, 1)).xyz;
        vec3 groundUp = ${a?L`normalize(worldPos + localOrigin)`:L`vec3(0.0, 0.0, 1.0)`};
        float absCosAngle = abs(dot(groundUp, normalize(worldPos - cameraPosition)));

        return screenSizePerspectiveScaleFloat(size, absCosAngle, length(pos), screenSizePerspective);
      }
    `)):n.code.add(L`float applyLineSizeScreenSizePerspective(float size, vec3 pos) {
return size;
}`),t.hasVVSize?(r.add(`sizeFeatureAttribute`,`float`),n.uniforms.add(new _t(`vvSizeMinSize`,e=>e.vvSize.minSize),new _t(`vvSizeMaxSize`,e=>e.vvSize.maxSize),new _t(`vvSizeOffset`,e=>e.vvSize.offset),new _t(`vvSizeFactor`,e=>e.vvSize.factor),new _t(`vvSizeFallback`,e=>e.vvSize.fallback)),n.code.add(L`
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
    `)),t.hasVVOpacity?(r.add(`opacityFeatureAttribute`,`float`),n.constants.add(`vvOpacityNumber`,`int`,8),n.uniforms.add(new xe(`vvOpacityValues`,tn,e=>e.vvOpacity.values),new xe(`vvOpacityOpacities`,tn,e=>e.vvOpacity.opacityValues),new R(`vvOpacityFallback`,e=>e.vvOpacity.fallback,{supportsNaN:!0})),n.code.add(L`
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
}`),t.hasVVColor?(e.include(Te,t),r.add(`colorFeatureAttribute`,`float`),n.code.add(L`vec4 getColor() {
vec4 color = interpolateVVColor(colorFeatureAttribute);
if (isnan(color.r)) {
return vec4(0);
}
return applyOpacity(color);
}`)):(r.add(`color`,`vec4`),n.code.add(L`vec4 getColor() {
return applyOpacity(color);
}`))}var rn=T();function an(e){e.vertex.code.add(`#define noPerspectiveWrite(x, w) (x * w)`)}function on(e){e.fragment.code.add(`#define noPerspectiveRead(x) (x * gl_FragCoord.w)`)}function sn(e){return e.pattern.map(t=>Math.round(t*e.pixelRatio))}function cn(e){if(e==null)return 1;let t=sn(e);return Math.floor(t.reduce((e,t)=>e+t))}function ln(e){return e==null?j:e.length===4?e:n(un,e[0],e[1],e[2],1)}var un=f();function dn(e,t){if(!t.stippleEnabled)return void e.fragment.code.add(L`float getStippleAlpha(float lineWidth) { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);let n=!(t.draped&&t.stipplePreferContinuous),{vertex:r,fragment:i}=e;t.draped||(Oe(r,t),r.uniforms.add(new Re(`worldToScreenPerDistanceRatio`,({camera:e})=>1/e.perScreenPixelRatio)).code.add(L`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),e.varyings.add(`vStippleDistance`,`float`),e.varyings.add(`vStippleDistanceLimits`,`vec2`),e.varyings.add(`vStipplePatternStretch`,`float`),r.code.add(L`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${L.float(pn)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),Ee(r),r.code.add(L`
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
  `),i.uniforms.add(new gt(`stipplePatternTexture`,e=>e.stippleTexture),new R(`stipplePatternPixelSizeInv`,e=>1/fn(e))),t.stippleOffColorEnabled&&i.uniforms.add(new we(`stippleOffColor`,e=>ln(e.stippleOffColor))),e.include(on),t.worldSizedImagePattern?(e.varyings.add(`vStippleV`,`float`),e.fragment.include(rt),i.code.add(L`vec4 getStippleColor(out bool isClamped) {
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
  `)}function fn(e){let t=e.stipplePattern;return Xt(t)?t.length:t?cn(t)/t.pixelRatio:1}var pn=.4,H=.5,mn=v(H/2,H/2,1-H/2,1-H/2);function hn(e){return e===`cross`||e===`x`}function gn(e,t=128,n=t*H,r=0){let{data:i,parameters:a}=_n(e,t,n,r);return new nt(i,a)}function _n(e,t=128,n=t*H,r=0){return{data:vn(e,t,n,r),parameters:{mipmap:!1,wrap:{s:33071,t:33071},width:t,height:t,noUnpackFlip:!0,dataType:ft.FLOAT,pixelFormat:6403,internalFormat:dt.R16F,reloadable:!0}}}function vn(e,t=128,n=t*H,r=0){switch(e){case`circle`:default:return yn(t,n);case`square`:return bn(t,n);case`cross`:return Sn(t,n,r);case`x`:return Cn(t,n,r);case`kite`:return xn(t,n);case`triangle`:return wn(t,n);case`arrow`:return Tn(t,n)}}function yn(e,t){let n=e/2-.5;return An(e,On(n,n,t/2))}function bn(e,t){return En(e,t,!1)}function xn(e,t){return En(e,t,!0)}function Sn(e,t,n=0){return Dn(e,t,!1,n)}function Cn(e,t,n=0){return Dn(e,t,!0,n)}function wn(e,t){return An(e,kn(e/2,t,t/2))}function Tn(e,t){let n=t,r=t/2,i=e/2,a=.8*n,o=On(i,(e-t)/2-a,Math.sqrt(a*a+r*r)),s=kn(i,n,r);return An(e,(e,t)=>Math.max(s(e,t),-o(e,t)))}function En(e,t,n){return n&&(t/=Math.SQRT2),An(e,(r,i)=>{let a=r-.5*e+.25,o=.5*e-i-.75;if(n){let e=(a+o)/Math.SQRT2;o=(o-a)/Math.SQRT2,a=e}return Math.max(Math.abs(a),Math.abs(o))-.5*t})}function Dn(e,t,n,r=0){t-=r,n&&(t*=Math.SQRT2);let i=.5*t;return An(e,(t,a)=>{let o,s=t-.5*e,c=.5*e-a-1;if(n){let e=(s+c)/Math.SQRT2;c=(c-s)/Math.SQRT2,s=e}return s=Math.abs(s),c=Math.abs(c),o=s>c?s>i?Math.sqrt((s-i)*(s-i)+c*c):c:c>i?Math.sqrt(s*s+(c-i)*(c-i)):s,o-=r/2,o})}function On(e,t,n){return(r,i)=>{let a=r-e,o=i-t;return Math.sqrt(a*a+o*o)-n}}function kn(e,t,n){let r=Math.sqrt(t*t+n*n);return(i,a)=>{let o=Math.abs(i-e)-n,s=a-e+t/2+.75,c=(t*o+n*s)/r,l=-s;return Math.max(c,l)}}function An(e,t){let n=new Float32Array(e*e);for(let r=0;r<e;r++)for(let i=0;i<e;i++)n[i+e*r]=t(i,r)/e;return n}var jn=.25;function Mn(e,t){let n=e.vertex,r=t.hasScreenSizePerspective;Ee(n),n.uniforms.get(`markerScale`)??n.constants.add(`markerScale`,`float`,1),n.constants.add(`markerSizePerLineWidth`,`float`,10).code.add(L`
  float getLineWidth(${I(r,`vec3 pos`)}) {
     return max(getSize(${I(r,`pos`)}), 1.0) * pixelRatio;
  }

  float getScreenMarkerSize(float lineWidth) {
    return markerScale * markerSizePerLineWidth * lineWidth;
  }
  `),t.space===2&&(n.constants.add(`maxSegmentLengthFraction`,`float`,.45),n.uniforms.add(new Re(`perRenderPixelRatio`,e=>e.camera.perRenderPixelRatio)),n.code.add(L`
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
  `))}var Nn=L`vec4(0.0, 0.0, 2.0, 1.0)`,Pn=h(1),Fn=h(1);function In(e,t){let{hasAnimation:n,animation:r}=t;if(!n)return;let{attributes:i,varyings:a,vertex:s,fragment:c}=e;i.add(`timeStamps`,`vec4`),a.add(`vTimeStamp`,`float`),a.add(`vFirstTime`,`float`),a.add(`vLastTime`,`float`),a.add(`vTransitionType`,`float`),s.main.add(L`vTimeStamp = timeStamps.x;
vFirstTime = timeStamps.y;
vLastTime = timeStamps.z;
vTransitionType = timeStamps.w;`),r===3&&c.constants.add(`decayRate`,`float`,2.3),c.code.add(L`
    float getTrailOpacity(float x) {
      if (x < 0.0) {
        return 0.0;
      }

      ${Ln(r)}
    }`),c.uniforms.add(new R(`timeElapsed`,e=>e.timeElapsed),new R(`trailLength`,e=>e.trailLength),new R(`speed`,e=>e.animationSpeed),new $e(`startEndTime`,e=>o(Rn,e.startTime,e.endTime))),c.constants.add(`fadeInTime`,`float`,Fn),c.constants.add(`fadeOutTime`,`float`,Pn),c.constants.add(`incomingTransition`,`int`,0),c.constants.add(`outgoingTransition`,`int`,2),c.code.add(L`float fadeIn(float x) {
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
}`)}function Ln(e){switch(e){case 2:return`return x >= 0.0 && x <= 1.0 ? 1.0 : 0.0;`;case 3:return`float cutOff = exp(-decayRate);
        return (exp(-decayRate * x) - cutOff) / (1.0 - cutOff);`;default:return`return 1.0;`}}var Rn=a(),zn=1;function Bn(e){let t=new vt,{attributes:n,varyings:r,vertex:i,fragment:a}=t,{applyMarkerOffset:o,draped:s,output:c,capType:l,stippleEnabled:u,falloffEnabled:d,roundJoins:f,wireframe:p,innerColorEnabled:m,hasAnimation:h,hasScreenSizePerspective:g,worldSizedImagePattern:_}=e;i.inputs.add(`position`,()=>`position`),a.include(et),t.include(nn,e),t.include(dn,e),t.include(Se,e),t.include(In,e);let v=o&&!s;v&&(i.uniforms.add(new R(`markerScale`,e=>e.markerScale)),t.include(Mn,{space:2,hasScreenSizePerspective:g})),ye(i,e),i.uniforms.add(new me(`inverseProjectionMatrix`,e=>e.camera.inverseProjectionMatrix),new _e(`nearFar`,e=>e.camera.nearFar),new R(`miterLimit`,e=>e.join===`miter`?e.miterLimit:0),new Ze(`viewport`,e=>e.camera.fullViewport)),i.constants.add(`LARGE_HALF_FLOAT`,`float`,65500),i.constants.add(`EPS`,`float`,.001),i.constants.add(`NUM_JOIN_SUBDIVISIONS`,`float`,e.numJoinSubdivisions),n.add(`position`,`vec3`),n.add(`previousDelta`,`vec4`),n.add(`nextDelta`,`vec4`),n.add(`lineParameters`,`vec2`),n.add(`u0`,`float`),r.add(`vColor`,`vec4`),r.add(`vpos`,`vec3`,{invariant:!0}),r.add(`vLineDistance`,`float`),r.add(`vLineWidth`,`float`),u||(r.add(`vIsInsideJoin`,`int`),r.add(`vStretchFactor`,`float`),r.add(`vJoinCenterLineSDFs`,`vec2`),r.add(`vSubdivisionFactor`,`float`));let y=u;y&&r.add(`vLineSizeInv`,`float`);let b=l===2,x=u&&b,S=d||x;S&&r.add(`vLineDistanceNorm`,`float`),b&&(r.add(`vSegmentSDF`,`float`),r.add(`vReverseSegmentSDF`,`float`)),i.code.add(L`vec3 perpendicular(vec3 v) {
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
}`),Ee(i),i.constants.add(`aaWidth`,`float`,+!u).main.add(L`
    // unpack values from vertex type
    bool isStartVertex = abs(abs(lineParameters.y) - 3.0) == 1.0;
    vec3 prevPosition = position + previousDelta.xyz * previousDelta.w;
    vec3 nextPosition = position + nextDelta.xyz * nextDelta.w;

    float coverage = 1.0;

    // Check for special value of lineParameters.y which is used by the Renderer when graphics are removed before the
    // VBO is recompacted. If this is the case, then we just project outside of clip space.
    if (lineParameters.y == 0.0) {
      gl_Position = ${Nn};
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
}`),t.include(an),i.main.add(L`
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
vReverseSegmentSDF = noPerspectiveWrite((isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd.xy, -segmentDir)), pos.w);`),u&&(s?i.uniforms.add(new Re(`worldToScreenRatio`,e=>1/e.screenToPCSRatio)):i.main.add(L`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),i.main.add(L`float segmentLengthScreenDouble = length(segment.xy);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),s?i.main.add(L`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = u0 * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`):i.main.add(L`float startPseudoScreen = mix(u0, u0 - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),i.uniforms.add(new R(`stipplePatternPixelSize`,e=>fn(e))),i.main.add(L`
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
    }`),t.fragment.include(ke,e),t.include(Fe,e),a.include(Je),a.main.add(L`discardBySlice(vpos);`),t.include(on),a.include(Ye),a.main.add(L`
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
float stippleAlpha = step(alphaCutoff, stippleCoverage);`):a.main.add(L`float stippleAlpha = getStippleAlpha(lineWidth);`),c!==11&&a.main.add(L`discardByStippleAlpha(stippleAlpha, alphaCutoff);`),t.include(on),a.uniforms.add(new we(`intrinsicColor`,e=>e.color)).main.add(L`vec4 color = intrinsicColor * vColor;
color.a = noPerspectiveRead(color.a);`),m&&a.uniforms.add(new we(`innerColor`,e=>e.innerColor??e.color),new R(`innerWidth`,(e,t)=>e.innerWidth*t.camera.pixelRatio)).main.add(L`float distToInner = abs(lineDistance) - innerWidth;
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
      `)),a.main.add(L`outputColorHighlightOLID(applySlice(finalColor, vpos), finalColor.rgb);`),t}var Vn=Object.freeze(Object.defineProperty({__proto__:null,build:Bn,ribbonlineNumRoundJoinSubdivisions:1},Symbol.toStringTag,{value:`Module`}));function Hn(e){let t=Tt().vec3f(`position`).vec4f16(`previousDelta`).vec4f16(`nextDelta`).f32(`u0`).vec2f16(`lineParameters`);return e.hasVVColor?t.f32(`colorFeatureAttribute`):t.vec4u8(`color`,{glNormalized:!0}),e.hasVVSize?t.f32(`sizeFeatureAttribute`):t.f32(`size`),e.hasVVOpacity&&t.f32(`opacityFeatureAttribute`),ge()&&t.vec4u8(`olidColor`),e.hasAnimation&&t.vec4f16(`timeStamps`),t}var Un=class extends Ce{constructor(e,t){super(e,t,wt(Hn(t))),this.shader=new De(Vn,()=>ne(()=>import(`./RibbonLine.glsl-CQ8A-dtc.js`),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]),import.meta.url)),this.ignoreUnused=!0,this.primitiveType=t.wireframe?ut.LINES:ut.TRIANGLE_STRIP}_makePipelineState(e,t){let{output:n,hasOccludees:r}=e;return mt({blending:Ie(n,!1,e.emissionDimmingPass),depthTest:He(n),depthWrite:We(e),colorWrite:ht,stencilWrite:r?qe:null,stencilTest:r?t?Pe:je:null,polygonOffset:Le(e)})}initializePipeline(e){if(e.occluder){let{hasOccludees:t}=e;this._occluderPipelineTransparent=mt({blending:pt,polygonOffset:Le(e),depthTest:Me,depthWrite:null,colorWrite:ht,stencilWrite:null,stencilTest:t?Be:null}),this._occluderPipelineOpaque=mt({blending:pt,polygonOffset:Le(e),depthTest:t?Me:Ne,depthWrite:null,colorWrite:ht,stencilWrite:t?Ue:null,stencilTest:t?Ge:null}),this._occluderPipelineMaskWrite=mt({blending:null,polygonOffset:Le(e),depthTest:Ne,depthWrite:null,colorWrite:null,stencilWrite:t?qe:null,stencilTest:t?Pe:null})}return this._occludeePipeline=this._makePipelineState(e,!0),this._makePipelineState(e,!1)}getPipeline(e,t,n){if(n)return this._occludeePipeline;switch(e.occluder){case 11:return this._occluderPipelineTransparent??super.getPipeline(e,t,n);case 10:return this._occluderPipelineOpaque??super.getPipeline(e,t,n);default:e.occluder;case void 0:case null:return this._occluderPipelineMaskWrite??super.getPipeline(e,t,n)}}};Un=s([re(`esri.views.3d.webgl-engine.shaders.RibbonLineTechnique`)],Un);var U=class extends Ke{constructor(e){super(),this.spherical=e,this.capType=0,this.emissionSource=0,this.animation=2,this.polygonOffsetIndex=0,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.numJoinSubdivisions=1,this.roundJoins=!1,this.applyMarkerOffset=!1,this.hasVVSize=!1,this.hasVVColor=!1,this.hasVVOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.hasScreenSizePerspective=!1,this.worldSizedImagePattern=!1,this.textureCoordinateType=0,this.hasVVInstancing=!1,this.hasSliceTranslatedView=!0,this.overlayEnabled=!1,this.snowCover=!1}get hasAnimation(){return this.animation!==0}};s([z({count:3})],U.prototype,`capType`,void 0),s([z({count:8})],U.prototype,`emissionSource`,void 0),s([z({count:4})],U.prototype,`animation`,void 0),s([z({count:16})],U.prototype,`polygonOffsetIndex`,void 0),s([z()],U.prototype,`writeDepth`,void 0),s([z()],U.prototype,`draped`,void 0),s([z()],U.prototype,`stippleEnabled`,void 0),s([z()],U.prototype,`stippleOffColorEnabled`,void 0),s([z()],U.prototype,`stipplePreferContinuous`,void 0),s([z({count:8})],U.prototype,`numJoinSubdivisions`,void 0),s([z()],U.prototype,`roundJoins`,void 0),s([z()],U.prototype,`applyMarkerOffset`,void 0),s([z()],U.prototype,`hasVVSize`,void 0),s([z()],U.prototype,`hasVVColor`,void 0),s([z()],U.prototype,`hasVVOpacity`,void 0),s([z()],U.prototype,`falloffEnabled`,void 0),s([z()],U.prototype,`innerColorEnabled`,void 0),s([z()],U.prototype,`hasOccludees`,void 0),s([z()],U.prototype,`occluder`,void 0),s([z()],U.prototype,`wireframe`,void 0),s([z()],U.prototype,`discardInvisibleFragments`,void 0),s([z()],U.prototype,`hasScreenSizePerspective`,void 0),s([z()],U.prototype,`worldSizedImagePattern`,void 0);var Wn=class extends Xe{constructor(e,t){super(e,Kn),this.produces=new Map([[2,e=>xt(e)||St(e)&&this.parameters.renderOccluded===8],[3,e=>bt(e)],[10,e=>yt(e)&&this.parameters.renderOccluded===8],[11,e=>yt(e)&&this.parameters.renderOccluded===8],[4,e=>St(e)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[8,e=>St(e)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==8],[18,e=>Ct(e)]]),this._configuration=new U(t)}updateConfiguration(e){super.updateConfiguration(e);let t=e.slot===18,n=this.parameters.stipplePattern!=null&&this.parameters.stippleTexture!=null&&e.output!==10,r=n&&t&&this.parameters.isImagePattern();this._configuration.draped=t,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.stippleEnabled=n,this._configuration.stippleOffColorEnabled=n&&this.parameters.stippleOffColor!=null,this._configuration.stipplePreferContinuous=n&&this.parameters.stipplePreferContinuous,this._configuration.numJoinSubdivisions=Zn(this.parameters.join,n),this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins=this.parameters.join===`round`,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=this.parameters.markerParameters!=null&&Xn(this.parameters.markerParameters),this._configuration.polygonOffsetIndex=this.parameters.polygonOffsetIndex,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasVVSize=this.parameters.hasVVSize,this._configuration.hasVVColor=this.parameters.hasVVColor,this._configuration.hasVVOpacity=this.parameters.hasVVOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&this.parameters.innerColor!=null,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=e.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===8,this._configuration.wireframe=this.parameters.wireframe,this._configuration.animation=this.parameters.animation,this._configuration.emissionSource=+!!this.emissions,this._configuration.hasScreenSizePerspective=!!this.parameters.screenSizePerspective&&!r,this._configuration.worldSizedImagePattern=r}get visible(){return this.parameters.color[3]>=.003913894324853229||this.parameters.stipplePattern!=null&&(this.parameters.stippleOffColor?.[3]??0)>.003913894324853229}get emissions(){return this.parameters.emissiveStrength>0?this.parameters.renderOccluded===8?1:2:0}setParameters(e,t){e.animation=this.parameters.animation,super.setParameters(e,t)}intersectDraped({attributes:e,screenToWorldRatio:t},n,r,i,a){if(!n.options.selectionMode)return;let o=e.get(`size`),s=this.parameters.width;if(this.parameters.vvSize){let t=e.get(`sizeFeatureAttribute`).data[0];Number.isNaN(t)?s*=this.parameters.vvSize.fallback[0]:s*=D(this.parameters.vvSize.offset[0]+t*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else o&&(s*=o.data[0]);let c=r[0],l=r[1],u=(s/2+4)*t,d=Number.MAX_VALUE,f=0,p=e.get(`position`).data,m=Yn(this.parameters,e)?p.length-2:p.length-5;for(let e=0;e<m;e+=3){let t=p[e],n=p[e+1],r=(e+3)%p.length,i=c-t,a=l-n,o=p[r]-t,s=p[r+1]-n,u=D((o*i+s*a)/(o*o+s*s),0,1),m=o*u-i,h=s*u-a,g=m*m+h*h;g<d&&(d=g,f=e/3)}d<u*u&&i(a.distance,a.normal,f)}intersect(e,t,n,r,a,o){let{options:s,camera:u,rayBegin:f,rayEnd:h}=n;if(!s.selectionMode||!e.visible||!u)return;if(!ce(t))return void i.getLogger(`esri.views.3d.webgl-engine.materials.RibbonLineMaterial`).error(`intersection assumes a translation-only matrix`);let g=e.attributes,_=g.get(`position`).data,v=this.parameters.width;if(this.parameters.vvSize){let e=g.get(`sizeFeatureAttribute`).data[0];Number.isNaN(e)||(v*=D(this.parameters.vvSize.offset[0]+e*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0]))}else g.has(`size`)&&(v*=g.get(`size`).data[0]);let y=nr;l(y,n.point);let x=v*u.pixelRatio,S=4*u.pixelRatio,C=x/2+S;m(lr[0],y[0]-C,y[1]+C,0),m(lr[1],y[0]+C,y[1]+C,0),m(lr[2],y[0]+C,y[1]-C,0),m(lr[3],y[0]-C,y[1]-C,0);for(let e=0;e<4;e++)if(!u.unprojectFromRenderScreen(lr[e],Q[e]))return;F(u.eye,Q[0],Q[1],ur),F(u.eye,Q[1],Q[2],dr),F(u.eye,Q[2],Q[3],fr),F(u.eye,Q[3],Q[0],pr);let T=Number.MAX_VALUE,E=0,O=Yn(this.parameters,g)?_.length-2:_.length-5;for(let e=0;e<O;e+=3){W[0]=_[e]+t[12],W[1]=_[e+1]+t[13],W[2]=_[e+2]+t[14];let n=(e+3)%_.length;if(G[0]=_[n]+t[12],G[1]=_[n+1]+t[13],G[2]=_[n+2]+t[14],P(ur,W)<0&&P(ur,G)<0||P(dr,W)<0&&P(dr,G)<0||P(fr,W)<0&&P(fr,G)<0||P(pr,W)<0&&P(pr,G)<0)continue;let r=u.projectToRenderScreen(W,rr),i=u.projectToRenderScreen(G,ir);if(r==null||i==null)continue;if(r[2]<0&&i[2]>0){w(K,W,G);let e=u.frustum;if(p(K,K,-P(e[4],W)/b(K,ie(e[4]))),ee(W,W,K),!u.projectToRenderScreen(W,r))continue}else if(r[2]>0&&i[2]<0){w(K,G,W);let e=u.frustum;if(p(K,K,-P(e[4],G)/b(K,ie(e[4]))),ee(G,G,K),!u.projectToRenderScreen(G,i))continue}else if(r[2]<0&&i[2]<0)continue;r[2]=0,i[2]=0;let a=ct(r,i,sr),o=at(a,y);if(!(o>=T)){if(this.parameters.screenSizePerspective){let e=this.computeScreenSizePerspectiveWidth(a,W,G,y,u,v,S);if(o>=e*e)continue}T=o,d(ar,W),d(or,G),E=e/3}}if(T<C*C){let e=Number.MAX_VALUE;if(st(ct(ar,or,sr),ct(f,h,cr),q)){w(q,q,f);let t=c(q);p(q,q,1/t),e=t/te(f,h)}o(e,q,E)}}createBufferWriter(){return new qn(Hn(this.parameters),this.parameters)}createGLMaterial(e){return new Gn(e)}validateParameters(e){e.join!==`miter`&&(e.miterLimit=0),e.markerParameters!=null&&(e.markerScale=e.markerParameters.width/e.width)}update(e){return!!this.parameters.hasAnimation&&(this.setParameters({timeElapsed:g(e.time)},!1),e.dt!==0)}computeScreenSizePerspectiveWidth(e,t,n,r,i,a,o){_($n,t,n,lt(e,r)),A(er,$n,i.viewMatrix);let s=c(er),l=this.computeCameraAbsCosAngle($n,i,this._configuration.spherical);return Qn.update(l,s,this.parameters.screenSizePerspective,this.parameters.screenSizePerspectiveMinPixelReferenceSize),Qn.apply(a)*i.pixelRatio/2+o}computeCameraAbsCosAngle(e,n,r){return r?t(q,e):m(q,0,0,1),w(tr,e,n.eye),t(tr,tr),Math.abs(b(q,tr))}},Gn=class extends be{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures?.release(this._stipplePattern),this._stipplePattern=null}beginSlot(e){let{stipplePattern:t}=this._material.parameters;return this._stipplePattern!==t&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(t,this._stipplePattern)}),this._stipplePattern=t),this.getTechnique(Un,e)}},Kn=class extends Ve{constructor(){super(...arguments),this._width=0,this.color=O,this.join=`miter`,this.cap=0,this.miterLimit=5,this.writeDepth=!0,this.polygonOffset=0,this.polygonOffsetIndex=0,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1,this.timeElapsed=h(0),this.animation=0,this.animationSpeed=1,this.trailLength=1,this.startTime=h(0),this.endTime=h(1/0),this.emissiveStrength=0}get width(){return this.isImagePattern()?this.stipplePattern.width:this._width}set width(e){this._width=e}get transparent(){return this.color[3]<1||this.hasAnimation||this.stipplePattern!=null&&(this.stippleOffColor?.[3]??0)<1}get hasAnimation(){return this.animation!==0}isImagePattern(){return Xt(this.stipplePattern)&&this.stippleTexture!=null}},qn=class{constructor(e,t){this.layout=e,this._parameters=t,this.numJoinSubdivisions=Zn(this._parameters.join,this._parameters.stipplePattern!=null)}_isClosed(e){return Yn(this._parameters,e)}allocate(e){return this.layout.createBuffer(e)}elementCount(e){let t=e.get(`position`).indices.length/2+1,n=this._isClosed(e),r=n?2:4;return r+=((n?t:t-1)-+!n)*(2*this.numJoinSubdivisions+4),r+=2,this._parameters.wireframe&&(r=2+4*(r-2)),r}write(e,t,r,i,a){if(a==null)return;let{buffer:o,offset:s}=a,c=this.layout,l=r.get(`position`),u=l.indices,f=l.data.length/3,p=r.get(`distanceToStart`)?.data;u&&u.length!==2*(f-1)&&console.warn(`RibbonLineMaterial does not support indices`);let h=c.fields.has(`sizeFeatureAttribute`),g=1,_=null;if(h){let e=r.get(`sizeFeatureAttribute`);e.data.length===1?g=e.data[0]:_=e.data}else g=r.get(`size`)?.data[0]??1;let v=[1,1,1,1],y=0,b=null,x=c.fields.has(`colorFeatureAttribute`);if(x){let e=r.get(`colorFeatureAttribute`);e.data.length===1?y=e.data[0]:b=e.data}else v=r.get(`color`)?.data??v;let S=r.get(`timeStamps`)?.data,C=S&&c.fields.has(`timeStamps`),ee=c.fields.has(`opacityFeatureAttribute`),w=0,T=null;if(ee){let e=r.get(`opacityFeatureAttribute`);e.data.length===1?w=e.data[0]:T=e.data}let E=new Float32Array(o.buffer),D=se(o.buffer),O=new Uint8Array(o.buffer),k=c.stride/4,j=s*k,ne=j,M=0,re=p?(e,t,n)=>M=p[n]:(e,t,n)=>M+=te(e,t),N=E.BYTES_PER_ELEMENT/D.BYTES_PER_ELEMENT,ie=4/N,ae=ge(),P=(e,t,n,r,a,o,s,c)=>{E[j++]=t[0],E[j++]=t[1],E[j++]=t[2],Ae(e,t,D,j*N),j+=ie,Ae(n,t,D,j*N),j+=ie,E[j++]=c;let l=j*N;if(D[l++]=a,D[l++]=o,j=Math.ceil(l/N),x)E[j]=b?.[s]??y;else{let e=Math.min(4*s,v.length-4),t=4*j;O[t]=255*v[e],O[t+1]=255*v[e+1],O[t+2]=255*v[e+2],O[t+3]=255*v[e+3]}if(j++,E[j++]=_?.[s]??g,ee&&(E[j++]=T?.[s]??w),ae){let e=4*j;i?(O[e++]=i[0],O[e++]=i[1],O[e++]=i[2],O[e++]=i[3]):(O[e++]=0,O[e++]=0,O[e++]=0,O[e++]=0),j=Math.ceil(.25*e)}C&&(l=j*N,D[l++]=r[0],D[l++]=r[1],D[l++]=r[2],D[l++]=r[3],j=Math.ceil(l/N))};j+=k,m(Y,l.data[0],l.data[1],l.data[2]),C&&n(Z,S[0],S[1],S[2],S[3]),e&&A(Y,Y,e);let F=this._isClosed(r);if(F){let t=l.data.length-3;m(J,l.data[t],l.data[t+1],l.data[t+2]),e&&A(J,J,e)}else m(X,l.data[3],l.data[4],l.data[5]),e&&A(X,X,e),P(Y,Y,X,Z,1,-4,0,0),P(Y,Y,X,Z,1,4,0,0),d(J,Y),d(Y,X),C&&n(Z,S[4],S[5],S[6],S[7]);let oe=+!F,ce=F?f:f-1;for(let t=oe;t<ce;t++){let r=(t+1)%f*3;m(X,l.data[r],l.data[r+1],l.data[r+2]),e&&A(X,X,e),re(J,Y,t),P(J,Y,X,Z,0,-1,t,M),P(J,Y,X,Z,0,1,t,M);let i=this.numJoinSubdivisions;for(let e=0;e<i;++e){let n=(e+1)/(i+1);P(J,Y,X,Z,n,-1,t,M),P(J,Y,X,Z,n,1,t,M)}if(P(J,Y,X,Z,1,-2,t,M),P(J,Y,X,Z,1,2,t,M),d(J,Y),d(Y,X),C){let e=(t+1)%f*4;n(Z,S[e],S[e+1],S[e+2],S[e+3])}}F?(m(X,l.data[3],l.data[4],l.data[5]),e&&A(X,X,e),M=re(J,Y,ce),P(J,Y,X,Z,0,-1,oe,M),P(J,Y,X,Z,0,1,oe,M)):(M=re(J,Y,ce),P(J,Y,Y,Z,0,-5,ce,M),P(J,Y,Y,Z,0,5,ce,M)),Jn(E,ne+k,E,ne,k),j=Jn(E,j-k,E,j,k),this._parameters.wireframe&&this._addWireframeVertices(o,ne,j,k)}_addWireframeVertices(e,t,n,r){let i=new Float32Array(e.buffer,n*Float32Array.BYTES_PER_ELEMENT),a=new Float32Array(e.buffer,t*Float32Array.BYTES_PER_ELEMENT,n-t),o=0,s=e=>o=Jn(a,e,i,o,r);for(let e=0;e<a.length-1;e+=2*r)s(e),s(e+2*r),s(e+1*r),s(e+2*r),s(e+1*r),s(e+3*r)}};function Jn(e,t,n,r,i){for(let a=0;a<i;a++)n[r++]=e[t++];return r}function Yn(e,t){return e.isClosed?t.get(`position`).indices.length>2:!1}function Xn(e){return e.anchor===1&&e.hideOnShortSegments&&e.placement===`begin-end`&&e.worldSpace}function Zn(e,t){let n=+!!t;switch(e){case`miter`:case`bevel`:return n;case`round`:return 1+n}}var Qn=new ve,W=u(),G=u(),$n=u(),er=u(),tr=u(),K=u(),q=u(),nr=u(),rr=N(),ir=N(),ar=u(),or=u(),sr=ot(),cr=ot(),J=u(),Y=u(),X=u(),Z=f(),lr=[N(),N(),N(),N()],Q=[u(),u(),u(),u()],ur=ae(),dr=ae(),fr=ae(),pr=ae(),mr=class{constructor(e){this._originSR=e,this._rootOriginId=`root/`+M(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5,this._originSR?.isGeographic&&(this._gridSize/=E(this._originSR)),this._baselineDistance=.5*this._gridSize;let t=this._baselineDistance*hr;this._baselineObjectSize=t/gr}getOrigin(e){let t=this._origins.get(this._rootOriginId);if(t==null){let t=Kt.rootOrigin;if(t!=null)return this._origins.set(this._rootOriginId,Wt(t[0],t[1],t[2],this._rootOriginId)),this.getOrigin(e);let n=Wt(e[0]+Math.random()-.5,e[1]+Math.random()-.5,e[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,n),n}let n=this._gridSize,r=Math.round(e[0]/n),i=Math.round(e[1]/n),a=Math.round(e[2]/n),o=`${r}/${i}/${a}`,s=this._origins.get(o),c=.5*n;if(w($,e,t.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),$[0]<c&&$[1]<c&&$[2]<c){if(s){let t=Math.max(...$);if(w($,e,s.vec3),$[0]=Math.abs($[0]),$[1]=Math.abs($[1]),$[2]=Math.abs($[2]),Math.max(...$)<t)return s}return t}return s||(s=Wt(r*n,i*n,a*n,o),this._origins.set(o,s)),s}needsOriginUpdate(e,t,n){let r=te(e.vec3,t),i=Math.max(1,n/this._baselineObjectSize);return r>this._baselineDistance*i}_drawOriginBox(t,n=e(1,1,0,1)){let r=window.view,i=r.stage,a=n.toString();if(!this._objects.has(a)){this._material=new Wn({width:2,color:n},!1);let e=new pe(i,{pickable:!1}),t=new de({castShadow:!1});e.add(t),this._objects.set(a,t)}let o=this._objects.get(a),s=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],c=s.length,l=Array(3*c),u=[],d=.5*this._gridSize;for(let e=0;e<c;e++)l[3*e]=t[0]+(1&s[e]?d:-d),l[3*e+1]=t[1]+(2&s[e]?d:-d),l[3*e+2]=t[2]+(4&s[e]?d:-d),e>0&&u.push(e-1,e);k(l,this._originSR,0,l,r.renderSpatialReference,0,c);let f=new he(this._material,[[`position`,new it(l,u,3,!0)]],null,2);o.addGeometry(f)}get test(){}},$=u(),hr=2**-23,gr=.05;export{Mt as C,Dt as D,Nt as E,kt as S,jt as T,Gt as _,Nn as a,Ot as b,hn as c,mn as d,on as f,Qt as g,$t as h,zn as i,H as l,nn as m,Wn as n,Mn as o,an as p,Bn as r,jn as s,mr as t,gn as u,Wt as v,Et as w,At as x,zt as y};