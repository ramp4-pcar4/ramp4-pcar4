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
                    @input="doSearch(searchTerm, helpSections)"
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
import HelpSection from './section.vue';
import axios from 'redaxios';
import { marked } from 'marked';
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
const helpSections = ref<Array<any>>([]);
const originalTextArray = ref<Array<any>>([]);
const watchers = ref<Array<() => void>>([]);

const noResults = ref<boolean>(false);
let numResults: number;
let searchTerm: string;

//find search term in info sections without impacting the HTML tags
function findInfo(searchTerm: string, section: any) {
    const segments: string[] = section.info.split(/(<[^>]*>)/);
    for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
            if (segment.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1) {
                return true;
            }
        }
    }
    return false;
}

// highlight the search term
function highlightSearchTerm(searchTerm: string, idx: number) {
    const originalText = originalTextArray.value[idx];
    // split text around <a> and <img> to preserve links
    const segments: string[] = originalText.split(/(<[^>]*>)/);
    let highlightedText: string = '';
    for (const [i, segment] of segments.entries()) {
        if (i % 2 === 0) {
            highlightedText += segment.replace(
                new RegExp(searchTerm, 'gi'),
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
function doSearch(searchTerm: string, sections: any) {
    numResults = 0;
    sections.forEach((section: any, index: number) => {
        //reset the text to original before looking for search term
        section.info = originalTextArray.value[index];
        //find the search term in each section
        section.drawn =
            findInfo(searchTerm, section) || section.header.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        numResults = section.drawn ? numResults + 1 : numResults;
        section.expanded = section.drawn && searchTerm.length > 2;
        if (section.drawn && searchTerm.length > 2) {
            highlightSearchTerm(searchTerm, index);
        }
    });
    noResults.value = numResults === 0;
}

function toggleExpanded(section: any) {
    section.expanded = !section.expanded;
}

onBeforeMount(() => {
    // make help request when fixture loads or locale changes
    watchers.value.push(
        watch(
            () => iApi.language,
            (newLocale: any, oldLocale: any) => {
                if (newLocale === oldLocale) return;
                // path to where HELP is hosted is different if RAMP is built as prod library
                const renderer = new marked.Renderer();
                const loc = location.value.slice(-1) === '/' ? location.value : `${location.value}/`;
                // make it easier to use images in markdown by prepending path to href if href is not an external source
                // this avoids the need for ![](help/images/myimg.png) to just ![](myimg.png). This overrides the default image renderer completely.
                renderer.image = (href: string, title: string, text: string) => {
                    if (href.indexOf('http') === -1) {
                        href = `${loc}images/` + href;
                    }
                    return `<img src="${href}" alt="${text}">`;
                };
                axios.get(`${loc}${newLocale}.md`).then(r => {
                    // matches help sections from markdown file where each section begins with one hashbang and a space
                    // followed by the section header, exactly 2 newlines, then up to but not including a double newline
                    // note that the {2,} below is used as the double line deparator since each double new line is actually 6
                    // but we'll also accept more than a double space
                    const reg = /^#\s(.*)\n{2}(?:.+|\n(?!\n{2,}))*/gm;
                    // remove new line character ASCII (13) so that above regex is compatible with all
                    // operating systems (markdown file varies by OS new line preference)
                    const helpMd = r.data.replace(new RegExp(String.fromCharCode(13), 'g'), '');
                    helpSections.value = [];
                    let section;
                    while ((section = reg.exec(helpMd))) {
                        helpSections.value.push({
                            header: section[1],
                            // parse markdown on info section, split/splice/join removes the header
                            // since we can't put info section into its own regex grouping
                            info: marked(section[0].split('\n').splice(2).join('\n'), {
                                renderer
                            }),
                            drawn: true,
                            expanded: false
                        });
                        //copy of the original text to refer to after highlighting
                        originalTextArray.value.push(
                            marked(section[0].split('\n').splice(2).join('\n'), {
                                renderer
                            })
                        );
                    }
                });
            },
            { immediate: true }
        )
    );
});

onBeforeUnmount(() => {
    watchers.value.forEach(unwatch => unwatch());
});
</script>

<style lang="scss" scoped></style>
