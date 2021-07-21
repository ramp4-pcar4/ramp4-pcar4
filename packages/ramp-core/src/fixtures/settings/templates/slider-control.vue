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
                :value="config.value"
                :width="250"
                :min="0"
                :max="100"
            />
            {{ config.value }}%
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';

@Options({
    components: { VueSlider }
})
export default class SliderControl extends Vue {
    @Prop() config!: any;
    @Prop() name!: string;
    @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
