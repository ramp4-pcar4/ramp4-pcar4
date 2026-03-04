import { Attribution, MapCoords, ScaleBar, LangToggle } from '../../geo/api';
export declare const useMapCaptionStore: import('pinia').StoreDefinition<"map-caption", Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }, ScaleBar | {
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        formattedString?: string;
    }, MapCoords | {
        disabled?: boolean;
        formattedString?: string;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
    }, LangToggle | {
        disabled?: boolean;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "scale" | "attribution" | "coords" | "langtoggle">, Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }, ScaleBar | {
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        formattedString?: string;
    }, MapCoords | {
        disabled?: boolean;
        formattedString?: string;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
    }, LangToggle | {
        disabled?: boolean;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, never>, Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean;
            value?: string;
        } | undefined;
        logo?: {
            disabled?: boolean;
            altText?: string;
            value?: string;
            link?: string;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }, ScaleBar | {
        disabled?: boolean;
        label?: string;
        width?: string;
        isImperialScale?: boolean;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
        formattedString?: string;
    }, MapCoords | {
        disabled?: boolean;
        formattedString?: string;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean;
    }, LangToggle | {
        disabled?: boolean;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "toggleScale" | "setAttribution">>;
