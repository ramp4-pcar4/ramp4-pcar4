<template>
    <appbar-button :onClickFunction="togglePanel" tooltip="⛄">
        <span class="block h-24">⛄</span>
    </appbar-button>
</template>

<script setup lang="ts">
import type { InstanceAPI } from '@/api';
import { inject } from 'vue';
const iApi = inject('iApi') as InstanceAPI;

const togglePanel = () => {
    // summon the SNOWMAN!
    iApi.fixture.add('snowman');

    // the above will re-add the snowman fixture as it was self-terminated
};
</script>

<style lang="scss" scoped></style>
