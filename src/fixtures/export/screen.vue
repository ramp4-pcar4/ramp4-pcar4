<template>
    <panel-screen :panel="panel" :footer="true">
        <template #header> {{ $t('export.title') }} </template>

        <template #content>
            <div class="overflow-hidden border border-gray-200">
                <canvas class="export-canvas"></canvas>
            </div>
        </template>

        <template #footer>
            <div class="flex">
                <button
                    type="button"
                    @click="fixture?.export()"
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-8 sm:px-16 mr-8 sm:mr-16"
                    :aria-label="$t('export.download')"
                >
                    {{ $t('export.download') }}
                </button>

                <button
                    type="button"
                    @click="make()"
                    class="py-8 px-4 sm:px-16"
                    :aria-label="$t('export.refresh')"
                >
                    {{ $t('export.refresh') }}
                </button>

                <export-settings
                    :componentSelectedState="selectedComponents"
                    :onComponentToggle="make()"
                    class="ml-auto flex px-4 sm:px-8"
                ></export-settings>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
import type { ExportAPI } from './api/export';

import { debounce } from 'throttle-debounce';

import ExportSettingsButtonV from './settings-button.vue';
import { ExportStore } from './store';

export default defineComponent({
    name: 'ExportScreenV',
    props: {
        panel: {
            type: Object as PropType<PanelInstance>,
            required: true
        }
    },

    components: {
        'export-settings': ExportSettingsButtonV
    },

    computed: {
        // Adds the "selectable" status to the selected state to allow for the settings menu to disable certain options
        selectedComponents() {
            let state: any = {};
            if (this.fixture) {
                Object.keys(this.componentSelectedState).forEach(
                    (component: string) => {
                        state[component] = {
                            name: component,
                            selected:
                                this.componentSelectedState[component] ?? false,
                            selectable:
                                (this.fixture?.config as any)[component]
                                    ?.selectable ?? true
                        };
                    }
                );
            }
            return state;
        }
    },

    data(): {
        fixture: ExportAPI | null;
        resizeObserver: ResizeObserver | null;
        componentSelectedState: any;
        make: Function;
    } {
        return {
            fixture: null,
            resizeObserver: null,
            componentSelectedState: this.get(
                ExportStore.componentSelectedState
            ) as any,
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
        this.fixture = this.$iApi.fixture.get('export') as ExportAPI;
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
