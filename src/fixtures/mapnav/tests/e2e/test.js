describe('Mapnav', () => {
    beforeEach(() => {
        cy.visit('/index-e2e.html?script=mapnav');
        cy.get('.ramp-app');
        cy.get('.mapnav');
    });

    it('has zoom buttons', () => {
        cy.get('.mapnav .mapnav-section .w-full').eq(0);
        cy.get('.mapnav .mapnav-section .w-full').eq(1);
    });

    it('has other buttons', () => {
        cy.get('.mapnav .mapnav-section .w-full').eq(2);
        cy.get('.mapnav .mapnav-section .w-full').eq(3);
    });

    it('zoom-in button works', () => {
        cy.window().then(window => {
            cy.get('.mapnav .mapnav-section .w-full').eq(0).click();
            cy.wait(1000);
            expect(window.debugInstance.geo.map.getZoomLevel()).to.eq(1);
        });
    });

    it('zoom-out button works', () => {
        cy.window().then(window => {
            cy.get('.mapnav .mapnav-section .w-full').eq(1).click();
            cy.wait(1000);
            expect(window.debugInstance.geo.map.getZoomLevel()).to.eq(0);
        });
    });

    it('home button works', () => {
        cy.window().then(window => {
            cy.get('.mapnav .mapnav-section .w-full').eq(3).click();
            cy.wait(1000);
            cy.wrap(window.debugInstance.geo.map.getExtent())
                .its('xmin')
                .should('eq', -16632697.354854);

            cy.wrap(window.debugInstance.geo.map.getExtent())
                .its('xmax')
                .should('eq', -5007771.626060756);

            cy.wrap(window.debugInstance.geo.map.getExtent())
                .its('ymin')
                .should('eq', 5022907.964742964);

            cy.wrap(window.debugInstance.geo.map.getExtent())
                .its('ymax')
                .should('eq', 10015875.184845109);
        });
    });
});
