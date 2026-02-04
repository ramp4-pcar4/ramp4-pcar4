import { cD as n, cF as I, cG as w, cH as C, jz as S, eH as g } from "./main-BpIyUAdL.js";
import { o as v, g as D, a as z, v as B } from "./dom-DkH2gtZS.js";
import { s as N, c as F, i as E, d as M, H as P } from "./form-CWH6F2JC.js";
import { c as A, d as K, u as U, I as j } from "./interactive-DvjzvdHh.js";
import { n as d, i as p, p as W, e as R, f as q, u as _, c as $, a as G, d as Y, b as Z, s as J, B as Q, g as X } from "./t9n-DZy8an7K.js";
import { c as ee, d as te, g as V } from "./label2-BYoLwK6t.js";
import { s as ie, a as ne, c as ae } from "./loadable-mV3e0zNp.js";
import { c as se } from "./observers-BKbzQbLw.js";
import { g as f } from "./component-CWGf1hug.js";
import { d as L } from "./icon-vgnKLT3A.js";
const re = {
  validationContainer: "validation-container"
}, oe = ({ scale: s, status: e, icon: t, message: i }) => n(
  "div",
  { class: re.validationContainer },
  n("calcite-input-message", { icon: t, scale: s, status: e }, i)
);
const le = ["date", "datetime-local", "month", "number", "range", "time", "week"], ce = ["email", "password", "search", "tel", "text", "url"], ue = ["email", "password", "search", "tel", "text", "textarea", "url"];
function m(s, e, t, i) {
  const o = t.toLowerCase(), a = s[t];
  i && a != null ? e.setAttribute(o, `${a}`) : e.removeAttribute(o);
}
function de(s, e, t) {
  t.type = s === "textarea" ? "text" : s;
  const i = le.includes(s), o = e;
  m(o, t, "min", i), m(o, t, "max", i), m(o, t, "step", i);
  const a = ue.includes(s), l = e;
  m(l, t, "minLength", a), m(l, t, "maxLength", a);
  const u = ce.includes(s);
  m(l, t, "pattern", u);
}
var y;
(function(s) {
  s.valid = "check-circle", s.invalid = "exclamation-mark-triangle", s.idle = "information";
})(y || (y = {}));
const he = ":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}", pe = /* @__PURE__ */ I(class extends w {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.icon = void 0, this.iconFlipRtl = !1, this.scale = "m", this.status = "idle";
  }
  handleIconEl() {
    this.requestedIcon = v(y, this.icon, this.status);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    this.requestedIcon = v(y, this.icon, this.status);
  }
  render() {
    const e = this.el.hidden;
    return n(C, { "calcite-hydrated-hidden": e }, this.renderIcon(this.requestedIcon), n("slot", null));
  }
  //--------------------------------------------------------------------------
  //
  //  Private Methods
  //
  //--------------------------------------------------------------------------
  renderIcon(e) {
    if (e)
      return n("calcite-icon", { class: "calcite-input-message-icon", flipRtl: this.iconFlipRtl, icon: e, scale: "s" });
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      status: ["handleIconEl"],
      icon: ["handleIconEl"]
    };
  }
  static get style() {
    return he;
  }
}, [1, "calcite-input-message", {
  icon: [520],
  iconFlipRtl: [516, "icon-flip-rtl"],
  scale: [513],
  status: [513]
}, void 0, {
  status: ["handleIconEl"],
  icon: ["handleIconEl"]
}]);
function T() {
  if (typeof customElements > "u")
    return;
  ["calcite-input-message", "calcite-icon"].forEach((e) => {
    switch (e) {
      case "calcite-input-message":
        customElements.get(e) || customElements.define(e, pe);
        break;
      case "calcite-icon":
        customElements.get(e) || L();
        break;
    }
  });
}
T();
const me = ":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background:var(--calcite-color-border-3)}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-color-brand)}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}", be = /* @__PURE__ */ I(class extends w {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.type = "determinate", this.value = 0, this.label = void 0, this.text = void 0, this.reversed = !1;
  }
  render() {
    const t = this.type === "determinate" ? { width: `${this.value * 100}%` } : {}, i = D(this.el);
    return n("div", { "aria-label": this.label || this.text, "aria-valuemax": 1, "aria-valuemin": 0, "aria-valuenow": this.value, role: "progressbar" }, n("div", { class: "track" }, n("div", { class: {
      bar: !0,
      indeterminate: this.type === "indeterminate",
      [S.rtl]: i === "rtl",
      reversed: this.reversed
    }, style: t })), this.text ? n("div", { class: "text" }, this.text) : null);
  }
  get el() {
    return this;
  }
  static get style() {
    return me;
  }
}, [1, "calcite-progress", {
  type: [513],
  value: [2],
  label: [1],
  text: [1],
  reversed: [516]
}]);
function O() {
  if (typeof customElements > "u")
    return;
  ["calcite-progress"].forEach((e) => {
    switch (e) {
      case "calcite-progress":
        customElements.get(e) || customElements.define(e, be);
        break;
    }
  });
}
O();
const r = {
  loader: "loader",
  clearButton: "clear-button",
  editingEnabled: "editing-enabled",
  inlineChild: "inline-child",
  inputIcon: "icon",
  prefix: "prefix",
  suffix: "suffix",
  numberButtonWrapper: "number-button-wrapper",
  buttonItemHorizontal: "number-button-item--horizontal",
  wrapper: "element-wrapper",
  inputWrapper: "wrapper",
  actionWrapper: "action-wrapper",
  resizeIconWrapper: "resize-icon-wrapper",
  numberButtonItem: "number-button-item"
}, H = {
  tel: "phone",
  password: "lock",
  email: "email-address",
  date: "calendar",
  time: "clock",
  search: "search"
}, fe = {
  action: "action"
}, ge = `:host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}`, ve = /* @__PURE__ */ I(class extends w {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteInternalInputFocus = g(this, "calciteInternalInputFocus", 6), this.calciteInternalInputBlur = g(this, "calciteInternalInputBlur", 6), this.calciteInputInput = g(this, "calciteInputInput", 7), this.calciteInputChange = g(this, "calciteInputChange", 6), this.childElType = "input", this.previousValueOrigin = "initial", this.mutationObserver = se("mutation", () => this.setDisabledAction()), this.userChangedValue = !1, this.keyDownHandler = (e) => {
      this.readOnly || this.disabled || (this.isClearable && e.key === "Escape" && (this.clearInputValue(e), e.preventDefault()), e.key === "Enter" && !e.defaultPrevented && N(this) && e.preventDefault());
    }, this.clearInputValue = (e) => {
      this.setValue({
        committing: !0,
        nativeEvent: e,
        origin: "user",
        value: ""
      });
    }, this.emitChangeIfUserModified = () => {
      this.previousValueOrigin === "user" && this.value !== this.previousEmittedValue && (this.calciteInputChange.emit(), this.setPreviousEmittedValue(this.value));
    }, this.inputBlurHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId), this.calciteInternalInputBlur.emit(), this.emitChangeIfUserModified();
    }, this.clickHandler = (e) => {
      if (this.disabled)
        return;
      const t = z(this.el, "action");
      e.target !== t && this.setFocus();
    }, this.inputFocusHandler = () => {
      this.calciteInternalInputFocus.emit();
    }, this.inputChangeHandler = () => {
      this.type === "file" && (this.files = this.childEl.files);
    }, this.inputInputHandler = (e) => {
      this.disabled || this.readOnly || this.setValue({
        nativeEvent: e,
        origin: "user",
        value: e.target.value
      });
    }, this.inputKeyDownHandler = (e) => {
      this.disabled || this.readOnly || e.key === "Enter" && this.emitChangeIfUserModified();
    }, this.inputNumberInputHandler = (e) => {
      if (this.disabled || this.readOnly || this.value === "Infinity" || this.value === "-Infinity")
        return;
      const t = e.target.value;
      d.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      };
      const i = d.delocalize(t);
      e.inputType === "insertFromPaste" ? (p(i) || e.preventDefault(), this.setValue({
        nativeEvent: e,
        origin: "user",
        value: W(i)
      }), this.childNumberEl.value = this.displayedValue) : this.setValue({
        nativeEvent: e,
        origin: "user",
        value: i
      });
    }, this.inputNumberKeyDownHandler = (e) => {
      if (this.type !== "number" || this.disabled || this.readOnly)
        return;
      if (this.value === "Infinity" || this.value === "-Infinity") {
        e.preventDefault(), (e.key === "Backspace" || e.key === "Delete") && this.clearInputValue(e);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault(), this.nudgeNumberValue("up", e);
        return;
      }
      if (e.key === "ArrowDown") {
        this.nudgeNumberValue("down", e);
        return;
      }
      const t = [
        ...X,
        "ArrowLeft",
        "ArrowRight",
        "Backspace",
        "Delete",
        "Enter",
        "Escape",
        "Tab"
      ];
      if (e.altKey || e.ctrlKey || e.metaKey)
        return;
      const i = e.shiftKey && e.key === "Tab";
      if (t.includes(e.key) || i) {
        e.key === "Enter" && this.emitChangeIfUserModified();
        return;
      }
      d.numberFormatOptions = {
        locale: this.effectiveLocale,
        numberingSystem: this.numberingSystem,
        useGrouping: this.groupSeparator
      }, !(e.key === d.decimal && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.indexOf(d.decimal) === -1)) && (/[eE]/.test(e.key) && (!this.value && !this.childNumberEl.value || this.value && !/[eE]/.test(this.childNumberEl.value)) || e.key === "-" && (!this.value && !this.childNumberEl.value || this.value && this.childNumberEl.value.split("-").length <= 2) || e.preventDefault());
    }, this.nudgeNumberValue = (e, t) => {
      if (t instanceof KeyboardEvent && t.repeat || this.type !== "number")
        return;
      const i = this.maxString ? parseFloat(this.maxString) : null, o = this.minString ? parseFloat(this.minString) : null, a = 150;
      this.incrementOrDecrementNumberValue(e, i, o, t), this.nudgeNumberValueIntervalId && window.clearInterval(this.nudgeNumberValueIntervalId);
      let l = !0;
      this.nudgeNumberValueIntervalId = window.setInterval(() => {
        if (l) {
          l = !1;
          return;
        }
        this.incrementOrDecrementNumberValue(e, i, o, t);
      }, a);
    }, this.numberButtonPointerUpAndOutHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }, this.numberButtonPointerDownHandler = (e) => {
      if (!B(e))
        return;
      e.preventDefault();
      const t = e.target.dataset.adjustment;
      this.disabled || this.nudgeNumberValue(t, e);
    }, this.onHiddenFormInputInput = (e) => {
      e.target.name === this.name && this.setValue({
        value: e.target.value,
        origin: "direct"
      }), this.setFocus(), e.stopPropagation();
    }, this.setChildElRef = (e) => {
      this.childEl = e;
    }, this.setChildNumberElRef = (e) => {
      this.childNumberEl = e;
    }, this.setInputValue = (e) => {
      this.type === "text" && !this.childEl || this.type === "number" && !this.childNumberEl || (this[`child${this.type === "number" ? "Number" : ""}El`].value = e);
    }, this.setPreviousEmittedValue = (e) => {
      this.previousEmittedValue = this.normalizeValue(e);
    }, this.setPreviousValue = (e) => {
      this.previousValue = this.normalizeValue(e);
    }, this.setValue = ({ committing: e = !1, nativeEvent: t, origin: i, previousValue: o, value: a }) => {
      if (this.setPreviousValue(o ?? this.value), this.previousValueOrigin = i, this.type === "number") {
        d.numberFormatOptions = {
          locale: this.effectiveLocale,
          numberingSystem: this.numberingSystem,
          useGrouping: this.groupSeparator,
          signDisplay: "never"
        };
        const l = this.previousValue?.length > a.length || this.value?.length > a.length, u = a.charAt(a.length - 1) === ".", b = u && l ? a : R(a), c = a && !b ? p(this.previousValue) ? this.previousValue : "" : b;
        let h = d.localize(c);
        i !== "connected" && !u && (h = q(h, c, d)), this.displayedValue = u && l ? `${h}${d.decimal}` : h, this.userChangedValue = i === "user" && this.value !== c, this.value = ["-", "."].includes(c) ? "" : c;
      } else
        this.userChangedValue = i === "user" && this.value !== a, this.value = a;
      i === "direct" && (this.setInputValue(a), this.previousEmittedValue = a), t && (this.calciteInputInput.emit().defaultPrevented ? (this.value = this.previousValue, this.displayedValue = this.type === "number" ? d.localize(this.previousValue) : this.previousValue) : e && this.emitChangeIfUserModified());
    }, this.inputKeyUpHandler = () => {
      window.clearInterval(this.nudgeNumberValueIntervalId);
    }, this.alignment = "start", this.autofocus = !1, this.clearable = !1, this.disabled = !1, this.form = void 0, this.groupSeparator = !1, this.icon = void 0, this.iconFlipRtl = !1, this.label = void 0, this.loading = !1, this.numberingSystem = void 0, this.localeFormat = !1, this.max = void 0, this.min = void 0, this.maxLength = void 0, this.minLength = void 0, this.validationMessage = void 0, this.validationIcon = void 0, this.name = void 0, this.numberButtonType = "vertical", this.placeholder = void 0, this.prefixText = void 0, this.readOnly = !1, this.required = !1, this.scale = "m", this.status = "idle", this.step = void 0, this.autocomplete = void 0, this.pattern = void 0, this.accept = void 0, this.multiple = !1, this.inputMode = "text", this.enterKeyHint = void 0, this.suffixText = void 0, this.editingEnabled = !1, this.type = "text", this.value = "", this.files = void 0, this.messages = void 0, this.messageOverrides = void 0, this.defaultMessages = void 0, this.effectiveLocale = "", this.displayedValue = void 0, this.slottedActionElDisabledInternally = !1;
  }
  disabledWatcher() {
    this.setDisabledAction();
  }
  /** watcher to update number-to-string for max */
  maxWatcher() {
    this.maxString = this.max?.toString() || null;
  }
  /** watcher to update number-to-string for min */
  minWatcher() {
    this.minString = this.min?.toString() || null;
  }
  onMessagesChange() {
  }
  valueWatcher(e, t) {
    if (!this.userChangedValue) {
      if (this.type === "number" && (e === "Infinity" || e === "-Infinity")) {
        this.displayedValue = e, this.previousEmittedValue = e;
        return;
      }
      this.setValue({
        origin: "direct",
        previousValue: t,
        value: e == null || e == "" ? "" : this.type === "number" ? p(e) ? e : this.previousValue || "" : e
      }), this.warnAboutInvalidNumberValue(e);
    }
    this.userChangedValue = !1;
  }
  updateRequestedIcon() {
    this.requestedIcon = v(H, this.icon, this.type);
  }
  get isClearable() {
    return !this.isTextarea && (this.clearable || this.type === "search") && this.value?.length > 0;
  }
  get isTextarea() {
    return this.childElType === "textarea";
  }
  effectiveLocaleChange() {
    _(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  connectedCallback() {
    A(this), $(this), G(this), this.inlineEditableEl = this.el.closest("calcite-inline-editable"), this.inlineEditableEl && (this.editingEnabled = this.inlineEditableEl.editingEnabled || !1), ee(this), F(this), this.setPreviousEmittedValue(this.value), this.setPreviousValue(this.value), this.type === "number" && (this.value === "Infinity" || this.value === "-Infinity" ? (this.displayedValue = this.value, this.previousEmittedValue = this.value) : (this.warnAboutInvalidNumberValue(this.value), this.setValue({
      origin: "connected",
      value: p(this.value) ? this.value : ""
    }))), this.mutationObserver?.observe(this.el, { childList: !0 }), this.setDisabledAction(), this.el.addEventListener(E, this.onHiddenFormInputInput);
  }
  disconnectedCallback() {
    K(this), te(this), M(this), Y(this), Z(this), this.mutationObserver?.disconnect(), this.el.removeEventListener(E, this.onHiddenFormInputInput);
  }
  async componentWillLoad() {
    ie(this), this.childElType = this.type === "textarea" ? "textarea" : "input", this.maxString = this.max?.toString(), this.minString = this.min?.toString(), this.requestedIcon = v(H, this.icon, this.type), await J(this);
  }
  componentDidLoad() {
    ne(this);
  }
  componentShouldUpdate(e, t, i) {
    return this.type === "number" && i === "value" && e && !p(e) ? (this.setValue({
      origin: "reset",
      value: t
    }), !1) : !0;
  }
  componentDidRender() {
    U(this);
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /** Sets focus on the component. */
  async setFocus() {
    await ae(this), this.type === "number" ? this.childNumberEl?.focus() : this.childEl?.focus();
  }
  /** Selects the text of the component's `value`. */
  async selectText() {
    this.type === "number" ? this.childNumberEl?.select() : this.childEl?.select();
  }
  onLabelClick() {
    this.setFocus();
  }
  incrementOrDecrementNumberValue(e, t, i, o) {
    const { value: a } = this;
    if (a === "Infinity" || a === "-Infinity")
      return;
    const l = e === "up" ? 1 : -1, u = this.step === "any" ? 1 : Math.abs(this.step || 1), c = new Q(a !== "" ? a : "0").add(`${u * l}`), h = () => typeof i == "number" && !isNaN(i) && c.subtract(`${i}`).isNegative, x = () => typeof t == "number" && !isNaN(t) && !c.subtract(`${t}`).isNegative, k = h() ? `${i}` : x() ? `${t}` : c.toString();
    this.setValue({
      committing: !0,
      nativeEvent: o,
      origin: "user",
      value: k
    });
  }
  syncHiddenFormInput(e) {
    de(this.type, this, e);
  }
  setDisabledAction() {
    const e = z(this.el, "action");
    e && (this.disabled ? (e.getAttribute("disabled") == null && (this.slottedActionElDisabledInternally = !0), e.setAttribute("disabled", "")) : this.slottedActionElDisabledInternally && (e.removeAttribute("disabled"), this.slottedActionElDisabledInternally = !1));
  }
  normalizeValue(e) {
    return this.type === "number" ? p(e) ? e : "" : e;
  }
  warnAboutInvalidNumberValue(e) {
    this.type === "number" && e && !p(e) && console.warn(`The specified value "${e}" cannot be parsed, or is out of range.`);
  }
  // --------------------------------------------------------------------------
  //
  //  Render Methods
  //
  // --------------------------------------------------------------------------
  render() {
    const e = D(this.el), t = n("div", { class: r.loader }, n("calcite-progress", { label: this.messages.loading, type: "indeterminate" })), i = n("button", { "aria-label": this.messages.clear, class: r.clearButton, disabled: this.disabled || this.readOnly, onClick: this.clearInputValue, tabIndex: -1, type: "button" }, n("calcite-icon", { icon: "x", scale: f(this.scale) })), o = n("calcite-icon", { class: r.inputIcon, flipRtl: this.iconFlipRtl, icon: this.requestedIcon, scale: f(this.scale) }), a = this.numberButtonType === "horizontal", l = n("button", { "aria-hidden": "true", class: {
      [r.numberButtonItem]: !0,
      [r.buttonItemHorizontal]: a
    }, "data-adjustment": "up", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, n("calcite-icon", { icon: "chevron-up", scale: f(this.scale) })), u = n("button", { "aria-hidden": "true", class: {
      [r.numberButtonItem]: !0,
      [r.buttonItemHorizontal]: a
    }, "data-adjustment": "down", disabled: this.disabled || this.readOnly, onPointerDown: this.numberButtonPointerDownHandler, onPointerOut: this.numberButtonPointerUpAndOutHandler, onPointerUp: this.numberButtonPointerUpAndOutHandler, tabIndex: -1, type: "button" }, n("calcite-icon", { icon: "chevron-down", scale: f(this.scale) })), b = n("div", { class: r.numberButtonWrapper }, l, u), c = n("div", { class: r.prefix }, this.prefixText), h = n("div", { class: r.suffix }, this.suffixText), x = this.type === "number" ? n("input", {
      accept: this.accept,
      "aria-label": V(this),
      autocomplete: this.autocomplete,
      autofocus: this.autofocus ? !0 : null,
      defaultValue: this.defaultValue,
      disabled: this.disabled ? !0 : null,
      enterKeyHint: this.enterKeyHint,
      inputMode: this.inputMode,
      key: "localized-input",
      maxLength: this.maxLength,
      minLength: this.minLength,
      multiple: this.multiple,
      name: void 0,
      onBlur: this.inputBlurHandler,
      onFocus: this.inputFocusHandler,
      onInput: this.inputNumberInputHandler,
      onKeyDown: this.inputNumberKeyDownHandler,
      onKeyUp: this.inputKeyUpHandler,
      pattern: this.pattern,
      placeholder: this.placeholder || "",
      readOnly: this.readOnly,
      type: "text",
      value: this.displayedValue,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setChildNumberElRef
    }) : null, k = this.type !== "number" ? [
      n(this.childElType, {
        accept: this.accept,
        "aria-label": V(this),
        autocomplete: this.autocomplete,
        autofocus: this.autofocus ? !0 : null,
        class: {
          [r.editingEnabled]: this.editingEnabled,
          [r.inlineChild]: !!this.inlineEditableEl
        },
        defaultValue: this.defaultValue,
        disabled: this.disabled ? !0 : null,
        enterKeyHint: this.enterKeyHint,
        inputMode: this.inputMode,
        max: this.maxString,
        maxLength: this.maxLength,
        min: this.minString,
        minLength: this.minLength,
        multiple: this.multiple,
        name: this.name,
        onBlur: this.inputBlurHandler,
        onChange: this.inputChangeHandler,
        onFocus: this.inputFocusHandler,
        onInput: this.inputInputHandler,
        onKeyDown: this.inputKeyDownHandler,
        onKeyUp: this.inputKeyUpHandler,
        pattern: this.pattern,
        placeholder: this.placeholder || "",
        readOnly: this.readOnly,
        required: this.required ? !0 : null,
        step: this.step,
        tabIndex: this.disabled || this.inlineEditableEl && !this.editingEnabled ? -1 : null,
        type: this.type,
        value: this.value,
        // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
        ref: this.setChildElRef
      }),
      this.isTextarea ? n("div", { class: r.resizeIconWrapper }, n("calcite-icon", { icon: "chevron-down", scale: f(this.scale) })) : null
    ] : null;
    return n(C, { onClick: this.clickHandler, onKeyDown: this.keyDownHandler }, n(j, { disabled: this.disabled }, n("div", { class: { [r.inputWrapper]: !0, [S.rtl]: e === "rtl" } }, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? u : null, this.prefixText ? c : null, n("div", { class: r.wrapper }, x, k, this.isClearable ? i : null, this.requestedIcon ? o : null, this.loading ? t : null), n("div", { class: r.actionWrapper }, n("slot", { name: fe.action })), this.type === "number" && this.numberButtonType === "vertical" && !this.readOnly ? b : null, this.suffixText ? h : null, this.type === "number" && this.numberButtonType === "horizontal" && !this.readOnly ? l : null, n(P, { component: this })), this.validationMessage && this.status === "invalid" ? n(oe, { icon: this.validationIcon, message: this.validationMessage, scale: this.scale, status: this.status }) : null));
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      disabled: ["disabledWatcher"],
      max: ["maxWatcher"],
      min: ["minWatcher"],
      messageOverrides: ["onMessagesChange"],
      value: ["valueWatcher"],
      icon: ["updateRequestedIcon"],
      type: ["updateRequestedIcon"],
      effectiveLocale: ["effectiveLocaleChange"]
    };
  }
  static get style() {
    return ge;
  }
}, [1, "calcite-input", {
  alignment: [513],
  autofocus: [516],
  clearable: [516],
  disabled: [516],
  form: [513],
  groupSeparator: [516, "group-separator"],
  icon: [520],
  iconFlipRtl: [516, "icon-flip-rtl"],
  label: [1],
  loading: [516],
  numberingSystem: [513, "numbering-system"],
  localeFormat: [4, "locale-format"],
  max: [514],
  min: [514],
  maxLength: [514, "max-length"],
  minLength: [514, "min-length"],
  validationMessage: [1, "validation-message"],
  validationIcon: [520, "validation-icon"],
  name: [513],
  numberButtonType: [513, "number-button-type"],
  placeholder: [1],
  prefixText: [1, "prefix-text"],
  readOnly: [516, "read-only"],
  required: [516],
  scale: [513],
  status: [513],
  step: [520],
  autocomplete: [1],
  pattern: [1],
  accept: [1],
  multiple: [4],
  inputMode: [1, "input-mode"],
  enterKeyHint: [1, "enter-key-hint"],
  suffixText: [1, "suffix-text"],
  editingEnabled: [1540, "editing-enabled"],
  type: [513],
  value: [1025],
  files: [16],
  messages: [1040],
  messageOverrides: [1040],
  defaultMessages: [32],
  effectiveLocale: [32],
  displayedValue: [32],
  slottedActionElDisabledInternally: [32],
  setFocus: [64],
  selectText: [64]
}, void 0, {
  disabled: ["disabledWatcher"],
  max: ["maxWatcher"],
  min: ["minWatcher"],
  messageOverrides: ["onMessagesChange"],
  value: ["valueWatcher"],
  icon: ["updateRequestedIcon"],
  type: ["updateRequestedIcon"],
  effectiveLocale: ["effectiveLocaleChange"]
}]);
function ye() {
  if (typeof customElements > "u")
    return;
  ["calcite-input", "calcite-icon", "calcite-input-message", "calcite-progress"].forEach((e) => {
    switch (e) {
      case "calcite-input":
        customElements.get(e) || customElements.define(e, ve);
        break;
      case "calcite-icon":
        customElements.get(e) || L();
        break;
      case "calcite-input-message":
        customElements.get(e) || T();
        break;
      case "calcite-progress":
        customElements.get(e) || O();
        break;
    }
  });
}
ye();
export {
  ve as I,
  O as a,
  T as b,
  ye as d
};
//# sourceMappingURL=input2-DrUNAMIG.js.map
