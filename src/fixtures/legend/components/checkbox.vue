<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            type="checkbox"
            :aria-label="
                t(
                    checked
                        ? `legend.visibility.hide${label}`
                        : `legend.visibility.show${label}`
                )
            "
            @click.stop
            :checked="checked && initialChecked"
            @change.stop="toggleVisibility()"
            @keypress.enter.prevent
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
                t(
                    checked
                        ? `legend.visibility.hide${label}`
                        : `legend.visibility.show${label}`
                )
            "
            v-tippy="{ placement: 'top-end', hideOnClick: false }"
        />
    </div>
</template>

<script setup lang="ts">
import { CoreFilter, type LegendSymbology } from '@/geo/api';
import { onMounted, ref, type PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { LayerItem } from '../store/layer-item';
import { LegendItem } from '../store/legend-item';

const { t } = useI18n();

const props = defineProps({
    value: {
        type: Object as PropType<LegendItem | LegendSymbology>,
        required: true
    },
    legendItem: {
        type: Object as PropType<LegendItem | LayerItem>,
        required: true
    },
    checked: { type: Boolean },
    label: { type: String },
    isRadio: { type: Boolean },
    disabled: { type: Boolean }
});

const initialChecked = ref(props.legendItem.visibility);

onMounted(() => {
    props.legendItem.checkVisibilityRules();
    initialChecked.value = props.legendItem.visibility === props.checked;
});

/**
 * Returns true if none of the child symbols are visible
 * @returns {boolean} true when no child symbols are visible
 */
const _noSymbolsVisible = (item: LayerItem): boolean => {
    return !item.symbologyStack.some(
        (item: LegendSymbology) => item.visibility
    );
};

/**
 * Toggle this visibility of the value object linked with this checkbox
 */
const toggleVisibility = (): void => {
    if (props.value instanceof LegendItem) {
        // Toggle parent symbology checkbox
        props.legendItem.toggleVisibility();
    } else if (props.legendItem instanceof LayerItem) {
        // Toggle child symbology checkbox
        if (_noSymbolsVisible(props.legendItem)) {
            // If no symbols are visible, then set the parent layer to visible
            // since we toggled on one of the child symbols and set all other
            // symbols to invisible (except for the one that is toggled on)
            props.legendItem.setSymbologyVisibility(undefined, false);
            props.legendItem.setSymbologyVisibility(props.value.uid, true);
            props.legendItem.toggleVisibility(true);
        } else {
            // Toggle the child symbology
            props.legendItem.setSymbologyVisibility(
                props.value.uid,
                !props.value.lastVisbility
            );
        }

        // If all child symbols are toggled off, then toggle off the parent layer too
        if (_noSymbolsVisible(props.legendItem)) {
            props.legendItem.toggleVisibility(false);
        }

        // Update the layer definition to filter child symbols
        // At the moment, only layers that support features will support sql filters
        if (props.legendItem.layer?.supportsFeatures) {
            const filterGuts = props.legendItem.symbologyStack
                .filter((item: LegendSymbology) => item.lastVisbility === true)
                .map((item: LegendSymbology) => item.definitionClause || '');

            let sql = ''; // default value, this computes to "show all"
            if (filterGuts.length === 0) {
                // nothing visible.
                sql = '1=2';
            } else if (
                filterGuts.length < props.legendItem.symbologyStack.length
            ) {
                // only a subset of checkboxes are checked. need filter
                sql = filterGuts.join(' OR ');
            }

            props.legendItem.layer?.setSqlFilter(CoreFilter.SYMBOL, sql);
        }
        initialChecked.value = true;
    }
};
</script>

<style lang="scss"></style>
