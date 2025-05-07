import { fabric } from 'fabric';
import { FixtureInstance } from '../../api/internal';
import { ExportSubFixture } from '../export/api/export';
declare class ExportMapFixture extends FixtureInstance implements ExportSubFixture {
    get config(): any;
    make(options: any): Promise<fabric.Image>;
}
export default ExportMapFixture;
