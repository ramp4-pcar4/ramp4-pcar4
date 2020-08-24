<template>
    <div class="legend-header">
        <button class="inline-block text-gray-500 hover:text-black" v-on:click="toggleGroups">
            <svg class="fill-current w-16 pr-8 h-16 pt-4" viewBox="0 0 23 21">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
            </svg>
        </button>

        <button class="inline-block text-gray-500 hover:text-black float-right" v-on:click="toggleVisibility">
            <svg class="fill-current w-16 pr-8 h-16 pt-4" viewBox="0 0 23 21">
                <path
                    d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                />
            </svg>
        </button>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from './store';

@Component
export default class LegendHeader extends Vue {
    // toggle all possible legend groups
    toggleGroups(): void {
        // TODO
        console.log('toggling groups...');
    }

    // toggle all legend elements visibility on/off
    toggleVisibility(): void {
        // TODO
        console.log('toggling visibility...');
    }
}
</script>

<style lang="scss" scoped></style>
