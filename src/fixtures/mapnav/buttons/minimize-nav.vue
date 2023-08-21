<template>
    <mapnav-button
        :onClickFunction="hidePanels"
        :tooltip="hidden ? t('mapnav.showAll') : t('mapnav.minimizeAll')"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            class="fill-current w-32 h-20"
        >
            <path
                v-if="hidden"
                d="M18,8H8V18H6V8A2,2 0 0,1 8,6H18V8M14,2H4A2,2 0 0,0 2,4V14H4V4H14V2M22,12V20A2,2 0 0,1 20,22H12A2,2 0 0,1 10,20V12A2,2 0 0,1 12,10H20A2,2 0 0,1 22,12M20,15H17V12H15V15H12V17H15V20H17V17H20V15Z"
            />
            <path
                v-else
                d="M14,4H4V14H2V4A2,2 0 0,1 4,2H14V4M18,6H8A2,2 0 0,0 6,8V18H8V8H18V6M22,12V20A2,2 0 0,1 20,22H12A2,2 0 0,1 10,20V12A2,2 0 0,1 12,10H20A2,2 0 0,1 22,12M20,15H12V17H20V15Z"
            />
        </svg>
    </mapnav-button>
</template>

<script setup lang="ts">
import { GlobalEvents, InstanceAPI, type PanelInstance } from '@/api';
import { usePanelStore } from '@/stores/panel';
import { inject, nextTick, onMounted, reactive, ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject('iApi') as InstanceAPI;

const panelStore = usePanelStore();
const panels = ref<Array<PanelInstance>>([]);
const hidden = ref(false);
const handlers = reactive<Array<string>>([]);

onMounted(() => {
    handlers.push(iApi.event.on(GlobalEvents.PANEL_OPENED, clearHiddenPanels));
});

const hidePanels = () => {
    if (!hidden.value) {
        panels.value = panelStore.orderedItems;
        panels.value.forEach((panel: any) => {
            panel.minimize();
        });
    } else {
        panels.value.forEach((panel: any) => {
            panel.open();
        });
    }
    hidden.value = !hidden.value;
};

const clearHiddenPanels = () => {
    nextTick(() => {
        if (hidden.value) {
            panels.value = [];
            hidden.value = false;
        }
    });
};
</script>

<style lang="scss" scoped></style>
