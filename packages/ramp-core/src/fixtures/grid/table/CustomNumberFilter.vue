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
    data() {
        return {
            minVal: 0,
            maxVal: 0,
            colDef: {}
        };
    }

    beforeMount() {
        this.colDef = this.params.column.colDef;
    }

    minValChanged() {
        this.minVal = this.minVal !== '' && !isNaN(this.minVal) ? this.minVal : '';
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            const minKey = that.colDef.field + ' min';
        });
    }

    maxValChanged() {
        this.maxVal = this.maxVal !== '' && !isNaN(this.maxVal) ? this.maxVal : '';
        let that = this;
        this.params.parentFilterInstance(function(instance: any) {
            that.setFilterModel(instance);
            const maxKey = that.colDef.field + ' max';
        });
    }

    setFilterModel(instance: any) {
        let that = this;
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
                filter: that.maxVal,
                filterTo: null
            });
        } else if (that.maxVal === '') {
            instance.setModel({
                filterType: 'number',
                type: 'greaterThanOrEqual',
                filter: that.minVal,
                filterTo: null
            });
            // otherwise clear filters
        } else {
            instance.setModel(null);
        }
        instance.onFilterChanged();
    }

    onParentModelChanged(parentModel: any) {
        this.minVal = !parentModel ? -Infinity : parentModel.filter;
        this.maxVal = !parentModel ? Infinity : parentModel.filterTo;
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
    @apply bg-transparent text-black-75 h-24 pb-8 border-0 border-b-2
}
.rv-input {
    @apply m-0 py-1
}
</style>
