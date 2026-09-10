import { FixtureInstance } from '../../../api';
import { MetadataPayload } from '../store';
export declare class MetadataAPI extends FixtureInstance {
    /**
     * Toggles the metadata panel. Provides the given payload as a prop to the panel.
     * @param payload
     */
    toggleMetadata(payload?: MetadataPayload, open?: boolean): void;
}
