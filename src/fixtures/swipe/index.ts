import SwipeV from './swipe.vue'; // import on-map component
import { FixtureInstance } from '@/api';

interface SwipeConfig {
    leading: Array<string>;
    trailing: Array<string>;
}

class SwipeFixture extends FixtureInstance {
    /**
     * Parses the swipe config snippet from the config json
     */
    _parseConfig(swipeConf?: SwipeConfig) {
        this.leading = swipeConf?.leading ?? [];
        this.trailing = swipeConf?.trailing ?? [];
    }

    /**
     * Layer ids for the left side of the swiper
     */
    leading: Array<string> = [];

    /**
     * Layer ids for the right side of the swiper
     */
    trailing: Array<string> = [];

    async added(): Promise<void> {
        this._parseConfig(this.config);

        const { el, destroy } = this.mount(SwipeV, {
            app: this.$element,
            props: { fixture: this }
        });

        if (el.childNodes[0]) this.$vApp.$el.appendChild(el.childNodes[0]);

        this.removed = (): void => {
            destroy();
        };
    }
}

export default SwipeFixture;
