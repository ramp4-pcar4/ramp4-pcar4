<template>
    <div
        class="h-full flex flex-col items-stretch"
        :content="`<div style='word-break: break-word;'>${t(panel.alertName) + '. ' + t('panels.access')}</div>`"
        v-tippy="{
            trigger: 'manual',
            touch: false,
            onShow: checkMode,
            allowHTML: true,
            maxWidth: panel.style['flex-basis'] ?? 350,
            popperOptions: {
                placement: 'top',
                modifiers: [
                    { name: 'preventOverflow', options: { altAxis: true } },
                    { name: 'flip', options: { fallbackPlacements: ['top'] } }
                ]
            }
        }"
        ref="el"
    >
        <header
            v-if="header"
            class="flex flex-shrink-0 items-center border-b border-solid border-gray-600 px-8 h-48 overflow-hidden"
        >
            <back :class="!!panel.teleport ? 'display-none' : 'block sm:display-none'" @click="panel.close()"></back>

            <h2 class="flex-grow text-lg py-16 pl-8 min-w-0" v-truncate tabIndex="0">
                <slot name="header" v-if="$slots.header"></slot>
                <div v-else>{{ t(panel.alertName) }}</div>
            </h2>

            <panel-options-menu v-if="!!$slots.controls">
                <slot name="controls"></slot>
            </panel-options-menu>

            <div :class="!!panel.teleport ? 'flex' : 'display-none sm:flex'">
                <div class="flex" v-if="!panel.teleport">
                    <left v-if="reorderable" @click="move('left')" :active="!panel.isLeftMostPanel" />
                    <right v-if="reorderable" @click="move('right')" :active="!panel.isRightMostPanel" />
                    <pin @click="panel.pin()" :active="panel.isPinned" />
                    <expand
                        v-if="panel.controls && panel.controls.expand"
                        @click="panel.expand()"
                        :active="panel.expanded"
                    />
                </div>
                <minimize v-if="panel.button && temporary?.includes(panel.id)" @click="panel.minimize()" />
                <close @click="panel.close()" />
            </div>
        </header>

        <!-- Default to non-tabbable; script promotes to tabindex=0 only for standalone scroll regions. -->
        <div v-if="content" class="p-8 flex-grow overflow-y-auto" ref="contentEl" tabindex="-1">
            <slot name="content" v-if="$slots.content"></slot>
            <div v-else-if="screenContent" v-html="screenContent.innerHTML"></div>
        </div>

        <div v-if="footer" class="px-8 py-16 border-t border-gray-400 default-focus-style" v-focus-item>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { InstanceAPI, PanelInstance } from '@/api';
import { computed, inject, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue';
import type { PropType } from 'vue';
import type { PanelDirection } from '@/stores/panel';
import { usePanelStore } from '@/stores/panel';
import { useI18n } from 'vue-i18n';
import { useAppbarStore } from '@/fixtures/appbar/store';
import { keyboardTooltipTest } from '@/utils/keyboard';

const { t } = useI18n();
const panelStore = usePanelStore();
const appbarStore = useAppbarStore();
const iApi = inject('iApi') as InstanceAPI;
const el = useTemplateRef('el');
const contentEl = useTemplateRef('contentEl');
const contentResizeObserver = ref<ResizeObserver | null>();
const contentMutationObserver = ref<MutationObserver | null>();
const contentTabIndexObserver = ref<MutationObserver | null>();
defineExpose({ el });

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
    },
    screenId: {
        type: String,
        required: false
    }
});
const temporary = computed((): Array<string> | undefined => (iApi.fixture.get('appbar') ? appbarStore.temporary : []));
const mobileView = computed(() => panelStore.mobileView);
const reorderable = computed(() => panelStore.reorderable);
// Managed focus descendants own keyboard traversal; wrapper should not become a competing tab stop.
const MANAGED_FOCUS_SELECTOR = '[focus-list], [focus-container]';
const isScrollable = (element: HTMLElement) => element.scrollHeight > element.clientHeight;
const getManagedFocusTarget = (element: HTMLElement) => element.querySelector<HTMLElement>(MANAGED_FOCUS_SELECTOR);
const getExpectedContentTabIndex = () => {
    if (!contentEl.value) {
        return '-1';
    }

    const hasManagedFocusChildren = !!getManagedFocusTarget(contentEl.value);
    // Focus wrapper only for pure scroll containers; defer to managed focus systems otherwise.
    return isScrollable(contentEl.value) && !hasManagedFocusChildren ? '0' : '-1';
};
const syncContentTabIndex = () => {
    if (!contentEl.value) {
        return;
    }

    const expectedTabIndex = getExpectedContentTabIndex();
    // Self-heal tabindex if external code mutates it.
    if (contentEl.value.getAttribute('tabindex') !== expectedTabIndex) {
        contentEl.value.setAttribute('tabindex', expectedTabIndex);
    }
};
const contentFocusEvent = (e: FocusEvent) => {
    if (e.target !== contentEl.value || !contentEl.value) {
        return;
    }

    const focusTarget = getManagedFocusTarget(contentEl.value);
    if (!focusTarget) {
        return;
    }

    // Avoid trapping backward traversal if focus is leaving descendants.
    const previous = e.relatedTarget as HTMLElement | null;
    if (previous && contentEl.value.contains(previous)) {
        return;
    }

    focusTarget.focus();
};
const blurEvent = () => {
    (el.value as any)?._tippy?.hide();
};
const keyupEvent = (e: Event) => {
    if (keyboardTooltipTest(e, el.value as HTMLElement)) {
        (el.value as any)?._tippy?.show();
    }
};

const checkMode = () => !mobileView.value && !props.panel.teleport;
const move = (direction: PanelDirection) => {
    props.panel.move(direction);
    if (direction === 'left') {
        // needed to preserve focus on correct panel.
        nextTick(() => {
            (el.value?.querySelector('.move-left') as HTMLElement).focus();
        });
    }
};
const screenContent = computed(() => {
    return props.screenId ? props.panel.screens[props.screenId][iApi.$i18n.locale.value ?? 'en'] : null;
});

onMounted(() => {
    el.value?.addEventListener('blur', blurEvent);
    el.value?.addEventListener('keyup', keyupEvent);

    if (contentEl.value) {
        contentEl.value.addEventListener('focus', contentFocusEvent);
        // Keep rule in sync when layout/overflow changes (e.g., panel resize, async content growth).
        contentResizeObserver.value = new ResizeObserver(syncContentTabIndex);
        contentResizeObserver.value.observe(contentEl.value);
        // Keep rule in sync when focus-managed descendants are mounted/unmounted.
        contentMutationObserver.value = new MutationObserver(syncContentTabIndex);
        contentMutationObserver.value.observe(contentEl.value, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['focus-list', 'focus-container']
        });
        // Guard against outside tabindex mutations on the wrapper itself.
        contentTabIndexObserver.value = new MutationObserver(syncContentTabIndex);
        contentTabIndexObserver.value.observe(contentEl.value, {
            attributes: true,
            attributeFilter: ['tabindex']
        });
        syncContentTabIndex();
    }
});

onBeforeUnmount(() => {
    el.value?.removeEventListener('blur', blurEvent);
    el.value?.removeEventListener('keyup', keyupEvent);
    contentEl.value?.removeEventListener('focus', contentFocusEvent);
    contentResizeObserver.value?.disconnect();
    contentMutationObserver.value?.disconnect();
    contentTabIndexObserver.value?.disconnect();
});
</script>

<style lang="scss" scoped></style>
