import { FixtureInstance } from '../../../api';
export declare class PanguardAPI extends FixtureInstance {
    /**
     * Whether panguard is currently blocking one-finger touch panning.
     */
    get enabled(): boolean;
    /**
     * Enables the panguard on the map when set to true.
     *
     * @param value whether panguard should block one-finger touch panning
     */
    setEnabled(value: boolean): void;
}
