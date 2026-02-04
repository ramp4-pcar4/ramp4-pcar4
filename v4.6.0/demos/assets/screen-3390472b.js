import { jb as getDefaultExportFromCjs, ja as commonjsGlobal, co as defineComponent, fH as ref, iu as reactive, iv as watch, fK as onBeforeUnmount, cu as openBlock, cC as createElementBlock, fG as createBaseVNode, cx as createTextVNode, cy as toDisplayString, cA as createVNode, cz as unref, i8 as _export_sfc, cp as useI18n, ip as withKeys, io as withModifiers, O as s$1, hv as markRaw, cv as createBlock, kP as resolveDynamicComponent, cq as inject, fJ as onMounted, fN as GlobalEvents, cs as resolveComponent, cw as withCtx, lN as LayerControl, i6 as pushScopeId, i7 as popScopeId } from './main-8822140d.js';
import { r as require$$0 } from './vue.esm-bundler-8c049489.js';
import { T as ToggleSwitchControl } from './toggle-switch-control-8c3c652f.js';
import './preload-helper-a4975f27.js';

var vueSliderComponent_umd_min = {exports: {}};

(function (module, exports) {
	(function(t,e){module.exports=e(require$$0);})("undefined"!==typeof self?self:commonjsGlobal,(function(t){return function(){var e={388:function(t,e){var r,n,i;(function(o,a){n=[],r=a,i="function"===typeof r?r.apply(e,n):r,void 0===i||(t.exports=i);})("undefined"!==typeof self&&self,(function(){function t(){var e=Object.getOwnPropertyDescriptor(document,"currentScript");if(!e&&"currentScript"in document&&document.currentScript)return document.currentScript;if(e&&e.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(f){var r,n,i,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi,a=/@([^@]*):(\d+):(\d+)\s*$/gi,s=o.exec(f.stack)||a.exec(f.stack),l=s&&s[1]||!1,u=s&&s[2]||!1,c=document.location.href.replace(document.location.hash,""),d=document.getElementsByTagName("script");l===c&&(r=document.documentElement.outerHTML,n=new RegExp("(?:[^\\n]+?\\n){0,"+(u-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=r.replace(n,"$1").trim());for(var h=0;h<d.length;h++){if("interactive"===d[h].readyState)return d[h];if(d[h].src===l)return d[h];if(l===c&&d[h].innerHTML&&d[h].innerHTML.trim()===i)return d[h]}return null}}return t}));},905:function(t,e,r){r.r(e);var n=r(117),i=r.n(n),o=r(488),a=r.n(o),s=a()(i());s.push([t.id,".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip,.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}",""]),e["default"]=s;},121:function(t,e,r){r.r(e);var n=r(117),i=r.n(n),o=r(488),a=r.n(o),s=a()(i());s.push([t.id,".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}",""]),e["default"]=s;},207:function(t,e,r){r.r(e);var n=r(117),i=r.n(n),o=r(488),a=r.n(o),s=a()(i());s.push([t.id,".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}",""]),e["default"]=s;},488:function(t){t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var r="",n="undefined"!==typeof e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),n&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=t(e),n&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(t,r,n,i,o){"string"===typeof t&&(t=[[null,t,void 0]]);var a={};if(n)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0);}for(var u=0;u<t.length;u++){var c=[].concat(t[u]);n&&a[c[0]]||("undefined"!==typeof o&&("undefined"===typeof c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=o),r&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=r):c[2]=r),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c));}},e};},117:function(t){t.exports=function(t){return t[1]};},831:function(t,e){e.Z=(t,e)=>{const r=t.__vccOpts||t;for(const[n,i]of e)r[n]=i;return r};},466:function(t,e,r){var n=r(905);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=r(959).Z;i("50bc1720",n,!0,{sourceMap:!1,shadowMode:!1});},18:function(t,e,r){var n=r(121);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=r(959).Z;i("10aa5f36",n,!0,{sourceMap:!1,shadowMode:!1});},631:function(t,e,r){var n=r(207);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var i=r(959).Z;i("1772934e",n,!0,{sourceMap:!1,shadowMode:!1});},959:function(t,e,r){function n(t,e){for(var r=[],n={},i=0;i<e.length;i++){var o=e[i],a=o[0],s=o[1],l=o[2],u=o[3],c={id:t+":"+i,css:s,media:l,sourceMap:u};n[a]?n[a].parts.push(c):r.push(n[a]={id:a,parts:[c]});}return r}r.d(e,{Z:function(){return p}});var i="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!i)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o={},a=i&&(document.head||document.getElementsByTagName("head")[0]),s=null,l=0,u=!1,c=function(){},d=null,h="data-vue-ssr-id",f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,r,i){u=r,d=i||{};var a=n(t,e);return m(a),function(e){for(var r=[],i=0;i<a.length;i++){var s=a[i],l=o[s.id];l.refs--,r.push(l);}e?(a=n(t,e),m(a)):a=[];for(i=0;i<r.length;i++){l=r[i];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id];}}}}function m(t){for(var e=0;e<t.length;e++){var r=t[e],n=o[r.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](r.parts[i]);for(;i<r.parts.length;i++)n.parts.push(y(r.parts[i]));n.parts.length>r.parts.length&&(n.parts.length=r.parts.length);}else {var a=[];for(i=0;i<r.parts.length;i++)a.push(y(r.parts[i]));o[r.id]={id:r.id,refs:1,parts:a};}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,r,n=document.querySelector("style["+h+'~="'+t.id+'"]');if(n){if(u)return c;n.parentNode.removeChild(n);}if(f){var i=l++;n=s||(s=v()),e=g.bind(null,n,i,!1),r=g.bind(null,n,i,!0);}else n=v(),e=k.bind(null,n),r=function(){n.parentNode.removeChild(n);};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n);}else r();}}var b=function(){var t=[];return function(e,r){return t[e]=r,t.filter(Boolean).join("\n")}}();function g(t,e,r,n){var i=r?"":n.css;if(t.styleSheet)t.styleSheet.cssText=b(e,i);else {var o=document.createTextNode(i),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(o,a[e]):t.appendChild(o);}}function k(t,e){var r=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),d.ssrId&&t.setAttribute(h,e.id),i&&(r+="\n/*# sourceURL="+i.sources[0]+" */",r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=r;else {while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r));}}},927:function(e){e.exports=t;}},r={};function n(t){var i=r[t];if(void 0!==i)return i.exports;var o=r[t]={id:t,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.exports}!function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e};}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]});};}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)};}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0});};}(),function(){n.p="";}();var i={};return function(){if(n.d(i,{default:function(){return St}}),"undefined"!==typeof window){var t=window.document.currentScript,e=n(388);t=e(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:e});var r=t&&t.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);r&&(n.p=r[1]);}var o=n(927);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var s={key:0,class:"vue-slider-marks"};function l(t,e,r,n,i,l){var u=(0, o.resolveComponent)("vue-slider-mark"),c=(0, o.resolveComponent)("vue-slider-dot");return (0, o.openBlock)(),(0, o.createElementBlock)("div",(0, o.mergeProps)({ref:"container",class:t.containerClasses,style:t.containerStyles,onClick:e[2]||(e[2]=function(){return t.clickHandle&&t.clickHandle.apply(t,arguments)}),onTouchstartPassive:e[3]||(e[3]=function(){return t.dragStartOnProcess&&t.dragStartOnProcess.apply(t,arguments)}),onMousedownPassive:e[4]||(e[4]=function(){return t.dragStartOnProcess&&t.dragStartOnProcess.apply(t,arguments)})},t.$attrs),[(0, o.createElementVNode)("div",{class:"vue-slider-rail",style:(0, o.normalizeStyle)(t.railStyle)},[((0, o.openBlock)(!0),(0, o.createElementBlock)(o.Fragment,null,(0, o.renderList)(t.processArray,(function(e,r){return (0, o.renderSlot)(t.$slots,"process",(0, o.normalizeProps)((0, o.guardReactiveProps)(e)),(function(){return [((0, o.openBlock)(),(0, o.createElementBlock)("div",{class:"vue-slider-process",key:"process-".concat(r),style:(0, o.normalizeStyle)(e.style)},null,4))]}))})),256)),t.sliderMarks&&t.control?((0, o.openBlock)(),(0, o.createElementBlock)("div",s,[((0, o.openBlock)(!0),(0, o.createElementBlock)(o.Fragment,null,(0, o.renderList)(t.control.markList,(function(r,n){return (0, o.renderSlot)(t.$slots,"mark",(0, o.normalizeProps)((0, o.guardReactiveProps)(r)),(function(){var i;return [((0, o.openBlock)(),(0, o.createBlock)(u,{key:"mark-".concat(n),mark:r,hideLabel:t.hideLabel,style:(0, o.normalizeStyle)((i={},a(i,t.isHorizontal?"height":"width","100%"),a(i,t.isHorizontal?"width":"height",t.tailSize),a(i,t.mainDirection,"".concat(r.pos,"%")),i)),stepStyle:t.stepStyle,stepActiveStyle:t.stepActiveStyle,labelStyle:t.labelStyle,labelActiveStyle:t.labelActiveStyle,onPressLabel:e[0]||(e[0]=function(e){return t.clickable&&t.setValueByPos(e)})},{step:(0, o.withCtx)((function(){return [(0, o.renderSlot)(t.$slots,"step",(0, o.normalizeProps)((0, o.guardReactiveProps)(r)))]})),label:(0, o.withCtx)((function(){return [(0, o.renderSlot)(t.$slots,"label",(0, o.normalizeProps)((0, o.guardReactiveProps)(r)))]})),_:2},1032,["mark","hideLabel","style","stepStyle","stepActiveStyle","labelStyle","labelActiveStyle"]))]}))})),256))])):(0, o.createCommentVNode)("",!0),((0, o.openBlock)(!0),(0, o.createElementBlock)(o.Fragment,null,(0, o.renderList)(t.dots,(function(r,n){var i;return (0, o.openBlock)(),(0, o.createBlock)(c,(0, o.mergeProps)({ref_for:!0,ref:"dot-".concat(n),key:"dot-".concat(n),value:r.value,disabled:r.disabled,focus:r.focus,"dot-style":[r.style,r.disabled?r.disabledStyle:null,r.focus?r.focusStyle:null],tooltip:r.tooltip||t.tooltip,"tooltip-style":[t.tooltipStyle,r.tooltipStyle,r.disabled?r.tooltipDisabledStyle:null,r.focus?r.tooltipFocusStyle:null],"tooltip-formatter":Array.isArray(t.sliderTooltipFormatter)?t.sliderTooltipFormatter[n]:t.sliderTooltipFormatter,"tooltip-placement":t.tooltipDirections[n],style:[t.dotBaseStyle,(i={},a(i,t.mainDirection,"".concat(r.pos,"%")),a(i,"transition","".concat(t.mainDirection," ").concat(t.animateTime,"s")),i)],onDragStart:function(){return t.dragStart(n)},role:"slider","aria-valuenow":r.value,"aria-valuemin":t.min,"aria-valuemax":t.max,"aria-orientation":t.isHorizontal?"horizontal":"vertical",tabindex:"0",onFocus:function(){return t.focus(r,n)},onBlur:e[1]||(e[1]=function(){return t.blur()})},t.dotAttrs),{dot:(0, o.withCtx)((function(){return [(0, o.renderSlot)(t.$slots,"dot",(0, o.normalizeProps)((0, o.guardReactiveProps)(r)))]})),tooltip:(0, o.withCtx)((function(){return [(0, o.renderSlot)(t.$slots,"tooltip",(0, o.normalizeProps)((0, o.guardReactiveProps)(r)))]})),_:2},1040,["value","disabled","focus","dot-style","tooltip","tooltip-style","tooltip-formatter","tooltip-placement","style","onDragStart","aria-valuenow","aria-valuemin","aria-valuemax","aria-orientation","onFocus"])})),128))],4),(0, o.renderSlot)(t.$slots,"default",{value:t.getValue()})],16)}var u=["aria-valuetext"],c={class:"vue-slider-dot-tooltip-text"};function d(t,e,r,n,i,a){var s;return (0, o.openBlock)(),(0, o.createElementBlock)("div",{ref:"dot",class:(0, o.normalizeClass)(t.dotClasses),"aria-valuetext":null===(s=t.tooltipValue)||void 0===s?void 0:s.toString(),onMousedownPassive:e[0]||(e[0]=function(){return t.dragStart&&t.dragStart.apply(t,arguments)}),onTouchstartPassive:e[1]||(e[1]=function(){return t.dragStart&&t.dragStart.apply(t,arguments)})},[(0, o.renderSlot)(t.$slots,"dot",{},(function(){return [(0, o.createElementVNode)("div",{class:(0, o.normalizeClass)(t.handleClasses),style:(0, o.normalizeStyle)(t.dotStyle)},null,6)]})),"none"!==t.tooltip?((0, o.openBlock)(),(0, o.createElementBlock)("div",{key:0,class:(0, o.normalizeClass)(t.tooltipClasses)},[(0, o.renderSlot)(t.$slots,"tooltip",{},(function(){return [(0, o.createElementVNode)("div",{class:(0, o.normalizeClass)(t.tooltipInnerClasses),style:(0, o.normalizeStyle)(t.tooltipStyle)},[(0, o.createElementVNode)("span",c,(0, o.toDisplayString)(t.tooltipValue),1)],6)]}))],2)):(0, o.createCommentVNode)("",!0)],42,u)}n(466);var h=(0, o.defineComponent)({name:"VueSliderDot",emits:["drag-start"],props:{value:{type:[String,Number],default:0},tooltip:{type:String,required:!0},tooltipPlacement:{type:String,validator:function(t){return ["top","right","bottom","left"].indexOf(t)>-1},required:!0},tooltipFormatter:{type:[String,Function]},focus:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},dotStyle:{type:Object},tooltipStyle:{type:Object}},computed:{dotClasses:function(){return ["vue-slider-dot",{"vue-slider-dot-hover":"hover"===this.tooltip||"active"===this.tooltip,"vue-slider-dot-disabled":this.disabled,"vue-slider-dot-focus":this.focus}]},handleClasses:function(){return ["vue-slider-dot-handle",{"vue-slider-dot-handle-disabled":this.disabled,"vue-slider-dot-handle-focus":this.focus}]},tooltipClasses:function(){return ["vue-slider-dot-tooltip",["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-show":this.showTooltip}]},tooltipInnerClasses:function(){return ["vue-slider-dot-tooltip-inner",["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)],{"vue-slider-dot-tooltip-inner-disabled":this.disabled,"vue-slider-dot-tooltip-inner-focus":this.focus}]},showTooltip:function(){switch(this.tooltip){case"always":return !0;case"none":return !1;case"focus":case"active":return !!this.focus;default:return !1}},tooltipValue:function(){return this.tooltipFormatter?"string"===typeof this.tooltipFormatter?this.tooltipFormatter.replace(/\{value\}/,String(this.value)):this.tooltipFormatter(this.value):this.value}},methods:{dragStart:function(){if(this.disabled)return !1;this.$emit("drag-start");}}}),f=n(831);const p=(0, f.Z)(h,[["render",d]]);var m=p;function v(t,e,r,n,i,a){return (0, o.openBlock)(),(0, o.createElementBlock)("div",{class:(0, o.normalizeClass)(t.marksClasses)},[(0, o.renderSlot)(t.$slots,"step",{},(function(){return [(0, o.createElementVNode)("div",{class:(0, o.normalizeClass)(t.stepClasses),style:(0, o.normalizeStyle)([t.stepStyle,t.mark.style||{},t.mark.active&&t.stepActiveStyle?t.stepActiveStyle:{},t.mark.active&&t.mark.activeStyle?t.mark.activeStyle:{}])},null,6)]})),t.hideLabel?(0, o.createCommentVNode)("",!0):(0, o.renderSlot)(t.$slots,"label",{key:0},(function(){return [(0, o.createElementVNode)("div",{class:(0, o.normalizeClass)(t.labelClasses),style:(0, o.normalizeStyle)([t.labelStyle,t.mark.labelStyle||{},t.mark.active&&t.labelActiveStyle?t.labelActiveStyle:{},t.mark.active&&t.mark.labelActiveStyle?t.mark.labelActiveStyle:{}]),onClick:e[0]||(e[0]=function(){return t.labelClickHandle&&t.labelClickHandle.apply(t,arguments)})},(0, o.toDisplayString)(t.mark.label),7)]}))],2)}n(18);var y=(0, o.defineComponent)({name:"VueSliderMark",emits:["press-label"],props:{mark:{type:Object,required:!0},hideLabel:{type:Boolean},stepStyle:{type:Object,default:function(){return {}}},stepActiveStyle:{type:Object,default:function(){return {}}},labelStyle:{type:Object,default:function(){return {}}},labelActiveStyle:{type:Object,default:function(){return {}}}},computed:{marksClasses:function(){return ["vue-slider-mark",{"vue-slider-mark-active":this.mark.active}]},stepClasses:function(){return ["vue-slider-mark-step",{"vue-slider-mark-step-active":this.mark.active}]},labelClasses:function(){return ["vue-slider-mark-label",{"vue-slider-mark-label-active":this.mark.active}]}},methods:{labelClickHandle:function(t){t.stopPropagation(),this.$emit("press-label",this.mark.pos);}}});const b=(0, f.Z)(y,[["render",v]]);var g,k=b,S=function(t){return "number"===typeof t?"".concat(t,"px"):t},x=function(t){var e=document.documentElement,r=document.body,n=t.getBoundingClientRect(),i={y:n.top+(window.pageYOffset||e.scrollTop)-(e.clientTop||r.clientTop||0),x:n.left+(window.pageXOffset||e.scrollLeft)-(e.clientLeft||r.clientLeft||0)};return i},P=function(t,e,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i="targetTouches"in t?t.targetTouches[0]:t,o=x(e),a={x:i.pageX-o.x,y:i.pageY-o.y};return {x:r?e.offsetWidth*n-a.x:a.x,y:r?e.offsetHeight*n-a.y:a.y}};(function(t){t[t["PAGE_UP"]=33]="PAGE_UP",t[t["PAGE_DOWN"]=34]="PAGE_DOWN",t[t["END"]=35]="END",t[t["HOME"]=36]="HOME",t[t["LEFT"]=37]="LEFT",t[t["UP"]=38]="UP",t[t["RIGHT"]=39]="RIGHT",t[t["DOWN"]=40]="DOWN";})(g||(g={}));var w=function(t,e){if(e.hook){var r=e.hook(t);if("function"===typeof r)return r;if(!r)return null}switch(t.keyCode){case g.UP:return function(t){return "ttb"===e.direction?t-1:t+1};case g.RIGHT:return function(t){return "rtl"===e.direction?t-1:t+1};case g.DOWN:return function(t){return "ttb"===e.direction?t+1:t-1};case g.LEFT:return function(t){return "rtl"===e.direction?t+1:t-1};case g.END:return function(){return e.max};case g.HOME:return function(){return e.min};case g.PAGE_UP:return function(t){return t+10};case g.PAGE_DOWN:return function(t){return t-10};default:return null}};function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function D(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function E(t,e,r){return e&&D(t.prototype,e),r&&D(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var A,V,j=function(){function t(e){O(this,t),R(this,"num",void 0),this.num=e;}return E(t,[{key:"decimal",value:function(t,e){var r=this.num,n=this.getDecimalLen(r),i=this.getDecimalLen(t),o=0;switch(e){case"+":o=this.getExponent(n,i),this.num=(this.safeRoundUp(r,o)+this.safeRoundUp(t,o))/o;break;case"-":o=this.getExponent(n,i),this.num=(this.safeRoundUp(r,o)-this.safeRoundUp(t,o))/o;break;case"*":this.num=this.safeRoundUp(this.safeRoundUp(r,this.getExponent(n)),this.safeRoundUp(t,this.getExponent(i)))/this.getExponent(n+i);break;case"/":o=this.getExponent(n,i),this.num=this.safeRoundUp(r,o)/this.safeRoundUp(t,o);break;case"%":o=this.getExponent(n,i),this.num=this.safeRoundUp(r,o)%this.safeRoundUp(t,o)/o;break}return this}},{key:"plus",value:function(t){return this.decimal(t,"+")}},{key:"minus",value:function(t){return this.decimal(t,"-")}},{key:"multiply",value:function(t){return this.decimal(t,"*")}},{key:"divide",value:function(t){return this.decimal(t,"/")}},{key:"remainder",value:function(t){return this.decimal(t,"%")}},{key:"toNumber",value:function(){return this.num}},{key:"getDecimalLen",value:function(t){var e="".concat(t).split("e");return ("".concat(e[0]).split(".")[1]||"").length-(e[1]?+e[1]:0)}},{key:"getExponent",value:function(t,e){return Math.pow(10,void 0!==e?Math.max(t,e):t)}},{key:"safeRoundUp",value:function(t,e){return Math.round(t*e)}}]),t}();function C(t,e){return L(t)||M(t,e)||H(t,e)||B()}function B(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function M(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0)if(o.push(n.value),e&&o.length===e)break}catch(l){s=!0,i=l;}finally{try{a||null==r["return"]||r["return"]();}finally{if(s)throw i}}return o}}function L(t){if(Array.isArray(t))return t}function N(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n);}return r}function z(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?N(Object(r),!0).forEach((function(e){X(t,e,r[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e));}));}return t}function I(t){return $(t)||F(t)||H(t)||T()}function T(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function H(t,e){if(t){if("string"===typeof t)return U(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return "Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?U(t,e):void 0}}function F(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function $(t){if(Array.isArray(t))return U(t)}function U(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function W(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function G(t,e,r){return e&&W(t.prototype,e),r&&W(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}(function(t){t[t["VALUE"]=1]="VALUE",t[t["INTERVAL"]=2]="INTERVAL",t[t["MIN"]=3]="MIN",t[t["MAX"]=4]="MAX",t[t["ORDER"]=5]="ORDER";})(V||(V={}));var q=(A={},X(A,V.VALUE,'The type of the "value" is illegal'),X(A,V.INTERVAL,'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'),X(A,V.MIN,'The "value" must be greater than or equal to the "min".'),X(A,V.MAX,'The "value" must be less than or equal to the "max".'),X(A,V.ORDER,'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'),A),Z=function(){function t(e){_(this,t),X(this,"dotsPos",[]),X(this,"dotsValue",[]),X(this,"data",void 0),X(this,"enableCross",void 0),X(this,"fixed",void 0),X(this,"max",void 0),X(this,"min",void 0),X(this,"interval",void 0),X(this,"minRange",void 0),X(this,"maxRange",void 0),X(this,"order",void 0),X(this,"marks",void 0),X(this,"included",void 0),X(this,"process",void 0),X(this,"adsorb",void 0),X(this,"dotOptions",void 0),X(this,"onError",void 0),X(this,"cacheRangeDir",{}),this.data=e.data,this.max=e.max,this.min=e.min,this.interval=e.interval,this.order=e.order,this.marks=e.marks,this.included=e.included,this.process=e.process,this.adsorb=e.adsorb,this.dotOptions=e.dotOptions,this.onError=e.onError,this.order?(this.minRange=e.minRange||0,this.maxRange=e.maxRange||0,this.enableCross=e.enableCross,this.fixed=e.fixed):((e.minRange||e.maxRange||!e.enableCross||e.fixed)&&this.emitError(V.ORDER),this.minRange=0,this.maxRange=0,this.enableCross=!0,this.fixed=!1),this.setValue(e.value);}return G(t,[{key:"setValue",value:function(t){this.setDotsValue(Array.isArray(t)?I(t):[t],!0);}},{key:"setDotsValue",value:function(t,e){this.dotsValue=t,e&&this.syncDotsPos();}},{key:"setDotsPos",value:function(t){var e=this,r=this.order?I(t).sort((function(t,e){return t-e})):t;this.dotsPos=r,this.setDotsValue(r.map((function(t){return e.getValueByPos(t)})),this.adsorb);}},{key:"getValueByPos",value:function(t){var e=this.parsePos(t);if(this.included){var r=100;this.markList.forEach((function(n){var i=Math.abs(n.pos-t);i<r&&(r=i,e=n.value);}));}return e}},{key:"syncDotsPos",value:function(){var t=this;this.dotsPos=this.dotsValue.map((function(e){return t.parseValue(e)}));}},{key:"markList",get:function(){var t=this;if(!this.marks)return [];var e=function(e,r){var n=t.parseValue(e);return z({pos:n,value:e,label:e,active:t.isActiveByPos(n)},r)};return !0===this.marks?this.getValues().map((function(t){return e(t)})):"[object Object]"===Object.prototype.toString.call(this.marks)?Object.keys(this.marks).sort((function(t,e){return +t-+e})).map((function(r){var n=t.marks[r];return e(r,"string"!==typeof n?n:{label:n})})):Array.isArray(this.marks)?this.marks.map((function(t){return e(t)})):"function"===typeof this.marks?this.getValues().map((function(e){return {value:e,result:t.marks(e)}})).filter((function(t){var e=t.result;return !!e})).map((function(t){var r=t.value,n=t.result;return e(r,n)})):[]}},{key:"getRecentDot",value:function(t){var e=this.dotsPos.map((function(e){return Math.abs(e-t)}));return e.indexOf(Math.min.apply(Math,I(e)))}},{key:"getIndexByValue",value:function(t){return this.data?this.data.indexOf(t):new j(+t).minus(this.min).divide(this.interval).toNumber()}},{key:"getValueByIndex",value:function(t){return t<0?t=0:t>this.total&&(t=this.total),this.data?this.data[t]:new j(t).multiply(this.interval).plus(this.min).toNumber()}},{key:"setDotPos",value:function(t,e){t=this.getValidPos(t,e).pos;var r=t-this.dotsPos[e];if(r){var n=new Array(this.dotsPos.length);this.fixed?n=this.getFixedChangePosArr(r,e):this.minRange||this.maxRange?n=this.getLimitRangeChangePosArr(t,r,e):n[e]=r,this.setDotsPos(this.dotsPos.map((function(t,e){return t+(n[e]||0)})));}}},{key:"getFixedChangePosArr",value:function(t,e){var r=this;return this.dotsPos.forEach((function(n,i){if(i!==e){var o=r.getValidPos(n+t,i),a=o.pos,s=o.inRange;s||(t=Math.min(Math.abs(a-n),Math.abs(t))*(t<0?-1:1));}})),this.dotsPos.map((function(e){return t}))}},{key:"getLimitRangeChangePosArr",value:function(t,e,r){var n=this,i=[{index:r,changePos:e}],o=e;return [this.minRange,this.maxRange].forEach((function(a,s){if(!a)return !1;var l=0===s,u=e>0,c=0;c=l?u?1:-1:u?-1:1;var d=function(t,e){var r=Math.abs(t-e);return l?r<n.minRangeDir:r>n.maxRangeDir},h=r+c,f=n.dotsPos[h],p=t;while(n.isPos(f)&&d(f,p)){var m=n.getValidPos(f+o,h),v=m.pos;i.push({index:h,changePos:v-f}),h+=c,p=v,f=n.dotsPos[h];}})),this.dotsPos.map((function(t,e){var r=i.filter((function(t){return t.index===e}));return r.length?r[0].changePos:0}))}},{key:"isPos",value:function(t){return "number"===typeof t}},{key:"getValidPos",value:function(t,e){var r=this.valuePosRange[e],n=!0;return t<r[0]?(t=r[0],n=!1):t>r[1]&&(t=r[1],n=!1),{pos:t,inRange:n}}},{key:"parseValue",value:function(t){if(this.data)t=this.data.indexOf(t);else if("number"===typeof t||"string"===typeof t){if(t=+t,t<this.min)return this.emitError(V.MIN),0;if(t>this.max)return this.emitError(V.MAX),0;if("number"!==typeof t||t!==t)return this.emitError(V.VALUE),0;t=new j(t).minus(this.min).divide(this.interval).toNumber();}var e=new j(t).multiply(this.gap).toNumber();return e<0?0:e>100?100:e}},{key:"parsePos",value:function(t){var e=Math.round(t/this.gap);return this.getValueByIndex(e)}},{key:"isActiveByPos",value:function(t){return this.processArray.some((function(e){var r=C(e,2),n=r[0],i=r[1];return t>=n&&t<=i}))}},{key:"getValues",value:function(){if(this.data)return this.data;for(var t=[],e=0;e<=this.total;e++)t.push(new j(e).multiply(this.interval).plus(this.min).toNumber());return t}},{key:"getRangeDir",value:function(t){return t?new j(t).divide(new j(this.data?this.data.length-1:this.max).minus(this.data?0:this.min).toNumber()).multiply(100).toNumber():100}},{key:"emitError",value:function(t){this.onError&&this.onError(t,q[t]);}},{key:"processArray",get:function(){if(this.process){if("function"===typeof this.process)return this.process(this.dotsPos);if(1===this.dotsPos.length)return [[0,this.dotsPos[0]]];if(this.dotsPos.length>1)return [[Math.min.apply(Math,I(this.dotsPos)),Math.max.apply(Math,I(this.dotsPos))]]}return []}},{key:"total",get:function(){var t=0;return t=this.data?this.data.length-1:new j(this.max).minus(this.min).divide(this.interval).toNumber(),t-Math.floor(t)!==0?(this.emitError(V.INTERVAL),0):t}},{key:"gap",get:function(){return 100/this.total}},{key:"minRangeDir",get:function(){return this.cacheRangeDir[this.minRange]?this.cacheRangeDir[this.minRange]:this.cacheRangeDir[this.minRange]=this.getRangeDir(this.minRange)}},{key:"maxRangeDir",get:function(){return this.cacheRangeDir[this.maxRange]?this.cacheRangeDir[this.maxRange]:this.cacheRangeDir[this.maxRange]=this.getRangeDir(this.maxRange)}},{key:"getDotRange",value:function(t,e,r){if(!this.dotOptions)return r;var n=Array.isArray(this.dotOptions)?this.dotOptions[t]:this.dotOptions;return n&&void 0!==n[e]?this.parseValue(n[e]):r}},{key:"valuePosRange",get:function(){var t=this,e=this.dotsPos,r=[];return e.forEach((function(n,i){r.push([Math.max(t.minRange?t.minRangeDir*i:0,t.enableCross?0:e[i-1]||0,t.getDotRange(i,"min",0)),Math.min(t.minRange?100-t.minRangeDir*(e.length-1-i):100,t.enableCross?100:e[i+1]||100,t.getDotRange(i,"max",100))]);})),r}},{key:"dotsIndex",get:function(){var t=this;return this.dotsValue.map((function(e){return t.getIndexByValue(e)}))}}]),t}();function Y(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function K(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n);}}function J(t,e,r){return e&&K(t.prototype,e),r&&K(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Q(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var tt=function(){function t(e){Y(this,t),Q(this,"map",void 0),Q(this,"states",0),this.map=e;}return J(t,[{key:"add",value:function(t){this.states|=t;}},{key:"delete",value:function(t){this.states&=~t;}},{key:"toggle",value:function(t){this.has(t)?this.delete(t):this.add(t);}},{key:"has",value:function(t){return !!(this.states&t)}}]),t}();n(631);function et(t){return it(t)||nt(t)||dt(t)||rt()}function rt(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function nt(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function it(t){if(Array.isArray(t))return ht(t)}function ot(t){return ot="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ot(t)}function at(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n);}return r}function st(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?at(Object(r),!0).forEach((function(e){lt(t,e,r[e]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):at(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e));}));}return t}function lt(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function ut(t,e){return pt(t)||ft(t,e)||dt(t,e)||ct()}function ct(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function dt(t,e){if(t){if("string"===typeof t)return ht(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return "Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ht(t,e):void 0}}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function ft(t,e){var r=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,i,o=[],a=!0,s=!1;try{for(r=r.call(t);!(a=(n=r.next()).done);a=!0)if(o.push(n.value),e&&o.length===e)break}catch(l){s=!0,i=l;}finally{try{a||null==r["return"]||r["return"]();}finally{if(s)throw i}}return o}}function pt(t){if(Array.isArray(t))return t}var mt={None:0,Drag:2,Focus:4},vt=4,yt=(0, o.defineComponent)({name:"VueSlider",components:{VueSliderDot:m,VueSliderMark:k},emits:["change","drag-start","dragging","drag-end","error","update:modelValue"],data:function(){return {control:null,states:new tt(mt),scale:1,focusDotIndex:0}},props:{modelValue:{type:[Number,String,Array],default:0},silent:{type:Boolean,default:!1},direction:{type:String,default:"ltr",validator:function(t){return ["ltr","rtl","ttb","btt"].indexOf(t)>-1}},width:{type:[Number,String]},height:{type:[Number,String]},dotSize:{type:[Number,Array],default:14},contained:{type:Boolean,default:!1},min:{type:Number,default:0},max:{type:Number,default:100},interval:{type:Number,default:1},disabled:{type:Boolean,default:!1},clickable:{type:Boolean,default:!0},dragOnClick:{type:Boolean,default:!1},duration:{type:Number,default:.5},data:{type:[Object,Array]},dataValue:{type:String,default:"value"},dataLabel:{type:String,default:"label"},lazy:{type:Boolean,default:!1},tooltip:{type:String,default:"active",validator:function(t){return ["none","always","focus","hover","active"].indexOf(t)>-1}},tooltipPlacement:{type:[String,Array],validator:function(t){return (Array.isArray(t)?t:[t]).every((function(t){return ["top","right","bottom","left"].indexOf(t)>-1}))}},tooltipFormatter:{type:[String,Array,Function]},useKeyboard:{type:Boolean,default:!0},keydownHook:{type:Function},enableCross:{type:Boolean,default:!0},fixed:{type:Boolean,default:!1},order:{type:Boolean,default:!0},minRange:{type:Number},maxRange:{type:Number},marks:{type:[Boolean,Object,Array,Function],default:!1},process:{type:[Boolean,Function],default:!0},zoom:{type:Number},included:{type:Boolean},adsorb:{type:Boolean},hideLabel:{type:Boolean},dotOptions:{type:[Object,Array]},dotAttrs:{type:Object},railStyle:{type:Object},processStyle:{type:Object},dotStyle:{type:Object},tooltipStyle:{type:Object},stepStyle:{type:Object},stepActiveStyle:{type:Object},labelStyle:{type:Object},labelActiveStyle:{type:Object}},computed:{isHorizontal:function(){return "ltr"===this.direction||"rtl"===this.direction},isReverse:function(){return "rtl"===this.direction||"btt"===this.direction},tailSize:function(){return S((this.isHorizontal?this.height:this.width)||vt)},containerClasses:function(){return ["vue-slider",["vue-slider-".concat(this.direction)],{"vue-slider-disabled":this.disabled}]},containerStyles:function(){var t=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],e=ut(t,2),r=e[0],n=e[1],i=this.width?S(this.width):this.isHorizontal?"auto":S(vt),o=this.height?S(this.height):this.isHorizontal?S(vt):"auto";return {padding:this.contained?"".concat(n/2,"px ").concat(r/2,"px"):this.isHorizontal?"".concat(n/2,"px 0"):"0 ".concat(r/2,"px"),width:i,height:o}},processArray:function(){var t=this;return this.control.processArray.map((function(e,r){var n,i=ut(e,3),o=i[0],a=i[1],s=i[2];if(o>a){var l=[a,o];o=l[0],a=l[1];}var u=t.isHorizontal?"width":"height";return {start:o,end:a,index:r,style:st(st((n={},lt(n,t.isHorizontal?"height":"width","100%"),lt(n,t.isHorizontal?"top":"left",0),lt(n,t.mainDirection,"".concat(o,"%")),lt(n,u,"".concat(a-o,"%")),lt(n,"transitionProperty","".concat(u,",").concat(t.mainDirection)),lt(n,"transitionDuration","".concat(t.animateTime,"s")),n),t.processStyle),s)}}))},dotBaseStyle:function(){var t,e=Array.isArray(this.dotSize)?this.dotSize:[this.dotSize,this.dotSize],r=ut(e,2),n=r[0],i=r[1];return t=this.isHorizontal?lt({transform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),WebkitTransform:"translate(".concat(this.isReverse?"50%":"-50%",", -50%)"),top:"50%"},"ltr"===this.direction?"left":"right","0"):lt({transform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),WebkitTransform:"translate(-50%, ".concat(this.isReverse?"50%":"-50%",")"),left:"50%"},"btt"===this.direction?"bottom":"top","0"),st({width:"".concat(n,"px"),height:"".concat(i,"px")},t)},mainDirection:function(){switch(this.direction){case"ltr":return "left";case"rtl":return "right";case"btt":return "bottom";case"ttb":return "top";default:return "left"}},tooltipDirections:function(){var t=this.tooltipPlacement||(this.isHorizontal?"top":"left");return Array.isArray(t)?t:this.dots.map((function(){return t}))},dots:function(){var t=this;return this.control.dotsPos.map((function(e,r){return st({pos:e,index:r,value:t.control.dotsValue[r],focus:t.states.has(mt.Focus)&&t.focusDotIndex===r,disabled:t.disabled,style:t.dotStyle},(Array.isArray(t.dotOptions)?t.dotOptions[r]:t.dotOptions)||{})}))},animateTime:function(){return this.states.has(mt.Drag)?0:this.duration},canSort:function(){return this.order&&!this.minRange&&!this.maxRange&&!this.fixed&&this.enableCross},sliderData:function(){var t=this;return this.isObjectArrayData(this.data)?this.data.map((function(e){return e[t.dataValue]})):this.isObjectData(this.data)?Object.keys(this.data):this.data},sliderMarks:function(){var t=this;return this.marks?this.marks:this.isObjectArrayData(this.data)?function(e){var r={label:e};return t.data.some((function(n){return n[t.dataValue]===e&&(r.label=n[t.dataLabel],!0)})),r}:this.isObjectData(this.data)?this.data:void 0},sliderTooltipFormatter:function(){var t=this;if(this.tooltipFormatter)return this.tooltipFormatter;if(this.isObjectArrayData(this.data))return function(e){var r=""+e;return t.data.some((function(n){return n[t.dataValue]===e&&(r=n[t.dataLabel],!0)})),r};if(this.isObjectData(this.data)){var e=this.data;return function(t){return e[t]}}},isNotSync:function(){var t=this.control.dotsValue;return Array.isArray(this.modelValue)?this.modelValue.length!==t.length||this.modelValue.some((function(e,r){return e!==t[r]})):this.modelValue!==t[0]},dragRange:function(){var t=this.dots[this.focusDotIndex-1],e=this.dots[this.focusDotIndex+1];return [t?t.pos:-1/0,e?e.pos:1/0]}},watch:{modelValue:function(){this.control&&!this.states.has(mt.Drag)&&this.isNotSync&&this.control.setValue(this.modelValue);}},methods:{isObjectData:function(t){return !!t&&"[object Object]"===Object.prototype.toString.call(t)},isObjectArrayData:function(t){return !!t&&Array.isArray(t)&&t.length>0&&"object"===ot(t[0])},bindEvent:function(){document.addEventListener("touchmove",this.dragMove,{passive:!1}),document.addEventListener("touchend",this.dragEnd,{passive:!1}),document.addEventListener("mousedown",this.blurHandle),document.addEventListener("mousemove",this.dragMove),document.addEventListener("mouseup",this.dragEnd),document.addEventListener("mouseleave",this.dragEnd),document.addEventListener("keydown",this.keydownHandle);},unbindEvent:function(){document.removeEventListener("touchmove",this.dragMove),document.removeEventListener("touchend",this.dragEnd),document.removeEventListener("mousedown",this.blurHandle),document.removeEventListener("mousemove",this.dragMove),document.removeEventListener("mouseup",this.dragEnd),document.removeEventListener("mouseleave",this.dragEnd),document.removeEventListener("keydown",this.keydownHandle);},setScale:function(){this.scale=new j(Math.floor(this.isHorizontal?this.$el.offsetWidth:this.$el.offsetHeight)).multiply(this.zoom||1).divide(100).toNumber();},initControl:function(){var t=this;this.control=new Z({value:this.modelValue,data:this.sliderData,enableCross:this.enableCross,fixed:this.fixed,max:this.max,min:this.min,interval:this.interval,minRange:this.minRange,maxRange:this.maxRange,order:this.order,marks:this.sliderMarks,included:this.included,process:this.process,adsorb:this.adsorb,dotOptions:this.dotOptions,onError:this.emitError}),["data","enableCross","fixed","max","min","interval","minRange","maxRange","order","marks","process","adsorb","included","dotOptions"].forEach((function(e){t.$watch(e,(function(r){if("data"===e&&Array.isArray(t.control.data)&&Array.isArray(r)&&t.control.data.length===r.length&&r.every((function(e,r){return e===t.control.data[r]})))return !1;switch(e){case"data":case"dataLabel":case"dataValue":t.control.data=t.sliderData;break;case"mark":t.control.marks=t.sliderMarks;break;default:t.control[e]=r;}["data","max","min","interval"].indexOf(e)>-1&&t.control.syncDotsPos();}));}));},syncValueByPos:function(){var t=this.control.dotsValue;if(this.isDiff(t,Array.isArray(this.modelValue)?this.modelValue:[this.modelValue])){var e=1===t.length?t[0]:et(t);this.$emit("change",e,this.focusDotIndex),this.$emit("update:modelValue",e);}},isDiff:function(t,e){return t.length!==e.length||t.some((function(t,r){return t!==e[r]}))},emitError:function(t,e){this.silent||console.error("[VueSlider error]: ".concat(e)),this.$emit("error",t,e);},dragStartOnProcess:function(t){if(this.dragOnClick){this.setScale();var e=this.getPosByEvent(t),r=this.control.getRecentDot(e);if(this.dots[r].disabled)return;this.dragStart(r),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos();}},dragStart:function(t){this.focusDotIndex=t,this.setScale(),this.states.add(mt.Drag),this.states.add(mt.Focus),this.$emit("drag-start",this.focusDotIndex);},dragMove:function(t){if(!this.states.has(mt.Drag))return !1;t.preventDefault();var e=this.getPosByEvent(t);this.isCrossDot(e),this.control.setDotPos(e,this.focusDotIndex),this.lazy||this.syncValueByPos();var r=this.control.dotsValue;this.$emit("dragging",1===r.length?r[0]:et(r),this.focusDotIndex);},isCrossDot:function(t){if(this.canSort){var e=this.focusDotIndex,r=t;if(r>this.dragRange[1]?(r=this.dragRange[1],this.focusDotIndex++):r<this.dragRange[0]&&(r=this.dragRange[0],this.focusDotIndex--),e!==this.focusDotIndex){var n=this.$refs["dot-".concat(this.focusDotIndex)];n&&n.$el&&n.$el.focus(),this.control.setDotPos(r,e);}}},dragEnd:function(t){var e=this;if(!this.states.has(mt.Drag))return !1;setTimeout((function(){e.lazy&&e.syncValueByPos(),e.included&&e.isNotSync?e.control.setValue(e.modelValue):e.control.syncDotsPos(),e.states.delete(mt.Drag),e.useKeyboard&&!("targetTouches"in t)||e.states.delete(mt.Focus),e.$emit("drag-end",e.focusDotIndex);}));},blurHandle:function(t){if(!this.states.has(mt.Focus)||!this.$refs.container||this.$refs.container.contains(t.target))return !1;this.states.delete(mt.Focus);},clickHandle:function(t){if(!this.clickable||this.disabled)return !1;if(!this.states.has(mt.Drag)){this.setScale();var e=this.getPosByEvent(t);this.setValueByPos(e);}},focus:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;t.disabled||(this.states.add(mt.Focus),this.focusDotIndex=e);},blur:function(){this.states.delete(mt.Focus);},getValue:function(){var t=this.control.dotsValue;return 1===t.length?t[0]:t},getIndex:function(){var t=this.control.dotsIndex;return 1===t.length?t[0]:t},setValue:function(t){this.control.setValue(Array.isArray(t)?et(t):[t]),this.syncValueByPos();},setIndex:function(t){var e=this,r=Array.isArray(t)?t.map((function(t){return e.control.getValueByIndex(t)})):this.control.getValueByIndex(t);this.setValue(r);},setValueByPos:function(t){var e=this,r=this.control.getRecentDot(t);if(this.disabled||this.dots[r].disabled)return !1;this.focusDotIndex=r,this.control.setDotPos(t,r),this.syncValueByPos(),this.useKeyboard&&this.states.add(mt.Focus),setTimeout((function(){e.included&&e.isNotSync?e.control.setValue(e.modelValue):e.control.syncDotsPos();}));},keydownHandle:function(t){var e=this;if(!this.useKeyboard||!this.states.has(mt.Focus))return !1;var r=this.included&&this.marks,n=w(t,{direction:this.direction,max:r?this.control.markList.length-1:this.control.total,min:0,hook:this.keydownHook});if(n){t.preventDefault();var i=-1,o=0;r?(this.control.markList.some((function(t,r){return t.value===e.control.dotsValue[e.focusDotIndex]&&(i=n(r),!0)})),i<0?i=0:i>this.control.markList.length-1&&(i=this.control.markList.length-1),o=this.control.markList[i].pos):(i=n(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])),o=this.control.parseValue(this.control.getValueByIndex(i))),this.isCrossDot(o),this.control.setDotPos(o,this.focusDotIndex),this.syncValueByPos();}},getPosByEvent:function(t){return P(t,this.$el,this.isReverse,this.zoom)[this.isHorizontal?"x":"y"]/this.scale},renderSlot:function(t,e,r){var n=this.$slots[t];return n?n(e):r}},created:function(){this.initControl();},mounted:function(){this.bindEvent();},beforeUnmount:function(){this.unbindEvent();}});const bt=(0, f.Z)(yt,[["render",l]]);var gt=bt;gt.VueSliderMark=k,gt.VueSliderDot=m;var kt=gt,St=kt;}(),i=i["default"],i}()}));
	
} (vueSliderComponent_umd_min));

var vueSliderComponent_umd_minExports = vueSliderComponent_umd_min.exports;
const VueSlider = /*@__PURE__*/getDefaultExportFromCjs(vueSliderComponent_umd_minExports);

const _default = '';

const _hoisted_1$2 = { class: "rv-label" };
const _hoisted_2$2 = ["innerHTML"];
const _hoisted_3$2 = { class: "flex flex-row pl-30" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "slider-control",
  props: {
    name: String,
    icon: String,
    config: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const value = ref(props.config.value);
    const isDisabled = ref(!!props.config.disabled);
    const watchers = reactive([]);
    watchers.push(
      // watch the config for changes to the opacity value
      watch(
        () => props.config,
        (newConfig) => {
          value.value = newConfig.value;
          isDisabled.value = !!newConfig.disabled;
        },
        { deep: true }
      )
    );
    onBeforeUnmount(() => {
      watchers.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$2, [
          createBaseVNode("div", {
            innerHTML: __props.icon,
            class: "p-8 pl-0"
          }, null, 8, _hoisted_2$2),
          createTextVNode(" " + toDisplayString(__props.name), 1)
        ]),
        createBaseVNode("div", _hoisted_3$2, [
          createVNode(unref(VueSlider), {
            class: "mr-16",
            onChange: __props.config.onChange,
            modelValue: value.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => value.value = $event),
            disabled: isDisabled.value,
            width: 250,
            min: 0,
            max: 100
          }, null, 8, ["onChange", "modelValue", "disabled"]),
          createTextVNode(" " + toDisplayString(__props.config.value) + "% ", 1)
        ])
      ]);
    };
  }
});

