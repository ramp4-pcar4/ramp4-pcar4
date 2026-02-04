/*
Test 01: An empty map.
- Just adds legend text to make it look not broken

QA TEST SCRIPT. Don't modify without chatting with QA first.
*/

const runPreTest = (config, options, utils) => {
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

const runPostTest = (instance, utils) => {
    // Do any test steps on the instantiated instnace, if any
};

export { runPostTest, runPreTest };
