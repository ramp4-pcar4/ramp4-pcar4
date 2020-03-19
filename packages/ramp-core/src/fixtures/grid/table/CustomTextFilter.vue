<template>
    <div>
        <input class="rv-input w-full" type="text" placeholder="text" @keyup="valueChanged()" v-model="filterValue" />
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomTextFilter extends Vue {
    filterValue: string = '';
    colDef: any;

    beforeMount() {
        // would like better way to access panel state manager, pass it down as a prop? (didn't know how to do this)
        this.colDef = this.params.column.colDef;
        this.filterValue = this.params.defaultValue;
        this.valueChanged();
    }

    valueChanged(): void {
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            instance.setModel({
                filterType: 'text',
                type: 'contains',
                filter: that.filterValue
            });
            that.params.stateManager.setColumnFilter(that.colDef.field, that.filterValue);
            that.params.api.onFilterChanged();
        });
    }

    onParentModelChanged(parentModel: any): void {
        this.filterValue = !parentModel ? '' : parentModel.filter;
    }

    setModel() {
        return {
            filterType: 'text',
            type: 'contains',
            filter: this.filterValue
        };
    }
}

export default interface CustomTextFilter {
    filterValue: string;
    colDef: any;
    params: any;
}
</script>

<style lang="scss" scoped>
.ag-floating-filter-full-body input,
.ag-floating-filter-full-body select,
.rv-global-search {
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2;
}
.rv-input {
    @apply m-0 py-1;
}
</style>
