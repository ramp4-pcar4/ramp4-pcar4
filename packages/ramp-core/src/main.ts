import Map from '@/api/map';
import Vue from 'vue';
import { Store } from 'vuex';

import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import { EnhancedWindow } from '@/types';

export declare const window: EnhancedWindow;

Vue.config.productionTip = false;

export const createApp = (mapDiv: HTMLElement): Vue => {
    const store: Store<RootState> = createStore();

    const thisApp = new Vue({
        store,
        render: h => h(App)
    }).$mount(mapDiv);

    window.RAMP.mapInstances.push({
        Vue,
        app: thisApp
    });

    return thisApp;
};

window.RAMP = {
    Map,
    mapInstances: []
};
