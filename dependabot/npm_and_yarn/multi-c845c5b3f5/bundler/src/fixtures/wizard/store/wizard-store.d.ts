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
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
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
}, "url" | "fileData" | "layerInfo" | "layerSource" | "typeSelection" | "nested" | "currStep">, Pick<{
    layerSource: import('../../../../vue/dist/vue.esm-bundler.js').Ref<LayerSource | undefined, LayerSource | undefined>;
    url: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    typeSelection: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string, string>;
    nested: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    fileData: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        readonly byteLength: number;
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
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
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
    } | null, ArrayBuffer | {
        readonly byteLength: number;
        slice: (begin?: number, end?: number) => ArrayBuffer;
        readonly maxByteLength: number;
        readonly resizable: boolean;
        resize: (newByteLength?: number) => void;
        readonly detached: boolean;
        transfer: (newByteLength?: number) => ArrayBuffer;
        transferToFixedLength: (newByteLength?: number) => ArrayBuffer;
        readonly [Symbol.toStringTag]: "ArrayBuffer";
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
