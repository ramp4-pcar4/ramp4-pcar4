import { GridAPI } from './api/grid';
declare class GridFixture extends GridAPI {
    added(): Promise<void>;
    removed(): void;
}
export default GridFixture;
