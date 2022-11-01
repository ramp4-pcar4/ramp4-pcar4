<template>
    <div>
        <div
            class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300"
            v-for="(val, name, itemIdx) in itemData()"
            :key="itemIdx"
        >
            <span class="inline font-bold">{{ val.alias }}</span>
            <span class="flex-auto"></span>
            <span class="inline" v-html="makeHtmlLink(val.value)"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import type { FieldDefinition, IdentifyItem } from '@/geo/api';
import linkifyHtml from 'linkify-html';

export default defineComponent({
    name: 'ESRIDefaultV',
    props: {
        fields: {
            type: Object as PropType<Array<FieldDefinition>>,
            required: true
        },
        identifyData: {
            type: Object as PropType<IdentifyItem>,
            required: true
        }
    },

    methods: {
        // clone identifyData and remove unwanted data
        itemData() {
            const helper: any = {};
            Object.assign(helper, this.identifyData.data);
            if (helper.Symbol !== undefined) delete helper.Symbol;

            let aliases: any = {};
            this.fields.forEach(field => {
                aliases[field.name] = field.alias || field.name; // use the key name if alias is not defined
            });

            Object.keys(helper).map(key => {
                helper[key] = {
                    value:
                        typeof helper[key] === 'number'
                            ? this.$iApi.$vApp.$n(helper[key], 'number')
                            : helper[key],
                    alias: aliases[key] || key // use the key name if alias is undefined
                };
            });
            return helper;
        },
        /**
         * Make links look like links and work like links
         */
        makeHtmlLink(html: string): string {
            if (!html) {
                return html;
            }

            // Check to see if url is a valid image / data url based on extension type or format
            if (
                !!html.trim().match(/\.(jpeg|jpg|gif|png)$/) ||
                !!html
                    .trim()
                    .match(
                        /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i
                    )
            ) {
                return `<img src="${html}" />`;
            }

            const classes = 'underline text-blue-600 break-all';
            const div = document.createElement('div');
            div.innerHTML = html.trim();

            // check if the html string is just an <a> tag
            if (div.firstElementChild?.tagName == 'A') {
                div.firstElementChild.className = classes;
                return div.innerHTML;
            } else {
                // otherwise, look for any valid links
                const options = {
                    className: classes,
                    target: '_blank',
                    validate: {
                        url: (value: string) => /^https?:\/\//.test(value) // only links that begin with a protocol will be hyperlinked
                    }
                };
                return linkifyHtml(html, options);
            }
        }
    }
});
</script>

<style lang="scss"></style>
