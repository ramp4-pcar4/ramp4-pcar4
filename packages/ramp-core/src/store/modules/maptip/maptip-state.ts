import { Point } from '@/geo/api';
import { EsriGraphic } from '@/geo/esri';

export class MaptipState {
    maptipInstance: any = undefined;

    maptipProperties:
        | undefined
        | {
              screenPoint: {
                  screenX: number;
                  screenY: number;
              };
              mapPoint: Point;
              graphic: EsriGraphic;
          } = undefined;

    defaultContent: string = '';
    content: string = '';
}
