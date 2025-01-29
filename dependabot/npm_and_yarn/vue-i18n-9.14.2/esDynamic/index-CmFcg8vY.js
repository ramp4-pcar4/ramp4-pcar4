import { bY as E, j0 as y, c1 as j, iL as z, c3 as B, c4 as a, c7 as N, iP as T, c5 as W, g1 as Y, fY as G, c6 as H, b_ as R, j1 as O, i$ as q, j2 as V, j3 as X, ci as F, fV as D, j4 as K, cc as U } from "./main-uCo5F72j.js";
class J extends E {
  /**
   * Parses the north arrow config JSON snippet from the config file and save to the fixture store.
   *
   * @param {NortharrowConfig} [northarrowConfig]
   * @memberof NortharrowAPI
   */
  _parseConfig(t) {
    const o = y(this.$vApp.$pinia);
    t && (o.arrowIcon = t.arrowIcon, o.poleIcon = t.poleIcon);
  }
  get config() {
    return super.config;
  }
}
const Q = "path", Z = 12, ee = "M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z", te = "#ff0000ff", oe = 5, ae = 6, se = {
  style: Q,
  size: Z,
  path: ee,
  colour: te,
  xOffset: oe,
  yOffset: ae
}, re = ["innerHTML"], ne = /* @__PURE__ */ j({
  __name: "northarrow",
  setup(S) {
    const t = z(), o = y(), e = B("iApi"), u = a(), n = N(() => o.arrowIcon), M = N(() => o.poleIcon), c = a(0), i = a(0), p = a(!1), P = a(`<svg xmlns="http://www.w3.org/2000/svg" fit=""  width="25" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" focusable="false">
                <g id="northarrow" transform="translate(-285.24 -142.234)">
                    <path id="path3770-7" d="M305.91 156.648a8.652 8.652 0 0 1-8.654 8.653 8.652 8.652 0 0 1-8.653-8.653 8.653 8.653 0 0 1 8.653-8.653 8.653 8.653 0 0 1 8.653 8.653z" fill="#fff" stroke="#fff" stroke-width=".895"/>
                    <path id="path3770" d="M304.982 156.648a7.725 7.725 0 0 1-7.726 7.726 7.725 7.725 0 0 1-7.726-7.726 7.725 7.725 0 0 1 7.726-7.726 7.725 7.725 0 0 1 7.726 7.726z" fill="none" stroke="#6d6d6d" stroke-width=".799"/>
                    <path id="path3774" d="M297.256 156.648v-8.525" fill="none" stroke="#000" stroke-width=".067"/>
                    <path d="M297.258 143.48l8.793 22.432-8.811-8.812-8.812 8.812z" id="path3778" fill="#fff" stroke="#fff" stroke-width=".912"/>
                    <path d="M297.256 144.805l7.726 19.568-7.726-7.726-7.726 7.726z" id="path3780" fill="#d6d6d6" stroke="#000" stroke-width=".266" stroke-linecap="square"/>
                    <path id="path6038" d="M297.256 144.666l-7.726 19.568 7.726-7.726" fill="#6d6d6d" stroke-width=".296" stroke-linecap="square"/>
                </g>
            </svg>`), $ = a(!1), k = T([]), A = a([]);
    let _;
    W(() => {
      const s = t.config.map;
      A.value = s.tileSchemas, n?.value && (P.value = `<img width='25' src='${n.value}'>`), e.geo.map.esriView?.ready && x(e.geo.map.getExtent()), k.push(e.event.on(Y.MAP_EXTENTCHANGE, G(300, x)));
    }), H(() => {
      k.forEach((s) => e.event.off(s));
    });
    const x = async (s) => {
      _ = t.activeBasemapConfig;
      let h;
      for (const f of A.value)
        if (_?.tileSchemaId === f.id) {
          h = f?.hasNorthPole;
          break;
        }
      const l = e.$vApp.$el.querySelector(".inner-shell"), d = u.value.querySelector(".northarrow").getBoundingClientRect().width, v = e.$vApp.$el.querySelector(".appbar")?.clientWidth || 0, I = s.sr;
      if (h || typeof h > "u" && !I.isWebMercator()) {
        const f = new R("pole", { x: -96, y: 90 }), b = await e.geo.proj.projectGeometry(I, f), m = e.geo.map.mapPointToScreenPoint(b);
        if (m.screenY < 0) {
          p.value = !0;
          const r = {
            screenX: l.clientWidth / 2,
            screenY: l.clientHeight
          };
          c.value = Math.atan(
            (m.screenX - r.screenX) / (r.screenY - m.screenY)
          ) * 180 / Math.PI, i.value = l.clientWidth / 2 + l.clientHeight * Math.tan(c.value * Math.PI / 180) - d / 2, i.value = Math.max(
            v - d / 2,
            Math.min(e.geo.map.getPixelWidth() - d / 2, i.value)
          );
        } else if (p.value = !1, !$.value) {
          $.value = !0;
          let r;
          M.value ? r = {
            style: O.ICON,
            icon: M.value,
            height: 16.5,
            width: 16.5
          } : r = se;
          const g = e.geo.layer.createLayer({
            id: w,
            layerType: q.GRAPHIC,
            url: "",
            cosmetic: !0
            // mark this layer as a cosmetic layer
          });
          e.geo.map.addLayer(g), g.loadPromise().then(() => {
            const L = new V(b, "northpole"), C = new X(
              r
            );
            L.style = C, g.addGraphic(L);
          });
        }
      } else
        p.value = !0, c.value = 0, i.value = v + (l.clientWidth - v - d) / 2;
    };
    return (s, h) => (U(), F("div", {
      class: "absolute transition-all duration-300 ease-out",
      style: K({
        "transform-origin": "top center",
        transform: `rotate(${c.value}deg)`,
        left: `${i.value}px`,
        visibility: p.value ? "visible" : "hidden"
      }),
      ref_key: "el",
      ref: u
    }, [
      D("span", {
        class: "northarrow",
        innerHTML: P.value
      }, null, 8, re)
    ], 4));
  }
}), w = "RampPoleMarker";
class le extends J {
  async added() {
    this._parseConfig(this.config);
    const t = this.$vApp.$watch(
      () => this.config,
      (n) => this._parseConfig(n)
    ), { destroy: o, el: e } = this.mount(ne, {
      app: this.$element
    });
    this.$vApp.$el.getElementsByClassName("inner-shell")[0].appendChild(e.childNodes[0]), this.removed = () => {
      t(), this.$iApi.geo.layer.getLayer(w) && this.$iApi.geo.map.removeLayer(w), y(this.$vApp.$pinia).$reset(), o();
    };
  }
}
export {
  w as POLE_MARKER_LAYER_ID,
  le as default
};
//# sourceMappingURL=index-CmFcg8vY.js.map
