<template>
    <div class="mapnav absolute right-0 bottom-0 pb-36 sm:pb-48 pr-12">
        <div
            class="flex flex-col"
            v-focus-list
            :content="t('panels.controls.items')"
            v-tippy="{
                trigger: 'manual',
                placement: 'top-end',
                maxWidth: 190
            }"
            ref="el"
        >
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

const mapnavStore = useMapnavStore();
const { t } = useI18n();
const el = ref<Element>();

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
 */
const visible = computed(() => mapnavStore.order.map(id => mapnavStore.items[id]).filter(item => item.componentId));
</script>

<style lang="scss" scoped>
.mapnav-section {
    @apply flex-col flex shadow-tm pointer-events-auto;

    .focused {
        @apply text-black;
    }
}
</style>
