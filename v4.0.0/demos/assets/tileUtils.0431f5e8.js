import"./main.efb50b2c.js";function d(c,t,e,n){const o=c.clone(),r=1<<o.level,l=o.col+t,w=o.row+e;return n&&l<0?(o.col=l+r,o.world-=1):l>=r?(o.col=l-r,o.world+=1):o.col=l,o.row=w,o}export{d as l};
