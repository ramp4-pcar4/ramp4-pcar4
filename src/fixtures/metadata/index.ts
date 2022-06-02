import { markRaw } from 'vue';
import { MetadataAPI } from './api/metadata';
import MetadataScreenV from './screen.vue';
import { GlobalEvents } from '@/api';
import messages from './lang/lang.csv?raw';

class MetadataFixture extends MetadataAPI {
    async added() {
        this.$iApi.panel.register(
            {
                metadata: {
                    screens: {
                        'metadata-screen-content': markRaw(MetadataScreenV)
                    },
                    style: {
                        width: '350px'
                    },
                    button: {
                        tooltip: 'metadata.title',
                        // https://fonts.google.com/icons?selected=Material%20Icons%3Adescription
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>'
                    },
                    alertName: 'metadata.title'
                }
            },
            { i18n: { messages } }
        );

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
            this.$iApi.panel.remove('metadata');
        };
    }
}

export default MetadataFixture;
