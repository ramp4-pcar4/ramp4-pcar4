import { FixtureInstance } from '@/api';

export class WizardAPI extends FixtureInstance {
    /**
     * Opens or closes the wizard fixture panel
     *
     * @memberof WizardAPI
     */
    toggleWizard(): void {
        const panel = this.$iApi.panel.get('wizard');
        !panel.isOpen
            ? this.$iApi.panel.open('wizard')
            : panel.isVisible
            ? this.$iApi.panel.close('wizard')
            : this.$iApi.panel.toggleMinimize('wizard');
    }
}
