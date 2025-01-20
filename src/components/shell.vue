<template>
    <div class="h-full relative">
        <!-- TODO: should inner shell be a separate component? -->
        <div class="inner-shell absolute top-0 left-0 h-full w-full pointer-events-none">
            <div class="sr-only screen-reader-alert"></div>
            <div class="absolute top-8 w-full flex justify-center">
                <button
                    type="button"
                    class="bg-white hidden-until-focus z-50 shadow-md px-10"
                    @click="openKeyboardInstructions"
                >
                    {{ t('keyboardInstructions.open') }}
                </button>
            </div>
            <keyboard-instructions-modal></keyboard-instructions-modal>
            <panel-stack
                class="panel-stack sm:flex absolute inset-0 overflow-hidden sm:p-12 z-10 sm:pl-80 xs:pl-40 sm:pb-48 xs:pb-28 xs:pr-0 sm:pr-40"
            ></panel-stack>
            <notification-floating-button v-if="!appbarFixture"></notification-floating-button>
            <map-caption class="z-30"></map-caption>
        </div>

        <esri-map v-if="instanceStore.started"></esri-map>
        <div v-else class="w-full h-full">
            <div class="spinner relative inset-x-1/2 inset-y-9/20"></div>
        </div>

        <teleport v-for="panel in teleported()" :to="panel.teleport?.target" :key="panel.id">
            <panel-container :key="`${panel.id}`" :panel="panel"></panel-container>
        </teleport>
    </div>
</template>

<script setup lang="ts">
import EsriMap from '@/components/map/esri-map.vue';
import PanelStack from '@/components/panel-stack/panel-stack.vue';
import PanelContainer from '@/components/panel-stack/panel-container.vue';
import MapCaption from '@/components/map/map-caption.vue';
import NotificationFloatingButton from '@/components/notification-center/floating-button.vue';
import KeyboardInstructionsModal from './keyboard-instructions.vue';
import { computed, inject } from 'vue';
import type { InstanceAPI, PanelInstance } from '@/api';
import { useI18n } from 'vue-i18n';
import { useFixtureStore } from '@/stores/fixture';
import { useInstanceStore } from '@/stores/instance';
import { usePanelStore } from '@/stores/panel';

const iApi = inject<InstanceAPI>('iApi');
const instanceStore = useInstanceStore();
const fixtureStore = useFixtureStore();
const panelStore = usePanelStore();
const { t } = useI18n();

const appbarFixture = computed(() => fixtureStore.items['appbar']);
const openKeyboardInstructions = () => {
    iApi?.event.emit('openKeyboardInstructions');
};

const teleported = (): PanelInstance[] => panelStore.teleported;
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

/* Compared to using `opacity: 0`, this method prevents WAVE contrast errors.*/

.hidden-until-focus {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    clip-path: inset(100%);
}

.hidden-until-focus:focus {
    position: static;
    width: auto;
    height: auto;
    clip: auto;
    clip-path: none;
}
</style>
