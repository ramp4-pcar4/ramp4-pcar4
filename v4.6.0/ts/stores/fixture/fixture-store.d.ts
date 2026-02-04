import type { FixtureBase } from './fixture-state';
import { DefPromise } from '@/geo/api';
export declare const useFixtureStore: import("pinia").StoreDefinition<"fixture", import("pinia")._UnwrapAll<Pick<{
    items: import("vue").Ref<{
        [name: string]: FixtureBase;
    }>;
    loadPromises: import("vue").Ref<{
        [name: string]: DefPromise;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<void>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, "items" | "loadPromises">>, Pick<{
    items: import("vue").Ref<{
        [name: string]: FixtureBase;
    }>;
    loadPromises: import("vue").Ref<{
        [name: string]: DefPromise;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<void>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, never>, Pick<{
    items: import("vue").Ref<{
        [name: string]: FixtureBase;
    }>;
    loadPromises: import("vue").Ref<{
        [name: string]: DefPromise;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<void>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, "getLoadPromises" | "addFixture" | "removeFixture" | "addLoadPromise">>;
