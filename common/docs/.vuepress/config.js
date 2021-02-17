module.exports = {
    title: 'RAMP4 Documentation',
    description: 'documentation site',
    base: '/ramp4-pcar4/',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {
                text: 'API',
                link: '/api/events.md'
            },
            {
                text: 'App',
                link: '/app/appbar.md'
            },
            {
                text: 'Config',
                link: '/configuration/config-language.md'
            },
            {
                text: 'GeoAPI',
                link: '/geoapi/layers.md'
            }
        ],
        sidebar: {
            '/api/': [
                {
                    title: 'API',
                    collapsable: false,
                    children: ['events','geometry','migration']
                }
            ],
            '/app/': [
                {
                    title: 'Application',
                    collapsable: false,
                    children: [
                        'appbar','core-classes','datatable','defaults','details','fixtures','focus-list',
                        'geosearch','panels','store','tooltips'
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
            '/geoapi/': [
                {
                    title: 'GeoAPI',
                    collapsable: false,
                    children: ['layers']
                }
            ]
        }
    }
}