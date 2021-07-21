<template>
    <panel-screen>
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
// use Vue decorators for a more complex example
// this will results in a somewhat larger bundles since Vue decorators will be included in the bundle

import { Vue, Prop } from 'vue-property-decorator';

export default class IklobFixtureV extends Vue {
    @Prop() panel!: any; /* PanelInstance ;*/ // TODO: import `PanelInstance` type
}
</script>

<style scoped></style>
