<template>
    <div>
        <div >
            <div class="help-section-header flex items-center p-15 hover:bg-gray-200 cursor-pointer" @click="toggleExpanded()">
                <!-- name -->
                <span class="text-lg flex-grow select-none">{{ helpSection.header }}</span>

                <!-- dropdown icon -->
                <div id="icon" :class="{ 'rotate-180': expanded }">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                        <path d="M0 0h24v24H0V0z" fill="none" />
                        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                    </svg>
                </div>
            </div>
            <div v-if="expanded" v-html="helpSection.info" class="section-body px-5 pt-5"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import { PanelInstance } from '@/api';

@Component({})
export default class HelpSectionV extends Vue {
    @Prop() helpSection!: any;

    expanded: boolean = false;

    toggleExpanded() {
        this.expanded = !this.expanded;
    }
}
</script>

<style lang="scss" scoped>
.section-body {
    ::v-deep p {
        @apply mb-10;
    }
}
.help-section-header #icon {
    transition: transform 0.3s cubic-bezier(0.35, 0, 0.25, 1);
}
.rotate-180 {
    transform: rotate(-180deg);
}
</style>
