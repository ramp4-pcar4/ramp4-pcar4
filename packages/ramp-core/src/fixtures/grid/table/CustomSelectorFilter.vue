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
        // Load previously stored value (if saved in table state manager)
        this.selectedOption = this.params.stateManager.getColumnFilter(this.params.column.colDef.field);

        let rowData = this.params.rowData;

        // obtain row data and filter out duplicates for selector list
        rowData = rowData.map((row: any) => row[this.params.column.colId]);
        this.options = rowData.filter((item: any, idx: any) => rowData.indexOf(item) === idx);

        // add the '...' option to allow clearing the selector
        this.options.unshift('...');

        // Apply the default value to the column filter.
        this.selectionChanged();
    }

    selectionChanged() {
        this.selectedOption = this.selectedOption ? this.selectedOption : '';

        this.params.parentFilterInstance((instance: any) => {
            if (this.selectedOption === '...') {
                // Clear the selector filter.
                instance.setModel(null);
                instance.onFilterChanged();
                this.selectedOption = '';
            } else {
                // Filter by the selected option.
                instance.setModel({
                    filterType: 'text',
                    type: 'contains',
                    filter: this.selectedOption
                });
            }

            // Save the new filter value in the state manager. Allows for quick recovery if the grid is
            // closed and re-opened.
            this.params.stateManager.setColumnFilter(this.params.column.colDef.field, this.selectedOption);

            this.params.api.onFilterChanged();
        });
    }

    onParentModelChanged(parentModel: any) {
        if(parentModel === {}) {
            this.selectedOption = '';
        }
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
