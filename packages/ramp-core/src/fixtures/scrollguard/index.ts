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

        this.$element.component('ScrollguardV', ScrollguardV);

        const innerShell = this.$vApp.$el.getElementsByClassName(
            'inner-shell'
        )[0];
        const scrollguardInstance = this.extend(
            ScrollguardV,
            this.$element._context.components,
            this.$element._context.directives,
            {
                iApi: this.$iApi,
                store: this.$vApp.$store,
                i18n: <any>this.$vApp.$i18n
            }
        );
        const wrapper = document.createElement('div');
        scrollguardInstance.mount(wrapper);
        innerShell.appendChild(wrapper.childNodes[0]);
        console.log('adding scrollguard to shell...', innerShell, wrapper);
    }
}

export default ScrollguardFixture;
