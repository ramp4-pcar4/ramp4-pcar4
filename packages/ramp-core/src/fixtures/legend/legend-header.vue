<template>
    <div class="relative legend-header flex">
        <div class="relative">
            <button class="inline-block text-gray-500 hover:text-black" v-on:click="toggleGroups">
                <svg class="fill-current w-18 h-18 mx-8" viewBox="0 0 23 21">
                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
                </svg>
            </button>
            <tooltip class= "mx-5" v-if="!showGroup" position="right"> {{$t('legend.toggle.group')}} </tooltip>
        </div>
        <span class="flex-grow"></span>
        <div class="relative">
            <button class="inline-block text-gray-500 hover:text-black" v-on:click="toggleVisibility">
                <svg class="fill-current w-18 h-18 mx-5" viewBox="0 0 23 21">
                    <path
                        d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                    />
                </svg>
            </button>
            <tooltip class="mx-5" v-if="!showVisible" position="left"> {{$t('legend.toggle.visible')}} </tooltip>
        </div>
        <div class="absolute ml-40 top-0 left-0 bg-white shadow-md" v-if="showGroup">
            <button class="block hover:bg-gray-300 w-full p-10 text-center" @click="expand"> {{$t('legend.group.expand')}} </button>
            <button class="block hover:bg-gray-300 w-full p-10 text-center" @click="collapse"> {{$t('legend.group.collapse')}} </button>
        </div>
        <div class="absolute mr-32 top-0 right-0 bg-white shadow-md" v-if="showVisible">
            <button class="block hover:bg-gray-300 w-full p-10 text-center" @click="show"> {{$t('legend.visible.show')}} </button>
            <button class="block hover:bg-gray-300 w-full p-10 text-center" @click="hide"> {{$t('legend.visible.hide')}} </button>
        </div>   
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
