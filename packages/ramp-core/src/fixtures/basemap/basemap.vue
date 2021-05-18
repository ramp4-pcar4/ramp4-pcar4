<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ $t('basemap.title') }}
        </template>

        <template #controls>
            <pin
                @click="panel.pin()"
                :active="isPinned"
                v-if="!$iApi.screenSize !== 'xs'"
            ></pin>
            <close
                @click="panel.close()"
                v-if="$iApi.screenSize !== 'xs'"
            ></close>
        </template>

        <template #content>
            <div class="h-600 overflow-y-auto">
                <div
                    class="mx-5"
                    v-for="tileSchema in tileSchemas"
                    v-bind:key="tileSchema.id"
                >
                    <div class="mt-10 mb-5 flex">
                        <h3>
                            {{ tileSchema.name }}
                        </h3>
                        <!-- TODO: check if current basemap matches projection, if not need "Map Refresh required" warning here -->
                        <div
                            class="flex truncate px-5 ml-auto"
                            v-if="
                                tileSchema.id !== selectedBasemap.tileSchemaId
                            "
                        >
                            <svg
                                class="fill-current w-16 h-16"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                                />
                            </svg>
                            <span class="text-blue-600 pl-5">{{
                                $t('basemap.refresh')
                            }}</span>
                        </div>
                    </div>

                    <ul
                        class="border-t border-b border-gray-600"
                        v-focus-list
                        v-if="basemaps.length > 0"
                    >
                        <li
                            v-for="basemap in filterBasemaps(tileSchema.id)"
                            v-bind:key="basemap.id"
                        >
                            <basemap-item
                                :basemap="basemap"
                                class="block relative overflow-hidden"
                            ></basemap-item>
                        </li>
                    </ul>
                </div>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelInstance } from '@/api';

import { BasemapStore } from './store';
import BasemapItem from './basemap-item.vue';

@Component({
    components: {
        BasemapItem
    }
})
export default class BasemapComponent extends Vue {
    @Prop() panel!: PanelInstance;
    // fetch basemap store properties/data
    @Get(BasemapStore.tileSchemas) tileSchemas!: Array<any>;
    @Get(BasemapStore.basemaps) basemaps!: Array<any>;
    @Get(BasemapStore.selectedBasemap) selectedBasemap!: any;

    get isPinned(): boolean {
        return this.panel.isPinned;
    }

    // filter out all the basemaps that match the current schema
    filterBasemaps(schemaId: string) {
        return this.basemaps.filter(
            basemap => basemap.tileSchemaId === schemaId
        );
    }
}
</script>

<style lang="scss" scoped></style>
