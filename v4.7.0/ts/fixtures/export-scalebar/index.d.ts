import { fabric } from 'fabric';
import { FixtureInstance } from '@/api/internal';
import type { ExportSubFixture } from '@/fixtures/export/api/export';
declare class ExportScalebarFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any;
    make(options?: any): Promise<fabric.Object>;
}
export default ExportScalebarFixture;
