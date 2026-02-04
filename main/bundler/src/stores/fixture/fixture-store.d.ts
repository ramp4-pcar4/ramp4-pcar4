import { FixtureBase } from './fixture-state';
import { DefPromise } from '../../geo/api';
export declare const useFixtureStore: import('pinia').StoreDefinition<"fixture", import('pinia')._UnwrapAll<Pick<{
    items: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: FixtureBase;
    }, {
        [name: string]: FixtureBase;
    }>;
    loadPromises: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: DefPromise<FixtureBase>;
    }, {
        [name: string]: DefPromise<FixtureBase>;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<FixtureBase>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, "items" | "loadPromises">>, Pick<{
    items: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: FixtureBase;
    }, {
        [name: string]: FixtureBase;
    }>;
    loadPromises: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: DefPromise<FixtureBase>;
    }, {
        [name: string]: DefPromise<FixtureBase>;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<FixtureBase>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, never>, Pick<{
    items: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: FixtureBase;
    }, {
        [name: string]: FixtureBase;
    }>;
    loadPromises: import('../../../vue/dist/vue.esm-bundler.js').Ref<{
        [name: string]: DefPromise<FixtureBase>;
    }, {
        [name: string]: DefPromise<FixtureBase>;
    }>;
    getLoadPromises: (fixtureIds: string[]) => Promise<FixtureBase>[];
    addFixture: (value: FixtureBase) => void;
    removeFixture: (value: FixtureBase) => void;
    addLoadPromise: (fixtureId: string) => void;
}, "getLoadPromises" | "addFixture" | "removeFixture" | "addLoadPromise">>;
