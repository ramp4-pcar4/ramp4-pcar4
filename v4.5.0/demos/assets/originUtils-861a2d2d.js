import { i as i$1 } from './multiOriginJSONSupportUtils-c87c995a.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
function i(i){i&&i.writtenProperties&&i.writtenProperties.forEach((({target:i,propName:t,newOrigin:e})=>{i$1(i)&&e&&i.originOf(t)!==e&&i.updateOrigin(t,e);}));}

export { i };
