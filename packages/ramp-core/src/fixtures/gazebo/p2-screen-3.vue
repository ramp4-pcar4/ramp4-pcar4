<template>
    <panel-screen :panel="panel">
        <template #header> Gazebo/Panel 2/Screen C </template>

        <template #controls>
            <!-- <pin> is a global button component that any fixture/panel/screen can reuse -->

            <!-- ✔ this is the correct way to pin a panel and bind the button active state whether this panel is pinned or not 👇 -->
            <pin
                @click="panel.pin()"
                :active="panel.isPinned"
                v-if="$iApi.screenSize !== 'xs'"
            ></pin>

            <!-- ✔ this will also work 👇 -->
            <!-- <pin @click="panel.pin()" :active="panel.isPinned"></pin> -->
            <close
                @click="panel.close()"
                v-if="$iApi.screenSize !== 'xs'"
            ></close>
        </template>

        <template #content>
            <div class="flex flex-col items-center mt-16">
                <!-- ✔ this is the correct way to switch between screens in the same panel 👇 -->
                <button
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
                    width="250px"
                    class="my-16"
                    src="https://media.giphy.com/media/iWkHDNtcHpB5e/giphy.gif"
                    alt=""
                    srcset=""
                />

                <p>Locale merging:</p>
                <dl>
                    <dt>global locale:</dt>
                    <dd class="ml-32 font-bold">{{ $t('lang-native') }}</dd>
                    <dt>fixture locale:</dt>
                    <dd class="ml-32 font-bold">{{ $t('gz.hello') }}</dd>
                    <dt>common panels locale:</dt>
                    <dd class="ml-32 font-bold">{{ $t('who') }}</dd>
                </dl>
            </div>
        </template>
    </panel-screen>
</template>

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';

import { PanelInstance } from '@/api';

@Options({
    i18n: {
        messages: {
            en: {
                who: '[me cat]'
            }
        }
    }
})
export default class GazeboP2Screen3V extends Vue {
    // ✔ this prop is always present and it's set by the panel-container component
    @Prop() panel!: PanelInstance;
}
</script>

<style lang="scss" scoped></style>
