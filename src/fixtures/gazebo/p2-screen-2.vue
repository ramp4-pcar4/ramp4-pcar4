<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen B </template>

        <template #content>
            {{ $t('gz.hello2') }}

            <div class="flex flex-row justify-center items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    @click="
                        panel.show({
                            screen: 'p-2-screen-1',
                            props: { greeting: 'Greeting from Screen B' }
                        })
                    "
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
                >
                    Switch to Screen A
                </button>

                <button
                    @click="enhancedCatActivities()"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
                >
                    See a cat
                </button>
            </div>

            <p class="mt-16">{{ greeting }}</p>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';

export default defineComponent({
    name: 'GazeboP2Screen2V',
    props: {
        panel: { type: Object as PropType<PanelInstance>, required: true },
        greeting: { type: String }
    },
    methods: {
        enhancedCatActivities() {
            // shows a cat, also does an event API flex
            this.panel.show('p-2-screen-3');
            this.$iApi.event.emit('gazebo/beholdMyText', 'I am a cat');
        }
    }
});
</script>

<style lang="scss" scoped></style>
