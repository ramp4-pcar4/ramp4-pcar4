import { PropType } from '../../../vue/dist/vue.esm-bundler.js';
declare const _default: import('../../../vue/dist/vue.esm-bundler.js').DefineComponent<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    config: {
        type: PropType<{
            value: boolean;
            disabled?: boolean;
        }>;
        required: true;
    };
    name: StringConstructor;
    icon: StringConstructor;
    ariaLabel: StringConstructor;
}>, {}, {}, {}, {}, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, import('../../../vue/dist/vue.esm-bundler.js').ComponentOptionsMixin, {
    toggled: (...args: any[]) => void;
}, string, import('../../../vue/dist/vue.esm-bundler.js').PublicProps, Readonly<import('../../../vue/dist/vue.esm-bundler.js').ExtractPropTypes<{
    config: {
        type: PropType<{
            value: boolean;
            disabled?: boolean;
        }>;
        required: true;
    };
    name: StringConstructor;
    icon: StringConstructor;
    ariaLabel: StringConstructor;
}>> & Readonly<{
    onToggled?: ((...args: any[]) => any) | undefined;
}>, {}, {}, {}, {}, string, import('../../../vue/dist/vue.esm-bundler.js').ComponentProvideOptions, true, {}, any>;
export default _default;
