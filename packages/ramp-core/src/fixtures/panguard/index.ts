import messages from './lang/lang.csv';
import PanguardV from './map-panguard.vue';
import { FixtureInstance } from '@/api';

class PanguardFixture extends FixtureInstance {
    added(): void {
        console.log(`[fixture] ${this.id} added`);
        // Manually add lang entries to i18n
        Object.entries(messages).forEach(value =>
            (<any>this.$vApp.$i18n).mergeLocaleMessage(...value)
        );

        // const panguard = this.extend(PanguardV);
        // this.$vApp.$root
        //     ? this.$vApp.$root.$el.getElementsByClassName('inner-shell')[0].prepend(panguard.$el)
        //     : undefined;
        this.$element.component('PanguardV', PanguardV);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default PanguardFixture;
