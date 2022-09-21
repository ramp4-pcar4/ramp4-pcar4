<template>
    <appbar-button :onClickFunction="onClick" tooltip="Gazebo">
        <span :style="{ color: options?.colour ?? '#BDBDBD' }">G </span>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
    name: 'GazeboAppbarButtonV',
    props: {
        options: {
            type: Object as PropType<{ colour: string }>
        }
    },
    methods: {
        onClick() {
            this.$iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' });
        }
    }
});
</script>

<style lang="scss" scoped></style>
