import messages from './lang/lang.csv?raw';
import PanguardV from './map-panguard.vue';
import { FixtureInstance } from '@/api';

class PanguardFixture extends FixtureInstance {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);
        // Manually add lang entries to i18n
        Object.entries(messages).forEach(value =>
            (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
        );

        const { destroy, el } = this.mount(PanguardV, {
            app: this.$element
        });
        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            destroy();
        };
    }
}

export default PanguardFixture;
