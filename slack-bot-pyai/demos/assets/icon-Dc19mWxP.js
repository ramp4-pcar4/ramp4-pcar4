import { cI as proxyCustomElement, cJ as H, cG as h, cK as Host, cL as getAssetPath } from './main-48Jy8Lgr.js';
import { g as getElementDir, t as toAriaBoolean } from './dom-ukL0J7Ft.js';
import { c as createObserver } from './observers-CNLHWjIv.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const CSS = {
    icon: "icon",
    flipRtl: "flip-rtl",
};

/**
 * Icon data cache.
 * Exported for testing purposes.
 *
 * @private
 */
const iconCache = {};
/**
 * Icon request cache.
 * Exported for testing purposes.
 *
 * @private
 */
const requestCache = {};
const scaleToPx = {
    s: 16,
    m: 24,
    l: 32,
};
async function fetchIcon({ icon, scale }) {
    const size = scaleToPx[scale];
    const name = normalizeIconName(icon);
    const filled = name.charAt(name.length - 1) === "F";
    const iconName = filled ? name.substring(0, name.length - 1) : name;
    const id = `${iconName}${size}${filled ? "F" : ""}`;
    if (iconCache[id]) {
        return iconCache[id];
    }
    if (!requestCache[id]) {
        requestCache[id] = fetch(getAssetPath(`./assets/icon/${id}.json`))
            .then((resp) => resp.json())
            .catch(() => {
            console.error(`"${id}" is not a valid calcite-ui-icon name`);
            return "";
        });
    }
    const path = await requestCache[id];
    iconCache[id] = path;
    return path;
}
/**
 * Normalize the icon name to match the path data module exports.
 * Exported for testing purposes.
 *
 * @param name – an icon name that can be either kebab or camel-cased
 * @private
 */
function normalizeIconName(name) {
    const numberLeadingName = !isNaN(Number(name.charAt(0)));
    const parts = name.split("-");
    const kebabCased = parts.length > 0;
    if (kebabCased) {
        const firstNonDigitInPartPattern = /[a-z]/i;
        name = parts
            .map((part, partIndex) => {
            return part.replace(firstNonDigitInPartPattern, function replacer(match, offset) {
                const isFirstCharInName = partIndex === 0 && offset === 0;
                if (isFirstCharInName) {
                    return match;
                }
                return match.toUpperCase();
            });
        })
            .join("");
    }
    return numberLeadingName ? `i${name}` : name;
}

const iconCss = ":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";

const Icon = /*@__PURE__*/ proxyCustomElement(class Icon extends H {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.icon = null;
        this.flipRtl = false;
        this.scale = "m";
        this.textLabel = undefined;
        this.pathData = undefined;
        this.visible = false;
    }
    //--------------------------------------------------------------------------
    //
    //  Lifecycle
    //
    //--------------------------------------------------------------------------
    connectedCallback() {
        this.waitUntilVisible(() => {
            this.visible = true;
            this.loadIconPathData();
        });
    }
    disconnectedCallback() {
        this.intersectionObserver?.disconnect();
        this.intersectionObserver = null;
    }
    async componentWillLoad() {
        this.loadIconPathData();
    }
    render() {
        const { el, flipRtl, pathData, scale, textLabel } = this;
        const dir = getElementDir(el);
        const size = scaleToPx[scale];
        const semantic = !!textLabel;
        const paths = [].concat(pathData || "");
        return (h(Host, { "aria-hidden": toAriaBoolean(!semantic), "aria-label": semantic ? textLabel : null, role: semantic ? "img" : null }, h("svg", { "aria-hidden": "true", class: {
                [CSS.flipRtl]: dir === "rtl" && flipRtl,
                svg: true,
            }, fill: "currentColor", height: "100%", viewBox: `0 0 ${size} ${size}`, width: "100%", xmlns: "http://www.w3.org/2000/svg" }, paths.map((path) => typeof path === "string" ? (h("path", { d: path })) : (h("path", { d: path.d, opacity: "opacity" in path ? path.opacity : 1 }))))));
    }
    //--------------------------------------------------------------------------
    //
    //  Private Methods
    //
    //--------------------------------------------------------------------------
    async loadIconPathData() {
        const { icon, scale, visible } = this;
        if (!icon || !visible) {
            return;
        }
        const pathData = await fetchIcon({ icon, scale });
        // While the fetchIcon method is awaiting response, the icon requested can change. This check is to verify the response received belongs to the current icon.
        if (icon !== this.icon) {
            return;
        }
        this.pathData = pathData;
    }
    waitUntilVisible(callback) {
        this.intersectionObserver = createObserver("intersection", (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.intersectionObserver.disconnect();
                    this.intersectionObserver = null;
                    callback();
                }
            });
        }, { rootMargin: "50px" });
        if (!this.intersectionObserver) {
            callback();
            return;
        }
        this.intersectionObserver.observe(this.el);
    }
    static get assetsDirs() { return ["assets"]; }
    get el() { return this; }
    static get watchers() { return {
        "icon": ["loadIconPathData"],
        "scale": ["loadIconPathData"]
    }; }
    static get style() { return iconCss; }
}, [1, "calcite-icon", {
        "icon": [513],
        "flipRtl": [516, "flip-rtl"],
        "scale": [513],
        "textLabel": [1, "text-label"],
        "pathData": [32],
        "visible": [32]
    }, undefined, {
        "icon": ["loadIconPathData"],
        "scale": ["loadIconPathData"]
    }]);
function defineCustomElement() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["calcite-icon"];
    components.forEach(tagName => { switch (tagName) {
        case "calcite-icon":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Icon);
            }
            break;
    } });
}
defineCustomElement();

export { Icon as I, defineCustomElement as d };
