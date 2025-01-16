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
            class="mapnav-section absolute right-56 bottom-36 sm:bottom-48 items-start z-50 gap-0 bg-white-75 hover:bg-white"
            :class="{
                'h-[198px]': windowHeight <= cutoffHeight - 78,
                'h-[165px]': windowHeight <= cutoffHeight - 110,
                'h-[131px]': windowHeight <= cutoffHeight - 140,
                'h-[100px]': windowHeight <= cutoffHeight - 175
            }"
            v-focus-list
            :content="t('panels.controls.items')"
            v-tippy="{
                trigger: 'manual',
                placement: 'top-end',
                maxWidth: 190
            }"
        >
            <template v-for="(button, index) in visible" :key="button.id + 'button'">
                <component :is="button.id + '-nav-button'" />
                <divider-nav class="mapnav-divider w-[20px]" v-if="index !== visible.length - 1" />
            </template>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import { useMapnavStore } from './store';
import { useI18n } from 'vue-i18n';
import ZoomNavSection from './buttons/zoom-nav.vue';
import DividerNav from './buttons/divider-nav.vue';
import type { InstanceAPI } from '@/api';

const iApi = inject<InstanceAPI>('iApi')!;

const rootResizeObserver = ref<ResizeObserver | undefined>(undefined);

const mapnavStore = useMapnavStore();
const { t } = useI18n();
const el = ref<Element>();

const windowHeight = ref(iApi.$rootEl?.clientHeight);
const sepNavVisible = ref(false);

const cutoffHeight = 420;

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
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);

    el.value?.removeEventListener('keyup', keyupEvent);

    rootResizeObserver.value!.disconnect();
});

/**
 * Return a list of mapnav items with registered components (ones that can be rendered right now).
 */
const visible = computed(() => mapnavStore.order.map(id => mapnavStore.items[id]).filter(item => item.componentId));
</script>

<style lang="scss" scoped>
.mapnav-section {
    @apply flex-col flex flex-wrap-reverse w-max items-start shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
