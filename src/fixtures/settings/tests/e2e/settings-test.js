describe('Settings', () => {
    before(() => {
        cy.visit('/index-e2e.html');
        cy.get('.ramp-app');
    });

    it('has correct initial state', () => {
        cy.window()
            .its('rInstance.$vApp.$store')
            .invoke('get', 'layer/getLayerById', 'CleanAir')
            .as('layer');

        cy.get('@layer').then(layer => {
            // make layer invisible initially
            cy.wrap(layer).invoke('setVisibility', false);
            // open settings panel
            cy.window()
                .its('rInstance.fixture')
                .invoke('get', 'settings')
                .invoke('toggleSettings', layer.uid);
        });

        // wait for settings panel to open
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer').find(
            '.vue-js-switch'
        );

        // layer visibility toggle should be off
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer')
            .find('.vue-js-switch')
            .should('not.have.class', 'toggled');

        // close settings
        cy.get('[data-cy="settings"] header button[content="Close"]').click();

        // wait for panel to close
        cy.get('[data-cy="settings"]').should('not.exist');

        cy.get('@layer').then(layer => {
            // make layer visible and set opacity
            cy.wrap(layer).invoke('setVisibility', true);
            cy.wrap(layer).invoke('setOpacity', 0.43);
            // open settings panel again
            cy.window()
                .its('rInstance.fixture')
                .invoke('get', 'settings')
                .invoke('toggleSettings', layer.uid);
        });

        // layer visibility toggle should be on
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer')
            .find('.vue-js-switch')
            .should('have.class', 'toggled');

        // opacity should be correct
        cy.get('.vue-slider-dot')
            .should('have.attr', 'aria-valuetext')
            .and('equal', '43');

        // close settings
        cy.get('[data-cy="settings"] header button[content="Close"]').click();
        cy.get('[data-cy="settings"]').should('not.exist');
    });

    it('changes layer state', () => {
        cy.window()
            .its('rInstance.$vApp.$store')
            .invoke('get', 'layer/getLayerById', 'CleanAir')
            .as('layer');

        cy.get('@layer').then(layer => {
            // make layer invisible  and full opacity initially
            cy.wrap(layer).invoke('setVisibility', false);
            cy.wrap(layer).invoke('setOpacity', 1);

            // open settings panel
            cy.window()
                .its('rInstance.fixture')
                .invoke('get', 'settings')
                .invoke('toggleSettings', layer.uid);
        });

        // toggle layer visibility on
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer')
            .find('.vue-js-switch')
            .click({ force: true });
        // layer should be visible
        cy.get('@layer').invoke('getVisibility').should('equal', true);

        // decrease opacity by 32%
        cy.get('.vue-slider-dot-handle').click({ force: true });
        cy.get('.vue-slider-dot-handle').type('{leftarrow}'.repeat(32));
        // layer opacity should change
        cy.get('@layer').invoke('getOpacity').should('equal', 0.68);

        // close settings
        cy.get('[data-cy="settings"] header button[content="Close"]').click();
        cy.get('[data-cy="settings"]').should('not.exist');
    });

    it('reacts to layer state', () => {
        cy.window()
            .its('rInstance.$vApp.$store')
            .invoke('get', 'layer/getLayerById', 'CleanAir')
            .as('layer');

        cy.get('@layer').then(layer => {
            // make layer invisible  and full opacity initially
            cy.wrap(layer).invoke('setVisibility', false);
            cy.wrap(layer).invoke('setOpacity', 1);

            // open settings panel
            cy.window()
                .its('rInstance.fixture')
                .invoke('get', 'settings')
                .invoke('toggleSettings', layer.uid);
        });

        // wait for settings panel to open
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer').find(
            '.vue-js-switch'
        );

        // toggle visibility and set opacity
        cy.get('@layer').invoke('setVisibility', true);
        cy.get('@layer').invoke('setOpacity', 0.43);

        // layer visibility toggle should be on
        cy.contains('[data-cy="settings"] .rv-subsection', 'Show layer')
            .find('.vue-js-switch')
            .should('have.class', 'toggled');

        // opacity should be correct
        // uncomment when this is reactive
        // cy.get('.vue-slider-dot')
        //     .should('have.attr', 'aria-valuetext')
        //     .and('equal', '43');

        // close settings
        cy.get('[data-cy="settings"] header button[content="Close"]').click();
        cy.get('[data-cy="settings"]').should('not.exist');
    });
});
