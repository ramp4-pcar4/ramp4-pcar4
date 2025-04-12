import { cL as getAssetPath } from './main-DbwmOBz5.js';
import { u as containsCrossShadowBoundary, c as closestElementCrossShadowBoundary } from './dom-ukL0J7Ft.js';
import { c as createObserver } from './observers-CcdihrID.js';

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */
function isActivationKey(key) {
    return key === "Enter" || key === " ";
}
const numberKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const unnecessaryDecimal = new RegExp(`\\${"."}(0+)?$`);
const trailingZeros = new RegExp("0+$");
// adopted from https://stackoverflow.com/a/66939244
class BigDecimal {
    constructor(input) {
        if (input instanceof BigDecimal) {
            return input;
        }
        const [integers, decimals] = expandExponentialNumberString(input).split(".").concat("");
        this.value =
            BigInt(integers + decimals.padEnd(BigDecimal.DECIMALS, "0").slice(0, BigDecimal.DECIMALS)) +
                BigInt(BigDecimal.ROUNDED && decimals[BigDecimal.DECIMALS] >= "5");
        this.isNegative = input.charAt(0) === "-";
    }
    getIntegersAndDecimals() {
        const s = this.value
            .toString()
            .replace("-", "")
            .padStart(BigDecimal.DECIMALS + 1, "0");
        const integers = s.slice(0, -BigDecimal.DECIMALS);
        const decimals = s.slice(-BigDecimal.DECIMALS).replace(trailingZeros, "");
        return { integers, decimals };
    }
    toString() {
        const { integers, decimals } = this.getIntegersAndDecimals();
        return `${this.isNegative ? "-" : ""}${integers}${decimals.length ? "." + decimals : ""}`;
    }
    formatToParts(formatter) {
        const { integers, decimals } = this.getIntegersAndDecimals();
        const parts = formatter.numberFormatter.formatToParts(BigInt(integers));
        this.isNegative && parts.unshift({ type: "minusSign", value: formatter.minusSign });
        if (decimals.length) {
            parts.push({ type: "decimal", value: formatter.decimal });
            decimals.split("").forEach((char) => parts.push({ type: "fraction", value: char }));
        }
        return parts;
    }
    format(formatter) {
        const { integers, decimals } = this.getIntegersAndDecimals();
        const integersFormatted = `${this.isNegative ? formatter.minusSign : ""}${formatter.numberFormatter.format(BigInt(integers))}`;
        const decimalsFormatted = decimals.length
            ? `${formatter.decimal}${decimals
                .split("")
                .map((char) => formatter.numberFormatter.format(Number(char)))
                .join("")}`
            : "";
        return `${integersFormatted}${decimalsFormatted}`;
    }
    add(n) {
        return BigDecimal.fromBigInt(this.value + new BigDecimal(n).value);
    }
    subtract(n) {
        return BigDecimal.fromBigInt(this.value - new BigDecimal(n).value);
    }
    multiply(n) {
        return BigDecimal._divRound(this.value * new BigDecimal(n).value, BigDecimal.SHIFT);
    }
    divide(n) {
        return BigDecimal._divRound(this.value * BigDecimal.SHIFT, new BigDecimal(n).value);
    }
}
// Configuration: constants
BigDecimal.DECIMALS = 100; // number of decimals on all instances
BigDecimal.ROUNDED = true; // numbers are truncated (false) or rounded (true)
BigDecimal.SHIFT = BigInt("1" + "0".repeat(BigDecimal.DECIMALS)); // derived constant
BigDecimal._divRound = (dividend, divisor) => BigDecimal.fromBigInt(dividend / divisor + (BigDecimal.ROUNDED ? ((dividend * BigInt(2)) / divisor) % BigInt(2) : BigInt(0)));
BigDecimal.fromBigInt = (bigint) => Object.assign(Object.create(BigDecimal.prototype), { value: bigint, isNegative: bigint < BigInt(0) });
function isValidNumber(numberString) {
    return !(!numberString || isNaN(Number(numberString)));
}
function parseNumberString(numberString) {
    if (!numberString || !stringContainsNumbers(numberString)) {
        return "";
    }
    return sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
        let containsDecimal = false;
        const result = nonExpoNumString
            .split("")
            .filter((value, i) => {
            if (value.match(/\./g) && !containsDecimal) {
                containsDecimal = true;
                return true;
            }
            if (value.match(/\-/g) && i === 0) {
                return true;
            }
            return numberKeys.includes(value);
        })
            .join("");
        return isValidNumber(result) ? new BigDecimal(result).toString() : "";
    });
}
// regex for number sanitization
const allLeadingZerosOptionallyNegative = /^([-0])0+(?=\d)/;
const decimalOnlyAtEndOfString = /(?!^\.)\.$/;
const allHyphensExceptTheStart = /(?!^-)-/g;
const isNegativeDecimalOnlyZeros = /^-\b0\b\.?0*$/;
const hasTrailingDecimalZeros = /0*$/;
const sanitizeNumberString = (numberString) => sanitizeExponentialNumberString(numberString, (nonExpoNumString) => {
    const sanitizedValue = nonExpoNumString
        .replace(allHyphensExceptTheStart, "")
        .replace(decimalOnlyAtEndOfString, "")
        .replace(allLeadingZerosOptionallyNegative, "$1");
    return isValidNumber(sanitizedValue)
        ? isNegativeDecimalOnlyZeros.test(sanitizedValue)
            ? sanitizedValue
            : getBigDecimalAsString(sanitizedValue)
        : nonExpoNumString;
});
function getBigDecimalAsString(sanitizedValue) {
    const sanitizedValueDecimals = sanitizedValue.split(".")[1];
    const value = new BigDecimal(sanitizedValue).toString();
    const [bigDecimalValueInteger, bigDecimalValueDecimals] = value.split(".");
    return sanitizedValueDecimals && bigDecimalValueDecimals !== sanitizedValueDecimals
        ? `${bigDecimalValueInteger}.${sanitizedValueDecimals}`
        : value;
}
function sanitizeExponentialNumberString(numberString, func) {
    if (!numberString) {
        return numberString;
    }
    const firstE = numberString.toLowerCase().indexOf("e") + 1;
    if (!firstE) {
        return func(numberString);
    }
    return numberString
        .replace(/[eE]*$/g, "")
        .substring(0, firstE)
        .concat(numberString.slice(firstE).replace(/[eE]/g, ""))
        .split(/[eE]/)
        .map((section, i) => (i === 1 ? func(section.replace(/\./g, "")) : func(section)))
        .join("e")
        .replace(/^e/, "1e");
}
/**
 * Converts an exponential notation numberString into decimal notation.
 * BigInt doesn't support exponential notation, so this is required to maintain precision
 *
 * @param {string} numberString - pre-validated exponential or decimal number
 * @returns {string} numberString in decimal notation
 */
