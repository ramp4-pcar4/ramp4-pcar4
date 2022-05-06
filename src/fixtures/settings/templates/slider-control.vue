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
                :disabled="this.config.disabled"
                :width="250"
                :min="0"
                :max="100"
            />
            {{ config.value }}%
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import VueSlider from '@ecgc/vue-slider-component';
import '@ecgc/vue-slider-component/theme/default.css';

export default defineComponent({
    components: { VueSlider },
    props: {
        name: String,
        icon: String,
        config: {
            type: Object,
            required: true
        }
    },

    created() {
        this.watchers.push(
            // watch the config for changes to the opacity value
            this.$watch(
                'config',
                (newConfig: any) => {
                    this.value = newConfig.value;
                    this.isDisabled = !!newConfig.disabled;
                },
                { deep: true }
            )
        );
    },

    beforeUnmount() {
        this.watchers.forEach(unwatch => unwatch());
    },

    data() {
        return {
            value: this.config.value,
            isDisabled: !!this.config.disabled,
            watchers: [] as Array<Function>
        };
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
