import{aB as n}from"./main-Dv0FawL-.js";class s{static getId(t,e,r,o){return typeof t=="object"?`${t.level}/${t.row}/${t.col}/${t.world}`:`${t}/${e}/${r}/${o}`}constructor(t,e,r,o){this.set(t,e,r,o)}get key(){return this}get id(){return this.toString()}get normalizedId(){return`${this.level}/${this.row}/${this.col}`}set id(t){this.set(t)}get hash(){const t=4095&this.row,e=4095&this.col,r=63&this.level;return(3&this.world)<<30|e<<22|t<<8|r}acquire(t,e,r,o){this.set(t,e,r,o)}contains(t){const e=t.level-this.level;return e>=0&&this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world}containsChild(t){const e=t.level-this.level;return e>0&&this.row===t.row>>e&&this.col===t.col>>e&&this.world===t.world}equals(t){return this.level===t.level&&this.row===t.row&&this.col===t.col&&this.world===t.world}clone(){return new s(this)}release(){this.level=0,this.row=0,this.col=0,this.world=0}set(t,e,r,o){if(t==null)this.level=0,this.row=0,this.col=0,this.world=0;else if(typeof t=="object")this.level=t.level||0,this.row=t.row||0,this.col=t.col||0,this.world=t.world||0;else if(typeof t=="string"){const[i,l,h,w]=t.split("/");this.level=parseFloat(i),this.row=parseFloat(l),this.col=parseFloat(h),this.world=parseFloat(w)}else this.level=+t,this.row=+e,this.col=+r,this.world=+o||0;return this}toString(){return`${this.level}/${this.row}/${this.col}/${this.world}`}getParentKey(){return this.level<=0?null:new s(this.level-1,this.row>>1,this.col>>1,this.world)}getNormalizedNeighbor(t,e,r){const o=this.clone();return o.col+=t,o.row+=e,r.normalizeKey(o),o}getChildKeys(){const t=this.level+1,e=this.row<<1,r=this.col<<1,o=this.world;return[new s(t,e,r,o),new s(t,e,r+1,o),new s(t,e+1,r,o),new s(t,e+1,r+1,o)]}compareRowMajor(t){return this.row<t.row?-1:this.row>t.row?1:this.col<t.col?-1:this.col>t.col?1:0}}s.pool=new n(s,null,null,25,50);export{s as e};
