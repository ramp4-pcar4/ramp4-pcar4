import{ft as o,gL as u}from"./main-CzbArNue.js";function m(t){if(!t)return t;const{start:e,end:n}=t;return new o({start:e!=null?u(e,-e.getTimezoneOffset(),"minutes"):e,end:n!=null?u(n,-n.getTimezoneOffset(),"minutes"):n})}function a(t){if(!t)return t;const{start:e,end:n}=t;return new o({start:e!=null?u(e,e.getTimezoneOffset(),"minutes"):e,end:n!=null?u(n,n.getTimezoneOffset(),"minutes"):n})}function c(t,e,n){if(t?.timeInfo==null)return null;const{datesInUnknownTimezone:r=!1,timeOffset:f,useViewTime:l}=t;let s=t.timeExtent;r&&(s=a(s));let i=l?e&&s?e.intersection(s):e||s:s;return!i||i.isEmpty||i.isAllTime?i:(f&&(i=i.offset(-f.value,f.unit)),r&&(i=m(i)),i.equals(n)?n:i)}export{c as i};
