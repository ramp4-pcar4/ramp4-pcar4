
export default {
    title: 'RAMP - {{ramp-version}}',
    description: 'Reusable Accessible Mapping Platform 4.0 documentation',
    lang: 'en-CA',
    base: `/ramp4-pcar4/{{ramp-version}}/docs/`,
    srcDir: '../docs',
    outDir: '../vite-docs',
    ignoreDeadLinks: true, //TODO: Remove this
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        logo: '/logo-notext.svg',
        lastUpdatedText: 'Last Updated',
        search: {
            provider: 'local'
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/ramp4-pcar4/ramp4-pcar4'
            }
        ],
        nav: [
            {
                text: 'Overview',
                link: 'overview'
            },
            {
                text: 'API Reference',
                link: 'https://ramp4-pcar4.github.io/ramp4-pcar4/{{ramp-version}}/docs/api-tech-docs/index.html'
            },
            {
                text: 'Releases',
                link: 'https://github.com/ramp4-pcar4/ramp4-pcar4/releases'
            }
        ],
        sidebar: [
            {
              text: "Introduction",
              collapsed: false,
              items: [
                { text: "Setup", link: "/introduction/setup" },
                { text: "Instantiation", link: "/introduction/instantiation" }
              ],
            },
            {
              text: "Using RAMP4",
              collapsed: false,
              items: [
                { text: "Default Setup", link: "/using-ramp4/default-setup" },
                { text: "Language Configuration", link: "/using-ramp4/config-language" },
                { text: "Layers",
                  collapsed: false,
                  items : [
                        { text: "Overview", link: "/using-ramp4/layer-overview" },
                        { text: "Layer Properties",
                        collapsed: true,
                        items: [
                            { text: "Required Layer Properties", link: "/using-ramp4/layers/required-properties" },
                            { text: "Basic Layer Properties", link: "/using-ramp4/layers/basic-properties" },
                            { text: "Fancy Layer Properties", link: "/using-ramp4/layers/fancy-properties" },
                            { text: "Sublayer Layer Properties", link: "/using-ramp4/layers/sublayer-properties" }
                        ]
                        },
                        { text: "Additional Layers Information", link: "/using-ramp4/layers/additional-layer-sections"}
                    ]
                },
                { text: "Fixtures",
                  collapsed: false,
                  items : [
                        { text: "Overview", link: "/using-ramp4/fixture-overview" },
                        { text: "Fixture Configuration",
                        collapsed: true,
                        items: [
                            { text: "Appbar", link: "/using-ramp4/fixtures/appbar" },
                            { text: "Data Grid", link: "/using-ramp4/fixtures/grid" },
                            { text: "Details Custom Templating", link: "/using-ramp4/fixtures/details" },
                            { text: "Extent Guard", link: "/using-ramp4/fixtures/extentguard" },
                            { text: "Geosearch", link: "/using-ramp4/fixtures/geosearch" },
                            { text: "Layer Settings", link: "/using-ramp4/fixtures/layer-settings" },
                            { text: "Legend", link: "/using-ramp4/fixtures/legend" },
                        ]
                    },
                    { text: "Custom Fixtures", link: "/using-ramp4/fixtures/custom-fixtures" },
                    ]
                },
                        { text: "Incompatibility", link: "/using-ramp4/incompatibility" },
            ]
            },
            {
                text: "API Guide",
                collapsed: false,
                items: [
                    { text: "Instance API", link: "/api-guides/instance" },
                    { text: "Events API", link: "/api-guides/events" },
                    { text: "Geometry API", link: "/api-guides/geometry" },
                    { text: "Layers API", link: "/api-guides/layers" },
                    { text: "Legend API", link: "/api-guides/legend" },
                    { text: "Notification API", link: "/api-guides/notifications" },
                    { text: "Panels API", link: "/api-guides/panels" },
                ],
            },
            {
                text: "Resources",
                collapsed: false,
                items: [
                    { text: "Core Classes Overview", link: "/resources/core-classes" },
                    { text: "Focus Lists", link: "/resources/focus-list" },
                    { text: "Tooltips", link: "/resources/tooltips" },
                    { text: "Pinia Store", link: "/resources/store" },
                    { text: "Migration from RAMP 2/3",
                      collapsed: true,
                      items: [
                        { text: "Notes", link: "/resources/migration/migration-notes" },
                        { text: "API Migration", link: "/resources/migration/api-migration" }
                      ]
                    },
                ],
            },
        ],
        footer: {
            message: "{{ramp-version}} - Released under the MIT License.",
            copyright: "Copyright © 2021-present Government of Canada",
        },
    }
};
