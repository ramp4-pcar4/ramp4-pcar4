<template>
    <div>
        <div
            v-truncate="{
                options: {
                    placement: 'top',
                    hideOnClick: false,
                    theme: 'ramp4',
                    animation: 'scale'
                }
            }"
            :name="formatValue"
            :content="formatValue"
            tabindex="-1"
            v-html="formatValue"
            ref="el"
        ></div>
        <div class="h-0" ref="copyTooltip"></div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import type { InstanceAPI } from '@/api';
import linkifyHtml from 'linkify-html';
import { useTippy } from 'vue-tippy';
import { useI18n } from 'vue-i18n';

const iApi = inject<InstanceAPI>('iApi')!;
const { t } = useI18n();
const copyTooltip = ref<HTMLElement>();
const el = ref<HTMLElement>();
const copyText = ref<string>(t('grid.label.copy'));

const props = defineProps(['params']);

const copy = () => {
    copyText.value = t('grid.label.copied');
    show();
    navigator.clipboard.writeText(el.value?.textContent ?? '');
    setTimeout(() => {
        copyText.value = t('grid.label.copy');
    }, 2000);
};

const formatValue = computed<string>(() => {
    if (props.params.type === 'number') {
        return props.params.value == null
            ? ''
            : iApi.$i18n.n(props.params.value, 'number');
    } else if (props.params.type === 'date') {
        // get YYYY-MM-DD from date
        return props.params.value == null
            ? ''
            : new Date(props.params.value).toISOString().slice(0, 10);
    } else if (props.params.type === 'string') {
        // if value is falsey, return it
        if (!props.params.value) {
            return props.params.value;
        }

        // test if the value already contains an anchor tag
        // if it does, just return the value
        if (/<a[^>]*>[^<]+<\/a>/g.test(props.params.value)) {
            return props.params.value;
        }

        return linkifyHtml(props.params.value, {
            target: '_blank',
            validate: {
                url: (value: string) => /^https?:\/\//.test(value) // only links that begin with a protocol will be hyperlinked
            }
        });
    }
    return '';
});

const { show, hide } = useTippy(copyTooltip, {
    content: copyText,
    triggerTarget: el,
    appendTo: 'parent',
    placement: 'bottom',
    hideOnClick: false,
    delay: [1000, 0]
});

onMounted(() => {
    // hoist events to cell wrapper for accessibility
    props.params.eGridCell.addEventListener('dblclick', () => {
        copy();
    });
    props.params.eGridCell.addEventListener('keypress', (e: KeyboardEvent) => {
        if (e.key == ' ' || e.code == 'Space' || e.keyCode == 32) {
            copy();
        }
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (el.value as any)._tippy.hide();
        hide();
    });
    props.params.eGridCell.addEventListener('focus', () => {
        (el.value as any)._tippy.show();
        // long wait so that copy tooltip does not flicker
        setTimeout(() => {
            if (document.activeElement === props.params.eGridCell) {
                show();
            }
        }, 1000);
        if (
            (el.value as any)._tippy.reference.clientWidth >=
            (el.value as any)._tippy.reference.scrollWidth
        ) {
            // hacky solution to prevent non-truncated cells from having a tooltip when using keyboard controls
            (el.value as any)._tippy.hide();
        }
    });
});

onBeforeUnmount(() => {
    props.params.eGridCell.removeEventListener('dblclick', () => {
        copy();
    });
    props.params.eGridCell.removeEventListener(
        'keypress',
        (e: KeyboardEvent) => {
            if (e.key === 'Enter') {
                copy();
            }
        }
    );
    props.params.eGridCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
        hide();
    });
    props.params.eGridCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
        show();
    });
});
</script>

<style lang="scss">
.tippy-box[data-theme~='ramp4'] {
    line-height: 1.5;
}
</style>
