import { FixtureInstance } from '@/api';
import type { MetadataPayload } from '../store';

export class MetadataAPI extends FixtureInstance {
    /**
     * Toggles the metadata panel. Provides the given payload as a prop to the panel.
     * @param payload
     */
    toggleMetadata(payload?: MetadataPayload): void {
        const panel = this.$iApi.panel.get('metadata');
        // open metadata panel if not open
        if (!panel.isOpen) {
            this.$iApi.panel.open({
                id: 'metadata',
                props: { payload: payload }
            });
        } else {
            // otherwise refresh with new layer info or close if it is the same layer
            const currentUid = (panel.route.props! as any).payload.layer.uid;
            if (currentUid !== payload?.layer?.uid) {
                panel.show({
                    screen: 'metadata-screen-content',
                    props: { payload: payload }
                });
            } else {
                panel.close();
            }
        }
    }
}
