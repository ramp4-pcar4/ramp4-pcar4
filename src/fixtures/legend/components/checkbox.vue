<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            type="checkbox"
            :aria-label="
                $t(
                    checked
                        ? `legend.visibility.hide${label}`
                        : `legend.visibility.show${label}`
                )
            "
            @click.stop
            :checked="checked && initialChecked"
            @change.stop="toggleVisibility()"
            @keyup.enter.stop="toggleVisibility()"
            :class="[
                isRadio ? 'form-radio' : 'form-checkbox rounded-none',
                disabled
                    ? 'text-gray-400 border-gray-300'
                    : 'text-black cursor-pointer border-gray-500 hover:border-black'
            ]"
            class="mx-5 h-15 w-15"
            tabindex="-1"
            :disabled="disabled"
            :content="
                $t(
                    checked
                        ? `legend.visibility.hide${label}`
                        : `legend.visibility.show${label}`
                )
            "
            v-tippy="{ placement: 'top-end', hideOnClick: false }"
        />
    </div>
</template>

<script lang="ts">
import { CoreFilter, type LegendSymbology } from '@/geo/api';
import { defineComponent, type PropType } from 'vue';

import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';

export default defineComponent({
    name: 'CheckboxV',
    props: {
        value: {
            type: Object as PropType<LegendItem | LegendSymbology>,
            required: true
        },
        legendItem: { type: Object as PropType<LegendItem>, required: true },
        checked: { type: Boolean },
        label: { type: String },
        isRadio: { type: Boolean },
        disabled: { type: Boolean }
    },

    data() {
        return {
            initialChecked: this.legendItem.visibility
        };
    },

    mounted() {
        this.legendItem.checkVisibilityRules();
        this.initialChecked = this.legendItem.visibility === this.checked;
    },

    methods: {
        /**
         * Returns true if none of the child symbols are visible
         * @returns {boolean} true when no child symbols are visible
         */
        _noSymbolsVisible(item: LayerItem): boolean {
            return !item.symbologyStack.some(
                (item: LegendSymbology) => item.visibility
            );
        },

        /**
         * Toggle this visibility of the value object linked with this checkbox
         */
        toggleVisibility(): void {
            if (this.value instanceof LegendItem) {
                // Toggle parent symbology checkbox
                this.legendItem.toggleVisibility();
            } else if (this.legendItem instanceof LayerItem) {
                // Toggle child symbology checkbox
                if (this._noSymbolsVisible(this.legendItem)) {
                    // If no symbols are visible, then set the parent layer to visible
                    // since we toggled on one of the child symbols and set all other
                    // symbols to invisible (except for the one that is toggled on)
                    this.legendItem.setSymbologyVisibility(undefined, false);
                    this.legendItem.setSymbologyVisibility(
                        this.value.uid,
                        true
                    );
                    this.legendItem.toggleVisibility(true);
                } else {
                    // Toggle the child symbology
                    this.legendItem.setSymbologyVisibility(
                        this.value.uid,
                        !this.value.lastVisbility
                    );
                }

                // If all child symbols are toggled off, then toggle off the parent layer too
                if (this._noSymbolsVisible(this.legendItem)) {
                    this.legendItem.toggleVisibility(false);
                }

                // Update the layer definition to filter child symbols
                // At the moment, only layers that support features will support sql filters
                if (this.legendItem.layer?.supportsFeatures) {
                    const filterGuts = this.legendItem.symbologyStack
                        .filter(
                            (item: LegendSymbology) =>
                                item.lastVisbility === true
                        )
                        .map(
                            (item: LegendSymbology) =>
                                item.definitionClause || ''
                        );

                    let sql = ''; // default value, this computes to "show all"
                    if (filterGuts.length === 0) {
                        // nothing visible.
                        sql = '1=2';
                    } else if (
                        filterGuts.length <
                        this.legendItem.symbologyStack.length
                    ) {
                        // only a subset of checkboxes are checked. need filter
                        sql = filterGuts.join(' OR ');
                    }

                    this.legendItem.layer?.setSqlFilter(CoreFilter.SYMBOL, sql);
                }
                this.initialChecked = true;
            }
        }
    }
});
</script>

<style lang="scss"></style>