const sliderControl_vue_vue_type_style_index_0_scoped_a1f3abfc_lang = '';

const SliderControl = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-a1f3abfc"]]);

const _hoisted_1$1 = { class: "rv-label text-sm pt-10" };
const _hoisted_2$1 = { class: "flex flex-row" };
const _hoisted_3$1 = ["value", "disabled"];
const _hoisted_4$1 = { class: "text-xs pt-10 text-gray-600 mb-20" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "input-control",
  props: {
    config: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const isDisabled = ref(!!props.config.disabled);
    const watchers = reactive([]);
    watchers.push(
      // watch the config for changes to the opacity value
      watch(
        () => props.config,
        (newConfig) => {
          isDisabled.value = !!newConfig.disabled;
        },
        { deep: true }
      )
    );
    onBeforeUnmount(() => {
      watchers.forEach((unwatch) => unwatch());
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createBaseVNode("div", _hoisted_1$1, toDisplayString(__props.name), 1),
        createBaseVNode("div", _hoisted_2$1, [
          createBaseVNode("input", {
            onKeypress: _cache[0] || (_cache[0] = withKeys(withModifiers(() => {
            }, ["prevent"]), ["enter"])),
            class: "rv-input text-md w-full",
            type: "number",
            value: unref(s$1).value,
            disabled: isDisabled.value,
            min: "0",
            max: "100"
          }, null, 40, _hoisted_3$1)
        ]),
        createBaseVNode("div", _hoisted_4$1, toDisplayString(unref(t)("settings.label.refreshOff")), 1)
      ]);
    };
  }
});

