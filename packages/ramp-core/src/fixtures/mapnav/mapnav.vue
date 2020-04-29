<template>
    <div class="absolute right-0 bottom-0 pb-12 pr-12">
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

import FullscreenNavV from './buttons/fullscreen-nav.vue';
import HelpNavV from './buttons/help-nav.vue';
import HomeNavV from './buttons/home-nav.vue';
import ZoomNavV from './buttons/zoom-nav.vue';
import DividerNavV from './buttons/divider-nav.vue';

Vue.component('fullscreen-nav-button', FullscreenNavV);
Vue.component('help-nav-button', HelpNavV);
Vue.component('home-nav-button', HomeNavV);

@Component({
    components: {
        'divider-nav': DividerNavV,
        'zoom-nav-section': ZoomNavV
    }
})
export default class MapNavV extends Vue {
    @Get('mapnav/visible') visible!: any[];
}
</script>

<style lang="scss" scoped>
.map-nav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;
}
</style>
