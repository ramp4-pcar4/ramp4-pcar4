<template>
    <panel-screen :panel="panel" :footer="true">
        <template #header> {{ $t('export-basic.title') }} </template>

        <template #controls>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <div class="overflow-hidden">
                <canvas class="export-canvas"></canvas>
            </div>
        </template>

        <template #footer>
            <div class="flex">
                <button
                    @click="fixture.export()"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 mr-16"
                >
                    {{ $t('export-basic.download') }}
                </button>

                <button @click="make()" class="py-8 px-16">
                    {{ $t('export-basic.refresh') }}
                </button>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
import type { ExportBasicAPI } from './api';

import { debounce } from 'throttle-debounce';

export default defineComponent({
    name: 'ExportBasicScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    data(): {
        fixture: ExportBasicAPI | null;
        resizeObserver: ResizeObserver | null;
        make: Function;
    } {
        return {
            fixture: null,
            resizeObserver: null,
            make: debounce(300, function (this: any) {
                if (!this.fixture) {
                    return;
                }

                const canvasElement = this.$el.querySelector(
                    '.export-canvas'
                ) as HTMLCanvasElement;

                // TODO: detect size of the canvas container properly
                this.fixture.make(canvasElement, this.$el.clientWidth - 16);
            })
        };
    },

    mounted() {
        this.fixture = this.$iApi.fixture.get('export-basic') as ExportBasicAPI;
        this.resizeObserver = new ResizeObserver(() => {
            this.make();
        });
        this.resizeObserver.observe(this.$el);
    },

    beforeUnmount() {
        // remove the resize observer
        this.resizeObserver!.disconnect();
    }
});
</script>

<style lang="scss" scoped></style>
