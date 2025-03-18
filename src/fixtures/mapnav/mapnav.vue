<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12">
        <div
            class="flex flex-col"
            v-focus-list
            :content="t('panels.controls.items')"
            v-tippy="{
                trigger: 'manual',
                placement: 'top-end',
                touch: false,
                maxWidth: 190
            }"
            ref="el"
        >
            <!-- Add the draw section here if draw fixture is loaded -->
            <template v-if="isDrawFixtureLoaded">
                <draw-nav-section></draw-nav-section>
                <span class="py-1"></span>
            </template>

            <zoom-nav-section class="mapnav-section bg-white-75 hover:bg-white"></zoom-nav-section>
            <span class="py-1"></span>

            <div class="mapnav-section bg-white-75 hover:bg-white">
                <template v-for="(button, index) in visible" :key="button.id + 'button'">
                    <component :is="button.id + '-nav-button'"></component>
                    <divider-nav class="mapnav-divider" v-if="index !== visible.length - 1"></divider-nav>
                </template>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
import { useMapnavStore } from './store';
import { useI18n } from 'vue-i18n';
import ZoomNavSection from './buttons/zoom-nav.vue';
import DividerNav from './buttons/divider-nav.vue';
import { inject } from 'vue';
import { InstanceAPI } from '@/api/internal';
import DrawNavSection from '../draw/draw-nav-section.vue';

const iApi = inject('iApi') as InstanceAPI;
const mapnavStore = useMapnavStore();
const { t } = useI18n();
const el = ref<Element>();

// A bit of a hack to tell if the draw fixture should be shown. On language change the fixture is removed and not re-added
// Maybe its a bug in the fixture system?
const isDrawFixtureLoaded = computed(() => {
    return iApi.getConfig().fixtures.mapnav.items.some((fixture: string) => fixture === 'draw');
});

const blurEvent = () => {
    (el.value as any)._tippy.hide();
};

const keyupEvent = (e: Event) => {
    const evt = e as KeyboardEvent;
    if (evt.key === 'Tab' && el.value?.matches(':focus')) {
        (el.value as any)._tippy.show();
    }
};

onMounted(() => {
    el.value?.addEventListener('blur', blurEvent);
    el.value?.addEventListener('keyup', keyupEvent);
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);
});

/**
 * Return a list of mapnav items with registered components (ones that can be rendered right now).
 * Filter out the draw button since it's now in its own section
 */
const visible = computed(() =>
    mapnavStore.order.map(id => mapnavStore.items[id]).filter(item => item.componentId && item.id !== 'draw')
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
