<template>
    <!-- Display a checkbox. -->
    <div v-if="!isRadio" class="relative">
        <input type="checkbox" :checked="value" class="rounded-none form-checkbox mx-5 h-15 w-15 text-black border-gray-500 hover:border-black cursor-pointer">
        <tooltip position="left"> {{$t(value? 'legend.hide' : 'legend.show')}} </tooltip>
    </div>

    <!-- If isRadio is set to true, a radio button will be displayed instead. -->
    <div v-else class="relative">
        <input type="radio" :checked="value" class="form-radio mx-5 h-15 w-15 text-black border-gray-500 hover:border-black cursor-pointer">
        <tooltip position="left"> {{$t(value? 'legend.hide' : 'legend.show')}} </tooltip>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

@Component
export default class CheckboxComponent extends Vue {
    @Prop() value!: boolean;
    @Prop() isRadio!: boolean;
}
</script>

<style lang="scss"></style>
