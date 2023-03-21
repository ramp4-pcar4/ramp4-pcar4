<template>
    <div class="h-full relative">
        <!-- TODO: should inner shell be a separate component? -->
        <div
            class="inner-shell absolute top-0 left-0 h-full w-full pointer-events-none"
        >
            <div class="sr-only screen-reader-alert"></div>
            <div class="absolute top-8 w-full flex justify-center">
                <button
                    type="button"
                    class="bg-white opacity-0 focus:opacity-100 z-50 shadow-md px-10"
                    @click="openKeyboardInstructions"
                >
                    {{ t('keyboardInstructions.open') }}
                </button>
            </div>
            <keyboard-instructions-modal></keyboard-instructions-modal>
            <panel-stack
                class="panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40"
            ></panel-stack>
            <notification-floating-button
                v-if="!appbarFixture"
            ></notification-floating-button>
            <map-caption class="z-30"></map-caption>
        </div>

        <esri-map v-if="instanceStore.started"></esri-map>
        <div v-else class="w-full h-full">
            <div class="spinner relative inset-x-1/2 inset-y-9/20"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import EsriMap from '@/components/map/esri-map.vue';
import PanelStack from '@/components/panel-stack/panel-stack.vue';
import MapCaption from '@/components/map/map-caption.vue';
import NotificationFloatingButton from '@/components/notification-center/floating-button.vue';
import KeyboardInstructionsModal from './keyboard-instructions.vue';
import { computed, inject } from 'vue';
import type { InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';
import { useFixtureStore } from '@/stores/fixture';
import { useInstanceStore } from '@/stores/instance';

const iApi = inject<InstanceAPI>('iApi');
const instanceStore = useInstanceStore();
const fixtureStore = useFixtureStore();
const { t } = useI18n();

const appbarFixture = computed(() => fixtureStore.items['appbar']);
const openKeyboardInstructions = () => {
    iApi?.event.emit('openKeyboardInstructions');
};
</script>

<style lang="scss" scoped>
.spinner {
    border: 10px solid #b3d4fc;
    border-top: 10px solid #3f51b5;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    animation: spin 2s ease-in-out infinite;
}
</style>
