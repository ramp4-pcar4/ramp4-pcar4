<template>
    <panel-screen :panel="panel">
        <template #header> Iklob Panel </template>

        <template #content>
            <div class="flex flex-col items-center mt-16">
                <span class="text-6xl">🤷‍♂️</span>
                <span class="mt-16">{{ gazeboText }}</span>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'IklobFixtureV',
    data() {
        return {
            gazeboText: ''
        };
    },
    props: {
        panel: Object
    },
    methods: {
        onCatSeen() {
            this.gazeboText = 'The cat on the gazebo panel has been seen!';
        }
    },
    created() {
        this.$iApi.event.once('gazebo/beholdMyText', this.onCatSeen);
    }
});
</script>

<style scoped></style>
