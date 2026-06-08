import { PinDropAPI } from './api/pindrop';

class PinDropFixture extends PinDropAPI {
    async added() {
        // read the config values. set a watcher to check for any config updates. stop watching if fixture gets removed
        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        // override the removed method here to get access to scope
        this.removed = () => {
            unwatch();
            this.cleanup();
        };
    }
}

export default PinDropFixture;
