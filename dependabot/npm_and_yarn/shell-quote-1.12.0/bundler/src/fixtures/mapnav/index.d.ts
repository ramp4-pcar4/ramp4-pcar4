import { MapnavAPI } from './api/mapnav';
declare class MapnavFixture extends MapnavAPI {
    added(): Promise<void>;
}
export default MapnavFixture;
