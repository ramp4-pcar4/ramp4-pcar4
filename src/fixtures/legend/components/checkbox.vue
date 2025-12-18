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
import type { LegendSymbology } from '@/geo/api';
import { onMounted, ref } from 'vue';
import type { PropType } from 'vue';
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

/**
 * What this is wasn't documented when it was written.
 * Appears to be some kind of initialization mismatch check?
 * The checkbox will never appear as "checked" if this var is false.
 * When we mount, it gets set to false if the legend item this checkbox belongs to has a different visibility
 * value than the checkbox's "checked" value (via props).
 * If the checkbox gets toggled by the user, this flag gets set to true. I guess because things are now forced
 * to be in-synch.
 *
 * TODO It would also appear that if this mis-matched state happens,
 *      our aria-label and content attributes will be telling big lies?
 *
 * Given that every usage of this Checkbox template initilzes with a variant of:
 *    :checked="item.visibility"
 * does this value even matter? I'm not seeing how it could ever be false when mounting happens.
 */
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
        // Checkbox is sitting in a normal legend block. Toggle its visibility
        props.legendItem.toggleVisibility();
    } else if (props.legendItem instanceof LayerItem) {
        // Checkbox is sitting in a symbol block, and is the child of a layer item
        props.legendItem.clickSymbology(props.value.uid);

        initialChecked.value = true;
    }
};
</script>

<style lang="scss"></style>
