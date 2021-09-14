<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 pr-12">
        <div class="flex flex-col" v-focus-list>
            <zoom-nav-section class="mapnav-section bg-white-75 hover:bg-white"></zoom-nav-section>
            <span class="py-1"></span>
            <div class="mapnav-section bg-white-75 hover:bg-white">
                <template v-for="(button, index) in visible" :key="button.id + 'button'">
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
import { defineComponent } from 'vue';
import { get } from '@/store/pathify-helper';

import ZoomNavV from './buttons/zoom-nav.vue';
import DividerNavV from './buttons/divider-nav.vue';

export default defineComponent({
    name: 'MapnavV',
    components: {
        'divider-nav': DividerNavV,
        'zoom-nav-section': ZoomNavV
    },

    data() {
        return {
            visible: get('mapnav/visible')
        };
    }
});
</script>

<style lang="scss">
.mapnav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
