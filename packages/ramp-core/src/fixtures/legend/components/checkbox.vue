<template>
    <div class="relative" @mouseover.stop>
        <!-- TODO: see if getting this to use v-model works; children wouldnt update properly on initial try -->
        <input
            :type="isRadio ? 'radio' : 'checkbox'"
            :checked="value"
            @click.stop="legendItem.toggleVisibility()"
            @keyup.enter.stop="legendItem.toggleVisibility()"
            :class="[
                isRadio ? 'form-radio' : 'form-checkbox rounded-none',
                disabled ? 'text-gray-400 ' : 'text-black cursor-pointer'
            ]"
            class="mx-5 h-15 w-15 border-gray-500 hover:border-black"
            tabindex="-1"
            :disabled="disabled"
            :content="
                $t(value ? 'legend.visibility.hide' : 'legend.visibility.show')
            "
            v-tippy="{ placement: 'top-end' }"
        />
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
    @Prop() disabled!: boolean;
}
</script>

<style lang="scss"></style>
