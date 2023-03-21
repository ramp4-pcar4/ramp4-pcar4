import { FixtureInstance } from '@/api';

import { AppbarItemInstance } from '../store';

import type { AppbarFixtureConfig, AppbarItemSet } from '../store';

import { useAppbarStore } from '../store';

export class AppbarAPI extends FixtureInstance {
    /**
     * Returns `AppbarFixtureConfig` section of the global config file.
     *
     * @readonly
     * @type {AppbarFixtureConfig}
     * @memberof AppbarFixture
     */
    get config(): AppbarFixtureConfig | undefined {
        return super.config;
    }

    /**
     * Parses the appbar config JSON snippet from the config file and save resulting objects to the fixture store.
     *
     * @param {AppbarFixtureConfig} [appbarConfig]
     * @returns
     * @memberof AppbarAPI
     */
    _parseConfig(appbarConfig?: AppbarFixtureConfig) {
        if (!appbarConfig) {
            return;
        }

        const appbarStore = useAppbarStore(this.$vApp.$pinia);

        let config;
        // wrap the appbar config if needed so it is always a 2d array
        if (!Array.isArray(appbarConfig.items[0])) {
            config = [appbarConfig.items];
        } else {
            config = appbarConfig.items;
        }

        const appbarItems: (string | AppbarItemInstance)[][] = [];

        config.forEach((appbarItemList: any[]) => {
            appbarItems.push(
                appbarItemList.map(item => {
                    if (typeof item === 'string') {
                        return item;
                    }
                    return new AppbarItemInstance(item);
                })
            );
        });

        // save appbar items as a collection to the store
        // they are saves as a set for easy by-id access
        appbarStore.items = appbarItems
            .flat()
            .reduce<AppbarItemSet>((map, item) => {
                map[item instanceof AppbarItemInstance ? item.id : item] = item;
                return map;
            }, {});

        // save an ordered list of item ids to use when rendering components
        appbarStore.order = appbarItems.map(subArray =>
            subArray.map(item =>
                item instanceof AppbarItemInstance ? item.id : item
            )
        );

        this._validateItems();
    }

    /**
     * Checks if components specified as appbar items are registered or not.
     *
     * @memberof AppbarAPI
     */
    _validateItems() {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        // get the ordered list of items and see if any of them are registered
        appbarStore.order.flat().forEach(id => {
            if (typeof appbarStore.items[id] === 'string') {
                return;
            }
            // check for components with the id
            [id].some(v => {
                if (this.$iApi.fixture.get(v) && !appbarStore.items[id]) {
                    // if an item is registered globally, save the name of the registered component
                    (
                        appbarStore.items[id] as AppbarItemInstance
                    ).componentId = `${v}-appbar-button`;
                }
            });
        });
    }
}
