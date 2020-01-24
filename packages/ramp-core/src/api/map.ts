import { RampMapConfig } from 'ramp-geoapi';

import { createApp } from '@/main';
import { ConfigStore } from '@/store/modules/config';

class Map {
    constructor(mapDiv: HTMLElement, config?: RampMapConfig) {
        const thisApp = createApp(mapDiv);

        // TODO: decide whether to move to src/main.ts:createApp
        (thisApp.$store as any).set(ConfigStore.setConfig, config || undefined);
    }
}

export default Map;
