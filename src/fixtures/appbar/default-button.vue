<template>
    <appbar-button
        v-if="panelButton"
        :onClickFunction="onClickFunction"
        :tooltip="t(panelButton.tooltip)"
        :id="panelId"
        ><div
            class="default fill-current w-24 h-24 ml-8 sm:ml-20"
            :class="{ 'ml-20': overflow }"
            v-html="panelButton.icon"
        ></div
    ></appbar-button>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { computed, inject } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi');

const props = defineProps({
    panelId: {
        type: String,
        required: true
    },
    minimize: {
        type: Boolean,
        default: false
    },
    overflow: {
        type: Boolean
    }
});

const panelButton = computed(() => iApi?.panel.get(props.panelId)?.button);

const onClickFunction = () => {
    if (props.minimize) {
        iApi?.panel.toggleMinimize(props.panelId);
    } else {
        iApi?.panel.toggle(props.panelId);
    }
};
</script>

<style lang="scss" scoped></style>
