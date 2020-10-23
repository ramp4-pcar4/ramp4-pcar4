<template>
    <div class="legend-group-container">
        <div class="relative">
            <div
                class="legend-group-header flex items-center px-5 py-10 cursor-pointer default-focus-style hover:bg-gray-200"
                @click="legendItem.toggleExpanded()"
                v-focus-item
            >
                <!-- dropdown icon -->
                <div class="expand-toggle mr-10" :class="{ 'rotate-180': legendItem.expanded }">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </div>

                <!-- name -->
                <span class="flex-1">{{ legendItem.name }}</span>

                <!-- visibility -->
                <checkbox :value="legendItem.visibility" :isRadio="props && props.isVisibilitySet" :legendItem="legendItem" />
            </div>
            <tooltip position="top-left">Expand Set</tooltip>
        </div>

        <!-- Display the children of the group -->
        <div class="legend-group pl-5" v-if="legendItem.expanded">
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
import { LegendGroup } from '../store/legend-defs';
import CheckboxV from './checkbox.vue';

@Component({
    components: {
        LegendComponent: () => import('./legend-component.vue'),
        checkbox: CheckboxV
    }
})
export default class LegendVisibilitySetV extends Vue {
    @Prop() legendItem!: LegendGroup;
    @Prop() props!: any;
}
</script>

<style lang="scss" scoped>
.legend-group {
    transition: max-height 0.7s ease-in;
}
.expand-toggle {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
