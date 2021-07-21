<template>
    <panel-screen>
        <template #header>
            {{ $t('help.title') }}
        </template>

        <template #controls>
            <pin @click="panel.pin()" :active="isPinned"></pin>
            <close @click="panel.close()"></close>
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

<script lang="ts">
import { Vue, Options, Prop } from 'vue-property-decorator';
import { Get } from 'vuex-pathify';

import { PanelInstance } from '@/api';
import { HelpStore } from './store';
import HelpSectionV from './section.vue';

// TODO check if we actually need this library. Does vue have its own internal web request library?
import axios from 'axios';
import marked from 'marked';

@Options({
    components: {
        'help-section': HelpSectionV
    }
})
export default class HelpScreenV extends Vue {
    @Prop() panel!: PanelInstance;
    @Get(HelpStore.folderName) folderName!: string;

    helpSections: any = [];

    mounted() {
        // make help request when fixture loads or locale changes
        this.$watch(
            '$i18n.locale',
            (newLocale, oldLocale) => {
                if (newLocale === oldLocale) return;
                // path to where HELP is hosted is different if RAMP is built as prod library
                const base =
                    process.env.VUE_APP_BUILD_TARGET === 'lib'
                        ? '../dist/'
                        : '/';
                const folder = this.folderName || 'default';
                const renderer = new marked.Renderer();
                // make it easier to use images in markdown by prepending path to href if href is not an external source
                // this avoids the need for ![](help/images/myimg.png) to just ![](myimg.png). This overrides the default image renderer completely.
                renderer.image = (href: string, title: string) => {
                    if (href.indexOf('http') === -1) {
                        href = `${base}help/${folder}/images/` + href;
                    }
                    return `<img src="${href}" alt="${title}">`;
                };
                axios.get(`${base}help/${folder}/${newLocale}.md`).then(r => {
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
                    this.helpSections = [];
                    let section;
                    while ((section = reg.exec(helpMd))) {
                        this.helpSections.push({
                            header: section[1],
                            // parse markdown on info section, split/splice/join removes the header
                            // since we can't put info section into its own regex grouping
                            info: marked(
                                section[0]
                                    .split('\n')
                                    .splice(2)
                                    .join('\n'),
                                { renderer }
                            )
                        });
                    }
                });
            },
            { immediate: true }
        );
    }

    get isPinned(): boolean {
        return this.panel.isPinned;
    }
}
</script>

<style lang="scss" scoped></style>
