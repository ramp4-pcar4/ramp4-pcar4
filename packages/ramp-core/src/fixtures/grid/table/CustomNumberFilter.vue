<template>
    <div>
        <input class="rv-min" style="width: 45%;" type="text" v-model="minVal" @keyup="minValChanged()" placeholder="min" />
        <input class="rv-max" style="width: 45%;" type="text" v-model="maxVal" @keyup="maxValChanged()" placeholder="max" />
    </div>
</template>

<script lang="ts">
import { Vue, Watch, Component, Prop } from 'vue-property-decorator';

@Component({})
export default class CustomNumberFilter extends Vue {
    minVal: any = null;
    maxVal: any = null;
    colDef: any;

    beforeMount() {
        this.colDef = this.params.column.colDef;
        this.minVal = this.params.minValDefault;
        this.maxVal = this.params.maxValDefault;
        this.minValChanged();
        this.maxValChanged();
    }

    minValChanged() {
        this.minVal = this.minVal !== '' && !isNaN(this.minVal) ? this.minVal : null;
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            that.params.stateManager.setColumnFilter(that.colDef.field + ' min', that.minVal);
        });
    }

    maxValChanged() {
        this.maxVal = this.maxVal !== '' && !isNaN(this.maxVal) ? this.maxVal : null;
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            that.params.stateManager.setColumnFilter(that.colDef.field + ' max', that.maxVal);
        });
    }

    setFilterModel(instance: any) {
        let that = this;
        if(isNaN(that.minVal) || that.minVal == null) that.minVal = '';
        if(isNaN(that.maxVal) || that.maxVal == null) that.maxVal = '';

        if (that.maxVal !== '' && that.minVal !== '') {
            instance.setModel({
                filterType: 'number',
                type: 'inRange',
                filter: that.minVal,
                filterTo: that.maxVal
            });
        } else if (that.minVal === '') {
            instance.setModel({
                filterType: 'number',
                type: 'lessThanOrEqual',
                filter: that.maxVal
            });
        } else if (that.maxVal === '') {
            instance.setModel({
                filterType: 'number',
                type: 'greaterThanOrEqual',
                filter: that.minVal
            });
            // otherwise clear filters
        } else {
            instance.setModel(null);
        }
        this.params.api.onFilterChanged();
    }

    onParentModelChanged(parentModel: any) {
        if(parentModel == null) {
            this.minVal = '';
            this.maxVal = '';
        }
    }

    setModel() {
        return {
            filterType: 'number',
            type: 'inRange',
            filter: this.minVal,
            filterTo: this.maxVal
        };
    }
}

export default interface CustomNumberFilter {
    minVal: any;
    maxVal: any;
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
