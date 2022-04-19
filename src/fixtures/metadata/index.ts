import { markRaw } from 'vue';
import { MetadataAPI } from './api/metadata';
import MetadataAppbarButtonV from './appbar-button.vue';
import MetadataScreenV from './screen.vue';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv?raw';

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
                    },
                    alertName: 'metadata.title'
                }
            },
            { i18n: { messages } }
        );

        const handler = (payload: any) => {
            const metadataFixture: MetadataAPI =
                this.$iApi.fixture.get('metadata');
            metadataFixture.openMetadata(payload);
        };

        this.$iApi.component('metadata-appbar-button', MetadataAppbarButtonV);

        this.$iApi.event.on(
            GlobalEvents.METADATA_OPEN,
            handler,
            'metadata_opened_handler'
        );
    }
}

export default MetadataFixture;
