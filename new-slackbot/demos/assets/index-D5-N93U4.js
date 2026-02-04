import { bA as FixtureInstance, iL as APIScope, iF as LayerType, iA as axios, iM as UrlWrapper, he as markRaw, iN as useWizardStore } from './main-CjrSZKDN.js';
import WizardScreenV from './screen-CtxFjY5r.js';
import './preload-helper-dJJaZANz.js';
import './vue.esm-bundler-CHrhhAIG.js';

class WizardAPI extends FixtureInstance {
  /**
   * Opens or closes the wizard fixture panel
   *
   * @memberof WizardAPI
   * @param open force panel open or closed
   */
  toggleWizard(open) {
    const panel = this.$iApi.panel.get("wizard");
    this.$iApi.panel.toggle(panel, open);
  }
}

class LayerSource extends APIScope {
  layerCount = 0;
  sublayerCount = 0;
  constructor($iApi) {
    super($iApi);
  }
  /**
   * Get layer info from a file url or data
   *
   * @param {string} url a service url to load, name of file if file data is provided
   * @param {string} fileType format of the file (layer type)
   * @param {ArrayBuffer} [fileData] raw file data buffer
   * @returns {Promise<LayerInfo | undefined>} LayerInfo object
   */
  async fetchFileInfo(url, fileType, fileData) {
    if (!fileData) {
      fileData = await this.$iApi.geo.layer.files.fetchFileData(url, fileType);
    }
    switch (fileType) {
      case LayerType.GEOJSON:
        return this.getGeojsonInfo(url, fileData);
      case LayerType.SHAPEFILE:
        return this.getShapfileInfo(url, fileData);
      case LayerType.CSV:
        return this.getCsvInfo(url, fileData);
      default:
        console.error(`Unsupported file type passed to fetchFileInfo - '${fileType}'`);
    }
  }
  async getGeojsonInfo(url, fileData) {
    if (fileData instanceof ArrayBuffer) {
      fileData = JSON.parse(new TextDecoder("utf-8").decode(new Uint8Array(fileData)));
    }
    const config = {
      id: `geojson#${++this.layerCount}`,
      layerType: LayerType.GEOJSON,
      url,
      name: url.substring(url.lastIndexOf("/") + 1),
      state: { opacity: 1, visibility: true },
      rawData: fileData
    };
    return {
      config,
      fields: [{ name: "OBJECTID", type: "oid" }].concat(
        this.$iApi.geo.layer.files.extractGeoJsonFields(fileData)
      ),
      configOptions: ["name", "nameField", "tooltipField", "colour"]
    };
  }
  async getCsvInfo(url, fileData) {
    if (fileData instanceof ArrayBuffer) {
      fileData = new TextDecoder("utf-8").decode(new Uint8Array(fileData));
    }
    const config = {
      id: `csv#${++this.layerCount}`,
      layerType: LayerType.CSV,
      url,
      name: url.substring(url.lastIndexOf("/") + 1),
      state: { opacity: 1, visibility: true },
      rawData: fileData
    };
    return {
      config,
      fields: [{ name: "OBJECTID", type: "oid" }].concat(this.$iApi.geo.layer.files.extractCsvFields(fileData)),
      latLonFields: this.$iApi.geo.layer.files.filterCsvLatLonFields(fileData),
      configOptions: ["name", "nameField", "tooltipField", "latField", "longField", "colour"]
    };
  }
  async getShapfileInfo(url, fileData) {
    const jsonData = await this.$iApi.geo.layer.files.shapefileToGeoJson(fileData);
    return this.getGeojsonInfo(url, jsonData);
  }
  /**
   * Get layer info from a service url
   *
   * @param {string} url a service url to load
   * @param {string} serviceType type of layer
   * @returns {Promise<LayerInfo | undefined>} LayerInfo object
   */
  async fetchServiceInfo(url, serviceType, nested) {
    switch (serviceType) {
      case LayerType.FEATURE:
        return this.getFeatureInfo(url);
      case LayerType.MAPIMAGE:
        return this.getMapImageInfo(url, nested);
      case LayerType.TILE:
        return this.getTileInfo(url);
      case LayerType.IMAGERY:
        return this.getImageryInfo(url);
      case LayerType.WFS:
        return this.getWfsInfo(url);
      case LayerType.WMS:
        return this.getWmsInfo(url, nested);
    }
  }
  async getFeatureInfo(url) {
    const response = await axios.get(url, { params: { f: "json" } });
    const config = {
      id: `${LayerType.FEATURE}#${++this.layerCount}`,
      url,
      layerType: LayerType.FEATURE,
      name: response.data.name,
      nameField: response.data.displayField,
      tooltipField: response.data.displayField,
      state: { opacity: 1, visibility: true }
    };
    return {
      config,
      fields: response.data.fields,
      configOptions: ["name", "nameField", "tooltipField"]
    };
  }
  /**
   * Gets MIL data from source, formats it as a tree, and returns a promise of the data with configuration
   *
   * @param {string} url
   * @returns {Promise<LayerInfo>} data configuration
   */
  async getMapImageInfo(url, nested) {
    const response = await axios.get(url, { params: { f: "json" } });
    const config = {
      id: `${LayerType.MAPIMAGE}#${++this.layerCount}`,
      url,
      layerType: LayerType.MAPIMAGE,
      name: response.data.mapName,
      sublayers: [],
      state: { opacity: 1, visibility: true }
    };
    return {
      config,
      layers: this.createLayerHierarchy(response.data.layers, nested),
      configOptions: ["name", "sublayers"],
      layersRaw: response.data.layers
    };
  }
  createLayerHierarchy(layers, nested) {
    layers.sort((l1, l2) => l1.id - l2.id);
    const findParent = (id, sublayers) => {
      if (sublayers === void 0) {
        return false;
      }
      let parent;
      if (sublayers.find((sl) => sl.id === id)) {
        return sublayers.find((sl) => sl.id === id);
      } else {
        for (const sublayer of sublayers) {
          parent = findParent(id, sublayer.children);
          if (parent !== false) {
            return parent;
          }
        }
        return false;
      }
    };
    const opts = [];
    const parentIds = new Set(
      layers.filter((layer) => layer.subLayerIds && layer.subLayerIds.length > 0).map((layer) => layer.id)
    );
    for (const layer of layers) {
      if (nested && layer.parentLayerId === -1) {
        opts.push({
          id: layer.id,
          label: layer.name,
          children: layer.subLayerIds ? [] : void 0
        });
      } else if (nested) {
        const parentLayer = findParent(layer.parentLayerId, opts);
        parentLayer.children = [
          ...parentLayer.children,
          {
            id: layer.id,
            label: layer.name,
            children: layer.subLayerIds ? [] : void 0
          }
        ];
      } else if (!parentIds.has(layer.id)) {
        opts.push({
          id: layer.id,
          label: layer.name,
          children: void 0
        });
      }
    }
    return opts;
  }
  async getTileInfo(url) {
    const response = await axios.get(url, { params: { f: "json" } });
    const config = {
      id: `${LayerType.TILE}#${++this.layerCount}`,
      url,
      layerType: LayerType.TILE,
      name: response.data.mapName,
      state: { opacity: 1, visibility: true }
    };
    return {
      config,
      configOptions: ["name"]
    };
  }
  async getImageryInfo(url) {
    const response = await axios.get(url, { params: { f: "json" } });
    const config = {
      id: `${LayerType.IMAGERY}#${++this.layerCount}`,
      url,
      layerType: LayerType.IMAGERY,
      name: response.data.name,
      state: { opacity: 1, visibility: true }
    };
    return {
      config,
      configOptions: ["name"]
    };
  }
  async getWfsInfo(url) {
    const wrapper = new UrlWrapper(url);
    const { offset, limit } = wrapper.queryMap;
    const wfsJson = await this.$iApi.geo.layer.ogc.loadWfsData(
      url,
      -1,
      parseInt(offset) || 0,
      parseInt(limit) || 1e3
    );
    return this.getGeojsonInfo(url.match(/\/([^/]+)\/items/)?.[1] || "Layer", wfsJson);
  }
  /**
   * Gets WMS data from source, formats it, and returns a promise of the data with configuration
   *
   * @param {string} url
   * @returns {Promise<LayerInfo>} data configuration
   */
  async getWmsInfo(url, nested) {
    const capabilities = await this.$iApi.geo.layer.ogc.parseCapabilities(url);
    const config = {
      id: `${LayerType.WMS}#${++this.layerCount}`,
      url,
      layerType: LayerType.WMS,
      name: url,
      featureInfoMimeType: capabilities.queryTypes[0],
      state: { opacity: 1, visibility: true }
    };
    return {
      config,
      layers: this.mapWmsLayerList(capabilities.layers, nested),
      configOptions: ["name", "sublayers"],
      layersRaw: capabilities.layers
    };
  }
  mapWmsLayerList(layers, nested) {
    let modLayers = [];
    layers.forEach((layer) => {
      if (layer.name === null && layer.layers) {
        modLayers = [...modLayers, ...layer.layers];
      } else {
        modLayers.push(layer);
      }
    });
    if (nested) {
      return modLayers.flatMap((layer) => {
        return {
          id: `${layer.name}#${++this.sublayerCount}`,
          label: layer.title,
          children: layer.layers.length > 0 ? this.mapWmsLayerList(layer.layers, nested) : void 0
        };
      });
    } else {
      return modLayers.flatMap(
        (layer) => layer.layers && layer.layers.length > 0 ? this.mapWmsLayerList(layer.layers, nested) : {
          id: `${layer.name}#${++this.sublayerCount}`,
          label: layer.title
        }
      );
    }
  }
  /**
   * Guesses type of file or service given a URL
   *
   * @param {string} url
   * @returns {string} file or layer type
   */
  guessFormatFromURL(url) {
    switch (url.match(/\.(zip|csv|geojson|json)$/)?.[1]) {
      case "zip":
        return LayerType.SHAPEFILE;
      case "csv":
        return LayerType.CSV;
      case "geojson":
      case "json":
        return LayerType.GEOJSON;
    }
    if (url.match(/\/ImageServer\/?$/gi)) {
      return LayerType.IMAGERY;
    }
    if (url.match(/\/collections\//gi)) {
      return LayerType.WFS;
    }
    if (url.match(/arcgis\/rest\/services\//gi)) {
      if (url.match(/\/\d+\/?$/g)) {
        return LayerType.FEATURE;
      }
      return LayerType.MAPIMAGE;
    }
    if (url.match(/service=|version=|\/wms/gi)) {
      return LayerType.WMS;
    }
    return "";
  }
}

const messages = {"en":{"wizard.title":"Import Layer","wizard.upload.title":"Upload data","wizard.upload.or":"or","wizard.upload.file.label":"Upload a file","wizard.upload.file.help":"Drop or select a file to upload","wizard.upload.file.error.failed":"File upload failed","wizard.upload.url.label":"URL to file or service","wizard.upload.url.error.required":"URL is required","wizard.upload.url.error.url":"Please enter a valid URL","wizard.format.title":"Select format","wizard.format.type.service":"Service type","wizard.format.type.file":"File format","wizard.format.type.error.required":"Service or file type is required","wizard.format.type.error.invalid":"Invalid file or service type","wizard.format.type.error.failure":"Failed to load data from file/service","wizard.format.info.cors":"Service needs to be CORS enabled","wizard.format.warn.cors":"Service may not support CORS","wizard.format.warn.vpn":"Service may require a VPN connection","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"zipped Shapefile","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"ESRI Feature Layer","wizard.layerType.esriMapImage":"ESRI Map Image Layer","wizard.layerType.esriImagery":"ESRI Imagery Layer","wizard.layerType.esriTile":"ESRI Tile Layer","wizard.layerType.ogcWms":"OGC Web Map Service","wizard.layerType.ogcWfs":"OGC Web Feature Service","wizard.configure.title":"Configure layer","wizard.configure.name.error.required":"Name is required","wizard.configure.name.label":"Layer Name","wizard.configure.nameField.label":"Primary Field","wizard.configure.tooltipField.label":"Tooltip Field","wizard.configure.latField.label":"Latitude Field","wizard.configure.longField.label":"Longitude Field","wizard.configure.sublayers.error.required":"Sublayers are required","wizard.configure.sublayers.label":"Layers","wizard.configure.sublayers.results":"No results","wizard.configure.sublayers.search":"Search layers","wizard.configure.sublayers.select":"Select layer(s)","wizard.configure.sublayers.clearAll":"Clear all","wizard.configure.sublayers.nested":"Nested","wizard.configure.colour.label":"Colour","wizard.configure.colour.hue":"Hue","wizard.configure.colour.copy":"Copy colour","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Cancel","wizard.step.continue":"Continue","wizard.upload.success":"has been uploaded successfully.","wizard.upload.fail":"failed to upload."},"fr":{"wizard.title":"Importer un fichier","wizard.upload.title":"Charger des données","wizard.upload.or":"ou","wizard.upload.file.label":"Télécharger un fichier","wizard.upload.file.help":"Déposer ou sélectionner un fichier à télécharger","wizard.upload.file.error.failed":"Le téléchargement du fichier a échoué","wizard.upload.url.label":"URL vers fichier ou service","wizard.upload.url.error.required":"L'URL est requise","wizard.upload.url.error.url":"Veuillez saisir une adresse URL valide","wizard.format.title":"Choisir un format","wizard.format.type.service":"Type de service","wizard.format.type.file":"Format du fichier","wizard.format.type.error.required":"Le service ou le type de fichier est requis","wizard.format.type.error.invalid":"Type de fichier ou de service non valide","wizard.format.type.error.failure":"Échec du chargement des données à partir du fichier/service","wizard.format.info.cors":"Le service doit être compatible CORS.","wizard.format.warn.cors":"Le service ne pend peut-être pas en charge CORS.","wizard.format.warn.vpn":"Le service peut nécessiter une connexion RPV","wizard.fileType.csv":"CSV","wizard.fileType.shapefile":"Shapefile zippé","wizard.fileType.geojson":"GeoJSON","wizard.layerType.esriFeature":"Couche d'éléments d'ESRI","wizard.layerType.esriMapImage":"Couche d'image de la carte ESRI","wizard.layerType.esriImagery":"Couche d'imagerie d'ESRI","wizard.layerType.esriTile":"Couche de tuiles d'ESRI","wizard.layerType.ogcWms":"Couche WMS de l'OGC","wizard.layerType.ogcWfs":"Service d'entités Web OGC","wizard.configure.title":"Configurer la couche","wizard.configure.name.error.required":"Le champ Nom est obligatoire","wizard.configure.name.label":"Nom de la couche","wizard.configure.nameField.label":"Champ clé","wizard.configure.tooltipField.label":"Champ infobulle","wizard.configure.latField.label":"Champ latitude","wizard.configure.longField.label":"Champ longitude","wizard.configure.sublayers.error.required":"Des sous-couches sont requises","wizard.configure.sublayers.label":"Couches","wizard.configure.sublayers.results":"Aucun résultat","wizard.configure.sublayers.search":"Rechercher des couches","wizard.configure.sublayers.select":"Sélectionner les couches","wizard.configure.sublayers.clearAll":"Effacer tout","wizard.configure.sublayers.nested":"Imbriquées","wizard.configure.colour.label":"Couleur","wizard.configure.colour.hue":"Teinte","wizard.configure.colour.copy":"Copier la couleur","wizard.configure.colour.hex":"Hex","wizard.step.cancel":"Annuler","wizard.step.continue":"Continuer","wizard.upload.success":"a été téléversé avec succès.","wizard.upload.fail":"n'a pas pu être téléversé."}};

class WizardFixture extends WizardAPI {
  added() {
    this.$iApi.panel.register(
      {
        wizard: {
          screens: {
            "wizard-screen": markRaw(WizardScreenV)
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
        i18n: { messages }
      }
    );
    this.handlePanelTeleports(["wizard"]);
    let layerSource = new LayerSource(this.$iApi);
    const wizardStore = useWizardStore(this.$vApp.$pinia);
    wizardStore.layerSource = layerSource;
    this.removed = () => {
      this.$iApi.panel.remove("wizard");
      layerSource = void 0;
      wizardStore.$reset();
    };
  }
}

export { WizardFixture as default };
