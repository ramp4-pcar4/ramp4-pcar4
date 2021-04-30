module.exports = {
    title: 'RAMP4 Documentation',
    description: 'documentation site',
    base: '/ramp4-pcar4/',
    themeConfig: {
        repo: 'ramp4-pcar4/ramp4-pcar4',
        displayAllHeaders: true,
        nav: [
            {
                text: 'API',
                items: [
                    { text: 'Events', link: '/api/events'},
                    { text: 'Geometry', link: '/api/geometry'},
                    { text: 'Migration', link: '/api/migration'},
                ]
            },
            {
                text: 'Application',
                items: [
                    { text: 'Appbar', link: '/app/appbar'},
                    { text: 'Core Classes', link: '/app/core-classes'},
                    { text: 'Datatable', link: '/app/datatable'},
                    { text: 'Defaults', link: '/app/defaults'},
                    { text: 'Details', link: '/app/details'},
                    { text: 'Fixtures', link: '/app/fixtures'},
                    { text: 'Focus List', link: '/app/focus-list'},
                    { text: 'Geosearch', link: '/app/geosearch'},
                    { text: 'Panels', link: '/app/panels'},
                    { text: 'Store', link: '/app/store'},
                    { text: 'Tooltips', link: '/app/tooltips'}
                ]
            },
            {
                text: 'Configuration',
                items: [
                    { text: 'Config Language', link: '/configuration/config-language'},
                    { text: 'Migration', link: '/configuration/migration'},
                ]
            },
            {
                text: 'Geo',
                items: [
                    { text: 'Layers', link: '/geo/layers'}
                ]
            },
            {
                text: 'Annotated Source Code',
                link: '/ramp4-pcar4/code/',
                target: '_blank'
            }
        ],
        sidebar: {
            '/api/': [
                {
                    title: 'API',
                    collapsable: false,
                    children: ['events', 'geometry', 'migration']
                }
            ],
            '/app/': [
                {
                    title: 'Application',
                    collapsable: false,
                    children: [
                        'appbar', 'core-classes', 'datatable', 'defaults', 'details', 'fixtures', 'focus-list',
                        'geosearch', 'panels', 'store', 'tooltips'
                    ]
                }
            ],
            '/configuration/': [
                {
                    title: 'Configuration',
                    collapsable: false,
                    children: ['config-language', 'migration']
                }
            ],
            '/geo/': [
                {
                    title: 'Geo',
                    collapsable: false,
                    children: ['layers']
                }
            ]
        }
    }
}