function expandExponentialNumberString(numberString) {
    const exponentialParts = numberString.split(/[eE]/);
    if (exponentialParts.length === 1) {
        return numberString;
    }
    const number = +numberString;
    if (Number.isSafeInteger(number)) {
        return `${number}`;
    }
    const isNegative = numberString.charAt(0) === "-";
    const magnitude = +exponentialParts[1];
    const decimalParts = exponentialParts[0].split(".");
    const integers = (isNegative ? decimalParts[0].substring(1) : decimalParts[0]) || "";
    const decimals = decimalParts[1] || "";
    const shiftDecimalLeft = (integers, magnitude) => {
        const magnitudeDelta = Math.abs(magnitude) - integers.length;
        const leftPaddedZeros = magnitudeDelta > 0 ? `${"0".repeat(magnitudeDelta)}${integers}` : integers;
        const shiftedDecimal = `${leftPaddedZeros.slice(0, magnitude)}${"."}${leftPaddedZeros.slice(magnitude)}`;
        return shiftedDecimal;
    };
    const shiftDecimalRight = (decimals, magnitude) => {
        const rightPaddedZeros = magnitude > decimals.length ? `${decimals}${"0".repeat(magnitude - decimals.length)}` : decimals;
        const shiftedDecimal = `${rightPaddedZeros.slice(0, magnitude)}${"."}${rightPaddedZeros.slice(magnitude)}`;
        return shiftedDecimal;
    };
    const expandedNumberString = magnitude > 0
        ? `${integers}${shiftDecimalRight(decimals, magnitude)}`
        : `${shiftDecimalLeft(integers, magnitude)}${decimals}`;
    return `${isNegative ? "-" : ""}${expandedNumberString.charAt(0) === "." ? "0" : ""}${expandedNumberString
        .replace(unnecessaryDecimal, "")
        .replace(allLeadingZerosOptionallyNegative, "")}`;
}
function stringContainsNumbers(string) {
    return numberKeys.some((number) => string.includes(number));
}
/**
 * Adds localized trailing decimals zero values to the number string.
 * BigInt conversion to string removes the trailing decimal zero values (Ex: 1.000 is returned as 1). This method helps adding them back.
 *
 * @param {string} localizedValue - localized number string value
 * @param {string} value - current value in the input field
 * @param {NumberStringFormat} formatter - numberStringFormatter instance to localize the number value
 * @returns {string} localized number string value
 */
