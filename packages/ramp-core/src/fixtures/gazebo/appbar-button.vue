<template>
    <appbar-button :onClickFunction="onClick" tooltip="Gazebo">
        <span :style="{ fontWeight: 'bold', color: options.colour }">G</span>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'GazeboAppbarButtonV',
    props: ['options'],
    methods: {
        onClick() {
            this.$iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' });
        }
    }
});
</script>

<style lang="scss" scoped></style>
