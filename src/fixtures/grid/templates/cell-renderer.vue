<template>
    <div
        v-truncate="{
            options: {
                placement: 'top',
                hideOnClick: false,
                theme: 'ramp4',
                animation: 'scale'
            }
        }"
        :content="formatValue"
        v-tippy="{ trigger: 'manual' }"
        tabindex="-1"
        v-html="formatValue"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { directive as tippyDirective } from 'vue-tippy';
import linkifyHtml from 'linkify-html';

export default defineComponent({
    name: 'CellRendererV',
    directives: {
        tippy: tippyDirective
    },
    props: ['params'],
    computed: {
        formatValue() {
            if (this.params.type === 'number') {
                return this.params.value == null
                    ? ''
                    : this.$iApi.$vApp.$n(this.params.value, 'number');
            } else if (this.params.type === 'date') {
                // get YYYY-MM-DD from date
                return this.params.value == null
                    ? ''
                    : new Date(this.params.value).toISOString().slice(0, 10);
            } else if (this.params.type === 'string') {
                // if value is falsey, return it
                if (!this.params.value) {
                    return this.params.value;
                }

                // test if the value already contains an anchor tag
                // if it does, just return the value
                if (/<a[^>]*>[^<]+<\/a>/g.test(this.params.value)) {
                    return this.params.value;
                }

                return linkifyHtml(this.params.value, {
                    target: '_blank',
                    validate: {
                        url: (value: string) => /^https?:\/\//.test(value) // only links that begin with a protocol will be hyperlinked
                    }
                });
            }
        }
    },
    mounted() {
        // hoist events to cell wrapper for accessibility
        this.params.eGridCell.addEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
        this.params.eGridCell.addEventListener('focus', () => {
            (this.$el as any)._tippy.show();
            if (
                this.$el._tippy.reference.clientWidth >=
                this.$el._tippy.reference.scrollWidth
            ) {
                // hacky solution to prevent non-truncated cells from having a tooltip when using keyboard controls
                (this.$el as any)._tippy.hide();
            }
        });
    },

    beforeUnmount() {
        this.params.eGridCell.removeEventListener('blur', () => {
            (this.$el as any)._tippy.hide();
        });
        this.params.eGridCell.removeEventListener('focus', () => {
            (this.$el as any)._tippy.show();
        });
    }
});
</script>

<style lang="scss" scoped></style>
