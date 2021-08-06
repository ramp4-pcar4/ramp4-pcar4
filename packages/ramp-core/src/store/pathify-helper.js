/* temporary solution to get vuex-pathify functionality working until it is supported for Vue 3 */
// TODO: convert to TS (there was some complex typing errors going on)
import { computed } from 'vue';
import { store } from '@/store/store';

export function get(path) {
    console.log("store: ", store, path, path in store.getters ? store.getters[path] : store.get(path));
    return path in store.getters ? store.getters[path] : store.get(path);
}

// have not tested this yet (don't use) since @Sync appears to not be giving any console errors
export function sync(path) {
    return computed({
        get() {
            store.get(path);
        },
        set(value) {
            store.set(path, value);
        }
    });
}

export function call(path, payload) {
    return store.dispatch(path, payload);
}

// const PathifyHelper = context => {
//     const { $store } = context.root;
//     // const get = (path: string) => $store.get(path);
//     const get = path => computed(() => $store.get(path));
//     // const set = (path: string, value: any) => $store.set(path, value);
//     const call = (action, payload) => $store.dispatch(action, payload);

//     return { get, sync, call };
// };
