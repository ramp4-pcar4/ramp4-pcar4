import{c as e,t}from"./Emissions.glsl-C1fRgyHC.js";import{n,t as r}from"./glsl-EDZkDhgF.js";import{i,n as a,t as o}from"./AlphaCutoff-lGKpUdxr.js";function s(s,c){s.include(a,c),s.include(t,c),s.fragment.include(i);let{output:l,oitPass:u,hasEmission:d,discardInvisibleFragments:f,oitPremultipliedAlpha:p,snowCover:m}=c,h=l===9,g=e(l)&&u===1,_=e(l)&&u===2,v=e(l)&&u!==1,y=0;(v||g)&&s.outputs.add(`fragColor`,`vec4`,y++),d&&s.outputs.add(`fragEmission`,`vec4`,y++),g&&s.outputs.add(`fragAlpha`,`float`,y++),s.fragment.code.add(n`
    void outputColorHighlightOLID(vec4 finalColor, vec3 emissiveSymbolColor ${r(m,`, float snow`)}) {
      ${r(h,`finalColor.a = 1.0;`)}
      ${r(f,`if (finalColor.a < ${n.float(o)}) { discard; }`)}

      ${r(g,`${r(p,`fragColor = finalColor;`,`fragColor = premultiplyAlpha(finalColor);`)}\n           fragAlpha = finalColor.a;`)}
      ${r(_&&p&&f,`finalColor.rgb /= finalColor.a;`)}
      ${r(v,`fragColor = finalColor;`)}
      ${r(d,`fragEmission = ${r(m,`mix(finalColor.a * getEmissions(emissiveSymbolColor), vec4(0.0), snow);`,`finalColor.a * getEmissions(emissiveSymbolColor);`)}`)}
      calculateOcclusionAndOutputHighlight();
      ${r(h,`outputObjectAndLayerIdColor();`)}
    }
  `)}export{s as t};