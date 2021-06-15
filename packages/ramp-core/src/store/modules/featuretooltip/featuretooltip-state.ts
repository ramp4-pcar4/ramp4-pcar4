import { Point } from '@/geo/api';

export class FeatureTooltipState {
    tooltip:
        | undefined
        | {
              screenPoint: {
                  screenX: number;
                  screenY: number;
              };
              mapPoint: Point;
              graphicOID: number;
              layerId: string;
              template: string;
              offsetString: string;
          } = undefined;

    constructor(tooltip: any) {
        this.tooltip = tooltip;
    }
}
