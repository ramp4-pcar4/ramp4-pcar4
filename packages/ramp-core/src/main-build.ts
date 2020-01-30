import Vue from 'vue';
import { Store } from 'vuex';

import api from '@/api';
import App from '@/app.vue';
import { createStore, RootState } from '@/store';

Vue.config.productionTip = false;

export function createApp(element: HTMLElement): Vue {
    const store: Store<RootState> = createStore();

    return new Vue({
        store,
        render: h => h(App)
    }).$mount(element);
}

export default api;
