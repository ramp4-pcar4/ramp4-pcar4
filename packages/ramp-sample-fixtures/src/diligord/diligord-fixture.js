// this is a plain JS sample fixture that doesn't require a compilation step since it doesn't use Vue templates
// instead, templates need to be written as a render function directly
// consequently, this makes for a smallest fixture bundle
import { h } from 'vue';

(function() {
    const messages = {
        en: {
            changeTitle: 'Change panel title'
        },
        fr: {
            changeTitle: 'Changer le titre du panneau'
        }
    };
    // Diligord Fixture creates a simple panel with a single screen with two header controls (pin and close),
    // and increment button and an input field (bound to the panel title) in the content slot

    // first, create a panel screen
    // since this is a raw JS file, we need to create the template for our screen using the render function (https://vuejs.org/v2/guide/render-function.html)
    // it's possible to write this as a regular Vue component with HTML-based template and compile it with `vue-template-compiler` if you don't want to bother with render functions
    // TODO: make an example of a compiled external fixture
    const dScreen1 = {
        // the `panel` prop is automatically passed to all panel screen components by the panel-container
        // this is the `PanelInstance` instance inside which this screen component is displayed, and it exposes panel API functions
        // methods, computed functions and template will have access to the panel as `this.panel`
        props: ['panel'],
        i18n: {
            messages
        },

        // these are regular Vue component methods that can be called from the template directly
        // this component will have access to the API instance (`this.$iApi`) of the R4MP Vue app it runs inside
        methods: {
            // this can't be an arrow function since it won't have access to `this`
            closeMethod: function() {
                this.panel.close();
            }
        },

        // these are reactive component getters
        computed: {
            // this returns `true` if the current panel is pinned by comparing the id of the pinned panel with the id of this panel
            // this is used to modify the icon inside the `pin` header control
            isPinned: function() {
                return this.$iApi.panel.pinned && this.$iApi.panel.pinned.id === this.panel.id;

                // or just
                // return this.panel.isPinned;
            }
        },

        // reactive component data
        data: function() {
            return {
                title: 'Diligord Panel',
                count: 0
            };
        },
        render() {
            // using built-in `pin` panel header control; can use either `this.isPinned` getter method or the `this.panel.isPinned` panel getter
            const pin =
                this.$iApi.screenSize === 'xs'
                    ? undefined
                    : h('pin', { props: { active: this.isPinned }, on: { click: () => this.panel.pin(!this.panel.isPinned) } });

            const close =
                this.$iApi.screenSize === 'xs'
                    ? undefined
                    : h('close', {
                          on: {
                              click: () => this.panel.close() // this works ✔
                              // click: this.closeMethod, // this also works ✔
                              // click: this.panel.close // this doesn't work ❌
                          }
                      });

            return h('panel-screen', { props: { panel: this.panel } }, [
                // pass a `span` to the `header` slot of the panel-screen
                h('template', { slot: 'header' }, [h('span', this.title)]),

                // pass `pin` and `close` controls `controls` slot of the panel-screen
                h('template', { slot: 'controls' }, [pin, close]),

                // pass screen content to the `header` slot of the panel-screen
                h('template', { slot: 'content' }, [
                    h('div', { class: 'flex flex-col items-center justify-center' }, [
                        h(
                            'button',
                            {
                                class: 'bg-purple-500 hover:bg-purple-700 text-white font-bold py-8 px-16',
                                on: { click: () => (this.count += 10) }
                            },
                            [h('span', this.count)]
                        ),
                        h('label', { class: 'mt-16' }, this.$t('changeTitle')),

                        h('input', {
                            class: 'border-2  p-8',

                            // bind title to the input value
                            domProps: {
                                value: this.title
                            },
                            on: {
                                input: () => {
                                    this.title = event.target.value;
                                }
                            }
                        }),

                        this.title === 'fight'
                            ? h('img', {
                                  style: {
                                      width: '300px',
                                      marginTop: '30px'
                                  },
                                  domProps: {
                                      src: 'https://media.giphy.com/media/sGAlRSaXKjTfq/giphy.gif'
                                  }
                              })
                            : null
                    ])
                ])
            ]);
        }
    };

    // then, create a panel config
    const dpanel = {
        id: 'diligord-p1',
        config: {
            screens: { 'diligord-s1': dScreen1 }
        }
    };

    // then, create a fixture config
    class DiligordFixture {
        added() {
            // `this.id` and `this.$iApi` and `this.$vApp` are automatically made available on this object
            console.log(this.id, this.$iApi, this.$vApp);

            // you can also create a custom component using the helper `extend` function and put it anywhere on the page, even outside the R4MP container
            // the helper function will add references to this fixture and `$iApi` to the extended component
            const component = this.extend({
                render: function(h) {
                    return h(
                        'p',
                        {
                            style: {
                                marginTop: '80px',
                                fontWeight: 'bold',
                                color: '#34495e',
                                fontSize: '20pt',
                                textAlign: 'center'
                            }
                        },
                        [this.firstName, ' ', this.lastName, ' aka ', this.alias]
                    );
                },
                data: function() {
                    return {
                        firstName: 'Walter',
                        lastName: 'White',
                        alias: 'Heisenberg'
                    };
                }
            });

            // and put it on the page
            document.querySelector('.ramp-app').after(component.$el);

            // this life hook is called when the fixture is added to R4MP, and now it's possible to open our panel
            this.$iApi.panel.register(dpanel);
        }

        // TEMP CODE FOR SAMPLE
        // will allow an outside caller to update the fixture
        doAThing(text) {
            // too dumb do figure out how to get text on the fixture panels. vue hates me.
            console.log('EVENTS API SAMPLE: dillygord got this data from gazebo', text);
        }
    }

    window.hostFixtures = window.hostFixtures || {};
    window.hostFixtures['diligord'] = DiligordFixture;
})();
