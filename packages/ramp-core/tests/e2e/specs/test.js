// https://docs.cypress.io/api/introduction/api.html

describe('RAMP', () => {
    beforeEach(function() {
        cy.visit('/');
        cy.get('.ramp-app');
    });

    it('has global and instance APIs', () => {
        cy.window().then(window => {
            expect(window.RAMP);
            expect(window.rInstance);
        });
    });

    it('loads fixtures', () => {
        cy.window().then(window => {
            expect(window.rInstance.fixture.get('appbar'));
        });
    });
});
