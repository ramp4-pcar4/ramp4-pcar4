<template>
    <div>
        <div
            class="p-5 pl-3 flex justify-end flex-wrap even:bg-gray-300"
            v-for="(val, name, itemIdx) in itemData()"
            :key="itemIdx"
        >
            <span class="inline font-bold">{{ val.alias }}</span>
            <span class="flex-auto"></span>
            <span
                class="inline"
                v-html="formatValues(val.value, val.alias, val.type)"
            ></span>
        </div>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue';
import type { PropType } from 'vue';
import type { FieldDefinition, IdentifyItem } from '@/geo/api';
import type { DetailsFieldItem } from '@/fixtures/details/store';
import linkifyHtml from 'linkify-html';
import type { InstanceAPI } from '@/api';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const iApi = inject<InstanceAPI>('iApi');

const props = defineProps({
    fixtureFields: {
        type: Object as PropType<Array<DetailsFieldItem>>,
        required: false
    },
    fields: {
        type: Object as PropType<Array<FieldDefinition>>,
        required: true
    },
    identifyData: {
        type: Object as PropType<IdentifyItem>,
        required: true
    }
});

const findAndDelete = (
    fields: FieldDefinition[],
    propertyType: 'type' | 'name',
    property: string,
    helper: any
) => {
    const field = fields.find(
        f => f[propertyType].toLowerCase() === property.toLowerCase()
    );

    // If the field is found, delete it from the helper object
    if (field) delete helper[field.name];
};

// clone identifyData and remove unwanted data
const itemData = () => {
    const helper: any = {};
    Object.assign(helper, props.identifyData.data);

    // Remove any fields of type geometry
    findAndDelete(props.fields, 'type', 'geometry', helper);

    if (!iApi?.ui.exposeOids) {
        // check global oid flag
        findAndDelete(props.fields, 'type', 'oid', helper);
    }

    if (!iApi?.ui.exposeMeasurements) {
        // check global measurements flag
        findAndDelete(props.fields, 'name', 'shape_length', helper);
        findAndDelete(props.fields, 'name', 'shape_area', helper);
    }

    let aliases: any = {};
    props.fields.forEach(field => {
        // Check to see if this field is being overwritten in the fixture config.
        const checkField = props.fixtureFields?.find(
            (item: DetailsFieldItem) => field.name == item.field
        );

        aliases[field.name] = {
            name: checkField?.alias || field.alias || field.name,
            type: field.type,
            visible: checkField?.visible ?? true
        }; // use the key name if alias is not defined. Default visibility to true if it's not defined.
    });

    Object.keys(helper).map(key => {
        helper[key] = {
            value:
                typeof helper[key] === 'number'
                    ? iApi?.ui.formatNumber(helper[key])
                    : helper[key],
            alias: aliases[key].name || key, // use the key name if alias is undefined
            type: aliases[key].type
        };

        // If the field is set to invisible, don't display it.
        if (!aliases[key].visible) {
            delete helper[key];
        }
    });

    return helper;
};

// render value based on type
const formatValues = (html: string, alias: string, type: string): string => {
    switch (type) {
        case 'date':
            return makeDate(html);
        default:
            return makeHtmlLink(html, alias);
    }
};

// make links look like links and work like links
const makeHtmlLink = (html: string, alias: string): string => {
    if (!html) {
        return html;
    }

    // Check to see if url is a valid image / data url based on extension type or format
    if (
        !!html.trim().match(/\.(jpeg|jpg|gif|png)$/) ||
        !!html.trim().match(
            /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i //eslint-disable-line
        )
    ) {
        return `<img src="${html}" alt="${t(
            'details.item.alert.defaultAltText',
            { alias: alias }
        )}" />`;
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
};

// convert timestamps into date strings that match the datagrid
const makeDate = (html: string): string => {
    // the value is saved as a string, so attempt to convert it to a number
    const numericDate = parseInt(html);

    // if the date can't be converted to a number, then it may already be formatted. Display it as it is.
    if (isNaN(numericDate)) {
        return html;
    }

    // Return in YYYY-MM-DD format
    const formattedDate = new Date(numericDate);
    return formattedDate.toISOString().split('T')[0];
};
</script>

<style lang="scss"></style>
