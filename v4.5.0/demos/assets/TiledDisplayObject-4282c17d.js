import { av as e, aw as s, ax as i } from './main-5658cd6e.js';
import { r as r$2 } from './Container-1d8ffe9c.js';

/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
let r$1 = class r extends r$2{constructor(t,s,i,r,h,o,n=h,a=o){super(),this.triangleCountReportedInDebug=0,this.triangleCount=0,this.texture=null,this.key=new e(t),this.resolution=s,this.x=i,this.y=r,this.width=h,this.height=o,this.rangeX=n,this.rangeY=a;}destroy(){this.texture&&(this.texture.dispose(),this.texture=null);}setTransform(i$1){const e=this.resolution/(i$1.resolution*i$1.pixelRatio),r=this.transforms.tileMat3,[h,o]=i$1.toScreenNoRotation([0,0],[this.x,this.y]),n=this.width/this.rangeX*e,a=this.height/this.rangeY*e;s(r,n,0,0,0,a,0,h,o,1),i(this.transforms.dvs,i$1.displayViewMat3,r);}};

export { r$1 as r };
