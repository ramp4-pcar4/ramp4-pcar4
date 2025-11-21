/*
Test 09: custom html panel
- Loads Happy.json layer in the legend. Very basic.
- Creates custom html panels
- Tests the `persist` fixture property on the basemap and export fixtures, such that on a lang change (for which the configs of each lang are different), the fixtures will not persist
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

    const htmlPanel = {
        content: {
            en: `<div> This is a new panel in html </div>`,
            fr: `<div> Ceci est un nouveau panneau en HTML </div>`
        },
        id: 'panel3',
        alertName: 'new.title',
        style: undefined,
        options: {
            i18n: {
                messages: {
                    en: { 'new.title': 'English' },
                    fr: { 'new.title': 'French' }
                }
            }
        }
    };

    // testing custom panels
    const panel = instance.panel.registerHTML(htmlPanel);
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

export { runPostTest, runPreTest };
