<template>
    <appbar-button :onClickFunction="togglePanel" tooltip="⛄">
        <span class="block h-24">⛄</span>
    </appbar-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'SnowmanAppbarButtonV',
    methods: {
        togglePanel(): void {
            // summon the SNOWMAN!
            this.$iApi.fixture.add('snowman');

            // the above will re-add the snowman fixture as it was self-terminated
        }
    }
});
</script>

<style lang="scss" scoped></style>
