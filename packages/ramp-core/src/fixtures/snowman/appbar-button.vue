<template>
    <appbar-button :onClickFunction="togglePanel" tooltip="⛄">
        <span class="block h-24">⛄</span>
    </appbar-button>
</template>
<script lang="ts">
import { Vue } from 'vue-property-decorator';

export default class SnowmanAppbarButtonV extends Vue {
    togglePanel(): void {
        // summon the SNOWMAN!
        this.$iApi.fixture.add('snowman');

        // the above will re-add the snowman fixture as it was self-terminated
    }
}
</script>

<style lang="scss" scoped></style>
