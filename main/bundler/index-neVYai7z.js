import { markRaw as o } from "vue";
import "tiny-emitter";
import { F as s, b as i, t as d } from "./main-6dWPqJr6.js";
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
import "redaxios";
import "await-to-js";
import "svg.js";
class m extends s {
  /**
   * Toggles the metadata panel. Provides the given payload as a prop to the panel.
   * @param payload
   */
  toggleMetadata(a, e) {
    const t = this.$iApi.panel.get("metadata");
    if (e === !1) {
      t.close();
      return;
    }
    !t.isOpen || !t.isVisible ? this.$iApi.panel.open({
      id: "metadata",
      props: { payload: a }
    }) : t.route.props.payload.layer.uid !== a?.layer?.uid || e ? t.show({
      screen: "metadata-screen-content",
      props: { payload: a }
    }) : t.close();
  }
}
const l = { en: { "metadata.title": "Metadata", "metadata.loading": "Loading...", "metadata.error": "There was an error retrieving this resource. Please try again.", "metadata.label.no.layer": "No metadata to show because the layer has been removed", "metadata.xslt.Abstract": "Abstract", "metadata.xslt.Scope": "Scope", "metadata.xslt.hereBeScope": "here be scope", "metadata.xslt.timePeriod": "Time Period", "metadata.xslt.supplementalData": "Supplemental Data", "metadata.xslt.contactInfo": "Contact Information", "metadata.xslt.resourceProvider": "Resource Provider", "metadata.xslt.custodian": "Custodian", "metadata.xslt.owner": "Owner", "metadata.xslt.user": "User", "metadata.xslt.distributor": "Distributor", "metadata.xslt.originator": "Originator", "metadata.xslt.pointOfContact": "Point of Contact", "metadata.xslt.principalInvestigator": "Principal Investigator", "metadata.xslt.processor": "Processor", "metadata.xslt.publisher": "Publisher", "metadata.xslt.author": "Author", "metadata.xslt.collaborator": "Collaborator", "metadata.xslt.editor": "Editor", "metadata.xslt.mediator": "Mediator", "metadata.xslt.rightsHolder": "Rights Holder", "metadata.xslt.cataloguePage": "Data Catalogue Page", "metadata.xslt.metadataPage": "Raw Metadata", "metadata.xslt.metadata": "Metadata" }, fr: { "metadata.title": "Métadonnées", "metadata.loading": "Chargement en cours...", "metadata.error": "Une erreur s'est produite lors du chargement de cette ressource. Veuillez essayer de nouveau.", "metadata.label.no.layer": "Aucune métadonnée à afficher", "metadata.xslt.Abstract": "Résumé", "metadata.xslt.Scope": "Portée", "metadata.xslt.hereBeScope": "la portée jusqu'ici", "metadata.xslt.timePeriod": "Période", "metadata.xslt.supplementalData": "Données supplémentaires", "metadata.xslt.contactInfo": "Coordonnées", "metadata.xslt.resourceProvider": "Fournisseur de la ressource", "metadata.xslt.custodian": "Dépositaire", "metadata.xslt.owner": "Propriétaire", "metadata.xslt.user": "Utilisateur", "metadata.xslt.distributor": "Distributeur", "metadata.xslt.originator": "Auteur", "metadata.xslt.pointOfContact": "Point de contact", "metadata.xslt.principalInvestigator": "Chercheur principal", "metadata.xslt.processor": "Préparateur", "metadata.xslt.publisher": "Éditeur", "metadata.xslt.author": "Auteur", "metadata.xslt.collaborator": "Collaborateur", "metadata.xslt.editor": "Éditeur", "metadata.xslt.mediator": "Médiateur", "metadata.xslt.rightsHolder": "Titulaire des droits", "metadata.xslt.cataloguePage": "Page des données du catalogue", "metadata.xslt.metadataPage": "Métadonnées brutes", "metadata.xslt.metadata": "Métadonnées" } };
class Q extends m {
  async added() {
    this.$iApi.panel.register(
      {
        metadata: {
          screens: {
            "metadata-screen-content": () => o(import("./screen-q82gTiKf.js"))
          },
          style: {
            width: "350px"
          },
          button: {
            tooltip: "metadata.title",
            // https://fonts.google.com/icons?selected=Material%20Icons%3Adescription
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" /></svg>'
          },
          alertName: "metadata.title"
        }
      },
      { i18n: { messages: l } }
    ), this.handlePanelTeleports(["metadata"]), this.removed = () => {
      this.$iApi.fixture.exists("appbar") && i(this.$vApp.$pinia).removeButton("metadata"), d(this.$vApp.$pinia).$reset(), this.$iApi.panel.remove("metadata");
    };
  }
}
export {
  Q as default
};
