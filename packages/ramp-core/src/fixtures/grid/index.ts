import { grid } from './store/index';

import { GridAPI } from './api/grid';

class GridFixture extends GridAPI {
    async added() {
        this.$vApp.$store.registerModule('grid', grid());

        // temporarily throw the InstanceAPI in console for testing purposes.
        console.log(this.$iApi);
    }

    removed() {
        this.$vApp.$store.unregisterModule('grid');
    }
}

export default GridFixture;