const inputControl_vue_vue_type_style_index_0_scoped_1e645bf3_lang = '';

const InputControl = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1e645bf3"]]);

const svgIcons = {
  visibility: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>',
  opacity: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M24 0H0v24h24V0zm0 0H0v24h24V0zM0 24h24V0H0v24z" fill="none"/><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"/></svg>',
  box: '<svg xmlns="http://www.w3.org/2000/svg" fit="" height="20" width="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false"><g id="cube-outline"><path d="M 21,16.5C 21,16.8812 20.7867,17.2125 20.473,17.3813L 12.5664,21.8243C 12.4054,21.9351 12.2103,22 12,22C 11.7897,22 11.5946,21.9351 11.4336,21.8243L 3.52716,17.3814C 3.21335,17.2127 3,16.8812 3,16.5L 3,7.5C 3,7.11876 3.21334,6.78735 3.52716,6.61864L 11.4336,2.17575C 11.5946,2.0649 11.7897,2.00001 12,2.00001C 12.2103,2.00001 12.4053,2.06489 12.5664,2.17574L 20.473,6.61872C 20.7867,6.78746 21,7.11883 21,7.5L 21,16.5 Z M 12.0009,4.15093L 6.04124,7.5L 12.0009,10.8491L 17.9591,7.5L 12.0009,4.15093 Z M 5,15.9149L 11,19.2866L 11,12.5806L 5,9.209L 5,15.9149 Z M 19,15.9149L 19,9.20901L 13,12.5806L 13,19.2875L 19,15.9149 Z "></path></g></svg>',
  location: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>',
  refresh: '<svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="20"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"/></svg>'
};

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "component",
  props: {
    type: {
      type: String,
      required: true
    },
    config: {
      type: Object,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const icons = reactive(svgIcons);
    const templates = reactive({
      slider: markRaw(SliderControl),
      toggle: markRaw(ToggleSwitchControl),
      input: markRaw(InputControl)
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(templates[__props.type]), {
        icon: icons[__props.icon],
        name: __props.name,
        config: __props.config
      }, null, 8, ["icon", "name", "config"]);
    };
  }
});

