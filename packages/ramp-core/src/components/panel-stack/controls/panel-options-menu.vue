<template>
    <dropdown-menu>
        <template #header>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-20 h-20">
                <path
                    d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                />
            </svg>
            <tooltip position="bottom">{{ $t('panels.controls.optionsMenu') }}</tooltip>
        </template>
        <slot></slot>
    </dropdown-menu>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { Get, Sync, Call } from 'vuex-pathify';
import DropdownMenuV from '@/components/controls/dropdown-menu.vue';

@Component({
    components: {
        'dropdown-menu': DropdownMenuV
    }
})
export default class MenuV extends Vue {
    data() {
        return {
            open: false
        };
    }
}
</script>

<style lang="scss" scoped></style>
