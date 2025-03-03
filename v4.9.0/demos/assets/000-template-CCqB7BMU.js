/*
This file is not linked to a test. Use it to copy for a fresh test script.
The two methods must exist and be exported, regardless if they are used.
*/

/*
Test ##: Description
- test thing one
- test thing two
*/

/*
Utils guide. Delete after script is copied and finalized.
Update when new util methods get added.

// adds a layer to both languages
addLayer(layerConfig)

// adds a layer to the config of the given language key (en, fr)
addLayerLang: (layerConfig, langKey)

// adds layer & root basic legend entry for both languages
addLayerLegend(layerConfig)

// adds layer & root basic legend entry for given language (en, fr)
addLayerLegendLang(layerConfig, langKey)

// adds a legend config to the root level legend entry for both languages
addLegend(legendConfig)

// adds a legend config to the root level legend entryof the given language key (en, fr)
addLegendLang(legendConfig, langKey)

*/

const runPreTest = (config, options, utils) => {
    // Do any config setup & options setup here, if any

    return { config, options };
};

const runPostTest = (instance, utils) => {
    // Do any test steps on the instantiated instnace, if any
};

export { runPostTest, runPreTest };
