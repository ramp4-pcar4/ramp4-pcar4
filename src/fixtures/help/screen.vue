<template>
    <panel-screen :panel="panel">
        <template #header>
            {{ t('help.title') }}
        </template>

        <template #content>
            <help-section
                v-for="(section, idx) in helpSections"
                :helpSection="section"
                :key="idx"
            ></help-section>
        </template>
    </panel-screen>
</template>

<script setup lang="ts">
import {
    computed,
    inject,
    onBeforeMount,
    onBeforeUnmount,
    ref,
    watch
} from 'vue';
import type { PropType } from 'vue';

import type { InstanceAPI, PanelInstance } from '@/api';
import { useHelpStore } from './store';
import HelpSection from './section.vue';
import axios from 'redaxios';
import { marked } from 'marked';
import { useI18n } from 'vue-i18n';

const iApi = inject<InstanceAPI>('iApi')!;
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
const watchers = ref<Array<Function>>([]);

onBeforeMount(() => {
    // make help request when fixture loads or locale changes
    watchers.value.push(
        watch(
            () => iApi.language,
            (newLocale: any, oldLocale: any) => {
                if (newLocale === oldLocale) return;
                // path to where HELP is hosted is different if RAMP is built as prod library
                const renderer = new marked.Renderer();
                const loc =
                    location.value.slice(-1) === '/'
                        ? location.value
                        : `${location.value}/`;
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
                    let helpMd = r.data.replace(
                        new RegExp(String.fromCharCode(13), 'g'),
                        ''
                    );
                    helpSections.value = [];
                    let section;
                    while ((section = reg.exec(helpMd))) {
                        helpSections.value.push({
                            header: section[1],
                            // parse markdown on info section, split/splice/join removes the header
                            // since we can't put info section into its own regex grouping
                            info: marked(
                                section[0].split('\n').splice(2).join('\n'),
                                {
                                    renderer
                                }
                            )
                        });
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
