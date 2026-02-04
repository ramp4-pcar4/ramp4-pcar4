import { markRaw as u } from "vue";
import "tiny-emitter";
import { F as f, k as y, L as a, U as m, M as g } from "./main-6dWPqJr6.js";
import "@arcgis/core/Color";
import "@arcgis/core/config";
import "@arcgis/core/core/reactiveUtils.js";
import "@arcgis/core/geometry/Extent";
import "@arcgis/core/geometry/Multipoint";
import "@arcgis/core/geometry/Point";
import "@arcgis/core/geometry/Polygon";
import "@arcgis/core/geometry/Polyline";
import "@arcgis/core/geometry/SpatialReference";
import "@arcgis/core/geometry/support/jsonUtils";
import "@arcgis/core/Graphic";
import "@arcgis/core/request";
import "@arcgis/core/symbols/PictureMarkerSymbol";
import "@arcgis/core/symbols/SimpleFillSymbol";
import "@arcgis/core/symbols/SimpleLineSymbol";
import "@arcgis/core/symbols/SimpleMarkerSymbol";
import "@arcgis/core/symbols/support/jsonUtils";
import "@arcgis/map-components/components/arcgis-swipe";
import "deepmerge";
import "@terraformer/spatial";
import "proj4";
import "throttle-debounce";
import "pinia";
import "vue-i18n";
import "screenfull";
import "lodash-es";
import "vue-tippy";
import "linkify-html";
import "@popperjs/core";
import "@terraformer/arcgis";
import "csv2geojson";
import l from "redaxios";
import "await-to-js";
import "svg.js";
class w extends f {
  /**
   * Opens or closes the wizard fixture panel
   *
   * @memberof WizardAPI
   * @param open force panel open or closed
   */
  toggleWizard(e) {
    const r = this.$iApi.panel.get("wizard");
    this.$iApi.panel.toggle(r, e);
  }
}
class h extends y {
  layerCount = 0;
  sublayerCount = 0;
  constructor(e) {
    super(e);
  }
  /**
   * Get layer info from a file url or data
   *
   * @param {string} url a service url to load, name of file if file data is provided
   * @param {string} fileType format of the file (layer type)
   * @param {ArrayBuffer} [fileData] raw file data buffer
   * @returns {Promise<LayerInfo | undefined>} LayerInfo object
   */
  async fetchFileInfo(e, r, i) {
    switch (i || (i = await this.$iApi.geo.layer.files.fetchFileData(e, r)), r) {
      case a.GEOJSON:
        return this.getGeojsonInfo(e, i);
      case a.SHAPEFILE:
        return this.getShapfileInfo(e, i);
      case a.CSV:
        return this.getCsvInfo(e, i);
      default:
        console.error(`Unsupported file type passed to fetchFileInfo - '${r}'`);
    }
  }
  async getGeojsonInfo(e, r) {
    return r instanceof ArrayBuffer && (r = JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(r)))), {
      config: {
        id: `geojson#${++this.layerCount}`,
        layerType: a.GEOJSON,
        url: e,
        name: e.substring(e.lastIndexOf("/") + 1),
        state: { opacity: 1, visibility: !0 },
        rawData: r
      },
      fields: [{ name: "OBJECTID", type: "oid" }].concat(
        this.$iApi.geo.layer.files.extractGeoJsonFields(r)
      ),
      configOptions: ["name", "nameField", "maptipField", "colour"]
    };
  }
  async getCsvInfo(e, r) {
    return r instanceof ArrayBuffer && (r = new TextDecoder("utf-8").decode(new Uint8Array(r))), {
      config: {
        id: `csv#${++this.layerCount}`,
        layerType: a.CSV,
        url: e,
        name: e.substring(e.lastIndexOf("/") + 1),
        state: { opacity: 1, visibility: !0 },
        rawData: r
      },
      fields: [{ name: "OBJECTID", type: "oid" }].concat(this.$iApi.geo.layer.files.extractCsvFields(r)),
      latLonFields: this.$iApi.geo.layer.files.filterCsvLatLonFields(r),
      configOptions: ["name", "nameField", "maptipField", "latField", "longField", "colour"]
    };
  }
  async getShapfileInfo(e, r) {
    const i = await this.$iApi.geo.layer.files.shapefileToGeoJson(r);
    return this.getGeojsonInfo(e, i);
  }
  /**
   * Get layer info from a service url
   *
   * @param {string} url a service url to load
   * @param {string} serviceType type of layer
   * @param {boolean} nested whether sublayers should be organized hierarchically
   * @param {AbortSignal} [signal] abort signal to cancel the request
   * @returns {Promise<LayerInfo | undefined>} LayerInfo object
   */
  async fetchServiceInfo(e, r, i, t) {
    switch (r) {
      case a.FEATURE:
        return this.getFeatureInfo(e);
      case a.MAPIMAGE:
        return this.getMapImageInfo(e, i);
      case a.TILE:
        return this.getTileInfo(e);
      case a.IMAGERY:
        return this.getImageryInfo(e);
      case a.WFS:
        return this.getWfsInfo(e, t);
      case a.WMS:
        return this.getWmsInfo(e, i);
    }
  }
  async getFeatureInfo(e) {
    const r = await l.get(e, { params: { f: "json" } });
    return {
      config: {
        id: `${a.FEATURE}#${++this.layerCount}`,
        url: e,
        layerType: a.FEATURE,
        name: r.data.name,
        nameField: r.data.displayField,
        maptipField: r.data.displayField,
        state: { opacity: 1, visibility: !0 }
      },
      fields: r.data.fields,
      configOptions: ["name", "nameField", "maptipField"]
    };
  }
  /**
   * Gets MIL data from source, formats it as a tree, and returns a promise of the data with configuration
   *
   * @param {string} url
   * @param {boolean} nested
   * @returns {Promise<LayerInfo>} data configuration
   */
  async getMapImageInfo(e, r) {
    const i = await l.get(e, { params: { f: "json" } });
    return {
      config: {
        id: `${a.MAPIMAGE}#${++this.layerCount}`,
        url: e,
        layerType: a.MAPIMAGE,
        name: i.data.mapName,
        sublayers: [],
        state: { opacity: 1, visibility: !0 }
      },
      layers: this.createLayerHierarchy(i.data.layers, r),
      configOptions: ["name", "sublayers"],
      layersRaw: i.data.layers
    };
  }
  createLayerHierarchy(e, r) {
    e.sort((o, s) => o.id - s.id);
    const i = (o, s) => {
      if (s === void 0)
        return !1;
      let c;
      if (s.find((n) => n.id === o))
        return s.find((n) => n.id === o);
      for (const n of s)
        if (c = i(o, n.children), c !== !1)
          return c;
      return !1;
    }, t = [], d = new Set(
      e.filter((o) => o.subLayerIds && o.subLayerIds.length > 0).map((o) => o.id)
    );
    for (const o of e)
      if (r && o.parentLayerId === -1)
        t.push({
          id: o.id,
          label: o.name,
          children: o.subLayerIds ? [] : void 0
        });
      else if (r) {
        const s = i(o.parentLayerId, t);
        s.children = [
          ...s.children,
          {
            id: o.id,
            label: o.name,
            children: o.subLayerIds ? [] : void 0
          }
        ];
      } else d.has(o.id) || t.push({
        id: o.id,
        label: o.name,
        children: void 0
      });
    return t;
  }
  async getTileInfo(e) {
    const r = await l.get(e, { params: { f: "json" } });
    return {
      config: {
        id: `${a.TILE}#${++this.layerCount}`,
        url: e,
        layerType: a.TILE,
        name: r.data.mapName,
        state: { opacity: 1, visibility: !0 }
      },
      configOptions: ["name"]
    };
  }
  async getImageryInfo(e) {
    const r = await l.get(e, { params: { f: "json" } });
    return {
      config: {
        id: `${a.IMAGERY}#${++this.layerCount}`,
        url: e,
        layerType: a.IMAGERY,
        name: r.data.name,
        state: { opacity: 1, visibility: !0 }
      },
      configOptions: ["name"]
    };
  }
  async getWfsInfo(e, r) {
    const i = new m(e), { offset: t, limit: d } = i.queryMap, o = await this.$iApi.geo.layer.ogc.loadWfsData(
      e,
      -1,
      parseInt(t) || 0,
      parseInt(d) || 1e3,
      void 0,
      !1,
      r
    );
    return this.getGeojsonInfo(e.match(/\/([^/]+)\/items/)?.[1] || "Layer", o);
  }
  /**
   * Gets WMS data from source, formats it, and returns a promise of the data with configuration
   *
   * @param {string} url
   * @param {boolean} nested
   * @returns {Promise<LayerInfo>} data configuration
   */
  async getWmsInfo(e, r) {
    const i = await this.$iApi.geo.layer.ogc.parseCapabilities(e);
    return {
      config: {
        id: `${a.WMS}#${++this.layerCount}`,
        url: e,
        layerType: a.WMS,
        name: e,
        featureInfoMimeType: i.queryTypes[0],
        state: { opacity: 1, visibility: !0 }
      },
      layers: this.mapWmsLayerList(i.layers, r),
      configOptions: ["name", "sublayers"],
      layersRaw: i.layers
    };
  }
  mapWmsLayerList(e, r) {
    let i = [];
    return e.forEach((t) => {
      t.name === null && t.layers ? i = [...i, ...t.layers] : i.push(t);
    }), r ? i.flatMap((t) => ({
      id: `${t.name}#${++this.sublayerCount}`,
      label: t.title,
      children: t.layers.length > 0 ? this.mapWmsLayerList(t.layers, r) : void 0
    })) : i.flatMap(
      (t) => t.layers && t.layers.length > 0 ? this.mapWmsLayerList(t.layers, r) : {
        id: `${t.name}#${++this.sublayerCount}`,
        label: t.title
      }
    );
  }
  /**
   * Guesses type of file or service given a URL
   *
   * @param {string} url
   * @returns {string} file or layer type
   */
  guessFormatFromURL(e) {
    switch (e.match(/\.(zip|csv|geojson|json)$/)?.[1]) {
      case "zip":
        return a.SHAPEFILE;
      case "csv":
        return a.CSV;
      case "geojson":
      case "json":
        return a.GEOJSON;
    }
    return e.match(/\/ImageServer\/?$/gi) ? a.IMAGERY : e.match(/\/collections\//gi) ? a.WFS : e.match(/arcgis\/rest\/services\//gi) ? e.match(/\/\d+\/?$/g) ? a.FEATURE : a.MAPIMAGE : e.match(/service=|version=|\/wms/gi) ? a.WMS : "";
  }
}
const z = { en: { "wizard.title": "Import Layer", "wizard.upload.title": "Upload data", "wizard.upload.or": "or", "wizard.upload.file.label": "Upload a file", "wizard.upload.file.help": "Drop or select a file to upload", "wizard.upload.file.error.failed": "File upload failed", "wizard.upload.url.label": "URL to file or service", "wizard.upload.url.error.required": "URL is required", "wizard.upload.url.error.url": "Please enter a valid URL", "wizard.format.title": "Select format", "wizard.format.type.service": "Service type", "wizard.format.type.file": "File format", "wizard.format.type.error.required": "Service or file type is required", "wizard.format.type.error.invalid": "Invalid file or service type", "wizard.format.type.error.failure": "Failed to load data from file/service", "wizard.format.info.cors": "Service needs to be CORS enabled", "wizard.format.warn.cors": "Service may not support CORS", "wizard.format.warn.vpn": "Service may require a VPN connection", "wizard.fileType.csv": "CSV", "wizard.fileType.shapefile": "zipped Shapefile", "wizard.fileType.geojson": "GeoJSON", "wizard.layerType.esriFeature": "ESRI Feature Layer", "wizard.layerType.esriMapImage": "ESRI Map Image Layer", "wizard.layerType.esriImagery": "ESRI Imagery Layer", "wizard.layerType.esriTile": "ESRI Tile Layer", "wizard.layerType.ogcWms": "OGC Web Map Service", "wizard.layerType.ogcWfs": "OGC Web Feature Service", "wizard.configure.title": "Configure layer", "wizard.configure.name.error.required": "Name is required", "wizard.configure.name.label": "Layer Name", "wizard.configure.nameField.label": "Primary Field", "wizard.configure.maptipField.label": "Maptip Field", "wizard.configure.latField.label": "Latitude Field", "wizard.configure.longField.label": "Longitude Field", "wizard.configure.sublayers.error.required": "Sublayers are required", "wizard.configure.sublayers.label": "Layers", "wizard.configure.sublayers.results": "No results", "wizard.configure.sublayers.search": "Search layers", "wizard.configure.sublayers.select": "Select layer(s)", "wizard.configure.sublayers.clearAll": "Clear all", "wizard.configure.sublayers.nested": "Nested", "wizard.configure.colour.label": "Colour", "wizard.configure.colour.hue": "Hue", "wizard.configure.colour.copy": "Copy colour", "wizard.configure.colour.hex": "Hex", "wizard.step.cancel": "Cancel", "wizard.step.continue": "Continue", "wizard.upload.success": "has been uploaded successfully.", "wizard.upload.fail": "failed to upload." }, fr: { "wizard.title": "Importer un fichier", "wizard.upload.title": "Charger des données", "wizard.upload.or": "ou", "wizard.upload.file.label": "Télécharger un fichier", "wizard.upload.file.help": "Déposer ou sélectionner un fichier à télécharger", "wizard.upload.file.error.failed": "Le téléchargement du fichier a échoué", "wizard.upload.url.label": "URL vers fichier ou service", "wizard.upload.url.error.required": "L'URL est requise", "wizard.upload.url.error.url": "Veuillez saisir une adresse URL valide", "wizard.format.title": "Choisir un format", "wizard.format.type.service": "Type de service", "wizard.format.type.file": "Format du fichier", "wizard.format.type.error.required": "Le service ou le type de fichier est requis", "wizard.format.type.error.invalid": "Type de fichier ou de service non valide", "wizard.format.type.error.failure": "Échec du chargement des données à partir du fichier/service", "wizard.format.info.cors": "Le service doit être compatible CORS.", "wizard.format.warn.cors": "Le service ne pend peut-être pas en charge CORS.", "wizard.format.warn.vpn": "Le service peut nécessiter une connexion RPV", "wizard.fileType.csv": "CSV", "wizard.fileType.shapefile": "Shapefile zippé", "wizard.fileType.geojson": "GeoJSON", "wizard.layerType.esriFeature": "Couche d'éléments d'ESRI", "wizard.layerType.esriMapImage": "Couche d'image de la carte ESRI", "wizard.layerType.esriImagery": "Couche d'imagerie d'ESRI", "wizard.layerType.esriTile": "Couche de tuiles d'ESRI", "wizard.layerType.ogcWms": "Couche WMS de l'OGC", "wizard.layerType.ogcWfs": "Service d'entités Web OGC", "wizard.configure.title": "Configurer la couche", "wizard.configure.name.error.required": "Le champ Nom est obligatoire", "wizard.configure.name.label": "Nom de la couche", "wizard.configure.nameField.label": "Champ clé", "wizard.configure.maptipField.label": "Champ infobulle", "wizard.configure.latField.label": "Champ latitude", "wizard.configure.longField.label": "Champ longitude", "wizard.configure.sublayers.error.required": "Des sous-couches sont requises", "wizard.configure.sublayers.label": "Couches", "wizard.configure.sublayers.results": "Aucun résultat", "wizard.configure.sublayers.search": "Rechercher des couches", "wizard.configure.sublayers.select": "Sélectionner les couches", "wizard.configure.sublayers.clearAll": "Effacer tout", "wizard.configure.sublayers.nested": "Imbriquées", "wizard.configure.colour.label": "Couleur", "wizard.configure.colour.hue": "Teinte", "wizard.configure.colour.copy": "Copier la couleur", "wizard.configure.colour.hex": "Hex", "wizard.step.cancel": "Annuler", "wizard.step.continue": "Continuer", "wizard.upload.success": "a été téléversé avec succès.", "wizard.upload.fail": "n'a pas pu être téléversé." } };
class ae extends w {
  added() {
    this.$iApi.panel.register(
      {
        wizard: {
          screens: {
            "wizard-screen": () => u(import("./screen-ClMmDXoq.js"))
          },
          button: {
            tooltip: "wizard.title",
            icon: '<svg class="fill-current" viewBox="0 0 23 21"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></svg>'
          },
          style: {
            width: "350px"
          },
          alertName: "wizard.title"
        }
      },
      {
        i18n: { messages: z }
      }
    ), this.handlePanelTeleports(["wizard"]);
    let e = new h(this.$iApi);
    const r = g(this.$vApp.$pinia);
    r.layerSource = e, this.removed = () => {
      this.$iApi.panel.remove("wizard"), e = void 0, r.$reset();
    };
  }
}
export {
  ae as default
};
