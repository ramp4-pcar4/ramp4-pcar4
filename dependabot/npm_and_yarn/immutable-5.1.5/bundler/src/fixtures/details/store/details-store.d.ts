import { DetailsItemInstance, DetailsRequestOrigin } from './details-state';
import { IdentifyResult, LayerInstance } from '../../../api';
export declare const useDetailsStore: import('pinia').StoreDefinition<"details", Pick<{
    payload: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[], IdentifyResult[] | {
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[]>;
    properties: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: DetailsItemInstance;
    }, {
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [type: string]: string;
    }, {
        [type: string]: string;
    }>;
    currentFeatureId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    activeGreedy: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    lastHilight: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    hilightToggle: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    origin: import('../../../../vue/dist/vue.esm-bundler.js').Ref<DetailsRequestOrigin | undefined, DetailsRequestOrigin | undefined>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, "origin" | "payload" | "properties" | "defaultTemplates" | "currentFeatureId" | "activeGreedy" | "lastHilight" | "hilightToggle">, Pick<{
    payload: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[], IdentifyResult[] | {
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[]>;
    properties: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: DetailsItemInstance;
    }, {
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [type: string]: string;
    }, {
        [type: string]: string;
    }>;
    currentFeatureId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    activeGreedy: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    lastHilight: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    hilightToggle: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    origin: import('../../../../vue/dist/vue.esm-bundler.js').Ref<DetailsRequestOrigin | undefined, DetailsRequestOrigin | undefined>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, never>, Pick<{
    payload: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[], IdentifyResult[] | {
        items: {
            data: any;
            format: import('../../../geo/api').IdentifyResultFormat;
            loaded: boolean;
            loading: {
                then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
                catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
                finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
                readonly [Symbol.toStringTag]: string;
            };
            started: boolean;
            load: () => Promise<void>;
        }[];
        uid: string;
        layerId: string;
        loaded: boolean;
        errored: boolean;
        loading: {
            then: <TResult1 = void, TResult2 = never>(onfulfilled?: ((value: void) => TResult1 | PromiseLike<TResult1>) | null | undefined, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | null | undefined) => Promise<TResult1 | TResult2>;
            catch: <TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | null | undefined) => Promise<void | TResult>;
            finally: (onfinally?: (() => void) | null | undefined) => Promise<void>;
            readonly [Symbol.toStringTag]: string;
        };
        requestTime: number;
    }[]>;
    properties: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [id: string]: DetailsItemInstance;
    }, {
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import('../../../../vue/dist/vue.esm-bundler.js').Ref<{
        [type: string]: string;
    }, {
        [type: string]: string;
    }>;
    currentFeatureId: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string | undefined, string | undefined>;
    activeGreedy: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    lastHilight: import('../../../../vue/dist/vue.esm-bundler.js').Ref<number, number>;
    hilightToggle: import('../../../../vue/dist/vue.esm-bundler.js').Ref<boolean, boolean>;
    origin: import('../../../../vue/dist/vue.esm-bundler.js').Ref<DetailsRequestOrigin | undefined, DetailsRequestOrigin | undefined>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, "removeLayer" | "addConfigProperty">>;
