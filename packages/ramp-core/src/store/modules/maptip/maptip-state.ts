import { MaptipProperties } from '@/geo/api';

export class MaptipState {
    maptipInstance: any = undefined;
    maptipProperties: MaptipProperties | undefined = undefined;
    defaultContent: string = '';
    content: string = '';
}
