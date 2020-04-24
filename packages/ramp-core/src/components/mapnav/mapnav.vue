<template>
    <div>
        <div class="flex flex-col" v-focus-list>
            <zoom-nav-section class="map-nav-section bg-white-75 hover:bg-white"></zoom-nav-section>
            <span class="py-1"></span>
            <div class="map-nav-section bg-white-75 hover:bg-white">
                <template v-for="(button, index) in visible">
                    <component
                        :is="button.id + '-nav-button'"
                        class="default-focus-style w-32 h-32 text-gray-600 hover:text-black"
                        :key="button.id + 'button'"
                        v-focus-item
                    ></component>
                    <divider-nav class="map-nav-divider" v-if="index !== visible.length - 1" :key="button.id + 'spacer'"></divider-nav>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator';
import { Get, Call } from 'vuex-pathify';

import { GlobalEvents } from '@/api';
import { MapnavItemInstance } from '@/store/modules/mapnav';

import FullscreenNavV from './buttons/fullscreen-nav.vue';
import HelpNavV from './buttons/help-nav.vue';
import HomeNavV from './buttons/home-nav.vue';
import ZoomNavV from './buttons/zoom-nav.vue';
import DividerNavV from './buttons/divider-nav.vue';

@Component({
    components: {
        'divider-nav': DividerNavV,
        'fullscreen-nav-button': FullscreenNavV,
        'help-nav-button': HelpNavV,
        'home-nav-button': HomeNavV,
        'zoom-nav-section': ZoomNavV
    }
})
export default class MapNavV extends Vue {
    // TODO: put mapnav in config
    //@Get('config/mapnav') config!;
    @Get('mapnav/visible') visible!: any[];
    config = ['fullscreen', 'help', 'home', 'basemap'];

    @Watch('config')
    onConfigChange(newConfig: any[]) {
        const mapnavItems = newConfig.map(item => new MapnavItemInstance(item));

        // save mapnav items as a collection to the store
        // they are saves as a set for easy by-id access
        this.$store.set(
            'mapnav/items',
            mapnavItems.reduce<any>((map, item) => {
                map[item.id] = item;
                return map;
            }, {})
        );

        // save an ordered list of item ids to use when rendering components
        this.$store.set(
            'mapnav/order',
            mapnavItems.map(item => item.id)
        );

        this._validateItems();
    }

    /**
     * Checks if components specified as mapnav items are registered or not.
     * Will check the literal id values, and id values with `-nav-button` suffixes appended.
     *
     * Works the same as `_validateItems` from AppbarAPI
     */
    _validateItems() {
        // get the ordered list of items and see if any of them are registered
        this.$store.get<string[]>('mapnav/order')!.forEach(id => {
            // check components with the literal id and with a `-nav-button` suffix;
            [`${id}-nav-button`, id].some(v => {
                if (v in this.$options.components!) {
                    // if an item is registered globally, save the name of the registered component
                    this.$store.set(`mapnav/items@${id}.componentId`, v);
                }
            });
        });
    }

    mounted() {
        // run the config update to prevent race conditions
        this.onConfigChange(this.config);

        // same as appbar:
        // since components used in mapnav can be registered after this point, listen to the global component registration event and re-validate items
        this.$iApi.on(GlobalEvents.COMPONENT, this._validateItems.bind(this));
    }
}
</script>

<style lang="scss" scoped>
.map-nav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;
}
</style>
