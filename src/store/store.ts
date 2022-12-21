import { createStore as vuexCreateStore, Store as vuexStore } from 'vuex';
import { make } from 'vuex-pathify';
import pathify from 'vuex-pathify';

import { config } from '@/store/modules/config';
import { fixture } from '@/store/modules/fixture';
import { layer } from '@/store/modules/layer';
import { mapcaption } from '@/store/modules/map-caption';
import { maptip } from '@/store/modules/maptip';
import { notification } from '@/store/modules/notification';
import { panel } from '@/store/modules/panel';
import type { RootState } from '@/store/state';

// pathify.options.deep = 2;

export function store() {
    return vuexCreateStore(<RootState>{
        plugins: [pathify.plugin],
        modules: {
            app: {
                namespaced: true,
                state: { started: false },
                mutations: { ...make.mutations({ started: false }) }
            },
            config: config(),
            fixture: fixture(),
            layer: layer(),
            mapcaption: mapcaption(),
            maptip: maptip(),
            notification: notification(),
            panel: panel()
        }
    });
}

export type storeType = vuexStore<Record<string, unknown>>;

declare module 'vuex' {
    // declare augmentation for Vuex store for Pathify
    interface Store<S> {
        set: <T>(path: string, value: any) => Promise<T> | undefined;
        get: <T>(path: string, ...args: any) => T | undefined;
        copy: <T>(path: string, ...args: any) => T | undefined;
    }
}
