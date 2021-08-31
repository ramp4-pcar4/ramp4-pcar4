<template>
    <mapnav-button :onClickFunction="goToHome" :tooltip="$t('mapnav.home')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-32 h-20">
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            <path d="M0 0h24v24H0z" fill="none" />
        </svg>
    </mapnav-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Extent } from '@/geo/api';
import { Vue } from 'vue-property-decorator';

export default defineComponent({
    name: 'HomeNavV',
    methods: {
        goToHome() {
            // Get extent from config and convert it to extent object
            const homeExtent = Extent.fromConfig('home_extent', this.$iApi.getConfig().map.extent);
            // apply extent
            this.$iApi.geo.map.zoomMapTo(homeExtent);
        }
    }
});
</script>

<style lang="scss" scoped></style>
