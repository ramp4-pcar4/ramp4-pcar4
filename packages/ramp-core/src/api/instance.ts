import { RampMapConfig } from 'ramp-geoapi';

import { createApp } from '@/main-build';
import { ConfigStore } from '@/store/modules/config';

import { FixtureAPI } from './internal';

export class InstanceAPI {
    fixture: FixtureAPI;

    /**
     * The instance of Vue R4MP application controlled by this InstanceAPI.
     *
     * @type {Vue}
     * @memberof InstanceAPI
     */
    readonly vApp: Vue;

    constructor(element: HTMLElement, config?: RampMapConfig) {
        this.vApp = createApp(element);

        this.fixture = new FixtureAPI(this); // pass the iApi reference to the FixtureAPI

        // TODO: decide whether to move to src/main.ts:createApp
        this.vApp.$store.set(ConfigStore.setConfig, config || undefined);
    }
}
