// this is a plain JS sample fixture that doesn't require a compilation step since it doesn't use Vue templates
// instead, templates need to be written as a render function directly
// consequently, this makes for a smallest fixture bundle
import { h, markRaw, resolveComponent } from 'vue';

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
            closeMethod() {
                this.panel.close();
            }
        },

        // these are reactive component getters
        computed: {
            // this returns `true` if the current panel is pinned by comparing the id of the pinned panel with the id of this panel
            // this is used to modify the icon inside the `pin` header control
            isPinned() {
                return this.$iApi.panel.pinned && this.$iApi.panel.pinned.id === this.panel.id;

                // or just
                // return this.panel.isPinned;
            }
        },

        // reactive component data
        data() {
            return {
                title: 'Diligord Panel',
                count: 0
            };
        },
        // NOTE: revisit this render() function later...
        // This is currently not completely functional. In particular, I can't seem to get named slots to work (see below for details).
        // In dev, none of the ramp components (panel-screen, pin, close) render, but the normal HTML elements do. So we get a panel that has all the intended contents,
        // but without the proper panel layout. This is probably related to the blank panel issue that mouruge and iklob have as well.
        // In prod, nothing inside of a named slot renders. So we get a panel with the proper panel layout, but none of the intended contents.
        render() {
            // using built-in `pin` panel header control; can use either `this.isPinned` getter method or the `this.panel.isPinned` panel getter
            const pin =
                this.$iApi.screenSize === 'xs'
                    ? undefined
                    : h(resolveComponent('pin'), {
                          props: { active: this.isPinned },
                          onClick: () => this.panel.pin(!this.panel.isPinned)
                      });

            const close =
                this.$iApi.screenSize === 'xs'
                    ? undefined
                    : h(resolveComponent('close'), {
                          onClick: () => this.panel.close() // this works ✔
                          // onClick: this.closeMethod, // this also works ✔
                          // onClick: this.panel.close // this doesn't work ❌
                      });

            const panelScreen = resolveComponent('panel-screen');
            return h(
                panelScreen,
                {
                    props: { panel: this.panel }
                },
                [
                    // NOTE: The following comments are relevent to the panel in prod. See above for differences between the dev and prod builds.
                    // This method for slots is ported from vue2 r4mp. It's mentioned in the vue2 docs, but not the vue3 docs.
                    // This works with unnamed slots, but doesn't seem to work with named slots.
                    h('span', { slot: 'header' }, this.title),

                    // The following methods have also been tried (this is what the vue3 docs say to use).
                    // Only the first option here worked with unnamed slots. Neither named nor unnamed worked for the second.
                    // h('span', {}, { header: () => this.title }),
                    // h('span', {}, { header: () => h('p', {}, this.title)}),

                    // This puts pin and close in a span, parent element's flex doesn't work on them individually because of this
                    // Consider using 'template' as the parent element when trying to fix.
                    h('span', { slot: 'controls' }, [pin, close]),

                    h('div', { slot: 'content', class: 'flex flex-col items-center justify-center' }, [
                        h(
                            'button',
                            {
                                class: 'bg-purple-500 hover:bg-purple-700 text-white font-bold py-8 px-16',
                                onClick: () => (this.count += 10)
                            },
                            [h('span', this.count)]
                        ),
                        h('label', { class: 'mt-16' }, this.$t('changeTitle')),
                        h('input', {
                            class: 'border-2  p-8',
                            // bind title to the input value
                            value: this.title,
                            onInput: $event => {
                                this.title = $event.target.value;
                            }
                        }),
                        // A gif will show if the title is changed to "fight"
                        this.title === 'fight'
                            ? h('img', {
                                  style: {
                                      width: '300px',
                                      marginTop: '30px'
                                  },
                                  src: 'https://media.giphy.com/media/sGAlRSaXKjTfq/giphy.gif'
                              })
                            : null
                    ])
                ]
            );
        }
    };

    // then, create a panel config
    const dpanel = {
        id: 'diligord-p1',
        config: {
            screens: { 'diligord-s1': markRaw(dScreen1) }
        }
    };

    // then, create a fixture config
    class DiligordFixture {
        added() {
            // `this.id` and `this.$iApi` and `this.$vApp` are automatically made available on this object
            this.id;
            this.$iApi;
            this.$vApp;

            // you can also create a custom component using the helper `extend` function and put it anywhere on the page, even outside the R4MP container
            // the helper function will add references to this fixture and `$iApi` to the extended component
            const component = this.extend({
                render() {
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
                data() {
                    return {
                        firstName: 'Walter',
                        lastName: 'White',
                        alias: 'Heisenberg'
                    };
                }
            });

            // and put it on the page
            document.querySelector('.ramp-app').after(component);

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