function addLocalizedTrailingDecimalZeros(localizedValue, value, formatter) {
    const decimals = value.split(".")[1];
    if (decimals) {
        const trailingDecimalZeros = decimals.match(hasTrailingDecimalZeros)[0];
        if (trailingDecimalZeros &&
            formatter.delocalize(localizedValue).length !== value.length &&
            decimals.indexOf("e") === -1) {
            const decimalSeparator = formatter.decimal;
            localizedValue = !localizedValue.includes(decimalSeparator)
                ? `${localizedValue}${decimalSeparator}`
                : localizedValue;
            return localizedValue.padEnd(localizedValue.length + trailingDecimalZeros.length, formatter.localize("0"));
        }
    }
    return localizedValue;
}

const defaultLocale = "en";
const t9nLocales = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "el",
    defaultLocale,
    "es",
    "et",
    "fi",
    "fr",
    "he",
    "hr",
    "hu",
    "id",
    "it",
    "ja",
    "ko",
    "lt",
    "lv",
    "no",
    "nl",
    "pl",
    "pt-BR",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
];
const locales = [
    "ar",
    "bg",
    "bs",
    "ca",
    "cs",
    "da",
    "de",
    "de-AT",
    "de-CH",
    "el",
    defaultLocale,
    "en-AU",
    "en-CA",
    "en-GB",
    "es",
    "es-MX",
    "et",
    "fi",
    "fr",
    "fr-CH",
    "he",
    "hi",
    "hr",
    "hu",
    "id",
    "it",
    "it-CH",
    "ja",
    "ko",
    "lt",
    "lv",
    "mk",
    "no",
    "nl",
    "pl",
    "pt",
    "pt-PT",
    "ro",
    "ru",
    "sk",
    "sl",
    "sr",
    "sv",
    "th",
    "tr",
    "uk",
    "vi",
    "zh-CN",
    "zh-HK",
    "zh-TW",
];
const numberingSystems = ["arab", "arabext", "latn"];
const isNumberingSystemSupported = (numberingSystem) => numberingSystems.includes(numberingSystem);
const browserNumberingSystem = new Intl.NumberFormat().resolvedOptions().numberingSystem;
// for consistent browser behavior, we normalize numberingSystem to prevent the browser-inferred value
// see https://github.com/Esri/calcite-design-system/issues/3079#issuecomment-1168964195 for more info
const defaultNumberingSystem = browserNumberingSystem === "arab" || !isNumberingSystemSupported(browserNumberingSystem)
    ? "latn"
    : browserNumberingSystem;
const getSupportedNumberingSystem = (numberingSystem) => isNumberingSystemSupported(numberingSystem) ? numberingSystem : defaultNumberingSystem;
/**
 * Gets the locale that best matches the context.
 *
 * @param locale – the BCP 47 locale code
 * @param context - specifies whether the locale code should match in the context of CLDR or T9N (translation)
 */
