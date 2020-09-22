<template>
    <!-- Display a checkbox. -->
    <div v-if="!isRadio">
        <input type="checkbox" :checked="value" class="rounded-none form-checkbox h-15 w-15 text-black border-gray-500 hover:border-black">
    </div>

    <!-- If isRadio is set to true, a radio button will be displayed instead. -->
    <div v-else>
        <input type="radio" :checked="value" class="form-radio h-15 w-15 text-black border-gray-500 hover:border-black">
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
