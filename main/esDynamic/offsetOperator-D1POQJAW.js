import{e1 as f,b$ as G}from"./main-C3PVbFgd.js";import{w as d,j as g}from"./operatorOffset-CSw2JlHr.js";import{getSpatialReference as u,fromGeometry as x,toGeometry as p,fromGeometries as j}from"./jsonConverter-CO-cC38p.js";const l={round:0,bevel:1,miter:2,square:3};function L(r,e,s={}){const{miterLimit:i=10,flattenError:m=0,joins:c="round",unit:t}=s,o=u(r);t&&o&&(e=f(e,t,o));const a=x(r),n=a.getSpatialReference();return p(d(a.getGeometry(),n,e,l[c],i,m),n)}function b(r,e,s={}){const{miterLimit:i=10,flattenError:m=0,joins:c="round",unit:t}=s,o=u(r);t&&o&&(e=f(e,t,o));const[a,n]=j(r);return g(a,n,e,l[c],i,m).map(y=>p(y,n)).filter(G)}export{L as execute,b as executeMany};
