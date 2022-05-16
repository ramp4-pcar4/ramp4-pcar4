// TODO we probably need a better way to get the instance than off the window?

const search = query => {
    // types into search bar
    cy.get('.rv-geosearch-bar input').clear().type(query);
    // waits for search to update
    cy.window()
        .its('debugInstance.$vApp.$store')
        .invoke('get', 'geosearch/lastSearchVal')
        .should('eq', query);
};

// checks that center of current view is at a certain lat/long
const viewIsAt = (long, lat, delta = 0.1) => {
    // wait for zoom animation to finish
    cy.wait(1000);
    cy.window().then(window => {
        cy.wrap(
            window.debugInstance.geo.proj.projectGeometry(
                4326,
                window.debugInstance.geo.map.getExtent().center()
            )
        ).should(point => {
            expect(point.x).closeTo(long, delta);
            expect(point.y).closeTo(lat, delta);
        });
    });
};

describe('Geosearch', () => {
    before(() => {
        cy.visit('/index-e2e.html?script=geosearch');
        cy.get('.ramp-app');
    });

    describe('Keyword search', () => {
        it('finds results with keyword', () => {
            search('franklin');
            cy.contains('.rv-results-list > li', 'franklin', {
                matchCase: false
            });
        });

        it('highlights keyword', () => {
            search('terrace');
            cy.contains('.rv-results-list > li span', 'terrace', {
                matchCase: false
            })
                .should('have.class', 'font-bold')
                .and('have.class', 'text-blue-600');
        });

        it('zooms to correct location', () => {
            search('giants tomb isl');
            cy.contains(
                '.rv-results-list > li:first',
                'Giants Tomb Island'
            ).click();
            viewIsAt(-80.0, 44.91);
        });

        it('scrolls', () => {
            search('edward');
            cy.get('.rv-results-list').scrollTo('bottom');
        });
    });

    describe('NTS search', () => {
        it('finds NTS result first', () => {
            search('030M11');
            cy.get('.rv-results-list > li:first')
                .contains('National Topographic System')
                .contains('030M11', { matchCase: false });
        });

        it('zooms to correct location', () => {
            search('030M13');
            cy.get('.rv-results-list > li:first').contains('030M13').click();
            viewIsAt(-79.7, 43.8);
        });
    });

    describe('FSA search', () => {
        it('finds FSA result first', () => {
            search('m5g');
            cy.get('.rv-results-list > li:first')
                .contains('Forward Sortation Area')
                .contains('m5g', { matchCase: false });
        });
    });

    describe('Latitude/Longitude search', () => {
        it('finds lat/long result first', () => {
            search('43.6629,-79.3957');
            cy.get('.rv-results-list > li:first')
                .contains('Latitude/Longitude')
                .contains('43.6629,-79.3957');
        });

        it('zooms to correct location', () => {
            search('54.3733, -91.7417');
            cy.contains(
                '.rv-results-list > li:first',
                '54.3733,-91.7417'
            ).click();
            viewIsAt(-91.7417, 54.3733);
        });
    });

    describe('Filters', () => {
        it('filters province', () => {
            cy.get('.rv-geosearch-top-filters select')
                .eq(0)
                .select('British Columbia');
            search('qu');
            cy.get('.rv-results-list > li').each($el => {
                cy.wrap($el).contains('BC');
            });
            cy.get('.rv-geosearch-top-filters select').eq(0).select('...');
        });

        it('filters type', () => {
            cy.get('.rv-geosearch-top-filters select').eq(1).select('City');
            search('ba');
            cy.get('.rv-results-list > li').each($el => {
                cy.wrap($el).contains('City');
            });
            cy.get('.rv-geosearch-top-filters select').eq(1).select('...');
        });

        it('clears filters', () => {
            // set filters
            cy.get('.rv-geosearch-top-filters select')
                .eq(0)
                .select('Prince Edward Island');
            cy.get('.rv-geosearch-top-filters select')
                .eq(1)
                .select('Indian Reserve');
            // check that filters are selected
            cy.get('.rv-geosearch-top-filters select :selected')
                .eq(0)
                .contains('Prince Edward Island');
            cy.get('.rv-geosearch-top-filters select :selected')
                .eq(1)
                .contains('Indian Reserve');
            // clear filters
            cy.get('.rv-geosearch-icon').click();
            // filters should be gone
            cy.get('.rv-geosearch-top-filters select :selected')
                .eq(0)
                .contains('Province');
            cy.get('.rv-geosearch-top-filters select :selected')
                .eq(1)
                .contains('Type');
        });

        it('filters to visible extent', () => {
            // zoom to a smaller extent
            cy.window()
                .its('debugInstance.geo.map.esriView')
                .invoke(
                    'goTo',
                    { center: [-90, 49], zoom: 4 },
                    { animate: false },
                    4
                );
            // check checkbox
            cy.get('.rv-geosearch-bottom-filters [type="checkbox"]').check();
            search('t');
            cy.window().then(window => {
                // project extent to lat/long
                cy.wrap(
                    window.debugInstance.geo.proj.projectExtent(
                        4326,
                        window.debugInstance.geo.map.getExtent()
                    )
                ).then(extent => {
                    // check that each result is inside extent
                    window.debugInstance.$vApp.$store
                        .get('geosearch/searchResults')
                        .forEach(result => {
                            expect(result.position[0]).to.be.lessThan(
                                extent.xmax
                            );
                            expect(result.position[0]).to.be.greaterThan(
                                extent.xmin
                            );
                            expect(result.position[1]).to.be.lessThan(
                                extent.ymax
                            );
                            expect(result.position[1]).to.be.greaterThan(
                                extent.ymin
                            );
                        });
                });
            });
            cy.get('.rv-geosearch-bottom-filters [type="checkbox"]').uncheck();
        });
    });
});
