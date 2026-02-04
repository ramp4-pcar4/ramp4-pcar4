import type { DetailsItemInstance } from './details-state';
import type { LayerInstance } from '@/api';
export declare const useDetailsStore: import("pinia").StoreDefinition<"details", import("pinia")._UnwrapAll<Pick<{
    payload: import("vue").Ref<{
        items: {
            data: any;
            format: import("../../../geo/api").IdentifyResultFormat;
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
    properties: import("vue").Ref<{
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import("vue").Ref<{
        [type: string]: string;
    }>;
    currentFeatureId: import("vue").Ref<string | undefined>;
    slowLoadingFlag: import("vue").Ref<boolean>;
    activeGreedy: import("vue").Ref<number>;
    lastHilight: import("vue").Ref<number>;
    hilightToggle: import("vue").Ref<boolean>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, "payload" | "properties" | "defaultTemplates" | "currentFeatureId" | "slowLoadingFlag" | "activeGreedy" | "lastHilight" | "hilightToggle">>, Pick<{
    payload: import("vue").Ref<{
        items: {
            data: any;
            format: import("../../../geo/api").IdentifyResultFormat;
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
    properties: import("vue").Ref<{
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import("vue").Ref<{
        [type: string]: string;
    }>;
    currentFeatureId: import("vue").Ref<string | undefined>;
    slowLoadingFlag: import("vue").Ref<boolean>;
    activeGreedy: import("vue").Ref<number>;
    lastHilight: import("vue").Ref<number>;
    hilightToggle: import("vue").Ref<boolean>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, never>, Pick<{
    payload: import("vue").Ref<{
        items: {
            data: any;
            format: import("../../../geo/api").IdentifyResultFormat;
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
    properties: import("vue").Ref<{
        [id: string]: DetailsItemInstance;
    }>;
    defaultTemplates: import("vue").Ref<{
        [type: string]: string;
    }>;
    currentFeatureId: import("vue").Ref<string | undefined>;
    slowLoadingFlag: import("vue").Ref<boolean>;
    activeGreedy: import("vue").Ref<number>;
    lastHilight: import("vue").Ref<number>;
    hilightToggle: import("vue").Ref<boolean>;
    removeLayer: (layer: LayerInstance) => void;
    addConfigProperty: (item: DetailsItemInstance) => void;
}, "removeLayer" | "addConfigProperty">>;
