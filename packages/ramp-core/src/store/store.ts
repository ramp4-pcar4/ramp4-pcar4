import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';
import cloneDeep from 'clone-deep';

import { legend } from '@/store/modules/legend';
import { config } from '@/store/modules/config';
import { RootState } from '@/store/state';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store<RootState>({
        plugins: [pathify.plugin],
        modules: {
            config: cloneDeep(config),
            legend: cloneDeep(legend)
        }
    });
