<template>
    <appbar-button :onClickFunction="onClick" tooltip="Gazebo">
        <span :style="{ fontWeight: 'bold', color: options.colour }">G</span>
    </appbar-button>
</template>
<script lang="ts">
import { Vue, Prop } from 'vue-property-decorator';

export default class GazeboAppbarButtonV extends Vue {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };

    onClick() {
        this.$iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' });
    }
}
</script>

<style lang="scss" scoped></style>
