import { FixtureInstance } from '@/api/internal';
import { RampMapConfig } from '@/geo/api';
import { ConfigStore } from '@/store/modules/config';
import { BasemapStore, BasemapConfig } from '../store';

export class BasemapAPI extends FixtureInstance {
    /**
     * Get the current basemap config from the map config
     */
    get config(): BasemapConfig | undefined {
        const mapConfig: RampMapConfig | undefined = this.$vApp.$store.get(
            ConfigStore.getMapConfig
        );

        return {
            basemaps: mapConfig?.basemaps || [],
            tileSchemas: mapConfig?.tileSchemas || [],
            initialBasemapId: mapConfig?.initialBasemapId || ''
        };
    }

    /**
     * Parses the basemap config snippet from the config json
     */
    _parseConfig(basemapConfig?: BasemapConfig) {
        if (!basemapConfig) {
            return;
        }
        this.$iApi.$vApp.$store.set(BasemapStore.basemaps, basemapConfig.basemaps);
        this.$iApi.$vApp.$store.set(BasemapStore.tileSchemas, basemapConfig.tileSchemas);

        this.$iApi.$vApp.$store.set(
            BasemapStore.selectedBasemap,
            basemapConfig.basemaps.find(basemap => basemap.id === basemapConfig.initialBasemapId) ||
                null
        );
    }
}
