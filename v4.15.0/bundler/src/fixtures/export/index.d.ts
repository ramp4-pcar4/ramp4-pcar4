import { ExportAPI } from './api/export';
declare class ExportFixture extends ExportAPI {
    initialized(): void;
    needed(): Promise<void>;
    added(): void;
}
export default ExportFixture;
