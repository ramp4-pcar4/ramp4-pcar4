import { RampMapConfig } from 'ramp-geoapi';

import { createApp } from '@/main-build';
import { ConfigStore } from '@/store/modules/config';

import FixtureAPI from './fixture';

class Map {
    fixture: FixtureAPI;

    constructor(mapDiv: HTMLElement, config?: RampMapConfig) {
        const thisApp = createApp(mapDiv);

        this.fixture = new FixtureAPI(thisApp); // pass the map reference to the FixtureAPI

        // TODO: decide whether to move to src/main.ts:createApp
        thisApp.$store.set(ConfigStore.setConfig, config || undefined);
    }
}

export default Map;
