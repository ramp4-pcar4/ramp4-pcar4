import { MetadataAPI } from './api/metadata';

import ScreenV from './screen.vue';

import messages from './lang/lang.csv';

class MetadataFixture extends MetadataAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'metadata-panel': {
                    screens: {
                        'metadata-screen-content': ScreenV
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            { i18n: { messages } }
        );

        let handler = (payload: any) => {
            const metadataFixture: MetadataAPI = this.$iApi.fixture.get(
                'metadata'
            );
            metadataFixture.openMetadata(payload);
        };

        this.$iApi.event.on(
            'metadata/open',
            handler,
            'metadata_opened_handler'
        );

        // TODO: remove this. Temporarily emits an event to open the metadata panel. In the future, this will be done by
        // any fixture that wants the metadata panel to open.
        this.$iApi.event.emit('metadata/open', {
            type: 'html',
            layer: 'Sample Layer Name',
            url: 'https://ryan-coulson.com/RAMPMetadataDemo.html'
        });
    }
}

export default MetadataFixture;
