import { MaptipProperties, Point } from '@/geo/api';

export class MaptipState {
    maptipInstance: any = undefined;
    maptipPoint: Point | undefined = undefined;
    content: string = '';
}
