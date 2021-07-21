<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            :type="isRadio ? 'radio' : 'checkbox'"
            :checked="checked"
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
                        ? 'legend.visibility.hide'
                        : 'legend.visibility.show'
                )
            "
            v-tippy="{ placement: 'top-end', hideOnClick: false }"
        />
    </div>
</template>

<script lang="ts">
import { CoreFilter, LayerType } from '@/geo/api';
import { Vue, Prop } from 'vue-property-decorator';
import { LegendEntry, LegendItem } from '../store/legend-defs';

export default class CheckboxV extends Vue {
    @Prop() value!: any;
    @Prop() legendItem!: LegendEntry;
    @Prop() checked!: boolean;
    @Prop() isRadio!: boolean;
    @Prop() disabled!: boolean;

    /**
     * Returns true if non of the child symbols are visible
     * @returns {boolean} Boolean value that is true when no child symbols are visible
     */
    _noSymbolsVisible(): boolean {
        return !this.legendItem.layer
            ?.getLegend()
            .some(item => item.visibility);
    }

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

                this.legendItem._layer?.getLegend().forEach(item => {
                    item.visibility = false;
                    item.lastVisbility = false;
                });

                this.value.visibility = true;
                this.value.lastVisbility = true;

                if (!this.legendItem.visibility) {
                    this.legendItem.toggleVisibility(true);
                }
            } else {
                // Toggle the child symbology
                this.value.lastVisbility = !this.value.lastVisbility;
                this.value.visibility = this.value.lastVisbility;
            }

            // If all child symbols are toggled off, then toggle off the parent layer too
            if (this._noSymbolsVisible()) {
                this.legendItem.toggleVisibility(false);
            }
        }

        // Update the layer definition to filter child symbols
        // WMS layers do not have child symbology
        if (this.legendItem.layer?.layerType !== LayerType.WMS) {
            this.legendItem.layer?.setSqlFilter(
                CoreFilter.SYMBOL,
                this.legendItem.layer
                    ?.getLegend()
                    .filter(item => item.lastVisbility === true)
                    .map(item => item.definitionClause)
                    .join(' OR ')
            );
        }
    }
}
</script>

<style lang="scss"></style>
