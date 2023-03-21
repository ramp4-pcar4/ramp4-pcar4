<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12">
        <div class="flex flex-col" v-focus-list>
            <zoom-nav-section
                class="mapnav-section bg-white-75 hover:bg-white"
            ></zoom-nav-section>
            <span class="py-1"></span>
            <div class="mapnav-section bg-white-75 hover:bg-white">
                <template
                    v-for="(button, index) in visible"
                    :key="button.id + 'button'"
                >
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

<script setup lang="ts">
import { computed } from 'vue';
import { useMapnavStore } from './store';
import ZoomNavSection from './buttons/zoom-nav.vue';
import DividerNav from './buttons/divider-nav.vue';

const mapnavStore = useMapnavStore();

/**
 * Return a list of mapnav items with registered components (ones that can be rendered right now).
 */
const visible = computed(() =>
    mapnavStore.order
        .map(id => mapnavStore.items[id])
        .filter(item => item.componentId)
);
</script>

<style lang="scss" scoped>
.mapnav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
