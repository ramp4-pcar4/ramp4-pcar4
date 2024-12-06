function d(r,e,n,w){const o=r.clone(),c=1<<o.level,l=o.col+e,t=o.row+n;return w&&l<0?(o.col=l+c,o.world-=1):l>=c?(o.col=l-c,o.world+=1):o.col=l,o.row=t,o}export{d as o};
