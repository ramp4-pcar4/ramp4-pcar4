<template>
    <button
        type="button"
        class="flex items-center justify-center w-46 h-44"
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

import { GlobalEvents } from '@/api/internal';
import { IdentifyResultFormat } from '@/geo/api';
import { directive as tippyDirective } from 'vue-tippy';

export default defineComponent({
    name: 'DetailsButtonRendererV',
    props: ['params'],
    directives: {
        tippy: tippyDirective
    },
    mounted() {
        // need to hoist events to top level cell wrapper to be keyboard accessible
        this.params.eGridCell.addEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    this.openDetails();
                }
            }
        );

        this.params.eGridCell.addEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        this.params.eGridCell.addEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    },

    beforeUnmount() {
        this.params.eGridCell.removeEventListener(
            'keydown',
            (e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                    this.openDetails();
                }
            }
        );

        this.params.eGridCell.removeEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
        this.params.eGridCell.removeEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
    },

    methods: {
        openDetails() {
            let data = Object.assign({}, this.params.data);
            delete data['rvInteractive'];
            delete data['rvSymbol'];

            // grid only supports esri features at the moment, so we hardcode that format
            this.$iApi.event.emit(GlobalEvents.DETAILS_TOGGLE, {
                data: data,
                uid: this.params.uid,
                format: IdentifyResultFormat.ESRI
            });
        }
    }
});
</script>

<style lang="scss" scoped></style>
