<template>
    <panel-screen :panel="panel">
        <template #header>
            Iklob Fixture
        </template>

        <template #controls>
            <close @click="panel.close()"></close>
        </template>

        <template #content>
            <div class="flex flex-col items-center mt-16">
                <span class="text-6xl">🤷‍♂️</span>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IklobFixtureV',
    props: {
        panel: Object
    }
});
</script>

<style scoped></style>
