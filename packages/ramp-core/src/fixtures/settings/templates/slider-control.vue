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

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

export default defineComponent({
    components: { VueSlider },
    props: {
        name: String,
        icon: String,
        config: Object
    },
    data() {
        return {
            value: this.config?.value
        };
    }
});
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
