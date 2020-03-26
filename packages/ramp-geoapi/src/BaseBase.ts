// put things here that would be common to all/most geoapi objects.
// mainly utilitiy links to make stuff easy to code
// TODO add proper documentation

import { EsriBundle, InfoBundle, GeoApi, DojoWindow } from './gapiTypes';

export default class BaseBase {

    // points to collection of ESRI API Dojo Classes
    protected esriBundle: EsriBundle;

    // points to instance of geoApi to allow other functions to be called
    protected gapi: GeoApi;

    protected window: DojoWindow;

    protected constructor (infoBundle: InfoBundle) {
        this.esriBundle = infoBundle.esriBundle;
        this.gapi = infoBundle.api;
        this.window = infoBundle.window;
    }

    // helper function for when classes want to spawn another class, and need to pass an infobundle
    protected infoBundle(): InfoBundle {
        return {
            esriBundle: this.esriBundle,
            api: this.gapi,
            window: this.window
        };
    }

    /**
     * Undefined checker, best function ever
     *
     * @param varr what you want to check
     * @returns {boolean} if the thing is undefined
     */
    protected isUndefined(varr: any): boolean {
        // i make a function cause i hate typing this statement
        return typeof varr === 'undefined';
    }
}