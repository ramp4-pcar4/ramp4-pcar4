import { bA as FixtureInstance, i6 as useLegendStore, iB as SectionItem, iC as LayerItem, iD as LegendItem, iE as LayerInstance, iF as LayerType, bF as defineComponent, bG as useI18n, bH as inject, bM as resolveComponent, bO as createBlock, bP as withCtx, bT as unref, bQ as openBlock, fG as createBaseVNode, he as markRaw, hf as useAppbarStore, hg as useMapnavStore } from './main-CjrSZKDN.js';
import { _ as _sfc_main$1 } from './screen.vue_vue_type_script_setup_true_lang-D9yAzYLN.js';
import './preload-helper-dJJaZANz.js';

class LegendAPI extends FixtureInstance {
  /**
   * Parses the legend config JSON snippet from the config file and save resulting objects to the fixture store.
   *
   * @param {LegendConfig | undefined} legendConfig
   */
  _parseConfig(legendConfig) {
    const controls = legendConfig?.headerControls?.slice() ?? [
      "wizard",
      "layerReorder",
      "groupToggle",
      "visibilityToggle"
    ];
    useLegendStore(this.$vApp.$pinia).headerControls = controls;
    if (!legendConfig || !legendConfig.root.children) {
      return;
    }
    useLegendStore(this.$vApp.$pinia).multilineItems = legendConfig.multilineItems?.enabled ?? true;
    const lineClampValues = [1, 2, 3, 4, 5, 6];
    if (!legendConfig.multilineItems?.maxLines || !lineClampValues.includes(legendConfig.multilineItems?.maxLines)) {
      useLegendStore(this.$vApp.$pinia).maxLines = 3;
    } else {
      useLegendStore(this.$vApp.$pinia).maxLines = legendConfig.multilineItems.maxLines;
    }
    this.handlePanelWidths(["legend"]);
    this.handlePanelTeleports(["legend"]);
    const layerLegendConfigs = this.getLayerFixtureConfigs();
    legendConfig.root.children.forEach((legendItem) => {
      legendItem.layerLegendConfigs = layerLegendConfigs;
      this.addItem(legendItem);
    });
    this.$iApi.geo.layer.allLayers().forEach((l) => {
      this.updateLegend(l);
    });
  }
  // Create
  /**
   * Construct a legend item given the legend config
   *
   * @param {any} itemConf legend item config
   * @param {LegendItem | undefined} parent the parent legend item for the created item
   * @returns {LegendItem} returns the constructed legend item
   * @memberof LegendAPI
   */
  createItem(itemConf, parent) {
    let item = void 0;
    if (itemConf.layerId === void 0) {
      item = new SectionItem(this.$iApi, itemConf, parent);
    } else {
      if (itemConf.sublayerIndex !== void 0) {
        itemConf.layerId = `${itemConf.layerId}-${itemConf.sublayerIndex}`;
      }
      item = new LayerItem(this.$iApi, itemConf, parent);
    }
    const children = itemConf.children;
    if (children) {
      children.forEach((childConf) => {
        if (itemConf.layerLegendConfigs !== void 0) {
          childConf.layerLegendConfigs = itemConf.layerLegendConfigs;
        }
        item.children.push(this.createItem(childConf, item));
      });
    }
    return item;
  }
  /**
   * Add a legend item given the legend config, or legend item instance
   *
   * @param {any | LegendItem} item the config for the legend item or a legend item instance
   * @param {LegendItem | undefined} parent optional parent item to create this item under
   * @returns {LegendItem} the added legend item
   * @memberof LegendAPI
   */
  addItem(item, parent) {
    const constructedItem = item instanceof LegendItem ? item : this.createItem(item, parent);
    this._insertItem(constructedItem, parent);
    return constructedItem;
  }
  /**
   * Add a layer legend item given a layer instance
   *
   * @param {LayerInstance} layer the layer to create an item for
   * @param {LegendItem | undefined} parent optional parent item to create this item under
   * @returns {Promise<LegendItem>} a promise that resolves with the added layer item
   * @memberof LegendAPI
   */
  async addLayerItem(layer, parent) {
    const item = new LayerItem(
      this.$iApi,
      {
        layerId: layer.id,
        sublayerIndex: layer.isSublayer ? layer.layerIdx : void 0,
        name: layer.name
      },
      parent
    );
    this._insertItem(item, parent);
    this.updateLegend(layer);
    return item;
  }
  // Read
  /**
   * Returns `LegendConfig` section of the global config file.
   *
   * @readonly
   * @type {LegendConfig}
   * @memberof LegendAPI
   */
  get config() {
    return super.config;
  }
  /**
   * Returns the full legend tree.
   * Note: This returns a direct reference to the legend tree. Mutations will persist.
   *
   * @returns {Array<LegendItem>} returns the full legend tree
   * @memberof LegendAPI
   */
  getLegend() {
    return useLegendStore(this.$vApp.$pinia).children || [];
  }
  /**
   * Maps the current legend tree into a legend config snippet.
   *
   * In addition to legend config schema properties, this snippet will also include
   * properties such as the item type, item's uid, layer uid etc.
   *
   * @returns {any} returns the legend config
   * @memberof LegendAPI
   */
  getLegendConfig() {
    return {
      root: {
        children: this.getLegend().map((item) => item.getConfig())
      }
    };
  }
  /**
   * Get a legend item given its uid.
   *
   * @param {string} uid the uid of the legend item
   * @returns {LegendItem | undefined} return legend item with given uid. returns undefined if item is not found.
   * @memberof LegendAPI
   */
  getItem(uid) {
    const legend = this.getLegend();
    let result;
    legend.some((topItem) => {
      result = this.searchTreeFirst(topItem, (item) => item.uid === uid);
      return result !== void 0;
    });
    return result;
  }
  /**
   * Get the first found layer item connected to the layer with the given id/uid or the given layer instance.
   *
   * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
   * @returns {LegendItem | undefined} return layer item tied to the found layer. returns undefined if no such item is found.
   * @memberof LegendAPI
   */
  getLayerItem(layer) {
    let uid;
    let id;
    let result;
    if (typeof layer === "string") {
      id = layer;
      uid = layer;
    } else {
      id = layer.id;
      uid = layer.uid;
    }
    const legend = this.getLegend();
    legend.some((topItem) => {
      result = this.searchTreeFirst(
        topItem,
        (item) => item instanceof LayerItem && (item.layerId === id || item.uid === uid)
      );
      return result !== void 0;
    });
    return result;
  }
  /**
   * Get all legend items with the given expanded state.
   * Not specifying the expanded state will return all items with expanded set to `true`
   *
   * @param {boolean | undefined} expanded the expanded state to check for
   * @returns {Array<LegendItem>} the items with the given expanded state
   * @memberof LegendAPI
   */
  getAllExpanded(expanded) {
    const check = expanded ?? true;
    return this.searchLegend((item) => item.children.length > 0 && item.expanded === check);
  }
  /**
   * Get all legend items with the given visibility state.
   * Not specifying the visibility state will return all items with visibility set to `true`
   *
   * @param {boolean | undefined} visibility the visibility state to check for
   * @returns {Array<LegendItem>} the items with the given expanded state
   * @memberof LegendAPI
   */
  getAllVisible(visibility) {
    const check = visibility ?? true;
    return this.searchLegend((item) => item.visibility === check);
  }
  /**
   * Return every legend block bound to a registered layer. Parent-child layer types will
   * return everything tied to the entire layer (parent & children)
   *
   * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid
   * @returns {Array<LayerItem>} all legend items bound to the layer
   */
  getLayerBoundItems(layer) {
    let parentMostId = "";
    const layerInstance = layer instanceof LayerInstance ? layer : this.$iApi.geo.layer.getLayer(layer);
    if (layerInstance) {
      parentMostId = layerInstance.isSublayer ? layerInstance.parentLayer?.id || "" : layerInstance.id;
    } else {
      return [];
    }
    return this.searchLegend(
      (block) => block instanceof LayerItem && (block.layerId === parentMostId || block.parentLayerId === parentMostId)
    );
  }
  // Update
  /**
   * Update all layer items bound to the given layer.
   * Does nothing if no layer items are found
   *
   * @param {LayerInstance} layer the layer to update the legend with
   * @memberof LegendAPI
   */
  updateLegend(layer) {
    const updateLayerItem = (sourceLayer, error) => {
      const layerItem = this.getLayerItem(sourceLayer);
      if (error) {
        if (layerItem && sourceLayer instanceof LayerInstance) {
          layerItem.layer = sourceLayer;
        }
        layerItem?.error();
      } else {
        layerItem?.load(sourceLayer instanceof LayerInstance ? sourceLayer : void 0);
      }
    };
    layer.loadPromise().then(() => {
      let layerItem = this.getLayerItem(layer);
      if (layer.layerType === LayerType.MAPIMAGE) {
        const treeParser = (node) => {
          if (node.isLayerRoot && !node.isLogicalLayer) {
            layerItem = this.getLayerItem(layer);
            updateLayerItem(layer, false);
            if (layerItem && !layerItem.treeGrown) {
              node.children.map((childNode) => this._treeWalker(layer, childNode)).map((childConf) => this.addItem(childConf, layerItem));
              layerItem.treeGrown = true;
            }
            node.children.forEach((childNode) => treeParser(childNode));
          } else if (!node.isLayerRoot && !node.isLogicalLayer) {
            layerItem = this.getLayerItem(`${layer.id}-${node.layerIdx}`);
            if (layerItem) {
              const layerItemConf = layerItem.getConfig();
              delete layerItemConf.layerId;
              delete layerItemConf.sublayerIndex;
              delete layerItemConf.children;
              if (!layerItemConf.name) {
                delete layerItemConf.name;
              }
              const replacementConf = {
                ...this._treeWalker(layer, node),
                ...layerItemConf
              };
              const replacementItem = this.createItem(replacementConf);
              this._replaceItem(layerItem, replacementItem);
            }
            node.children.forEach((childNode) => treeParser(childNode));
          } else if (node.isLogicalLayer) {
            updateLayerItem(this._treeWalker(layer, node).layer, false);
          }
        };
        treeParser(layer.getLayerTree());
      } else {
        updateLayerItem(layer, false);
      }
    }).catch(() => {
      updateLayerItem(layer, true);
      if (layer.supportsSublayers) {
        layer.config.sublayers.forEach((sublayer) => {
          updateLayerItem(`${layer.id}-${sublayer.index}`, true);
        });
      }
    });
  }
  /**
   * Set the expanded state of legend items to `expanded`
   *
   * @param {boolean} expanded the expanded state the items will be set to
   * @param {LegendItem | undefined} root the root item to start updating the expanded state from
   * @memberof LegendAPI
   */
  expandItems(expanded, root) {
    const legend = this.getLegend();
    const items = root === void 0 ? legend : root.children;
    if (root !== void 0) {
      this._toggleState(root, { expanded });
    }
    items.forEach((item) => {
      this._toggleState(item, { expanded });
    });
  }
  /**
   * Set the visibility state of legend items to `visibility`
   *
   * @param {boolean} visibility the visibility state the items will be set to
   * @param {LegendItem | undefined} root the root item to start updating the visibility state from
   * @memberof LegendAPI
   */
  showItems(visibility, root) {
    const legend = this.getLegend();
    const items = root === void 0 ? legend : root.children;
    if (root !== void 0) {
      this._toggleState(root, { visibility });
    }
    items.forEach((item) => {
      this._toggleState(item, { visibility });
    });
  }
  /**
   * Reload the all legend items connected to the given layer.
   * This preps the items for the reload. It does not reload the actual layer.
   * Parent-child layer types will prep all items related to the layer (both
   * parent and sublayers)
   *
   * @param {LayerInstance | string} layer a layer instance, layer id, or layer uid referencing the reloaded layer
   * @returns {boolean} returns true if item was successfully reloaded, false otherwise
   * @memberof LegendAPI
   */
  reloadLayerItem(layer) {
    const affectedBlocks = this.getLayerBoundItems(layer);
    affectedBlocks.forEach((block) => block.reload());
    return affectedBlocks.length > 0;
  }
  // Delete
  /**
   * Removes the legend item with the given uid, or the item instance.
   *
   * @param {string | LegendItem} item the uid of item or legend item instance to be removed
   * @returns {boolean} returns true if item was removed, false otherwise
   * @memberof LegendAPI
   */
  removeItem(item) {
    const itemToRemove = typeof item === "string" ? this.getItem(item) : item;
    if (itemToRemove !== void 0) {
      return this._deleteItem(itemToRemove);
    }
    return false;
  }
  /**
   * Remove the layer item connected to the layer with the given id/uid or the given layer instance.
   *
   * @param {string | LayerInstance} layer the id/uid of the layer or layer instance
   * @returns {boolean} returns true if item was removed, false otherwise
   * @memberof LegendAPI
   */
  removeLayerItem(layer) {
    const itemToRemove = this.getLayerItem(layer);
    if (itemToRemove !== void 0) {
      return this._deleteItem(itemToRemove);
    }
    return false;
  }
  // _Helpers
  /**
   * Search for the first legend item that satisfies the predicate, starting from the given root item.
   *
   * @param {LegendItem} root the root item to start searching from
   * @param {(item: LegendItem) => boolean} predicate boolean predicate to test each item
   * @returns {LegendItem \ undefined} return the first item that satisfies the given predicate. returns undefined if item is not found.
   */
  searchTreeFirst(root, predicate) {
    if (predicate(root)) {
      return root;
    } else {
      let result;
      root.children.some((child) => {
        result = this.searchTreeFirst(child, predicate);
        return result !== void 0;
      });
      return result;
    }
  }
  /**
   * Search for all legend items that satisfy the predicate, starting from the given root item.
   *
   * @param {LegendItem} root the root item to start searching from
   * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
   * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
   */
  searchTreeAll(root, predicate) {
    const items = [];
    const queue = [root];
    while (queue.length > 0) {
      const item = queue.shift();
      if (item && predicate(item)) {
        items.push(item);
      }
      if (item) {
        queue.push(...item.children);
      }
    }
    return items;
  }
  /**
   * Search the entire legend for items that satisfy the predicate
   *
   * @param {(item: LegendItem) => boolean} predicate predicate boolean predicate to test each item
   * @returns {Array<LegendItem>} return all items that satisfies the given predicate.
   */
  searchLegend(predicate) {
    return this.getLegend().map((rootChildItem) => this.searchTreeAll(rootChildItem, predicate)).flat();
  }
  /**
   * Toggles visibility for all items or expands/collapses all groups.
   *
   * @param {LegendItem} item current legend item that is being checked
   * @param {any} options specifies whether visibility or expand/collapse functionality is to be changed
   */
  _toggleState(item, options) {
    const visibility = options.visibility;
    const expanded = options.expanded;
    if (visibility !== void 0) {
      item.toggleVisibility(visibility);
    }
    if (expanded !== void 0 && item.children.length > 0) {
      item.toggleExpanded(expanded);
    }
    if (item.children && item.children.length > 0) {
      item.children.forEach((ch) => {
        this._toggleState(ch, options);
      });
    }
  }
  /**
   * Add the given legend item to the legend store
   *
   * @param {Legenditem} item the legend item to be added
   * @param {LegendItem | undefined} parent the parent legend item for this item
   */
  _insertItem(item, parent) {
    useLegendStore(this.$vApp.$pinia).addItem({ item, parent });
  }
  /**
   * Deletes the given legend item from the legend store
   *
   * @param {Legenditem} item the legend item to be deleted
   * @returns {boolean} returns true if item was removed, false otherwise
   */
  _deleteItem(item) {
    const store = useLegendStore(this.$vApp.$pinia);
    const removeItemAndDescendants = (itemToRemove) => {
      if (itemToRemove.children.length > 0) {
        itemToRemove.children.forEach((child) => {
          removeItemAndDescendants(child);
        });
      }
      if (itemToRemove instanceof LayerItem) {
        itemToRemove.handlers.forEach((handler) => this.$iApi.event.off(handler));
      }
      store.removeItem(itemToRemove);
    };
    removeItemAndDescendants(item);
    return true;
  }
  _replaceItem(oldItem, newItem) {
    useLegendStore(this.$vApp.$pinia).replaceItem({ oldItem, newItem });
  }
  // map out layer's layer tree children into a legend configs
  _treeWalker(layer, node, extraConfig) {
    const getLayer = (uid) => {
      const queue = [layer];
      while (queue.length > 0) {
        const l = queue.shift();
        if (l && l.uid === uid) {
          return l;
        }
        if (l) {
          queue.push(...l.sublayers);
        }
      }
    };
    const currLayer = getLayer(node.uid);
    const currItem = {};
    if (node.isLayerRoot && !node.isLogicalLayer) {
      currItem.layer = currLayer;
      currItem.name = currLayer.name;
      currItem.children = node.children.map((childNode) => this._treeWalker(layer, childNode, extraConfig));
    } else if (!node.isLayerRoot && !node.isLogicalLayer) {
      currItem.name = node.name;
      currItem.children = node.children.map((childNode) => this._treeWalker(layer, childNode, extraConfig));
    } else if (node.isLogicalLayer) {
      currItem.layer = currLayer;
      currItem.name = currLayer.name;
      currItem.layerId = currLayer.id;
      currItem.sublayerIndex = layer.isSublayer ? layer.layerIdx : void 0;
    }
    return { ...currItem, ...extraConfig };
  }
}

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "nav-button",
  setup(__props) {
    const { t } = useI18n();
    const iApi = inject("iApi");
    const togglePanel = () => {
      iApi.panel.toggle("legend");
    };
    return (_ctx, _cache) => {
      const _component_mapnav_button = resolveComponent("mapnav-button");
      return openBlock(), createBlock(_component_mapnav_button, {
        onClickFunction: togglePanel,
        tooltip: unref(t)("legend.title")
      }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createBaseVNode("svg", {
            class: "fill-current w-32 h-20",
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24"
          }, [
            createBaseVNode("path", {
              d: "M0 0h24v24H0z",
              fill: "none"
            }),
            createBaseVNode("path", { d: "M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" })
          ], -1)
        ])),
        _: 1
      }, 8, ["tooltip"]);
    };
  }
});

