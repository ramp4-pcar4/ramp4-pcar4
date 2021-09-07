<template>
    <button
        class="w-38 h-48"
        :content="$t('grid.cells.details')"
        v-tippy="{ placement: 'top' }"
        @click="openDetails"
        tabindex="-1"
    >
        <svg
            class="m-auto"
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            viewBox="0 0 24 24"
            width="16"
        >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
                d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"
            />
        </svg>
    </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import deepmerge from 'deepmerge';
import { GlobalEvents } from '@/api/internal';
import { directive as tippyDirective } from 'vue-tippy';

export default defineComponent({
    name: 'DetailsButtonRendererV',
    directives: {
        tippy: tippyDirective
    },
    data(props) {
        return {
            params: props.params as any
        };
    },
    mounted() {
        // need to hoist events to top level cell wrapper to be keyboard accessible
        this.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                this.openDetails();
            }
        });

        this.params.eGridCell.addEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        this.params.eGridCell.addEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    },

    methods: {
        openDetails() {
            const fakeIdentifyItem = deepmerge({}, { data: this.params.data });
            delete fakeIdentifyItem['data']['rvInteractive'];
            delete fakeIdentifyItem['data']['rvSymbol'];
            this.$iApi.event.emit(GlobalEvents.DETAILS_OPEN, {
                identifyItem: fakeIdentifyItem,
                uid: this.params.uid
            });
        }
    }
});
</script>

<style lang="scss" scoped></style>
