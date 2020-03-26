<template>
    <div>
        <select class="rv-input w-full" v-model="selectedOption" @change="selectionChanged()">
            <option v-for="option in options" :value="option" :key="option">
                {{ option }}
            </option>
        </select>
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomSelectorFilter extends Vue {
    beforeMount() {
        this.selectedOption = this.params.defaultValue;
        this.colDef = this.params.column.colDef;

        const colName = this.params.column.colId;
        let rowData = this.params.rowData;

        // obtain row data and filter out duplicates for selector list
        rowData = rowData.map((row: any) => row[colName]);
        this.options = rowData.filter((item: any, idx: any) => rowData.indexOf(item) === idx);

        // add '...' as option to clear selector
        this.options.unshift('...');

        this.selectionChanged();
    }

    selectionChanged() {
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            // clear selector filters
            if (that.selectedOption === '...') {
                instance.setModel(null);
                instance.onFilterChanged();
                that.selectedOption = '';
            } else {
                // otherwise filter by the selected option
                instance.setModel({
                    filterType: 'text',
                    type: 'contains',
                    filter: that.selectedOption
                });
            }
            that.params.api.onFilterChanged();
            that.params.stateManager.setColumnFilter(that.colDef.field, that.selectedOption);
        });
    }

    onParentModelChanged(parentModel: any) {
        this.selectedOption = !parentModel ? '' : parentModel.filter;
    }

    setModel() {
        return {
            filterType: 'text',
            type: 'contains',
            filter: this.selectedOption
        };
    }
}

export default interface CustomSelectorFilter {
    selectedOption: string;
    colDef: any;
    options: any;
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
