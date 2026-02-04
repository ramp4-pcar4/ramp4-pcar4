import { bA as FixtureInstance, he as markRaw, hf as useAppbarStore, hi as useMetadataStore } from './main-BpBTVFw9.js';
import { _ as _sfc_main } from './screen.vue_vue_type_style_index_0_lang-DXjx8Gq4.js';
import './preload-helper-dJJaZANz.js';
import './marked.esm-DcwJ8j7Z.js';

class MetadataAPI extends FixtureInstance {
  /**
   * Toggles the metadata panel. Provides the given payload as a prop to the panel.
   * @param payload
   */
  toggleMetadata(payload, open) {
    const panel = this.$iApi.panel.get("metadata");
    if (open === false) {
      panel.close();
      return;
    }
    if (!panel.isOpen || !panel.isVisible) {
      this.$iApi.panel.open({
        id: "metadata",
        props: { payload }
      });
    } else {
      const currentUid = panel.route.props.payload.layer.uid;
      if (currentUid !== payload?.layer?.uid || open) {
        panel.show({
          screen: "metadata-screen-content",
          props: { payload }
        });
      } else {
        panel.close();
      }
    }
  }
}

const messages = {"en":{"metadata.title":"Metadata","metadata.loading":"Loading...","metadata.error":"There was an error retrieving this resource. Please try again.","metadata.label.no.layer":"No metadata to show because the layer has been removed","metadata.xslt.Abstract":"Abstract","metadata.xslt.Scope":"Scope","metadata.xslt.hereBeScope":"here be scope","metadata.xslt.timePeriod":"Time Period","metadata.xslt.supplementalData":"Supplemental Data","metadata.xslt.contactInfo":"Contact Information","metadata.xslt.resourceProvider":"Resource Provider","metadata.xslt.custodian":"Custodian","metadata.xslt.owner":"Owner","metadata.xslt.user":"User","metadata.xslt.distributor":"Distributor","metadata.xslt.originator":"Originator","metadata.xslt.pointOfContact":"Point of Contact","metadata.xslt.principalInvestigator":"Principal Investigator","metadata.xslt.processor":"Processor","metadata.xslt.publisher":"Publisher","metadata.xslt.author":"Author","metadata.xslt.collaborator":"Collaborator","metadata.xslt.editor":"Editor","metadata.xslt.mediator":"Mediator","metadata.xslt.rightsHolder":"Rights Holder","metadata.xslt.cataloguePage":"Data Catalogue Page","metadata.xslt.metadataPage":"Raw Metadata","metadata.xslt.metadata":"Metadata"},"fr":{"metadata.title":"Métadonnées","metadata.loading":"Chargement en cours...","metadata.error":"Une erreur s'est produite lors du chargement de cette ressource. Veuillez essayer de nouveau.","metadata.label.no.layer":"Aucune métadonnée à afficher","metadata.xslt.Abstract":"Résumé","metadata.xslt.Scope":"Portée","metadata.xslt.hereBeScope":"la portée jusqu'ici","metadata.xslt.timePeriod":"Période","metadata.xslt.supplementalData":"Données supplémentaires","metadata.xslt.contactInfo":"Coordonnées","metadata.xslt.resourceProvider":"Fournisseur de la ressource","metadata.xslt.custodian":"Dépositaire","metadata.xslt.owner":"Propriétaire","metadata.xslt.user":"Utilisateur","metadata.xslt.distributor":"Distributeur","metadata.xslt.originator":"Auteur","metadata.xslt.pointOfContact":"Point de contact","metadata.xslt.principalInvestigator":"Chercheur principal","metadata.xslt.processor":"Préparateur","metadata.xslt.publisher":"Éditeur","metadata.xslt.author":"Auteur","metadata.xslt.collaborator":"Collaborateur","metadata.xslt.editor":"Éditeur","metadata.xslt.mediator":"Médiateur","metadata.xslt.rightsHolder":"Titulaire des droits","metadata.xslt.cataloguePage":"Page des données du catalogue","metadata.xslt.metadataPage":"Métadonnées brutes","metadata.xslt.metadata":"Métadonnées"}};

class MetadataFixture extends MetadataAPI {
  async added() {
    this.$iApi.panel.register(
      {
        metadata: {
          screens: {
            "metadata-screen-content": markRaw(_sfc_main)
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
      { i18n: { messages } }
    );
    this.handlePanelTeleports(["metadata"]);
    this.removed = () => {
      if (this.$iApi.fixture.exists("appbar")) {
        const appbarStore = useAppbarStore(this.$vApp.$pinia);
        appbarStore.removeButton("metadata");
      }
      const metadataStore = useMetadataStore(this.$vApp.$pinia);
      metadataStore.$reset();
      this.$iApi.panel.remove("metadata");
    };
  }
}

export { MetadataFixture as default };
