import { LayerType } from '@/geo/api';
import { WizardStep } from './wizard-state';
import type { LayerSource } from './layer-source';
export declare const useWizardStore: import("pinia").StoreDefinition<"wizard", import("pinia")._UnwrapAll<Pick<{
    layerSource: import("vue").Ref<LayerSource | undefined>;
    url: import("vue").Ref<string>;
    typeSelection: import("vue").Ref<string>;
    nested: import("vue").Ref<boolean>;
    fileData: import("vue").Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number | undefined) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import("vue").Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: string[];
    }>;
    currStep: import("vue").Ref<WizardStep>;
    goToStep: (step: WizardStep) => void;
}, "url" | "layerSource" | "typeSelection" | "nested" | "fileData" | "layerInfo" | "currStep">>, Pick<{
    layerSource: import("vue").Ref<LayerSource | undefined>;
    url: import("vue").Ref<string>;
    typeSelection: import("vue").Ref<string>;
    nested: import("vue").Ref<boolean>;
    fileData: import("vue").Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number | undefined) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import("vue").Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: string[];
    }>;
    currStep: import("vue").Ref<WizardStep>;
    goToStep: (step: WizardStep) => void;
}, never>, Pick<{
    layerSource: import("vue").Ref<LayerSource | undefined>;
    url: import("vue").Ref<string>;
    typeSelection: import("vue").Ref<string>;
    nested: import("vue").Ref<boolean>;
    fileData: import("vue").Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number | undefined) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import("vue").Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: string[];
    }>;
    currStep: import("vue").Ref<WizardStep>;
    goToStep: (step: WizardStep) => void;
}, "goToStep">>;
