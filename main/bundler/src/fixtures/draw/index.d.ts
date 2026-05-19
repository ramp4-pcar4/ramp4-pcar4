import { DrawAPI } from './api/drawApi';
declare class DrawFixture extends DrawAPI {
    private unregisterIdentifyGeometryProvider?;
    private eventHandlers;
    private destroyDrawComponent?;
    private registerHelpSection;
    private unregisterHelpSection;
    private resetShapeInspectionState;
    init(): Promise<void>;
    added(): Promise<void>;
    removed(): void;
}
export default DrawFixture;
