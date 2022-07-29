import { HilightAPI } from './api/hilight';

class HilightFixture extends HilightAPI {
    async added() {
        console.log(`[fixture] ${this.id} added`);

        this._parseConfig(this.config);
        let unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            console.log(`[fixture] ${this.id} removed`);
            unwatch();
        };
    }
}

export default HilightFixture;
