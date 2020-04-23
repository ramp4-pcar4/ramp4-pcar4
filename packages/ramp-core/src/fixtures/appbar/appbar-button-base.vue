<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AppbarButtonBase extends Vue {
    // make call to panel toggle function based on provided panel ID and optional screen ID
    togglePanel(panelId: string, screenId?: string): void {
        // if a particular screen is specified (gazebo), pass that to toggle function
        screenId ? this.$iApi.panel.get(panelId).toggle(undefined, { screen: screenId }) : this.$iApi.panel.get(panelId).toggle();
    }
}
</script>
