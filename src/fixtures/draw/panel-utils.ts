import type { InstanceAPI } from '@/api';
import { DRAW_SHAPE_DETAILS_PANEL_ID } from './settings';

export type DrawShapeDetailsTab = 'details' | 'style' | 'edit';

type DrawShapeDetailsRoute = {
    screen: 'draw-shape-details-screen';
    props: {
        initialTab: DrawShapeDetailsTab;
        tabRequestId: number;
    };
};

type PanelStoreLike = {
    orderedItems: unknown[];
    teleported: unknown[];
};

type PanelLike = {
    id?: string;
};

export const buildDrawShapeDetailsRoute = (initialTab: DrawShapeDetailsTab = 'details'): DrawShapeDetailsRoute => ({
    screen: 'draw-shape-details-screen',
    props: {
        initialTab,
        tabRequestId: Date.now()
    }
});

export const openDrawShapeDetailsPanel = (
    iApi: InstanceAPI,
    initialTab: DrawShapeDetailsTab = 'details',
    options: { focusExisting?: boolean } = {}
): void => {
    const route = buildDrawShapeDetailsRoute(initialTab);
    const panel = iApi.panel.get(DRAW_SHAPE_DETAILS_PANEL_ID);

    if (panel?.isOpen) {
        iApi.panel.show(DRAW_SHAPE_DETAILS_PANEL_ID, route);
        if (options.focusExisting) {
            iApi.panel.focus(DRAW_SHAPE_DETAILS_PANEL_ID);
        }
        return;
    }

    iApi.panel.open({ id: DRAW_SHAPE_DETAILS_PANEL_ID, ...route });
};

export const isPanelOpen = (panelStore: PanelStoreLike, panelId: string): boolean =>
    [...(panelStore.orderedItems as PanelLike[]), ...(panelStore.teleported as PanelLike[])].some(
        panel => panel.id === panelId
    );
