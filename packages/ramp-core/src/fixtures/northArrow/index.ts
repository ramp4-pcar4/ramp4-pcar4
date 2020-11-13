import { NorthArrowAPI } from './api/north-arrow';
import { northArrow } from './store/index';
import NorthArrowV from './north-arrow.vue'; 

class NorthArrowFixture extends NorthArrowAPI {
   async added() {
        console.log(`[fixture] ${this.id} added`);

        this.$vApp.$store.registerModule('northArrow', northArrow());

        this._parseConfig(this.config);
        this.$vApp.$watch(
            () => this.config,
            value => this._parseConfig(value)
        );

        const innerShell = this.$vApp.$el.getElementsByClassName('inner-shell')[0];
        const northArrowInstance = this.extend(NorthArrowV, { store: this.$vApp.$store });
        innerShell.append(northArrowInstance.$el)
    }

    removed(): void {
        console.log(`[fixture] ${this.id} removed`); 
        this.$vApp.$store.unregisterModule('northArrow');
    }
}

export default NorthArrowFixture;