const messages = {"en":{"legend.title":"Legend","legend.header.addlayer":"Add Layer","legend.header.reorderlayers":"Reorder Layers","legend.header.groups":"Toggle Groups","legend.header.groups.expand":"Expand All","legend.header.groups.collapse":"Collapse All","legend.header.visible":"Toggle Visibility","legend.header.visible.show":"Show All","legend.header.visible.hide":"Hide All","legend.group.expand":"Expand Group","legend.group.collapse":"Collapse Group","legend.visibility.showLayer":"Show layer","legend.visibility.hideLayer":"Hide layer","legend.visibility.showSymbol":"Show symbol","legend.visibility.hideSymbol":"Hide symbol","legend.visibility.showGroup":"Show group","legend.visibility.hideGroup":"Hide group","legend.symbology.expand":"Expand legend","legend.symbology.hide":"Hide legend","legend.symbology.loading":"Loading...","legend.layer.data":"Show more data","legend.layer.data.only":"Layer not on map","legend.layer.offscale":"Layer out of scale","legend.layer.zoomToVisible":"Zoom to visible scale","legend.layer.options":"More options","legend.layer.controls.metadata":"Metadata","legend.layer.controls.settings":"Settings","legend.layer.controls.datatable":"Datatable","legend.layer.controls.symbology":"Legend","legend.layer.controls.boundaryzoom":"Zoom to Layer Boundary","legend.layer.controls.cancel":"Cancel","legend.layer.controls.remove":"Remove","legend.layer.controls.reload":"Reload","legend.layer.controls.reloadDisabled":"Layer cannot be reloaded","legend.alert.symbologyExpanded":"Layer legend expanded","legend.alert.symbologyCollapsed":"Layer legend collapsed","legend.alert.groupExpanded":"Legend group expanded","legend.alert.groupCollapsed":"Legend group collapsed","legend.alert.layerAdded":"{name} layer added to legend","legend.alert.layerRemoved":"{name} layer removed from legend"},"fr":{"legend.title":"Légende","legend.header.addlayer":"Ajouter une couche","legend.header.reorderlayers":"Réorganiser les couches","legend.header.groups":"Basculer les Groupes","legend.header.groups.expand":"Élargir les groupes","legend.header.groups.collapse":"Réduire les groupes","legend.header.visible":"Basculer la Visibilité","legend.header.visible.show":"Montrer tout","legend.header.visible.hide":"Cacher tout","legend.group.expand":"Développer un groupe","legend.group.collapse":"Réduire un groupe","legend.visibility.showLayer":"Afficher la couche","legend.visibility.hideLayer":"Masquer la couche","legend.visibility.showSymbol":"Afficher le symbole","legend.visibility.hideSymbol":"Masquer le symbole","legend.visibility.showGroup":"Afficher le groupe","legend.visibility.hideGroup":"Masquer le groupe","legend.symbology.expand":"Développer la légende","legend.symbology.hide":"Masquer la légende","legend.symbology.loading":"Chargement en cours...","legend.layer.data":"Afficher plus de données","legend.layer.data.only":"Couche non visualisable","legend.layer.offscale":"Couche hors de portée","legend.layer.zoomToVisible":"Zoom sur l'échelle visible","legend.layer.options":"Plus d'options","legend.layer.controls.metadata":"Métadonnées","legend.layer.controls.settings":"Paramètres","legend.layer.controls.datatable":"Tableau de données","legend.layer.controls.symbology":"Légende","legend.layer.controls.boundaryzoom":"Zoomer à la limite","legend.layer.controls.cancel":"Annuler","legend.layer.controls.remove":"Retirer","legend.layer.controls.reload":"Recharger","legend.layer.controls.reloadDisabled":"Le calque ne peut pas être rechargé","legend.alert.symbologyExpanded":"Légende de la couche développée","legend.alert.symbologyCollapsed":"Légende de la couche réduite","legend.alert.groupExpanded":"Groupe de légende développé","legend.alert.groupCollapsed":"Groupe de légende réduit","legend.alert.layerAdded":"{name} couche ajoutée à la légende","legend.alert.layerRemoved":"Couche {name} retiré de la légende"}};

