<template>
    <!-- Visibility -->
    <div class="flex flex-row rv-label">
        <div class="flex items-center">
            <div v-html="icon" class="p-8 pl-0"></div>
            {{ name }}
        </div>
        <div class="flex-1"></div>
        <toggle-button
            @change="config.onChange"
            :disabled="!!config.disabled"
            v-model="selected"
            :classes="{
                container:
                    'inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30',
                toggle:
                    'flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2',
                toggleOn: 'bg-blue-500 border-blue-500 text-white',
                toggleOff: 'bg-gray-200 border-gray-200 text-gray-700',
                toggleOnDisabled:
                    'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
                toggleOffDisabled:
                    'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
                handle: 'inline-block bg-white w-15 h-15 rounded-full absolute transition-all',
                handleOn: 'left-full transform -translate-x-full',
                handleOff: 'left-0'
            }"
        ></toggle-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { Vue, Prop } from 'vue-property-decorator';

export default defineComponent({
    name: 'ToggleSwitchControl',
    props: {
        config: Object,
        name: String,
        icon: String
    },
    data() {
        return {
            selected: Boolean
        };
    },
    mounted() {
        // Set the toggle switch to the default visibility of the layer.
        this.selected = this.config?.value;

        // Watch for a change in layer visibility.
        watch(
            () => this.config?.value,
            (newVal, oldVal) => {
                this.selected = newVal;
            }
        );
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
