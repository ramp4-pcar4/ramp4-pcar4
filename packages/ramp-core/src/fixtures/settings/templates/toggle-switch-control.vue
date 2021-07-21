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
            :value="config.value"
            :sync="true"
            color="#3498DB"
            :labels="false"
        ></toggle-button>
    </div>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { ToggleButton } from 'vue-js-toggle-button';

@Options({
    components: { 'toggle-button': ToggleButton }
})
export default class ToggleSwitchControl extends Vue {
    @Prop() config: any;
    @Prop() name!: string;
    @Prop() icon!: string;
}
</script>

<style lang="scss" scoped>
.rv-label {
    @apply flex items-center;
}
</style>