const _withScopeId = (n) => (pushScopeId("data-v-440f7637"), n = n(), popScopeId(), n);
const _hoisted_1 = { key: 0 };
const _hoisted_2 = { class: "p-8 font-bold break-words mb-8 bg-gray-100" };
const _hoisted_3 = { class: "flex flex-col justify-center" };
const _hoisted_4 = { class: "rv-subheader" };
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rv-settings-divider" }, null, -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rv-settings-divider" }, null, -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rv-settings-divider" }, null, -1));
const _hoisted_8 = { class: "flex flex-col justify-center" };
const _hoisted_9 = { class: "rv-subheader" };
const _hoisted_10 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rv-settings-divider" }, null, -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "rv-settings-divider" }, null, -1));
const _hoisted_12 = {
  key: 1,
  class: "p-5"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "screen",
  props: {
    panel: { type: Object, required: true },
    layer: { type: Object, required: true }
  },
  setup(__props) {
    const props = __props;
    const { t } = useI18n();
    const iApi = inject("iApi");
    const layerName = ref("");
    const uid = ref(props.layer.uid);
    const visibilityModel = ref(props.layer.visibility);
    const opacityModel = ref(props.layer.opacity * 100);
    const identifyModel = ref(props.layer.identify);
    const layerExists = ref(false);
    const handlers = reactive([]);
    const watchers = reactive([]);
    layerExists.value = props.layer !== void 0 && !props.layer.isRemoved;
    watchers.push(
      watch(
        () => props.layer.uid,
        (newUid, oldUid) => {
          if (newUid !== oldUid) {
            loadLayerProperties();
          }
        }
      )
    );
    onMounted(() => {
      loadLayerProperties();
      handlers.push(
        iApi.event.on(
          GlobalEvents.LAYER_VISIBILITYCHANGE,
          (newVisibility) => {
            if (uid.value === newVisibility.layer.uid) {
              visibilityModel.value = newVisibility.visibility;
            }
          }
        )
      );
      handlers.push(
        iApi.event.on(GlobalEvents.LAYER_OPACITYCHANGE, (newOpacity) => {
          if (uid.value === newOpacity.layer.uid) {
            opacityModel.value = Math.round(newOpacity.opacity * 100);
          }
        })
      );
      handlers.push(
        iApi.event.on(
          GlobalEvents.LAYER_RELOAD_END,
          (reloadedLayer) => {
            reloadedLayer.loadPromise().then(() => {
              if (uid.value === reloadedLayer.uid) {
                loadLayerProperties();
              }
            });
          }
        )
      );
      handlers.push(
        iApi.event.on(
          GlobalEvents.LAYER_REMOVE,
          (removedLayer) => {
            if (uid.value === removedLayer.uid) {
              props.panel.close();
            }
          }
        )
      );
    });
    onBeforeUnmount(() => {
      handlers.forEach((handler) => iApi.event.off(handler));
      watchers.forEach((unwatch) => unwatch());
    });
    const controlAvailable = (control) => {
      const fixture = iApi.fixture.get("settings");
      if (!fixture || Object.keys(fixture).length === 0) {
        console.warn(
          "Settings panel cannot check for layer control because it could not find settings fixture api"
        );
        return false;
      }
      const settingsConfig = fixture?.getLayerFixtureConfig(
        props.layer.id
      );
      return settingsConfig?.disabledControls?.includes(control) ? false : settingsConfig?.controls ? settingsConfig?.controls?.includes(control) : true;
    };
    const updateVisibility = (val) => {
      props.layer.visibility = val;
      visibilityModel.value = val;
    };
    const updateOpacity = (val) => {
      props.layer.opacity = val / 100;
      opacityModel.value = val;
    };
    const updateIdentify = (val) => {
      props.layer.identify = val;
      identifyModel.value = val;
    };
    const loadLayerProperties = () => {
      layerExists.value = props.layer !== void 0 && !props.layer.isRemoved;
      const oldUid = props.layer.uid;
      props.layer.loadPromise().then(() => {
        if (oldUid === props.layer.uid) {
          visibilityModel.value = props.layer.visibility;
          opacityModel.value = Math.round(props.layer.opacity * 100);
          identifyModel.value = props.layer.identify;
          layerName.value = props.layer.name;
        }
      });
    };
    return (_ctx, _cache) => {
      const _component_panel_screen = resolveComponent("panel-screen");
      return openBlock(), createBlock(_component_panel_screen, { panel: __props.panel }, {
        header: withCtx(() => [
          createTextVNode(toDisplayString(unref(t)("settings.title")), 1)
        ]),
        content: withCtx(() => [
          layerExists.value ? (openBlock(), createElementBlock("div", _hoisted_1, [
            createBaseVNode("div", _hoisted_2, toDisplayString(layerName.value), 1),
            createBaseVNode("div", _hoisted_3, [
              createBaseVNode("span", _hoisted_4, toDisplayString(unref(t)("settings.label.display")), 1),
              _hoisted_5,
              createVNode(_sfc_main$1, {
                class: "rv-subsection",
                type: "toggle",
                icon: "visibility",
                onToggled: updateVisibility,
                name: unref(t)("settings.label.visibility"),
                config: {
                  value: visibilityModel.value,
                  disabled: !controlAvailable(unref(LayerControl).Visibility)
                }
              }, null, 8, ["name", "config"]),
              _hoisted_6,
              createVNode(_sfc_main$1, {
                class: "rv-subsection",
                type: "slider",
                name: unref(t)("settings.label.opacity"),
                icon: "opacity",
                config: {
                  onChange: updateOpacity,
                  value: opacityModel.value,
                  disabled: !controlAvailable(unref(LayerControl).Opacity)
                }
              }, null, 8, ["name", "config"]),
              _hoisted_7
            ]),
            createBaseVNode("div", _hoisted_8, [
              createBaseVNode("span", _hoisted_9, toDisplayString(unref(t)("settings.label.data")), 1),
              _hoisted_10,
              createVNode(_sfc_main$1, {
                class: "rv-subsection",
                type: "toggle",
                name: unref(t)("settings.label.identify"),
                icon: "location",
                onToggled: updateIdentify,
                config: {
                  value: identifyModel.value,
                  disabled: !controlAvailable(unref(LayerControl).Identify)
                }
              }, null, 8, ["name", "config"]),
              _hoisted_11
            ])
          ])) : (openBlock(), createElementBlock("div", _hoisted_12, [
            createBaseVNode("span", null, toDisplayString(unref(t)("settings.label.no.layer")), 1)
          ]))
        ]),
        _: 1
      }, 8, ["panel"]);
    };
  }
});

const screen_vue_vue_type_style_index_0_scoped_440f7637_lang = '';

const SettingsScreenV = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-440f7637"]]);

export { SettingsScreenV as default };
