import { AppbarAPI } from './api/appbar';
declare class AppbarFixture extends AppbarAPI {
    initialized(): void;
    added(): Promise<void>;
}
export default AppbarFixture;
