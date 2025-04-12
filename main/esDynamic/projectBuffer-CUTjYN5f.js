import{ad as t,g7 as k,g8 as B,dx as A0,aP as P0,d1 as e0,bh as S0,bj as t0,g9 as O0,ck as M0,cu as s0,ga as N0,ce as i0,gb as c0,cc as r0,cd as L0,f9 as o0,fa as G0,gc as I0}from"./main-C3PVbFgd.js";const W0=Math.PI/180,F0=/(?:SPHEROID|ELLIPSOID)\[([^\]]+)]/i,i=t.radius,O=t.eccentricitySquared,H0={a1:i*O,a2:i*O*i*O,a3:i*O*O/2,a4:i*O*i*O*2.5,a5:i*O+i*O*O/2,a6:1-O},T0={4267:{a:63782064e-1,f:1/294.9786982},4269:{a:6378137,f:1/298.257222101},4326:{a:t.radius,f:t.flattening},4490:{a:6378137,f:1/298.257222101},104900:{a:2439700,f:0},104901:{a:6051e3,f:0},104902:{a:6051800,f:0},104903:{a:k.radius,f:k.flattening},104904:{a:3393400,f:1/192.0430107526882},104905:{a:B.radius,f:B.flattening},104906:{a:6200,f:0},104907:{a:11100,f:0},104908:{a:71492e3,f:.06487439154031222},104909:{a:8200,f:0},104910:{a:83500,f:0},104911:{a:1e4,f:0},104912:{a:2409300,f:0},104913:{a:15e3,f:0},104914:{a:4e4,f:0},104915:{a:1562090,f:0},104916:{a:2632345,f:0},104917:{a:85e3,f:0},104918:{a:1821460,f:0},104919:{a:5e3,f:0},104920:{a:12e3,f:0},104921:{a:3e4,f:3},104922:{a:18e3,f:0},104923:{a:14e3,f:0},104924:{a:49300,f:0},104925:{a:60268e3,f:1/10.2079945799458},104926:{a:16e3,f:0},104927:{a:9500,f:0},104928:{a:56e4,f:0},104929:{a:249400,f:0},104930:{a:59500,f:0},104931:{a:16e3,f:0},104932:{a:133e3,f:0},104933:{a:718e3,f:0},104934:{a:888e3,f:0},104935:{a:1986300,f:0},104936:{a:1e4,f:0},104937:{a:41900,f:0},104938:{a:11e4,f:0},104939:{a:50100,f:0},104940:{a:764e3,f:0},104941:{a:11e3,f:0},104942:{a:529800,f:0},104943:{a:2575e3,f:0},104944:{a:25559e3,f:1/43.61604095563141},104945:{a:578900,f:0},104946:{a:33e3,f:0},104947:{a:21e3,f:0},104948:{a:13e3,f:0},104949:{a:31e3,f:0},104950:{a:27e3,f:0},104951:{a:42e3,f:0},104952:{a:235800,f:0},104953:{a:761400,f:0},104954:{a:15e3,f:0},104955:{a:54e3,f:0},104956:{a:77e3,f:0},104957:{a:27e3,f:0},104958:{a:788900,f:0},104959:{a:584700,f:0},104960:{a:24764e3,f:.01708124697141011},104961:{a:74e3,f:0},104962:{a:79e3,f:0},104963:{a:104e3,f:.14423076923076922},104964:{a:29e3,f:0},104965:{a:17e4,f:0},104966:{a:208e3,f:0},104967:{a:4e4,f:0},104968:{a:1352600,f:0},104969:{a:1195e3,f:0},104970:{a:593e3,f:0},104971:{a:B.radius,f:0},104972:{a:47e4,f:0},104973:{a:255e3,f:0},104974:{a:2439400,f:0}};var a;(function(C){C[C.UNKNOWN=0]="UNKNOWN",C[C.SPHERICAL_ECEF=1]="SPHERICAL_ECEF",C[C.WGS84=2]="WGS84",C[C.WEB_MERCATOR=3]="WEB_MERCATOR",C[C.WGS84_ECEF=4]="WGS84_ECEF",C[C.CGCS2000=5]="CGCS2000",C[C.SPHERICAL_MARS_PCPF=6]="SPHERICAL_MARS_PCPF",C[C.GCSMARS2000=7]="GCSMARS2000",C[C.SPHERICAL_MOON_PCPF=8]="SPHERICAL_MOON_PCPF",C[C.GCSMOON2000=9]="GCSMOON2000",C[C.LON_LAT=10]="LON_LAT",C[C.PLATE_CARREE=11]="PLATE_CARREE"})(a||(a={}));const X={[a.WGS84]:{[a.CGCS2000]:f,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:f,[a.WGS84_ECEF]:d},[a.CGCS2000]:{[a.CGCS2000]:f,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:f,[a.WGS84_ECEF]:d},[a.GCSMARS2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:f,[a.GCSMOON2000]:null,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:l0,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.GCSMOON2000]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:f,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:C0,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.WEB_MERCATOR]:{[a.CGCS2000]:g,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:g,[a.SPHERICAL_ECEF]:d0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:f,[a.PLATE_CARREE]:p0,[a.WGS84]:g,[a.WGS84_ECEF]:h0},[a.WGS84_ECEF]:{[a.CGCS2000]:h,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:h,[a.SPHERICAL_ECEF]:m0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:w0,[a.PLATE_CARREE]:U0,[a.WGS84]:h,[a.WGS84_ECEF]:f},[a.SPHERICAL_ECEF]:{[a.CGCS2000]:T,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:T,[a.SPHERICAL_ECEF]:f,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:j0,[a.PLATE_CARREE]:K0,[a.WGS84]:T,[a.WGS84_ECEF]:k0},[a.SPHERICAL_MARS_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:n0,[a.GCSMOON2000]:null,[a.LON_LAT]:n0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:f,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.SPHERICAL_MOON_PCPF]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:E0,[a.LON_LAT]:E0,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:f,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.UNKNOWN]:{[a.CGCS2000]:null,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:null,[a.SPHERICAL_ECEF]:null,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:f,[a.WEB_MERCATOR]:null,[a.PLATE_CARREE]:null,[a.WGS84]:null,[a.WGS84_ECEF]:null},[a.LON_LAT]:{[a.CGCS2000]:f,[a.GCSMARS2000]:f,[a.GCSMOON2000]:f,[a.LON_LAT]:f,[a.SPHERICAL_ECEF]:q,[a.SPHERICAL_MARS_PCPF]:l0,[a.SPHERICAL_MOON_PCPF]:C0,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:W,[a.PLATE_CARREE]:F,[a.WGS84]:f,[a.WGS84_ECEF]:d},[a.PLATE_CARREE]:{[a.CGCS2000]:H,[a.GCSMARS2000]:null,[a.GCSMOON2000]:null,[a.LON_LAT]:H,[a.SPHERICAL_ECEF]:B0,[a.SPHERICAL_MARS_PCPF]:null,[a.SPHERICAL_MOON_PCPF]:null,[a.UNKNOWN]:null,[a.WEB_MERCATOR]:g0,[a.PLATE_CARREE]:f,[a.WGS84]:H,[a.WGS84_ECEF]:q0}};function Y(C,n){return Z(C,n)?.projector}function Z(C,n){if(C==null||n==null)return null;if(M.source.spatialReference===C&&M.dest.spatialReference===n)return M;const l=$(C,M.source),E=$(n,M.dest);return l===a.UNKNOWN&&E===a.UNKNOWN?S0(C,n)?M.projector=f:M.projector=null:M.projector=X[l][E],M}function $(C,n){return C?n.spatialReference===C?n.spatialReferenceId:(n.spatialReference=C,"metersPerUnit"in n&&(n.metersPerUnit=t0(C,1)),O0(C)?n.spatialReferenceId=a.SPHERICAL_ECEF:M0(C)?n.spatialReferenceId=a.WGS84:s0(C)?n.spatialReferenceId=a.WEB_MERCATOR:N0(C)?n.spatialReferenceId=a.PLATE_CARREE:C.wkt===i0.wkt?n.spatialReferenceId=a.WGS84_ECEF:C.wkid===c0.CGCS2000?n.spatialReferenceId=a.CGCS2000:C.wkt===r0.wkt?n.spatialReferenceId=a.SPHERICAL_MARS_PCPF:C.wkt===L0.wkt?n.spatialReferenceId=a.SPHERICAL_MOON_PCPF:o0(C)?n.spatialReferenceId=a.GCSMARS2000:G0(C)?n.spatialReferenceId=a.GCSMOON2000:n.spatialReferenceId=a.UNKNOWN):a.UNKNOWN}function f(C,n,l,E){C!==l&&(l[E++]=C[n++],l[E++]=C[n++],l[E]=C[n])}function g(C,n,l,E){l[E]=U*(C[n]/L),l[E+1]=U*(R0-2*Math.atan(Math.exp(-C[n+1]/L))),l[E+2]=C[n+2]}function d0(C,n,l,E){const _=C[n]/L,u=R0-2*Math.atan(Math.exp(-C[n+1]/L)),A=L+C[n+2],R=Math.cos(u)*A;l[E]=Math.cos(_)*R,l[E+1]=Math.sin(_)*R,l[E+2]=Math.sin(u)*A}function h0(C,n,l,E){g(C,n,l,E),d(l,E,l,E)}function a0(C,n,l,E,_){const u=.4999999*Math.PI,A=P0(p*C[n+1],-u,u),R=Math.sin(A);l[E++]=p*C[n]*_.radius,l[E++]=_.halfSemiMajorAxis*Math.log((1+R)/(1-R)),l[E]=C[n+2]}function W(C,n,l,E){a0(C,n,l,E,t)}function F(C,n,l,E){l[E]=C[n]*f0,l[E+1]=C[n+1]*f0,l[E+2]=C[n+2]}function H(C,n,l,E){l[E]=C[n]*u0,l[E+1]=C[n+1]*u0,l[E+2]=C[n+2]}function p0(C,n,l,E){g(C,n,l,E),F(l,E,l,E)}function U0(C,n,l,E){h(C,n,l,E),F(l,E,l,E)}function K0(C,n,l,E){T(C,n,l,E),F(l,E,l,E)}function B0(C,n,l,E){H(C,n,l,E),q(l,E,l,E)}function g0(C,n,l,E){H(C,n,l,E),W(l,E,l,E)}function q0(C,n,l,E){H(C,n,l,E),d(l,E,l,E)}function J(C,n,l,E,_){const u=_+C[n+2],A=p*C[n+1],R=p*C[n],P=Math.cos(A)*u;l[E]=Math.cos(R)*P,l[E+1]=Math.sin(R)*P,l[E+2]=Math.sin(A)*u}function C0(C,n,l,E){J(C,n,l,E,k.radius)}function l0(C,n,l,E){J(C,n,l,E,B.radius)}function q(C,n,l,E){J(C,n,l,E,t.radius)}function b(C,n,l,E,_){const u=C[n],A=C[n+1],R=C[n+2],P=Math.sqrt(u*u+A*A+R*R),S=I0(R/(P===0?1:P)),e=Math.atan2(A,u);l[E++]=U*e,l[E++]=U*S,l[E]=P-_}function E0(C,n,l,E){b(C,n,l,E,k.radius)}function n0(C,n,l,E){b(C,n,l,E,B.radius)}function T(C,n,l,E){b(C,n,l,E,t.radius)}function j0(C,n,l,E){T(C,n,l,E),W(l,E,l,E)}function k0(C,n,l,E){T(C,n,l,E),d(l,E,l,E)}function b0(C,n,l,E,_){const u=p*C[n],A=p*C[n+1],R=C[n+2],P=Math.sin(A),S=Math.cos(A),e=_.radius/Math.sqrt(1-_.eccentricitySquared*P*P);l[E++]=(e+R)*S*Math.cos(u),l[E++]=(e+R)*S*Math.sin(u),l[E++]=(e*(1-_.eccentricitySquared)+R)*P}function d(C,n,l,E){b0(C,n,l,E,t)}function h(C,n,l,E){const _=H0,u=C[n],A=C[n+1],R=C[n+2];let P,S,e,c,r,m,j,s,N,K,w,y,x,o,G,v,D,z,I,Q,V;P=Math.abs(R),S=u*u+A*A,e=Math.sqrt(S),c=S+R*R,r=Math.sqrt(c),Q=Math.atan2(A,u),m=R*R/c,j=S/c,o=_.a2/r,G=_.a3-_.a4/r,j>.3?(s=P/r*(1+j*(_.a1+o+m*G)/r),I=Math.asin(s),K=s*s,N=Math.sqrt(1-K)):(N=e/r*(1-m*(_.a5-o-j*G)/r),I=Math.acos(N),K=1-N*N,s=Math.sqrt(K)),w=1-t.eccentricitySquared*K,y=t.radius/Math.sqrt(w),x=_.a6*y,o=e-y*N,G=P-x*s,D=N*o+s*G,v=N*G-s*o,z=v/(x/w+D),I+=z,V=D+v*z/2,R<0&&(I=-I),l[E++]=U*Q,l[E++]=U*I,l[E]=V}function m0(C,n,l,E){h(C,n,l,E),q(l,E,l,E)}function w0(C,n,l,E){h(C,n,l,E),W(l,E,l,E)}const M={source:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},dest:{spatialReference:null,spatialReferenceId:a.UNKNOWN,metersPerUnit:1},projector:f},p=e0(1),U=A0(1),R0=.5*Math.PI,L=t.radius,f0=L*Math.PI/180,u0=180/(L*Math.PI);function _0(C,n,l,E,_,u,A=Math.floor(C.length/3)){const R=Y(n,_);if(R==null)return!1;if(R===f){if(C===E&&l===u)return!0;const S=l+3*A;for(let e=l,c=u;e<S;e++,c++)E[c]=C[e];return!0}const P=l+3*A;for(let S=l,e=u;S<P;S+=3,e+=3)R(C,S,E,e);return!0}const y0=Object.freeze(Object.defineProperty({__proto__:null,projectBuffer:_0},Symbol.toStringTag,{value:"Module"}));export{Z as F,Y as G,X as L,a as N,T0 as d,a0 as h,W0 as i,_0 as o,y0 as p,F0 as t,b as v};
