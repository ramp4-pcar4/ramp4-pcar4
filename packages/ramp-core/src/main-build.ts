import Vue from 'vue';
import { Store } from 'vuex';

import api from '@/api';
import App from '@/app.vue';
import { createStore, RootState } from '@/store';
import GapiLoader, { GeoApi } from 'ramp-geoapi';
import { EnhancedWindow } from '@/types';

export declare var window: EnhancedWindow;

Vue.config.productionTip = false;

export function createApp(element: HTMLElement): Vue {
    const store: Store<RootState> = createStore();

    /* const thisApp = */
    return new Vue({
        store,
        render: h => h(App)
    }).$mount(element);

    /* window.RAMP.mapInstances.push({
        Vue,
        app: thisApp
    }); 

    return thisApp; */
}

const gapiPromise: Promise<GeoApi> = GapiLoader(window);

gapiPromise.then((gapi: GeoApi) => {
    window.RAMP = {
        geoapi: gapi,
        Map,
        mapInstances: []
    };
});

export default api;
