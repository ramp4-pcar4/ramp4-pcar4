<template>
    <mapnav-button :onClickFunction="goToHome" :tooltip="$t('mapnav.home')">
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-32 h-20"
        >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </mapnav-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { ExtentSet } from '@/geo/api';

export default defineComponent({
    name: 'HomeNavV',
    methods: {
        goToHome() {
            // Get extent from map
            const extentSet: ExtentSet = this.$iApi.geo.map.getExtentSet();
            // TODO: figure out which extent to zoom to. Maybe we want to add a start/home/init extent?
            this.$iApi.geo.map.zoomMapTo(extentSet.fullExtent);
        }
    }
});
</script>

<style lang="scss" scoped></style>
