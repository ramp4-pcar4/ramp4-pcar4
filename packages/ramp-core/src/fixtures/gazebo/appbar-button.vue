<template>
    <button class="py-6" @click="togglePanel()" :style="{ fontWeight: 'bold', color: options.colour }">G</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GazeboAppbarButton extends Vue {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };

    togglePanel(): void {
        const panel = this.$iApi.panel.get('p2');

        if (panel.isOpen) {
            panel.close();
        } else {
            panel.open({ screen: 'p-2-screen-2' });
        }
    }
}
</script>

<style lang="scss" scoped></style>
