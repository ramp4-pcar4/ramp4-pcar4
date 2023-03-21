<template>
    <div
        class="h-full flex flex-col items-stretch"
        :content="t('panels.access')"
        v-tippy="{
            trigger: 'focus',
            appendTo: 'parent',
            onShow: checkMode,
            popperOptions: {
                modifiers: [
                    { name: 'preventOverflow', options: { altAxis: true } }
                ]
            }
        }"
        ref="el"
    >
        <header
            v-if="header"
            class="flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
            tabindex="-1"
        >
            <back class="block sm:display-none" @click="panel.close()"></back>

            <h2 class="flex-grow text-lg py-16 pl-8 min-w-0" v-truncate>
                <slot name="header"></slot>
            </h2>

            <panel-options-menu v-if="!!$slots.controls">
                <slot name="controls"></slot>
            </panel-options-menu>

            <div class="display-none sm:flex">
                <left
                    v-if="reorderable"
                    @click="move('left')"
                    :active="!panel.isLeftMostPanel"
                />
                <right
                    v-if="reorderable"
                    @click="move('right')"
                    :active="!panel.isRightMostPanel"
                />
                <pin @click="panel.pin()" :active="panel.isPinned" />
                <expand
                    v-if="panel.controls && panel.controls.expand"
                    @click="panel.expand()"
                    :active="panel.expanded"
                />
                <minimize
                    v-if="panel.button && temporary?.includes(panel.id)"
                    @click="panel.minimize()"
                />
                <close @click="panel.close()" />
            </div>
        </header>

        <div v-if="content" class="p-8 flex-grow overflow-y-auto">
            <slot name="content"></slot>
        </div>

        <div
            v-if="footer"
            class="px-16 py-16 border-t border-gray-400 default-focus-style"
            v-focus-item
        >
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InstanceAPI, PanelInstance } from '@/api';
import { computed, inject, nextTick, ref } from 'vue';
import type { PropType } from 'vue';
import { usePanelStore } from '@/stores/panel';
import { useI18n } from 'vue-i18n';
import { useAppbarStore } from '@/fixtures/appbar/store';

const { t } = useI18n();
const panelStore = usePanelStore();
const appbarStore = useAppbarStore();
const iApi = inject<InstanceAPI>('iApi');
const el = ref<Element>();

const props = defineProps({
    // prop indicating if the `header` slot should be rendered
    header: {
        type: Boolean,
        default: true
    },
    // prop indicating if the `content` slot should be rendered
    content: {
        type: Boolean,
        default: true
    },
    // prop indicating if the `footer` slot should be rendered
    footer: {
        type: Boolean,
        default: false
    },
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const temporary = computed((): Array<string> | undefined =>
    iApi?.fixture.get('appbar') ? appbarStore.temporary : []
);
const mobileView = computed(() => panelStore.mobileView);
const reorderable = computed(() => panelStore.reorderable);

const checkMode = () => !mobileView.value;
const move = (direction: string) => {
    props.panel.move(direction);
    if (direction === 'left') {
        // needed to preserve focus on correct panel
        nextTick(() => {
            (el.value?.querySelector('.move-left') as HTMLElement).focus();
        });
    }
};
</script>

<style lang="scss" scoped></style>
