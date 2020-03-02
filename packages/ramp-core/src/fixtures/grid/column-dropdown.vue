<template>
    <dropdown-menu>
        <template #header>
            <div class="flex text-black">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fit=""
                    height="16px"
                    width="16px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                    focusable="false"
                    class="inline mr-1"
                >
                    <g id="format-list-checks_cache966">
                        <path d="M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z"></path>
                    </g>
                </svg>
                Columns
            </div>
        </template>
        <a
            v-for="col in columnDefs.filter(c => c.headerName && c.headerName.length > 0)"
            :key="col.headerName"
            v-on:click="
                columnApi.setColumnVisible(col.field, col.hide);
                col.hide = !col.hide;
            "
            href="#"
            class="flex leading-snug items-center"
        >
            {{ col.headerName }}
            <div class="flex-auto"></div>
            <div class="md-icon-small inline" v-if="!col.hide">
                <svg height="18" width="18" viewBox="0 0 24 24" class="inline">
                    <g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" /></g>
                </svg>
            </div>
        </a>
    </dropdown-menu>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';

@Component
export default class ColumnDropdown extends Vue {
    @Prop() columnDefs!: Array<Object>;
    @Prop() columnApi!: Object;
}
</script>
