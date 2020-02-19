(function() {
    // Diligord Fixture creates a simple panel with a single screen with two header controls (pin and close),
    // and increment button and an input field (bound to the panel title) in the content slot

    // first, create a panel screen
    // since this is a raw JS file, we need to create the template for our screen using the render function (https://vuejs.org/v2/guide/render-function.html)
    // it's possible to write this as a regular Vue component with HTML-based template and compile it with `vue-template-compiler` if you don't want to bother with render functions
    // TODO: make an example of a compiled external fixture
    const dScreen1 = {
        // the `panel` prop is automatically passed to all panel screen components by the panel-container
        // this is the `PanelItemAPI` instance inside which this screen component is displayed, and it exposes panel API functions
        // methods, computed functions and template will have access to the panel as `this.panel`
        props: ['panel'],

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
        render: function(h) {
            return h('panel-screen', [
                // pass a `span` to the `header` slot of the panel-screen
                h('template', { slot: 'header' }, [h('span', this.title)]),

                // pass `pin` and `close` controls `controls` slot of the panel-screen
                h('template', { slot: 'controls' }, [
                    // using built-in `pin` panel header control; can use either `this.isPinned` getter method or the `this.panel.isPinned` panel getter
                    h('pin', { props: { active: this.isPinned }, on: { click: () => this.panel.pin(!this.panel.isPinned) } }),

                    // using built-in `close` panel header control
                    h('close', {
                        on: {
                            click: () => this.panel.close() // this works ✔
                            // click: this.closeMethod, // this also works ✔
                            // click: this.panel.close // this doesn't work ❌
                        }
                    })
                ]),

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
                        h('label', { class: 'mt-16' }, 'Change panel title'),

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
                        })
                    ])
                ])
            ]);
        }
    };

    // then, create a panel config
    const dPanel1 = {
        id: 'diligord-p1',
        screens: [{ id: 'diligord-s1', component: dScreen1 }],

        // if the route is not specified, the first screen will be used automatically
        route: {
            id: 'diligord-s1'
        }
    };

    // then, create a fixture config
    const diligordFixture = {
        id: 'diligord',

        // `created` function receives a reference to the FixtureItemAPI instance and we need to save it for later
        // this is only needed when creating external fixtures (ones that are not compiled as part of the R4MP core)
        // fixtures compiled as part of the core, use a helper class which takes care of this
        created($iApi) {
            this.$iApi = $iApi;
        },

        added() {
            // this life hook is called when the fixture is added to R4MP, and now it's possible to open our panel
            this.$iApi.panel.open(dPanel1);
        }
    };

    window.hostFixtures = window.hostFixtures || {};
    window.hostFixtures[diligordFixture.id] = diligordFixture;
})();
