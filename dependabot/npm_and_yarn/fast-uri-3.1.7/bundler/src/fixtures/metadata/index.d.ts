import { MetadataAPI } from './api/metadata';
declare class MetadataFixture extends MetadataAPI {
    added(): Promise<void>;
}
export default MetadataFixture;
