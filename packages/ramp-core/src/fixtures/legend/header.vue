<template>
    <div class="relative legend-header flex">
        <!-- open import wizard -->
        <button
            @click="openWizard"
            class="relative mr-auto text-gray-500 hover:text-black p-8"
            v-show="wizardExists"
            :content="$t('legend.header.addlayer')"
            v-tippy="{ placement: 'right' }"
        >
            <svg class="fill-current w-18 h-18 mx-8" viewBox="0 0 23 21">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
        </button>
        <span class="flex-1"></span>
        <!-- groups toggle -->
        <dropdown-menu
            class="relative"
            position="left-start"
            :tooltip="$t('legend.header.groups')"
            tooltip-placement="left"
        >
            <template #header>
                <div class="p-8">
                    <svg
                        class="fill-current w-18 h-18 mx-8"
                        viewBox="0 0 23 21"
                    >
                        <path
                            d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                        />
                    </svg>
                </div>
            </template>
            <a
                href="#"
                class="flex leading-snug items-center w-116"
                @click="expand"
            >
                {{ $t('legend.header.groups.expand') }}
            </a>
            <a
                href="#"
                class="flex leading-snug items-center w-116"
                @click="collapse"
            >
                {{ $t('legend.header.groups.collapse') }}
            </a>
        </dropdown-menu>
        <!-- visibility toggle -->
        <dropdown-menu
            class="relative"
            position="left-start"
            :tooltip="$t('legend.header.visible')"
            tooltip-placement="left"
        >
            <template #header>
                <div class="flex p-8">
                    <svg
                        class="fill-current w-18 h-18 mx-5"
                        viewBox="0 0 23 21"
                    >
                        <path
                            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                        />
                    </svg>
                </div>
            </template>
            <a
                href="#"
                class="flex leading-snug items-center w-100"
                @click="show"
            >
                {{ $t('legend.header.visible.show') }}
            </a>
            <a
                href="#"
                class="flex leading-snug items-center w-100"
                @click="hide"
            >
                {{ $t('legend.header.visible.hide') }}
            </a>
        </dropdown-menu>
    </div>
</template>

<script lang="ts">
import { Vue } from 'vue-property-decorator';
import { Call } from 'vuex-pathify';

import { LegendStore } from './store';
import { GlobalEvents } from '../../api/internal';

export default class LegendHeaderV extends Vue {
    @Call(LegendStore.showAll) show!: () => void;
    @Call(LegendStore.hideAll) hide!: () => void;
    @Call(LegendStore.expandGroups) expand!: () => void;
    @Call(LegendStore.collapseGroups) collapse!: () => void;

    openWizard() {
        this.$iApi.event.emit(GlobalEvents.WIZARD_OPEN);
    }

    get wizardExists(): boolean {
        try {
            return !!this.$iApi.fixture.get('wizard');
        } catch (e) {
            return false;
        }
    }
}
</script>

<style lang="scss" scoped></style>
