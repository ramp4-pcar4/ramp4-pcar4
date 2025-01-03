import { fj as c, fv as o } from './main-CaWYn_3L.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function T(e){if(!e)return e;const{start:n,end:i}=e;return new c({start:null!=n?o(n,-n.getTimezoneOffset(),"minutes"):n,end:null!=i?o(i,-i.getTimezoneOffset(),"minutes"):i})}function w(e){if(!e)return e;const{start:n,end:i}=e;return new c({start:null!=n?o(n,n.getTimezoneOffset(),"minutes"):n,end:null!=i?o(i,i.getTimezoneOffset(),"minutes"):i})}

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.30/esri/copyright.txt for details.
*/
function i(i,n,s){if(null==i?.timeInfo)return null;const{datesInUnknownTimezone:l=!1,timeOffset:o,useViewTime:m}=i;let u=i.timeExtent;l&&(u=w(u));let r=m?n&&u?n.intersection(u):n||u:u;return !r||r.isEmpty||r.isAllTime?r:(o&&(r=r.offset(-o.value,o.unit)),l&&(r=T(r)),r.equals(s)?s:r)}

export { i };
