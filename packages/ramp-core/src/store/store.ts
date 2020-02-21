import Vue from 'vue';
import Vuex from 'vuex';
import pathify from 'vuex-pathify';

import { config } from '@/store/modules/config';
import { fixture } from '@/store/modules/fixture';
import { layer } from '@/store/modules/layer';
import { legend } from '@/store/modules/legend';
import { panel } from '@/store/modules/panel';
import { RootState } from '@/store/state';

Vue.use(Vuex);

// pathify.options.deep = 2;

export const createStore = () =>
    new Vuex.Store<RootState>({
        plugins: [pathify.plugin],
        modules: {
            config: config(),
            fixture: fixture(),
            layer: layer(),
            legend: legend(),
            panel: panel()
        }
    });

declare module 'vuex' {
    // declare augmentation for Vuex store for Pathify
    interface Store<S> {
        set: <T>(path: string, value: any) => Promise<T> | undefined;
        get: <T>(path: string, ...args: any) => T | undefined;
        copy: <T>(path: string, ...args: any) => T | undefined;
    }
}
