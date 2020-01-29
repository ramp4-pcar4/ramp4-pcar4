import { RampMapConfig } from 'ramp-geoapi';

import { createApp } from '@/main';
import { ConfigStore } from '@/store/modules/config';
import { Fixture } from '@/store/modules/fixture';

class Map {
    constructor(mapDiv: HTMLElement, config?: RampMapConfig) {
        const thisApp = createApp(mapDiv);

        // TODO: decide whether to move to src/main.ts:createApp
        thisApp.$store.set(ConfigStore.setConfig, config || undefined);

        // TODO: temporary put the app instance on global scope so it can be accessed
        (window as any).thisApp = thisApp;

        // get fixture names to load from somewhere
        // TODO: remove
        console.log('Start loading internal fixtures');

        // start loading fixtures; this is just an example
        // TODO: fixtures specified in the config should be loaded first, then fixtures added through the API
        // TODO: remove
        this.chunkLoader('snowman');
        this.chunkLoader('gazebo');
    }

    // TODO: moves this fixture loading function to a separate file
    // TODO: write logic for loading external fixtures
    chunkLoader(value: string) {
        // perform a dynamic webpack import of a internal fixture (allows for code splitting)
        import(/* webpackChunkName: "[request]" */ `@/fixture/${value}/index.ts`).then((fixture: any) => {
            // TODO: this is horrible
            const map = (window as any).thisApp;

            // fixture.default.map = map;
            map.$store.set('fixture/addFixture!', { value: fixture.default });
        });
    }
}

export default Map;
