import messages from './lang/lang.csv';
import ScrollguardV from './map-scrollguard.vue';
import { FixtureInstance } from '@/api';

class ScrollguardFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);
        // Manually add lang entries to i18n
        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }

        // const scrollguard = this.extend(ScrollguardV);
        // this.$vApp.$root.$el
        //     .getElementsByClassName('inner-shell')[0]
        //     .prepend(scrollguard.$el);
        this.$element.component('ScrollguardV', ScrollguardV);
    }
}

export default ScrollguardFixture;
