import { fabric } from 'fabric';
import { FixtureInstance } from '../../api/internal';
import { ExportSubFixture } from '../export/api/export';
declare class ExportScalebarFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any;
    make(options?: any): Promise<fabric.Object>;
}
export default ExportScalebarFixture;
