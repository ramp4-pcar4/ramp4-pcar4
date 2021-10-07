import { FixtureInstance } from '@/api';

import {
    MapnavFixtureConfig,
    MapnavItemInstance,
    MapnavItemSet
} from '../store';

export class MapnavAPI extends FixtureInstance {
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
     * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {MapnavFixtureConfig} [appbarConfig]
     * @returns
     * @memberof MapnavAPI
     */
    _parseConfig(mapnavConfig?: MapnavFixtureConfig) {
        if (!mapnavConfig) {
            return;
        }

        const mapnavItems = mapnavConfig.items.map(
            (item: any) => new MapnavItemInstance(item)
        );

        // save mapnav items as a collection to the store
        // they are saves as a set for easy by-id access
        this.$vApp.$store.set(
            'mapnav/items',
            mapnavItems.reduce<MapnavItemSet>((map: any, item: any) => {
                map[item.id] = item;
                return map;
            }, {})
        );

        // save an ordered list of item ids to use when rendering components
        this.$vApp.$store.set(
            'mapnav/order',
            mapnavItems.map((item: any) => item.id)
        );

        this._validateItems();
    }

    /**
     * Checks if components specified as mapnav items are registered or not.
     * Will check the literal id values, and id values with `-nav-button` suffixes appended.
     *
     * @memberof MapnavAPI
     */
    _validateItems() {
        // get the ordered list of items and see if any of them are registered
        this.$vApp.$store.get<string[]>('mapnav/order')!.forEach(id => {
            // check components with the literal id and with a `-nav-button` suffix;
            [`${id}-nav-button`, id].some(v => {
                // TODO: fix this if needed
                // if (v in this.$vApp.$options.components!) {
                // if an item is registered globally, save the name of the registered component
                this.$vApp.$store.set(`mapnav/items@${id}.componentId`, v);
                // }
            });
        });
    }
}
