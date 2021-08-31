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

        // const scrollguardInstance = this.extend(ScrollguardV, {
        //     iApi: this.$iApi,
        //     store: this.$vApp.$store,
        //     i18n: <any>this.$vApp.$i18n
        // });
        // const wrapper = document.createElement('div');
        // scrollguardInstance.mount(wrapper);

        const { vNode, destroy, el } = this.mount(ScrollguardV, { app: this.$element });
        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        innerShell.appendChild(el.childNodes[0]);
    }
}

export default ScrollguardFixture;
