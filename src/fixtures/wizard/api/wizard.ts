import { FixtureInstance } from '@/api';

export class WizardAPI extends FixtureInstance {
    /**
     * Opens the wizard fixture panel
     *
     * @memberof WizardAPI
     */
    openWizard(): void {
        const panel = this.$iApi.panel.get('wizard');

        if (!panel.isOpen) {
            this.$iApi.panel.open({
                id: 'wizard',
                screen: 'wizard-screen'
            });
        }
    }
}
