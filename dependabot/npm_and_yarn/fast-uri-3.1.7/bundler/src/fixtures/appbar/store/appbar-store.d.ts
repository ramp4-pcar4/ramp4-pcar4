import { AppbarItemInstance, AppbarItemSet } from './appbar-state';
export declare const useAppbarStore: import('pinia').StoreDefinition<"appbar", Pick<{
    items: import('../../../../vue/dist/vue.esm-bundler.js').Ref<AppbarItemSet, AppbarItemSet>;
    order: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[][], string[][]>;
    temporary: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    visible: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "items" | "order" | "temporary">, Pick<{
    items: import('../../../../vue/dist/vue.esm-bundler.js').Ref<AppbarItemSet, AppbarItemSet>;
    order: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[][], string[][]>;
    temporary: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    visible: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "visible">, Pick<{
    items: import('../../../../vue/dist/vue.esm-bundler.js').Ref<AppbarItemSet, AppbarItemSet>;
    order: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[][], string[][]>;
    temporary: import('../../../../vue/dist/vue.esm-bundler.js').Ref<string[], string[]>;
    visible: import('../../../../vue/dist/vue.esm-bundler.js').ComputedRef<(string | AppbarItemInstance)[][]>;
    addTempButton: (value: string) => void;
    removeButton: (value: string) => void;
}, "addTempButton" | "removeButton">>;
