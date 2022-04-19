export default {
    /**
     * This function runs automatically by Vue when the mixin is registered using `Vue.use(...)` and allows to inject components options at different points in an instance life cycle.
     * The mixin exposes `iApi` component option as `$iApi` on the root Vue component and also copies it to all its children components, so the API reference is available to any component inside this R4MP application immediately as `this.$iApi`.
     * Any components created outside the R4MP instance (for example created manually by external fixtures thought `Vue.component`), will need to pass the API reference to them at creation.
     *
     * @param {VueConstructor} Vue
     * @param {ComponentOptions<Vue>} options
     */
    install(app: any, options: any) {
        app.mixin({
            beforeCreate() {
                const options = this.$options;

                if (options.iApi) {
                    // if `iApi` option was set directly, assign it directly to the Vue instance as `$iApi`, so it will be accessible to components
                    this.$iApi = options.iApi;
                } else if (options.parent && options.parent.$iApi) {
                    // if the component has a parent with `iApi` assigned, copy it to the Vue instance as `$iApi`, so it can be accessed by components
                    this.$iApi = options.parent.$iApi;
                }
            }
        });
    }
};
