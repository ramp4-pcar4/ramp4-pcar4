const runPreTest = (config, options, utils) => {

config.startingFixtures.push('geosearch');

const geosearchSettingsEN = { categories: [], sortOrder: ['FAC', 'PARK'] };
const geosearchSettingsFR = { categories: [], sortOrder: ['INS', 'PARC'] };
config.configs.en.fixtures.geosearch.settings = geosearchSettingsEN;
config.configs.fr.fixtures.geosearch.settings = geosearchSettingsFR;

    const customSourcesEN = [
        {
            code: 'FAC',
            catName: 'Facility',
            data: [
                {
                    name: 'Facility A',
                    bbox: [-79.9036837, 43.5663634, -79.598067, 43.8551317],
                    prov: 'ON',
                },
                {
                    name: 'Facility B',
                    bbox: [-73.6534994, 45.440039299999995, -73.65749939999999, 45.4440393],
                    prov: 'QC',
                }
            ]
        },
        {
            code: 'PARK2',
            catName: 'Park',
            data: [
                {
                    name: 'Park 1',
                    bbox: [-66.078333, 45.257222, -66.038333, 45.297222],
                    prov: 'ON',
                },
                {
                    name: 'Park 2',
                    bbox: [-115.6074265, 58.0734097, -111.0120161, 60.6959884],
                    prov: 'QC',
                }
            ]
        }
    ];

    const customSourcesFR = [
        {
            code: 'INS',
            catName: 'Installation',
            data: [
                {
                    name: 'Installation A',
                    bbox: [-79.9036837, 43.5663634, -79.598067, 43.8551317],
                    prov: 'ON',
                },
                {
                    name: 'Installation B',
                    bbox: [-73.6534994, 45.440039299999995, -73.65749939999999, 45.4440393],
                    prov: 'QC',
                }
            ]
        },
        {
            code: 'PARC',
            catName: 'Parc',
            data: [
                {
                    name: 'Parc 1',
                    bbox: [-66.078333, 45.257222, -66.038333, 45.29722],
                    prov: 'ON',
                },
                {
                    name: 'Parc 2',
                    bbox: [-115.6074265, 58.0734097, -111.0120161, 60.6959884],
                    prov: 'QC',
                }
            ]
        }
    ];
    utils.addGeosearchSource(customSourcesEN, 'en');
    utils.addGeosearchSource(customSourcesFR, 'fr');
    return { config, options };
};

const runPostTest = () => {
    // Not used in this test
};

export { runPreTest, runPostTest };
