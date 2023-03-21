import { markRaw } from 'vue';
import { ExportAPI } from './api/export';
import ExportScreenV from './screen.vue';
import messages from './lang/lang.csv?raw';

/* import sub fixtures */
import type ExportLegendFixture from '../export-legend';
import type ExportMapFixture from '../export-map';
import type ExportTitleFixture from '../export-title';
import type ExportNorthArrowFixture from '../export-northarrow';
import type ExportScalebarFixture from '../export-scalebar';
import { useAppbarStore } from '../appbar/store';
import { useExportStore } from './store';

class ExportFixture extends ExportAPI {
    initialized(): void {
        // load sub-fixtures required by the export
        this.$iApi.fixture.add('export-title');
        this.$iApi.fixture.add('export-map');
        this.$iApi.fixture.add('export-legend');
        this.$iApi.fixture.add('export-northarrow');
        this.$iApi.fixture.add('export-scalebar');
    }

    added(): void {
        // console.log(`[fixture] ${this.id} added`);

        this.$iApi.panel.register(
            {
                id: 'export',
                config: {
                    screens: {
                        'export-screen': markRaw(ExportScreenV)
                    },
                    style: {
                        'flex-grow': '1',
                        'max-width': '800px'
                    },
                    button: {
                        tooltip: 'export.title',
                        // https://fonts.google.com/icons?selected=Material+Icons:layers&icon.query=export
                        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" /></svg>'
                    },
                    alertName: 'export.alertName'
                }
            },
            { i18n: { messages } }
        );

        // parse export section of config and store in the config store
        this._parseConfig(this.config);
        const unwatch = this.$vApp.$watch(
            () => this.config,
            (value: any) => this._parseConfig(value)
        );

        this.removed = () => {
            // console.log(`[fixture] ${this.id} removed`);
            unwatch();
            // remove sub fixtures
            this.$iApi.fixture
                .get<ExportTitleFixture>('export-title')
                ?.remove();
            this.$iApi.fixture.get<ExportMapFixture>('export-map')?.remove();
            this.$iApi.fixture
                .get<ExportLegendFixture>('export-legend')
                ?.remove();
            this.$iApi.fixture
                .get<ExportNorthArrowFixture>('export-northarrow')
                ?.remove();
            this.$iApi.fixture
                .get<ExportScalebarFixture>('export-scalebar')
                ?.remove();

            if (this.$iApi.fixture.get('appbar')) {
                const appbarStore = useAppbarStore(this.$vApp.$pinia);
                appbarStore.removeButton('export');
            }

            const exportStore = useExportStore(this.$vApp.$pinia);
            exportStore.$reset();

            this.$iApi.panel.remove('export');
        };
    }
}

export default ExportFixture;
