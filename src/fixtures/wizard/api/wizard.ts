import { FixtureInstance } from '@/api';

export class WizardAPI extends FixtureInstance {
    /**
     * Opens or closes the wizard fixture panel
     *
     * @memberof WizardAPI
     * @param open force panel open or closed
     */
    toggleWizard(open?: boolean): void {
        const panel = this.$iApi.panel.get('wizard');
        this.$iApi.panel.toggle(panel, open);
    }
}
