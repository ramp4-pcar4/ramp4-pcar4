/*
Test 02: An empty map.
- Just adds legend text to make it look not broken
*/

const runPreTest = (config, options) => {
    config.configs.en.fixtures.legend.root.children.push({
        infoType: 'text',
        content: 'I start with no layers'
    });

    config.configs.fr.fixtures.legend.root.children.push({
        infoType: 'text',
        content: 'Je commence sans couches'
    });

    return { config, options };
};

const runPostTest = () => {
    // Do any test steps on the instantiated instnace, if any
};

export { runPreTest, runPostTest };
