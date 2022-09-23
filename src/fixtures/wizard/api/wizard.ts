import { FixtureInstance } from '@/api';

export class WizardAPI extends FixtureInstance {
    /**
     * Opens or closes the wizard fixture panel
     *
     * @memberof WizardAPI
     */
    toggleWizard(open?: boolean): void {
        const panel = this.$iApi.panel.get('wizard');
        if (open === undefined) {
            this.$iApi.panel.toggle(panel);
        } else if (open && !panel.isOpen) {
            this.$iApi.panel.open(panel);
        } else if (!open && panel.isOpen) {
            this.$iApi.panel.close(panel);
        }
    }
}
