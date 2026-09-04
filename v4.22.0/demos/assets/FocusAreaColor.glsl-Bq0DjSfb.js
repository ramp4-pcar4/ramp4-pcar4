import{_a as e}from"./store-5v4E3u6t.js";import{g as t,h as n}from"./SceneLighting-BG1CT_Zr.js";import{c as r,f as i,l as a}from"./oitResolution.glsl-BFyFSgo3.js";import{t as o}from"./NoParameters-ZDc3QXO4.js";import{t as s}from"./ShaderBuilder-B5bKgQt6.js";var c=class extends o{constructor(){super(...arguments),this.effect=0,this.fadeFactor=e(1)}};function l(){let e=new s;return e.include(n),e.outputs.add(`fragColor`,`vec4`,0),e.fragment.uniforms.add(new r(`colorTexture`,e=>e.color),new r(`focusArea`,e=>e.focusArea),new t(`focusAreaEffectMode`,e=>e.effect),new a(`fadeFactor`,e=>e.fadeFactor.value)).main.add(i`
      float mask = texture( focusArea, uv, 0.0 ).r;
      vec4 color = texture( colorTexture, uv, 0.0 );
      vec4 colorDeSaturate = vec4(color.r * 0.25 + color.g * 0.5 + color.b * 0.25);
      if (focusAreaEffectMode == ${i.int(0)}) {
        fragColor = mask > 0.0 ? color : mix(color, 0.55 * colorDeSaturate + 0.45, fadeFactor);
      } else {
        fragColor = mask > 0.0 ? color : mix(color, 0.33 * color, fadeFactor);
      }
  `),e}var u=Object.freeze(Object.defineProperty({__proto__:null,FocusAreaColorPassParameters:c,build:l},Symbol.toStringTag,{value:`Module`}));export{l as n,u as r,c as t};