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
        <div
            v-if="el?.textContent"
            ref="copyTooltip"
            v-tippy="{
                triggerTarget: el,
                placement: 'bottom',
                theme: 'ramp4',
                hideOnClick: false,
                delay: [1000, 0]
            }"
            :content="t(`grid.label.${isCopied ? 'copied' : 'copy'}`)"
        ></div>
    </div>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeUnmount, onMounted, ref } from 'vue';
import type { InstanceAPI } from '@/api';
import linkifyHtml from 'linkify-html';
import { useI18n } from 'vue-i18n';

const iApi = inject<InstanceAPI>('iApi')!;
const { t } = useI18n();
const copyTooltip = ref<HTMLElement>();
const el = ref<HTMLElement>();
const isCopied = ref<boolean>(false);

const props = defineProps(['params']);

const copy = () => {
    if (!el.value?.textContent) {
        return;
    }

    isCopied.value = true;
    (copyTooltip.value as any)?._tippy.show();
    navigator.clipboard.writeText(el.value?.textContent!);
    setTimeout(() => {
        isCopied.value = false;
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

onMounted(() => {
    // hoist events to cell wrapper for accessibility
    props.params.eGridCell.addEventListener('dblclick', () => {
        copy();
    });
    props.params.eGridCell.addEventListener('keydown', (e: KeyboardEvent) => {
        if (e.ctrlKey && e.code === 'KeyC') {
            copy();
        }
    });
    props.params.eGridCell.addEventListener('blur', () => {
        (el.value as any)._tippy.hide();
        (copyTooltip.value as any)?._tippy.hide();
    });
    props.params.eGridCell.addEventListener('focus', () => {
        (el.value as any)?._tippy.show();
        // long wait so that copy tooltip does not flicker
        setTimeout(() => {
            if (document.activeElement === props.params.eGridCell) {
                (copyTooltip.value as any)?._tippy.show();
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
        'keydown',
        (e: KeyboardEvent) => {
            if (e.ctrlKey && e.code === 'KeyC') {
                copy();
            }
        }
    );
    props.params.eGridCell.removeEventListener('blur', () => {
        (el.value as any)._tippy.hide();
        (copyTooltip.value as any)?._tippy.hide();
    });
    props.params.eGridCell.removeEventListener('focus', () => {
        (el.value as any)._tippy.show();
        (copyTooltip.value as any)?._tippy.show();
    });
});
</script>

<style lang="scss"></style>
