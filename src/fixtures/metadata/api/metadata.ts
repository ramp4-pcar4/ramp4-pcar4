import { FixtureInstance } from '@/api';
import type { MetadataPayload } from '../definitions';

export class MetadataAPI extends FixtureInstance {
    /**
     * Opens the metadata panel. Provides the given payload as a prop to the panel.
     * @param payload
     */
    openMetadata(payload: MetadataPayload): void {
        this.$iApi.panel.open({
            id: 'metadata-panel',
            props: { payload: payload }
        });
    }
}
