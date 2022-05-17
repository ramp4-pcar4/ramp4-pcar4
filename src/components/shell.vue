<template>
    <div class="h-full relative">
        <!-- TODO: should inner shell be a separate component? -->
        <div
            class="inner-shell absolute top-0 left-0 h-full w-full pointer-events-none"
        >
            <div class="sr-only screen-reader-alert"></div>
            <div class="absolute top-8 w-full flex justify-center">
                <button
                    class="bg-white opacity-0 focus:opacity-100 z-50 shadow-md px-10"
                    @click="openKeyboardInstructions"
                >
                    {{ $t('keyboardInstructions.open') }}
                </button>
            </div>
            <keyboard-instructions-modal-v />
            <panel-stack-v
                class="panel-stack sm:flex absolute inset-0 overflow-hidden xs:pl-40 sm:p-12 sm:pl-80 z-10 sm:pb-48 xs:pb-28"
            />
            <notifications-floating-button-v v-if="!appbarFixture" />
            <map-caption-v class="z-10" />
        </div>

        <esri-map-v v-if="start" />
        <div v-else class="w-full h-full">
            <div class="spinner relative inset-x-1/2 inset-y-9/20"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue';
import EsriMapV from '@/components/map/esri-map.vue';
import PanelStackV from '@/components/panel-stack/panel-stack.vue';
import MapCaptionV from '@/components/map/map-caption.vue';
import NotificationsFloatingButtonV from '@/components/notification-center/floating-button.vue';
import KeyboardInstructionsModalV from './keyboard-instructions.vue';
import { GlobalEvents } from '@/api';
import type { InstanceAPI } from '@/api';
import type { storeType } from '@/store';

const iApi = inject('iApi') as InstanceAPI;
const store = inject('thisStore') as storeType;
const appbarFixture = ref(store.get(`fixture/items@appbar`));
const start = ref(false);

// the start property is used to prevent the esri-map component from instantiating
// until the property turns true. trickery!
if (iApi.startRequired) {
    iApi.event.once(GlobalEvents.MAP_START, () => {
        start.value = true;
    });
} else {
    iApi.event.emit(GlobalEvents.MAP_START);
    start.value = true;
}

const openKeyboardInstructions = () => {
    iApi.event.emit('openKeyboardInstructions');
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
