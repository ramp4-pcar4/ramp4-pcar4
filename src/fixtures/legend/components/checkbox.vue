<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            :type="isRadio ? 'radio' : 'checkbox'"
            :aria-label="
                $t(
                    checked
                        ? `legend.visibility.hide${label}`
                        : `legend.visibility.show${label}`
                )
            "
            :checked="checked && initialChecked"
            @click.stop="toggleVisibility(value)"
            @keyup.enter.stop="toggleVisibility(value)"
            :class="[
                isRadio ? 'form-radio' : 'form-checkbox rounded-none',
                disabled ? 'text-gray-400 ' : 'text-black cursor-pointer'
            ]"
            class="mx-5 h-15 w-15 border-gray-500 hover:border-black"
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
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { CoreFilter } from '@/geo/api';
import type { LegendSymbology } from '@/geo/api';
import { LegendEntry, LegendItem } from '../store/legend-defs';

export default defineComponent({
    name: 'CheckboxV',
    props: {
        value: {
            type: Object as PropType<LegendEntry | LegendSymbology>,
            required: true
        },
        legendItem: { type: Object as PropType<LegendEntry>, required: true },
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
         * Returns true if non of the child symbols are visible
         * @returns {boolean} Boolean value that is true when no child symbols are visible
         */
        _noSymbolsVisible(): boolean {
            return !this.legendItem.legend?.some(
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
            } else {
                // Toggle child symbology checkbox
                if (this._noSymbolsVisible()) {
                    // If no symbols are visible, then set the parent layer to visible
                    // since we toggled on one of the child symbols and set all other
                    // symbols to invisible (except for the one that is toggled on)

                    this.legendItem.setChildSymbologyVisibility(
                        undefined,
                        false
                    );
                    this.legendItem.setChildSymbologyVisibility(
                        this.value.uid,
                        true
                    );
                    if (!this.legendItem.visibility) {
                        this.legendItem.toggleVisibility(true);
                    }
                } else {
                    // Toggle the child symbology
                    this.legendItem.setChildSymbologyVisibility(
                        this.value.uid,
                        !this.value.lastVisbility
                    );
                }

                // If all child symbols are toggled off, then toggle off the parent layer too
                if (this._noSymbolsVisible()) {
                    this.legendItem.toggleVisibility(false);
                }
            }

            // Update the layer definition to filter child symbols
            // At the moment, only layers that support features will support sql filters
            if (this.legendItem.layer?.supportsFeatures) {
                const filterGuts = this.legendItem
                    .legend!.filter(
                        (item: LegendSymbology) => item.lastVisbility === true
                    )
                    .map(
                        (item: LegendSymbology) => item.definitionClause || ''
                    );

                let sql = ''; // default value, this computes to "show all"
                if (filterGuts.length === 0) {
                    // nothing visible.
                    sql = '1=2';
                } else if (filterGuts.length < this.legendItem.legend!.length) {
                    // only a subset of checkboxes are checked. need filter
                    sql = filterGuts.join(' OR ');
                }

                this.legendItem.layer?.setSqlFilter(CoreFilter.SYMBOL, sql);
            }
            this.initialChecked = true;
        }
    }
});
</script>

<style lang="scss"></style>
