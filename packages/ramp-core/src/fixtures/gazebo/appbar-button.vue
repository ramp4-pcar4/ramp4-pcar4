<template>
    <button class="py-6" @click="togglePanel('p2', 'p-2-screen-2')" :style="{ fontWeight: 'bold', color: options.colour }">G</button>
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { mixins } from 'vue-class-component';
import AppbarButtonBase from '../appbar/appbar-button-base.vue';

@Component
export default class GazeboAppbarButton extends mixins(AppbarButtonBase) {
    @Prop({ default: { colour: 'auto' } }) options!: { colour: string };
}
</script>

<style lang="scss" scoped></style>
