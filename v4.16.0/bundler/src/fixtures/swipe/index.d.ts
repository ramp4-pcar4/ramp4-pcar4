import { FixtureInstance } from '../../api';
interface SwipeConfig {
    leading: Array<string>;
    trailing: Array<string>;
}
declare class SwipeFixture extends FixtureInstance {
    /**
     * Parses the swipe config snippet from the config json
     */
    _parseConfig(swipeConf?: SwipeConfig): void;
    /**
     * Layer ids for the left side of the swiper
     */
    leading: Array<string>;
    /**
     * Layer ids for the right side of the swiper
     */
    trailing: Array<string>;
    added(): Promise<void>;
}
export default SwipeFixture;
