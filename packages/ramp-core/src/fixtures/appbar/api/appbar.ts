import Vue from 'vue';

import { APIScope } from '@/api/common';
import { InstanceAPI } from '@/api/internal';
import { AppbarItemConfig } from '../store';

const DIVIDER_ID = 'divider';

export class AppbarAPI extends APIScope {
    constructor(iApi: InstanceAPI) {
        super(iApi);

        this.$iApi.appbar = this;
    }

    /**
     * Overwrites the current appbar config
     *
     * @param {any} appbarConfig The new appbar config
     * @returns {Promise<AppbarItemAPI[]} The list of current Appbar Items in the store, as AppbarItemAPIs
     * @memberof AppbarAPI
     */
    async set(appbarConfig: any): Promise<AppbarItemAPI[] | AppbarItemAPI | undefined> {
        if (!appbarConfig) {
            return undefined;
        }

        for (let i = 0; i < appbarConfig.length; i++) {
            const config = appbarConfig[i];

            // if theres no component specified and its not a divider, retrieve the component from the fixtures folder
            if (!config.component && config.id !== DIVIDER_ID) {
                config.component = (await import(`@/fixtures/${config.id}/index.ts`)).AppbarButton;
                config.id = config.id + '-appbar-button';
            }
        }
        this.$vApp.$store.set('appbar/items', appbarConfig);

        return this.get()!;
    }

    /**
     * Returns the list of all AppbarItemAPIs if no id, otherwise returns the AppbarItemAPI relating to id.
     *
     * @param {string} id Optional. If specified returns the AppbarItem with id
     * @returns {AppbarItemAPI[] | AppbarItemAPI | null}
     * @memberof AppbarAPI
     */
    get(id?: string): AppbarItemAPI[] | AppbarItemAPI | null {
        if (id) {
            const config = this.$vApp.$store.get<AppbarItemConfig | null>('appbar/getById!', id);
            return config ? new AppbarItemAPI(this.$iApi, config) : null;
        }

        const configs = this.$vApp.$store.get<any | null>('appbar/items');
        if (!configs) {
            return null;
        }

        let items: AppbarItemAPI[] = [];
        Object.keys(configs).forEach((id: string) => {
            items.push(new AppbarItemAPI(this.$iApi, configs[id]));
        });

        return items;
    }
}

export class AppbarItemAPI extends APIScope {
    readonly _config: AppbarItemConfig;

    /**
     * ID of this appbar item.
     *
     * @readonly
     * @type {string}
     * @memberof AppbarItemAPI
     */
    get id(): string {
        return this._config.id;
    }

    constructor(iApi: InstanceAPI, config: AppbarItemConfig) {
        super(iApi);

        this._config = config;

        // Register component if it hasn't been registered before
        if (!(this.id in this.$vApp.$options.components!)) {
            Vue.component(this.id, this._config.component);
        }
    }
}
