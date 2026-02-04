import { cF as g, cG as v, eH as a, cD as o, cH as x } from "./main-3gzXighg.js";
import { c as k, d as y } from "./conditionalSlot-CJ4XoAWj.js";
import { a as s, s as c, f as w, e as d } from "./dom-DkH2gtZS.js";
import { d as l, a as h, c as z, u as C } from "./focusTrapComponent-BH_rQxeR.js";
import { s as O, a as E, c as M } from "./loadable-72a05l4A.js";
import { c as m } from "./observers-U5l2-sbJ.js";
import { o as T } from "./openCloseComponent-sfPNC2kh.js";
import { s as S, c as F, a as B, d as L, b as D, u as I } from "./t9n-Bmc-S3O4.js";
import { g as $, c as H } from "./component-CWGf1hug.js";
import { d as V } from "./icon-BG2DgcVx.js";
import { d as W } from "./loader-D7hBe6l4.js";
import { d as A } from "./scrim-D8zXRurw.js";
const t = {
  modal: "modal",
  title: "title",
  header: "header",
  footer: "footer",
  scrim: "scrim",
  back: "back",
  close: "close",
  secondary: "secondary",
  primary: "primary",
  container: "container",
  containerOpen: "container--open",
  content: "content",
  contentNoFooter: "content--no-footer",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  slottedInShell: "slotted-in-shell",
  // these classes help apply the animation in phases to only set transform on open/close
  // this helps avoid a positioning issue for any floating-ui-owning children
  openingIdle: "modal--opening-idle",
  openingActive: "modal--opening-active",
  closingIdle: "modal--closing-idle",
  closingActive: "modal--closing-active"
}, P = {
  close: "x"
}, i = {
  content: "content",
  contentBottom: "content-bottom",
  contentTop: "content-top",
  header: "header",
  back: "back",
  secondary: "secondary",
  primary: "primary"
}, _ = `:host{--calcite-modal-scrim-background:rgba(0, 0, 0, 0.85);position:absolute;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-scrim-background-internal:rgba(0, 0, 0, 0.85)}.content-top[hidden],.content-bottom[hidden]{display:none}.container{position:fixed;inset:0px;z-index:var(--calcite-z-index-overlay);display:flex;align-items:center;justify-content:center;overflow-y:hidden;color:var(--calcite-color-text-2);opacity:0;visibility:hidden !important;transition:visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88)}:host([scale=s]){--calcite-modal-padding-internal:0.75rem;--calcite-modal-padding-large-internal:1rem;--calcite-modal-title-text-internal:var(--calcite-font-size-1);--calcite-modal-content-text-internal:var(--calcite-font-size--1)}:host([scale=m]){--calcite-modal-padding-internal:1rem;--calcite-modal-padding-large-internal:1.25rem;--calcite-modal-title-text-internal:var(--calcite-font-size-2);--calcite-modal-content-text-internal:var(--calcite-font-size-0)}:host([scale=l]){--calcite-modal-padding-internal:1.25rem;--calcite-modal-padding-large-internal:1.5rem;--calcite-modal-title-text-internal:var(--calcite-font-size-3);--calcite-modal-content-text-internal:var(--calcite-font-size-1)}.scrim{--calcite-scrim-background:var(--calcite-modal-scrim-background, var(--calcite-color-transparent-scrim));position:fixed;inset:0px;display:flex;overflow-y:hidden}.modal{pointer-events:none;z-index:var(--calcite-z-index-modal);float:none;margin:1.5rem;box-sizing:border-box;display:flex;inline-size:100%;flex-direction:column;overflow:hidden;border-radius:0.25rem;background-color:var(--calcite-color-foreground-1);opacity:0;--tw-shadow:0 2px 12px -4px rgba(0, 0, 0, 0.2), 0 2px 4px -2px rgba(0, 0, 0, 0.16);--tw-shadow-colored:0 2px 12px -4px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);-webkit-overflow-scrolling:touch;visibility:hidden;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear var(--calcite-internal-animation-timing-slow), opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);--calcite-modal-hidden-position:translate3d(0, 20px, 0);--calcite-modal-shown-position:translate3d(0, 0, 0)}.modal--opening-idle{transform:var(--calcite-modal-hidden-position)}.modal--opening-active{transform:var(--calcite-modal-shown-position)}.modal--closing-idle{transform:var(--calcite-modal-shown-position)}.modal--closing-active{transform:var(--calcite-modal-hidden-position)}:host([opened]){opacity:1;visibility:visible !important;transition-delay:0ms}.container--open{opacity:1;visibility:visible !important;transition-delay:0ms}.container--open .modal{pointer-events:auto;visibility:visible;opacity:1;transition:transform var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), visibility 0ms linear, opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-inline-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), max-block-size var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88);transition-delay:0ms}.header{z-index:var(--calcite-z-index-header);display:flex;min-inline-size:0px;max-inline-size:100%;border-start-start-radius:0.25rem;border-start-end-radius:0.25rem;border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto}.close{order:2;margin:0px;cursor:pointer;appearance:none;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline-color:transparent;transition:all var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-internal);flex:0 0 auto}.close calcite-icon{pointer-events:none;vertical-align:-2px}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}.close:hover,.close:focus,.close:active{background-color:var(--calcite-color-foreground-2);color:var(--calcite-color-text-1)}.title{order:1;display:flex;min-inline-size:0px;align-items:center;flex:1 1 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}slot[name=header]::slotted(*),*::slotted([slot=header]){margin:0px;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1);font-size:var(--calcite-modal-title-text-internal)}.content{position:relative;box-sizing:border-box;display:block;block-size:100%;overflow:auto;padding:0px;background-color:var(--calcite-modal-content-background, var(--calcite-color-foreground-1));max-block-size:100%;padding:var(--calcite-modal-content-padding, var(--calcite-modal-padding-internal))}.content-top,.content-bottom{z-index:var(--calcite-z-index-header);display:flex;border-width:0px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding:var(--calcite-modal-padding-internal)}.content-top{min-inline-size:0px;max-inline-size:100%;border-block-end-width:1px}.content-bottom{margin-block-start:auto;box-sizing:border-box;inline-size:100%;justify-content:space-between;border-block-start-width:1px}.content-top:not(.header~.content-top){border-start-start-radius:0.25rem;border-start-end-radius:0.25rem}.content-bottom:not(.content-bottom~.footer),.content--no-footer{border-end-end-radius:0.25rem;border-end-start-radius:0.25rem}slot[name=content]::slotted(*),*::slotted([slot=content]){font-size:var(--calcite-modal-context-text-internal)}.footer{z-index:var(--calcite-z-index-header);margin-block-start:auto;box-sizing:border-box;display:flex;inline-size:100%;justify-content:space-between;border-end-end-radius:0.25rem;border-end-start-radius:0.25rem;border-width:0px;border-block-start-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);background-color:var(--calcite-color-foreground-1);flex:0 0 auto;padding-block:var(--calcite-modal-padding-internal);padding-inline:var(--calcite-modal-padding-large-internal)}.footer--hide-back .back,.footer--hide-secondary .secondary{display:none}.back{display:block;margin-inline-end:auto}.secondary{margin-inline:0.25rem;display:block}slot[name=primary]{display:block}:host([width=small]) .modal{inline-size:auto}:host([width-scale=s]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 32rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 35rem){:host([width-scale=s]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=s]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=s][docked]) .container{align-items:flex-end}}:host([width-scale=m]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 48rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 51rem){:host([width-scale=m]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=m]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=m][docked]) .container{align-items:flex-end}}:host([width-scale=l]) .modal{max-block-size:100%;max-inline-size:100%;inline-size:var(--calcite-modal-width, 94rem);block-size:var(--calcite-modal-height, auto)}@media screen and (max-width: 97rem){:host([width-scale=l]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%}:host([width-scale=l]) .content{flex:1 1 auto;max-block-size:unset}:host([width-scale=l][docked]) .container{align-items:flex-end}}:host([fullscreen]) .modal{margin:0px;block-size:100%;max-block-size:100%;inline-size:100%;max-inline-size:100%;border-radius:0px;--calcite-modal-hidden-position:translate3D(0, 20px, 0) scale(0.95);--calcite-modal-shown-position:translate3D(0, 0, 0) scale(1)}:host([fullscreen]) .content{max-block-size:100%;flex:1 1 auto}:host([opened][fullscreen]) .header,:host([opened][fullscreen]) .footer,:host([opened][fullscreen]) .content-top,:host([opened][fullscreen]) .content-bottom{border-radius:0}:host([docked]) .modal{block-size:var(--calcite-modal-height, auto)}:host([docked]) .content{block-size:auto;flex:1 1 auto}:host([kind=brand]) .modal{border-color:var(--calcite-color-brand)}:host([kind=danger]) .modal{border-color:var(--calcite-color-status-danger)}:host([kind=info]) .modal{border-color:var(--calcite-color-status-info)}:host([kind=success]) .modal{border-color:var(--calcite-color-status-success)}:host([kind=warning]) .modal{border-color:var(--calcite-color-status-warning)}:host([kind=brand]) .modal,:host([kind=danger]) .modal,:host([kind=info]) .modal,:host([kind=success]) .modal,:host([kind=warning]) .modal{border-width:0px;border-block-start-width:4px;border-style:solid}:host([kind=brand]) .header,:host([kind=brand]) .content-top,:host([kind=danger]) .header,:host([kind=danger]) .content-top,:host([kind=info]) .header,:host([kind=info]) .content-top,:host([kind=success]) .header,:host([kind=success]) .content-top,:host([kind=warning]) .header,:host([kind=warning]) .content-top{border-radius:0.25rem;border-end-end-radius:0px;border-end-start-radius:0px}@media screen and (max-width: 860px){* slot[name=header]::slotted(content-top),* content-top::slotted([slot=header]){font-size:var(--calcite-font-size-1)}.footer,.content-bottom{position:sticky;inset-block-end:0px}}@media screen and (max-width: 480px){.footer,.content-bottom{flex-direction:column}.back,.secondary{margin:0px;margin-block-end:0.25rem}}.container.slotted-in-shell{position:absolute;pointer-events:auto}.container.slotted-in-shell calcite-scrim{position:absolute}:host([hidden]){display:none}[hidden]{display:none}`;
let r = 0, p = "";
const b = /* @__PURE__ */ g(class extends v {
  constructor() {
    super(), this.__registerHost(), this.__attachShadow(), this.calciteModalBeforeClose = a(this, "calciteModalBeforeClose", 6), this.calciteModalClose = a(this, "calciteModalClose", 6), this.calciteModalBeforeOpen = a(this, "calciteModalBeforeOpen", 6), this.calciteModalOpen = a(this, "calciteModalOpen", 6), this.ignoreOpenChange = !1, this.mutationObserver = m("mutation", () => this.handleMutationObserver()), this.cssVarObserver = m("mutation", () => {
      this.updateSizeCssVars();
    }), this.openTransitionProp = "opacity", this.setTransitionEl = (e) => {
      this.transitionEl = e;
    }, this.openEnd = () => {
      this.setFocus(), this.el.removeEventListener("calciteModalOpen", this.openEnd);
    }, this.handleCloseClick = () => {
      this.open = !1;
    }, this.handleOutsideClose = () => {
      this.outsideCloseDisabled || (this.open = !1);
    }, this.closeModal = async () => {
      if (this.beforeClose)
        try {
          await this.beforeClose(this.el);
        } catch {
          requestAnimationFrame(() => {
            this.ignoreOpenChange = !0, this.open = !0, this.ignoreOpenChange = !1;
          });
          return;
        }
      r--, this.opened = !1, this.removeOverflowHiddenClass();
    }, this.handleMutationObserver = () => {
      this.updateFooterVisibility(), this.updateFocusTrapElements();
    }, this.updateFooterVisibility = () => {
      this.hasFooter = !!s(this.el, [i.back, i.primary, i.secondary]);
    }, this.updateSizeCssVars = () => {
      this.cssWidth = getComputedStyle(this.el).getPropertyValue("--calcite-modal-width"), this.cssHeight = getComputedStyle(this.el).getPropertyValue("--calcite-modal-height");
    }, this.contentTopSlotChangeHandler = (e) => {
      this.hasContentTop = c(e);
    }, this.contentBottomSlotChangeHandler = (e) => {
      this.hasContentBottom = c(e);
    }, this.open = !1, this.opened = !1, this.beforeClose = void 0, this.closeButtonDisabled = !1, this.focusTrapDisabled = !1, this.outsideCloseDisabled = !1, this.docked = void 0, this.escapeDisabled = !1, this.scale = "m", this.widthScale = "m", this.fullscreen = void 0, this.kind = void 0, this.messages = void 0, this.messageOverrides = void 0, this.slottedInShell = void 0, this.cssWidth = void 0, this.cssHeight = void 0, this.hasFooter = !0, this.hasContentTop = !1, this.hasContentBottom = !1, this.effectiveLocale = void 0, this.defaultMessages = void 0;
  }
  handleFocusTrapDisabled(e) {
    this.open && (e ? l(this) : h(this));
  }
  onMessagesChange() {
  }
  //--------------------------------------------------------------------------
  //
  //  Lifecycle
  //
  //--------------------------------------------------------------------------
  async componentWillLoad() {
    await S(this), O(this), this.open && this.openModal();
  }
  componentDidLoad() {
    E(this);
  }
  connectedCallback() {
    this.mutationObserver?.observe(this.el, { childList: !0, subtree: !0 }), this.cssVarObserver?.observe(this.el, { attributeFilter: ["style"] }), this.updateSizeCssVars(), this.updateFooterVisibility(), k(this), F(this), B(this), z(this);
  }
  disconnectedCallback() {
    this.removeOverflowHiddenClass(), this.mutationObserver?.disconnect(), this.cssVarObserver?.disconnect(), y(this), l(this), L(this), D(this), this.slottedInShell = !1;
  }
  render() {
    return o(x, { "aria-describedby": this.contentId, "aria-labelledby": this.titleId, "aria-modal": "true", role: "dialog" }, o("div", { class: {
      [t.container]: !0,
      [t.containerOpen]: this.opened,
      [t.slottedInShell]: this.slottedInShell
    } }, o("calcite-scrim", { class: t.scrim, onClick: this.handleOutsideClose }), this.renderStyle(), o("div", {
      class: {
        [t.modal]: !0
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: this.setTransitionEl
    }, o("div", { class: t.header }, this.renderCloseButton(), o("header", { class: t.title }, o("slot", { name: t.header }))), this.renderContentTop(), o("div", {
      class: {
        [t.content]: !0,
        [t.contentNoFooter]: !this.hasFooter
      },
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (e) => this.modalContent = e
    }, o("slot", { name: i.content })), this.renderContentBottom(), this.renderFooter())));
  }
  renderFooter() {
    return this.hasFooter ? o("div", { class: t.footer, key: "footer" }, o("span", { class: t.back }, o("slot", { name: i.back })), o("span", { class: t.secondary }, o("slot", { name: i.secondary })), o("span", { class: t.primary }, o("slot", { name: i.primary }))) : null;
  }
  renderContentTop() {
    return o("div", { class: t.contentTop, hidden: !this.hasContentTop }, o("slot", { name: i.contentTop, onSlotchange: this.contentTopSlotChangeHandler }));
  }
  renderContentBottom() {
    return o("div", { class: t.contentBottom, hidden: !this.hasContentBottom }, o("slot", { name: i.contentBottom, onSlotchange: this.contentBottomSlotChangeHandler }));
  }
  renderCloseButton() {
    return this.closeButtonDisabled ? null : o("button", {
      "aria-label": this.messages.close,
      class: t.close,
      key: "button",
      onClick: this.handleCloseClick,
      title: this.messages.close,
      // eslint-disable-next-line react/jsx-sort-props -- ref should be last so node attrs/props are in sync (see https://github.com/Esri/calcite-design-system/pull/6530)
      ref: (e) => this.closeButtonEl = e
    }, o("calcite-icon", { icon: P.close, scale: $(this.scale) }));
  }
  renderStyle() {
    if (!this.fullscreen && (this.cssWidth || this.cssHeight))
      return o("style", null, `.${t.container} {
              ${this.docked && this.cssWidth ? "align-items: center !important;" : ""}
            }
            .${t.modal} {
              block-size: ${this.cssHeight ? this.cssHeight : "auto"} !important;
              ${this.cssWidth ? `inline-size: ${this.cssWidth} !important;` : ""}
              ${this.cssWidth ? `max-inline-size: ${this.cssWidth} !important;` : ""}
              ${this.docked ? "border-radius: var(--calcite-border-radius) !important;" : ""}
            }
            @media screen and (max-width: ${this.cssWidth}) {
              .${t.container} {
                ${this.docked ? "align-items: flex-end !important;" : ""}
              }
              .${t.modal} {
                max-block-size: 100% !important;
                inline-size: 100% !important;
                max-inline-size: 100% !important;
                min-inline-size: 100% !important;
                margin: 0 !important;
                ${this.docked ? "" : "block-size: 100% !important;"}
                ${this.docked ? "" : "border-radius: 0 !important;"}
                ${this.docked ? "border-radius: var(--calcite-border-radius) var(--calcite-border-radius) 0 0 !important;" : ""}
              }
            }
          `);
  }
  effectiveLocaleChange() {
    I(this, this.effectiveLocale);
  }
  //--------------------------------------------------------------------------
  //
  //  Event Listeners
  //
  //--------------------------------------------------------------------------
  handleEscape(e) {
    this.open && !this.escapeDisabled && e.key === "Escape" && !e.defaultPrevented && (this.open = !1, e.preventDefault());
  }
  //--------------------------------------------------------------------------
  //
  //  Public Methods
  //
  //--------------------------------------------------------------------------
  /**
   * Sets focus on the component's "close" button (the first focusable item).
   *
   */
  async setFocus() {
    await M(this), w(this.el);
  }
  /**
   * Updates the element(s) that are used within the focus-trap of the component.
   */
  async updateFocusTrapElements() {
    C(this);
  }
  /**
   * Sets the scroll top of the component's content.
   *
   * @param top
   * @param left
   */
  async scrollContent(e = 0, n = 0) {
    this.modalContent && (this.modalContent.scrollTo ? this.modalContent.scrollTo({ top: e, left: n, behavior: "smooth" }) : (this.modalContent.scrollTop = e, this.modalContent.scrollLeft = n));
  }
  onBeforeOpen() {
    this.transitionEl.classList.add(t.openingActive), this.calciteModalBeforeOpen.emit();
  }
  onOpen() {
    this.transitionEl.classList.remove(t.openingIdle, t.openingActive), this.calciteModalOpen.emit(), h(this);
  }
  onBeforeClose() {
    this.transitionEl.classList.add(t.closingActive), this.calciteModalBeforeClose.emit();
  }
  onClose() {
    this.transitionEl.classList.remove(t.closingIdle, t.closingActive), this.calciteModalClose.emit(), l(this);
  }
  toggleModal(e) {
    this.ignoreOpenChange || (e ? this.openModal() : this.closeModal());
  }
  handleOpenedChange(e) {
    const n = e ? t.openingIdle : t.closingIdle;
    this.transitionEl.classList.add(n), T(this);
  }
  async openModal() {
    await H(this.el), this.el.addEventListener("calciteModalOpen", this.openEnd), this.opened = !0;
    const e = s(this.el, i.header), n = s(this.el, i.content);
    this.titleId = d(e), this.contentId = d(n), this.slottedInShell || (r === 0 && (p = document.documentElement.style.overflow), r++, document.documentElement.style.setProperty("overflow", "hidden"));
  }
  removeOverflowHiddenClass() {
    document.documentElement.style.setProperty("overflow", p);
  }
  static get assetsDirs() {
    return ["assets"];
  }
  get el() {
    return this;
  }
  static get watchers() {
    return {
      focusTrapDisabled: ["handleFocusTrapDisabled"],
      messageOverrides: ["onMessagesChange"],
      effectiveLocale: ["effectiveLocaleChange"],
      open: ["toggleModal"],
      opened: ["handleOpenedChange"]
    };
  }
  static get style() {
    return _;
  }
}, [1, "calcite-modal", {
  open: [1540],
  opened: [1540],
  beforeClose: [16],
  closeButtonDisabled: [516, "close-button-disabled"],
  focusTrapDisabled: [516, "focus-trap-disabled"],
  outsideCloseDisabled: [516, "outside-close-disabled"],
  docked: [516],
  escapeDisabled: [516, "escape-disabled"],
  scale: [513],
  widthScale: [513, "width-scale"],
  fullscreen: [516],
  kind: [513],
  messages: [1040],
  messageOverrides: [1040],
  slottedInShell: [1028, "slotted-in-shell"],
  cssWidth: [32],
  cssHeight: [32],
  hasFooter: [32],
  hasContentTop: [32],
  hasContentBottom: [32],
  effectiveLocale: [32],
  defaultMessages: [32],
  setFocus: [64],
  updateFocusTrapElements: [64],
  scrollContent: [64]
}, [[8, "keydown", "handleEscape"]], {
  focusTrapDisabled: ["handleFocusTrapDisabled"],
  messageOverrides: ["onMessagesChange"],
  effectiveLocale: ["effectiveLocaleChange"],
  open: ["toggleModal"],
  opened: ["handleOpenedChange"]
}]);
function u() {
  if (typeof customElements > "u")
    return;
  ["calcite-modal", "calcite-icon", "calcite-loader", "calcite-scrim"].forEach((e) => {
    switch (e) {
      case "calcite-modal":
        customElements.get(e) || customElements.define(e, b);
        break;
      case "calcite-icon":
        customElements.get(e) || V();
        break;
      case "calcite-loader":
        customElements.get(e) || W();
        break;
      case "calcite-scrim":
        customElements.get(e) || A();
        break;
    }
  });
}
u();
const te = b, oe = u;
export {
  te as CalciteModal,
  oe as defineCustomElement
};
//# sourceMappingURL=calcite-modal-pR7iU89-.js.map
