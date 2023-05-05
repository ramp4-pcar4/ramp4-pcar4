<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen C </template>

        <template #content>
            <div class="flex flex-col items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
                    type="button"
                    @click="
                        panel.show({
                            screen: 'p-2-screen-1',
                            props: { greeting: 'Greeting from Screen C' }
                        })
                    "
                    class="bg-green-500 hover:bg-green-700 text-white font-bold py-8 px-16"
                >
                    Switch to Screen A
                </button>

                <img
                    class="my-16"
                    src="https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif"
                    alt=""
                    srcset=""
                />

                <p>Locale merging:</p>
                <dl>
                    <dt>global locale:</dt>
                    <dd class="ml-32 font-bold">{{ t('lang_native') }}</dd>
                    <dt>fixture locale:</dt>
                    <dd class="ml-32 font-bold">{{ t('gz.hello') }}</dd>
                    <dt>common panels locale:</dt>
                    <dd class="ml-32 font-bold">{{ t('who') }}</dd>
                </dl>
            </div>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { PanelInstance } from '@/api';
import { useI18n } from 'vue-i18n';

defineProps({
    panel: { type: Object as PropType<PanelInstance>, required: true }
});

const { t } = useI18n({
    messages: {
        en: {
            lang_native: 'En',
            who: '[me cat]'
        },
        fr: {
            lang_native: 'Fr',
            who: '[moi chat]'
        }
    }
});
</script>

<style lang="scss" scoped></style>
