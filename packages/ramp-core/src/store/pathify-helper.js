/* temporary solution to get vuex-pathify functionality working until it is supported for Vue 3 */
// TODO: convert to TS (there was some complex typing errors going on)
import { computed } from 'vue';
import { store } from '@/store/store';

export function get(path) {
    const property =
        path in store.getters
            ? computed(() => store.getters[path])
            : computed(() => store.get(path));
    // console.log('store: ', store, path, property);
    return property;
}

export function sync(path) {
    return computed({
        get() {
            return store.get(path);
        },
        set(value) {
            store.set(path, value);
        }
    });
}

export function call(path) {
    return payload => computed(store.dispatch(path, payload));
}
