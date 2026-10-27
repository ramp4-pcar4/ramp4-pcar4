import { Attribution, MapCoords, ScaleBar, LangToggle } from '../../geo/api';
export declare const useMapCaptionStore: import('pinia').StoreDefinition<"map-caption", Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }, ScaleBar | {
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }, MapCoords | {
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
    }, LangToggle | {
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "scale" | "attribution" | "coords" | "langtoggle">, Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }, ScaleBar | {
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }, MapCoords | {
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
    }, LangToggle | {
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, never>, Pick<{
    attribution: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }, Attribution | {
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
    }>;
    scale: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }, ScaleBar | {
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }, MapCoords | {
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        disabled?: boolean | undefined;
    }, LangToggle | {
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "toggleScale" | "setAttribution">>;
