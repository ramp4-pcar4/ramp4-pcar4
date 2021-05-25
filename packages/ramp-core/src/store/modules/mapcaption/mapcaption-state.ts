export class MapCaptionState {
    // TODO: Make attribution into a defined type and update all instances (including config)
    attribution: {
        text: string;
        iconSrc: string;
        altText: string;
        link: string;
    } = {
        text: '', // attribution text
        iconSrc: '', // img src
        altText: '', // alt text
        link: '' // redirect link if clicked
    };

    constructor(attrib: any) {
        this.attribution = attrib;
    }
}
