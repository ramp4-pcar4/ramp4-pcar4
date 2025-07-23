<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12">
        <div
            class="mapnav-section flex flex-col"
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
            <template v-if="isDrawFixtureLoaded && windowHeight > cutoffHeight">
                <draw-nav-section></draw-nav-section>
                <span class="py-1"></span>
            </template>

            <zoom-nav-section class="mapnav-section bg-white-75 hover:bg-white"></zoom-nav-section>
            <span class="py-1"></span>

            <div class="mapnav-section bg-white-75 hover:bg-white">
                <mapnav-button
                    class="self-center"
                    v-if="windowHeight <= cutoffHeight"
                    :onClickFunction="
                        () => {
                            sepNavVisible = !sepNavVisible;
                        }
                    "
                    :tooltip="sepNavVisible ? $t('mapnav.closeMenu') : $t('mapnav.openMenu')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 319 511.61"
                        class="fill-current w-6 mx-auto transition-all transform"
                        :class="{ 'rotate-180': sepNavVisible }"
                    >
                        <path
                            d="m270.08 5.89 43.04 43.04c7.85 7.86 7.83 20.72 0 28.54L134.77 255.82l178.35 178.35c7.85 7.86 7.8 20.73 0 28.54l-43.04 43.04c-7.83 7.82-20.71 7.82-28.54 0L49.29 313.49l-.37-.36-43.04-43.04c-7.82-7.83-7.86-20.68 0-28.54l43.04-43.04.37-.36L241.54 5.89c7.85-7.85 20.68-7.85 28.54 0z"
                        />
                    </svg>
                </mapnav-button>
            </div>

            <div v-if="windowHeight > cutoffHeight" class="mapnav-section bg-white-75 hover:bg-white">
                <template v-for="(button, index) in visible" :key="button.id + 'button'">
                    <component :is="button.id + '-nav-button'"></component>
                    <divider-nav class="mapnav-divider" v-if="index !== visible.length - 1" />
                </template>
            </div>
        </div>
        <div
            v-if="windowHeight <= cutoffHeight && sepNavVisible"
            class="mapnav-section flex flex-col flex-wrap-reverse shadow-tm absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0.5"
            :style="{ maxHeight: `${(windowHeight - 70) * 0.8}px`, height: 'fit-content', width: 'fit-content' }"
            :content="t('panels.controls.items')"
            v-tippy="{
                trigger: 'manual',
                placement: 'top-end',
                maxWidth: 190
            }"
        >
            <div v-if="isDrawFixtureLoaded">
                <draw-nav-section showOutline></draw-nav-section>
            </div>
            <template v-for="button in visible" :key="button.id + 'button'">
                <component
                    :is="button.id + '-nav-button'"
                    class="mapnav-section bg-white-75 hover:bg-white"
                    showOutline
                />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref, nextTick } from 'vue';
import { useMapnavStore } from './store';
import { useI18n } from 'vue-i18n';
import ZoomNavSection from './buttons/zoom-nav.vue';
import DividerNav from './buttons/divider-nav.vue';
import { InstanceAPI } from '@/api/internal';
import DrawNavSection from '../draw/draw-nav-section.vue';

const rootResizeObserver = ref<ResizeObserver | undefined>(undefined);

const iApi = inject('iApi') as InstanceAPI;
const mapnavStore = useMapnavStore();
const { t } = useI18n();
const el = ref<Element>();

// A bit of a hack to tell if the draw fixture should be shown. On language change the fixture is removed and not re-added
// Maybe its a bug in the fixture system?
const isDrawFixtureLoaded = computed(() => {
    return iApi.getConfig().fixtures.mapnav.items.some((fixture: string) => fixture === 'draw');
});

const windowHeight = ref(iApi.$rootEl?.clientHeight);
const sepNavVisible = ref(false);

const cutoffHeight = ref(0);

const updateHeight = () => {
    windowHeight.value = iApi.$rootEl?.clientHeight;
};

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

    rootResizeObserver.value = new ResizeObserver(updateHeight);
    rootResizeObserver.value.observe(iApi.$rootEl);
    nextTick(() => {
        cutoffHeight.value = visible.value.length * 82;
    });
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);

    rootResizeObserver.value!.disconnect();
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
    @apply flex-col flex flex-wrap-reverse items-start shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
