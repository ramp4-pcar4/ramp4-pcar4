import { FixtureInstance } from '@/api';

import {
    AppbarFixtureConfig,
    AppbarItemInstance,
    AppbarItemSet
} from '../store';

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

        const appbarItems = appbarConfig.items.map(
            item => new AppbarItemInstance(item)
        );

        // save appbar items as a collection to the store
        // they are saves as a set for easy by-id access
        this.$vApp.$store.set(
            'appbar/items',
            appbarItems.reduce<AppbarItemSet>((map, item) => {
                map[item.id] = item;
                return map;
            }, {})
        );

        // save an ordered list of item ids to use when rendering components
        this.$vApp.$store.set(
            'appbar/order',
            appbarItems.map(item => item.id)
        );

        if (appbarConfig.temporaryButtons) {
            const appbarTempItems = Object.fromEntries(
                appbarConfig.temporaryButtons.map(item => {
                    if (typeof item === 'string') {
                        return [`${item}-panel`, new AppbarItemInstance(item)];
                    }
                    return [
                        item.panelId,
                        new AppbarItemInstance(item.appbarItem)
                    ];
                })
            );
            this.$vApp.$store.set('appbar/tempButtonDict', appbarTempItems);
        }
        this._validateItems();
    }

    /**
     * Checks if components specified as appbar items are registered or not.
     * Will check the literal id values, and id values with `-appbar-button` suffixes appended.
     *
     * @memberof AppbarAPI
     */
    _validateItems() {
        // get the ordered list of items and see if any of them are registered
        this.$vApp.$store.get<string[]>('appbar/order')!.forEach(id => {
            // appbar check components with the literal id and with a `-appbar-button` suffix;
            [`${id}-appbar-button`, id].some(v => {
                // TODO: fix this if needed
                // if (v in this.$vApp.$options.components!) {
                // if an item is registered globally, save the name of the registered component
                this.$vApp.$store.set(`appbar/items@${id}.componentId`, v);
                // }
            });
        });

        // check the list of temp appbar buttons as well
        const tempButtonDict = this.$vApp.$store.get<any>(
            'appbar/tempButtonDict'
        );
        Object.keys(tempButtonDict).forEach(key => {
            const id = tempButtonDict[key].id;
            [`${id}-appbar-button`, id].some(v => {
                // TODO: fix this if needed
                // if (v in this.$vApp.$options.components!) {
                // if an item is registered globally, save the name of the registered component
                this.$vApp.$store.set(
                    `appbar/tempButtonDict@${key}.componentId`,
                    v
                );
                // }
            });
        });
    }
}
