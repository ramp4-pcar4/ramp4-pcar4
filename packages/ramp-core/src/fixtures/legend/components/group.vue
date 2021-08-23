<template>
    <div class="legend-group-container">
        <div class="relative">
            <div
                class="legend-group-header flex items-center px-5 py-10 cursor-pointer default-focus-style hover:bg-gray-200"
                @click="legendItem.toggleExpanded()"
                v-focus-item="'show-truncate'"
                :content="$t(legendItem.expanded ? 'legend.group.collapse' : 'legend.group.expand')"
                v-tippy="{ placement: 'top-start', aria: 'describedby' }"
                truncate-trigger
            >
                <!-- dropdown icon -->
                <div
                    class="expand-toggle mr-10 pointer-events-none"
                    :class="{ 'rotate-180': legendItem.expanded }"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        viewBox="0 0 24 24"
                        width="24"
                    >
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </div>

                <!-- name -->
                <div class="flex-1 pointer-events-none" v-truncate>
                    <span>{{ legendItem.name }}</span>
                </div>

                <!-- visibility -->
                <checkbox
                    :checked="legendItem.visibility"
                    :value="legendItem"
                    :isRadio="legendItem.parent && legendItem.parent.type === LegendTypes.Set"
                    :legendItem="legendItem"
                />
            </div>
        </div>

        <!-- Display children of the group -->
        <div class="legend-group pl-5" v-if="legendItem.expanded">
            <legend-component
                v-for="item in legendItem.children"
                :legendItem="item"
                :key="item.uid"
            ></legend-component>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, PropType } from 'vue';
import { LegendGroup, LegendTypes } from '../store/legend-defs';
import LegendCheckboxV from './checkbox.vue';

export default defineComponent({
    name: 'LegendGroupV',
    props: {
        legendItem: { type: Object as PropType<LegendGroup>, required: true }
    },
    components: {
        LegendComponent: defineAsyncComponent(() => import('./component.vue')),
        checkbox: LegendCheckboxV
    },
    data() {
        return { LegendTypes: LegendTypes };
    }
});
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
