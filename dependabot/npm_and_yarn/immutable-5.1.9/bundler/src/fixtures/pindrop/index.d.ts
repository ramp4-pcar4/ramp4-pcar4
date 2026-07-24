import { PinDropAPI } from './api/pindrop';
declare class PinDropFixture extends PinDropAPI {
    added(): Promise<void>;
}
export default PinDropFixture;
