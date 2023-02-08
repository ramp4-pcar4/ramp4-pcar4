<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen A </template>

        <template #content>
            {{ t('gz.hello') }}

            <div class="flex flex-row justify-center items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    type="button"
                    @click="
                        panel.show({
                            screen: 'p-2-screen-2',
                            props: { greeting: 'Howdy?' }
                        })
                    "
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16 m-2"
                >
                    Go back to B
                </button>

                <button
                    type="button"
                    @click="panel.show('p-2-screen-3')"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-8 px-16 m-2"
                >
                    Go to C
                </button>
            </div>

            <p class="mt-16">{{ greeting }}</p>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true },
    greeting: { type: String }
});
</script>

<style lang="scss" scoped></style>
