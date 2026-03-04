import { LayerType } from '../../../geo/api';
import { WizardStep } from './wizard-state';
import { LayerSource } from './layer-source';
export declare const useWizardStore: import('pinia').StoreDefinition<"wizard", Pick<{
    layerSource: import('../../../../vue/dist/vue.esm-bundler.js').Ref<LayerSource | undefined, LayerSource | undefined>;
    url: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    typeSelection: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    nested: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    fileData: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }, {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    } | {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }>;
    currStep: import('../../../../vue/dist/vue.esm-bundler.js').Ref<WizardStep, WizardStep>;
    goToStep: (step: WizardStep) => void;
}, "url" | "layerSource" | "typeSelection" | "nested" | "fileData" | "layerInfo" | "currStep">, Pick<{
    layerSource: import('../../../../vue/dist/vue.esm-bundler.js').Ref<LayerSource | undefined, LayerSource | undefined>;
    url: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    typeSelection: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    nested: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    fileData: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }, {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    } | {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }>;
    currStep: import('../../../../vue/dist/vue.esm-bundler.js').Ref<WizardStep, WizardStep>;
    goToStep: (step: WizardStep) => void;
}, never>, Pick<{
    layerSource: import('../../../../vue/dist/vue.esm-bundler.js').Ref<LayerSource | undefined, LayerSource | undefined>;
    url: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    typeSelection: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    nested: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    fileData: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin: number, end?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: string;
    } | null>;
    layerInfo: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }, {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    } | {
        config: {
            id: string;
            layerType: LayerType;
            url: string;
        };
        configOptions: Array<string>;
    }>;
    currStep: import('../../../../vue/dist/vue.esm-bundler.js').Ref<WizardStep, WizardStep>;
    goToStep: (step: WizardStep) => void;
}, "goToStep">>;
