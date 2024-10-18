// this is a plain JS sample fixture that doesn't require a compilation step since it doesn't use Vue templates
// instead, templates need to be written as a render function directly
// consequently, this makes for a smallest fixture bundle
import { h, markRaw, resolveComponent } from 'vue';

// then, create a fixture config
export class DiligordFixture {
    added() {
        // `this.id` and `this.$iApi` and `this.$vApp` are automatically made available on this object
        this.id;
        this.$iApi;
        this.$vApp;

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
            // reactive component data
            data() {
                return {
                    title: 'Diligord Panel',
                    count: 0
                };
            },
            render() {
                // Documentation for this: https://vuejs.org/guide/extras/render-function.html
                const panelScreen = resolveComponent('panel-screen');
                return h(
                    panelScreen,
                    {
                        panel: this.panel
                    },
                    {
                        header: () => h('span', this.title),
                        content: () =>
                            h(
                                'div',
                                {
                                    class: 'flex flex-col items-center'
                                },
                                [
                                    h(
                                        'button',
                                        {
                                            class: 'bg-blue-500 hover:bg-blue-700 font-bold text-white py-8 px-16',
                                            onClick: () => (this.count += 10)
                                        },
                                        [h('span', this.count)]
                                    ),
                                    h('label', { class: 'mt-16' }, this.$iApi.$i18n.t('changeTitle')),
                                    h('input', {
                                        class: 'border-2  p-8 mb-10',
                                        // bind title to the input value
                                        value: this.title,
                                        onInput: $event => {
                                            this.title = $event.target.value;
                                        }
                                    }),
                                    h('label', 'Hint: Change title to fight for a surprise.'),
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
                                ]
                            )
                    }
                );
            }
        };

        // then, create a panel config
        const dpanel = {
            id: 'diligord-p1',
            config: {
                screens: { 'diligord-s1': markRaw(dScreen1) },
                button: {
                    icon: `<span>D</span>`,
                    tooltip: 'Diligord'
                },
                alertName: 'Diligord'
            }
        };

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
        this.$iApi.panel.register(dpanel, {
            i18n: {
                messages: {
                    en: {
                        Diligord: 'Diligord',
                        changeTitle: 'Change panel title'
                    },
                    fr: {
                        Diligord: '[fr] Diligord',
                        changeTitle: 'Changer le titre du panneau'
                    }
                }
            }
        });
    }
}
