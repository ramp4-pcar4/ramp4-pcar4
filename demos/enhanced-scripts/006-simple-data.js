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
        url: 'https://maps-cartes.qa.ec.gc.ca/arcgis/rest/services/TestData/Oilsands/MapServer/5'
    };

    utils.addLayerLegend(customJson);
    utils.addLayerLegend(esriTable);

    return { config, options };
};

const runPostTest = instance => {};

export { runPreTest, runPostTest };
