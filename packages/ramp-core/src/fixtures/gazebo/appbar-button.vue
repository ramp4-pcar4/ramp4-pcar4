<template>
    <button class="py-6" @click="togglePanel()" :style="{ fontWeight: 'bold', color: options.colour }">G</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GazeboAppbarButton extends Vue {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };

    togglePanel(): void {
        const panel = this.$iApi.panel.get('p1');

        if (panel.isOpen) {
            panel.close();
        } else {
            panel.open();
        }
    }
}
</script>

<style lang="scss" scoped></style>
