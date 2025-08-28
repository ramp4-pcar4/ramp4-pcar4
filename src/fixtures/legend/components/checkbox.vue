<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            :type="isRadio ? 'radio' : 'checkbox'"
            :aria-label="t(checked ? `legend.visibility.hide${label}` : `legend.visibility.show${label}`)"
            @click.stop="toggleVisibility()"
            :checked="checked && initialChecked"
            @keypress.enter.prevent
            @keyup.enter.stop="toggleVisibility()"
            :class="[
                disabled
                    ? 'text-gray-400 border-gray-300'
                    : 'text-black cursor-pointer border-gray-500 hover:border-black'
            ]"
            class="mx-5 h-15 w-15"
            tabindex="-1"
            :disabled="disabled"
            :content="t(checked ? `legend.visibility.hide${label}` : `legend.visibility.show${label}`)"
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
 * Toggle this visibility of the value object linked with this checkbox
 */
const toggleVisibility = (): void => {
    if (props.value instanceof LegendItem) {
        // Toggle parent symbology checkbox
        props.legendItem.toggleVisibility();
    } else if (props.legendItem instanceof LayerItem) {
        // we clicked a symbol checkbox thats a child of a layer item
        props.legendItem.clickSymbology(props.value.uid, !props.value.lastVisbility);

        // TODO figure out and document what this prop is actually accomplishing and why.
        initialChecked.value = true;
    }
};
</script>

<style lang="scss"></style>