function getSupportedLocale(locale, context = "cldr") {
    const contextualLocales = context === "cldr" ? locales : t9nLocales;
    if (!locale) {
        return defaultLocale;
    }
    if (contextualLocales.includes(locale)) {
        return locale;
    }
    locale = locale.toLowerCase();
    // we support both 'nb' and 'no' (BCP 47) for Norwegian but only `no` has corresponding bundle
    if (locale === "nb") {
        return "no";
    }
    // we use `pt-BR` as it will have the same translations as `pt`, which has no corresponding bundle
    if (context === "t9n" && locale === "pt") {
        return "pt-BR";
    }
    if (locale.includes("-")) {
        locale = locale.replace(/(\w+)-(\w+)/, (_match, language, region) => `${language}-${region.toUpperCase()}`);
        if (!contextualLocales.includes(locale)) {
            locale = locale.split("-")[0];
        }
    }
    // we can `zh-CN` as base translation for chinese locales which has no corresponding bundle.
    if (locale === "zh") {
        return "zh-CN";
    }
    if (!contextualLocales.includes(locale)) {
        console.warn(`Translations for the "${locale}" locale are not available and will fall back to the default, English (en).`);
        return defaultLocale;
    }
    return locale;
}
const connectedComponents = new Set();
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback` before any logic that depends on locale
 *
 * @param component
 */
function connectLocalized(component) {
    updateEffectiveLocale(component);
    if (connectedComponents.size === 0) {
        mutationObserver?.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ["lang"],
            subtree: true,
        });
    }
    connectedComponents.add(component);
}
/**
 * This is only exported for components that implemented the now deprecated `locale` prop.
 *
 * Do not use this utils for new components.
 *
 * @param component
 */
function updateEffectiveLocale(component) {
    component.effectiveLocale = getLocale(component);
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectLocalized(component) {
    connectedComponents.delete(component);
    if (connectedComponents.size === 0) {
        mutationObserver.disconnect();
    }
}
const mutationObserver = createObserver("mutation", (records) => {
    records.forEach((record) => {
        const el = record.target;
        connectedComponents.forEach((component) => {
            const inUnrelatedSubtree = !containsCrossShadowBoundary(el, component.el);
            if (inUnrelatedSubtree) {
                return;
            }
            const closestLangEl = closestElementCrossShadowBoundary(component.el, "[lang]");
            if (!closestLangEl) {
                component.effectiveLocale = defaultLocale;
                return;
            }
            const closestLang = closestLangEl.lang;
            component.effectiveLocale =
                // user set lang="" means unknown language, so we use default
                closestLangEl.hasAttribute("lang") && closestLang === "" ? defaultLocale : closestLang;
        });
    });
});
/**
 * This util helps resolve a component's locale.
 * It will also fall back on the deprecated `locale` if a component implemented this previously.
 *
 * @param component
 */
function getLocale(component) {
    return (component.el.lang ||
        closestElementCrossShadowBoundary(component.el, "[lang]")?.lang ||
        document.documentElement.lang ||
        defaultLocale);
}
/**
 * This util formats and parses numbers for localization
 */
class NumberStringFormat {
    constructor() {
        this.delocalize = (numberString) => 
        // For performance, (de)localization is skipped if the formatter isn't initialized.
        // In order to localize/delocalize, e.g. when lang/numberingSystem props are not default values,
        // `numberFormatOptions` must be set in a component to create and cache the formatter.
        this._numberFormatOptions
            ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => nonExpoNumString
                .replace(new RegExp(`[${this._minusSign}]`, "g"), "-")
                .replace(new RegExp(`[${this._group}]`, "g"), "")
                .replace(new RegExp(`[${this._decimal}]`, "g"), ".")
                .replace(new RegExp(`[${this._digits.join("")}]`, "g"), this._getDigitIndex))
            : numberString;
        this.localize = (numberString) => this._numberFormatOptions
            ? sanitizeExponentialNumberString(numberString, (nonExpoNumString) => isValidNumber(nonExpoNumString.trim())
                ? new BigDecimal(nonExpoNumString.trim())
                    .format(this)
                    .replace(new RegExp(`[${this._actualGroup}]`, "g"), this._group)
                : nonExpoNumString)
            : numberString;
    }
    get group() {
        return this._group;
    }
    get decimal() {
        return this._decimal;
    }
    get minusSign() {
        return this._minusSign;
    }
    get digits() {
        return this._digits;
    }
    get numberFormatter() {
        return this._numberFormatter;
    }
    get numberFormatOptions() {
        return this._numberFormatOptions;
    }
    /**
     * numberFormatOptions needs to be set before localize/delocalize is called to ensure the options are up to date
     */
    set numberFormatOptions(options) {
        options.locale = getSupportedLocale(options?.locale);
        options.numberingSystem = getSupportedNumberingSystem(options?.numberingSystem);
        if (
        // No need to create the formatter if `locale` and `numberingSystem`
        // are the default values and `numberFormatOptions` has not been set
        (!this._numberFormatOptions &&
            options.locale === defaultLocale &&
            options.numberingSystem === defaultNumberingSystem &&
            // don't skip initialization if any options besides locale/numberingSystem are set
            Object.keys(options).length === 2) ||
            // cache formatter by only recreating when options change
            JSON.stringify(this._numberFormatOptions) === JSON.stringify(options)) {
            return;
        }
        this._numberFormatOptions = options;
        this._numberFormatter = new Intl.NumberFormat(this._numberFormatOptions.locale, this._numberFormatOptions);
        this._digits = [
            ...new Intl.NumberFormat(this._numberFormatOptions.locale, {
                useGrouping: false,
                numberingSystem: this._numberFormatOptions.numberingSystem,
            }).format(9876543210),
        ].reverse();
        const index = new Map(this._digits.map((d, i) => [d, i]));
        // numberingSystem is parsed to return consistent decimal separator across browsers.
        const parts = new Intl.NumberFormat(this._numberFormatOptions.locale, {
            numberingSystem: this._numberFormatOptions.numberingSystem,
        }).formatToParts(-12345678.9);
        this._actualGroup = parts.find((d) => d.type === "group").value;
        // change whitespace group separators to the unicode non-breaking space (nbsp)
        this._group = this._actualGroup.trim().length === 0 || this._actualGroup == " " ? "\u00A0" : this._actualGroup;
        this._decimal = parts.find((d) => d.type === "decimal").value;
        this._minusSign = parts.find((d) => d.type === "minusSign").value;
        this._getDigitIndex = (d) => index.get(d);
    }
}
const numberStringFormatter = new NumberStringFormat();

/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.6.0
 */

const componentLangToMessageBundleCache = {};
async function getMessageBundle(lang, component) {
    const key = `${component}_${lang}`;
    if (componentLangToMessageBundleCache[key]) {
        return componentLangToMessageBundleCache[key];
    }
    componentLangToMessageBundleCache[key] = fetch(getAssetPath(`./assets/${component}/t9n/messages_${lang}.json`))
        .then((resp) => {
        if (!resp.ok) {
            throwMessageFetchError();
        }
        return resp.json();
    })
        .catch(() => throwMessageFetchError());
    return componentLangToMessageBundleCache[key];
}
function throwMessageFetchError() {
    throw new Error("could not fetch component message bundle");
}
function mergeMessages(component) {
    component.messages = {
        ...component.defaultMessages,
        ...component.messageOverrides,
    };
}
/**
 * This utility sets up the messages used by the component. It should be awaited in the `componentWillLoad` lifecycle hook.
 *
 * @param component
 */
async function setUpMessages(component) {
    component.defaultMessages = await fetchMessages(component, component.effectiveLocale);
    mergeMessages(component);
}
async function fetchMessages(component, lang) {
    const { el } = component;
    const tag = el.tagName.toLowerCase();
    const componentName = tag.replace("calcite-", "");
    return getMessageBundle(getSupportedLocale(lang, "t9n"), componentName);
}
/**
 * This utility must be set up for the component to update its default message bundle if the locale changes.
 *
 * It can be set up in **either** of the following ways:
 *
 * 1. called from `LocalizedComponent`'s `onLocaleChange` method or
 * 2. called from a watcher configured to watch `LocalizedComponent`'s `effectiveLocale` prop
 *
 * @param component
 * @param lang
 */
async function updateMessages(component, lang) {
    component.defaultMessages = await fetchMessages(component, lang);
    mergeMessages(component);
}
/**
 * This utility sets up internals for messages support.
 *
 * It needs to be called in `connectedCallback`
 *
 * **Note**: this must be called after `LocalizedComponent`'s `connectLocalized` method.
 *
 * @param component
 */
function connectMessages(component) {
    component.onMessagesChange = defaultOnMessagesChange;
}
/**
 * This utility tears down internals for messages support.
 *
 * It needs to be called in `disconnectedCallback`
 *
 * @param component
 */
function disconnectMessages(component) {
    component.onMessagesChange = undefined;
}
function defaultOnMessagesChange() {
    mergeMessages(this);
}

export { BigDecimal as B, connectMessages as a, disconnectMessages as b, connectLocalized as c, disconnectLocalized as d, sanitizeNumberString as e, addLocalizedTrailingDecimalZeros as f, numberKeys as g, isActivationKey as h, isValidNumber as i, numberStringFormatter as n, parseNumberString as p, setUpMessages as s, updateMessages as u };
