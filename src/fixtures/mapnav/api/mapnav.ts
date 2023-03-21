import { FixtureInstance } from '@/api';

import type { MapnavFixtureConfig, MapnavItem, MapnavItemSet } from '../store';
import { useMapnavStore } from '../store';

export class MapnavAPI extends FixtureInstance {
    private mapnavStore = useMapnavStore(this.$vApp.$pinia);
    /**
     * Returns `MapnavFixtureConfig` section of the global config file.
     *
     * @readonly
     * @type {MapnavFixtureConfig}
     * @memberof MapnavFixture
     */
    get config(): MapnavFixtureConfig | undefined {
        return super.config;
    }

    /**
     * Parses the mapnav config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {MapnavFixtureConfig} [mapnavConfig]
     * @returns
     * @memberof MapnavAPI
     */
    _parseConfig(mapnavConfig?: MapnavFixtureConfig) {
        if (!mapnavConfig) {
            return;
        }

        const mapnavItems: MapnavItem[] = mapnavConfig.items.map(
            (item: string) => ({
                id: item
            })
        );

        // save mapnav items as a collection to the store
        // they are saves as a set for easy by-id access
        this.mapnavStore.items = mapnavItems.reduce<MapnavItemSet>(
            (map: any, item: any) => {
                map[item.id] = item;
                return map;
            },
            {}
        );

        // save an ordered list of item ids to use when rendering components
        this.mapnavStore.order = mapnavItems.map((item: any) => item.id);

        this._validateItems();
    }

    /**
     * Checks if components specified as mapnav items are registered or not.
     * Will check the literal id values, and id values with `-nav-button` suffixes appended.
     *
     * @memberof MapnavAPI
     */
    _validateItems() {
        // system mapnav controls that are not tied to a fixture
        const systemControls: string[] = [
            'geolocator',
            'zoom',
            'home',
            'fullscreen'
        ];

        // get the ordered list of items and see if any of them are registered
        this.mapnavStore.order.forEach(id => {
            // can't check if the nav button component is registered
            // so we make the assumption that it will always have the `-nav-button` prefix

            // check if fixture exists, or if control is a system control
            if (this.$iApi.fixture.get(id) || systemControls.includes(id)) {
                this.mapnavStore.items[id].componentId = `${id}-nav-button`;
            }
        });
    }
}
