<template>
    <button
        class="py-6"
        @click="$iApi.panel.toggle({ id: 'p2', screen: 'p-2-screen-2' })"
        :style="{ fontWeight: 'bold', color: options.colour }"
    >
        G
    </button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class GazeboAppbarButton extends Vue {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };
}
</script>

<style lang="scss" scoped></style>
