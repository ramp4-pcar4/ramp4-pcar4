<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 pr-12">
        <div class="flex flex-col" v-focus-list>
            <zoom-nav-section
                class="mapnav-section bg-white-75 hover:bg-white"
            ></zoom-nav-section>
            <span class="py-1"></span>
            <div class="mapnav-section bg-white-75 hover:bg-white">
                <template v-for="(button, index) in visible" :key="button.id">
                    <component :is="button.id + '-nav-button'"></component>
                    <divider-nav
                        class="mapnav-divider"
                        v-if="index !== visible.length - 1"
                    ></divider-nav>
                </template>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';
import { get } from '@/store/pathify-helper';

import FullscreenNavV from './buttons/fullscreen-nav.vue';
import HomeNavV from './buttons/home-nav.vue';
import ZoomNavV from './buttons/zoom-nav.vue';
import DividerNavV from './buttons/divider-nav.vue';
import MapnavButtonV from './button.vue';

@Options({
    components: {
        'divider-nav': DividerNavV,
        'zoom-nav-section': ZoomNavV,
        'fullscreen-nav-button': FullscreenNavV,
        'home-nav-button': HomeNavV,
        'mapnav-button': MapnavButtonV
    }
})
export default class MapNavV extends Vue {
    visible: any[] = get('mapnav/visible');
    // @Get('mapnav/visible') visible!: any[];
}
</script>

<style lang="scss" scoped>
.mapnav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
