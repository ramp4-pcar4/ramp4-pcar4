import{aC as t}from"./main-DCIX61zy.js";import{t as m}from"./VertexElementDescriptor-BAy1DPb3.js";function p(o,r=0){const s=o.stride;return Array.from(o.fields.keys()).map(e=>{const n=o.fields.get(e),i=n.constructor.ElementCount,f=N(n.constructor.ElementType),u=n.offset,c=n.optional?.glNormalized??!1;return new m(e,i,f,u,s,c,r)})}function N(o){const r=a[o];if(r)return r;throw new Error("BufferType not supported in WebGL")}const a={u8:t.UNSIGNED_BYTE,u16:t.UNSIGNED_SHORT,u32:t.UNSIGNED_INT,i8:t.BYTE,i16:t.SHORT,i32:t.INT,f32:t.FLOAT};export{p as t};
