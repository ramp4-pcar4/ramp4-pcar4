// GEO API TESTS
describe('GeoAPI', () => {
    
    before(() => {
        // Since most tests are in backend, can just use grid starter script
        cy.visit('/index-e2e.html?script=grid');
        cy.get('.ramp-app');
    });
    
    // SharedUtils class tests
    describe('SharedUtils', () => {

        it('parseUrlIndex works', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                expect(sharedUtils.parseUrlIndex('https://www.agr.gc.ca/atlas/rest/services/mapservices/aafc_watershed_2013/MapServer/1')).to.deep.equal({ 
                    'rootUrl': 'https://www.agr.gc.ca/atlas/rest/services/mapservices/aafc_watershed_2013/MapServer',
                    'index': 1
                });
            });
        });
        
        it('parseUrlIndex works with trailing slash', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                expect(sharedUtils.parseUrlIndex('https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer/5/')).to.deep.equal({ 
                    'rootUrl': 'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer',
                    'index': 5
                });
            });
        });

        it('parseUrlIndex invalid', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                // Expect the default result
                expect(sharedUtils.parseUrlIndex('https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer')).to.deep.equal({ 
                    'rootUrl': 'https://www.agr.gc.ca/atlas/rest/services/mapservices/crop_spatial_density/MapServer',
                    'index': 0
                });
            });
        });

        it('generateUUID uuid is valid format', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                var i;
                // Test 100 uuids
                for (i = 0; i < 100; i++) {
                    cy.wrap({'uuid': sharedUtils.generateUUID()}).its('uuid').should('match', /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i)
                }
            });
        });

        it('generateUUID no uuid collisions', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                var uuids = [];
                var i;
                // Generate 10000 uuids and check for duplicates
                // 10000 is good enough because a uuid will be generated only if the client did not provide the layer an id
                // If there are no collisions in these 10000 uuids, then its a pretty good uuid generator for our purposes
                for (i = 0; i < 10000; i++) {
                    uuids.push(sharedUtils.generateUUID());
                }
                let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
                let duplicates = findDuplicates(uuids);
                expect(duplicates).to.be.empty;
            });
        });


        it('convertImageToCanvas works with data url', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAz5JREFUSInF1luIVVUYwPHfMHIWtSvL4jAHDM0mjkJgD9E8lAn6oPSQmWQTZihEFvbSRSySnqKgF6NezIJAwnroJkRSDxZ0PWIQ2O3UiZgy9zCiBrWzNXI6Payt6Vx0Jo71wYLN2mt//+++1wz/scz434EDAwOdSqXSFeWjo6MajUbPpMBardZpNBpdgZ2qM8/zk9CTwHq93mk2m12FQZ7n+vv7O61Wq+c0YLVaNV1gQJzCuVqtptVqOQ04HenHTYGL8A3ejlMDTxtYx9VYHRjI6MWv5f5nkS9wpBvAOrYEFmf0SOvFgq+wEfdmbMiSl1sKdp3B47MCZ+HBwKKM3QU55uL5mJ4XBPYXHMUy3IPvJG//FfD2EtYoeDmm3PVhMPBG5IXSmwLtwJqMNTgaGToT8Px228bAcbxWxuPxwIqMP6X9xwLv4N3I4sDTgfckQyJGcKhgZcZS3B/5ZDJg7O31cWRtYHNIeVqe8UPB76jiuZiUXoZXIzXcEngosC3yVuRL3IjVGQ/glzgJMLTbjuHZyKrAXbgQM3FACt0NIbXEH8jwQbk/uwzpESmveyOXYknGdTjUbo8HztA2GLgcb0YOBCrYHFM4NwQO4tHIz9K59YFHAs+M8SJiL1ZIxhyeyMOit2J7ZHlgXUgHz8PCwLXKyoupiC7A19gRWYibAz+OaYW5Jfgo/poIOHN01NrA/shWCboMg9ghebk+sAffRxYFloYE3RZTSE/IEunbw0Uy8uLe3vHA3yoV+yJ3B/ZhZ0yj6/qMh9Eq2BT/6a9dkVV4IrA98gpWBu7DvIxjBU+V5xdN5OFxfIifykq9M6RQdKQRtlP6eBbml3mZF7gEt5X5vhWzMz4qUru8bryMa/wWnoxcgyvxLdZl3IFKSDlbKPVmX5aisABXSLndVvBSTBU70XibcNJENMoVIqNYiU1ZaomDRQJ+XvB+ZH5IUdgX+XQS0BmBY+FbYyrzqyTL90aGT3m/e6r/pqkATyjdgz3TUHxWYJ7nQghi7ILWUySEIM/z8cBWq9UzZ86czvDwcNegIQR9fX1O3GdOA8LQ0FBPvV7vVKvVrgBHRkY0m83Jr4nQbDZ7zsXtbVLguZa/AdMNKbe5EEnGAAAAAElFTkSuQmCC';
                cy.wrap(null).then(() => {
                    return sharedUtils.convertImageToCanvas(url).then((canvas) => {
                        expect(canvas.width).to.eq(28);
                        expect(canvas.height).to.eq(28);
                    })
                })
            });
        });

        /**
         * THIS TEST WILL FAIL DUE TO CORS POLICY:
         *  > Error: Access to image at 'https://via.placeholder.com/150' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
         * TODO: This can be uncommented once CORS is fixed
         */
        // it('convertImageToCanvas works with cross url', () => {
        //     cy.window().then(window => {
        //         const sharedUtils = window.rInstance.geo.utils.shared;
        //         const url = 'https://via.placeholder.com/150';
        //         cy.wrap(null).then(() => {
        //             return sharedUtils.convertImageToCanvas(url).then((canvas) => {
        //                 expect(canvas.width).to.eq(150);
        //                 expect(canvas.height).to.eq(150);
        //             })
        //         })
        //     });
        // });

        // Need this extra function because convertImagetoDataURL is async
        function resolveDataURL(sharedUtils, url) {
            return new Cypress.Promise((resolve, reject) => {
                resolve(sharedUtils.convertImagetoDataURL(url));
            })
        }

        it('convertImagetoDataURL works with data url', () => {
            cy.window().then(window => {
                const sharedUtils = window.rInstance.geo.utils.shared;
                const url = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAMCAYAAAC9QufkAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAUJJREFUKJFjYcADIgwZFq84z1DFwMDwGJs8Cy6NpmrcdtUuAjb6Yk/bKncyxJKimSlKlaFEXZxNgUlfmmnz458Wx669OUGUZl89htRIU04rBgYGBlUxNrkw5Q+Vx64x+BOjmT9MiztCiIdXGCYQaixmuf/u/aiN1xiW4dWcZMhdGWAgZoksJsrDIBqgzR2/8drXtQwMDD9xaVaLNON0YmdhYEc3NMhQwGrnHYa8Fee/dmPVXOAgUmOnwmuKxSsMnGxsPBEGDF4rzjMsZGBgeIWiWZGBwSvVjN2UkRGbVghw1xSzTjF8VTrn/NdSZM2sSZ7cmapibBq4tTIwMDMxsCZac1pvfyWg+/Tp08ssDAwMDBbcDEW6kpx2F598xqeXgYGBgYGNhcHSRvhp78qnDG4sDAwMDCe+MnQGzHvTSVAnGgAAdRJMqBlhLeEAAAAASUVORK5CYII=';
                cy.wrap(null).then(() => {
                    return resolveDataURL(sharedUtils, url).then((dUrl) => {
                        expect(dUrl).to.eq(url)
                    })
                })
            });
        });

        /**
         * THIS TEST WILL FAIL DUE TO CORS POLICY:
         *  > Error: Access to image at 'https://via.placeholder.com/150' from origin 'http://localhost:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource
         * TODO: This can be uncommented once CORS is fixed
         */
        // it('convertImagetoDataURL works with cross url', () => {
        //     cy.window().then(window => {
        //         const sharedUtils = window.rInstance.geo.utils.shared;
        //         const url = 'https://via.placeholder.com/150';
        //         const expectedDataURL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpaqqqq3t7fFxcW+vr6xsbGjo6OcnJyLKnDGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABAElEQVRoge3SMW+DMBiE4YsxJqMJtHOTITPeOsLQnaodGImEUMZEkZhRUqn92f0MaTubtfeMh/QGHANEREREREREREREtIJJ0xbH299kp8l8FaGtLdTQ19HjofxZlJ0m1+eBKZcikd9PWtXC5DoDotRO04B9YOvFIXmXLy2jEbiqE6Df7DTleA5socLqvEFVxtJyrpZFWz/pHM2CVte0lS8g2eDe6prOyqPglhzROL+Xye4tmT4WvRcQ2/m81p+/rdguOi8Hc5L/8Qk4vhZzy08DduGt9eVQyP2qoTM1zi0/uf4hvBWf5c77e69Gf798y08L7j0RERERERERERH9P99ZpSVRivB/rgAAAABJRU5ErkJggg==';

        //         cy.wrap(null).then(() => {
        //             return resolveDataURL(sharedUtils, url).then((dUrl) => {
        //                 expect(dUrl).to.eq(expectedDataURL)
        //             })
        //         })
        //     });
        // });

        // TODO: Add more tests for SharedUtils through adding layers through the wizard
    
    });
});
