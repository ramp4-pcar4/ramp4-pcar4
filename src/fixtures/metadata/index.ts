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

        this.$iApi.component('metadata-appbar-button', MetadataAppbarButtonV);

        let handler = this.$iApi.event.on(
            GlobalEvents.METADATA_OPEN,
            (payload: any) => {
                const metadataFixture: MetadataAPI =
                    this.$iApi.fixture.get('metadata');
                metadataFixture.openMetadata(payload);
            }
        );

        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            // TODO: remove appbar button (blocked by #882)
            this.$iApi.event.off(handler);
            this.$iApi.panel.remove('metadata-panel');
        };
    }
}

export default MetadataFixture;
