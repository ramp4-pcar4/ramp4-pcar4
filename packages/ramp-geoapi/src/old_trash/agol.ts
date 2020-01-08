// TODO not 100% we are going to support AGOL in R4MP.
//      remove file if decision is made not to

import { EsriBundle } from '../gapiTypes';

// functions related to AGOL queries

function queryAgolItemBuilder(esriBundle: EsriBundle): Object {
    /**
     * Get ArcGIS Online JSON information about a web map or web app id.
     *
     * @param {String} url ArcGIS Online url
     * @param {String} id web map or web app id
     * @param {String} token for secure arcGIS online id
     * @returns {Object} promise for JSON response from service
     */
    return (url: string, id: string, token: string): Promise<Object> => {
        // request item info
        // TODO fix the `esriRequest.esriRequest` notation
        const idReq = esriBundle.esriRequest(`${url}sharing/rest/content/items/${id}`, {
            query: {
                token: token,
                f: 'json'
            },
            // callbackParamName: 'callback',
            responseType: 'json'
        });

        // request data info
        const dataReq = esriBundle.esriRequest(`${url}sharing/rest/content/items/${id}/data`, {
            query: {
                token: token,
                f: 'json'
            },
            // callbackParamName: 'callback',
            responseType: 'json'
        });

        // standard json request with error checking
        // wrap in promise to contain dojo deferred
        return new Promise((resolve, reject) => {
            idReq.then(idResult => {
                // if (idResult.error) {
                //     reject(idResult.error);
                // } else {
                dataReq.then (dataResult => {
                    // if (dataResult.error) {
                    //     reject(dataResult.error);
                    // } else {

                    // if id is type app, call again with map id to get information about the map
                    // add this information then resolve
                    const type = (dataResult.hasOwnProperty('appItemId')) ? 'app' : 'map';

                    if (type === 'app') {
                        (<any>idResult).appData = dataResult;

                        // request map data info
                        id = (<any>dataResult).map.itemId;
                        const mapReq = esriBundle.esriRequest(`${url}sharing/rest/content/items/${id}/data`, {
                            query: {
                                token: token,
                                f: 'json'
                            },
                            // callbackParamName: 'callback',
                            responseType: 'json'
                        });

                        mapReq.then(mapResult => {
                            if ((<any>mapResult).error) {
                                reject((<any>mapResult).error);
                            } else {
                                (<any>idResult).mapData = mapResult;
                                resolve(idResult);
                            }
                        });
                    } else {
                        (<any>idResult).mapData = dataResult;
                        resolve(idResult);
                    }
                // }
                }).catch(error => {
                    reject(error);
                });
            // }
            }).catch(error => {
                reject(error);
            });
        });
    };
}

function queryAgolTokenBuilder(esriBundle: EsriBundle): Object {
    /**
     * Get ArcGIS Online token.
     *
     * @param {String} url ArcGIS Online url
     * @param {String} user user name
     * @param {String} password password
     * @returns {Object} promise for token
     */
    return (url: string, user: string, password: string): Promise<Object> => {
        // standard json request with error checking
        const tokenReq = esriBundle.esriRequest(`${url}sharing/generateToken`, {
            query: {
                request: 'getToken', // request purpose
                username: user,
                password: password,
                expiration: 1, // token life in minutes
                clientid: `ref.${window.location.href}`, // application the token is associated with
                f: 'json'
            },
            // callbackParamName: 'callback',
            responseType: 'json'
        });

        // wrap in promise to contain dojo deferred
        return new Promise((resolve, reject) => {
            tokenReq.then(reqResult => {
                // if (reqResult.error) {
                //     reject(reqResult.error);
                // } else {
                resolve(reqResult);
                // }
            }).catch(error => {
                reject(error);
            });
        });
    };
}

export default (esriBundle: EsriBundle): Object => {
    return {
        queryItem: queryAgolItemBuilder(esriBundle),
        queryToken: queryAgolTokenBuilder(esriBundle)
    };
};
