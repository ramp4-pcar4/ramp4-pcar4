import{i as p,e as A}from"./memoryEstimations-C-4wPzbe.js";function O(r,t){return r?t?4:3:t?3:2}function M(r,t,e,o){if(!t?.lengths.length)return null;r.lengths.length&&(r.lengths.length=0),r.coords.length&&(r.coords.length=0);const s=r.coords,n=[],h=e?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:i,coords:l}=t,g=O(e,o);let f=0;for(const c of i){const u=P(h,l,f,c,e,o);u&&n.push(u),f+=c*g}if(n.sort((c,u)=>{let m=c[2]-u[2];return m===0&&e&&(m=c[4]-u[4]),m}),n.length){let c=6*n[0][2];s[0]=n[0][0]/c,s[1]=n[0][1]/c,e&&(c=6*n[0][4],s[2]=c!==0?n[0][3]/c:0),(s[0]<h[0]||s[0]>h[1]||s[1]<h[2]||s[1]>h[3]||e&&(s[2]<h[4]||s[2]>h[5]))&&(s.length=0)}if(!s.length){const c=t.lengths[0]?G(l,0,i[0],e,o):null;if(!c)return null;s[0]=c[0],s[1]=c[1],e&&c.length>2&&(s[2]=c[2])}return r}function P(r,t,e,o,s,n){const h=O(s,n);let i=e,l=e+h,g=0,f=0,c=0,u=0,m=0;for(let y=0,F=o-1;y<F;y++,i+=h,l+=h){const I=t[i],d=t[i+1],a=t[i+2],N=t[l],T=t[l+1],S=t[l+2];let w=I*T-N*d;u+=w,g+=(I+N)*w,f+=(d+T)*w,s&&(w=I*S-N*a,c+=(a+S)*w,m+=w),I<r[0]&&(r[0]=I),I>r[1]&&(r[1]=I),d<r[2]&&(r[2]=d),d>r[3]&&(r[3]=d),s&&(a<r[4]&&(r[4]=a),a>r[5]&&(r[5]=a))}if(u>0&&(u*=-1),m>0&&(m*=-1),!u)return null;const E=[g,f,.5*u];return s&&(E[3]=c,E[4]=.5*m),E}function G(r,t,e,o,s){const n=O(o,s);let h=t,i=t+n,l=0,g=0,f=0,c=0;for(let u=0,m=e-1;u<m;u++,h+=n,i+=n){const E=r[h],y=r[h+1],F=r[h+2],I=r[i],d=r[i+1],a=r[i+2],N=o?j(E,y,F,I,d,a):$(E,y,I,d);if(N)if(l+=N,o){const T=J(E,y,F,I,d,a);g+=N*T[0],f+=N*T[1],c+=N*T[2]}else{const T=x(E,y,I,d);g+=N*T[0],f+=N*T[1]}}return l>0?o?[g/l,f/l,c/l]:[g/l,f/l]:e>0?o?[r[t],r[t+1],r[t+2]]:[r[t],r[t+1]]:null}function $(r,t,e,o){const s=e-r,n=o-t;return Math.sqrt(s*s+n*n)}function j(r,t,e,o,s,n){const h=o-r,i=s-t,l=n-e;return Math.sqrt(h*h+i*i+l*l)}function x(r,t,e,o){return[r+.5*(e-r),t+.5*(o-t)]}function J(r,t,e,o,s,n){return[r+.5*(o-r),t+.5*(s-t),e+.5*(n-e)]}const V=2;class b{constructor(t=[],e=[]){this.lengths=t??[],this.coords=e??[]}static fromJSON(t){return new b(t.lengths,t.coords)}static fromRect(t){const[e,o,s,n]=t,h=s-e,i=n-o;return new b([5],[e,o,h,0,0,i,-h,0,0,-i])}get isPoint(){return this.lengths.length===0&&this.coords.length>=2}get maxLength(){return Math.max(...this.lengths)}get size(){return this.lengths.reduce((t,e)=>t+e)}get usedMemory(){return 64+p(this.lengths,this.coords)}area(){let t=0,e=0;if(!this.lengths.length)return 0;for(let o=0;o<this.lengths.length;o++){const s=this.lengths[o];if(s<3)continue;let n=this.coords[V*e],h=this.coords[V*e+1];for(let i=1;i<s;i+=1){const l=this.coords[V*(i+e)],g=this.coords[V*(i+e)+1];t+=-.5*(l-n)*(g+h),n=l,h=g}e+=s}return t}forEachVertex(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let o=0;o<this.lengths.length;o++){const s=this.lengths[o];for(let n=0;n<s;n++)t(this.coords[V*(n+e)],this.coords[V*(n+e)+1]);e+=s}}deltaDecode(){const t=this.clone(),{coords:e,lengths:o}=t;let s=0;for(const n of o){for(let h=1;h<n;h++)e[2*(s+h)]+=e[2*(s+h)-2],e[2*(s+h)+1]+=e[2*(s+h)-1];s+=n}return t}clone(t){if(this.lengths.length===0)return new b([],[this.coords[0],this.coords[1]]);const e=(this.lengths.length===0?1:this.lengths.reduce((s,n)=>s+n))*V,o=this.coords.slice(0,e);return t?(t.set(o),new b(this.lengths,t)):new b(Array.from(this.lengths),Array.from(o))}}class Y{constructor(t=null,e={},o,s,n=0){this.geometry=t,this.attributes=e,this.centroid=o,this.objectId=s,this.displayId=n}static fromJSON(t){const e=t.geometry?b.fromJSON(t.geometry):null,o=t.centroid?b.fromJSON(t.centroid):null,s=t.objectId;return new Y(e,t.attributes,o,s)}weakClone(){const t=new Y(this.geometry,this.attributes,this.centroid,this.objectId);return t.displayId=this.displayId,t}clone(){const t=this.geometry?.clone(),e=new Y(t,{...this.attributes},this.centroid?.clone(),this.objectId);return e.displayId=this.displayId,e}ensureCentroid(t){return this.centroid??=M(new b,this.geometry,t.hasZ,t.hasM),this.centroid}get usedMemory(){return 128+A(this.attributes)+(this.geometry?.usedMemory??0)}}function C(r){return!!r.geometry?.coords?.length}export{b as e,M as n,C as o,Y as s};
