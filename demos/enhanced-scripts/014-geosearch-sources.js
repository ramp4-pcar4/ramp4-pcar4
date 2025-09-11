const runPreTest = (config, options, utils) => {
    const customSourcesEN = [
        {
            code: 'FAC',
            catName: 'Facility',
            data: [
                {
                    name: 'Facility A',
                    bbox: [-79.9036837, 43.5663634, -79.598067, 43.8551317],
                    location: { province: { code: 35, abbr: 'ON', name: 'Ontario' } },
                    order: 0
                },
                {
                    name: 'Facility B',
                    bbox: [-73.6534994, 45.440039299999995, -73.65749939999999, 45.4440393],
                    location: { province: { code: 24, abbr: 'QC', name: 'Quebec' } },
                    order: 1
                }
            ]
        },
        {
            code: 'PARK',
            catName: 'Park',
            data: [
                {
                    name: 'Park 1',
                    bbox: [-66.078333, 45.257222, -66.038333, 45.297222],
                    location: { province: { code: 35, abbr: 'ON', name: 'Ontario' } },
                    order: 0
                },
                {
                    name: 'Park 2',
                    bbox: [-115.6074265, 58.0734097, -111.0120161, 60.6959884],
                    location: { province: { code: 24, abbr: 'BC', name: 'British Columbia' } },
                    order: 1
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
                    location: { province: { code: 35, abbr: 'ON', name: 'Ontario' } },
                    order: 0
                },
                {
                    name: 'Installation B',
                    bbox: [-73.6534994, 45.440039299999995, -73.65749939999999, 45.4440393],
                    location: { province: { code: 24, abbr: 'QC', name: 'Quebec' } },
                    order: 1
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
                    location: { province: { code: 35, abbr: 'ON', name: 'Ontario' } },
                    order: 0
                },
                {
                    name: 'Parc 2',
                    bbox: [-115.6074265, 58.0734097, -111.0120161, 60.6959884],
                    location: { province: { code: 24, abbr: 'BC', name: 'British Columbia' } },
                    order: 1
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
