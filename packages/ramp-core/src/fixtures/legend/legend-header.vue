<template>
    <div class="relative legend-header flex">
        <dropdown-menu position="left">
            <template #header>
                <div class="flex">
                    <svg class="fill-current w-18 h-18 mx-8" viewBox="0 0 23 21">
                        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                    </svg>
                </div>
                <tooltip class="mx-5" v-if="!showGroup" position="right"> {{ $t('legend.header.groups') }} </tooltip>
            </template>
            <a href="#" class="flex leading-snug items-center w-116" @click="expand"> {{ $t('legend.header.groups.expand') }} </a>
            <a href="#" class="flex leading-snug items-center w-116" @click="collapse"> {{ $t('legend.header.groups.collapse') }} </a>
        </dropdown-menu>
        <span class="flex-grow"></span>
        <dropdown-menu position="right">
            <template #header>
                <div class="flex">
                    <svg class="fill-current w-18 h-18 mx-5" viewBox="0 0 23 21">
                        <path
                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        />
                    </svg>
                </div>
                <tooltip class="mx-5" v-if="!showVisible" position="left"> {{ $t('legend.header.visible') }} </tooltip>
            </template>
            <a href="#" class="flex leading-snug items-center w-100" @click="show"> {{ $t('legend.header.visible.show') }} </a>
            <a href="#" class="flex leading-snug items-center w-100" @click="hide"> {{ $t('legend.header.visible.hide') }} </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendStore } from './store';

@Component
export default class LegendHeaderV extends Vue {
    @Call(LegendStore.showAll) show!: () => void;
    @Call(LegendStore.hideAll) hide!: () => void;
    @Call(LegendStore.expandGroups) expand!: () => void;
    @Call(LegendStore.collapseGroups) collapse!: () => void;

    showGroup: Boolean = false;
    showVisible: Boolean = false;

    // toggle dropdown menu for expand/collapse button
    toggleGroups(): void {
        this.showGroup = !this.showGroup;
    }

    // toggle dropdown menu for visibility button
    toggleVisibility(): void {
        this.showVisible = !this.showVisible;
    }
}
</script>

<style lang="scss" scoped></style>
