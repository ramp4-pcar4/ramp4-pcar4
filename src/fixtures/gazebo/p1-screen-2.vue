<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 1/Screen B </template>

        <template #content>
            <div class="flex flex-col items-center">
                <!-- setting panel route directly in the store will not work ❌  -->
                <button
                    type="button"
                    @click="panel.show({ screen: 'p-1-screen-1' })"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16"
                >
                    See Gazebo 1
                </button>
                <br />
                <img
                    src="http://nesn.com/wp-content/uploads/2014/09/jeternephew.gif"
                    alt="Gazebo2"
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
