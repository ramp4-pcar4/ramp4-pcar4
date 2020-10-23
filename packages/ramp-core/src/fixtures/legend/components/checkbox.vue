<template>
    <!-- Display a checkbox. -->
    <div v-if="!isRadio" class="relative">
        <input
            type="checkbox"
            :checked="value"
            @click.stop="legendItem.toggleVisibility()"
            class="rounded-none form-checkbox mx-5 h-15 w-15 text-black border-gray-500 hover:border-black cursor-pointer"
            tabindex="-1"
        />
        <tooltip position="top-right"> {{ $t(value ? 'legend.visibility.hide' : 'legend.visibility.show') }} </tooltip>
    </div>

    <!-- If isRadio is set to true, a radio button will be displayed instead. -->
    <div v-else class="relative">
        <input
            type="radio"
            :checked="value"
            :name="legendItem.parent.name"
            @click.stop="legendItem.toggleVisibility()"
            class="form-radio mx-5 h-15 w-15 text-black border-gray-500 hover:border-black cursor-pointer"
            tabindex="-1"
        />
        <tooltip position="top-right"> {{ $t(value ? 'legend.visibility.hide' : 'legend.visibility.show') }} </tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import { LegendEntry } from '../store/legend-defs';

@Component
export default class CheckboxV extends Vue {
    @Prop() value!: boolean;
    @Prop() isRadio!: boolean;
    @Prop() legendItem!: LegendEntry;
}
</script>

<style lang="scss"></style>
