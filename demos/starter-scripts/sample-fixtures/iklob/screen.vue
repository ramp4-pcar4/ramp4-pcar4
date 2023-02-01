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

<script setup lang="ts">
import { inject, onBeforeMount, ref } from 'vue';

defineProps(['panel']);

const iApi = inject<any>('iApi')!;

const gazeboText = ref<string>('');
const onCatSeen = () => {
    gazeboText.value = 'The cat on the gazebo panel has been seen!';
};

onBeforeMount(() => {
    iApi.event.once('gazebo/beholdMyText', onCatSeen);
});
</script>

<style scoped></style>
