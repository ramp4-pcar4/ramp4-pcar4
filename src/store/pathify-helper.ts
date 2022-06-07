/* temporary solution to get vuex-pathify functionality working until it is supported for Vue 3 or we switch to Pinia */
import { computed } from 'vue';

export default {
    /**
     * This function runs automatically by Vue when the mixin is registered using `Vue.use(...)`
     * It gives every component `get` and `call` methods that mimick what the standard `vuex-pathify` helper functions do
     *
     * @param {VueConstructor} Vue
     * @param {ComponentOptions<Vue>} options
     */
    install(app: any, options: any) {
        app.mixin({
            methods: {
                get(path) {
                    const property =
                        path in this.$store.getters
                            ? computed(() => this.$store.getters[path])
                            : computed(() => {
                                  try {
                                      return this.$store.get(path);
                                  } catch (err) {
                                      console.error(
                                          `vuex pathify error: ${err}`
                                      );
                                      return undefined;
                                  }
                              });

                    return property;
                },

                call(path) {
                    return payload =>
                        computed(this.$store.dispatch(path, payload));
                }
            }
        });
    }
};
