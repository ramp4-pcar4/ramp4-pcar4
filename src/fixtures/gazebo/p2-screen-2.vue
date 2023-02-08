<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen B </template>

        <template #content>
            {{ t('gz.hello2') }}

            <div class="flex flex-row justify-center items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    type="button"
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
                    type="button"
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

<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';
import type { InstanceAPI, PanelInstance } from '@/api';
import { useI18n } from 'vue-i18n';

const props = defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true },
    greeting: { type: String }
});

const { t } = useI18n();
const iApi = inject<InstanceAPI>('iApi')!;

const enhancedCatActivities = () => {
    // shows a cat, also does an event API flex
    props.panel.show('p-2-screen-3');
    iApi.event.emit('gazebo/beholdMyText', 'I am a cat');
};
</script>

<style lang="scss" scoped></style>
