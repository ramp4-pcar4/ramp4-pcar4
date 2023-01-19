import messages from './lang/lang.csv?raw';
import ScrollguardV from './map-scrollguard.vue';
import { ScrollguardAPI } from './api/scrollguard';
import { scrollguard } from './store';
import type { ScrollguardConfig } from './store';

class ScrollguardFixture extends ScrollguardAPI {
    added(): void {
        // console.log(`[fixture] ${this.id} added`);
        // Manually add lang entries to i18n
        Object.entries(messages).forEach(value =>
            (<any>this.$iApi.$i18n).mergeLocaleMessage(...value)
        );

        this.$vApp.$store.registerModule('scrollguard', scrollguard());

        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: ScrollguardConfig | undefined) => this._parseConfig(value)
        );

        const { vNode, destroy, el } = this.mount(ScrollguardV, {
            app: this.$element
        });

        const innerShell =
            this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);

        // override the removed method here to get access to scope
        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();
            this.$vApp.$store.unregisterModule('scrollguard');
            destroy();
        };
    }
}

export default ScrollguardFixture;
