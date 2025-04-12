import{p as k,H as w,f as z,i as C,h as e,a as E}from"./themeUtils-YjM7iIiX.js";import{t as v}from"./dom-N58V0tYi.js";import{g as I}from"./guid-Dls486Er.js";import{u as L,I as T}from"./interactive-DqhNilgd.js";import{s as O,a as $,c as F}from"./loadable-DbNDKH4r.js";import{c as M,d as R}from"./locale-Cn_GDVD_.js";import{c as W}from"./observers-BigwqTsw.js";import{g as j}from"./component-CWGf1hug.js";import{u as H,c as S,s as V,d as _}from"./t9n-C_hcZMZJ.js";import{d as D}from"./icon-BXFbBbop.js";import{d as A}from"./loader-Ch7Jr16w.js";const o={button:"button",buttonTextVisible:"button--text-visible",buttonCompact:"button--compact",indicatorText:"indicator-text",iconContainer:"icon-container",slotContainer:"slot-container",slotContainerHidden:"slot-container--hidden",textContainer:"text-container",textContainerVisible:"text-container--visible",indicatorWithIcon:"indicator-with-icon",indicatorWithoutIcon:"indicator-without-icon"},q={tooltip:"tooltip"},B=`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;background-color:transparent}:host,button{border-end-end-radius:var(--calcite-action-corner-radius-end-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-end-start-radius:var(--calcite-action-corner-radius-end-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-end-radius:var(--calcite-action-corner-radius-start-end, var(--calcite-action-corner-radius, var(--calcite-corner-radius)));border-start-start-radius:var(--calcite-action-corner-radius-start-start, var(--calcite-action-corner-radius, var(--calcite-corner-radius)))}.button{position:relative;margin:0px;display:flex;inline-size:auto;cursor:pointer;align-items:center;justify-content:flex-start;border-style:none;font-family:var(--calcite-font-family);font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);outline-color:transparent;background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1));color:var(--calcite-action-text-color, var(--calcite-color-text-3));text-align:unset;flex:1 0 auto}.button:hover,.button:focus{background-color:var(--calcite-action-background-color-hover, var(--calcite-color-foreground-2));color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1))}.button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.button:active{background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}.icon-container{pointer-events:none;margin:0px;display:flex;align-items:center;justify-content:center;min-inline-size:1rem;min-block-size:1.5rem}.text-container{margin:0px;inline-size:0px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:1.5rem;opacity:0;transition-property:opacity;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-property:margin;transition-property:inline-size}.text-container--visible{inline-size:auto;flex:1 1 auto;opacity:1}:host([active]) .button,:host([active]) .button:hover,:host([active]) .button:focus{color:var(--calcite-action-text-color-pressed, var(--calcite-color-text-1));background-color:var(--calcite-action-background-color-pressed, var(--calcite-color-foreground-3))}:host([active]) .button:active{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .button:hover,:host([loading]) .button:focus{background-color:var(--calcite-action-background-color, var(--calcite-color-foreground-1))}:host([loading]) .text-container{opacity:var(--calcite-opacity-disabled)}:host([loading]) calcite-loader[inline]{margin-inline-end:0px}:host([appearance=transparent]) .button{background-color:transparent;transition-property:box-shadow;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}:host([appearance=transparent]) .button:hover,:host([appearance=transparent]) .button:focus{background-color:var(--calcite-color-transparent-hover)}:host([appearance=transparent]) .button:active{background-color:var(--calcite-color-transparent-press)}:host([data-active]) .button{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .button{padding-inline:0.5rem;padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=s]) .button--text-visible .icon-container{margin-inline-end:0.5rem}:host([scale=m]) .button{padding-inline:1rem;padding-block:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=m]) .button--text-visible .icon-container{margin-inline-end:0.75rem}:host([scale=l]) .button{padding:1.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-normal)}:host([scale=l]) .button--text-visible .icon-container{margin-inline-end:1rem}:host([alignment=center]) .button{justify-content:center}:host([alignment=end]) .button{justify-content:flex-end}:host([alignment=center]) .button .text-container--visible,:host([alignment=end]) .button .text-container--visible{flex:0 1 auto}:host([scale=s][compact]) .button,:host([scale=m][compact]) .button,:host([scale=l][compact]) .button{padding-inline:0px}.slot-container{display:flex}.slot-container--hidden{display:none}.button--text-visible{inline-size:100%}.indicator-with-icon{position:relative}.indicator-with-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-without-icon{margin-inline:0.25rem;inline-size:1rem;position:relative}.indicator-without-icon::after{content:"";position:absolute;block-size:0.5rem;inline-size:0.5rem;border-radius:9999px;inset-block-end:-0.275rem;inset-inline-end:-0.275rem;background-color:var(--calcite-action-indicator-color, var(--calcite-color-brand))}.indicator-text{position:absolute;inline-size:1px;block-size:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) .button,:host([disabled]) .button:hover,:host([disabled]) .button:focus{cursor:default;background-color:var(--calcite-color-foreground-1);opacity:var(--calcite-opacity-disabled)}:host([disabled]):host([active]) .button,:host([disabled]):host([active]) .button:hover,:host([disabled]):host([active]) .button:focus{background-color:var(--calcite-color-foreground-3);opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}`,G=B,f=k(class extends w{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.mutationObserver=W("mutation",()=>z(this)),this.guid=`calcite-action-${I()}`,this.indicatorId=`${this.guid}-indicator`,this.buttonId=`${this.guid}-button`,this.handleTooltipSlotChange=t=>{const i=t.target.assignedElements({flatten:!0}).filter(a=>a?.matches("calcite-tooltip"))[0];i&&(i.referenceElement=this.buttonEl)},this.active=!1,this.alignment=void 0,this.appearance="solid",this.compact=!1,this.disabled=!1,this.icon=void 0,this.iconFlipRtl=!1,this.indicator=!1,this.label=void 0,this.loading=!1,this.scale="m",this.text=void 0,this.textEnabled=!1,this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale="",this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){H(this,this.effectiveLocale)}connectedCallback(){M(this),S(this),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0})}async componentWillLoad(){O(this),C()&&await V(this)}componentDidLoad(){$(this)}disconnectedCallback(){R(this),_(this),this.mutationObserver?.disconnect()}componentDidRender(){L(this)}async setFocus(){await F(this),this.buttonEl?.focus()}renderTextContainer(){const{text:t,textEnabled:i}=this,a={[o.textContainer]:!0,[o.textContainerVisible]:i};return t?e("div",{class:a,key:"text-container"},t):null}renderIndicatorText(){const{indicator:t,messages:i,indicatorId:a,buttonId:n}=this;return e("div",{"aria-labelledby":n,"aria-live":"polite",class:o.indicatorText,id:a,role:"region"},t?i.indicator:null)}renderIconContainer(){const{loading:t,icon:i,scale:a,el:n,iconFlipRtl:s,indicator:l}=this,d=a==="l"?"l":"m",u=t?e("calcite-loader",{inline:!0,label:this.messages.loading,scale:d}):null,c=i?e("calcite-icon",{class:{[o.indicatorWithIcon]:l},flipRtl:s,icon:i,scale:j(this.scale)}):null,r=u||c,b=r||n.children?.length,h=e("div",{class:{[o.slotContainer]:!0,[o.slotContainerHidden]:t}},e("slot",null));return b?e("div",{"aria-hidden":"true",class:o.iconContainer,key:"icon-container"},r,h):null}render(){const{active:t,compact:i,disabled:a,icon:n,loading:s,textEnabled:l,label:d,text:u,indicator:c,indicatorId:r,buttonId:b,messages:h}=this,p=d||u,g=p?`${p}${c?` (${h.indicator})`:""}`:"",x={[o.button]:!0,[o.buttonTextVisible]:l,[o.buttonCompact]:i};return e(E,{key:"3b459307dcb6f8d373e70cd5c7a45d122565a70e"},e(T,{key:"3a81f1fb62a66f1dbd608f095ed90f2d47a9daf6",disabled:a},e("button",{key:"bb5249babc116d462becd6b9a056ca0d368c6e09","aria-busy":v(s),"aria-controls":c?r:null,"aria-label":g,"aria-pressed":v(t),class:x,disabled:a,id:b,ref:y=>this.buttonEl=y},this.renderIconContainer(),this.renderTextContainer(),!n&&c&&e("div",{class:o.indicatorWithoutIcon,key:"indicator-no-icon"})),e("slot",{key:"983989711d64076eca866c1928f9c777331fcba4",name:q.tooltip,onSlotchange:this.handleTooltipSlotChange}),this.renderIndicatorText()))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return G}},[1,"calcite-action",{active:[516],alignment:[513],appearance:[513],compact:[516],disabled:[516],icon:[1],iconFlipRtl:[516,"icon-flip-rtl"],indicator:[516],label:[1],loading:[516],scale:[513],text:[1],textEnabled:[516,"text-enabled"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function m(){typeof customElements>"u"||["calcite-action","calcite-icon","calcite-loader"].forEach(t=>{switch(t){case"calcite-action":customElements.get(t)||customElements.define(t,f);break;case"calcite-icon":customElements.get(t)||D();break;case"calcite-loader":customElements.get(t)||A();break}})}m();export{f as A,m as d};
