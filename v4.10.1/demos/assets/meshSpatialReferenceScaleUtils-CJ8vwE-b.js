import{s as e,bs as u}from"./main-DVcB5zI_.js";import{N as a}from"./MeshTransform-Dn-uxWCi.js";const t="upload-assets",r=()=>new Error;class c extends e{constructor(){super(`${t}:unsupported`,"Layer does not support asset uploads.",r())}}let l=class extends e{constructor(){super(`${t}:no-glb-support`,"Layer does not support glb.",r())}};class m extends e{constructor(){super(`${t}:no-supported-source`,"No supported external source found",r())}}class f extends e{constructor(){super(`${t}:not-base-64`,"Expected gltf data in base64 format after conversion.",r())}}class $ extends e{constructor(){super(`${t}:unable-to-prepare-options`,"Unable to prepare uploadAsset request options.",r())}}class x extends e{constructor(o,n){super(`${t}:bad-response`,`Bad response. Uploaded ${o} items and received ${n} results.`,r())}}class b extends e{constructor(o,n){super(`${t}-layer:upload-failed`,`Failed to upload mesh file ${o}. Error code: ${n?.code??"-1"}. Error message: ${n?.messages??"unknown"}`,r())}}class v extends e{constructor(o){super(`${t}-layer:unsupported-format`,`The service allowed us to upload an asset of FormatID ${o}, but it does not list it in its supported formats.`,r())}}class g extends e{constructor(){super(`${t}:convert3D-failed`,"convert3D failed.")}}class w extends e{constructor(){super("invalid-input:no-model","No supported model found")}}class y extends e{constructor(){super("invalid-input:multiple-models","Multiple supported models found")}}function E(s){const o=1/u(s,1);return o!==1?new a({scale:[o,o,o]}):void 0}export{x as a,l as b,v as c,b as d,w as i,g as l,y as m,m as n,$ as p,c as r,E as t,f as u};
