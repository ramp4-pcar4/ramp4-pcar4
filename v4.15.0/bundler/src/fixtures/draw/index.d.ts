import { DrawAPI } from './api/drawApi';
declare class DrawFixture extends DrawAPI {
    init(): Promise<void>;
    added(): Promise<void>;
}
export default DrawFixture;
