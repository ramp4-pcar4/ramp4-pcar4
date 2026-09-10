import{n as e}from"./glsl-BlSepfbN.js";function t(t,n){if(n.output!==9)return t.vertex.code.add(e`void forwardObjectAndLayerIdColor() {}`),void t.fragment.code.add(e`void outputObjectAndLayerIdColor() {}`);let r=n.instanced;t.varyings.add(`objectAndLayerIdColorVarying`,`vec4`);let i=r?`instanceOlidColor`:`olidColor`;t.attributes.add(i,`vec4`),t.vertex.code.add(e`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${i} * 0.003921568627451;
    }`),t.fragment.code.add(e`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}export{t};