/*
Test 06: Simple Data Layers
- Loads two data layers. A custom json dataset, and an ESRI Table service
- Has a fancy detail template for the custom json
 */

const runPreTest = (config, options, utils) => {
    const customJson = {
        id: 'dataJson',
        name: 'Tasty Eats',
        layerType: 'data-json',
        rawData:
            '{"fields":["Resto Name","Resto Type","Stars"],"data":[["Grouse Burgers","Burger",5],["Greasy Patties","Burger",2],["Big Dirty Slice","Pizza",3]]}',
        nameField: 'Resto-Name',
        fixtures: {
            details: {
                template: 'Tasty-Template'
            }
        }
    };

    const esriTable = {
        id: 'table',
        name: 'JOSM Theme Count',
        layerType: 'data-esri-table',
        url: 'https://section917.canadacentral.cloudapp.azure.com/arcgis/rest/services/TestData/Oilsands/MapServer/5'
    };

    utils.addLayerLegend(customJson);
    utils.addLayerLegend(esriTable);

    return { config, options };
};

const runPostTest = (instance, utils) => {
    instance.$element.component('Tasty-Template', {
        props: ['identifyData'],
        template: `
            <div style="align-items: center; justify-content: center; font-size: 14px; font-family: Arial, sans-serif;">
                <div v-html="createSection('Restaurant', 'Resto-Name')" />
                <div v-html="createSection('Type', 'Resto-Type')" />
                <div v-html="createStars('Stars')" />
            </div>
        `,
        methods: {
            createSection(title, id) {
                var val = this.identifyData.loaded
                    ? this.identifyData.data[id]
                    : 'Loading...';

                return `
                <div style="display: flex; flex-direction: column; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        ${title}
                    </span>
                    <span>
                        ${val}
                    </span>
                </div>
                `;
            },
            createStars(n) {
                var stars =
                    '<img width="24" height="24" src="https://img.icons8.com/material-sharp/24/star--v1.png" alt="star--v1"/>\n'.repeat(
                        parseInt(this.identifyData.data[n])
                    );
                var remaining =
                    '<img width="24" height="24" src="https://img.icons8.com/material-sharp/24/b0b0b0/star--v1.png" alt="star--v1"/>'.repeat(
                        5 - this.identifyData.data[n]
                    );

                return `
                <div style="display: flex; flex-direction: column; padding-top: 5px;">
                    <span style="color: #a0aec0; font-weight: bold;">
                        Stars
                    </span>
                    <div style="display: flex; flex-direction: row;">
                        ${stars}
                        ${remaining}
                    </div>
                </div>
                `;
            }
        }
    });
};

export { runPostTest, runPreTest };
