<template>
    <!-- Visibility -->
    <div class="flex flex-row rv-label">
        <div class="flex items-center">
            <div v-html="icon" class="p-8 pl-0"></div>
            {{ name }}
        </div>
        <div class="flex-1"></div>
        <button @click="config.onChange" :disabled="!!config.disabled" class="rv-button">
            {{ config.value ? 'Enable' : 'Disable' }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Toggle from '@vueform/toggle';

export default defineComponent({
    name: 'ToggleButtonControl',
    props: {
        config: {
            type: Object,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        }
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
.rv-button {
    @apply py-8 px-8 uppercase w-75;
}
.rv-button:hover {
    @apply bg-gray-200;
}
.rv-button:focus {
    outline: none;
}
</style>
