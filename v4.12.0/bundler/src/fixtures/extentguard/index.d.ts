import { ExtentguardAPI } from './api/extentguard';
declare class ExtentguardFixture extends ExtentguardAPI {
    /**
     * Schema change event handler name
     */
    private schemaEH;
    /**
     * Extent change event handler name
     */
    private extentEH;
    added(): void;
    /**
     * Examines current state of the instance and activates or deactivates appropriately
     */
    private checkActive;
    /**
     * Wraps the act of checking if an event handler exists, and if so, removing it.
     * Just a reapeated code saver
     * @param eventPropName property name of this class that can hold an event handler name
     * @private
     */
    private evtOff;
    /**
     * Checks if the center of the given extent is outside of the maps maximum extent. If it is,
     * will pan the map back to something appropriate
     *
     * @function enforceBoundary
     * @param {Extent} extent an extent to adjudicate
     * @param {boolean} safetyCheck indicates if this enforcement is a check against an original enforcement
     */
    private enforceBoundary;
}
export default ExtentguardFixture;
