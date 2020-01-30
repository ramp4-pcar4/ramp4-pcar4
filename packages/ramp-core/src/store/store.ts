import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';

import { fixture } from './modules/fixture';
import { legend } from '@/store/modules/legend';
import { layer } from '@/store/modules/layer';
import { config } from '@/store/modules/config';
import { RootState } from '@/store/state';

Vue.use(Vuex);

export const createStore = () =>
    new Vuex.Store<RootState>({
        plugins: [pathify.plugin],
        modules: {
            fixture: fixture(),
            config: config(),
            layer: layer,
            legend: legend()
        }
    });

declare module 'vuex' {
    // Declare augmentation for Vuex store for Pathify
    interface Store<S> {
        set: <T>(path: string, value: any) => Promise<T> | undefined;
        get: <T>(path: string, ...args: any) => T | undefined;
        copy: <T>(path: string, ...args: any) => T | undefined;
    }
}
