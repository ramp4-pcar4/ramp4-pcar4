<template>
    <div>
        <input class="rv-input w-full" type="text" placeholder="text" @keyup="valueChanged()" v-model="filterValue" />
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomTextFilter extends Vue {
    beforeMount() {
        // Load previously stored value (if saved in table state manager)
        this.filterValue = this.params.stateManager.getColumnFilter(this.params.column.colDef.field);

        // Apply the default value to the column filter.
        this.valueChanged();
    }

    valueChanged(): void {
        this.params.parentFilterInstance((instance: any) => {
            this.filterValue = this.filterValue ? this.filterValue : '';

            instance.setModel({
                filterType: 'text',
                type: 'contains',
                filter: this.filterValue
            });

            // Save the new filter value in the state manager. Allows for quick recovery if the grid is
            // closed and re-opened.
            this.params.stateManager.setColumnFilter(this.params.column.colDef.field, this.filterValue);

            this.params.api.onFilterChanged();
        });
    }

    onParentModelChanged(parentModel: any): void {
        if(parentModel === {}) {
            this.filterValue = '';
        }
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
