<template>
    <!-- Visibility -->
    <div class="flex flex-row rv-label">
        <div class="flex items-center">
            <div v-html="icon" class="p-8 pl-0"></div>
            {{ name }}
        </div>
        <div class="flex-1"></div>
        <toggle
            @change="(value: any) => emit('toggled', value)"
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
        />
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, toRef, watch, onBeforeUnmount } from 'vue';
import Toggle from '@vueform/toggle';
import type { PropType } from 'vue';

const emit = defineEmits(['toggled']);

const props = defineProps({
    config: {
        type: Object as PropType<{ value: boolean; disabled?: boolean }>,
        required: true
    },
    name: String,
    icon: String
});

const isOn = ref<boolean>(props.config.value);
const isDisabled = ref<boolean>(!!props.config.disabled);
const toggleKey = ref<number>(0); // this key forces Vue to rerender Toggle
const watchers = reactive<Array<Function>>([]);

watchers.push(
    watch(
        toRef(props, 'config'),
        (nConf: any, oConf: any) => {
            isOn.value = nConf.value;
            isDisabled.value = !!nConf.disabled;
            // The Toggle component has a bug where if doesn't update its css classes when the disabled property changes.
            // The :key binding on the Toggle template is incremented if disabled changes, forcing a rerender
            toggleKey.value += isDisabled.value !== oConf.disabled ? 1 : 0;
        },
        { deep: true }
    )
);

const handleKeyup = () => {
    if (!isDisabled.value) {
        isOn.value = !isOn.value;
        emit('toggled', isOn.value);
    }
};

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
