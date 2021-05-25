<template>
    <appbar-button :onClickFunction="onClick">
        <template #icon>
            <span :style="{ fontWeight: 'bold', color: options.colour }"
                >G</span
            >
        </template>
        <template #tooltip>Gazebo</template>
    </appbar-button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GazeboAppbarButton extends Vue {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };

    onClick() {
        this.$iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' });
    }
}
</script>

<style lang="scss" scoped></style>
