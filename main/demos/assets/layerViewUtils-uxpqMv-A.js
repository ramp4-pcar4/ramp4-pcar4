import"./main-Bd_03BNf.js";function a(n){return n&&typeof n.highlight=="function"}function i(n,t,u){return n==null||n>=u&&(t===0||n<=t)}function o(n,t){if(t&&n){const{minScale:u,maxScale:r}=n;if(c(u,r))return i(t,u,r)}return!0}function c(n,t){return n!=null&&n>0||t!=null&&t>0}function f(n){return!n?.minScale||!n.maxScale||n.minScale>=n.maxScale}export{i,a as n,o as r,f as u};
