module.exports = {
    title: 'RAMP4 Documentation',
    description: 'documentation site',
    base: '/ramp4-pcar4/',
    themeConfig: {
        repo: 'ramp4-pcar4/ramp4-pcar4',
        displayAllHeaders: true,
        nav: [
            {
                text: 'Home',
                link: '/'
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
