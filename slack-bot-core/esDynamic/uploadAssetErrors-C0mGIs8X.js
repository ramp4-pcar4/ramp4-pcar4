import { s } from "./main-CmejC-so.js";
const o = "upload-assets", t = () => new Error();
class p extends s {
  constructor() {
    super(`${o}:unsupported`, "Layer does not support asset uploads.", t());
  }
}
class a extends s {
  constructor() {
    super(`${o}:no-glb-support`, "Layer does not support glb.", t());
  }
}
class d extends s {
  constructor() {
    super(`${o}:no-supported-source`, "No supported external source found", t());
  }
}
class l extends s {
  constructor() {
    super(`${o}:not-base-64`, "Expected gltf data in base64 format after conversion.", t());
  }
}
class c extends s {
  constructor() {
    super(`${o}:unable-to-prepare-options`, "Unable to prepare uploadAsset request options.", t());
  }
}
class i extends s {
  constructor(r, n) {
    super(`${o}:bad-response`, `Bad response. Uploaded ${r} items and received ${n} results.`, t());
  }
}
class m extends s {
  constructor(r, n) {
    super(`${o}-layer:upload-failed`, `Failed to upload mesh file ${r}. Error code: ${n?.code ?? "-1"}. Error message: ${n?.messages ?? "unknown"}`, t());
  }
}
class $ extends s {
  constructor(r) {
    super(`${o}-layer:unsupported-format`, `The service allowed us to upload an asset of FormatID ${r}, but it does not list it in its supported formats.`, t());
  }
}
class f extends s {
  constructor() {
    super(`${o}:convert3D-failed`, "convert3D failed.");
  }
}
class x extends s {
  constructor() {
    super("invalid-input:no-model", "No supported model found");
  }
}
class b extends s {
  constructor() {
    super("invalid-input:multiple-models", "Multiple supported models found");
  }
}
export {
  i as a,
  $ as c,
  m as d,
  x as i,
  f as l,
  b as m,
  d as n,
  c as p,
  p as r,
  a as t,
  l as u
};
//# sourceMappingURL=uploadAssetErrors-C0mGIs8X.js.map
