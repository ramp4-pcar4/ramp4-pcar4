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

        this.$element.component('PanguardV', PanguardV);

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const panguardInstance = this.extend(
            PanguardV,
            this.$element._context.components,
            this.$element._context.directives,
            {
                iApi: this.$iApi,
                store: this.$vApp.$store,
                i18n: <any>this.$vApp.$i18n
            }
        );
        const wrapper = document.createElement('div');
        panguardInstance.mount(wrapper);
        innerShell.appendChild(wrapper.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default PanguardFixture;
