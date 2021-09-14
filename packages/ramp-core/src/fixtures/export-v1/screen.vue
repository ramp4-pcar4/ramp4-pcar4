<template>
    <panel-screen :panel="panel" :footer="true">
        <template #header>
            Export
        </template>

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
                    {{ $t('export-v1.download') }}
                </button>

                <button @click="make()" class="py-8 px-16">
                    {{ $t('export-v1.refresh') }}
                </button>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

import { PanelInstance } from '@/api';
import { ExportV1API } from './api';

import { debounce } from 'throttle-debounce';

export default defineComponent({
    name: 'ExportV1ScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    data(): {
        fixture: ExportV1API | null;
        make: Function;
    } {
        return {
            fixture: null,
            make: debounce(300, function(this: any) {
                if (!this.fixture) {
                    return;
                }

                const canvasElement = this.$el.querySelector('.export-canvas') as HTMLCanvasElement;

                // TODO: detect size of the canvas container properly
                this.fixture.make(canvasElement, this.$el.clientWidth - 16);
            })
        };
    },

    mounted() {
        this.fixture = this.$iApi.fixture.get('export-v1') as ExportV1API;

        const resizeObserver = new ResizeObserver(() => {
            this.make();
        });

        resizeObserver.observe(this.$el);
    }
});
</script>

<style lang="scss" scoped></style>
