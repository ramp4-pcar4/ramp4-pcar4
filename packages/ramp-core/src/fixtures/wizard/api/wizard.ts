import { FixtureInstance } from '@/api';

export class WizardAPI extends FixtureInstance {
    /**
     * Opens the wizard fixture panel
     *
     * @memberof WizardAPI
     */
    openWizard(): void {
        const panel = this.$iApi.panel.get('wizard-panel');

        if (!panel.isOpen) {
            this.$iApi.panel.open({
                id: 'wizard-panel',
                screen: 'wizard-screen'
            });
        }
    }
}
