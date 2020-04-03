<template>
    <button class="py-6" @click="togglePanel()">
        ⛄
    </button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SnowmanAppbarButtonV extends Vue {
    togglePanel(): void {
        // summon the SNOWMAN!
        this.$iApi.fixture.add('snowman');
    }
}
</script>

<style lang="scss" scoped></style>
