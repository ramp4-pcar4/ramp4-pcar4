<template>
    <appbar-button :onClickFunction="togglePanel">
        <template #icon>
            <span class="block h-24">⛄</span>
        </template>
        <template #tooltip>⛄</template>
    </appbar-button>
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class SnowmanAppbarButtonV extends Vue {
    togglePanel(): void {
        // summon the SNOWMAN!
        this.$iApi.fixture.add('snowman');

        // the above will re-add the snowman fixture as it was self-terminated
    }
}
</script>

<style lang="scss" scoped></style>
