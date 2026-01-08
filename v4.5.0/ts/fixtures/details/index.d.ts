import { DetailsAPI } from './api/details';
declare class DetailsFixture extends DetailsAPI {
    added(): Promise<void>;
}
export default DetailsFixture;
