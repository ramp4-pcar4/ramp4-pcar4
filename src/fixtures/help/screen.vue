<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('help.title') }}
        </template>
        <template #content>
            <div class="h-26 mb-8 mx-8">
                <input
                    type="search"
                    class="rv-help-search-bar border-b w-full text-base py-8 outline-none focus:shadow-outline border-gray-600 h-full min-w-0"
                    :placeholder="t('help.search')"
                    v-model="searchTerm"
                    :aria-label="t('help.search')"
                    @input="doSearch(helpSections)"
                    @keypress.enter.prevent
                    enterkeyhint="done"
                />
            </div>
            <div v-if="noResults">
                <p>{{ t('help.noResults') }}</p>
            </div>
            <help-section
                v-for="(section, idx) in helpSections"
                :helpSection="section"
                :key="idx"
                @expand="toggleExpanded(section)"
            ></help-section>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import { computed, inject, onBeforeMount, onBeforeUnmount, ref, watch } from 'vue';
import type { PropType } from 'vue';

import type { InstanceAPI, PanelInstance } from '@/api';
import { useHelpStore } from './store';
import type { DynamicHelpMarkdown } from './store';
import HelpSection from './section.vue';
import axios from 'redaxios';
import { marked } from 'marked';
import type { Tokens } from 'marked';
import { useI18n } from 'vue-i18n';

const iApi = inject('iApi') as InstanceAPI;
const helpStore = useHelpStore();
const { t } = useI18n();

defineProps({
    panel: {
        type: Object as PropType<PanelInstance>,
        required: true
    }
});

const location = computed<string>(() => helpStore.location);
const dynamicSections = computed(() => helpStore.dynamicSections);
const helpSections = ref<Array<any>>([]);
const originalTextArray = ref<Array<any>>([]);
const watchers = ref<Array<() => void>>([]);

const noResults = ref<boolean>(false);
let numResults: number;
const searchTerm = ref<string>('');
let loadRequestId = 0;

//find search term in info sections without impacting the HTML tags
function findInfo(section: any) {
    const currentSearchTerm = searchTerm.value.toLowerCase();
    const segments: string[] = section.info.split(/(<[^>]*>)/);
    for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
            if (segment.toLowerCase().indexOf(currentSearchTerm) > -1) {
                return true;
            }
        }
    }
    return false;
}

// highlight the search term
function highlightSearchTerm(idx: number) {
    const currentSearchTerm = searchTerm.value;
    const originalText = originalTextArray.value[idx];
    // split text around <a> and <img> to preserve links
    const segments: string[] = originalText.split(/(<[^>]*>)/);
    let highlightedText: string = '';
    for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
            highlightedText += segment.replace(
                new RegExp(currentSearchTerm, 'gi'),
                (match: string) => `<mark>${match}</mark>`
            );
        } else {
            highlightedText += segment;
        }
    }
    // text to display set with highlights
    helpSections.value[idx].info = highlightedText;
}

// find the help sections which contain the search term
function doSearch(sections: any) {
    const currentSearchTerm = searchTerm.value;
    const normalizedSearchTerm = currentSearchTerm.toLowerCase();
    numResults = 0;
    sections.forEach((section: any, index: number) => {
        //reset the text to original before looking for search term
        section.info = originalTextArray.value[index];
        //find the search term in each section
        section.drawn =
            findInfo(section) || section.header.toLowerCase().indexOf(normalizedSearchTerm) > -1;
        numResults = section.drawn ? numResults + 1 : numResults;
        section.expanded = section.drawn && currentSearchTerm.length > 2;
        if (section.drawn && currentSearchTerm.length > 2) {
            highlightSearchTerm(index);
        }
    });
    noResults.value = numResults === 0;
}

function toggleExpanded(section: any) {
    section.expanded = !section.expanded;
}

function resolveLocalizedMarkdown(markdown: DynamicHelpMarkdown, locale: string): string {
    if (typeof markdown === 'string') {
        return markdown;
    }

    const baseLocale = locale.split('-')[0];
    return markdown[locale] ?? markdown[baseLocale] ?? markdown.en ?? Object.values(markdown)[0] ?? '';
}

function createRenderer(loc: string) {
    const renderer = new marked.Renderer();
    // make it easier to use images in markdown by prepending path to href if href is not an external source
    // this avoids the need for ![](help/images/myimg.png) to just ![](myimg.png). This overrides the default image renderer completely.
    renderer.image = (imageToken: Tokens.Image) => {
        let href = imageToken.href;
        if (href.indexOf('http') === -1) {
            href = `${loc}images/` + href;
        }
        return `<img src="${href}" alt="${imageToken.text}">`;
    };
    return renderer;
}

function parseHelpMarkdown(helpMd: string, renderer: ReturnType<typeof createRenderer>) {
    // matches help sections from markdown file where each section begins with one hashbang and a space
    // followed by the section header, exactly 2 newlines, then up to but not including a double newline
    // note that the {2,} below is used as the double line deparator since each double new line is actually 6
    // but we'll also accept more than a double space
    const reg = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
    const nextHelpSections: Array<any> = [];
    const nextOriginalTextArray: Array<any> = [];
    let section;
    while ((section = reg.exec(helpMd))) {
        const info = marked(section[0].split('\n').splice(2).join('\n'), {
            renderer,
            async: false
        });
        nextHelpSections.push({
            header: section[1],
            info,
            drawn: true,
            expanded: false
        });
        //copy of the original text to refer to after highlighting
        nextOriginalTextArray.push(info);
    }

    helpSections.value = nextHelpSections;
    originalTextArray.value = nextOriginalTextArray;

    if (searchTerm.value.length) {
        doSearch(helpSections.value);
    } else {
        noResults.value = false;
    }
}

async function loadHelpSections(locale: string) {
    const requestId = ++loadRequestId;
    // path to where HELP is hosted is different if RAMP is built as prod library
    const loc = location.value.slice(-1) === '/' ? location.value : `${location.value}/`;
    const renderer = createRenderer(loc);
    const response = await axios.get(`${loc}${locale}.md`);

    if (requestId !== loadRequestId) {
        return;
    }

    // remove new line character ASCII (13) so that above regex is compatible with all
    // operating systems (markdown file varies by OS new line preference)
    const staticMarkdown = response.data.replace(new RegExp(String.fromCharCode(13), 'g'), '');
    const dynamicMarkdown = dynamicSections.value
        .map(section => resolveLocalizedMarkdown(section.markdown, locale))
        .filter(markdown => markdown.trim().length > 0)
        .join('\n\n')
        .replace(new RegExp(String.fromCharCode(13), 'g'), '');

    parseHelpMarkdown([staticMarkdown, dynamicMarkdown].filter(Boolean).join('\n\n'), renderer);
}

onBeforeMount(() => {
    // make help request when fixture loads, locale changes, or dynamic fixture help changes
    watchers.value.push(
        watch(
            [() => iApi.language, location, dynamicSections],
            ([newLocale]: any) => {
                void loadHelpSections(newLocale);
            },
            { immediate: true, deep: true }
        )
    );
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
