<template>
    <div>
        <div class="relative w-32 h-32" tabindex="-1">
            <button @click="zoomIn()" class="zoom-in default-focus-style w-full h-full text-gray-600 hover:text-black" v-focus-item>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
            <tooltip position="left">{{ $t('mapnav.zoomIn') }}</tooltip>
        </div>
        <divider-nav></divider-nav>
        <div class="relative w-32 h-32" tabindex="-1">
            <button @click="zoomOut()" class="zoom-out default-focus-style w-full h-full text-gray-600 hover:text-black" v-focus-item>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
                    <path d="M19 13H5v-2h14v2z" />
                    <path d="M0 0h24v24H0z" fill="none" />
                </svg>
            </button>
            <tooltip position="left">{{ $t('mapnav.zoomOut') }}</tooltip>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

import DividerNavV from './divider-nav.vue';

@Component({
    components: {
        'divider-nav': DividerNavV
    }
})
export default class FullscreenNavV extends Vue {
    zoomIn(): void {
        console.log('zoom in');
        this.$iApi.map.zoomIn();
    }

    zoomOut(): void {
        console.log('zoom out');
        this.$iApi.map.zoomOut();
    }
}
</script>

<style lang="scss" scoped></style>
