const toggleGrid = legendName => {
    // make sure legend entry is not still loading
    cy.contains('.legend-item', legendName)
        .find('.progress-line')
        .should('not.exist');
    cy.contains('.legend-item', legendName).click();
};

describe('Grid', () => {
    before(() => {
        cy.visit('/index-e2e.html?script=grid');
        cy.get('.ramp-app');
    });

    describe('Basics', () => {
        it('has correct data', () => {
            toggleGrid('Clean Air');
            cy.window().its('rInstance.$vApp.$store')
                .invoke('get', 'layer/getLayerById', 'CleanAir')
                .invoke('getAttributes').then(attributes => {
                    // check each row
                    cy.get('.ag-center-cols-viewport .ag-row').each($row => {
                        const idx = parseInt($row.attr('row-id'));
                        for (attrib in attributes.features[idx]) {
                            // compare attribute value from layer with data in grid
                            const val = attributes.features[idx][attrib];
                            cy.wrap($row)
                                .find(`.ag-cell[col-id="${attrib}"]`)
                                .contains(val);
                        }
                    });
                });
            toggleGrid('Clean Air');
        });

        it('uses cache', () => {
            // reload page to ensure cache is empty
            cy.visit('/index-e2e.html?script=grid');

            // open grid and mark time
            toggleGrid('Carbon monoxide');
            cy.window().its('performance').invoke('mark', 'first-opened');
            // wait for grid to load
            cy.contains('.ag-root-wrapper-body', 'OBJECTID');
            cy.window().its('performance').invoke('mark', 'first-loaded');
            // close grid
            toggleGrid('Carbon monoxide');

            // open grid again (should be cached)
            toggleGrid('Carbon monoxide');
            cy.window().its('performance').invoke('mark', 'second-opened');
            cy.contains('.ag-root-wrapper-body', 'OBJECTID');
            cy.window().its('performance').invoke('mark', 'second-loaded');
            toggleGrid('Carbon monoxide');

            cy.window().its('performance').then(p => {
                // check that second grid loading is faster than first
                p.measure('no-cache', 'first-opened', 'first-loaded');
                p.measure('cache', 'second-opened', 'second-loaded');
                expect(p.getEntriesByName('cache')[0].duration).to.be.lessThan(p.getEntriesByName('no-cache')[0].duration);
            })
        });

        it('can scroll', () => {
            toggleGrid('Carbon monoxide');
            cy.get('.ag-body-viewport').scrollTo('bottom');
            cy.get('.ag-center-cols-viewport').scrollTo('right');
            toggleGrid('Carbon monoxide');
        });

        it('has aria role attributes', () => {
            toggleGrid('Clean Air');
            cy.get('.ag-root').should('have.attr', 'role', 'grid');
            cy.get('.customHeaderLabel').each($el => {
                expect($el).to.have.attr('role', 'columnheader');
            });
            cy.get('.ag-row').each($el => {
                expect($el).to.have.attr('role', 'row');
            });
            cy.get('.ag-cell-value').each($el => {
                expect($el).to.have.attr('role', 'gridcell');
            });
            toggleGrid('Clean Air');
        });
    });

    describe('Symbols and Interactive', () => {
        it('has correct icons', () => {
            toggleGrid('Carbon monoxide');
            cy.window()
                .its('rInstance.$vApp.$store')
                .invoke('get', 'layer/getLayerById', 'CarbonMonoxide').then(layer => {
                    cy.wrap(layer).invoke('getAttributes').then(attributes => {
                        // check icon of each row
                        cy.get('.ag-center-cols-viewport .ag-row').each($row => {
                            // get oid from row
                            const oid = Object.keys(attributes.oidIndex).find(key => attributes.oidIndex[key] === parseInt($row.attr('row-id')));
                            // get icon from layer and compare with icon in grid
                            cy.wrap(layer).invoke('getIcon', oid).then(icon => {
                                cy.wrap($row).find('[col-id=0] svg').then(svg => {
                                    expect(svg[0].outerHTML).to.equal(icon);
                                });
                            });
                        });
                    });
                });
            toggleGrid('Carbon monoxide');
        });

        it('opens feature details', () => {
            toggleGrid('Clean Air');
            cy.get('.ag-center-cols-container .ag-row').each($row => {
                // click details button
                cy.wrap($row).find(`[col-id="1"]`).click();
                // should open up the details panel
                cy.get('[data-cy="details-panel"]');
                // check that details panel contains row data
                cy.wrap($row).find('.ag-cell-value').each($cell => {
                    if ($cell.attr('aria-colindex') > 3) {
                        cy.contains('[data-cy="details-panel"]', $cell.text());
                    }
                });
            });
            cy.get('[data-cy="details-panel"] header button').click();
            toggleGrid('Clean Air');
        });

        it('zooms to feature', () => {
            toggleGrid('Clean Air');
            const zoom = row => {
                // click zoom button
                cy.get(`.ag-center-cols-container [row-id="${row}"] [col-id="2"]`).click();
                // get oid
                cy.get(`.ag-center-cols-container [row-id="${row}"]`).find('[col-id="OBJECTID"]').then($oid => {
                    cy.window().then(window => {
                        // wait for animation to finish
                        cy.wait(1000);
                        // get location from layer and compare with centre of visible extent
                        cy.wrap(window.rInstance.$vApp.$store.get('layer/getLayerById', 'CleanAir'))
                            .invoke('getGraphic', $oid.text(), { getGeom: true })
                            .then(g => {
                                const center = window.rInstance.map.getExtent().center();
                                expect(center.x).to.equal(g.geometry.x);
                                expect(center.y).to.equal(g.geometry.y);
                            });
                    });
                });
            }
            // check a few rows
            zoom(0);
            zoom(4);
            zoom(7);
            zoom(9);
            toggleGrid('Clean Air');
        });
    });

    describe('Header', () => {
        it('provides correct record count', () => {
            toggleGrid('Carbon monoxide');
            // scroll down to arbitrary point
            cy.get('.ag-body-viewport').scrollTo(0, 5000);

            cy.window()
                .its('rInstance.$vApp.$store')
                .invoke('get', 'layer/getLayerById', 'CarbonMonoxide')
                .invoke('getAttributes').then(attributes => {
                    // wait for status bar to update with correct value
                    cy.contains('entries shown').children().should('not.exist');
                    cy.contains('entries shown').contains('1 - 9').should('not.exist');

                    cy.contains('entries shown').invoke('text').then(txt => {
                        const [start, end, total] = txt.trim().split(/\D+/).map(Number);
                        // check total count
                        expect(attributes.features.length).to.equal(total);
                        // check visible count
                        cy.get('.ag-center-cols-container > .ag-row').should('have.length', end - start + 1);
                        // check first visible
                        cy.get(`.ag-center-cols-container > .ag-row[row-id="${start - 1}"]`);
                        // check last visible
                        cy.get(`.ag-center-cols-container > .ag-row[row-id="${end - 1}"]`);
                    });
                });
            toggleGrid('Carbon monoxide');
        });

        it('reorders columns', () => {
            toggleGrid('Clean Air');
            // first column can't reorder left
            // "Name" should be 4th col
            cy.get('.ag-center-cols-container .ag-row:first [col-id="Name"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 4);
            // click left reorder arrow, should still be 4th col
            cy.get('.ag-header-row [col-id="Name"] #keyboard_arrow_left').click({ force: true });
            cy.get('.ag-center-cols-container .ag-row:first [col-id="Name"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 4);

            // reorder right works
            // click right reorder arrow, should be 5th col
            cy.get('.ag-header-row [col-id="Name"] #keyboard_arrow_right').click({ force: true });
            cy.get('.ag-center-cols-container .ag-row:first [col-id="Name"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 5);

            // last column can't reorder right
            // "OBJECTID" should be 9th col
            cy.get('.ag-center-cols-container .ag-row:first [col-id="OBJECTID"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 9);
            // click right reorder arrow, should still be 9th col
            cy.get('.ag-header-row [col-id="OBJECTID"] #keyboard_arrow_right').click({ force: true });
            cy.get('.ag-center-cols-container .ag-row:first [col-id="OBJECTID"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 9);

            // reorder left works
            // click left reorder arrow, should be 8th col
            cy.get('.ag-header-row [col-id="OBJECTID"] #keyboard_arrow_left').click({ force: true });
            cy.get('.ag-center-cols-container .ag-row:first [col-id="OBJECTID"] .ag-cell-value')
                .should('have.attr', 'aria-colindex', 8);
            toggleGrid('Clean Air');
        });

        it('hides/shows columns from dropdown', () => {
            toggleGrid('Clean Air');
            cy.contains('Columns').click();
            // check that dropdown contains all of the column headers
            cy.get('.ag-header-cell-sortable .customHeaderLabel').each($el => {
                cy.contains('.rv-dropdown > a', $el.text())
                    .find('#done'); // should all be checked initially
            });
            // unselect "Description" and "Group"
            cy.contains('.rv-dropdown > a', "Description").click();
            cy.contains('.rv-dropdown > a', "Group").click();
            // checks should be gone
            cy.contains('.rv-dropdown > a', "Description").find('#done').should('not.exist');
            cy.contains('.rv-dropdown > a', "Group").find('#done').should('not.exist');
            // grid columns should not exist anymore
            cy.contains('.ag-header-cell-sortable .customHeaderLabel', "Description").should('not.exist');
            cy.contains('.ag-header-cell-sortable .customHeaderLabel', "Group").should('not.exist');
            // reselect "Description" and "Group"
            cy.contains('.rv-dropdown > a', "Description").click();
            cy.contains('.rv-dropdown > a', "Group").click();
            // checks and grid columns should be back
            cy.contains('.rv-dropdown > a', "Description").find('#done');
            cy.contains('.rv-dropdown > a', "Group").find('#done');
            cy.contains('.ag-header-cell-sortable .customHeaderLabel', "Description");
            cy.contains('.ag-header-cell-sortable .customHeaderLabel', "Group");
            toggleGrid('Clean Air');
        });

        it('sorts columns', () => {
            toggleGrid('Clean Air');
            // should sort ascending after clicking column header
            cy.contains('.customHeaderLabel', 'Name').click();
            cy.get('.ag-center-cols-container .ag-row').then(r => {
                // sort rows by row-index (how they appear on the screen)
                let rows = Array.from(r);
                rows.sort((a, b) => a.getAttribute('row-index') - b.getAttribute('row-index'));

                let prevName;;
                rows.forEach(el => {
                    // extract name attribute from row and check they are lexicographically ascending
                    const name = el.children[3].innerText;
                    if (prevName) {
                        expect(name >= prevName).to.be.true;
                    }
                    prevName = name;
                });
            });
            // clicking again should sort descending
            cy.contains('.customHeaderLabel', 'Name').click();
            cy.get('.ag-center-cols-container .ag-row').then(r => {
                // sort rows by row-index (how they appear on the screen)
                let rows = Array.from(r);
                rows.sort((a, b) => a.getAttribute('row-index') - b.getAttribute('row-index'));

                let prevName;;
                rows.forEach(el => {
                    // extract name attribute from row and check they are lexicographically descending
                    const name = el.children[3].innerText;
                    if (prevName) {
                        expect(name <= prevName).to.be.true;
                    }
                    prevName = name;
                });
            });
            toggleGrid('Clean Air');
        });
    });

    describe('Filters', () => {
        const clearFilters = () => {
            cy.contains('[data-cy="grid-panel"] header button', "More").click();
            cy.contains('Clear filters').click().blur();
        }

        it('clears filters', () => {
            toggleGrid('Clean Air');
            // filter "Name" and "Description"
            cy.get('[aria-rowindex="2"] [aria-colindex="4"] .rv-input').type('tree');
            cy.get('[aria-rowindex="2"] [aria-colindex="5"] .rv-input').type('poubelle');
            // should have 0 results
            cy.get('.ag-center-cols-container .ag-row').should('not.exist');

            clearFilters();
            // filter fields should be empty again
            cy.get('[aria-rowindex="2"] [aria-colindex="4"] .rv-input').should('be.empty');
            cy.get('[aria-rowindex="2"] [aria-colindex="5"] .rv-input').should('be.empty');
            // should have results back
            cy.get('.ag-center-cols-container .ag-row');
            toggleGrid('Clean Air');
        });

        it('can hide column filters row', () => {
            toggleGrid('Clean Air');
            // column filters are second row of the header
            cy.get('.ag-header-container .ag-header-row[aria-rowindex="2"]');
            // click clear filters button, header should only have one row now
            cy.contains('button', 'Filters').click();
            cy.get('.ag-header-container .ag-header-row[aria-rowindex="2"]').should('not.exist');
            // click it again, filters should be back
            cy.contains('button', 'Filters').click();
            cy.get('.ag-header-container .ag-header-row[aria-rowindex="2"]');
            toggleGrid('Clean Air');
        });

        it('filters numbers', () => {
            toggleGrid('Carbon monoxide');
            // filter "OBJECTID" field
            cy.get('[aria-rowindex="2"] [aria-colindex="4"] .rv-min').type('4848');
            cy.get('[aria-rowindex="2"] [aria-colindex="4"] .rv-max').type('4860');

            cy.get('.ag-center-cols-container .ag-cell[col-id="OBJECTID"]').each($cell => {
                cy.wrap(parseInt($cell.text().trim()))
                    .should('gte', 4848)
                    .and('lte', 4860);
            });

            clearFilters();
            toggleGrid('Carbon monoxide');
        });

        it('filters text', () => {
            toggleGrid('Carbon monoxide');
            // filter "Facility" field
            cy.get('[aria-rowindex="2"] [aria-colindex="6"] .rv-input').type('wester');

            cy.get('.ag-center-cols-container .ag-cell[col-id="GridColumn1"]').each($cell => {
                cy.wrap($cell).contains('wester', { matchCase: false });
            });

            clearFilters();
            toggleGrid('Carbon monoxide');
        });

        it('filters date', () => {
            toggleGrid('Shellfish');
            // filter "RISC_DATE" field
            cy.get('[aria-rowindex="2"] [aria-colindex="7"] .rv-input').eq(0).type('2003-05-07');
            cy.get('[aria-rowindex="2"] [aria-colindex="7"] .rv-input').eq(1).type('2004-09-25').blur();
            // need to wait for date filter
            cy.contains('entries shown').contains('filtered from');
            cy.get('.ag-center-cols-container .ag-cell[col-id="risc_date"]').each($cell => {
                // compare lexicographically since dates are yyyy-MM-dd
                const dateStr = $cell.text().trim();
                expect(dateStr >= '2003-05-07').to.be.true;
                expect(dateStr <= '2004-09-25').to.be.true;
            });

            clearFilters();
            toggleGrid('Shellfish');
        });

        it('filters multiple columns', () => {
            toggleGrid('Carbon monoxide');
            // filter "Facility" and "Company" fields
            cy.get('[aria-rowindex="2"] [aria-colindex="6"] .rv-input').type('alberta');
            cy.get('[aria-rowindex="2"] [aria-colindex="7"] .rv-input').type('ltd');

            cy.get('.ag-center-cols-container .ag-row').each($row => {
                cy.wrap($row).contains('[col-id="GridColumn1"]','alberta', { matchCase: false })
                cy.wrap($row).contains('[col-id="Company_Name"]','ltd', { matchCase: false });
            });

            clearFilters();
            toggleGrid('Carbon monoxide');
        });

        it('filters globally', () => {
            toggleGrid('Carbon monoxide');
            cy.get('[data-cy="grid-panel"] header .rv-global-search').type('dav');
            cy.get('.ag-center-cols-container .ag-row').each($row => {
                cy.wrap($row).contains('dav', { matchCase: false });
            });

            clearFilters();
            toggleGrid('Carbon monoxide');
        });
    });
});
