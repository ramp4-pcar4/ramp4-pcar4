<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 1/Screen A </template>

        <template #controls>
            <a href="javascript:;">Option 1</a>
            <a href="javascript:;">Option 2</a>
            <a href="javascript:;">Option 3</a>
        </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- setting panel route directly in the store will not work ❌  -->
                <button
                    type="button"
                    @click="panel.show({ screen: 'p-1-screen-2' })"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
                >
                    See Gazebo 2
                </button>
                <br />
                <img
                    src="https://c.tenor.com/RJ3ZG5beDhIAAAAC/napoleon-dynamite-napoleon.gif"
                    alt="Gazebo1"
                />
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { PanelInstance } from '../../api';

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});
</script>

<style lang="scss" scoped></style>
