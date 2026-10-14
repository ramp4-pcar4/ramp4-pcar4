import{f as e}from"./oitResolution.glsl-BFyFSgo3.js";var t=255;function n(n){n.code.add(e`
    vec3 quantizeGlobalIlluminationColor(vec3 color) {
      vec3 clampedColor = clamp(color, vec3(0.0), vec3(1.0));
      return floor(clampedColor * ${e.float(t)} + 0.5) * ${e.float(1/t)};
    }
  `)}export{n as t};