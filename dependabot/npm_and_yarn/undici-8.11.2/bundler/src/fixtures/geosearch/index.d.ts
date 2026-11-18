import { GeosearchAPI } from './api/geosearch';
declare class GeosearchFixture extends GeosearchAPI {
    added(): Promise<void>;
    removed(): void;
}
export default GeosearchFixture;
