import { fabric } from 'fabric';
import { FixtureInstance } from '../../api/internal';
import { ExportSubFixture } from '../export/api/export';
declare class ExportNorthArrowFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any;
    make(options?: any): Promise<fabric.Object>;
}
export default ExportNorthArrowFixture;
