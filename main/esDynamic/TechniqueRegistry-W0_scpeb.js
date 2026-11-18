import{a as e,r as t}from"./tslib.es6-B8mhy9sW.js";import{$ as n,A as r,At as i,B as a,Bt as o,Ct as s,D as c,Dt as l,E as u,F as d,Ft as f,G as p,It as m,J as h,K as g,Lt as _,M as v,N as y,Nt as b,O as x,P as S,Rt as C,T as w,Tt as T,U as E,Vt as D,W as O,X as k,Y as A,Z as ee,_ as j,a as M,b as te,bt as ne,c as N,ct as re,d as P,f as ie,g as F,gt as ae,h as oe,i as se,it as I,k as ce,l as L,lt as le,m as R,n as z,nt as ue,o as de,p as fe,pt as pe,q as B,r as me,rt as he,s as V,tt as H,u as ge,ut as _e,v as ve,vt as ye,x as U,xt as be,yt as W,z as xe,zt as Se}from"./WGLContainer-Br4K6Jtk.js";import{j as Ce,n as we,t as Te}from"./Error-BXG3xGqh.js";import{a as Ee,i as De,n as Oe,r as ke,t as Ae}from"./gradientStrokeConstants-DKawWASn.js";import{o as je}from"./definitions-BUnuivDr.js";import{a as Me,c as Ne,i as Pe,r as Fe,s as Ie,t as Le}from"./constants-B0Xo4HGs.js";import{a as Re,d as ze,f as Be,h as Ve,i as He,l as Ue,m as We,n as Ge,p as Ke,r as qe,t as Je,u as G}from"./utils-BZ71Mlom.js";import{c as Ye,g as Xe}from"./mat3-CWwhtsJ0.js";import{S as Ze,a as Qe,c as K,d as q,f as $e,l as J,m as Y,o as X,p as et,s as tt,u as nt}from"./util-BvOLv-yS.js";import{O as rt}from"./arrayUtils-CWRatn_8.js";import{t as it}from"./SimpleMesh-DGd07EUr.js";import{a as at,h as ot,i as st,s as ct,u as lt}from"./enums-BROqJWzi.js";import{a as ut,i as dt,r as ft}from"./VertexArrayObject-zVX0LrUB.js";import{s as pt,t as mt}from"./Texture-B0YwTi50.js";import{l as ht}from"./screenUtils-Cduua96r.js";import{i as gt}from"./time-DIZvL7dU.js";import{n as _t,r as vt}from"./loadUtils-L1LrHlmj.js";import{O as yt}from"./promiseUtils-DEgIqAh9.js";import"./constants-DbBDJM0U.js";import{t as bt}from"./ShaderCompiler-CaQBwWk1.js";var xt=new class{get forceStaticPath(){return Ce(`esri-cim-animations-enable-status`)===`disabled`}get forceAnimatedPath(){return Ce(`esri-cim-animations-enable-status`)===`forced`}get freezeGlobalTime(){return Ce(`esri-cim-animations-freeze-time`)??!1}get spotlightAnimatedSymbols(){return!!Ce(`esri-cim-animations-spotlight`)}get forceGlobalTimeOrigin(){return!1!==Ce(`esri-cim-animations-freeze-time`)}},St=class extends z{};t([L(U)],St.prototype,`globalTime`,void 0),t([L(B)],St.prototype,`animationTextureSize`,void 0),t([L(i)],St.prototype,`toScreen`,void 0),t([L(i)],St.prototype,`toNdc`,void 0),t([L(U)],St.prototype,`mapRotation`,void 0),t([L(U)],St.prototype,`pixelRatio`,void 0),t([L(U)],St.prototype,`scaleAdjustment`,void 0);var Ct=class extends ge{getVisualVariableData(e){return this._vvData||=W(this.visualVariableData,e).setDebugName(`storage2`),this._vvData}getFilterData(e){return W(this.filterFlags,e).setDebugName(`storage0`)}getAnimationData(e){return W(this.animation,e).setDebugName(`storage1`)}getVVData(e){return this.getVisualVariableData(e)}getDataDrivenData0(e){return W(this.dataDriven0,e).setDebugName(`storage30`)}getDataDrivenData1(e){return W(this.dataDriven1,e).setDebugName(`storage31`)}getDataDrivenData2(e){return W(this.dataDriven2,e).setDebugName(`storage32`)}getGPGPUData(e){return W(this.gpgpu,e).setDebugName(`storage4`)}getLocalTimeOrigin(e){return W(this.localTimeOrigin,e).x.setDebugName(`storage5`)}getFilterFlags(e){return Ce(`webgl-ignores-sampler-precision`)?f(this.getFilterData(e).x.multiply(_(255))):this.getFilterData(e).x.multiply(_(255))}getLabelVisibility(e){let t=this.getFilterData(e).y.multiply(255);return new U(1).subtract(t)}getAnimationValue(e){return this.getAnimationData(e).x}getSizeValue(e){return this.getVisualVariableData(e).x}getColorValue(e){return this.getVisualVariableData(e).y}getOpacityValue(e){return this.getVisualVariableData(e).z}getRotationValue(e){return this.getVisualVariableData(e).w}};t([V(d)],Ct.prototype,`filterFlags`,void 0),t([V(d)],Ct.prototype,`animation`,void 0),t([V(d)],Ct.prototype,`gpgpu`,void 0),t([V(d)],Ct.prototype,`localTimeOrigin`,void 0),t([V(d)],Ct.prototype,`visualVariableData`,void 0),t([V(d)],Ct.prototype,`dataDriven0`,void 0),t([V(d)],Ct.prototype,`dataDriven1`,void 0),t([V(d)],Ct.prototype,`dataDriven2`,void 0);var wt=class extends z{getAttributeDataCoords(e){if(!this._uv){let t=Ge(e),n=this.size,r=b(t.x),i=b(t.y).multiply(b(256)),a=b(t.z).multiply(b(256)).multiply(b(256)),o=_(r.add(i).add(a)),s=w(o,n),c=o.subtract(s).divide(n);this._uv=new B(s,c).add(.5).divide(n)}return this._uv}};t([L(U)],wt.prototype,`size`,void 0);var Tt=class extends z{};t([L(U)],Tt.prototype,`activeReasons`,void 0),t([L(U)],Tt.prototype,`highlightAll`,void 0);var Et=class extends z{};t([L(B)],Et.prototype,`position`,void 0),t([L(U)],Et.prototype,`distance`,void 0),t([L(U)],Et.prototype,`smallSymbolDistance`,void 0),t([L(U)],Et.prototype,`smallSymbolSizeThreshold`,void 0),t([L(H)],Et.prototype,`tlbr`,void 0);var Dt=class extends z{};t([L(i)],Dt.prototype,`displayViewScreenMat3`,void 0),t([L(i)],Dt.prototype,`displayViewMat3`,void 0),t([L(i)],Dt.prototype,`displayMat3`,void 0),t([L(i)],Dt.prototype,`viewMat3`,void 0),t([L(i)],Dt.prototype,`tileMat3`,void 0),t([L(U)],Dt.prototype,`displayZoomFactor`,void 0),t([L(U)],Dt.prototype,`requiredZoomFactor`,void 0),t([L(B)],Dt.prototype,`tileOffset`,void 0),t([L(U)],Dt.prototype,`currentScale`,void 0),t([L(U)],Dt.prototype,`currentZoom`,void 0),t([L(U)],Dt.prototype,`metersPerSRUnit`,void 0),t([L(U)],Dt.prototype,`rotation`,void 0),t([L(U)],Dt.prototype,`pixelRatio`,void 0),t([L(U)],Dt.prototype,`scaleFactor`,void 0);var Ot=class extends se{};t([N(0,A)],Ot.prototype,`id`,void 0),t([N(1,U)],Ot.prototype,`bitset`,void 0),t([N(2,B)],Ot.prototype,`pos`,void 0);var kt=class extends ie{};t([N(14,B)],kt.prototype,`nextPos1`,void 0),t([N(15,B)],kt.prototype,`nextPos2`,void 0);var At=class extends fe{},jt=class extends me{clip(e,t){let n=new U(0),r=this.getFilterFlags(e);if(n=n.add(_(2).multiply(_(1).subtract(Be(r,0)))),this.inside?n=n.add(_(2).multiply(_(1).subtract(Be(r,1)))):this.outside?n=n.add(_(2).multiply(Be(r,1))):this.highlight&&(n=n.add(_(2).multiply(_(1).subtract(this._checkHighlight(r))))),t!=null){let e=new U(1).subtract(I(t.x,this.view.currentZoom)),r=I(t.y,this.view.currentZoom);n=n.add(new U(2).multiply(e.add(r)))}return n}getFragmentOutput(e,t,n=new U(1/255)){let r=new de;return r.fragColor=this._maybeWriteHittest(t)??this._maybeHighlight(e,n)??e,r}_maybeHighlight(e,t){return this.highlight?new H(e.rgb,I(t,e.a)):null}_checkHighlight(e){let t=this._checkHighlightBit(e,0);for(let n=1;n<6;n++)t=t.add(this._checkHighlightBit(e,n));return I(new U(.1),t.add(this.highlight.highlightAll))}_checkHighlightBit(e,t){return Je(e,t).multiply(G(this.highlight.activeReasons,t))}computeHittestTriangle(e,t,n){let{viewMat3:r,tileMat3:i}=this.view,a=r.multiply(i),{nextPos1:o,nextPos2:s}=t;return{pos0:a.multiply(new A(e.pos,1)).xy,pos1:a.multiply(new A(o,1)).xy,pos2:a.multiply(new A(s,1)).xy}}maybeRunHittest(e,t,n){if(this.hittestRequest==null)return null;let r=this.hittest(e,t,n),i=h(r,new U(2)),o=h(r,new U(1)),s=a(o,()=>new H(new U(1/255),0,0,0),a(i,()=>new H(new U(2/255),0,0,0),new H(0))),c=a(O(i,o),new U(0),new U(2)),l=this.getAttributeDataCoords(e.id),u=Ue(l);return c=c.add(this.clip(e.id,e.zoomRange)),{glPointSize:new U(1),glPosition:new H(u,c,1),color:s}}_maybeWriteHittest(e){return this.hittestRequest==null?null:e.color}getAttributeDataCoords(e){return this.storage.getAttributeDataCoords(e)}getVVData(e){return this.storageTextures.getVVData(this.getAttributeDataCoords(e))}getFilterFlags(e){return this.storageTextures.getFilterFlags(this.getAttributeDataCoords(e))}getLocalTimeOrigin(e){return this.storageTextures.getLocalTimeOrigin(this.getAttributeDataCoords(e))}getSizeValue(e){return this.storageTextures.getSizeValue(this.getAttributeDataCoords(e))}getColorValue(e){return this.storageTextures.getColorValue(this.getAttributeDataCoords(e))}getOpacityValue(e){return this.storageTextures.getOpacityValue(this.getAttributeDataCoords(e))}getRotationValue(e){return this.storageTextures.getRotationValue(this.getAttributeDataCoords(e))}};t([M],jt.prototype,`inside`,void 0),t([M],jt.prototype,`outside`,void 0),t([R(Tt)],jt.prototype,`highlight`,void 0),t([L(wt)],jt.prototype,`storage`,void 0),t([V(Ct)],jt.prototype,`storageTextures`,void 0),t([L(Dt)],jt.prototype,`view`,void 0),t([R(Et)],jt.prototype,`hittestRequest`,void 0);var Mt=class extends z{getPatternOffsetAtTileOrigin(e,t=new U(0),n=new U(1)){let r=new B(Le).divide(e),i=e.multiply(v(this.maxIntsToLocalOrigin.multiply(r))).add(this.tileOffsetFromLocalOrigin).subtract(new U(.5).multiply(e));return i=new B(i.x.multiply(n).subtract(i.y.multiply(t)),i.x.multiply(t).add(i.y.multiply(n))),w(i,e)}};t([L(B)],Mt.prototype,`tileOffsetFromLocalOrigin`,void 0),t([L(B)],Mt.prototype,`maxIntsToLocalOrigin`,void 0);var Nt=class extends z{};t([L(B)],Nt.prototype,`size`,void 0);var Pt=class extends z{getColor(e,t,n){return y([O(We(e),n),t],[j(e,this.values.first()),this.colors.first()],[c(e,this.values.last()),this.colors.last()],[!0,()=>{let t=this.values.findIndex(t=>u(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.colors.get(r),this.colors.get(t),a)}])}};t([L(T.ofType(H,8))],Pt.prototype,`colors`,void 0),t([L(T.ofType(U,8))],Pt.prototype,`values`,void 0);var Ft=class extends z{getOpacity(e){return y([We(e),new U(1)],[j(e,this.opacityValues.first()),this.opacities.first()],[c(e,this.opacityValues.last()),this.opacities.last()],[!0,()=>{let t=this.opacityValues.findIndex(t=>u(t,e)),n=this.opacityValues.get(t),r=t.subtract(1),i=this.opacityValues.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.opacities.get(r),this.opacities.get(t),a)}])}};t([L(T.ofType(U,8))],Ft.prototype,`opacities`,void 0),t([L(T.ofType(U,8))],Ft.prototype,`opacityValues`,void 0);var It=class extends z{getVVRotationMat4(e){return a(We(e),pe.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(Fe),n=m(t),r=le(t);return new pe(r,n,0,0,n.multiply(new U(-1)),r,0,0,0,0,1,0,0,0,0,1)})}getVVRotationMat3(e){return a(We(e),i.identity(),()=>{let t=this.getNormalizedAngle(e).multiply(Fe),n=m(t),r=le(t);return new i(r,n,0,n.multiply(new U(-1)),r,0,0,0,1)})}getNormalizedAngle(e){let t=h(this.rotationType,new U(1));return a(t,new U(90).subtract(e),e)}};t([L(U)],It.prototype,`rotationType`,void 0);var Lt=class extends z{getSize(e,t){let n=this.minMaxValueAndSize.xy,r=this.minMaxValueAndSize.zw;return a(We(e),t,()=>{let t=e.subtract(n.x).divide(n.y.subtract(n.x)),i=be(t,new U(0),new U(1));return r.x.add(i.multiply(r.y.subtract(r.x)))})}};t([L(H)],Lt.prototype,`minMaxValueAndSize`,void 0);var Rt=class extends z{getSizeForViewScale(e){return y([j(e,this.values.first()),this.sizes.first()],[c(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(t=>u(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.sizes.get(r),this.sizes.get(t),a)}])}};t([L(T.ofType(U,8))],Rt.prototype,`sizes`,void 0),t([L(T.ofType(U,8))],Rt.prototype,`values`,void 0);var zt=class extends z{getSize(e,t){let n=y([We(e),t],[j(e,this.values.first()),this.sizes.first()],[c(e,this.values.last()),this.sizes.last()],[!0,()=>{let t=this.values.findIndex(t=>u(t,e)),n=this.values.get(t),r=t.subtract(1),i=this.values.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.sizes.get(r),this.sizes.get(t),a)}]);return a(We(n),t,n)}};t([L(T.ofType(U,8))],zt.prototype,`sizes`,void 0),t([L(T.ofType(U,8))],zt.prototype,`values`,void 0);var Bt=class extends z{getSize(e,t){return a(We(e),t,e.multiply(this.unitValueToPixelsRatio))}};t([L(U)],Bt.prototype,`unitValueToPixelsRatio`,void 0);function Vt(e){return e.visualVariableSizeMinMaxValue!=null||e.visualVariableSizeScaleStops!=null||e.visualVariableSizeStops!=null||e.visualVariableSizeUnitValue!=null}function Ht(e,t,n){if(Vt(e)){let r=e.getSizeValue(t);return e.visualVariableSizeMinMaxValue?.getSize(r,n)??e.visualVariableSizeScaleStops?.getSizeForViewScale(e.view.currentScale)??e.visualVariableSizeStops?.getSize(r,n)??e.visualVariableSizeUnitValue?.getSize(r,n)}return n}function Ut(e,t,n,r=new ce(!1)){if(e.visualVariableColor==null)return n;let i=e.getColorValue(t);return e.visualVariableColor.getColor(i,n,r)}function Wt(e,t){if(e.visualVariableOpacity==null)return new U(1);let n=e.getOpacityValue(t);return e.visualVariableOpacity.getOpacity(n)}function Gt(e,t){if(e.visualVariableRotation==null)return i.identity();let n=e.getRotationValue(t);return e.visualVariableRotation.getVVRotationMat3(n)}function Kt(e,t){if(e.visualVariableRotation==null)return new U(0);let n=e.getRotationValue(t);return e.visualVariableRotation.getNormalizedAngle(n)}var qt=class extends Ot{};t([N(3,B)],qt.prototype,`offset`,void 0),t([N(4,H)],qt.prototype,`sizing`,void 0),t([N(5,H)],qt.prototype,`value1Position2Value2`,void 0),t([N(6,H)],qt.prototype,`animationPointerAndBaseSizeAndReferenceSize`,void 0),t([N(7,B)],qt.prototype,`zoomRange`,void 0),t([N(8,U)],qt.prototype,`lineLength`,void 0);var Jt=class extends At{},Yt=class extends jt{_vertexPreamble(e,t,n){let{id:r,offset:i,animationPointerAndBaseSizeAndReferenceSize:a,sizing:s}=e,c=a.xy,l=a.z,u=a.w,d=s.xy,f=this._getEvalParams(e,d,n),p,g;if(e.value1Position2Value2){let t;t=this.hittestRequest?new U(0):Xt(c,6,f).a.multiply(this.animationInfo.scaleAdjustment);let n=e.pos,r=e.value1Position2Value2.yz,i=e.value1Position2Value2.x,a=e.value1Position2Value2.w,s=t.subtract(i).divide(a.subtract(i));g=n.add(r.subtract(n).multiply(s)),p=I(new U(1),s).add(I(new U(0),o(s)))}else g=e.pos,p=new U(0);let _=s.z,v=G(e.bitset,De.bitset.isStroke),b=s.w,x=G(e.bitset,De.bitset.scaleSymbolsProportionally),S=Xt(c,0,f),C=y([h(G(e.bitset,De.bitset.isMapAligned),new U(1)),this.view.rotation.divide(180).multiply(Math.PI)],[!0,new U(0)]),w=new ne(le(C),m(C.multiply(-1)),m(C),le(C)).multiply(S.xy),T=S.z.subtract(C).subtract(t),E=S.w,D=G(e.bitset,De.bitset.isSDF),O=Ht(this,r,new U(u)).divide(new U(u));return{baseSize:l,animationPointer:c,strokeWidth:_,isOutline:v,unscaledDistanceToPx:b,scaleSymbolsProportionally:x,isSDF:D,position:this._getScreenPosition({id:r,pos:g,offset:i,referenceSize:u,translation:w,rotation:T,scale:E,vvScale:O}),evalParams:f,vvScale:O,scale:E,clip:p}}_getScreenPosition(e){let{pos:t,translation:n,rotation:r,scale:a,offset:s,id:c,vvScale:l}=e,u=Kt(this,c).multiply(Math.PI/180),d=n.x.multiply(4/3),f=n.y.multiply(-1).multiply(4/3),p=m(u),h=le(u),g=h.multiply(d).add(o(p).multiply(f)),_=p.multiply(d).add(h.multiply(f)),v=m(r.subtract(u)),y=le(r.subtract(u)),b=new U(0),x=new U(1),{pixelRatio:S}=this.animationInfo,C=new i(x,b,b,b,x,b,g.multiply(S),_.multiply(S),x),w=new i(y,v.multiply(-1),b,v,y,b,0,0,x),T=a.multiply(l).multiply(S).multiply(4/3),E=w.multiply(T),D=this.animationInfo.toScreen.multiply(new A(t,1)),O=C.multiply(D).xy,k=E.multiply(new A(s,0)).xy;return O.add(k)}_clip(e,t){let n=super.clip(e,t),r=j(this._getLocalTimeOrigin(e),new U(0));return xt.forceGlobalTimeOrigin||(n=n.add(y([r,()=>new U(2)],[!0,()=>new U(0)]))),n}_getLocalTimeOrigin(e){return this.getLocalTimeOrigin(e)}_toNdc(e){return this.animationInfo.toNdc.multiply(new A(e,1)).xy}_getEvalParams(e,t,n){let{globalTime:r,animationTextureSize:i}=this.animationInfo;return{globalTime:r,localTimeOrigin:this._getLocalTimeOrigin(e.id),animationTextureSize:i,animationTexture:this.animationTexture,pixelDimensions:t,lineLength:n}}_getColor(e,t){return a(h(t.isSDF,new U(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return W(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let n=W(this.mosaicTexture,e),r=new U(.5).subtract(qe(n)).multiply(t.distanceToPx).multiply(1),i=be(new U(.5).subtract(r),new U(0),new U(1)),a=t.color.multiply(i),o=t.outlineSize.multiply(.5),s=g(r).subtract(o),c=be(new U(.5).subtract(s),new U(0),new U(1)),l=t.outlineColor.multiply(c);return new U(1).subtract(l.a).multiply(a).add(l)}};function Xt(e,t,n){let r=e.add(new B(t,0)),i=W(n.animationTexture,r.add(.5).divide(n.animationTextureSize)).xy;return e=e.add(i),x({animationPointer:e,...n},H,null,e=>{let{out:t}=e;if(!t)throw Error(`out is null`);return Ee({...e,out:t})})}t([L(Nt)],Yt.prototype,`mosaicInfo`,void 0),t([L(St)],Yt.prototype,`animationInfo`,void 0),t([L(Mt)],Yt.prototype,`localTileOffset`,void 0),t([V(d)],Yt.prototype,`mosaicTexture`,void 0),t([R(Pt)],Yt.prototype,`visualVariableColor`,void 0),t([R(Ft)],Yt.prototype,`visualVariableOpacity`,void 0),t([R(Lt)],Yt.prototype,`visualVariableSizeMinMaxValue`,void 0),t([R(Rt)],Yt.prototype,`visualVariableSizeScaleStops`,void 0),t([R(zt)],Yt.prototype,`visualVariableSizeStops`,void 0),t([R(Bt)],Yt.prototype,`visualVariableSizeUnitValue`,void 0),t([R(It)],Yt.prototype,`visualVariableRotation`,void 0),t([V(d)],Yt.prototype,`animationTexture`,void 0);var Zt=class extends qt{};t([N(9,H)],Zt.prototype,`tlbr`,void 0),t([N(10,U)],Zt.prototype,`angle`,void 0);var Qt=class extends ie{};t([N(13,B)],Qt.prototype,`nextPos1`,void 0),t([N(14,B)],Qt.prototype,`nextPos2`,void 0);var $t=class extends Jt{},en=class extends Yt{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}_fragmentPoly(e){let t=w(e.uv,new U(1)),n=F(e.tlbr.xy,e.tlbr.zw,t);return this._getColor(n,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth})}_vertexPoly(e){let{position:t,animationPointer:n,evalParams:r,isOutline:i,unscaledDistanceToPx:o,vvScale:s,strokeWidth:c,scaleSymbolsProportionally:l,scale:u,isSDF:d,baseSize:f,clip:p}=this._vertexPreamble(e,new U(0),e.lineLength||new U(0)),m=this._toNdc(t),h=Xt(n,1,r);h=new H(h.rgb.multiply(h.a),h.a);let g=a(ze(e.bitset,De.bitset.colorLocked),h,Xt(n,2,r));g=new H(g.rgb.multiply(g.a),g.a);let _=Xt(n,3,r);_=new H(_.rgb.multiply(_.a),_.a);let v=Xt(n,4,r).a,y=Xt(n,5,r).a,b=Ut(this,e.id,h,O(ze(e.bitset,De.bitset.colorLocked),new ce(i))),x=F(b,g,_),S=Wt(this,e.id),C=F(S,v,y);return{unscaledDistanceToPx:o,vvScale:s,strokeWidth:c,scaleSymbolsProportionally:l,scale:u,isSDF:d,baseSize:f,ndc:m,color:x.multiply(C),z:this.clip(e.id,e.zoomRange).add(p.multiply(2)),isOutline:i,evalParams:r,distanceToPx:o.multiply(s)}}};function tn(e,t){return ye(e,E(t))}function nn(e,t,n){let r=n.subtract(t),i=tn(e.subtract(t),r),a=be(i.divide(ve(r)),new U(0),new U(1));return C(e,t.add(a.multiply(n.subtract(t))))}function Z(e){let t=g(e);return I(t.x.add(t.y).add(t.z),new U(1.05))}function Q(e,t,n,r){let a=new i(n.x.multiply(r.y).subtract(r.x.multiply(n.y)),r.x.multiply(t.y).subtract(t.x.multiply(r.y)),t.x.multiply(n.y).subtract(n.x.multiply(t.y)),n.y.subtract(r.y),r.y.subtract(t.y),t.y.subtract(n.y),r.x.subtract(n.x),t.x.subtract(r.x),n.x.subtract(t.x)),o=t.x.multiply(n.y.subtract(r.y)),s=n.x.multiply(r.y.subtract(t.y)),c=r.x.multiply(t.y.subtract(n.y)),l=o.add(s).add(c);return new U(1).divide(l).multiply(a.multiply(new A(1,e)))}function rn(e,t,n,r){return h(Z(Q(e,t,n,r)),new U(1))}function an(e,t,n,i){let a=n.subtract(t),o=i.subtract(t),s=Ve(a,o),c=S(he(s,new U(Me)),u(s,new U(-Me)));return y([S(r(c),rn(e.xy,t,n,i)),new U(-1)],[!0,()=>{let r=nn(e,t,n),a=nn(e,n,i),o=nn(e,i,t);return ue(ue(r,a),o)}])}function on(e,t,n){let{viewMat3:r,tileMat3:i}=e.view,a=r.multiply(i),o=a.multiply(new A(t.pos,1)),s=a.multiply(new A(n.nextPos1,1)),c=a.multiply(new A(n.nextPos2,1));return an(e.hittestRequest.position,o.xy,s.xy,c.xy)}function sn(e,t,n){return C(e,n).subtract(t)}function cn(e,t,n,i){let o=e.x,s=e.y,l=t.x,u=t.y,d=n.x,f=n.y,p=i.x,m=i.y,g=p.subtract(d),_=o.subtract(d),v=l.subtract(o),y=m.subtract(f),b=s.subtract(f),x=u.subtract(s),C=y.multiply(v).subtract(g.multiply(x)),w=g.multiply(b).subtract(y.multiply(_)).divide(C),T=v.multiply(b).subtract(x.multiply(_)).divide(C),E=S(r(h(C,new U(0))),S(S(c(w,new U(0)),j(w,new U(1))),S(c(T,new U(0)),j(T,new U(1)))));return a(E,new U(1),new U(0))}function ln(e,t,n,r,i){return S(S(c(e.x,t),c(e.y,n)),S(he(e.x,r),j(e.y,i)))}function un(e,t,n,r){let i=r.xy,a=r.zw,o=new B(a.x,i.y),s=new B(i.x,a.y),c=ue(i.x,a.x),l=ue(i.y,a.y),d=k(i.x,a.x),f=k(i.y,a.y),p=Q(new B(c,l),e,t,n),m=Q(new B(d,f),e,t,n),g=Q(new B(c,f),e,t,n),_=Q(new B(d,l),e,t,n),v=S(h(Z(p),new U(1)),S(h(Z(m),new U(1)),S(h(Z(g),new U(1)),h(Z(_),new U(1))))),y=cn(i,o,e.xy,t.xy).add(cn(o,a,e.xy,t.xy)).add(cn(s,a,e.xy,t.xy)).add(cn(s,i,e.xy,t.xy)),b=cn(i,o,e.xy,n.xy).add(cn(o,a,e.xy,n.xy)).add(cn(s,a,e.xy,n.xy)).add(cn(s,i,e.xy,n.xy)),x=cn(i,o,t.xy,n.xy).add(cn(o,a,t.xy,n.xy)).add(cn(s,a,t.xy,n.xy)).add(cn(s,i,t.xy,n.xy)),C=ln(e.xy,c,l,d,f),w=ln(t.xy,c,l,d,f),T=ln(n.xy,c,l,d,f),E=S(C,S(w,T));return{hasIntersectingSegments:O(u(y,new U(0)),O(u(b,new U(0)),u(x,new U(0)))),allTriangleVerticesInside:E,triangleContainsRect:v}}function dn(e,t,n,r){let{hasIntersectingSegments:i,allTriangleVerticesInside:o,triangleContainsRect:s}=un(e,t,n,r);return a(i,new U(1),a(O(o,s),new U(2),new U(0)))}function fn(e,t,n,r){let{hasIntersectingSegments:i,allTriangleVerticesInside:o,triangleContainsRect:s}=un(e,t,n,r);return a(O(i,O(o,s)),new U(2),new U(0))}function pn(e){return S(c(e.tlbr.x,new U(0)),c(e.tlbr.y,new U(0)),c(e.tlbr.z,new U(0)),c(e.tlbr.w,new U(0)))}var mn=class extends Ot{};t([N(3,H)],mn.prototype,`color`,void 0),t([N(4,B)],mn.prototype,`zoomRange`,void 0);var hn=class extends jt{constructor(){super(...arguments),this.type=`FillShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let n=Wt(this,e.id),r=Ut(this,e.id,e.color).multiply(n),i=this.view.displayViewScreenMat3.multiply(new A(e.pos.xy,1)),a=this.clip(e.id,e.zoomRange);return{glPosition:new H(i.xy,a,1),color:r,...this.maybeRunHittest(e,t,null)}}fragment(e){return this.getFragmentOutput(e.color,e,new U(0))}hittest(e,t){let{pos0:n,pos1:r,pos2:i}=this.computeHittestTriangle(e,t,null),o=pn(this.hittestRequest);return a(o,()=>{let{tlbr:e}=this.hittestRequest;return fn(n,r,i,e)},()=>{let n=on(this,e,t);return a(u(n,this.hittestRequest.distance),new U(0),new U(2))})}};t([R(Pt)],hn.prototype,`visualVariableColor`,void 0),t([R(Ft)],hn.prototype,`visualVariableOpacity`,void 0),t([e(0,P(mn)),e(1,P(kt))],hn.prototype,`vertex`,null),t([e(0,P(At))],hn.prototype,`fragment`,null);var gn=class extends mn{};t([N(5,H)],gn.prototype,`tlbr`,void 0),t([N(6,U)],gn.prototype,`width`,void 0),t([N(7,U)],gn.prototype,`height`,void 0),t([N(8,B)],gn.prototype,`offset`,void 0),t([N(9,B)],gn.prototype,`scale`,void 0),t([N(10,U)],gn.prototype,`angle`,void 0);var _n=class extends At{};function vn(e,t,n,r,i){let c=h(G(i,2),_(1)),l=qe(new H(e,0));return a(c,re(r.divide(t.x),n.divide(t.y),0,o(n.divide(t.x)),r.divide(t.y),0,Ke(s(l,0)),Ke(s(0,l)),1),re(r.divide(t.x),n.divide(t.y),0,o(n.divide(t.x)),r.divide(t.y),0,0,0,1))}function yn(e,t){let n=e.view.requiredZoomFactor,r=new B(t.width,t.height),i=r.multiply(t.scale).multiply(n),o=t.angle.multiply(Ie),s=m(o),c=le(o),l=vn(t.id,i,s,c,t.bitset),u=e.localTileOffset.getPatternOffsetAtTileOrigin(r,s,c),d=n.multiply(t.scale).multiply(t.offset.subtract(u)).divide(i),f=new A(t.pos,1),p=l.multiply(f).xy.subtract(d),h=t.tlbr.divide(e.mosaicInfo.size.xyxy),g=G(t.bitset,4);return e.visualVariableColor!=null&&(g=a(We(e.getColorValue(t.id)),new U(0),g)),{tileTextureCoord:p,tlbr:h,sampleAlphaOnly:g}}function bn(e,t){let n=w(t.tileTextureCoord,new U(1)),r=F(t.tlbr.xy,t.tlbr.zw,n),i=W(e.mosaicTexture,r);return i=a(u(t.sampleAlphaOnly,new U(.5)),i.aaaa,i),t.color.multiply(i)}var xn=class extends hn{constructor(){super(...arguments),this.type=`ComplexFillShader`}vertex(e,t){return{...super.vertex(e,t),...yn(this,e)}}fragment(e){let t=bn(this,e);return this.getFragmentOutput(t,e,new U(0))}};t([L(Nt)],xn.prototype,`mosaicInfo`,void 0),t([V(d)],xn.prototype,`mosaicTexture`,void 0),t([L(Mt)],xn.prototype,`localTileOffset`,void 0),t([e(0,P(gn)),e(1,P(kt))],xn.prototype,`vertex`,null),t([e(0,P(_n))],xn.prototype,`fragment`,null);var Sn=class extends en{constructor(){super(...arguments),this.type=`AnimatedFillShader`}vertex(e,t){let{distanceToPx:n,ndc:r,z:i,color:a,isOutline:o,strokeWidth:s,isSDF:c,scale:l,scaleSymbolsProportionally:u}=this._vertexPoly(e),d=this.view.requiredZoomFactor,f=e.sizing.xy,p=f.multiply(d),h=e.angle?e.angle.multiply(Ie):new U(0),g=m(h),_=le(h),v=vn(e.id,p,g,_,e.bitset),y=this.localTileOffset.getPatternOffsetAtTileOrigin(f,g,_),b=d.multiply(e.offset.subtract(y)).divide(p),x=new A(e.pos,1),S=v.multiply(x).xy.subtract(b),C=e.tlbr.divide(this.mosaicInfo.size.xyxy);return{glPosition:new H(r,i,1),tlbr:C,uv:S,color:a.multiply(new U(1).subtract(o)),outlineColor:a.multiply(o),distanceToPx:n,strokeWidth:s.multiply(F(new U(1),l,u)),isOutline:o,isSDF:c,...this.maybeRunHittest(e,t,{})}}fragment(e){let t=this._fragmentPoly(e);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,null),s=pn(this.hittestRequest);return a(s,()=>{let{tlbr:e}=this.hittestRequest;return fn(r,i,o,e)},()=>{let n=on(this,e,t);return a(u(n,this.hittestRequest.distance),new U(0),new U(2))})}};t([e(0,P(Zt)),e(1,P(Qt))],Sn.prototype,`vertex`,null),t([e(0,P($t))],Sn.prototype,`fragment`,null);var Cn=class extends Ot{};t([N(3,H)],Cn.prototype,`color`,void 0),t([N(4,B)],Cn.prototype,`offset`,void 0),t([N(5,B)],Cn.prototype,`normal`,void 0),t([N(6,U)],Cn.prototype,`halfWidth`,void 0),t([N(7,U)],Cn.prototype,`referenceHalfWidth`,void 0),t([N(8,B)],Cn.prototype,`zoomRange`,void 0);var wn=class extends At{},Tn=class extends z{};function En(e){return k(new U(Ne).multiply(I(e,new U(1))),new U(1))}function Dn(e,t){let{halfWidth:n,normal:r}=e,i=En(n),a=ve(r).multiply(n);return be(i.multiply(n.subtract(a)).divide(t.add(i).subtract(new U(1))),new U(0),new U(1))}function On(e,t){let{id:n,halfWidth:r,referenceHalfWidth:i}=t;if(Vt(e)){let t=Ht(e,n,new U(2).multiply(i)),o=new U(Pe),s=a(u(r,o),r.divide(k(i,o)),new U(1));return new U(.5).multiply(s).multiply(t)}return r}function kn(e,t){let{id:n,offset:r,pos:i,normal:a,zoomRange:o}=t,{displayViewScreenMat3:s,displayViewMat3:c}=e.view,l=Ut(e,n,t.color),u=Wt(e,n),d=On(e,t),f=new U(.5).multiply(e.antialiasingControls.antialiasing),p=k(d.add(f),new U(.45)).add(new U(.1).multiply(f)),m=En(p).multiply(p).multiply(r).multiply(e.view.scaleFactor),h=c.multiply(new A(m,new U(0))),g=s.multiply(new A(i,new U(1))).add(h),_=new U(2).multiply(I(d,new U(0))).add(e.clip(n,o)),v=new H(g.xy,_,1);return{color:l,opacity:u,halfWidth:p,normal:a,scaledOffset:m,scaledHalfWidth:d,glPosition:new H(v.xy,_,1)}}function An(e,t){let{opacity:n,color:r}=e,i=Dn(e,t);return n.multiply(r).multiply(i)}t([L(U)],Tn.prototype,`antialiasing`,void 0),t([L(U)],Tn.prototype,`blur`,void 0);var jn=class extends jt{constructor(){super(...arguments),this.type=`LineShader`,this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}vertex(e,t){let n=kn(this,e);return{...n,...this.maybeRunHittest(e,t,n.halfWidth)}}fragment(e){let t=An(e,this.antialiasingControls.blur);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,null),s=pn(this.hittestRequest),{distance:c,smallSymbolDistance:l,smallSymbolSizeThreshold:d,tlbr:f}=this.hittestRequest,p=I(n,d.multiply(.5)).multiply(c.subtract(l)),m=this.hittestRequest.position,h=ue(nn(m,r,i),nn(m,r,o)).subtract(n).add(p);return a(s,fn(r,i,o,f),a(u(h,c),new U(0),new U(2)))}};t([L(Tn)],jn.prototype,`antialiasingControls`,void 0),t([R(Pt)],jn.prototype,`visualVariableColor`,void 0),t([R(Ft)],jn.prototype,`visualVariableOpacity`,void 0),t([R(Lt)],jn.prototype,`visualVariableSizeMinMaxValue`,void 0),t([R(Rt)],jn.prototype,`visualVariableSizeScaleStops`,void 0),t([R(zt)],jn.prototype,`visualVariableSizeStops`,void 0),t([R(Bt)],jn.prototype,`visualVariableSizeUnitValue`,void 0),t([e(0,P(Cn)),e(1,P(kt))],jn.prototype,`vertex`,null),t([e(0,P(wn))],jn.prototype,`fragment`,null);var Mn=class extends Zt{};t([N(10,U)],Mn.prototype,`accumulatedDistance`,void 0),t([N(11,B)],Mn.prototype,`normal`,void 0),t([N(12,B)],Mn.prototype,`segmentDirection`,void 0);var Nn=class extends $t{},Pn=class extends en{constructor(){super(...arguments),this.type=`AnimatedLineShader`}vertex(e,t){let{animationPointerAndBaseSizeAndReferenceSize:n}=e,r=n.xy,{distanceToPx:i,ndc:a,z:o,color:s,isOutline:c,strokeWidth:l,isSDF:u,baseSize:d,scale:f,scaleSymbolsProportionally:p,evalParams:m}=this._vertexPoly(e),h=e.sizing.xy,g=h.x.multiply(d).divide(h.y),_=Xt(r,6,m).a.multiply(this.animationInfo.scaleAdjustment),v=e.accumulatedDistance.subtract(_),{normal:y}=e,b=e.normal.y,x=v.divide(this.view.displayZoomFactor).add(ye(e.segmentDirection,e.offset)).divide(g),S=b.add(1).divide(2),C=new B(x,S),w=e.tlbr.divide(this.mosaicInfo.size.xyxy),T=d.divide(2),E=new U(.5).multiply(this.antialiasingControls.antialiasing),D=k(T.add(E),new U(.45)).add(new U(.1).multiply(E));return{glPosition:new H(a,o,1),tlbr:w,uv:C,color:s.multiply(new U(1).subtract(c)),outlineColor:s.multiply(c),distanceToPx:i,strokeWidth:l.multiply(F(new U(1),f,p)),isOutline:c,isSDF:u,halfWidth:D,normal:y,...this.maybeRunHittest(e,t,D)}}fragment(e){let t=this._fragmentPoly(e),n=Dn(e,this.antialiasingControls.blur),{halfWidth:r,normal:i}=e,a=En(r),o=ve(i).multiply(r),s=be(a.multiply(r.subtract(o)).divide(a.subtract(new U(1))),new U(0),new U(1));return this.getFragmentOutput(t.multiply(s).multiply(n),e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,null),s=pn(this.hittestRequest),{distance:c,smallSymbolDistance:l,smallSymbolSizeThreshold:d,tlbr:f}=this.hittestRequest,p=I(n,d.multiply(.5)).multiply(c.subtract(l)),m=this.hittestRequest.position,h=ue(nn(m,r,i),nn(m,r,o)).subtract(n).add(p);return a(s,fn(r,i,o,f),a(u(h,c),new U(0),new U(2)))}};t([L(Tn)],Pn.prototype,`antialiasingControls`,void 0),t([e(0,P(Mn)),e(1,P(Qt))],Pn.prototype,`vertex`,null),t([e(0,P(Nn))],Pn.prototype,`fragment`,null);var Fn=class extends qt{};t([N(9,B)],Fn.prototype,`uv`,void 0),t([N(10,U)],Fn.prototype,`angle`,void 0);var In=class extends ie{};t([N(11,B)],In.prototype,`offsetNextVertex1`,void 0),t([N(12,B)],In.prototype,`offsetNextVertex2`,void 0),t([N(13,B)],In.prototype,`textureUVNextVertex1`,void 0),t([N(14,B)],In.prototype,`textureUVNextVertex2`,void 0);var Ln=class extends Jt{};function Rn(e,t,n,r){return t.multiply(e.x).add(n.multiply(e.y)).add(r.multiply(e.z))}var zn=class extends Yt{constructor(){super(...arguments),this.type=`AnimatedMarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],uv:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let n=e.uv.divide(this.mosaicInfo.size),{position:r,animationPointer:o,evalParams:s,isOutline:c,unscaledDistanceToPx:l,vvScale:u,strokeWidth:d,scaleSymbolsProportionally:f,scale:p,isSDF:m,baseSize:h,clip:g}=this._vertexPreamble(e,e.angle,e.lineLength||new U(0)),_=this._toNdc(r),v=Xt(o,1,s);v=new H(v.rgb.multiply(v.a),v.a);let y=a(ze(e.bitset,De.bitset.colorLocked),v,Xt(o,2,s));y=new H(y.rgb.multiply(y.a),y.a);let b=Xt(o,3,s);b=new H(b.rgb.multiply(b.a),b.a);let x=Xt(o,4,s).a,S=Xt(o,5,s).a,C=Ut(this,e.id,v,O(ze(e.bitset,De.bitset.colorLocked),new ce(c))),w=F(C,y,b),T=Wt(this,e.id),E=F(T,x,S),D=w.multiply(E),k=this.clip(e.id,e.zoomRange).add(g.multiply(2)),A=l.multiply(u);return{glPosition:new H(_,k,1),uv:n,color:D.multiply(new U(1).subtract(c)),outlineColor:D.multiply(c),distanceToPx:A,strokeWidth:d.multiply(F(new U(1),p,f)),isOutline:c,isSDF:m,...this.maybeRunHittest(e,t,{pos:e.pos,size:h,sizeCorrection:new U(1),isMapAligned:new U(1),vvRotationMat3:new i(1,0,0,0,1,0,0,0,1),placementMat3:new i(1,0,0,0,1,0,0,0,1),outlineSize:new U(1),distanceToPx:A,isSDF:m})}}fragment(e){let t=this._getColor(e.uv,{color:e.color,distanceToPx:e.distanceToPx,isSDF:e.isSDF,outlineColor:e.outlineColor,outlineSize:e.strokeWidth});return xt.spotlightAnimatedSymbols&&(t=t.add(new H(0,.3,0,.3))),this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,n),s=pn(this.hittestRequest);return a(s,()=>{let{tlbr:e}=this.hittestRequest;return dn(r,i,o,e)},()=>a(he(n.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,n),this._hittestMarker(e,t,n)))}_hittestSmallMarker(e,t,n){let{position:r,distance:i,smallSymbolDistance:o}=this.hittestRequest,s=i.subtract(o),{viewMat3:c,tileMat3:l}=this.view,d=c.multiply(l).multiply(new A(n.pos,1)).xy,f=n.size.multiply(.5),p=C(d,r).subtract(f).add(s);return a(u(p,this.hittestRequest.distance),new U(0),new U(2))}_hittestMarker(e,t,n){let r=this._vertexPreamble({...e},e.angle,new U(0)).position,i=this._vertexPreamble({...e,offset:t.offsetNextVertex1},e.angle,new U(0)).position,o=this._vertexPreamble({...e,offset:t.offsetNextVertex2},e.angle,new U(0)).position,s=this.hittestRequest.position,c=this.hittestRequest.distance,l=an(s,r,i,o);return a(u(l,c),new U(0),this._hittestSamples(r,i,o,e,t,n))}_hittestSamples(e,t,n,r,i,s){let{outlineSize:c,isSDF:l,distanceToPx:d}=s,f=this.hittestRequest.position,p=this.hittestRequest.distance,m=Q(f.add(new B(o(p),o(p))),e,t,n),h=Q(f.add(new B(0,o(p))),e,t,n),g=Q(f.add(new B(p,o(p))),e,t,n),_=Q(f.add(new B(o(p),0)),e,t,n),v=Q(f,e,t,n),y=Q(f.add(new B(p,0)),e,t,n),b=Q(f.add(new B(o(p),p)),e,t,n),x=Q(f.add(new B(0,p)),e,t,n),S=Q(f.add(new B(p,p)),e,t,n),C=r.uv.divide(this.mosaicInfo.size),w=i.textureUVNextVertex1.divide(this.mosaicInfo.size),T=i.textureUVNextVertex2.divide(this.mosaicInfo.size),E={color:new H(1,1,1,1),outlineSize:c,outlineColor:new H(1,1,1,1),isSDF:l,distanceToPx:d},D=new U(0);return D=D.add(Z(m).multiply(this._getColor(Rn(m,C,w,T),E).a)),D=D.add(Z(h).multiply(this._getColor(Rn(h,C,w,T),E).a)),D=D.add(Z(g).multiply(this._getColor(Rn(g,C,w,T),E).a)),D=D.add(Z(_).multiply(this._getColor(Rn(_,C,w,T),E).a)),D=D.add(Z(v).multiply(this._getColor(Rn(v,C,w,T),E).a)),D=D.add(Z(y).multiply(this._getColor(Rn(y,C,w,T),E).a)),D=D.add(Z(b).multiply(this._getColor(Rn(b,C,w,T),E).a)),D=D.add(Z(x).multiply(this._getColor(Rn(x,C,w,T),E).a)),D=D.add(Z(S).multiply(this._getColor(Rn(S,C,w,T),E).a)),a(u(D,new U(.05)),new U(2),new U(0))}};t([e(0,P(Fn)),e(1,P(In))],zn.prototype,`vertex`,null),t([e(0,P(Ln))],zn.prototype,`fragment`,null);var $=class extends D{constructor(){super(...arguments),this.symbologyPlane=0,this._input=null}};function Bn(e){let t=1/e;return{antialiasing:t,blur:0+t}}var Vn=class extends ${render(e,t){let{context:n,painter:r,pixelRatio:i}=e,{target:a}=t,{freezeGlobalTime:o}=xt,s=r.textureManager.animationStore.getTexture(n,0),c=[2/e.state.size[0],0,0,0,-2/e.state.size[1],0,-1,1,1],l=Array.from(Xe(Ze(),c)),u=Array.from(Ye(Ze(),l,a.transforms.displayViewScreenMat3)),d=t.instance.getInput(),f=r.textureManager.getMosaicInfo(e,t.textureKey,!1),{optionalAttributes:p}=d,m=p.zoomRange,h=p.value1Position2Value2,g=`accumulatedDistance`in p&&p.accumulatedDistance,_=`segmentDirection`in p&&p.segmentDirection,v=`normal`in p&&p.normal,y=2**(t.target.key.level-e.displayLevel);r.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,d.uniforms),...K(e,t.target),antialiasingControls:Bn(i),mosaicInfo:f,animationInfo:{globalTime:e.animationsEnabled?!1===o?e.time/1e3:o:0,scaleAdjustment:y,animationTextureSize:[s.descriptor.width,s.descriptor.height],toScreen:u,toNdc:c,mapRotation:e.state.rotation,pixelRatio:e.state.pixelRatio},localTileOffset:Qe(t.target)},textures:{...q(e),mosaicTexture:r.textureManager.getMosaicTexture(e,t.textureKey,!1),animationTexture:{unit:6,texture:s}},defines:{...J(e)},optionalAttributes:{zoomRange:m,value1Position2Value2:h,accumulatedDistance:g,segmentDirection:_,normal:v},useComputeBuffer:X(e)}),r.setPipelineState({...Y(e)}),r.submitDraw(e,t),!1===o&&e.animationsEnabled&&a.requestRender()}},Hn=class extends Vn{constructor(){super(...arguments),this.type=2,this.symbologyPlane=2,this.shaders={geometry:new zn}}},Un=class extends Vn{constructor(){super(...arguments),this.type=3,this.symbologyPlane=2,this.shaders={geometry:new zn}}},Wn=class extends Vn{constructor(){super(...arguments),this.type=0,this.symbologyPlane=0,this.shaders={geometry:new Sn}}},Gn=class extends Vn{constructor(){super(...arguments),this.type=1,this.symbologyPlane=1,this.shaders={geometry:new Pn}}},Kn=class extends se{};t([N(0,B)],Kn.prototype,`pos`,void 0);var qn=class extends At{},Jn=class extends z{};t([L(U)],Jn.prototype,`dotSize`,void 0);var Yn=class extends z{};t([L(U)],Yn.prototype,`pixelRatio`,void 0),t([L(U)],Yn.prototype,`tileZoomFactor`,void 0);var Xn=1e-6,Zn=class extends me{constructor(){super(...arguments),this.type=`DotDensityPointShader`}vertex(e){let t=new i(1,0,0,0,-1,0,0,1,1).multiply(new A(e.pos.xy.divide(512),1)),n=W(this.drawLocations,t.xy),r=k(this.instance.dotSize.divide(2),new U(1)),a=new U(0);a=a.add(I(n.a,new U(Xn)).multiply(2));let o=r.add(this.instance.dotSize),s=this.view.displayViewScreenMat3.multiply(new A(e.pos.add(.5),1)),c=new H(s.xy,a,1),l=this.instance.dotSize.divide(o),u=new U(-1).divide(r.divide(o));return o=o.multiply(this.draw.pixelRatio.multiply(this.draw.tileZoomFactor)),{glPosition:c,glPointSize:o,color:n,ratio:l,invEdgeRatio:u}}fragment(e){let t=ve(e.glPointCoord.subtract(.5)).multiply(2),n=_e(new U(0),new U(1),e.invEdgeRatio.multiply(t.subtract(e.ratio)).add(1)),r=new de;return r.fragColor=e.color.multiply(n),r}};t([L(Jn)],Zn.prototype,`instance`,void 0),t([L(Yn)],Zn.prototype,`draw`,void 0),t([L(Dt)],Zn.prototype,`view`,void 0),t([V(d)],Zn.prototype,`drawLocations`,void 0),t([e(0,P(Kn))],Zn.prototype,`vertex`,null),t([e(0,P(qn))],Zn.prototype,`fragment`,null);var Qn=class extends Ot{};t([N(3,U)],Qn.prototype,`inverseArea`,void 0);var $n=class extends z{};t([L(T.ofType(H,2))],$n.prototype,`isActive`,void 0),t([L(T.ofType(H,8))],$n.prototype,`colors`,void 0),t([L(U)],$n.prototype,`dotValue`,void 0);var er=class extends z{};t([L(U)],er.prototype,`tileZoomFactor`,void 0),t([L(U)],er.prototype,`pixelRatio`,void 0),t([L(U)],er.prototype,`tileDotsOverArea`,void 0);var tr=class extends ge{};t([V(d)],tr.prototype,`dotTexture0`,void 0),t([V(d)],tr.prototype,`dotTexture1`,void 0);var nr=class extends jt{constructor(){super(...arguments),this.type=`DotDensityPolygonShader`}_dotThreshold(e,t,n){return e.divide(t).divide(n)}vertex(e){let t=new i(2/512,0,0,0,-2/512,0,-1,1,1).multiply(new A(e.pos,1)),n=this.clip(e.id),r=new H(t.xy,n,1),a=this.getVVData(e.id).multiply(this.instance.isActive.get(0)).multiply(e.inverseArea),o=this.storageTextures.getDataDrivenData0(this.getAttributeDataCoords(e.id)).multiply(this.instance.isActive.get(1)).multiply(e.inverseArea),s=this.draw.tileZoomFactor.multiply(512).divide(this.draw.pixelRatio),c=this._dotThreshold(a,this.instance.dotValue,this.draw.tileDotsOverArea),l=this._dotThreshold(o,this.instance.dotValue,this.draw.tileDotsOverArea),u=e.pos.add(.5).divide(s);return{glPosition:r,color:new H(0,0,0,0),textureCoords:u,thresholds0:c,thresholds1:l}}fragment(e){let t=new de,n=W(this.drawTextures.dotTexture0,e.textureCoords),r=W(this.drawTextures.dotTexture1,e.textureCoords),i=e.thresholds0.subtract(n),a=e.thresholds1.subtract(r),o,s=pe.fromColumns(this.instance.colors.get(0),this.instance.colors.get(1),this.instance.colors.get(2),this.instance.colors.get(3)),c=pe.fromColumns(this.instance.colors.get(4),this.instance.colors.get(5),this.instance.colors.get(6),this.instance.colors.get(7));if(this.blending){let e=I(new U(0),i),t=I(new U(0),a),n=ye(e,i).add(ye(t,a)),r=I(n,new U(0)),l=new U(1).subtract(r),u=n.add(r),d=i.multiply(e).divide(u),f=a.multiply(t).divide(u),p=s.multiply(d).add(c.multiply(f));o=l.multiply(p)}else{let e=k(He(i),He(a)),t=I(e,new U(0)),n=new U(1).subtract(t),r=I(e,i),l=I(e,a),u=s.multiply(r).add(c.multiply(l));o=n.multiply(u)}return t.fragColor=o,t}hittest(e){return new U(0)}};t([M],nr.prototype,`blending`,void 0),t([L($n)],nr.prototype,`instance`,void 0),t([L(er)],nr.prototype,`draw`,void 0),t([V(tr)],nr.prototype,`drawTextures`,void 0),t([e(0,P(Qn))],nr.prototype,`vertex`,null),t([e(0,P(At))],nr.prototype,`fragment`,null);var rr={pos:{count:2,type:lt.UNSIGNED_SHORT}},ir=class{constructor(){this._dotTextureSize=0,this._dotTextures=null,this._dotMesh=null}destroy(){this._disposeTextures(),this._dotFBO?.dispose(),this._dotMesh?.destroy()}getFBO(e){if(this._dotFBO==null){let t=new pt(512,512);t.samplingMode=9728,t.wrapMode=33071;let n=new dt(e,new ut(at.DEPTH24_STENCIL8,512,512));this._dotFBO=new ft(e,t,n)}return this._dotFBO}getDotDensityMesh(e){if(this._dotMesh==null){let t=262144,n=new Int16Array(t*2);for(let e=0;e<512;e++)for(let t=0;t<512;t++)n[2*(t+e*512)]=t,n[2*(t+e*512)+1]=e;this._dotMesh=it.create(e,{primitive:ot.POINTS,vertex:n,count:t,layout:rr})}return this._dotMesh}getDotDensityTextures(e,t,n){if(this._dotTextureSize===t&&this._seed===n||(this._disposeTextures(),this._dotTextureSize=t,this._seed=n),this._dotTextures===null){let r=new rt(n);this._dotTextures=[this._allocDotDensityTexture(e,t,r),this._allocDotDensityTexture(e,t,r)]}return this._dotTextures}_disposeTextures(){if(this._dotTextures){for(let e=0;e<this._dotTextures.length;e++)this._dotTextures[e].dispose();this._dotTextures=null}}_allocDotDensityTexture(e,t,n){let r=new Float32Array(t*t*4);for(let e=0;e<r.length;e++)r[e]=n.getFloat();let i=new pt(t);return i.dataType=ct.FLOAT,i.samplingMode=9728,new mt(e,i,r)}},ar=class extends ${constructor(){super(...arguments),this.type=12,this.shaders={polygon:new nr,point:new Zn,fill:new hn},this._resources=new Map}render(e,t){nt(e)||X(e)?this._renderPolygons(e,t):this._renderDotDensity(e,t)}_renderPolygons(e,t){let{painter:n}=e;n.setShader({shader:this.shaders.fill,uniforms:{...K(e,t.target),visualVariableColor:null,visualVariableOpacity:null},textures:q(e),defines:{...J(e)},optionalAttributes:{zoomRange:!1},useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}_renderDotDensity(e,t){let{context:n,painter:r,requiredLevel:i}=e,a=t.instance.getInput().uniforms,o=this._getOrCreateResourcesRecord(n),s=o.getDotDensityTextures(n,512,a.seed),c=1/2**(i-t.target.key.level),l=512*window.devicePixelRatio*512*window.devicePixelRatio,u=1/c*(1/c),d=a.dotScale?e.state.scale/a.dotScale:1,f=a.dotValue*d*u;r.setShader({shader:this.shaders.polygon,uniforms:{...K(e,t.target),instance:{isActive:a.isActive,colors:a.colors,dotValue:Math.max(1,f)},draw:{tileZoomFactor:c,pixelRatio:window.devicePixelRatio,tileDotsOverArea:l/(512*window.devicePixelRatio*512*window.devicePixelRatio)}},textures:{...q(e),drawTextures:{dotTexture0:{unit:5,texture:s[0]},dotTexture1:{unit:6,texture:s[1]}}},defines:{...J(e),blending:a.blending},optionalAttributes:{},useComputeBuffer:!1});let p=n.getViewport();n.setViewport(0,0,512,512);let m=n.boundFramebuffer,h=o.getFBO(n);n.bindFramebuffer(h),n.setClearColor(0,0,0,0),n.clear(16384),r.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1}),r.updatePipelineState(n),r.submitDraw(e,t),n.bindFramebuffer(m),n.setViewport(p.x,p.y,p.width,p.height);let g=o.getFBO(n).colorTexture,_={shader:this.shaders.point,uniforms:{view:et(e,t.target),instance:{dotSize:a.dotSize},draw:{tileZoomFactor:1,pixelRatio:window.devicePixelRatio}},textures:{drawLocations:{unit:5,texture:g}},defines:{...J(e)},optionalAttributes:{},useComputeBuffer:!1};r.setPipelineState(Y(e)),r.submitDrawMesh(n,_,o.getDotDensityMesh(n),{stencilRef:t.getStencilReference()})}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e)}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new ir,this._resources.set(e,t)),t}},or=class extends ${constructor(){super(...arguments),this.type=10,this.shaders={geometry:new xn}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,r.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Qe(t.target)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},sr=class extends Ot{};t([N(3,B)],sr.prototype,`offset`,void 0),t([N(4,H)],sr.prototype,`color`,void 0),t([N(5,B)],sr.prototype,`normal`,void 0),t([N(6,U)],sr.prototype,`halfWidth`,void 0),t([N(7,U)],sr.prototype,`referenceHalfWidth`,void 0),t([N(8,B)],sr.prototype,`zoomRange`,void 0);var cr=class extends wn{};function lr(e,t,n){let{id:r,bitset:i}=t,o=G(i,0),s=u(o,new U(.5)),c=kn(e,t),l=a(s,c.halfWidth,new U(0)),d=Wt(e,r),f=Ut(e,r,t.color),p=a(s,a(ze(i,1),f,t.color),f.multiply(d)),m=e.view.displayViewScreenMat3.multiply(new A(t.pos.xy,1)),h=e.clip(t.id),g=new H(m.xy,h,1),_=a(s,c.glPosition,g),v=n&&e.maybeRunHittest(t,n,s);return{isOutline:o,color:p,opacity:new U(1),halfWidth:l,normal:c.normal,glPosition:_,...v}}var ur=class extends jt{constructor(){super(...arguments),this.computeAttributes={pos:[`nextPos1`,`nextPos2`]}}};t([L(Tn)],ur.prototype,`antialiasingControls`,void 0),t([R(Pt)],ur.prototype,`visualVariableColor`,void 0),t([R(Ft)],ur.prototype,`visualVariableOpacity`,void 0),t([R(Lt)],ur.prototype,`visualVariableSizeMinMaxValue`,void 0),t([R(Rt)],ur.prototype,`visualVariableSizeScaleStops`,void 0),t([R(zt)],ur.prototype,`visualVariableSizeStops`,void 0),t([R(Bt)],ur.prototype,`visualVariableSizeUnitValue`,void 0);var dr=class extends ur{constructor(){super(...arguments),this.type=`OutlineFillShader`}vertex(e,t){return lr(this,e,t)}fragment(e){let{color:t,isOutline:n}=e,r=u(n,new U(.5)),i=An(e,this.antialiasingControls.blur),o=a(r,i,t),s=a(r,new U(1/255),new U(0));return this.getFragmentOutput(o,e,s)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,null),s=pn(this.hittestRequest);return a(s,()=>{let{tlbr:e}=this.hittestRequest;return fn(r,i,o,e)},()=>{let r=on(this,e,t);return a(O(n,u(r,this.hittestRequest.distance)),new U(0),new U(2))})}};t([e(0,P(sr)),e(1,P(kt))],dr.prototype,`vertex`,null),t([e(0,P(cr))],dr.prototype,`fragment`,null);var fr=class extends mn{};t([N(5,H)],fr.prototype,`tlbr`,void 0),t([N(6,U)],fr.prototype,`inverseRasterizationScale`,void 0);var pr=class extends At{};function mr(e){let t=new U(1),n=new U(0);return new i(t.divide(e.x),n.divide(e.y),0,o(n.divide(e.x)),t.divide(e.y),0,0,0,1)}function hr(e,t){let n=t.tlbr.xy,r=t.tlbr.zw,i=r.x.subtract(n.x),a=n.y.subtract(r.y),o=new B(i,a).multiply(t.inverseRasterizationScale),s=o.multiply(e.view.requiredZoomFactor),c=mr(s),l=e.localTileOffset.getPatternOffsetAtTileOrigin(o).divide(s),u=new A(t.pos,1);return{tileTextureCoord:c.multiply(u).xy.subtract(l),tlbr:t.tlbr.divide(e.mosaicInfo.size.xyxy)}}function gr(e,t){let n=w(e.tileTextureCoord,new U(1)),r=F(e.tlbr.xy,e.tlbr.zw,n),i=W(t.mosaicTexture,r);return e.color.multiply(i)}var _r=class extends hn{constructor(){super(...arguments),this.type=`PatternFillShader`}vertex(e,t){return{...super.vertex(e,t),...hr(this,e)}}fragment(e){let t=gr(e,this);return this.getFragmentOutput(t,e,new U(0))}};t([L(Nt)],_r.prototype,`mosaicInfo`,void 0),t([V(d)],_r.prototype,`mosaicTexture`,void 0),t([L(Mt)],_r.prototype,`localTileOffset`,void 0),t([e(0,P(fr)),e(1,P(kt))],_r.prototype,`vertex`,null),t([e(0,P(pr))],_r.prototype,`fragment`,null);var vr=class extends sr{};t([N(9,H)],vr.prototype,`tlbr`,void 0),t([N(10,U)],vr.prototype,`inverseRasterizationScale`,void 0);var yr=class extends cr{},br=class extends dr{constructor(){super(...arguments),this.type=`PatternOutlineFillShader`}vertex(e,t){return{...lr(this,e,t),...hr(this,e)}}fragment(e){let{isOutline:t}=e,n=u(t,new U(.5)),r=An(e,this.antialiasingControls.blur),i=gr(e,this),o=a(n,r,i),s=a(n,new U(1/255),new U(0));return this.getFragmentOutput(o,e,s)}};t([L(Nt)],br.prototype,`mosaicInfo`,void 0),t([V(d)],br.prototype,`mosaicTexture`,void 0),t([L(Mt)],br.prototype,`localTileOffset`,void 0),t([e(0,P(vr)),e(1,P(kt))],br.prototype,`vertex`,null),t([e(0,P(yr))],br.prototype,`fragment`,null);var xr=1/16,Sr=class extends Ot{};t([N(3,H)],Sr.prototype,`color`,void 0),t([N(4,H)],Sr.prototype,`tlbr`,void 0),t([N(5,U)],Sr.prototype,`angle`,void 0),t([N(6,U)],Sr.prototype,`aux1`,void 0),t([N(7,U)],Sr.prototype,`aux2`,void 0),t([N(8,B)],Sr.prototype,`aux3`,void 0),t([N(9,B)],Sr.prototype,`aux4`,void 0),t([N(10,B)],Sr.prototype,`zoomRange`,void 0);var Cr=class extends yr{},wr=class extends ur{constructor(){super(...arguments),this.type=`ComplexOutlineFillShader`}vertex(e,t){let{aux1:n,aux2:r,aux3:i,aux4:a}=e,o={...e,width:n,height:r,offset:i,scale:a.multiply(xr)},s={...e,halfWidth:n,referenceHalfWidth:r,offset:i,normal:a.subtract(128).multiply(xr)},c=lr(this,s),l=yn(this,o),d=u(c.isOutline,new U(.5));return{...c,...l,...Object.assign({},this.maybeRunHittest(e,t,d))}}fragment(e){let{isOutline:t}=e,n=u(t,new U(.5)),r=An(e,this.antialiasingControls.blur),i=bn(this,e),o=a(n,r,i),s=a(n,new U(1/255),new U(0));return this.getFragmentOutput(o,e,s)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,null),s=pn(this.hittestRequest);return a(s,()=>{let{tlbr:e}=this.hittestRequest;return fn(r,i,o,e)},()=>{let r=on(this,e,t);return a(O(n,u(r,this.hittestRequest.distance)),new U(0),new U(2))})}};t([L(Nt)],wr.prototype,`mosaicInfo`,void 0),t([V(d)],wr.prototype,`mosaicTexture`,void 0),t([L(Mt)],wr.prototype,`localTileOffset`,void 0),t([e(0,P(Sr)),e(1,P(kt))],wr.prototype,`vertex`,null),t([e(0,P(Cr))],wr.prototype,`fragment`,null);var Tr=class extends ${constructor(){super(...arguments),this.type=11,this.shaders={geometry:new wr}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),antialiasingControls:Bn(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Qe(t.target)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Er=class extends ${constructor(){super(...arguments),this.type=15,this.shaders={geometry:new hn}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,r.uniforms),...K(e,t.target)},textures:q(e),defines:J(e),optionalAttributes:r.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Dr=class extends mn{};t([N(5,H)],Dr.prototype,`tlbr`,void 0),t([N(6,B)],Dr.prototype,`relativePosition`,void 0),t([N(7,U)],Dr.prototype,`gradientMethod`,void 0),t([N(8,B)],Dr.prototype,`relativeGradientSize`,void 0);var Or=class extends At{},kr=class extends hn{constructor(){super(...arguments),this.type=`GradientFillShader`}vertex(e,t){let{tlbr:n,relativePosition:r,gradientMethod:i,relativeGradientSize:o}=e,s=a(ze(e.bitset,Oe.isAbsolute),this.view.displayZoomFactor,new U(1));return{...super.vertex(e,t),tlbr:n,relativePosition:r,gradientMethod:i,gradientSize:o.multiply(s),isDiscrete:G(e.bitset,Oe.isDiscrete)}}fragment(e){let{tlbr:t,relativePosition:n,gradientMethod:r,gradientSize:i,isDiscrete:o}=e,s=a(u(o,new U(.5)),i.subtract(1),new B(0)),c=y([h(r,new U(ke.rectangular)),()=>{let e=g(n).add(s).divide(i);return Re(k(e.x,e.y))}],[h(r,new U(ke.circular)),Re(ae(ye(n,n)).add(s.x).divide(i.x))],[!0,Re(n.x.add(s.x).divide(i.x))]),l=new B(be(c,new U(0),new U(1)),.5),d=F(t.xy,t.zw,l).divide(this.mosaicInfo.size),f=W(this.mosaicTexture,d),p=e.color.a;return this.getFragmentOutput(f.multiply(p),e,new U(0))}};t([L(Nt)],kr.prototype,`mosaicInfo`,void 0),t([V(d)],kr.prototype,`mosaicTexture`,void 0),t([e(0,P(Dr)),e(1,P(kt))],kr.prototype,`vertex`,null),t([e(0,P(Or))],kr.prototype,`fragment`,null);var Ar=class extends ${constructor(){super(...arguments),this.type=16,this.shaders={geometry:new kr},this.symbologyPlane=0}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,r.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},jr=class extends ${constructor(){super(...arguments),this.type=26,this.shaders={geometry:new dr}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),antialiasingControls:Bn(r)},textures:q(e),defines:{...J(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Mr=class extends ${constructor(){super(...arguments),this.type=28,this.shaders={geometry:new _r}}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,r.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Qe(t.target)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Nr=class extends ${constructor(){super(...arguments),this.type=29,this.shaders={geometry:new br}}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),antialiasingControls:Bn(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey),localTileOffset:Qe(t.target)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Pr=class{constructor(e,t,n,r){this.startTime=e,this.startValue=t,this.endTime=n,this.endValue=r}getValue(e){if(e<=this.startTime)return this.startValue;if(e>=this.endTime)return this.endValue;let t=(e-this.startTime)/(this.endTime-this.startTime);return this.startValue+t*(this.endValue-this.startValue)}isForeverZero(e){return this.startValue===0&&this.endValue===0||this.endValue===0&&e>=this.endTime}};function Fr(e,t){return typeof e==`number`?e:e.getValue(t)}function Ir(e){return typeof e==`number`?e:e.endValue}function Lr(e,t){return typeof e==`number`?e===0:e.isForeverZero(t)}function Rr(e,t,n,r){return e===n?e:new Pr(e,t,n,r)}function zr(e,t,n){let r=Fr(e,n),i=r*t;return i===0?0:Rr(n,r,n+i,0)}function Br(e,t){let n=!0;return n&&=e.collisions===t.collisions,n&&=e.density===t.density,n&&=e.interpolate===t.interpolate,n&&=e.lineCollisionWidth===t.lineCollisionWidth,n&&=e.lineSpacing===t.lineSpacing,n&&=e.maxTurnAngle===t.maxTurnAngle,n&&=e.minSpeedThreshold===t.minSpeedThreshold,n&&=e.segmentLength===t.segmentLength,n&&=e.smoothing===t.smoothing,n&&=e.velocityScale===t.velocityScale,n&&=e.verticesPerLine===t.verticesPerLine,n&&=e.onlyForwardTracing===t.onlyForwardTracing,n&&=e.continuous===t.continuous,n&&=e.maxNumberOfStreamlines===t.maxNumberOfStreamlines,n&&=Vr(e.perturb,t.perturb),n}function Vr(e,t){return!e&&!t||!(e&&!t||!e&&t)&&e?.rotation===t?.rotation&&e?.scale===t?.scale}function Hr(e){let t=Kr(Gr(e)),n=t,r=Math.max(t/2,5),i=Math.round(ht(e.maxPathLength)/r)+1,{density:a}=e,o=ht(e.smoothing),s=e.flowRepresentation===`flow-from`?1:-1,{continuous:c,perturb:l}=e;return{smoothing:o,interpolate:!0,velocityScale:s,verticesPerLine:i,minSpeedThreshold:.001,segmentLength:r,maxTurnAngle:1,collisions:!0,lineCollisionWidth:n,lineSpacing:10,density:a,onlyForwardTracing:!1,continuous:c,perturb:l,wrapAround:!1,maxNumberOfStreamlines:1/0}}function Ur(e,t,n,r){if(e.length===0)return[];let i=[],a=n.time-t.time,o=_t(e),s=o?vt(e[0].hasMagnitude):1,c=o?({vertices:e},t)=>{let n=e,r=t*s;return{x:n[r],y:n[r+1],time:gt(n[r+2]),speed:0}}:({vertices:e},t)=>e[t];for(let o of e){let{stage:e,vertices:l}=o;if(e===2)continue;let u=l.length/s,d=c(o,0),f=d.time,p=(a*r-f)%(c(o,u-1).time-f)+f,m=d.x,h=d.y,g=d.time;for(let e=1;e<u&&g<p;e++){let t=c(o,e),n=Math.min(t.time,p)-g,r=t.time-g;m+=(t.x-m)*(n/r),h+=(t.y-h)*(n/r),g=gt(g+n)}i.push(Wr(m,h,t,n))}return i}function Wr(e,t,n,r){return e/=n.size[0],t=1-(t/=n.size[1]),e*=n.extent.xmax-n.extent.xmin,t*=n.extent.ymax-n.extent.ymin,e+=n.extent.xmin,t+=n.extent.ymin,e-=r.extent.xmin,t-=r.extent.ymin,e/=r.extent.xmax-r.extent.xmin,t=1-(t/=r.extent.ymax-r.extent.ymin),{x:e*=r.size[0],y:t*=r.size[1]}}function Gr(e){if(!e.hasVisualVariables(`size`))return{kind:`constant`,value:[ht(e.trailWidth)]};let t=e.getVisualVariablesForType(`size`)[0],n=[],r=[],i;if(t.stops){for(let e of t.stops)n.push(e.value),r.push(ht(e.size));i=t.stops.length}else n.push(t.minDataValue,t.maxDataValue),r.push(ht(t.minSize),ht(t.maxSize)),i=2;return{kind:`ramp`,stops:n,values:r,count:i}}function Kr(e){return e.kind===`constant`?e.value[0]:e.values[e.values.length-1]}function qr(e){let t=e.toRgba();return[t[0]/255,t[1]/255,t[2]/255,t[3]]}function Jr(e){return{kind:`constant`,value:[.1,.1,.1,1]}}function Yr(e){if(!e.hasVisualVariables(`color`))return{kind:`constant`,value:qr(e.color)};let t=e.getVisualVariablesForType(`color`)[0],n=[],r=[];for(let e of t.stops)n.push(e.value),Array.prototype.push.apply(r,qr(e.color));return{kind:`ramp`,stops:n,values:r,count:t.stops.length}}function Xr(e){if(!e.hasVisualVariables(`opacity`))return{kind:`constant`,value:[1]};let t=e.getVisualVariablesForType(`opacity`)[0],n=[],r=[];for(let e of t.stops)n.push(e.value),r.push(e.opacity);return{kind:`ramp`,stops:n,values:r,count:t.stops.length}}var Zr=8;function Qr(e){if(e.kind===`constant`)return{constant:e.value,count:1,stops:Array(Zr).fill(0),values:Array(Zr).fill(e.value)};let t=Math.min(e.count,Zr),n=Array(Zr).fill(e.stops[t-1]),r=Array(Zr).fill(null).map((n,r)=>{let i=4*Math.min(r,t-1);return e.values.slice(i,i+4)});for(let r=0;r<t;r++)n[r]=e.stops[r];return{constant:[0,0,0,0],count:t,stops:n,values:r}}function $r(e){if(e.kind===`constant`)return{constant:e.value[0],count:1,stops:Array(Zr).fill(0),values:Array(Zr).fill(e.value[0])};let t=Math.min(e.count,Zr),n=Array(Zr).fill(e.stops[t-1]),r=Array(Zr).fill(e.values[t-1]);for(let i=0;i<t;i++)n[i]=e.stops[i],r[i]=e.values[i];return{constant:0,count:t,stops:n,values:r}}function ei(e,t){return e===t||e!=null&&t!=null&&e.equals(t)}function ti(e,t){if(!Br(e.simulationSettings,t.simulationSettings)||!ei(e.timeExtent,t.timeExtent))return!1;let n=!0;return n&&=e.loadImagery===t.loadImagery,n&&=e.createFlowMesh===t.createFlowMesh,n&&=e.color.kind===t.color.kind,n&&=e.opacity.kind===t.opacity.kind,n&&=e.size.kind===t.size.kind,n}var ni=36e5,ri=3600,ii=class extends z{};t([L(U)],ii.prototype,`time`,void 0),t([L(i)],ii.prototype,`dvsMat3`,void 0),t([L(i)],ii.prototype,`displayViewMat3`,void 0),t([L(U)],ii.prototype,`displayOpacity`,void 0),t([L(U)],ii.prototype,`startTime`,void 0),t([L(U)],ii.prototype,`endTime`,void 0);var ai=class extends z{};t([L(U)],ai.prototype,`trailLength`,void 0),t([L(U)],ai.prototype,`flowSpeed`,void 0),t([L(U)],ai.prototype,`featheringSize`,void 0),t([L(U)],ai.prototype,`featheringOffset`,void 0),t([L(U)],ai.prototype,`introFade`,void 0),t([L(U)],ai.prototype,`fadeToZero`,void 0),t([L(U)],ai.prototype,`decayRate`,void 0);var oi=class extends z{};t([L(U)],oi.prototype,`min`,void 0),t([L(U)],oi.prototype,`max`,void 0);var si=class extends z{getValue(e,t){return t?y([j(e,this.stops.first()),this.values.first()],[c(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let t=this.stops.findIndex(t=>u(t,e)),n=this.stops.get(t),r=t.subtract(1),i=this.stops.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.values.get(r),this.values.get(t),a)}]):this.constant}};t([L(H)],si.prototype,`constant`,void 0),t([L(T.ofType(U,8))],si.prototype,`stops`,void 0),t([L(T.ofType(H,8))],si.prototype,`values`,void 0),t([L(p)],si.prototype,`count`,void 0);var ci=class extends z{getValue(e,t){return t?y([j(e,this.stops.first()),this.values.first()],[c(e,this.stops.get(this.count.subtract(1))),this.values.get(this.count.subtract(1))],[!0,()=>{let t=this.stops.findIndex(t=>u(t,e)),n=this.stops.get(t),r=t.subtract(1),i=this.stops.get(r),a=e.subtract(i).divide(n.subtract(i));return F(this.values.get(r),this.values.get(t),a)}]):this.constant}};function li(e,t,n){return e.add(t.multiply(new U(2)).multiply(n))}function ui(e,t,n,r){return e.dvsMat3.multiply(new A(t,1)).add(e.displayViewMat3.multiply(new A(n.multiply(r),0))).xy}function di(e,t,n){let r=F(new U(0),Se(t.multiply(new U(-1))),n);return Se(t.multiply(e).multiply(new U(-1))).subtract(r).divide(new U(1).subtract(r))}function fi(e,t,n,r){let i=be(new U(.5).subtract(r.divide(n)),new U(0),new U(.5)),o=a(u(t,i),new U(1).subtract(t.subtract(i).divide(new U(.5).subtract(i))),new U(1));return e.multiply(o)}function pi(e,t){return new H(e.rgb.multiply(t),t)}function mi(e,t){return w(e.multiply(3.634).add(t.multiply(5.153)).add(7.381),new U(1))}t([L(U)],ci.prototype,`constant`,void 0),t([L(T.ofType(U,8))],ci.prototype,`stops`,void 0),t([L(T.ofType(U,8))],ci.prototype,`values`,void 0),t([L(p)],ci.prototype,`count`,void 0);var hi=class extends se{};t([N(0,B)],hi.prototype,`position`,void 0),t([N(1,B)],hi.prototype,`texcoord`,void 0);var gi=class extends fe{},_i=class extends me{constructor(){super(...arguments),this.type=`FlowImageryShader`,this.vvColor=null,this.vvOpacity=null}vertex(e){let t=this.state.dvsMat3.multiply(new A(e.position,1)).xy;return{glPosition:new H(t,0,1),texcoord:e.texcoord}}fragment(e){let t=W(this.texture,e.texcoord),n=this.config.min.add(t.r.multiply(this.config.max.subtract(this.config.min))),r=this.color.getValue(n,this.vvColor),i=r.a.multiply(this.opacity.getValue(t.r,this.vvOpacity)).multiply(t.a),a=new de;return a.fragColor=pi(r,i),a}};t([M],_i.prototype,`vvColor`,void 0),t([M],_i.prototype,`vvOpacity`,void 0),t([L(ii)],_i.prototype,`state`,void 0),t([L(oi)],_i.prototype,`config`,void 0),t([V(d)],_i.prototype,`texture`,void 0),t([L(si)],_i.prototype,`color`,void 0),t([L(ci)],_i.prototype,`opacity`,void 0),t([e(0,P(hi))],_i.prototype,`vertex`,null),t([e(0,P(gi))],_i.prototype,`fragment`,null);var vi=class extends se{};t([N(0,H)],vi.prototype,`xyts0`,void 0),t([N(1,H)],vi.prototype,`xyts1`,void 0),t([N(2,H)],vi.prototype,`typeIdFirstTimeLastTime`,void 0),t([N(3,H)],vi.prototype,`extrudeInfo`,void 0);var yi=class extends fe{},bi=class extends me{constructor(){super(...arguments),this.type=`FlowParticlesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.typeIdFirstTimeLastTime.z,n=e.typeIdFirstTimeLastTime.w.subtract(t),r=e.xyts0.xy,i=e.xyts0.z.subtract(t),o=e.xyts0.w,s=e.xyts1.xy,c=e.xyts1.z.subtract(t),l=e.xyts1.w,d=e.typeIdFirstTimeLastTime.x,f=e.typeIdFirstTimeLastTime.y,p=new U(2),m=new U(1),g=new U(2),_=new U(3),v=e.extrudeInfo.xy,b=e.extrudeInfo.zw,x=n.add(this.config.trailLength),C=w(this.state.time.multiply(this.config.flowSpeed),x),T=C.subtract(i).divide(c.subtract(i)),D=be(T,new U(0),new U(1)),k=F(i,c,D),A=F(o,l,D),j=F(v,b,D),M=E(s.subtract(r)).multiply(new U(.5)),te=h(d,p),ne=O(h(f,m),h(f,g)),N=a(te,O(he(T,new U(0)),S(u(T,new U(1)),ee(c,n))),he(T,new U(0))),re=a(te,y([h(f,m),j],[h(f,g),j.multiply(new U(-1))],[h(f,_),j.add(M)],[!0,j.multiply(new U(-1)).add(M)]),y([h(f,m),v],[h(f,g),v.multiply(new U(-1))],[h(f,_),j],[!0,j.multiply(new U(-1))])),P=a(te,y([h(f,m),new B(.5,0)],[h(f,g),new B(.5,1)],[h(f,_),new B(1,0)],[!0,new B(1,1)]),y([h(f,m),new B(.5,0)],[h(f,g),new B(.5,1)],[h(f,_),new B(.5,0)],[!0,new B(.5,1)])),ie=a(te,k,a(ne,i,k)),ae=a(te,A,a(ne,o,A)),oe=a(te,di(C.subtract(k).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),a(ne,di(C.subtract(i).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero),di(C.subtract(k).divide(this.config.trailLength),this.config.decayRate,this.config.fadeToZero))),se=new U(1).subtract(Se(ie.multiply(new U(-1)))),I=li(this.size.getValue(ae,this.vvSize),this.config.featheringSize,this.config.featheringOffset),ce=this.color.getValue(ae,this.vvColor),L=ce.a.multiply(this.opacity.getValue(ae,this.vvOpacity)).multiply(oe).multiply(F(new U(1),se,this.config.introFade)).multiply(this.state.displayOpacity),le=a(te,F(r,s,D),a(ne,r,F(r,s,D))),R=ui(this.state,le,re,I);return{glPosition:a(N,new H(0,0,-2,1),new H(R,0,1)),color:pi(ce,L),texcoord:P,size:I}}fragment(e){let t=new de;return t.fragColor=fi(e.color,ve(e.texcoord.subtract(new B(.5))),e.size,this.config.featheringSize),t}};t([M],bi.prototype,`vvColor`,void 0),t([M],bi.prototype,`vvOpacity`,void 0),t([M],bi.prototype,`vvSize`,void 0),t([L(ii)],bi.prototype,`state`,void 0),t([L(ai)],bi.prototype,`config`,void 0),t([L(si)],bi.prototype,`color`,void 0),t([L(ci)],bi.prototype,`opacity`,void 0),t([L(ci)],bi.prototype,`size`,void 0),t([e(0,P(vi))],bi.prototype,`vertex`,null),t([e(0,P(yi))],bi.prototype,`fragment`,null);var xi=class extends se{};t([N(0,A)],xi.prototype,`positionAndSide`,void 0),t([N(1,A)],xi.prototype,`timeInfo`,void 0),t([N(2,B)],xi.prototype,`extrude`,void 0),t([N(3,U)],xi.prototype,`speed`,void 0);var Si=class extends fe{},Ci=class extends me{constructor(){super(...arguments),this.type=`FlowStreamlinesShader`,this.vvColor=null,this.vvOpacity=null,this.vvSize=null}vertex(e){let t=e.positionAndSide.xy,n=this.color.getValue(e.speed,this.vvColor),r=this.opacity.getValue(e.speed,this.vvOpacity),i=li(this.size.getValue(e.speed,this.vvSize),this.config.featheringSize,this.config.featheringOffset),a=ui(this.state,t,e.extrude,i),o=n.a.multiply(r);return{glPosition:new H(a,0,1),side:e.positionAndSide.z,timeInfo:e.timeInfo,color:pi(n,o),size:i}}fragment(e){let t=e.timeInfo.z.subtract(e.timeInfo.y).add(this.config.trailLength),n=mi(e.timeInfo.y,e.timeInfo.z),r=w(n.multiply(t).add(this.state.time.multiply(this.config.flowSpeed)),t).add(e.timeInfo.y).subtract(e.timeInfo.x).divide(this.config.trailLength),i=e.color.multiply(this.state.displayOpacity).multiply(a(he(r,new U(0)),new U(0),di(r,this.config.decayRate,this.config.fadeToZero))),o=new de;return o.fragColor=fi(i,g(e.side).divide(new U(2)),e.size,this.config.featheringSize),o}};t([M],Ci.prototype,`vvColor`,void 0),t([M],Ci.prototype,`vvOpacity`,void 0),t([M],Ci.prototype,`vvSize`,void 0),t([L(ii)],Ci.prototype,`state`,void 0),t([L(ai)],Ci.prototype,`config`,void 0),t([L(si)],Ci.prototype,`color`,void 0),t([L(ci)],Ci.prototype,`opacity`,void 0),t([L(ci)],Ci.prototype,`size`,void 0),t([e(0,P(xi))],Ci.prototype,`vertex`,null),t([e(0,P(Si))],Ci.prototype,`fragment`,null);var wi=class extends D{constructor(){super(...arguments),this.type=14,this.drawPhase=1,this.shaders={imagery:new _i,particles:new bi,streamlines:new Ci}}render(e,t){let{painter:n}=e;n.setPipelineState({depth:!1,color:{write:[!0,!0,!0,!0],blendMode:`composite`},stencil:{write:!1,test:{compare:514,op:{fail:7680,zFail:7680,zPass:7680},mask:255}}}),this._renderResource(e,t.item.resources,this._createVisualState(e,t))}_renderResource(e,t,n){switch(t.kind){case`stack`:this._renderStackResources(e,t,n);return;case`imagery`:this._renderImageryResources(e,t,n);return;case`particles`:this._renderParticlesResources(e,t,n);return;case`streamlines`:this._renderStreamlinesResources(e,t,n);return}}_createVisualState(e,t){let{item:n,dvsMat3:r}=t,i=e.time/1e3;return{time:e.animationsEnabled?i:ni,dvsMat3:r,displayViewMat3:e.state.displayViewMat3,displayOpacity:e.animationsEnabled?Fr(n.displayOpacity,i):Ir(n.displayOpacity),startTime:n.startTime,endTime:n.endTime}}_renderStackResources(e,t,n){for(let r of t.resources)this._renderResource(e,r,n)}_renderImageryResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.imagery,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}_renderParticlesResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.particles,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}_renderStreamlinesResources({context:e,painter:t},n,r){let i=n.getProgramSpec(r);t.submitDrawMeshUntyped(e,{shader:this.shaders.streamlines,uniforms:i.uniforms,textures:i.textures,defines:i.defines,optionalAttributes:i.optionalAttributes,useComputeBuffer:!1},n.mesh,{stencilRef:0})}},Ti=class{constructor(e,t,n,r){this.dataType=e,this.samplingMode=t,this.pixelFormat=n,this.internalFormat=r}};function Ei(e,t){let{textureFloatLinear:n,colorBufferFloat:r}=e.capabilities,i=r?.textureFloat,a=r?.textureHalfFloat,o=r?.floatBlend,s=e.driverTest.floatBufferBlend.result;if(!i&&!a)throw new Te(`heatmap:missing-color-buffer-float`,`HeatmapRenderer requires the WebGL extension EXT_color_buffer_float or EXT_color_buffer_half_float or WEBGL_color_buffer_float.`);if(!(o&&s||a))throw new Te(`heatmap:missing-float-blend`,`HeatmapRenderer requires the WebGL extension EXT_float_blend or EXT_color_buffer_half_float.`+(s?``:` This device claims support for EXT_float_blend, but does not actually support it.`));let c=i&&o&&s,l=a,u=n,d=!!r?.R32F,f=!!r?.R16F;if(c&&u)return u||t.warnOnce(`Missing WebGL extension OES_texture_float_linear. Heatmap quality may be reduced.`),new Ti(ct.FLOAT,u?9729:9728,d?6403:6408,d?st.R32F:6408);if(l)return new Ti(ct.HALF_FLOAT,9729,f?6403:6408,f?st.R16F:6408);throw new Te(`heatmap:missing-hardware-support`,`HeatmapRenderer requires WebGL extensions that allow it to render and blend to float or half float textures.`)}new Ti(ct.HALF_FLOAT,9728,6408,6408);var Di=()=>we.getLogger(`esri.views.2d.engine.webgl.shaderGraph.techniques.heatmap.HeatmapResources`),Oi=class{destroy(){this._accumulateFramebuffer=yt(this._accumulateFramebuffer),this._resolveGradientTexture=yt(this._resolveGradientTexture),this._prevGradientHash=null,this._qualityProfile=null}get initialized(){return this._accumulateFramebuffer!=null&&this._resolveGradientTexture!=null}get accumulateFramebuffer(){return this._accumulateFramebuffer}get resolveGradientTexture(){return this._resolveGradientTexture}loadQualityProfile(e){if(this._qualityProfile==null){let t=Ei(e,Di());this._qualityProfile={...t,defines:{usesHalfFloatPrecision:t.dataType!==ct.FLOAT}}}return this._qualityProfile}ensureAccumulateFBO(e,t,n){if(this._accumulateFramebuffer==null){let{dataType:r,samplingMode:i,pixelFormat:a,internalFormat:o}=this.loadQualityProfile(e),s=new pt(t,n);s.pixelFormat=a,s.internalFormat=o,s.dataType=r,s.samplingMode=i,s.wrapMode=33071;let c=new ut(at.DEPTH24_STENCIL8,t,n);this._accumulateFramebuffer=new ft(e,s,c)}else{let{width:e,height:r}=this._accumulateFramebuffer;e===t&&r===n||this._accumulateFramebuffer.resize(t,n)}return this._accumulateFramebuffer}ensureResolveGradientTexture(e,t,n){if(this._resolveGradientTexture==null){let t=new pt;t.wrapMode=33071,this._resolveGradientTexture=new mt(e,t),this._prevGradientHash=null}return this._prevGradientHash!==t&&(this._resolveGradientTexture.resize(n.length/4,1),this._resolveGradientTexture.setData(n),this._prevGradientHash=t),this._resolveGradientTexture}};function ki(e){return e?.25:1}var Ai=class extends Ot{};t([N(5,B)],Ai.prototype,`offset`,void 0);var ji=class extends At{},Mi=class extends z{};t([L(U)],Mi.prototype,`radius`,void 0),t([L(U)],Mi.prototype,`isFieldActive`,void 0);var Ni=class extends jt{constructor(){super(...arguments),this.type=`HeatmapAccumulateShader`,this.usesHalfFloatPrecision=!1}vertex(e){let{radius:t,isFieldActive:n}=this.kernelControls,r=e.offset,i=n.multiply(this.getVVData(e.id).x).add(new U(1).subtract(n)),a=this.view.displayViewScreenMat3.multiply(new A(e.pos,1)).add(this.view.displayViewMat3.multiply(new A(r,0)).multiply(t)),o=this.clip(e.id);return{glPosition:new H(a.xy,o,1),offset:r,fieldValue:i,color:new H(0),...this.maybeRunHittest(e,{},null)}}fragment(e){let{offset:t,fieldValue:n}=e,r=ve(t),i=I(r,new U(1)),a=new U(1).subtract(r.multiply(r)),o=a.multiply(a),s=i.multiply(o).multiply(n).multiply(new U(ki(this.usesHalfFloatPrecision)));return this.getFragmentOutput(new H(s),e)}hittest(e){let{viewMat3:t,tileMat3:n}=this.view,r=sn(t.multiply(n).multiply(new A(e.pos,1)).xy,this.kernelControls.radius,this.hittestRequest.position);return a(u(r,this.hittestRequest.distance),new U(0),new U(2))}};t([M],Ni.prototype,`usesHalfFloatPrecision`,void 0),t([L(Mi)],Ni.prototype,`kernelControls`,void 0),t([e(0,P(Ai))],Ni.prototype,`vertex`,null),t([e(0,P(ji))],Ni.prototype,`fragment`,null);var Pi=class extends se{};t([N(0,B)],Pi.prototype,`position`,void 0);var Fi=class extends fe{},Ii=class extends z{};t([L(B)],Ii.prototype,`minAndInvRange`,void 0),t([L(U)],Ii.prototype,`normalization`,void 0);var Li=class extends me{constructor(){super(...arguments),this.type=`HeatmapResolveShader`,this.usesHalfFloatPrecision=!1}vertex(e){return{glPosition:new H(e.position.multiply(2).subtract(1),1,1),uv:e.position}}fragment(e){let{accumulatedDensity:t}=this,n=W(this.densityTexture,e.uv).r.divide(new U(ki(this.usesHalfFloatPrecision)));n=n.multiply(t.normalization),n=n.subtract(t.minAndInvRange.x).multiply(t.minAndInvRange.y);let r=W(this.gradientTexture,new B(n,.5)),i=new de;return i.fragColor=new H(r.rgb.multiply(r.a),r.a),i}};t([M],Li.prototype,`usesHalfFloatPrecision`,void 0),t([L(Ii)],Li.prototype,`accumulatedDensity`,void 0),t([V(d)],Li.prototype,`densityTexture`,void 0),t([V(d)],Li.prototype,`gradientTexture`,void 0),t([e(0,P(Pi))],Li.prototype,`vertex`,null),t([e(0,P(Fi))],Li.prototype,`fragment`,null);var Ri=class extends ${constructor(){super(...arguments),this.type=19,this.drawPhase=73,this.shaders={accumulate:new Ni,resolve:new Li},this._isBound=!1,this._resources=new Map}shutdown(e){super.shutdown(e),this._resources.get(e)?.destroy(),this._resources.delete(e),this._prevFBO=null,this._unbind()}render(e,t){let{context:n,painter:r,state:i}=e,a=t.instance.getInput(),{isFieldActive:o}=a.uniforms,s=this._getOrCreateResourcesRecord(n),c=s.loadQualityProfile(n);X(e)||this._bind(e,s,a),r.setShader({shader:this.shaders.accumulate,uniforms:{...K(e,t.target),kernelControls:{radius:Wi(a,i),isFieldActive:+!!o}},textures:q(e),defines:{...J(e),...c.defines},optionalAttributes:{},useComputeBuffer:X(e)});let l=X(e)?Hi:Vi;r.setPipelineState(l),r.submitDraw(e,t)}getStencilReference(e){return Bi(e)}renderResolvePass(e,t){if(X(e))return;let{context:n,painter:r}=e,i=this._resources.get(n);if(this._prevFBO==null||this._prevViewport==null||!i?.initialized)return;let{defines:a}=i.loadQualityProfile(n),{minDensity:o,maxDensity:s,radius:c}=t.getInput().uniforms,l=i.accumulateFramebuffer,u=i.resolveGradientTexture,d={shader:this.shaders.resolve,uniforms:{accumulatedDensity:{minAndInvRange:[o,1/(s-o)],normalization:3/(c*c*Math.PI)}},textures:{densityTexture:{unit:8,texture:l.colorTexture},gradientTexture:{unit:9,texture:u}},defines:a,optionalAttributes:{},useComputeBuffer:!1};n.bindFramebuffer(this._prevFBO),n.setViewport(0,0,this._prevViewport.width,this._prevViewport.height),n.bindTexture(l.colorTexture,8),n.bindTexture(u,9),r.setPipelineState(Ui),r.submitDrawMesh(n,d,r.quadMesh),this._unbind()}_getOrCreateResourcesRecord(e){let t=this._resources.get(e);return t??(t=new Oi,this._resources.set(e,t)),t}_unbind(){this._prevFBO=null,this._prevViewport=null,this._isBound=!1}_bind(e,t,n){let{context:r,state:i,pixelRatio:a}=e,o=r.boundFramebuffer;if(this._isBound||o==null)return;let s=r.getViewport();this._prevFBO=o,this._prevViewport=s;let{gradient:c,gradientHash:l}=n.uniforms;t.ensureResolveGradientTexture(r,l,c);let{width:u,height:d}=s,f=zi(Wi(n,i),a),p=u*f,m=d*f,h=t.ensureAccumulateFBO(r,p,m);r.blitFramebuffer(o,h,1024),r.bindFramebuffer(h),r.setViewport(0,0,h.width,h.height),r.setColorMask(!0,!0,!0,!0),r.setClearColor(0,0,0,0),r.clear(16384),this._isBound=!0}};function zi(e,t){let n=t>1.5?.25:.5;return e<1/(2*n)?1:n}function Bi(e){return e.key.level+1}var Vi={color:{write:[!0,!0,!0,!0],blendMode:`additive`},depth:!1,stencil:{write:!1,test:{compare:518,mask:255,op:{fail:7680,zFail:7680,zPass:7681}}}},Hi={...Vi,stencil:!1},Ui={color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:!1,stencil:!1};function Wi(e,t){let{referenceScale:n,radius:r}=e.uniforms;return r*(n===0?1:n/t.scale)}var Gi=1/je,Ki=class extends Ot{};t([N(3,H)],Ki.prototype,`color`,void 0),t([N(4,B)],Ki.prototype,`offset`,void 0),t([N(5,B)],Ki.prototype,`textureUV`,void 0),t([N(6,H)],Ki.prototype,`fontAndReferenceSize`,void 0),t([N(7,H)],Ki.prototype,`outlineColor`,void 0),t([N(8,H)],Ki.prototype,`haloColor`,void 0),t([N(9,B)],Ki.prototype,`outlineAndHaloSize`,void 0),t([N(10,B)],Ki.prototype,`zoomRange`,void 0),t([N(11,U)],Ki.prototype,`clipAngle`,void 0),t([N(12,H)],Ki.prototype,`referenceSymbol`,void 0),t([N(15,U)],Ki.prototype,`visibility`,void 0);var qi=class extends ie{};t([N(13,B)],qi.prototype,`offsetNextVertex1`,void 0),t([N(14,B)],qi.prototype,`offsetNextVertex2`,void 0);var Ji=class extends At{},Yi=class extends jt{constructor(){super(...arguments),this.type=`TextShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`]},this.textRenderPassType=0,this.isBackgroundPass=!1,this.isLabel=!1}clipLabel(e,t){let{clipAngle:n,zoomRange:r,visibility:i}=e,a=n.multiply(Gi),o=w(a.subtract(this.view.rotation),new U(360)),s=new U(0),l=xe(this.view.currentZoom.multiply(10)).divide(10),u=r.x,d=r.y,f=new U(1).subtract(I(u,l)).multiply(2),p=new U(S(c(o,new U(90)),he(o,new U(270)))).multiply(2),m=new U(2).multiply(new U(1).subtract(I(l,d)));return s=s.add(t.multiply(f)),s=s.add(t.multiply(p)),s=s.add(m),i&&(s=s.add(i)),s}vertex(e,t){let n=G(e.bitset,0),r=new U(1).subtract(n),o=e.fontAndReferenceSize[0],s=e.fontAndReferenceSize[1],c=e.fontAndReferenceSize[2],l=e.fontAndReferenceSize[3],d=o.divide(c),f=this.textRenderPassType===1?e.outlineColor:this.textRenderPassType===2?e.haloColor:this._getVertexColor(e),p=this.view.displayViewScreenMat3.multiply(new A(e.pos,1)),m=e.offset,g=new U(1),_=i.identity(),v=new B(0);if(this.isLabel){if(!e.referenceSymbol)throw Error(`InternalError: Optional attribute 'referenceSymbol' expected for labels`);let t=e.referenceSymbol,n=t.xy,r=t.z,i=this._unpackDirection(t.w),a=Ht(this,e.id,r).divide(2),o=i.multiply(a.add(4));v=n.add(o),m=m.add(v)}else g=Ht(this,e.id,s).divide(s),o=o.multiply(g),d=d.multiply(g),m=m.multiply(g),_=Gt(this,e.id),m=_.multiply(new A(m,0)).xy;let y=G(e.bitset,3),b=this._getViewRotationMatrix(y).multiply(new A(m,0)).multiply(this.view.scaleFactor),x=this.isLabel?this.clipLabel(e,y):this.clip(e.id,e.zoomRange);x=this.isBackgroundPass?x.add(r.multiply(2)):x.add(n.multiply(2));let S=new U(0);if(this.textRenderPassType===1&&(x=x.add(a(h(e.outlineAndHaloSize.x,new U(0)),new U(2),new U(0))),S=new U(e.outlineAndHaloSize.x).divide(d).divide(l)),this.textRenderPassType===2){let t=e.outlineAndHaloSize.x,n=new U(e.outlineAndHaloSize.y);x=x.add(a(h(n,new U(0)),new U(2),new U(0))),S=n.add(t).divide(d).divide(l)}let C=this.isLabel?u(x,new U(1)):new ce(!1);return{glPosition:new H(p.xy.add(b.xy),x,1),color:f,size:d,textureUV:e.textureUV.divide(this.mosaicInfo.size),antialiasingWidth:new U(.105).multiply(c).divide(o).divide(this.view.pixelRatio),outlineDistanceOffset:S,...this.maybeRunHittest(e,t,{vvSizeAdjustment:g,vvRotation:_,labelOffset:v,labelClipped:C,scaleFactor:this.view.scaleFactor})}}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,n=this.view.displayMat3,r=new U(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getHittestAlignmentMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),n=this.view.tileMat3,r=new U(1).subtract(e);return t.multiply(e).add(n.multiply(r))}fragment(e){let t=new U(2/8),n=new U(1).subtract(t),r=W(this.mosaicTexture,e.textureUV).a,i=n.subtract(e.outlineDistanceOffset);this.highlight&&(i=i.divide(2));let a=e.antialiasingWidth,o=_e(i.subtract(a),i.add(a),r);return this.getFragmentOutput(e.color.multiply(o),e)}computeHittestTriangle(e,t,{vvSizeAdjustment:n,vvRotation:r,labelOffset:i,scaleFactor:a}){let o,s,c;this.isLabel?(o=new A(e.offset.multiply(a).add(i),0),s=new A(t.offsetNextVertex1.multiply(a).add(i),0),c=new A(t.offsetNextVertex2.multiply(a).add(i),0)):(o=r.multiply(new A(e.offset.multiply(a).multiply(n),0)),s=r.multiply(new A(t.offsetNextVertex1.multiply(a).multiply(n),0)),c=r.multiply(new A(t.offsetNextVertex2.multiply(a).multiply(n),0)));let{viewMat3:l,tileMat3:u}=this.view,d=l.multiply(u).multiply(new A(e.pos,1)),f=G(e.bitset,3),p=this._getHittestAlignmentMatrix(f);return{pos0:d.add(p.multiply(o)).xy,pos1:d.add(p.multiply(s)).xy,pos2:d.add(p.multiply(c)).xy}}hittest(e,t,n){let{vvSizeAdjustment:r,vvRotation:i,labelOffset:o,labelClipped:s,scaleFactor:c}=n,l=pn(this.hittestRequest),{pos0:d,pos1:f,pos2:p}=this.computeHittestTriangle(e,t,{vvSizeAdjustment:r,vvRotation:i,labelOffset:o,scaleFactor:c});return a(l,()=>{let{tlbr:e}=this.hittestRequest;return this.isLabel?a(s,new U(0),fn(d,f,p,e)):fn(d,f,p,e)},()=>{let e=an(this.hittestRequest.position,d,f,p),t=this.isLabel?s:new ce(!1);return a(t,new U(0),a(u(e,this.hittestRequest.distance),new U(0),new U(2)))})}_unpackDirection(e){let t=new p(e),n=te(t,new p(2)),r=l(t,new p(3));return new B(new U(n).subtract(1),new U(r).subtract(1))}_getVertexColor(e){let t=e.color;if(this.visualVariableColor){let n=this.getColorValue(e.id);t=this.visualVariableColor.getColor(n,e.color,new ce(!1))}if(this.visualVariableOpacity){let n=this.getOpacityValue(e.id),r=this.visualVariableOpacity.getOpacity(n);t=t.multiply(r)}return t}};t([R(Pt)],Yi.prototype,`visualVariableColor`,void 0),t([R(Ft)],Yi.prototype,`visualVariableOpacity`,void 0),t([R(It)],Yi.prototype,`visualVariableRotation`,void 0),t([R(Lt)],Yi.prototype,`visualVariableSizeMinMaxValue`,void 0),t([R(Rt)],Yi.prototype,`visualVariableSizeScaleStops`,void 0),t([R(zt)],Yi.prototype,`visualVariableSizeStops`,void 0),t([R(Bt)],Yi.prototype,`visualVariableSizeUnitValue`,void 0),t([L(Nt)],Yi.prototype,`mosaicInfo`,void 0),t([V(d)],Yi.prototype,`mosaicTexture`,void 0),t([M],Yi.prototype,`textRenderPassType`,void 0),t([M],Yi.prototype,`isBackgroundPass`,void 0),t([M],Yi.prototype,`isLabel`,void 0),t([e(0,P(Ki)),e(1,P(qi))],Yi.prototype,`vertex`,null),t([e(0,P(Ji))],Yi.prototype,`fragment`,null);var Xi=class extends ${constructor(){super(...arguments),this.type=20,this.shaders={geometry:new Yi},this.drawPhase=14,this.symbologyPlane=3}render(e,t){let{painter:n}=e,r=J(e),i={...Y(e),stencil:{write:!1,test:{compare:516,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}},a=t.instance.getInput(),o={shader:this.shaders.geometry,uniforms:{...$e(e,t.target,a.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...r,textRenderPassType:0,isBackgroundPass:!0,isLabel:!0},optionalAttributes:a.optionalAttributes,useComputeBuffer:X(e)};n.setPipelineState(i),n.setShader(o),n.submitDraw(e,t,{stencilRef:255}),n.setShader({...o,defines:{...r,textRenderPassType:2,isBackgroundPass:!1,isLabel:!0}}),n.submitDraw(e,t,{stencilRef:255}),n.setShader({...o,defines:{...r,textRenderPassType:0,isBackgroundPass:!1,isLabel:!0}}),n.submitDraw(e,t,{stencilRef:255})}};function Zi(e){return I(new U(0),e).multiply(2).subtract(1)}var Qi=class extends Cn{};t([N(9,U)],Qi.prototype,`accumulatedDistance`,void 0),t([N(10,U)],Qi.prototype,`totalLength`,void 0),t([N(11,U)],Qi.prototype,`gradientSize`,void 0),t([N(12,B)],Qi.prototype,`segmentDirection`,void 0),t([N(13,H)],Qi.prototype,`tlbr`,void 0);var $i=class extends z{};t([L(U)],$i.prototype,`isColorPass`,void 0);var ea=class extends jn{constructor(){super(...arguments),this.type=`GradientStrokeShader`}vertex(e,t){let{totalLength:n,gradientSize:r,segmentDirection:i,tlbr:o}=e,s=kn(this,e),c=G(e.bitset,Ae.isAlongLine),l=n.divide(this.view.displayZoomFactor),d=a(ze(e.bitset,Ae.isAbsoluteSize),()=>{let e=a(u(c,new U(.5)),l,s.halfWidth);return r.divide(e)},r),f=e.accumulatedDistance.add(ye(i,s.scaledOffset).divide(l)),p=o.divide(this.mosaicInfo.size.xyxy);return{...s,tlbr:p,relativePositionAlongLine:f,relativeGradientSize:d,isAlongLine:G(e.bitset,Ae.isAlongLine),isDiscrete:G(e.bitset,Ae.isDiscrete),...this.maybeRunHittest(e,t,s.halfWidth)}}fragment(e){let{isAlongLine:t,isDiscrete:n,relativePositionAlongLine:r,relativeGradientSize:i,normal:o,tlbr:s}=e,c=Dn(e,this.antialiasingControls.blur),l=Zi(o.y).multiply(ue(ve(o),new U(1))),d=new U(.5).multiply(l).add(new U(.5)),f=a(u(t,new U(.5)),r,d),p=a(u(n,new U(.5)),i.subtract(1),new U(0)),m=f.add(p).divide(i);m=a(u(t,new U(.5)),m,Re(m));let h=F(s.xy,s.zw,new B(be(m,new U(0),new U(1)),.5)),g=W(this.mosaicTexture,h),_=e.opacity.multiply(c),v=this.getFragmentOutput(g.multiply(_),e),y=I(new U(.5),this.technique.isColorPass).multiply(Ce(`gradient-depth-epsilon`)),b=I(new U(0),o.y).multiply(new U(Ce(`gradient-depth-bias`)).subtract(y));return v.glFragDepth=be(ve(o).add(b),new U(0),new U(1)),v}};t([L(Nt)],ea.prototype,`mosaicInfo`,void 0),t([V(d)],ea.prototype,`mosaicTexture`,void 0),t([L($i)],ea.prototype,`technique`,void 0),t([e(0,P(Qi)),e(1,P(kt))],ea.prototype,`vertex`,null);var ta=class extends ${constructor(){super(...arguments),this.type=17,this.shaders={geometry:new ea},this.symbologyPlane=1}_getShaderOptions(e,t,n){let{painter:r,pixelRatio:i}=e,a=t.instance.getInput();return{shader:this.shaders.geometry,uniforms:{...$e(e,t.target,a.uniforms),...K(e,t.target),antialiasingControls:Bn(i),mosaicInfo:r.textureManager.getMosaicInfo(e,t.textureKey),technique:{isColorPass:n}},textures:{...q(e),mosaicTexture:r.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:a.optionalAttributes,useComputeBuffer:X(e)}}render(e,t){let{painter:n}=e;if(X(e)||nt(e)){let r=Y(e);n.setPipelineState(r),n.setShader(this._getShaderOptions(e,t,1)),n.submitDraw(e,t)}else e.context.setClearDepth(1),e.context.clear(256),n.setShader(this._getShaderOptions(e,t,0)),n.setPipelineState({color:!1,depth:{write:{zNear:0,zFar:1},test:513},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),n.submitDraw(e,t),n.setShader(this._getShaderOptions(e,t,1)),n.setPipelineState({color:{write:[!0,!0,!0,!0],blendMode:`composite`},depth:{write:!1,test:515},stencil:{write:!1,test:{compare:514,mask:255,op:{fail:7680,zFail:7680,zPass:7680}}}}),n.submitDraw(e,t)}},na=class extends ${constructor(){super(...arguments),this.type=21,this.shaders={geometry:new jn},this.symbologyPlane=1}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),antialiasingControls:Bn(r)},textures:q(e),defines:{...J(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},ra=class extends Cn{};t([N(9,U)],ra.prototype,`accumulatedDistance`,void 0),t([N(10,B)],ra.prototype,`segmentDirection`,void 0),t([N(11,U)],ra.prototype,`offsetAlongLine`,void 0),t([N(12,U)],ra.prototype,`capType`,void 0),t([N(13,H)],ra.prototype,`tlbr`,void 0);var ia=class extends jn{constructor(){super(...arguments),this.type=`TexturedLineShader`}_getDistanceRatio(e,t){let n=G(e.bitset,2);return n.multiply(k(t,new U(.25)).multiply(new U(2))).add(new U(1).subtract(n).multiply(ht(1)))}_getSDFAlpha(e){let{halfWidth:t,normal:r,tlbr:i,patternSize:a,accumulatedDistance:o,offsetAlongLine:s,dashToPx:c,capType:l}=e,u=a.x.divide(4).multiply(c),d=v(o.add(s).divide(u)),f=F(i.xy,i.zw,new B(d,.5)),p=qe(W(this.mosaicTexture,f)).multiply(2).subtract(1).multiply(64).multiply(c),m=r.y.multiply(t),g=y([h(l,new U(1)),p.subtract(t)],[h(l,new U(2)),ae(n(k(p,new U(0)),new U(2)).add(m.multiply(m))).subtract(t)],[!0,p]),_=be(new U(.25).subtract(g),new U(0),new U(1));return new H(_)}_getPatternColor(e){let{halfWidth:t,normal:n,color:r,accumulatedDistance:i,patternSize:o,sampleAlphaOnly:s,tlbr:c}=e,l=o.y.multiply(new U(2).multiply(t).divide(o.x)),d=v(i.divide(l)),f=new U(.5).multiply(n.y).add(new U(.5)),p=F(c.xy,c.zw,new B(f,d)),m=W(this.mosaicTexture,p);return this.visualVariableColor!=null&&(m=a(u(s,new U(.5)),new H(r.a),r)),m}vertex(e,t){let{segmentDirection:n,tlbr:r,bitset:i}=e,o=kn(this,e),s=e.accumulatedDistance.divide(this.view.displayZoomFactor).add(ye(n,o.scaledOffset)),c=new B(r.z.subtract(r.x),r.w.subtract(r.y)),l=r.divide(this.mosaicInfo.size.xyxy),d=G(i,3),f=G(i,4),p=a(u(d,new U(.5)),this._getDistanceRatio(e,o.scaledHalfWidth),new U(1));return{...o,tlbr:l,patternSize:c,accumulatedDistance:s,isSDF:d,sampleAlphaOnly:f,dashToPx:p,offsetAlongLine:e.offsetAlongLine,capType:e.capType,...this.maybeRunHittest(e,t,o.halfWidth)}}fragment(e){let{color:t,opacity:n,isSDF:r}=e,i=Dn(e,this.antialiasingControls.blur),o=a(u(r,new U(.5)),this._getSDFAlpha(e),this._getPatternColor(e)),s=t.multiply(n).multiply(i).multiply(o);return this.getFragmentOutput(s,e)}};t([L(Nt)],ia.prototype,`mosaicInfo`,void 0),t([V(d)],ia.prototype,`mosaicTexture`,void 0),t([e(0,P(ra)),e(1,P(kt))],ia.prototype,`vertex`,null);var aa=class extends ${constructor(){super(...arguments),this.type=33,this.shaders={geometry:new ia},this.symbologyPlane=1}render(e,t){let{painter:n,pixelRatio:r}=e,i=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),antialiasingControls:Bn(r),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...J(e)},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},oa=class extends Ot{};t([N(3,H)],oa.prototype,`color`,void 0),t([N(4,H)],oa.prototype,`outlineColor`,void 0),t([N(5,B)],oa.prototype,`offset`,void 0),t([N(6,B)],oa.prototype,`textureUV`,void 0),t([N(7,H)],oa.prototype,`sizing`,void 0),t([N(8,U)],oa.prototype,`placementAngle`,void 0),t([N(9,U)],oa.prototype,`sdfDecodeCoeff`,void 0),t([N(10,B)],oa.prototype,`zoomRange`,void 0);var sa=class extends ie{};t([N(11,B)],sa.prototype,`offsetNextVertex1`,void 0),t([N(12,B)],sa.prototype,`offsetNextVertex2`,void 0),t([N(13,B)],sa.prototype,`textureUVNextVertex1`,void 0),t([N(14,B)],sa.prototype,`textureUVNextVertex2`,void 0);var ca=class extends At{};function la(e,t,n,r){return t.multiply(e.x).add(n.multiply(e.y)).add(r.multiply(e.z))}function ua(e){return e.multiply(e).divide(128)}var da=class extends jt{constructor(){super(...arguments),this.type=`MarkerShader`,this.computeAttributes={offset:[`offsetNextVertex1`,`offsetNextVertex2`],textureUV:[`textureUVNextVertex1`,`textureUVNextVertex2`]}}vertex(e,t){let n=ua(e.sizing.x),r=ua(e.sizing.y),a=ua(e.sizing.z),o=e.placementAngle,s=G(e.bitset,De.bitset.isSDF),c=G(e.bitset,De.bitset.isMapAligned),l=G(e.bitset,De.bitset.scaleSymbolsProportionally),u=ze(e.bitset,De.bitset.colorLocked),d=Wt(this,e.id),f=Ut(this,e.id,e.color,u).multiply(d),p=this.view.displayViewScreenMat3.multiply(new A(e.pos.xy,1)),m=Ht(this,e.id,a).divide(a),h=n.multiply(m),g=e.offset.xy.multiply(m),_=r.multiply(l.multiply(m.subtract(1)).add(1));_=ue(_,k(h.subtract(.99),new U(0)));let v=k(_,new U(1)),y=ue(_,new U(1)),b=i.fromRotation(o.multiply(Ie)),x=Gt(this,e.id),S=this._getViewRotationMatrix(c).multiply(x).multiply(b).multiply(new A(g.xy,0)).multiply(this.view.scaleFactor),C=this.clip(e.id,e.zoomRange),w=new H(p.xy.add(S.xy),C,1),T=e.textureUV.divide(this.mosaicInfo.size),E=e.outlineColor.multiply(y),D=G(e.bitset,De.bitset.overrideOutlineColor),O=e.sdfDecodeCoeff.multiply(h);return{glPosition:w,color:f,textureUV:T,outlineColor:E,outlineSize:v,distanceToPx:O,isSDF:s,overrideOutlineColor:D,...this.maybeRunHittest(e,t,{pos:e.pos,size:h,sizeCorrection:m,scaleFactor:this.view.scaleFactor,isMapAligned:c,vvRotationMat3:x,placementMat3:b,outlineSize:v,distanceToPx:O,isSDF:s})}}fragment(e){let t=this._getColor(e.textureUV,e);return this.getFragmentOutput(t,e)}hittest(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,n),s=pn(this.hittestRequest);return a(s,()=>{let{tlbr:e}=this.hittestRequest;return dn(r,i,o,e)},()=>a(he(n.size,this.hittestRequest.smallSymbolSizeThreshold),this._hittestSmallMarker(e,t,n),this._hittestMarker(e,t,n)))}_getViewRotationMatrix(e){let t=this.view.displayViewMat3,n=this.view.displayMat3,r=new U(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getViewScreenMatrix(e){let t=this.view.viewMat3.multiply(this.view.tileMat3),n=this.view.tileMat3,r=new U(1).subtract(e);return t.multiply(e).add(n.multiply(r))}_getColor(e,t){return a(h(t.isSDF,new U(1)),this._getSDFColor(e,t),this._getSpriteColor(e,t))}_getSpriteColor(e,t){return W(this.mosaicTexture,e).multiply(t.color)}_getSDFColor(e,t){let n=W(this.mosaicTexture,e),r=new U(.5).subtract(qe(n)).multiply(t.distanceToPx).multiply(1),i=be(new U(.5).subtract(r),new U(0),new U(1)),a=t.color.multiply(i),o=t.outlineSize;this.highlight&&(o=k(o,t.overrideOutlineColor.multiply(4)));let s=o.multiply(.5),c=g(r).subtract(s),l=be(new U(.5).subtract(c),new U(0),new U(1)),u=F(t.outlineColor,t.color,t.overrideOutlineColor).multiply(l);return new U(1).subtract(u.a).multiply(a).add(u)}_hittestSmallMarker(e,t,n){let{position:r,distance:i,smallSymbolDistance:o}=this.hittestRequest,s=i.subtract(o),{viewMat3:c,tileMat3:l}=this.view,d=c.multiply(l).multiply(new A(n.pos,1)).xy,f=n.size.multiply(.5),p=C(d,r).subtract(f).add(s);return a(u(p,this.hittestRequest.distance),new U(0),new U(2))}_hittestMarker(e,t,n){let{pos0:r,pos1:i,pos2:o}=this.computeHittestTriangle(e,t,n),s=this.hittestRequest.position,c=this.hittestRequest.distance,l=an(s,r,i,o);return a(u(l,c),new U(0),this._hittestSamples(r,i,o,e,t,n))}computeHittestTriangle(e,t,n){let{pos:r,sizeCorrection:i,scaleFactor:a,isMapAligned:o}=n,s=new A(e.offset.multiply(i).multiply(a),0),c=new A(t.offsetNextVertex1.multiply(i).multiply(a),0),l=new A(t.offsetNextVertex2.multiply(i).multiply(a),0),{viewMat3:u,tileMat3:d}=this.view,f=u.multiply(d).multiply(new A(r,1)),p=this._getViewScreenMatrix(o).multiply(n.vvRotationMat3).multiply(n.placementMat3);return{pos0:f.add(p.multiply(s)).xy,pos1:f.add(p.multiply(c)).xy,pos2:f.add(p.multiply(l)).xy}}_hittestSamples(e,t,n,r,i,s){let{outlineSize:c,isSDF:l,distanceToPx:d}=s,f=this.hittestRequest.position,p=this.hittestRequest.distance,m=Q(f.add(new B(o(p),o(p))),e,t,n),h=Q(f.add(new B(0,o(p))),e,t,n),g=Q(f.add(new B(p,o(p))),e,t,n),_=Q(f.add(new B(o(p),0)),e,t,n),v=Q(f,e,t,n),y=Q(f.add(new B(p,0)),e,t,n),b=Q(f.add(new B(o(p),p)),e,t,n),x=Q(f.add(new B(0,p)),e,t,n),S=Q(f.add(new B(p,p)),e,t,n),C=r.textureUV.divide(this.mosaicInfo.size),w=i.textureUVNextVertex1.divide(this.mosaicInfo.size),T=i.textureUVNextVertex2.divide(this.mosaicInfo.size),E={color:new H(1),outlineColor:new H(1),overrideOutlineColor:new U(1),outlineSize:c,distanceToPx:d,isSDF:l},D=new U(0);return D=D.add(Z(m).multiply(this._getColor(la(m,C,w,T),E).a)),D=D.add(Z(h).multiply(this._getColor(la(h,C,w,T),E).a)),D=D.add(Z(g).multiply(this._getColor(la(g,C,w,T),E).a)),D=D.add(Z(_).multiply(this._getColor(la(_,C,w,T),E).a)),D=D.add(Z(v).multiply(this._getColor(la(v,C,w,T),E).a)),D=D.add(Z(y).multiply(this._getColor(la(y,C,w,T),E).a)),D=D.add(Z(b).multiply(this._getColor(la(b,C,w,T),E).a)),D=D.add(Z(x).multiply(this._getColor(la(x,C,w,T),E).a)),D=D.add(Z(S).multiply(this._getColor(la(S,C,w,T),E).a)),a(u(D,new U(.05)),new U(2),new U(0))}};t([R(Pt)],da.prototype,`visualVariableColor`,void 0),t([R(Ft)],da.prototype,`visualVariableOpacity`,void 0),t([R(It)],da.prototype,`visualVariableRotation`,void 0),t([R(Lt)],da.prototype,`visualVariableSizeMinMaxValue`,void 0),t([R(Rt)],da.prototype,`visualVariableSizeScaleStops`,void 0),t([R(zt)],da.prototype,`visualVariableSizeStops`,void 0),t([R(Bt)],da.prototype,`visualVariableSizeUnitValue`,void 0),t([L(Nt)],da.prototype,`mosaicInfo`,void 0),t([V(d)],da.prototype,`mosaicTexture`,void 0),t([e(0,P(oa)),e(1,P(sa))],da.prototype,`vertex`,null),t([e(0,P(ca))],da.prototype,`fragment`,null);var fa=class extends ${constructor(){super(...arguments),this.type=23,this.shaders={geometry:new da},this.symbologyPlane=2}render(e,t){let{painter:n}=e,r=t.instance.getInput();n.setShader({shader:this.shaders.geometry,uniforms:{...$e(e,t.target,r.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey,!0)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey,!0)},defines:{...J(e)},optionalAttributes:r.optionalAttributes,useComputeBuffer:X(e)}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},pa=class{constructor(){this.computeAttributes={}}get locationsMap(){let e=new Map;for(let t in this.locations)e.set(t,this.locations[t].index);return e}get optionPropertyKeys(){if(!this._optionPropertyKeys){let e=new Set(Object.keys(this.options));this._optionPropertyKeys=e}return this._optionPropertyKeys}get _transformFeedbackBindings(){return[]}get locationInfo(){if(!this._locationInfo){let e=this.locationsMap,t=Array.from(e.entries()).map(([e,t])=>`${e}.${t}`).join(`.`);this._locationInfo={stringHash:t,locations:e,computeAttributeMap:this.computeAttributes}}return this._locationInfo}get renamedLocationsMap(){let e=new Map;for(let[t,n]of this.locationsMap.entries())e.set(`a_`+t,n);return e}getShaderKey(e,t,n,r,i){return`${Object.keys(e).map(t=>`${t}.${e[t]}`).join(`.`)}.${Object.keys(r).filter(e=>r[e]).map(e=>`${e}_${r[e].toString()}`).join(`.`)}.${Object.keys(t).filter(e=>this.optionPropertyKeys.has(e)).join(`.`)}.${Object.keys(n).filter(e=>n[e]).join(`.`)}`}getProgram(e,t,n,r){let i=``,a=``;for(let e in n)if(n[e]){let t=typeof n[e]==`boolean`?`#define ${e}\n`:`#define ${e} ${n[e]}\n`;i+=t,a+=t}return i+=this.vertexShader,a+=this.fragmentShader,new oe(`glslShaderModule`,i,a,this.renamedLocationsMap,this._getUniformBindings(t),this._getTextureBindings(),this._transformFeedbackBindings)}_getUniformBindings(e){let t=[];for(let e in this.required){let n=this.required[e];t.push({uniformHydrated:null,shaderModulePath:e,uniformName:e,uniformType:n.type,uniformArrayElementType:ma(n),uniformArrayLength:ha(n)})}for(let n in e){let r=this.options[n];if(e[n])for(let e in r){let i=r[e];t.push({uniformHydrated:null,shaderModulePath:`${n}.${e}`,uniformName:e,uniformType:i.type,uniformArrayElementType:ma(i),uniformArrayLength:ha(i)})}}return t}_getTextureBindings(){let e=[];for(let t in this.textures)e.push({textureHydrated:null,shaderModulePath:t,textureName:t});return e}},ma=e=>e.type===`array`?e.elementType?.type:void 0,ha=e=>e.type===`array`?e.size:void 0,ga={bitBlit:{"bitBlit.vert":`attribute vec2 a_pos;
attribute vec2 a_tex;
varying mediump vec2 v_uv;
void main(void) {
gl_Position = vec4(a_pos , 0.0, 1.0);
v_uv = a_tex;
}`,"bitBlit.frag":`uniform lowp sampler2D u_tex;
uniform lowp float u_opacity;
varying mediump vec2 v_uv;
void main() {
lowp vec4 color = texture2D(u_tex, v_uv);
gl_FragColor = color * u_opacity;
}`},debug:{overlay:{"overlay.frag":`precision mediump float;
varying vec4 v_color;
void main(void) {
gl_FragColor = v_color;
}`,"overlay.vert":`attribute vec3 a_PositionAndFlags;
uniform mat3 u_dvsMat3;
uniform vec4 u_colors[4];
uniform float u_opacities[4];
varying vec4 v_color;
void main(void) {
vec2 position = a_PositionAndFlags.xy;
float flags = a_PositionAndFlags.z;
int colorIndex = int(mod(flags, 4.0));
vec4 color;
for (int i = 0; i < 4; i++) {
color = u_colors[i];
if (i == colorIndex) {
break;
}
}
int opacityIndex = int(mod(floor(flags / 4.0), 4.0));
float opacity;
for (int i = 0; i < 4; i++) {
opacity = u_opacities[i];
if (i == opacityIndex) {
break;
}
}
v_color = color * opacity;
gl_Position = vec4((u_dvsMat3 * vec3(position, 1.0)).xy, 0.0, 1.0);
}`}},dot:{dot:{"dot.vert":`precision highp float;
attribute vec2 a_pos;
uniform sampler2D u_texture;
uniform highp mat3 u_dvsMat3;
uniform highp float u_tileZoomFactor;
uniform highp float u_dotSize;
uniform highp float u_pixelRatio;
varying vec2 v_pos;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
const float EPSILON = 0.000001;
void main()
{
mat3 tileToTileTexture = mat3(  1., 0., 0.,
0., -1., 0.,
0., 1., 1.  );
vec3 texCoords = tileToTileTexture * vec3(a_pos.xy / 512., 1.);
v_color = texture2D(u_texture, texCoords.xy);
float smoothEdgeWidth = max(u_dotSize / 2., 1.) ;
float z = 0.;
z += 2.0 * step(v_color.a, EPSILON);
gl_PointSize = (smoothEdgeWidth + u_dotSize);
gl_Position = vec4((u_dvsMat3 * vec3(a_pos + .5, 1.)).xy, z, 1.);
v_dotRatio = u_dotSize / gl_PointSize;
v_invEdgeRatio = -1. / ( smoothEdgeWidth / gl_PointSize );
gl_PointSize  *= (u_pixelRatio * u_tileZoomFactor);
}`,"dot.frag":`precision mediump float;
varying vec4 v_color;
varying float v_dotRatio;
varying float v_invEdgeRatio;
uniform highp float u_tileZoomFactor;
void main()
{
float dist = length(gl_PointCoord - vec2(.5, .5)) * 2.;
float alpha = smoothstep(0., 1., v_invEdgeRatio * (dist - v_dotRatio) + 1.);
gl_FragColor = v_color * alpha;
}`}},filtering:{"bicubic.glsl":`vec4 computeWeights(float v) {
float b = 1.0 / 6.0;
float v2 = v * v;
float v3 = v2 * v;
float w0 = b * (-v3 + 3.0 * v2 - 3.0 * v + 1.0);
float w1 = b * (3.0 * v3  - 6.0 * v2 + 4.0);
float w2 = b * (-3.0 * v3 + 3.0 * v2 + 3.0 * v + 1.0);
float w3 = b * v3;
return vec4(w0, w1, w2, w3);
}
vec4 bicubicOffsetsAndWeights(float v) {
vec4 w = computeWeights(v);
float g0 = w.x + w.y;
float g1 = w.z + w.w;
float h0 = 1.0 - (w.y / g0) + v;
float h1 = 1.0 + (w.w / g1) - v;
return vec4(h0, h1, g0, g1);
}
vec4 sampleBicubicBSpline(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 eX = vec2(1.0 / texSize.x, 0.0);
vec2 eY = vec2(0.0, 1.0 / texSize.y);
vec2 texel = coords * texSize - 0.5;
vec3 hgX = bicubicOffsetsAndWeights(fract(texel).x).xyz;
vec3 hgY = bicubicOffsetsAndWeights(fract(texel).y).xyz;
vec2 coords10 = coords + hgX.x * eX;
vec2 coords00 = coords - hgX.y * eX;
vec2 coords11 = coords10 + hgY.x * eY;
vec2 coords01 = coords00 + hgY.x * eY;
coords10 = coords10 - hgY.y * eY;
coords00 = coords00 - hgY.y * eY;
vec4 color00 = texture2D(sampler, coords00);
vec4 color10 = texture2D(sampler, coords10);
vec4 color01 = texture2D(sampler, coords01);
vec4 color11 = texture2D(sampler, coords11);
color00 = mix(color00, color01, hgY.z);
color10 = mix(color10, color11, hgY.z);
color00 = mix(color00, color10, hgX.z);
return color00;
}`,"bilinear.glsl":`vec4 sampleBilinear(sampler2D sampler, vec2 coords, vec2 texSize) {
vec2 texelStart = floor(coords * texSize);
vec2 coord0 = texelStart / texSize;
vec2 coord1 = (texelStart +  vec2(1.0, 0.0)) / texSize;
vec2 coord2 = (texelStart +  vec2(0.0, 1.0)) / texSize;
vec2 coord3 = (texelStart +  vec2(1.0, 1.0)) / texSize;
vec4 color0 = texture2D(sampler, coord0);
vec4 color1 = texture2D(sampler, coord1);
vec4 color2 = texture2D(sampler, coord2);
vec4 color3 = texture2D(sampler, coord3);
vec2 blend = fract(coords * texSize);
vec4 color01 = mix(color0, color1, blend.x);
vec4 color23 = mix(color2, color3, blend.x);
vec4 color = mix(color01, color23, blend.y);
#ifdef NNEDGE
float alpha = floor(color0.a * color1.a * color2.a * color3.a + 0.5);
color = color * alpha + (1.0 - alpha) * texture2D(sampler, coords);
#endif
return color;
}`,"epx.glsl":`vec4 sampleEPX(sampler2D sampler, float size, vec2 coords, vec2 texSize) {
vec2 invSize = 1.0 / texSize;
vec2 texel = coords * texSize;
vec2 texel_i = floor(texel);
vec2 texel_frac = fract(texel);
vec4 colorP = texture2D(sampler, texel_i * invSize);
vec4 colorP1 = vec4(colorP);
vec4 colorP2 = vec4(colorP);
vec4 colorP3 = vec4(colorP);
vec4 colorP4 = vec4(colorP);
vec4 colorA = texture2D(sampler, (texel_i - vec2(0.0, 1.0)) * invSize);
vec4 colorB = texture2D(sampler, (texel_i + vec2(1.0, 0.0)) * invSize);
vec4 colorC = texture2D(sampler, (texel_i - vec2(1.0, 0.0)) * invSize);
vec4 colorD = texture2D(sampler, (texel_i + vec2(0.0, 1.0)) * invSize);
if (colorC == colorA && colorC != colorD && colorA != colorB) {
colorP1 = colorA;
}
if (colorA == colorB && colorA != colorC && colorB != colorD) {
colorP2 = colorB;
}
if (colorD == colorC && colorD != colorB && colorC != colorA) {
colorP3 = colorC;
}
if (colorB == colorD && colorB != colorA && colorD != colorC) {
colorP4 = colorD;
}
vec4 colorP12 = mix(colorP1, colorP2, texel_frac.x);
vec4 colorP34 = mix(colorP1, colorP2, texel_frac.x);
return mix(colorP12, colorP34, texel_frac.y);
}`},heatmap:{heatmapResolve:{"heatmapResolve.frag":`precision highp float;
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 4.0
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform sampler2D u_texture;
uniform sampler2D u_gradient;
uniform vec2 u_densityMinAndInvRange;
uniform float u_densityNormalization;
varying vec2 v_uv;
void main() {
vec4 data = texture2D(u_texture, v_uv);
float density = data.r * COMPRESSION_FACTOR;
density *= u_densityNormalization;
density = (density - u_densityMinAndInvRange.x) * u_densityMinAndInvRange.y;
vec4 color = texture2D(u_gradient, vec2(density, 0.5));
gl_FragColor = vec4(color.rgb * color.a, color.a);
}`,"heatmapResolve.vert":`precision highp float;
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
v_uv = a_pos;
gl_Position = vec4(a_pos * 2.0 - 1.0, 1., 1.);
}`}},highlight:{"blur.frag":`varying mediump vec2 v_texcoord;
uniform mediump vec4 u_direction;
uniform mediump mat4 u_channelSelector;
uniform mediump float u_sigma;
uniform sampler2D u_texture;
mediump float gauss1(mediump vec2 dir) {
return exp(-dot(dir, dir) / (2.0 * u_sigma * u_sigma));
}
mediump vec4 selectChannel(mediump vec4 sample) {
return u_channelSelector * sample;
}
void accumGauss1(mediump float i, inout mediump float tot, inout mediump float weight) {
mediump float w = gauss1(i * u_direction.xy);
tot += selectChannel(texture2D(u_texture, v_texcoord + i * u_direction.zw))[3] * w;
weight += w;
}
void main(void) {
mediump float tot = 0.0;
mediump float weight = 0.0;
accumGauss1(-5.0, tot, weight);
accumGauss1(-4.0, tot, weight);
accumGauss1(-3.0, tot, weight);
accumGauss1(-2.0, tot, weight);
accumGauss1(-1.0, tot, weight);
accumGauss1(0.0, tot, weight);
accumGauss1(1.0, tot, weight);
accumGauss1(2.0, tot, weight);
accumGauss1(3.0, tot, weight);
accumGauss1(4.0, tot, weight);
accumGauss1(5.0, tot, weight);
gl_FragColor = vec4(0.0, 0.0, 0.0, tot / weight);
}`,"highlight.frag":`varying mediump vec2 v_texcoord;
uniform sampler2D u_texture;
uniform mediump float u_sigma;
uniform sampler2D u_shade;
uniform mediump vec2 u_minMaxDistance;
mediump float estimateDistance() {
mediump float y = texture2D(u_texture, v_texcoord)[3];
const mediump float y0 = 0.5;
mediump float m0 = 1.0 / (sqrt(2.0 * 3.1415) * u_sigma);
mediump float d = (y - y0) / m0;
return d;
}
mediump vec4 shade(mediump float d) {
mediump float mappedDistance = (d - u_minMaxDistance.x) / (u_minMaxDistance.y - u_minMaxDistance.x);
mappedDistance = clamp(mappedDistance, 0.0, 1.0);
return texture2D(u_shade, vec2(mappedDistance, 0.5));
}
void main(void) {
mediump float d = estimateDistance();
gl_FragColor = shade(d);
}`,"textured.vert":`attribute mediump vec2 a_position;
attribute mediump vec2 a_texcoord;
varying mediump vec2 v_texcoord;
void main(void) {
gl_Position = vec4(a_position, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},materials:{"barycentric.glsl":`float inTriangle(vec3 bary) {
vec3 absBary = abs(bary);
return step((absBary.x + absBary.y + absBary.z), 1.05);
}
vec3 xyToBarycentric(in vec2 pos, in vec2 v0,  in vec2 v1, in vec2 v2) {
mat3 xyToBarycentricMat3 = mat3(
v1.x * v2.y - v2.x * v1.y, v2.x * v0.y - v0.x * v2.y, v0.x * v1.y - v1.x * v0.y,
v1.y - v2.y, v2.y - v0.y, v0.y - v1.y,
v2.x - v1.x, v0.x - v2.x, v1.x - v0.x
);
float A2 = v0.x * (v1.y - v2.y) + v1.x * (v2.y - v0.y) + v2.x * (v0.y - v1.y);
return (1. / A2) * xyToBarycentricMat3 * vec3(1., pos);
}`,"attributeData.glsl":`uniform highp sampler2D filterFlags;
uniform highp sampler2D animation;
uniform highp sampler2D gpgpu;
uniform highp sampler2D visualVariableData;
uniform highp sampler2D dataDriven0;
uniform highp sampler2D dataDriven1;
uniform highp sampler2D dataDriven2;
uniform float size;
highp vec2 getAttributeDataCoords(in highp vec3 id) {
highp vec3  texel = unpackDisplayIdTexel(id);
highp float u32 = float(int(texel.r) + int(texel.g) * 256 + int(texel.b) * 256 * 256);
highp float col = mod(u32, size);
highp float row = (u32 - col) / size;
highp float u = col / size;
highp float v = row / size;
return vec2(u, v);
}
highp vec2 getAttributeDataTextureCoords(in highp vec3 id) {
return (getAttributeDataCoords(id) * 2.0) - 1.0 + (.5 / vec2(size));
}
highp vec4 getFilterData(in highp vec3 id) {
vec2 coords = getAttributeDataCoords(id);
return texture2D(filterFlags, coords);
}
highp vec4 getAnimation(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(animation, coords);
}
highp vec4 getVisualVariableData(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(visualVariableData, coords);
}
highp vec4 getDataDriven0(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven0, coords);
}
highp vec4 getDataDriven1(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven1, coords);
}
highp vec4 getGPGPU(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(gpgpu, coords);
}
highp vec4 getDataDriven2(in highp vec3 id) {
highp vec2 coords = getAttributeDataCoords(id);
return texture2D(dataDriven2, coords);
}
float u88VVToFloat(in vec2 v) {
bool isMagic = v.x == 255.0 && v.y == 255.0;
if (isMagic) {
return NAN_MAGIC_NUMBER;
}
return (v.x + v.y * float(0x100)) - 32768.0;
}`,"constants.glsl":`const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_RAD_TO_DEG = 180.0 / 3.141592654;
const float POSITION_PRECISION = 1.0 / 8.0;
const float FILL_POSITION_PRECISION = 1.0 / 1.0;
const float SOFT_EDGE_RATIO = 1.0;
const float THIN_LINE_WIDTH_FACTOR = 1.1;
const float THIN_LINE_HALF_WIDTH = 1.0;
const float EXTRUDE_SCALE_PLACEMENT_PADDING = 1.0 / 4.0;
const float OFFSET_PRECISION = 1.0 / 8.0;
const float OUTLINE_SCALE = 1.0 / 5.0;
const float SDF_FONT_SIZE = 24.0;
const float MAX_SDF_DISTANCE = 8.0;
const float PLACEMENT_PADDING = 8.0;
const float EPSILON = 0.00001;
const float EPSILON_HITTEST = 0.05;
const int MAX_FILTER_COUNT = 2;
const int ATTR_VV_SIZE = 0;
const int ATTR_VV_COLOR = 1;
const int ATTR_VV_OPACITY = 2;
const int ATTR_VV_ROTATION = 3;
const highp float NAN_MAGIC_NUMBER = 1e-30;
const int BITSET_GENERIC_LOCK_COLOR = 1;
const int BITSET_GENERIC_CONSIDER_ALPHA_ONLY = 4;
const int BITSET_MARKER_ALIGNMENT_MAP = 0;
const int BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE = 2;
const int BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY = 3;
const int BITSET_TYPE_FILL_OUTLINE = 0;
const int BITSET_FILL_RANDOM_PATTERN_OFFSET = 2;
const int BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR = 3;
const int BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR = 5;
const int BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR = 6;
const int BITSET_LINE_SCALE_DASH = 2;`,fill:{"common.glsl":`#include <materials/symbologyTypeUtils.glsl>
#ifdef PATTERN
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform lowp vec4 u_isActive[ 2 ];
uniform highp float u_dotValue;
uniform highp float u_tileDotsOverArea;
uniform highp float u_dotTextureDotCount;
uniform mediump float u_tileZoomFactor;
#endif
varying highp vec3 v_id;
varying lowp vec4 v_color;
varying lowp float v_opacity;
varying mediump vec4 v_aux1;
#ifdef PATTERN
varying mediump vec2 v_tileTextureCoord;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
varying lowp float v_isOutline;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
varying highp vec2 v_dotTextureCoords;
varying highp vec4 v_dotThresholds[ 2 ];
#endif`,"fill.frag":`precision highp float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/fill/common.glsl>
#ifdef PATTERN
uniform lowp sampler2D u_texture;
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
uniform mediump mat4 u_dotColors[ 2 ];
uniform sampler2D u_dotTextures[ 2 ];
uniform vec4 u_dotBackgroundColor;
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
lowp vec4 drawLine() {
float v_lineWidth = v_aux1.x;
vec2  v_normal    = v_aux1.yz;
LineData inputs = LineData(
v_color,
v_normal,
v_lineWidth,
v_opacity,
v_id
);
return shadeLine(inputs);
}
#endif
lowp vec4 drawFill() {
lowp vec4 out_color = vec4(0.);
#ifdef HITTEST
out_color = v_color;
#elif defined(PATTERN)
mediump vec4 v_tlbr = v_aux1;
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
out_color = v_opacity * v_color * color;
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY && !defined(HIGHLIGHT)
vec4 textureThresholds0 = texture2D(u_dotTextures[0], v_dotTextureCoords);
vec4 textureThresholds1 = texture2D(u_dotTextures[1], v_dotTextureCoords);
vec4 difference0 = v_dotThresholds[0] - textureThresholds0;
vec4 difference1 = v_dotThresholds[1] - textureThresholds1;
#ifdef DD_DOT_BLENDING
vec4 isPositive0 = step(0.0, difference0);
vec4 isPositive1 = step(0.0, difference1);
float weightSum = dot(isPositive0, difference0) + dot(isPositive1, difference1);
float lessThanEqZero = step(weightSum, 0.0);
float greaterThanZero = 1.0 - lessThanEqZero ;
float divisor = (weightSum + lessThanEqZero);
vec4 weights0 = difference0 * isPositive0 / divisor;
vec4 weights1 = difference1 * isPositive1 / divisor;
vec4 dotColor = u_dotColors[0] * weights0 + u_dotColors[1] * weights1;
vec4 preEffectColor = greaterThanZero * dotColor + lessThanEqZero * u_dotBackgroundColor;
#else
float diffMax = max(max4(difference0), max4(difference1));
float lessThanZero = step(diffMax, 0.0);
float greaterOrEqZero = 1.0 - lessThanZero;
vec4 isMax0 = step(diffMax, difference0);
vec4 isMax1 = step(diffMax, difference1);
vec4 dotColor = u_dotColors[0] * isMax0 + u_dotColors[1] * isMax1;
vec4 preEffectColor = greaterOrEqZero * dotColor + lessThanZero * u_dotBackgroundColor;
#endif
out_color = preEffectColor;
#else
out_color = v_opacity * v_color;
#endif
#ifdef HIGHLIGHT
out_color.a = 1.0;
#endif
return out_color;
}
void main() {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (v_isOutline > 0.5) {
gl_FragColor = drawLine();
} else {
gl_FragColor = drawFill();
}
#else
gl_FragColor = drawFill();
#endif
}`,"fill.vert":`#include <materials/symbologyTypeUtils.glsl>
#define PACKED_LINE
precision highp float;
attribute float a_bitset;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
attribute float a_inverseArea;
vec4 a_color = vec4(0.0, 0.0, 0.0, 1.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
#else
attribute vec4 a_color;
attribute vec4 a_aux2;
attribute vec4 a_aux3;
#ifndef SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
attribute vec4 a_aux1;
attribute vec2 a_zoomRange;
#else
vec2 a_zoomRange = vec2(0.0, 10000.0);
#endif
#endif
uniform vec2 u_tileOffset;
uniform vec2 u_maxIntNumOfCrossing;
#include <util/encoding.glsl>
#include <materials/vcommon.glsl>
#include <materials/fill/common.glsl>
#include <materials/fill/hittest.glsl>
const float INV_SCALE_COMPRESSION_FACTOR = 1.0 / 128.0;
const float MAX_REPRESENTABLE_INT = 16777216.0;
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 dotThreshold(vec4 featureAttrOverFeatureArea, float dotValue, float tileDotsOverArea) {
return featureAttrOverFeatureArea * (1.0 / dotValue)  * (1.0 / tileDotsOverArea);
}
#endif
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
void drawLine(out lowp vec4 out_color, out highp vec3 out_pos) {
LineData outputs = buildLine(
out_pos,
a_id,
a_pos,
a_color,
(a_aux3.xy - 128.) / 16.,
(a_aux3.zw - 128.) / 16.,
0.,
a_aux2.z / 16.,
a_bitset,
vec4(0.),
vec2(0.),
a_aux2.w / 16.
);
v_id      = outputs.id;
v_opacity = outputs.opacity;
v_aux1    = vec4(outputs.lineHalfWidth, outputs.normal, 0.);
out_color = outputs.color;
}
#endif
void drawFill(out lowp vec4 out_color, out highp vec3 out_pos) {
float a_bitSet = a_bitset;
out_color = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity = getOpacity();
v_id      = norm(a_id);
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
mat3 tileToTileNormalized = mat3(  2. / 512.,  0.,  0.,
0., -2. / 512.,  0.,
-1.,  1.,  1.  );
out_pos   = tileToTileNormalized * vec3((a_pos * FILL_POSITION_PRECISION), 1.);
#else
out_pos   = u_dvsMat3 * vec3(a_pos * FILL_POSITION_PRECISION, 1.);
#endif
#ifdef PATTERN
vec4  a_tlbr   = a_aux1;
float a_width  = a_aux2.x;
float a_height = a_aux2.y;
vec2  a_offset = a_aux2.zw;
vec2  a_scale  = a_aux3.xy;
float a_angle  = a_aux3.z;
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_WIDTH_PRECISION_FACTOR) > 0.5) {
a_width *= INV_SCALE_COMPRESSION_FACTOR;
}
if (getBit(a_bitset, BITSET_FILL_HAS_PATTERN_HEIGHT_PRECISION_FACTOR) > 0.5) {
a_height *= INV_SCALE_COMPRESSION_FACTOR;
}
vec2 scale = INV_SCALE_COMPRESSION_FACTOR * a_scale;
float width = u_zoomFactor * a_width * scale.x;
float height = u_zoomFactor * a_height * scale.y;
float angle = C_256_TO_RAD * a_angle;
float sinA = sin(angle);
float cosA = cos(angle);
float dx = 0.0;
float dy = 0.0;
if (getBit(a_bitset, BITSET_FILL_RANDOM_PATTERN_OFFSET) > 0.5) {
float id = rgba2float(vec4(a_id, 0.0));
dx = rand(vec2(id, 0.0));
dy = rand(vec2(0.0, id));
}
mat3 patternMatrix = mat3(cosA / width, sinA / height, 0,
-sinA / width, cosA / height, 0,
dx,            dy,           1);
vec2 patternSize = vec2(a_width, a_height);
vec2 numPatternsPerMaxInt = vec2(MAX_REPRESENTABLE_INT) / patternSize;
vec2 maxIntCrossingOffsetCorrection = patternSize * fract(u_maxIntNumOfCrossing * numPatternsPerMaxInt);
vec2 tileOffset = u_tileOffset + maxIntCrossingOffsetCorrection - 0.5 * patternSize;
tileOffset = vec2(tileOffset.x * cosA - tileOffset.y * sinA, tileOffset.x * sinA + tileOffset.y * cosA);
tileOffset = mod(tileOffset, patternSize);
vec2 symbolOffset = u_zoomFactor * scale * vec2(a_offset - tileOffset) / vec2(width, height);
v_tileTextureCoord = (patternMatrix * vec3(a_pos * FILL_POSITION_PRECISION, 1.0)).xy - symbolOffset;
v_aux1 = a_tlbr / u_mosaicSize.xyxy;
v_sampleAlphaOnly = getBit(a_bitset, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
if (getBit(a_bitSet, BITSET_FILL_HAS_UNRESOLVED_REPLACEMENT_COLOR) > 0.5) {
#ifdef VV_COLOR
v_sampleAlphaOnly *= (1.0 - float(isNan(VV_ADATA[ATTR_VV_COLOR]))) * (1.0 - getBit(a_bitSet, BITSET_GENERIC_LOCK_COLOR));
#else
v_sampleAlphaOnly = 0.0;
#endif
}
#elif SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_DOT_DENSITY
vec4 ddAttributeData0 = getAttributeData2(a_id) * u_isActive[0] * a_inverseArea;
vec4 ddAttributeData1 = getAttributeData3(a_id) * u_isActive[1] * a_inverseArea;
float size = u_tileZoomFactor * 512.0 * 1.0 / u_pixelRatio;
v_dotThresholds[0] = dotThreshold(ddAttributeData0, u_dotValue, u_tileDotsOverArea);
v_dotThresholds[1] = dotThreshold(ddAttributeData1, u_dotValue, u_tileDotsOverArea);
v_dotTextureCoords = (a_pos * FILL_POSITION_PRECISION + 0.5) / size;
#endif
}
#ifdef HITTEST
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
if (getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE) > 0.5) {
out_pos = vec3(0., 0., 2.);
return;
}
#endif
hittestFill(out_color, out_pos);
gl_PointSize = 1.0;
}
#elif defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
void draw(out lowp vec4 out_color, out highp vec3 out_pos) {
v_isOutline = getBit(a_bitset, BITSET_TYPE_FILL_OUTLINE);
if (v_isOutline > 0.5) {
drawLine(out_color, out_pos);
} else {
drawFill(out_color, out_pos);
}
}
#else
#define draw drawFill
#endif
void main()
{
INIT;
highp vec3 pos  = vec3(0.);
highp vec4 color  = vec4(0.);
draw(color, pos);
v_color = color;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}`,"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestFill(
out lowp vec4 out_color,
out highp vec3 out_pos
) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * FILL_POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * FILL_POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * FILL_POSITION_PRECISION, 1.);
float hittestDist = u_hittestDist;
float dist = distPointTriangle(u_hittestPos, pos.xy, pos1.xy, pos2.xy);
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist < 0. || dist >= hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist == 0. ? (1. / 255.) : 0.);
}
#endif`},hittest:{"common.glsl":`#ifdef HITTEST
uniform float hittestDist;
uniform highp vec2 hittestPos;
float projectScalar(vec2 a, vec2 b) {
return dot(a, normalize(b));
}
float distPointSegment(vec2 p0, vec2 p1, vec2 p2) {
vec2 L = p2 - p1;
vec2 A = p0 - p1;
float projAL = projectScalar(A, L);
float t = clamp(projAL / length(L), 0., 1.);
return distance(p0, p1 + t * (p2 - p1));
}
void hittestMarker(out lowp vec4 out_color, out highp vec3 out_pos, in highp vec3 pos, float size) {
float dist = distance(pos, vec3(hittestPos, 1.));
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if ((dist - size) > hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, (dist - size) < 0. ? (1. / 255.) : 0.);
}
float intersectPointTriangleBary(vec2 p, vec2 a, vec2 b, vec2 c) {
return inTriangle(xyToBarycentric(p, a, b, c));
}
float distPointTriangle(vec2 p, vec2 a, vec2 b, vec2 c) {
vec2 ba = b - a;
vec2 ca = c - a;
float crossProduct = ba.x * ca.y - ca.x * ba.y;
bool isParallel = crossProduct < EPSILON_HITTEST && crossProduct > -EPSILON_HITTEST;
if (isParallel) {
return -1.;
}
if (intersectPointTriangleBary(p.xy, a, b, c) == 1.) {
return 0.;
}
float distAB = distPointSegment(p, a, b);
float distBC = distPointSegment(p, b, c);
float distCA = distPointSegment(p, c, a);
return min(min(distAB, distBC), distCA);
}
#endif`},icon:{"common.glsl":`#include <util/encoding.glsl>
uniform lowp vec2 u_mosaicSize;
varying lowp vec4 v_color;
varying highp vec3 v_id;
varying highp vec4 v_sizeTex;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
uniform lowp sampler2D u_texture;
#ifdef SDF
varying lowp vec4 v_outlineColor;
varying mediump float v_outlineWidth;
varying mediump float v_distRatio;
varying mediump float v_overridingOutlineColor;
varying mediump float v_isThin;
#endif
#ifdef SDF
vec4 getColor(vec2 v_size, vec2 v_tex) {
#ifdef HITTEST
lowp vec4 fillPixelColor = vec4(1.0);
#else
lowp vec4 fillPixelColor = v_color;
#endif
float d = 0.5 - rgba2float(texture2D(u_texture, v_tex));
float size = max(v_size.x, v_size.y);
float dist = d * size * SOFT_EDGE_RATIO * v_distRatio;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
float outlineWidth = v_outlineWidth;
#ifdef HIGHLIGHT
outlineWidth = max(outlineWidth, 4.0 * v_isThin);
#endif
if (outlineWidth > 0.25) {
lowp vec4 outlinePixelColor = v_overridingOutlineColor * v_color + (1.0 - v_overridingOutlineColor) * v_outlineColor;
float clampedOutlineSize = min(outlineWidth, size);
outlinePixelColor *= clamp(0.5 - abs(dist) + clampedOutlineSize * 0.5, 0.0, 1.0);
return v_opacity * ((1.0 - outlinePixelColor.a) * fillPixelColor + outlinePixelColor);
}
return v_opacity * fillPixelColor;
}
#else
vec4 getColor(vec2 _v_size, vec2 v_tex) {
lowp vec4 texColor = texture2D(u_texture, v_tex);
return v_opacity * texColor * v_color;
}
#endif`,heatmapAccumulate:{"heatmapAccumulate.frag":`precision mediump float;
#include <materials/icon/heatmapAccumulate/common.glsl>
#ifdef HEATMAP_PRECISION_HALF_FLOAT
#define COMPRESSION_FACTOR 0.25
#else
#define COMPRESSION_FACTOR 1.0
#endif
uniform lowp sampler2D u_texture;
void main() {
#ifdef HITTEST
gl_FragColor = v_hittestResult;
#else
float radius = length(v_offsetFromCenter);
float shapeWeight = step(radius, 1.0);
float oneMinusRadiusSquared = 1.0 - radius * radius;
float kernelWeight = oneMinusRadiusSquared * oneMinusRadiusSquared;
gl_FragColor = vec4(shapeWeight * kernelWeight * v_fieldValue * COMPRESSION_FACTOR);
#endif
}`,"common.glsl":`varying lowp vec4 v_hittestResult;
varying mediump vec2 v_offsetFromCenter;
varying highp float v_fieldValue;`,"heatmapAccumulate.vert":`precision highp float;
attribute vec2 a_vertexOffset;
vec4 a_color = vec4(0.0);
vec2 a_zoomRange = vec2(0.0, 10000.0);
uniform float u_radius;
uniform float u_isFieldActive;
#include <materials/vcommon.glsl>
#include <materials/hittest/common.glsl>
#include <materials/icon/heatmapAccumulate/common.glsl>
void main() {
float filterFlags = getFilterFlags();
#ifdef HITTEST
highp vec4 out_hittestResult = vec4(0.);
highp vec3 out_pos = vec3(0.);
vec3 pos = u_viewMat3 * u_tileMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
hittestMarker(out_hittestResult, out_pos, pos, u_radius);
v_hittestResult = out_hittestResult;
gl_PointSize = 1.;
gl_Position = vec4(clip(a_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
v_offsetFromCenter = sign(a_vertexOffset);
v_fieldValue = getAttributeData2(a_id).x * u_isFieldActive + 1.0 - u_isFieldActive;
vec3 centerPos = u_dvsMat3 * vec3(a_pos * POSITION_PRECISION, 1.0);
vec3 vertexPos = centerPos + u_displayViewMat3 * vec3(v_offsetFromCenter, 0.0) * u_radius;
gl_Position = vec4(clip(a_color, vertexPos, filterFlags, a_zoomRange), 1.0);
#endif
}`},"hittest.glsl":`#ifdef HITTEST
#include <materials/hittest/common.glsl>
attribute vec2 a_vertexOffset1;
attribute vec2 a_vertexOffset2;
attribute vec2 a_texCoords1;
attribute vec2 a_texCoords2;
vec2 getTextureCoords(in vec3 bary, in vec2 texCoords0, in vec2 texCoords1, in vec2 texCoords2) {
return texCoords0 * bary.x + texCoords1 * bary.y + texCoords2 * bary.z;
}
void hittestIcon(
inout lowp vec4 out_color,
out highp vec3 out_pos,
in vec3 pos,
in vec3 offset,
in vec2 size,
in float scaleFactor,
in float isMapAligned
) {
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
vec3 posBase = u_viewMat3 * u_tileMat3  * pos;
vec3 offset1 = scaleFactor * vec3(a_vertexOffset1 / 16.0, 0.);
vec3 offset2 = scaleFactor * vec3(a_vertexOffset2 / 16.0, 0.);
vec2 pos0    = (posBase + getMatrixNoDisplay(isMapAligned) * offset).xy;
vec2 pos1    = (posBase + getMatrixNoDisplay(isMapAligned) * offset1).xy;
vec2 pos2    = (posBase + getMatrixNoDisplay(isMapAligned) * offset2).xy;
vec3 bary0 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary1 = xyToBarycentric(u_hittestPos + vec2(0., -u_hittestDist), pos0, pos1, pos2);
vec3 bary2 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, -u_hittestDist), pos0, pos1, pos2);
vec3 bary3 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary4 = xyToBarycentric(u_hittestPos, pos0, pos1, pos2);
vec3 bary5 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, 0.), pos0, pos1, pos2);
vec3 bary6 = xyToBarycentric(u_hittestPos + vec2(-u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec3 bary7 = xyToBarycentric(u_hittestPos + vec2(0., u_hittestDist), pos0, pos1, pos2);
vec3 bary8 = xyToBarycentric(u_hittestPos + vec2(u_hittestDist, u_hittestDist), pos0, pos1, pos2);
vec2 tex0 = a_texCoords  / u_mosaicSize;
vec2 tex1 = a_texCoords1 / u_mosaicSize;
vec2 tex2 = a_texCoords2 / u_mosaicSize;
float alphaSum = 0.;
alphaSum += inTriangle(bary0) * getColor(size, getTextureCoords(bary0, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary1) * getColor(size, getTextureCoords(bary1, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary2) * getColor(size, getTextureCoords(bary2, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary3) * getColor(size, getTextureCoords(bary3, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary4) * getColor(size, getTextureCoords(bary4, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary5) * getColor(size, getTextureCoords(bary5, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary6) * getColor(size, getTextureCoords(bary6, tex0, tex1, tex2)).a;
alphaSum += inTriangle(bary7) * getColor(size, getTextureCoords(bary7, tex0, tex1, tex2)).a;
out_pos.z += step(alphaSum, .05) * 2.0;
out_color = vec4(1. / 255., 0., 0., alphaSum / 255.);
}
#endif`,"icon.frag":`precision mediump float;
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/icon/common.glsl>
void main()
{
#ifdef HITTEST
vec4 color = v_color;
#else
vec4 color = getColor(v_sizeTex.xy, v_sizeTex.zw);
#endif
#ifdef HIGHLIGHT
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"icon.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_outlineColor;
attribute vec4 a_sizeAndOutlineWidth;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
attribute vec2 a_bitSetAndDistRatio;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/icon/common.glsl>
#include <materials/icon/hittest.glsl>
float getMarkerScaleFactor(inout vec2 size, in float referenceSize) {
#ifdef VV_SIZE
float f = getSize(size.y) / size.y;
float sizeFactor = size.y / referenceSize;
return getSize(referenceSize) / referenceSize;
#else
return 1.;
#endif
}
void main()
{
INIT;
float a_bitSet = a_bitSetAndDistRatio.x;
vec3  pos           = vec3(a_pos * POSITION_PRECISION, 1.0);
vec2  size          = a_sizeAndOutlineWidth.xy * a_sizeAndOutlineWidth.xy / 128.0;
vec3  offset        = vec3(a_vertexOffset / 16.0, 0.);
float outlineSize   = a_sizeAndOutlineWidth.z * a_sizeAndOutlineWidth.z / 128.0;
float isMapAligned  = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
float referenceSize = a_sizeAndOutlineWidth.w * a_sizeAndOutlineWidth.w / 128.0;
float scaleSymbolProportionally = getBit(a_bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
float scaleFactor               = getMarkerScaleFactor(size, referenceSize);
size.xy     *= scaleFactor;
offset.xy   *= scaleFactor;
outlineSize *= scaleSymbolProportionally * (scaleFactor - 1.0) + 1.0;
vec2 v_tex   = a_texCoords / u_mosaicSize;
float filterFlags = getFilterFlags();
v_color    = getColor(a_color, a_bitSet, BITSET_GENERIC_LOCK_COLOR);
v_opacity  = getOpacity();
v_id       = norm(a_id);
v_pos      = u_dvsMat3 * pos + getMatrix(isMapAligned) * getRotation()  * offset;
v_sizeTex  = vec4(size.xy, v_tex.xy);
#ifdef SDF
v_isThin   = getBit(a_bitSet, BITSET_MARKER_OUTLINE_ALLOW_COLOR_OVERRIDE);
#ifdef VV_COLOR
v_overridingOutlineColor = v_isThin;
#else
v_overridingOutlineColor = 0.0;
#endif
v_outlineWidth = min(outlineSize, max(max(size.x, size.y) - 0.99, 0.0));
v_outlineColor = a_outlineColor;
v_distRatio = a_bitSetAndDistRatio.y / 128.0;
#endif
#ifdef HITTEST
highp vec4 out_color = vec4(0.);
highp vec3 out_pos   = vec3(0.);
hittestIcon(out_color, out_pos, pos, offset, size, scaleFactor, isMapAligned);
v_color = out_color;
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},label:{"common.glsl":`uniform mediump float u_zoomLevel;
uniform mediump float u_mapRotation;
uniform mediump float u_mapAligned;
uniform mediump vec2 u_mosaicSize;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying mediump vec2 v_tex;
varying mediump vec4 v_color;
varying lowp vec4 v_animation;`,"label.frag":`#include <materials/text/text.frag>`,"label.vert":`precision highp float;
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texAndSize;
attribute vec4 a_refSymbolAndPlacementOffset;
attribute vec4 a_glyphData;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
uniform float u_mapRotation;
uniform float u_mapAligned;
float getZ(in float minZoom, in float maxZoom, in float angle) {
float glyphAngle = angle * 360.0 / 254.0;
float mapAngle = u_mapRotation * 360.0 / 254.0;
float diffAngle = min(360.0 - abs(mapAngle - glyphAngle), abs(mapAngle - glyphAngle));
float z = 0.0;
z += u_mapAligned * (2.0 * (1.0 - step(minZoom, u_currentZoom)));
z += u_mapAligned * 2.0 * step(90.0, diffAngle);
z += 2.0 * (1.0 - step(u_currentZoom, maxZoom));
return z;
}
void main()
{
INIT;
float groupMinZoom    = getMinZoom();
float glyphMinZoom    = a_glyphData.x;
float glyphMaxZoom    = a_glyphData.y;
float glyphAngle      = a_glyphData.z;
float a_isBackground  = a_glyphData.w;
float a_minZoom          = max(groupMinZoom, glyphMinZoom);
float a_placementPadding = a_refSymbolAndPlacementOffset.x * EXTRUDE_SCALE_PLACEMENT_PADDING;
vec2  a_placementDir     = unpack_u8_nf32(a_refSymbolAndPlacementOffset.zw);
float a_refSymbolSize    = a_refSymbolAndPlacementOffset.y;
float fontSize           = a_texAndSize.z;
float haloSize           = a_texAndSize.w * OUTLINE_SCALE;
vec2  vertexOffset = a_vertexOffset * OFFSET_PRECISION;
vec3  pos          = vec3(a_pos * POSITION_PRECISION, 1.0);
float z            = getZ(a_minZoom, glyphMaxZoom, glyphAngle);
float fontScale    = fontSize / SDF_FONT_SIZE;
float halfSize     = getSize(a_refSymbolSize) / 2.0;
float animation    = pow(getAnimationState(), vec4(2.0)).r;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor = (isBackground + isText) * a_color;
v_color     = animation * ((1.0 - u_isHaloPass) * nonHaloColor + (u_isHaloPass * a_haloColor));
v_opacity   = 1.0;
v_tex       = a_texCoords / u_mosaicSize;
v_edgeDistanceOffset = u_isHaloPass * haloSize / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
vec2 placementOffset = a_placementDir * (halfSize + a_placementPadding);
vec3 glyphOffset     = u_displayMat3 * vec3(vertexOffset + placementOffset, 0.0);
vec3 v_pos           = vec3((u_dvsMat3 * pos + glyphOffset).xy, z);
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
gl_Position = vec4(v_pos, 1.0);
#ifdef DEBUG
v_color = vec4(a_color.rgb, z == 0.0 ? 1.0 : 0.645);
#endif
}`},line:{"hittest.glsl":`#include <materials/hittest/common.glsl>
#ifdef HITTEST
attribute vec2 a_pos1;
attribute vec2 a_pos2;
void hittestLine(out lowp vec4 out_color, out highp vec3 out_pos, float halfWidth) {
vec3 pos        = u_viewMat3 * u_tileMat3 * vec3(a_pos  * POSITION_PRECISION, 1.);
vec3 pos1       = u_viewMat3 * u_tileMat3 * vec3(a_pos1 * POSITION_PRECISION, 1.);
vec3 pos2       = u_viewMat3 * u_tileMat3 * vec3(a_pos2 * POSITION_PRECISION, 1.);
vec3 outTextureCoords = vec3(getAttributeDataTextureCoords(a_id), 0.0);
float dist = min(distPointSegment(u_hittestPos, pos.xy, pos1.xy),
distPointSegment(u_hittestPos, pos.xy, pos2.xy)) - halfWidth;
out_pos = vec3(getAttributeDataTextureCoords(a_id), 0.0);
if (dist >= u_hittestDist) {
out_pos.z += 2.0;
}
out_color = vec4(1. / 255., 0, 0, dist <= 0. ? (1. / 255.) : 0.);
}
#endif`,"common.glsl":`varying lowp vec4 v_color;
varying highp vec3 v_id;
varying mediump vec2 v_normal;
varying mediump float v_lineHalfWidth;
varying lowp float v_opacity;
#ifdef PATTERN
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
#endif
#if defined(PATTERN) || defined(SDF)
varying highp float v_accumulatedDistance;
#endif
#ifdef SDF
varying mediump float v_lineWidthRatio;
#endif`,"line.frag":`precision lowp float;
#include <util/encoding.glsl>
#include <materials/constants.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.frag>
#ifdef HITTEST
void main() {
gl_FragColor = v_color;
}
#else
void main() {
LineData inputs = LineData(
v_color,
v_normal,
v_lineHalfWidth,
v_opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr,
v_patternSize,
#endif
#ifdef SDF
v_lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance,
#endif
#endif
v_id
);
gl_FragColor = shadeLine(inputs);
}
#endif`,"line.vert":`precision highp float;
attribute vec4 a_color;
attribute vec4 a_offsetAndNormal;
attribute vec2 a_accumulatedDistanceAndHalfWidth;
attribute vec4 a_tlbr;
attribute vec4 a_segmentDirection;
attribute vec2 a_aux;
attribute vec2 a_zoomRange;
#include <materials/vcommon.glsl>
#include <materials/symbologyTypeUtils.glsl>
#include <materials/line/common.glsl>
#include <materials/line/hittest.glsl>
#include <materials/shared/line/common.glsl>
#include <materials/shared/line/line.vert>
#ifdef HITTEST
void draw() {
float aa        = 0.5 * u_antialiasing;
float a_halfWidth = a_accumulatedDistanceAndHalfWidth.y / 16.;
float a_cimHalfWidth = a_aux.x / 16. ;
vec2  a_offset = a_offsetAndNormal.xy / 16.;
float baseWidth = getBaseLineHalfWidth(a_halfWidth, a_cimHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
highp vec3 pos  = vec3(0.);
v_color = vec4(0.);
hittestLine(v_color, pos, halfWidth);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#else
void draw()
{
highp vec3 pos = vec3(0.);
LineData outputs = buildLine(
pos,
a_id,
a_pos,
a_color,
a_offsetAndNormal.xy / 16.,
a_offsetAndNormal.zw / 16.,
a_accumulatedDistanceAndHalfWidth.x,
a_accumulatedDistanceAndHalfWidth.y / 16.,
a_segmentDirection.w,
a_tlbr,
a_segmentDirection.xy / 16.,
a_aux.x / 16.
);
v_id              = outputs.id;
v_color           = outputs.color;
v_normal          = outputs.normal;
v_lineHalfWidth   = outputs.lineHalfWidth;
v_opacity         = outputs.opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
v_tlbr          = outputs.tlbr;
v_patternSize   = outputs.patternSize;
#endif
#ifdef SDF
v_lineWidthRatio = outputs.lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
v_accumulatedDistance = outputs.accumulatedDistance;
#endif
#endif
gl_Position = vec4(clip(outputs.color, pos, getFilterFlags(), a_zoomRange), 1.0);
}
#endif
void main() {
INIT;
draw();
}`},pie:{"pie.common.glsl":`uniform float outlineWidth;
uniform mediump float sectorThreshold;
varying vec3  v_id;
varying vec3  v_pos;
varying vec2  v_offset;
varying vec4  v_color;
varying float v_size;
varying float v_numOfEntries;
varying float v_maxSectorAngle;
varying vec2  v_filteredSectorToColorId[numberOfFields];
varying vec2  v_texCoords;
varying float v_outlineWidth;
varying float v_opacity;
struct FilteredChartInfo {
float endSectorAngle;
int colorId;
};`,"pie.frag":`precision highp float;
#include <util/atan2.glsl>
#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/pie/pie.common.glsl>
uniform lowp vec4 colors[numberOfFields];
uniform lowp vec4 defaultColor;
uniform lowp vec4 othersColor;
uniform lowp vec4 outlineColor;
uniform float donutRatio;
lowp vec4 getSectorColor(in int index, in vec2 filteredSectorToColorId[numberOfFields]) {
mediump int colorIndex = int(filteredSectorToColorId[index].y);
return colors[colorIndex];
}
const int OTHER_SECTOR_ID = 255;
#ifdef HITTEST
vec4 getColor() {
float distanceSize = length(v_offset) * v_size;
float donutSize = donutRatio * v_size;
float alpha = step(donutSize, distanceSize) * (1.0 - step(v_size, distanceSize));
return v_color;
}
#else
vec4 getColor() {
float angle = mod(90.0 - C_RAD_TO_DEG * atan2(v_offset.y, v_offset.x), 360.0);
int numOfEntries = int(v_numOfEntries);
float maxSectorAngle = v_maxSectorAngle;
lowp vec4 fillColor = (maxSectorAngle > 0.0 || sectorThreshold > 0.0) ? othersColor : defaultColor;
lowp vec4 prevColor = vec4(0.0);
lowp vec4 nextColor = vec4(0.0);
float startSectorAngle = 0.0;
float endSectorAngle = 0.0;
if (angle < maxSectorAngle) {
for (int index = 0; index < numberOfFields; ++index) {
startSectorAngle = endSectorAngle;
endSectorAngle = v_filteredSectorToColorId[index].x;
if (endSectorAngle > angle) {
fillColor = getSectorColor(index, v_filteredSectorToColorId);
prevColor = sectorThreshold != 0.0 && index == 0 && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index > 0 ? index - 1 : numOfEntries - 1, v_filteredSectorToColorId);
nextColor = sectorThreshold != 0.0 && abs(endSectorAngle - maxSectorAngle) < EPSILON && maxSectorAngle + EPSILON < 360. ? othersColor :
getSectorColor(index < numOfEntries - 1 ? index + 1 : 0, v_filteredSectorToColorId);
break;
}
if (index == numOfEntries - 1) {
break;
}
}
} else if (numOfEntries <= 0) {
prevColor = nextColor = fillColor;
} else {
prevColor = getSectorColor(numOfEntries - 1, v_filteredSectorToColorId);
nextColor = getSectorColor(0, v_filteredSectorToColorId);
startSectorAngle = maxSectorAngle;
endSectorAngle = 360.0;
}
lowp vec4 outlineColor = outlineColor;
float offset = length(v_offset);
float distanceSize = offset * v_size;
float distanceToStartSector = (angle - startSectorAngle);
float distanceToEndSector = (endSectorAngle - angle);
float sectorThreshold = 0.75;
float beginSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToStartSector * offset);
float endSectorAlpha = smoothstep(-sectorThreshold, sectorThreshold, distanceToEndSector * offset);
fillColor = mix(prevColor, fillColor, beginSectorAlpha) + mix(nextColor, fillColor, endSectorAlpha) - fillColor;
float aaThreshold = 0.75;
float startOfOutline = v_size - v_outlineWidth - aaThreshold;
float donutSize = donutRatio * startOfOutline;
float endOfDonut = donutSize - v_outlineWidth;
float innerCircleAlpha = endOfDonut > aaThreshold ? smoothstep(endOfDonut - aaThreshold, endOfDonut + aaThreshold, distanceSize) : 1.0;
float outerCircleAlpha = 1.0 - smoothstep(v_size - 2.0 * aaThreshold, v_size, distanceSize);
float circleAlpha = innerCircleAlpha * outerCircleAlpha;
if (startOfOutline > 0.0 && v_outlineWidth > 0.25) {
float outlineFactor = smoothstep(startOfOutline - aaThreshold, startOfOutline + aaThreshold, distanceSize);
float innerLineFactor = donutSize - aaThreshold > 0.0 ? 1.0 - smoothstep(donutSize - aaThreshold, donutSize + aaThreshold , distanceSize) : 0.0;
fillColor = mix(fillColor, outlineColor, innerLineFactor + outlineFactor);
}
return v_opacity * circleAlpha * fillColor;
}
#endif
void main()
{
vec4 color = getColor();
#ifdef highlight
color.a = step(1.0 / 255.0, color.a);
#endif
gl_FragColor = color;
}`,"pie.vert":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/barycentric.glsl>
#include <materials/vcommon.glsl>
#include <materials/vv.glsl>
#include <materials/attributeData.glsl>
#include <materials/pie/pie.common.glsl>
#include <materials/hittest/common.glsl>
attribute float a_bitSet;
attribute vec2  a_offset;
attribute vec2  a_texCoords;
attribute float a_referenceSize;
attribute vec2  a_zoomRange;
int filterValue(in float sectorAngle,
in int currentIndex,
inout FilteredChartInfo filteredInfo,
inout vec2 filteredSectorToColorId[numberOfFields]) {
if (sectorAngle > sectorThreshold * 360.0) {
filteredInfo.endSectorAngle += sectorAngle;
filteredSectorToColorId[filteredInfo.colorId] = vec2(filteredInfo.endSectorAngle, currentIndex);
++filteredInfo.colorId;
}
return 0;
}
int filterValues(inout vec2 filteredSectorToColorId[numberOfFields],
inout FilteredChartInfo filteredInfo,
in float sectorAngles[numberOfFields]) {
for (int index = 0; index < numberOfFields; ++index) {
float sectorValue = sectorAngles[index];
filterValue(sectorValue, index, filteredInfo, filteredSectorToColorId);
}
return filteredInfo.colorId;
}
float getMarkerSize(inout vec2 offset, inout float outlineSize, in float referenceSize, in float bitSet) {
float outSize = referenceSize * 0.5;
#ifdef VV_SIZE
float r = getSize(referenceSize, currentScale) / referenceSize;
outSize *= r;
offset.xy *= r;
float scaleSymbolProportionally = getBit(bitSet, BITSET_MARKER_SCALE_SYMBOLS_PROPORTIONALLY);
outlineSize *= scaleSymbolProportionally * (r - 1.0) + 1.0;
#endif
return outSize;
}
vec3 getOffset(in vec2 in_offset, float a_bitSet) {
float isMapAligned = getBit(a_bitSet, BITSET_MARKER_ALIGNMENT_MAP);
vec3  offset       = vec3(in_offset, 0.0);
return getMatrix(isMapAligned) * offset;
}
float filterNaNValues(in float value) {
return value != NAN_MAGIC_NUMBER && value > 0.0 ? value : 0.0;
}
void main()
{
INIT;
vec2  a_offset = a_offset / 16.0;
float outlineSize = outlineWidth;
float a_bitSet = a_bitSet;
float a_referenceSize = a_referenceSize;
vec2 a_texCoords = a_texCoords / 4.0;
float markerSize = getMarkerSize(a_offset, outlineSize, a_referenceSize, a_bitSet);
float filterFlags = getFilterFlags();
vec3  pos         = vec3(a_pos / 10.0, 1.0);
v_opacity      = getOpacity();
v_pos          = displayViewScreenMat3 * pos + getOffset(a_offset, a_bitSet);
v_offset       = sign(a_texCoords - 0.5);
v_size         = markerSize;
v_outlineWidth = outlineSize;
float attributeData[10];
vec4 attributeData3 = getDataDriven0(a_id);
attributeData[0] = filterNaNValues(attributeData3.x);
attributeData[1] = filterNaNValues(attributeData3.y);
attributeData[2] = filterNaNValues(attributeData3.z);
attributeData[3] = filterNaNValues(attributeData3.w);
#if (numberOfFields > 4)
vec4 attributeData4 = getDataDriven1(a_id);
attributeData[4] = filterNaNValues(attributeData4.x);
attributeData[5] = filterNaNValues(attributeData4.y);
attributeData[6] = filterNaNValues(attributeData4.z);
attributeData[7] = filterNaNValues(attributeData4.w);
#endif
#if (numberOfFields > 8)
vec4 attributeData5 = getDataDriven2(a_id);
attributeData[8] = filterNaNValues(attributeData5.x);
attributeData[9] = filterNaNValues(attributeData5.y);
#endif
float sum = 0.0;
for (int i = 0; i < numberOfFields; ++i) {
sum += attributeData[i];
}
float sectorAngles[numberOfFields];
for (int i = 0; i < numberOfFields; ++i) {
sectorAngles[i] = 360.0 * attributeData[i] / sum;
}
vec2 filteredSectorToColorId[numberOfFields];
FilteredChartInfo filteredInfo = FilteredChartInfo(0.0, 0);
int numOfEntries = filterValues(filteredSectorToColorId, filteredInfo, sectorAngles);
v_numOfEntries = float(numOfEntries);
v_maxSectorAngle = filteredInfo.endSectorAngle;
v_filteredSectorToColorId = filteredSectorToColorId;
#ifdef HITTEST
highp vec3 out_pos = vec3(0.0);
v_color            = vec4(0.0);
hittestMarker(v_color, out_pos, viewMat3 * tileMat3 *  pos, v_size);
gl_PointSize = 1.0;
gl_Position = vec4(clip(v_color, out_pos, filterFlags, a_zoomRange), 1.0);
#else
gl_Position = vec4(clip(v_color, v_pos, filterFlags, a_zoomRange), 1.0);
#endif
}`},shared:{line:{"common.glsl":`#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
uniform mediump vec2 u_mosaicSize;
varying mediump float v_sampleAlphaOnly;
#endif
struct LineData {
lowp vec4 color;
mediump vec2 normal;
mediump float lineHalfWidth;
lowp float opacity;
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
mediump vec4 tlbr;
mediump vec2 patternSize;
#endif
#ifdef SDF
mediump float lineWidthRatio;
#endif
#if defined(PATTERN) || defined(SDF)
highp float accumulatedDistance;
#endif
#endif
highp vec3 id;
};`,"line.frag":`uniform lowp float u_blur;
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && !defined(HIGHLIGHT)
#if defined(PATTERN) || defined(SDF)
uniform sampler2D u_texture;
uniform highp float u_pixelRatio;
#endif
#endif
#if defined(SDF) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float adjustedPatternWidth = line.patternSize.x * 2.0 * line.lineWidthRatio;
mediump float relativeTexX = fract(line.accumulatedDistance / adjustedPatternWidth);
mediump float relativeTexY = 0.5 + 0.25 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * line.lineHalfWidth;
return line.opacity * clamp(0.5 - dist, 0.0, 1.0) * line.color;
}
#elif defined(PATTERN) && !defined(HIGHLIGHT) && !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE)
lowp vec4 getLineColor(LineData line) {
mediump float lineHalfWidth = line.lineHalfWidth;
mediump float adjustedPatternHeight = line.patternSize.y * 2.0 * lineHalfWidth / line.patternSize.x;
mediump float relativeTexY = fract(line.accumulatedDistance / adjustedPatternHeight);
mediump float relativeTexX = 0.5 + 0.5 * line.normal.y;
mediump vec2 texCoord = mix(line.tlbr.xy, line.tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
#ifdef VV_COLOR
if (v_sampleAlphaOnly > 0.5) {
color.rgb = vec3(color.a);
}
#endif
return line.opacity * line.color * color;
}
#else
lowp vec4 getLineColor(LineData line) {
return line.opacity * line.color;
}
#endif
vec4 shadeLine(LineData line)
{
mediump float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(line.lineHalfWidth, THIN_LINE_HALF_WIDTH), 1.0);
mediump float fragDist = length(line.normal) * line.lineHalfWidth;
lowp float alpha = clamp(thinLineFactor * (line.lineHalfWidth - fragDist) / (u_blur + thinLineFactor - 1.0), 0.0, 1.0);
lowp vec4 out_color = getLineColor(line) * alpha;
#ifdef HIGHLIGHT
out_color.a = step(1.0 / 255.0, out_color.a);
#endif
#ifdef ID
if (out_color.a < 1.0 / 255.0) {
discard;
}
out_color = vec4(line.id, 0.0);
#endif
return out_color;
}`,"line.vert":`float getBaseLineHalfWidth(in float lineHalfWidth, in float referenceHalfWidth) {
#ifdef VV_SIZE
float refLineWidth = 2.0 * referenceHalfWidth;
return 0.5 * (lineHalfWidth / max(referenceHalfWidth, EPSILON)) * getSize(refLineWidth);
#else
return lineHalfWidth;
#endif
}
float getLineHalfWidth(in float baseWidth, in float aa) {
float halfWidth = max(baseWidth + aa, 0.45) + 0.1 * aa;
#ifdef HIGHLIGHT
halfWidth = max(halfWidth, 2.0);
#endif
return halfWidth;
}
vec2 getDist(in vec2 offset, in float halfWidth) {
float thinLineFactor = max(THIN_LINE_WIDTH_FACTOR * step(halfWidth, THIN_LINE_HALF_WIDTH), 1.0);
return thinLineFactor * halfWidth * offset;
}
LineData buildLine(
out vec3 out_pos,
in vec3 in_id,
in vec2 in_pos,
in vec4 in_color,
in vec2 in_offset,
in vec2 in_normal,
in float in_accumulatedDist,
in float in_lineHalfWidth,
in float in_bitSet,
in vec4 in_tlbr,
in vec2 in_segmentDirection,
in float in_referenceHalfWidth
)
{
float aa        = 0.5 * u_antialiasing;
float baseWidth = getBaseLineHalfWidth(in_lineHalfWidth, in_referenceHalfWidth);
float halfWidth = getLineHalfWidth(baseWidth, aa);
float z         = 2.0 * step(baseWidth, 0.0);
vec2  dist      = getDist(in_offset, halfWidth);
vec3  offset    = u_displayViewMat3 * vec3(dist, 0.0);
vec3  pos       = u_dvsMat3 * vec3(in_pos * POSITION_PRECISION, 1.0) + offset;
#ifdef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
vec4  color     = in_color;
float opacity   = 1.0;
#else
vec4  color     = getColor(in_color, in_bitSet, BITSET_GENERIC_LOCK_COLOR);
float opacity   = getOpacity();
#ifdef SDF
const float SDF_PATTERN_HALF_WIDTH = 15.5;
float scaleDash = getBit(in_bitSet, BITSET_LINE_SCALE_DASH);
float lineWidthRatio = (scaleDash * max(halfWidth - 0.55 * u_antialiasing, 0.25) + (1.0 - scaleDash)) / SDF_PATTERN_HALF_WIDTH;
#endif
#endif
#if !defined(SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE) && defined(PATTERN)
v_sampleAlphaOnly = getBit(in_bitSet, BITSET_GENERIC_CONSIDER_ALPHA_ONLY);
#endif
out_pos = vec3(pos.xy, z);
return LineData(
color,
in_normal,
halfWidth,
opacity,
#ifndef SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#ifdef PATTERN
in_tlbr / u_mosaicSize.xyxy,
vec2(in_tlbr.z - in_tlbr.x, in_tlbr.w - in_tlbr.y),
#endif
#ifdef SDF
lineWidthRatio,
#endif
#if defined(PATTERN) || defined(SDF)
in_accumulatedDist * u_zoomFactor + dot(in_segmentDirection, dist),
#endif
#endif
norm(in_id)
);
}`}},text:{"common.glsl":`uniform highp vec2 u_mosaicSize;
varying highp vec3 v_id;
varying mediump vec3 v_pos;
varying lowp float v_opacity;
varying lowp vec4 v_color;
varying highp vec2 v_tex;
varying mediump float v_antialiasingWidth;
varying mediump float v_edgeDistanceOffset;
varying lowp float v_transparency;`,"hittest.glsl":`#include <materials/hittest/common.glsl>`,"text.frag":`precision mediump float;
#include <materials/text/common.glsl>
uniform lowp sampler2D u_texture;
#ifdef HITTEST
vec4 getColor() {
return v_color;
}
#else
vec4 getColor()
{
float SDF_CUTOFF = (2.0 / 8.0);
float SDF_BASE_EDGE_DIST = 1.0 - SDF_CUTOFF;
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float edge = SDF_BASE_EDGE_DIST - v_edgeDistanceOffset;
#ifdef HIGHLIGHT
edge /= 2.0;
#endif
lowp float aa = v_antialiasingWidth;
lowp float alpha = smoothstep(edge - aa, edge + aa, dist);
return alpha * v_color * v_opacity;
}
#endif
void main()
{
gl_FragColor = getColor();
}`,"text.vert":`precision highp float;
#include <materials/utils.glsl>
#include <materials/vcommon.glsl>
#include <materials/text/common.glsl>
#include <materials/text/hittest.glsl>
attribute vec4 a_color;
attribute vec4 a_haloColor;
attribute vec4 a_texFontSize;
attribute vec4 a_aux;
attribute vec2 a_zoomRange;
attribute vec2 a_vertexOffset;
attribute vec2 a_texCoords;
uniform float u_isHaloPass;
uniform float u_isBackgroundPass;
float getTextSize(inout vec2 offset, inout float baseSize, in float referenceSize) {
#ifdef VV_SIZE
float r = getSize(referenceSize) / referenceSize;
baseSize *= r;
offset.xy *= r;
return baseSize;
#endif
return baseSize;
}
void main()
{
INIT;
float a_isBackground  = a_aux.y;
float a_referenceSize = a_aux.z * a_aux.z / 256.0;
float a_bitSet        = a_aux.w;
float a_fontSize      = a_texFontSize.z;
vec2  a_offset        = a_vertexOffset * OFFSET_PRECISION;
vec3  in_pos        = vec3(a_pos * POSITION_PRECISION, 1.0);
float fontSize      = getTextSize(a_offset, a_fontSize, a_referenceSize);
float fontScale     = fontSize / SDF_FONT_SIZE;
vec3  offset        = getRotation() * vec3(a_offset, 0.0);
mat3  extrudeMatrix = getBit(a_bitSet, 0) == 1.0 ? u_displayViewMat3 : u_displayMat3;
float isText = 1.0 - a_isBackground;
float isBackground = u_isBackgroundPass * a_isBackground;
vec4  nonHaloColor  = (isBackground * a_color) + (isText * getColor(a_color, a_bitSet, 1));
v_color   = u_isHaloPass * a_haloColor + (1.0 - u_isHaloPass) * nonHaloColor;
v_opacity = getOpacity();
v_id      = norm(a_id);
v_tex     = a_texCoords / u_mosaicSize;
v_pos     = u_dvsMat3 * in_pos + extrudeMatrix * offset;
float isHidden = u_isBackgroundPass * isText + (1.0 - u_isBackgroundPass) * a_isBackground;
v_pos.z += 2.0 * isHidden;
v_edgeDistanceOffset = u_isHaloPass * OUTLINE_SCALE * a_texFontSize.w / fontScale / MAX_SDF_DISTANCE;
v_antialiasingWidth  = 0.105 * SDF_FONT_SIZE / fontSize / u_pixelRatio;
#ifdef HITTEST
highp vec3 out_pos  = vec3(0.);
v_color = vec4(0.);
hittestMarker(v_color, out_pos, u_viewMat3 * u_tileMat3 *  vec3(a_pos * POSITION_PRECISION, 1.0)
+ u_tileMat3 * offset, fontSize / 2.);
gl_PointSize = 1.;
gl_Position = vec4(clip(v_color, out_pos, getFilterFlags(), a_zoomRange), 1.0);
#else
gl_Position =  vec4(clip(v_color, v_pos, getFilterFlags(), a_zoomRange), 1.0);
#endif
}`},"symbologyTypeUtils.glsl":`#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_OUTLINE_FILL_LIKE
#endif
#if SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_SIMPLE || SYMBOLOGY_TYPE == SYMBOLOGY_TYPE_OUTLINE_FILL_SIMPLE
#define SYMBOLOGY_TYPE_IS_SIMPLE_LIKE
#endif`,"vv.glsl":`#if defined(VV_SIZE_MIN_MAX_VALUE) || defined(VV_SIZE_SCALE_STOPS) || defined(VV_SIZE_FIELD_STOPS) || defined(VV_SIZE_UNIT_VALUE)
#define VV_SIZE
#endif
#if defined(VV_COLOR) || defined(VV_SIZE) || defined(VV_OPACITY) || defined(VV_ROTATION)
#define VV
#endif
#ifdef VV_COLOR
uniform highp float colorValues[8];
uniform vec4 colors[8];
#endif
#ifdef VV_SIZE_MIN_MAX_VALUE
uniform highp vec4 minMaxValueAndSize;
#endif
#ifdef VV_SIZE_SCALE_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_FIELD_STOPS
uniform highp float values[8];
uniform float sizes[8];
#endif
#ifdef VV_SIZE_UNIT_VALUE
uniform highp float unitMeterRatio;
#endif
#ifdef VV_OPACITY
uniform highp float opacityValues[8];
uniform float opacities[8];
#endif
#ifdef VV_ROTATION
uniform lowp float rotationType;
#endif
bool isNan(float val) {
return (val == NAN_MAGIC_NUMBER);
}
#ifdef VV_SIZE_MIN_MAX_VALUE
float getVVMinMaxSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
float interpolationRatio = (sizeValue  - minMaxValueAndSize.x) / (minMaxValueAndSize.y - minMaxValueAndSize.x);
interpolationRatio = clamp(interpolationRatio, 0.0, 1.0);
return minMaxValueAndSize.z + interpolationRatio * (minMaxValueAndSize.w - minMaxValueAndSize.z);
}
#endif
#ifdef VV_SIZE_SCALE_STOPS
float getVVScaleStopsSize(float currentScale) {
float outSize;
if (currentScale <= values[0]) {
outSize = sizes[0];
} else {
if (currentScale >= values[7]) {
outSize = sizes[7];
} else {
int index;
index = -1;
for (int i = 0; i < 8; i++) {
if (values[i] > currentScale) {
index = i;
break;
}
}
int prevIndex = index - 1;
float a = currentScale - values[prevIndex];
float b = values[index] - values[prevIndex];
outSize = mix(sizes[prevIndex], sizes[index], a / b);
}
}
return outSize;
}
#endif
#ifdef VV_SIZE_FIELD_STOPS
const int VV_SIZE_N = 8;
float getVVStopsSize(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
if (sizeValue <= values[0]) {
return sizes[0];
}
if (sizeValue >= values[VV_SIZE_N - 1]) {
return sizes[VV_SIZE_N - 1];
}
for (int i = 1; i < VV_SIZE_N; ++i) {
if (values[i] >= sizeValue) {
float f = (sizeValue - values[i-1]) / (values[i] - values[i-1]);
return mix(sizes[i-1], sizes[i], f);
}
}
return sizes[VV_SIZE_N - 1];
}
#endif
#ifdef VV_SIZE_UNIT_VALUE
float getVVUnitValue(float sizeValue, float fallback) {
if (isNan(sizeValue)) {
return fallback;
}
return sizeValue * (metersPerSRUnit / unitMeterRatio);
}
#endif
#ifdef VV_OPACITY
const int VV_OPACITY_N = 8;
float getVVOpacity(float opacityValue) {
if (isNan(opacityValue)) {
return 1.0;
}
if (opacityValue <= opacityValues[0]) {
return opacities[0];
}
for (int i = 1; i < VV_OPACITY_N; ++i) {
if (opacityValues[i] >= opacityValue) {
float f = (opacityValue - opacityValues[i-1]) / (opacityValues[i] - opacityValues[i-1]);
return mix(opacities[i-1], opacities[i], f);
}
}
return opacities[VV_OPACITY_N - 1];
}
#endif
#ifdef VV_ROTATION
mat4 getVVRotation(float rotationValue) {
if (isNan(rotationValue)) {
return mat4(1, 0, 0, 0,
0, 1, 0, 0,
0, 0, 1, 0,
0, 0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat4(cosA, sinA, 0, 0,
-sinA,  cosA, 0, 0,
0,     0, 1, 0,
0,     0, 0, 1);
}
mat3 getVVRotationMat3(float rotationValue) {
if (isNan(rotationValue)) {
return mat3(1, 0, 0,
0, 1, 0,
0, 0, 1);
}
float rotation = rotationValue;
if (rotationType == 1.0) {
rotation = 90.0 - rotation;
}
float angle = C_DEG_TO_RAD * -rotation;
float sinA = sin(angle);
float cosA = cos(angle);
return mat3(cosA, -sinA, 0,
sinA, cosA, 0,
0,    0,    1);
}
#endif
#ifdef VV_COLOR
const int VV_COLOR_N = 8;
vec4 getVVColor(float colorValue, vec4 fallback, float isColorLocked) {
if (isNan(colorValue) || isColorLocked == 1.0) {
return fallback;
}
if (colorValue <= colorValues[0]) {
return colors[0];
}
for (int i = 1; i < VV_COLOR_N; ++i) {
if (colorValues[i] >= colorValue) {
float f = (colorValue - colorValues[i-1]) / (colorValues[i] - colorValues[i-1]);
return mix(colors[i-1], colors[i], f);
}
}
return colors[VV_COLOR_N - 1];
}
#endif
float getVVSize(in float size, in float vvSize, in float currentScale)  {
#ifdef VV_SIZE_MIN_MAX_VALUE
return getVVMinMaxSize(vvSize, size);
#elif defined(VV_SIZE_SCALE_STOPS)
float outSize = getVVScaleStopsSize(currentScale);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_FIELD_STOPS)
float outSize = getVVStopsSize(vvSize, size);
return isNan(outSize) ? size : outSize;
#elif defined(VV_SIZE_UNIT_VALUE)
return getVVUnitValue(vvSize, size);
#else
return size;
#endif
}`,"utils.glsl":`float rshift(in float u32, in int amount) {
return floor(u32 / pow(2.0, float(amount)));
}
float getBit(in float bitset, in int bitIndex) {
float offset = pow(2.0, float(bitIndex));
return mod(floor(bitset / offset), 2.0);
}
const int maxHighlightReasons = 6;
float getFilterBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex + maxHighlightReasons);
}
float getHighlightBit(in float bitset, in int bitIndex) {
return getBit(bitset, bitIndex);
}
highp vec3 unpackDisplayIdTexel(in highp vec3 bitset) {
float isAggregate = getBit(bitset.b, 7);
return (1.0 - isAggregate) * bitset + isAggregate * (vec3(bitset.rgb) - vec3(0.0, 0.0, float(0x80)));
}
vec4 unpack(in float u32) {
float r = mod(rshift(u32, 0), 255.0);
float g = mod(rshift(u32, 8), 255.0);
float b = mod(rshift(u32, 16), 255.0);
float a = mod(rshift(u32, 24), 255.0);
return vec4(r, g, b, a);
}
vec3 norm(in vec3 v) {
return v /= 255.0;
}
vec4 norm(in vec4 v) {
return v /= 255.0;
}
float max4(vec4 target) {
return max(max(max(target.x, target.y), target.z), target.w);
}
vec2 unpack_u8_nf32(vec2 bytes) {
return (bytes - 127.0) / 127.0;
}
highp float rand(in vec2 co) {
highp float a = 12.9898;
highp float b = 78.233;
highp float c = 43758.5453;
highp float dt = dot(co, vec2(a,b));
highp float sn = mod(dt, 3.14);
return fract(sin(sn) * c);
}`,"vcommon.glsl":`#include <materials/constants.glsl>
#include <materials/utils.glsl>
#include <materials/attributeData.glsl>
#include <materials/vv.glsl>
#include <materials/barycentric.glsl>
attribute vec2 a_pos;
attribute highp vec3 a_id;
uniform highp mat3 displayViewScreenMat3;
uniform highp mat3 displayViewMat3;
uniform highp mat3 displayMat3;
uniform highp mat3 tileMat3;
uniform highp mat3 viewMat3;
uniform highp float pixelRatio;
uniform mediump float zoomFactor;
uniform mediump float antialiasing;
uniform mediump float currentScale;
uniform mediump float currentZoom;
uniform mediump float metersPerSRUnit;
uniform mediump float activeReasons;
uniform mediump float highlightAll;
vec4 VV_ADATA = vec4(0.0);
void loadVisualVariableData(inout vec4 target) {
target.rgba = getVisualVariableData(a_id);
}
#ifdef VV
#define INIT loadVisualVariableData(VV_ADATA)
#else
#define INIT
#endif
vec4 getColor(in vec4 a_color, in float a_bitSet, int index) {
#ifdef VV_COLOR
float isColorLocked   = getBit(a_bitSet, index);
return getVVColor(VV_ADATA[ATTR_VV_COLOR], a_color, isColorLocked);
#else
return a_color;
#endif
}
float getOpacity() {
#ifdef VV_OPACITY
return getVVOpacity(VV_ADATA[ATTR_VV_OPACITY]);
#else
return 1.0;
#endif
}
float getSize(in float in_size, in float currentScale) {
#ifdef VV_SIZE
return getVVSize(in_size, VV_ADATA[ATTR_VV_SIZE], currentScale);
#else
return in_size;
#endif
}
mat3 getRotation() {
#ifdef VV_ROTATION
return getVVRotationMat3(mod(VV_ADATA[ATTR_VV_ROTATION], 360.0));
#else
return mat3(1.0);
#endif
}
float getFilterFlags() {
#ifdef IGNORES_SAMPLER_PRECISION
return ceil(getFilterData(a_id).x * 255.0);
#else
return getFilterData(a_id).x * 255.0;
#endif
}
vec4 getAnimationState() {
return getAnimation(a_id);
}
float getMinZoom() {
vec4 data0 = getFilterData(a_id) * 255.0;
return data0.g;
}
mat3 getMatrixNoDisplay(float isMapAligned) {
return isMapAligned * viewMat3 * tileMat3 + (1.0 - isMapAligned) * tileMat3;
}
mat3 getMatrix(float isMapAligned) {
return isMapAligned * displayViewMat3 + (1.0 - isMapAligned) * displayMat3;
}
float checkHighlightBit(float filterFlags, int index) {
return getHighlightBit(filterFlags, index) * getBit(activeReasons, index);
}
float checkHighlight(float filterFlags) {
float result = checkHighlightBit(filterFlags, 0);
for (int i = 1; i < maxHighlightReasons; i++) {
result = result + checkHighlightBit(filterFlags, i);
}
return step(0.1, result + highlightAll);
}
vec3 clip(inout vec4 color, inout vec3 pos, in float filterFlags, in vec2 minMaxZoom) {
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 0));
#ifdef inside
pos.z += 2.0 * (1.0 - getFilterBit(filterFlags, 1));
#elif defined(outside)
pos.z += 2.0 * getFilterBit(filterFlags, 1);
#elif defined(highlight)
pos.z += 2.0 * (1.0 - checkHighlight(filterFlags));
#endif
pos.z += 2.0 * (step(minMaxZoom.y, currentZoom) + (1.0 - step(minMaxZoom.x, currentZoom)));
return pos;
}`},"post-processing":{dra:{"dra.frag":`precision mediump float;
uniform sampler2D u_minColor;
uniform sampler2D u_maxColor;
uniform sampler2D u_texture;
varying vec2 v_uv;
void main() {
vec4 minColor = texture2D(u_minColor, vec2(0.5));
vec4 maxColor = texture2D(u_maxColor, vec2(0.5));
vec4 color = texture2D(u_texture, v_uv);
vec3 minColorUnpremultiply = minColor.rgb / minColor.a;
vec3 maxColorUnpremultiply = maxColor.rgb / maxColor.a;
vec3 colorUnpremultiply = color.rgb / color.a;
vec3 range = maxColorUnpremultiply - minColorUnpremultiply;
gl_FragColor = vec4(color.a * (colorUnpremultiply - minColorUnpremultiply) / range, color.a);
}`,"min-max":{"min-max.frag":`#extension GL_EXT_draw_buffers : require
precision mediump float;
#define CELL_SIZE 2
uniform sampler2D u_minTexture;
uniform sampler2D u_maxTexture;
uniform vec2 u_srcResolution;
uniform vec2 u_dstResolution;
varying vec2 v_uv;
void main() {
vec2 srcPixel = floor(gl_FragCoord.xy) * float(CELL_SIZE);
vec2 onePixel = vec2(1.0) / u_srcResolution;
vec2 uv = (srcPixel + 0.5) / u_srcResolution;
vec4 minColor = vec4(1.0);
vec4 maxColor = vec4(0.0);
for (int y = 0; y < CELL_SIZE; ++y) {
for (int x = 0; x < CELL_SIZE; ++x) {
vec2 offset = uv + vec2(x, y) * onePixel;
minColor = min(minColor, texture2D(u_minTexture, offset));
maxColor = max(maxColor, texture2D(u_maxTexture, offset));
}
}
gl_FragData[0] = minColor;
gl_FragData[1] = maxColor;
}`}},"edge-detect":{"frei-chen":{"frei-chen.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform vec2 u_texSize;
varying vec2 v_uv;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[9];
const mat3 g0 = mat3( 0.3535533845424652, 0, -0.3535533845424652, 0.5, 0, -0.5, 0.3535533845424652, 0, -0.3535533845424652 );
const mat3 g1 = mat3( 0.3535533845424652, 0.5, 0.3535533845424652, 0, 0, 0, -0.3535533845424652, -0.5, -0.3535533845424652 );
const mat3 g2 = mat3( 0, 0.3535533845424652, -0.5, -0.3535533845424652, 0, 0.3535533845424652, 0.5, -0.3535533845424652, 0 );
const mat3 g3 = mat3( 0.5, -0.3535533845424652, 0, -0.3535533845424652, 0, 0.3535533845424652, 0, 0.3535533845424652, -0.5 );
const mat3 g4 = mat3( 0, -0.5, 0, 0.5, 0, 0.5, 0, -0.5, 0 );
const mat3 g5 = mat3( -0.5, 0, 0.5, 0, 0, 0, 0.5, 0, -0.5 );
const mat3 g6 = mat3( 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.6666666865348816, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204 );
const mat3 g7 = mat3( -0.3333333432674408, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, 0.6666666865348816, 0.1666666716337204, -0.3333333432674408, 0.1666666716337204, -0.3333333432674408 );
const mat3 g8 = mat3( 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408, 0.3333333432674408 );
void main() {
G[0] = g0,
G[1] = g1,
G[2] = g2,
G[3] = g3,
G[4] = g4,
G[5] = g5,
G[6] = g6,
G[7] = g7,
G[8] = g8;
mat3 I;
float cnv[9];
vec3 sample;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D(u_colorTexture, v_uv + texel * vec2(i - 1.0,j - 1.0)).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 9; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
float M = (cnv[0] + cnv[1]) + (cnv[2] + cnv[3]);
float S = (cnv[4] + cnv[5]) + (cnv[6] + cnv[7]) + (cnv[8] + M);
gl_FragColor = vec4(vec3(sqrt(M / S)), texture2D(u_colorTexture, v_uv).a);
}`},sobel:{"sobel.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 2.0, 1.0, 0.0, 0.0, 0.0, -1.0, -2.0, -1.0 );
const mat3 g1 = mat3( 1.0, 0.0, -1.0, 2.0, 0.0, -2.0, 1.0, 0.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
gl_FragColor = vec4(vec3(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1])), texture2D(u_colorTexture, v_uv).a);
}`}},"edge-enhance":{"edge-enhance.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
varying vec2 v_uv;
uniform vec2 u_texSize;
vec2 texel = vec2(1.0 / u_texSize.x, 1.0 / u_texSize.y);
mat3 G[2];
const mat3 g0 = mat3( 1.0, 0.0, -1.0, 1.0, 0.0, -1.0, 1.0, 0.0, -1.0 );
const mat3 g1 = mat3( 1.0, 1.0, 1.0, 0.0, 0.0, 0.0, -1.0, -1.0, -1.0 );
void main() {
mat3 I;
float cnv[2];
vec3 sample;
G[0] = g0;
G[1] = g1;
for (float i = 0.0; i < 3.0; i++) {
for (float j = 0.0; j < 3.0; j++) {
sample = texture2D( u_colorTexture, v_uv + texel * vec2(i-1.0,j-1.0) ).rgb;
I[int(i)][int(j)] = length(sample);
}
}
for (int i = 0; i < 2; i++) {
float dp3 = dot(G[i][0], I[0]) + dot(G[i][1], I[1]) + dot(G[i][2], I[2]);
cnv[i] = dp3 * dp3;
}
vec4 color = texture2D(u_colorTexture, v_uv);
gl_FragColor = vec4(0.5 * sqrt(cnv[0] * cnv[0] + cnv[1] * cnv[1]) * color);
}`},filterEffect:{"filterEffect.frag":`precision mediump float;
uniform sampler2D u_colorTexture;
uniform mat4 u_coefficients;
varying vec2 v_uv;
void main() {
vec4 color = texture2D(u_colorTexture, v_uv);
vec4 rgbw = u_coefficients * vec4(color.a > 0.0 ? color.rgb / color.a : vec3(0.0), 1.0);
float a = color.a;
gl_FragColor = vec4(a * rgbw.rgb, a);
}`},pp:{"pp.vert":`precision mediump float;
attribute vec2 a_position;
varying vec2 v_uv;
void main() {
gl_Position = vec4(a_position, 0.0, 1.0);
v_uv = (a_position + 1.0) / 2.0;
}`}},raster:{common:{"projection.glsl":`uniform sampler2D u_transformGrid;
uniform vec2 u_transformSpacing;
uniform vec2 u_transformGridSize;
uniform vec2 u_targetImageSize;
vec2 projectPixelLocation(vec2 coords) {
#ifdef LOOKUP_PROJECTION
vec4 pv = texture2D(u_transformGrid, coords);
return vec2(pv.r, pv.g);
#endif
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;
}`,"common.glsl":`uniform sampler2D u_image;
uniform int u_bandCount;
uniform bool u_flipY;
uniform float u_opacity;
uniform int u_resampling;
uniform vec2 u_srcImageSize;
#ifdef APPLY_PROJECTION
#include <raster/common/projection.glsl>
#endif
#ifdef BICUBIC
#include <filtering/bicubic.glsl>
#endif
#ifdef BILINEAR
#include <filtering/bilinear.glsl>
#endif
vec2 getPixelLocation(vec2 coords) {
vec2 targetLocation = u_flipY ? vec2(coords.s, 1.0 - coords.t) : coords;
#ifdef APPLY_PROJECTION
targetLocation = projectPixelLocation(targetLocation);
#endif
return targetLocation;
}
bool isOutside(vec2 coords){
if (coords.t>1.00001 ||coords.t<-0.00001 || coords.s>1.00001 ||coords.s<-0.00001) {
return true;
} else {
return false;
}
}
vec4 getPixel(vec2 pixelLocation) {
#ifdef BICUBIC
vec4 color = sampleBicubicBSpline(u_image, pixelLocation, u_srcImageSize);
#elif defined(BILINEAR)
vec4 color = sampleBilinear(u_image, pixelLocation, u_srcImageSize);
#else
vec4 color = texture2D(u_image, pixelLocation);
#endif
return color;
}`},flow:{"getDisplayOpacity.glsl":`uniform float u_displayOpacity;
float getDisplayOpacity() {
return u_displayOpacity;
}`,"getFadeOpacity.glsl":`uniform float u_decayRate;
uniform float u_fadeToZero;
float getFadeOpacity(float x) {
float cutOff = mix(0.0, exp(-u_decayRate), u_fadeToZero);
return (exp(-u_decayRate * x) - cutOff) / (1.0 - cutOff);
}`,"getFragmentColor.glsl":`vec4 getFragmentColor(vec4 color, float dist, float size, float featheringSize) {
float featheringStart = clamp(0.5 - featheringSize / size, 0.0, 0.5);
if (dist > featheringStart) {
color *= 1.0 - (dist - featheringStart) / (0.5 - featheringStart);
}
return color;
}`,"getRangeOpacity.glsl":`uniform float u_startTime;
uniform float u_endTime;
float getRangeOpacity(float vertexTime, float cycle, float totalTime, float flowSpeed) {
float vTime = (vertexTime + cycle * totalTime) / flowSpeed;
if (vTime < u_startTime) {
return 0.0;
}
if (vTime > u_endTime) {
return 0.0;
}
return 1.0;
}`,"getTimeSeed.glsl":`float getTimeSeed(float firstTime, float lastTime) {
return mod(firstTime * 3.634f + lastTime * 5.153f + 7.381f, 1.0f);
}`,imagery:{"imagery.frag":`precision highp float;
varying vec2 v_texcoord;
uniform sampler2D u_texture;
uniform float u_Min;
uniform float u_Max;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
float getIntensity(float v) {
return u_Min + v * (u_Max - u_Min);
}
void main(void) {
vec4 sampled = texture2D(u_texture, v_texcoord);
float intensity = getIntensity(sampled.r);
gl_FragColor = getColor(intensity);
gl_FragColor.a *= getOpacity(sampled.r);
gl_FragColor.a *= sampled.a;
gl_FragColor.rgb *= gl_FragColor.a;
}`,"imagery.vert":`attribute vec2 a_position;
attribute vec2 a_texcoord;
uniform mat3 u_dvsMat3;
varying vec2 v_texcoord;
void main(void) {
vec2 xy = (u_dvsMat3 * vec3(a_position, 1.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_texcoord = a_texcoord;
}`},particles:{"particles.frag":`precision highp float;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/getFragmentColor.glsl>
void main(void) {
gl_FragColor = getFragmentColor(v_color, length(v_texcoord - 0.5), v_size, u_featheringSize);
}`,"particles.vert":`attribute vec4 a_xyts0;
attribute vec4 a_xyts1;
attribute vec4 a_typeIdFirstTimeLastTime;
attribute vec4 a_extrudeInfo;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
varying vec4 v_color;
varying vec2 v_texcoord;
varying float v_size;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/vv.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float firstTime = a_typeIdFirstTimeLastTime.z;
float lastTime = a_typeIdFirstTimeLastTime.w;
float duration = lastTime - firstTime;
vec2 position0 = a_xyts0.xy;
float t0 = a_xyts0.z - firstTime;
float speed0 = a_xyts0.w;
vec2 position1 = a_xyts1.xy;
float t1 = a_xyts1.z - firstTime;
float speed1 = a_xyts1.w;
float type = a_typeIdFirstTimeLastTime.x;
float id = a_typeIdFirstTimeLastTime.y;
float seed = getTimeSeed(firstTime, lastTime);
vec2 e0 = a_extrudeInfo.xy;
vec2 e1 = a_extrudeInfo.zw;
float animationPeriod = duration + u_trailLength;
float scaledTime = u_time * u_flowSpeed;
float t = mod(scaledTime, animationPeriod);
float fUnclamped = (t - t0) / (t1 - t0);
float f = clamp(fUnclamped, 0.0, 1.0);
float clampedTime = mix(t0, t1, f);
float speed = mix(speed0, speed1, f);
vec2 extrude;
vec2 position;
float fadeOpacity;
float introOpacity;
if (type == 2.0) {
if (fUnclamped < 0.0 || (fUnclamped > 1.0 && t1 != duration)) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
vec2 ortho = mix(e0, e1, f);
vec2 parallel;
parallel = normalize(position1 - position0) * 0.5;
if (id == 1.0) {
extrude = ortho;
v_texcoord = vec2(0.5, 0.0);
} else if (id == 2.0) {
extrude = -ortho;
v_texcoord = vec2(0.5, 1.0);
} else if (id == 3.0) {
extrude = ortho + parallel;
v_texcoord = vec2(1.0, 0.0);
} else if (id == 4.0) {
extrude = -ortho + parallel;
v_texcoord = vec2(1.0, 1.0);
}
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else {
if (fUnclamped < 0.0) {
gl_Position = vec4(0.0, 0.0, -2.0, 1.0);
return;
}
if (id == 1.0) {
extrude = e0;
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 2.0) {
extrude = -e0;
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - t0) / u_trailLength);
introOpacity = 1.0 - exp(-t0);
v_size = getSize(speed0);
v_color = getColor(speed0);
v_color.a *= getOpacity(speed0);
position = position0;
} else if (id == 3.0) {
extrude = mix(e0, e1, f);
v_texcoord = vec2(0.5, 0.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
} else if (id == 4.0) {
extrude = -mix(e0, e1, f);
v_texcoord = vec2(0.5, 1.0);
fadeOpacity = getFadeOpacity((t - clampedTime) / u_trailLength);
introOpacity = 1.0 - exp(-clampedTime);
v_size = getSize(speed);
v_color = getColor(speed);
v_color.a *= getOpacity(speed);
position = mix(position0, position1, f);
}
}
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(extrude * v_size, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_color.a *= fadeOpacity;
v_color.a *= mix(1.0, introOpacity, u_introFade);
v_color.a *= getDisplayOpacity();
v_color.rgb *= v_color.a;
}`},streamlines:{"streamlines.frag":`precision highp float;
varying float v_side;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_size;
uniform float u_time;
uniform float u_trailLength;
uniform float u_flowSpeed;
uniform float u_featheringSize;
uniform float u_introFade;
#include <raster/flow/getFragmentColor.glsl>
#include <raster/flow/getFadeOpacity.glsl>
#include <raster/flow/getRangeOpacity.glsl>
#include <raster/flow/getDisplayOpacity.glsl>
#include <raster/flow/getTimeSeed.glsl>
void main(void) {
float totalTime = v_lastTime - v_firstTime;
float trailLength = u_trailLength;
float period = totalTime + trailLength;
float seed = getTimeSeed(v_firstTime, v_lastTime);
float t = mod(seed * period + u_time * u_flowSpeed, period) + v_firstTime - v_time;
float fading = t / trailLength;
vec4 color = v_color;
color *= getDisplayOpacity();
color *= fading < 0.0 ? 0.0 : getFadeOpacity(fading);
gl_FragColor = getFragmentColor(color, length((v_side + 1.0) / 2.0 - 0.5), v_size, u_featheringSize);
}`,"streamlines.vert":`attribute vec3 a_positionAndSide;
attribute vec3 a_timeInfo;
attribute vec2 a_extrude;
attribute float a_speed;
uniform mat3 u_dvsMat3;
uniform mat3 u_displayViewMat3;
varying float v_time;
varying float v_firstTime;
varying float v_lastTime;
varying vec4 v_color;
varying float v_side;
varying float v_size;
uniform float u_featheringSize;
#include <raster/flow/vv.glsl>
void main(void) {
vec4 lineColor = getColor(a_speed);
float lineOpacity = getOpacity(a_speed);
float lineSize = getSize(a_speed);
vec2 position = a_positionAndSide.xy;
v_side = a_positionAndSide.z;
vec2 xy = (u_dvsMat3 * vec3(position, 1.0) + u_displayViewMat3 * vec3(a_extrude * lineSize, 0.0)).xy;
gl_Position = vec4(xy, 0.0, 1.0);
v_time = a_timeInfo.x;
v_firstTime = a_timeInfo.y;
v_lastTime = a_timeInfo.z;
v_color = lineColor;
v_color.a *= lineOpacity;
v_color.rgb *= v_color.a;
v_size = lineSize;
}`},"vv.glsl":`#define MAX_STOPS 8
#ifdef VV_COLOR
uniform float u_color_stops[MAX_STOPS];
uniform vec4 u_color_values[MAX_STOPS];
uniform int u_color_count;
#else
uniform vec4 u_color;
#endif
#ifdef VV_OPACITY
uniform float u_opacity_stops[MAX_STOPS];
uniform float u_opacity_values[MAX_STOPS];
uniform int u_opacity_count;
#else
uniform float u_opacity;
#endif
#ifdef VV_SIZE
uniform float u_size_stops[MAX_STOPS];
uniform float u_size_values[MAX_STOPS];
uniform int u_size_count;
#else
uniform float u_size;
#endif
uniform float u_featheringOffset;
vec4 getColor(float x) {
#ifdef VV_COLOR
vec4 color = u_color_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_color_count) {
break;
}
float x1 = u_color_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_color_stops[i];
vec4 y2 = u_color_values[i];
if (x < x2) {
vec4 y1 = u_color_values[i - 1];
color = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
color = y2;
}
}
}
#else
vec4 color = u_color;
#endif
return color;
}
float getOpacity(float x) {
#ifdef VV_OPACITY
float opacity = u_opacity_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_opacity_count) {
break;
}
float x1 = u_opacity_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_opacity_stops[i];
float y2 = u_opacity_values[i];
if (x < x2) {
float y1 = u_opacity_values[i - 1];
opacity = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
opacity = y2;
}
}
}
#else
float opacity = u_opacity;
#endif
return opacity;
}
float getSize(float x) {
#ifdef VV_SIZE
float size = u_size_values[0];
{
for (int i = 1; i < MAX_STOPS; i++) {
if (i >= u_size_count) {
break;
}
float x1 = u_size_stops[i - 1];
if (x < x1) {
break;
}
float x2 = u_size_stops[i];
float y2 = u_size_values[i];
if (x < x2) {
float y1 = u_size_values[i - 1];
size = y1 + (y2 - y1) * (x - x1) / (x2 - x1);
} else {
size = y2;
}
}
}
#else
float size = u_size;
#endif
return size + 2.0 * u_featheringSize * u_featheringOffset;
}`},reproject:{"reproject.frag":`precision mediump float;
varying vec2 v_texcoord;
#include <raster/common/common.glsl>
void main() {
vec2 pixelLocation = getPixelLocation(v_texcoord);
if (isOutside(pixelLocation)) {
gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
return;
}
vec4 currentPixel = getPixel(pixelLocation);
gl_FragColor = vec4(currentPixel.rgb, 1.0) * currentPixel.a * u_opacity;
}`,"reproject.vert":`precision mediump float;
attribute vec2 a_position;
varying highp vec2 v_texcoord;
void main()
{
v_texcoord = a_position;
gl_Position = vec4(2.0 * (a_position - 0.5), 0.0, 1.0);
}`}},stencil:{"stencil.frag":`void main() {
gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
}`,"stencil.vert":`attribute vec2 a_pos;
uniform mat3 u_worldExtent;
void main() {
gl_Position = vec4(u_worldExtent * vec3(a_pos, 1.0), 1.0);
}`},test:{"TestShader.frag":`precision highp float;
#include <test/TestShader.common.glsl>
void main() {
if (v_offset.x > -.5 && v_offset.y > -.5 && v_offset.x < .5 && v_offset.y < .5) {
discard;
}
#ifdef RETURN_RED
gl_FragColor = vec4(1., 0., 0., 1.);
#else
gl_FragColor = v_color;
#endif
}`,"TestShader.common.glsl":`#ifndef RETURN_RED
varying    vec4      v_color;
#endif
varying    vec2      v_offset;`,"TestShader.vert":`const float POS_PRECISION_FACTOR = 10.;
const float OFFSET_PRECISION_FACTOR = 10.;
const float SIZE_PRECISION_FACTOR = 10.;
attribute  vec2      a_pos_packed;
attribute  vec2      a_offset_packed;
attribute  float     a_size_packed;
#ifdef DATA_DRIVEN_COLOR
const float u_dataDrivenColor_validValues[4] = float[4](0., 0., 1., 0.);
uniform    vec4      u_dataDrivenColor_colorFallback;
uniform    vec4      u_dataDrivenColor_color;
#endif
uniform    float     u_view_zoomLevel;
#include <test/TestShader.common.glsl>
#ifdef DATA_DRIVEN_COLOR
vec4 getColor(float value) {
int index = -1;
for (int i = 0; i < 4; i++) {
if (u_dataDrivenColor_validValues[i] == value) {
index = i;
break;
}
}
if (index == -1) {
return u_dataDrivenColor_colorFallback;
}
return u_dataDrivenColor_color;
}
#endif
void main() {
vec2  a_pos = a_pos_packed / POS_PRECISION_FACTOR;
vec2  a_offset = a_offset_packed / OFFSET_PRECISION_FACTOR;
float a_size = a_size_packed / SIZE_PRECISION_FACTOR;
vec4 color = vec4(1., 0., 0., 1.);
#ifdef DATA_DRIVEN_COLOR
color = getColor(1.);
#endif
vec2 offsetScaled = a_offset * a_size;
vec4 pos = vec4(a_pos.xy + offsetScaled, 0., 1.);
gl_Position = pos;
#ifndef RETURN_RED
v_color = color;
#endif
v_offset = a_offset;
}`},util:{"atan2.glsl":`float atan2(in float y, in float x) {
float t0, t1, t2, t3, t4;
t3 = abs(x);
t1 = abs(y);
t0 = max(t3, t1);
t1 = min(t3, t1);
t3 = 1.0 / t0;
t3 = t1 * t3;
t4 = t3 * t3;
t0 =         - 0.013480470;
t0 = t0 * t4 + 0.057477314;
t0 = t0 * t4 - 0.121239071;
t0 = t0 * t4 + 0.195635925;
t0 = t0 * t4 - 0.332994597;
t0 = t0 * t4 + 0.999995630;
t3 = t0 * t3;
t3 = (abs(y) > abs(x)) ? 1.570796327 - t3 : t3;
t3 = x < 0.0 ?  3.141592654 - t3 : t3;
t3 = y < 0.0 ? -t3 : t3;
return t3;
}`,"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`}};function _a(e){return function(t){let n=e;return t.split(`/`).forEach(e=>{n&&=n[e]}),n}}var va=new bt(_a(ga));function ya(e){return va.resolveIncludes(e)}var ba={hittestDist:U,hittestPos:B},xa={size:U},Sa={filterFlags:d,animation:d,visualVariableData:d,dataDriven0:d,dataDriven1:d,dataDriven2:d,gpgpu:d},Ca={displayViewScreenMat3:i,displayViewMat3:i,displayMat3:i,viewMat3:i,tileMat3:i,displayZoomFactor:U,requiredZoomFactor:U,tileOffset:B,currentScale:U,currentZoom:U,metersPerSRUnit:U},wa=class extends pa{constructor(){super(...arguments),this.vertexShader=ya(`materials/pie/pie.vert`),this.fragmentShader=ya(`materials/pie/pie.frag`),this.required={...Ca,...xa,outlineWidth:U,colors:T,defaultColor:H,othersColor:H,outlineColor:H,donutRatio:U,sectorThreshold:U},this.textures=Sa,this.options={hittestUniforms:ba,visualVariableSizeMinMaxValue:{minMaxValueAndSize:H},visualVariableSizeScaleStops:{sizes:{type:`array`,elementType:U,size:8},values:{type:`array`,elementType:U,size:8}},visualVariableSizeStops:{sizes:{type:`array`,elementType:U,size:8},values:{type:`array`,elementType:U,size:8}},visualVariableSizeUnitValue:{unitValueToPixelsRatio:U},visualVariableOpacity:{opacities:{type:`array`,elementType:U,size:8},opacityValues:{type:`array`,elementType:U,size:8}},highlightUniforms:{highlightAll:U,activeReasons:U}},this.locations={pos:{index:0,type:B},id:{index:1,type:A},bitset:{index:2,type:U},offset:{index:3,type:B},texCoords:{index:4,type:B},referenceSize:{index:5,type:U},zoomRange:{index:6,type:B}},this.defines={VV_SIZE_MIN_MAX_VALUE:`boolean`,VV_SIZE_SCALE_STOPS:`boolean`,VV_SIZE_FIELD_STOPS:`boolean`,VV_SIZE_UNIT_VALUE:`boolean`,VV_OPACITY:`boolean`,HITTEST:`boolean`,numberOfFields:`number`,highlight:`boolean`,inside:`boolean`,outside:`boolean`}}setNumberOfFields(e){this.required.colors={type:`array`,elementType:H,size:e}}},Ta=class extends ${constructor(){super(...arguments),this.type=30,this.shaders={geometry:new wa},this.symbologyPlane=2}render(e,t){let{painter:n}=e,{instance:r,target:i}=t,a=this.shaders.geometry,o=r.getInput(),s=o.uniforms.numberOfFields,c=X(e),l=K(e,i),u=J(e);a.setNumberOfFields(s),n.setShader({shader:a,uniforms:{...$e(e,t.target,o.uniforms.shader),...l.storage,...l.view,...l.highlight,highlightUniforms:l.highlight,hittestUniforms:l.hittestRequest?{hittestDist:l.hittestRequest?.distance,hittestPos:l.hittestRequest?.position}:null},textures:tt(e),defines:{VV_SIZE_MIN_MAX_VALUE:!!o.uniforms.shader.visualVariableSizeMinMaxValue,VV_SIZE_SCALE_STOPS:!!o.uniforms.shader.visualVariableSizeScaleStops,VV_SIZE_FIELD_STOPS:!!o.uniforms.shader.visualVariableSizeStops,VV_SIZE_UNIT_VALUE:!!o.uniforms.shader.visualVariableSizeUnitValue,VV_OPACITY:!!o.uniforms.shader.visualVariableOpacity,HITTEST:c,highlight:+!!l.highlight,...u,numberOfFields:s},optionalAttributes:{},useComputeBuffer:c}),n.setPipelineState(Y(e)),n.submitDraw(e,t)}},Ea=class extends ${constructor(){super(...arguments),this.type=32,this.shaders={geometry:new Yi},this.symbologyPlane=3}render(e,t){let{painter:n}=e,r=J(e),i=t.instance.getInput(),a={shader:this.shaders.geometry,uniforms:{...$e(e,t.target,i.uniforms),...K(e,t.target),mosaicInfo:n.textureManager.getMosaicInfo(e,t.textureKey)},textures:{...q(e),mosaicTexture:n.textureManager.getMosaicTexture(e,t.textureKey)},defines:{...r,isBackgroundPass:!0,isLabel:!1,textRenderPassType:0},optionalAttributes:i.optionalAttributes,useComputeBuffer:X(e)};n.setShader(a),n.setPipelineState(Y(e)),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:2}}),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:1}}),n.submitDraw(e,t),n.setShader({...a,defines:{...r,isBackgroundPass:!1,isLabel:!1,textRenderPassType:0}}),n.submitDraw(e,t)}},Da={fill:new Er,patternFill:new Mr,complexFill:new or,gradientFill:new Ar,outlineFill:new jr,patternOutlineFill:new Nr,complexOutlineFill:new Tr,marker:new fa,pieChart:new Ta,line:new na,texturedLine:new aa,gradientStroke:new ta,text:new Ea,label:new Xi,heatmap:new Ri,dotDensity:new ar,flow:new wi,animatedMarker:new Hn,animatedMarkerShift:new Un,animatedFill:new Wn,animatedLine:new Gn};function Oa(){for(let e in Da)Da[e].startup()}function ka(e){for(let t in Da)Da[t].shutdown(e)}export{Ir as C,Lr as S,xt as T,Ur as _,Ci as a,Kr as b,ei as c,$r as d,Jr as f,ri as g,Yr as h,ya as i,Xr as l,Qr as m,Oa as n,bi as o,ni as p,Da as r,_i as s,ka as t,ti as u,Gr as v,zr as w,Rr as x,Hr as y};