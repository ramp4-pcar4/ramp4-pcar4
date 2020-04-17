<template>
    <div class="mb-10">
        <button class="bg-gray-300" :aria-label="$t('basemap.select')" @click="selectBasemap(basemap)">
            <div>
                <div v-if="basemap.wkid === 3978">
                    <div class="flex h-180 hover:opacity-50" v-for="layer in basemap.layers" v-bind:key="layer.id">
                        <img class="w-full" alt="" :src="layer.url + '/tile/8/285/268'" />
                        <img class="w-full" alt="" :src="layer.url + '/tile/8/285/269'" />
                    </div>
                </div>
                <div v-else-if="basemap.wkid === 102100">
                    <div class="flex h-180 hover:opacity-50" v-for="layer in basemap.layers" v-bind:key="layer.id">
                        <img class="w-full" alt="" :src="layer.url + '/tile/8/91/74'" />
                        <img class="w-full" alt="" :src="layer.url + '/tile/8/91/75'" />
                    </div>
                </div>
            </div>

            <div class="absolute flex w-full bg-black opacity-75 text-white h-30 bottom-0 items-center">
                <div class="pl-5 truncate">
                    <span>{{ basemap.name }}</span>
                </div>

                <div class="ml-auto pr-5">
                    <svg class="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                    </svg>
                </div>
            </div>

            <div class="rv-basemap-check absolute top-0 right-0" v-if="basemap.id === selectedBasemap.id">
                <svg class="fill-current w-25 h-25 relative" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
                </svg>
            </div>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import messages from './lang';
import { BasemapStore } from './store';

@Component({
    i18n: {
        messages
    }
})
export default class BasemapItem extends Vue {
    @Prop() basemap!: any;
    @Get(BasemapStore.selectedBasemap) selectedBasemap!: any;

    // import required basemap store actions
    @Call(BasemapStore.selectBasemap) selectBasemap!: (basemap: any) => void;
}
</script>

<style lang="scss" scoped>
.rv-basemap-check {
    &::before {
        content: '';
        position: absolute;
        border-top: 50px solid rgba(250, 250, 250, 1);
        border-left: 50px solid transparent;
        right: 0;
        top: 0;
    }
}
</style>
