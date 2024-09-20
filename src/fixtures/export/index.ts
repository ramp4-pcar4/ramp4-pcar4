import { markRaw } from 'vue';
import { ExportAPI } from './api/export';
import ExportScreenV from './screen.vue';
import messages from './lang/lang.csv?raw';

/* import sub fixtures */
import type ExportFootnoteFixture from '../export-footnote';
import type ExportLegendFixture from '../export-legend';
import type ExportMapFixture from '../export-map';
import type ExportTimestampFixture from '../export-timestamp';
import type ExportTitleFixture from '../export-title';
import type ExportNorthArrowFixture from '../export-northarrow';
import type ExportScalebarFixture from '../export-scalebar';
import type { PanelInstance } from '@/api';
import { useAppbarStore } from '../appbar/store';
import { useExportStore } from './store';

class ExportFixture extends ExportAPI {
    initialized(): void {
        // load sub-fixtures required by the export
    }

    async needed() {
        const exportTitle = (await import('../export-title')).default;
        const exportMap = (await import('../export-map')).default;
        const exportLegend = (await import('../export-legend')).default;
        const exportNorthArrow = (await import('../export-northarrow')).default;
        const exportScalebar = (await import('../export-scalebar')).default;
        const exportTimestamp = (await import('../export-timestamp')).default;
        const exportFootnote = (await import('../export-footnote')).default;

        // any type is needed to suppress TS errors, not able to find a better solution/type for use
        this.$iApi.fixture.add('export-title', exportTitle as any);
        this.$iApi.fixture.add('export-map', exportMap as any);
        this.$iApi.fixture.add('export-legend', exportLegend as any);
        this.$iApi.fixture.add('export-northarrow', exportNorthArrow as any);
        this.$iApi.fixture.add('export-scalebar', exportScalebar as any);
        this.$iApi.fixture.add('export-timestamp', exportTimestamp as any);
        this.$iApi.fixture.add('export-footnote', exportFootnote as any);
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

        const neededHandler = this.$iApi.event.on(
            'panel/opened',
            async (panel: PanelInstance) => {
                if (panel.id === 'export') {
                    await this.needed();
                    (panel as any).exportMake();
                    this.$iApi.event.off(neededHandler);
                }
            }
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
            this.$iApi.fixture
                .get<ExportTimestampFixture>('export-timestamp')
                ?.remove();
            this.$iApi.fixture
                .get<ExportFootnoteFixture>('export-footnote')
                ?.remove();

            if (this.$iApi.fixture.exists('appbar')) {
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
