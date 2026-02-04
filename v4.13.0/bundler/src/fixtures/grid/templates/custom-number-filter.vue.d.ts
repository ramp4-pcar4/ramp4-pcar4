import { ColumnDefinition, FilterParams } from '../table-component.vue';
export interface GridCustomNumberFilter {
    minVal: any;
    maxVal: any;
    colDef: ColumnDefinition;
    params: FilterParams;
}
declare const _default: import('../../../../vue/dist/vue.esm-bundler.js').DefineComponent<{
    params?: any;
}, {}, {}, {}, {
    onParentModelChanged(): void;
}, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<{
    params?: any;
}> & Readonly<{}>, {}, {}, {}, {}, string, import('../../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, HTMLDivElement>;
export default _default;
