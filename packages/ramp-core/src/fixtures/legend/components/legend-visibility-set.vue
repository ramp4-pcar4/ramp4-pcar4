<template>
    <div class="legend-group-container">
        <div class="legend-group-header" @click="legendItem.toggleExpanded()">
            <!-- dropdown icon -->
            <div id="icon" :class="{ 'rotate-180': legendItem.expanded }">
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                </svg>
            </div>

            <!-- name -->
            <span class="flex-1">{{ legendItem.name }}</span>

            <!-- visibility -->
            <div @click="legendItem.toggleVisibility(); legendItem.toggleExpanded();">
                <checkbox :value="legendItem.visibility" :isRadio="props && props.isVisibilitySet" />
            </div>
        </div>

        <!-- Display the children of the group -->
        <div class="legend-group" v-if="legendItem.expanded">
            <legend-component
                v-for="(item, idx) in legendItem.children"
                :legendItem="item"
                :key="idx"
                :props="{ isVisibilitySet: true }"
            ></legend-component>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from '../store';
import { LegendItem } from '../store/legend-defs';
import CheckboxComponent from './checkbox.vue';

@Component({
    components: {
        LegendComponent: () => import('./legend-component.vue'),
        checkbox: CheckboxComponent
    }
})
export default class LegendGroup extends Vue {
    @Prop() legendItem!: LegendItem;
    @Prop() props!: any;
}
</script>

<style lang="scss" scoped>
.legend-group {
    @apply px-5 pr-0;
    transition: max-height 0.7s ease-in;
}
.legend-group-header {
    @apply flex items-center px-5 py-10 pr-0 cursor-pointer;
}
.legend-group-header #icon {
    @apply mr-10;
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.legend-group-header:hover {
    @apply bg-gray-200;
}
.legend-item {
    @apply px-5 py-5 pr-0;
}
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
