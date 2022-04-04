<template>
    <!-- Visibility -->
    <div class="flex flex-row rv-label">
        <div class="flex items-center">
            <div v-html="icon" class="p-8 pl-0"></div>
            {{ name }}
        </div>
        <div class="flex-1"></div>
        <toggle
            @change="(value: any) => $emit('toggled', value)"
            @keyup.enter.capture.stop="handleKeyup"
            @keyup.space.capture.stop="handleKeyup"
            :disabled="isDisabled"
            :key="toggleKey"
            v-model="isOn"
            :classes="{
                container:
                    'inline-block rounded-full outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-30',
                toggle: 'flex w-40 h-15 rounded-full relative cursor-pointer transition items-center box-content border-2 text-xs leading-none',
                toggleOn:
                    'bg-blue-500 border-blue-500 justify-start text-white',
                toggleOff:
                    'bg-gray-200 border-gray-200 justify-end text-gray-700',
                toggleOnDisabled:
                    'bg-gray-300 border-gray-300 justify-start text-gray-400 cursor-not-allowed',
                toggleOffDisabled:
                    'bg-gray-200 border-gray-200 justify-end text-gray-400 cursor-not-allowed',
                handle: 'inline-block bg-white w-15 h-15 top-0 rounded-full absolute transition-all',
                handleOn: 'left-full transform -translate-x-full',
                handleOff: 'left-0',
                handleOnDisabled:
                    'bg-gray-100 left-full transform -translate-x-full',
                handleOffDisabled: 'bg-gray-100 left-0',
                label: 'text-center w-8 border-box whitespace-nowrap select-none'
            }"
        ></toggle>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import Toggle from '@vueform/toggle';

export default defineComponent({
    name: 'ToggleSwitchControl',
    components: { Toggle },
    emits: ['toggled'],
    props: {
        config: {
            type: Object as PropType<{ value: boolean; disabled?: boolean }>,
            required: true
        },
        name: String,
        icon: String
    },
    data() {
        return {
            isOn: this.config.value,
            isDisabled: !!this.config.disabled,
            toggleKey: 0, // this key forces Vue to rerender Toggle
            watchers: [] as Array<Function>
        };
    },

    created() {
        this.watchers.push(
            this.$watch(
                'config',
                (nConf: any, oConf: any) => {
                    this.isOn = nConf.value;
                    this.isDisabled = !!nConf.disabled;
                    // The Toggle component has a bug where if doesn't update its css classes when the disabled property changes.
                    // The :key binding on the Toggle template is incremented if disabled changes, forcing a rerender
                    this.toggleKey +=
                        this.isDisabled !== oConf.disabled ? 1 : 0;
                },
                { deep: true }
            )
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    },

    methods: {
        handleKeyup() {
            if (!this.isDisabled) {
                this.isOn = !this.isOn;
                this.$emit('toggled', this.isOn);
            }
        }
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
