import { markRaw } from 'vue';
import { MetadataAPI } from './api/metadata';
import MetadataAppbarButtonV from './appbar-button.vue';
import MetadataScreenV from './screen.vue';

import messages from './lang/lang.csv';

class MetadataFixture extends MetadataAPI {
    async added() {
        this.$iApi.panel.register(
            {
                'metadata-panel': {
                    screens: {
                        'metadata-screen-content': markRaw(MetadataScreenV)
                    },
                    style: {
                        width: '350px'
                    }
                }
            },
            { i18n: { messages } }
        );

        let handler = (payload: any) => {
            const metadataFixture: MetadataAPI = this.$iApi.fixture.get('metadata');
            metadataFixture.openMetadata(payload);
        };

        this.$iApi.component('metadata-appbar-button', MetadataAppbarButtonV);

        this.$iApi.event.on('metadata/open', handler, 'metadata_opened_handler');
    }
}

export default MetadataFixture;
