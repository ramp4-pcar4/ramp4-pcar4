<template>
    <appbar-button :onClickFunction="onClick" tooltip="Gazebo">
        <span :style="{ color: options?.colour ?? '#BDBDBD' }">G </span>
    </appbar-button>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';
import type { InstanceAPI } from '@/api';

defineProps({
    options: {
        type: Object as PropType<{ colour: string }>
    }
});

const iApi = inject<InstanceAPI>('iApi')!;

const onClick = () => {
    iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' });
};
</script>

<style lang="scss" scoped></style>
