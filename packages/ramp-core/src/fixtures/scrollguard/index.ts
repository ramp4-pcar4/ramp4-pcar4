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

        const { vNode, destroy, el } = this.mount(ScrollguardV, { app: this.$element });
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`);
    }
}

export default ScrollguardFixture;
