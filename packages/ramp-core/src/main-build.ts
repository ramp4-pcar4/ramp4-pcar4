import Vue from 'vue';
import { Store } from 'vuex';

import api from './api';
import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { EnhancedWindow } from '@/types';

export declare const window: EnhancedWindow;

Vue.config.productionTip = false;

import Map from '@/api/map';

export function createApp(mapDiv: HTMLElement): Vue {
    const store: Store<RootState> = createStore();

    const thisApp = new Vue({
        store,
        render: h => h(App)
    }).$mount(mapDiv);

    /* window.RAMP.mapInstances.push({
        Vue,
        app: thisApp
    }); */

    return thisApp;
}

export default {
    Map
};
