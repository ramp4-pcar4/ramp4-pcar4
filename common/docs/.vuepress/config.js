module.exports = {
    title: 'RAMP4 Documentation',
    description: 'documentation site',
    base: '/ramp4-pcar4/',
    themeConfig: {
        displayAllHeaders: true,
        nav: [
            {
                text: 'Current',
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
            ],
            '/': [
                {
                    title: 'Version 1.0.0',
                    collapsable: true,
                    sidebarDepth: 0,
                    children: [
                        '', 
                        ['/api/events', 'API'],
                        ['/app/appbar', 'Application'],
                        ['/configuration/config-language.md', 'Configuration'],
                        ['/geoapi/layers', 'GeoAPI']
                    ]
                }
            ]
        }
    }
}