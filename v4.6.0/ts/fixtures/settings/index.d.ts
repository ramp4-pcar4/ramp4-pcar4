import { SettingsAPI } from './api/settings';
declare class SettingsFixture extends SettingsAPI {
    added(): Promise<void>;
    removed(): void;
}
export default SettingsFixture;
