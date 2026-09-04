import { InstanceAPI } from '../../api';
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
export declare const buildDrawShapeDetailsRoute: (initialTab?: DrawShapeDetailsTab) => DrawShapeDetailsRoute;
export declare const openDrawShapeDetailsPanel: (iApi: InstanceAPI, initialTab?: DrawShapeDetailsTab, options?: {
    focusExisting?: boolean;
}) => void;
export declare const isPanelOpen: (panelStore: PanelStoreLike, panelId: string) => boolean;
export {};
