<template>
    <div>
        <div class="rv-label">
            <div v-html="icon" class="p-8 pl-0"></div>
            {{ name }}
        </div>
        <div class="flex flex-row pl-30">
            <vue-slider
                class="mr-16"
                @change="config.onChange"
                v-model="value"
                :disabled="isDisabled"
                :width="250"
                :min="0"
                :max="100"
            />
            {{ config.value }}%
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, reactive, ref, watch } from 'vue';
import VueSlider from '@ecgc/vue-slider-component';
import '@ecgc/vue-slider-component/theme/default.css';

const props = defineProps({
    name: String,
    icon: String,
    config: {
        type: Object,
        required: true
    }
});

const value = ref(props.config.value);
const isDisabled = ref(!!props.config.disabled);
const watchers = reactive<Array<Function>>([]);

watchers.push(
    // watch the config for changes to the opacity value
    watch(
        () => props.config,
        (newConfig: any) => {
            value.value = newConfig.value;
            isDisabled.value = !!newConfig.disabled;
        },
        { deep: true }
    )
);

onBeforeUnmount(() => {
    watchers.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
