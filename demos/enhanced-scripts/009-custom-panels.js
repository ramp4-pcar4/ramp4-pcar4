/*
Test 09: custom html panel
- Loads Happy.json layer in the legend. Very basic. Test 1 for fast loadup.
- Creates custom html panels
 */

const runPreTest = (config, options, utils) => {
    const happy = {
        id: 'Happy',
        name: 'Happy Tester',
        layerType: 'file-geojson',
        url: '../file-layers/geojson.json',
        colour: '#4ef542',
        nameField: 'name'
    };

    utils.addLayerLegend(happy);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Not used in this test

    instance.fixture.isLoaded('basemap').then(() => {
        const bm = instance.fixture.get('basemap');
        bm.persist = false;
    });

    instance.$element.component('WFSLayer-Custom', {
        props: ['identifyData'],
        template: `
            <div>
                <span>This is an example template that contains an image.</span>
                <img src="https://i.imgur.com/WtY0tdC.gif" />
            </div>
        `
    });

    // add export fixtures
    instance.fixture.add('export').then(xportFixture => {
        xportFixture.persist = false;
    });

    // add areas of interest fixture
    instance.fixture.add('areas-of-interest');

    // testing code
    const panel = instance.panel.registerHTML(
        {
            en: `<div> This is a new panel in html </div>`,
            fr: `<div> Ceci est un nouveau panneau en HTML </div>`
        },
        'panel3',
        'new.title',
        undefined,
        {
            i18n: {
                messages: {
                    en: { 'new.title': 'English' },
                    fr: { 'new.title': 'French' }
                }
            }
        }
    );
    instance.panel.updateHTML(
        panel,
        {
            en: `<div> This is an updated html panel </div>`,
            fr: `<div> Ceci est un panneau HTML mis à jour </div>`
        },
        'panel3'
    );
    instance.panel.open(panel);
};

export { runPreTest, runPostTest };
