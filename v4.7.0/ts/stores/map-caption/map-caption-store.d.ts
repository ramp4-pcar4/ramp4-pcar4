import type { Attribution } from '@/geo/api';
export declare const useMapCaptionStore: import("pinia").StoreDefinition<"map-caption", import("pinia")._UnwrapAll<Pick<{
    attribution: import("vue").Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
        logo?: {
            disabled?: boolean | undefined;
            altText?: string | undefined;
            value?: string | undefined;
            link?: string | undefined;
        } | undefined;
    }>;
    scale: import("vue").Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import("vue").Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import("vue").Ref<{
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean | undefined) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "scale" | "attribution" | "coords" | "langtoggle">>, Pick<{
    attribution: import("vue").Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
        logo?: {
            disabled?: boolean | undefined;
            altText?: string | undefined;
            value?: string | undefined;
            link?: string | undefined;
        } | undefined;
    }>;
    scale: import("vue").Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import("vue").Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import("vue").Ref<{
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean | undefined) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, never>, Pick<{
    attribution: import("vue").Ref<{
        text?: {
            disabled?: boolean | undefined;
            value?: string | undefined;
        } | undefined;
        logo?: {
            disabled?: boolean | undefined;
            altText?: string | undefined;
            value?: string | undefined;
            link?: string | undefined;
        } | undefined;
    }>;
    scale: import("vue").Ref<{
        disabled?: boolean | undefined;
        label?: string | undefined;
        width?: string | undefined;
        isImperialScale?: boolean | undefined;
    }>;
    coords: import("vue").Ref<{
        disabled?: boolean | undefined;
        formattedString?: string | undefined;
    }>;
    langtoggle: import("vue").Ref<{
        disabled?: boolean | undefined;
    }>;
    toggleScale: (value?: boolean | undefined) => void;
    setAttribution: (newAttribution: Attribution) => void;
}, "toggleScale" | "setAttribution">>;