class LegendFixture extends LegendAPI {
  added() {
    this.$iApi.component("legend-nav-button", _sfc_main);
    this.$iApi.panel.register(
      {
        legend: {
          screens: {
            "legend-screen": markRaw(_sfc_main$1)
          },
          style: {
            width: "350px"
          },
          alertName: "legend.title",
          button: {
            tooltip: "legend.title",
            // https://material.io/resources/icons/?icon=layers&style=baseline
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" /></svg>'
          }
        }
      },
      {
        i18n: { messages }
      }
    );
    this._parseConfig(this.config !== void 0 ? JSON.parse(JSON.stringify(this.config)) : void 0);
    const unwatch = this.$vApp.$watch(
      () => this.config,
      (value) => this._parseConfig(value !== void 0 ? JSON.parse(JSON.stringify(value)) : void 0)
    );
    this.removed = () => {
      unwatch();
      if (this.$iApi.fixture.exists("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("legend");
      }
      if (this.$iApi.fixture.exists("mapnav")) {
        const mapnavStore = useMapnavStore(this.$vApp.$pinia);
        mapnavStore.removeItem("legend");
      }
      const legendStore = useLegendStore();
      legendStore.$reset();
      this.$iApi.panel.remove("legend");
    };
  }
}

export { LegendFixture as default };
